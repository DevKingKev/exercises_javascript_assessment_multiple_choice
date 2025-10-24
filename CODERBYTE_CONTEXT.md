# CODERBYTE ASSESSMENT CONTEXT

## Project Overview

This document contains the complete context for the Coderbyte-style assessment applications built during our development session. The project includes multiple assessment formats designed to mimic Coderbyte's interview preparation platform.

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
└── multiple_choice/                 # Consolidated Multiple Choice Platform
    ├── package.json
    ├── server.js                    # Express server (port 3001)
    ├── index.html
    ├── styles.css
    ├── app.js                       # Unified assessment platform logic
    ├── tests/
    │   ├── easy/
    │   │   ├── test1.js             # JavaScript Fundamentals (20 questions)
    │   │   ├── test2.js             # Advanced JavaScript Basics (30 questions)
    │   │   ├── test3.js             # JavaScript Methods & Operations (30 questions)
    │   │   └── test4.js             # Modern JavaScript & Programming Concepts (30 questions)
    │   ├── medium/                  # Placeholder for future tests
    │   └── hard/                    # Placeholder for future tests
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
- **Server**: Express.js on port 3001
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

## Application 2: Consolidated Multiple Choice Platform (multiple_choice)

### Description
A unified assessment platform that dynamically loads different multiple choice tests from modular resource files. This consolidates all multiple choice functionality into a single scalable application where tests are stored as data files rather than separate applications.

### Key Features
- **Dynamic test loading** from modular resource files
- **Question grid navigation** with visual progress indicators for jumping to specific questions
- **Test selection interface** with difficulty levels and topic descriptions
- **API-driven architecture** for loading test metadata and content
- **Responsive design** that works on desktop and mobile
- **Unified timer system** with visual warnings
- **Comprehensive results** with detailed explanations and topic breakdown
- **Scalable structure** for easy addition of new tests

### Test Structure
The platform uses a modular file structure for tests:
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
- **Server**: Express.js on port 3002
- **Frontend**: Vanilla JavaScript with unified assessment engine
- **API Endpoints**:
  - `GET /api/tests` - List all available tests by difficulty
  - `GET /api/test/:difficulty/:testId` - Load specific test data
- **Test Format**: Each test is a Node.js module exporting metadata and questions
- **Dynamic Loading**: Tests loaded on-demand via fetch API calls
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
```bash
cd /home/kevin/vhosts/lab/coderbyte/multiple_choice
npm install
npm run dev  # Starts on http://localhost:3002
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
- **Express.js** (^4.21.2) - Static file serving and development server
- **open** (^8.4.2) - Auto-browser opening

### Frontend
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **CSS3** - Responsive design with Flexbox/Grid
- **HTML5** - Semantic markup

### Development
- **npm** - Package management and scripts
- **Local servers** - Port 3001 (coding) and 3002 (multiple choice)
- **Hot reload** - Manual refresh (simple development setup)

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
   - easy_1: 3001
   - multiple_choice: 3002 (consolidated platform)
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

As of October 23, 2025:
- ✅ easy_1 (coding assessment) - Complete and tested
- ✅ multiple_choice (consolidated platform) - Complete with 4 test modules and question grid navigation
- ❌ easy_multiple_choice_1, easy_multiple_choice_2, easy_multiple_choice_3 - Removed (replaced by consolidated platform)
- 🔄 Ready for additional assessment development
- 📦 Both remaining applications have dependencies installed and are functional

## User Intentions

The user plans to:
1. Continue building more assessment applications
2. Create a comprehensive suite of programming interview preparation tools
3. Maintain consistency across all assessment applications

This context should be referenced for all future development to ensure consistency and proper continuation of the project.