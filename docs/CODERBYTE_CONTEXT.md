# CODERBYTE ASSESSMENT CONTEXT

## Project Overview

This document contains the complete context for the Coderbyte-style assessment applications built during our development session. The project includes multiple assessment formats designed to mimic Coderbyte's interview preparation platform.

**Latest Update (October 30, 2025)**: Multiple Choice Assessment Platform has been migrated to **Vue 3 + Vite + Pinia + TypeScript** with modern component architecture, state management, routing, and comprehensive styling improvements.

**Previous Update (October 24, 2025)**: Initial migration to Vite + TypeScript with modern build tooling, hot module replacement, and improved development workflow.

## Current Directory Structure

```
/home/kevin/vhosts/lab/coderbyte/
├── easy_1/                          # Coding Assessment
│   ├── package.json
│   ├── server.js                    # Express server (port 3002)
│   ├── .gitignore
│   ├── index.html
│   ├── styles.css
│   ├── questions.js                 # 17 coding questions with test cases
│   ├── app.js                       # Assessment logic for coding
│   ├── README.md
│   └── node_modules/
└── multiple_choice/                 # Consolidated Multiple Choice Platform (Vite + TypeScript)
    ├── package.json
    ├── server.ts                    # TypeScript Express server (port 3001)
    ├── src/
    │   └── main.ts                  # Vite client entry point (TypeScript)
    ├── dist/
    │   ├── public/                  # Vite build output (client assets)
    │   └── server.js                # Compiled server (CommonJS)
    ├── scripts/
    │   └── dev-runner.js            # Development orchestration script
    ├── vite.config.ts               # Vite configuration
    ├── tsconfig.json                # Base TypeScript configuration
    ├── tsconfig.client.json         # Client TypeScript config (ES2020 modules)
    ├── tsconfig.server.json         # Server TypeScript config (CommonJS)
    ├── index.html                   # HTML entry with dynamic loader
    ├── app.ts                       # Legacy compatibility shim
    ├── styles.css                   # Application styles
    ├── src/
    │   ├── main.ts                  # Vite client entry point (TypeScript)
    │   ├── models/                  # TypeScript type definitions (NEW)
    │   │   ├── index.ts             # Re-exports all model types
    │   │   ├── question.ts          # Question type definitions
    │   │   ├── assessment.ts        # Assessment type definitions
    │   │   ├── results.ts           # Results type definitions
    │   │   └── format.ts            # Format type definitions
    │   └── utils/                   # Extracted utility functions (NEW)
    │       ├── formatUtils.ts       # Formatting helpers (escapeHtml, formatWithMarkers, etc.)
    │       ├── dateUtils.ts         # Date formatting utilities
    │       ├── resultsUtils.ts      # Results calculation helpers
    │       └── __tests__/           # Unit tests for utilities (NEW)
    │           ├── formatUtils.test.ts
    │           ├── dateUtils.test.ts
    │           └── resultsUtils.test.ts
    ├── tests/
    │   ├── easy/
    │   │   ├── test1.js             # JavaScript Fundamentals (20 questions)
    │   │   ├── test2.js             # Advanced JavaScript Basics (30 questions)
    │   │   ├── test3.js             # JavaScript Methods & Operations (30 questions)
    │   │   └── test4.js             # Modern JavaScript & Programming Concepts (30 questions)
    │   ├── medium/                  # Placeholder for future tests
    │   └── hard/                    # Placeholder for future tests
    ├── coverage/                    # Test coverage reports (generated)
    ├── vitest.config.ts             # Vitest test configuration (NEW)
    └── node_modules/
```

## Application 1: Coding Assessment (easy_1)

### Description
A self-contained Coderbyte-style assessment application with 17 easy-level programming questions where users write JavaScript functions.

### Key Features
- **17 Easy-level programming questions** covering fundamental JavaScript concepts
- **30-minute timer** with visual warnings as time runs low
- **Real-time code testing** with multiple test cases per question
- **Progress tracking** with visual indicators for answered/attempted questions
- **Detailed results** with explanations and correct solutions
- **Responsive design** that works on desktop and mobile

### Question Types Covered
1. **String Manipulation** - Reversing, character changes, capitalization
2. **Mathematical Operations** - Factorials, summation, time conversion
3. **Array Processing** - Sorting, searching, pattern detection
4. **Logic Puzzles** - Palindromes, symbol validation, sequence analysis
5. **Counting Problems** - Vowels, words, character frequency
6. **Algorithm Challenges** - Subset sum, arithmetic/geometric sequences

### Example Questions
- First Reverse (reverse a string)
- First Factorial (calculate factorial)
- Longest Word (find longest word in string)
- Letter Changes (alphabet shifting with vowel capitalization)
- Simple Adding (sum numbers 1 to N)
- Array Addition I (subset sum problem)

### Technical Implementation
- **Server**: Express.js on port 3002
- **Frontend**: Vanilla JavaScript with comprehensive CSS styling
- **Code Editor**: Textarea with monospace font and syntax highlighting colors
- **Test Runner**: Dynamic function evaluation with multiple test cases
- **Timer**: 30-minute countdown with visual warnings
- **Navigation**: Question buttons grid, previous/next navigation

### Launch Instructions
```bash
cd /home/kevin/vhosts/javascript/doodles/coderbyte/easy_1
npm install
npm run dev  # Starts on http://localhost:3001
```

## Application 2: Vite + TypeScript Multiple Choice Platform (multiple_choice)

### Description
A unified assessment platform built with **Vite and TypeScript** that dynamically loads different multiple choice tests from modular resource files. This consolidates all multiple choice functionality into a single scalable application with comprehensive type safety, modern build tooling, hot module replacement (HMR), and an optimized development workflow. Tests are stored as data files rather than separate applications.

### Key Features
- **Modern Build System**: Vite for fast HMR and optimized production builds
- **Development Proxy Architecture**: Express server proxies to Vite in dev mode for seamless development
- **Dynamic test loading** from modular resource files
- **Question grid navigation** with visual progress indicators for jumping to specific questions
- **Test selection interface** with difficulty levels and topic descriptions
- **API-driven architecture** for loading test metadata and content
- **Responsive design** that works on desktop and mobile
- **Unified timer system** with visual warnings
- **Comprehensive results** with detailed explanations and topic breakdown
- **Scalable structure** for easy addition of new tests
- **Hot Module Replacement**: Instant updates during development without full page reloads

### Architecture Overview

#### Development Mode
```
npm run dev
  ↓
dev-runner.js orchestrates:
  1. tsc --watch (server: tsconfig.server.json → dist/server.js)
  2. vite dev server (client: port 5173 with HMR)
  3. node dist/server.js (Express on port 3001)
     ↓
Express proxies non-/api requests → Vite (port 5173)
API routes handled by Express directly
Browser accesses: http://localhost:3001
```

#### Production Build
```
npm run build
  ↓
1. tsc -p tsconfig.server.json → dist/server.js (CommonJS)
2. vite build → dist/public/ (optimized client bundle)
  ↓
npm start
  ↓
Express serves static files from dist/public/
Browser accesses: http://localhost:3001
```

### Technical Implementation
- **Build Tool**: Vite 5.x for fast development and optimized production builds
- **Server**: Express.js with TypeScript on port 3001
- **Client**: TypeScript (ES2020 modules) compiled via Vite
- **Development Server**: Vite dev server on port 5173 (proxied through Express)
- **Dev Orchestration**: Custom script (`scripts/dev-runner.js`) manages:
  - TypeScript watch compilation for server
  - Vite dev server with HMR
  - Express server with dynamic proxy
  - Automatic restarts on server code changes
- **Proxy Middleware**: `http-proxy-middleware` for dev mode routing
- **Type Definitions**: Comprehensive interfaces for all data structures
- **API Endpoints**:
  - `GET /api/tests` - List all available tests by difficulty
  - `GET /api/test/:difficulty/:testId` - Load specific test data
- **Test Format**: Node.js modules exporting typed metadata and questions
- **Dynamic Loading**: Type-safe tests loaded on-demand via fetch API calls
- **Modular Architecture**: Easy to add new tests without code changes

### Development Workflow Improvements
- **Fast HMR**: Vite provides instant hot module replacement for client code
- **Automatic Restarts**: Server restarts automatically when TypeScript server code changes
- **Single Command**: `npm run dev` starts everything with one command
- **Port Management**: Browser URL stays on port 3001; Vite runs internally on 5173
- **No MIME Errors**: Proper proxying ensures correct content types for all resources
- **Polling-based File Watching**: Avoids system file watcher limits (EMFILE errors)
```
tests/
├── easy/
│   ├── test1.js    # JavaScript Fundamentals (20 questions)
│   ├── test2.js    # Advanced JavaScript Basics (30 questions)
│   └── test3.js    # JavaScript Methods & Operations (30 questions)
├── medium/         # Future medium difficulty tests
└── hard/           # Future hard difficulty tests
```

### Current Available Tests

#### Easy Level Tests
1. **JavaScript Fundamentals** (test1.js)
   - 20 questions, 30-minute time limit
   - Topics: Variables, functions, arrays, basic concepts
   - Converted from easy_multiple_choice_1

2. **Advanced JavaScript Basics** (test2.js)
   - 30 questions, 30-minute time limit
   - Topics: Type coercion, array methods, scoping, boolean logic
   - Converted from easy_multiple_choice_2

3. **JavaScript Methods & Operations** (test3.js)
   - 30 questions, 30-minute time limit
   - Topics: Math object, array manipulation, string methods
   - Converted from easy_multiple_choice_3

4. **Modern JavaScript & Programming Concepts** (test4.js)
   - 30 questions, 30-minute time limit
   - Topics: ES6+ features, error handling, JSON, regex, modern syntax
   - New original test covering advanced programming concepts

### Technical Implementation
- **Server**: Express.js with TypeScript on port 3001
- **Frontend**: TypeScript compiled to JavaScript with comprehensive type safety
- **Build System**: Dual TypeScript compilation (client: ES2020 modules, server: CommonJS)
- **Type Definitions**: Comprehensive interfaces for all data structures
- **API Endpoints**:
  - `GET /api/tests` - List all available tests by difficulty
  - `GET /api/test/:difficulty/:testId` - Load specific test data
- **Test Format**: Node.js modules exporting typed metadata and questions
- **Dynamic Loading**: Type-safe tests loaded on-demand via fetch API calls
- **Modular Architecture**: Easy to add new tests without code changes

### Resource File Format
Each test file exports:
```javascript
const metadata = {
  title: "Test Title",
  description: "Test description",
  difficulty: "easy",
  timeLimit: 30,
  questionCount: 20,
  topics: ["Topic 1", "Topic 2"]
};

const questions = [
  {
    id: 1,
    question: "Question text?",
    options: {
      A: "Option A",
      B: "Option B", 
      C: "Option C",
      D: "Option D"
    },
    correct: "B",
    explanation: "Detailed explanation"
  }
  // ... more questions
];

module.exports = { metadata, questions };
```

### User Interface Features
- **Test Selection Screen**: Choose difficulty and view available tests
- **Question Grid Navigation**: Visual grid showing answered/unanswered questions with click-to-jump functionality
- **Assessment Interface**: Unified interface that adapts to any test
- **Progress Tracking**: Visual progress bar and question navigation
- **Results Screen**: Comprehensive breakdown with topic performance

### Benefits of Consolidated Platform
1. **Reduced Code Duplication**: Single codebase serves all tests
2. **Easy Test Addition**: Add new tests by creating resource files
3. **Consistent User Experience**: Uniform interface across all tests
4. **Maintainable Architecture**: Updates apply to all tests automatically
5. **Scalable Design**: Easy to add medium/hard difficulties

### Launch Instructions

#### Development Mode (with HMR)

```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm install
npm run dev  # Starts dev-runner, Vite, and Express on http://localhost:3001
```

This single command orchestrates:

- TypeScript watch compilation for server code
- Vite dev server with hot module replacement
- Express server with proxy to Vite
- Automatic restarts on server changes

#### Production Build

```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm install
npm run build  # Compile TypeScript and build with Vite
npm start      # Serve production build on http://localhost:3001
```

### Development Commands

```bash
npm run dev           # Start complete development environment (recommended)
npm run build         # Build for production (server + client)
npm run build:server  # Build server TypeScript only
npm run build:client  # Build client with Vite only
npm run build:watch   # Watch mode for both builds
npm start             # Start production server
npm run type-check    # Validate TypeScript without compilation
npm run clean         # Remove compiled dist folder
```

## Scoring System (All Applications)

- **90-100%**: Excellent
- **75-89%**: Good  
- **60-74%**: Average
- **Below 60%**: Needs Improvement

## Assessment Rules

### Coding Assessment (easy_1)
- Each question has multiple test cases that must all pass
- You can move between questions freely
- Your progress is automatically saved
- The timer counts down from 30 minutes
- Partial credit is not given (all test cases must pass)

### Multiple Choice Assessment (multiple_choice)
- Each question has 4 possible answers, only one is correct
- You can navigate between questions freely using the question grid
- Your selections are automatically saved
- The timer counts down from 30 minutes (varies by test)
- No partial credit (one correct answer per question)

## Technology Stack

### Backend

- **Node.js** (version 14+)
- **Express.js** (^4.21.2) - API server and dev proxy
- **TypeScript** (^5.6.3) - Type-safe server development (multiple_choice)
- **http-proxy-middleware** (^2.0.6) - Dev mode proxying to Vite (multiple_choice)

### Frontend

- **Vite** (^5.4.21) - Modern build tool with HMR (multiple_choice)
- **TypeScript** (^5.6.3) - Compiled to JavaScript with comprehensive type safety (multiple_choice)
- **Vanilla JavaScript** - No frameworks, pure ES6+ (easy_1)
- **CSS3** - Responsive design with Flexbox/Grid
- **HTML5** - Semantic markup

### Development

- **npm** - Package management and scripts
- **Vite Dev Server** - Fast HMR and optimized builds (multiple_choice)
- **TypeScript Compiler** - Dual build system for client/server (multiple_choice)
- **Custom Dev Runner** - Orchestrates TypeScript watch, Vite, and Express (multiple_choice)
- **Local servers** - Port 3001 (multiple choice Vite+TypeScript) and 3002 (coding JavaScript)
- **Polling File Watcher** - Avoids EMFILE limits on Linux systems

## Shared Components & Features

### Timer System
- 30-minute countdown timer
- Visual warnings at 10 minutes (warning) and 5 minutes (critical)
- Automatic submission when time expires
- Pulse animation for low time warnings

### Navigation System
- **Question grid navigation** with numbered buttons above the test area
- **Click-to-jump functionality** allowing users to skip to any question
- Visual status indicators:
  - Current question (blue highlight)
  - Answered questions (green)
  - Unanswered questions (gray)
- Previous/Next navigation buttons
- Submit button on last question
- Visual legend explaining grid status colors

### Results System
- Percentage-based scoring with color-coded circles
- Detailed question-by-question breakdown
- Comprehensive explanations for learning
- Time tracking and completion statistics

### Responsive Design
- Mobile-friendly layouts
- Flexible grid systems for question navigation
- Responsive typography and spacing
- Touch-friendly interface elements

## Future Development Plans

Based on the conversation, the following additional assessments are planned:

1. **easy_2** - Second coding assessment (similar to easy_1)
2. **easy_multiple_choice_2** - Second multiple choice assessment
3. **medium_coding_1** - Medium difficulty coding assessment
4. **medium_multiple_choice_1** - Medium difficulty multiple choice
5. **hard_coding_1** - Hard difficulty coding assessment
6. **hard_multiple_choice_1** - Hard difficulty multiple choice

## Development Guidelines Established

1. **Consistent Port Assignment**:
   - multiple_choice: 3001 (consolidated platform)
   - easy_1: 3002
   - Future apps: Increment by 1 (3003, 3004, etc.)

2. **Folder Naming Convention**:
   - `{difficulty}_{format}_{number}`
   - Examples: easy_1, medium_coding_1, hard_multiple_choice_2

3. **npm Scripts Standard**:
   - `npm run dev` - Start development server
   - `npm start` - Alternative start command
   - Auto-browser opening on server start

4. **Question Format Standards**:
   - **Coding**: Include test cases, solutions, and explanations
   - **Multiple Choice**: 4 options (A, B, C, D), correct answer, and detailed explanations

5. **Assessment Timing**:
   - Standard: 30 minutes
   - May vary based on difficulty and question count

## File Structure Standards

Each assessment application should include:
- `package.json` - npm configuration
- `server.js` - Express development server
- `index.html` - Main application interface
- `styles.css` - Complete styling and responsive design
- `questions.js` - Question bank with appropriate format
- `app.js` - Assessment logic and functionality
- `README.md` - Documentation and usage instructions
- `.gitignore` - Standard Node.js exclusions

## Context Preservation Notes

This context file should be updated whenever:
1. New assessment applications are created
2. Significant features are added or modified
3. The folder structure changes
4. New question types or formats are introduced
5. Technical architecture changes are made

## Current Status

### As of October 30, 2025:

**multiple_choice** - ✅ **FULLY MIGRATED TO VUE 3** 
- Complete Vue 3 + Vite + Pinia + TypeScript architecture
- 11 Vue components (7 reusable components + 3 views + 1 root)
- 3 Pinia stores for state management (assessment, results, ui)
- Vue Router with 3 routes and navigation guards
- 1 composable (useTimer)
- Color-graded topic performance visualization
- Responsive design with SCSS design system
- localStorage persistence with automatic data migration
- Results history with expandable details
- Hot module replacement for instant development feedback
- Production-ready with optimized builds
- 4 assessment modules (test1-4) in tests/easy/
- 98.5% test coverage for utility functions

**easy_1** - ✅ Complete (Vanilla JavaScript coding assessment)
- 17 coding questions with test cases
- Runs on port 3002
- Independent application, not migrated

**Removed Applications**:
- ❌ easy_multiple_choice_1, easy_multiple_choice_2, easy_multiple_choice_3 
- Consolidated into the Vue 3 multiple_choice platform

### Previous Status (October 24, 2025):

- Initial Vite + TypeScript migration completed
- Vanilla TypeScript application with modern build tooling
- Unit testing framework established
- Code refactoring and modularization

## User Intentions

The user plans to:
1. Continue building more assessment applications
2. Create a comprehensive suite of programming interview preparation tools
3. Maintain consistency across all assessment applications

## TypeScript Migration Benefits (multiple_choice)

The TypeScript migration of the multiple choice platform provides:

- **Type Safety**: Comprehensive interfaces for all data structures (Question, Test, Results, etc.)
- **Better Developer Experience**: IntelliSense, auto-completion, compile-time error checking
- **Maintainable Code**: Clear contracts between components with strong typing
- **Modern Tooling**: Dual build system supporting both browser and Node.js environments
- **Future-Proof**: Ready for advanced features with robust type definitions

## Vite Migration (October 2025)

The multiple choice platform was successfully migrated to use Vite as the build tool, providing significant development experience improvements:

### Migration Objectives

- Eliminate MIME type errors when serving TypeScript files directly
- Implement hot module replacement (HMR) for instant feedback during development
- Maintain the Express server on port 3001 for a consistent user experience
- Preserve the existing `npm run dev` workflow
- Optimize production builds with modern bundling

### Key Changes Implemented

#### 1. **Vite Integration**

- Added Vite 5.4.21 as the client build tool
- Configured `vite.config.ts` with proper root, build output (`dist/public`), and dev server settings
- Moved client code from `app.ts` to `src/main.ts` for Vite's convention
- Set up Vite to proxy `/api` requests back to Express during development

#### 2. **Development Architecture**

- **Dev Proxy Pattern**: Express server proxies non-API requests to Vite dev server
  - Express runs on port 3001 (user-facing)
  - Vite dev server runs on port 5173 (internal)
  - All `/api/*` requests handled by Express directly
  - All other requests (HTML, JS, CSS, assets) proxied to Vite for HMR
- **Dynamic Middleware**: `http-proxy-middleware` conditionally loaded in dev mode
- **Environment Detection**: Server detects `VITE_DEV=1` to enable proxy mode

#### 3. **Build System Enhancements**

- **Dual TypeScript Compilation**:
  - Client: `tsconfig.client.json` → ES2020 modules → processed by Vite
  - Server: `tsconfig.server.json` → CommonJS → `dist/server.js`
- **Production Build**: Two-step process
  1. `vite build` → produces optimized client bundle in `dist/public/`
  2. `tsc -p tsconfig.server.json` → compiles server to `dist/server.js`
- **Development Build**: Separate watch processes for client and server

#### 4. **Development Orchestration**

- Created `scripts/dev-runner.js` to manage the development workflow:
  - Spawns TypeScript watch compiler for server code
  - Spawns Vite dev server on port 5173 with HMR enabled
  - Waits for both to be ready before starting Express server
  - Monitors `dist/server.js` for changes and restarts server automatically
  - Uses polling instead of filesystem watchers to avoid EMFILE errors
  - Provides clear, emoji-enhanced logging for debugging

#### 5. **Backward Compatibility**

- `app.ts` serves as a compatibility shim exporting from `src/main.ts`
- `index.html` includes dynamic loader that:
  - Attempts to load from Vite dev server in development
  - Falls back to production build if Vite not available
  - Probes for correct MIME types to avoid browser blocking

#### 6. **File Watcher Optimization**

- Replaced `chokidar` with polling-based file monitoring
- Prevents EMFILE (too many open files) errors on Linux
- Uses `fs.statSync()` and `setInterval()` for change detection
- More reliable across different operating systems

### Migration Challenges Resolved

1. **MIME Type Error**: Browser blocking `.ts` files with `video/mp2t` content-type
   - **Solution**: Vite serves files with correct MIME types; Express proxies to Vite

2. **Port Management**: Keeping user-facing URL on port 3001
   - **Solution**: Express acts as gateway, proxying to Vite internally

3. **API Route Interception**: Proxy middleware catching `/api` requests
   - **Solution**: Registered API routes BEFORE proxy middleware in Express

4. **File Watcher Limits**: EMFILE errors from too many watchers
   - **Solution**: Switched to polling-based file monitoring in dev-runner

5. **Server Startup Coordination**: Starting server before Vite ready
   - **Solution**: Dev-runner probes Vite ports and waits for both conditions

### Benefits Achieved

- ✅ **Instant HMR**: Sub-second updates when changing client code
- ✅ **Type Safety**: Full TypeScript support with proper module resolution
- ✅ **Optimized Builds**: Tree-shaking and code-splitting in production
- ✅ **Better DX**: Single `npm run dev` command starts everything
- ✅ **No Port Confusion**: Users always access localhost:3001
- ✅ **Reliable Workflow**: Polling-based watchers avoid system limits
- ✅ **Clean Separation**: Client and server code clearly delineated

### Updated npm Scripts

```json
{
  "dev": "node scripts/dev-runner.js",
  "build": "npm run build:server && npm run build:client",
  "build:server": "tsc -p tsconfig.server.json",
  "build:client": "vite build",
  "build:watch": "concurrently \"npm:build:server -- --watch\" \"npm:build:client -- --watch\"",
  "start": "node dist/server.js",
  "type-check": "tsc --noEmit",
  "clean": "rm -rf dist"
}
```

### Files Added/Modified

**New Files:**

- `vite.config.ts` - Vite configuration
- `scripts/dev-runner.js` - Development orchestration
- `src/main.ts` - Client entry point (moved from `app.ts`)
- `tsconfig.client.json` - Client TypeScript config

**Modified Files:**

- `server.ts` - Added dev proxy middleware
- `package.json` - Updated scripts and dependencies
- `index.html` - Added dynamic loader for dev/prod compatibility
- `app.ts` - Now a compatibility shim

**Dependencies Added:**

- `vite@^5.4.21` - Build tool
- `http-proxy-middleware@^2.0.6` - Dev proxy

### Production Deployment Notes

- Run `npm run build` to create optimized bundles
- `dist/public/` contains client assets (served as static files)
- `dist/server.js` is the compiled Express server
- Server automatically serves from `dist/public/` when not in dev mode
- No Vite runtime needed in production

## Code Quality & Testing (October 2025)

### Refactoring Initiative

Following the Vite migration, a comprehensive code refactoring was performed to improve maintainability, testability, and code organization in the multiple_choice platform.

#### 1. **TypeScript Models Centralization**

**Goal**: Consolidate all TypeScript interfaces and types into a dedicated models directory.

**Changes**:
- Created `src/models/` directory with modular type definition files:
  - `question.ts` - Question and option types
  - `assessment.ts` - Test/assessment metadata types
  - `results.ts` - Results and scoring types
  - `format.ts` - Formatting configuration types
  - `index.ts` - Re-exports all types for convenient imports

**Benefits**:
- Single source of truth for all type definitions
- Easy to locate and update interfaces
- Better code organization and discoverability
- Type-only imports used in `src/main.ts` for optimal bundling

#### 2. **Utility Functions Extraction**

**Goal**: Remove helper functions from `src/main.ts` and organize them into focused utility modules.

**Changes**:
- Created `src/utils/` directory with three utility modules:
  - **`formatUtils.ts`**: Text and code formatting functions
    - `escapeHtml()` - HTML entity escaping
    - `formatWithMarkers()` - [CODE] marker-based formatting
    - `formatAutoDetect()` - Automatic code detection and formatting
    - `formatTextWithCode()` - Unified formatting entry point
  - **`dateUtils.ts`**: Date formatting utilities
    - `formatDate()` - Locale-aware date/time formatting with fallback
  - **`resultsUtils.ts`**: Results calculation helpers
    - `getScoreBadgeClass()` - Score classification (excellent/good/average/poor)
    - `getImprovementTopics()` - Identify weak topic areas
    - `formatTimeTaken()` - Convert duration to MM:SS format

**Benefits**:
- `src/main.ts` reduced from ~750 lines with clearer responsibilities
- Utilities are reusable across the application
- Each module has a single, well-defined purpose
- Easier to test individual functions in isolation

#### 3. **Comprehensive Unit Testing**

**Goal**: Achieve high code coverage with automated tests for all utility functions.

**Test Framework Setup**:
- **Vitest 4.0.3** - Modern, fast test runner compatible with Vite
- **@vitest/coverage-v8** - Built-in V8-based coverage reporting
- **jsdom** - DOM environment for browser API testing
- Configuration in `vitest.config.ts`:
  ```typescript
  {
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        reportsDirectory: './coverage'
      }
    }
  }
  ```

**Test Files Created**:
- `src/utils/__tests__/formatUtils.test.ts` (4 tests)
  - HTML escaping
  - Marker-based formatting
  - Auto-detection formatting
  - Unified formatting function
  
- `src/utils/__tests__/dateUtils.test.ts` (6 tests)
  - Localized date/time formatting
  - Locale mapping ("en" → "en-GB")
  - Extended navigator fallback (userLanguage)
  - Default locale fallback
  - Fallback formatting when toLocale* methods throw
  - PM hours handling in fallback path
  
- `src/utils/__tests__/resultsUtils.test.ts` (3 tests)
  - Score badge classification boundaries
  - Topic improvement identification
  - Time duration formatting

**Test Coverage Achieved**:
```
File             | % Stmts | % Branch | % Funcs | % Lines
-----------------|---------|----------|---------|----------
dateUtils.ts     |   100%  |   100%   |   100%  |   100%
formatUtils.ts   |  96.29% |  85.71%  |   100%  |   100%
resultsUtils.ts  |   100%  |   100%   |   100%  |   100%
-----------------|---------|----------|---------|----------
Overall          |  98.5%  |   92.5%  |   100%  |   100%
```

**Testing Approach - Deterministic Tests**:
- **Challenge**: Date/time behavior varies by timezone and locale
- **Solution**: Temporarily stub Date prototype methods during tests
  - Mock `toLocaleDateString()` and `toLocaleTimeString()` to force exceptions
  - Stub date getters (`getHours`, `getMinutes`, etc.) to return fixed values
  - Restore original methods in `finally` blocks to prevent test pollution
- **Alternative**: Dependency injection (recommended for future refactoring)
  - Refactor functions to accept injectable clock/formatter dependencies
  - Pass fake implementations in tests instead of stubbing globals
  - Cleaner, safer, and more maintainable approach

**npm Scripts for Testing**:
```json
{
  "test": "vitest",
  "test:coverage": "vitest --coverage",
  "type-check": "tsc --noEmit"
}
```

**Running Tests**:
```bash
# Run tests in watch mode
npm test

# Run tests once
npm test -- --run

# Run tests with coverage report
npm run test:coverage

# Type-check without running tests
npm run type-check
```

**Coverage Reports**:
- Text summary printed to console
- HTML report generated in `coverage/index.html`
- Open `coverage/index.html` in browser for interactive exploration

#### 4. **Dependency Management**

**Version Alignment**:
- Updated Vitest and coverage provider to latest stable versions
- Resolved peer dependency conflicts with Express types
- Current critical dependencies:
  ```json
  {
    "devDependencies": {
      "@types/express": "^4.17.21",
      "@vitest/coverage-v8": "^4.0.3",
      "vitest": "^4.0.3",
      "jsdom": "^22.1.0"
    }
  }
  ```

**Installation Notes**:
- Used `--legacy-peer-deps` flag during development to resolve conflicts
- Final stable configuration works without flags
- Clean install: `rm -rf node_modules package-lock.json && npm install`

### Code Quality Metrics

**Before Refactoring**:
- Single `src/main.ts` file with ~750 lines
- Inline type definitions mixed with logic
- Helper functions embedded in main class
- No unit tests or coverage measurement

**After Refactoring**:
- `src/main.ts` focused on UI logic and orchestration
- Types organized in `src/models/` (5 files)
- Utilities extracted to `src/utils/` (3 files)
- Comprehensive test suite (13 tests, 100% pass rate)
- 98.5% statement coverage, 92.5% branch coverage
- All utility functions have 100% line coverage

### Future Improvements

**Recommended Next Steps**:
1. **Dependency Injection Refactor**: Remove Date prototype stubbing
   - Refactor `formatDate` to accept optional clock/formatter parameters
   - Update tests to pass fake implementations instead of stubbing
   
2. **Increase Branch Coverage for formatUtils**: Currently 85.71%
   - Add tests for edge cases in markup parsing
   - Test different code block patterns and escape sequences
   
3. **CI/CD Integration**:
   - Create GitHub Actions workflow
   - Run tests and coverage on every PR
   - Enforce minimum coverage thresholds
   - Publish coverage reports to GitHub Pages or Codecov

4. **Test Main Application Logic**:
   - Create tests for `AssessmentApp` class in `src/main.ts`
   - Mock DOM elements and browser APIs
   - Test state management and user interactions

### Benefits of Testing & Refactoring

- **Confidence**: Changes can be made safely with test coverage
- **Documentation**: Tests serve as living examples of how functions work
- **Regression Prevention**: Automated tests catch bugs early

## Vue 3 Migration (October 30, 2025)

The multiple choice platform underwent a complete architectural transformation from vanilla TypeScript to Vue 3 with modern component-based architecture.

### Migration Overview

**Objective**: Transform the TypeScript + Vite application into a Vue 3 single-page application with proper state management, routing, and reusable components.

**Key Technologies**:
- **Vue 3.5.12**: Composition API with `<script setup>` syntax
- **Pinia 2.2.6**: State management with composition stores
- **Vue Router 4.4.5**: Client-side routing with lazy-loaded views
- **SCSS**: Enhanced styling with global design system and scoped component styles

### Architecture Changes

#### 1. **Component-Based Structure**

Replaced monolithic `src/main.ts` with Vue component hierarchy:

**Core Components**:
- `LoadingSpinner.vue`: Global loading overlay with teleport
- `CustomDialog.vue`: Reusable modal for alerts/confirmations (400px default width)
- `DifficultySelector.vue`: Button group for difficulty selection
- `AssessmentCard.vue`: Assessment display with grey background and proper contrast
- `AssessmentResultItem.vue`: Expandable results history with color-graded topic breakdown
- `ProgressBar.vue`: Visual progress indicator with gradient
- `QuestionGrid.vue`: Interactive question navigation grid

**Views**:
- `HomeView.vue`: Landing page with difficulty selector, assessment grid, and results history
- `AssessmentView.vue`: Assessment taking interface with timer, questions, and navigation
- `ResultsView.vue`: Results display with score, topic breakdown, and question review

**Root**:
- `App.vue`: Root component with router-view and global UI components

#### 2. **State Management with Pinia**

Created three composition stores following reference patterns from `/home/kevin/vhosts/lab/imdb/vue3`:

**assessmentStore.ts**:
- Manages available assessments, current assessment, questions, and user answers
- Timer state (startTime, timeLimit)
- Question navigation (currentQuestionIndex)
- Actions: `loadAvailableAssessments()`, `loadAssessment()`, `selectAnswer()`, `nextQuestion()`, `previousQuestion()`, `jumpToQuestion()`

**resultsStore.ts**:
- Manages results history with localStorage persistence
- Computed properties: `hasHistory`, `getResultsByDifficulty`, `averageScoreByDifficulty`
- Actions: `loadResultsHistory()`, `saveResult()`, `setCurrentResults()`
- **Data Migration**: Automatically migrates old format (`testId`, `testTitle`) to new format (`assessmentId`, `assessmentTitle`)

**uiStore.ts**:
- Global UI state: loading spinners, dialog modals
- Promise-based dialog API: `showAlert()`, `showConfirm()`
- Actions: `showLoading()`, `hideLoading()`, `closeDialog()`

#### 3. **Routing with Vue Router**

**Routes**:
- `/` - HomeView (landing page)
- `/assessment/:difficulty/:id` - AssessmentView (props: true for route params)
- `/results` - ResultsView (displays current results from store)

**Navigation Guards**:
- `beforeEach`: Updates `document.title` based on route meta
- Catch-all 404 redirects to home

#### 4. **Composables**

**useTimer.ts**:
- Reusable timer logic for assessments
- Reactive state: `startTime`, `timeRemaining`, `formattedTime` (MM:SS)
- Methods: `start()`, `stop()`, `reset()`
- Auto-cleanup with `onUnmounted()`

#### 5. **Styling Improvements**

**Design System**:
- Centralized SCSS variables in `/styles/_variables.scss`
- Color palette: primary, success, danger, gray scale (50-900)
- Typography: font sizes, weights, families
- Spacing: consistent spacing scale (xs to 4xl)
- Shadows, transitions, border radius system

**Component Styling**:
- Grey assessment cards ($gray-50 background) with darker text for better contrast
- Color-graded topic breakdown visualization:
  - 🟢 Green (100%): Perfect score
  - 🔵 Blue (80-99%): Good performance
  - 🟡 Yellow (60-79%): Fair performance
  - 🟠 Orange (40-59%): Poor performance
  - 🔴 Red (0-39%): Needs significant improvement
- Responsive layouts with flexbox and grid
- Date/time display: Inline on large screens, stacked on mobile

### Key Features Implemented

#### Assessment Results Enhancements

**Color-Graded Topic Performance**:
- Visual grid showing all topics from the assessment
- Each topic card displays score (e.g., "3/4 correct")
- Color-coded borders and backgrounds for quick visual scanning
- Hover effects for interactivity
- Responsive grid layout adapts to screen size

**Results History Display**:
- Expandable/collapsible sections per assessment
- Latest score badge with color coding (excellent/good/average/poor)
- Date and time display:
  - Visible in collapsed view (latest attempt)
  - Inline on desktop (≥768px), stacked on mobile
  - Format: DD/MM/YYYY, HH:MM AM/PM (locale-aware)
- All attempts history with individual scores and dates
- Topics needing improvement highlighted

**Data Migration**:
- Automatic migration of localStorage data from vanilla TS app
- Converts old field names (`testId`, `testTitle`) to new format (`assessmentId`, `assessmentTitle`)
- Preserves all historical data (date, scores, topic breakdown)
- Migration runs once on store initialization

#### User Interface Improvements

**Custom Dialog System**:
- Promise-based API for alerts and confirmations
- 400px default width (not full-width)
- Backdrop click handling
- Alert/confirm types with optional danger variant
- Teleported to body for proper z-index

**Assessment Card Redesign**:
- Grey background ($gray-50) for better visual separation
- Darker text colors for improved readability
- 2px border with hover effects
- Responsive meta badges (questions count, time limit)

**Question Navigation**:
- Interactive grid showing all questions
- Visual status: current (blue), answered (green), unanswered (gray)
- Click-to-jump functionality
- Progress bar showing completion percentage

### Development Workflow

**Build Configuration**:
- `vite.config.ts`: Vue plugin, SCSS modern compiler, path aliases (@/ → src/)
- `tsconfig.app.json`: Vue-specific TypeScript config
- `tsconfig.node.json`: Node config for Vite
- `vue-shims.d.ts`: TypeScript declarations for .vue files

**Dev Server**:
- `scripts/dev-runner.js`: Orchestrates TypeScript watch, Vite, and Express
- Vite dev server on port 5173 (internal)
- Express proxy on port 3001 (user-facing)
- Hot module replacement for instant feedback

**npm Scripts**:
```json
{
  "dev": "node scripts/dev-runner.js",
  "build": "npm run build:server && vite build",
  "build:server": "tsc -p tsconfig.server.json",
  "preview": "vite preview",
  "type-check": "vue-tsc --noEmit -p tsconfig.app.json",
  "test": "vitest",
  "test:coverage": "vitest --coverage"
}
```

### File Structure After Vue Migration

```
multiple_choice/
├── src/
│   ├── App.vue                      # Root component
│   ├── main.ts                      # Vue app bootstrap
│   ├── vue-shims.d.ts              # TypeScript Vue declarations
│   ├── components/                  # Reusable components
│   │   ├── LoadingSpinner.vue
│   │   ├── CustomDialog.vue
│   │   ├── DifficultySelector.vue
│   │   ├── AssessmentCard.vue
│   │   ├── AssessmentResultItem.vue # NEW: Results history display
│   │   ├── ProgressBar.vue
│   │   └── QuestionGrid.vue
│   ├── views/                       # Route views
│   │   ├── HomeView.vue
│   │   ├── AssessmentView.vue
│   │   └── ResultsView.vue
│   ├── stores/                      # Pinia stores
│   │   ├── assessmentStore.ts
│   │   ├── resultsStore.ts
│   │   └── uiStore.ts
│   ├── router/                      # Vue Router
│   │   └── index.ts
│   ├── composables/                 # Vue composables
│   │   └── useTimer.ts
│   ├── models/                      # TypeScript types
│   │   ├── index.ts
│   │   ├── question.ts
│   │   ├── assessment.ts
│   │   ├── results.ts
│   │   └── format.ts
│   └── utils/                       # Utility functions
│       ├── formatUtils.ts
│       ├── dateUtils.ts
│       └── resultsUtils.ts
├── styles/                          # Global SCSS
│   ├── _variables.scss
│   ├── main.scss
│   └── components/
│       └── *.scss
├── vite.config.ts
├── tsconfig.app.json               # Vue app TypeScript config
├── tsconfig.node.json              # Vite TypeScript config
└── index.html                      # SPA entry point
```

### Migration Challenges Resolved

**1. SCSS Import Paths**:
- Issue: `Can't find stylesheet to import ./styles/main.scss`
- Solution: Changed import in `App.vue` to `../styles/main.scss` (styles at project root)

**2. Results History Display**:
- Issue: Only showing averages, not individual attempts
- Solution: Created `AssessmentResultItem.vue` component with expand/collapse functionality

**3. Dialog Width**:
- Issue: Dialog expanding to full width
- Solution: Changed from `min-width: 400px` to `width: 400px` with `max-width: 90vw`

**4. Assessment Card Contrast**:
- Issue: Light grey text on white background (poor readability)
- Solution: Applied original design system colors ($gray-50 bg, $gray-700 headings, $gray-500 body)

**5. Date Display Visibility**:
- Issue: Dates hidden in collapsed view
- Solution: Added date to header with responsive layout (inline on desktop, stacked on mobile)

**6. Data Migration**:
- Issue: Old localStorage using `testId`/`testTitle`, Vue components expecting `assessmentId`/`assessmentTitle`
- Solution: Automatic migration in `resultsStore.loadResultsHistory()` with one-time localStorage update

### Benefits of Vue 3 Architecture

**Developer Experience**:
- Component-based architecture for better code organization
- Reactive state management with Pinia (no manual DOM updates)
- Type-safe routing with Vue Router
- Reusable composables for common logic
- Scoped styles prevent CSS conflicts

**User Experience**:
- Faster navigation with client-side routing (no page reloads)
- Smooth transitions between views
- Responsive and accessible components
- Improved visual design with consistent styling
- Better performance with Vue's virtual DOM

**Maintainability**:
- Clear separation of concerns (components, stores, router, utils)
- Easier to test individual components
- Simple to add new assessments or features
- Centralized state management
- Reusable component library

### Testing Status

**Current Coverage**:
- Unit tests for utility functions: 98.5% coverage
- Component tests: Not yet implemented
- E2E tests: Not yet implemented

**Recommended Next Steps**:
1. Add Vitest component testing for Vue components
2. Test store actions and computed properties
3. Test routing navigation and guards
4. Add E2E tests with Playwright or Cypress
5. Test responsive layouts at different breakpoints

### Known Issues & Future Work

**None currently** - Application is fully functional with all features working as expected.

**Enhancement Opportunities**:
1. Add animation transitions between routes
2. Implement assessment search/filter on home page
3. Add user authentication and cloud sync
4. Create admin panel for managing assessments
5. Add accessibility improvements (ARIA labels, keyboard nav)
6. Implement assessment resume (save progress mid-test)
7. Add assessment analytics and performance tracking
- **Code Quality**: Refactoring improved modularity and maintainability
- **Developer Experience**: Fast test feedback loop with Vitest's HMR
- **Onboarding**: New developers can understand code structure quickly

This context should be referenced for all future development to ensure consistency and proper continuation of the project.

