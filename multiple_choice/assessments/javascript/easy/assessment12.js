module.exports = {
  "metadata": {
    "title": "JavaScript Array Operations",
    "description": "Advanced array manipulation techniques, iteration patterns, and practical array usage scenarios. This assessment covers array methods and patterns that are essential for efficient data processing in JavaScript applications.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Array destructuring and spread",
      "Array iteration patterns",
      "Array transformation techniques",
      "Array searching strategies",
      "Array copying and cloning",
      "Array performance methods",
      "Array validation and checking"
    ],
    "topicLinks": [
      {
        "topicName": "Array destructuring and spread",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
      },
      {
        "topicName": "Array iteration patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iteration_methods"
      },
      {
        "topicName": "Array transformation techniques",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"
      },
      {
        "topicName": "Array searching strategies",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#search_methods"
      },
      {
        "topicName": "Array copying and cloning",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods"
      },
      {
        "topicName": "Array performance methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"
      },
      {
        "topicName": "Array validation and checking",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      }
    ],
    "assessmentId": 12,
    "assessmentUniqueId": 1762474143952,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What does [CODE]const [first, second] = [1, 2, 3][/CODE] assign to variables?",
      "options": {
        "A": "<pre>first = [1, 2], second = 3</pre>",
        "B": "<pre>first = 1, second = 3</pre>",
        "C": "<pre>first = 1, second = 2</pre>",
        "D": "<pre>first = 1, second = [2, 3]</pre>"
      },
      "correct": "C",
      "explanation": "Array destructuring assigns elements from the array to variables based on their position. The first element goes to <pre>first</pre>, the second to <pre>second</pre>, and the third element (3) is ignored since there's no variable for it.",
      "topic": {
        "topics": [
          "Array destructuring and spread"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which method creates a new array with all sub-array elements concatenated?",
      "options": {
        "A": "<pre>join()</pre>",
        "B": "<pre>concat()</pre>",
        "C": "<pre>flat()</pre>",
        "D": "<pre>merge()</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>flat()</pre> method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. By default, it flattens one level deep.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the result of [CODE][...[1, 2], 3][/CODE]?",
      "options": {
        "A": "<pre>6</pre>",
        "B": "<pre>[[1, 2], 3]</pre>",
        "C": "<pre>[1, 2, [3]]</pre>",
        "D": "<pre>[1, 2, 3]</pre>"
      },
      "correct": "D",
      "explanation": "The spread operator (<pre>...</pre>) expands the array <pre>[1, 2]</pre> into individual elements, then combines them with <pre>3</pre> to create a new array <pre>[1, 2, 3]</pre>.",
      "topic": {
        "topics": [
          "Array destructuring and spread"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which method returns the last index where an element is found?",
      "options": {
        "A": "<pre>indexOfLast()</pre>",
        "B": "<pre>findLastIndex()</pre>",
        "C": "<pre>searchLast()</pre>",
        "D": "<pre>lastIndexOf()</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>lastIndexOf()</pre> method returns the last index at which a given element can be found in the array, or -1 if it is not present. It searches backwards from the end of the array.",
      "topic": {
        "topics": [
          "Array searching strategies"
        ]
      }
    },
    {
      "id": 5,
      "question": "What does [CODE]Array.from('hello')[/CODE] return?",
      "options": {
        "A": "<pre>['h', 'e', 'l', 'l', 'o']</pre>",
        "B": "<pre>'hello'</pre>",
        "C": "<pre>['hello']</pre>",
        "D": "<pre>[104, 101, 108, 108, 111]</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>Array.from()</pre> method creates a new array from an array-like or iterable object. When passed a string, it creates an array of individual characters.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which method creates a shallow copy of an array?",
      "options": {
        "A": "<pre>slice()</pre>",
        "B": "All of the above",
        "C": "<pre>Array.from(arr)</pre>",
        "D": "<pre>[...arr]</pre>"
      },
      "correct": "B",
      "explanation": "All three methods create shallow copies of arrays. <pre>slice()</pre> without arguments copies the entire array, the spread operator expands and collects elements, and <pre>Array.from()</pre> creates a new array from the original.",
      "topic": {
        "topics": [
          "Array copying and cloning"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the result of [CODE][1, 2, 3].copyWithin(0, 1)[/CODE]?",
      "options": {
        "A": "<pre>[1, 1, 2]</pre>",
        "B": "<pre>[1, 2, 3]</pre>",
        "C": "<pre>[2, 2, 3]</pre>",
        "D": "<pre>[2, 3, 3]</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>copyWithin()</pre> method copies array elements to another position in the same array. <pre>copyWithin(0, 1)</pre> copies elements starting from index 1 to the beginning, resulting in <pre>[2, 3, 3]</pre>.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which method checks if all elements satisfy a condition and returns a boolean?",
      "options": {
        "A": "<pre>all()</pre>",
        "B": "<pre>every()</pre>",
        "C": "<pre>checkAll()</pre>",
        "D": "<pre>validate()</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>every()</pre> method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value and stops iterating once a falsy value is found.",
      "topic": {
        "topics": [
          "Array validation and checking"
        ]
      }
    },
    {
      "id": 9,
      "question": "What does [CODE][1, 2, 3].entries()[/CODE] return?",
      "options": {
        "A": "The array values",
        "B": "An iterator of [index, value] pairs",
        "C": "The array indices",
        "D": "A new array"
      },
      "correct": "B",
      "explanation": "The <pre>entries()</pre> method returns a new Array Iterator object that contains key/value pairs for each index in the array. Each pair is an array <pre>[index, value]</pre>.",
      "topic": {
        "topics": [
          "Array iteration patterns"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which method returns the first element that satisfies a condition?",
      "options": {
        "A": "<pre>first()</pre>",
        "B": "<pre>find()</pre>",
        "C": "<pre>get()</pre>",
        "D": "<pre>locate()</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>find()</pre> method returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy, it returns <pre>undefined</pre>.",
      "topic": {
        "topics": [
          "Array searching strategies"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the result of [CODE][1, 2, 3].values()[0][/CODE]?",
      "options": {
        "A": "<pre>1</pre>",
        "B": "Error",
        "C": "<pre>0</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>values()</pre> method returns an iterator object, not an array. You cannot access iterator elements using bracket notation. You need to use <pre>next()</pre> or convert it to an array first.",
      "topic": {
        "topics": [
          "Array iteration patterns"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which method creates an array from arguments regardless of number?",
      "options": {
        "A": "<pre>Array.of()</pre>",
        "B": "<pre>Array.from()</pre>",
        "C": "<pre>new Array()</pre>",
        "D": "<pre>Array.create()</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>Array.of()</pre> method creates a new Array instance with a variable number of arguments. Unlike <pre>Array()</pre>, a single numeric argument creates an array with that element.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does [CODE][1, 2, 3].flatMap(x => [x, x * 2])[/CODE] return?",
      "options": {
        "A": "<pre>[3, 6, 9]</pre>",
        "B": "<pre>[[1, 2], [2, 4], [3, 6]]</pre>",
        "C": "<pre>[1, 2, 3, 2, 4, 6]</pre>",
        "D": "<pre>[1, 2, 2, 4, 3, 6]</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>flatMap()</pre> method first maps each element using a mapping function, then flattens the result into a new array. It's identical to <pre>map()</pre> followed by <pre>flat()</pre> of depth 1.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 14,
      "question": "Which method returns an iterator of array keys?",
      "options": {
        "A": "<pre>indexes()</pre>",
        "B": "<pre>indices()</pre>",
        "C": "<pre>keys()</pre>",
        "D": "<pre>getKeys()</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>keys()</pre> method returns a new Array Iterator that contains the keys (indices) for each element in the array. This is useful for iterating over array indices.",
      "topic": {
        "topics": [
          "Array iteration patterns"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the result of [CODE][1, , 3].length[/CODE]?",
      "options": {
        "A": "<pre>3</pre>",
        "B": "<pre>2</pre>",
        "C": "<pre>1</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>length</pre> property counts all slots in the array, including empty ones. The array <pre>[1, , 3]</pre> has three slots (indexes 0, 1, and 2), even though the middle slot is empty.",
      "topic": {
        "topics": [
          "Array validation and checking"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which method fills elements with a value from start to end?",
      "options": {
        "A": "<pre>set()</pre>",
        "B": "<pre>replace()</pre>",
        "C": "<pre>fill()</pre>",
        "D": "<pre>populate()</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>fill()</pre> method changes all elements in an array to a static value, from a start index to an end index. It returns the modified array.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 17,
      "question": "What does [CODE][1, 2, 3].at(-1)[/CODE] return?",
      "options": {
        "A": "<pre>1</pre>",
        "B": "<pre>3</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>-1</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>at()</pre> method takes an integer value and returns the element at that index. Negative integers count back from the last element, so <pre>-1</pre> returns the last element.",
      "topic": {
        "topics": [
          "Array searching strategies"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which method creates an array from object properties?",
      "options": {
        "A": "<pre>Object.values()</pre>",
        "B": "<pre>Array.fromObject()</pre>",
        "C": "<pre>Object.toArray()</pre>",
        "D": "<pre>Array.values()</pre>"
      },
      "correct": "A",
      "explanation": "While not an array method, <pre>Object.values()</pre> returns an array of a given object's own enumerable property values. This is commonly used to convert object values to arrays.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the result of [CODE]Array(3).fill(0)[/CODE]?",
      "options": {
        "A": "<pre>[0, 0, 0]</pre>",
        "B": "<pre>[3, 0]</pre>",
        "C": "<pre>[0, 3]</pre>",
        "D": "<pre>[]</pre>"
      },
      "correct": "A",
      "explanation": "<pre>Array(3)</pre> creates an array with 3 empty slots, and <pre>fill(0)</pre> replaces all elements with 0, resulting in <pre>[0, 0, 0]</pre>.",
      "topic": {
        "topics": [
          "Array creation and initialization"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which method removes elements and inserts new ones?",
      "options": {
        "A": "<pre>replace()</pre>",
        "B": "<pre>slice()</pre>",
        "C": "<pre>splice()</pre>",
        "D": "<pre>modify()</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>splice()</pre> method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It's very versatile for array manipulation.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 21,
      "question": "What does [CODE][1, 2, 3].findLast(x => x > 1)[/CODE] return?",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>3</pre>",
        "C": "<pre>1</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>findLast()</pre> method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. It starts from the end and moves toward the start.",
      "topic": {
        "topics": [
          "Array searching strategies"
        ]
      }
    },
    {
      "id": 22,
      "question": "Which method checks if an array includes a value?",
      "options": {
        "A": "<pre>includes()</pre>",
        "B": "<pre>contains()</pre>",
        "C": "<pre>has()</pre>",
        "D": "<pre>exists()</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>includes()</pre> method determines whether an array includes a certain value, returning <pre>true</pre> or <pre>false</pre>. It uses strict equality (===) for comparison.",
      "topic": {
        "topics": [
          "Array validation and checking"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the result of [CODE][1, 2, 3].toReversed()[/CODE]?",
      "options": {
        "A": "<pre>[3, 2, 1]</pre>",
        "B": "<pre>[1, 2, 3]</pre>",
        "C": "Error - method doesn't exist",
        "D": "<pre>[3, 1, 2]</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>toReversed()</pre> method is a newer array method that returns a new array with the elements in reversed order without modifying the original. However, it may not be available in all JavaScript environments yet.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which method creates an array without duplicate values?",
      "options": {
        "A": "<pre>[...new Set(arr)]</pre>",
        "B": "<pre>arr.unique()</pre>",
        "C": "<pre>arr.distinct()</pre>",
        "D": "<pre>Array.unique(arr)</pre>"
      },
      "correct": "A",
      "explanation": "The Set object stores unique values, so converting an array to a Set removes duplicates. Spreading the Set back into an array creates an array with only unique values.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 25,
      "question": "What does [CODE][1, 2, 3].with(1, 4)[/CODE] return?",
      "options": {
        "A": "<pre>[1, 4, 3]</pre>",
        "B": "<pre>[1, 2, 3]</pre>",
        "C": "Error - method doesn't exist",
        "D": "<pre>[4, 2, 3]</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>with()</pre> method is a newer array method that returns a new array with the element at the given index replaced with the given value. However, it may not be available in all JavaScript environments yet.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 26,
      "question": "Which method returns the array as a string?",
      "options": {
        "A": "All of the above",
        "B": "<pre>join()</pre>",
        "C": "<pre>String()</pre>",
        "D": "<pre>toString()</pre>"
      },
      "correct": "A",
      "explanation": "All three methods convert arrays to strings: <pre>toString()</pre> and <pre>join()</pre> without arguments both return comma-separated strings, and <pre>String()</pre> constructor also converts arrays to strings.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is the result of [CODE][].some(x => x > 0)[/CODE]?",
      "options": {
        "A": "<pre>[]</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>false</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>some()</pre> method returns <pre>false</pre> for any condition when called on an empty array because there are no elements to satisfy the condition.",
      "topic": {
        "topics": [
          "Array validation and checking"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which method finds the index of the last matching element?",
      "options": {
        "A": "<pre>lastFind()</pre>",
        "B": "<pre>findLastIndex()</pre>",
        "C": "<pre>searchLast()</pre>",
        "D": "<pre>indexOfLast()</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>findLastIndex()</pre> method returns the index of the last element that satisfies the provided testing function. If no elements satisfy, it returns -1.",
      "topic": {
        "topics": [
          "Array searching strategies"
        ]
      }
    },
    {
      "id": 29,
      "question": "What does [CODE][1, 2, 3].toSpliced(1, 1)[/CODE] return?",
      "options": {
        "A": "<pre>[1, 3]</pre>",
        "B": "<pre>[1, 2, 3]</pre>",
        "C": "<pre>[2, 3]</pre>",
        "D": "Error - method doesn't exist"
      },
      "correct": "D",
      "explanation": "The <pre>toSpliced()</pre> method is a newer array method that returns a new array with some elements removed and/or replaced without modifying the original. However, it may not be available in all JavaScript environments yet.",
      "topic": {
        "topics": [
          "Array transformation techniques"
        ]
      }
    },
    {
      "id": 30,
      "question": "Which method checks if an object is an array?",
      "options": {
        "A": "<pre>Array.isArray()</pre>",
        "B": "<pre>obj instanceof Array</pre>",
        "C": "<pre>typeof obj === 'array'</pre>",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "Both <pre>Array.isArray()</pre> and <pre>instanceof Array</pre> can check if an object is an array. <pre>Array.isArray()</pre> is more reliable as it works across different execution contexts.",
      "topic": {
        "topics": [
          "Array validation and checking"
        ]
      }
    }
  ]
}
