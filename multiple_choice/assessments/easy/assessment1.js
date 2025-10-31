// assessment1.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Fundamentals",
    "description": "Basic JavaScript concepts including variables, functions, arrays, objects, and control flow",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 20,
    "topics": [
        "Variable declarations (var, let, const)",
        "Array and string methods",
        "Function basics and scope",
        "Object properties and creation",
        "Conditional statements and loops",
        "DOM manipulation basics",
        "Event handling fundamentals"
    ],
    "topicLinks": [],
    "assessmentId": 1
};

const questions = [
    {
        "id": 1,
        "question": "What is the correct way to declare a variable in JavaScript ES6?",
        "options": {
            "A": "var name = 'John';",
            "B": "let name = 'John';",
            "C": "const name = 'John';",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three options (var, let, const) are valid ways to declare variables in JavaScript. However, 'let' and 'const' are ES6 features with block scope, while 'var' has function scope.",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)",
                "Function basics and scope"
            ]
        }
    },
    {
        "id": 2,
        "question": "Which method would you use to add an element to the end of an array?",
        "options": {
            "A": "array.push(element)",
            "B": "array.add(element)",
            "C": "array.append(element)",
            "D": "array.insert(element)"
        },
        "correct": "A",
        "explanation": "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
        "topic": {
            "topics": [
                "Array and string methods",
                "Function basics and scope"
            ]
        }
    },
    {
        "id": 3,
        "question": "What is the output of the following code?\n\n[CODE]\nfunction test() {\n    return 5;\n}\nconsole.log(test());\n[/CODE]",
        "options": {
            "A": "undefined",
            "B": "5",
            "C": "function test() { return 5; }",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The function returns 5, so console.log(test()) will output 5.",
        "topic": {
            "topics": [
                "Function basics and scope"
            ]
        }
    },
    {
        "id": 4,
        "question": "Which method converts a string to uppercase?",
        "options": {
            "A": "string.upper()",
            "B": "string.toUpperCase()",
            "C": "string.upperCase()",
            "D": "string.capitalize()"
        },
        "correct": "B",
        "explanation": "The toUpperCase() method converts a string to uppercase letters.",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)",
                "Array and string methods"
            ]
        }
    },
    {
        "id": 5,
        "question": "What will the following code output?\n\n[CODE]\nlet x = 10;\nif (x > 5) {\n    console.log(\"Greater\");\n} else {\n    console.log(\"Smaller\");\n}\n[/CODE]",
        "options": {
            "A": "Greater",
            "B": "Smaller",
            "C": "10",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Since x (10) is greater than 5, the condition is true, so 'Greater' is printed.",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)",
                "Conditional statements and loops"
            ]
        }
    },
    {
        "id": 6,
        "question": "How many times will this loop execute?\n\n[CODE]\nfor (let i = 0; i < 3; i++) {\n    console.log(i);\n}\n[/CODE]",
        "options": {
            "A": "2 times",
            "B": "3 times",
            "C": "4 times",
            "D": "Infinite times"
        },
        "correct": "B",
        "explanation": "The loop runs while i < 3, starting from 0. It executes for i = 0, 1, 2 (3 times total).",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)",
                "Conditional statements and loops"
            ]
        }
    },
    {
        "id": 7,
        "question": "How do you access the 'name' property of an object called 'person'?",
        "options": {
            "A": "person.name",
            "B": "person['name']",
            "C": "person('name')",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both dot notation (person.name) and bracket notation (person['name']) can access object properties.",
        "topic": {
            "topics": [
                "Object properties and creation"
            ]
        }
    },
    {
        "id": 8,
        "question": "What data type does the typeof operator return for null?",
        "options": {
            "A": "'null'",
            "B": "'object'",
            "C": "'undefined'",
            "D": "'number'"
        },
        "correct": "B",
        "explanation": "This is a known quirk in JavaScript - typeof null returns 'object', even though null is not an object.",
        "topic": {
            "topics": [
                "Function basics and scope",
                "Object properties and creation"
            ]
        }
    },
    {
        "id": 9,
        "question": "What is the length of this array?\n\n[CODE]\nlet arr = [1, 2, 3, , 5];\n[/CODE]",
        "options": {
            "A": "4",
            "B": "5",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The array has 5 elements including the empty slot at index 3, so length is 5.",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)",
                "Array and string methods"
            ]
        }
    },
    {
        "id": 10,
        "question": "What is the result of: [CODE]true && false || true[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Due to operator precedence, this evaluates as [CODE](true && false) || true = false || true = true[/CODE].",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)"
            ]
        }
    },
    {
        "id": 11,
        "question": "What happens when you call a function with fewer arguments than parameters?\n\n[CODE]\nfunction greet(name, age) {\n    console.log(name, age);\n}\ngreet(\"John\");\n[/CODE]",
        "options": {
            "A": "Error",
            "B": "John undefined",
            "C": "John null",
            "D": "John 0"
        },
        "correct": "B",
        "explanation": "Missing parameters are automatically set to undefined in JavaScript.",
        "topic": {
            "topics": [
                "Function basics and scope"
            ]
        }
    },
    {
        "id": 12,
        "question": "What is the result of: [CODE]'5' + 3[/CODE]?",
        "options": {
            "A": "8",
            "B": "'53'",
            "C": "53",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "JavaScript converts the number 3 to a string and concatenates it with '5', resulting in '53'.",
        "topic": {
            "topics": [
                "Array and string methods"
            ]
        }
    },
    {
        "id": 13,
        "question": "What will this code output?\n\n[CODE]\nlet x = 1;\nfunction test() {\n    let x = 2;\n    console.log(x);\n}\ntest();\n[/CODE]",
        "options": {
            "A": "1",
            "B": "2",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The local variable x (2) inside the function shadows the global variable x (1).",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)",
                "Function basics and scope"
            ]
        }
    },
    {
        "id": 14,
        "question": "Which method removes the last element from an array?",
        "options": {
            "A": "array.pop()",
            "B": "array.removeLast()",
            "C": "array.delete()",
            "D": "array.shift()"
        },
        "correct": "A",
        "explanation": "The pop() method removes and returns the last element from an array.",
        "topic": {
            "topics": [
                "Array and string methods",
                "Function basics and scope"
            ]
        }
    },
    {
        "id": 15,
        "question": "What is the difference between == and === in JavaScript?",
        "options": {
            "A": "No difference",
            "B": "== compares values, === compares values and types",
            "C": "== is faster than ===",
            "D": "=== is used for strings only"
        },
        "correct": "B",
        "explanation": "== performs type coercion before comparison, while === checks both value and type without coercion.",
        "topic": {
            "topics": [
                "Conditional statements and loops"
            ]
        }
    },
    {
        "id": 16,
        "question": "Which is a valid way to create an empty object?",
        "options": {
            "A": "let obj = {};",
            "B": "let obj = new Object();",
            "C": "let obj = Object.create(null);",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods create objects, though with slight differences in their prototype chain.",
        "topic": {
            "topics": [
                "Object properties and creation",
                "Conditional statements and loops"
            ]
        }
    },
    {
        "id": 17,
        "question": "What is the purpose of the try...catch statement?",
        "options": {
            "A": "To loop through arrays",
            "B": "To handle errors gracefully",
            "C": "To declare variables",
            "D": "To create functions"
        },
        "correct": "B",
        "explanation": "try...catch is used for error handling, allowing you to catch and handle exceptions without crashing the program.",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)"
            ]
        }
    },
    {
        "id": 18,
        "question": "What is the result of [CODE]Math.floor(4.7)[/CODE]?",
        "options": {
            "A": "4",
            "B": "5",
            "C": "4.7",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "[CODE]Math.floor()[/CODE] rounds down to the nearest integer, so 4.7 becomes 4.",
        "topic": {
            "topics": [
                "Variable declarations (var, let, const)"
            ]
        }
    },
    {
        "id": 19,
        "question": "Which method is used to find an element by its ID in the DOM?",
        "options": {
            "A": "document.findById()",
            "B": "document.getElementById()",
            "C": "document.getElement()",
            "D": "document.selectById()"
        },
        "correct": "B",
        "explanation": "document.getElementById() is the standard method to select an element by its ID.",
        "topic": {
            "topics": [
                "DOM manipulation basics"
            ]
        }
    },
    {
        "id": 20,
        "question": "How do you add an event listener to an element?",
        "options": {
            "A": "element.addEventListener('click', function)",
            "B": "element.addEvent('click', function)",
            "C": "element.onClick(function)",
            "D": "element.listen('click', function)"
        },
        "correct": "A",
        "explanation": "addEventListener() is the standard method to attach event handlers to elements.",
        "topic": {
            "topics": [
                "Event handling fundamentals"
            ]
        }
    }
];

module.exports = { metadata, questions };
