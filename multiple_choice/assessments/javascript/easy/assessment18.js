// assessment18.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript String Fundamentals",
    "description": "Core string concepts, character handling, and basic string operations in JavaScript. This assessment covers essential string knowledge that forms the foundation of text manipulation in JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "String primitive vs object",
        "String immutability",
        "String comparison",
        "String template literals",
        "String escape sequences",
        "String primitive methods",
        "String concatenation patterns"
    ],
    "topicLinks": [
        {
            "topicName": "String primitive vs object",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
        },
        {
            "topicName": "String immutability",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects"
        },
        {
            "topicName": "String comparison",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
        },
        {
            "topicName": "String template literals",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
        },
        {
            "topicName": "String escape sequences",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences"
        },
        {
            "topicName": "String primitive methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#primitive_string_and_string_objects"
        },
        {
            "topicName": "String concatenation patterns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition"
        }
    ],
    "assessmentId": 18,
    "assessmentUniqueId": 1762512577067,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the result of [CODE]typeof 'hello'[/CODE]?",
        "options": {
            "A": "<pre>'string'</pre>",
            "B": "<pre>'object'</pre>",
            "C": "<pre>'String'</pre>",
            "D": "<pre>'text'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>typeof</pre> operator returns <pre>'string'</pre> for string primitives. For String objects created with <pre>new String()</pre>, it returns <pre>'object'</pre>.",
        "topic": {
            "topics": [
                "String primitive vs object"
            ]
        }
    },
    {
        "id": 2,
        "question": "What happens when you try to modify a string character directly?",
        "options": {
            "A": "It has no effect - strings are immutable",
            "B": "The character is modified",
            "C": "A new string is created",
            "D": "An error is thrown"
        },
        "correct": "A",
        "explanation": "Strings are immutable in JavaScript. Any operation that appears to modify a string actually creates a new string.",
        "topic": {
            "topics": [
                "String immutability"
            ]
        }
    },
    {
        "id": 3,
        "question": "What is the result of [CODE]'hello' === new String('hello')[/CODE]?",
        "options": {
            "A": "<pre>false</pre>",
            "B": "<pre>true</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "A string primitive is not equal to a String object, even if they contain the same characters. They are different types.",
        "topic": {
            "topics": [
                "String primitive vs object"
            ]
        }
    },
    {
        "id": 4,
        "question": "Which escape sequence represents a new line?",
        "options": {
            "A": "<pre>\\n</pre>",
            "B": "<pre>\\r</pre>",
            "C": "<pre>\\t</pre>",
            "D": "<pre>\\b</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>\\n</pre> escape sequence represents a newline character. <pre>\\r</pre> is carriage return, <pre>\\t</pre> is tab, and <pre>\\b</pre> is backspace.",
        "topic": {
            "topics": [
                "String escape sequences"
            ]
        }
    },
    {
        "id": 5,
        "question": "What does [CODE]`2 + 2 = ${2 + 2}`[/CODE] evaluate to?",
        "options": {
            "A": "<pre>'2 + 2 = 4'</pre>",
            "B": "<pre>'2 + 2 = ${2 + 2}'</pre>",
            "C": "<pre>'4'</pre>",
            "D": "<pre>6</pre>"
        },
        "correct": "A",
        "explanation": "Template literals (backticks) allow embedded expressions with <pre>${}</pre> syntax. The expression inside is evaluated and converted to a string.",
        "topic": {
            "topics": [
                "String template literals"
            ]
        }
    },
    {
        "id": 6,
        "question": "How do you create a string with both single and double quotes?",
        "options": {
            "A": "Use backticks or escape the quotes",
            "B": "It's not possible",
            "C": "Use String.create()",
            "D": "Use triple quotes"
        },
        "correct": "A",
        "explanation": "You can use template literals (backticks) which don't require escaping, or escape the quotes: <pre>\"He said, 'Hello'\"</pre> or <pre>'He said, \\'Hello\\''</pre>.",
        "topic": {
            "topics": [
                "String escape sequences"
            ]
        }
    },
    {
        "id": 7,
        "question": "What is the result of [CODE]'a' < 'b'[/CODE]?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Strings are compared lexicographically (character by character based on Unicode values). 'a' comes before 'b' in Unicode order.",
        "topic": {
            "topics": [
                "String comparison"
            ]
        }
    },
    {
        "id": 8,
        "question": "Which method can be called on a string primitive?",
        "options": {
            "A": "All String.prototype methods",
            "B": "Only length property",
            "C": "No methods - only on String objects",
            "D": "Only toString()"
        },
        "correct": "A",
        "explanation": "JavaScript automatically wraps string primitives in String objects when calling methods, so all String.prototype methods are available.",
        "topic": {
            "topics": [
                "String primitive methods"
            ]
        }
    },
    {
        "id": 9,
        "question": "What does [CODE]'hello'[0] = 'H'[/CODE] do?",
        "options": {
            "A": "Nothing - strings are immutable",
            "B": "Changes 'hello' to 'Hello'",
            "C": "Creates a new string 'Hello'",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "String characters cannot be modified directly due to immutability. This operation is silently ignored in non-strict mode.",
        "topic": {
            "topics": [
                "String immutability"
            ]
        }
    },
    {
        "id": 10,
        "question": "How do you include a backtick in a template literal?",
        "options": {
            "A": "<pre>\\`</pre>",
            "B": "<pre>\\\\`</pre>",
            "C": "<pre>${'`'}</pre>",
            "D": "It's not possible"
        },
        "correct": "A",
        "explanation": "Escape the backtick with a backslash: <pre>\\`</pre>. You can also use string concatenation or other methods.",
        "topic": {
            "topics": [
                "String template literals"
            ]
        }
    },
    {
        "id": 11,
        "question": "What is the result of [CODE]'' == false[/CODE]?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "With loose equality (<pre>==</pre>), an empty string is converted to 0 and false is converted to 0, so they are equal.",
        "topic": {
            "topics": [
                "String comparison"
            ]
        }
    },
    {
        "id": 12,
        "question": "Which creates a multi-line string without escape characters?",
        "options": {
            "A": "Template literals",
            "B": "Single quotes with \\n",
            "C": "Double quotes with \\r\\n",
            "D": "String.multiline()"
        },
        "correct": "A",
        "explanation": "Template literals preserve line breaks, allowing multi-line strings without needing escape sequences.",
        "topic": {
            "topics": [
                "String template literals"
            ]
        }
    },
    {
        "id": 13,
        "question": "What does [CODE]String('hello') === 'hello'[/CODE] return?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "When called as a function (without <pre>new</pre>), <pre>String()</pre> converts to a string primitive, which equals another string primitive.",
        "topic": {
            "topics": [
                "String primitive vs object"
            ]
        }
    },
    {
        "id": 14,
        "question": "How do you represent a Unicode character by its code point?",
        "options": {
            "A": "<pre>\\u{1F600}</pre>",
            "B": "<pre>\\U1F600</pre>",
            "C": "<pre>\\x1F600</pre>",
            "D": "<pre>\\u1F600</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>\\u{}</pre> syntax with curly braces allows Unicode code points beyond the Basic Multilingual Plane.",
        "topic": {
            "topics": [
                "String escape sequences"
            ]
        }
    },
    {
        "id": 15,
        "question": "What is the result of [CODE]'5' + 2[/CODE]?",
        "options": {
            "A": "<pre>'52'</pre>",
            "B": "<pre>7</pre>",
            "C": "<pre>'7'</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "When using + with a string and a number, the number is converted to a string and concatenated.",
        "topic": {
            "topics": [
                "String concatenation patterns"
            ]
        }
    },
    {
        "id": 16,
        "question": "Which is faster for building large strings?",
        "options": {
            "A": "Array.join()",
            "B": "+ operator",
            "C": "String.concat()",
            "D": "Template literals"
        },
        "correct": "A",
        "explanation": "<pre>Array.join()</pre> is generally more efficient for building large strings because it avoids creating intermediate string objects.",
        "topic": {
            "topics": [
                "String concatenation patterns"
            ]
        }
    },
    {
        "id": 17,
        "question": "What does [CODE]'' === false[/CODE] return?",
        "options": {
            "A": "<pre>false</pre>",
            "B": "<pre>true</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Strict equality (<pre>===</pre>) compares both value and type without conversion. A string and boolean are different types.",
        "topic": {
            "topics": [
                "String comparison"
            ]
        }
    },
    {
        "id": 18,
        "question": "How do you create a string from a number?",
        "options": {
            "A": "<pre>String(num)</pre>",
            "B": "<pre>num.toString()</pre>",
            "C": "<pre>'' + num</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods convert numbers to strings. <pre>String()</pre> and <pre>'' + num</pre> work with <pre>null</pre> and <pre>undefined</pre>, while <pre>toString()</pre> doesn't.",
        "topic": {
            "topics": [
                "String primitive methods"
            ]
        }
    },
    {
        "id": 19,
        "question": "What is the result of [CODE]'hello'.valueOf()[/CODE]?",
        "options": {
            "A": "<pre>'hello'</pre>",
            "B": "<pre>['h','e','l','l','o']</pre>",
            "C": "<pre>104</pre>",
            "D": "<pre>true</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>valueOf()</pre> method returns the primitive value of a String object. For string primitives, it returns the string itself.",
        "topic": {
            "topics": [
                "String primitive methods"
            ]
        }
    },
    {
        "id": 20,
        "question": "Which escape sequence represents a tab character?",
        "options": {
            "A": "<pre>\\t</pre>",
            "B": "<pre>\\n</pre>",
            "C": "<pre>\\r</pre>",
            "D": "<pre>\\a</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>\\t</pre> escape sequence represents a tab character (horizontal tab).",
        "topic": {
            "topics": [
                "String escape sequences"
            ]
        }
    },
    {
        "id": 21,
        "question": "What does [CODE]`Line 1\nLine 2`.split('\\n')[/CODE] return?",
        "options": {
            "A": "<pre>['Line 1', 'Line 2']</pre>",
            "B": "<pre>['Line 1\\nLine 2']</pre>",
            "C": "<pre>['Line 1', '\\n', 'Line 2']</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "The <pre>split()</pre> method divides a string into an array of substrings using the specified separator.",
        "topic": {
            "topics": [
                "String template literals"
            ]
        }
    },
    {
        "id": 22,
        "question": "How do you check if a variable is a string primitive?",
        "options": {
            "A": "<pre>typeof str === 'string'</pre>",
            "B": "<pre>str instanceof String</pre>",
            "C": "<pre>String.isString(str)</pre>",
            "D": "<pre>str.isString()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>typeof</pre> returns <pre>'string'</pre> for string primitives. <pre>instanceof String</pre> only works for String objects.",
        "topic": {
            "topics": [
                "String primitive vs object"
            ]
        }
    },
    {
        "id": 23,
        "question": "What is the result of [CODE]'5' - 2[/CODE]?",
        "options": {
            "A": "<pre>3</pre>",
            "B": "<pre>'3'</pre>",
            "C": "<pre>'52'</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Unlike <pre>+</pre>, the <pre>-</pre> operator converts strings to numbers, so this performs arithmetic subtraction.",
        "topic": {
            "topics": [
                "String concatenation patterns"
            ]
        }
    },
    {
        "id": 24,
        "question": "Which method is automatically called when a string is used in object property access?",
        "options": {
            "A": "toString()",
            "B": "valueOf()",
            "C": "toPrimitive()",
            "D": "No method is called"
        },
        "correct": "A",
        "explanation": "When an object is used as a property key, its <pre>toString()</pre> method is automatically called to convert it to a string.",
        "topic": {
            "topics": [
                "String primitive methods"
            ]
        }
    },
    {
        "id": 25,
        "question": "What does [CODE]'hello' instanceof String[/CODE] return?",
        "options": {
            "A": "<pre>false</pre>",
            "B": "<pre>true</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "String primitives are not instances of the String constructor. Only objects created with <pre>new String()</pre> return <pre>true</pre>.",
        "topic": {
            "topics": [
                "String primitive vs object"
            ]
        }
    },
    {
        "id": 26,
        "question": "How do you include a variable in a template literal?",
        "options": {
            "A": "<pre>${variable}</pre>",
            "B": "<pre>#{variable}</pre>",
            "C": "<pre>{{variable}}</pre>",
            "D": "<pre>$(variable)</pre>"
        },
        "correct": "A",
        "explanation": "Template literals use <pre>${}</pre> syntax to embed expressions that are evaluated and converted to strings.",
        "topic": {
            "topics": [
                "String template literals"
            ]
        }
    },
    {
        "id": 27,
        "question": "What is the result of [CODE]'A' > 'a'[/CODE]?",
        "options": {
            "A": "<pre>false</pre>",
            "B": "<pre>true</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Uppercase letters have lower Unicode values than lowercase letters, so 'A' (65) is less than 'a' (97).",
        "topic": {
            "topics": [
                "String comparison"
            ]
        }
    },
    {
        "id": 28,
        "question": "Which creates a string with a literal backslash?",
        "options": {
            "A": "<pre>\\\\</pre>",
            "B": "<pre>\\</pre>",
            "C": "<pre>/</pre>",
            "D": "<pre>\\b</pre>"
        },
        "correct": "A",
        "explanation": "To include a literal backslash in a string, you need to escape it with another backslash: <pre>\\\\</pre>.",
        "topic": {
            "topics": [
                "String escape sequences"
            ]
        }
    },
    {
        "id": 29,
        "question": "What does [CODE]String.fromCharCode(65, 66, 67)[/CODE] return?",
        "options": {
            "A": "<pre>'ABC'</pre>",
            "B": "<pre>[65, 66, 67]</pre>",
            "C": "<pre>'656667'</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "<pre>String.fromCharCode()</pre> creates a string from a sequence of Unicode code points. 65='A', 66='B', 67='C'.",
        "topic": {
            "topics": [
                "String primitive methods"
            ]
        }
    },
    {
        "id": 30,
        "question": "How do you efficiently build a string from many parts?",
        "options": {
            "A": "Use an array and join()",
            "B": "Use repeated + operations",
            "C": "Use template literals with many variables",
            "D": "Use String.build()"
        },
        "correct": "A",
        "explanation": "Using an array to collect parts and then <pre>join()</pre> is more efficient than repeated concatenation with <pre>+</pre> for large numbers of operations.",
        "topic": {
            "topics": [
                "String concatenation patterns"
            ]
        }
    }
];

module.exports = { metadata, questions };