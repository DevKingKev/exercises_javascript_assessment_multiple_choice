module.exports = {
  "metadata": {
    "title": "JavaScript Map/Set vs Object Key Handling",
    "description": "Common pitfalls and differences in key handling between Maps, Sets, and plain Objects in JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Key coercion in objects",
      "Map key preservation",
      "Set value handling",
      "Type conversion issues",
      "Equality comparisons",
      "Common pitfalls",
      "Best practices"
    ],
    "topicLinks": [
      {
        "topicName": "Key coercion in objects",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#property_names"
      },
      {
        "topicName": "Map key preservation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#key_equality"
      },
      {
        "topicName": "Set value handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#value_equality"
      },
      {
        "topicName": "Type conversion issues",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
      },
      {
        "topicName": "Equality comparisons",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#key_equality"
      },
      {
        "topicName": "Common pitfalls",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps"
      },
      {
        "topicName": "Best practices",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections"
      }
    ],
    "assessmentId": 30,
    "assessmentUniqueId": 1762769842005,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What happens when you use a number as an object key?",
      "options": {
        "A": "It gets converted to a string",
        "B": "It stays as a number",
        "C": "It causes an error",
        "D": "It becomes undefined"
      },
      "correct": "A",
      "explanation": "Object keys are always converted to strings. <pre>{1: 'value'}</pre> becomes <pre>{'1': 'value'}</pre>.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 2,
      "question": "How does Map handle different data types as keys?",
      "options": {
        "A": "Preserves the original type",
        "B": "Converts them to strings",
        "C": "Converts them to numbers",
        "D": "Only allows strings"
      },
      "correct": "A",
      "explanation": "Map preserves the exact data type of keys, so numbers, objects, and functions can all be used as distinct keys.",
      "topic": {
        "topics": [
          "Map key preservation"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the result? [CODE]const obj = {};\nobj[1] = 'number';\nobj['1'] = 'string';\nconsole.log(obj[1]);[/CODE]",
      "options": {
        "A": "<pre>'string'</pre>",
        "B": "<pre>'number'</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Throws error"
      },
      "correct": "A",
      "explanation": "Both <pre>1</pre> and <pre>'1'</pre> become the same string key <pre>'1'</pre> in objects, so the last assignment wins.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 4,
      "question": "What is the result? [CODE]const map = new Map();\nmap.set(1, 'number');\nmap.set('1', 'string');\nconsole.log(map.get(1));[/CODE]",
      "options": {
        "A": "<pre>'number'</pre>",
        "B": "<pre>'string'</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Throws error"
      },
      "correct": "A",
      "explanation": "Map treats <pre>1</pre> and <pre>'1'</pre> as different keys, so <pre>map.get(1)</pre> returns 'number'.",
      "topic": {
        "topics": [
          "Map key preservation"
        ]
      }
    },
    {
      "id": 5,
      "question": "What happens when you use an object as an object key?",
      "options": {
        "A": "It gets converted to string '[object Object]'",
        "B": "It works as expected",
        "C": "It causes an error",
        "D": "It becomes null"
      },
      "correct": "A",
      "explanation": "Objects used as keys get converted to the string <pre>'[object Object]'</pre>, so all objects become the same key.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 6,
      "question": "Can you use different objects as distinct keys in a Map?",
      "options": {
        "A": "Yes, each object is a unique key",
        "B": "No, they become the same key",
        "C": "Only if they have different properties",
        "D": "Only if they are arrays"
      },
      "correct": "A",
      "explanation": "In Map, each object is a distinct key based on its identity, not its content.",
      "topic": {
        "topics": [
          "Map key preservation"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the result? [CODE]const obj = {};\nconst key1 = {};\nconst key2 = {};\nobj[key1] = 'first';\nobj[key2] = 'second';\nconsole.log(obj[key1]);[/CODE]",
      "options": {
        "A": "<pre>'second'</pre>",
        "B": "<pre>'first'</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Throws error"
      },
      "correct": "A",
      "explanation": "Both objects become the string <pre>'[object Object]'</pre> as keys, so the second assignment overwrites the first.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 8,
      "question": "How does Set handle NaN values?",
      "options": {
        "A": "Treats all NaN as the same value",
        "B": "Treats each NaN as different",
        "C": "Throws an error with NaN",
        "D": "Converts NaN to undefined"
      },
      "correct": "A",
      "explanation": "Unlike regular JavaScript where <pre>NaN !== NaN</pre>, Set considers all NaN values as equal.",
      "topic": {
        "topics": [
          "Set value handling"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the result? [CODE]const set = new Set();\nset.add(NaN);\nset.add(NaN);\nconsole.log(set.size);[/CODE]",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>1</pre>",
        "C": "<pre>0</pre>",
        "D": "Throws error"
      },
      "correct": "B",
      "explanation": "Set treats all NaN values as identical, so the second add() has no effect.",
      "topic": {
        "topics": [
          "Set value handling"
        ]
      }
    },
    {
      "id": 10,
      "question": "What happens when you use boolean values as object keys?",
      "options": {
        "A": "They stay as booleans",
        "B": "They get converted to strings 'true'/'false'",
        "C": "They cause an error",
        "D": "They become numbers 1/0"
      },
      "correct": "B",
      "explanation": "Boolean keys <pre>true</pre> and <pre>false</pre> become strings <pre>'true'</pre> and <pre>'false'</pre> in objects.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 11,
      "question": "Can Map use functions as keys?",
      "options": {
        "A": "Functions get converted to strings",
        "B": "Yes, functions can be Map keys",
        "C": "Only arrow functions",
        "D": "No, only primitives allowed"
      },
      "correct": "B",
      "explanation": "Map can use any value as a key, including functions, and preserves them as distinct keys.",
      "topic": {
        "topics": [
          "Map key preservation"
        ]
      }
    },
    {
      "id": 12,
      "question": "What is the result? [CODE]const obj = {};\nobj[true] = 'bool';\nobj['true'] = 'string';\nconsole.log(obj[true]);[/CODE]",
      "options": {
        "A": "Throws error",
        "B": "<pre>'string'</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>'bool'</pre>"
      },
      "correct": "B",
      "explanation": "<pre>true</pre> becomes string <pre>'true'</pre>, so both assignments use the same key and the last one wins.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 13,
      "question": "How does Set handle +0 and -0?",
      "options": {
        "A": "Treats them as different values",
        "B": "Treats them as the same value",
        "C": "Converts -0 to +0",
        "D": "Throws an error with -0"
      },
      "correct": "B",
      "explanation": "Set considers +0 and -0 to be the same value, following the SameValueZero algorithm.",
      "topic": {
        "topics": [
          "Set value handling"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is a common pitfall when using arrays as object keys?",
      "options": {
        "A": "Only empty arrays work as keys",
        "B": "All arrays become the same '[object Object]' key",
        "C": "Arrays cannot be object keys",
        "D": "Arrays get sorted automatically"
      },
      "correct": "B",
      "explanation": "Arrays used as object keys get converted to the string <pre>'[object Object]'</pre>, making all arrays the same key.",
      "topic": {
        "topics": [
          "Common pitfalls"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the result? [CODE]const map = new Map();\nconst arr1 = [1, 2];\nconst arr2 = [1, 2];\nmap.set(arr1, 'first');\nmap.set(arr2, 'second');\nconsole.log(map.get(arr1));[/CODE]",
      "options": {
        "A": "<pre>'second'</pre>",
        "B": "<pre>'first'</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Throws error"
      },
      "correct": "B",
      "explanation": "Map uses object identity, not content. <pre>arr1</pre> and <pre>arr2</pre> are different objects, so they are different keys.",
      "topic": {
        "topics": [
          "Map key preservation"
        ]
      }
    },
    {
      "id": 16,
      "question": "What happens with null and undefined as object keys?",
      "options": {
        "A": "They become empty strings",
        "B": "They become strings 'null' and 'undefined'",
        "C": "They stay as null and undefined",
        "D": "They cause errors"
      },
      "correct": "B",
      "explanation": "null and undefined get converted to strings <pre>'null'</pre> and <pre>'undefined'</pre> when used as object keys.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 17,
      "question": "How does Map handle key equality?",
      "options": {
        "A": "Uses strict equality ===",
        "B": "Uses loose equality ==",
        "C": "Uses SameValueZero algorithm",
        "D": "Converts keys to strings first"
      },
      "correct": "C",
      "explanation": "Map uses the SameValueZero algorithm, which is like === but treats NaN as equal and doesn't distinguish +0/-0.",
      "topic": {
        "topics": [
          "Equality comparisons"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the result? [CODE]const obj = {};\nobj[null] = 'null';\nobj[undefined] = 'undefined';\nconsole.log(obj['null']);[/CODE]",
      "options": {
        "A": "<pre>'undefined'</pre>",
        "B": "<pre>undefined</pre>",
        "C": "<pre>'null'</pre>",
        "D": "Throws error"
      },
      "correct": "C",
      "explanation": "Both null and undefined become string keys, so <pre>obj['null']</pre> accesses the value set with <pre>obj[null]</pre>.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 19,
      "question": "Can Set contain duplicate objects?",
      "options": {
        "A": "Only if they have different properties",
        "B": "No, objects are always deduplicated",
        "C": "Yes, if they are different object instances",
        "D": "Objects cannot be added to Set"
      },
      "correct": "C",
      "explanation": "Set uses object identity, so different object instances with the same content are considered different values.",
      "topic": {
        "topics": [
          "Set value handling"
        ]
      }
    },
    {
      "id": 20,
      "question": "What is a key advantage of Map for numeric keys?",
      "options": {
        "A": "Automatically sorts numeric keys",
        "B": "Faster access for numbers",
        "C": "Preserves number type without string conversion",
        "D": "Smaller memory usage for numbers"
      },
      "correct": "C",
      "explanation": "Map keeps numbers as numbers, avoiding the string conversion that happens with object keys.",
      "topic": {
        "topics": [
          "Best practices"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the result? [CODE]const set = new Set();\nset.add(+0);\nset.add(-0);\nconsole.log(set.size);[/CODE]",
      "options": {
        "A": "Throws error",
        "B": "<pre>2</pre>",
        "C": "<pre>1</pre>",
        "D": "<pre>0</pre>"
      },
      "correct": "C",
      "explanation": "Set treats +0 and -0 as the same value, so the second add() has no effect.",
      "topic": {
        "topics": [
          "Set value handling"
        ]
      }
    },
    {
      "id": 22,
      "question": "What happens when you use Symbol as an object key?",
      "options": {
        "A": "It becomes undefined",
        "B": "It becomes a string",
        "C": "It stays as a Symbol without conversion",
        "D": "It causes an error"
      },
      "correct": "C",
      "explanation": "Symbols are one of the few data types that don't get converted when used as object keys.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 23,
      "question": "How does Map handle different object instances with same content?",
      "options": {
        "A": "Converts them to strings first",
        "B": "Treats them as the same key",
        "C": "Treats them as different keys",
        "D": "Compares their properties"
      },
      "correct": "C",
      "explanation": "Map uses object identity, so different object instances are always different keys regardless of content.",
      "topic": {
        "topics": [
          "Map key preservation"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is the result? [CODE]const obj = {};\nobj[1] = 'one';\nobj['01'] = 'zero one';\nconsole.log(obj[1]);[/CODE]",
      "options": {
        "A": "<pre>'zero one'</pre>",
        "B": "Throws error",
        "C": "<pre>undefined</pre>",
        "D": "<pre>'one'</pre>"
      },
      "correct": "D",
      "explanation": "<pre>1</pre> becomes <pre>'1'</pre> and <pre>'01'</pre> stays <pre>'01'</pre>, so they are different keys.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 25,
      "question": "When should you use Map instead of Object?",
      "options": {
        "A": "When you need prototype methods",
        "B": "When you need JSON serialization",
        "C": "When working with simple string keys",
        "D": "When you need to preserve key types"
      },
      "correct": "D",
      "explanation": "Map is better when you need to use various data types as keys without them being converted to strings.",
      "topic": {
        "topics": [
          "Best practices"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is the result? [CODE]const map = new Map();\nmap.set(1, 'number');\nmap.set('1', 'string');\nconsole.log(map.size);[/CODE]",
      "options": {
        "A": "Throws error",
        "B": "<pre>1</pre>",
        "C": "<pre>0</pre>",
        "D": "<pre>2</pre>"
      },
      "correct": "D",
      "explanation": "Map treats <pre>1</pre> and <pre>'1'</pre> as distinct keys, so both are stored.",
      "topic": {
        "topics": [
          "Map key preservation"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is a common bug when using object keys with numbers?",
      "options": {
        "A": "Automatic sorting of numeric keys",
        "B": "Numbers being too large as keys",
        "C": "Numbers becoming floats",
        "D": "Accidental key overwrites due to string conversion"
      },
      "correct": "D",
      "explanation": "Different numeric values that become the same string key can accidentally overwrite each other in objects.",
      "topic": {
        "topics": [
          "Common pitfalls"
        ]
      }
    },
    {
      "id": 28,
      "question": "How does Set handle object references?",
      "options": {
        "A": "Objects cannot be added to Set",
        "B": "Objects with same content are deduplicated",
        "C": "Objects get converted to strings",
        "D": "Each object reference is unique"
      },
      "correct": "D",
      "explanation": "Set stores object references, so each object instance is unique regardless of its properties.",
      "topic": {
        "topics": [
          "Set value handling"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the result? [CODE]const obj = {};\nobj[[1,2]] = 'array';\nobj[[1,2]] = 'another array';\nconsole.log(Object.keys(obj).length);[/CODE]",
      "options": {
        "A": "Throws error",
        "B": "<pre>2</pre>",
        "C": "<pre>0</pre>",
        "D": "<pre>1</pre>"
      },
      "correct": "D",
      "explanation": "Both arrays become the string <pre>'1,2'</pre> as keys, so the second assignment overwrites the first.",
      "topic": {
        "topics": [
          "Key coercion in objects"
        ]
      }
    },
    {
      "id": 30,
      "question": "Why might you choose Map for storing metadata about DOM elements?",
      "options": {
        "A": "Objects cannot store DOM references",
        "B": "Map is faster for DOM operations",
        "C": "Map automatically cleans up DOM references",
        "D": "DOM elements can be used as keys directly"
      },
      "correct": "D",
      "explanation": "Map allows using DOM elements as keys, while objects would convert them to useless string <pre>'[object Object]'</pre>.",
      "topic": {
        "topics": [
          "Best practices"
        ]
      }
    }
  ]
}
