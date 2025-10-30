<template>
  <div class="assessment-card" @click="$emit('select')">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <div class="assessment-meta">
      <span>{{ questionCount }} questions</span>
      <span>{{ timeLimit }} min</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  questionCount: number;
  timeLimit: number;
}

defineProps<Props>();

defineEmits<{
  select: [];
}>();
</script>

<style scoped lang="scss">
.assessment-card {
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

  h4 {
    color: #2d3748; // $gray-700
    margin-bottom: 10px;
    font-size: 1.2rem;
    margin-top: 0;
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
</style>
