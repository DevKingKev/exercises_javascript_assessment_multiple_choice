// assessment6.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Fundamentals II",
    "description": "Essential JavaScript concepts including type conversion, comparison operators, truthiness and falsiness, number operations, and basic programming logic. This assessment tests understanding of how JavaScript handles different data types, performs comparisons, and evaluates expressions in various contexts.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Type conversion and coercion",
        "Comparison and equality operators",
        "Truthy and falsy values",
        "Number operations and Math methods",
        "Logical operators and short-circuit evaluation",
        "Primitive data types",
        "Variable assignment and initialization"
    ],
    "topicLinks": [
        {
            "topicName": "Type conversion and coercion",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion"
        },
        {
            "topicName": "Comparison and equality operators",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators"
        },
        {
            "topicName": "Truthy and falsy values",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Truthy"
        },
        {
            "topicName": "Number operations and Math methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
        },
        {
            "topicName": "Logical operators and short-circuit evaluation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND"
        },
        {
            "topicName": "Primitive data types",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Primitive"
        },
        {
            "topicName": "Variable assignment and initialization",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations"
        }
    ],
    "assessmentId": 6,
    "assessmentUniqueId": 1730726401000,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the result of [CODE]'5' - 2[/CODE]?",
        "options": {
            "A": "'3'",
            "B": "3",
            "C": "'52'",
            "D": "NaN"
        },
        "correct": "B",
        "explanation": "JavaScript converts the string '5' to a number when using the subtraction operator, resulting in the number 3.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 2,
        "question": "Which of the following is a falsy value?",
        "options": {
            "A": "0",
            "B": "''",
            "C": "null",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "In JavaScript, the falsy values are: false, 0, -0, 0n, '', null, undefined, and NaN. All convert to false in boolean contexts.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Primitive data types"
            ]
        }
    },
    {
        "id": 3,
        "question": "What does [CODE]5 == '5'[/CODE] evaluate to?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "The == operator performs type coercion. It converts the string '5' to the number 5 before comparing, so they are equal.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Comparison and equality operators"
            ]
        }
    },
    {
        "id": 4,
        "question": "What is the result of [CODE]true + false[/CODE]?",
        "options": {
            "A": "1",
            "B": "0",
            "C": "true",
            "D": "NaN"
        },
        "correct": "A",
        "explanation": "Boolean values are converted to numbers in arithmetic operations: true becomes 1 and false becomes 0, so 1 + 0 = 1.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 5,
        "question": "What does [CODE]!!'hello'[/CODE] return?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "'hello'",
            "D": "undefined"
        },
        "correct": "A",
        "explanation": "The double NOT (!!) converts a value to its boolean equivalent. Non-empty strings are truthy, so 'hello' becomes true.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Logical operators and short-circuit evaluation"
            ]
        }
    },
    {
        "id": 6,
        "question": "What is the result of [CODE]Math.round(4.5)[/CODE]?",
        "options": {
            "A": "4",
            "B": "5",
            "C": "4.5",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "Math.round() rounds to the nearest integer. For .5 values, it rounds up (towards positive infinity), so 4.5 becomes 5.",
        "topic": {
            "topics": [
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 7,
        "question": "What does [CODE]null == undefined[/CODE] return?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "null",
            "D": "undefined"
        },
        "correct": "A",
        "explanation": "In JavaScript, null and undefined are loosely equal (==) but not strictly equal (===). This is a special case in the equality comparison algorithm.",
        "topic": {
            "topics": [
                "Comparison and equality operators",
                "Primitive data types"
            ]
        }
    },
    {
        "id": 8,
        "question": "What is the result of [CODE]'10' * '2'[/CODE]?",
        "options": {
            "A": "'102'",
            "B": "20",
            "C": "'20'",
            "D": "NaN"
        },
        "correct": "B",
        "explanation": "JavaScript converts both strings to numbers when using the multiplication operator, resulting in the number 20.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 9,
        "question": "Which operator has higher precedence?",
        "options": {
            "A": "&&",
            "B": "||",
            "C": "Both have equal precedence",
            "D": "Neither is valid"
        },
        "correct": "A",
        "explanation": "The logical AND (&&) operator has higher precedence than logical OR (||). This affects how expressions without parentheses are evaluated.",
        "topic": {
            "topics": [
                "Logical operators and short-circuit evaluation"
            ]
        }
    },
    {
        "id": 10,
        "question": "What does [CODE]Number('123abc')[/CODE] return?",
        "options": {
            "A": "123",
            "B": "NaN",
            "C": "'123'",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The Number() function tries to convert the entire string to a number. If the string contains non-numeric characters, it returns NaN (Not a Number).",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 11,
        "question": "What is the result of [CODE]0 || 'default'[/CODE]?",
        "options": {
            "A": "0",
            "B": "'default'",
            "C": "true",
            "D": "false"
        },
        "correct": "B",
        "explanation": "The || operator returns the first truthy value. Since 0 is falsy, it returns the second operand 'default'. This is commonly used for default values.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Logical operators and short-circuit evaluation"
            ]
        }
    },
    {
        "id": 12,
        "question": "What does [CODE]parseInt('10.5')[/CODE] return?",
        "options": {
            "A": "10.5",
            "B": "10",
            "C": "11",
            "D": "NaN"
        },
        "correct": "B",
        "explanation": "parseInt() parses a string and returns an integer. It stops parsing at the first non-integer character (the decimal point), so it returns 10.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 13,
        "question": "What is the result of [CODE]'hello' && 'world'[/CODE]?",
        "options": {
            "A": "true",
            "B": "'hello'",
            "C": "'world'",
            "D": "false"
        },
        "correct": "C",
        "explanation": "The && operator returns the first falsy value, or the last value if all are truthy. Both strings are truthy, so it returns 'world'.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Logical operators and short-circuit evaluation"
            ]
        }
    },
    {
        "id": 14,
        "question": "What does [CODE]5 === '5'[/CODE] evaluate to?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The === operator checks both value and type without coercion. A number and a string are different types, so it returns false.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Comparison and equality operators"
            ]
        }
    },
    {
        "id": 15,
        "question": "Which value is NOT falsy?",
        "options": {
            "A": "[]",
            "B": "0",
            "C": "''",
            "D": "false"
        },
        "correct": "A",
        "explanation": "An empty array [] is truthy in JavaScript. Even though it's empty, arrays are objects and all objects (except null) are truthy.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Primitive data types"
            ]
        }
    },
    {
        "id": 16,
        "question": "What is the result of [CODE]'5' + 5[/CODE]?",
        "options": {
            "A": "10",
            "B": "'55'",
            "C": "'5' + 5",
            "D": "NaN"
        },
        "correct": "B",
        "explanation": "When using + with a string and a number, JavaScript converts the number to a string and concatenates them, resulting in '55'.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 17,
        "question": "What does [CODE]Boolean({})[/CODE] return?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "{}",
            "D": "undefined"
        },
        "correct": "A",
        "explanation": "Objects (including empty objects {}) are always truthy in JavaScript. Boolean({}) converts the object to its boolean value, which is true.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Type conversion and coercion"
            ]
        }
    },
    {
        "id": 18,
        "question": "What is the result of [CODE]Math.abs(-5.7)[/CODE]?",
        "options": {
            "A": "-5.7",
            "B": "5.7",
            "C": "5",
            "D": "6"
        },
        "correct": "B",
        "explanation": "Math.abs() returns the absolute value of a number, which is its distance from zero. The absolute value of -5.7 is 5.7.",
        "topic": {
            "topics": [
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 19,
        "question": "What does [CODE]null || undefined || 'default'[/CODE] return?",
        "options": {
            "A": "null",
            "B": "undefined",
            "C": "'default'",
            "D": "false"
        },
        "correct": "C",
        "explanation": "The || operator returns the first truthy value. Both null and undefined are falsy, so it returns 'default'.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Logical operators and short-circuit evaluation"
            ]
        }
    },
    {
        "id": 20,
        "question": "What is the result of [CODE]+'42'[/CODE]?",
        "options": {
            "A": "'42'",
            "B": "42",
            "C": "NaN",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The unary + operator converts its operand to a number. It's a shorthand for Number('42'), which returns 42.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 21,
        "question": "What does [CODE]NaN === NaN[/CODE] evaluate to?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "NaN",
            "D": "undefined"
        },
        "correct": "B",
        "explanation": "NaN is the only value in JavaScript that is not equal to itself. To check if a value is NaN, use Number.isNaN() or the global isNaN().",
        "topic": {
            "topics": [
                "Comparison and equality operators",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 22,
        "question": "What is the result of [CODE]false && true || true[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Due to operator precedence, this evaluates as (false && true) || true. The AND part is false, then false || true is true.",
        "topic": {
            "topics": [
                "Logical operators and short-circuit evaluation"
            ]
        }
    },
    {
        "id": 23,
        "question": "What does [CODE]String(null)[/CODE] return?",
        "options": {
            "A": "'null'",
            "B": "null",
            "C": "''",
            "D": "undefined"
        },
        "correct": "A",
        "explanation": "The String() function converts any value to a string. When applied to null, it returns the string 'null'.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Primitive data types"
            ]
        }
    },
    {
        "id": 24,
        "question": "What is the result of [CODE]Math.trunc(4.9)[/CODE]?",
        "options": {
            "A": "4",
            "B": "5",
            "C": "4.9",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Math.trunc() removes the fractional part of a number, leaving just the integer part. It doesn't round, it truncates.",
        "topic": {
            "topics": [
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 25,
        "question": "What does [CODE]!0[/CODE] return?",
        "options": {
            "A": "0",
            "B": "1",
            "C": "true",
            "D": "false"
        },
        "correct": "C",
        "explanation": "The NOT operator (!) first converts 0 to its boolean equivalent (false), then negates it to true.",
        "topic": {
            "topics": [
                "Truthy and falsy values",
                "Logical operators and short-circuit evaluation"
            ]
        }
    },
    {
        "id": 26,
        "question": "What is the result of [CODE]'10' > 5[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "'10'",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "For comparison operators other than == and !=, JavaScript converts strings to numbers. The string '10' becomes 10, and 10 > 5 is true.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Comparison and equality operators"
            ]
        }
    },
    {
        "id": 27,
        "question": "Which is a primitive data type in JavaScript?",
        "options": {
            "A": "string",
            "B": "number",
            "C": "boolean",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "JavaScript has seven primitive types: string, number, boolean, undefined, null, symbol, and bigint. The others are all objects.",
        "topic": {
            "topics": [
                "Primitive data types"
            ]
        }
    },
    {
        "id": 28,
        "question": "What does [CODE]Number(undefined)[/CODE] return?",
        "options": {
            "A": "0",
            "B": "NaN",
            "C": "undefined",
            "D": "null"
        },
        "correct": "B",
        "explanation": "Converting undefined to a number results in NaN (Not a Number). Note that Number(null) returns 0, which is different.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Number operations and Math methods"
            ]
        }
    },
    {
        "id": 29,
        "question": "What is the result of [CODE]1 < 2 < 3[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "This evaluates left to right: (1 < 2) is true, then true < 3. true converts to 1, and 1 < 3 is true.",
        "topic": {
            "topics": [
                "Type conversion and coercion",
                "Comparison and equality operators"
            ]
        }
    },
    {
        "id": 30,
        "question": "What does [CODE]let x; console.log(x)[/CODE] output?",
        "options": {
            "A": "null",
            "B": "undefined",
            "C": "0",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "Variables declared without initialization are automatically assigned the value undefined. This is different from null, which must be explicitly assigned.",
        "topic": {
            "topics": [
                "Variable assignment and initialization",
                "Primitive data types"
            ]
        }
    }
];

module.exports = { metadata, questions };
