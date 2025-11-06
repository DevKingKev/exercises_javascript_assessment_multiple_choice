<template>
  <div class="difficulty-section">
    <div
      class="difficulty-header"
      :class="{ expanded: isExpanded }"
      @click="$emit('toggle')"
      @keydown.enter="$emit('toggle')"
      @keydown.space.prevent="$emit('toggle')"
      role="button"
      :aria-expanded="isExpanded"
      :aria-controls="`difficulty-${difficulty}`"
      tabindex="0"
    >
      <div class="difficulty-info">
        <div class="difficulty-title">
          <DifficultyBadge :difficulty="difficulty" :label="capitalizedDifficulty" />
        </div>
        <div class="difficulty-stats">
          <span class="stat-item">
            <strong>{{ assessmentCount }}</strong>
            {{ assessmentCount === 1 ? 'assessment' : 'assessments' }}
          </span>
          <span class="stat-divider">•</span>
          <span class="stat-item">
            Average: <strong>{{ averageComputed }}%</strong>
          </span>
                <span class="stat-divider">•</span>
                <span class="stat-item"> <strong>{{ resultsCount }}</strong>{{ resultsCount === 1 ? ' result' : ' results' }}</span>

        </div>
      </div>
      <div class="expand-icon" aria-hidden="true">▶</div>
    </div>
    
    <div
      :id="`difficulty-${difficulty}`"
      class="assessment-results-container"
      :class="{ expanded: isExpanded }"
      role="region"
      :aria-label="`${difficulty} difficulty results`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useResultsStore } from '@/stores/resultsStore';
import DifficultyBadge from '@/components/DifficultyBadge.vue';

interface Props {
  difficulty: string;
  isExpanded: boolean;
  assessmentCount: number;
  averageScore?: number | string; // optional — we compute a more accurate average here
}

const props = defineProps<Props>();

defineEmits<{
  toggle: [];
}>();

const resultsStore = useResultsStore();

const capitalizedDifficulty = computed(() => {
  return props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1);
});

// Compute average across all attempts for this difficulty and the total
// number of result records. We intentionally keep `assessmentCount` as the
// distinct-assessment count (passed in), and compute the other stats here
// so they live in the difficulty-stats area as requested.
const resultsCount = computed(() => resultsStore.resultsCountByDifficulty(props.difficulty));

const averageComputed = computed(() => resultsStore.averageAcrossAllAttemptsByDifficulty(props.difficulty));
</script>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.difficulty-section {
  background: white;
  border-radius: $radius-xl;
  box-shadow: $shadow-sm;
  overflow: hidden;
}

.difficulty-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-xl $spacing-2xl;
  cursor: pointer;
  user-select: none;
  background: $gray-50;
  border-bottom: 2px solid $gray-200;
  transition: all $transition-fast;

  &:hover {
    background: $gray-100;
  }

  &:focus-visible {
    outline: 2px solid $primary;
    outline-offset: -2px;
  }

  &.expanded {
    .expand-icon {
      transform: rotate(90deg);
    }
  }
}

.difficulty-info {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.difficulty-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
}

/* difficulty-badge styles moved to the dedicated DifficultyBadge component */

.difficulty-stats {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: $font-size-sm;
  color: $gray-600;

  .stat-item {
    strong {
      color: $gray-800;
      font-weight: $font-weight-semibold;
    }
  }

  .stat-divider {
    color: $gray-400;
  }
}

.expand-icon {
  font-size: $font-size-lg;
  color: $gray-500;
  transition: transform $transition-fast;
}

.assessment-results-container {
  max-height: 0;
  overflow: hidden;
  transition: max-height $transition-base ease-out;

  &.expanded {
    max-height: 10000px;
    transition: max-height $transition-base ease-in;
  }
}

// Responsive Design
@media (max-width: $breakpoint-md) {
  .difficulty-header {
    padding: $spacing-lg $spacing-xl;
  }

  /* responsive badge sizing handled by DifficultyBadge component */

  .difficulty-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-xs;

    .stat-divider {
      display: none;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .difficulty-header {
    padding: $spacing-md $spacing-lg;
  }
}
</style>
