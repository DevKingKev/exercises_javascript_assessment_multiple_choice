<template>
  <div class="container" v-if="resultsStore.currentResults">
    <div class="screen active">
      <div class="results-header">
        <h2>Assessment Results</h2>
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
            <p class="time-taken">Time taken: {{ resultsStore.currentResults.timeTaken }}</p>
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
              <span v-html="formatQuestion(review.explanation)"></span>
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
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAssessmentStore } from '@/stores/assessmentStore';
import { useResultsStore } from '@/stores/resultsStore';
import { formatTextWithCode } from '@/utils/formatUtils';
import { getScoreBadgeClass } from '@/utils/resultsUtils';
import type { QuestionReview } from '@/models';

const router = useRouter();
const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();

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

onMounted(() => {
  // If no results, redirect to home
  if (!resultsStore.currentResults) {
    router.push({ name: 'home' });
  }
});
</script>

<style scoped lang="scss">
.screen {
  display: none;

  &.active {
    display: block;
  }
}

.results-header {
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #2c3e50;
  }
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
  background: #f8f9fa;
  border-radius: 12px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #2c3e50;
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
