module.exports = {
  "metadata": {
    "title": "JavaScript Methods & Operations",
    "description": "Mathematical operations, array methods, string methods, and function fundamentals",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Math object methods (Math.max, Math.min, Math.pow)",
      "Array methods (push, slice, reverse, sort, concat)",
      "String methods (slice, charAt, substring, indexOf)",
      "Function declaration and invocation",
      "Mathematical operations and precedence",
      "Array operations and manipulation",
      "String indexing and character access"
    ],
    "assessmentId": 3,
    "assessmentUniqueId": 1762254854226,
    "testType": "multiple-choice",
    "topicLinks": [
      {
        "topicName": "Math object methods (Math.max, Math.min, Math.pow)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
      },
      {
        "topicName": "Mathematical operations and precedence",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"
      },
      {
        "topicName": "Array methods (push, slice, reverse, sort, concat)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      },
      {
        "topicName": "Array operations and manipulation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections"
      },
      {
        "topicName": "String methods (slice, charAt, substring, indexOf)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
      },
      {
        "topicName": "String indexing and character access",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
      },
      {
        "topicName": "Function declaration and invocation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
      }
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What does [CODE]Math.max(5, 10, 3)[/CODE] return?",
      "options": {
        "A": "5",
        "B": "18",
        "C": "3",
        "D": "10"
      },
      "correct": "D",
      "explanation": "[CODE]Math.max()[/CODE] returns the largest of the given numbers. Among 5, 10, and 3, the largest is 10.",
      "topic": {
        "topics": [
          "Math object methods (Math.max, Math.min, Math.pow)",
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which method adds elements to the end of an array?",
      "options": {
        "A": "unshift()",
        "B": "append()",
        "C": "push()",
        "D": "add()"
      },
      "correct": "C",
      "explanation": "push() adds one or more elements to the end of an array and returns the new length of the array.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 3,
      "question": "What does [CODE]'hello'.charAt(1)[/CODE] return?",
      "options": {
        "A": "'h'",
        "B": "'e'",
        "C": "'l'",
        "D": "'o'"
      },
      "correct": "B",
      "explanation": "[CODE]charAt(1)[/CODE] returns the character at index 1. String indexing starts at 0, so index 1 in 'hello' is 'e'.",
      "topic": {
        "topics": [
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 4,
      "question": "What is the result of [CODE]2 * 3 + 4[/CODE]?",
      "options": {
        "A": "14",
        "B": "9",
        "C": "24",
        "D": "10"
      },
      "correct": "D",
      "explanation": "Following order of operations (PEMDAS), multiplication happens before addition: [CODE]2 * 3 = 6[/CODE], then [CODE]6 + 4 = 10[/CODE].",
      "topic": {
        "topics": [
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which method creates a shallow copy of a portion of an array?",
      "options": {
        "A": "slice()",
        "B": "splice()",
        "C": "split()",
        "D": "copy()"
      },
      "correct": "A",
      "explanation": "slice() returns a shallow copy of a portion of an array into a new array. splice() modifies the original array.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 6,
      "question": "What does [CODE]Math.pow(2, 3)[/CODE] return?",
      "options": {
        "A": "5",
        "B": "8",
        "C": "6",
        "D": "9"
      },
      "correct": "B",
      "explanation": "[CODE]Math.pow(2, 3)[/CODE] calculates 2 to the power of 3, which is [CODE]2 * 2 * 2 = 8[/CODE].",
      "topic": {
        "topics": [
          "Math object methods (Math.max, Math.min, Math.pow)",
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 7,
      "question": "How do you access the first character of a string 'test'?",
      "options": {
        "A": "test[0]",
        "B": "test.charAt(0)",
        "C": "test.first()",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "Both [CODE]test[0][/CODE] and [CODE]test.charAt(0)[/CODE] access the first character. [CODE]charAt()[/CODE] is more traditional, bracket notation is newer but widely supported.",
      "topic": {
        "topics": [
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 8,
      "question": "What is the correct way to declare a function named 'myFunc'?",
      "options": {
        "A": "function myFunc() {}",
        "B": "Both A and C",
        "C": "myFunc = function() {}",
        "D": "def myFunc() {}"
      },
      "correct": "B",
      "explanation": "Both function declaration [CODE]function myFunc() {}[/CODE] and function expression [CODE]myFunc = function() {}[/CODE] are valid ways to create a function in JavaScript.",
      "topic": {
        "topics": [
          "Function declaration and invocation",
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 9,
      "question": "Which method reverses the elements in an array?",
      "options": {
        "A": "backwards()",
        "B": "reverse()",
        "C": "flip()",
        "D": "invert()"
      },
      "correct": "B",
      "explanation": "reverse() reverses an array in place. The first array element becomes the last, and the last becomes the first.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 10,
      "question": "What does [CODE]'hello'.substring(1, 3)[/CODE] return?",
      "options": {
        "A": "'ell'",
        "B": "'el'",
        "C": "'he'",
        "D": "'h'"
      },
      "correct": "B",
      "explanation": "[CODE]substring(1, 3)[/CODE] extracts characters from index 1 up to (but not including) index 3. In 'hello', this gives 'el'.",
      "topic": {
        "topics": [
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the result of [CODE]10 / 2 * 3[/CODE]?",
      "options": {
        "A": "1.67",
        "B": "5",
        "C": "15",
        "D": "6"
      },
      "correct": "C",
      "explanation": "Operations of equal precedence are evaluated left to right: [CODE]10 / 2 = 5[/CODE], then [CODE]5 * 3 = 15[/CODE].",
      "topic": {
        "topics": [
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which method finds the index of a substring in a string?",
      "options": {
        "A": "find()",
        "B": "search()",
        "C": "indexOf()",
        "D": "locate()"
      },
      "correct": "C",
      "explanation": "indexOf() returns the index of the first occurrence of a substring. It returns -1 if the substring is not found.",
      "topic": {
        "topics": [
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does [CODE]Math.min(8, 3, 15)[/CODE] return?",
      "options": {
        "A": "8",
        "B": "26",
        "C": "15",
        "D": "3"
      },
      "correct": "D",
      "explanation": "Math.min() returns the smallest of the given numbers. Among 8, 3, and 15, the smallest is 3.",
      "topic": {
        "topics": [
          "Math object methods (Math.max, Math.min, Math.pow)",
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 14,
      "question": "How do you call a function named 'myFunction'?",
      "options": {
        "A": "myFunction()",
        "B": "call myFunction",
        "C": "run myFunction",
        "D": "execute myFunction"
      },
      "correct": "A",
      "explanation": "Functions are called (invoked) by adding parentheses after the function name: myFunction().",
      "topic": {
        "topics": [
          "Function declaration and invocation",
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 15,
      "question": "Which method joins two or more arrays?",
      "options": {
        "A": "merge()",
        "B": "concat()",
        "C": "combine()",
        "D": "join()"
      },
      "correct": "B",
      "explanation": "concat() is used to merge two or more arrays. This method does not change the existing arrays, but returns a new array.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 16,
      "question": "What is the result of [CODE]5 + 3 * 2[/CODE]?",
      "options": {
        "A": "16",
        "B": "10",
        "C": "13",
        "D": "11"
      },
      "correct": "D",
      "explanation": "Multiplication has higher precedence than addition: 3 * 2 = 6, then 5 + 6 = 11.",
      "topic": {
        "topics": [
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 17,
      "question": "What does [CODE]'JavaScript'.slice(0, 4)[/CODE] return?",
      "options": {
        "A": "'Script'",
        "B": "'JavaScript'",
        "C": "'Java'",
        "D": "'J'"
      },
      "correct": "C",
      "explanation": "slice(0, 4) extracts characters from index 0 up to (but not including) index 4. This gives 'Java'.",
      "topic": {
        "topics": [
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which method sorts the elements of an array?",
      "options": {
        "A": "order()",
        "B": "arrange()",
        "C": "sort()",
        "D": "organize()"
      },
      "correct": "C",
      "explanation": "sort() sorts the elements of an array in place and returns the sorted array. By default, it sorts as strings in ascending order.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the length of the string 'coding'?",
      "options": {
        "A": "6",
        "B": "5",
        "C": "7",
        "D": "4"
      },
      "correct": "A",
      "explanation": "The string 'coding' has 6 characters: c-o-d-i-n-g. The length property counts all characters including spaces.",
      "topic": {
        "topics": [
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 20,
      "question": "What does [CODE]Math.floor(4.7)[/CODE] return?",
      "options": {
        "A": "Error",
        "B": "5",
        "C": "4.7",
        "D": "4"
      },
      "correct": "D",
      "explanation": "Math.floor() returns the largest integer less than or equal to the given number. 4.7 floors down to 4.",
      "topic": {
        "topics": [
          "Math object methods (Math.max, Math.min, Math.pow)",
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 21,
      "question": "How do you access the last element of an array 'arr'?",
      "options": {
        "A": "arr[arr.length - 1]",
        "B": "arr[arr.length]",
        "C": "arr.last()",
        "D": "arr[-1]"
      },
      "correct": "A",
      "explanation": "Array indexing starts at 0, so the last element is at index (length - 1). arr[arr.length] would be undefined.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the result of [CODE]12 % 5[/CODE]?",
      "options": {
        "A": "2",
        "B": "2.4",
        "C": "7",
        "D": "0"
      },
      "correct": "A",
      "explanation": "The modulus operator (%) returns the remainder. 12 divided by 5 is 2 remainder 2, so 12 % 5 = 2.",
      "topic": {
        "topics": [
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 23,
      "question": "Which method removes the first element from an array?",
      "options": {
        "A": "pop()",
        "B": "shift()",
        "C": "remove()",
        "D": "delete()"
      },
      "correct": "B",
      "explanation": "shift() removes the first element from an array and returns that element. pop() removes the last element.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 24,
      "question": "What does 'hello'.toUpperCase() return?",
      "options": {
        "A": "'HELLO'",
        "B": "'hello'",
        "C": "'Hello'",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "toUpperCase() converts all characters in a string to uppercase letters. 'hello' becomes 'HELLO'.",
      "topic": {
        "topics": [
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the result of (4 + 2) * 3?",
      "options": {
        "A": "18",
        "B": "14",
        "C": "10",
        "D": "12"
      },
      "correct": "A",
      "explanation": "Parentheses have the highest precedence: (4 + 2) = 6, then 6 * 3 = 18.",
      "topic": {
        "topics": [
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 26,
      "question": "How do you get the number of elements in an array?",
      "options": {
        "A": "array.length",
        "B": "array.size",
        "C": "array.count",
        "D": "array.elements"
      },
      "correct": "A",
      "explanation": "The length property returns the number of elements in an array.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "Array operations and manipulation"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does Math.ceil(3.2) return?",
      "options": {
        "A": "3",
        "B": "3.2",
        "C": "4",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "Math.ceil() returns the smallest integer greater than or equal to the given number. 3.2 ceils up to 4.",
      "topic": {
        "topics": [
          "Math object methods (Math.max, Math.min, Math.pow)",
          "Mathematical operations and precedence"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which operator is used for string concatenation?",
      "options": {
        "A": "&",
        "B": "+",
        "C": "++",
        "D": "."
      },
      "correct": "B",
      "explanation": "The + operator is used for both addition and string concatenation in JavaScript.",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "String methods (slice, charAt, substring, indexOf)",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 29,
      "question": "What does [1, 2, 3].indexOf(2) return?",
      "options": {
        "A": "2",
        "B": "0",
        "C": "1",
        "D": "-1"
      },
      "correct": "C",
      "explanation": "indexOf() returns the index of the first occurrence of the element. The value 2 is at index 1 in the array [1, 2, 3].",
      "topic": {
        "topics": [
          "Array methods (push, slice, reverse, sort, concat)",
          "String methods (slice, charAt, substring, indexOf)",
          "Array operations and manipulation",
          "String indexing and character access"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the result of 15 - 3 * 2?",
      "options": {
        "A": "24",
        "B": "12",
        "C": "21",
        "D": "9"
      },
      "correct": "D",
      "explanation": "Multiplication has higher precedence than subtraction: 3 * 2 = 6, then 15 - 6 = 9.",
      "topic": {
        "topics": [
          "Mathematical operations and precedence"
        ]
      }
    }
  ]
}
