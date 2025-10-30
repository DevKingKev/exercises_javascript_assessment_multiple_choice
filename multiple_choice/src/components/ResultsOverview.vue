<template>
  <div v-if="resultsStore.hasHistory" class="results-overview">
    <div class="overview-header">
      <h3 class="overview-title">Your Progress Summary</h3>
      <RouterLink to="/results" class="view-all-btn">
        View All Results →
      </RouterLink>
    </div>
    <div class="difficulty-tabs">
      <DifficultyTabCard
        v-for="difficulty in difficulties"
        :key="difficulty"
        :difficulty="difficulty"
        :has-results="hasResults(difficulty)"
        :assessment-count="getAssessmentCount(difficulty)"
        :average-score="getAverageScore(difficulty)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResultsStore } from '@/stores/resultsStore';
import DifficultyTabCard from './DifficultyTabCard.vue';

const resultsStore = useResultsStore();

const difficulties = ['easy', 'medium', 'hard'];

function hasResults(difficulty: string): boolean {
  const results = resultsStore.getResultsByDifficulty(difficulty);
  return Object.keys(results).length > 0;
}

function getAssessmentCount(difficulty: string): number {
  const results = resultsStore.getResultsByDifficulty(difficulty);
  return Object.keys(results).length;
}

function getAverageScore(difficulty: string): number | string {
  return resultsStore.averageScoreByDifficulty(difficulty);
}
</script>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.results-overview {
  margin: 30px 0;
  padding: 24px;
  background: $gray-50;
  border-radius: 12px;
  border: 1px solid $gray-200;
}

.overview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.overview-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: $gray-900;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '📈';
    font-size: 1.3rem;
  }
}

.view-all-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
  white-space: nowrap;

  &:hover {
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid $primary;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
}

.difficulty-tabs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.difficulty-tab {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 2px solid transparent;
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
    cursor: pointer;

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
    color: #10b981;
    background: linear-gradient(135deg, white 0%, #f0fdf4 100%);

    &.has-results:hover {
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    }
  }

  &.difficulty-medium {
    color: #3b82f6;
    background: linear-gradient(135deg, white 0%, #eff6ff 100%);

    &.has-results:hover {
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    }
  }

  &.difficulty-hard {
    color: #ef4444;
    background: linear-gradient(135deg, white 0%, #fef2f2 100%);

    &.has-results:hover {
      background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
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
