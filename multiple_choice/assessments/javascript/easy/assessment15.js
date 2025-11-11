module.exports = {
  "metadata": {
    "title": "JavaScript Object Operations",
    "description": "Practical object manipulation, property handling, and common object patterns in JavaScript. This assessment focuses on everyday object operations that developers use regularly.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Object property descriptors",
      "Object sealing and freezing",
      "Object inheritance and prototypes",
      "Object method context",
      "Object property enumeration",
      "Object shorthand syntax",
      "Object destructuring patterns"
    ],
    "topicLinks": [
      {
        "topicName": "Object property descriptors",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
      },
      {
        "topicName": "Object sealing and freezing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"
      },
      {
        "topicName": "Object inheritance and prototypes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
      },
      {
        "topicName": "Object method context",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
      },
      {
        "topicName": "Object property enumeration",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties"
      },
      {
        "topicName": "Object shorthand syntax",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer"
      },
      {
        "topicName": "Object destructuring patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
      }
    ],
    "assessmentId": 15,
    "assessmentUniqueId": 1762476926611,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What does [CODE]Object.seal(obj)[/CODE] prevent?",
      "options": {
        "A": "All modifications",
        "B": "Modifying existing properties",
        "C": "Accessing properties",
        "D": "Adding or deleting properties"
      },
      "correct": "D",
      "explanation": "<pre>Object.seal()</pre> prevents new properties from being added and existing properties from being deleted, but allows modifying existing property values.",
      "topic": {
        "topics": [
          "Object sealing and freezing"
        ]
      }
    },
    {
      "id": 2,
      "question": "How do you define a non-enumerable property?",
      "options": {
        "A": "<pre>obj.prop = value; obj.hide('prop')</pre>",
        "B": "<pre>Object.defineProperty(obj, 'prop', {enumerable: false})</pre>",
        "C": "<pre>obj['prop'] = value; obj.enumerable = false</pre>",
        "D": "<pre>Object.hideProperty(obj, 'prop')</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.defineProperty()</pre> allows you to set property attributes like <pre>enumerable</pre>. Non-enumerable properties won't show up in <pre>for...in</pre> loops or <pre>Object.keys()</pre>.",
      "topic": {
        "topics": [
          "Object property descriptors"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the result of [CODE]const obj = {a: 1}; Object.freeze(obj); obj.a = 2; obj.a[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>2</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>1</pre>"
      },
      "correct": "D",
      "explanation": "<pre>Object.freeze()</pre> makes an object immutable. Attempts to modify properties are ignored in non-strict mode or throw errors in strict mode.",
      "topic": {
        "topics": [
          "Object sealing and freezing"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which loop iterates over object properties including inherited ones?",
      "options": {
        "A": "<pre>Object.keys()</pre> with forEach",
        "B": "<pre>for...of</pre>",
        "C": "<pre>for...in</pre>",
        "D": "<pre>Object.entries()</pre> with forEach"
      },
      "correct": "C",
      "explanation": "<pre>for...in</pre> iterates over all enumerable properties, including inherited ones. Use <pre>hasOwnProperty()</pre> to filter to own properties only.",
      "topic": {
        "topics": [
          "Object property enumeration"
        ]
      }
    },
    {
      "id": 5,
      "question": "What does [CODE]Object.getPrototypeOf({}) === Object.prototype[/CODE] return?",
      "options": {
        "A": "<pre>false</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "Objects created with literal notation inherit from <pre>Object.prototype</pre>, so this comparison returns <pre>true</pre>.",
      "topic": {
        "topics": [
          "Object inheritance and prototypes"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you create an object with property value shorthand?",
      "options": {
        "A": "<pre>const name = 'John'; const obj = {name};</pre>",
        "B": "<pre>const obj = {name: 'John'};</pre>",
        "C": "<pre>const obj = {'name': 'John'};</pre>",
        "D": "All of the above"
      },
      "correct": "A",
      "explanation": "Property value shorthand allows you to use variable names as property names when the property name matches the variable name.",
      "topic": {
        "topics": [
          "Object shorthand syntax"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the value of [CODE]this[/CODE] in an object method?",
      "options": {
        "A": "The object the method is called on",
        "B": "The global object",
        "C": "The method itself",
        "D": "<pre>undefined</pre>"
      },
      "correct": "A",
      "explanation": "In regular object methods, <pre>this</pre> refers to the object the method is called on. Arrow functions have different <pre>this</pre> binding.",
      "topic": {
        "topics": [
          "Object method context"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which method checks if an object is sealed?",
      "options": {
        "A": "<pre>obj.isSealed</pre>",
        "B": "<pre>Object.sealed()</pre>",
        "C": "<pre>Object.isSealed()</pre>",
        "D": "<pre>Object.checkSealed()</pre>"
      },
      "correct": "C",
      "explanation": "<pre>Object.isSealed()</pre> determines if an object is sealed, meaning no properties can be added or removed.",
      "topic": {
        "topics": [
          "Object sealing and freezing"
        ]
      }
    },
    {
      "id": 9,
      "question": "What does [CODE]const {a: x} = {a: 1}[/CODE] assign to x?",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>a</pre>",
        "C": "<pre>{a: 1}</pre>",
        "D": "<pre>1</pre>"
      },
      "correct": "D",
      "explanation": "This destructuring syntax extracts property <pre>a</pre> from the object and assigns it to variable <pre>x</pre>.",
      "topic": {
        "topics": [
          "Object destructuring patterns"
        ]
      }
    },
    {
      "id": 10,
      "question": "How do you make a property read-only?",
      "options": {
        "A": "<pre>Object.defineProperty(obj, 'prop', {writable: false})</pre>",
        "B": "<pre>obj.readOnly('prop')</pre>",
        "C": "<pre>Object.freezeProperty(obj, 'prop')</pre>",
        "D": "<pre>obj.prop.readOnly = true</pre>"
      },
      "correct": "A",
      "explanation": "Setting <pre>writable: false</pre> in a property descriptor makes the property read-only. Attempts to change it will fail silently or throw in strict mode.",
      "topic": {
        "topics": [
          "Object property descriptors"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the result of [CODE]Object.isExtensible({})[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "By default, objects are extensible (new properties can be added). <pre>Object.isExtensible()</pre> checks if an object can have new properties added.",
      "topic": {
        "topics": [
          "Object sealing and freezing"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which method creates an object without any prototype?",
      "options": {
        "A": "<pre>Object.noPrototype()</pre>",
        "B": "<pre>{}</pre>",
        "C": "<pre>new Object()</pre>",
        "D": "<pre>Object.create(null)</pre>"
      },
      "correct": "D",
      "explanation": "<pre>Object.create(null)</pre> creates an object with no prototype, meaning it won't inherit any methods from <pre>Object.prototype</pre>.",
      "topic": {
        "topics": [
          "Object inheritance and prototypes"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does [CODE]Object.getOwnPropertyNames({a: 1, b: 2})[/CODE] return?",
      "options": {
        "A": "<pre>[1, 2]</pre>",
        "B": "<pre>['a', 'b']</pre>",
        "C": "<pre>{a: 1, b: 2}</pre>",
        "D": "<pre>['a:1', 'b:2']</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.getOwnPropertyNames()</pre> returns all own property names (including non-enumerable ones), unlike <pre>Object.keys()</pre> which only returns enumerable properties.",
      "topic": {
        "topics": [
          "Object property enumeration"
        ]
      }
    },
    {
      "id": 14,
      "question": "How do you use method shorthand in object literals?",
      "options": {
        "A": "<pre>{method: function() {}}</pre>",
        "B": "<pre>{method() {}}</pre>",
        "C": "<pre>{method: () => {}}</pre>",
        "D": "All of the above"
      },
      "correct": "B",
      "explanation": "Method shorthand allows you to define methods without the <pre>function</pre> keyword. It's equivalent to the other syntax but more concise.",
      "topic": {
        "topics": [
          "Object shorthand syntax"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the result of [CODE]const obj = {}; 'toString' in obj[/CODE]?",
      "options": {
        "A": "<pre>true</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "The <pre>in</pre> operator checks the prototype chain. <pre>toString</pre> is inherited from <pre>Object.prototype</pre>, so it returns <pre>true</pre>.",
      "topic": {
        "topics": [
          "Object inheritance and prototypes"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which method prevents property attributes from being changed?",
      "options": {
        "A": "<pre>Object.freeze()</pre>",
        "B": "<pre>Object.seal()</pre>",
        "C": "<pre>Object.preventExtensions()</pre>",
        "D": "<pre>Object.lock()</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.seal()</pre> makes existing properties non-configurable, preventing their attributes from being changed.",
      "topic": {
        "topics": [
          "Object sealing and freezing"
        ]
      }
    },
    {
      "id": 17,
      "question": "What does [CODE]Object.isFrozen({})[/CODE] return?",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>false</pre>",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "By default, objects are not frozen. <pre>Object.isFrozen()</pre> returns <pre>false</pre> for regular objects.",
      "topic": {
        "topics": [
          "Object sealing and freezing"
        ]
      }
    },
    {
      "id": 18,
      "question": "How do you destructure with default values?",
      "options": {
        "A": "<pre>const {a = 1} = {}</pre>",
        "B": "<pre>const {a: 1} = {}</pre>",
        "C": "<pre>const {a} = {default: 1}</pre>",
        "D": "<pre>const a = 1 from {}</pre>"
      },
      "correct": "A",
      "explanation": "Default values in destructuring provide fallback values when the property doesn't exist or is <pre>undefined</pre>.",
      "topic": {
        "topics": [
          "Object destructuring patterns"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the result of [CODE]Object.prototype.isPrototypeOf({})[/CODE]?",
      "options": {
        "A": "<pre>true</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "explanation": "<pre>isPrototypeOf()</pre> checks if an object exists in another object's prototype chain. <pre>Object.prototype</pre> is in the prototype chain of all objects created with literal notation.",
      "topic": {
        "topics": [
          "Object inheritance and prototypes"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which property attribute controls if a property can be deleted?",
      "options": {
        "A": "<pre>enumerable</pre>",
        "B": "<pre>writable</pre>",
        "C": "<pre>configurable</pre>",
        "D": "<pre>deletable</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>configurable</pre> attribute controls whether a property can be deleted and whether its attributes can be changed.",
      "topic": {
        "topics": [
          "Object property descriptors"
        ]
      }
    },
    {
      "id": 21,
      "question": "What does [CODE]Object.preventExtensions({a: 1})[/CODE] do?",
      "options": {
        "A": "Prevents deleting properties",
        "B": "Prevents modifying existing properties",
        "C": "Prevents adding new properties",
        "D": "Makes all properties read-only"
      },
      "correct": "C",
      "explanation": "<pre>Object.preventExtensions()</pre> only prevents new properties from being added. Existing properties can still be modified or deleted.",
      "topic": {
        "topics": [
          "Object sealing and freezing"
        ]
      }
    },
    {
      "id": 22,
      "question": "How do you check if a property is enumerable?",
      "options": {
        "A": "<pre>Object.isEnumerable(obj, 'prop')</pre>",
        "B": "<pre>obj.prop.enumerable</pre>",
        "C": "<pre>Object.getOwnPropertyDescriptor(obj, 'prop').enumerable</pre>",
        "D": "<pre>obj.hasEnumerable('prop')</pre>"
      },
      "correct": "C",
      "explanation": "The property descriptor contains the <pre>enumerable</pre> attribute. You need to get the descriptor to check this value.",
      "topic": {
        "topics": [
          "Object property enumeration"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the result of [CODE]const obj = {get value() { return 42 }}; obj.value[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>function</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>42</pre>"
      },
      "correct": "D",
      "explanation": "Getter methods are called when the property is accessed. They return a value without being explicitly called.",
      "topic": {
        "topics": [
          "Object property descriptors"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which method returns only enumerable own properties?",
      "options": {
        "A": "<pre>Object.keys()</pre>",
        "B": "<pre>Object.getOwnPropertyNames()</pre>",
        "C": "<pre>Reflect.ownKeys()</pre>",
        "D": "<pre>Object.properties()</pre>"
      },
      "correct": "A",
      "explanation": "<pre>Object.keys()</pre> returns only enumerable own property names. Other methods include non-enumerable properties.",
      "topic": {
        "topics": [
          "Object property enumeration"
        ]
      }
    },
    {
      "id": 25,
      "question": "What does [CODE]Object.setPrototypeOf({}, Array.prototype)[/CODE] do?",
      "options": {
        "A": "Converts the object to an array",
        "B": "Copies array methods to the object",
        "C": "Sets the object's prototype to Array.prototype",
        "D": "Throws an error"
      },
      "correct": "C",
      "explanation": "<pre>Object.setPrototypeOf()</pre> sets the prototype (i.e., the internal <pre>[[Prototype]]</pre> property) of a specified object to another object.",
      "topic": {
        "topics": [
          "Object inheritance and prototypes"
        ]
      }
    },
    {
      "id": 26,
      "question": "How do you use computed property names with method shorthand?",
      "options": {
        "A": "<pre>{[methodName]() {}}</pre>",
        "B": "<pre>{methodName: function() {}}</pre>",
        "C": "<pre>{[methodName]: () => {}}</pre>",
        "D": "Both A and C"
      },
      "correct": "D",
      "explanation": "Both syntaxes work. Computed property names can be used with method shorthand or traditional function expressions.",
      "topic": {
        "topics": [
          "Object shorthand syntax"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is the result of [CODE]const obj = {a: 1}; Object.defineProperty(obj, 'b', {value: 2, enumerable: false}); Object.keys(obj)[/CODE]?",
      "options": {
        "A": "<pre>['a', 'b']</pre>",
        "B": "<pre>['a']</pre>",
        "C": "<pre>[1]</pre>",
        "D": "<pre>[1, 2]</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.keys()</pre> only returns enumerable properties. Property <pre>b</pre> was defined as non-enumerable, so it's not included.",
      "topic": {
        "topics": [
          "Object property enumeration"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which method creates multiple properties at once?",
      "options": {
        "A": "<pre>Object.createProperties()</pre>",
        "B": "<pre>Object.defineProperties()</pre>",
        "C": "<pre>Object.addProperties()</pre>",
        "D": "<pre>Object.setProperties()</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.defineProperties()</pre> allows you to define multiple properties with their descriptors in one call.",
      "topic": {
        "topics": [
          "Object property descriptors"
        ]
      }
    },
    {
      "id": 29,
      "question": "What does [CODE]const obj = {a: 1}; const {a, b = 2} = obj; b[/CODE] return?",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>1</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "Since property <pre>b</pre> doesn't exist in the object, the default value <pre>2</pre> is used.",
      "topic": {
        "topics": [
          "Object destructuring patterns"
        ]
      }
    },
    {
      "id": 30,
      "question": "How do you check if an object is the prototype of another?",
      "options": {
        "A": "<pre>prototypeObj.isPrototypeOf(obj)</pre>",
        "B": "<pre>obj instanceof prototypeObj</pre>",
        "C": "<pre>Object.isPrototype(prototypeObj, obj)</pre>",
        "D": "<pre>obj.hasPrototype(prototypeObj)</pre>"
      },
      "correct": "A",
      "explanation": "<pre>isPrototypeOf()</pre> checks if an object exists in another object's prototype chain. It's more flexible than <pre>instanceof</pre>.",
      "topic": {
        "topics": [
          "Object inheritance and prototypes"
        ]
      }
    }
  ]
}
