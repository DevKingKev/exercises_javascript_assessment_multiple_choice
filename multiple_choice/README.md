# BuildWithHTML5 - Multiple Choice Assessment Platform

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
pnpm dev
  ↓
Vite dev server with Vue 3:
  • Hot Module Replacement (HMR)
  • Vue 3 + Composition API
  • Pinia state management
  • Vue Router navigation
  • TypeScript support
  • Runs on http://localhost:5173
```

**User accesses**: `http://localhost:5173` (Vite dev server with HMR)

### Production Build

```text
pnpm build
  ↓
1. vue-tsc --build --force (Type checking)
2. vite build → dist/ (optimized SPA bundle)
   • Minified & tree-shaken code
   • Code splitting
   • Asset optimization
  ↓
pnpm preview → Preview production build locally
```

## Current Tests

### Easy Level
1. **JavaScript Fundamentals** - 20 questions, 30 minutes
2. **Advanced JavaScript Basics** - 30 questions, 30 minutes  
3. **JavaScript Methods & Operations** - 30 questions, 30 minutes
4. **Modern JavaScript & Programming Concepts** - 30 questions, 30 minutes

## Installation & Usage

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (`npm install -g pnpm`)

### Quick Start - Development Mode

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development environment:**

   ```bash
   pnpm dev
   ```

   This starts the Vite dev server with:
   - Vue 3 with hot module replacement (HMR)
   - TypeScript support
   - Vue Router for navigation
   - Pinia for state management
   - Instant updates on file changes

3. **Open your browser to:** `http://localhost:5173`

   All changes to Vue components will hot-reload instantly!

### Production Build & Deployment

1. **Build for production:**

   ```bash
   pnpm build
   ```

   This creates optimized bundles in `dist/` directory with:
   - Type checking
   - Minified and tree-shaken code
   - Optimized assets

2. **Preview production build:**

   ```bash
   pnpm preview
   ```

3. **Open your browser to:** `http://localhost:4173`

### Development Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server with HMR (recommended) |
| `pnpm build` | Build for production with type checking |
| `pnpm preview` | Preview production build locally |
| `pnpm test:unit` | Run unit tests with Vitest |
| `pnpm test:unit:coverage` | Run tests with coverage report |
| `pnpm test:unit:ui` | Run tests with Vitest UI |
| `pnpm type-check` | Validate TypeScript types |
| `pnpm lint` | Lint and fix code with ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm clean` | Remove compiled dist folder |

### Server Commands (if needed)

| Command | Description |
|---------|-------------|
| `pnpm server:dev` | Start Express server with dev runner |
| `pnpm server:build` | Build server TypeScript |
| `pnpm server:start` | Start compiled Express server |

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
├── styles/main.scss        # SCSS entrypoint (imports partials under styles/)
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

- **Framework**: Vue 3.5+ with Composition API (`<script setup>`)
- **State Management**: Pinia 2.2+ (Composition API style)
- **Routing**: Vue Router 4.4+
- **Build Tool**: Vite 5.4+ with instant HMR
- **Language**: TypeScript 5.6+
- **Styling**: SCSS with scoped styles
- **Testing**: Vitest 4.0+ for unit tests
- **Code Quality**: ESLint + Prettier
- **Package Manager**: pnpm

## Development Workflow

### How `pnpm dev` Works

1. **Vite dev server** starts with:
   - Vue 3 plugin with HMR enabled
   - TypeScript compilation on the fly
   - SCSS preprocessing
   - Vue DevTools integration

2. **Hot Module Replacement (HMR)**:
   - Component changes → Instant update without full reload
   - State preservation during updates
   - Style changes → Injected without page refresh

3. **File watching**:
   - `.vue` files → Recompiled and hot-reloaded
   - `.ts` files → Type-checked and reloaded
   - `.scss` files → Reprocessed and injected
   - Assets → Optimized and served

### Troubleshooting

**Port 5173 already in use?**

```bash
lsof -ti:5173 | xargs kill -9
```

**Dependencies not installing?**

Make sure you have pnpm installed:

```bash
npm install -g pnpm
```

**Type errors in IDE?**

Run type checking:

```bash
pnpm type-check
```

**HMR not working?**

1. Check browser console for errors
2. Restart the dev server: `pnpm dev`
3. Clear browser cache and reload

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

1. Run `pnpm build` to create optimized bundles
2. Deploy the `dist/` directory to your hosting provider
3. Serve the static files from `dist/index.html`

The production build:

- Creates a fully static Single Page Application (SPA)
- All assets are minified and optimized
- Code is split for optimal loading
- Tree-shaking removes unused code
- Source maps available for debugging

### Hosting Options:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Deploy `dist/` to gh-pages branch
- **Static Server**: Any web server (nginx, Apache, etc.)

## Future Enhancements

- Medium and Hard difficulty tests
- Question shuffling
- Time per question limits
- Detailed analytics
- Export results functionality
