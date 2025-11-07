// assessment11.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Array Methods",
    "description": "Comprehensive coverage of JavaScript array operations including manipulation, iteration, transformation, and common patterns. This assessment focuses on practical array methods that developers use daily for data processing and collection management.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Array creation and initialization",
        "Array manipulation methods",
        "Array iteration and transformation",
        "Array searching and filtering",
        "Array sorting and ordering",
        "Array utility methods",
        "Multi-dimensional arrays"
    ],
    "topicLinks": [
        {
            "topicName": "Array creation and initialization",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        },
        {
            "topicName": "Array manipulation methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"
        },
        {
            "topicName": "Array iteration and transformation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iteration_methods"
        },
        {
            "topicName": "Array searching and filtering",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#search_methods"
        },
        {
            "topicName": "Array sorting and ordering",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
        },
        {
            "topicName": "Array utility methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"
        },
        {
            "topicName": "Multi-dimensional arrays",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections"
        }
    ],
    "assessmentId": 11,
    "assessmentUniqueId": 1730726406000,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "Which method adds elements to the end of an array?",
        "options": {
            "A": "<pre>push()</pre>",
            "B": "<pre>append()</pre>",
            "C": "<pre>add()</pre>",
            "D": "<pre>insert()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>push()</pre> method adds one or more elements to the end of an array and returns the new length of the array. For example, <pre>[1, 2].push(3)</pre> modifies the array to <pre>[1, 2, 3]</pre> and returns <pre>3</pre>.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 2,
        "question": "What does [CODE][1, 2, 3].pop()[/CODE] return?",
        "options": {
            "A": "<pre>[1, 2]</pre>",
            "B": "<pre>3</pre>",
            "C": "<pre>2</pre>",
            "D": "<pre>[3]</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>pop()</pre> method removes the last element from an array and returns that element. It modifies the original array, reducing its length by one. After <pre>pop()</pre>, the array becomes <pre>[1, 2]</pre>.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 3,
        "question": "Which method creates a new array by applying a function to each element?",
        "options": {
            "A": "<pre>forEach()</pre>",
            "B": "<pre>map()</pre>",
            "C": "<pre>filter()</pre>",
            "D": "<pre>reduce()</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>map()</pre> method creates a new array with the results of calling a provided function on every element. Unlike <pre>forEach()</pre>, it returns a new array without modifying the original.",
        "topic": {
            "topics": [
                "Array iteration and transformation"
            ]
        }
    },
    {
        "id": 4,
        "question": "What is the result of [CODE][1, 2, 3].length[/CODE]?",
        "options": {
            "A": "<pre>2</pre>",
            "B": "<pre>3</pre>",
            "C": "<pre>4</pre>",
            "D": "<pre>undefined</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>length</pre> property returns the number of elements in an array. Arrays are zero-indexed, but <pre>length</pre> counts the actual number of elements, not the highest index.",
        "topic": {
            "topics": [
                "Array utility methods"
            ]
        }
    },
    {
        "id": 5,
        "question": "Which method removes the first element from an array?",
        "options": {
            "A": "<pre>shift()</pre>",
            "B": "<pre>unshift()</pre>",
            "C": "<pre>removeFirst()</pre>",
            "D": "<pre>pop()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>shift()</pre> method removes the first element from an array and returns that removed element. This method changes the length of the array and shifts all other elements to lower indices.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 6,
        "question": "What does [CODE][1, 2, 3].includes(2)[/CODE] return?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>1</pre>",
            "D": "<pre>2</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>includes()</pre> method determines whether an array includes a certain value, returning <pre>true</pre> or <pre>false</pre>. It uses strict equality (===) for comparison.",
        "topic": {
            "topics": [
                "Array searching and filtering"
            ]
        }
    },
    {
        "id": 7,
        "question": "Which method combines two or more arrays?",
        "options": {
            "A": "<pre>concat()</pre>",
            "B": "<pre>join()</pre>",
            "C": "<pre>merge()</pre>",
            "D": "<pre>combine()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>concat()</pre> method is used to merge two or more arrays. It does not change the existing arrays but returns a new array containing all elements from the original arrays.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 8,
        "question": "What is the result of [CODE][1, 2, 3].indexOf(2)[/CODE]?",
        "options": {
            "A": "<pre>1</pre>",
            "B": "<pre>2</pre>",
            "C": "<pre>0</pre>",
            "D": "<pre>-1</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>indexOf()</pre> method returns the first index at which a given element can be found in the array, or -1 if it is not present. Array indices start at 0, so the value 2 is at index 1.",
        "topic": {
            "topics": [
                "Array searching and filtering"
            ]
        }
    },
    {
        "id": 9,
        "question": "Which method reverses the elements of an array?",
        "options": {
            "A": "<pre>reverse()</pre>",
            "B": "<pre>flip()</pre>",
            "C": "<pre>backwards()</pre>",
            "D": "<pre>invert()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>reverse()</pre> method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. It modifies the original array.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 10,
        "question": "What does [CODE][1, 2, 3].slice(1, 3)[/CODE] return?",
        "options": {
            "A": "<pre>[2, 3]</pre>",
            "B": "<pre>[1, 2]</pre>",
            "C": "<pre>[1, 2, 3]</pre>",
            "D": "<pre>[2]</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>slice()</pre> method returns a shallow copy of a portion of an array. It takes start and end indices, where the end index is not included. So <pre>slice(1, 3)</pre> extracts elements at indices 1 and 2.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 11,
        "question": "Which method creates a new array with elements that pass a test?",
        "options": {
            "A": "<pre>find()</pre>",
            "B": "<pre>filter()</pre>",
            "C": "<pre>search()</pre>",
            "D": "<pre>select()</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>filter()</pre> method creates a new array with all elements that pass the test implemented by the provided function. It doesn't modify the original array.",
        "topic": {
            "topics": [
                "Array searching and filtering"
            ]
        }
    },
    {
        "id": 12,
        "question": "What is the result of [CODE][3, 1, 2].sort()[/CODE]?",
        "options": {
            "A": "<pre>[1, 2, 3]</pre>",
            "B": "<pre>[3, 1, 2]</pre>",
            "C": "<pre>[3, 2, 1]</pre>",
            "D": "<pre>[1, 3, 2]</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>sort()</pre> method sorts the elements of an array in place. By default, it converts elements to strings and sorts them lexicographically. For numbers, this gives ascending order.",
        "topic": {
            "topics": [
                "Array sorting and ordering"
            ]
        }
    },
    {
        "id": 13,
        "question": "Which method adds elements to the beginning of an array?",
        "options": {
            "A": "<pre>unshift()</pre>",
            "B": "<pre>push()</pre>",
            "C": "<pre>prepend()</pre>",
            "D": "<pre>addFirst()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>unshift()</pre> method adds one or more elements to the beginning of an array and returns the new length. It's the opposite of <pre>shift()</pre> which removes from the beginning.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 14,
        "question": "What does [CODE][1, 2, 3].join('-')[/CODE] return?",
        "options": {
            "A": "<pre>'1-2-3'</pre>",
            "B": "<pre>[1, 2, 3]</pre>",
            "C": "<pre>'1,2,3'</pre>",
            "D": "<pre>6</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>join()</pre> method creates and returns a new string by concatenating all array elements, separated by the specified separator string. If no separator is provided, it uses a comma.",
        "topic": {
            "topics": [
                "Array utility methods"
            ]
        }
    },
    {
        "id": 15,
        "question": "Which method finds the first element that satisfies a condition?",
        "options": {
            "A": "<pre>find()</pre>",
            "B": "<pre>filter()</pre>",
            "C": "<pre>search()</pre>",
            "D": "<pre>locate()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>find()</pre> method returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy, it returns <pre>undefined</pre>.",
        "topic": {
            "topics": [
                "Array searching and filtering"
            ]
        }
    },
    {
        "id": 16,
        "question": "What is the result of [CODE][1, 2, 3].reduce((a, b) => a + b, 0)[/CODE]?",
        "options": {
            "A": "<pre>6</pre>",
            "B": "<pre>[1, 2, 3]</pre>",
            "C": "<pre>'123'</pre>",
            "D": "<pre>0</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>reduce()</pre> method executes a reducer function on each element, resulting in a single output value. Here it sums all elements: 0 + 1 + 2 + 3 = 6. The second argument (0) is the initial value.",
        "topic": {
            "topics": [
                "Array iteration and transformation"
            ]
        }
    },
    {
        "id": 17,
        "question": "Which method checks if at least one element passes a test?",
        "options": {
            "A": "<pre>some()</pre>",
            "B": "<pre>every()</pre>",
            "C": "<pre>any()</pre>",
            "D": "<pre>includes()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>some()</pre> method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.",
        "topic": {
            "topics": [
                "Array searching and filtering"
            ]
        }
    },
    {
        "id": 18,
        "question": "What does [CODE]Array.isArray([1, 2, 3])[/CODE] return?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>[1, 2, 3]</pre>",
            "D": "<pre>3</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>Array.isArray()</pre> method determines whether the passed value is an Array. It's more reliable than <pre>typeof</pre> which returns 'object' for arrays.",
        "topic": {
            "topics": [
                "Array utility methods"
            ]
        }
    },
    {
        "id": 19,
        "question": "Which method removes, replaces, or adds elements at any position?",
        "options": {
            "A": "<pre>splice()</pre>",
            "B": "<pre>slice()</pre>",
            "C": "<pre>replace()</pre>",
            "D": "<pre>modify()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>splice()</pre> method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It's very versatile but modifies the original array.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 20,
        "question": "What is the result of [CODE][1, 2, 3].every(x => x > 0)[/CODE]?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>[1, 2, 3]</pre>",
            "D": "<pre>0</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>every()</pre> method tests whether all elements in the array pass the test implemented by the provided function. Since all numbers are greater than 0, it returns <pre>true</pre>.",
        "topic": {
            "topics": [
                "Array searching and filtering"
            ]
        }
    },
    {
        "id": 21,
        "question": "How do you create an array with 5 empty slots?",
        "options": {
            "A": "<pre>Array(5)</pre>",
            "B": "<pre>new Array(5)</pre>",
            "C": "<pre>[,,,,,]</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods create arrays with empty slots. <pre>Array(5)</pre> and <pre>new Array(5)</pre> create arrays with 5 empty slots, and <pre>[,,,,,]</pre> with 4 commas creates 5 empty slots (length 5).",
        "topic": {
            "topics": [
                "Array creation and initialization"
            ]
        }
    },
    {
        "id": 22,
        "question": "What does [CODE][1, 2, 3].findIndex(x => x > 1)[/CODE] return?",
        "options": {
            "A": "<pre>1</pre>",
            "B": "<pre>2</pre>",
            "C": "<pre>0</pre>",
            "D": "<pre>-1</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>findIndex()</pre> method returns the index of the first element that satisfies the provided testing function. The first element greater than 1 is 2 at index 1.",
        "topic": {
            "topics": [
                "Array searching and filtering"
            ]
        }
    },
    {
        "id": 23,
        "question": "Which method creates an array from array-like or iterable objects?",
        "options": {
            "A": "<pre>Array.from()</pre>",
            "B": "<pre>Array.of()</pre>",
            "C": "<pre>Array.create()</pre>",
            "D": "<pre>Array.make()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>Array.from()</pre> method creates a new, shallow-copied Array instance from an array-like or iterable object. It's useful for converting NodeLists, strings, or other iterables to arrays.",
        "topic": {
            "topics": [
                "Array creation and initialization"
            ]
        }
    },
    {
        "id": 24,
        "question": "What is the result of [CODE][1, 2, 3].flat()[/CODE]?",
        "options": {
            "A": "<pre>[1, 2, 3]</pre>",
            "B": "<pre>[[1, 2, 3]]</pre>",
            "C": "<pre>[1, [2, 3]]</pre>",
            "D": "<pre>6</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>flat()</pre> method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. Since the array is already flat, it returns the same array.",
        "topic": {
            "topics": [
                "Multi-dimensional arrays"
            ]
        }
    },
    {
        "id": 25,
        "question": "Which method executes a function once for each array element?",
        "options": {
            "A": "<pre>forEach()</pre>",
            "B": "<pre>map()</pre>",
            "C": "<pre>forLoop()</pre>",
            "D": "<pre>iterate()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>forEach()</pre> method executes a provided function once for each array element. Unlike <pre>map()</pre>, it doesn't return a new array and is used for side effects.",
        "topic": {
            "topics": [
                "Array iteration and transformation"
            ]
        }
    },
    {
        "id": 26,
        "question": "What does [CODE][1, 2].concat([3, 4])[/CODE] return?",
        "options": {
            "A": "<pre>[1, 2, 3, 4]</pre>",
            "B": "<pre>[1, 2]</pre>",
            "C": "<pre>[3, 4]</pre>",
            "D": "<pre>[[1, 2], [3, 4]]</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>concat()</pre> method returns a new array comprising the original array followed by the elements of the additional arrays. It doesn't modify the original arrays.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    },
    {
        "id": 27,
        "question": "How do you access the last element of an array?",
        "options": {
            "A": "<pre>arr[arr.length - 1]</pre>",
            "B": "<pre>arr.last()</pre>",
            "C": "<pre>arr[-1]</pre>",
            "D": "<pre>arr.getLast()</pre>"
        },
        "correct": "A",
        "explanation": "Since arrays are zero-indexed, the last element is at index <pre>length - 1</pre>. Using <pre>arr[arr.length]</pre> would return <pre>undefined</pre> since it's beyond the array bounds.",
        "topic": {
            "topics": [
                "Array utility methods"
            ]
        }
    },
    {
        "id": 28,
        "question": "What is the result of [CODE][1, 2, 3].toString()[/CODE]?",
        "options": {
            "A": "<pre>'1,2,3'</pre>",
            "B": "<pre>[1, 2, 3]</pre>",
            "C": "<pre>'123'</pre>",
            "D": "<pre>6</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>toString()</pre> method returns a string representing the specified array and its elements. It's the same as calling <pre>join()</pre> without arguments, which uses commas as separators.",
        "topic": {
            "topics": [
                "Array utility methods"
            ]
        }
    },
    {
        "id": 29,
        "question": "Which method creates an array from individual arguments?",
        "options": {
            "A": "<pre>Array.of()</pre>",
            "B": "<pre>Array.from()</pre>",
            "C": "<pre>Array.create()</pre>",
            "D": "<pre>Array.make()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>Array.of()</pre> method creates a new Array instance with a variable number of arguments, regardless of number or type. Unlike <pre>Array()</pre>, a single numeric argument creates an array with that element, not an empty array of that length.",
        "topic": {
            "topics": [
                "Array creation and initialization"
            ]
        }
    },
    {
        "id": 30,
        "question": "What does [CODE][1, 2, 3].fill(0)[/CODE] do?",
        "options": {
            "A": "Replaces all elements with 0",
            "B": "Adds 0 to the end",
            "C": "Adds 0 to the beginning",
            "D": "Filters out zeros"
        },
        "correct": "A",
        "explanation": "The <pre>fill()</pre> method changes all elements in an array to a static value, from a start index to an end index. Without arguments, it fills the entire array with the specified value.",
        "topic": {
            "topics": [
                "Array manipulation methods"
            ]
        }
    }
];

module.exports = { metadata, questions };