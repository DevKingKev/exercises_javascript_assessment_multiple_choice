// assessment42.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Unit Testing Fundamentals",
    "description": "Basic concepts and principles of unit testing, test assertions, and testing methodology for beginners.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Testing concepts",
        "Test assertions",
        "Testing benefits",
        "Test structure",
        "Testing principles",
        "Test types",
        "Testing workflow"
    ],
    "topicLinks": [
        {
            "topicName": "Testing concepts",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
        },
        {
            "topicName": "Test assertions",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Console/assert"
        },
        {
            "topicName": "Testing benefits",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies"
        },
        {
            "topicName": "Test structure",
            "refLink": "https://jestjs.io/docs/getting-started"
        },
        {
            "topicName": "Testing principles",
            "refLink": "https://github.com/goldbergyoni/javascript-testing-best-practices"
        },
        {
            "topicName": "Test types",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing"
        },
        {
            "topicName": "Testing workflow",
            "refLink": "https://jestjs.io/docs/testing-fundamentals"
        }
    ],
    "assessmentId": 42,
    "assessmentUniqueId": 1762788796345,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the main purpose of unit testing?",
        "options": {
            "A": "To verify individual code units work correctly",
            "B": "To test the entire application at once",
            "C": "To check if the UI looks good",
            "D": "To measure code performance"
        },
        "correct": "A",
        "explanation": "Unit testing focuses on testing individual units of code (like functions or methods) in isolation to ensure they work as expected.",
        "topic": {
            "topics": ["Testing concepts"]
        }
    },
    {
        "id": 2,
        "question": "What does a test assertion do?",
        "options": {
            "A": "Checks if actual result matches expected result",
            "B": "Logs errors to the console",
            "C": "Stops the test from running",
            "D": "Creates test data"
        },
        "correct": "A",
        "explanation": "An assertion is a statement that checks whether a condition is true, failing the test if it's false.",
        "topic": {
            "topics": ["Test assertions"]
        }
    },
    {
        "id": 3,
        "question": "What is a common testing pattern that describes test structure?",
        "options": {
            "A": "Arrange-Act-Assert",
            "B": "Start-Run-Stop",
            "C": "Input-Process-Output",
            "D": "Before-During-After"
        },
        "correct": "A",
        "explanation": "Arrange-Act-Assert is a common pattern: Arrange test data, Act by calling the function, Assert the results are correct.",
        "topic": {
            "topics": ["Test structure"]
        }
    },
    {
        "id": 4,
        "question": "What is the primary benefit of writing tests?",
        "options": {
            "A": "Catching bugs early and preventing regressions",
            "B": "Making code run faster",
            "C": "Reducing code file size",
            "D": "Eliminating all bugs automatically"
        },
        "correct": "A",
        "explanation": "Tests help catch bugs during development and prevent existing functionality from breaking when changes are made.",
        "topic": {
            "topics": ["Testing benefits"]
        }
    },
    {
        "id": 5,
        "question": "What should a good unit test be?",
        "options": {
            "A": "Isolated and focused on one behavior",
            "B": "Complex and testing many things at once",
            "C": "Dependent on other tests",
            "D": "Running for a long time"
        },
        "correct": "A",
        "explanation": "Good unit tests are isolated, fast, and test one specific behavior or scenario.",
        "topic": {
            "topics": ["Testing principles"]
        }
    },
    {
        "id": 6,
        "question": "What is a test case?",
        "options": {
            "A": "A specific scenario with inputs and expected outputs",
            "B": "A bug report from users",
            "C": "A documentation file",
            "D": "A code review checklist"
        },
        "correct": "A",
        "explanation": "A test case defines a specific scenario to test, including inputs, execution steps, and expected results.",
        "topic": {
            "topics": ["Testing concepts"]
        }
    },
    {
        "id": 7,
        "question": "What does a failing test indicate?",
        "options": {
            "A": "The code doesn't behave as expected",
            "B": "The test framework is broken",
            "C": "The computer needs restarting",
            "D": "The test should be deleted"
        },
        "correct": "A",
        "explanation": "A failing test usually indicates that the code being tested isn't working as expected according to the test's requirements.",
        "topic": {
            "topics": ["Testing concepts"]
        }
    },
    {
        "id": 8,
        "question": "What is the purpose of test-driven development (TDD)?",
        "options": {
            "A": "Write tests before writing implementation code",
            "B": "Write documentation after writing tests",
            "C": "Test only after all code is written",
            "D": "Delete tests after they pass"
        },
        "correct": "A",
        "explanation": "In TDD, you write tests first, then write the minimum code needed to make tests pass, then refactor.",
        "topic": {
            "topics": ["Testing workflow"]
        }
    },
    {
        "id": 9,
        "question": "What is a test suite?",
        "options": {
            "A": "A collection of related test cases",
            "B": "A fancy testing framework",
            "C": "A set of testing tools",
            "D": "A team of testers"
        },
        "correct": "A",
        "explanation": "A test suite is a collection of test cases that are related and run together to test a feature or component.",
        "topic": {
            "topics": ["Test structure"]
        }
    },
    {
        "id": 10,
        "question": "What should tests verify about functions?",
        "options": {
            "A": "They return expected outputs for given inputs",
            "B": "They use the latest JavaScript features",
            "C": "They have fewer than 10 lines of code",
            "D": "They don't call other functions"
        },
        "correct": "A",
        "explanation": "Tests should verify that functions produce the correct outputs for various inputs, including edge cases.",
        "topic": {
            "topics": ["Test assertions"]
        }
    },
    {
        "id": 11,
        "question": "What is regression testing?",
        "options": {
            "A": "Ensuring new changes don't break existing features",
            "B": "Testing only the oldest parts of the code",
            "C": "Going back to fix old bugs",
            "D": "Testing with old browsers"
        },
        "correct": "A",
        "explanation": "Regression testing ensures that previously working functionality continues to work after new changes are made.",
        "topic": {
            "topics": ["Testing benefits"]
        }
    },
    {
        "id": 12,
        "question": "What is a mock in testing?",
        "options": {
            "A": "A fake object that simulates real dependencies",
            "B": "A funny test name",
            "C": "A type of assertion",
            "D": "A testing framework"
        },
        "correct": "A",
        "explanation": "Mocks are fake objects that simulate the behavior of real dependencies, allowing isolated unit testing.",
        "topic": {
            "topics": ["Testing concepts"]
        }
    },
    {
        "id": 13,
        "question": "Why are tests valuable during code refactoring?",
        "options": {
            "A": "They ensure changes don't break existing behavior",
            "B": "They make refactoring faster",
            "C": "They automatically improve code quality",
            "D": "They eliminate the need for code review"
        },
        "correct": "A",
        "explanation": "Tests provide confidence when refactoring by quickly identifying if changes break existing functionality.",
        "topic": {
            "topics": ["Testing benefits"]
        }
    },
    {
        "id": 14,
        "question": "What is the role of a test runner?",
        "options": {
            "A": "Executes tests and reports results",
            "B": "Writes tests automatically",
            "C": "Optimizes test performance",
            "D": "Creates test data"
        },
        "correct": "A",
        "explanation": "A test runner is a tool that finds test files, executes tests, and reports which passed or failed.",
        "topic": {
            "topics": ["Testing workflow"]
        }
    },
    {
        "id": 15,
        "question": "What should you test in a function?",
        "options": {
            "A": "Normal cases, edge cases, and error cases",
            "B": "Only the most common use case",
            "C": "Just the function name",
            "D": "Only what the documentation says"
        },
        "correct": "A",
        "explanation": "Good tests cover normal operation, edge cases (like empty inputs), and error scenarios.",
        "topic": {
            "topics": ["Testing principles"]
        }
    },
    {
        "id": 16,
        "question": "What is code coverage?",
        "options": {
            "A": "A measure of how much code is executed by tests",
            "B": "The number of tests written",
            "C": "How many developers reviewed the code",
            "D": "The percentage of bugs found"
        },
        "correct": "A",
        "explanation": "Code coverage measures what percentage of your code is executed when tests run, helping identify untested areas.",
        "topic": {
            "topics": ["Testing concepts"]
        }
    },
    {
        "id": 17,
        "question": "What is the benefit of automated testing?",
        "options": {
            "A": "Tests can run quickly and repeatedly",
            "B": "Tests write themselves",
            "C": "No need for manual testing ever",
            "D": "Tests never need updating"
        },
        "correct": "A",
        "explanation": "Automated tests can run frequently, catch regressions early, and save time compared to manual testing.",
        "topic": {
            "topics": ["Testing benefits"]
        }
    },
    {
        "id": 18,
        "question": "What is a positive test case?",
        "options": {
            "A": "Testing valid inputs that should work",
            "B": "Only testing when you feel positive",
            "C": "A test that always passes",
            "D": "Testing with positive numbers only"
        },
        "correct": "A",
        "explanation": "Positive test cases verify that the system works correctly with valid, expected inputs.",
        "topic": {
            "topics": ["Test types"]
        }
    },
    {
        "id": 19,
        "question": "What is a negative test case?",
        "options": {
            "A": "Testing invalid inputs and error conditions",
            "B": "A test that always fails",
            "C": "Testing with negative numbers",
            "D": "A poorly written test"
        },
        "correct": "A",
        "explanation": "Negative test cases verify that the system handles invalid inputs and error conditions properly.",
        "topic": {
            "topics": ["Test types"]
        }
    },
    {
        "id": 20,
        "question": "Why should tests be independent?",
        "options": {
            "A": "So one test failure doesn't affect others",
            "B": "To make tests run in parallel",
            "C": "Because they're individual units",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "Independent tests don't rely on each other, can run in any order, and failures don't cascade.",
        "topic": {
            "topics": ["Testing principles"]
        }
    },
    {
        "id": 21,
        "question": "What is the red-green-refactor cycle in TDD?",
        "options": {
            "A": "Write failing test (red), make it pass (green), improve code (refactor)",
            "B": "Stop (red), go (green), wait (refactor)",
            "C": "Error (red), success (green), repeat (refactor)",
            "D": "Write test (red), run test (green), delete test (refactor)"
        },
        "correct": "A",
        "explanation": "The TDD cycle: write a failing test (red), write minimal code to pass (green), then improve code design (refactor).",
        "topic": {
            "topics": ["Testing workflow"]
        }
    },
    {
        "id": 22,
        "question": "What is the purpose of test descriptions?",
        "options": {
            "A": "To clearly explain what the test verifies",
            "B": "To make tests look professional",
            "C": "To satisfy the test framework",
            "D": "To add comments to the code"
        },
        "correct": "A",
        "explanation": "Clear test descriptions help developers understand what behavior is being tested when tests fail.",
        "topic": {
            "topics": ["Testing principles"]
        }
    },
    {
        "id": 23,
        "question": "What is integration testing?",
        "options": {
            "A": "Testing how multiple units work together",
            "B": "Testing individual functions in isolation",
            "C": "Testing the user interface only",
            "D": "Testing with real user data"
        },
        "correct": "A",
        "explanation": "Integration testing verifies that different units or components work correctly when combined.",
        "topic": {
            "topics": ["Test types"]
        }
    },
    {
        "id": 24,
        "question": "Why are fast-running tests important?",
        "options": {
            "A": "They encourage frequent test execution",
            "B": "They use less memory",
            "C": "They're easier to write",
            "D": "They find more bugs"
        },
        "correct": "A",
        "explanation": "Fast tests can be run frequently, providing quick feedback during development.",
        "topic": {
            "topics": ["Testing benefits"]
        }
    },
    {
        "id": 25,
        "question": "What is a common assertion for checking equality?",
        "options": {
            "A": "expect(actual).toEqual(expected)",
            "B": "assert.true(condition)",
            "C": "test.run(actual, expected)",
            "D": "check.same(actual, expected)"
        },
        "correct": "A",
        "explanation": "Most testing frameworks provide an assertion method like toEqual() or strictEqual() to check if values match.",
        "topic": {
            "topics": ["Test assertions"]
        }
    },
    {
        "id": 26,
        "question": "What should you do when a test fails?",
        "options": {
            "A": "Investigate and fix the cause of failure",
            "B": "Immediately delete the test",
            "C": "Ignore it if it's a small issue",
            "D": "Only fix it before releasing"
        },
        "correct": "A",
        "explanation": "Test failures should be investigated promptly to understand if they indicate bugs or need test updates.",
        "topic": {
            "topics": ["Testing workflow"]
        }
    },
    {
        "id": 27,
        "question": "What is the benefit of having many small tests?",
        "options": {
            "A": "Easier to identify exactly what's broken",
            "B": "They run slower overall",
            "C": "They're harder to maintain",
            "D": "They find more complex bugs"
        },
        "correct": "A",
        "explanation": "Small, focused tests make it easier to pinpoint the exact cause when something breaks.",
        "topic": {
            "topics": ["Testing principles"]
        }
    },
    {
        "id": 28,
        "question": "What is a test double?",
        "options": {
            "A": "A generic term for test fakes, mocks, and stubs",
            "B": "Running the same test twice",
            "C": "A backup test file",
            "D": "Testing two functions together"
        },
        "correct": "A",
        "explanation": "Test double is an umbrella term for fake objects used in testing, including mocks, stubs, and spies.",
        "topic": {
            "topics": ["Testing concepts"]
        }
    },
    {
        "id": 29,
        "question": "Why is testing important for team development?",
        "options": {
            "A": "It helps prevent breaking others' code",
            "B": "It makes code reviews faster",
            "C": "It eliminates meetings",
            "D": "It reduces documentation needs"
        },
        "correct": "A",
        "explanation": "Tests give confidence that changes won't break existing functionality that other team members rely on.",
        "topic": {
            "topics": ["Testing benefits"]
        }
    },
    {
        "id": 30,
        "question": "What is the first step in writing a test?",
        "options": {
            "A": "Understand what behavior you want to verify",
            "B": "Install a testing framework",
            "C": "Write the implementation code",
            "D": "Run all existing tests"
        },
        "explanation": "Before writing any test code, you should clearly understand what specific behavior or requirement you're verifying.",
        "correct": "A",
        "topic": {
            "topics": ["Testing workflow"]
        }
    }
];

module.exports = { metadata, questions };