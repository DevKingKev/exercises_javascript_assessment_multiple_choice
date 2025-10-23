# Coderbyte Mock Assessment - Easy Level 1

A self-contained web application that mimics the Coderbyte assessment experience.

## Features

- **17 Easy-level programming questions** covering fundamental JavaScript concepts
- **30-minute timer** with visual warnings as time runs low
- **Real-time code testing** with multiple test cases per question
- **Progress tracking** with visual indicators for answered/attempted questions
- **Detailed results** with explanations and correct solutions
- **Responsive design** that works on desktop and mobile
- **Local development server** with auto-browser opening

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation & Usage

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **The application will:**
   - Start a local server on <http://localhost:3001>
   - Automatically open your browser
   - Display the assessment interface

4. **Begin your assessment:**
   - Click "Start Assessment" to begin the 30-minute timer
   - Navigate between questions using the numbered buttons or Previous/Next buttons
   - Write your JavaScript functions in the code editor
   - Use "Test Code" to run your solution against test cases
   - Complete all 17 questions or let the timer expire
   - Review your results with detailed explanations

### Alternative Usage

If you prefer not to use the development server, you can still open `index.html` directly in your web browser.

## Question Topics Covered

1. **String Manipulation** - Reversing, character changes, capitalization
2. **Mathematical Operations** - Factorials, summation, time conversion
3. **Array Processing** - Sorting, searching, pattern detection
4. **Logic Puzzles** - Palindromes, symbol validation, sequence analysis
5. **Counting Problems** - Vowels, words, character frequency
6. **Algorithm Challenges** - Subset sum, arithmetic/geometric sequences

## Scoring

- **90-100%**: Excellent
- **75-89%**: Good  
- **60-74%**: Average
- **Below 60%**: Needs Improvement

## Files Structure

- `index.html` - Main application interface
- `styles.css` - Complete styling and responsive design
- `questions.js` - Question bank with test cases and solutions
- `app.js` - Assessment logic and functionality

## Assessment Rules

- Each question has multiple test cases that must all pass
- You can move between questions freely
- Your progress is automatically saved
- The timer counts down from 30 minutes
- Partial credit is not given (all test cases must pass)

Good luck with your assessment!