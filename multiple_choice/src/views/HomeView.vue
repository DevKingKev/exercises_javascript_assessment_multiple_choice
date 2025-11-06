<template>
  <div class="container">
    <header>
      <h1>BuildWithHTML5 - Multiple Choice Assessment Platform</h1>
      <p>Choose your difficulty level and assessment to begin</p>
    </header>

    <div class="screen active">
      <DifficultySelector
        v-model="selectedDifficulty"
        :counts="difficultyCounts"
      />

      <!-- Results Overview -->
      <ResultsOverview />

      <!-- Assessment List -->
      <div class="assessment-list">
        <h3>Available Assessments</h3>
        <div class="assessments-container">
          <template v-if="currentAssessments.length > 0">
            <AssessmentCard
              v-for="assessment in currentAssessments"
              :key="assessment.assessmentId ?? assessment.fileId"
              :title="assessment.title"
              :description="assessment.description"
              :question-count="assessment.questionCount"
              :time-limit="assessment.timeLimit"
              :assessment-id="assessment.assessmentId ?? assessment.fileId"
              @select="startAssessment( (assessment.assessmentId ?? assessment.fileId) + '' )"
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
import ResultsOverview from '@/components/ResultsOverview.vue';

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
  // Return assessments for the chosen difficulty sorted by numeric assessment id.
  const list = assessmentStore.assessmentsByDifficulty(selectedDifficulty.value) || [];
  // Normalize candidate id from either `assessmentId` or legacy `id` fields.
  const normalizeId = (a: any) => {
    if (a && a.assessmentId !== undefined && a.assessmentId !== null) return Number(a.assessmentId);
    if (a && a.id !== undefined && a.id !== null) {
      const n = parseInt(String(a.id).replace(/[^0-9]/g, ''), 10);
      return Number.isFinite(n) ? n : null;
    }
    return null;
  };

  return [...list].sort((a: any, b: any) => {
    const na = normalizeId(a) ?? Number.POSITIVE_INFINITY;
    const nb = normalizeId(b) ?? Number.POSITIVE_INFINITY;
    return na - nb;
  });
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
  // Only show loading if assessments haven't been loaded yet
  const showLoading = !assessmentStore.assessmentsLoaded;
  
  try {
    if (showLoading) {
      uiStore.showLoading('Loading Available Assessments...');
    }
    await assessmentStore.loadAvailableAssessments();
  } catch (error) {
    await uiStore.showAlert('Error', 'Failed to load available assessments');
  } finally {
    if (showLoading) {
      uiStore.hideLoading();
    }
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
</style>
