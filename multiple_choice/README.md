# Multiple Choice Assessment Platform - TypeScript Edition

A comprehensive multiple choice assessment platform built with TypeScript, featuring type safety, modern development practices, and comprehensive progress tracking.

## Features

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

### 🔧 TypeScript Benefits
- **Type Safety**: Comprehensive interfaces and type definitions
- **Better Development Experience**: IntelliSense, auto-completion, and compile-time error checking
- **Maintainable Code**: Clear contracts between components with strong typing
- **Modern JavaScript**: Latest ES features with backward compatibility

## Current Tests

### Easy Level
1. **JavaScript Fundamentals** - 20 questions, 30 minutes
2. **Advanced JavaScript Basics** - 30 questions, 30 minutes  
3. **JavaScript Methods & Operations** - 30 questions, 30 minutes
4. **Modern JavaScript & Programming Concepts** - 30 questions, 30 minutes

## Installation & Usage

1. Install dependencies:
```bash
npm install
```

2. Build and start the TypeScript server:
```bash
npm run start
```

3. Open your browser to: http://localhost:3001

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

```
multiple_choice/
├── src/
│   ├── app.ts          # TypeScript main application logic
│   └── server.ts       # TypeScript Express server
├── types/
│   └── index.ts        # TypeScript interface definitions
├── dist/               # Compiled JavaScript output
├── tests/
│   ├── easy/
│   │   ├── test1.js    # JavaScript Fundamentals
│   │   ├── test2.js    # Advanced JavaScript Basics
│   │   ├── test3.js    # JavaScript Methods & Operations
│   │   └── test4.js    # Modern JavaScript & Programming Concepts
│   ├── medium/         # Future medium tests
│   └── hard/           # Future hard tests
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── index.html          # Main application interface
├── styles.css          # Complete styling
└── README.md
```

## API Endpoints

- `GET /api/tests` - List all available tests by difficulty
- `GET /api/test/:difficulty/:testId` - Load specific test data

## Technology Stack

- **Backend**: Node.js + Express.js with TypeScript
- **Frontend**: TypeScript compiled to JavaScript + CSS3
- **Build System**: TypeScript compiler with CommonJS modules
- **Architecture**: API-driven with modular test loading and type safety

## Benefits

1. **Scalable**: Easy to add new tests without code changes
2. **Maintainable**: Single codebase for all assessments
3. **Consistent**: Uniform user experience across all tests
4. **Flexible**: Support for different difficulties and question counts
5. **Modular**: Tests stored as independent resource files

## Development

- **Port**: 3001
- **TypeScript Build**: `npm run build` or `npm run build:watch`
- **Development Server**: `npm run dev:watch:ts` for hot reloading
- **Test Format**: Node.js modules with metadata and questions
- **Type Checking**: `npm run type-check` for validation

## Future Enhancements

- Medium and Hard difficulty tests
- Question shuffling
- Time per question limits
- Detailed analytics
- Export results functionality