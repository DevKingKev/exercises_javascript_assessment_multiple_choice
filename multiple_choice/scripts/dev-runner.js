#!/usr/bin/env node
// Dev runner: orchestrates tsc watchers and a single node server process
// - Starts client and server `tsc --watch`
// - Waits for `dist/server.js` to appear and launches the server
// - Watches `dist/server.js` and restarts the server on changes (debounced)

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');


const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_SERVER = path.join(PROJECT_ROOT, 'dist', 'server.js');

function prefixStream (name, stream, isErr = false) {
    stream.on('data', chunk => {
        const lines = chunk.toString().split(/\r?\n/).filter(Boolean);
        for (const l of lines) {
            const out = `[${name}] ${l}`;
            if (isErr) console.error(out);
            else console.log(out);
        }
    });
}

function spawnTsc (project, label) {
    // Use npx to ensure local tsc is used when available
    const args = ['tsc', '-p', project, '--watch'];
    const p = spawn('npx', args, { cwd: PROJECT_ROOT });
    prefixStream(label, p.stdout, false);
    prefixStream(label, p.stderr, true);
    p.on('exit', code => console.log(`[${label}] exited with ${code}`));
    return p;
}

let tscServer = null;
let viteProcess = null;
let serverProcess = null;
let restarting = false;
let restartTimer = null;

function startTscWatchers () {
    console.log('[dev-runner] Starting tsc watchers...');
    tscServer = spawnTsc('tsconfig.server.json', 'tsc-server');
    // Start Vite dev server for client HMR
    spawnViteDev();
}

function spawnViteDev () {
    console.log('[dev-runner] Starting Vite dev server...');
    // Use npx to prefer local vite installation
    // Some systems hit OS watch limits (EMFILE). Enable polling for chokidar inside Vite
    // to avoid creating a large number of inotify watchers. Polling is less efficient
    // but more portable for low-watch-limit environments.
    const env = Object.assign({}, process.env, { CHOKIDAR_USEPOLLING: 'true' });
    // Request a default port but allow Vite to auto-increment if taken.
    viteProcess = spawn('npx', ['vite', '--port', '5173'], { cwd: PROJECT_ROOT, env, stdio: ['inherit', 'pipe', 'pipe'] });

    // We need to capture Vite's stdout to detect the actual port it bound to
    // so we can pass it to the server process and wait for readiness before
    // launching the Express server (avoids race where Express serves .ts files).
    let buffer = '';
    if (viteProcess.stdout) {
        viteProcess.stdout.on('data', chunk => {
            const s = chunk.toString();
            buffer += s;
            // print vite chunk with prefix (avoid reusing prefixStream with a fake stream)
            const _lines = s.split(/\r?\n/).filter(Boolean);
            for (const _l of _lines) console.log(`[vite] ${_l}`);
            // Attempt to extract the Local URL line, e.g. "Local: http://localhost:5176/"
            // Match localhost, 127.0.0.1, 0.0.0.0 or [::1]
            const m = buffer.match(/Local:\s+http:\/\/(?:localhost|127(?:\\.0\\.0\\.1)?|0\\.0\\.0\\.0|\[::1\]):(\d+)/i);
            if (m) {
                const port = m[1];
                onViteReady(port);
            }
            // keep buffer reasonably small
            if (buffer.length > 2000) buffer = buffer.slice(-2000);
        });
    }
    if (viteProcess.stderr) prefixStream('vite', viteProcess.stderr, true);
    viteProcess.on('exit', (code) => console.log(`[vite] exited with ${code}`));

    // Start polling for Vite after a short delay (give it time to start)
    setTimeout(() => {
        probeVitePorts();
    }, 2000);

    return viteProcess;
}

// Fallback probe: if Vite doesn't print the Local URL for some reason, try
// a few likely ports and perform an HTTP probe to discover the dev server.
function probeVitePorts (ports = [5173, 5174, 5175, 5176, 5177], timeout = 2000) {
    if (globalThis.__VITE_PORT__) return; // Already detected

    const http = require('http');

    async function tryPort (port) {
        return new Promise((resolve, reject) => {
            const req = http.request({
                method: 'GET',
                hostname: '127.0.0.1',
                port: port,
                path: '/',
                timeout
            }, res => {
                if (res.statusCode && res.statusCode < 400) {
                    resolve(port);
                } else {
                    reject(new Error('bad status'));
                }
            });
            req.on('error', reject);
            req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
            req.end();
        });
    }

    (async () => {
        for (const p of ports) {
            if (globalThis.__VITE_PORT__) return;
            try {
                await tryPort(p);
                console.log(`[dev-runner] Found Vite on port ${p} via HTTP probe`);
                onViteReady(String(p));
                return;
            } catch (e) {
                // Try next port
            }
        }
        // If we still haven't found it, retry after a delay
        if (!globalThis.__VITE_PORT__) {
            console.log('[dev-runner] Vite not detected yet, will retry probe...');
            setTimeout(() => probeVitePorts(ports, timeout), 3000);
        }
    })();
}

function startServer () {
    if (!fs.existsSync(DIST_SERVER)) {
        console.log('[dev-runner] dist/server.js not found yet, waiting for build...');
        return;
    }

    if (serverProcess) {
        console.log('[dev-runner] Server already running, skipping start');
        return;
    }

    console.log('[dev-runner] Spawning server: node dist/server.js');
    // Propagate current env and set VITE_DEV=1 so server can detect dev mode and redirect to Vite
    const env = Object.assign({}, process.env, { VITE_DEV: '1', VITE_PORT: (globalThis.__VITE_PORT__ || '5173') });
    serverProcess = spawn('node', ['dist/server.js'], { cwd: PROJECT_ROOT, env, stdio: ['ignore', 'pipe', 'pipe'] });

    prefixStream('server', serverProcess.stdout, false);
    prefixStream('server', serverProcess.stderr, true);

    serverProcess.on('error', (err) => {
        console.error(`[dev-runner] ❌ Server process error:`, err);
    });

    serverProcess.on('exit', (code, sig) => {
        console.log(`[dev-runner] server exited with code ${code} ${sig || ''}`);
        if (code !== 0 && code !== null) {
            console.error(`[dev-runner] ❌ Server crashed with exit code ${code}`);
        }
        serverProcess = null;
    });
}

function restartServerDebounced () {
    if (restarting) return;
    restarting = true;
    if (restartTimer) clearTimeout(restartTimer);
    restartTimer = setTimeout(() => {
        console.log('[dev-runner] Restarting server...');
        if (serverProcess) {
            // try graceful shutdown
            try {
                serverProcess.kill('SIGINT');
            } catch (e) { }
        }
        // small delay to allow process to exit and file writes to settle
        setTimeout(() => {
            startServer();
            restarting = false;
        }, 350);
    }, 300);
}

function waitForFirstServerBuildThenStart () {
    // We must wait for both: the server build (dist/server.js) and Vite readiness
    // (so we know the actual VITE_PORT). Track both conditions and start server
    // only when both are satisfied.

    function checkAndStart () {
        const distReady = fs.existsSync(DIST_SERVER);
        const viteReady = !!globalThis.__VITE_PORT__;

        if (distReady && viteReady) {
            console.log('[dev-runner] ✅ Both dist/server.js and Vite are ready!');
            console.log(`[dev-runner] Starting server with VITE_PORT=${globalThis.__VITE_PORT__}`);
            startServer();
            watchDistServerChanges();
            return true;
        } else {
            if (!distReady) {
                console.log('[dev-runner] ⏳ Waiting for dist/server.js...');
            }
            if (!viteReady) {
                console.log('[dev-runner] ⏳ Waiting for Vite to be ready...');
            }
            return false;
        }
    }

    // Store the check function globally so other parts can trigger it
    globalThis.__checkAndStartServer__ = checkAndStart;

    // Try immediately
    if (checkAndStart()) {
        return;
    }

    // If dist doesn't exist yet, poll for it instead of using fs.watch (avoids EMFILE errors)
    if (!fs.existsSync(DIST_SERVER)) {
        const pollInterval = setInterval(() => {
            if (fs.existsSync(DIST_SERVER)) {
                console.log('[dev-runner] 📦 Detected dist/server.js (first build complete)');
                clearInterval(pollInterval);
                checkAndStart();
            }
        }, 500);
    }
}

function onViteReady (port) {
    if (globalThis.__VITE_PORT__) return; // already set
    globalThis.__VITE_PORT__ = port;
    console.log(`[dev-runner] 🚀 Vite dev server ready on port ${port}`);
    // Trigger server start check
    if (globalThis.__checkAndStartServer__) {
        globalThis.__checkAndStartServer__();
    }
}

function watchDistServerChanges () {
    // Poll for changes instead of using fs.watch (avoids EMFILE errors)
    let lastMtime = null;

    setInterval(() => {
        if (!fs.existsSync(DIST_SERVER)) {
            console.log(`[dev-runner] ${DIST_SERVER} removed`);
            return;
        }

        try {
            const stats = fs.statSync(DIST_SERVER);
            const currentMtime = stats.mtimeMs;

            if (lastMtime !== null && currentMtime !== lastMtime) {
                console.log(`[dev-runner] Detected change in ${DIST_SERVER}`);
                restartServerDebounced();
            }

            lastMtime = currentMtime;
        } catch (e) {
            // File might have been deleted/replaced temporarily
        }
    }, 1000); // Check every second
}

function shutdown () {
    console.log('[dev-runner] Shutting down...');
    if (tscServer) tscServer.kill();
    if (viteProcess) viteProcess.kill();
    if (serverProcess) serverProcess.kill();
    process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start watchers and server orchestration
startTscWatchers();
waitForFirstServerBuildThenStart();

console.log('[dev-runner] Dev runner started. Press Ctrl+C to stop.');
