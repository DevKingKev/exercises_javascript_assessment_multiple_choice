# Developer Quick Start

This quick-start describes how to set up and run the repository locally for development (both `multiple_choice` TypeScript app and `easy_1` JS app).

## Prerequisites
- Node.js (14+ recommended)
- npm
- A POSIX-like environment (Linux/macOS). On Linux you may need to increase inotify limits for reliable file watching.

## Install dependencies (project root)
```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm install
```

## Helpful npm scripts (located in `multiple_choice/package.json`)
- `npm run build` — Compile both client and server TypeScript configs
- `npm run build:watch` — Run TypeScript in watch mode (rebuilds on change)
- `npm run dev` — Quick development flow: build, start watchers, then start server (non-auto-restart server)
- `npm run dev:nodemon` — Alternative: using `nodemon` to restart on `dist` changes (may require extra flags on some systems)
- `npm run dev:once` — One-time build and run
- `npm start` — Production-style build and run
- `npm run type-check` — Run `tsc` type-only checks
- `npm run clean` — Remove `dist/`

## Typical development workflows

1) Fast iteration (simple, reliable)

- Start TypeScript watchers and a server in separate terminals.

Terminal A (watch compile):
```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm run build:watch
```

Terminal B (run server):
```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm run dev:once
# OR, start the server directly for a single run:
node dist/server.js
```

When files change you will see TypeScript recompile in Terminal A. If you use `dev:once` you must restart the server after a rebuild; for auto-restart use `dev:nodemon` (see below).

2) Auto-restart (convenience, can hit OS watch limits)

```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm run dev:nodemon
```

Notes:
- `dev:nodemon` uses `npx nodemon` and may use polling or `--legacy-watch` if your OS has file watch limits. If you encounter `EMFILE: too many open files` or excessive watcher errors, try the fixes below.

## If you hit watch/`EMFILE` issues

On Linux, increase the `inotify` watch limit so tsc/nodemon can watch many files.

Short-term (session only):
```bash
# raise inotify limit temporarily (root required)
sudo sysctl fs.inotify.max_user_watches=524288
```

Permanent (persist across reboots):
```bash
# add the line to /etc/sysctl.conf
echo 'fs.inotify.max_user_watches=524288' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

Alternatively, use polling-based watchers which are less efficient but avoid kernel watch limits, e.g. nodemon `--legacy-watch` or `--polling-interval`.

## Quick checks
- Open `index.html` in `multiple_choice` after running `npm run build` or while `npm run build:watch` is active — the page expects `dist/app.js`.
- API endpoints:
  - `GET http://localhost:3001/api/tests`
  - `GET http://localhost:3001/api/test/:difficulty/:testId`

## Troubleshooting notes
- If the server reports `EADDRINUSE`, another process is using the port; find it with:
```bash
lsof -i :3001
# or
ss -ltnp | grep 3001
```
- If you repeatedly see watch errors, prefer the manual separate terminal workflow (build:watch + dev:once) — it's robust for constrained environments.

## Recommended minimal commands to paste/run
```bash
# Install deps
npm install

# Start TypeScript watchers (terminal A)
npm run build:watch

# Start server (terminal B)
npm run dev:once

# Optional: use nodemon (auto-restart) if your system supports it
npm run dev:nodemon
```

## Where to look next
- `multiple_choice/README.md` — project-specific README
- `CODERBYTE_CONTEXT.md` (repo root) — high-level context and design notes
- `multiple_choice/tests/` — test modules used by the platform

---
This quick-start aims to be conservative (works on systems with watch limits) while also describing the convenient auto-restart option. If you'd like I can add a `CONTRIBUTING.md` or place this quick-start inside `multiple_choice/README.md` as well.