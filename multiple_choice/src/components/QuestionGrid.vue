<template>
  <div class="question-grid-section">
    <h4>Question Navigation</h4>
    <div class="question-grid">
      <button
        v-for="(_, index) in totalQuestions"
        :key="index"
        class="question-btn"
        :class="{
          current: index === currentIndex,
          answered: answers[index] !== null,
          unanswered: answers[index] === null && index !== currentIndex
        }"
        @click="$emit('jump-to', index)"
      >
        {{ index + 1 }}
      </button>
    </div>
    <div class="grid-legend">
      <div class="legend-item">
        <div class="legend-circle current"></div>
        <span>Current</span>
      </div>
      <div class="legend-item">
        <div class="legend-circle answered"></div>
        <span>Answered</span>
      </div>
      <div class="legend-item">
        <div class="legend-circle unanswered"></div>
        <span>Unanswered</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  totalQuestions: number;
  currentIndex: number;
  answers: (string | null)[];
}

defineProps<Props>();

defineEmits<{
  'jump-to': [index: number];
}>();
</script>

<style scoped lang="scss">
.question-grid-section {
  margin: 30px 0;
  padding: 20px;
  background: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  h4 {
    margin: 0 0 16px 0;
    font-size: 1.1rem;
    color: var(--text-primary);
  }
}

.question-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}

.question-btn {
  width: 50px;
  height: 50px;
  border: 2px solid var(--border-base);
  background: var(--bg-secondary);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-primary);
  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-sm);
    background: var(--bg-hover);
  }
  &.current {
    background: #3498db;
    color: #fff;
    border-color: #3498db;
  }
  &.answered {
    background: #2ecc71;
    color: #fff;
    border-color: #2ecc71;
  }
  &.unanswered {
    background: var(--bg-secondary);
    color: var(--text-muted);
    border-color: var(--border-base);
  }
}

.grid-legend {
  display: flex;
  gap: 24px;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.legend-circle {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  &.current {
    background: #3498db;
  }
  &.answered {
    background: #2ecc71;
  }
  &.unanswered {
    background: var(--bg-secondary);
    border: 2px solid var(--border-base);
  }
}
</style>
