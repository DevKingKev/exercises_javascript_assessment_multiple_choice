<template>
  <div class="review-question-block">
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
          {{ Object.keys(topicItems).length === 1 ? 'Topic:' : 'Topics:' }}
        </strong>

        <!-- Use the shared TopicTags component so topic rendering matches the
             rest of the app (and tests that look for .topic-tag will find it). -->
        <TopicTags
          :items="topicItems"
          :getTopicLink="getTopicLink"
          :getTopicClass="getTopicClass"
          :keyPrefix="String(savedResultDate || index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuestionReview } from '@/models';
import { useResultsStore } from '@/stores/resultsStore';
import { computed } from 'vue';
import TopicTags from './TopicTags.vue';

const props = defineProps<{
  review: QuestionReview & Record<string, any>;
  index: number;
  savedResultDate?: string | null;
  // helper functions passed from parent
  formatQuestion: (text: string) => string;
  getUserAnswerText: (review: QuestionReview) => string;
  getTopicLink?: (topicName: string) => string | undefined;
  getTopicClass?: (correct: number, total: number) => string;
  topicItems?: Record<string, { correct: number; total: number }> | null;
}>();

const { review, index, savedResultDate, formatQuestion, getUserAnswerText, getTopicLink, getTopicClass } = props;

const resultsStore = useResultsStore();

const topicItems = computed(() => {
  if (props.topicItems && Object.keys(props.topicItems).length > 0) return props.topicItems as Record<string, { correct: number; total: number }>;
  const tb = (resultsStore.currentResults && resultsStore.currentResults.topicBreakdown) || {};
  const name = (review as any).topic;
  if (!name) return {} as Record<string, { correct: number; total: number }>;
  const scores = tb[name] || { correct: 0, total: 0 };
  return { [name]: { correct: scores.correct ?? 0, total: scores.total ?? 0 } };
});
</script>

<style scoped lang="scss">
.review-question { margin-bottom: 16px; }
.review-answer { padding: 12px 16px; margin: 8px 0; border-radius: 6px; }
.review-answer.user { background: #f8f9fa; }
.review-explanation { margin-top: 12px; padding: 12px 16px; background: #ebf5fb; border-left: 4px solid #3498db; border-radius: 6px; }
</style>
