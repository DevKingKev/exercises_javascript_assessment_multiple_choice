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
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: #3498db;
  }

  h4 {
    margin: 0 0 12px 0;
    font-size: 1.25rem;
    color: #2c3e50;
  }

  p {
    margin: 0 0 16px 0;
    color: #7f8c8d;
    line-height: 1.6;
  }
}

.assessment-meta {
  display: flex;
  gap: 16px;
  font-size: 0.9rem;
  color: #95a5a6;

  span {
    &::before {
      content: '•';
      margin-right: 8px;
      color: #3498db;
    }
  }
}
</style>
