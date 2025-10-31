<template>
  <div class="question-component">
    <h3 class="question-text" v-html="formattedQuestion"></h3>
    <div class="options-container">
      <div
        v-for="(text, letter) in question.options"
        :key="letter"
        class="option"
        :class="{ selected: answer === letter }"
        @click="onSelect(letter)"
      >
        <div class="option-letter">{{ letter }}</div>
        <div class="option-text">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Question } from '@/models';
import { computed } from 'vue';
import { formatTextWithCode } from '@/utils/formatUtils';

const props = defineProps<{
  question: Question;
  answer: string | null;
}>();

const emit = defineEmits<{
  (e: 'select', letter: string): void;
}>();

function onSelect(letter: string | number) {
  emit('select', String(letter));
}

const formattedQuestion = computed(() => formatTextWithCode(props.question.question));
</script>

<style scoped lang="scss">
.question-component {
  margin: 30px 0;
  padding: 30px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--card-border);


  .question-text {
    font-size: 1.3rem;
    line-height: 1.6;
    color: var(--text-primary);
    margin-bottom: 24px;

      ::v-deep pre {
            background: var(--bg-tertiary);
            margin-top: 10px;
            padding: 20px;
            border-radius: 8px;
            font-size: 1rem;
            overflow-x: auto;
        }

    }

    .options-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    }

    .option {
    background: var(--bg-secondary);
    border: 2px solid var(--border-base);
    color: var(--text-primary);
    transition: background 0.2s, border-color 0.2s, color 0.2s;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: var(--bg-secondary);
    color: var(--text-primary);
    }

    .option:hover,
    .option.selected {
    background: var(--bg-hover);
    border-color: #3498db;
    color: var(--text-primary);
    }

    .option-letter {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--text-primary);
    }

    .option-text {
    flex: 1;
    font-size: 1.05rem;
    color: var(--text-secondary);
    }
}


// Dark mode support kept minimal — the app has broader dark-mode styles elsewhere
:root[data-theme="dark"] .question-component {
  background: transparent;

  .option {
  background: var(--bg-tertiary) !important;
  border-color: var(--border-medium) !important;
  color: var(--text-primary) !important;
}
.option.selected {
  background: var(--bg-hover) !important;
  border-color: #3498db !important;
  color: var(--text-primary) !important;
}

.options-container {
  background: transparent !important;
}
}
</style>
