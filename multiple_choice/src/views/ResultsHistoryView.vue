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
        <DifficultyResultsSection
          v-for="difficulty in ['easy', 'medium', 'hard']"
          :key="difficulty"
          v-show="hasResultsForDifficulty(difficulty)"
          :difficulty="difficulty"
          :is-expanded="expandedDifficulty === difficulty"
          :assessment-count="getAssessmentCountForDifficulty(difficulty)"
          :average-score="resultsStore.averageScoreByDifficulty(difficulty)"
          @toggle="toggleDifficulty(difficulty)"
        >
          <AssessmentResultItem
            v-for="result in getAllResultsForDifficulty(difficulty)"
            :key="`${result.assessmentId}-${result.date}`"
            :result="result"
          />
        </DifficultyResultsSection>

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
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useAssessmentStore } from '../stores/assessmentStore';
import { useResultsStore } from '../stores/resultsStore';
import { useUiStore } from '../stores/uiStore';
import AssessmentResultItem from '../components/AssessmentResultItem.vue';
import DifficultyResultsSection from '../components/DifficultyResultsSection.vue';
import type { ResultRecord } from '../models';
import { formatAssessmentLabel } from '@/utils/assessmentUtils';

const route = useRoute();
const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();
const uiStore = useUiStore();

const expandedDifficulty = ref<string | null>('easy');

// Handle query parameter for expanding a specific difficulty
onMounted(() => {
  const expandParam = route.query.expand as string;
  if (expandParam && ['easy', 'medium', 'hard'].includes(expandParam)) {
    expandedDifficulty.value = expandParam;
  }
  // Ensure available assessments are loaded so result items can resolve topic mdn links.
  // This covers the case when the user navigates directly to the results view (no prior Home load).
  (async () => {
    try {
      if (!assessmentStore.assessmentsLoaded) {
        await assessmentStore.loadAvailableAssessments();
      }
    } catch (e) {
      // Swallow errors — failing to load metadata should not break the results UI.
      // Developers can inspect console if links are missing.
      // eslint-disable-next-line no-console
      console.debug('Could not load available assessments for results view:', e);
    }
  })();
});

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

function getAllResultsForDifficulty(difficulty: string): ResultRecord[] {
  const results = resultsStore.getResultsByDifficulty(difficulty);
  // Flatten all results from all assessments into a single array
  const allResults: ResultRecord[] = [];
  for (const [assessmentId, resultsList] of Object.entries(results)) {
    allResults.push(...resultsList);
  }
  // Sort by date (newest first)
  return allResults.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getAssessmentTitle(difficulty: string, assessmentId: string): string {
  const metadata = assessmentStore.getAssessmentMetadata(difficulty, assessmentId);
  // Prefer full title if available; otherwise format using the id (extract number if present)
  if (metadata && metadata.title) return metadata.title;
  return formatAssessmentLabel(assessmentId, null);
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

.actions-section {
  display: flex;
  justify-content: center;
  margin-top: $spacing-2xl;
  padding: $spacing-2xl 0;
}

.clear-history-btn {
  padding: $spacing-md $spacing-2xl;
  background: white;
  color: mix($danger, black, 70%);
  border: 2px solid mix($danger, white, 30%);
  border-radius: $radius-lg;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    background: mix($danger, white, 8%);
    border-color: $danger;
    color: $danger;
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
}
</style>
