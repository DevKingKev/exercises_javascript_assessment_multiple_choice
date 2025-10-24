# Multiple Choice Assessment Platform - Vite + TypeScript Edition

A comprehensive multiple choice assessment platform built with **Vite and TypeScript**, featuring instant hot module replacement, type safety, modern build tooling, and comprehensive progress tracking.

## Features

### ⚡ Modern Development Experience

- **Vite Dev Server**: Lightning-fast hot module replacement (HMR) for instant feedback
- **Development Proxy**: Express server proxies to Vite for seamless development workflow
- **Single Command Start**: `npm run dev` orchestrates everything automatically
- **Type-Safe Development**: Full TypeScript support with comprehensive type definitions
- **Automatic Restarts**: Server restarts automatically when code changes

### 🎯 Core Functionality

- **Dynamic Test Selection**: Choose from multiple difficulty levels (Easy, Medium, Hard)
- **Real-time Timer**: Configurable time limits with countdown display
- **Interactive Navigation**: Question grid for easy navigation between questions
- **Progress Tracking**: Visual progress indicators and completion status
- **Detailed Results**: Comprehensive scoring with topic breakdown and question review

### 📊 Progress Tracking System
- **Persistent Local Storage**: All exam results saved locally for historical analysis
- **Multi-level Organization**: Results organized by difficulty → test → individual attempts
- **Performance Analytics**: Track improvement over time with detailed metrics
- **Topic Analysis**: Identify areas needing improvement with topic-specific scoring
- **Attempt History**: Complete history of all test attempts with timestamps and scores

### 🌍 Internationalization
- **Locale-aware Date Formatting**: Automatic locale detection with proper fallbacks
- **Regional Date Formats**: Support for DD/MM/YYYY, MM/DD/YYYY, and other regional formats
- **Time Display**: 12/24-hour format based on user locale preferences

### 🔧 Vite + TypeScript Benefits

- **Instant HMR**: Changes reflect immediately without full page reloads
- **Type Safety**: Comprehensive interfaces and type definitions
- **Better Development Experience**: IntelliSense, auto-completion, and compile-time error checking
- **Optimized Builds**: Tree-shaking, code-splitting, and minification for production
- **Maintainable Code**: Clear contracts between components with strong typing
- **Modern JavaScript**: Latest ES features with backward compatibility

## Architecture

### Development Mode

```text
npm run dev
  ↓
scripts/dev-runner.js orchestrates:
  1. TypeScript watch (server) → dist/server.js
  2. Vite dev server → http://localhost:5173 (HMR enabled)
  3. Express server → http://localhost:3001
     ├─ /api/* → Handled by Express directly
     └─ /* → Proxied to Vite dev server
```

**User accesses**: `http://localhost:3001` (Express gateway)  
**Vite runs internally**: `http://localhost:5173` (proxied, not accessed directly)

### Production Build

```text
npm run build
  ↓
1. vite build → dist/public/ (optimized client bundle)
2. tsc -p tsconfig.server.json → dist/server.js
  ↓
npm start → Express serves static files from dist/public/
```

## Current Tests

### Easy Level
1. **JavaScript Fundamentals** - 20 questions, 30 minutes
2. **Advanced JavaScript Basics** - 30 questions, 30 minutes  
3. **JavaScript Methods & Operations** - 30 questions, 30 minutes
4. **Modern JavaScript & Programming Concepts** - 30 questions, 30 minutes

## Installation & Usage

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager

### Quick Start - Development Mode

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development environment:**

   ```bash
   npm run dev
   ```

   This single command automatically:
   - Compiles TypeScript server code in watch mode
   - Starts Vite dev server with HMR on port 5173
   - Starts Express server on port 3001
   - Sets up proxy routing
   - Monitors for changes and restarts as needed

3. **Open your browser to:** `http://localhost:3001`

   All changes to client code will hot-reload instantly!

### Production Build & Deployment

1. **Build for production:**

   ```bash
   npm run build
   ```

   This creates optimized bundles:
   - `dist/public/` - Vite-optimized client assets
   - `dist/server.js` - Compiled Express server

2. **Start production server:**

   ```bash
   npm start
   ```

3. **Open your browser to:** `http://localhost:3001`

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start complete development environment (recommended) |
| `npm run build` | Build for production (server + client) |
| `npm run build:server` | Build server TypeScript only |
| `npm run build:client` | Build client with Vite only |
| `npm run build:watch` | Watch mode for both builds |
| `npm start` | Start production server |
| `npm run type-check` | Validate TypeScript without compilation |
| `npm run clean` | Remove compiled dist folder |

## Adding New Tests

To add a new test, create a resource file in the appropriate difficulty folder:

```javascript
// tests/easy/test4.js
const metadata = {
  title: "Your Test Title",
  description: "Description of what the test covers",
  difficulty: "easy",
  timeLimit: 30, // minutes
  questionCount: 25,
  topics: [
    "Topic 1",
    "Topic 2",
    "Topic 3"
  ]
};

const questions = [
  {
    id: 1,
    question: "What is the correct syntax for...?",
    options: {
      A: "Option A",
      B: "Option B",
      C: "Option C", 
      D: "Option D"
    },
    correct: "B",
    explanation: "Detailed explanation of why B is correct..."
  }
  // ... more questions
];

module.exports = { metadata, questions };
```

The server will automatically detect and serve the new test.

## File Structure

```text
multiple_choice/
├── src/
│   └── main.ts             # Vite client entry point (TypeScript)
├── scripts/
│   └── dev-runner.js       # Development orchestration script
├── dist/                   # Compiled output (auto-generated)
│   ├── public/             # Vite build output (client assets)
│   └── server.js           # Compiled Express server
├── tests/
│   ├── easy/
│   │   ├── test1.js        # JavaScript Fundamentals
│   │   ├── test2.js        # Advanced JavaScript Basics
│   │   ├── test3.js        # JavaScript Methods & Operations
│   │   └── test4.js        # Modern JavaScript & Programming Concepts
│   ├── medium/             # Future medium tests
│   └── hard/               # Future hard tests
├── server.ts               # TypeScript Express server with dev proxy
├── app.ts                  # Legacy compatibility shim
├── index.html              # Main application interface with dynamic loader
├── styles.css              # Complete styling
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.client.json    # Client-side TypeScript config (ES2020)
├── tsconfig.server.json    # Server-side TypeScript config (CommonJS)
├── package.json            # Dependencies and npm scripts
└── README.md               # This file
```

## API Endpoints

- `GET /api/tests` - List all available tests by difficulty
- `GET /api/test/:difficulty/:testId` - Load specific test data

> **Note**: In development mode, the Express server proxies all non-API requests to the Vite dev server for HMR support.

## Technology Stack

- **Build Tool**: Vite 5.x - Modern build tool with instant HMR
- **Backend**: Node.js + Express.js with TypeScript
- **Frontend**: TypeScript compiled to JavaScript via Vite + CSS3
- **Dev Proxy**: http-proxy-middleware for routing in development
- **Architecture**: API-driven with modular test loading and type safety

## Development Workflow

### How `npm run dev` Works

1. **dev-runner.js** orchestrates three processes:
   - TypeScript compiler watching `server.ts` → compiles to `dist/server.js`
   - Vite dev server on port 5173 with HMR
   - Express server on port 3001 with dynamic proxy

2. **Startup sequence**:
   - Wait for TypeScript to compile server code
   - Wait for Vite to start and detect its port
   - Start Express server with `VITE_DEV=1` environment variable

3. **Request routing** (in dev mode):
   - `/api/*` → Handled by Express directly (test data)
   - `/*` → Proxied to Vite dev server (HMR-enabled client)

4. **File watching**:
   - Client code changes → Vite HMR updates instantly
   - Server code changes → TypeScript recompiles → Express restarts

### Troubleshooting

**Port 3001 already in use?**

```bash
lsof -ti:3001 | xargs kill -9
```

**Vite not starting?**

Check if port 5173 is available:

```bash
lsof -ti:5173 | xargs kill -9
```

**Server not restarting after changes?**

The dev-runner uses polling to detect file changes. If you experience issues, check the console output for errors.

## Benefits

1. **Instant Feedback**: HMR provides sub-second updates during development
2. **Scalable**: Easy to add new tests without code changes
3. **Maintainable**: Single codebase for all assessments with clear separation
4. **Consistent**: Uniform user experience across all tests
5. **Flexible**: Support for different difficulties and question counts
6. **Modular**: Tests stored as independent resource files
7. **Type-Safe**: Full TypeScript support catches errors at compile time
8. **Optimized**: Production builds are minified and tree-shaken

## Production Deployment

For production deployment:

1. Run `npm run build` to create optimized bundles
2. Deploy the `dist/` directory to your server
3. Set environment variables as needed
4. Run `npm start` to start the production server

The production build:

- Serves optimized, minified client assets from `dist/public/`
- No Vite runtime or proxy needed
- Uses standard Express static file serving
- Includes source maps for debugging if needed

## Future Enhancements

- Medium and Hard difficulty tests
- Question shuffling
- Time per question limits
- Detailed analytics
- Export results functionality
