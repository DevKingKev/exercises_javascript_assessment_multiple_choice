import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig( {
    root: process.cwd(),
    server: {
        port: 5173,
        proxy: {
            // Proxy API requests to the Express server in dev
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false
            }
        }
    },
    build: {
        // Place client build into dist/public so it doesn't clash with server JS
        outDir: path.resolve( process.cwd(), 'dist', 'public' ),
        emptyOutDir: false,
        sourcemap: true
    }
} );
