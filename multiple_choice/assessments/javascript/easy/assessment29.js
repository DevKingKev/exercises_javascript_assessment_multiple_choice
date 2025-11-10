// assessment29.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Map and Set Usage Patterns",
    "description": "Practical applications and fundamental characteristics of Map and Set collections in JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Map operations",
        "Set operations",
        "Use case selection",
        "Collection properties",
        "Iteration methods",
        "Performance benefits",
        "Real-world scenarios"
    ],
    "topicLinks": [
        {
            "topicName": "Map operations",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
        },
        {
            "topicName": "Set operations",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
        },
        {
            "topicName": "Use case selection",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections"
        },
        {
            "topicName": "Collection properties",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#description"
        },
        {
            "topicName": "Iteration methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#instance_methods"
        },
        {
            "topicName": "Performance benefits",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#performance"
        },
        {
            "topicName": "Real-world scenarios",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#use_cases"
        }
    ],
    "assessmentId": 29,
    "assessmentUniqueId": 1762769428358,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the primary use case for a Set?",
        "options": {
            "A": "Storing unique values",
            "B": "Storing key-value pairs",
            "C": "Sorting values automatically",
            "D": "Replacing arrays"
        },
        "correct": "A",
        "explanation": "Set is designed to store collections of unique values, automatically handling duplicate prevention.",
        "topic": {
            "topics": ["Use case selection"]
        }
    },
    {
        "id": 2,
        "question": "How do you retrieve a value from a Map?",
        "options": {
            "A": "<pre>map.get(key)</pre>",
            "B": "<pre>map[key]</pre>",
            "C": "<pre>map.value(key)</pre>",
            "D": "<pre>map.retrieve(key)</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>get()</pre> method is used to retrieve the value associated with a specific key in a Map.",
        "topic": {
            "topics": ["Map operations"]
        }
    },
    {
        "id": 3,
        "question": "What will this code output? [CODE]const set = new Set([1, 2, 3]);\nset.add(2);\nconsole.log(set.size);[/CODE]",
        "options": {
            "A": "<pre>3</pre>",
            "B": "<pre>4</pre>",
            "C": "<pre>2</pre>",
            "D": "<pre>1</pre>"
        },
        "correct": "A",
        "explanation": "Adding a duplicate value (2) to a Set has no effect, so the size remains 3.",
        "topic": {
            "topics": ["Set operations"]
        }
    },
    {
        "id": 4,
        "question": "When should you use a Map instead of a plain object?",
        "options": {
            "A": "When keys are not strings",
            "B": "When you need faster access",
            "C": "When storing simple data",
            "D": "When working with JSON"
        },
        "correct": "A",
        "explanation": "Map allows any data type as keys (objects, arrays, functions), while plain objects only allow strings and symbols.",
        "topic": {
            "topics": ["Use case selection"]
        }
    },
    {
        "id": 5,
        "question": "How do you check if a value exists in a Set?",
        "options": {
            "A": "<pre>set.has(value)</pre>",
            "B": "<pre>set.contains(value)</pre>",
            "C": "<pre>set.includes(value)</pre>",
            "D": "<pre>set.find(value)</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>has()</pre> method returns a boolean indicating whether the value exists in the Set.",
        "topic": {
            "topics": ["Set operations"]
        }
    },
    {
        "id": 6,
        "question": "What is a key advantage of Map over objects?",
        "options": {
            "A": "Maintains insertion order",
            "B": "Smaller memory footprint",
            "C": "Faster for all operations",
            "D": "Automatic key sorting"
        },
        "correct": "A",
        "explanation": "Map preserves the insertion order of keys, while object property order is not guaranteed.",
        "topic": {
            "topics": ["Collection properties"]
        }
    },
    {
        "id": 7,
        "question": "What does this code do? [CODE]const map = new Map();\nmap.set('name', 'John');\nmap.set('age', 30);[/CODE]",
        "options": {
            "A": "Creates a Map with two key-value pairs",
            "B": "Creates an object with two properties",
            "C": "Throws an error",
            "D": "Creates a Set with two values"
        },
        "correct": "A",
        "explanation": "This creates a Map and adds two key-value pairs using the <pre>set()</pre> method.",
        "topic": {
            "topics": ["Map operations"]
        }
    },
    {
        "id": 8,
        "question": "Which data structure would you use to track unique user IDs?",
        "options": {
            "A": "Set",
            "B": "Map",
            "C": "Array",
            "D": "Object"
        },
        "correct": "A",
        "explanation": "Set is perfect for tracking unique values like user IDs, as it automatically prevents duplicates.",
        "topic": {
            "topics": ["Real-world scenarios"]
        }
    },
    {
        "id": 9,
        "question": "How do you remove a key-value pair from a Map?",
        "options": {
            "A": "<pre>map.delete(key)</pre>",
            "B": "<pre>map.remove(key)</pre>",
            "C": "<pre>map.clear(key)</pre>",
            "D": "<pre>delete map[key]</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>delete()</pre> method removes the key-value pair associated with the specified key.",
        "topic": {
            "topics": ["Map operations"]
        }
    },
    {
        "id": 10,
        "question": "What is the result of this code? [CODE]const set = new Set();\nset.add('apple');\nset.add('banana');\nset.has('apple');[/CODE]",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>undefined</pre>",
            "D": "<pre>'apple'</pre>"
        },
        "correct": "A",
        "explanation": "<pre>has()</pre> returns true because 'apple' exists in the Set.",
        "topic": {
            "topics": ["Set operations"]
        }
    },
    {
        "id": 11,
        "question": "Which data structure maintains the order of elements?",
        "options": {
            "A": "Both Map and Set",
            "B": "Only Map",
            "C": "Only Set",
            "D": "Neither"
        },
        "correct": "A",
        "explanation": "Both Map and Set maintain the insertion order of their elements.",
        "topic": {
            "topics": ["Collection properties"]
        }
    },
    {
        "id": 12,
        "question": "How do you get all values from a Set?",
        "options": {
            "A": "<pre>set.values()</pre>",
            "B": "<pre>set.getValues()</pre>",
            "C": "<pre>set.all()</pre>",
            "D": "<pre>set.toArray()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>values()</pre> method returns an iterator of all values in the Set.",
        "topic": {
            "topics": ["Iteration methods"]
        }
    },
    {
        "id": 13,
        "question": "What is a common use case for Map?",
        "options": {
            "A": "Storing object metadata",
            "B": "Removing array duplicates",
            "C": "Sorting numbers",
            "D": "Replacing arrays"
        },
        "correct": "A",
        "explanation": "Map is excellent for storing additional data about objects without modifying the objects themselves.",
        "topic": {
            "topics": ["Real-world scenarios"]
        }
    },
    {
        "id": 14,
        "question": "How do you check the number of elements in a Map?",
        "options": {
            "A": "<pre>map.size</pre>",
            "B": "<pre>map.length</pre>",
            "C": "<pre>map.count</pre>",
            "D": "<pre>map.size()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>size</pre> property returns the number of key-value pairs in the Map.",
        "topic": {
            "topics": ["Map operations"]
        }
    },
    {
        "id": 15,
        "question": "What does this code accomplish? [CODE]const unique = [...new Set([1, 2, 2, 3, 3, 3])];[/CODE]",
        "options": {
            "A": "Removes duplicates from array",
            "B": "Creates a Map from array",
            "C": "Sorts the array",
            "D": "Counts array elements"
        },
        "correct": "A",
        "explanation": "This is a common pattern to remove duplicates from an array using Set and spread syntax.",
        "topic": {
            "topics": ["Real-world scenarios"]
        }
    },
    {
        "id": 16,
        "question": "How do you iterate over a Map's entries?",
        "options": {
            "A": "<pre>map.entries()</pre>",
            "B": "<pre>map.getEntries()</pre>",
            "C": "<pre>map.forEachEntry()</pre>",
            "D": "<pre>map.all()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>entries()</pre> method returns an iterator of all [key, value] pairs in the Map.",
        "topic": {
            "topics": ["Iteration methods"]
        }
    },
    {
        "id": 17,
        "question": "Which is faster for checking if a value exists?",
        "options": {
            "A": "Set.has() vs Array.includes()",
            "B": "Map.has() vs Object.hasOwnProperty()",
            "C": "Both are equally fast",
            "D": "It depends on the data size"
        },
        "correct": "A",
        "explanation": "Set.has() is significantly faster than Array.includes() for large collections because Sets are optimized for membership testing.",
        "topic": {
            "topics": ["Performance benefits"]
        }
    },
    {
        "id": 18,
        "question": "What is the result? [CODE]const map = new Map([['x', 10]]);\nmap.set('x', 20);\nmap.get('x');[/CODE]",
        "options": {
            "A": "<pre>20</pre>",
            "B": "<pre>10</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Throws error"
        },
        "correct": "A",
        "explanation": "Setting a value for an existing key overwrites the previous value, so 'x' becomes 20.",
        "topic": {
            "topics": ["Map operations"]
        }
    },
    {
        "id": 19,
        "question": "How do you completely empty a Set?",
        "options": {
            "A": "<pre>set.clear()</pre>",
            "B": "<pre>set.empty()</pre>",
            "C": "<pre>set.deleteAll()</pre>",
            "D": "<pre>set.removeAll()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>clear()</pre> method removes all elements from a Set.",
        "topic": {
            "topics": ["Set operations"]
        }
    },
    {
        "id": 20,
        "question": "When would you prefer Set over Array?",
        "options": {
            "A": "When you need fast existence checks",
            "B": "When you need indexed access",
            "C": "When you need to store objects",
            "D": "When you need to sort elements"
        },
        "correct": "A",
        "explanation": "Set's has() method is much faster than Array's includes() for checking if a value exists.",
        "topic": {
            "topics": ["Performance benefits"]
        }
    },
    {
        "id": 21,
        "question": "What does this code create? [CODE]const map = new Map([\n  [document.getElementById('btn'), 'clicked'],\n  [document.getElementById('input'), 'focused']\n]);[/CODE]",
        "options": {
            "A": "A Map using DOM elements as keys",
            "B": "A Set of DOM elements",
            "C": "An array of DOM elements",
            "D": "An object with DOM properties"
        },
        "correct": "A",
        "explanation": "This demonstrates using DOM elements as Map keys, which is not possible with plain objects.",
        "topic": {
            "topics": ["Real-world scenarios"]
        }
    },
    {
        "id": 22,
        "question": "How do you convert a Map to an array of key-value pairs?",
        "options": {
            "A": "<pre>[...map]</pre>",
            "B": "<pre>map.toArray()</pre>",
            "C": "<pre>Array.fromMap(map)</pre>",
            "D": "<pre>map.entries().toArray()</pre>"
        },
        "correct": "A",
        "explanation": "Spread syntax with Map returns an array of [key, value] pairs.",
        "topic": {
            "topics": ["Iteration methods"]
        }
    },
    {
        "id": 23,
        "question": "What is a benefit of Set over Array for unique collections?",
        "options": {
            "A": "Automatic duplicate prevention",
            "B": "Faster iteration",
            "C": "Smaller size always",
            "D": "Built-in sorting"
        },
        "correct": "A",
        "explanation": "Set automatically ensures all values are unique, unlike Array where you have to manually check for duplicates.",
        "topic": {
            "topics": ["Performance benefits"]
        }
    },
    {
        "id": 24,
        "question": "How do you check if a Map is empty?",
        "options": {
            "A": "<pre>map.size === 0</pre>",
            "B": "<pre>map.isEmpty()</pre>",
            "C": "<pre>map.length === 0</pre>",
            "D": "<pre>!map</pre>"
        },
        "correct": "A",
        "explanation": "Check the <pre>size</pre> property to see if a Map has no key-value pairs.",
        "topic": {
            "topics": ["Map operations"]
        }
    },
    {
        "id": 25,
        "question": "What does this code do? [CODE]const userRoles = new Map();\nuserRoles.set(user1, 'admin');\nuserRoles.set(user2, 'user');[/CODE]",
        "options": {
            "A": "Stores roles for different users",
            "B": "Creates user objects",
            "C": "Removes duplicate users",
            "D": "Sorts users by role"
        },
        "correct": "A",
        "explanation": "This uses a Map to associate user objects with their roles, a common pattern for storing metadata.",
        "topic": {
            "topics": ["Real-world scenarios"]
        }
    },
    {
        "id": 26,
        "question": "How do you get all keys from a Map?",
        "options": {
            "A": "<pre>map.keys()</pre>",
            "B": "<pre>map.getKeys()</pre>",
            "C": "<pre>Object.keys(map)</pre>",
            "D": "<pre>map.allKeys()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>keys()</pre> method returns an iterator of all keys in the Map.",
        "topic": {
            "topics": ["Iteration methods"]
        }
    },
    {
        "id": 27,
        "question": "What is the main difference between Set and Array?",
        "options": {
            "A": "Set stores unique values only",
            "B": "Set is always faster",
            "C": "Set can't store objects",
            "D": "Set automatically sorts values"
        },
        "correct": "A",
        "explanation": "The fundamental difference is that Set enforces uniqueness, while Array allows duplicates.",
        "topic": {
            "topics": ["Collection properties"]
        }
    },
    {
        "id": 28,
        "question": "How do you create a Set from multiple arrays?",
        "options": {
            "A": "<pre>new Set([...arr1, ...arr2])</pre>",
            "B": "<pre>Set.merge(arr1, arr2)</pre>",
            "C": "<pre>arr1.concat(arr2).toSet()</pre>",
            "D": "<pre>new Set(arr1 + arr2)</pre>"
        },
        "correct": "A",
        "explanation": "Combine arrays with spread syntax and pass to Set constructor to merge and deduplicate.",
        "topic": {
            "topics": ["Set operations"]
        }
    },
    {
        "id": 29,
        "question": "What advantage does Map have over object for frequent additions/removals?",
        "options": {
            "A": "Better performance",
            "B": "Smaller memory usage",
            "C": "Automatic serialization",
            "D": "Built-in validation"
        },
        "correct": "A",
        "explanation": "Map is optimized for frequent additions and deletions of key-value pairs.",
        "topic": {
            "topics": ["Performance benefits"]
        }
    },
    {
        "id": 30,
        "question": "What is the simplest way to check if a Set has any elements?",
        "options": {
            "A": "<pre>set.size > 0</pre>",
            "B": "<pre>!set.isEmpty()</pre>",
            "C": "<pre>set.hasElements()</pre>",
            "D": "<pre>set.length > 0</pre>"
        },
        "correct": "A",
        "explanation": "Check the <pre>size</pre> property to see if the Set contains any values.",
        "topic": {
            "topics": ["Set operations"]
        }
    }
];

module.exports = { metadata, questions };