<template>
  <div 
    class="topic-item"
    :class="scoreClass"
    :title="`${correct}/${total} correct (${percentage}%)`"
  >
    <div class="topic-name">{{ topicName }}</div>
    <div class="topic-score">{{ correct }}/{{ total }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  topicName: string;
  correct: number;
  total: number;
}

const props = defineProps<Props>();

const percentage = computed(() => {
  if (props.total === 0) return 0;
  return Math.round((props.correct / props.total) * 100);
});

const scoreClass = computed(() => {
  if (props.total === 0) return 'topic-neutral';
  
  const pct = percentage.value;
  
  if (pct === 100) return 'topic-perfect';
  if (pct >= 80) return 'topic-good';
  if (pct >= 60) return 'topic-fair';
  if (pct >= 40) return 'topic-poor';
  return 'topic-fail';
});
</script>

<style scoped lang="scss">
.topic-item {
  display: block;
  padding: 8px 12px;
  border-radius: 6px;
  border: 2px solid;
  transition: all 0.2s ease;
  cursor: help;
  min-height: 40px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

.topic-name {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2px;
  line-height: 1.3;
}

.topic-score {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.8;
}

// Color grading for topics
.topic-perfect {
  background: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.topic-good {
  background: #d1ecf1;
  border-color: #17a2b8;
  color: #0c5460;
}

.topic-fair {
  background: #fff3cd;
  border-color: #ffc107;
  color: #856404;
}

.topic-poor {
  background: #ffe5d0;
  border-color: #fd7e14;
  color: #8b4513;
}

.topic-fail {
  background: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.topic-neutral {
  background: #e2e8f0;
  border-color: #cbd5e0;
  color: #4a5568;
}


</style>
