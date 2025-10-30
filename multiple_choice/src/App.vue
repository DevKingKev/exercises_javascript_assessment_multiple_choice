<template>
  <div id="app">
    <RouterView />
    
    <!-- Global UI Components -->
    <LoadingSpinner
      :visible="uiStore.loading"
      :message="uiStore.loadingMessage"
      :subtext="uiStore.loadingSubtext"
    />
    
    <CustomDialog
      :visible="uiStore.dialogVisible"
      :title="uiStore.dialogConfig.title"
      :message="uiStore.dialogConfig.message"
      :type="uiStore.dialogConfig.type"
      :is-danger="uiStore.dialogConfig.isDanger"
      :confirm-text="uiStore.dialogConfig.confirmText"
      :cancel-text="uiStore.dialogConfig.cancelText"
      @confirm="uiStore.closeDialog(true)"
      @cancel="uiStore.closeDialog(false)"
    />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import LoadingSpinner from './components/LoadingSpinner.vue';
import CustomDialog from './components/CustomDialog.vue';
import { useUiStore } from './stores/uiStore';

const uiStore = useUiStore();
</script>

<style lang="scss">
// Import global styles from project root
@import '../styles/main.scss';

#app {
  min-height: 100vh;
}
</style>
