module.exports = {
  "metadata": {
    "title": "JavaScript Objects and Prototypes",
    "description": "Comprehensive exploration of JavaScript objects, including object creation patterns, property manipulation, methods, prototypal inheritance, constructors, and the prototype chain. This assessment covers essential concepts for understanding how JavaScript implements object-oriented programming and how objects interact with each other through the prototype system.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Object creation and literals",
      "Object properties and methods",
      "Property descriptors and attributes",
      "Constructor functions",
      "Prototypes and prototype chain",
      "Object methods (Object.keys, Object.values, etc.)",
      "Property access and manipulation"
    ],
    "topicLinks": [
      {
        "topicName": "Object creation and literals",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
      },
      {
        "topicName": "Object properties and methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_properties"
      },
      {
        "topicName": "Property descriptors and attributes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
      },
      {
        "topicName": "Constructor functions",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"
      },
      {
        "topicName": "Prototypes and prototype chain",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
      },
      {
        "topicName": "Object methods (Object.keys, Object.values, etc.)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
      },
      {
        "topicName": "Property access and manipulation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
      }
    ],
    "assessmentId": 8,
    "assessmentUniqueId": 1762263745669,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "Which is a valid way to create an empty object?",
      "options": {
        "A": "let obj = {}",
        "B": "let obj = new Object()",
        "C": "let obj = Object.create(null)",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All three methods create objects. {} is the literal syntax, new Object() uses the constructor, and Object.create(null) creates an object with no prototype.",
      "topic": {
        "topics": [
          "Object creation and literals",
          "Constructor functions"
        ]
      }
    },
    {
      "id": 2,
      "question": "How do you access a property with a key that contains spaces?",
      "options": {
        "A": "obj['my property']",
        "B": "obj.my property",
        "C": "obj.'my property'",
        "D": "obj.my_property"
      },
      "correct": "A",
      "explanation": "Bracket notation is required for property names with spaces or special characters. Dot notation only works with valid identifier names.",
      "topic": {
        "topics": [
          "Property access and manipulation",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 3,
      "question": "What does [CODE]Object.keys({a: 1, b: 2, c: 3})[/CODE] return?",
      "options": {
        "A": "[1, 2, 3]",
        "B": "6",
        "C": "{a: 1, b: 2, c: 3}",
        "D": "['a', 'b', 'c']"
      },
      "correct": "D",
      "explanation": "Object.keys() returns an array containing all the object's own enumerable property names (keys), not the values.",
      "topic": {
        "topics": [
          "Object methods (Object.keys, Object.values, etc.)",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 4,
      "question": "What is the prototype of an object created with object literal {}?",
      "options": {
        "A": "undefined",
        "B": "null",
        "C": "Function.prototype",
        "D": "Object.prototype"
      },
      "correct": "D",
      "explanation": "Objects created with literal notation {} inherit from Object.prototype, which gives them methods like toString(), hasOwnProperty(), etc.",
      "topic": {
        "topics": [
          "Object creation and literals",
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 5,
      "question": "How do you check if a property exists directly on an object (not inherited)?",
      "options": {
        "A": "obj.property !== undefined",
        "B": "obj.hasOwnProperty('property')",
        "C": "obj.contains('property')",
        "D": "'property' in obj"
      },
      "correct": "B",
      "explanation": "hasOwnProperty() checks if the property exists on the object itself, not on its prototype chain. The 'in' operator checks both own and inherited properties.",
      "topic": {
        "topics": [
          "Object properties and methods",
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 6,
      "question": "What does [CODE]delete obj.property[/CODE] do?",
      "options": {
        "A": "Sets property to undefined",
        "B": "Sets property to null",
        "C": "Removes the property from the object",
        "D": "Throws an error"
      },
      "correct": "C",
      "explanation": "The delete operator removes a property from an object entirely. After deletion, the property no longer exists on the object.",
      "topic": {
        "topics": [
          "Property access and manipulation",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is a constructor function in JavaScript?",
      "options": {
        "A": "A function that builds objects",
        "B": "A function used with the 'new' keyword",
        "C": "A function that initializes properties",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "Constructor functions are used with the 'new' keyword to create and initialize objects. They set up properties and return a new instance.",
      "topic": {
        "topics": [
          "Constructor functions",
          "Object creation and literals"
        ]
      }
    },
    {
      "id": 8,
      "question": "What does [CODE]Object.freeze(obj)[/CODE] do?",
      "options": {
        "A": "Prevents all modifications to the object",
        "B": "Prevents adding new properties only",
        "C": "Prevents modifying existing properties only",
        "D": "Temporarily stops object access"
      },
      "correct": "A",
      "explanation": "Object.freeze() makes an object immutable. You cannot add, delete, or modify properties. Note that nested objects are not automatically frozen.",
      "topic": {
        "topics": [
          "Object properties and methods",
          "Property descriptors and attributes"
        ]
      }
    },
    {
      "id": 9,
      "question": "What will this code output?\n\n[CODE]\nconst obj = {name: 'John'};\nconst obj2 = obj;\nobj2.name = 'Jane';\nconsole.log(obj.name);\n[/CODE]",
      "options": {
        "A": "'John'",
        "B": "undefined",
        "C": "'Jane'",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "Objects are assigned by reference. obj2 references the same object as obj, so modifying obj2 also affects obj. Both point to the same memory location.",
      "topic": {
        "topics": [
          "Object creation and literals",
          "Property access and manipulation"
        ]
      }
    },
    {
      "id": 10,
      "question": "What does [CODE]Object.values({x: 10, y: 20})[/CODE] return?",
      "options": {
        "A": "['x', 'y']",
        "B": "[10, 20]",
        "C": "{x: 10, y: 20}",
        "D": "30"
      },
      "correct": "B",
      "explanation": "Object.values() returns an array of the object's own enumerable property values. It's the counterpart to Object.keys().",
      "topic": {
        "topics": [
          "Object methods (Object.keys, Object.values, etc.)",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the prototype chain?",
      "options": {
        "A": "A list of all object properties",
        "B": "A chain of functions",
        "C": "A linked series of objects for property lookup",
        "D": "A debugging tool"
      },
      "correct": "C",
      "explanation": "The prototype chain is a series of linked objects that JavaScript uses to look up properties. If a property isn't found on an object, JavaScript checks its prototype, then the prototype's prototype, and so on.",
      "topic": {
        "topics": [
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 12,
      "question": "How do you add a new property to an existing object?",
      "options": {
        "A": "obj.newProp = value",
        "B": "obj['newProp'] = value",
        "C": "Object.defineProperty(obj, 'newProp', {value: value})",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All three methods can add properties. The first two are simpler, while Object.defineProperty() offers more control over property attributes like writability and enumerability.",
      "topic": {
        "topics": [
          "Property access and manipulation",
          "Property descriptors and attributes"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does the 'new' keyword do when calling a constructor?",
      "options": {
        "A": "Creates a new object",
        "B": "Sets the object's prototype",
        "C": "Binds 'this' to the new object",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "The 'new' keyword creates a new object, sets its prototype to the constructor's prototype property, binds 'this' to it, and returns it (unless the constructor explicitly returns an object).",
      "topic": {
        "topics": [
          "Constructor functions",
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the result of [CODE]Object.entries({a: 1, b: 2})[/CODE]?",
      "options": {
        "A": "['a', 'b', 1, 2]",
        "B": "['a1', 'b2']",
        "C": "[['a', 1], ['b', 2]]",
        "D": "{a: 1, b: 2}"
      },
      "correct": "C",
      "explanation": "Object.entries() returns an array of [key, value] pairs for each enumerable property in the object.",
      "topic": {
        "topics": [
          "Object methods (Object.keys, Object.values, etc.)",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 15,
      "question": "How do you create an object without a prototype?",
      "options": {
        "A": "let obj = {}",
        "B": "let obj = Object.prototype",
        "C": "let obj = new Object()",
        "D": "let obj = Object.create(null)"
      },
      "correct": "D",
      "explanation": "Object.create(null) creates an object with no prototype, meaning it won't inherit any methods from Object.prototype. This is useful for creating 'pure' data stores.",
      "topic": {
        "topics": [
          "Object creation and literals",
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 16,
      "question": "What does [CODE]Object.assign({}, obj1, obj2)[/CODE] do?",
      "options": {
        "A": "Compares obj1 and obj2",
        "B": "Merges obj1 and obj2 into a new object",
        "C": "Deletes obj1 and obj2",
        "D": "Creates an array from obj1 and obj2"
      },
      "correct": "B",
      "explanation": "Object.assign() copies all enumerable properties from source objects (obj1, obj2) to the target object ({}), effectively merging them into a new object.",
      "topic": {
        "topics": [
          "Object methods (Object.keys, Object.values, etc.)",
          "Object creation and literals"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is a method in an object?",
      "options": {
        "A": "A prototype property",
        "B": "A property whose value is a function",
        "C": "A constructor function",
        "D": "A special type of object"
      },
      "correct": "B",
      "explanation": "A method is simply a property of an object that holds a function as its value. Methods can access other properties of the object using 'this'.",
      "topic": {
        "topics": [
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 18,
      "question": "What will this code output?\n\n[CODE]\nfunction Person(name) {\n    this.name = name;\n}\nconst p1 = new Person('Alice');\nconsole.log(p1.name);\n[/CODE]",
      "options": {
        "A": "undefined",
        "B": "'Alice'",
        "C": "'name'",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "The constructor function sets the 'name' property on the new object using 'this'. When called with 'new', it creates and returns a new Person object with name 'Alice'.",
      "topic": {
        "topics": [
          "Constructor functions",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does [CODE]Object.seal(obj)[/CODE] do?",
      "options": {
        "A": "Prevents adding or deleting properties",
        "B": "Prevents modifying existing properties",
        "C": "Makes the object completely immutable",
        "D": "Hides the object"
      },
      "correct": "A",
      "explanation": "Object.seal() prevents adding new properties or deleting existing ones, but you can still modify existing property values. It's less restrictive than Object.freeze().",
      "topic": {
        "topics": [
          "Object properties and methods",
          "Property descriptors and attributes"
        ]
      }
    },
    {
      "id": 20,
      "question": "How do you check if an object has any properties?",
      "options": {
        "A": "obj.hasProperties()",
        "B": "obj.length > 0",
        "C": "Object.keys(obj).length > 0",
        "D": "obj !== {}"
      },
      "correct": "C",
      "explanation": "Object.keys() returns an array of property names. Checking if its length is greater than 0 tells you if the object has any own enumerable properties.",
      "topic": {
        "topics": [
          "Object methods (Object.keys, Object.values, etc.)",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the difference between obj.property and obj['property']?",
      "options": {
        "A": "Dot notation only works with valid identifiers",
        "B": "Bracket notation is faster",
        "C": "They access different properties",
        "D": "No difference at all"
      },
      "correct": "A",
      "explanation": "Dot notation requires valid JavaScript identifiers (no spaces, can't start with numbers). Bracket notation works with any string, including computed property names.",
      "topic": {
        "topics": [
          "Property access and manipulation"
        ]
      }
    },
    {
      "id": 22,
      "question": "What will this code output?\n\n[CODE]\nconst obj = {a: 1};\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);\n[/CODE]",
      "options": {
        "A": "Error",
        "B": "2",
        "C": "1",
        "D": "undefined"
      },
      "correct": "C",
      "explanation": "Object.freeze() prevents modifications. The assignment obj.a = 2 silently fails (or throws in strict mode), so obj.a remains 1.",
      "topic": {
        "topics": [
          "Object properties and methods",
          "Property descriptors and attributes"
        ]
      }
    },
    {
      "id": 23,
      "question": "What does [CODE]obj.__proto__[/CODE] reference?",
      "options": {
        "A": "The object's prototype",
        "B": "The object's constructor",
        "C": "The object's properties",
        "D": "The object itself"
      },
      "correct": "A",
      "explanation": "__proto__ is a reference to the object's prototype. Modern code should use Object.getPrototypeOf(obj) instead, as __proto__ is deprecated.",
      "topic": {
        "topics": [
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 24,
      "question": "How do you make a shallow copy of an object?",
      "options": {
        "A": "{...obj}",
        "B": "Object.assign({}, obj)",
        "C": "Object.create(obj)",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "Both the spread operator {...obj} and Object.assign({}, obj) create shallow copies. Object.create(obj) creates a new object with obj as its prototype, which is different.",
      "topic": {
        "topics": [
          "Object creation and literals",
          "Object methods (Object.keys, Object.values, etc.)"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the result of [CODE]'toString' in {}[/CODE]?",
      "options": {
        "A": "false",
        "B": "true",
        "C": "undefined",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "The 'in' operator checks for properties on the object and its prototype chain. toString is inherited from Object.prototype, so it returns true.",
      "topic": {
        "topics": [
          "Object properties and methods",
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 26,
      "question": "What does [CODE]Object.getOwnPropertyNames(obj)[/CODE] return?",
      "options": {
        "A": "All properties including inherited",
        "B": "Only prototype properties",
        "C": "Only enumerable own properties",
        "D": "All own properties (enumerable and non-enumerable)"
      },
      "correct": "D",
      "explanation": "Object.getOwnPropertyNames() returns all own properties, including non-enumerable ones. Object.keys() only returns enumerable properties.",
      "topic": {
        "topics": [
          "Object methods (Object.keys, Object.values, etc.)",
          "Property descriptors and attributes"
        ]
      }
    },
    {
      "id": 27,
      "question": "What happens when you access a non-existent property?",
      "options": {
        "A": "Error",
        "B": "undefined",
        "C": "null",
        "D": "NaN"
      },
      "correct": "B",
      "explanation": "Accessing a non-existent property returns undefined. JavaScript doesn't throw an error; this is different from accessing an undeclared variable.",
      "topic": {
        "topics": [
          "Property access and manipulation",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 28,
      "question": "What is the purpose of Object.defineProperty()?",
      "options": {
        "A": "To define or modify property with specific attributes",
        "B": "To create new objects",
        "C": "To delete properties",
        "D": "To freeze objects"
      },
      "correct": "A",
      "explanation": "Object.defineProperty() allows you to define or modify a property with fine-grained control over its attributes like writable, enumerable, and configurable.",
      "topic": {
        "topics": [
          "Property descriptors and attributes",
          "Object properties and methods"
        ]
      }
    },
    {
      "id": 29,
      "question": "What will this code output?\n\n[CODE]\nconst obj = {x: 1};\nconst obj2 = Object.create(obj);\nconsole.log(obj2.x);\n[/CODE]",
      "options": {
        "A": "null",
        "B": "undefined",
        "C": "1",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "Object.create(obj) creates a new object with obj as its prototype. When accessing obj2.x, JavaScript looks up the prototype chain and finds x on obj.",
      "topic": {
        "topics": [
          "Object creation and literals",
          "Prototypes and prototype chain"
        ]
      }
    },
    {
      "id": 30,
      "question": "How do you prevent an object from being extended (adding new properties)?",
      "options": {
        "A": "Object.freeze(obj)",
        "B": "Object.seal(obj)",
        "C": "Object.preventExtensions(obj)",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All three methods prevent adding new properties. freeze() also prevents modifications, seal() allows modifications but not additions/deletions, and preventExtensions() only prevents additions.",
      "topic": {
        "topics": [
          "Object properties and methods",
          "Property descriptors and attributes"
        ]
      }
    }
  ]
}
