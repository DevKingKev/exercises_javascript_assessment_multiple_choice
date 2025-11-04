<template>
  <div class="assessment-result-item" :class="{ expanded: isExpanded }">
    <div class="assessment-result-item-header" @click="toggleExpanded">
      <div class="assessment-info">
  <div class="assessment-name">{{ displayAssessmentLabel }}</div>
        <div class="assessment-date">{{ formatDate(result.date) }}</div>
      </div>
      <div class="header-right">
        <div class="score-badge" :class="scoreBadgeClass">
          {{ result.percentage }}%
        </div>
        <div class="expand-icon" :class="{ expanded: isExpanded }">
          <!-- Chevron right (collapsed), down (expanded) -->
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="transition: transform 0.3s;" :style="isExpanded ? 'transform: rotate(90deg);' : ''">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    
    <div v-if="isExpanded" class="assessment-content">
      <div class="assessment-details">
        <div class="detail-item">
          <span class="detail-label">Score:</span>
          <span class="detail-value">{{ result.correct }}/{{ result.total }} ({{ result.percentage }}%)</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Test Duration:</span>
          <span class="detail-value">{{ result.timeTaken }}</span>
        </div>
      </div>
      
      <!-- Topic Breakdown with Color Grading -->
      <div v-if="result.topicBreakdown && Object.keys(result.topicBreakdown).length > 0" class="topic-breakdown">
        <span class="topic-breakdown-label">Topic Performance:</span>
              <div class="topics-inline">
                <TopicTags
                  :items="result.topicBreakdown"
                  :getTopicLink="getTopicLink"
                  :getTopicClass="getTopicClass"
                  :keyPrefix="result.date"
                />
              </div>
      </div>
      
      <div v-if="result.improvementTopics && result.improvementTopics.length > 0" class="improvement-topics">
        <div class="improvement-topics-label">Topics needing improvement:</div>
        <div class="topics-list">
          <TopicTags
            :items="improvementTopicBreakdown"
            :getTopicLink="getTopicLink"
            :getTopicClass="getTopicClass"
            :keyPrefix="result.date + '-improve'"
          />
        </div>
      </div>
        <div class="result-item-actions">
          <button
            class="delete-result-btn"
            @click.stop="onDelete"
            title="Delete this assignment result from history"
            aria-label="Delete this assignment result from history"
          >
            🗑️ Delete
          </button>
          <button
            class="view-assessment-btn"
            @click="viewAssessment"
            title="View assessment"
            aria-label="View assessment"
          >
            View assessment
          </button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAssessmentStore } from '@/stores/assessmentStore';
import { useResultsStore } from '@/stores/resultsStore';
import { useUiStore } from '@/stores/uiStore';
import type { ResultRecord } from '@/models';
import { formatDate } from '@/utils/dateUtils';
import { getScoreBadgeClass } from '@/utils/resultsUtils';
import { getTopicClass as utilGetTopicClass, resolveTopicRefLink } from '@/utils/topicUtils';
import { formatAssessmentLabel } from '@/utils/assessmentUtils';
import TopicTags from './TopicTags.vue';

interface Props {
  result: ResultRecord;
}

const props = defineProps<Props>();

const isExpanded = ref(false);

const scoreBadgeClass = computed(() => getScoreBadgeClass(props.result.percentage));
const router = useRouter();
const resultsStore = useResultsStore();
const uiStore = useUiStore();

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}

const displayAssessmentLabel = computed(() =>
  formatAssessmentLabel(props.result.assessmentId, props.result.assessmentTitle)
);

// Delegate to shared util
function getTopicClass(correct: number, total: number): string {
  return utilGetTopicClass(correct, total);
}

// Resolve a topic name to a reference link (if available) by looking up the assessment metadata.
const assessmentStore = useAssessmentStore();

function getTopicLink(topicName: string): string | undefined {
  try {
    return resolveTopicRefLink(topicName, {
      resultTopicLinks: (props.result as any).topicLinks || undefined,
      difficulty: (props.result as any).difficulty || undefined,
      assessmentId: (props.result as any).assessmentId || undefined,
      availableAssessments: (assessmentStore as any).availableAssessments || undefined,
      currentAssessment: assessmentStore.currentAssessment || undefined,
      getAssessmentMetadata: assessmentStore.getAssessmentMetadata ? (assessmentStore.getAssessmentMetadata.bind(assessmentStore) as any) : undefined,
      currentDifficulty: assessmentStore.currentDifficulty || undefined
    });
  } catch (e) {
    return undefined;
  }
}

// Build a topic breakdown object for improvement topics so they can be
// colour-graded the same way as the main topicBreakdown. If grading data
// for a topic is missing we fall back to 0/0 which renders as neutral.

const improvementTopicBreakdown = computed(() => {
  const tb = (props.result as any).topicBreakdown || {};
  const improvements = (props.result as any).improvementTopics || [];
  const out: Record<string, { correct: number; total: number }> = {};
  for (const name of improvements) {
    if (tb && Object.prototype.hasOwnProperty.call(tb, name)) {
      out[name] = { correct: tb[name].correct ?? 0, total: tb[name].total ?? 0 };
    } else {
      out[name] = { correct: 0, total: 0 };
    }
  }
  return out;
});

function viewAssessment() {
  try {
    // Navigate to the assessment-result route using a path param so the URL
    // becomes /assessment-result/<id> and ResultsView can read it from params.
    router.push({
      name: 'assessment-result',
      params: { resultRecordId: String(props.result.resultRecordId) }
    });
  } catch (e) {
    console.debug('Navigation to assessment failed', e);
  }
}

async function onDelete() {
  try {
    // Use the app-level confirm modal for consistent UX and accessibility
    const confirmed = await uiStore.showConfirm(
      'Delete Result',
      'Delete this saved result? This action cannot be undone.',
      true
    );
    if (!confirmed) return;

    const removed = resultsStore.deleteResult(String(props.result.difficulty), String(props.result.assessmentId), props.result.resultRecordId as any);
    if (removed) {
      // Close the expanded view if it's open so UI updates feel immediate.
      isExpanded.value = false;
    } else {
      // Could show a user-facing toast here; for now keep simple.
      console.debug('Result delete returned false — record may not have been found');
    }
  } catch (e) {
    console.error('Error deleting result:', e);
  }
}

// Compute the href for a topic tag. Prefer an explicit refLink from metadata.
// NOTE: We intentionally do NOT provide a generic search fallback here. The
// canonical refLink should be provided in the assessment metadata for each
// topic. If a link is missing, we render a non-interactive <span> so we don't
// lead users to generic search results unexpectedly.
</script>

<style scoped lang="scss">
.assessment-result-item {
  margin-bottom: 12px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.assessment-result-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }
}

.assessment-result-item.expanded .assessment-result-item-header {
  border-bottom: 1px solid #e1e8ed;
}

.assessment-info {
  flex: 1;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.expand-icon {
  display: flex;
  align-items: center;
  color: #64748b;
  /* Remove old rotation, now handled inline on SVG */
}

.assessment-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.assessment-date {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 400;
}

.score-badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
  
  &.score-excellent {
    background: #d4edda;
    color: #155724;
  }
  
  &.score-good {
    background: #d1ecf1;
    color: #0c5460;
  }
  
  &.score-average {
    background: #fff3cd;
    color: #856404;
  }
  
  &.score-poor {
    background: #f8d7da;
    color: #721c24;
  }
}

.assessment-content {
  padding: 16px;
}

.assessment-details {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}

.detail-item {
  display: flex;
  gap: 8px;
}

.detail-label {
  color: #7f8c8d;
  font-weight: 500;
}

.detail-value {
  color: #2c3e50;
  font-weight: 600;
}

/* Topic presentation moved into TopicTags.vue (component-scoped)
   The parent retains container and layout styles only. */

.improvement-topics {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ecf0f1;
}

.improvement-topics-label {
  color: #7f8c8d;
  margin-bottom: 8px;
  font-weight: 600;
}

.topics-list {
  color: #e74c3c;
  font-weight: 500;
}

.result-item-actions {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.view-assessment-btn {
  padding: 8px 14px;
  background: transparent;
  border: 1px solid #3498db;
  color: #3498db;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.view-assessment-btn:hover { background: rgba(52,152,219,0.06); }

.view-assessment-btn:focus-visible {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}

.delete-result-btn {
  /* Match Clear All History button styling exactly */
  padding: 12px 25px;
  color: #fca5a5 ;
  background: none;
  border: 1px solid #e53e3e;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s ease;
}

.delete-result-btn:hover {
  background: var(--bg-hover) !important;
  border-color: #e53e3e;
  transform: translateY(-1px);
}

.delete-result-btn:focus-visible {
  outline: 2px solid #e53e3e;
  outline-offset: 2px;
}

.delete-result-btn:active {
  transform: translateY(0);
}

// Additional dark mode support for the component
// Stronger dark mode override for assessment-result-item-header hover
:root[data-theme="dark"] .assessment-result-item-header:hover {
  background: rgba(51, 65, 85, 0.85) !important; /* softer, lighter blue-gray */
  box-shadow: 0 2px 8px 0 rgba(30, 41, 59, 0.18) !important;
  border-bottom: 1px solid #334155 !important;
}

:root[data-theme="dark"] {
  .assessment-result-item {
    background: #1e293b;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  /* Remove .assessment-result-item-header hover here, now handled above */
  
  .assessment-result-item.expanded .assessment-result-item-header {
    border-bottom: 1px solid #334155;
  }

  /* Ensure the header's bottom border in dark mode matches the improvement-topics
     top border so separators look consistent between sections. */
  .assessment-result-item-header {
    border-bottom: none;
  }
  
  .expand-icon {
    color: #94a3b8;
  }
  
  .assessment-name {
    color: #e2e8f0;
  }
  
  .assessment-date {
    color: #94a3b8;
  }
  
  .score-badge {
    &.score-excellent {
      background: rgba(34, 197, 94, 0.2);
      color: #4ade80;
    }
    
    &.score-good {
      background: rgba(6, 182, 212, 0.2);
      color: #22d3ee;
    }
    
    &.score-average {
      background: rgba(251, 191, 36, 0.2);
      color: #fbbf24;
    }
    
    &.score-poor {
      background: rgba(239, 68, 68, 0.2);
      color: #f87171;
    }
  }
  
  .assessment-content {
    background: transparent;
  }
  
  .detail-label {
    color: #94a3b8;
  }
  
  .detail-value {
    color: #e2e8f0;
  }
  
  .topic-breakdown {
    border-top-color: #334155;
  }
  
  .topic-breakdown-label {
    color: #94a3b8;
  }
  
  .improvement-topics {
    border-top-color: #334155;
  }
  
  .improvement-topics-label {
    color: #94a3b8;
  }
  
  .topics-list {
    color: #f87171;
  }
}
</style>
