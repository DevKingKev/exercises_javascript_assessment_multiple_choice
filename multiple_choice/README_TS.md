# Multiple Choice Assessment Platform - TypeScript Edition

A comprehensive multiple choice assessment platform built with TypeScript, featuring type safety, modern development practices, and comprehensive progress tracking.

## Technology Stack

- **Frontend**: TypeScript, HTML5, CSS3
- **Backend**: Node.js, Express.js with TypeScript
- **Build Tools**: TypeScript Compiler, npm scripts
- **Development**: Nodemon, Concurrently for hot reloading
- **Storage**: Local Storage API for client-side persistence

## Installation & Setup

1. **Clone or navigate to the project directory**
   ```bash
   cd /path/to/multiple_choice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build TypeScript code**
   ```bash
   npm run build
   ```

4. **Start the application**
   ```bash
   npm run start
   ```

The application will be available at: <http://localhost:3001>

## Development Commands

### Building & Running

- `npm run build`: Compile TypeScript to JavaScript
- `npm run build:watch`: Watch mode for continuous compilation
- `npm run start`: Build and start the production server
- `npm run dev`: Build and start development server
- `npm run dev:watch`: Development mode with hot reloading
- `npm run type-check`: Type checking without compilation

### Development Workflow

For active development with hot reloading:

```bash
npm run dev:watch
```

This will:

1. Start TypeScript compiler in watch mode
2. Start nodemon to watch for changes
3. Automatically restart the server when files change
4. Provide real-time feedback on type errors

## Project Structure

```text
multiple_choice/
├── src/                          # TypeScript source files
│   ├── app.ts                   # Main application logic (TypeScript)
│   └── server.ts                # Express server (TypeScript)
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Comprehensive interface definitions
├── dist/                        # Compiled JavaScript output
│   ├── src/                     # Compiled application files
│   └── types/                   # Compiled type definitions
├── tests/                       # Test question banks
│   ├── easy/                    # Easy difficulty tests
│   ├── medium/                  # Medium difficulty tests
│   └── hard/                    # Hard difficulty tests
├── styles.css                   # Application styles
├── index.html                   # Main HTML template
├── package.json                 # Project configuration and dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## TypeScript Features

### Type Definitions

The application includes comprehensive TypeScript interfaces:

#### Core Types

- `Question`: Individual question structure with options and correct answers
- `Test`: Complete test with metadata and questions
- `TestMetadata`: Test configuration including difficulty, time limits, and topics
- `AvailableTests`: Structure for organizing tests by difficulty

#### Results & Analytics

- `TestResults`: Calculated results including scores and breakdowns
- `ResultRecord`: Individual test attempt record for storage
- `ResultsHistory`: Complete historical data structure
- `TopicBreakdown`: Performance analysis by topic
- `QuestionReview`: Detailed question-by-question analysis

### Benefits of TypeScript

- **Compile-time Error Checking**: Catch errors before runtime
- **IntelliSense Support**: Better IDE autocomplete and suggestions
- **Refactoring Safety**: Confident code changes with type checking
- **Documentation**: Types serve as living documentation
- **Modern JavaScript**: Latest ES features with broad compatibility

## Key Features

### Core Assessment Platform

- **Dynamic Test Selection**: Choose from multiple difficulty levels
- **Real-time Timer**: Configurable time limits with countdown display
- **Interactive Navigation**: Question grid for easy navigation
- **Progress Tracking**: Visual progress indicators and completion status
- **Detailed Results**: Comprehensive scoring with explanations

### Progress Tracking System

- **Persistent Local Storage**: All exam results saved for analysis
- **Multi-level Organization**: Results organized by difficulty → test → attempts
- **Performance Analytics**: Track improvement over time
- **Topic Analysis**: Identify areas needing improvement
- **Attempt History**: Complete history with timestamps and scores

### Internationalization

- **Locale-aware Date Formatting**: Automatic locale detection
- **Regional Date Formats**: DD/MM/YYYY, MM/DD/YYYY support
- **Time Display**: 12/24-hour format based on user locale

## Configuration

### TypeScript Configuration (tsconfig.json)

- **Target**: ES2020 for modern JavaScript features
- **Module System**: ESNext with bundler resolution
- **Strict Mode**: Enabled for maximum type safety
- **Source Maps**: Generated for debugging
- **Declaration Files**: Generated for library usage

### Server Configuration

- **Port**: 3001 (configurable in server.ts)
- **Static Files**: Served from project root
- **API Endpoints**: RESTful API for test data
- **Auto-launch**: Browser automatically opens on startup

## API Documentation

### GET /api/tests

Returns available tests organized by difficulty level.

**Response Format:**

```json
{
  "easy": [
    {
      "id": "test1",
      "title": "JavaScript Fundamentals",
      "description": "Basic JavaScript concepts",
      "questionCount": 20,
      "timeLimit": 30
    }
  ],
  "medium": [],
  "hard": []
}
```

### GET /api/test/:difficulty/:testId

Returns specific test with questions and metadata.

**Response Format:**

```json
{
  "metadata": {
    "id": "test1",
    "title": "JavaScript Fundamentals",
    "difficulty": "easy",
    "timeLimit": 30,
    "topics": ["Variables", "Functions", "Objects"]
  },
  "questions": [
    {
      "question": "What is JavaScript?",
      "options": {
        "A": "A programming language",
        "B": "A markup language",
        "C": "A database",
        "D": "An operating system"
      },
      "correct": "A",
      "explanation": "JavaScript is a programming language..."
    }
  ]
}
```

## Data Storage Structure

Results are stored in localStorage with hierarchical organization:

```json
{
  "assessmentResults": {
    "easy": {
      "test1": [
        {
          "testId": "test1",
          "difficulty": "easy", 
          "testTitle": "JavaScript Fundamentals",
          "date": "2025-10-24T10:30:00.000Z",
          "correct": 18,
          "total": 20,
          "percentage": 90,
          "timeTaken": "25:30",
          "improvementTopics": ["Arrays"],
          "topicBreakdown": {
            "Variables": { "correct": 5, "total": 5 },
            "Functions": { "correct": 4, "total": 5 },
            "Arrays": { "correct": 3, "total": 5 }
          }
        }
      ]
    }
  }
}
```

## Adding New Tests

Create a new test file in the appropriate difficulty folder:

```javascript
// tests/easy/test5.js
const metadata = {
  title: "Your Test Title",
  description: "Description of what the test covers",
  difficulty: "easy",
  timeLimit: 30, // minutes
  questionCount: 25,
  topics: ["Topic 1", "Topic 2", "Topic 3"]
};

const questions = [
  {
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

The TypeScript server will automatically detect and serve the new test.

## Browser Compatibility

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **ES2020 Features**: Uses modern JavaScript features
- **Local Storage**: Required for progress tracking
- **Fetch API**: Used for API communication

## Performance Features

- **Efficient Rendering**: Minimal DOM manipulation
- **Lazy Loading**: Tests loaded on demand
- **Memory Management**: Proper cleanup of intervals and listeners
- **Responsive Design**: Optimized for different screen sizes

## Security Considerations

- **Client-side Storage**: Data stored locally, no server persistence
- **Input Validation**: Type checking prevents invalid data
- **XSS Protection**: Safe HTML rendering practices
- **CORS**: Configured for same-origin requests

## Troubleshooting

### Common Issues

1. **TypeScript Compilation Errors**
   ```bash
   npm run type-check
   ```
   Check the console output for specific type errors.

2. **Server Won't Start**
   - Ensure port 3001 is available
   - Check if all dependencies are installed
   - Verify TypeScript compiled successfully

3. **Tests Not Loading**
   - Check if test files exist in the tests/ directory
   - Verify test files follow the correct structure
   - Check browser console for API errors

### Development Tips

1. **Type Safety**: Use the provided interfaces for all data structures
2. **Error Handling**: TypeScript will catch many errors at compile time
3. **Hot Reloading**: Use `npm run dev:watch` for fastest development cycle
4. **Debugging**: Source maps are enabled for debugging compiled code

## Migration from JavaScript

If migrating from the JavaScript version:

1. **Preserve Functionality**: All original features are maintained
2. **Enhanced Type Safety**: Added comprehensive type checking
3. **Better Development**: Improved IntelliSense and error detection
4. **Backward Compatibility**: Compiled output works in same environments
5. **Progressive Enhancement**: Can adopt TypeScript features gradually

## Future Enhancements

- **User Authentication**: Multi-user support with individual progress tracking
- **Database Integration**: Server-side storage for persistence across devices
- **Advanced Analytics**: More detailed performance metrics and charts
- **Question Bank Management**: Admin interface for managing questions
- **Mobile App**: React Native or PWA version for mobile devices
- **Real-time Collaboration**: Multi-user assessment sessions

## Contributing

When contributing to this TypeScript version:

1. **Maintain Type Safety**: Always use proper TypeScript types
2. **Update Interfaces**: Modify types in `types/index.ts` when changing data structures
3. **Follow Conventions**: Use the established coding patterns and naming conventions
4. **Test Thoroughly**: Verify both TypeScript compilation and runtime functionality
5. **Document Changes**: Update this README for significant modifications

## License

MIT License - Feel free to use this project for educational and commercial purposes.

---

**Built with ❤️ and TypeScript for better development experience and code reliability.**