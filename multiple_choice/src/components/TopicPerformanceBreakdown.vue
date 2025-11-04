<template>
  <div class="performance-breakdown">
    <h3>Performance by Topic</h3>
    <div class="topic-breakdown">
      <div
        v-for="(scores, topic) in items"
        :key="topic"
        class="topic-item"
      >
        <span class="topic-name">{{ topic }}</span>
        <span class="topic-score">
          {{ scores.correct }}/{{ scores.total }}
          ({{ percentage(scores.correct, scores.total) }}%)
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: Record<string, { correct: number; total: number }> | null | undefined;
}>();

function percentage(correct: number, total: number) {
  if (!total || total === 0) return 0;
  return Math.round((correct / total) * 100);
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
