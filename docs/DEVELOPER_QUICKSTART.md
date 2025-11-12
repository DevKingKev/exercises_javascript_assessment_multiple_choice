# Developer Quick Start

**Last Updated**: October 30, 2025

This quick-start describes how to set up and run the repository locally for development. The `multiple_choice` application has been migrated to **Vue 3 + Vite + Pinia + TypeScript** with modern component architecture and state management.

## Prerequisites
- Node.js (18+ recommended for Vue 3)
- npm or pnpm (pnpm recommended for faster installs)
- A POSIX-like environment (Linux/macOS). On Linux you may need to increase inotify limits for reliable file watching.
- Modern browser with ES2020+ support

## Install dependencies (project root)
```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm install
```

## Helpful npm scripts (Vue 3 + Vite Application)

Located in `multiple_choice/package.json`:

- `npm run dev` — Start complete development environment (Vite HMR + Express + TypeScript watch)
- `npm run build` — Build for production (compiles server TypeScript + builds client with Vite)
- `npm run build:server` — Compile server TypeScript only
- `npm run build:client` — Build client with Vite only
- `npm start` — Start production server (requires `npm run build` first)
- `npm run preview` — Preview production build with Vite
- `npm run type-check` — Validate TypeScript without compilation (Vue type checking)
- `npm run test` — Run unit tests with Vitest
- `npm run test:coverage` — Run tests with coverage report
- `npm run clean` — Remove `dist/` build directory

**Note**: The application is now a Vue 3 SPA. The old TypeScript watch and nodemon scripts are no longer needed.

## Development Workflow (Vue 3 + Vite)

### Standard Development (Recommended)

Single command starts everything:

```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm run dev
```

This orchestrates:
- TypeScript watch compilation for Express server
- Vite dev server with hot module replacement (HMR) on port 5173
- Express server on port 3001 (proxies to Vite for client requests)
- Automatic server restarts on TypeScript changes

**Access the application**: Open http://localhost:3001 in your browser

**What you get**:
- ⚡ Instant HMR for Vue components, styles, and TypeScript
- 🔄 Auto-restart of Express server when server code changes
- 🎯 Single port for development (3001)
- 📝 Clear console logging for debugging

### Setting the Assessment Domain for Local Testing

The application supports multiple assessment domains (JavaScript, HTML, CSS, PHP, Python, etc.). By default, it uses **JavaScript**. You can override this for local testing in several ways:

#### Option 1: Environment Variable (Recommended for Development)

Set the `VITE_ASSESSMENT_DOMAIN` environment variable to change the default domain. This is the Vite-prefixed variable the client will read via `import.meta.env.VITE_ASSESSMENT_DOMAIN`:

```bash
# Test HTML assessments
VITE_ASSESSMENT_DOMAIN=html pnpm run dev

# Test CSS assessments
VITE_ASSESSMENT_DOMAIN=css pnpm run dev

# Test PHP assessments
VITE_ASSESSMENT_DOMAIN=php pnpm run dev
```

**Supported domains**: `javascript`, `html`, `css`, `python`, `php`, `ruby`, `java`, `csharp`, `cpp`, `sql`

#### Option 2: Browser localStorage Override

You can dynamically change the domain in the browser console:

```javascript
// Switch to HTML assessments
localStorage.setItem('app:language', 'html');
location.reload();

// Switch to CSS assessments
localStorage.setItem('app:language', 'css');
location.reload();

// Switch back to JavaScript
localStorage.setItem('app:language', 'javascript');
location.reload();

// Clear override (use default)
localStorage.removeItem('app:language');
location.reload();
```

This is useful for:
- Quick testing without restarting the dev server
- Testing domain switching in the UI
- Debugging domain-specific issues

#### Option 3: Subdomain Detection (Production)

In production deployments, the domain is auto-detected from the subdomain:
- `javascript.yourdomain.com` → JavaScript assessments
- `html.yourdomain.com` → HTML assessments
- `css.yourdomain.com` → CSS assessments

**Note**: localhost and IP addresses are excluded from subdomain detection.

#### Domain Resolution Priority

The application resolves the domain in this order:
1. **localStorage override** (`app:language` key) — highest priority
2. **Environment variable** (`VITE_ASSESSMENT_DOMAIN`)
3. **Hostname subdomain** (production deployments)
4. **Fallback** to `javascript`

#### API Endpoints by Domain

The Express server serves assessments from domain-specific directories:

```
GET /api/assessments/javascript     → assessments/javascript/{easy,medium,hard}/
GET /api/assessments/html           → assessments/html/{easy,medium,hard}/
GET /api/assessments/css            → assessments/css/{easy,medium,hard}/
GET /api/assessments/php            → assessments/php/{easy,medium,hard}/
```

Individual assessment endpoint:
```
GET /api/assessment/:domain/:difficulty/:id
```

Example: `GET /api/assessment/html/easy/assessment1`

### Checking individual assessment files with the scripts

Two helper scripts live in `scripts/` to help inspect and (optionally) rebalance individual assessment files.

- `scripts/analysis_assessments.js` — analyzes assessment files and produces a JSON report (`assessment-report.json`) containing per-file counts and per-question notes (structural warnings, missing fields, etc.).
- `scripts/rebalance_assessments.js` — proposes symmetric option swaps to even A/B/C/D distributions. By default it runs in dry-run mode and writes a `rebalance-report.json`. Use `--apply` to make changes in-place; the script creates timestamped backups (e.g. `assessment10.js.bak.<timestamp>`).

Quick per-file workflow and examples (run from the repository root for predictable report locations):

1) Analyze a single file

```bash
node ./scripts/analysis_assessments.js --file=multiple_choice/assessments/javascript/easy/assessment10.js
# Console output will show per-file counts; a JSON report (assessment-report.json) is written as indicated by the script output.
```

2) Dry-run a rebalance for a single file

```bash
node ./scripts/rebalance_assessments.js --file=multiple_choice/assessments/javascript/easy/assessment10.js
# Default is dry-run. The script prints DRY-RUN lines and writes rebalance-report.json (dry-run results).
```

3) Apply a rebalance for a single file (creates a backup)

```bash
node ./scripts/rebalance_assessments.js --file=multiple_choice/assessments/javascript/easy/assessment10.js --apply
# On apply the script will create a backup next to the file (e.g. assessment10.js.bak.<timestamp>) and update the file in-place.
```

4) Scan backups for combinational-answer candidates (dry-run)

```bash
node ./scripts/rebalance_assessments.js --scan-backups-combinational
# Writes restore-report.json listing candidate indices found inside .bak.* backups.
```

5) Restore combinational questions from the scan (apply)

```bash
node ./scripts/rebalance_assessments.js --restore-combinational --apply
# Applies restores listed in restore-report.json; creates a second backup before writing modified files.
```

Notes and tips
- Report file location can vary depending on working directory; check the console output for the exact path the script wrote.
- Backups are created next to the assessment file as `<filename>.bak.<timestamp>` when `--apply` is used — keep these until you confirm the changes.
- The rebalance script protects questions that contain combinational language (for example, the word "both") and enforces that "All of the above" / "None of the above" are placed into option D. Always inspect `rebalance-report.json` and `restore-report.json` before applying wide changes.
- To operate on a whole folder use `--dir=multiple_choice/assessments/javascript/easy` instead of `--file=`.

### Production Build

```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm run build
npm start
```

This:
1. Compiles server TypeScript to `dist/server.js`
2. Builds optimized client bundle to `dist/public/`
3. Starts Express serving static files from `dist/public/`

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

## Application Architecture

### Vue 3 Components
- **Views**: HomeView, AssessmentView, ResultsView
- **Components**: LoadingSpinner, CustomDialog, DifficultySelector, AssessmentCard, AssessmentResultItem, ProgressBar, QuestionGrid
- **Stores**: assessmentStore (Pinia), resultsStore (Pinia), uiStore (Pinia)
- **Router**: Vue Router with client-side navigation
- **Composables**: useTimer for assessment countdown

### API Endpoints (Express Server)
- `GET http://localhost:3001/api/assessments/:language` — List assessments for a language (e.g. `/api/assessments/javascript`)
- `GET http://localhost:3001/api/assessment/:language/:difficulty/:id` — Load specific assessment (preferred)

Notes:
- The server previously supported a query-style `GET /api/assessments?language=...` endpoint; that form has been removed. Use the path-style endpoints above.
- For backwards compatibility, the server still exposes a legacy single-assessment route `GET /api/assessment/:difficulty/:id` which will look for assessments in the older non-language layout.

### State Management
- **Pinia stores** handle all application state
- **localStorage** for results persistence
- **Reactive updates** throughout the component tree

## Troubleshooting

### Port Already in Use

If the server reports `EADDRINUSE`, another process is using port 3001:

```bash
# Find the process using the port
lsof -i :3001
# or
ss -ltnp | grep 3001

# Kill the process
kill -9 <PID>
```

### Vite Not Starting

If Vite fails to start or HMR isn't working:

1. Check that port 5173 is available
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### TypeScript Errors

If you see type errors:

```bash
# Run type check to see all errors
npm run type-check

# Clean and rebuild
npm run clean
npm run build
```

### Watch Limit Issues (Linux)

If you hit `EMFILE: too many open files` errors, increase inotify limits:

```bash
# Temporary (session only)
sudo sysctl fs.inotify.max_user_watches=524288

# Permanent (persist across reboots)
echo 'fs.inotify.max_user_watches=524288' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

## Quick Start Commands

```bash
# 1. Install dependencies
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm install

# 2. Start development server (single command)
npm run dev

# 3. Open browser to http://localhost:3001

# For production build:
npm run build
npm start
```

## Project Structure

```
multiple_choice/
├── src/
│   ├── App.vue                    # Root Vue component
│   ├── main.ts                    # Vue app entry point
│   ├── components/                # Reusable Vue components
│   ├── views/                     # Route view components
│   ├── stores/                    # Pinia state management
│   ├── router/                    # Vue Router configuration
│   ├── composables/               # Reusable composition functions
│   ├── models/                    # TypeScript type definitions
│   └── utils/                     # Utility functions
├── styles/                        # Global SCSS files
├── tests/                         # Assessment test modules
├── server.ts                      # Express API server
├── vite.config.ts                 # Vite build configuration
├── tsconfig.app.json              # Vue app TypeScript config
└── scripts/dev-runner.js          # Development orchestration
```

## Key Features

- **Vue 3 Composition API** with `<script setup>` syntax
- **Pinia** for state management
- **Vue Router** for client-side navigation
- **TypeScript** for type safety
- **Vite** for fast development and optimized builds
- **SCSS** with design system variables
- **Hot Module Replacement (HMR)** for instant feedback
- **Component testing** with Vitest
- **localStorage** for results persistence

## Testing

```bash
# Run tests in watch mode
npm test

# Run tests once with coverage
npm run test:coverage

# View coverage report
open coverage/index.html
```

## Additional Resources

- `multiple_choice/README.md` — Project-specific documentation
- `CODERBYTE_CONTEXT.md` — Comprehensive project context and history
- `multiple_choice/tests/` — Assessment test modules
- Vue 3 Documentation: https://vuejs.org/
- Pinia Documentation: https://pinia.vuejs.org/
- Vite Documentation: https://vitejs.dev/

---

**Note**: This project has been fully migrated to Vue 3. The previous vanilla TypeScript implementation has been preserved in `src/main.ts.backup` for reference.
