<template>
  <div class="assessment-result-item" :class="{ expanded: isExpanded }">
    <div class="assessment-header" @click="toggleExpanded">
      <div class="assessment-info">
        <div class="assessment-name">{{ assessmentTitle }}</div>
        <div class="latest-score-wrapper">
          <div class="latest-score">
            Latest: {{ latestResult.percentage }}% ({{ results.length }} {{ results.length === 1 ? 'attempt' : 'attempts' }}),
          </div>
          <div class="latest-date">{{ formatDate(latestResult.date) }}</div>
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
        
        <!-- Topic Breakdown with Color Grading -->
        <div v-if="result.topicBreakdown && Object.keys(result.topicBreakdown).length > 0" class="topic-breakdown">
          <div class="topic-breakdown-label">Topic Performance:</div>
          <div class="topics-grid">
            <div 
              v-for="(topic, topicName) in result.topicBreakdown" 
              :key="topicName"
              class="topic-item"
              :class="getTopicScoreClass(topic.correct, topic.total)"
              :title="`${topic.correct}/${topic.total} correct`"
            >
              <div class="topic-name">{{ topicName }}</div>
              <div class="topic-score">{{ topic.correct }}/{{ topic.total }}</div>
            </div>
          </div>
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

function getTopicScoreClass(correct: number, total: number): string {
  if (total === 0) return 'topic-neutral';
  
  const percentage = (correct / total) * 100;
  
  if (percentage === 100) return 'topic-perfect';
  if (percentage >= 80) return 'topic-good';
  if (percentage >= 60) return 'topic-fair';
  if (percentage >= 40) return 'topic-poor';
  return 'topic-fail';
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

.latest-score-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }
}

.latest-score {
  font-size: 0.95rem;
  color: #7f8c8d;
}

.latest-date {
  font-size: 0.95rem;
  color: #64748b; // $gray-500
  font-weight: 400; // Normal weight, not bold
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
  font-weight: 600; // $font-weight-semibold
  color: #2d3748; // $gray-700
  margin-bottom: 8px; // $spacing-sm
  font-size: 0.9rem;
}

.attempt-details {
  display: flex;
  gap: 24px;
  margin-bottom: 12px;
}

.attempt-score,
.attempt-time {
  font-size: 0.9rem;
  color: #34495e;
}

.topic-breakdown {
  margin-top: 12px;
  margin-bottom: 12px;
}

.topic-breakdown-label {
  font-size: 0.85rem;
  color: #2d3748; // $gray-700
  margin-bottom: 8px;
  font-weight: 600;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
}

.topic-item {
  padding: 8px 12px;
  border-radius: 6px; // $radius-md
  border: 2px solid;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

.topic-name {
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2px;
  line-height: 1.3;
}

.topic-score {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.8;
}

// Color grading for topics
.topic-perfect {
  background: #d4edda; // Light green
  border-color: #28a745; // Green
  color: #155724; // Dark green
}

.topic-good {
  background: #d1ecf1; // Light blue
  border-color: #17a2b8; // Blue
  color: #0c5460; // Dark blue
}

.topic-fair {
  background: #fff3cd; // Light yellow
  border-color: #ffc107; // Yellow/orange
  color: #856404; // Dark yellow
}

.topic-poor {
  background: #ffe5d0; // Light orange
  border-color: #fd7e14; // Orange
  color: #8b4513; // Dark orange/brown
}

.topic-fail {
  background: #f8d7da; // Light red
  border-color: #dc3545; // Red
  color: #721c24; // Dark red
}

.topic-neutral {
  background: #e2e8f0; // $gray-200
  border-color: #cbd5e0; // $gray-300
  color: #4a5568; // $gray-600
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
