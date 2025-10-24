#!/usr/bin/env node
// Dev runner: orchestrates tsc watchers and a single node server process
// - Starts client and server `tsc --watch`
// - Waits for `dist/server.js` to appear and launches the server
// - Watches `dist/server.js` and restarts the server on changes (debounced)

const { spawn } = require('child_process');
const chokidar = require('chokidar');
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

let tscClient = null;
let tscServer = null;
let serverProcess = null;
let restarting = false;
let restartTimer = null;

function startTscWatchers () {
    console.log('[dev-runner] Starting tsc watchers...');
    tscClient = spawnTsc('tsconfig.client.json', 'tsc-client');
    tscServer = spawnTsc('tsconfig.server.json', 'tsc-server');
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
    serverProcess = spawn('node', ['dist/server.js'], { cwd: PROJECT_ROOT });
    prefixStream('server', serverProcess.stdout, false);
    prefixStream('server', serverProcess.stderr, true);
    serverProcess.on('exit', (code, sig) => {
        console.log(`[dev-runner] server exited with ${code} ${sig || ''}`);
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
    if (fs.existsSync(DIST_SERVER)) {
        startServer();
        return;
    }

    const w = chokidar.watch(DIST_SERVER, { persistent: true, ignoreInitial: false });
    w.on('add', () => {
        console.log('[dev-runner] Detected dist/server.js (initial build)');
        startServer();
        // from now on watch for changes
        w.close();
        watchDistServerChanges();
    });
}

function watchDistServerChanges () {
    const watcher = chokidar.watch(DIST_SERVER, { persistent: true, ignoreInitial: true });
    watcher.on('change', (p) => {
        console.log(`[dev-runner] Detected change in ${p}`);
        restartServerDebounced();
    });
    watcher.on('unlink', (p) => console.log(`[dev-runner] ${p} removed`));
}

function shutdown () {
    console.log('[dev-runner] Shutting down...');
    if (tscClient) tscClient.kill();
    if (tscServer) tscServer.kill();
    if (serverProcess) serverProcess.kill();
    process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start watchers and server orchestration
startTscWatchers();
waitForFirstServerBuildThenStart();

console.log('[dev-runner] Dev runner started. Press Ctrl+C to stop.');
