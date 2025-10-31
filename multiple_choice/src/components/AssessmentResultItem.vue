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
          <template v-for="([topicName, topic], index) in Object.entries(result.topicBreakdown)" :key="`${result.date}-${index}`">
            <a
              v-if="getTopicLink(topicName)"
              :href="getTopicLink(topicName)"
              target="_blank"
              rel="noopener noreferrer"
              :title="`Learn more about ${topicName} (opens in a new tab)`"
              :aria-label="`Learn more about ${topicName} (opens in a new tab)`"
              :class="[getTopicClass(topic.correct, topic.total), 'topic-tag']"
              @click.stop
            >
              {{ topicName }}<span class="sr-only"> (opens in a new tab)</span>{{ index < Object.keys(result.topicBreakdown).length - 1 ? ', ' : '' }}
            </a>
            <span
              v-else
              :class="[getTopicClass(topic.correct, topic.total), 'topic-tag']"
            >
              {{ topicName }}{{ index < Object.keys(result.topicBreakdown).length - 1 ? ', ' : '' }}
            </span>
          </template>
        </div>
      </div>
      
      <div v-if="result.improvementTopics && result.improvementTopics.length > 0" class="improvement-topics">
        <div class="improvement-topics-label">Topics needing improvement:</div>
        <div class="topics-list">{{ result.improvementTopics.join(', ') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAssessmentStore } from '@/stores/assessmentStore';
import type { ResultRecord } from '@/models';
import { formatDate } from '@/utils/dateUtils';
import { getScoreBadgeClass } from '@/utils/resultsUtils';
import { formatAssessmentLabel } from '@/utils/assessmentUtils';

interface Props {
  result: ResultRecord;
}

const props = defineProps<Props>();

const isExpanded = ref(false);

const scoreBadgeClass = computed(() => getScoreBadgeClass(props.result.percentage));

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}

const displayAssessmentLabel = computed(() =>
  formatAssessmentLabel(props.result.assessmentId, props.result.assessmentTitle)
);

function getTopicClass(correct: number, total: number): string {
  if (total === 0) return 'topic-neutral';
  const percentage = (correct / total) * 100;
  
  if (percentage === 100) return 'topic-perfect';
  if (percentage >= 80) return 'topic-good';
  if (percentage >= 60) return 'topic-fair';
  if (percentage >= 40) return 'topic-poor';
  return 'topic-fail';
}

// Resolve a topic name to an mdnLink (if available) by looking up the assessment metadata.
const assessmentStore = useAssessmentStore();

function getTopicLink(topicName: string): string | undefined {
  try {
    // Prefer any persisted topicLinks stored with the result. This makes
    // the results view resilient when the app hasn't loaded assessment
    // metadata (for example when the user navigates directly to results).
    if ((props.result as any).topicLinks && (props.result as any).topicLinks[topicName]) {
      return (props.result as any).topicLinks[topicName];
    }
    // Try multiple ways to locate the assessment metadata because saved results sometimes
    // contain an assessment identifier that doesn't exactly match the metadata `id` field
    // (some assessments use `metadata.assessmentId`, or the saved value may be a number
    // while the metadata stores a string). We attempt, in order:
    // 1) use the store helper that looks in availableAssessments by difficulty/id
    // 2) check currentAssessment.metadata for either `id` or `assessmentId`
    // 3) search availableAssessments[difficulty] for a matching id/assessmentId
    let meta: any = assessmentStore.getAssessmentMetadata(props.result.difficulty, props.result.assessmentId);

    if (!meta && assessmentStore.currentAssessment) {
      const cm = (assessmentStore.currentAssessment as any).metadata;
      if (cm && (String(cm.id) === String(props.result.assessmentId) || String(cm.assessmentId) === String(props.result.assessmentId))) {
        meta = cm;
      }
    }

    if (!meta) {
      try {
        const list = (assessmentStore as any).availableAssessments?.[props.result.difficulty] || [];
        const found = list.find((a: any) => String(a.id) === String(props.result.assessmentId) || String(a.assessmentId) === String(props.result.assessmentId));
        if (found) meta = (found as any).metadata || found;
      } catch (e) {
        // If availableAssessments isn't the expected shape, ignore and continue
      }
    }

    const topicLinks = (meta && (meta as any).topicLinks) || [];
    const found = (topicLinks as Array<any>).find((t: any) => t.topicName === topicName);
    return found?.mdnLink;
  } catch (e) {
    // Fail gracefully — return undefined when no link is available
    return undefined;
  }
}

// Compute the href for a topic tag. Prefer an explicit mdnLink from metadata,
// otherwise fall back to an MDN search for the topic name so the tag is still
// a useful, clickable link.
// NOTE: We intentionally do NOT provide a search fallback here. The
// canonical mdnLink should be provided in the assessment metadata for each
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
  font-size: 0.9rem;
}

.detail-label {
  color: #7f8c8d;
  font-weight: 500;
}

.detail-value {
  color: #2c3e50;
  font-weight: 600;
}

.topic-breakdown {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ecf0f1;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
}

.topic-breakdown-label {
  font-size: 0.85rem;
  color: #7f8c8d;
  font-weight: 600;
}

.topics-inline {
  display: inline;
  font-size: 0.9rem;
}

.topic-tag {
  font-weight: 500;
  
  &.topic-perfect {
    color: #28a745;
  }
  
  &.topic-good {
    color: #17a2b8;
  }
  
  &.topic-fair {
    color: #d39e00;
  }
  
  &.topic-poor {
    color: #fd7e14;
  }
  
  &.topic-fail {
    color: #dc3545;
  }
  
  &.topic-neutral {
    color: #6c757d;
  }

  // If the topic tag is an anchor, keep color but remove underline by default
  // and show underline on hover/focus for affordance and keyboard users.
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
    outline: none;
  }
}

/* Visually-hidden helper for screen readers */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.improvement-topics {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ecf0f1;
}

.improvement-topics-label {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 8px;
  font-weight: 600;
}

.topics-list {
  font-size: 0.9rem;
  color: #e74c3c;
  font-weight: 500;
}

// Additional dark mode support for the component
// Stronger dark mode override for assessment-result-item-header hover
:root[data-theme="dark"] .assessment-result-item-header:hover {
  background: rgba(51, 65, 85, 0.85) !important; /* softer, lighter blue-gray */
  box-shadow: 0 2px 8px 0 rgba(30, 41, 59, 0.18) !important;
  border-bottom: 1px solid #334155 !important;
}

:global(:root[data-theme="dark"]) {
  .assessment-result-item {
    background: #1e293b;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  /* Remove .assessment-result-item-header hover here, now handled above */
  
  .assessment-result-item.expanded .assessment-result-item-header {
    border-bottom-color: #334155;
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

<style lang="scss">
// Unscoped dark mode styles for topic tags
:root[data-theme="dark"] {
  .assessment-result-item .topic-tag {
    &.topic-perfect {
      color: #4ade80 !important;
    }
    
    &.topic-good {
      color: #22d3ee !important;
    }
    
    &.topic-fair {
      color: #fbbf24 !important;
    }
    
    &.topic-poor {
      color: #fb923c !important;
    }
    
    &.topic-fail {
      color: #ef8e8e !important;
    }
    
    &.topic-neutral {
      color: #9ca3af !important;
    }
  }
}
</style>
