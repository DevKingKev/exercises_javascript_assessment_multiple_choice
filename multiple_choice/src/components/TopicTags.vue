<template>
  <p class="topic-tags">
    <template v-for="(item, index) in normalizedItems" :key="`${keyPrefix}-${item.name}-${index}`">
      <a
        v-if="resolvedGetTopicLink(item.name)"
        :href="resolvedGetTopicLink(item.name)"
        target="_blank"
        rel="noopener noreferrer"
        :title="`Learn more about ${item.name} (opens in a new tab)`"
        :aria-label="`Learn more about ${item.name} (opens in a new tab)`"
        :class="[resolvedGetTopicClass(item.correct, item.total), 'topic-tag']"
        @click.stop
      >
        {{ item.name }}<span class="sr-only"> (opens in a new tab)</span>{{ index < normalizedItems.length - 1 ? ', ' : '' }}
      </a>

      <span
        v-else
        :class="[resolvedGetTopicClass(item.correct, item.total), 'topic-tag']"
      >
        {{ item.name }}{{ index < normalizedItems.length - 1 ? ', ' : '' }}
      </span>
    </template>
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type TopicBreakdown = Record<string, { correct: number; total: number }>;

const props = defineProps<{
  items: TopicBreakdown | string[];
  keyPrefix?: string;
  getTopicLink?: (topicName: string) => string | undefined;
  getTopicClass?: (correct: number, total: number) => string;
}>();

const keyPrefix = props.keyPrefix || '';

// Normalize incoming `items` into an array of { name, correct, total }
const normalizedItems = computed(() => {
  if (Array.isArray(props.items)) {
    return (props.items as string[]).map(name => ({ name, correct: 0, total: 0 }));
  }
  const map = props.items as TopicBreakdown;
  return Object.entries(map).map(([name, data]) => ({ name, correct: data.correct ?? 0, total: data.total ?? 0 }));
});

function resolvedGetTopicLink(topicName: string) {
  return props.getTopicLink ? props.getTopicLink(topicName) : undefined;
}

function resolvedGetTopicClass(correct: number, total: number) {
  if (props.getTopicClass) return props.getTopicClass(correct, total);
  // default neutral class
  return 'topic-neutral';
}
</script>

<!-- No scoped styles here; this component relies on the host styles for .topic-tag etc. -->

<style scoped lang="scss">
/* Topic tag presentation moved here so this component is self-contained.
   Styles are scoped to avoid leaking into other parts of the app. */

   a.topic-tag{
    text-decoration: none;

     &:hover,
  &:focus {
    text-decoration: underline;
    outline: none;
  }
   }
.topic-tag {
  font-weight: 500;
  margin-right: 6px;

  &.topic-perfect { color: #28a745; }
  &.topic-good    { color: #17a2b8; }
  &.topic-fair    { color: #d39e00; }
  &.topic-poor    { color: #fd7e14; }
  &.topic-fail    { color: #dc3545; }
  &.topic-neutral { color: #6c757d; }
 
 
}

/* Utility used for screen-reader only text (used by template) */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Dark mode adjustments for topic tags — keep low-contrast but visible colors */
:root[data-theme="dark"] {
  .topic-tag {
    &.topic-perfect { color: #4ade80 !important; }
    &.topic-good    { color: #22d3ee !important; }
    &.topic-fair    { color: #fbbf24 !important; }
    &.topic-poor    { color: #fb923c !important; }
    &.topic-fail    { color: #ef8e8e !important; }
    &.topic-neutral { color: #9ca3af !important; }
  }
}
</style>
