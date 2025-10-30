import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useUiStore } from '../uiStore';

describe( 'uiStore', () => {
    beforeEach( () => {
        setActivePinia( createPinia() );
    } );

    describe( 'Initial State', () => {
        it( 'initializes with default values', () => {
            const store = useUiStore();

            expect( store.loading ).toBe( false );
            expect( store.loadingMessage ).toBe( 'Loading...' );
            expect( store.loadingSubtext ).toBe( 'Please wait...' );
            expect( store.dialogVisible ).toBe( false );
            expect( store.dialogConfig ).toEqual( {
                title: '',
                message: '',
                type: 'alert'
            } );
        } );
    } );

    describe( 'Actions - Loading', () => {
        it( 'showLoading sets loading state with default messages', () => {
            const store = useUiStore();

            store.showLoading();

            expect( store.loading ).toBe( true );
            expect( store.loadingMessage ).toBe( 'Loading...' );
            expect( store.loadingSubtext ).toBe( 'Please wait...' );
        } );

        it( 'showLoading sets loading state with custom messages', () => {
            const store = useUiStore();

            store.showLoading( 'Fetching data...', 'This may take a moment' );

            expect( store.loading ).toBe( true );
            expect( store.loadingMessage ).toBe( 'Fetching data...' );
            expect( store.loadingSubtext ).toBe( 'This may take a moment' );
        } );

        it( 'hideLoading clears loading state', () => {
            const store = useUiStore();
            store.showLoading();

            store.hideLoading();

            expect( store.loading ).toBe( false );
        } );
    } );

    describe( 'Actions - Alert Dialog', () => {
        it( 'showAlert displays alert dialog with correct config', () => {
            const store = useUiStore();

            const alertPromise = store.showAlert( 'Success', 'Operation completed successfully' );

            expect( store.dialogVisible ).toBe( true );
            expect( store.dialogConfig.title ).toBe( 'Success' );
            expect( store.dialogConfig.message ).toBe( 'Operation completed successfully' );
            expect( store.dialogConfig.type ).toBe( 'alert' );
            expect( store.dialogConfig.confirmText ).toBe( 'OK' );

            // Close dialog and verify promise resolves
            store.closeDialog();
            return alertPromise;
        } );

        it( 'showAlert promise resolves when dialog is closed', async () => {
            const store = useUiStore();

            const alertPromise = store.showAlert( 'Test', 'Test message' );

            // Dialog should be visible
            expect( store.dialogVisible ).toBe( true );

            // Close dialog
            store.closeDialog();

            // Promise should resolve
            await expect( alertPromise ).resolves.toBeUndefined();

            // Dialog should be hidden
            expect( store.dialogVisible ).toBe( false );
        } );
    } );

    describe( 'Actions - Confirm Dialog', () => {
        it( 'showConfirm displays confirm dialog with correct config', () => {
            const store = useUiStore();

            const confirmPromise = store.showConfirm( 'Delete Item', 'Are you sure you want to delete this item?' );

            expect( store.dialogVisible ).toBe( true );
            expect( store.dialogConfig.title ).toBe( 'Delete Item' );
            expect( store.dialogConfig.message ).toBe( 'Are you sure you want to delete this item?' );
            expect( store.dialogConfig.type ).toBe( 'confirm' );
            expect( store.dialogConfig.isDanger ).toBe( false );
            expect( store.dialogConfig.confirmText ).toBe( 'Confirm' );
            expect( store.dialogConfig.cancelText ).toBe( 'Cancel' );

            // Close to resolve promise
            store.closeDialog( false );
            return confirmPromise;
        } );

        it( 'showConfirm with isDanger=true sets danger flag', () => {
            const store = useUiStore();

            store.showConfirm( 'Warning', 'This action is dangerous', true );

            expect( store.dialogConfig.isDanger ).toBe( true );

            // Close to resolve promise
            store.closeDialog( false );
        } );

        it( 'showConfirm resolves with true when confirmed', async () => {
            const store = useUiStore();

            const confirmPromise = store.showConfirm( 'Confirm Action', 'Proceed?' );

            // Confirm the dialog
            store.closeDialog( true );

            // Promise should resolve with true
            await expect( confirmPromise ).resolves.toBe( true );
            expect( store.dialogVisible ).toBe( false );
        } );

        it( 'showConfirm resolves with false when cancelled', async () => {
            const store = useUiStore();

            const confirmPromise = store.showConfirm( 'Confirm Action', 'Proceed?' );

            // Cancel the dialog
            store.closeDialog( false );

            // Promise should resolve with false
            await expect( confirmPromise ).resolves.toBe( false );
            expect( store.dialogVisible ).toBe( false );
        } );
    } );

    describe( 'Actions - closeDialog', () => {
        it( 'closeDialog hides dialog', () => {
            const store = useUiStore();

            store.showAlert( 'Test', 'Test message' );
            expect( store.dialogVisible ).toBe( true );

            store.closeDialog();
            expect( store.dialogVisible ).toBe( false );
        } );

        it( 'closeDialog defaults to false for confirmed value', async () => {
            const store = useUiStore();

            const confirmPromise = store.showConfirm( 'Test', 'Test' );
            store.closeDialog(); // No argument, defaults to false

            await expect( confirmPromise ).resolves.toBe( false );
        } );

        it( 'closeDialog with true resolves confirm as confirmed', async () => {
            const store = useUiStore();

            const confirmPromise = store.showConfirm( 'Test', 'Test' );
            store.closeDialog( true );

            await expect( confirmPromise ).resolves.toBe( true );
        } );
    } );

    describe( 'Multiple Dialog Interactions', () => {
        it( 'handles multiple sequential alerts', async () => {
            const store = useUiStore();

            const alert1 = store.showAlert( 'First', 'First message' );
            expect( store.dialogConfig.title ).toBe( 'First' );
            store.closeDialog();
            await alert1;

            const alert2 = store.showAlert( 'Second', 'Second message' );
            expect( store.dialogConfig.title ).toBe( 'Second' );
            store.closeDialog();
            await alert2;

            expect( store.dialogVisible ).toBe( false );
        } );

        it( 'handles mixed alert and confirm dialogs', async () => {
            const store = useUiStore();

            const alert = store.showAlert( 'Info', 'Information message' );
            expect( store.dialogConfig.type ).toBe( 'alert' );
            store.closeDialog();
            await alert;

            const confirm = store.showConfirm( 'Confirm', 'Confirm message' );
            expect( store.dialogConfig.type ).toBe( 'confirm' );
            store.closeDialog( true );
            const confirmed = await confirm;

            expect( confirmed ).toBe( true );
            expect( store.dialogVisible ).toBe( false );
        } );
    } );

    describe( 'Loading and Dialog Interaction', () => {
        it( 'loading and dialog states are independent', () => {
            const store = useUiStore();

            // Set loading
            store.showLoading( 'Loading data...' );
            expect( store.loading ).toBe( true );

            // Show dialog
            store.showAlert( 'Alert', 'Alert message' );
            expect( store.dialogVisible ).toBe( true );

            // Both should be active
            expect( store.loading ).toBe( true );
            expect( store.dialogVisible ).toBe( true );

            // Hide loading
            store.hideLoading();
            expect( store.loading ).toBe( false );
            expect( store.dialogVisible ).toBe( true );

            // Close dialog
            store.closeDialog();
            expect( store.loading ).toBe( false );
            expect( store.dialogVisible ).toBe( false );
        } );
    } );
} );
