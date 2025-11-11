module.exports = {
  "metadata": {
    "title": "JavaScript Prototype Chain Essentials",
    "description": "Fundamental concepts of prototype inheritance, object relationships, and basic inheritance patterns in JavaScript.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Prototype relationships",
      "Object creation methods",
      "Property inheritance",
      "Method lookup",
      "Constructor basics",
      "Instance checking",
      "Prototype modification"
    ],
    "topicLinks": [
      {
        "topicName": "Prototype relationships",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf"
      },
      {
        "topicName": "Object creation methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
      },
      {
        "topicName": "Property inheritance",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
      },
      {
        "topicName": "Method lookup",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype"
      },
      {
        "topicName": "Constructor basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor"
      },
      {
        "topicName": "Instance checking",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof"
      },
      {
        "topicName": "Prototype modification",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"
      }
    ],
    "assessmentId": 23,
    "assessmentUniqueId": 1762522667510,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the primary mechanism for inheritance in JavaScript?",
      "options": {
        "A": "Class inheritance",
        "B": "Prototype chain",
        "C": "Interface implementation",
        "D": "Module imports"
      },
      "correct": "B",
      "explanation": "JavaScript uses prototypal inheritance as its primary mechanism, where objects can inherit properties and methods from other objects through the prototype chain.",
      "topic": {
        "topics": [
          "Property inheritance"
        ]
      }
    },
    {
      "id": 2,
      "question": "How do you create an object that inherits from another object?",
      "options": {
        "A": "<pre>new parentObj()</pre>",
        "B": "<pre>parentObj.newInstance()</pre>",
        "C": "<pre>Object.inherit(parentObj)</pre>",
        "D": "<pre>Object.create(parentObj)</pre>"
      },
      "correct": "D",
      "explanation": "<pre>Object.create()</pre> is the standard way to create a new object with a specified prototype object. The new object will inherit from the parent object.",
      "topic": {
        "topics": [
          "Object creation methods"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the purpose of the <pre>constructor</pre> property?",
      "options": {
        "A": "To destroy objects",
        "B": "To create new objects",
        "C": "To reference the function that created the object",
        "D": "To set inheritance"
      },
      "correct": "C",
      "explanation": "The <pre>constructor</pre> property points to the constructor function that was used to create the object instance. It's automatically set up when using constructor functions.",
      "topic": {
        "topics": [
          "Constructor basics"
        ]
      }
    },
    {
      "id": 4,
      "question": "What happens when you access a method on an object?",
      "options": {
        "A": "It must exist directly on the object",
        "B": "JavaScript looks up the prototype chain if not found on the object",
        "C": "It searches global scope",
        "D": "It creates the method automatically"
      },
      "correct": "B",
      "explanation": "When a method is accessed on an object, JavaScript first checks the object itself. If not found, it searches the prototype chain until the method is found or the chain ends.",
      "topic": {
        "topics": [
          "Method lookup"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the result of [CODE]Object.prototype.isPrototypeOf({})[/CODE]?",
      "options": {
        "A": "<pre>true</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "This returns <pre>true</pre> because all plain objects created with <pre>{}</pre> inherit from <pre>Object.prototype</pre> through the prototype chain.",
      "topic": {
        "topics": [
          "Prototype relationships"
        ]
      }
    },
    {
      "id": 6,
      "question": "How can you check if an object is a direct instance of a constructor?",
      "options": {
        "A": "<pre>Constructor.hasInstance(object)</pre>",
        "B": "<pre>object instanceof Constructor</pre>",
        "C": "<pre>object.constructor === Constructor</pre>",
        "D": "<pre>object.isInstanceOf(Constructor)</pre>"
      },
      "correct": "C",
      "explanation": "Checking <pre>object.constructor === Constructor</pre> verifies if the object was created directly by that constructor, while <pre>instanceof</pre> checks the entire prototype chain.",
      "topic": {
        "topics": [
          "Instance checking"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the prototype of an array literal <pre>[]</pre>?",
      "options": {
        "A": "<pre>Array.prototype</pre>",
        "B": "<pre>Object.prototype</pre>",
        "C": "<pre>Function.prototype</pre>",
        "D": "<pre>null</pre>"
      },
      "correct": "A",
      "explanation": "Arrays created with array literal syntax inherit from <pre>Array.prototype</pre>, which provides array-specific methods like <pre>push()</pre>, <pre>pop()</pre>, and <pre>slice()</pre>.",
      "topic": {
        "topics": [
          "Prototype relationships"
        ]
      }
    },
    {
      "id": 8,
      "question": "What happens when you add a method to a constructor's prototype?",
      "options": {
        "A": "All existing and future instances can use it",
        "B": "Only new instances can use it",
        "C": "Only the constructor can use it",
        "D": "It replaces existing methods"
      },
      "correct": "A",
      "explanation": "When you add a method to a constructor's prototype, all instances (both existing and future) immediately have access to that method through the prototype chain.",
      "topic": {
        "topics": [
          "Prototype modification"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the simplest way to create an object with no prototype?",
      "options": {
        "A": "<pre>{}</pre>",
        "B": "<pre>Object.create(null)</pre>",
        "C": "<pre>new Object()</pre>",
        "D": "<pre>Object.empty()</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.create(null)</pre> creates an object with no prototype, meaning it doesn't inherit any properties or methods from <pre>Object.prototype</pre>.",
      "topic": {
        "topics": [
          "Object creation methods"
        ]
      }
    },
    {
      "id": 10,
      "question": "How does JavaScript find properties on an object?",
      "options": {
        "A": "It searches global variables",
        "B": "It only searches the object itself",
        "C": "It searches the prototype chain first",
        "D": "It searches the object first, then the prototype chain"
      },
      "correct": "D",
      "explanation": "JavaScript first looks for properties directly on the object. If not found, it searches up the prototype chain until the property is found or the chain ends.",
      "topic": {
        "topics": [
          "Property inheritance"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the purpose of <pre>Object.getPrototypeOf()</pre>?",
      "options": {
        "A": "To check if an object has a prototype",
        "B": "To set the prototype of an object",
        "C": "To create a new prototype",
        "D": "To get the prototype of an object"
      },
      "correct": "D",
      "explanation": "<pre>Object.getPrototypeOf(obj)</pre> returns the prototype of the specified object. This is the standard way to access an object's prototype.",
      "topic": {
        "topics": [
          "Prototype relationships"
        ]
      }
    },
    {
      "id": 12,
      "question": "What happens when you assign a value to an object property?",
      "options": {
        "A": "It updates the prototype property",
        "B": "It always creates or updates an own property",
        "C": "It updates all instances",
        "D": "It deletes the prototype property"
      },
      "correct": "B",
      "explanation": "Property assignment always creates or updates a property directly on the object itself (an 'own property'), even if a property with the same name exists in the prototype chain.",
      "topic": {
        "topics": [
          "Property inheritance"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the result of [CODE][].constructor === Array[/CODE]?",
      "options": {
        "A": "<pre>false</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "This returns <pre>true</pre> because the <pre>constructor</pre> property of an array points to the <pre>Array</pre> constructor function.",
      "topic": {
        "topics": [
          "Constructor basics"
        ]
      }
    },
    {
      "id": 14,
      "question": "How can you create multiple objects with shared methods efficiently?",
      "options": {
        "A": "Define methods on the prototype",
        "B": "Define methods in the constructor",
        "C": "Copy methods to each object",
        "D": "Use global functions"
      },
      "correct": "A",
      "explanation": "Defining methods on the prototype is memory-efficient because all instances share the same method references rather than each having their own copy.",
      "topic": {
        "topics": [
          "Method lookup"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the prototype chain for a function?",
      "options": {
        "A": "Function → null",
        "B": "Function → Object.prototype → null",
        "C": "Function → Function.prototype → null",
        "D": "Function → Function.prototype → Object.prototype → null"
      },
      "correct": "D",
      "explanation": "Functions inherit from <pre>Function.prototype</pre>, which in turn inherits from <pre>Object.prototype</pre>, ending with <pre>null</pre>.",
      "topic": {
        "topics": [
          "Prototype relationships"
        ]
      }
    },
    {
      "id": 16,
      "question": "What does the <pre>new</pre> keyword do when creating an object?",
      "options": {
        "A": "Copies the constructor",
        "B": "Just calls the function",
        "C": "Only creates an empty object",
        "D": "Creates object, sets prototype, calls constructor"
      },
      "correct": "D",
      "explanation": "The <pre>new</pre> keyword: 1) Creates a new object, 2) Sets the object's prototype to the constructor's prototype, 3) Calls the constructor with <pre>this</pre> set to the new object, 4) Returns the new object.",
      "topic": {
        "topics": [
          "Constructor basics"
        ]
      }
    },
    {
      "id": 17,
      "question": "How can you check if a property exists on an object itself (not inherited)?",
      "options": {
        "A": "<pre>object.exists('name')</pre>",
        "B": "<pre>'name' in object</pre>",
        "C": "<pre>object.hasOwnProperty('name')</pre>",
        "D": "<pre>object.name !== undefined</pre>"
      },
      "correct": "C",
      "explanation": "<pre>hasOwnProperty()</pre> returns <pre>true</pre> only if the property exists directly on the object, not if it's inherited through the prototype chain.",
      "topic": {
        "topics": [
          "Property inheritance"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the result of [CODE]Object.getPrototypeOf(Object.prototype)</CODE>?",
      "options": {
        "A": "<pre>null</pre>",
        "B": "<pre>Object</pre>",
        "C": "<pre>Function.prototype</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "A",
      "explanation": "<pre>Object.prototype</pre> is at the top of most prototype chains, and its prototype is <pre>null</pre>, indicating the end of the chain.",
      "topic": {
        "topics": [
          "Prototype relationships"
        ]
      }
    },
    {
      "id": 19,
      "question": "How can you prevent an object from having new properties added?",
      "options": {
        "A": "<pre>obj.lock()</pre>",
        "B": "<pre>obj.freeze()</pre>",
        "C": "<pre>Object.preventExtensions(obj)</pre>",
        "D": "<pre>Object.seal(obj)</pre>"
      },
      "correct": "C",
      "explanation": "<pre>Object.preventExtensions()</pre> prevents new properties from being added to an object, while existing properties can still be modified or deleted.",
      "topic": {
        "topics": [
          "Prototype modification"
        ]
      }
    },
    {
      "id": 20,
      "question": "What is the relationship between a constructor and its instances?",
      "options": {
        "A": "Constructors inherit from instances",
        "B": "Instances inherit from constructor's prototype",
        "C": "They are the same object",
        "D": "There is no relationship"
      },
      "correct": "B",
      "explanation": "When you create an instance with <pre>new Constructor()</pre>, the instance inherits from <pre>Constructor.prototype</pre>, establishing the prototype relationship.",
      "topic": {
        "topics": [
          "Constructor basics"
        ]
      }
    },
    {
      "id": 21,
      "question": "What happens if you delete an own property from an object?",
      "options": {
        "A": "All instances lose the property",
        "B": "The property is removed from the prototype",
        "C": "The property is removed from that object only",
        "D": "It causes an error"
      },
      "correct": "C",
      "explanation": "The <pre>delete</pre> operator only removes properties from the object itself. If a property with the same name exists in the prototype chain, it becomes accessible again.",
      "topic": {
        "topics": [
          "Property inheritance"
        ]
      }
    },
    {
      "id": 22,
      "question": "How can you iterate over only an object's own properties?",
      "options": {
        "A": "Use <pre>Object.keys(obj)</pre>",
        "B": "Use <pre>for...in</pre> loop without check",
        "C": "Use <pre>Object.values(obj)</pre>",
        "D": "Both A and C"
      },
      "correct": "D",
      "explanation": "Both <pre>Object.keys()</pre> and <pre>Object.values()</pre> return only the object's own properties. <pre>for...in</pre> includes inherited properties unless filtered with <pre>hasOwnProperty()</pre>.",
      "topic": {
        "topics": [
          "Property inheritance"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the prototype of a string primitive when methods are called on it?",
      "options": {
        "A": "<pre>String.prototype</pre>",
        "B": "<pre>Object.prototype</pre>",
        "C": "<pre>Function.prototype</pre>",
        "D": "No prototype"
      },
      "correct": "A",
      "explanation": "When you call methods on string primitives, JavaScript temporarily wraps them in String objects that inherit from <pre>String.prototype</pre>.",
      "topic": {
        "topics": [
          "Prototype relationships"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is the purpose of <pre>Object.setPrototypeOf()</pre>?",
      "options": {
        "A": "To get an object's prototype",
        "B": "To change an object's prototype after creation",
        "C": "To create a new object",
        "D": "To check prototype relationships"
      },
      "correct": "B",
      "explanation": "<pre>Object.setPrototypeOf(obj, proto)</pre> changes the prototype of an existing object. However, this is generally discouraged for performance reasons.",
      "topic": {
        "topics": [
          "Prototype modification"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the result of [CODE]Function.prototype.isPrototypeOf(Array)[/CODE]?",
      "options": {
        "A": "<pre>false</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "This returns <pre>true</pre> because <pre>Array</pre> is a constructor function, and all functions inherit from <pre>Function.prototype</pre>.",
      "topic": {
        "topics": [
          "Prototype relationships"
        ]
      }
    },
    {
      "id": 26,
      "question": "How can you create an object with specific initial properties and methods?",
      "options": {
        "A": "Use a constructor function",
        "B": "Use object literal with methods",
        "C": "Use <pre>Object.create()</pre> with property descriptors",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All three methods can create objects with properties and methods: constructor functions for multiple instances, object literals for single objects, and <pre>Object.create()</pre> with property descriptors for fine control.",
      "topic": {
        "topics": [
          "Object creation methods"
        ]
      }
    },
    {
      "id": 27,
      "question": "What happens when you modify a method on the prototype?",
      "options": {
        "A": "Existing instances keep the old method",
        "B": "Only new instances see the update",
        "C": "All instances immediately see the updated method",
        "D": "It causes an error"
      },
      "correct": "C",
      "explanation": "Since objects access methods through the prototype chain dynamically, changes to prototype methods are immediately visible to all instances that inherit from that prototype.",
      "topic": {
        "topics": [
          "Prototype modification"
        ]
      }
    },
    {
      "id": 28,
      "question": "What is the difference between <pre>instanceof</pre> and <pre>isPrototypeOf()</pre>?",
      "options": {
        "A": "They are the same",
        "B": "<pre>instanceof</pre> is faster",
        "C": "<pre>isPrototypeOf</pre> only works with arrays",
        "D": "<pre>instanceof</pre> checks constructor, <pre>isPrototypeOf</pre> checks object"
      },
      "correct": "D",
      "explanation": "<pre>instanceof</pre> checks if an object is an instance of a constructor, while <pre>isPrototypeOf()</pre> checks if an object exists in another object's prototype chain.",
      "topic": {
        "topics": [
          "Instance checking"
        ]
      }
    },
    {
      "id": 29,
      "question": "Why might you use <pre>Object.create(null)</pre>?",
      "options": {
        "A": "To create a pure dictionary without inherited methods",
        "B": "To make objects faster",
        "C": "To prevent any property access",
        "D": "To create immutable objects"
      },
      "correct": "A",
      "explanation": "<pre>Object.create(null)</pre> creates objects without the <pre>Object.prototype</pre> methods, which is useful for pure data storage where you don't want inherited methods interfering.",
      "topic": {
        "topics": [
          "Object creation methods"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the most basic way to create an object in JavaScript?",
      "options": {
        "A": "Using <pre>Object.create()</pre>",
        "B": "Using <pre>new Object()</pre>",
        "C": "Using object literal syntax: <pre>{}</pre>",
        "D": "Using a constructor function"
      },
      "correct": "C",
      "explanation": "Object literal syntax <pre>{}</pre> is the simplest and most common way to create objects in JavaScript. It's concise and directly creates an object inheriting from <pre>Object.prototype</pre>.",
      "topic": {
        "topics": [
          "Object creation methods"
        ]
      }
    }
  ]
};
