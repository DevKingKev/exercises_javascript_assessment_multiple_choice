<template>
  <div class="performance-breakdown">
    <h3>Performance by Topic</h3>
    <div class="topic-breakdown">
      <div
        v-for="(scores, topic) in items"
        :key="topic"
        class="topic-item"
        >
        <a
          v-if="topicRefLink(topic)"
          :href="topicRefLink(topic)"
          class="topic-name"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ topic }}
        </a>
        <span v-else class="topic-name">{{ topic }}</span>
        <span class="topic-score">
          {{ scores.correct }}/{{ scores.total }}
          ({{ percentage(scores.correct, scores.total) }}%)
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Assessment } from '@/models/assessment';
import { findTopicRefLinkFromAssessment } from '@/utils/assessmentUtils';

const props = defineProps<{
  // topic score map (kept for backwards compatibility / usage)
  items: Record<string, { correct: number; total: number }> | null | undefined;
  // optional assessment so component can resolve topic refLinks
  assessment?: Assessment | null;
}>();

function percentage(correct: number, total: number) {
  if (!total || total === 0) return 0;
  return Math.round((correct / total) * 100);
}

function topicRefLink(topicName: string): string | undefined {
  return findTopicRefLinkFromAssessment(props.assessment, topicName);
}
</script>

<style scoped lang="scss">
.performance-breakdown { margin: 40px 0; padding: 24px; background: var(--bg-secondary); border-radius: 12px; }
.topic-breakdown { display: flex; flex-direction: column; gap: 12px; }
.topic-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #f8f9fa; border-radius: 8px; }

/* Dark-mode override: keep the same translucent surface used elsewhere */
:root[data-theme="dark"] .topic-item {
  background: rgba(255, 255, 255, 0.03) !important;
}
.topic-name { font-weight: 500; }
.topic-score { font-weight: 600; color: #3498db; }
</style>
