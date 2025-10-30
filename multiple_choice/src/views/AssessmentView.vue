<template>
  <div class="container" v-if="assessmentStore.currentAssessment">
    <div class="screen active">
      <div class="assessment-header">
        <div class="assessment-info">
          <h2>{{ assessmentStore.currentAssessment.metadata.title }}</h2>
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
import ProgressBar from '@/components/ProgressBar.vue';
import QuestionGrid from '@/components/QuestionGrid.vue';
import type { TopicBreakdown, QuestionReview, ResultRecord } from '@/models';

const router = useRouter();
const route = useRoute();
const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();
const uiStore = useUiStore();

const timer = useTimer(assessmentStore.timeLimit, handleTimeUp);

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
    topicBreakdown: results.topicBreakdown
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
  border-bottom: 2px solid #ecf0f1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.assessment-info {
  flex: 1;

  h2 {
    margin: 0 0 8px 0;
    font-size: 1.8rem;
    color: #2c3e50;
  }

  p {
    margin: 0;
    color: #7f8c8d;
    line-height: 1.6;
  }
}

.progress-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
}

.question-counter,
.timer {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
}

.quit-btn {
  padding: 8px 16px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #c0392b;
    transform: translateY(-1px);
  }
}

.question-container {
  margin: 30px 0;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.question-text {
  font-size: 1.3rem;
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: 24px;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 2px solid #d5dbdb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3498db;
    background: #ebf5fb;
  }

  &.selected {
    border-color: #3498db;
    background: #ebf5fb;
  }
}

.option-letter {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf0f1;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  color: #2c3e50;
}

.option-text {
  flex: 1;
  font-size: 1.05rem;
  color: #34495e;
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.nav-btn {
  background: #ecf0f1;
  color: #2c3e50;

  &:hover:not(:disabled) {
    background: #d5dbdb;
    transform: translateY(-1px);
  }
}

.submit-btn {
  background: #2ecc71;
  color: white;
  margin-left: auto;

  &:hover {
    background: #27ae60;
    transform: translateY(-1px);
  }
}
</style>
