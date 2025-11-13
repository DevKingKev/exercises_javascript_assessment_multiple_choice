module.exports = {
  "metadata": {
    "title": "JavaScript String Operations",
    "description": "Essential string methods, manipulation techniques, and common string patterns in JavaScript. This assessment covers fundamental string operations that developers use daily for text processing and manipulation.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "String creation and literals",
      "String length and indexing",
      "String search methods",
      "String extraction methods",
      "String transformation methods",
      "String pattern matching",
      "String utility methods"
    ],
    "topicLinks": [
      {
        "topicName": "String creation and literals",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
      },
      {
        "topicName": "String length and indexing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length"
      },
      {
        "topicName": "String search methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
      },
      {
        "topicName": "String extraction methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
      },
      {
        "topicName": "String transformation methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
      },
      {
        "topicName": "String pattern matching",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
      },
      {
        "topicName": "String utility methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
      }
    ],
    "assessmentId": 17,
    "assessmentUniqueId": 1762477825835,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the result of [CODE]'hello'.charCodeAt(0)[/CODE]?",
      "options": {
        "A": "<pre>104</pre>",
        "B": "<pre>'h'</pre>",
        "C": "<pre>0</pre>",
        "D": "<pre>72</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>charCodeAt()</pre> method returns the Unicode code point of the character at the specified index. 'h' has Unicode code point 104.",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which method checks if a string ends with a specified substring?",
      "options": {
        "A": "<pre>endsWith()</pre>",
        "B": "<pre>endWith()</pre>",
        "C": "<pre>finishWith()</pre>",
        "D": "<pre>hasEnd()</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>endsWith()</pre> method determines whether a string ends with the characters of a specified string, returning <pre>true</pre> or <pre>false</pre>.",
      "topic": {
        "topics": [
          "String search methods"
        ]
      }
    },
    {
      "id": 3,
      "question": "What does [CODE]'hello'.localeCompare('world')[/CODE] return?",
      "options": {
        "A": "A negative number",
        "B": "<pre>0</pre>",
        "C": "A positive number",
        "D": "<pre>false</pre>"
      },
      "correct": "A",
      "explanation": "<pre>localeCompare()</pre> returns a negative number if the string comes before the compared string in sort order, 0 if equal, or positive if after.",
      "topic": {
        "topics": [
          "String utility methods"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which method returns the Unicode code point at a given position?",
      "options": {
        "A": "<pre>codePointAt()</pre>",
        "B": "<pre>charCodeAt()</pre>",
        "C": "<pre>getCodePoint()</pre>",
        "D": "<pre>unicodeAt()</pre>"
      },
      "correct": "A",
      "explanation": "<pre>codePointAt()</pre> returns the Unicode code point value at the given position, which handles characters outside the Basic Multilingual Plane better than <pre>charCodeAt()</pre>.",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the result of [CODE]'hello'.normalize()[/CODE]?",
      "options": {
        "A": "<pre>'hello'</pre>",
        "B": "<pre>'HELLO'</pre>",
        "C": "<pre>'Hello'</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "The <pre>normalize()</pre> method returns the Unicode Normalization Form of the string. For simple ASCII strings like 'hello', it returns the same string.",
      "topic": {
        "topics": [
          "String transformation methods"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you check if a string contains only whitespace?",
      "options": {
        "A": "<pre>str.trim().length === 0</pre>",
        "B": "<pre>str.isEmpty()</pre>",
        "C": "<pre>str === ''</pre>",
        "D": "<pre>str.isWhitespace()</pre>"
      },
      "correct": "A",
      "explanation": "Trim removes whitespace from both ends, so if the trimmed string has length 0, the original contained only whitespace.",
      "topic": {
        "topics": [
          "String utility methods"
        ]
      }
    },
    {
      "id": 7,
      "question": "What does [CODE]'hello'.match(/l/g)[/CODE] return?",
      "options": {
        "A": "<pre>['l', 'l']</pre>",
        "B": "<pre>'l'</pre>",
        "C": "<pre>[2, 3]</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>match()</pre> method with the global flag returns an array of all matches. 'l' appears twice in 'hello'.",
      "topic": {
        "topics": [
          "String pattern matching"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which method creates a string from an array of code points?",
      "options": {
        "A": "<pre>String.fromCodePoint()</pre>",
        "B": "<pre>String.fromCharCode()</pre>",
        "C": "<pre>String.create()</pre>",
        "D": "<pre>String.fromUnicode()</pre>"
      },
      "correct": "A",
      "explanation": "<pre>String.fromCodePoint()</pre> returns a string created from the specified sequence of Unicode code points.",
      "topic": {
        "topics": [
          "String creation and literals"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the result of [CODE]'hello'.search(/l/)[/CODE]?",
      "options": {
        "A": "<pre>3</pre>",
        "B": "<pre>2</pre>",
        "C": "<pre>['l']</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>search()</pre> method returns the index of the first match of the regular expression. 'l' first appears at index 2.",
      "topic": {
        "topics": [
          "String search methods"
        ]
      }
    },
    {
      "id": 10,
      "question": "How do you repeat a string a specific number of times?",
      "options": {
        "A": "<pre>str * count</pre>",
        "B": "<pre>str.repeat(count)</pre>",
        "C": "<pre>String.repeat(str, count)</pre>",
        "D": "<pre>str.duplicate(count)</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>repeat()</pre> method constructs and returns a new string containing the specified number of copies of the original string.",
      "topic": {
        "topics": [
          "String transformation methods"
        ]
      }
    },
    {
      "id": 11,
      "question": "What does [CODE]'hello'.lastIndexOf('l')[/CODE] return?",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>3</pre>",
        "C": "<pre>4</pre>",
        "D": "<pre>-1</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>lastIndexOf()</pre> method returns the index of the last occurrence of the specified value. 'l' last appears at index 3.",
      "topic": {
        "topics": [
          "String search methods"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which method pads the current string from the end?",
      "options": {
        "A": "<pre>padStart()</pre>",
        "B": "<pre>padEnd()</pre>",
        "C": "<pre>padRight()</pre>",
        "D": "<pre>fillEnd()</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>padEnd()</pre> method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length from the end.",
      "topic": {
        "topics": [
          "String transformation methods"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the result of [CODE]'hello'.substr(1, 3)[/CODE]?",
      "options": {
        "A": "<pre>'hel'</pre>",
        "B": "<pre>'ell'</pre>",
        "C": "<pre>'llo'</pre>",
        "D": "<pre>'hello'</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>substr()</pre> method (deprecated) returns a portion of the string, starting at the specified index and extending for a given number of characters.",
      "topic": {
        "topics": [
          "String extraction methods"
        ]
      }
    },
    {
      "id": 14,
      "question": "How do you convert a string to an array of UTF-16 code units?",
      "options": {
        "A": "<pre>String.toCodeUnits(str)</pre>",
        "B": "There's no direct method, use Array.from(str)",
        "C": "<pre>str.codeUnits()</pre>",
        "D": "<pre>str.toArray()</pre>"
      },
      "correct": "B",
      "explanation": "While strings are iterable and can be converted to arrays, there's no direct method specifically for UTF-16 code units. <pre>Array.from(str)</pre> or <pre>[...str]</pre> work for characters.",
      "topic": {
        "topics": [
          "String creation and literals"
        ]
      }
    },
    {
      "id": 15,
      "question": "What does [CODE]'hello'.replace(/l/g, 'x')[/CODE] return?",
      "options": {
        "A": "<pre>'hexlo'</pre>",
        "B": "<pre>'hexxo'</pre>",
        "C": "<pre>'hello'</pre>",
        "D": "<pre>'heo'</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>replace()</pre> method with a global regex replaces all occurrences. Both 'l' characters are replaced with 'x'.",
      "topic": {
        "topics": [
          "String transformation methods"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which method returns the primitive value of a String object?",
      "options": {
        "A": "<pre>toPrimitive()</pre>",
        "B": "<pre>valueOf()</pre>",
        "C": "<pre>toString()</pre>",
        "D": "<pre>getValue()</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>valueOf()</pre> method returns the primitive value of a String object. This is rarely used directly as JavaScript automatically converts String objects to primitives.",
      "topic": {
        "topics": [
          "String utility methods"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the result of [CODE]'hello'.charAt(10)[/CODE]?",
      "options": {
        "A": "<pre>null</pre>",
        "B": "<pre>undefined</pre>",
        "C": "<pre>''</pre>",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "The <pre>charAt()</pre> method returns an empty string when the index is out of range, unlike bracket notation which returns <pre>undefined</pre>.",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    },
    {
      "id": 18,
      "question": "How do you check if a string matches a regular expression?",
      "options": {
        "A": "<pre>str.test(regex)</pre>",
        "B": "<pre>str.matches(regex)</pre>",
        "C": "<pre>regex.test(str)</pre>",
        "D": "<pre>String.matches(str, regex)</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>test()</pre> method of regular expressions checks if a string matches the pattern, returning <pre>true</pre> or <pre>false</pre>.",
      "topic": {
        "topics": [
          "String pattern matching"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does [CODE]'hello'.concat(' ', 'world')[/CODE] return?",
      "options": {
        "A": "<pre>'hello world '</pre>",
        "B": "<pre>'helloworld'</pre>",
        "C": "<pre>'hello world'</pre>",
        "D": "<pre>['hello', 'world']</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>concat()</pre> method concatenates the string arguments to the calling string and returns a new string.",
      "topic": {
        "topics": [
          "String transformation methods"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which method creates a string from an array of characters?",
      "options": {
        "A": "<pre>array.toString()</pre>",
        "B": "<pre>String.fromArray(array)</pre>",
        "C": "<pre>array.join('')</pre>",
        "D": "<pre>String.create(array)</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>join()</pre> method with an empty string separator concatenates all array elements into a string.",
      "topic": {
        "topics": [
          "String creation and literals"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the result of [CODE]'hello'.slice(-3)[/CODE]?",
      "options": {
        "A": "<pre>'hel'</pre>",
        "B": "<pre>'hello'</pre>",
        "C": "<pre>'llo'</pre>",
        "D": "<pre>'he'</pre>"
      },
      "correct": "C",
      "explanation": "Negative indices in <pre>slice()</pre> count from the end of the string. <pre>slice(-3)</pre> extracts the last 3 characters.",
      "topic": {
        "topics": [
          "String extraction methods"
        ]
      }
    },
    {
      "id": 22,
      "question": "How do you get all matches of a regular expression in a string?",
      "options": {
        "A": "<pre>regex.getAll(str)</pre>",
        "B": "<pre>str.getAllMatches(regex)</pre>",
        "C": "<pre>str.matchAll(regex)</pre>",
        "D": "<pre>String.matchAll(str, regex)</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>matchAll()</pre> method returns an iterator of all results matching a string against a regular expression, including capturing groups.",
      "topic": {
        "topics": [
          "String pattern matching"
        ]
      }
    },
    {
      "id": 23,
      "question": "What does [CODE]'hello'.trimStart()[/CODE] return for '  hello  '?",
      "options": {
        "A": "<pre>'  hello'</pre>",
        "B": "<pre>'hello'</pre>",
        "C": "<pre>'hello  '</pre>",
        "D": "<pre>'  hello  '</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>trimStart()</pre> method removes whitespace from the beginning of a string, leaving trailing whitespace intact.",
      "topic": {
        "topics": [
          "String transformation methods"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which method returns the string representation of an object?",
      "options": {
        "A": "<pre>obj.stringify()</pre>",
        "B": "<pre>obj.toText()</pre>",
        "C": "<pre>Object.toString(obj)</pre>",
        "D": "<pre>String(obj)</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>String()</pre> constructor converts any value to a string. For objects, it calls the object's <pre>toString()</pre> method.",
      "topic": {
        "topics": [
          "String creation and literals"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the result of [CODE]'hello'.substring(1, 4)[/CODE]?",
      "options": {
        "A": "<pre>'ello'</pre>",
        "B": "<pre>'hel'</pre>",
        "C": "<pre>'hell'</pre>",
        "D": "<pre>'ell'</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>substring()</pre> method returns the part of the string between the start and end indexes, with the end index not included.",
      "topic": {
        "topics": [
          "String extraction methods"
        ]
      }
    },
    {
      "id": 26,
      "question": "How do you check if a string contains a substring using modern syntax?",
      "options": {
        "A": "<pre>String.includes(str, substring)</pre>",
        "B": "<pre>str.contains(substring)</pre>",
        "C": "<pre>str.has(substring)</pre>",
        "D": "<pre>str.includes(substring)</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>includes()</pre> method performs a case-sensitive search to determine whether one string may be found within another string.",
      "topic": {
        "topics": [
          "String search methods"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does [CODE]'café'.length[/CODE] return?",
      "options": {
        "A": "<pre>5</pre>",
        "B": "<pre>6</pre>",
        "C": "<pre>3</pre>",
        "D": "<pre>4</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>length</pre> property returns the number of UTF-16 code units. 'é' may be represented as one or two code units depending on normalization.",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which method splits a string using a regular expression?",
      "options": {
        "A": "<pre>break()</pre>",
        "B": "<pre>divide()</pre>",
        "C": "<pre>separate()</pre>",
        "D": "<pre>split()</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>split()</pre> method can use a regular expression as the separator, allowing for complex splitting patterns.",
      "topic": {
        "topics": [
          "String transformation methods"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the result of [CODE]'hello'.anchor('name')[/CODE]?",
      "options": {
        "A": "<pre>'hello'</pre>",
        "B": "Error",
        "C": "<pre>'namehello'</pre>",
        "D": "<pre>'<a name=\"name\">hello</a>'</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>anchor()</pre> method creates an HTML anchor element string. It's one of the legacy HTML wrapper methods.",
      "topic": {
        "topics": [
          "String utility methods"
        ]
      }
    },
    {
      "id": 30,
      "question": "How do you iterate over each character in a string?",
      "options": {
        "A": "<pre>String.iterate(str, char => {})</pre>",
        "B": "<pre>str.forEach(char => {})</pre>",
        "C": "<pre>for (const char in str) {}</pre>",
        "D": "<pre>for (const char of str) {}</pre>"
      },
      "correct": "D",
      "explanation": "Strings are iterable, so you can use <pre>for...of</pre> to iterate over each character. <pre>for...in</pre> would iterate over indices, not characters.",
      "topic": {
        "topics": [
          "String length and indexing"
        ]
      }
    }
  ]
}
