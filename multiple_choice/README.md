# Multiple Choice Assessment Platform

A unified Coderbyte-style multiple choice assessment platform that dynamically loads different tests from modular resource files.

## Features

- **Dynamic Test Loading**: Tests are loaded from modular resource files
- **Multiple Difficulty Levels**: Easy, Medium, Hard (expandable)
- **Test Selection Interface**: Choose from available tests with descriptions
- **Unified Assessment Engine**: Single codebase serves all tests
- **Question Grid Navigation**: Visual progress grid for jumping to specific questions
- **Comprehensive Results**: Detailed breakdown with explanations
- **Responsive Design**: Works on desktop and mobile
- **Timer System**: Visual countdown with warnings
- **Progress Tracking**: Visual indicators and navigation

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

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to: http://localhost:3005

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
├── package.json
├── server.js           # Express server with API endpoints
├── index.html          # Main application interface
├── styles.css          # Complete styling
├── app.js             # Assessment platform logic
├── tests/
│   ├── easy/
│   │   ├── test1.js   # JavaScript Fundamentals
│   │   ├── test2.js   # Advanced JavaScript Basics
│   │   ├── test3.js   # JavaScript Methods & Operations
│   │   └── test4.js   # Modern JavaScript & Programming Concepts
│   ├── medium/        # Future medium tests
│   └── hard/          # Future hard tests
└── README.md
```

## API Endpoints

- `GET /api/tests` - List all available tests by difficulty
- `GET /api/test/:difficulty/:testId` - Load specific test data

## Technology Stack

- **Backend**: Node.js + Express.js
- **Frontend**: Vanilla JavaScript + CSS3
- **Architecture**: API-driven with modular test loading

## Benefits

1. **Scalable**: Easy to add new tests without code changes
2. **Maintainable**: Single codebase for all assessments
3. **Consistent**: Uniform user experience across all tests
4. **Flexible**: Support for different difficulties and question counts
5. **Modular**: Tests stored as independent resource files

## Development

- Port: 3005
- Auto-reload: Manual (refresh browser after changes)
- Test format: Node.js modules with metadata and questions

## Future Enhancements

- Medium and Hard difficulty tests
- Question shuffling
- Time per question limits
- Detailed analytics
- Export results functionality