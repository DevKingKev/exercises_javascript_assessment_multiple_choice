// Question bank for easy level assessment
const questions = [
    {
        id: 1,
        title: "First Reverse",
        description: "Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.",
        examples: [
            "FirstReverse('hello') should return 'olleh'",
            "FirstReverse('world') should return 'dlrow'"
        ],
        functionName: "FirstReverse",
        testCases: [
            { input: ["hello"], expected: "olleh" },
            { input: ["world"], expected: "dlrow" },
            { input: ["a"], expected: "a" },
            { input: [""], expected: "" },
            { input: ["12345"], expected: "54321" }
        ],
        solution: `function FirstReverse(str) {
    return str.split('').reverse().join('');
}`,
        explanation: "The most straightforward approach is to split the string into an array of characters, reverse the array, and join it back into a string. This uses JavaScript's built-in methods for a clean solution."
    },
    {
        id: 2,
        title: "First Factorial",
        description: "Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of that number.",
        examples: [
            "FirstFactorial(4) should return 24",
            "FirstFactorial(8) should return 40320"
        ],
        functionName: "FirstFactorial",
        testCases: [
            { input: [4], expected: 24 },
            { input: [8], expected: 40320 },
            { input: [1], expected: 1 },
            { input: [0], expected: 1 },
            { input: [5], expected: 120 }
        ],
        solution: `function FirstFactorial(num) {
    if (num <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}`,
        explanation: "Factorial is calculated by multiplying all positive integers up to the given number. Handle edge cases (0 and 1) first, then use a loop to multiply all numbers from 2 to num."
    },
    {
        id: 3,
        title: "Longest Word",
        description: "Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.",
        examples: [
            "LongestWord('fun&!! time') should return 'time'",
            "LongestWord('I love dogs') should return 'love'"
        ],
        functionName: "LongestWord",
        testCases: [
            { input: ["fun&!! time"], expected: "time" },
            { input: ["I love dogs"], expected: "love" },
            { input: ["a beautiful day"], expected: "beautiful" },
            { input: ["hello world!"], expected: "hello" },
            { input: ["one two three four"], expected: "three" }
        ],
        solution: `function LongestWord(sen) {
    // Remove punctuation and split by spaces
    const words = sen.replace(/[^a-zA-Z0-9 ]/g, '').split(' ');
    let longest = '';
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}`,
        explanation: "First, clean the string by removing punctuation using regex, then split into words. Iterate through each word and keep track of the longest one found so far."
    },
    {
        id: 4,
        title: "Letter Changes",
        description: "Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm: replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and return this modified string.",
        examples: [
            "LetterChanges('hello*3') should return 'Ifmmp*3'",
            "LetterChanges('fun times!') should return 'gvO UjnfT!'"
        ],
        functionName: "LetterChanges",
        testCases: [
            { input: ["hello*3"], expected: "Ifmmp*3" },
            { input: ["fun times!"], expected: "gvO UjnfT!" },
            { input: [""], expected: "" },
            { input: ["xyz"], expected: "yzA" },
            { input: ["123abc"], expected: "123bcd" }
        ],
        solution: `function LetterChanges(str) {
    let result = '';
    const vowels = 'aeiou';
    
    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            let nextChar = char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
            result += vowels.includes(nextChar) ? nextChar.toUpperCase() : nextChar;
        } else if (char >= 'A' && char <= 'Z') {
            let nextChar = char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
            result += vowels.includes(nextChar.toLowerCase()) ? nextChar : nextChar;
        } else {
            result += char;
        }
    }
    
    return result;
}`,
        explanation: "For each character, check if it's a letter. If so, move to the next letter in the alphabet (z wraps to a). Then check if the new letter is a vowel and capitalize it if needed. Non-letters remain unchanged."
    },
    {
        id: 5,
        title: "Simple Adding",
        description: "Have the function SimpleAdding(num) add up all the numbers from 1 to num.",
        examples: [
            "SimpleAdding(12) should return 78",
            "SimpleAdding(4) should return 10"
        ],
        functionName: "SimpleAdding",
        testCases: [
            { input: [12], expected: 78 },
            { input: [4], expected: 10 },
            { input: [1], expected: 1 },
            { input: [0], expected: 0 },
            { input: [10], expected: 55 }
        ],
        solution: `function SimpleAdding(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}`,
        explanation: "Use a simple loop to add all numbers from 1 to num. Alternatively, you could use the formula: num * (num + 1) / 2 for a more efficient O(1) solution."
    },
    {
        id: 6,
        title: "Letter Capitalize",
        description: "Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.",
        examples: [
            "LetterCapitalize('hello world') should return 'Hello World'",
            "LetterCapitalize('i ran there') should return 'I Ran There'"
        ],
        functionName: "LetterCapitalize",
        testCases: [
            { input: ["hello world"], expected: "Hello World" },
            { input: ["i ran there"], expected: "I Ran There" },
            { input: ["a"], expected: "A" },
            { input: [""], expected: "" },
            { input: ["the quick brown fox"], expected: "The Quick Brown Fox" }
        ],
        solution: `function LetterCapitalize(str) {
    return str.split(' ').map(word => {
        if (word.length === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}`,
        explanation: "Split the string by spaces to get individual words, capitalize the first letter of each word using toUpperCase() and slice(), then join the words back together with spaces."
    },
    {
        id: 7,
        title: "Simple Symbols",
        description: "Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.",
        examples: [
            "SimpleSymbols('+d+=3=+s+') should return true",
            "SimpleSymbols('f++d+') should return false"
        ],
        functionName: "SimpleSymbols",
        testCases: [
            { input: ["+d+=3=+s+"], expected: true },
            { input: ["f++d+"], expected: false },
            { input: ["+a+"], expected: true },
            { input: ["a+b"], expected: false },
            { input: ["+"], expected: true }
        ],
        solution: `function SimpleSymbols(str) {
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            // Check if letter has + before and after
            if (i === 0 || str[i-1] !== '+' || i === str.length - 1 || str[i+1] !== '+') {
                return false;
            }
        }
    }
    return true;
}`,
        explanation: "Iterate through each character and when you find a letter, check that it has a '+' symbol both before and after it. If any letter doesn't meet this condition, return false."
    },
    {
        id: 8,
        title: "Check Nums",
        description: "Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameters are equal to each other then return the string -1.",
        examples: [
            "CheckNums(3,122) should return 'true'",
            "CheckNums(67,67) should return '-1'"
        ],
        functionName: "CheckNums",
        testCases: [
            { input: [3, 122], expected: "true" },
            { input: [67, 67], expected: "-1" },
            { input: [5, 4], expected: "false" },
            { input: [0, 1], expected: "true" },
            { input: [10, 5], expected: "false" }
        ],
        solution: `function CheckNums(num1, num2) {
    if (num2 > num1) {
        return "true";
    } else if (num1 === num2) {
        return "-1";
    } else {
        return "false";
    }
}`,
        explanation: "Simple conditional logic: if num2 > num1 return 'true', if they're equal return '-1', otherwise return 'false'. Note that the return values are strings, not booleans."
    },
    {
        id: 9,
        title: "Time Convert",
        description: "Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3).",
        examples: [
            "TimeConvert(63) should return '1:3'",
            "TimeConvert(45) should return '0:45'"
        ],
        functionName: "TimeConvert",
        testCases: [
            { input: [63], expected: "1:3" },
            { input: [45], expected: "0:45" },
            { input: [120], expected: "2:0" },
            { input: [0], expected: "0:0" },
            { input: [125], expected: "2:5" }
        ],
        solution: `function TimeConvert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return hours + ':' + minutes;
}`,
        explanation: "Divide the total minutes by 60 to get hours (using Math.floor for whole numbers), and use the modulo operator (%) to get the remaining minutes."
    },
    {
        id: 10,
        title: "Alphabet Soup",
        description: "Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo).",
        examples: [
            "AlphabetSoup('hello') should return 'ehllo'",
            "AlphabetSoup('world') should return 'dlorw'"
        ],
        functionName: "AlphabetSoup",
        testCases: [
            { input: ["hello"], expected: "ehllo" },
            { input: ["world"], expected: "dlorw" },
            { input: ["a"], expected: "a" },
            { input: [""], expected: "" },
            { input: ["dcba"], expected: "abcd" }
        ],
        solution: `function AlphabetSoup(str) {
    return str.split('').sort().join('');
}`,
        explanation: "Split the string into an array of characters, sort them alphabetically using the sort() method, then join them back into a string."
    },
    {
        id: 11,
        title: "AB Check",
        description: "Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once, otherwise return the string false.",
        examples: [
            "ABCheck('after badly') should return 'true'",
            "ABCheck('Laura sobs') should return 'true'"
        ],
        functionName: "ABCheck",
        testCases: [
            { input: ["after badly"], expected: "true" },
            { input: ["Laura sobs"], expected: "true" },
            { input: ["hello world"], expected: "false" },
            { input: ["a123b"], expected: "true" },
            { input: ["ab"], expected: "false" }
        ],
        solution: `function ABCheck(str) {
    for (let i = 0; i < str.length - 4; i++) {
        if ((str[i] === 'a' && str[i + 4] === 'b') || 
            (str[i] === 'b' && str[i + 4] === 'a')) {
            return "true";
        }
    }
    return "false";
}`,
        explanation: "Check each position in the string to see if there's an 'a' or 'b' with the other letter exactly 4 positions away (3 characters in between). Return 'true' if found, 'false' otherwise."
    },
    {
        id: 12,
        title: "Vowel Count",
        description: "Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. All vowels excluding y).",
        examples: [
            "VowelCount('hello') should return 2",
            "VowelCount('coderbyte') should return 4"
        ],
        functionName: "VowelCount",
        testCases: [
            { input: ["hello"], expected: 2 },
            { input: ["coderbyte"], expected: 4 },
            { input: [""], expected: 0 },
            { input: ["xyz"], expected: 0 },
            { input: ["aeiou"], expected: 5 }
        ],
        solution: `function VowelCount(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}`,
        explanation: "Define a string containing all vowels (both lowercase and uppercase), then iterate through each character in the input string and count how many are vowels."
    },
    {
        id: 13,
        title: "Word Count",
        description: "Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. 'Never eat shredded wheat' would return 4).",
        examples: [
            "WordCount('Never eat shredded wheat') should return 4",
            "WordCount('Hello World') should return 2"
        ],
        functionName: "WordCount",
        testCases: [
            { input: ["Never eat shredded wheat"], expected: 4 },
            { input: ["Hello World"], expected: 2 },
            { input: [""], expected: 0 },
            { input: ["word"], expected: 1 },
            { input: ["  multiple   spaces  "], expected: 2 }
        ],
        solution: `function WordCount(str) {
    if (str.trim() === '') return 0;
    return str.trim().split(/\\s+/).length;
}`,
        explanation: "First check if the string is empty after trimming whitespace. Then split by one or more whitespace characters using regex \\s+ and return the length of the resulting array."
    },
    {
        id: 14,
        title: "Ex Oh",
        description: "Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false.",
        examples: [
            "ExOh('xooxxo') should return 'true'",
            "ExOh('x') should return 'false'"
        ],
        functionName: "ExOh",
        testCases: [
            { input: ["xooxxo"], expected: "true" },
            { input: ["x"], expected: "false" },
            { input: [""], expected: "true" },
            { input: ["xxoo"], expected: "true" },
            { input: ["xoxo"], expected: "true" }
        ],
        solution: `function ExOh(str) {
    let xCount = 0;
    let oCount = 0;
    
    for (let char of str) {
        if (char === 'x') xCount++;
        if (char === 'o') oCount++;
    }
    
    return xCount === oCount ? "true" : "false";
}`,
        explanation: "Count the number of 'x' and 'o' characters in the string, then return 'true' if they're equal, 'false' otherwise. Empty string returns 'true' since 0 equals 0."
    },
    {
        id: 15,
        title: "Palindrome",
        description: "Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.",
        examples: [
            "Palindrome('never odd or even') should return 'true'",
            "Palindrome('eye') should return 'true'"
        ],
        functionName: "Palindrome",
        testCases: [
            { input: ["never odd or even"], expected: "true" },
            { input: ["eye"], expected: "true" },
            { input: ["hello"], expected: "false" },
            { input: ["racecar"], expected: "true" },
            { input: ["A man a plan a canal Panama"], expected: "true" }
        ],
        solution: `function Palindrome(str) {
    // Remove spaces and convert to lowercase
    const cleaned = str.replace(/\\s/g, '').toLowerCase();
    
    // Compare with reversed version
    const reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed ? "true" : "false";
}`,
        explanation: "Remove all spaces and convert to lowercase to handle cases like 'A man a plan a canal Panama'. Then compare the cleaned string with its reverse."
    },
    {
        id: 16,
        title: "Arith Geo",
        description: "Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string 'Arithmetic' if the sequence follows an arithmetic pattern or 'Geometric' if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.",
        examples: [
            "ArithGeo([2,4,6,8]) should return 'Arithmetic'",
            "ArithGeo([2,6,18,54]) should return 'Geometric'"
        ],
        functionName: "ArithGeo",
        testCases: [
            { input: [[2, 4, 6, 8]], expected: "Arithmetic" },
            { input: [[2, 6, 18, 54]], expected: "Geometric" },
            { input: [[1, 2, 4, 7]], expected: "-1" },
            { input: [[5, 10, 15, 20]], expected: "Arithmetic" },
            { input: [[3, 9, 27, 81]], expected: "Geometric" }
        ],
        solution: `function ArithGeo(arr) {
    if (arr.length < 2) return "-1";
    
    // Check arithmetic
    const diff = arr[1] - arr[0];
    let isArithmetic = true;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== diff) {
            isArithmetic = false;
            break;
        }
    }
    
    if (isArithmetic) return "Arithmetic";
    
    // Check geometric
    if (arr[0] === 0) return "-1";
    const ratio = arr[1] / arr[0];
    let isGeometric = true;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i-1] === 0 || arr[i] / arr[i-1] !== ratio) {
            isGeometric = false;
            break;
        }
    }
    
    return isGeometric ? "Geometric" : "-1";
}`,
        explanation: "First check if the sequence is arithmetic by verifying all consecutive differences are the same. If not, check if it's geometric by verifying all consecutive ratios are the same. Handle edge cases like division by zero."
    },
    {
        id: 17,
        title: "Array Addition I",
        description: "Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false.",
        examples: [
            "ArrayAdditionI([4,6,23,10,1,3]) should return 'true'",
            "ArrayAdditionI([5,7,16,1,2]) should return 'false'"
        ],
        functionName: "ArrayAdditionI",
        testCases: [
            { input: [[4, 6, 23, 10, 1, 3]], expected: "true" },
            { input: [[5, 7, 16, 1, 2]], expected: "false" },
            { input: [[3, 5, -1, 8, 12]], expected: "true" },
            { input: [[1, 2, 3, 4]], expected: "false" },
            { input: [[2, 3, 5]], expected: "true" }
        ],
        solution: `function ArrayAdditionI(arr) {
    // Find the largest number
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    
    // Remove the largest number from array
    const remaining = arr.filter((_, i) => i !== index);
    
    // Check if any subset sums to max
    function canSum(index, currentSum) {
        if (currentSum === max) return true;
        if (index >= remaining.length || currentSum > max) return false;
        
        // Include current number or skip it
        return canSum(index + 1, currentSum + remaining[index]) || 
               canSum(index + 1, currentSum);
    }
    
    return canSum(0, 0) ? "true" : "false";
}`,
        explanation: "Find the largest number and remove it from the array. Then use recursion to check if any subset of the remaining numbers can sum to the largest number. This is a classic subset sum problem."
    }
];