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
    <div class="option-text" v-html="formatOption(text)"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Question } from '@/models';
import { computed } from 'vue';
import { formatTextWithCode } from '@/utils/formatUtils';
import { useAssessmentStore } from '@/stores/assessmentStore';

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

const assessmentStore = useAssessmentStore();
const currentDomain = computed(() => {
  // assessmentStore.currentAssessment may be a proxied object; guard access
  try {
    const meta = (assessmentStore as any).currentAssessment?.metadata;
    return (meta && meta.domain) ? String(meta.domain).toLowerCase() : 'javascript';
  } catch (e) {
    return 'javascript';
  }
});

const formattedQuestion = computed(() => formatTextWithCode(props.question.question, currentDomain.value));

/**
 * Format option text the same way we format question text so code blocks
 * (including HTML snippets) are escaped/wrapped consistently and can be
 * rendered via v-html. This avoids raw HTML inside <pre> being interpreted
 * by the browser and ensures consistent styling.
 */
function formatOption (s: string | null | undefined) {
  try {
  return formatTextWithCode(s || '', currentDomain.value);
  } catch (e) {
    return String(s || '');
  }
}
</script>

<style scoped lang="scss">
.question-component {
  margin: 30px 0;
  padding: 30px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--card-border);
  min-height: 580px; // To stop it changing height so much on small differences in height between questions


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

      ::v-deep p.formatted-with-markers{
        span.pre{
          font-family:"Consolas", "Monaco", "Courier New", monospace;
          display: inline-flex;
          padding: 0 10px;
        }
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

    ::v-deep pre {
      /* Code blocks inside options should behave like typical code blocks
         (block-level, scrollable). Previously these were inline which
         prevented proper rendering of multi-line HTML snippets. */
      display: block;
      background: var(--bg-tertiary);
      padding: 12px;
      border-radius: 6px;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 0.95rem;
      color: var(--text-primary);
      border: 1px solid var(--border-light);
      overflow-x: auto;
      white-space: pre;
      margin: 8px 0;
    }
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
