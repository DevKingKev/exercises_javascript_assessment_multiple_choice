// assessment2.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "Advanced JavaScript Basics",
    "description": "More advanced JavaScript fundamentals including type coercion, array methods, and scope concepts",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Type coercion and typeof operator",
        "Array methods (unshift, pop, includes, filter, map)",
        "String methods (toLowerCase, trim, length)",
        "Variable scoping (let, const, block scope)",
        "Boolean logic and NaN handling",
        "Control flow statements",
        "Object creation methods"
    ],
    "assessmentId": 2,
    "assessmentUniqueId": 1762254854225,
    "testType": "multiple-choice",
    "topicLinks": [
        {
            "topicName": "Type coercion and typeof operator",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"
        },
        {
            "topicName": "Array methods (unshift, pop, includes, filter, map)",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        },
        {
            "topicName": "String methods (toLowerCase, trim, length)",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
        },
        {
            "topicName": "Variable scoping (let, const, block scope)",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
        },
        {
            "topicName": "Boolean logic and NaN handling",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Falsy"
        },
        {
            "topicName": "Control flow statements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
        },
        {
            "topicName": "Object creation methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
        }
    ]
};

const questions = [
    {
        "id": 1,
        "question": "What does the 'typeof' operator return for an array in JavaScript?",
        "options": {
            "A": "'array'",
            "B": "'object'",
            "C": "'list'",
            "D": "'undefined'"
        },
        "correct": "B",
        "explanation": "In JavaScript, arrays are actually objects, so typeof returns 'object'. To check if something is specifically an array, use Array.isArray().",
        "topic": {
            "topics": [
                "Type coercion and typeof operator",
                "Array methods (unshift, pop, includes, filter, map)",
                "String methods (toLowerCase, trim, length)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 2,
        "question": "Which method adds an element to the beginning of an array?",
        "options": {
            "A": "push()",
            "B": "unshift()",
            "C": "prepend()",
            "D": "insert()"
        },
        "correct": "B",
        "explanation": "unshift() adds elements to the beginning of an array and returns the new length. push() adds to the end.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 3,
        "question": "What is the result of: 5 + '3'?",
        "options": {
            "A": "8",
            "B": "53",
            "C": "'53'",
            "D": "Error"
        },
        "correct": "C",
        "explanation": "JavaScript performs type coercion. When adding a number and string, the number is converted to a string, resulting in '53'.",
        "topic": {
            "topics": [
                "Type coercion and typeof operator",
                "String methods (toLowerCase, trim, length)"
            ]
        }
    },
    {
        "id": 4,
        "question": "Which loop continues until a condition becomes false?",
        "options": {
            "A": "for loop",
            "B": "while loop",
            "C": "do...while loop",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three loop types continue until their condition becomes false. The difference is when and how often the condition is checked.",
        "topic": {
            "topics": [
                "Boolean logic and NaN handling",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 5,
        "question": "What does '===' check for in JavaScript?",
        "options": {
            "A": "Value only",
            "B": "Type only",
            "C": "Value and type",
            "D": "Reference only"
        },
        "correct": "C",
        "explanation": "The strict equality operator (===) checks both value and type without type coercion, while == only checks value with type coercion.",
        "topic": {
            "topics": [
                "Type coercion and typeof operator",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 6,
        "question": "Which method removes the last element from an array?",
        "options": {
            "A": "array.pop()",
            "B": "array.removeLast()",
            "C": "array.delete()",
            "D": "array.shift()"
        },
        "correct": "A",
        "explanation": "pop() removes and returns the last element from an array. shift() removes the first element.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)"
            ]
        }
    },
    {
        "id": 7,
        "question": "What is the correct way to create a new object in JavaScript?",
        "options": {
            "A": "new Object()",
            "B": "{}",
            "C": "Object.create({})",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods create new objects. {} is the most common literal syntax, new Object() uses constructor, Object.create() allows prototype specification.",
        "topic": {
            "topics": [
                "Variable scoping (let, const, block scope)",
                "Control flow statements",
                "Object creation methods"
            ]
        }
    },
    {
        "id": 8,
        "question": "Which keyword is used to define a constant in JavaScript?",
        "options": {
            "A": "var",
            "B": "let",
            "C": "const",
            "D": "final"
        },
        "correct": "C",
        "explanation": "const declares a constant variable that cannot be reassigned. However, objects and arrays declared with const can still be modified.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)",
                "Variable scoping (let, const, block scope)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 9,
        "question": "What does the 'length' property return for the string 'Hello'?",
        "options": {
            "A": "4",
            "B": "5",
            "C": "6",
            "D": "undefined"
        },
        "correct": "B",
        "explanation": "The length property returns the number of characters in a string. 'Hello' has 5 characters, so it returns 5.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 10,
        "question": "Which operator is used for logical AND in JavaScript?",
        "options": {
            "A": "&",
            "B": "and",
            "C": "&&",
            "D": "AND"
        },
        "correct": "C",
        "explanation": "The logical AND operator in JavaScript is &&. The single & is a bitwise AND operator.",
        "topic": {
            "topics": [
                "Control flow statements"
            ]
        }
    },
    {
        "id": 11,
        "question": "What is the result of: Boolean('')?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "An empty string is a falsy value in JavaScript, so Boolean('') returns false. Other falsy values include 0, null, undefined, NaN.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)",
                "Boolean logic and NaN handling"
            ]
        }
    },
    {
        "id": 12,
        "question": "Which method converts a string to lowercase?",
        "options": {
            "A": "toLowerCase()",
            "B": "lower()",
            "C": "toLower()",
            "D": "lowerCase()"
        },
        "correct": "A",
        "explanation": "toLowerCase() converts all characters in a string to lowercase. toUpperCase() does the opposite.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)"
            ]
        }
    },
    {
        "id": 13,
        "question": "What does 'null' represent in JavaScript?",
        "options": {
            "A": "An undefined variable",
            "B": "An intentional absence of value",
            "C": "An empty string",
            "D": "Zero"
        },
        "correct": "B",
        "explanation": "null represents an intentional absence of any object value. It's different from undefined, which means a variable hasn't been assigned.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 14,
        "question": "Which method joins all elements of an array into a string?",
        "options": {
            "A": "concat()",
            "B": "join()",
            "C": "merge()",
            "D": "combine()"
        },
        "correct": "B",
        "explanation": "join() creates and returns a new string by concatenating all array elements, separated by a specified separator (comma by default).",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)",
                "String methods (toLowerCase, trim, length)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 15,
        "question": "What is the scope of a variable declared with 'let'?",
        "options": {
            "A": "Global scope",
            "B": "Function scope",
            "C": "Block scope",
            "D": "Module scope"
        },
        "correct": "C",
        "explanation": "Variables declared with 'let' have block scope, meaning they're only accessible within the block where they're defined.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)",
                "Variable scoping (let, const, block scope)"
            ]
        }
    },
    {
        "id": 16,
        "question": "Which method checks if an array contains a specific element?",
        "options": {
            "A": "contains()",
            "B": "includes()",
            "C": "has()",
            "D": "exists()"
        },
        "correct": "B",
        "explanation": "includes() determines whether an array includes a certain element, returning true or false. It was introduced in ES2016.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)",
                "Boolean logic and NaN handling",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 17,
        "question": "What is the result of: 10 % 3?",
        "options": {
            "A": "3",
            "B": "3.33",
            "C": "1",
            "D": "0"
        },
        "correct": "C",
        "explanation": "The modulus operator (%) returns the remainder of a division. 10 divided by 3 is 3 with remainder 1.",
        "topic": {
            "topics": [
                "Type coercion and typeof operator"
            ]
        }
    },
    {
        "id": 18,
        "question": "Which method creates a new array with all elements that pass a test?",
        "options": {
            "A": "map()",
            "B": "filter()",
            "C": "find()",
            "D": "forEach()"
        },
        "correct": "B",
        "explanation": "filter() creates a new array with all elements that pass the test implemented by the provided function.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)"
            ]
        }
    },
    {
        "id": 19,
        "question": "What does 'NaN' stand for?",
        "options": {
            "A": "Not a Number",
            "B": "Null and None",
            "C": "New Array Node",
            "D": "Not Available Now"
        },
        "correct": "A",
        "explanation": "NaN stands for 'Not a Number' and represents a value that is not a legal number. Ironically, typeof NaN returns 'number'.",
        "topic": {
            "topics": [
                "Type coercion and typeof operator",
                "String methods (toLowerCase, trim, length)",
                "Boolean logic and NaN handling",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 20,
        "question": "Which method removes elements from an array and optionally adds new ones?",
        "options": {
            "A": "slice()",
            "B": "splice()",
            "C": "split()",
            "D": "replace()"
        },
        "correct": "B",
        "explanation": "splice() changes the contents of an array by removing existing elements and/or adding new elements. slice() doesn't modify the original array.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)",
                "String methods (toLowerCase, trim, length)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 21,
        "question": "What is the correct syntax for a JavaScript comment?",
        "options": {
            "A": "<!-- comment -->",
            "B": "# comment",
            "C": "// comment",
            "D": "/* comment */"
        },
        "correct": "C",
        "explanation": "JavaScript supports two comment styles: // for single-line comments and /* */ for multi-line comments. Both C and D are correct, but C is more common for single lines.",
        "topic": {
            "topics": [
                "Control flow statements"
            ]
        }
    },
    {
        "id": 22,
        "question": "Which method returns the first element that satisfies a condition?",
        "options": {
            "A": "filter()",
            "B": "find()",
            "C": "search()",
            "D": "locate()"
        },
        "correct": "B",
        "explanation": "find() returns the first element in an array that satisfies the provided testing function. If no element is found, it returns undefined.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 23,
        "question": "What is the result of: typeof undefined?",
        "options": {
            "A": "'null'",
            "B": "'undefined'",
            "C": "'object'",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "typeof undefined returns the string 'undefined'. This is different from null, where typeof null returns 'object' (a known quirk).",
        "topic": {
            "topics": [
                "Type coercion and typeof operator",
                "String methods (toLowerCase, trim, length)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 24,
        "question": "Which method creates a new array with the results of calling a function on every element?",
        "options": {
            "A": "forEach()",
            "B": "map()",
            "C": "apply()",
            "D": "call()"
        },
        "correct": "B",
        "explanation": "map() creates a new array populated with the results of calling a provided function on every element in the calling array.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)"
            ]
        }
    },
    {
        "id": 25,
        "question": "What does the 'break' statement do in a loop?",
        "options": {
            "A": "Skips the current iteration",
            "B": "Exits the loop completely",
            "C": "Pauses the loop",
            "D": "Restarts the loop"
        },
        "correct": "B",
        "explanation": "The 'break' statement terminates the current loop completely. 'continue' skips the current iteration and moves to the next one.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)",
                "Variable scoping (let, const, block scope)"
            ]
        }
    },
    {
        "id": 26,
        "question": "Which method converts a number to a string?",
        "options": {
            "A": "toString()",
            "B": "toText()",
            "C": "stringify()",
            "D": "convert()"
        },
        "correct": "A",
        "explanation": "toString() method returns a string representing the specified number. You can also use String() constructor or template literals.",
        "topic": {
            "topics": [
                "Type coercion and typeof operator",
                "String methods (toLowerCase, trim, length)",
                "Variable scoping (let, const, block scope)",
                "Control flow statements",
                "Object creation methods"
            ]
        }
    },
    {
        "id": 27,
        "question": "What is the difference between '==' and '==='?",
        "options": {
            "A": "No difference",
            "B": "== checks type, === checks value",
            "C": "== allows type coercion, === doesn't",
            "D": "=== is faster than =="
        },
        "correct": "C",
        "explanation": "== allows type coercion and compares values after converting types if needed. === (strict equality) compares both value and type without coercion.",
        "topic": {
            "topics": [
                "Type coercion and typeof operator",
                "String methods (toLowerCase, trim, length)",
                "Control flow statements"
            ]
        }
    },
    {
        "id": 28,
        "question": "Which method removes whitespace from both ends of a string?",
        "options": {
            "A": "strip()",
            "B": "trim()",
            "C": "clean()",
            "D": "remove()"
        },
        "correct": "B",
        "explanation": "trim() removes whitespace from both ends of a string. trimStart() and trimEnd() remove whitespace from the beginning or end respectively.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)"
            ]
        }
    },
    {
        "id": 29,
        "question": "What is the result of: [1, 2, 3].length?",
        "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "undefined"
        },
        "correct": "B",
        "explanation": "The length property of an array returns the number of elements. The array [1, 2, 3] has 3 elements, so length is 3.",
        "topic": {
            "topics": [
                "Array methods (unshift, pop, includes, filter, map)",
                "String methods (toLowerCase, trim, length)"
            ]
        }
    },
    {
        "id": 30,
        "question": "Which keyword is used to declare a function in JavaScript?",
        "options": {
            "A": "function",
            "B": "def",
            "C": "func",
            "D": "method"
        },
        "correct": "A",
        "explanation": "The 'function' keyword is used to declare functions in JavaScript. You can also use arrow functions (=>) or function expressions.",
        "topic": {
            "topics": [
                "String methods (toLowerCase, trim, length)"
            ]
        }
    }
];

module.exports = { metadata, questions };
