<template>
  <div class="assessment-result-item">
    <div class="assessment-result-item-header">
      <div class="assessment-info">
        <div class="assessment-name">Assessment {{ result.assessmentId }} - {{ result.assessmentTitle }}</div>
        <div class="assessment-date">{{ formatDate(result.date) }}</div>
      </div>
      <div class="score-badge" :class="scoreBadgeClass">
        {{ result.percentage }}%
      </div>
    </div>
    
    <div class="assessment-content">
      <div class="assessment-details">
        <div class="detail-item">
          <span class="detail-label">Score:</span>
          <span class="detail-value">{{ result.correct }}/{{ result.total }} ({{ result.percentage }}%)</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Test Duration:</span>
          <span class="detail-value">{{ result.timeTaken }}</span>
        </div>
      </div>
      
      <!-- Topic Breakdown with Color Grading -->
      <div v-if="result.topicBreakdown && Object.keys(result.topicBreakdown).length > 0" class="topic-breakdown">
        <span class="topic-breakdown-label">Topic Performance:</span>
        <div class="topics-inline">
          <span 
            v-for="([topicName, topic], index) in Object.entries(result.topicBreakdown)" 
            :key="`${result.date}-${index}`"
            :class="getTopicClass(topic.correct, topic.total)"
            class="topic-tag"
          >
            {{ topicName }}{{ index < Object.keys(result.topicBreakdown).length - 1 ? ', ' : '' }}
          </span>
        </div>
      </div>
      
      <div v-if="result.improvementTopics && result.improvementTopics.length > 0" class="improvement-topics">
        <div class="improvement-topics-label">Topics needing improvement:</div>
        <div class="topics-list">{{ result.improvementTopics.join(', ') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ResultRecord } from '@/models';
import { formatDate } from '@/utils/dateUtils';
import { getScoreBadgeClass } from '@/utils/resultsUtils';

interface Props {
  result: ResultRecord;
}

const props = defineProps<Props>();

const scoreBadgeClass = computed(() => getScoreBadgeClass(props.result.percentage));

function getTopicClass(correct: number, total: number): string {
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

.assessment-result-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e1e8ed;
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

.assessment-date {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 400;
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

.assessment-content {
  padding: 16px;
}

.assessment-details {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}

.detail-item {
  display: flex;
  gap: 8px;
  font-size: 0.9rem;
}

.detail-label {
  color: #7f8c8d;
  font-weight: 500;
}

.detail-value {
  color: #2c3e50;
  font-weight: 600;
}

.topic-breakdown {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ecf0f1;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
}

.topic-breakdown-label {
  font-size: 0.85rem;
  color: #7f8c8d;
  font-weight: 600;
}

.topics-inline {
  display: inline;
  font-size: 0.9rem;
}

.topic-tag {
  font-weight: 500;
  
  &.topic-perfect {
    color: #28a745;
  }
  
  &.topic-good {
    color: #17a2b8;
  }
  
  &.topic-fair {
    color: #d39e00;
  }
  
  &.topic-poor {
    color: #fd7e14;
  }
  
  &.topic-fail {
    color: #dc3545;
  }
  
  &.topic-neutral {
    color: #6c757d;
  }
}

.improvement-topics {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ecf0f1;
}

.improvement-topics-label {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 8px;
  font-weight: 600;
}

.topics-list {
  font-size: 0.9rem;
  color: #e74c3c;
  font-weight: 500;
}

// Additional dark mode support for the component
:global(:root[data-theme="dark"]) {
  .assessment-result-item {
    background: #1e293b;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  .assessment-result-item-header {
    border-bottom-color: #334155;
  }
  
  .assessment-name {
    color: #e2e8f0;
  }
  
  .assessment-date {
    color: #94a3b8;
  }
  
  .score-badge {
    &.score-excellent {
      background: rgba(34, 197, 94, 0.2);
      color: #4ade80;
    }
    
    &.score-good {
      background: rgba(6, 182, 212, 0.2);
      color: #22d3ee;
    }
    
    &.score-average {
      background: rgba(251, 191, 36, 0.2);
      color: #fbbf24;
    }
    
    &.score-poor {
      background: rgba(239, 68, 68, 0.2);
      color: #f87171;
    }
  }
  
  .assessment-content {
    background: transparent;
  }
  
  .detail-label {
    color: #94a3b8;
  }
  
  .detail-value {
    color: #e2e8f0;
  }
  
  .topic-breakdown {
    border-top-color: #334155;
  }
  
  .topic-breakdown-label {
    color: #94a3b8;
  }
  
  .improvement-topics {
    border-top-color: #334155;
  }
  
  .improvement-topics-label {
    color: #94a3b8;
  }
  
  .topics-list {
    color: #f87171;
  }
}
</style>

<style lang="scss">
// Unscoped dark mode styles for topic tags
:root[data-theme="dark"] {
  .assessment-result-item .topic-tag {
    &.topic-perfect {
      color: #4ade80 !important;
    }
    
    &.topic-good {
      color: #22d3ee !important;
    }
    
    &.topic-fair {
      color: #fbbf24 !important;
    }
    
    &.topic-poor {
      color: #fb923c !important;
    }
    
    &.topic-fail {
      color: #ef8e8e !important;
    }
    
    &.topic-neutral {
      color: #9ca3af !important;
    }
  }
}
</style>
