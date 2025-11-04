<template>
  <div>
    <LoadingSpinner :visible="isLoading" message="Restoring assessment..." subtext="Loading saved result..." />
    <div class="container" v-if="resultsStore.currentResults">
    <div class="screen active">
      <div class="results-header">
          <h1>Assessment Results</h1>
            <div class="results-header-left">
              <RouterLink
                class="difficulty-badge-link"
                :to="{ name: 'results', query: { expand: String(difficultyRaw) } }"
                @click.stop
                :title="`View ${displayDifficulty} results`"
                :aria-label="`View ${displayDifficulty} results`"
              >
                <DifficultyBadge :difficulty="difficultyRaw" :label="displayDifficulty" />
              </RouterLink>
            </div>
            <h2 class="assessment-name">{{ assessmentLabel }}</h2>
        <div class="score-display">
          <div class="score-circle" :class="getScoreBadgeClass(resultsStore.currentResults.percentage)">
            <span class="score-percentage">{{ resultsStore.currentResults.percentage }}%</span>
          </div>
          <div class="score-details">
            <p>
              You scored
              <span class="highlight">{{ resultsStore.currentResults.correct }}</span>
              out of
              <span class="highlight">{{ resultsStore.currentResults.total }}</span>
            </p>
            <p class="time-taken">
              Time taken: {{ resultsStore.currentResults.timeTaken }}
              <span v-if="savedResultDate">&nbsp;•&nbsp;Taken: {{ formatDate(savedResultDate) }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="performance-breakdown">
        <h3>Performance by Topic</h3>
        <div class="topic-breakdown">
          <div
            v-for="(scores, topic) in resultsStore.currentResults.topicBreakdown"
            :key="topic"
            class="topic-item"
          >
            <span class="topic-name">{{ topic }}</span>
            <span class="topic-score">
              {{ scores.correct }}/{{ scores.total }}
              ({{ getPercentage(scores.correct, scores.total) }}%)
            </span>
          </div>
        </div>
      </div>

      <div class="question-review">
        <h3>Question Review</h3>
        <div class="review-container">
          <div
            v-for="(review, index) in resultsStore.currentResults.questionReview"
            :key="index"
            class="review-item"
          >
            <div class="review-question">
              <strong>Question {{ index + 1 }}:</strong>
              <span v-html="formatQuestion(review.question)"></span>
            </div>
            <div class="review-answer user">
              <strong>Your answer:</strong>
              {{ getUserAnswerText(review) }}
            </div>
            <div class="review-answer" :class="review.isCorrect ? 'correct' : 'incorrect'">
              <strong>Correct answer:</strong>
              {{ review.correctAnswer }}: {{ review.options[review.correctAnswer] }}
            </div>
            <div v-if="review.explanation" class="review-explanation">
              <strong>Explanation:</strong>
              <p v-html="formatQuestion(review.explanation)"></p>

              <div class="explanation-topics" v-if="(review as any).topic">
                <strong class="explanation-topics-heading">
                  {{ Object.keys(getTopicItemsForReview(review)).length === 1 ? 'Topic:' : 'Topics:' }}
                </strong>

                <!-- TopicTags now renders as a paragraph (so the tags are wrapped in a <p>) -->
                <TopicTags
                  :items="getTopicItemsForReview(review)"
                  :getTopicLink="getTopicLink"
                  :getTopicClass="getTopicClass"
                  :keyPrefix="String(savedResultDate || index)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="results-actions">
        <button class="action-btn" @click="retakeAssessment">Retake Assessment</button>
        <button class="action-btn" @click="newAssessment">Choose New Assessment</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import TopicTags from '@/components/TopicTags.vue';
import DifficultyBadge from '@/components/DifficultyBadge.vue';
import { useRouter, useRoute } from 'vue-router';
import { useAssessmentStore } from '@/stores/assessmentStore';
import { useResultsStore } from '@/stores/resultsStore';
import { formatTextWithCode } from '@/utils/formatUtils';
import { formatDate } from '@/utils/dateUtils';
import { getScoreBadgeClass } from '@/utils/resultsUtils';
import { getTopicClass as utilGetTopicClass, findTopicMdnLink } from '@/utils/topicUtils';
import { formatAssessmentLabel } from '@/utils/assessmentUtils';
import type { QuestionReview } from '@/models';

const router = useRouter();
const route = useRoute();
const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();
const savedResultDate = ref<string | null>( null );
// Keep a reference to the saved result record when restoring so topicLinks
// persisted on the record can be used to resolve MDN anchors.
const savedResultRecord = ref<any>( null );
const isLoading = ref(false);

// Display label for the assessment shown on this results page. Prefer
// any persisted title on the saved result record, otherwise derive from
// the currently loaded assessment metadata.
const assessmentLabel = computed(() => {
  const id = savedResultRecord.value?.assessmentId ?? (assessmentStore.currentAssessment as any)?.metadata?.id ?? null;
  const title = savedResultRecord.value?.assessmentTitle ?? (assessmentStore.currentAssessment as any)?.metadata?.title ?? null;
  return formatAssessmentLabel(id, title);
});

const difficultyRaw = computed(() => (savedResultRecord.value && savedResultRecord.value.difficulty) || assessmentStore.currentDifficulty || 'easy');
const displayDifficulty = computed(() => {
  const d = String(difficultyRaw.value || 'easy');
  return d.charAt(0).toUpperCase() + d.slice(1);
});

function formatQuestion(text: string): string {
  return formatTextWithCode(text);
}

function getPercentage(correct: number, total: number): number {
  return Math.round((correct / total) * 100);
}

function getUserAnswerText(review: QuestionReview): string {
  if (!review.userAnswer) {
    return 'No answer selected';
  }
  return `${review.userAnswer}: ${review.options[review.userAnswer]}`;
}

function getTopicClass(correct: number, total: number): string {
  return utilGetTopicClass(correct, total);
}

// Resolve MDN link for a topic using persisted topicLinks on the saved
// result record first, then the assessment metadata (same behaviour as
// AssessmentResultItem.getTopicLink).
function getTopicLink(topicName: string): string | undefined {
  try {
    if (savedResultRecord.value && savedResultRecord.value.topicLinks && savedResultRecord.value.topicLinks[topicName]) {
      return savedResultRecord.value.topicLinks[topicName];
    }

    // Try to find metadata for the assessment
    let meta: any = assessmentStore.getAssessmentMetadata ? assessmentStore.getAssessmentMetadata((savedResultRecord.value && savedResultRecord.value.difficulty) || assessmentStore.currentDifficulty, (savedResultRecord.value && savedResultRecord.value.assessmentId) || assessmentStore.currentAssessment?.metadata?.id) : null;

    if (!meta && assessmentStore.currentAssessment) {
      const cm = (assessmentStore.currentAssessment as any).metadata;
      if (cm && (String(cm.id) === String((savedResultRecord.value && savedResultRecord.value.assessmentId)) || String(cm.assessmentId) === String((savedResultRecord.value && savedResultRecord.value.assessmentId)))) {
        meta = cm;
      }
    }

    if (!meta) {
      try {
        const list = (assessmentStore as any).availableAssessments?.[(savedResultRecord.value && savedResultRecord.value.difficulty) || assessmentStore.currentDifficulty] || [];
        const found = list.find((a: any) => String(a.id) === String((savedResultRecord.value && savedResultRecord.value.assessmentId)) || String(a.assessmentId) === String((savedResultRecord.value && savedResultRecord.value.assessmentId)));
        if (found) meta = (found as any).metadata || found;
      } catch (e) {
        // ignore
      }
    }

    // Build metas array and delegate to shared util
    const metas: any[] = [];
    if (meta) metas.push(meta);
    try {
      const list = (assessmentStore as any).availableAssessments?.[(savedResultRecord.value && savedResultRecord.value.difficulty) || assessmentStore.currentDifficulty] || [];
      const found = list.find((a: any) => String(a.id) === String((savedResultRecord.value && savedResultRecord.value.assessmentId)) || String(a.assessmentId) === String((savedResultRecord.value && savedResultRecord.value.assessmentId)));
      if (found) metas.push((found as any).metadata || found);
    } catch (e) {
      // ignore
    }

    return findTopicMdnLink(topicName, savedResultRecord.value && savedResultRecord.value.topicLinks ? savedResultRecord.value.topicLinks : undefined, metas);
  } catch (e) {
    return undefined;
  }
}

function getTopicItemsForReview(review: QuestionReview) {
  const tb = (resultsStore.currentResults && resultsStore.currentResults.topicBreakdown) || {};
  const name = (review as any).topic;
  if (!name) return [] as string[];
  const scores = tb[name] || { correct: 0, total: 0 };
  return { [name]: { correct: scores.correct ?? 0, total: scores.total ?? 0 } };
}

function retakeAssessment() {
  if (assessmentStore.currentAssessment) {
    assessmentStore.retakeAssessment();
    router.push({
      name: 'assessment',
      params: {
        difficulty: assessmentStore.currentDifficulty,
        id: assessmentStore.currentAssessment.metadata.id || 'test1'
      }
    });
  }
}

function newAssessment() {
  assessmentStore.resetAssessment();
  resultsStore.clearCurrentResults();
  router.push({ name: 'home' });
}


// Search and restore a saved result record by id string. Declared at
// top-level so we can call it from onMounted and also watch for route
// param changes (when user navigates to a different resultRecordId without
// a full component remount).
const findAndRestore = async (idStr?: string) => {
  if (!idStr) return;
  const id = Number(idStr);
  if (Number.isNaN(id)) return;
  // show spinner while we attempt restoration
  isLoading.value = true;
  try {

  // Search resultsHistory for the matching record
  const history = resultsStore.resultsHistory || {};
  let found: { rec: any; difficulty: string; assessmentId: string } | null = null;

  for (const difficulty of Object.keys(history)) {
    const assessmentsMap = history[difficulty] || {};
    for (const aid of Object.keys(assessmentsMap)) {
      const arr = assessmentsMap[aid] || [];
      for (const rec of arr) {
        if (rec && rec.resultRecordId === id) {
          found = { rec, difficulty, assessmentId: aid };
          break;
        }
      }
      if (found) break;
    }
    if (found) break;
  }

    if (!found) return;

  // Expose saved date for display
  savedResultDate.value = found.rec.date || null;
  savedResultRecord.value = found.rec || null;

  // Attempt to reconstruct using the saved wrongAnswers and the original
  // assessment questions (load assessment if necessary). Unlike the previous
  // implementation, always reconstruct the saved record when a resultRecordId
  // is provided — do not skip when transient currentResults already exist.
  try {
    await assessmentStore.loadAssessment(found.difficulty, found.rec.assessmentId);
  } catch (e) {
    console.debug('Could not load assessment for reconstruction', e);
  }

  const assessment = assessmentStore.currentAssessment;
  if (assessment && Array.isArray(assessment.questions)) {
    const wrongs: { questionNr: number; answer: string }[] = found.rec.wrongAnswers || [];

    // Use the question index (zero-based) when mapping topics so the
    // reconstruction matches the calculation performed in
    // AssessmentView.calculateResults (which used index % topics.length).

    const questionReview = assessment.questions.map((q: any, idx: number) => {
      const wrong = wrongs.find(w => Number(w.questionNr) === Number(q.id));
      const userAnswer = wrong ? String(wrong.answer) : String(q.correct);
      const isCorrect = userAnswer === q.correct;
      // Determine the topic for this question: prefer an explicit per-question
      // topic when present on the question object (some assessments provide
      // question.topic.topics), otherwise fall back to rotating the
      // assessment metadata topics (index % topics.length).
      const topics = (assessment.metadata && assessment.metadata.topics) || ['General'];
      const perQuestion = (q && (q.topic && (Array.isArray(q.topic.topics) ? q.topic.topics[0] : q.topic)));
      const questionTopic = perQuestion || (topics.length > 0 ? topics[idx % topics.length] || topics[0] : 'General');

      // (no debug logging)

      return {
        question: q.question,
        userAnswer,
        correctAnswer: q.correct,
        isCorrect,
        topic: questionTopic,
        explanation: q.explanation,
        options: q.options
      };
    });

    const built = {
      correct: found.rec.correct,
      total: found.rec.total,
      percentage: found.rec.percentage,
      topicBreakdown: found.rec.topicBreakdown || {},
      questionReview,
      timeTaken: found.rec.timeTaken
    };

    resultsStore.setCurrentResults(built);
    } else {
    // If we cannot reconstruct question-level review (missing assessment),
    // still set a minimal currentResults so the UI can show the saved summary.
    resultsStore.setCurrentResults({
      correct: found.rec.correct,
      total: found.rec.total,
      percentage: found.rec.percentage,
      topicBreakdown: found.rec.topicBreakdown || {},
      questionReview: [] as QuestionReview[],
      timeTaken: found.rec.timeTaken
    });
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  // Prefer params for the resultRecordId; router now uses a path param.
  const idParam = (route.params as any).resultRecordId as string | undefined;
  findAndRestore(idParam).then(() => {
    if (!resultsStore.currentResults && !idParam) {
      router.push({ name: 'home' });
    }
  });
});

// Watch route params so navigating to another `resultRecordId` updates the view
// without a full remount.
watch(
  () => (route.params as any).resultRecordId as string | undefined,
  (newVal, oldVal) => {
    if (newVal && newVal !== oldVal) {
      findAndRestore(newVal);
    }
  }
);
</script>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.screen {
  display: none;

  &.active {
    display: block;
  }
}

.results-header {
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #2c3e50;
  }
  .assessment-name {
    font-size: 1.75rem;
    font-weight: 600;
    color: #2c3e50;
    margin-top: $spacing-lg;
    margin-bottom: 4px;
  }
}

.results-header-left {
  display: inline-block;
}

.difficulty-badge-link {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.difficulty-badge-link:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
  border-radius: 6px;
}

.score-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
}

.score-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 8px solid;
  
  &.excellent {
    border-color: #2ecc71;
    background: #e8f8f5;
  }

  &.good {
    border-color: #3498db;
    background: #ebf5fb;
  }

  &.fair {
    border-color: #f39c12;
    background: #fef5e7;
  }

  &.needs-improvement {
    border-color: #e74c3c;
    background: #fadbd8;
  }
}

.score-percentage {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
}

.score-details {
  text-align: left;

  p {
    margin: 8px 0;
    font-size: 1.2rem;
    color: #2c3e50;
  }

  .highlight {
    font-weight: 700;
    color: #3498db;
  }

  .time-taken {
    color: #7f8c8d;
    font-size: 1rem;
  }
}

.performance-breakdown {
  margin: 40px 0;
  padding: 24px;
  /* use theme variables so this surface respects light/dark themes */
  background: var(--bg-secondary);
  border-radius: 12px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: var(--text-primary);
  }
}

.topic-breakdown {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.topic-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
}

/* Dark-mode override: slightly translucent surface for topic items */
:root[data-theme="dark"] .topic-item {
  background: rgba(255, 255, 255, 0.03) !important;
}

.topic-name {
  font-weight: 500;
  color: #2c3e50;
}

.topic-score {
  font-weight: 600;
  color: #3498db;
}

.question-review {
  margin: 40px 0;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #2c3e50;
  }
}

.review-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.review-item {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.review-question {
  margin-bottom: 16px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2c3e50;

  strong {
    display: block;
    margin-bottom: 8px;
  }
}

.review-answer {
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 6px;
  font-size: 1rem;

  &.user {
    background: #f8f9fa;
    color: #2c3e50;
  }

  &.correct {
    background: #e8f8f5;
    color: #27ae60;
    border-left: 4px solid #2ecc71;
  }

  &.incorrect {
    background: #fadbd8;
    color: #c0392b;
    border-left: 4px solid #e74c3c;
  }

  strong {
    margin-right: 8px;
  }
}

.review-explanation {
  margin-top: 12px;
  padding: 12px 16px;
  background: #ebf5fb;
  border-left: 4px solid #3498db;
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #34495e;

  strong {
    display: block;
    margin-bottom: 8px;
    color: #2c3e50;
  }
}

.results-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.action-btn {
  padding: 14px 32px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  }

  &:first-child {
    background: #2ecc71;

    &:hover {
      background: #27ae60;
    }
  }
}
</style>

<!-- Non-scoped dark-mode overrides so headings in the explanation block stand out -->
<style lang="scss">
:root[data-theme="dark"] {
  .review-explanation {
    strong {
      color: #93c5fd !important; /* lighter blue to increase contrast */
    }

    .explanation-topics-heading {
      color: #93c5fd !important;
      display: inline-block;
      margin-right: 8px;
      font-weight: 700;
    }
  }
}
</style>
