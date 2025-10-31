// assessment4.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "Modern JavaScript & Programming Concepts",
    "description": "ES6+ features, error handling, JSON operations, dates, regular expressions, and iteration methods",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "ES6+ Features (arrow functions, template literals, destructuring)",
        "Error handling (try/catch, error types)",
        "Date and Time operations",
        "JSON parsing and stringifying",
        "Regular expressions basics",
        "Loop types and iteration methods",
        "Callback functions and basic async concepts",
        "Modern JavaScript syntax and best practices"
    ],
    "assessmentId": 4,
    "topicLinks": [
        {
            "topicName": "ES6+ Features (arrow functions, template literals, destructuring)",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript"
        },
        {
            "topicName": "Loop types and iteration methods",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
        },
        {
            "topicName": "Modern JavaScript syntax and best practices",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript"
        },
        {
            "topicName": "JSON parsing and stringifying",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
        },
        {
            "topicName": "Regular expressions basics",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
        },
        {
            "topicName": "Error handling (try/catch, error types)",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling"
        },
        {
            "topicName": "Date and Time operations",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
        },
        {
            "topicName": "Callback functions and basic async concepts",
            "mdnLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous"
        }
    ]
};

const questions = [
    {
        "id": 1,
        "question": "What is the correct syntax for an arrow function?",
        "options": {
            "A": "function() => {}",
            "B": "() => {}",
            "C": "=> () {}",
            "D": "() -> {}"
        },
        "correct": "B",
        "explanation": "Arrow functions use the syntax [CODE](parameters) => { function body }[/CODE]. The [CODE]() => {}[/CODE] is the simplest form for a function with no parameters.",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Loop types and iteration methods",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 2,
        "question": "Which method converts a JavaScript object to a JSON string?",
        "options": {
            "A": "JSON.parse()",
            "B": "JSON.stringify()",
            "C": "JSON.convert()",
            "D": "JSON.toString()"
        },
        "correct": "B",
        "explanation": "[CODE]JSON.stringify()[/CODE] converts a JavaScript object or value to a JSON string. [CODE]JSON.parse()[/CODE] does the opposite - converts JSON to JavaScript.",
        "topic": {
            "topics": [
                "JSON parsing and stringifying"
            ]
        }
    },
    {
        "id": 3,
        "question": "What is the correct syntax for template literals?",
        "options": {
            "A": "\"Hello ${name}\"",
            "B": "'Hello ${name}'",
            "C": "`Hello ${name}`",
            "D": "'Hello ' + name"
        },
        "correct": "C",
        "explanation": "Template literals use backticks (`) and allow embedded expressions with [CODE]${expression}[/CODE] syntax for string interpolation.",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Regular expressions basics",
                "Loop types and iteration methods",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 4,
        "question": "Which statement correctly handles errors in JavaScript?",
        "options": {
            "A": "try { code } catch (error) { handle }",
            "B": "catch { code } try (error) { handle }",
            "C": "handle { code } error (e) { catch }",
            "D": "error { code } catch (e) { handle }"
        },
        "correct": "A",
        "explanation": "The [CODE]try...catch[/CODE] statement executes code in the try block and handles any exceptions in the catch block with the error parameter.",
        "topic": {
            "topics": [
                "Error handling (try/catch, error types)"
            ]
        }
    },
    {
        "id": 5,
        "question": "How do you create a new Date object for the current date and time?",
        "options": {
            "A": "new Date.now()",
            "B": "new Date()",
            "C": "Date.current()",
            "D": "Date.new()"
        },
        "correct": "B",
        "explanation": "[CODE]new Date()[/CODE] creates a new Date object with the current date and time. [CODE]Date.now()[/CODE] returns a timestamp number, not a Date object.",
        "topic": {
            "topics": [
                "Date and Time operations",
                "Loop types and iteration methods"
            ]
        }
    },
    {
        "id": 6,
        "question": "What does the for...of loop iterate over?",
        "options": {
            "A": "Object properties",
            "B": "Array indices",
            "C": "Iterable values",
            "D": "Function parameters"
        },
        "correct": "C",
        "explanation": "The [CODE]for...of[/CODE] loop iterates over iterable values (like array elements, string characters). [CODE]for...in[/CODE] iterates over object properties.",
        "topic": {
            "topics": [
                "Loop types and iteration methods"
            ]
        }
    },
    {
        "id": 7,
        "question": "Which is the correct way to destructure an array?",
        "options": {
            "A": "const {a, b} = [1, 2]",
            "B": "const [a, b] = [1, 2]",
            "C": "const (a, b) = [1, 2]",
            "D": "const a, b = [1, 2]"
        },
        "correct": "B",
        "explanation": "Array destructuring uses square brackets []. Object destructuring uses curly braces {}. This assigns [CODE]a=1, b=2[/CODE].",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 8,
        "question": "What does JSON.parse() do?",
        "options": {
            "A": "Converts object to JSON string",
            "B": "Converts JSON string to JavaScript object",
            "C": "Validates JSON syntax",
            "D": "Formats JSON string"
        },
        "correct": "B",
        "explanation": "[CODE]JSON.parse()[/CODE] parses a JSON string and returns the corresponding JavaScript object or value.",
        "topic": {
            "topics": [
                "JSON parsing and stringifying"
            ]
        }
    },
    {
        "id": 9,
        "question": "Which creates a regular expression to match digits?",
        "options": {
            "A": "/\\d+/",
            "B": "/[0-9]+/",
            "C": "/\\d/",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All options create valid regex patterns for digits: [CODE]\\d[/CODE] matches any digit, [CODE][0-9][/CODE] matches digits 0-9, and [CODE]+[/CODE] means one or more.",
        "topic": {
            "topics": [
                "Regular expressions basics",
                "Loop types and iteration methods"
            ]
        }
    },
    {
        "id": 10,
        "question": "What is the difference between for...in and for...of?",
        "options": {
            "A": "No difference",
            "B": "for...in iterates values, for...of iterates properties",
            "C": "for...in iterates properties, for...of iterates values",
            "D": "for...of is faster"
        },
        "correct": "C",
        "explanation": "[CODE]for...in[/CODE] iterates over object properties (keys), while [CODE]for...of[/CODE] iterates over iterable values (like array elements).",
        "topic": {
            "topics": [
                "Loop types and iteration methods"
            ]
        }
    },
    {
        "id": 11,
        "question": "How do you get the current year using Date object?",
        "options": {
            "A": "new Date().getYear()",
            "B": "new Date().getFullYear()",
            "C": "new Date().year()",
            "D": "Date.getYear()"
        },
        "correct": "B",
        "explanation": "[CODE]getFullYear()[/CODE] returns the 4-digit year. [CODE]getYear()[/CODE] is deprecated and returns year minus 1900.",
        "topic": {
            "topics": [
                "Date and Time operations"
            ]
        }
    },
    {
        "id": 12,
        "question": "What happens if you call JSON.parse() with invalid JSON?",
        "options": {
            "A": "Returns null",
            "B": "Returns undefined",
            "C": "Throws an error",
            "D": "Returns empty object"
        },
        "correct": "C",
        "explanation": "[CODE]JSON.parse()[/CODE] throws a SyntaxError if the string is not valid JSON. You should use [CODE]try...catch[/CODE] to handle this.",
        "topic": {
            "topics": [
                "Error handling (try/catch, error types)",
                "JSON parsing and stringifying"
            ]
        }
    },
    {
        "id": 13,
        "question": "Which is a valid arrow function with one parameter?",
        "options": {
            "A": "x => x * 2",
            "B": "(x) => x * 2",
            "C": "x => { return x * 2 }",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All are valid. Single parameters don't need parentheses, and single expressions don't need braces or explicit [CODE]return[/CODE].",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 14,
        "question": "What does the spread operator (...) do with arrays?",
        "options": {
            "A": "Combines arrays",
            "B": "Expands array elements",
            "C": "Copies an array",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "The spread operator can expand array elements, copy arrays ([CODE][...arr][/CODE]), and combine arrays ([CODE][...arr1, ...arr2][/CODE]).",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)"
            ]
        }
    },
    {
        "id": 15,
        "question": "How do you catch a specific type of error?",
        "options": {
            "A": "catch (TypeError e)",
            "B": "catch (e) { if (e instanceof TypeError) }",
            "C": "catch TypeError (e)",
            "D": "catch (e: TypeError)"
        },
        "correct": "B",
        "explanation": "JavaScript catch blocks catch all errors. To handle specific types, check the error type inside the catch block using [CODE]instanceof[/CODE].",
        "topic": {
            "topics": [
                "Error handling (try/catch, error types)"
            ]
        }
    },
    {
        "id": 16,
        "question": "What is the result of `Hello ${1 + 2} World`?",
        "options": {
            "A": "Hello ${1 + 2} World",
            "B": "Hello 3 World",
            "C": "Hello 1 + 2 World",
            "D": "Syntax error"
        },
        "correct": "B",
        "explanation": "Template literals (backticks) evaluate expressions inside [CODE]${}[/CODE]. The expression [CODE]1 + 2[/CODE] evaluates to 3.",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Regular expressions basics",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 17,
        "question": "Which method tests if a string matches a regular expression?",
        "options": {
            "A": "test()",
            "B": "match()",
            "C": "search()",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "[CODE]test()[/CODE] returns boolean, [CODE]match()[/CODE] returns matches, [CODE]search()[/CODE] returns index. All can be used to test regex matches in different ways.",
        "topic": {
            "topics": [
                "Regular expressions basics"
            ]
        }
    },
    {
        "id": 18,
        "question": "How do you destructure an object property with a different variable name?",
        "options": {
            "A": "const {name: newName} = obj",
            "B": "const {name as newName} = obj",
            "C": "const {name = newName} = obj",
            "D": "const {newName: name} = obj"
        },
        "correct": "A",
        "explanation": "Use the syntax [CODE]{originalName: newVariableName}[/CODE] to destructure a property into a differently named variable.",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 19,
        "question": "What does Date.now() return?",
        "options": {
            "A": "Current date string",
            "B": "Date object",
            "C": "Timestamp in milliseconds",
            "D": "Current time string"
        },
        "correct": "C",
        "explanation": "[CODE]Date.now()[/CODE] returns the current timestamp as the number of milliseconds since January 1, 1970 UTC.",
        "topic": {
            "topics": [
                "Date and Time operations"
            ]
        }
    },
    {
        "id": 20,
        "question": "Which loop continues until a condition becomes false?",
        "options": {
            "A": "while loop",
            "B": "do...while loop",
            "C": "for loop",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All loop types continue while their condition is true and stop when it becomes false. They differ in when the condition is checked.",
        "topic": {
            "topics": [
                "Loop types and iteration methods"
            ]
        }
    },
    {
        "id": 21,
        "question": "What is a callback function?",
        "options": {
            "A": "A function that calls itself",
            "B": "A function passed to another function",
            "C": "A function that returns a function",
            "D": "A function with no parameters"
        },
        "correct": "B",
        "explanation": "A callback function is a function passed as an argument to another function, to be called later when needed.",
        "topic": {
            "topics": [
                "Callback functions and basic async concepts"
            ]
        }
    },
    {
        "id": 22,
        "question": "How do you create a multi-line string with template literals?",
        "options": {
            "A": "Use \\n characters",
            "B": "Use actual line breaks between backticks",
            "C": "Concatenate strings with +",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Template literals preserve actual line breaks and also interpret escape characters like [CODE]\\n[/CODE].",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 23,
        "question": "What does the finally block do in try...catch?",
        "options": {
            "A": "Runs only if there's an error",
            "B": "Runs only if there's no error",
            "C": "Always runs regardless of error",
            "D": "Prevents errors from occurring"
        },
        "correct": "C",
        "explanation": "The [CODE]finally[/CODE] block always executes, whether an error occurs or not. It's useful for cleanup operations.",
        "topic": {
            "topics": [
                "Error handling (try/catch, error types)",
                "Loop types and iteration methods"
            ]
        }
    },
    {
        "id": 24,
        "question": "Which is the correct syntax for default parameters?",
        "options": {
            "A": "function test(a = 5) {}",
            "B": "function test(a || 5) {}",
            "C": "function test(a default 5) {}",
            "D": "function test(a := 5) {}"
        },
        "correct": "A",
        "explanation": "ES6 default parameters use the syntax [CODE]parameter = defaultValue[/CODE]. This sets a default value if no argument is provided.",
        "topic": {
            "topics": [
                "Loop types and iteration methods",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 25,
        "question": "What does the rest parameter (...args) do?",
        "options": {
            "A": "Spreads an array",
            "B": "Collects remaining arguments into an array",
            "C": "Copies function parameters",
            "D": "Creates a new function"
        },
        "correct": "B",
        "explanation": "The rest parameter collects all remaining function arguments into an array, allowing functions to accept variable numbers of arguments.",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)"
            ]
        }
    },
    {
        "id": 26,
        "question": "How do you format a Date object to show only the date part?",
        "options": {
            "A": "date.toDateString()",
            "B": "date.getDate()",
            "C": "date.dateOnly()",
            "D": "date.formatDate()"
        },
        "correct": "A",
        "explanation": "[CODE]toDateString()[/CODE] returns the date portion as a string (e.g., 'Mon Oct 23 2025'). [CODE]getDate()[/CODE] returns only the day number.",
        "topic": {
            "topics": [
                "Date and Time operations",
                "Loop types and iteration methods"
            ]
        }
    },
    {
        "id": 27,
        "question": "What does /^[a-z]+$/ match?",
        "options": {
            "A": "Any string with lowercase letters",
            "B": "Strings with only lowercase letters",
            "C": "Strings starting with lowercase letters",
            "D": "Strings ending with lowercase letters"
        },
        "correct": "B",
        "explanation": "[CODE]^[/CODE] means start of string, [CODE][a-z]+[/CODE] means one or more lowercase letters, [CODE]$[/CODE] means end of string. Together they match strings containing only lowercase letters.",
        "topic": {
            "topics": [
                "Regular expressions basics",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 28,
        "question": "Which method removes whitespace and parses a string as an integer?",
        "options": {
            "A": "parseInt(str.trim())",
            "B": "Number(str)",
            "C": "parseFloat(str)",
            "D": "All of the above"
        },
        "correct": "A",
        "explanation": "[CODE]parseInt()[/CODE] automatically skips leading whitespace, but [CODE]trim() + parseInt()[/CODE] is more explicit. [CODE]Number()[/CODE] also handles whitespace but converts to decimal.",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)"
            ]
        }
    },
    {
        "id": 29,
        "question": "What happens with unused parameters in arrow functions?",
        "options": {
            "A": "Causes an error",
            "B": "Must be removed",
            "C": "Are ignored (no error)",
            "D": "Automatically deleted"
        },
        "correct": "C",
        "explanation": "JavaScript allows functions to have unused parameters without error. They're simply ignored if not used in the function body.",
        "topic": {
            "topics": [
                "ES6+ Features (arrow functions, template literals, destructuring)",
                "Error handling (try/catch, error types)",
                "Modern JavaScript syntax and best practices"
            ]
        }
    },
    {
        "id": 30,
        "question": "How do you check if a variable is an array?",
        "options": {
            "A": "typeof arr === 'array'",
            "B": "Array.isArray(arr)",
            "C": "arr instanceof Array",
            "D": "Both B and C"
        },
        "correct": "D",
        "explanation": "[CODE]Array.isArray()[/CODE] is the preferred method, and [CODE]instanceof Array[/CODE] also works. [CODE]typeof[/CODE] returns 'object' for arrays, not 'array'.",
        "topic": {
            "topics": [
                "Loop types and iteration methods"
            ]
        }
    }
];

module.exports = { metadata, questions };
