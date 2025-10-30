<template>
  <div class="container">
    <header>
      <h1>Virtuarama - Multiple Choice Assessment Platform</h1>
      <p>Choose your difficulty level and assessment to begin</p>
    </header>

    <div class="screen active">
      <DifficultySelector
        v-model="selectedDifficulty"
        :counts="difficultyCounts"
      />

      <!-- Results History Section -->
      <div v-if="resultsStore.hasHistory" class="results-history">
        <h2>Your Progress</h2>
        <div class="difficulty-results">
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
              >
                <div class="difficulty-info">
                  <div class="difficulty-title">
                    {{ difficulty.charAt(0).toUpperCase() + difficulty.slice(1) }}
                  </div>
                  <div class="difficulty-average">
                    Average: {{ resultsStore.averageScoreByDifficulty(difficulty) }}%
                    ({{ getAssessmentCountForDifficulty(difficulty) }} assessments)
                  </div>
                </div>
                <div class="expand-icon">▶</div>
              </div>
              <div
                class="assessment-results-container"
                :class="{ expanded: expandedDifficulty === difficulty }"
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
        </div>
      </div>

      <!-- Assessment List -->
      <div class="assessment-list">
        <h3>Available Assessments</h3>
        <div class="assessments-container">
          <template v-if="currentAssessments.length > 0">
            <AssessmentCard
              v-for="assessment in currentAssessments"
              :key="assessment.id"
              :title="assessment.title"
              :description="assessment.description"
              :question-count="assessment.questionCount"
              :time-limit="assessment.timeLimit"
              @select="startAssessment(assessment.id)"
            />
          </template>
          <template v-else>
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
              <h4>No assessments available for {{ selectedDifficulty }} difficulty</h4>
              <p>Please select a different difficulty level</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAssessmentStore } from '@/stores/assessmentStore';
import { useResultsStore } from '@/stores/resultsStore';
import { useUiStore } from '@/stores/uiStore';
import DifficultySelector from '@/components/DifficultySelector.vue';
import AssessmentCard from '@/components/AssessmentCard.vue';
import AssessmentResultItem from '@/components/AssessmentResultItem.vue';
import type { ResultRecord } from '@/models';

const router = useRouter();
const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();
const uiStore = useUiStore();

const selectedDifficulty = ref<string>('easy');
const expandedDifficulty = ref<string | null>(null);

const difficultyCounts = computed(() => ({
  easy: assessmentStore.assessmentCount('easy'),
  medium: assessmentStore.assessmentCount('medium'),
  hard: assessmentStore.assessmentCount('hard')
}));

const currentAssessments = computed(() => {
  return assessmentStore.assessmentsByDifficulty(selectedDifficulty.value);
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

function getAssessmentTitle(difficulty: string, assessmentId: string): string {
  const metadata = assessmentStore.getAssessmentMetadata(difficulty, assessmentId);
  return metadata ? metadata.title : `Assessment ${assessmentId}`;
}

function toggleDifficulty(difficulty: string) {
  expandedDifficulty.value = expandedDifficulty.value === difficulty ? null : difficulty;
}

async function startAssessment(assessmentId: string) {
  try {
    uiStore.showLoading('Loading Assessment...');
    await assessmentStore.loadAssessment(selectedDifficulty.value, assessmentId);
    router.push({
      name: 'assessment',
      params: {
        difficulty: selectedDifficulty.value,
        id: assessmentId
      }
    });
  } catch (error) {
    await uiStore.showAlert('Error', 'Failed to load assessment');
  } finally {
    uiStore.hideLoading();
  }
}

onMounted(async () => {
  try {
    uiStore.showLoading('Loading Available Assessments...');
    await assessmentStore.loadAvailableAssessments();
  } catch (error) {
    await uiStore.showAlert('Error', 'Failed to load available assessments');
  } finally {
    uiStore.hideLoading();
  }
});
</script>

<style scoped lang="scss">
.screen {
  display: none;

  &.active {
    display: block;
  }
}

.assessment-list {
  margin-top: 40px;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #2c3e50;
  }
}

.assessments-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.results-history {
  margin: 40px 0;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #2c3e50;
  }
}

.difficulty-section {
  margin-bottom: 20px;
}

.difficulty-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }

  &.expanded .expand-icon {
    transform: rotate(90deg);
  }
}

.difficulty-info {
  flex: 1;
}

.difficulty-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.difficulty-average {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.expand-icon {
  font-size: 0.9rem;
  color: #95a5a6;
  transition: transform 0.2s ease;
}

.assessment-results-container {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.expanded {
    max-height: 1000px;
    padding: 16px 0;
  }
}
</style>
