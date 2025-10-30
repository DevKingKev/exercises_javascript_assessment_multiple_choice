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

      <!-- Quick Stats Banner (if user has history) -->
      <div v-if="resultsStore.hasHistory" class="quick-stats-banner">
        <div class="stats-content">
          <span class="stats-icon" aria-hidden="true">📊</span>
          <span class="stats-text">
            You have completed assessments!
          </span>
        </div>
        <RouterLink to="/results" class="view-results-btn">
          View All Results →
        </RouterLink>
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

const router = useRouter();
const assessmentStore = useAssessmentStore();
const resultsStore = useResultsStore();
const uiStore = useUiStore();

const selectedDifficulty = ref<string>('easy');

const difficultyCounts = computed(() => ({
  easy: assessmentStore.assessmentCount('easy'),
  medium: assessmentStore.assessmentCount('medium'),
  hard: assessmentStore.assessmentCount('hard')
}));

const currentAssessments = computed(() => {
  return assessmentStore.assessmentsByDifficulty(selectedDifficulty.value);
});

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

.quick-stats-banner {
  margin: 30px 0;
  padding: 20px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

.stats-content {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
}

.stats-icon {
  font-size: 1.5rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.stats-text {
  font-size: 1.1rem;
  font-weight: 500;
}

.view-results-btn {
  padding: 10px 20px;
  background: white;
  color: #667eea;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f8f9fa;
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 3px solid white;
    outline-offset: 2px;
  }
}
</style>
