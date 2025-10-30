<template>
  <Teleport to="body">
    <dialog
      ref="dialogRef"
      class="custom-dialog"
      @click="handleBackdropClick"
    >
      <div class="dialog-content">
        <div class="dialog-header">
          <h3 class="dialog-title">{{ title }}</h3>
        </div>
        <div class="dialog-body">
          <p class="dialog-message">{{ message }}</p>
        </div>
        <div class="dialog-footer">
          <button
            v-if="type === 'confirm'"
            class="dialog-btn dialog-btn-cancel"
            @click="handleCancel"
          >
            {{ cancelText }}
          </button>
          <button
            class="dialog-btn dialog-btn-confirm"
            :class="{ danger: isDanger }"
            @click="handleConfirm"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  type?: 'alert' | 'confirm';
  isDanger?: boolean;
  confirmText?: string;
  cancelText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'alert',
  isDanger: false,
  confirmText: 'OK',
  cancelText: 'Cancel'
});

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);

watch(() => props.visible, (newVal) => {
  if (newVal && dialogRef.value) {
    dialogRef.value.showModal();
  } else if (!newVal && dialogRef.value) {
    dialogRef.value.close();
  }
});

function handleConfirm() {
  emit('confirm');
}

function handleCancel() {
  emit('cancel');
}

function handleBackdropClick(e: MouseEvent) {
  if (e.target === dialogRef.value) {
    emit('cancel');
  }
}
</script>

<style scoped lang="scss">
.custom-dialog {
  border: none;
  border-radius: 12px;
  padding: 0;
  min-width: 400px;
  max-width: 90vw;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
}

.dialog-content {
  padding: 0;
}

.dialog-header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid #e1e8ed;
}

.dialog-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.dialog-body {
  padding: 24px;
}

.dialog-message {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #34495e;
}

.dialog-footer {
  padding: 16px 24px 24px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.dialog-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
}

.dialog-btn-cancel {
  background: #ecf0f1;
  color: #2c3e50;

  &:hover {
    background: #d5dbdb;
  }
}

.dialog-btn-confirm {
  background: #3498db;
  color: white;

  &:hover {
    background: #2980b9;
  }

  &.danger {
    background: #e74c3c;

    &:hover {
      background: #c0392b;
    }
  }
}
</style>
