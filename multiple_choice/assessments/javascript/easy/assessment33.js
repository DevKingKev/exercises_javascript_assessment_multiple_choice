// assessment33.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Browser Storage Basics",
    "description": "Fundamental concepts of localStorage, sessionStorage, and basic client-side storage operations in the browser.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "localStorage basics",
        "sessionStorage basics",
        "Storage methods",
        "Data types and JSON",
        "Storage limitations",
        "Common use cases",
        "Error handling"
    ],
    "topicLinks": [
        {
            "topicName": "localStorage basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
        },
        {
            "topicName": "sessionStorage basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
        },
        {
            "topicName": "Storage methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Storage"
        },
        {
            "topicName": "Data types and JSON",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
        },
        {
            "topicName": "Storage limitations",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Storage_API"
        },
        {
            "topicName": "Common use cases",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API"
        },
        {
            "topicName": "Error handling",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#security"
        }
    ],
    "assessmentId": 33,
    "assessmentUniqueId": 1762771507609,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What data type does localStorage store?",
        "options": {
            "A": "Strings only",
            "B": "Any JavaScript data type",
            "C": "Numbers and strings only",
            "D": "Objects only"
        },
        "correct": "A",
        "explanation": "localStorage can only store strings. To store other data types, you need to convert them to strings using JSON.stringify().",
        "topic": {
            "topics": ["localStorage basics"]
        }
    },
    {
        "id": 2,
        "question": "How do you save data to localStorage?",
        "options": {
            "A": "<pre>localStorage.setItem('key', 'value')</pre>",
            "B": "<pre>localStorage.save('key', 'value')</pre>",
            "C": "<pre>localStorage.key = 'value'</pre>",
            "D": "<pre>localStorage.store('key', 'value')</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>setItem()</pre> method is used to store data in localStorage with a specified key.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 3,
        "question": "How do you retrieve data from localStorage?",
        "options": {
            "A": "<pre>localStorage.getItem('key')</pre>",
            "B": "<pre>localStorage.retrieve('key')</pre>",
            "C": "<pre>localStorage.key</pre>",
            "D": "<pre>localStorage.load('key')</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>getItem()</pre> method returns the value associated with the specified key, or null if the key doesn't exist.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 4,
        "question": "What is the main difference between localStorage and sessionStorage?",
        "options": {
            "A": "localStorage persists, sessionStorage is per session",
            "B": "localStorage is faster",
            "C": "sessionStorage stores more data",
            "D": "localStorage is more secure"
        },
        "correct": "A",
        "explanation": "localStorage data persists until explicitly deleted, while sessionStorage data is cleared when the browser tab is closed.",
        "topic": {
            "topics": ["localStorage basics", "sessionStorage basics"]
        }
    },
    {
        "id": 5,
        "question": "How do you store an object in localStorage?",
        "options": {
            "A": "<pre>localStorage.setItem('key', JSON.stringify(obj))</pre>",
            "B": "<pre>localStorage.setItem('key', obj)</pre>",
            "C": "<pre>localStorage.obj = obj</pre>",
            "D": "<pre>localStorage.storeObject('key', obj)</pre>"
        },
        "correct": "A",
        "explanation": "Since localStorage only stores strings, you must convert objects to JSON strings using JSON.stringify().",
        "topic": {
            "topics": ["Data types and JSON"]
        }
    },
    {
        "id": 6,
        "question": "How do you remove a specific item from localStorage?",
        "options": {
            "A": "<pre>localStorage.removeItem('key')</pre>",
            "B": "<pre>localStorage.delete('key')</pre>",
            "C": "<pre>localStorage.clear('key')</pre>",
            "D": "<pre>localStorage.key = null</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>removeItem()</pre> method removes the specified key and its value from localStorage.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 7,
        "question": "What does this code do? [CODE]localStorage.setItem('user', JSON.stringify({name: 'John'}));[/CODE]",
        "options": {
            "A": "Stores a user object as a JSON string",
            "B": "Stores a user object directly",
            "C": "Throws an error",
            "D": "Stores the object without conversion"
        },
        "correct": "A",
        "explanation": "This converts the object to a JSON string before storing it in localStorage.",
        "topic": {
            "topics": ["Data types and JSON"]
        }
    },
    {
        "id": 8,
        "question": "How do you retrieve and parse an object from localStorage?",
        "options": {
            "A": "<pre>JSON.parse(localStorage.getItem('key'))</pre>",
            "B": "<pre>localStorage.getItem('key').parse()</pre>",
            "C": "<pre>localStorage.getObject('key')</pre>",
            "D": "<pre>localStorage.parseItem('key')</pre>"
        },
        "correct": "A",
        "explanation": "First get the string with getItem(), then parse it back to an object with JSON.parse().",
        "topic": {
            "topics": ["Data types and JSON"]
        }
    },
    {
        "id": 9,
        "question": "What happens when you try to store a number in localStorage?",
        "options": {
            "A": "It gets converted to a string",
            "B": "It stays as a number",
            "C": "It causes an error",
            "D": "It becomes undefined"
        },
        "correct": "A",
        "explanation": "All values are converted to strings when stored in localStorage.",
        "topic": {
            "topics": ["Data types and JSON"]
        }
    },
    {
        "id": 10,
        "question": "How do you clear all data from localStorage?",
        "options": {
            "A": "<pre>localStorage.clear()</pre>",
            "B": "<pre>localStorage.removeAll()</pre>",
            "C": "<pre>localStorage.empty()</pre>",
            "D": "<pre>localStorage.reset()</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>clear()</pre> method removes all key-value pairs from localStorage.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 11,
        "question": "What is a common use case for localStorage?",
        "options": {
            "A": "Storing user preferences",
            "B": "Storing sensitive data",
            "C": "Storing large files",
            "D": "Storing session tokens"
        },
        "correct": "A",
        "explanation": "localStorage is commonly used for non-sensitive user preferences like theme settings, language preferences, etc.",
        "topic": {
            "topics": ["Common use cases"]
        }
    },
    {
        "id": 12,
        "question": "What is the storage limit for localStorage in most browsers?",
        "options": {
            "A": "About 5-10MB",
            "B": "About 1MB",
            "C": "Unlimited",
            "D": "About 100KB"
        },
        "correct": "A",
        "explanation": "Most modern browsers allow about 5-10MB of data per origin for localStorage.",
        "topic": {
            "topics": ["Storage limitations"]
        }
    },
    {
        "id": 13,
        "question": "What will this code return? [CODE]localStorage.getItem('nonExistentKey');[/CODE]",
        "options": {
            "A": "<pre>null</pre>",
            "B": "<pre>undefined</pre>",
            "C": "<pre>''</pre>",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "getItem() returns null when the specified key does not exist in localStorage.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 14,
        "question": "How do you check if a key exists in localStorage?",
        "options": {
            "A": "<pre>localStorage.getItem('key') !== null</pre>",
            "B": "<pre>'key' in localStorage</pre>",
            "C": "<pre>localStorage.has('key')</pre>",
            "D": "<pre>localStorage.exists('key')</pre>"
        },
        "correct": "A",
        "explanation": "Check if getItem() returns something other than null to verify a key exists.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 15,
        "question": "What happens to sessionStorage when you close the browser tab?",
        "options": {
            "A": "Data is cleared",
            "B": "Data persists",
            "C": "Data moves to localStorage",
            "D": "Data is backed up"
        },
        "correct": "A",
        "explanation": "sessionStorage data is cleared when the browser tab or window is closed.",
        "topic": {
            "topics": ["sessionStorage basics"]
        }
    },
    {
        "id": 16,
        "question": "How do you store a boolean value in localStorage?",
        "options": {
            "A": "Convert to string with toString() or JSON.stringify()",
            "B": "Store it directly",
            "C": "Convert to number first",
            "D": "Cannot store booleans"
        },
        "correct": "A",
        "explanation": "Since localStorage only stores strings, convert booleans to strings before storing.",
        "topic": {
            "topics": ["Data types and JSON"]
        }
    },
    {
        "id": 17,
        "question": "What is a security concern with localStorage?",
        "options": {
            "A": "Data is accessible by any JavaScript on the domain",
            "B": "Data is encrypted automatically",
            "C": "Data is sent to the server",
            "D": "Data has no expiration"
        },
        "correct": "A",
        "explanation": "Any JavaScript running on the same domain can access localStorage data, making it vulnerable to XSS attacks.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 18,
        "question": "How do you get the number of items in localStorage?",
        "options": {
            "A": "<pre>localStorage.length</pre>",
            "B": "<pre>localStorage.count()</pre>",
            "C": "<pre>localStorage.size</pre>",
            "D": "<pre>Object.keys(localStorage).length</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>length</pre> property returns the number of items stored in localStorage.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 19,
        "question": "What happens if you exceed localStorage quota?",
        "options": {
            "A": "Throws a QuotaExceededError",
            "B": "Silently fails",
            "C": "Overwrites old data",
            "D": "Compresses the data"
        },
        "correct": "A",
        "explanation": "When the storage limit is exceeded, browsers throw a QuotaExceededError exception.",
        "topic": {
            "topics": ["Storage limitations"]
        }
    },
    {
        "id": 20,
        "question": "How do you get the key at a specific index in localStorage?",
        "options": {
            "A": "<pre>localStorage.key(0)</pre>",
            "B": "<pre>localStorage.getKey(0)</pre>",
            "C": "<pre>localStorage[0]</pre>",
            "D": "<pre>localStorage.keys()[0]</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>key()</pre> method returns the name of the key at the specified index.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 21,
        "question": "What is a good practice when storing data in localStorage?",
        "options": {
            "A": "Wrap in try/catch for quota errors",
            "B": "Never store any data",
            "C": "Store everything as numbers",
            "D": "Use only short keys"
        },
        "correct": "A",
        "explanation": "Always wrap localStorage operations in try/catch blocks to handle potential quota errors.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 22,
        "question": "How do sessionStorage and localStorage handle different tabs?",
        "options": {
            "A": "sessionStorage is per tab, localStorage is shared",
            "B": "Both are shared across tabs",
            "C": "Both are per tab",
            "D": "sessionStorage is shared, localStorage is per tab"
        },
        "correct": "A",
        "explanation": "sessionStorage is isolated to each browser tab, while localStorage is shared across all tabs from the same origin.",
        "topic": {
            "topics": ["sessionStorage basics", "localStorage basics"]
        }
    },
    {
        "id": 23,
        "question": "What does this code do? [CODE]const data = localStorage.getItem('settings');\nreturn data ? JSON.parse(data) : {};[/CODE]",
        "options": {
            "A": "Gets settings or returns empty object if not found",
            "B": "Always returns empty object",
            "C": "Throws error if settings not found",
            "D": "Deletes the settings"
        },
        "correct": "A",
        "explanation": "This safely retrieves and parses settings, providing a default empty object if no settings are stored.",
        "topic": {
            "topics": ["Data types and JSON"]
        }
    },
    {
        "id": 24,
        "question": "Can you store arrays in localStorage?",
        "options": {
            "A": "Yes, by converting to JSON string",
            "B": "No, arrays are not supported",
            "C": "Yes, directly without conversion",
            "D": "Only numeric arrays"
        },
        "correct": "A",
        "explanation": "Arrays can be stored by converting them to JSON strings with JSON.stringify().",
        "topic": {
            "topics": ["Data types and JSON"]
        }
    },
    {
        "id": 25,
        "question": "What is the scope of localStorage data?",
        "options": {
            "A": "Per origin (protocol + domain + port)",
            "B": "Per subdomain only",
            "C": "Global across all websites",
            "D": "Per directory on the server"
        },
        "correct": "A",
        "explanation": "localStorage is scoped to the origin (protocol + domain + port), so same-origin pages share the same storage.",
        "topic": {
            "topics": ["localStorage basics"]
        }
    },
    {
        "id": 26,
        "question": "How do you update an existing value in localStorage?",
        "options": {
            "A": "Use setItem() with the same key",
            "B": "Use updateItem() method",
            "C": "Delete and re-add the item",
            "D": "Cannot update existing values"
        },
        "correct": "A",
        "explanation": "Calling setItem() with an existing key will overwrite the previous value.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 27,
        "question": "What type of data should NOT be stored in localStorage?",
        "options": {
            "A": "Sensitive information like passwords",
            "B": "User preferences",
            "C": "Theme settings",
            "D": "Shopping cart items"
        },
        "correct": "A",
        "explanation": "Never store sensitive information like passwords, tokens, or personal data in localStorage due to XSS vulnerabilities.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 28,
        "question": "How do you iterate through all keys in localStorage?",
        "options": {
            "A": "<pre>for (let i = 0; i < localStorage.length; i++) {\n  const key = localStorage.key(i);\n}</pre>",
            "B": "<pre>for (let key in localStorage) {}</pre>",
            "C": "<pre>localStorage.forEach(key => {})</pre>",
            "D": "<pre>Object.keys(localStorage).forEach()</pre>"
        },
        "correct": "A",
        "explanation": "Use a for loop with localStorage.length and localStorage.key(index) to iterate through all keys.",
        "topic": {
            "topics": ["Storage methods"]
        }
    },
    {
        "id": 29,
        "question": "What happens to localStorage when browser data is cleared?",
        "options": {
            "A": "It gets deleted",
            "B": "It persists",
            "C": "It moves to sessionStorage",
            "D": "It gets compressed"
        },
        "correct": "A",
        "explanation": "When users clear browser data/cache, localStorage data is also cleared.",
        "topic": {
            "topics": ["localStorage basics"]
        }
    },
    {
        "id": 30,
        "question": "Why might you choose sessionStorage over localStorage?",
        "options": {
            "A": "For temporary data that should not persist",
            "B": "For larger storage capacity",
            "C": "For better security",
            "D": "For faster access"
        },
        "explanation": "sessionStorage is ideal for data that should only exist during a single browsing session, like form data that shouldn't persist after closing the tab.",
        "correct": "A",
        "topic": {
            "topics": ["Common use cases"]
        }
    }
];

module.exports = { metadata, questions };