<template>
  <Teleport to="body">
    <div v-if="visible" class="spinner-overlay" :class="{ active: visible }">
      <div class="spinner-container">
        <div class="spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
        <div class="spinner-text">{{ message }}</div>
        <div class="spinner-subtext">{{ subtext }}</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  visible: boolean;
  message?: string;
  subtext?: string;
}

withDefaults(defineProps<Props>(), {
  message: 'Loading...',
  subtext: 'Please wait...'
});
</script>

<style scoped lang="scss">
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.spinner-container {
  text-align: center;
  padding: 40px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-base);
}

.spinner {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;

  &:nth-child(2) {
    border-top-color: #9b59b6;
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    border-top-color: #e74c3c;
    animation-delay: 0.4s;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.spinner-subtext {
  font-size: 0.95rem;
  color: var(--text-secondary);
}
</style>
