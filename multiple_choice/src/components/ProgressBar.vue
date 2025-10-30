<template>
  <div class="progress-bar">
    <div class="progress-fill" :style="{ width: `${percentage}%` }"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  percentage: number;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.progress-bar {
  width: 100%;
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
  margin: 20px 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
  transition: width 0.3s ease;
  border-radius: 4px;
}
</style>
