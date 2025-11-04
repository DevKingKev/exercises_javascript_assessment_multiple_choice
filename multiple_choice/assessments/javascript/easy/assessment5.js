// assessment5.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Data Structures & Algorithms",
    "description": "Core data structure operations, basic algorithm concepts, and problem-solving techniques in JavaScript. This assessment covers array manipulation, object operations, string processing, and foundational algorithm patterns commonly used in coding challenges and real-world applications.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Array manipulation and iteration",
        "Object property access and methods",
        "String processing and manipulation",
        "Sorting and searching basics",
        "Basic algorithm patterns",
        "Data structure fundamentals",
        "Problem-solving with built-in methods"
    ],
    "topicLinks": [
        {
            "topicName": "Array manipulation and iteration",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        },
        {
            "topicName": "Object property access and methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
        },
        {
            "topicName": "String processing and manipulation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
        },
        {
            "topicName": "Sorting and searching basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
        },
        {
            "topicName": "Basic algorithm patterns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
        },
        {
            "topicName": "Data structure fundamentals",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
        },
        {
            "topicName": "Problem-solving with built-in methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"
        }
    ],
    "assessmentId": 5,
    "assessmentUniqueId": 1730726400000,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the result of [CODE][1, 2, 3].map(x => x * 2)[/CODE]?",
        "options": {
            "A": "[1, 2, 3]",
            "B": "[2, 4, 6]",
            "C": "[1, 4, 9]",
            "D": "6"
        },
        "correct": "B",
        "explanation": "The map() method creates a new array by applying the given function to each element. Here, each element is multiplied by 2, resulting in [2, 4, 6].",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Basic algorithm patterns"
            ]
        }
    },
    {
        "id": 2,
        "question": "How do you get all the keys from an object?",
        "options": {
            "A": "Object.keys(obj)",
            "B": "obj.keys()",
            "C": "Object.getKeys(obj)",
            "D": "keys(obj)"
        },
        "correct": "A",
        "explanation": "Object.keys() returns an array of a given object's own property names (keys) in the same order as a normal loop would.",
        "topic": {
            "topics": [
                "Object property access and methods",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 3,
        "question": "What does [CODE]'hello world'.split(' ')[/CODE] return?",
        "options": {
            "A": "'helloworld'",
            "B": "['hello', 'world']",
            "C": "['h', 'e', 'l', 'l', 'o', ...]",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The split() method divides a string into an array of substrings. Using space as the separator, it returns ['hello', 'world'].",
        "topic": {
            "topics": [
                "String processing and manipulation",
                "Array manipulation and iteration"
            ]
        }
    },
    {
        "id": 4,
        "question": "Which method finds the position of the first occurrence of a value in an array?",
        "options": {
            "A": "find()",
            "B": "search()",
            "C": "indexOf()",
            "D": "position()"
        },
        "correct": "C",
        "explanation": "indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Sorting and searching basics"
            ]
        }
    },
    {
        "id": 5,
        "question": "What is the result of [CODE][5, 2, 8, 1].sort()[/CODE]?",
        "options": {
            "A": "[1, 2, 5, 8]",
            "B": "[8, 5, 2, 1]",
            "C": "[1, 2, 8, 5]",
            "D": "[5, 2, 8, 1]"
        },
        "correct": "A",
        "explanation": "By default, sort() converts elements to strings and sorts them lexicographically. For numbers, this gives [1, 2, 5, 8]. For custom sorting, pass a compare function.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Sorting and searching basics"
            ]
        }
    },
    {
        "id": 6,
        "question": "How do you check if an object has a specific property?",
        "options": {
            "A": "obj.hasProperty('key')",
            "B": "obj.has('key')",
            "C": "'key' in obj",
            "D": "obj.contains('key')"
        },
        "correct": "C",
        "explanation": "The 'in' operator returns true if the specified property is in the object or its prototype chain. You can also use obj.hasOwnProperty('key') to check only own properties.",
        "topic": {
            "topics": [
                "Object property access and methods",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 7,
        "question": "What does [CODE][1, 2, 3].reduce((a, b) => a + b, 0)[/CODE] return?",
        "options": {
            "A": "[1, 2, 3]",
            "B": "6",
            "C": "123",
            "D": "0"
        },
        "correct": "B",
        "explanation": "reduce() executes a reducer function on each array element, resulting in a single output value. Here it sums all elements: 0 + 1 + 2 + 3 = 6.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Basic algorithm patterns"
            ]
        }
    },
    {
        "id": 8,
        "question": "Which method removes duplicate values from an array?",
        "options": {
            "A": "array.unique()",
            "B": "array.removeDuplicates()",
            "C": "[...new Set(array)]",
            "D": "array.distinct()"
        },
        "correct": "C",
        "explanation": "Set is a collection of unique values. Converting an array to a Set removes duplicates, then spreading it back into an array gives you a unique array.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 9,
        "question": "What is the result of [CODE]'abc'.repeat(3)[/CODE]?",
        "options": {
            "A": "'abc'",
            "B": "'abcabcabc'",
            "C": "['abc', 'abc', 'abc']",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
        "topic": {
            "topics": [
                "String processing and manipulation"
            ]
        }
    },
    {
        "id": 10,
        "question": "How do you merge two arrays into one?",
        "options": {
            "A": "arr1.concat(arr2)",
            "B": "[...arr1, ...arr2]",
            "C": "arr1.merge(arr2)",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both concat() and the spread operator can merge arrays. concat() creates a new array, while spread syntax can be used in array literals.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Problem-solving with built-in methods"
            ]
        }
    },
    {
        "id": 11,
        "question": "What does [CODE]Object.values({a: 1, b: 2, c: 3})[/CODE] return?",
        "options": {
            "A": "['a', 'b', 'c']",
            "B": "[1, 2, 3]",
            "C": "{a: 1, b: 2, c: 3}",
            "D": "6"
        },
        "correct": "B",
        "explanation": "Object.values() returns an array of a given object's own enumerable property values in the same order as provided by a for...in loop.",
        "topic": {
            "topics": [
                "Object property access and methods",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 12,
        "question": "What is the result of [CODE]'JavaScript'.includes('Script')[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "1",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false.",
        "topic": {
            "topics": [
                "String processing and manipulation",
                "Sorting and searching basics"
            ]
        }
    },
    {
        "id": 13,
        "question": "Which method flattens a nested array by one level?",
        "options": {
            "A": "array.flatten()",
            "B": "array.flat()",
            "C": "array.merge()",
            "D": "array.reduce()"
        },
        "correct": "B",
        "explanation": "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth (default is 1).",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 14,
        "question": "What does [CODE][1, 2, 3, 4].filter(x => x % 2 === 0)[/CODE] return?",
        "options": {
            "A": "[1, 3]",
            "B": "[2, 4]",
            "C": "[1, 2, 3, 4]",
            "D": "true"
        },
        "correct": "B",
        "explanation": "filter() creates a new array with all elements that pass the test implemented by the provided function. Here it returns even numbers: [2, 4].",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Basic algorithm patterns"
            ]
        }
    },
    {
        "id": 15,
        "question": "How do you reverse a string in JavaScript?",
        "options": {
            "A": "str.reverse()",
            "B": "str.split('').reverse().join('')",
            "C": "reverse(str)",
            "D": "str.backwards()"
        },
        "correct": "B",
        "explanation": "Strings don't have a reverse() method. You must split into an array, reverse the array, then join back into a string.",
        "topic": {
            "topics": [
                "String processing and manipulation",
                "Array manipulation and iteration"
            ]
        }
    },
    {
        "id": 16,
        "question": "What is the result of [CODE][1, 2, 3].every(x => x > 0)[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "[1, 2, 3]",
            "D": "3"
        },
        "correct": "A",
        "explanation": "The every() method tests whether all elements in the array pass the test implemented by the provided function. All elements are greater than 0, so it returns true.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Basic algorithm patterns"
            ]
        }
    },
    {
        "id": 17,
        "question": "Which method creates a shallow copy of an object?",
        "options": {
            "A": "Object.assign({}, obj)",
            "B": "{...obj}",
            "C": "Object.clone(obj)",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both Object.assign() and the spread operator create shallow copies of objects. Note that nested objects are still referenced, not copied.",
        "topic": {
            "topics": [
                "Object property access and methods",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 18,
        "question": "What does [CODE]'hello'.padStart(8, '*')[/CODE] return?",
        "options": {
            "A": "'hello***'",
            "B": "'***hello'",
            "C": "'*hello*'",
            "D": "'hello'"
        },
        "correct": "B",
        "explanation": "padStart() pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length. It pads from the start.",
        "topic": {
            "topics": [
                "String processing and manipulation"
            ]
        }
    },
    {
        "id": 19,
        "question": "What is the result of [CODE][1, 2, 3].some(x => x > 2)[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "[3]",
            "D": "1"
        },
        "correct": "A",
        "explanation": "The some() method tests whether at least one element in the array passes the test. Since 3 is greater than 2, it returns true.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Basic algorithm patterns"
            ]
        }
    },
    {
        "id": 20,
        "question": "How do you convert an array to a string with a custom separator?",
        "options": {
            "A": "array.toString(separator)",
            "B": "array.join(separator)",
            "C": "array.concat(separator)",
            "D": "String(array, separator)"
        },
        "correct": "B",
        "explanation": "The join() method creates and returns a new string by concatenating all elements in an array, separated by the specified separator string.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "String processing and manipulation"
            ]
        }
    },
    {
        "id": 21,
        "question": "What does [CODE]Object.entries({a: 1, b: 2})[/CODE] return?",
        "options": {
            "A": "['a', 'b']",
            "B": "[1, 2]",
            "C": "[['a', 1], ['b', 2]]",
            "D": "{a: 1, b: 2}"
        },
        "correct": "C",
        "explanation": "Object.entries() returns an array of a given object's own enumerable property [key, value] pairs in the form of arrays.",
        "topic": {
            "topics": [
                "Object property access and methods",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 22,
        "question": "Which method finds the maximum value in an array?",
        "options": {
            "A": "array.max()",
            "B": "Math.max(...array)",
            "C": "array.maximum()",
            "D": "max(array)"
        },
        "correct": "B",
        "explanation": "Math.max() takes individual arguments, not an array. Use the spread operator to expand the array elements as individual arguments.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Problem-solving with built-in methods"
            ]
        }
    },
    {
        "id": 23,
        "question": "What is the result of [CODE]'a,b,c'.split(',').length[/CODE]?",
        "options": {
            "A": "2",
            "B": "3",
            "C": "5",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "split(',') creates an array ['a', 'b', 'c'], which has 3 elements, so length returns 3.",
        "topic": {
            "topics": [
                "String processing and manipulation",
                "Array manipulation and iteration"
            ]
        }
    },
    {
        "id": 24,
        "question": "How do you check if all elements in an array are unique?",
        "options": {
            "A": "array.isUnique()",
            "B": "new Set(array).size === array.length",
            "C": "array.unique() === array",
            "D": "Array.isUnique(array)"
        },
        "correct": "B",
        "explanation": "Convert the array to a Set (which only keeps unique values) and compare its size to the original array length. If they're equal, all elements were unique.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 25,
        "question": "What does [CODE][1, [2, [3]]].flat(2)[/CODE] return?",
        "options": {
            "A": "[1, 2, [3]]",
            "B": "[1, 2, 3]",
            "C": "[1, [2, 3]]",
            "D": "[[1, 2, 3]]"
        },
        "correct": "B",
        "explanation": "flat(2) flattens the array up to 2 levels deep. The nested structure [1, [2, [3]]] becomes [1, 2, 3] after flattening 2 levels.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Data structure fundamentals"
            ]
        }
    },
    {
        "id": 26,
        "question": "Which method removes falsy values from an array?",
        "options": {
            "A": "array.compact()",
            "B": "array.filter(Boolean)",
            "C": "array.clean()",
            "D": "array.removeFalsy()"
        },
        "correct": "B",
        "explanation": "filter(Boolean) removes all falsy values (false, null, 0, '', undefined, NaN) because Boolean() converts falsy values to false, which filter excludes.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Basic algorithm patterns"
            ]
        }
    },
    {
        "id": 27,
        "question": "What is the result of [CODE]'test'.startsWith('te')[/CODE]?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "0",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false.",
        "topic": {
            "topics": [
                "String processing and manipulation",
                "Sorting and searching basics"
            ]
        }
    },
    {
        "id": 28,
        "question": "How do you get the sum of all values in an object?",
        "options": {
            "A": "Object.sum(obj)",
            "B": "Object.values(obj).reduce((a, b) => a + b, 0)",
            "C": "obj.sum()",
            "D": "sum(Object.values(obj))"
        },
        "correct": "B",
        "explanation": "Get all values with Object.values(), then use reduce() to sum them. Start with 0 as the initial value to handle empty objects.",
        "topic": {
            "topics": [
                "Object property access and methods",
                "Basic algorithm patterns"
            ]
        }
    },
    {
        "id": 29,
        "question": "What does [CODE][1, 2, 2, 3].lastIndexOf(2)[/CODE] return?",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "-1"
        },
        "correct": "B",
        "explanation": "lastIndexOf() returns the last index at which a given element can be found in the array. The value 2 appears at indices 1 and 2; the last one is at index 2.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Sorting and searching basics"
            ]
        }
    },
    {
        "id": 30,
        "question": "Which expression creates an array of numbers from 1 to 5?",
        "options": {
            "A": "Array(5).fill().map((_, i) => i + 1)",
            "B": "[...Array(5)].map((_, i) => i + 1)",
            "C": "Array.from({length: 5}, (_, i) => i + 1)",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three approaches create an array of numbers 1 to 5. They each use different techniques to create and populate the array.",
        "topic": {
            "topics": [
                "Array manipulation and iteration",
                "Problem-solving with built-in methods"
            ]
        }
    }
];

module.exports = { metadata, questions };
