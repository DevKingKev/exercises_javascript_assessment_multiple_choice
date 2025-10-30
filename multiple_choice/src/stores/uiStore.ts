import { defineStore } from 'pinia';
import { ref } from 'vue';

export type DialogType = 'alert' | 'confirm';

export interface DialogConfig {
    title: string;
    message: string;
    type: DialogType;
    isDanger?: boolean;
    confirmText?: string;
    cancelText?: string;
}

export const useUiStore = defineStore( 'ui', () => {
    // State
    const loading = ref<boolean>( false );
    const loadingMessage = ref<string>( 'Loading...' );
    const loadingSubtext = ref<string>( 'Please wait...' );

    const dialogVisible = ref<boolean>( false );
    const dialogConfig = ref<DialogConfig>( {
        title: '',
        message: '',
        type: 'alert'
    } );
    const dialogResolve = ref<( ( value: boolean ) => void ) | null>( null );

    // Actions
    function showLoading ( message: string = 'Loading...', subtext: string = 'Please wait...' ) {
        loading.value = true;
        loadingMessage.value = message;
        loadingSubtext.value = subtext;
    }

    function hideLoading () {
        loading.value = false;
    }

    function showAlert ( title: string, message: string ): Promise<void> {
        return new Promise( ( resolve ) => {
            dialogConfig.value = {
                title,
                message,
                type: 'alert',
                confirmText: 'OK'
            };
            dialogVisible.value = true;
            dialogResolve.value = () => {
                resolve();
            };
        } );
    }

    function showConfirm (
        title: string,
        message: string,
        isDanger: boolean = false
    ): Promise<boolean> {
        return new Promise( ( resolve ) => {
            dialogConfig.value = {
                title,
                message,
                type: 'confirm',
                isDanger,
                confirmText: 'Confirm',
                cancelText: 'Cancel'
            };
            dialogVisible.value = true;
            dialogResolve.value = resolve;
        } );
    }

    function closeDialog ( confirmed: boolean = false ) {
        dialogVisible.value = false;
        if ( dialogResolve.value ) {
            dialogResolve.value( confirmed );
            dialogResolve.value = null;
        }
    }

    return {
        // State
        loading,
        loadingMessage,
        loadingSubtext,
        dialogVisible,
        dialogConfig,

        // Actions
        showLoading,
        hideLoading,
        showAlert,
        showConfirm,
        closeDialog
    };
} );
