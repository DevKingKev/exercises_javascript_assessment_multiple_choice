import { defineConfig } from 'vitest/config';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig( {
    plugins: [vue()],
    // Ensure the same alias as Vite so imports like "@/..." resolve during tests
    resolve: {
        alias: {
            '@': path.resolve( __dirname, './src' )
        }
    },
    test: {
        environment: 'jsdom',
        globals: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            reportsDirectory: './coverage'
        }
    }
} );
