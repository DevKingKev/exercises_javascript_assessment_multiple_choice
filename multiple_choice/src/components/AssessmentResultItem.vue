<template>
  <div class="assessment-result-item" :class="{ expanded: isExpanded }">
    <div class="assessment-header" @click="toggleExpanded">
      <div class="assessment-info">
        <div class="assessment-name">{{ assessmentTitle }}</div>
        <div class="latest-score">
          Latest: {{ latestResult.percentage }}% ({{ results.length }} {{ results.length === 1 ? 'attempt' : 'attempts' }})
        </div>
      </div>
      <div class="score-badge" :class="scoreBadgeClass">
        {{ latestResult.percentage }}%
      </div>
    </div>
    <div class="attempts-history" v-show="isExpanded">
      <div
        v-for="(result, index) in reversedResults"
        :key="`${result.assessmentId}-${result.date}`"
        class="attempt-item"
      >
        <div class="attempt-date">{{ formatDate(result.date) }}</div>
        <div class="attempt-details">
          <div class="attempt-score">
            Score: {{ result.correct }}/{{ result.total }} ({{ result.percentage }}%)
          </div>
          <div class="attempt-time">Time: {{ result.timeTaken }}</div>
        </div>
        <div v-if="result.improvementTopics && result.improvementTopics.length > 0" class="improvement-topics">
          <div class="improvement-topics-label">Topics needing improvement:</div>
          <div class="topics-list">{{ result.improvementTopics.join(', ') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ResultRecord } from '@/models';
import { formatDate } from '@/utils/dateUtils';
import { getScoreBadgeClass } from '@/utils/resultsUtils';

interface Props {
  assessmentId: string;
  assessmentTitle: string;
  results: ResultRecord[];
}

const props = defineProps<Props>();

const isExpanded = ref(false);

const latestResult = computed(() => props.results[props.results.length - 1]);

const reversedResults = computed(() => [...props.results].reverse());

const scoreBadgeClass = computed(() => getScoreBadgeClass(latestResult.value.percentage));

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped lang="scss">
.assessment-result-item {
  margin-bottom: 12px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.assessment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }
}

.assessment-info {
  flex: 1;
}

.assessment-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.latest-score {
  font-size: 0.85rem;
  color: #7f8c8d;
}

.score-badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
  
  &.score-excellent {
    background: #d4edda;
    color: #155724;
  }
  
  &.score-good {
    background: #d1ecf1;
    color: #0c5460;
  }
  
  &.score-average {
    background: #fff3cd;
    color: #856404;
  }
  
  &.score-poor {
    background: #f8d7da;
    color: #721c24;
  }
}

.attempts-history {
  border-top: 1px solid #e1e8ed;
  padding: 16px;
  background: #f8f9fa;
}

.attempt-item {
  padding: 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
}

.attempt-date {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 8px;
}

.attempt-details {
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
}

.attempt-score,
.attempt-time {
  font-size: 0.9rem;
  color: #34495e;
}

.improvement-topics {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #ecf0f1;
}

.improvement-topics-label {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 4px;
}

.topics-list {
  font-size: 0.9rem;
  color: #e74c3c;
  font-weight: 500;
}
</style>
