// assessment13.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Array Fundamentals",
    "description": "Core array concepts, basic operations, and essential methods for working with arrays in JavaScript. This assessment covers foundational array knowledge that every JavaScript developer should master.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Array basics and properties",
        "Element access and modification",
        "Array comparison and equality",
        "Empty arrays and sparse arrays",
        "Array-like objects conversion",
        "Basic array patterns",
        "Array method chaining"
    ],
    "topicLinks": [
        {
            "topicName": "Array basics and properties",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        },
        {
            "topicName": "Element access and modification",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements"
        },
        {
            "topicName": "Array comparison and equality",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness"
        },
        {
            "topicName": "Empty arrays and sparse arrays",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays"
        },
        {
            "topicName": "Array-like objects conversion",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#array_from_an_array-like_object"
        },
        {
            "topicName": "Basic array patterns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections"
        },
        {
            "topicName": "Array method chaining",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"
        }
    ],
    "assessmentId": 13,
    "assessmentUniqueId": 1730726408000,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the result of [CODE]typeof []?[/CODE]",
        "options": {
            "A": "<pre>'object'</pre>",
            "B": "<pre>'array'</pre>",
            "C": "<pre>'undefined'</pre>",
            "D": "<pre>'list'</pre>"
        },
        "correct": "A",
        "explanation": "In JavaScript, arrays are a type of object, so <pre>typeof []</pre> returns <pre>'object'</pre>. To specifically check if something is an array, use <pre>Array.isArray()</pre>.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 2,
        "question": "How do you check if an array is empty?",
        "options": {
            "A": "<pre>arr.length === 0</pre>",
            "B": "<pre>arr.isEmpty()</pre>",
            "C": "<pre>arr === []</pre>",
            "D": "<pre>!arr</pre>"
        },
        "correct": "A",
        "explanation": "The most reliable way to check if an array is empty is by checking if its <pre>length</pre> property equals 0. Comparing with <pre>[]</pre> doesn't work because arrays are reference types.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 3,
        "question": "What does [CODE][1, 2] === [1, 2][/CODE] return?",
        "options": {
            "A": "<pre>false</pre>",
            "B": "<pre>true</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Arrays are reference types in JavaScript. Even though both arrays contain the same values, they are different objects in memory, so strict equality returns <pre>false</pre>.",
        "topic": {
            "topics": [
                "Array comparison and equality"
            ]
        }
    },
    {
        "id": 4,
        "question": "Which method converts an array-like object to a real array?",
        "options": {
            "A": "<pre>Array.from()</pre>",
            "B": "<pre>Array.toArray()</pre>",
            "C": "<pre>Object.toArray()</pre>",
            "D": "<pre>array()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>Array.from()</pre> creates a new Array instance from an array-like or iterable object. This is useful for converting NodeLists, arguments objects, or strings to arrays.",
        "topic": {
            "topics": [
                "Array-like objects conversion"
            ]
        }
    },
    {
        "id": 5,
        "question": "What is the value of [CODE][1, , 3][1][/CODE]?",
        "options": {
            "A": "<pre>undefined</pre>",
            "B": "<pre>null</pre>",
            "C": "<pre>2</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "When an array has empty slots (sparse arrays), accessing those slots returns <pre>undefined</pre>. However, the slot is not actually assigned the value <pre>undefined</pre> - it's truly empty.",
        "topic": {
            "topics": [
                "Empty arrays and sparse arrays"
            ]
        }
    },
    {
        "id": 6,
        "question": "How do you create an array with numbers 1 through 5?",
        "options": {
            "A": "<pre>Array.from({length: 5}, (_, i) => i + 1)</pre>",
            "B": "<pre>[1, 2, 3, 4, 5]</pre>",
            "C": "<pre>Array(5).fill().map((_, i) => i + 1)</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods create arrays with numbers 1 through 5. The first two are more explicit, while the third uses array methods to generate the sequence programmatically.",
        "topic": {
            "topics": [
                "Basic array patterns"
            ]
        }
    },
    {
        "id": 7,
        "question": "What does [CODE]Array(3)[/CODE] create?",
        "options": {
            "A": "An array with 3 empty slots",
            "B": "An array with [3]",
            "C": "An array with [0, 1, 2]",
            "D": "An array with [1, 2, 3]"
        },
        "correct": "A",
        "explanation": "When a single number is passed to the Array constructor, it creates an array with that many empty slots, not an array containing that number.",
        "topic": {
            "topics": [
                "Empty arrays and sparse arrays"
            ]
        }
    },
    {
        "id": 8,
        "question": "Which method chain removes duplicates from an array?",
        "options": {
            "A": "<pre>[...new Set(arr)]</pre>",
            "B": "<pre>arr.filter().map()</pre>",
            "C": "<pre>arr.reduce().concat()</pre>",
            "D": "<pre>arr.sort().unique()</pre>"
        },
        "correct": "A",
        "explanation": "Using a Set is the most efficient way to remove duplicates. Sets only store unique values, and spreading it back into an array creates a duplicate-free array.",
        "topic": {
            "topics": [
                "Array method chaining"
            ]
        }
    },
    {
        "id": 9,
        "question": "What is the result of [CODE][1, 2, 3][10][/CODE]?",
        "options": {
            "A": "<pre>undefined</pre>",
            "B": "<pre>null</pre>",
            "C": "<pre>10</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "When accessing an index that doesn't exist in an array, JavaScript returns <pre>undefined</pre>. It doesn't throw an error for out-of-bounds access.",
        "topic": {
            "topics": [
                "Element access and modification"
            ]
        }
    },
    {
        "id": 10,
        "question": "How do you get the sum of all numbers in an array?",
        "options": {
            "A": "<pre>arr.reduce((a, b) => a + b, 0)</pre>",
            "B": "<pre>arr.sum()</pre>",
            "C": "<pre>Array.sum(arr)</pre>",
            "D": "<pre>arr.addAll()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>reduce()</pre> method is the standard way to accumulate values in an array. Starting with 0 ensures empty arrays return 0 instead of undefined.",
        "topic": {
            "topics": [
                "Array method chaining"
            ]
        }
    },
    {
        "id": 11,
        "question": "What does [CODE][1, 2, 3].constructor[/CODE] return?",
        "options": {
            "A": "<pre>function Array()</pre>",
            "B": "<pre>function Object()</pre>",
            "C": "<pre>'array'</pre>",
            "D": "<pre>undefined</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>constructor</pre> property returns a reference to the Array constructor function that created the instance object.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 12,
        "question": "Which method creates the array [1, 2, 3] from individual numbers?",
        "options": {
            "A": "<pre>Array.of(1, 2, 3)</pre>",
            "B": "<pre>Array(1, 2, 3)</pre>",
            "C": "<pre>new Array(1, 2, 3)</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods create arrays with the specified elements when multiple arguments are provided. <pre>Array.of()</pre> is most explicit about its behavior.",
        "topic": {
            "topics": [
                "Basic array patterns"
            ]
        }
    },
    {
        "id": 13,
        "question": "What is the result of [CODE][] == []?[/CODE]",
        "options": {
            "A": "<pre>false</pre>",
            "B": "<pre>true</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Even empty arrays are different objects in memory, so they are not equal by reference. Array comparison requires checking each element individually.",
        "topic": {
            "topics": [
                "Array comparison and equality"
            ]
        }
    },
    {
        "id": 14,
        "question": "How do you convert a string of numbers to an array of numbers?",
        "options": {
            "A": "<pre>'1,2,3'.split(',').map(Number)</pre>",
            "B": "<pre>Array.from('1,2,3')</pre>",
            "C": "<pre>'1,2,3'.toArray()</pre>",
            "D": "<pre>Number('1,2,3')</pre>"
        },
        "correct": "A",
        "explanation": "First split the string into an array of strings, then map each string to a number using the Number constructor.",
        "topic": {
            "topics": [
                "Array-like objects conversion"
            ]
        }
    },
    {
        "id": 15,
        "question": "What does [CODE][1, 2, 3][1] = 4[/CODE] do?",
        "options": {
            "A": "Changes the array to [1, 4, 3]",
            "B": "Creates a new array [1, 4, 3]",
            "C": "Returns 4",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "Array elements can be modified directly using bracket notation. This mutates the original array by changing the element at index 1 to 4.",
        "topic": {
            "topics": [
                "Element access and modification"
            ]
        }
    },
    {
        "id": 16,
        "question": "Which method checks if any element is truthy?",
        "options": {
            "A": "<pre>arr.some(Boolean)</pre>",
            "B": "<pre>arr.every(Boolean)</pre>",
            "C": "<pre>arr.includes(true)</pre>",
            "D": "<pre>arr.hasTruthy()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>some(Boolean)</pre> checks if at least one element is truthy. <pre>Boolean</pre> is a function that converts values to their boolean equivalents.",
        "topic": {
            "topics": [
                "Array method chaining"
            ]
        }
    },
    {
        "id": 17,
        "question": "What is the result of [CODE][1, 2] + [3, 4][/CODE]?",
        "options": {
            "A": "<pre>'1,23,4'</pre>",
            "B": "<pre>[1, 2, 3, 4]</pre>",
            "C": "<pre>10</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "When using the + operator with arrays, they are converted to strings and concatenated. <pre>[1, 2]</pre> becomes '1,2' and <pre>[3, 4]</pre> becomes '3,4', resulting in '1,23,4'.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 18,
        "question": "How do you create a two-dimensional array?",
        "options": {
            "A": "<pre>[[1, 2], [3, 4]]</pre>",
            "B": "<pre>Array.of([1, 2], [3, 4])</pre>",
            "C": "<pre>new Array([1, 2], [3, 4])</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods create two-dimensional arrays (arrays of arrays). The array literal syntax is most commonly used for readability.",
        "topic": {
            "topics": [
                "Basic array patterns"
            ]
        }
    },
    {
        "id": 19,
        "question": "What does [CODE]Array.isArray(Array.prototype)[/CODE] return?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "<pre>Array.prototype</pre> is itself an array (though empty), so <pre>Array.isArray()</pre> returns <pre>true</pre>.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 20,
        "question": "Which method chain filters even numbers and doubles them?",
        "options": {
            "A": "<pre>arr.filter(x => x % 2 === 0).map(x => x * 2)</pre>",
            "B": "<pre>arr.map(x => x * 2).filter(x => x % 2 === 0)</pre>",
            "C": "<pre>arr.reduce().filter()</pre>",
            "D": "<pre>arr.even().double()</pre>"
        },
        "correct": "A",
        "explanation": "First filter to get only even numbers, then map to double them. Doing map first would double all numbers, making odd numbers even and confusing the filter.",
        "topic": {
            "topics": [
                "Array method chaining"
            ]
        }
    },
    {
        "id": 21,
        "question": "What is the value of [CODE][1, 2, 3]['length'][/CODE]?",
        "options": {
            "A": "<pre>3</pre>",
            "B": "<pre>'length'</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "Arrays are objects, and properties can be accessed using bracket notation with string keys. <pre>'length'</pre> is a valid property name that returns the array length.",
        "topic": {
            "topics": [
                "Element access and modification"
            ]
        }
    },
    {
        "id": 22,
        "question": "How do you check if two arrays have the same elements?",
        "options": {
            "A": "Compare lengths and each element",
            "B": "<pre>arr1 === arr2</pre>",
            "C": "<pre>arr1 == arr2</pre>",
            "D": "<pre>Array.equals(arr1, arr2)</pre>"
        },
        "correct": "A",
        "explanation": "There's no built-in method for deep array comparison. You need to check if lengths match and each corresponding element is equal (using strict equality for primitives).",
        "topic": {
            "topics": [
                "Array comparison and equality"
            ]
        }
    },
    {
        "id": 23,
        "question": "What does [CODE][1, 2, 3].push(4)[/CODE] return?",
        "options": {
            "A": "<pre>4</pre>",
            "B": "<pre>[1, 2, 3, 4]</pre>",
            "C": "<pre>true</pre>",
            "D": "<pre>undefined</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>push()</pre> method returns the new length of the array after adding the elements, not the modified array.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 24,
        "question": "Which method creates an array from function arguments?",
        "options": {
            "A": "<pre>Array.from(arguments)</pre>",
            "B": "<pre>[...arguments]</pre>",
            "C": "<pre>Array.prototype.slice.call(arguments)</pre>",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "All three methods convert the arguments object to a real array. The first two are modern approaches, while the third is the traditional method.",
        "topic": {
            "topics": [
                "Array-like objects conversion"
            ]
        }
    },
    {
        "id": 25,
        "question": "What is the result of [CODE][1, 2, 3].unshift(0)[/CODE]?",
        "options": {
            "A": "<pre>4</pre>",
            "B": "<pre>[0, 1, 2, 3]</pre>",
            "C": "<pre>0</pre>",
            "D": "<pre>true</pre>"
        },
        "correct": "A",
        "explanation": "Like <pre>push()</pre>, <pre>unshift()</pre> returns the new length of the array after adding elements to the beginning.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 26,
        "question": "How do you get the maximum value from an array of numbers?",
        "options": {
            "A": "<pre>Math.max(...arr)</pre>",
            "B": "<pre>arr.max()</pre>",
            "C": "<pre>Array.max(arr)</pre>",
            "D": "<pre>arr.reduce((a, b) => Math.max(a, b))</pre>"
        },
        "correct": "A",
        "explanation": "<pre>Math.max()</pre> with the spread operator is the most concise way. <pre>Math.max</pre> expects individual arguments, not an array.",
        "topic": {
            "topics": [
                "Array method chaining"
            ]
        }
    },
    {
        "id": 27,
        "question": "What does [CODE][1, 2, 3].splice(1, 1)[/CODE] return?",
        "options": {
            "A": "<pre>[2]</pre>",
            "B": "<pre>[1, 3]</pre>",
            "C": "<pre>2</pre>",
            "D": "<pre>1</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>splice()</pre> method returns an array containing the deleted elements. Here it removes one element at index 1 (value 2), so it returns <pre>[2]</pre>.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 28,
        "question": "Which method creates an array without modifying the original?",
        "options": {
            "A": "<pre>slice()</pre>",
            "B": "<pre>splice()</pre>",
            "C": "<pre>reverse()</pre>",
            "D": "<pre>sort()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>slice()</pre> returns a shallow copy without modifying the original. <pre>splice()</pre>, <pre>reverse()</pre>, and <pre>sort()</pre> all modify the original array.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 29,
        "question": "What is the result of [CODE][1, 2, 3].concat()[/CODE]?",
        "options": {
            "A": "<pre>[1, 2, 3]</pre>",
            "B": "<pre>[]</pre>",
            "C": "<pre>3</pre>",
            "D": "<pre>undefined</pre>"
        },
        "correct": "A",
        "explanation": "Calling <pre>concat()</pre> with no arguments returns a shallow copy of the original array. This is a common way to clone arrays.",
        "topic": {
            "topics": [
                "Array basics and properties"
            ]
        }
    },
    {
        "id": 30,
        "question": "How do you check if an array contains only numbers?",
        "options": {
            "A": "<pre>arr.every(x => typeof x === 'number')</pre>",
            "B": "<pre>arr.isNumeric()</pre>",
            "C": "<pre>Array.isNumeric(arr)</pre>",
            "D": "<pre>arr.filter(Number).length === arr.length</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>every()</pre> method checks if all elements pass a test. Here it checks if each element's type is 'number'. This correctly identifies <pre>NaN</pre> as a number type.",
        "topic": {
            "topics": [
                "Array validation and checking"
            ]
        }
    }
];

module.exports = { metadata, questions };