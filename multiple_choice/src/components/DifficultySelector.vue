<template>
  <div class="difficulty-section">
    <h2>Select Difficulty Level</h2>
    <div class="difficulty-buttons">
      <button
        v-for="difficulty in difficulties"
        :key="difficulty"
        class="difficulty-btn"
        :class="{ active: modelValue === difficulty }"
        @click="selectDifficulty(difficulty)"
      >
        {{ getDifficultyLabel(difficulty) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
  counts: Record<string, number>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const difficulties = ['easy', 'medium', 'hard'];

function selectDifficulty(difficulty: string) {
  emit('update:modelValue', difficulty);
}

function getDifficultyLabel(difficulty: string): string {
  const count = props.counts[difficulty] || 0;
  const capitalizedDifficulty = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  return `${capitalizedDifficulty} (${count})`;
}
</script>

<style scoped lang="scss">
.difficulty-section {
  margin-bottom: 30px;
  padding: 24px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
 }

.difficulty-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
    margin-bottom: 30px;
}

.difficulty-btn {
  flex: 1;
  min-width: 150px;
  padding: 15px 25px;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ebf5fb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2);
  }

  &.active {
    background: #3498db;
    color: white;
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  }
}
// ============================================
// DIFFICULTY SELECTOR
// ============================================


.difficulty-buttons {
  button {
    background: var(--card-bg) !important;
    color: #3498db !important;
    border-color: #3498db !important;
    
    &:hover:not(:disabled):not(.active) {
      background: var(--bg-hover) !important;
    }
    
    &.active {
      background: #3498db !important;
      color: white !important;
      border-color: #3498db !important;
    }
  }
}

// Dark mode specific for difficulty selector
:root[data-theme="dark"] {
  .difficulty-buttons button {
    &:not(.active) {
      background: var(--card-bg) !important;
      color: #60a5fa !important;
      border-color: #60a5fa !important;
      
      &:hover {
        background: var(--bg-hover) !important;
      }
    }
    
    &.active {
      background: #3b82f6 !important;
      color: white !important;
      border-color: #3b82f6 !important;
    }
  }
}
</style>
