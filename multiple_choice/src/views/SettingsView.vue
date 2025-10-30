<template>
  <div class="container">
    <header class="page-header">
      <h1>User Settings</h1>
      <p>Customize your experience</p>
    </header>

    <div class="screen active">
      <div class="settings-content">
        <!-- Theme Settings -->
        <section class="settings-section">
          <h2 class="section-title">
            <span class="section-icon" aria-hidden="true">🎨</span>
            Appearance
          </h2>
          
          <div class="setting-item">
            <div class="setting-info">
              <h3 class="setting-label">Theme</h3>
              <p class="setting-description">
                Choose how Virtuarama looks. Auto mode follows your system preference.
              </p>
            </div>
            
            <div class="theme-switcher" role="radiogroup" aria-label="Theme selection">
              <button
                v-for="option in themeOptions"
                :key="option.value"
                :class="['theme-option', { active: themeStore.theme === option.value }]"
                role="radio"
                :aria-checked="themeStore.theme === option.value"
                :aria-label="`${option.label} theme`"
                @click="themeStore.setTheme(option.value)"
              >
                <span class="theme-icon" aria-hidden="true">{{ option.icon }}</span>
                <span class="theme-label">{{ option.label }}</span>
              </button>
            </div>
          </div>

          <div class="current-theme-preview">
            <p class="preview-label">Current theme:</p>
            <div class="preview-badge" :data-theme="themeStore.effectiveTheme">
              {{ themeStore.effectiveTheme === 'dark' ? '🌙 Dark' : '☀️ Light' }}
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore();

const themeOptions = [
  { value: 'light' as const, label: 'Light', icon: '☀️' },
  { value: 'dark' as const, label: 'Dark', icon: '🌙' },
  { value: 'auto' as const, label: 'Auto', icon: '💫' }
];
</script>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.page-header {
  text-align: center;
  margin-bottom: $spacing-4xl;
  color: white;

  h1 {
    font-size: $font-size-5xl;
    margin-bottom: 10px;
    font-weight: $font-weight-semibold;
  }

  p {
    font-size: $font-size-lg;
    opacity: 0.9;
  }
}

.settings-content {
  max-width: 800px;
  margin: 0 auto;
}

.settings-section {
  background: white;
  border-radius: $radius-xl;
  padding: $spacing-3xl;
  box-shadow: $shadow-sm;
  border: 2px solid $gray-200;
}

.section-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: $font-size-2xl;
  font-weight: $font-weight-semibold;
  color: $gray-800;
  margin: 0 0 $spacing-3xl 0;
  padding-bottom: $spacing-lg;
  border-bottom: 2px solid $gray-200;

  .section-icon {
    font-size: $font-size-3xl;
  }
}

.setting-item {
  margin-bottom: $spacing-2xl;
}

.setting-info {
  margin-bottom: $spacing-xl;
}

.setting-label {
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: $gray-800;
  margin: 0 0 $spacing-sm 0;
}

.setting-description {
  font-size: $font-size-base;
  color: $gray-600;
  margin: 0;
  line-height: 1.6;
}

.theme-switcher {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-md;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-xl $spacing-lg;
  background: white;
  border: 2px solid $gray-300;
  border-radius: $radius-lg;
  cursor: pointer;
  transition: all $transition-fast;
  font-size: $font-size-base;
  font-weight: $font-weight-medium;
  color: $gray-700;

  &:hover {
    border-color: $primary;
    background: $primary-light;
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }

  &:focus-visible {
    outline: 3px solid $primary;
    outline-offset: 2px;
  }

  &.active {
    border-color: $primary;
    background: $primary-light;
    color: $primary;
    font-weight: $font-weight-semibold;
    box-shadow: $shadow-primary;

    .theme-icon {
      transform: scale(1.2);
    }
  }

  .theme-icon {
    font-size: $font-size-4xl;
    transition: transform $transition-fast;
  }

  .theme-label {
    font-size: $font-size-base;
  }
}

.current-theme-preview {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  margin-top: $spacing-2xl;
  padding: $spacing-lg;
  background: $gray-50;
  border-radius: $radius-lg;
  border: 1px solid $gray-200;
}

.preview-label {
  font-size: $font-size-base;
  font-weight: $font-weight-medium;
  color: $gray-700;
  margin: 0;
}

.preview-badge {
  padding: $spacing-sm $spacing-lg;
  background: white;
  border-radius: $radius-md;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  border: 2px solid $gray-300;

  &[data-theme="dark"] {
    background: $gray-800;
    color: white;
    border-color: $gray-700;
  }

  &[data-theme="light"] {
    background: white;
    color: $gray-800;
    border-color: $gray-300;
  }
}

// Responsive Design
@media (max-width: $breakpoint-md) {
  .page-header {
    h1 {
      font-size: $font-size-3xl;
    }

    p {
      font-size: $font-size-base;
    }
  }

  .settings-section {
    padding: $spacing-2xl;
  }
}

@media (max-width: $breakpoint-sm) {
  .page-header {
    margin-bottom: $spacing-2xl;

    h1 {
      font-size: $font-size-2xl;
    }
  }

  .settings-section {
    padding: $spacing-xl;
  }

  .theme-switcher {
    grid-template-columns: 1fr;
  }

  .current-theme-preview {
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-sm;
  }
}
</style>
