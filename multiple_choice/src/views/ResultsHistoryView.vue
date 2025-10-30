<template>
  <div class="container">
    <header class="page-header">
      <h1>Assessment Results History</h1>
      <p v-if="resultsStore.hasHistory">Track your progress across all assessments</p>
      <p v-else>Complete assessments to see your progress here</p>
    </header>

    <div class="screen active">
      <!-- No Results Message -->
      <div v-if="!resultsStore.hasHistory" class="no-results">
        <div class="no-results-icon" aria-hidden="true">📊</div>
        <h2>No Results Yet</h2>
        <p>You haven't completed any assessments yet.</p>
        <RouterLink to="/" class="start-btn">
          Start Your First Assessment
        </RouterLink>
      </div>

      <!-- Results History -->
      <div v-else class="results-history">
        <div
          v-for="difficulty in ['easy', 'medium', 'hard']"
          :key="difficulty"
          class="difficulty-section"
        >
          <template v-if="hasResultsForDifficulty(difficulty)">
            <div
              class="difficulty-header"
              :class="{ expanded: expandedDifficulty === difficulty }"
              @click="toggleDifficulty(difficulty)"
              @keydown.enter="toggleDifficulty(difficulty)"
              @keydown.space.prevent="toggleDifficulty(difficulty)"
              role="button"
              :aria-expanded="expandedDifficulty === difficulty"
              :aria-controls="`difficulty-${difficulty}`"
              tabindex="0"
            >
              <div class="difficulty-info">
                <div class="difficulty-title">
                  <span class="difficulty-badge" :class="`badge-${difficulty}`">
                    {{ difficulty.charAt(0).toUpperCase() + difficulty.slice(1) }}
                  </span>
                </div>
                <div class="difficulty-stats">
                  <span class="stat-item">
                    <strong>{{ getAssessmentCountForDifficulty(difficulty) }}</strong>
                    {{ getAssessmentCountForDifficulty(difficulty) === 1 ? 'assessment' : 'assessments' }}
                  </span>
                  <span class="stat-divider">•</span>
                  <span class="stat-item">
                    Average: <strong>{{ resultsStore.averageScoreByDifficulty(difficulty) }}%</strong>
                  </span>
                </div>
              </div>
              <div class="expand-icon" aria-hidden="true">▶</div>
            </div>
            
            <div
              :id="`difficulty-${difficulty}`"
              class="assessment-results-container"
              :class="{ expanded: expandedDifficulty === difficulty }"
              role="region"
              :aria-label="`${difficulty} difficulty results`"
            >
              <AssessmentResultItem
                v-for="[assessmentId, results] in getAssessmentResultsForDifficulty(difficulty)"
                :key="assessmentId"
                :assessment-id="assessmentId"
                :assessment-title="getAssessmentTitle(difficulty, assessmentId)"
                :results="results"
              />
            </div>
          </template>
        </div>

        <!-- Clear History Button -->
        <div class="actions-section">
          <button
            class="clear-history-btn"
            @click="handleClearHistory"
            aria-label="Clear all results history"
          >
            🗑️ Clear All History
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAssessmentStore } from '../stores/assessmentStore';
import { useResultsStore } from '../stores/resultsStore';
import { useUiStore } from '../stores/uiStore';
import AssessmentResultItem from '../components/AssessmentResultItem.vue';
import type { ResultRecord } from '../models';

const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();
const uiStore = useUiStore();

const expandedDifficulty = ref<string | null>('easy');

function hasResultsForDifficulty(difficulty: string): boolean {
  const results = resultsStore.getResultsByDifficulty(difficulty);
  return Object.keys(results).length > 0;
}

function getAssessmentCountForDifficulty(difficulty: string): number {
  const results = resultsStore.getResultsByDifficulty(difficulty);
  return Object.keys(results).length;
}

function getAssessmentResultsForDifficulty(difficulty: string): [string, ResultRecord[]][] {
  const results = resultsStore.getResultsByDifficulty(difficulty);
  return Object.entries(results);
}

function getAssessmentTitle(difficulty: string, assessmentId: string): string {
  const metadata = assessmentStore.getAssessmentMetadata(difficulty, assessmentId);
  return metadata ? metadata.title : `Assessment ${assessmentId}`;
}

function toggleDifficulty(difficulty: string) {
  expandedDifficulty.value = expandedDifficulty.value === difficulty ? null : difficulty;
}

async function handleClearHistory() {
  const confirmed = await uiStore.showConfirm(
    'Clear All History',
    'Are you sure you want to clear all your assessment results? This action cannot be undone.',
    true
  );

  if (confirmed) {
    resultsStore.clearAllHistory();
    await uiStore.showAlert('History Cleared', 'All your assessment results have been cleared.');
  }
}
</script>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.page-header {
  text-align: center;
  margin-bottom: $spacing-4xl;
  padding-top: $spacing-xl;

  h1 {
    font-size: $font-size-4xl;
    font-weight: $font-weight-bold;
    color: $gray-800;
    margin-bottom: $spacing-md;
    background: $gradient-primary;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: $font-size-lg;
    color: $gray-600;
    margin: 0;
  }
}

.no-results {
  text-align: center;
  padding: $spacing-4xl $spacing-xl;
  background: white;
  border-radius: $radius-xl;
  box-shadow: $shadow-sm;

  .no-results-icon {
    font-size: 4rem;
    margin-bottom: $spacing-xl;
  }

  h2 {
    font-size: $font-size-3xl;
    color: $gray-700;
    margin-bottom: $spacing-md;
  }

  p {
    font-size: $font-size-lg;
    color: $gray-500;
    margin-bottom: $spacing-3xl;
  }

  .start-btn {
    display: inline-block;
    padding: $spacing-lg $spacing-3xl;
    background: $gradient-primary;
    color: white;
    text-decoration: none;
    border-radius: $radius-lg;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    transition: all $transition-fast;
    box-shadow: $shadow-primary;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-primary-lg;
    }

    &:focus-visible {
      outline: 2px solid $primary;
      outline-offset: 4px;
    }
  }
}

.results-history {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

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

.difficulty-badge {
  padding: $spacing-sm $spacing-lg;
  border-radius: $radius-lg;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  text-transform: uppercase;
  letter-spacing: 0.5px;

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

.actions-section {
  display: flex;
  justify-content: center;
  margin-top: $spacing-2xl;
  padding: $spacing-2xl 0;
}

.clear-history-btn {
  padding: $spacing-md $spacing-2xl;
  background: white;
  color: $danger;
  border: 2px solid $danger-light;
  border-radius: $radius-lg;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    background: $danger-light;
    border-color: $danger;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid $danger;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
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

  .difficulty-header {
    padding: $spacing-lg $spacing-xl;
  }

  .difficulty-badge {
    font-size: $font-size-sm;
    padding: $spacing-xs $spacing-md;
  }

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
  .page-header {
    margin-bottom: $spacing-2xl;

    h1 {
      font-size: $font-size-2xl;
    }
  }

  .no-results {
    padding: $spacing-2xl $spacing-lg;

    .no-results-icon {
      font-size: 3rem;
    }

    h2 {
      font-size: $font-size-2xl;
    }
  }

  .difficulty-header {
    padding: $spacing-md $spacing-lg;
  }
}
</style>
