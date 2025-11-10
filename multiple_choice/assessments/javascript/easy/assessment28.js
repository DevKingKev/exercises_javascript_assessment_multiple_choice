// assessment28.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Map and Set Fundamentals",
    "description": "Basic concepts of Map and Set collections, when to use each, and their fundamental characteristics in JavaScript.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Map basics",
        "Set basics",
        "Collection use cases",
        "Key differences",
        "Common methods",
        "Performance characteristics",
        "Practical applications"
    ],
    "topicLinks": [
        {
            "topicName": "Map basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
        },
        {
            "topicName": "Set basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
        },
        {
            "topicName": "Collection use cases",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections"
        },
        {
            "topicName": "Key differences",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps"
        },
        {
            "topicName": "Common methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#instance_methods"
        },
        {
            "topicName": "Performance characteristics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#when_to_use_a_map"
        },
        {
            "topicName": "Practical applications",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#use_cases"
        }
    ],
    "assessmentId": 28,
    "assessmentUniqueId": 1762768694698,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the main purpose of a Set in JavaScript?",
        "options": {
            "A": "To store unique values",
            "B": "To store key-value pairs",
            "C": "To store ordered lists",
            "D": "To store functions"
        },
        "correct": "A",
        "explanation": "A Set is a collection of unique values. Each value can occur only once in a Set, making it perfect for removing duplicates.",
        "topic": {
            "topics": ["Set basics"]
        }
    },
    {
        "id": 2,
        "question": "What is the main purpose of a Map in JavaScript?",
        "options": {
            "A": "To store key-value pairs",
            "B": "To store unique values",
            "C": "To transform arrays",
            "D": "To store only strings"
        },
        "correct": "A",
        "explanation": "A Map is a collection of key-value pairs where keys can be of any type, unlike regular objects which only allow string or symbol keys.",
        "topic": {
            "topics": ["Map basics"]
        }
    },
    {
        "id": 3,
        "question": "Which data structure would you use to remove duplicates from an array?",
        "options": {
            "A": "Set",
            "B": "Map",
            "C": "Array",
            "D": "Object"
        },
        "correct": "A",
        "explanation": "Set is perfect for removing duplicates: <pre>const unique = [...new Set(array)];</pre>",
        "topic": {
            "topics": ["Practical applications"]
        }
    },
    {
        "id": 4,
        "question": "How do you check if a value exists in a Set?",
        "options": {
            "A": "<pre>set.has(value)</pre>",
            "B": "<pre>set.contains(value)</pre>",
            "C": "<pre>set.includes(value)</pre>",
            "D": "<pre>set.find(value)</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>has()</pre> method returns true if the value exists in the Set, false otherwise.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 5,
        "question": "What is a key advantage of Map over regular objects?",
        "options": {
            "A": "Keys can be any data type",
            "B": "Better performance for all operations",
            "C": "Automatic sorting of keys",
            "D": "Smaller memory usage"
        },
        "correct": "A",
        "explanation": "Map allows any value (including objects, functions, or other maps) as keys, while objects only allow strings and symbols.",
        "topic": {
            "topics": ["Key differences"]
        }
    },
    {
        "id": 6,
        "question": "How do you add a value to a Set?",
        "options": {
            "A": "<pre>set.add(value)</pre>",
            "B": "<pre>set.push(value)</pre>",
            "C": "<pre>set.insert(value)</pre>",
            "D": "<pre>set.set(value)</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>add()</pre> method adds a value to the Set. If the value already exists, it won't be added again.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 7,
        "question": "What does this code return? [CODE]const set = new Set([1, 2, 2, 3, 3, 3]);\nset.size;[/CODE]",
        "options": {
            "A": "<pre>3</pre>",
            "B": "<pre>6</pre>",
            "C": "<pre>1</pre>",
            "D": "<pre>2</pre>"
        },
        "correct": "A",
        "explanation": "Set automatically removes duplicates, so [1, 2, 2, 3, 3, 3] becomes {1, 2, 3} with size 3.",
        "topic": {
            "topics": ["Set basics"]
        }
    },
    {
        "id": 8,
        "question": "How do you set a key-value pair in a Map?",
        "options": {
            "A": "<pre>map.set(key, value)</pre>",
            "B": "<pre>map.add(key, value)</pre>",
            "C": "<pre>map[key] = value</pre>",
            "D": "<pre>map.insert(key, value)</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>set()</pre> method adds or updates a key-value pair in the Map.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 9,
        "question": "Which data structure maintains insertion order of elements?",
        "options": {
            "A": "Both Map and Set",
            "B": "Only Map",
            "C": "Only Set",
            "D": "Neither"
        },
        "correct": "A",
        "explanation": "Both Map and Set maintain the insertion order of their elements, which is not guaranteed with regular objects.",
        "topic": {
            "topics": ["Key differences"]
        }
    },
    {
        "id": 10,
        "question": "What is the result of this code? [CODE]const map = new Map();\nmap.set('a', 1);\nmap.set('b', 2);\nmap.get('a');[/CODE]",
        "options": {
            "A": "<pre>1</pre>",
            "B": "<pre>2</pre>",
            "C": "<pre>undefined</pre>",
            "D": "<pre>'a'</pre>"
        },
        "correct": "A",
        "explanation": "<pre>get('a')</pre> returns the value associated with key 'a', which is 1.",
        "topic": {
            "topics": ["Map basics"]
        }
    },
    {
        "id": 11,
        "question": "When would you use a Map instead of a regular object?",
        "options": {
            "A": "When you need non-string keys",
            "B": "When you need faster iteration",
            "C": "When you need JSON serialization",
            "D": "When you need prototype methods"
        },
        "correct": "A",
        "explanation": "Map is particularly useful when you need to use objects, functions, or other non-primitive values as keys.",
        "topic": {
            "topics": ["Collection use cases"]
        }
    },
    {
        "id": 12,
        "question": "How do you get the number of elements in a Set?",
        "options": {
            "A": "<pre>set.size</pre>",
            "B": "<pre>set.length</pre>",
            "C": "<pre>set.count</pre>",
            "D": "<pre>set.size()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>size</pre> property returns the number of elements in a Set (it's a property, not a method).",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 13,
        "question": "What does this code do? [CODE]const uniqueWords = new Set(text.split(' '));[/CODE]",
        "options": {
            "A": "Gets unique words from text",
            "B": "Counts words in text",
            "C": "Sorts words alphabetically",
            "D": "Maps words to numbers"
        },
        "correct": "A",
        "explanation": "This splits text into words and creates a Set, automatically removing any duplicate words.",
        "topic": {
            "topics": ["Practical applications"]
        }
    },
    {
        "id": 14,
        "question": "How do you check if a key exists in a Map?",
        "options": {
            "A": "<pre>map.has(key)</pre>",
            "B": "<pre>map.contains(key)</pre>",
            "C": "<pre>map.includes(key)</pre>",
            "D": "<pre>key in map</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>has()</pre> method returns true if the key exists in the Map.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 15,
        "question": "What is the main performance advantage of Set for membership tests?",
        "options": {
            "A": "Faster than arrays for checking if value exists",
            "B": "Faster than objects for all operations",
            "C": "Uses less memory than arrays",
            "D": "Automatically sorts values"
        },
        "correct": "A",
        "explanation": "Set.has() is much faster than Array.includes() for large collections because Sets are optimized for membership testing.",
        "topic": {
            "topics": ["Performance characteristics"]
        }
    },
    {
        "id": 16,
        "question": "How do you remove a value from a Set?",
        "options": {
            "A": "<pre>set.delete(value)</pre>",
            "B": "<pre>set.remove(value)</pre>",
            "C": "<pre>set.pop(value)</pre>",
            "D": "<pre>set.clear(value)</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>delete()</pre> method removes a specific value from the Set.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 17,
        "question": "What is a common use case for Map?",
        "options": {
            "A": "Storing metadata associated with objects",
            "B": "Removing duplicates from arrays",
            "C": "Sorting values automatically",
            "D": "Storing only primitive values"
        },
        "correct": "A",
        "explanation": "Map is great for storing additional data about objects without modifying the objects themselves, using the objects as keys.",
        "topic": {
            "topics": ["Collection use cases"]
        }
    },
    {
        "id": 18,
        "question": "What does this code return? [CODE]const set = new Set();\nset.add(NaN);\nset.add(NaN);\nset.size;[/CODE]",
        "options": {
            "A": "<pre>1</pre>",
            "B": "<pre>2</pre>",
            "C": "<pre>0</pre>",
            "D": "<pre>NaN</pre>"
        },
        "correct": "A",
        "explanation": "In Sets, NaN is considered equal to NaN (unlike regular JavaScript where NaN !== NaN), so only one NaN is stored.",
        "topic": {
            "topics": ["Set basics"]
        }
    },
    {
        "id": 19,
        "question": "How do you get all keys from a Map?",
        "options": {
            "A": "<pre>map.keys()</pre>",
            "B": "<pre>map.getKeys()</pre>",
            "C": "<pre>Object.keys(map)</pre>",
            "D": "<pre>map.allKeys()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>keys()</pre> method returns an iterator of all keys in the Map, in insertion order.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 20,
        "question": "Which data structure would you use to count occurrences of items?",
        "options": {
            "A": "Map",
            "B": "Set",
            "C": "Array",
            "D": "String"
        },
        "correct": "A",
        "explanation": "Map is perfect for counting: use items as keys and increment their counts as values.",
        "topic": {
            "topics": ["Practical applications"]
        }
    },
    {
        "id": 21,
        "question": "How do you remove all elements from a Set?",
        "options": {
            "A": "<pre>set.clear()</pre>",
            "B": "<pre>set.removeAll()</pre>",
            "C": "<pre>set.empty()</pre>",
            "D": "<pre>set.deleteAll()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>clear()</pre> method removes all elements from a Set.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 22,
        "question": "What is the result of this code? [CODE]const map = new Map([['a', 1], ['b', 2]]);\nmap.get('c');[/CODE]",
        "options": {
            "A": "<pre>undefined</pre>",
            "B": "<pre>null</pre>",
            "C": "<pre>0</pre>",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "When getting a non-existent key from a Map, it returns undefined (doesn't throw an error).",
        "topic": {
            "topics": ["Map basics"]
        }
    },
    {
        "id": 23,
        "question": "When would you choose a Set over an Array?",
        "options": {
            "A": "When you need fast membership testing",
            "B": "When you need to maintain order",
            "C": "When you need to store objects",
            "D": "When you need indexed access"
        },
        "correct": "A",
        "explanation": "Set.has() is much faster than Array.includes(), especially for large collections.",
        "topic": {
            "topics": ["Performance characteristics"]
        }
    },
    {
        "id": 24,
        "question": "How do you iterate over a Set's values?",
        "options": {
            "A": "<pre>for (let value of set)</pre>",
            "B": "<pre>for (let value in set)</pre>",
            "C": "<pre>set.forEachValue()</pre>",
            "D": "<pre>set.values().forEach()</pre>"
        },
        "correct": "A",
        "explanation": "Sets are iterable, so you can use for...of loop directly, or use forEach method.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 25,
        "question": "What is a key difference between Map and Object?",
        "options": {
            "A": "Map doesn't have prototype pollution risk",
            "B": "Map is always faster",
            "C": "Map can only store strings",
            "D": "Map doesn't maintain order"
        },
        "correct": "A",
        "explanation": "Map doesn't inherit from Object.prototype, so there's no risk of prototype pollution from accidentally overriding methods.",
        "topic": {
            "topics": ["Key differences"]
        }
    },
    {
        "id": 26,
        "question": "How do you convert a Set to an Array?",
        "options": {
            "A": "<pre>[...set]</pre>",
            "B": "<pre>set.toArray()</pre>",
            "C": "<pre>Array.fromSet(set)</pre>",
            "D": "<pre>set.array()</pre>"
        },
        "correct": "A",
        "explanation": "You can use spread syntax <pre>[...set]</pre> or <pre>Array.from(set)</pre> to convert a Set to an Array.",
        "topic": {
            "topics": ["Practical applications"]
        }
    },
    {
        "id": 27,
        "question": "What does this code do? [CODE]const map = new Map();\nmap.set(obj, 'metadata');[/CODE]",
        "options": {
            "A": "Stores metadata using an object as key",
            "B": "Converts object to string",
            "C": "Adds property to the object",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "This stores 'metadata' associated with the obj, using the object itself as the key in the Map.",
        "topic": {
            "topics": ["Collection use cases"]
        }
    },
    {
        "id": 28,
        "question": "How do you get the number of key-value pairs in a Map?",
        "options": {
            "A": "<pre>map.size</pre>",
            "B": "<pre>map.length</pre>",
            "C": "<pre>map.count</pre>",
            "D": "<pre>map.size()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>size</pre> property returns the number of key-value pairs in a Map.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 29,
        "question": "Which method is available on both Map and Set?",
        "options": {
            "A": "<pre>forEach</pre>",
            "B": "<pre>get</pre>",
            "C": "<pre>set</pre>",
            "D": "<pre>add</pre>"
        },
        "correct": "A",
        "explanation": "Both Map and Set have a <pre>forEach</pre> method for iterating over their elements.",
        "topic": {
            "topics": ["Common methods"]
        }
    },
    {
        "id": 30,
        "question": "What is the simplest way to create a Set from an array?",
        "options": {
            "A": "<pre>new Set(array)</pre>",
            "B": "<pre>Set.from(array)</pre>",
            "C": "<pre>array.toSet()</pre>",
            "D": "<pre>Set.create(array)</pre>"
        },
        "correct": "A",
        "explanation": "You can pass an array directly to the Set constructor to create a Set from the array's values.",
        "topic": {
            "topics": ["Set basics"]
        }
    }
];

module.exports = { metadata, questions };