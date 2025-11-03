import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useGlobalStore } from '@/stores/globalStore';

// Create Vue app
const app = createApp( App );

// Use Pinia for state management
const pinia = createPinia();
app.use( pinia );

// Initialize global settings (language detection) before mounting so
// components can read the selected language during setup. initLanguage()
// may perform a runtime fetch of a deployment YAML, so we await it here.
( async () => {
    try {
        const globalStore = useGlobalStore();
        await globalStore.initLanguage();
    } catch ( e ) {
        // non-fatal: continue even if store init fails
        // eslint-disable-next-line no-console
        console.error( 'Error initializing global store language:', e );
    }

    // Use Vue Router
    app.use( router );

    // Mount the app
    app.mount( '#app' );
} )();
