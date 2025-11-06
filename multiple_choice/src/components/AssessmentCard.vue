<template>
  <div class="assessment-card" @click="$emit('select')">
    <div class="number-wrapper" v-if="displayNumber !== null" :aria-hidden="true">
      <span class="number-bubble">{{ displayNumber }}</span>
    </div>

    <h4 class="assessment-card-title">{{ title }}</h4>
    <p>{{ description }}</p>
    <div class="assessment-meta">
      <span>{{ questionCount }} questions</span>
      <span>{{ timeLimit }} min</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { extractAssessmentNumber } from '@/utils/assessmentUtils';

interface Props {
  title: string;
  description: string;
  questionCount: number;
  timeLimit: number;
  assessmentId?: string | number | null;
}

const props = defineProps<Props>();

defineEmits<{
  select: [];
}>();

const displayNumber = computed<number | null>(() => {
  return extractAssessmentNumber(props.assessmentId ?? null);
});
</script>

<style scoped lang="scss">
.assessment-card {
  position: relative;
  background: #f8fafc; // $gray-50
  border: 2px solid #e2e8f0; // $gray-200
  border-radius: 12px; // $radius-xl
  padding: 25px; // $spacing-2xl
  cursor: pointer;
  transition: all 0.3s ease; // $transition-base

  &:hover {
    border-color: #5a67d8; // $primary
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); // $shadow-lg
    background: white;
  }

  .assessment-card-title {
    color: #2d3748; // $gray-700
    margin-bottom: 10px;
    font-size: 1.2rem;
    margin-top: 0;
    padding-right: 10px;
  }

  p {
    color: #64748b; // $gray-500
    line-height: 1.5;
    margin-bottom: 15px; // $spacing-lg
    margin-top: 0;
  }
}

.assessment-meta {
  display: flex;
  gap: 15px; // $spacing-lg
  font-size: 0.85rem; // $font-size-sm

  span {
    background: #e2e8f0; // $gray-200
    color: #64748b; // $gray-500
    padding: 5px 12px;
    border-radius: 6px; // $radius-md
    font-weight: 500; // $font-weight-medium
  }
}

.number-wrapper {
  position: absolute;
  top: 5px;
  right: 5px;
}

.number-bubble {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, #6b46c1, #5a67d8);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(88, 87, 223, 0.28);
  font-size: 0.95rem;
}
</style>

<!-- Dark mode overrides (unscoped so :root selector applies) -->
<style lang="scss">
:root[data-theme="dark"] .assessment-card {
  background: #0f1724; /* darker card */
  border-color: #1f2937;
}

:root[data-theme="dark"] .assessment-card:hover {
  background: #0b1220;
}

:root[data-theme="dark"] .assessment-card h4 {
  color: #e6eef8;
}

:root[data-theme="dark"] .assessment-card p {
  color: #9aa7b8;
}

:root[data-theme="dark"] .assessment-meta span {
  background: #1f2937;
  color: #9aa7b8;
}

:root[data-theme="dark"] .number-bubble {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.5);
  color: #fff;
}
</style>
