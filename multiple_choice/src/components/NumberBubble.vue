<template>
  <div class="component-number-bubble" v-if="value !== null && value !== undefined" :aria-hidden="ariaHidden">
    <span
      class="number-bubble-value"
      :style="bubbleStyle"
    >{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: string | number | null | undefined;
  // size in pixels for the bubble height/width (optional)
  size?: number;
  ariaHidden?: boolean;
}>();

const size = computed(() => (props.size && props.size > 0) ? props.size : 36);
const ariaHidden = computed(() => props.ariaHidden ?? true);

const bubbleStyle = computed(() => ({
  minWidth: `${size.value}px`,
  height: `${size.value}px`,
  lineHeight: `${size.value}px`,
  fontSize: `${Math.round(size.value * 0.55)}px`
}));

</script>

<style scoped lang="scss">
.component-number-bubble {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.number-bubble-value {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, #6b46c1, #5a67d8);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(88, 87, 223, 0.28);
}

:root[data-theme="dark"] .number-bubble {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
}
</style>
