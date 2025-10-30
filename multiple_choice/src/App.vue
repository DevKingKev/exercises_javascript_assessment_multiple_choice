<template>
  <div id="app">
    <NavigationHeader />
    
    <main role="main">
      <RouterView />
    </main>
    
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
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NavigationHeader from './components/NavigationHeader.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import CustomDialog from './components/CustomDialog.vue';
import { useUiStore } from './stores/uiStore';
import { useThemeStore } from './stores/themeStore';

const uiStore = useUiStore();
const themeStore = useThemeStore();

// Initialize theme on mount
onMounted(() => {
  themeStore.applyTheme();
});
</script>

<style lang="scss">
// Import global styles from project root
@import '../styles/main.scss';

#app {
  min-height: 100vh;
}
</style>
