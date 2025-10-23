// Easy Multiple Choice Test #3 - JavaScript Methods & Operations
// Converted from easy_multiple_choice_3

const metadata = {
    title: "JavaScript Methods & Operations",
    description: "Mathematical operations, array methods, string methods, and function fundamentals",
    difficulty: "easy",
    timeLimit: 30, // minutes
    questionCount: 30,
    topics: [
        "Math object methods (Math.max, Math.min, Math.pow)",
        "Array methods (push, slice, reverse, sort, concat)",
        "String methods (slice, charAt, substring, indexOf)",
        "Function declaration and invocation",
        "Mathematical operations and precedence",
        "Array operations and manipulation",
        "String indexing and character access"
    ]
};

const questions = [
    {
        id: 1,
        question: "What does Math.max(5, 10, 3) return?",
        options: {
            A: "5",
            B: "10",
            C: "3",
            D: "18"
        },
        correct: "B",
        explanation: "Math.max() returns the largest of the given numbers. Among 5, 10, and 3, the largest is 10."
    },
    {
        id: 2,
        question: "Which method adds elements to the end of an array?",
        options: {
            A: "unshift()",
            B: "append()",
            C: "push()",
            D: "add()"
        },
        correct: "C",
        explanation: "push() adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
        id: 3,
        question: "What does 'hello'.charAt(1) return?",
        options: {
            A: "'h'",
            B: "'e'",
            C: "'l'",
            D: "'o'"
        },
        correct: "B",
        explanation: "charAt(1) returns the character at index 1. String indexing starts at 0, so index 1 in 'hello' is 'e'."
    },
    {
        id: 4,
        question: "What is the result of 2 * 3 + 4?",
        options: {
            A: "14",
            B: "10",
            C: "24",
            D: "9"
        },
        correct: "B",
        explanation: "Following order of operations (PEMDAS), multiplication happens before addition: 2 * 3 = 6, then 6 + 4 = 10."
    },
    {
        id: 5,
        question: "Which method creates a shallow copy of a portion of an array?",
        options: {
            A: "splice()",
            B: "slice()",
            C: "split()",
            D: "copy()"
        },
        correct: "B",
        explanation: "slice() returns a shallow copy of a portion of an array into a new array. splice() modifies the original array."
    },
    {
        id: 6,
        question: "What does Math.pow(2, 3) return?",
        options: {
            A: "5",
            B: "6",
            C: "8",
            D: "9"
        },
        correct: "C",
        explanation: "Math.pow(2, 3) calculates 2 to the power of 3, which is 2 * 2 * 2 = 8."
    },
    {
        id: 7,
        question: "How do you access the first character of a string 'test'?",
        options: {
            A: "test[0]",
            B: "test.charAt(0)",
            C: "test.first()",
            D: "Both A and B"
        },
        correct: "D",
        explanation: "Both test[0] and test.charAt(0) access the first character. charAt() is more traditional, bracket notation is newer but widely supported."
    },
    {
        id: 8,
        question: "What is the correct way to declare a function named 'myFunc'?",
        options: {
            A: "function myFunc() {}",
            B: "def myFunc() {}",
            C: "myFunc = function() {}",
            D: "Both A and C"
        },
        correct: "D",
        explanation: "Both function declaration (A) and function expression (C) are valid ways to create a function in JavaScript."
    },
    {
        id: 9,
        question: "Which method reverses the elements in an array?",
        options: {
            A: "reverse()",
            B: "backwards()",
            C: "flip()",
            D: "invert()"
        },
        correct: "A",
        explanation: "reverse() reverses an array in place. The first array element becomes the last, and the last becomes the first."
    },
    {
        id: 10,
        question: "What does 'hello'.substring(1, 3) return?",
        options: {
            A: "'el'",
            B: "'ell'",
            C: "'he'",
            D: "'h'"
        },
        correct: "A",
        explanation: "substring(1, 3) extracts characters from index 1 up to (but not including) index 3. In 'hello', this gives 'el'."
    },
    {
        id: 11,
        question: "What is the result of 10 / 2 * 3?",
        options: {
            A: "1.67",
            B: "15",
            C: "5",
            D: "6"
        },
        correct: "B",
        explanation: "Operations of equal precedence are evaluated left to right: 10 / 2 = 5, then 5 * 3 = 15."
    },
    {
        id: 12,
        question: "Which method finds the index of a substring in a string?",
        options: {
            A: "find()",
            B: "search()",
            C: "indexOf()",
            D: "locate()"
        },
        correct: "C",
        explanation: "indexOf() returns the index of the first occurrence of a substring. It returns -1 if the substring is not found."
    },
    {
        id: 13,
        question: "What does Math.min(8, 3, 15) return?",
        options: {
            A: "8",
            B: "3",
            C: "15",
            D: "26"
        },
        correct: "B",
        explanation: "Math.min() returns the smallest of the given numbers. Among 8, 3, and 15, the smallest is 3."
    },
    {
        id: 14,
        question: "How do you call a function named 'myFunction'?",
        options: {
            A: "call myFunction",
            B: "myFunction()",
            C: "run myFunction",
            D: "execute myFunction"
        },
        correct: "B",
        explanation: "Functions are called (invoked) by adding parentheses after the function name: myFunction(). Arguments go inside the parentheses."
    },
    {
        id: 15,
        question: "Which method joins two or more arrays?",
        options: {
            A: "merge()",
            B: "combine()",
            C: "concat()",
            D: "join()"
        },
        correct: "C",
        explanation: "concat() is used to merge two or more arrays. This method does not change the existing arrays, but returns a new array."
    },
    {
        id: 16,
        question: "What is the result of 5 + 3 * 2?",
        options: {
            A: "16",
            B: "11",
            C: "13",
            D: "10"
        },
        correct: "B",
        explanation: "Multiplication has higher precedence than addition: 3 * 2 = 6, then 5 + 6 = 11."
    },
    {
        id: 17,
        question: "What does 'JavaScript'.slice(0, 4) return?",
        options: {
            A: "'Java'",
            B: "'JavaScript'",
            C: "'Script'",
            D: "'J'"
        },
        correct: "A",
        explanation: "slice(0, 4) extracts characters from index 0 up to (but not including) index 4. This gives 'Java'."
    },
    {
        id: 18,
        question: "Which method sorts the elements of an array?",
        options: {
            A: "order()",
            B: "sort()",
            C: "arrange()",
            D: "organize()"
        },
        correct: "B",
        explanation: "sort() sorts the elements of an array in place and returns the sorted array. By default, it sorts as strings in ascending order."
    },
    {
        id: 19,
        question: "What is the length of the string 'coding'?",
        options: {
            A: "5",
            B: "6",
            C: "7",
            D: "4"
        },
        correct: "B",
        explanation: "The string 'coding' has 6 characters: c-o-d-i-n-g. The length property counts all characters including spaces."
    },
    {
        id: 20,
        question: "What does Math.floor(4.7) return?",
        options: {
            A: "4",
            B: "5",
            C: "4.7",
            D: "Error"
        },
        correct: "A",
        explanation: "Math.floor() returns the largest integer less than or equal to the given number. 4.7 floors down to 4."
    },
    {
        id: 21,
        question: "How do you access the last element of an array 'arr'?",
        options: {
            A: "arr[arr.length]",
            B: "arr[arr.length - 1]",
            C: "arr.last()",
            D: "arr[-1]"
        },
        correct: "B",
        explanation: "Array indexing starts at 0, so the last element is at index (length - 1). arr[arr.length] would be undefined."
    },
    {
        id: 22,
        question: "What is the result of 12 % 5?",
        options: {
            A: "2",
            B: "2.4",
            C: "7",
            D: "0"
        },
        correct: "A",
        explanation: "The modulus operator (%) returns the remainder. 12 divided by 5 is 2 remainder 2, so 12 % 5 = 2."
    },
    {
        id: 23,
        question: "Which method removes the first element from an array?",
        options: {
            A: "pop()",
            B: "shift()",
            C: "remove()",
            D: "delete()"
        },
        correct: "B",
        explanation: "shift() removes the first element from an array and returns that element. pop() removes the last element."
    },
    {
        id: 24,
        question: "What does 'hello'.toUpperCase() return?",
        options: {
            A: "'hello'",
            B: "'HELLO'",
            C: "'Hello'",
            D: "Error"
        },
        correct: "B",
        explanation: "toUpperCase() converts all characters in a string to uppercase letters. 'hello' becomes 'HELLO'."
    },
    {
        id: 25,
        question: "What is the result of (4 + 2) * 3?",
        options: {
            A: "10",
            B: "14",
            C: "18",
            D: "12"
        },
        correct: "C",
        explanation: "Parentheses have the highest precedence: (4 + 2) = 6, then 6 * 3 = 18."
    },
    {
        id: 26,
        question: "How do you get the number of elements in an array?",
        options: {
            A: "array.size",
            B: "array.length",
            C: "array.count",
            D: "array.elements"
        },
        correct: "B",
        explanation: "The length property returns the number of elements in an array. This is a fundamental property of JavaScript arrays."
    },
    {
        id: 27,
        question: "What does Math.ceil(3.2) return?",
        options: {
            A: "3",
            B: "4",
            C: "3.2",
            D: "Error"
        },
        correct: "B",
        explanation: "Math.ceil() returns the smallest integer greater than or equal to the given number. 3.2 ceils up to 4."
    },
    {
        id: 28,
        question: "Which operator is used for string concatenation?",
        options: {
            A: "&",
            B: "+",
            C: "++",
            D: "."
        },
        correct: "B",
        explanation: "The + operator is used for both addition and string concatenation in JavaScript. When used with strings, it concatenates them."
    },
    {
        id: 29,
        question: "What does [1, 2, 3].indexOf(2) return?",
        options: {
            A: "2",
            B: "1",
            C: "0",
            D: "-1"
        },
        correct: "B",
        explanation: "indexOf() returns the index of the first occurrence of the element. The value 2 is at index 1 in the array [1, 2, 3]."
    },
    {
        id: 30,
        question: "What is the result of 15 - 3 * 2?",
        options: {
            A: "24",
            B: "9",
            C: "21",
            D: "12"
        },
        correct: "B",
        explanation: "Multiplication has higher precedence than subtraction: 3 * 2 = 6, then 15 - 6 = 9."
    }
];

module.exports = { metadata, questions };