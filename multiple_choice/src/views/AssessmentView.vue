
<template>
  <div class="container" v-if="assessmentStore.currentAssessment">
    <div class="screen active">
      <div class="assessment-header">
        <div class="assessment-info">
          <h2>{{ displayHeader }}</h2>
          <p>{{ assessmentStore.currentAssessment.metadata.description }}</p>
        </div>
        <div class="progress-info">
          <div class="question-counter">
            Question {{ assessmentStore.currentQuestionIndex + 1 }} of {{ assessmentStore.totalQuestions }}
          </div>
          <div class="timer">
            Time: {{ timer.formattedTime }}
          </div>
          <button class="quit-btn" @click="handleQuit" title="Quit and return to assessment selection">
            Quit Assessment
          </button>
        </div>
      </div>

      <ProgressBar :percentage="assessmentStore.progressPercentage" />

      <QuestionGrid
        :total-questions="assessmentStore.totalQuestions"
        :current-index="assessmentStore.currentQuestionIndex"
        :answers="assessmentStore.userAnswers"
        @jump-to="assessmentStore.jumpToQuestion"
      />

      <div class="question-container" v-if="assessmentStore.currentQuestion">
        <h3 class="question-text" v-html="formatQuestion(assessmentStore.currentQuestion.question)"></h3>
        <div class="options-container">
          <div
            v-for="(text, letter) in assessmentStore.currentQuestion.options"
            :key="letter"
            class="option"
            :class="{ selected: assessmentStore.userAnswers[assessmentStore.currentQuestionIndex] === letter }"
            @click="assessmentStore.selectAnswer(letter)"
          >
            <div class="option-letter">{{ letter }}</div>
            <div class="option-text">{{ text }}</div>
          </div>
        </div>
      </div>

      <div class="navigation-buttons">
        <button
          class="nav-btn"
          :disabled="assessmentStore.isFirstQuestion"
          @click="assessmentStore.previousQuestion"
        >
          Previous
        </button>
        <button
          v-if="!assessmentStore.isLastQuestion"
          class="nav-btn"
          @click="assessmentStore.nextQuestion"
        >
          Next
        </button>
        <button
          v-else
          class="submit-btn"
          @click="handleSubmit"
        >
          Submit Assessment
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAssessmentStore } from '@/stores/assessmentStore';
import { useResultsStore } from '@/stores/resultsStore';
import { useUiStore } from '@/stores/uiStore';
import { useTimer } from '@/composables/useTimer';
import { formatTextWithCode } from '@/utils/formatUtils';
import { formatTimeTaken, getImprovementTopics } from '@/utils/resultsUtils';
import { formatAssessmentLabel } from '@/utils/assessmentUtils';
import ProgressBar from '@/components/ProgressBar.vue';
import QuestionGrid from '@/components/QuestionGrid.vue';
import type { TopicBreakdown, QuestionReview, ResultRecord } from '@/models';

const router = useRouter();
const route = useRoute();
const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();
const uiStore = useUiStore();

const timer = useTimer(assessmentStore.timeLimit, handleTimeUp);

import { computed } from 'vue';

const displayHeader = computed(() => {
  const meta = assessmentStore.currentAssessment?.metadata;
  if (!meta) return '';
  return formatAssessmentLabel(meta.id, meta.title);
});

function formatQuestion(text: string): string {
  return formatTextWithCode(text);
}

async function handleTimeUp() {
  await uiStore.showAlert('Time Up', 'Time is up! Your assessment will be submitted.');
  await submitAssessment();
}

async function handleQuit() {
  const unanswered = assessmentStore.unansweredCount;
  const total = assessmentStore.totalQuestions;

  let message = 'Are you sure you want to quit this assessment?';
  if (unanswered < total) {
    message = `You have answered ${total - unanswered} of ${total} questions. Your progress will be lost. Are you sure you want to quit?`;
  }

  const confirmed = await uiStore.showConfirm('Quit Assessment', message, true);
  if (confirmed) {
    timer.stop();
    assessmentStore.resetAssessment();
    router.push({ name: 'home' });
  }
}

async function handleSubmit() {
  const unanswered = assessmentStore.unansweredCount;

  if (unanswered > 0) {
    const confirmed = await uiStore.showConfirm(
      'Submit Assessment',
      `You have ${unanswered} unanswered questions. Are you sure you want to submit?`,
      false
    );
    if (!confirmed) return;
  } else {
    const confirmed = await uiStore.showConfirm(
      'Submit Assessment',
      'Are you sure you want to submit your assessment?',
      false
    );
    if (!confirmed) return;
  }

  await submitAssessment();
}

async function submitAssessment() {
  timer.stop();

  // Calculate results
  const results = calculateResults();
  resultsStore.setCurrentResults(results);

  // Save to history
  const timeTaken = formatTimeTaken(assessmentStore.startTime);
  const resultRecord: ResultRecord = {
    assessmentId: assessmentStore.currentAssessment!.metadata.id || 'test1',
    difficulty: assessmentStore.currentDifficulty,
    assessmentTitle: assessmentStore.currentAssessment!.metadata.title,
    date: new Date().toISOString(),
    correct: results.correct,
    total: results.total,
    percentage: results.percentage,
    timeTaken,
    improvementTopics: getImprovementTopics(results.topicBreakdown),
    topicBreakdown: results.topicBreakdown,
    // Persist mdn links for the topics seen in this result so the
    // Results view can render anchors even if assessment metadata
    // isn't available when the user later views their history.
    topicLinks: ((): { [topicName: string]: string } => {
      const map: { [topicName: string]: string } = {};
      try {
        const meta = assessmentStore.currentAssessment!.metadata as any;
        const tlinks: Array<any> = (meta && meta.topicLinks) || [];
        Object.keys(results.topicBreakdown).forEach((topicName) => {
          const found = tlinks.find((t: any) => t.topicName === topicName);
          if (found && found.mdnLink) map[topicName] = found.mdnLink;
        });
      } catch (e) {
        // ignore and continue — topicLinks will simply be empty
      }
      return map;
    })()
  };

  resultsStore.saveResult(resultRecord);

  // Navigate to results
  router.push({ name: 'assessment-result' });
}

function calculateResults() {
  const assessment = assessmentStore.currentAssessment!;
  const questions = assessment.questions;
  let correct = 0;
  const topicScores: TopicBreakdown = {};
  const questionReview: QuestionReview[] = [];

  questions.forEach((question, index) => {
    const userAnswer = assessmentStore.userAnswers[index];
    const isCorrect = userAnswer === question.correct;

    if (isCorrect) correct++;

    // Track topic performance
    const topics = assessment.metadata.topics || ['General'];
    const questionTopic = topics[index % topics.length] || 'General';

    if (!topicScores[questionTopic]) {
      topicScores[questionTopic] = { correct: 0, total: 0 };
    }
    topicScores[questionTopic].total++;
    if (isCorrect) topicScores[questionTopic].correct++;

    questionReview.push({
      question: question.question,
      userAnswer,
      correctAnswer: question.correct,
      isCorrect,
      explanation: question.explanation,
      options: question.options
    });
  });

  const percentage = Math.round((correct / questions.length) * 100);
  const timeTaken = formatTimeTaken(assessmentStore.startTime);

  return {
    correct,
    total: questions.length,
    percentage,
    topicBreakdown: topicScores,
    questionReview,
    timeTaken
  };
}

onMounted(async () => {
  // If no current assessment, try to load from route params
  if (!assessmentStore.currentAssessment) {
    const difficulty = route.params.difficulty as string;
    const id = route.params.id as string;

    if (difficulty && id) {
      try {
        uiStore.showLoading('Loading Assessment...');
        await assessmentStore.loadAssessment(difficulty, id);
      } catch (error) {
        await uiStore.showAlert('Error', 'Failed to load assessment');
        router.push({ name: 'home' });
        return;
      } finally {
        uiStore.hideLoading();
      }
    } else {
      router.push({ name: 'home' });
      return;
    }
  }

  // Start timer
  timer.start();
});

onUnmounted(() => {
  timer.stop();
});
</script>

<style scoped lang="scss">

.screen {
  display: none;
  background: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  box-shadow: var(--shadow-xl) !important;

  &.active {
    display: block;
  }
}

.assessment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--border-base);
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.assessment-info {
  flex: 1;
  h2 {
    margin: 0 0 8px 0;
    font-size: 1.8rem;
    color: var(--text-primary);
  }
  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.6;
  }
}


.progress-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
  background: var(--bg-tertiary);
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: var(--shadow-xs);
  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
}

.progress-info .question-counter,
.progress-info .timer {
  color: var(--text-primary);
}


.question-counter,
.timer {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.quit-btn {
  padding: 8px 16px;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
  &:hover {
    background: #c0392b;
    color: #fff;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
}

.question-container {
  margin: 30px 0;
  padding: 30px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--card-border);
}

.question-text {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option {
  background: var(--bg-secondary);
  border: 2px solid var(--border-base);
  color: var(--text-primary);
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.option:hover,
.option.selected {
  background: var(--bg-hover);
  border-color: #3498db;
  color: var(--text-primary);
}

.option {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 2px solid var(--border-base);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--bg-secondary);
  color: var(--text-primary);
  &:hover {
    border-color: #3498db;
    background: var(--bg-hover);
  }
  &.selected {
    border-color: #3498db;
    background: var(--bg-hover);
  }
}

.option-letter {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.option-text {
  flex: 1;
  font-size: 1.05rem;
  color: var(--text-secondary);
}

.navigation-buttons {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-top: 30px;
}

.nav-btn,
.submit-btn {
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  .nav-btn,
  .submit-btn {
    padding: 12px 32px;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  .nav-btn {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    &:hover:not(:disabled) {
      background: var(--bg-hover);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }
  }
  .submit-btn {
    background: #2ecc71;
    color: #fff;
    margin-left: auto;
    &:hover {
      background: #27ae60;
      color: #fff;
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }
  }
}

  // Dark mode overrides for options
:root[data-theme="dark"] .option {
  background: var(--bg-tertiary) !important;
  border-color: var(--border-medium) !important;
  color: var(--text-primary) !important;
}

:root[data-theme="dark"] .option:hover,
:root[data-theme="dark"] .option.selected {
  background: var(--bg-hover) !important;
  border-color: #3498db !important;
  color: var(--text-primary) !important;
}

:root[data-theme="dark"] .options-container {
  background: transparent !important;
}
// Dark mode override for .progress-info
:root[data-theme="dark"] .progress-info {
  background: var(--bg-secondary) !important;
  box-shadow: var(--shadow-xs) !important;
  border: 1.5px solid var(--border-medium) !important;
}

:root[data-theme="dark"] .progress-info,
:root[data-theme="dark"] .progress-info .question-counter,
:root[data-theme="dark"] .progress-info .timer {
  color: var(--text-primary) !important;
}

:root[data-theme="dark"] .progress-info .quit-btn {
  background: #e74c3c !important;
  color: #fff !important;
  border: none !important;
}

:root[data-theme="dark"] .progress-info .quit-btn:hover {
  background: #c0392b !important;
  color: #fff !important;
}
:root[data-theme="dark"] .progress-info .question-counter,
:root[data-theme="dark"] .progress-info .timer {
  background: var(--bg-tertiary) !important;
  padding: 4px 10px !important;
  border-radius: 6px !important;
  color: var(--text-primary) !important;
}

</style>
