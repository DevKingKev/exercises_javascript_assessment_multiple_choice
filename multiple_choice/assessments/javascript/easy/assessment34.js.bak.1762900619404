// assessment34.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Browser Storage Operations",
    "description": "Practical usage of localStorage and sessionStorage for client-side data persistence in web applications.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Storage operations",
        "Data serialization",
        "Storage scope",
        "Use case selection",
        "Error prevention",
        "Data retrieval",
        "Storage lifecycle"
    ],
    "topicLinks": [
        {
            "topicName": "Storage operations",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Storage"
        },
        {
            "topicName": "Data serialization",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
        },
        {
            "topicName": "Storage scope",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
        },
        {
            "topicName": "Use case selection",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API"
        },
        {
            "topicName": "Error prevention",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#security"
        },
        {
            "topicName": "Data retrieval",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem"
        },
        {
            "topicName": "Storage lifecycle",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
        }
    ],
    "assessmentId": 34,
    "assessmentUniqueId": 1762777333478,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What method is used to save data to sessionStorage?",
        "options": {
            "A": "<pre>sessionStorage.setItem('key', 'value')</pre>",
            "B": "<pre>sessionStorage.save('key', 'value')</pre>",
            "C": "<pre>sessionStorage.store('key', 'value')</pre>",
            "D": "<pre>sessionStorage.key = 'value'</pre>"
        },
        "correct": "A",
        "explanation": "sessionStorage uses the same API as localStorage, with setItem() for storing data.",
        "topic": {
            "topics": ["Storage operations"]
        }
    },
    {
        "id": 2,
        "question": "How do you check if localStorage is available in the browser?",
        "options": {
            "A": "<pre>if (typeof Storage !== 'undefined')</pre>",
            "B": "<pre>if (window.localStorage)</pre>",
            "C": "<pre>if (localStorage.exists)</pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "You can check for Storage API support or directly check for window.localStorage existence.",
        "topic": {
            "topics": ["Error prevention"]
        }
    },
    {
        "id": 3,
        "question": "What happens when you store a number in sessionStorage?",
        "options": {
            "A": "It gets converted to a string",
            "B": "It remains a number",
            "C": "It causes an error",
            "D": "It becomes undefined"
        },
        "correct": "A",
        "explanation": "Like localStorage, sessionStorage only stores string values. Numbers are automatically converted to strings.",
        "topic": {
            "topics": ["Data serialization"]
        }
    },
    {
        "id": 4,
        "question": "How do you properly store an array in sessionStorage?",
        "options": {
            "A": "<pre>sessionStorage.setItem('key', JSON.stringify(array))</pre>",
            "B": "<pre>sessionStorage.setItem('key', array)</pre>",
            "C": "<pre>sessionStorage.array = array</pre>",
            "D": "<pre>sessionStorage.storeArray('key', array)</pre>"
        },
        "correct": "A",
        "explanation": "Convert the array to a JSON string before storing, since sessionStorage only accepts strings.",
        "topic": {
            "topics": ["Data serialization"]
        }
    },
    {
        "id": 5,
        "question": "What is the scope of sessionStorage data?",
        "options": {
            "A": "Limited to the current browser tab",
            "B": "Shared across all tabs from same origin",
            "C": "Global across all browser windows",
            "D": "Limited to the current page only"
        },
        "correct": "A",
        "explanation": "sessionStorage is isolated to each browser tab. Opening a new tab creates a new sessionStorage.",
        "topic": {
            "topics": ["Storage scope"]
        }
    },
    {
        "id": 6,
        "question": "How do you remove a specific item from sessionStorage?",
        "options": {
            "A": "<pre>sessionStorage.removeItem('key')</pre>",
            "B": "<pre>sessionStorage.delete('key')</pre>",
            "C": "<pre>sessionStorage.clear('key')</pre>",
            "D": "<pre>sessionStorage.key = null</pre>"
        },
        "correct": "A",
        "explanation": "The removeItem() method removes a specific key-value pair from sessionStorage.",
        "topic": {
            "topics": ["Storage operations"]
        }
    },
    {
        "id": 7,
        "question": "What does this code return? [CODE]sessionStorage.getItem('undefinedKey')[/CODE]",
        "options": {
            "A": "<pre>null</pre>",
            "B": "<pre>undefined</pre>",
            "C": "<pre>''</pre>",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "getItem() returns null when the specified key does not exist in sessionStorage.",
        "topic": {
            "topics": ["Data retrieval"]
        }
    },
    {
        "id": 8,
        "question": "When is sessionStorage data cleared?",
        "options": {
            "A": "When the browser tab is closed",
            "B": "After 24 hours",
            "C": "When the browser is restarted",
            "D": "When the page is refreshed"
        },
        "correct": "A",
        "explanation": "sessionStorage persists only for the duration of the page session and is cleared when the tab is closed.",
        "topic": {
            "topics": ["Storage lifecycle"]
        }
    },
    {
        "id": 9,
        "question": "How do you store a boolean value in localStorage?",
        "options": {
            "A": "<pre>localStorage.setItem('key', value.toString())</pre>",
            "B": "<pre>localStorage.setItem('key', value)</pre>",
            "C": "<pre>localStorage.setItem('key', value ? 1 : 0)</pre>",
            "D": "Both A and C"
        },
        "correct": "D",
        "explanation": "You can convert booleans to strings using toString() or convert to numbers, since localStorage only stores strings.",
        "topic": {
            "topics": ["Data serialization"]
        }
    },
    {
        "id": 10,
        "question": "What is a common pitfall when retrieving objects from localStorage?",
        "options": {
            "A": "Forgetting to parse the JSON string",
            "B": "Objects are too large",
            "C": "Objects expire quickly",
            "D": "Objects cannot be retrieved"
        },
        "correct": "A",
        "explanation": "A common mistake is using the stored JSON string directly without parsing it back to an object with JSON.parse().",
        "topic": {
            "topics": ["Data retrieval"]
        }
    },
    {
        "id": 11,
        "question": "How do you clear all data from sessionStorage?",
        "options": {
            "A": "<pre>sessionStorage.clear()</pre>",
            "B": "<pre>sessionStorage.removeAll()</pre>",
            "C": "<pre>sessionStorage.empty()</pre>",
            "D": "<pre>sessionStorage.reset()</pre>"
        },
        "correct": "A",
        "explanation": "The clear() method removes all key-value pairs from sessionStorage.",
        "topic": {
            "topics": ["Storage operations"]
        }
    },
    {
        "id": 12,
        "question": "What happens if you try to store null in localStorage?",
        "options": {
            "A": "It stores the string 'null'",
            "B": "It causes an error",
            "C": "It stores an empty value",
            "D": "It ignores the operation"
        },
        "correct": "A",
        "explanation": "null gets converted to the string 'null' when stored in localStorage.",
        "topic": {
            "topics": ["Data serialization"]
        }
    },
    {
        "id": 13,
        "question": "How can you prevent errors when parsing JSON from localStorage?",
        "options": {
            "A": "Use try/catch around JSON.parse()",
            "B": "Always check if data exists first",
            "C": "Use a default value if parsing fails",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "Always validate data exists, use try/catch for parsing, and provide fallback values to prevent errors.",
        "topic": {
            "topics": ["Error prevention"]
        }
    },
    {
        "id": 14,
        "question": "What is the maximum storage size for sessionStorage?",
        "options": {
            "A": "Same as localStorage (about 5-10MB)",
            "B": "Smaller than localStorage",
            "C": "Larger than localStorage",
            "D": "Unlimited"
        },
        "correct": "A",
        "explanation": "sessionStorage has the same storage limits as localStorage, typically 5-10MB per origin.",
        "topic": {
            "topics": ["Storage scope"]
        }
    },
    {
        "id": 15,
        "question": "How do you update an existing value in sessionStorage?",
        "options": {
            "A": "Call setItem() with the same key",
            "B": "Use updateItem() method",
            "C": "Remove and re-add the item",
            "D": "Cannot update existing values"
        },
        "correct": "A",
        "explanation": "Calling setItem() with an existing key will overwrite the previous value in sessionStorage.",
        "topic": {
            "topics": ["Storage operations"]
        }
    },
    {
        "id": 16,
        "question": "What does this code do? [CODE]const settings = localStorage.settings || '{}';[/CODE]",
        "options": {
            "A": "Gets settings with fallback empty object string",
            "B": "Throws an error",
            "C": "Always returns empty object",
            "D": "Deletes the settings"
        },
        "correct": "A",
        "explanation": "This safely retrieves settings with a fallback empty object string if settings don't exist.",
        "topic": {
            "topics": ["Data retrieval"]
        }
    },
    {
        "id": 17,
        "question": "When should you use sessionStorage over localStorage?",
        "options": {
            "A": "For temporary form data during a session",
            "B": "For user preferences that should persist",
            "C": "For large amounts of data",
            "D": "For sensitive information"
        },
        "correct": "A",
        "explanation": "sessionStorage is ideal for temporary data that should not persist beyond the current browsing session.",
        "topic": {
            "topics": ["Use case selection"]
        }
    },
    {
        "id": 18,
        "question": "How do you get all keys from localStorage?",
        "options": {
            "A": "<pre>Object.keys(localStorage)</pre>",
            "B": "<pre>localStorage.getAllKeys()</pre>",
            "C": "<pre>localStorage.keys</pre>",
            "D": "<pre>localStorage.listKeys()</pre>"
        },
        "correct": "A",
        "explanation": "You can use Object.keys() with localStorage to get an array of all keys.",
        "topic": {
            "topics": ["Data retrieval"]
        }
    },
    {
        "id": 19,
        "question": "What happens if you store undefined in localStorage?",
        "options": {
            "A": "It stores the string 'undefined'",
            "B": "It causes an error",
            "C": "It stores an empty string",
            "D": "It ignores the operation"
        },
        "correct": "A",
        "explanation": "undefined gets converted to the string 'undefined' when stored in localStorage.",
        "topic": {
            "topics": ["Data serialization"]
        }
    },
    {
        "id": 20,
        "question": "How do you check if a specific key exists in sessionStorage?",
        "options": {
            "A": "<pre>sessionStorage.getItem('key') !== null</pre>",
            "B": "<pre>'key' in sessionStorage</pre>",
            "C": "<pre>sessionStorage.has('key')</pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "You can check if getItem() returns non-null or use the 'in' operator to check for key existence.",
        "topic": {
            "topics": ["Data retrieval"]
        }
    },
    {
        "id": 21,
        "question": "What is a good practice for storing complex objects?",
        "options": {
            "A": "Store only necessary properties, not entire objects",
            "B": "Store the entire object always",
            "C": "Split objects across multiple keys",
            "D": "Compress objects before storing"
        },
        "correct": "A",
        "explanation": "Only store the properties you actually need to minimize storage usage and improve performance.",
        "topic": {
            "topics": ["Use case selection"]
        }
    },
    {
        "id": 22,
        "question": "How does localStorage behave with different protocols?",
        "options": {
            "A": "HTTP and HTTPS have separate storage",
            "B": "Protocol doesn't matter",
            "C": "Only HTTPS can use localStorage",
            "D": "HTTP can read HTTPS storage"
        },
        "correct": "A",
        "explanation": "localStorage is separated by origin, which includes protocol. HTTP and HTTPS are considered different origins.",
        "topic": {
            "topics": ["Storage scope"]
        }
    },
    {
        "id": 23,
        "question": "What does this code accomplish? [CODE]try {\n  localStorage.setItem('key', largeData);\n} catch (e) {\n  console.log('Storage full');\n}[/CODE]",
        "options": {
            "A": "Handles storage quota errors gracefully",
            "B": "Prevents all storage errors",
            "C": "Makes storage faster",
            "D": "Compresses data automatically"
        },
        "correct": "A",
        "explanation": "This try/catch block gracefully handles QuotaExceededError when storage is full.",
        "topic": {
            "topics": ["Error prevention"]
        }
    },
    {
        "id": 24,
        "question": "How do you store a Date object in localStorage?",
        "options": {
            "A": "<pre>localStorage.setItem('key', date.toISOString())</pre>",
            "B": "<pre>localStorage.setItem('key', date)</pre>",
            "C": "<pre>localStorage.date = date</pre>",
            "D": "<pre>localStorage.setItem('key', date.toString())</pre>"
        },
        "correct": "A",
        "explanation": "Convert Date objects to ISO string format for reliable storage and parsing later.",
        "topic": {
            "topics": ["Data serialization"]
        }
    },
    {
        "id": 25,
        "question": "What happens to sessionStorage when duplicating a tab?",
        "options": {
            "A": "New tab gets a fresh sessionStorage",
            "B": "SessionStorage is copied to new tab",
            "C": "Both tabs share the same sessionStorage",
            "D": "SessionStorage is cleared in both tabs"
        },
        "correct": "A",
        "explanation": "Duplicating a tab typically creates a new session with empty sessionStorage, though browser behavior may vary.",
        "topic": {
            "topics": ["Storage lifecycle"]
        }
    },
    {
        "id": 26,
        "question": "How do you properly retrieve a number from localStorage?",
        "options": {
            "A": "<pre>Number(localStorage.getItem('key'))</pre>",
            "B": "<pre>localStorage.getItem('key').toNumber()</pre>",
            "C": "<pre>localStorage.getNumber('key')</pre>",
            "D": "<pre>parseInt(localStorage.getItem('key'))</pre>"
        },
        "correct": "A",
        "explanation": "Use Number() or parseFloat() to convert the stored string back to a number.",
        "topic": {
            "topics": ["Data retrieval"]
        }
    },
    {
        "id": 27,
        "question": "What is a limitation of browser storage for sensitive data?",
        "options": {
            "A": "Vulnerable to XSS attacks",
            "B": "Data expires too quickly",
            "C": "Limited to 1KB per key",
            "D": "Requires SSL certificate"
        },
        "correct": "A",
        "explanation": "Any JavaScript running on the page can access storage, making it vulnerable to cross-site scripting attacks.",
        "topic": {
            "topics": ["Error prevention"]
        }
    },
    {
        "id": 28,
        "question": "How do you iterate through all sessionStorage items?",
        "options": {
            "A": "<pre>for (let i = 0; i < sessionStorage.length; i++) {\n  const key = sessionStorage.key(i);\n  const value = sessionStorage.getItem(key);\n}</pre>",
            "B": "<pre>for (let key in sessionStorage) {}</pre>",
            "C": "<pre>sessionStorage.forEach((key, value) => {})</pre>",
            "D": "<pre>Object.entries(sessionStorage).forEach()</pre>"
        },
        "correct": "A",
        "explanation": "Use a for loop with sessionStorage.length and sessionStorage.key() to iterate through all items.",
        "topic": {
            "topics": ["Data retrieval"]
        }
    },
    {
        "id": 29,
        "question": "What is the main advantage of using browser storage over cookies?",
        "options": {
            "A": "Larger storage capacity",
            "B": "Automatic server transmission",
            "C": "Better security",
            "D": "Faster access speed"
        },
        "correct": "A",
        "explanation": "Browser storage offers much larger capacity (MBs) compared to cookies (KBs).",
        "topic": {
            "topics": ["Use case selection"]
        }
    },
    {
        "id": 30,
        "question": "How do you handle storage when it's not available?",
        "options": {
            "A": "Provide fallback to in-memory storage",
            "B": "Show an error message to user",
            "C": "Disable the feature completely",
            "D": "Use cookies instead automatically"
        },
        "explanation": "When storage is unavailable, fall back to in-memory storage or other alternatives to maintain functionality.",
        "correct": "A",
        "topic": {
            "topics": ["Error prevention"]
        }
    }
];

module.exports = { metadata, questions };