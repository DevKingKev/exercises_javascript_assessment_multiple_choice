module.exports = {
  "metadata": {
    "title": "JavaScript String Operations and Methods",
    "description": "Essential string operations, common methods, and practical string manipulation techniques in JavaScript. Focuses on everyday string tasks developers encounter.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "String length and indexing",
      "Common string methods",
      "String case conversion",
      "String searching methods",
      "String extraction methods",
      "String whitespace handling",
      "String conversion and parsing"
    ],
    "topicLinks": [
      {
        "topicName": "String length and indexing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length"
      },
      {
        "topicName": "Common string methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
      },
      {
        "topicName": "String case conversion",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
      },
      {
        "topicName": "String searching methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"
      },
      {
        "topicName": "String extraction methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"
      },
      {
        "topicName": "String whitespace handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim"
      },
      {
        "topicName": "String conversion and parsing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt"
      }
    ],
    "assessmentId": 19,
    "assessmentUniqueId": 1762517364632,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the result of [CODE]'hello'.length[/CODE]?",
      "options": {
        "A": "<pre>5</pre>",
        "B": "<pre>4</pre>",
        "C": "<pre>6</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>length</pre> property returns the number of characters in a string. 'hello' has 5 characters: h, e, l, l, o.",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    },
    {
      "id": 2,
      "question": "What does [CODE]'Hello'.toLowerCase()[/CODE] return?",
      "options": {
        "A": "<pre>'hello'</pre>",
        "B": "<pre>'Hello'</pre>",
        "C": "<pre>'HELLO'</pre>",
        "D": "<pre>Error</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>toLowerCase()</pre> method converts all characters in a string to lowercase, returning a new string.",
      "topic": {
        "topics": [
          "String case conversion"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the result of [CODE]'hello'.charAt(1)[/CODE]?",
      "options": {
        "A": "<pre>'e'</pre>",
        "B": "<pre>'h'</pre>",
        "C": "<pre>'l'</pre>",
        "D": "<pre>''</pre>"
      },
      "correct": "A",
      "explanation": "String indices start at 0. <pre>charAt(1)</pre> returns the character at position 1, which is 'e' (h=0, e=1, l=2, l=3, o=4).",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    },
    {
      "id": 4,
      "question": "What does [CODE]'hello'.includes('ell')[/CODE] return?",
      "options": {
        "A": "<pre>true</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>2</pre>",
        "D": "<pre>'ell'</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>includes()</pre> method returns <pre>true</pre> if the string contains the specified substring, <pre>false</pre> otherwise.",
      "topic": {
        "topics": [
          "String searching methods"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the result of [CODE]'hello'.indexOf('l')[/CODE]?",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>3</pre>",
        "C": "<pre>1</pre>",
        "D": "<pre>-1</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>indexOf()</pre> method returns the position of the first occurrence of the specified value, starting the search from the beginning.",
      "topic": {
        "topics": [
          "String searching methods"
        ]
      }
    },
    {
      "id": 6,
      "question": "What does [CODE]'hello'.slice(1, 4)[/CODE] return?",
      "options": {
        "A": "<pre>'ell'</pre>",
        "B": "<pre>'hel'</pre>",
        "C": "<pre>'ello'</pre>",
        "D": "<pre>'ll'</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>slice()</pre> method extracts a section from index 1 (inclusive) to index 4 (exclusive), returning 'ell'.",
      "topic": {
        "topics": [
          "String extraction methods"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the result of [CODE]' hello '.trim()[/CODE]?",
      "options": {
        "A": "<pre>'hello'</pre>",
        "B": "<pre>' hello '</pre>",
        "C": "<pre>'hello '</pre>",
        "D": "<pre>' hello'</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>trim()</pre> method removes whitespace from both ends of a string, returning 'hello' without the surrounding spaces.",
      "topic": {
        "topics": [
          "String whitespace handling"
        ]
      }
    },
    {
      "id": 8,
      "question": "What does [CODE]'hello'.replace('l', 'x')[/CODE] return?",
      "options": {
        "A": "<pre>'hexlo'</pre>",
        "B": "<pre>'hexxo'</pre>",
        "C": "<pre>'hello'</pre>",
        "D": "<pre>'hexo'</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>replace()</pre> method replaces only the first occurrence of the specified value unless using a global regex.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the result of [CODE]'hello'.substring(2, 4)[/CODE]?",
      "options": {
        "A": "<pre>'el'</pre>",
        "B": "<pre>'ll'</pre>",
        "C": "<pre>'lo'</pre>",
        "D": "<pre>'ell'</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>substring()</pre> method extracts characters from index 2 to index 4 (exclusive), returning 'll'.",
      "topic": {
        "topics": [
          "String extraction methods"
        ]
      }
    },
    {
      "id": 10,
      "question": "What does [CODE]'hello'.endsWith('lo')[/CODE] return?",
      "options": {
        "A": "<pre>3</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>false</pre>",
        "D": "<pre>'lo'</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>endsWith()</pre> method returns <pre>true</pre> if the string ends with the specified characters, <pre>false</pre> otherwise.",
      "topic": {
        "topics": [
          "String searching methods"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the result of [CODE]'hello'.concat(' world')[/CODE]?",
      "options": {
        "A": "<pre>'helloworld'</pre>",
        "B": "<pre>'hello world'</pre>",
        "C": "<pre>'hello world '</pre>",
        "D": "<pre>Error</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>concat()</pre> method joins two or more strings, returning a new concatenated string.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    },
    {
      "id": 12,
      "question": "What does [CODE]'HELLO'.toLowerCase().toUpperCase()[/CODE] return?",
      "options": {
        "A": "<pre>'hello'</pre>",
        "B": "<pre>'HELLO'</pre>",
        "C": "<pre>'Hello'</pre>",
        "D": "<pre>Error</pre>"
      },
      "correct": "B",
      "explanation": "First <pre>toLowerCase()</pre> converts to 'hello', then <pre>toUpperCase()</pre> converts it back to 'HELLO'.",
      "topic": {
        "topics": [
          "String case conversion"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the result of [CODE]'hello'.lastIndexOf('l')[/CODE]?",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>3</pre>",
        "C": "<pre>4</pre>",
        "D": "<pre>-1</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>lastIndexOf()</pre> method returns the position of the last occurrence of the specified value.",
      "topic": {
        "topics": [
          "String searching methods"
        ]
      }
    },
    {
      "id": 14,
      "question": "What does [CODE]'hello'.split('')[/CODE] return?",
      "options": {
        "A": "<pre>Error</pre>",
        "B": "<pre>['h','e','l','l','o']</pre>",
        "C": "<pre>'hello'</pre>",
        "D": "<pre>'h,e,l,l,o'</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>split()</pre> method divides a string into an array of substrings using an empty string as separator, splitting between each character.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the result of [CODE]'hello'.charCodeAt(0)[/CODE]?",
      "options": {
        "A": "<pre>108</pre>",
        "B": "<pre>104</pre>",
        "C": "<pre>101</pre>",
        "D": "<pre>111</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>charCodeAt()</pre> method returns the Unicode of the character at the specified position. 'h' has Unicode 104.",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    },
    {
      "id": 16,
      "question": "What does [CODE]'hello'.startsWith('he')[/CODE] return?",
      "options": {
        "A": "<pre>false</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>0</pre>",
        "D": "<pre>'he'</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>startsWith()</pre> method returns <pre>true</pre> if the string begins with the specified characters, <pre>false</pre> otherwise.",
      "topic": {
        "topics": [
          "String searching methods"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the result of [CODE]'hello'.repeat(2)[/CODE]?",
      "options": {
        "A": "<pre>'hello2'</pre>",
        "B": "<pre>'hello hello'</pre>",
        "C": "<pre>'hellohello'</pre>",
        "D": "<pre>Error</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>repeat()</pre> method returns a new string containing the specified number of copies of the original string.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    },
    {
      "id": 18,
      "question": "What does [CODE]'hello'.padStart(8, 'x')[/CODE] return?",
      "options": {
        "A": "<pre>'xhello'</pre>",
        "B": "<pre>'helloxxx'</pre>",
        "C": "<pre>'xxxhello'</pre>",
        "D": "<pre>'hello   '</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>padStart()</pre> method pads the current string with another string until the resulting string reaches the given length.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the result of [CODE]'hello'.padEnd(7, '!')[/CODE]?",
      "options": {
        "A": "<pre>'!hello!'</pre>",
        "B": "<pre>'!!hello'</pre>",
        "C": "<pre>'hello!!'</pre>",
        "D": "<pre>'hello!'</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>padEnd()</pre> method pads the current string from the end with the specified string until reaching the target length.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    },
    {
      "id": 20,
      "question": "What does [CODE]'Hello World'.toLocaleLowerCase()[/CODE] typically return?",
      "options": {
        "A": "<pre>'HELLO WORLD'</pre>",
        "B": "<pre>'Hello world'</pre>",
        "C": "<pre>'hello world'</pre>",
        "D": "<pre>Error</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>toLocaleLowerCase()</pre> method returns the string converted to lowercase according to locale-specific mappings, usually same as <pre>toLowerCase()</pre> for English.",
      "topic": {
        "topics": [
          "String case conversion"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the result of [CODE]'hello'.search('l')[/CODE]?",
      "options": {
        "A": "<pre>'l'</pre>",
        "B": "<pre>3</pre>",
        "C": "<pre>2</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>search()</pre> method returns the position of the first match of the specified value, similar to <pre>indexOf()</pre> but accepts regex.",
      "topic": {
        "topics": [
          "String searching methods"
        ]
      }
    },
    {
      "id": 22,
      "question": "What does [CODE]'hello'.match(/l/g)[/CODE] return?",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>['ll']</pre>",
        "C": "<pre>['l', 'l']</pre>",
        "D": "<pre>'l'</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>match()</pre> method with global regex <pre>/l/g</pre> returns an array containing all matches of the letter 'l'.",
      "topic": {
        "topics": [
          "String searching methods"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the result of [CODE]'hello'.normalize()[/CODE]?",
      "options": {
        "A": "<pre>'HELLO'</pre>",
        "B": "<pre>'h e l l o'</pre>",
        "C": "<pre>'hello'</pre>",
        "D": "<pre>Error</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>normalize()</pre> method returns the Unicode Normalization Form of the string. For simple ASCII strings like 'hello', it returns the same string.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    },
    {
      "id": 24,
      "question": "What does [CODE]'  hello  '.trimStart()[/CODE] return?",
      "options": {
        "A": "<pre>'hello'</pre>",
        "B": "<pre>'  hello'</pre>",
        "C": "<pre>'  hello  '</pre>",
        "D": "<pre>'hello  '</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>trimStart()</pre> method removes whitespace from the beginning of a string, leaving trailing whitespace intact.",
      "topic": {
        "topics": [
          "String whitespace handling"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the result of [CODE]parseInt('42px')[/CODE]?",
      "options": {
        "A": "<pre>Error</pre>",
        "B": "<pre>'42px'</pre>",
        "C": "<pre>NaN</pre>",
        "D": "<pre>42</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>parseInt()</pre> function parses a string and returns an integer, stopping at the first non-numeric character.",
      "topic": {
        "topics": [
          "String conversion and parsing"
        ]
      }
    },
    {
      "id": 26,
      "question": "What does [CODE]parseFloat('3.14.15')[/CODE] return?",
      "options": {
        "A": "<pre>Error</pre>",
        "B": "<pre>3.14.15</pre>",
        "C": "<pre>NaN</pre>",
        "D": "<pre>3.14</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>parseFloat()</pre> function parses a string and returns a floating point number, stopping at the second decimal point.",
      "topic": {
        "topics": [
          "String conversion and parsing"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is the result of [CODE]String.fromCharCode(72, 105)[/CODE]?",
      "options": {
        "A": "<pre>Error</pre>",
        "B": "<pre>'72,105'</pre>",
        "C": "<pre>[72, 105]</pre>",
        "D": "<pre>'Hi'</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>String.fromCharCode()</pre> method creates a string from a sequence of Unicode values. 72='H', 105='i'.",
      "topic": {
        "topics": [
          "String conversion and parsing"
        ]
      }
    },
    {
      "id": 28,
      "question": "What does [CODE]'hello'.localeCompare('hello')[/CODE] return?",
      "options": {
        "A": "<pre>1</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>-1</pre>",
        "D": "<pre>0</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>localeCompare()</pre> method returns 0 if the strings are equal, -1 if the reference string comes before, or 1 if it comes after.",
      "topic": {
        "topics": [
          "String comparison"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the result of [CODE]'hello'.valueOf() === 'hello'[/CODE]?",
      "options": {
        "A": "<pre>Error</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>valueOf()</pre> method returns the primitive value of a string, which equals another string primitive with the same content.",
      "topic": {
        "topics": [
          "String primitive methods"
        ]
      }
    },
    {
      "id": 30,
      "question": "What does [CODE]'hello'.split('l').join('x')[/CODE] return?",
      "options": {
        "A": "<pre>'helxo'</pre>",
        "B": "<pre>'hexlo'</pre>",
        "C": "<pre>'hello'</pre>",
        "D": "<pre>'hexxo'</pre>"
      },
      "correct": "D",
      "explanation": "First <pre>split('l')</pre> creates ['he', '', 'o'], then <pre>join('x')</pre> joins with 'x' between elements, creating 'hexxo'.",
      "topic": {
        "topics": [
          "Common string methods"
        ]
      }
    }
  ]
}
