module.exports = {
  "metadata": {
    "title": "JavaScript Prototypes and Inheritance Basics",
    "description": "Fundamental concepts of prototypal inheritance, constructor functions, and the prototype chain in JavaScript. Covers basic object creation and inheritance patterns.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Constructor functions",
      "Prototype property",
      "Prototype chain",
      "Object creation",
      "Instance methods",
      "Inheritance basics",
      "Object prototypes"
    ],
    "topicLinks": [
      {
        "topicName": "Constructor functions",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor"
      },
      {
        "topicName": "Prototype property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype"
      },
      {
        "topicName": "Prototype chain",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
      },
      {
        "topicName": "Object creation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
      },
      {
        "topicName": "Instance methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"
      },
      {
        "topicName": "Inheritance basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
      },
      {
        "topicName": "Object prototypes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype"
      }
    ],
    "assessmentId": 20,
    "assessmentUniqueId": 1762518982806,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is a constructor function in JavaScript?",
      "options": {
        "A": "A function used to create and initialize objects",
        "B": "A function that destroys objects",
        "C": "A function that only works with arrays",
        "D": "A built-in JavaScript class"
      },
      "correct": "A",
      "explanation": "A constructor function is a regular function that's used with the <pre>new</pre> keyword to create and initialize new objects. By convention, constructor functions start with a capital letter.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 2,
      "question": "What keyword is used to create an object from a constructor function?",
      "options": {
        "A": "<pre>new</pre>",
        "B": "<pre>create</pre>",
        "C": "<pre>construct</pre>",
        "D": "<pre>make</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>new</pre> keyword is used to create an instance of an object from a constructor function. It creates a new object and sets the constructor's prototype.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 3,
      "question": "What property do all functions have that is used for inheritance?",
      "options": {
        "A": "<pre>prototype</pre>",
        "B": "<pre>__proto__</pre>",
        "C": "<pre>constructor</pre>",
        "D": "<pre>inherits</pre>"
      },
      "correct": "A",
      "explanation": "All functions have a <pre>prototype</pre> property that is used as the prototype for objects created with that function as a constructor.",
      "topic": {
        "topics": [
          "Prototype property"
        ]
      }
    },
    {
      "id": 4,
      "question": "What is the prototype chain?",
      "options": {
        "A": "The sequence of prototypes an object inherits from",
        "B": "A way to chain function calls",
        "C": "A method for linking arrays together",
        "D": "A type of loop in JavaScript"
      },
      "correct": "A",
      "explanation": "The prototype chain is the sequence of prototype objects that JavaScript follows when looking for properties and methods. It starts with the object's own prototype and continues up to <pre>Object.prototype</pre>.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 5,
      "question": "What does the <pre>instanceof</pre> operator check?",
      "options": {
        "A": "If an object is an instance of a constructor",
        "B": "If a variable is defined",
        "C": "If two objects are equal",
        "D": "If a function exists"
      },
      "correct": "A",
      "explanation": "The <pre>instanceof</pre> operator checks whether an object is an instance of a particular constructor function by examining the prototype chain.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you add a method to all instances of a constructor?",
      "options": {
        "A": "Add it to the constructor's prototype",
        "B": "Add it to each instance individually",
        "C": "Use the <pre>addMethod</pre> function",
        "D": "Modify the Object.prototype"
      },
      "correct": "A",
      "explanation": "By adding methods to the constructor's prototype, all instances created from that constructor will have access to those methods through the prototype chain.",
      "topic": {
        "topics": [
          "Prototype property"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the result of [CODE]{} instanceof Object[/CODE]?",
      "options": {
        "A": "<pre>true</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "All objects in JavaScript are instances of <pre>Object</pre> because they inherit from <pre>Object.prototype</pre> in the prototype chain.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 8,
      "question": "What property points to an object's prototype?",
      "options": {
        "A": "<pre>prototype</pre>",
        "B": "<pre>__proto__</pre>",
        "C": "<pre>super</pre>",
        "D": "<pre>parent</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>__proto__</pre> property (officially accessed via <pre>Object.getPrototypeOf()</pre>) points to the object's prototype in the prototype chain.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the purpose of the <pre>constructor</pre> property?",
      "options": {
        "A": "It creates new objects",
        "B": "It references the function that created the object",
        "C": "It destroys old objects",
        "D": "It checks if an object is a constructor"
      },
      "correct": "B",
      "explanation": "The <pre>constructor</pre> property is a reference to the function that was used to create the object instance.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 10,
      "question": "How can you create an object without a prototype?",
      "options": {
        "A": "All objects have prototypes",
        "B": "<pre>Object.create(null)</pre>",
        "C": "<pre>{}</pre>",
        "D": "<pre>new Object()</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.create(null)</pre> creates an object with no prototype, meaning it doesn't inherit from <pre>Object.prototype</pre>.",
      "topic": {
        "topics": [
          "Object creation"
        ]
      }
    },
    {
      "id": 11,
      "question": "What happens if you try to access a property that doesn't exist on an object?",
      "options": {
        "A": "It returns <pre>undefined</pre> immediately",
        "B": "JavaScript looks up the prototype chain",
        "C": "It throws an error",
        "D": "It creates the property automatically"
      },
      "correct": "B",
      "explanation": "When a property isn't found on an object, JavaScript automatically looks for it in the object's prototype, and continues up the prototype chain until found or until the chain ends.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 12,
      "question": "What is the prototype of a plain object created with <pre>{}</pre>?",
      "options": {
        "A": "<pre>null</pre>",
        "B": "<pre>Object.prototype</pre>",
        "C": "<pre>Function.prototype</pre>",
        "D": "<pre>Array.prototype</pre>"
      },
      "correct": "B",
      "explanation": "All plain objects created with object literal syntax inherit from <pre>Object.prototype</pre> by default.",
      "topic": {
        "topics": [
          "Object prototypes"
        ]
      }
    },
    {
      "id": 13,
      "question": "How do you check if an object has its own property (not inherited)?",
      "options": {
        "A": "<pre>'prop' in obj</pre>",
        "B": "<pre>obj.hasOwnProperty('prop')</pre>",
        "C": "<pre>obj.contains('prop')</pre>",
        "D": "<pre>obj.owns('prop')</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>hasOwnProperty()</pre> method returns <pre>true</pre> only if the property exists directly on the object, not inherited through the prototype chain.",
      "topic": {
        "topics": [
          "Instance methods"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the difference between <pre>hasOwnProperty()</pre> and the <pre>in</pre> operator?",
      "options": {
        "A": "<pre>hasOwnProperty</pre> is faster",
        "B": "<pre>hasOwnProperty</pre> checks own properties, <pre>in</pre> checks prototype chain",
        "C": "<pre>in</pre> only works with arrays",
        "D": "There is no difference"
      },
      "correct": "B",
      "explanation": "<pre>hasOwnProperty()</pre> only returns <pre>true</pre> for properties that exist directly on the object, while the <pre>in</pre> operator returns <pre>true</pre> for any property found in the prototype chain.",
      "topic": {
        "topics": [
          "Instance methods"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the result of [CODE]Object.prototype.__proto__[/CODE]?",
      "options": {
        "A": "<pre>Object</pre>",
        "B": "<pre>null</pre>",
        "C": "<pre>Function.prototype</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.prototype</pre> is at the top of the prototype chain for most objects, and its prototype is <pre>null</pre>, indicating the end of the chain.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 16,
      "question": "How can you set the prototype of an existing object?",
      "options": {
        "A": "<pre>Object.setPrototypeOf(obj, proto)</pre>",
        "B": "<pre>obj.__proto__ = proto</pre>",
        "C": "<pre>obj.setPrototype(proto)</pre>",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "You can use either <pre>Object.setPrototypeOf()</pre> (modern) or directly assign to <pre>__proto__</pre> (legacy) to set an object's prototype, though changing prototypes at runtime is generally discouraged for performance reasons.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 17,
      "question": "What happens when you call a constructor function without <pre>new</pre>?",
      "options": {
        "A": "It throws an error",
        "B": "It automatically adds <pre>new</pre>",
        "C": "It runs as a normal function, may pollute global scope",
        "D": "It returns <pre>undefined</pre>"
      },
      "correct": "C",
      "explanation": "Without <pre>new</pre>, a constructor function runs as a regular function. If it uses <pre>this</pre>, it will refer to the global object (or <pre>undefined</pre> in strict mode), potentially creating global variables.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the prototype of an array?",
      "options": {
        "A": "<pre>Function.prototype</pre>",
        "B": "<pre>Object.prototype</pre>",
        "C": "<pre>Array.prototype</pre>",
        "D": "<pre>Array</pre>"
      },
      "correct": "C",
      "explanation": "Arrays inherit from <pre>Array.prototype</pre>, which itself inherits from <pre>Object.prototype</pre>. This is why arrays have methods like <pre>push()</pre> and <pre>pop()</pre>.",
      "topic": {
        "topics": [
          "Object prototypes"
        ]
      }
    },
    {
      "id": 19,
      "question": "How do you create an object that inherits from another object?",
      "options": {
        "A": "<pre>Object.inherit(parentObj)</pre>",
        "B": "<pre>new parentObj()</pre>",
        "C": "<pre>Object.create(parentObj)</pre>",
        "D": "<pre>parentObj.clone()</pre>"
      },
      "correct": "C",
      "explanation": "<pre>Object.create()</pre> creates a new object with the specified prototype object and properties. It's the modern way to set up inheritance.",
      "topic": {
        "topics": [
          "Object creation"
        ]
      }
    },
    {
      "id": 20,
      "question": "What is true about methods added to a constructor's prototype?",
      "options": {
        "A": "They are private to the constructor",
        "B": "Each instance gets its own copy",
        "C": "All instances share the same method",
        "D": "They cannot access instance data"
      },
      "correct": "C",
      "explanation": "Methods on the prototype are shared by all instances, which is memory-efficient. When called, <pre>this</pre> refers to the instance, allowing access to instance-specific data.",
      "topic": {
        "topics": [
          "Prototype property"
        ]
      }
    },
    {
      "id": 21,
      "question": "What does <pre>Object.getPrototypeOf(obj)</pre> return?",
      "options": {
        "A": "The object itself",
        "B": "All properties of the object",
        "C": "The prototype of the object",
        "D": "The constructor function"
      },
      "correct": "C",
      "explanation": "<pre>Object.getPrototypeOf()</pre> is the standard way to get the prototype of an object, replacing the non-standard <pre>__proto__</pre> property.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the relationship between a constructor and its prototype?",
      "options": {
        "A": "They are the same object",
        "B": "Instance's prototype is the constructor",
        "C": "Constructor's prototype is the prototype for instances",
        "D": "There is no relationship"
      },
      "correct": "C",
      "explanation": "When you create an object with <pre>new Constructor()</pre>, the new object's prototype is set to <pre>Constructor.prototype</pre>.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 23,
      "question": "What happens when you modify an object's prototype at runtime?",
      "options": {
        "A": "It has no effect",
        "B": "Only new instances see the changes",
        "C": "It breaks existing instances",
        "D": "All instances immediately see the changes"
      },
      "correct": "D",
      "explanation": "Since objects access properties through the prototype chain dynamically, changes to the prototype are immediately visible to all instances that inherit from it.",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 24,
      "question": "How can you check if a property exists anywhere in the prototype chain?",
      "options": {
        "A": "<pre>obj.hasProperty('prop')</pre>",
        "B": "<pre>obj.prop !== undefined</pre>",
        "C": "<pre>obj.exists('prop')</pre>",
        "D": "<pre>'prop' in obj</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>in</pre> operator returns <pre>true</pre> if the specified property exists in the object or anywhere in its prototype chain.",
      "topic": {
        "topics": [
          "Instance methods"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the purpose of the <pre>constructor</pre> property on the prototype?",
      "options": {
        "A": "It has no purpose",
        "B": "It creates new instances",
        "C": "It destroys the prototype",
        "D": "It points back to the constructor function"
      },
      "correct": "D",
      "explanation": "By default, the <pre>constructor</pre> property on a constructor's prototype points back to the constructor function itself, creating a circular reference.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is true about inheritance in JavaScript?",
      "options": {
        "A": "It uses classical inheritance",
        "B": "It only uses interfaces",
        "C": "It doesn't support inheritance",
        "D": "It uses prototypal inheritance"
      },
      "correct": "D",
      "explanation": "JavaScript uses prototypal inheritance, where objects can inherit directly from other objects, unlike classical inheritance found in languages like Java or C++.",
      "topic": {
        "topics": [
          "Inheritance basics"
        ]
      }
    },
    {
      "id": 27,
      "question": "What happens if a property exists on both an object and its prototype?",
      "options": {
        "A": "The prototype's property takes precedence",
        "B": "A random property is used",
        "C": "It causes an error",
        "D": "The object's own property takes precedence"
      },
      "correct": "D",
      "explanation": "When looking up properties, JavaScript checks the object first. If the property exists there, it uses that value without checking the prototype chain (this is called 'property shadowing').",
      "topic": {
        "topics": [
          "Prototype chain"
        ]
      }
    },
    {
      "id": 28,
      "question": "How do you create multiple objects with the same structure?",
      "options": {
        "A": "JavaScript doesn't support this",
        "B": "Copy and paste object literals",
        "C": "Use the <pre>clone</pre> keyword",
        "D": "Use a constructor function"
      },
      "correct": "D",
      "explanation": "Constructor functions allow you to create multiple objects with the same structure and shared methods through the prototype, following the DRY (Don't Repeat Yourself) principle.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the result of [CODE][].constructor === Array[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>constructor</pre> property of an array points to the <pre>Array</pre> constructor function, so this comparison returns <pre>true</pre>.",
      "topic": {
        "topics": [
          "Constructor functions"
        ]
      }
    },
    {
      "id": 30,
      "question": "Why is prototypal inheritance powerful in JavaScript?",
      "options": {
        "A": "It only works with built-in types",
        "B": "It's faster than classical inheritance",
        "C": "It doesn't use memory",
        "D": "Objects can directly inherit from other objects"
      },
      "correct": "D",
      "explanation": "Prototypal inheritance is powerful because any object can directly inherit from any other object, allowing for flexible and dynamic object relationships without the rigid class hierarchies of classical inheritance.",
      "topic": {
        "topics": [
          "Inheritance basics"
        ]
      }
    }
  ]
}
