<template>
  <span class="difficulty-badge" :class="`badge-${normalizedDifficulty}`">{{ labelText }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  difficulty: string;
  label?: string;
}

const props = defineProps<Props>();

const normalizedDifficulty = computed(() => String(props.difficulty || 'easy').toLowerCase());

const labelText = computed(() => {
  if (props.label) return props.label;
  const d = normalizedDifficulty.value || 'easy';
  return d.charAt(0).toUpperCase() + d.slice(1);
});
</script>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.difficulty-badge {
  padding: $spacing-sm $spacing-lg;
  border-radius: $radius-lg;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;

  &.badge-easy {
    background: $success-light;
    color: $success-dark;
  }

  &.badge-medium {
    background: $blue-light;
    color: $blue-border;
  }

  &.badge-hard {
    background: $danger-light;
    color: $danger-dark;
  }
}

// Responsive tweak — keep the badge compact on small screens
@media (max-width: $breakpoint-md) {
  .difficulty-badge {
    font-size: $font-size-sm;
    padding: $spacing-xs $spacing-md;
  }
}
</style>

<!-- Non-scoped dark-mode overrides so the badge respects the app theme when
     :root[data-theme="dark"] is active. We keep these rules outside of the
     scoped block so they can match the class selectors without the scoped
     attribute and reliably override static colors from the component. -->
<style lang="scss">
// Use CSS custom properties defined in _theme.scss where possible so these
// rules follow the global theme palette. The fallbacks keep reasonable
// contrast if the theme variables aren't present.
:root[data-theme="dark"] {
  .difficulty-badge {
    // Keep a muted card-like background for badges in dark mode for contrast
    background: var(--bg-tertiary, #2d3548) !important;

    &.badge-easy {
      color: #34d399 !important; // green-400
    }

    &.badge-medium {
      color: #60a5fa !important; // blue-400
    }

    &.badge-hard {
      color: #f87171 !important; // red-400
    }
  }
}
</style>
