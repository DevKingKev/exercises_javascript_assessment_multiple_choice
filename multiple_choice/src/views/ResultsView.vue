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
          <div class="assessment-title-row">
            <NumberBubble :value="displayNumber" :size="44" aria-hidden />
            <h2 class="assessment-name">{{ assessmentLabel }}</h2>
          </div>
      
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
            </p>
            <p class="test-when-taken">
              <span v-if="savedResultDate">Test taken on: {{ formatDate(savedResultDate) }}</span>
            </p>
          </div>
        </div>
      </div>
      <TopicPerformanceBreakdown
        :items="resultsStore.currentResults.topicBreakdown"
        :assessment="assessmentStore.currentAssessment"
      />
      <div class="question-review">
        <h3>Question Review</h3>
        <div class="review-container">
          <div v-if="assessmentLoadFailed" class="load-failed" role="status" aria-live="polite">
            <span class="load--failed-icon" aria-hidden="true">⚠️</span>
            <span class="load--failed-text">Failed to load assessment</span>
          </div>
          <div v-else>
            <div v-if="canShowQuestionReview">
              <div
                v-for="(review, index) in resultsStore.currentResults.questionReview"
                :key="getReviewKey(review, index)"
                class="review-item"
              >
                <QuestionReviewComponent
                  :review="review"
                  :index="index"
                  :savedResultDate="savedResultDate"
                  :formatQuestion="formatQuestion"
                  :getUserAnswerText="getUserAnswerText"
                  :topicItems="(getTopicItemsForReview(review) as Record<string, { correct: number; total: number }>)"
                  :getTopicLink="getTopicLink"
                  :getTopicClass="getTopicClass"
                />
              </div>
            </div>
            <div v-else class="review-loading" role="status" aria-live="polite">
              <em>Loading question review…</em>
            </div>
          </div>
        </div>
      </div>

      <div class="results-actions">
        <button class="action-btn" @click="retakeAssessment">Retake Assessment</button>
        <button class="action-btn" @click="newAssessment">Choose New Assessment</button>
        <button class="action-btn" @click="goToResults">Go to Results</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import QuestionReviewComponent from '@/components/QuestionReview.vue';
import DifficultyBadge from '@/components/DifficultyBadge.vue';
import NumberBubble from '@/components/NumberBubble.vue';
import { extractAssessmentNumber } from '@/utils/assessmentUtils';
import TopicPerformanceBreakdown from '@/components/TopicPerformanceBreakdown.vue';
import { useRouter, useRoute } from 'vue-router';
import { useAssessmentStore } from '@/stores/assessmentStore';
import { useResultsStore } from '@/stores/resultsStore';
import { formatTextWithCode } from '@/utils/formatUtils';
import { formatDate } from '@/utils/dateUtils';
import { getScoreBadgeClass } from '@/utils/resultsUtils';
import { getTopicClass as utilGetTopicClass, resolveTopicRefLink } from '@/utils/topicUtils';
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
const assessmentLoadFailed = ref(false);

// Computed guards to ensure the Question Review is only rendered when the
// currently loaded assessment matches the saved result's assessment id.
const currentAssessmentId = computed(() => (assessmentStore.currentAssessment as any)?.metadata?.id ?? null);
const savedAssessmentId = computed(() => savedResultRecord.value?.assessmentId ?? null);

// Normalize various legacy id forms to a canonical comparison form so the
// Question Review UI does not remain stuck when saved results use numeric or
// legacy 'testN' ids while the loaded assessment metadata uses the
// canonical filename-style id (e.g. 'assessment3').
function normalizeIdForComparison(id: string | number | null | undefined) {
  if (id === null || id === undefined) return null;
  const s = String(id).trim();
  if (!s) return null;
  // Pure numeric -> assessment{n}
  const digits = /^\d+$/.exec(s);
  if (digits) return `assessment${digits[0]}`;
  // testN or test-N -> assessment{N}
  const testMatch = /^test[-_]?([0-9]+)$/i.exec(s);
  if (testMatch) return `assessment${testMatch[1]}`;
  // assessmentN or assessment-N -> normalized assessment{N}
  const assessMatch = /^assessment[-_]?([0-9]+)$/i.exec(s);
  if (assessMatch) return `assessment${assessMatch[1]}`;
  // otherwise return string as-is
  return s;
}

const canShowQuestionReview = computed(() => {
  // If there are no current results, nothing to show
  if (!resultsStore.currentResults) return false;
  // If we don't have a saved assessment id (unlikely for restored results), allow rendering
  if (!savedAssessmentId.value) return true;
  // Compare normalized forms so '3', 'test1' and 'assessment1' are considered equal
  const normCurrent = normalizeIdForComparison(currentAssessmentId.value);
  const normSaved = normalizeIdForComparison(savedAssessmentId.value);
  return !!normCurrent && !!normSaved && String(normCurrent) === String(normSaved);
});

// Display label for the assessment shown on this results page. Prefer
// any persisted title on the saved result record, otherwise derive from
// the currently loaded assessment metadata.
const assessmentLabel = computed(() => {
  const id = savedResultRecord.value?.assessmentId ?? (assessmentStore.currentAssessment as any)?.metadata?.id ?? null;
  const title = savedResultRecord.value?.assessmentTitle ?? (assessmentStore.currentAssessment as any)?.metadata?.title ?? null;
  return formatAssessmentLabel(id, title);
});

const displayNumber = computed<number | null>(() => {
  try {
    const id = savedResultRecord.value?.assessmentId ?? (assessmentStore.currentAssessment as any)?.metadata?.fileId ?? (assessmentStore.currentAssessment as any)?.metadata?.id ?? null;
    return extractAssessmentNumber(id);
  } catch (e) {
    return null;
  }
});

const difficultyRaw = computed(() => (savedResultRecord.value && savedResultRecord.value.difficulty) || assessmentStore.currentDifficulty || 'easy');
const displayDifficulty = computed(() => {
  const d = String(difficultyRaw.value || 'easy');
  return d.charAt(0).toUpperCase() + d.slice(1);
});

const currentDomain = computed(() => {
  // Get domain from assessment metadata; guard access for proxy objects
  try {
    const meta = (assessmentStore as any).currentAssessment?.metadata;
    return (meta && meta.domain) ? String(meta.domain).toLowerCase() : 'javascript';
  } catch (e) {
    return 'javascript';
  }
});

function formatQuestion(text: string): string {
  return formatTextWithCode(text, currentDomain.value);
}

function getPercentage(correct: number, total: number): number {
  return Math.round((correct / total) * 100);
}

function getUserAnswerText(review: QuestionReview): string {
  if (!review.userAnswer) {
    return 'No answer selected';
  }
  const optionText = review.options[review.userAnswer];
  // Format option text to handle inline <pre> tags and pass domain
  const formattedOption = formatTextWithCode(optionText, currentDomain.value);
  return `${review.userAnswer}: ${formattedOption}`;
}

function getTopicClass(correct: number, total: number): string {
  return utilGetTopicClass(correct, total);
}

// Resolve reference link for a topic using persisted topicLinks on the saved
// result record first, then the assessment metadata (same behaviour as
// AssessmentResultItem.getTopicLink).
function getTopicLink(topicName: string): string | undefined {
  try {
    return resolveTopicRefLink(topicName, {
      resultTopicLinks: savedResultRecord.value && savedResultRecord.value.topicLinks ? savedResultRecord.value.topicLinks : undefined,
      difficulty: (savedResultRecord.value && savedResultRecord.value.difficulty) || assessmentStore.currentDifficulty || undefined,
      assessmentId: (savedResultRecord.value && savedResultRecord.value.assessmentId) || assessmentStore.currentAssessment?.metadata?.fileId || undefined,
      availableAssessments: (assessmentStore as any).availableAssessments || undefined,
      currentAssessment: assessmentStore.currentAssessment || undefined,
  getAssessmentMetadata: assessmentStore.getAssessmentMetadata ? assessmentStore.getAssessmentMetadata.bind(assessmentStore) : undefined,
      currentDifficulty: assessmentStore.currentDifficulty || undefined
    });
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

function getReviewKey(review: any, index: number) {
  // Prefer the saved result record id (when present) so keys change when
  // switching between different saved records. Fall back to the current
  // assessment id and finally the index/question snippet.
  const base = savedResultRecord.value?.resultRecordId ?? savedResultRecord.value?.assessmentId ?? (assessmentStore.currentAssessment as any)?.metadata?.id ?? 'no-assess';
  // Prefer explicit question id when present; fall back to a short snippet
  // of the question text or finally the numeric index.
  const qid = (review && ((review.questionId !== undefined && review.questionId !== null) ? String((review as any).questionId) : undefined)) || (review && review.id ? String((review as any).id) : undefined);
  if (qid) return `${String(base)}:q:${qid}`;
  const q = review && (review.question ? String((review as any).question).slice(0, 40) : undefined);
  return `${String(base)}:${q ?? String(index)}`;
}

function retakeAssessment() {
  if (assessmentStore.currentAssessment) {
    assessmentStore.retakeAssessment();
    // Compute a stable id to navigate to; prefer explicit unique id fields
    const _meta: any = assessmentStore.currentAssessment?.metadata || {};
    const stableId = _meta.assessmentUniqueId || _meta.assessmentId || _meta.fileId || _meta.id || (assessmentStore.currentAssessment as any).id || '';
    router.push({
      name: 'assessment',
      params: {
        difficulty: assessmentStore.currentDifficulty,
        id: stableId
      }
    });
  }
}

function newAssessment() {
  assessmentStore.resetAssessment();
  resultsStore.clearCurrentResults();
  router.push({ name: 'home' });
}

function goToResults() {
  // Navigate to the aggregated results page and request the current
  // difficulty be expanded via query param. Use the computed value.
  router.push({ name: 'results', query: { expand: String(difficultyRaw.value) } });
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
  // reset load-failure flag for each attempt
  assessmentLoadFailed.value = false;
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
    // Debug: log which assessment id we're attempting to load
    console.debug('[ResultsView] attempting to load assessment', { requestedDifficulty: found.difficulty, requestedAssessmentId: found.rec.assessmentId });
    // Clear any existing currentAssessment so components reading the store
    // don't momentarily see stale data from a previous assessment while the
    // requested one is being loaded (especially when loadAssessment returns
    // a cached object quickly).
    assessmentStore.currentAssessment = null;
    console.debug('[ResultsView] cleared assessmentStore.currentAssessment before load');
    await assessmentStore.loadAssessment(found.difficulty, found.rec.assessmentId);
  console.debug('[ResultsView] after loadAssessment, currentAssessment id:', (assessmentStore.currentAssessment as any)?.metadata?.id, 'title:', (assessmentStore.currentAssessment as any)?.metadata?.title);
  } catch (e) {
    console.debug('Could not load assessment for reconstruction', e);
    // mark that we couldn't load the assessment — UI should show fallback
    assessmentLoadFailed.value = true;
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
        ,
        questionId: q.id ?? idx
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

    // Debug: log which assessment was used to build questionReview and the first question text
    console.debug('[ResultsView] built questionReview using assessment id:', assessmentStore.currentAssessment?.metadata?.fileId, 'questionsCount:', assessmentStore.currentAssessment?.questions?.length, 'firstQuestion:', assessmentStore.currentAssessment?.questions?.[0]?.question);
    resultsStore.setCurrentResults(built);
    } else {
    // If assessment is missing after the load attempt, indicate failure
    if (!assessment) {
      assessmentLoadFailed.value = true;
    }
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
  .assessment-title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
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

  .time-taken, .test-when-taken {
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

.load-failed {
  padding: 24px;
  background: #fff3f2;
  color: #c0392b;
  border-radius: 8px;
  font-weight: 600;
}

.load-failed {
  display: flex;
  align-items: center;
  gap: 12px;
}

.load-failed .load--failed-icon {
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
}

.load-failed .load--failed-text {
  line-height: 1;
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

  .load-failed {
    background: rgba(255, 255, 255, 0.03) !important;
    color: #ffd6d1 !important; /* softer red/pink for contrast */
    // color: #c0392b !important;  
    border: 1px solid rgba(255, 255, 255, 0.06) !important;
  }

  .load-failed .load--failed-icon {
    color: inherit !important;
  }
}
</style>
