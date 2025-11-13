module.exports = {
  "metadata": {
    "title": "JavaScript Object Creation and Inheritance",
    "description": "Basic patterns for creating objects, understanding inheritance, and working with constructors and prototypes in JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Constructor patterns",
      "Prototype methods",
      "Object inheritance",
      "Property access",
      "Instance properties",
      "Method sharing",
      "Prototype basics"
    ],
    "topicLinks": [
      {
        "topicName": "Constructor patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor"
      },
      {
        "topicName": "Prototype methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype"
      },
      {
        "topicName": "Object inheritance",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
      },
      {
        "topicName": "Property access",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
      },
      {
        "topicName": "Instance properties",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
      },
      {
        "topicName": "Method sharing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#inheriting_methods"
      },
      {
        "topicName": "Prototype basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"
      }
    ],
    "assessmentId": 22,
    "assessmentUniqueId": 1762522400363,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the main advantage of using prototype methods?",
      "options": {
        "A": "Methods are shared between all instances",
        "B": "Methods are faster",
        "C": "Methods are private",
        "D": "Methods can't be changed"
      },
      "correct": "A",
      "explanation": "When methods are defined on the prototype, all instances share the same method reference, which is memory-efficient compared to each instance having its own copy of the method.",
      "topic": {
        "topics": [
          "Method sharing"
        ]
      }
    },
    {
      "id": 2,
      "question": "How do you create an object that inherits from another object?",
      "options": {
        "A": "<pre>Object.create(parentObject)</pre>",
        "B": "<pre>new parentObject()</pre>",
        "C": "<pre>parentObject.clone()</pre>",
        "D": "<pre>Object.inherit(parentObject)</pre>"
      },
      "correct": "A",
      "explanation": "<pre>Object.create()</pre> is the standard way to create a new object with a specified prototype. The new object will inherit properties and methods from the parent object.",
      "topic": {
        "topics": [
          "Object inheritance"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the value of <pre>this</pre> inside a prototype method when called?",
      "options": {
        "A": "The instance calling the method",
        "B": "The prototype object",
        "C": "The constructor function",
        "D": "Always <pre>undefined</pre>"
      },
      "correct": "A",
      "explanation": "When a prototype method is called on an instance, <pre>this</pre> refers to that specific instance, allowing the method to access and modify instance-specific data.",
      "topic": {
        "topics": [
          "Prototype methods"
        ]
      }
    },
    {
      "id": 4,
      "question": "What happens when you add a property directly to an object instance?",
      "options": {
        "A": "It becomes an own property of that instance",
        "B": "It updates the prototype",
        "C": "All instances get the property",
        "D": "It deletes the prototype property"
      },
      "correct": "A",
      "explanation": "Properties added directly to an object instance are called 'own properties'. They exist only on that specific instance and don't affect the prototype or other instances.",
      "topic": {
        "topics": [
          "Instance properties"
        ]
      }
    },
    {
      "id": 5,
      "question": "How can you tell if a property is inherited or an own property?",
      "options": {
        "A": "Use <pre>object.hasOwnProperty('name')</pre>",
        "B": "Use <pre>'name' in object</pre>",
        "C": "Use <pre>object.propertyIsEnumerable('name')</pre>",
        "D": "Check if <pre>object.name</pre> exists"
      },
      "correct": "A",
      "explanation": "The <pre>hasOwnProperty()</pre> method returns <pre>true</pre> only if the property exists directly on the object (not inherited from the prototype chain).",
      "topic": {
        "topics": [
          "Property access"
        ]
      }
    },
    {
      "id": 6,
      "question": "What is the purpose of a constructor function?",
      "options": {
        "A": "To initialize new object instances",
        "B": "To destroy old objects",
        "C": "To create classes",
        "D": "To modify prototypes"
      },
      "correct": "A",
      "explanation": "Constructor functions are used to create and initialize new objects. They typically set up instance properties and are called with the <pre>new</pre> keyword.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 7,
      "question": "What does the <pre>new</pre> keyword automatically set for the new object?",
      "options": {
        "A": "The prototype to constructor's prototype property",
        "B": "The prototype to the constructor itself",
        "C": "The prototype to Object.prototype",
        "D": "No prototype is set"
      },
      "correct": "A",
      "explanation": "When using <pre>new</pre>, the new object's prototype is set to the constructor function's <pre>prototype</pre> property, establishing the inheritance chain.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 8,
      "question": "What is the result of [CODE]typeof Object.prototype[/CODE]?",
      "options": {
        "A": "<pre>'prototype'</pre>",
        "B": "<pre>'object'</pre>",
        "C": "<pre>'undefined'</pre>",
        "D": "<pre>'function'</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.prototype</pre> is an object, not a function. It's the base prototype that most JavaScript objects inherit from.",
      "topic": {
        "topics": [
          "Prototype basics"
        ]
      }
    },
    {
      "id": 9,
      "question": "How can you create multiple objects with the same initial properties?",
      "options": {
        "A": "Use the <pre>clone</pre> keyword",
        "B": "Use a constructor function",
        "C": "Copy and paste object literals",
        "D": "It's not possible in JavaScript"
      },
      "correct": "B",
      "explanation": "Constructor functions allow you to create multiple objects with the same structure. Each call to the constructor with <pre>new</pre> creates a new instance with the defined properties.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 10,
      "question": "What happens if you modify a property on the prototype?",
      "options": {
        "A": "Existing instances keep old values",
        "B": "All instances see the change immediately",
        "C": "Only new instances see the change",
        "D": "It causes an error"
      },
      "correct": "B",
      "explanation": "Since objects access properties through the prototype chain dynamically, changes to prototype properties are immediately visible to all instances that inherit from that prototype.",
      "topic": {
        "topics": [
          "Method sharing"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the default return value of a constructor function?",
      "options": {
        "A": "The prototype object",
        "B": "The new object instance",
        "C": "<pre>undefined</pre>",
        "D": "The constructor itself"
      },
      "correct": "B",
      "explanation": "When called with <pre>new</pre>, a constructor function automatically returns the newly created object instance, unless you explicitly return a different object.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 12,
      "question": "How do you check if an object was created by a specific constructor?",
      "options": {
        "A": "<pre>object instanceof Constructor</pre>",
        "B": "<pre>object.constructor === Constructor</pre>",
        "C": "<pre>Constructor.created(object)</pre>",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "Both <pre>instanceof</pre> and checking the <pre>constructor</pre> property can determine if an object was created by a specific constructor, though <pre>instanceof</pre> is more reliable as the <pre>constructor</pre> property can be changed.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the prototype of a number primitive when you call methods on it?",
      "options": {
        "A": "<pre>Object.prototype</pre>",
        "B": "<pre>Number.prototype</pre>",
        "C": "<pre>Function.prototype</pre>",
        "D": "No prototype"
      },
      "correct": "B",
      "explanation": "When you call methods on number primitives, JavaScript temporarily wraps them in Number objects, which inherit from <pre>Number.prototype</pre>.",
      "topic": {
        "topics": [
          "Prototype basics"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the purpose of the <pre>constructor</pre> property on prototypes?",
      "options": {
        "A": "To set inheritance",
        "B": "To reference back to the constructor function",
        "C": "To destroy objects",
        "D": "To create new instances"
      },
      "correct": "B",
      "explanation": "The <pre>constructor</pre> property on a prototype object points back to the constructor function that created instances of that prototype.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 15,
      "question": "How can you add a method to all objects in JavaScript?",
      "options": {
        "A": "It's not possible",
        "B": "<pre>Object.prototype.methodName = function() {}</pre>",
        "C": "<pre>allObjects.addMethod()</pre>",
        "D": "<pre>Object.methodName = function() {}</pre>"
      },
      "correct": "B",
      "explanation": "By adding a method to <pre>Object.prototype</pre>, all objects that inherit from <pre>Object.prototype</pre> (which is most objects) will have access to that method.",
      "topic": {
        "topics": [
          "Method sharing"
        ]
      }
    },
    {
      "id": 16,
      "question": "What happens when you access a property that doesn't exist on an object?",
      "options": {
        "A": "It throws an error",
        "B": "It returns <pre>undefined</pre> immediately",
        "C": "JavaScript looks up the prototype chain",
        "D": "It creates the property"
      },
      "correct": "C",
      "explanation": "When a property isn't found on an object itself, JavaScript automatically searches for it in the object's prototype, and continues up the prototype chain until found or the chain ends.",
      "topic": {
        "topics": [
          "Property access"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the result of [CODE]{}.hasOwnProperty === Object.prototype.hasOwnProperty[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>false</pre>",
        "C": "<pre>true</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "C",
      "explanation": "This returns <pre>true</pre> because objects created with <pre>{}</pre> inherit <pre>hasOwnProperty</pre> from <pre>Object.prototype</pre>, so they reference the same function.",
      "topic": {
        "topics": [
          "Method sharing"
        ]
      }
    },
    {
      "id": 18,
      "question": "How can you create an object with specific initial properties?",
      "options": {
        "A": "Use a constructor function that sets properties",
        "B": "Use <pre>Object.create()</pre> with properties",
        "C": "Use object literal syntax",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All three methods can create objects with specific properties: constructor functions for multiple instances, <pre>Object.create()</pre> for inheritance with properties, and object literals for one-off objects.",
      "topic": {
        "topics": [
          "Object inheritance"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the prototype chain for a custom object created with <pre>new Person()</pre>?",
      "options": {
        "A": "instance → Person → Object.prototype → null",
        "B": "instance → Person.prototype → null",
        "C": "instance → Person.prototype → Object.prototype → null",
        "D": "instance → Object.prototype → null"
      },
      "correct": "C",
      "explanation": "Custom objects created with constructors inherit from the constructor's prototype, which in turn inherits from <pre>Object.prototype</pre>, ending with <pre>null</pre>.",
      "topic": {
        "topics": [
          "Object inheritance"
        ]
      }
    },
    {
      "id": 20,
      "question": "What happens if a constructor function returns an object?",
      "options": {
        "A": "It causes an error",
        "B": "The return is ignored",
        "C": "That object becomes the result of <pre>new</pre>",
        "D": "The prototype is changed"
      },
      "correct": "C",
      "explanation": "If a constructor function explicitly returns an object, that object becomes the result of the <pre>new</pre> expression instead of the automatically created object.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 21,
      "question": "How do you create an object that doesn't have any inherited methods?",
      "options": {
        "A": "<pre>new Object()</pre>",
        "B": "<pre>{}</pre>",
        "C": "<pre>Object.create(null)</pre>",
        "D": "<pre>Object.empty()</pre>"
      },
      "correct": "C",
      "explanation": "<pre>Object.create(null)</pre> creates an object with no prototype, so it doesn't inherit any methods from <pre>Object.prototype</pre> like <pre>toString()</pre> or <pre>hasOwnProperty()</pre>.",
      "topic": {
        "topics": [
          "Object inheritance"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the difference between <pre>Object.create()</pre> and <pre>new</pre>?",
      "options": {
        "A": "<pre>Object.create()</pre> only works with functions",
        "B": "<pre>new</pre> is faster",
        "C": "<pre>Object.create()</pre> sets prototype directly, <pre>new</pre> uses constructor",
        "D": "There is no difference"
      },
      "correct": "C",
      "explanation": "<pre>Object.create()</pre> directly sets the prototype of the new object, while <pre>new</pre> creates an object and calls a constructor function to initialize it.",
      "topic": {
        "topics": [
          "Object inheritance"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the result of [CODE]Object.getPrototypeOf({}) === Object.prototype[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "This returns <pre>true</pre> because objects created with object literal syntax inherit directly from <pre>Object.prototype</pre>.",
      "topic": {
        "topics": [
          "Prototype basics"
        ]
      }
    },
    {
      "id": 24,
      "question": "How can you prevent new properties from being added to an object?",
      "options": {
        "A": "Delete the <pre>add</pre> method",
        "B": "<pre>obj.freeze()</pre>",
        "C": "<pre>obj.lock()</pre>",
        "D": "<pre>Object.preventExtensions(obj)</pre>"
      },
      "correct": "D",
      "explanation": "<pre>Object.preventExtensions()</pre> prevents new properties from being added to an object, while existing properties can still be modified.",
      "topic": {
        "topics": [
          "Instance properties"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the purpose of the <pre>instanceof</pre> operator?",
      "options": {
        "A": "To create new instances",
        "B": "To check if a variable is defined",
        "C": "To compare two objects",
        "D": "To check if an object inherits from a constructor's prototype"
      },
      "correct": "D",
      "explanation": "The <pre>instanceof</pre> operator checks if an object's prototype chain contains the prototype property of a specific constructor function.",
      "topic": {
        "topics": [
          "Constructor patterns"
        ]
      }
    },
    {
      "id": 26,
      "question": "What happens when you assign to a property that exists only in the prototype?",
      "options": {
        "A": "The prototype property is updated",
        "B": "It causes an error",
        "C": "All instances get the new value",
        "D": "A new own property is created on the instance"
      },
      "correct": "D",
      "explanation": "When you assign to a property that only exists in the prototype, JavaScript creates a new 'own property' on the instance with the new value, shadowing the prototype property.",
      "topic": {
        "topics": [
          "Property access"
        ]
      }
    },
    {
      "id": 27,
      "question": "How can you get all properties (including inherited) of an object?",
      "options": {
        "A": "Use <pre>Object.keys()</pre>",
        "B": "Use <pre>obj.properties</pre>",
        "C": "Use <pre>Object.getOwnPropertyNames()</pre>",
        "D": "Use <pre>for...in</pre> loop"
      },
      "correct": "D",
      "explanation": "The <pre>for...in</pre> loop iterates over all enumerable properties, including those inherited through the prototype chain. Other methods only return own properties.",
      "topic": {
        "topics": [
          "Property access"
        ]
      }
    },
    {
      "id": 28,
      "question": "What is the result of [CODE]''.__proto__ === String.prototype[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "This returns <pre>true</pre> because string primitives, when treated as objects, inherit from <pre>String.prototype</pre>.",
      "topic": {
        "topics": [
          "Prototype basics"
        ]
      }
    },
    {
      "id": 29,
      "question": "Why might you add methods to a prototype instead of in the constructor?",
      "options": {
        "A": "To make methods private",
        "B": "To prevent method overriding",
        "C": "To make methods faster",
        "D": "To save memory by sharing methods"
      },
      "correct": "D",
      "explanation": "Methods added to the prototype are shared by all instances, which is memory-efficient. Methods defined in the constructor create a new function for each instance.",
      "topic": {
        "topics": [
          "Method sharing"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the simplest way to create a single object with specific properties?",
      "options": {
        "A": "Use a constructor function",
        "B": "Use <pre>new Object()</pre>",
        "C": "Use <pre>Object.create()</pre>",
        "D": "Use object literal syntax: <pre>{prop: value}</pre>"
      },
      "correct": "D",
      "explanation": "For creating a single object with specific properties, object literal syntax <pre>{}</pre> is the simplest and most straightforward approach.",
      "topic": {
        "topics": [
          "Object inheritance"
        ]
      }
    }
  ]
}
