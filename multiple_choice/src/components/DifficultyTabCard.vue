<template>
  <div
    class="comp-difficulty-tab-card difficulty-tab"
    :class="[`difficulty-${difficulty}`, { 'has-results': hasResults }]"
  >
    <div class="tab-header">
      <span class="difficulty-name">{{ capitalizedDifficulty }}</span>
      <span v-if="!hasResults" class="no-data-badge">No data</span>
    </div>
    <div v-if="hasResults" class="tab-stats">
      <div class="stat">
        <span class="stat-label">Assessments</span>
        <span class="stat-value">{{ assessmentCount }}</span>
      </div>
      <div class="stat">
        <span class="stat-label">Average</span>
        <span class="stat-value">{{ averageScore }}%</span>
      </div>
    </div>
    <div class="tab-footer">
      <RouterLink
        v-if="hasResults"
        :to="{ name: 'results', query: { expand: difficulty } }"
        class="view-link"
        :aria-label="`View ${difficulty} difficulty results`"
      >
        View Details →
      </RouterLink>
      <span v-else class="view-link" aria-hidden="true">View Details →</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  difficulty: string;
  hasResults: boolean;
  assessmentCount?: number;
  averageScore?: number | string;
}

const props = defineProps<Props>();

const capitalizedDifficulty = computed(() => {
  return props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1);
});
</script>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.difficulty-tab {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  text-decoration: none;
  transition: all 0.2s ease;
  min-height: 140px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }

  &:focus-visible {
    outline: 3px solid $primary;
    outline-offset: 2px;
  }

  &.has-results {

    &:hover {
      border-color: currentColor;
    }
  }

  &:not(.has-results) {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &.difficulty-easy {
    color: #059669;
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);

    &.has-results:hover {
      background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    }
  }

  &.difficulty-medium {
    color: #2563eb;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);

    &.has-results:hover {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    }
  }

  &.difficulty-hard {
    color: #dc2626;
    background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);

    &.has-results:hover {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    }
  }
}

.tab-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.difficulty-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: currentColor;
}

.no-data-badge {
  font-size: 0.75rem;
  padding: 4px 8px;
  background: $gray-200;
  color: $gray-600;
  border-radius: 4px;
  font-weight: 500;
}

.tab-stats {
  flex: 1;
  display: flex;
  gap: 16px;
  margin: 8px 0;
}

.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-label {
  font-size: 0.75rem;
  color: $gray-600;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: currentColor;
  line-height: 1;
}

.tab-footer {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid currentColor;
  opacity: 0.7;
}

.view-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: currentColor;
  display: flex;
  align-items: center;
  gap: 4px;

  .difficulty-tab:hover & {
    gap: 8px;
  }
}
</style>
