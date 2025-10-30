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
</style>
