// assessment10.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript String Manipulation",
    "description": "String methods, manipulation techniques, pattern matching, and text processing in JavaScript. This assessment covers essential string operations including searching, extracting, modifying, and transforming text data using built-in string methods and regular expressions.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "String methods and properties",
        "String searching and extraction",
        "String transformation and modification",
        "Regular expressions basics",
        "Template literals and interpolation",
        "String concatenation and building",
        "Unicode and character handling"
    ],
    "topicLinks": [
        {
            "topicName": "String methods and properties",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
        },
        {
            "topicName": "String searching and extraction",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
        },
        {
            "topicName": "String transformation and modification",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
        },
        {
            "topicName": "Regular expressions basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
        },
        {
            "topicName": "Template literals and interpolation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
        },
        {
            "topicName": "String concatenation and building",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition"
        },
        {
            "topicName": "Unicode and character handling",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters"
        }
    ],
    "assessmentId": 10,
    "assessmentUniqueId": 1762442900977,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "Which method returns the character at a specified index?",
        "options": {
            "A": "<pre>charAt()</pre>",
            "B": "<pre>getChar()</pre>",
            "C": "<pre>characterAt()</pre>",
            "D": "<pre>at()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>charAt()</pre> method returns the character at the specified index in a string. String indices start at 0, so <pre>'hello'.charAt(1)</pre> returns <pre>'e'</pre>. You can also use bracket notation like <pre>'hello'[1]</pre> for the same result.",
        "topic": {
            "topics": [
                "String methods and properties"
            ]
        }
    },
    {
        "id": 2,
        "question": "What does <pre>'hello'.toUpperCase()</pre> return?",
        "options": {
            "A": "<pre>'HELLO'</pre>",
            "B": "<pre>'Hello'</pre>",
            "C": "<pre>'hello'</pre>",
            "D": "<pre>'hELLO'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>toUpperCase()</pre> method converts all characters in a string to uppercase letters. It returns a new string and doesn't modify the original string. The opposite method is <pre>toLowerCase()</pre> which converts to lowercase.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 3,
        "question": "Which method finds the position of the first occurrence of a substring?",
        "options": {
            "A": "<pre>search()</pre>",
            "B": "<pre>indexOf()</pre>",
            "C": "<pre>find()</pre>",
            "D": "<pre>locate()</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>indexOf()</pre> method returns the index of the first occurrence of the specified substring, or -1 if it's not found. For example, <pre>'hello'.indexOf('l')</pre> returns <pre>2</pre>. There's also <pre>lastIndexOf()</pre> to find the last occurrence.",
        "topic": {
            "topics": [
                "String searching and extraction"
            ]
        }
    },
    {
        "id": 4,
        "question": "What does <pre>'hello world'.split(' ')</pre> return?",
        "options": {
            "A": "<pre>['hello', 'world']</pre>",
            "B": "<pre>'helloworld'</pre>",
            "C": "<pre>['h','e','l','l','o',' ','w','o','r','l','d']</pre>",
            "D": "<pre>'hello world'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>split()</pre> method divides a string into an array of substrings using the specified separator. When splitting by space <pre>' '</pre>, it creates an array with each word as a separate element. Without a separator, it splits into individual characters.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 5,
        "question": "How do you get the length of a string?",
        "options": {
            "A": "<pre>string.length</pre>",
            "B": "<pre>string.size()</pre>",
            "C": "<pre>string.count()</pre>",
            "D": "<pre>string.getLength()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>length</pre> property returns the number of characters in a string. For example, <pre>'hello'.length</pre> returns <pre>5</pre>. This is a property, not a method, so you don't use parentheses.",
        "topic": {
            "topics": [
                "String methods and properties"
            ]
        }
    },
    {
        "id": 6,
        "question": "What does <pre>' hello '.trim()</pre> return?",
        "options": {
            "A": "<pre>'hello'</pre>",
            "B": "<pre>' hello '</pre>",
            "C": "<pre>'hello '</pre>",
            "D": "<pre>' hello'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>trim()</pre> method removes whitespace from both ends of a string. There are also <pre>trimStart()</pre> and <pre>trimEnd()</pre> to remove whitespace from only the beginning or end respectively.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 7,
        "question": "Which method extracts a section of a string?",
        "options": {
            "A": "<pre>slice()</pre>",
            "B": "<pre>substring()</pre>",
            "C": "<pre>substr()</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods extract parts of strings: <pre>slice()</pre> extracts between start and end indices, <pre>substring()</pre> is similar but doesn't accept negative indices, and <pre>substr()</pre> extracts from start index for a specified length (deprecated).",
        "topic": {
            "topics": [
                "String searching and extraction"
            ]
        }
    },
    {
        "id": 8,
        "question": "What is the result of <pre>'abc'.repeat(3)</pre>?",
        "options": {
            "A": "<pre>'abcabcabc'</pre>",
            "B": "<pre>'abc3'</pre>",
            "C": "<pre>'aaa bbb ccc'</pre>",
            "D": "<pre>'abc'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>repeat()</pre> method returns a new string containing the specified number of copies of the original string. It's useful for creating repeated patterns or padding strings.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 9,
        "question": "What does <pre>'Hello'.includes('ell')</pre> return?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>2</pre>",
            "D": "<pre>-1</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>includes()</pre> method determines whether a string contains the specified substring, returning <pre>true</pre> or <pre>false</pre>. It's case-sensitive, so <pre>'Hello'.includes('hello')</pre> would return <pre>false</pre>.",
        "topic": {
            "topics": [
                "String searching and extraction"
            ]
        }
    },
    {
        "id": 10,
        "question": "Which method replaces text in a string?",
        "options": {
            "A": "<pre>replace()</pre>",
            "B": "<pre>replaceAll()</pre>",
            "C": "<pre>substitute()</pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both <pre>replace()</pre> and <pre>replaceAll()</pre> replace text: <pre>replace()</pre> replaces the first occurrence, while <pre>replaceAll()</pre> replaces all occurrences. Both can use strings or regular expressions.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 11,
        "question": "What is the correct syntax for template literals?",
        "options": {
            "A": "<pre>`Hello ${name}`</pre>",
            "B": "<pre>'Hello ${name}'</pre>",
            "C": "<pre>\"Hello ${name}\"</pre>",
            "D": "<pre>'Hello ' + name</pre>"
        },
        "correct": "A",
        "explanation": "Template literals use backticks (`) and allow embedded expressions with <pre>${expression}</pre> syntax. They also support multi-line strings without needing escape characters.",
        "topic": {
            "topics": [
                "Template literals and interpolation"
            ]
        }
    },
    {
        "id": 12,
        "question": "What does <pre>'hello'.startsWith('he')</pre> return?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>0</pre>",
            "D": "<pre>2</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>startsWith()</pre> method determines whether a string begins with the specified characters, returning <pre>true</pre> or <pre>false</pre>. There's also <pre>endsWith()</pre> to check the end of a string.",
        "topic": {
            "topics": [
                "String searching and extraction"
            ]
        }
    },
    {
        "id": 13,
        "question": "How do you concatenate two strings?",
        "options": {
            "A": "<pre>string1 + string2</pre>",
            "B": "<pre>string1.concat(string2)</pre>",
            "C": "<pre>`${string1}${string2}`</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods concatenate strings: the <pre>+</pre> operator is most common, <pre>concat()</pre> is a method that joins strings, and template literals can embed multiple variables. The <pre>+</pre> operator is generally preferred for simplicity.",
        "topic": {
            "topics": [
                "String concatenation and building"
            ]
        }
    },
    {
        "id": 14,
        "question": "What does <pre>'Hello'.toLowerCase()</pre> return?",
        "options": {
            "A": "<pre>'hello'</pre>",
            "B": "<pre>'HELLO'</pre>",
            "C": "<pre>'Hello'</pre>",
            "D": "<pre>'hELLO'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>toLowerCase()</pre> method converts all characters in a string to lowercase letters. It's commonly used for case-insensitive comparisons or normalizing user input.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 15,
        "question": "Which method converts a string to an array of characters?",
        "options": {
            "A": "<pre>split('')</pre>",
            "B": "<pre>toArray()</pre>",
            "C": "<pre>chars()</pre>",
            "D": "<pre>Array.from(string)</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>split('')</pre> method with an empty string as separator converts a string to an array of individual characters. <pre>Array.from(string)</pre> also works and handles Unicode characters better.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 16,
        "question": "What is the result of <pre>'hello'.charCodeAt(0)</pre>?",
        "options": {
            "A": "<pre>'h'</pre>",
            "B": "<pre>104</pre>",
            "C": "<pre>72</pre>",
            "D": "<pre>0</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>charCodeAt()</pre> method returns the Unicode code point of the character at the specified index. For 'h', it returns 104. For uppercase 'H', it would return 72.",
        "topic": {
            "topics": [
                "Unicode and character handling"
            ]
        }
    },
    {
        "id": 17,
        "question": "What does <pre>'hello'.padStart(8, '*')</pre> return?",
        "options": {
            "A": "<pre>'***hello'</pre>",
            "B": "<pre>'hello***'</pre>",
            "C": "<pre>'*hello*'</pre>",
            "D": "<pre>'hello'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>padStart()</pre> method pads the current string with another string until the resulting string reaches the given length. The padding is applied from the start. <pre>padEnd()</pre> pads from the end.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 18,
        "question": "Which method searches a string using a regular expression?",
        "options": {
            "A": "<pre>match()</pre>",
            "B": "<pre>search()</pre>",
            "C": "<pre>test()</pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both <pre>match()</pre> and <pre>search()</pre> work with regular expressions: <pre>match()</pre> returns the matches, <pre>search()</pre> returns the index of the first match. <pre>test()</pre> is a regex method, not a string method.",
        "topic": {
            "topics": [
                "Regular expressions basics"
            ]
        }
    },
    {
        "id": 19,
        "question": "What is the result of <pre>String.fromCharCode(65)</pre>?",
        "options": {
            "A": "<pre>'A'</pre>",
            "B": "<pre>'65'</pre>",
            "C": "<pre>65</pre>",
            "D": "<pre>'a'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>String.fromCharCode()</pre> method returns a string created from the specified sequence of Unicode code points. 65 is the code point for uppercase 'A', 97 is for lowercase 'a'.",
        "topic": {
            "topics": [
                "Unicode and character handling"
            ]
        }
    },
    {
        "id": 20,
        "question": "What does <pre>'hello'.slice(1, 4)</pre> return?",
        "options": {
            "A": "<pre>'ell'</pre>",
            "B": "<pre>'ello'</pre>",
            "C": "<pre>'hel'</pre>",
            "D": "<pre>'hell'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>slice()</pre> method extracts a section of a string from the start index up to (but not including) the end index. So <pre>slice(1, 4)</pre> extracts characters at positions 1, 2, and 3.",
        "topic": {
            "topics": [
                "String searching and extraction"
            ]
        }
    },
    {
        "id": 21,
        "question": "Which method returns the primitive value of a String object?",
        "options": {
            "A": "<pre>valueOf()</pre>",
            "B": "<pre>toString()</pre>",
            "C": "<pre>toPrimitive()</pre>",
            "D": "<pre>getValue()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>valueOf()</pre> method returns the primitive value of a String object. This is rarely used directly since JavaScript automatically converts String objects to primitives when needed.",
        "topic": {
            "topics": [
                "String methods and properties"
            ]
        }
    },
    {
        "id": 22,
        "question": "What is the result of <pre>'café'.length</pre>?",
        "options": {
            "A": "<pre>4</pre>",
            "B": "<pre>5</pre>",
            "C": "<pre>3</pre>",
            "D": "<pre>6</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>length</pre> property returns the number of UTF-16 code units, not necessarily the number of visible characters. 'é' is a single character but may use multiple code units depending on encoding.",
        "topic": {
            "topics": [
                "Unicode and character handling"
            ]
        }
    },
    {
        "id": 23,
        "question": "What does <pre>'Hello World'.replace('World', 'JavaScript')</pre> return?",
        "options": {
            "A": "<pre>'Hello JavaScript'</pre>",
            "B": "<pre>'Hello World'</pre>",
            "C": "<pre>'JavaScript Hello'</pre>",
            "D": "<pre>'Hello'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>replace()</pre> method returns a new string with some or all matches of a pattern replaced by a replacement. By default, it only replaces the first occurrence unless using a global regex.",
        "topic": {
            "topics": [
                "String transformation and modification"
            ]
        }
    },
    {
        "id": 24,
        "question": "Which method compares two strings in locale-specific order?",
        "options": {
            "A": "<pre>localeCompare()</pre>",
            "B": "<pre>compare()</pre>",
            "C": "<pre>compareLocale()</pre>",
            "D": "<pre>localCompare()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>localeCompare()</pre> method returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order, according to the current locale.",
        "topic": {
            "topics": [
                "String methods and properties"
            ]
        }
    },
    {
        "id": 25,
        "question": "What is the result of <pre>'hello'.substring(2)</pre>?",
        "options": {
            "A": "<pre>'llo'</pre>",
            "B": "<pre>'hel'</pre>",
            "C": "<pre>'he'</pre>",
            "D": "<pre>'hello'</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>substring()</pre> method returns the part of the string from the start index to the end of the string. If only one argument is provided, it extracts from that index to the end.",
        "topic": {
            "topics": [
                "String searching and extraction"
            ]
        }
    },
    {
        "id": 26,
        "question": "What does <pre>'hello'.normalize()</pre> do?",
        "options": {
            "A": "Converts to lowercase",
            "B": "Removes whitespace",
            "C": "Normalizes Unicode characters",
            "D": "Capitalizes the string"
        },
        "correct": "C",
        "explanation": "The <pre>normalize()</pre> method returns the Unicode Normalization Form of the string. It's used to ensure that equivalent Unicode sequences are represented in the same way, which is important for string comparison and sorting.",
        "topic": {
            "topics": [
                "Unicode and character handling"
            ]
        }
    },
    {
        "id": 27,
        "question": "What is the result of <pre>'hello'[0]</pre>?",
        "options": {
            "A": "<pre>'h'</pre>",
            "B": "<pre>0</pre>",
            "C": "<pre>undefined</pre>",
            "D": "<pre>'hello'</pre>"
        },
        "correct": "A",
        "explanation": "Strings are array-like objects and can be accessed using bracket notation with numeric indices. This provides a convenient way to get individual characters without using <pre>charAt()</pre>.",
        "topic": {
            "topics": [
                "String methods and properties"
            ]
        }
    },
    {
        "id": 28,
        "question": "Which method creates a string from an array?",
        "options": {
            "A": "<pre>join()</pre>",
            "B": "<pre>toString()</pre>",
            "C": "<pre>String()</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All methods can create strings from arrays: <pre>join()</pre> joins array elements with a specified separator, <pre>toString()</pre> converts to a comma-separated string, and <pre>String()</pre> constructor also converts arrays to strings.",
        "topic": {
            "topics": [
                "String concatenation and building"
            ]
        }
    },
    {
        "id": 29,
        "question": "What does <pre>'hello'.lastIndexOf('l')</pre> return?",
        "options": {
            "A": "<pre>2</pre>",
            "B": "<pre>3</pre>",
            "C": "<pre>1</pre>",
            "D": "<pre>-1</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>lastIndexOf()</pre> method returns the index of the last occurrence of the specified value. In 'hello', 'l' appears at positions 2 and 3, so <pre>lastIndexOf('l')</pre> returns 3.",
        "topic": {
            "topics": [
                "String searching and extraction"
            ]
        }
    },
    {
        "id": 30,
        "question": "What is the purpose of template literals over regular strings?",
        "options": {
            "A": "String interpolation",
            "B": "Multi-line strings",
            "C": "Tagged templates",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "Template literals provide several advantages: they allow embedded expressions with <pre>${}</pre>, support multi-line strings without escape characters, and enable tagged templates for custom string processing.",
        "topic": {
            "topics": [
                "Template literals and interpolation"
            ]
        }
    }
];

module.exports = { metadata, questions };