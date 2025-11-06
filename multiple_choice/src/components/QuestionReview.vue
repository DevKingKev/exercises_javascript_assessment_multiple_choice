<template>
  <div class="review-question-block">
    <div class="review-question">
      <strong>Question {{ index + 1 }}:</strong>
      <div v-html="formatQuestion(review.question)"></div>
    </div>
    <div class="review-answer user">
      <strong>Your answer:</strong>
      <div class="review-answer-option">
                <span class="review-answer-option-choice">{{ review.userAnswer }}:</span> 
        <span v-html="review.userAnswer !== null ? review.options[review.userAnswer] : ''" class="review-answer-option-text"></span></div>
    </div>
    <div class="review-answer" :class="review.isCorrect ? 'correct' : 'incorrect'">
      <strong>Correct answer:</strong>
      <div class="review-answer-option">
        <span class="review-answer-option-choice">{{ review.correctAnswer }}:</span> 
        <span v-html="review.options[review.correctAnswer]" class="review-answer-option-text"></span></div>
    </div>

    <div v-if="review.explanation" class="review-explanation">
      <strong>Explanation:</strong>
      <div v-html="formatQuestion(review.explanation)" class="review-explanation-text"></div>

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
import { computed, toRef } from 'vue';
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

// Use toRef for props that may change so we keep reactivity instead of
// destructuring the props object (destructuring loses reactivity in Vue).
const review = toRef(props, 'review');
const index = toRef(props, 'index');
const savedResultDate = toRef(props, 'savedResultDate');

// Function props are stable references and can be accessed directly from props.
const formatQuestion = props.formatQuestion;
const getUserAnswerText = props.getUserAnswerText;
const getTopicLink = props.getTopicLink;
const getTopicClass = props.getTopicClass;

const resultsStore = useResultsStore();

const topicItems = computed(() => {
  if (props.topicItems && Object.keys(props.topicItems).length > 0) return props.topicItems as Record<string, { correct: number; total: number }>;
  const tb = (resultsStore.currentResults && resultsStore.currentResults.topicBreakdown) || {};
  const name = (review.value as any).topic;
  if (!name) return {} as Record<string, { correct: number; total: number }>;
  const scores = tb[name] || { correct: 0, total: 0 };
  return { [name]: { correct: scores.correct ?? 0, total: scores.total ?? 0 } };
});
</script>

<style scoped lang="scss">
.review-question-block {
  ::v-deep p.formatted-with-markers{
     span.pre{
      font-family:"Consolas", "Monaco", "Courier New", monospace;
      display: inline-flex;
      padding: 0 10px;
  }
  }

  
}
.review-question { margin-bottom: 16px; }
.review-answer { padding: 12px 16px; margin: 8px 0; border-radius: 6px; }
.review-answer.user { background: #f8f9fa; }
.review-answer-option{
  display: inline-flex;
  padding: 0 10px;

  .review-answer-option-choice{
    padding-right: 10px;

   ::v-deep &.with-text{
      vp{display: inline-flex;}
    }

  }
  .review-answer-option-text{
      ::v-deep pre{
    line-height: 19px;
    font-size: 1rem;
    }
    } 
}
.review-explanation { 
  margin-top: 12px; padding: 12px 16px; background: #ebf5fb; border-left: 4px solid #3498db; border-radius: 6px;
  .review-explanation-text {
    ::v-deep pre{
      display: inline-flex;
      padding:0 5px;
      border-radius: 2px;
    }
  }

  .explanation-topics {
    margin-top: 15px;

    .explanation-topics-heading {
      font-weight: 700;
    }
  }
}
/* Ensure review-answer.user uses the same dark-mode surface as topic items */
:root[data-theme="dark"] .review-answer.user {
  background: rgba(255, 255, 255, 0.03) !important;
}
</style>
