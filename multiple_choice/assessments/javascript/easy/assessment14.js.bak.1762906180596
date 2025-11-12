module.exports = {
  "metadata": {
    "title": "JavaScript Object Fundamentals",
    "description": "Core object concepts, property access, methods, and basic object manipulation in JavaScript. This assessment covers essential object operations that form the foundation of working with objects in JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Object creation and literals",
      "Property access and modification",
      "Object methods and functions",
      "Object iteration and keys",
      "Object references and copying",
      "Object comparison and equality",
      "Basic object patterns"
    ],
    "topicLinks": [
      {
        "topicName": "Object creation and literals",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer"
      },
      {
        "topicName": "Property access and modification",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
      },
      {
        "topicName": "Object methods and functions",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions"
      },
      {
        "topicName": "Object iteration and keys",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
      },
      {
        "topicName": "Object references and copying",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"
      },
      {
        "topicName": "Object comparison and equality",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness"
      },
      {
        "topicName": "Basic object patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
      }
    ],
    "assessmentId": 14,
    "assessmentUniqueId": 1762476536417,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the result of [CODE]typeof {}?[/CODE]",
      "options": {
        "A": "<pre>'undefined'</pre>",
        "B": "<pre>'object'</pre>",
        "C": "<pre>'null'</pre>",
        "D": "<pre>'function'</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>typeof</pre> operator returns <pre>'object'</pre> for objects, including empty objects. This is one of JavaScript's primitive type checks.",
      "topic": {
        "topics": [
          "Object creation and literals"
        ]
      }
    },
    {
      "id": 2,
      "question": "How do you access a property with a space in its name?",
      "options": {
        "A": "<pre>obj.'property name'</pre>",
        "B": "<pre>obj.property name</pre>",
        "C": "<pre>obj['property name']</pre>",
        "D": "<pre>obj.get('property name')</pre>"
      },
      "correct": "C",
      "explanation": "Bracket notation must be used for property names that aren't valid identifiers (contain spaces, start with numbers, or use reserved words). Dot notation only works with valid identifier names.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 3,
      "question": "What does [CODE]Object.keys({a: 1, b: 2})[/CODE] return?",
      "options": {
        "A": "<pre>{a: 1, b: 2}</pre>",
        "B": "<pre>[1, 2]</pre>",
        "C": "<pre>['a', 'b']</pre>",
        "D": "<pre>['a:1', 'b:2']</pre>"
      },
      "correct": "C",
      "explanation": "<pre>Object.keys()</pre> returns an array of a given object's own enumerable property names (keys), in the same order as a normal loop.",
      "topic": {
        "topics": [
          "Object iteration and keys"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which method creates a new object with a specified prototype?",
      "options": {
        "A": "<pre>Object.new()</pre>",
        "B": "<pre>Object.create()</pre>",
        "C": "<pre>Object.prototype()</pre>",
        "D": "<pre>new Object()</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.create()</pre> creates a new object with the specified prototype object and properties. This is different from object literals which inherit from <pre>Object.prototype</pre>.",
      "topic": {
        "topics": [
          "Object creation and literals"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the result of [CODE]'toString' in {}?[/CODE]",
      "options": {
        "A": "Error",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>in</pre> operator checks if a property exists in an object or its prototype chain. <pre>toString</pre> is inherited from <pre>Object.prototype</pre>, so it returns <pre>true</pre>.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you add a method to an object?",
      "options": {
        "A": "<pre>obj.createMethod('method')</pre>",
        "B": "<pre>obj.addMethod('method', function() {})</pre>",
        "C": "<pre>obj.defineMethod(function() {})</pre>",
        "D": "<pre>obj.method = function() {}</pre>"
      },
      "correct": "D",
      "explanation": "Methods in JavaScript are simply properties that hold function values. You can add them like any other property using assignment.",
      "topic": {
        "topics": [
          "Object methods and functions"
        ]
      }
    },
    {
      "id": 7,
      "question": "What does [CODE]Object.values({x: 10, y: 20})[/CODE] return?",
      "options": {
        "A": "<pre>['x', 'y']</pre>",
        "B": "<pre>[10, 20]</pre>",
        "C": "<pre>{10, 20}</pre>",
        "D": "<pre>30</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.values()</pre> returns an array of a given object's own enumerable property values, in the same order as provided by a <pre>for...in</pre> loop.",
      "topic": {
        "topics": [
          "Object iteration and keys"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which operator checks if a property exists on the object itself (not inherited)?",
      "options": {
        "A": "<pre>obj.contains('prop')</pre>",
        "B": "<pre>'prop' in obj</pre>",
        "C": "<pre>obj.hasOwnProperty('prop')</pre>",
        "D": "<pre>obj.exists('prop')</pre>"
      },
      "correct": "C",
      "explanation": "<pre>hasOwnProperty()</pre> returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the result of [CODE]const obj = {a: 1}; obj.a = 2; obj.a[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>1</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>2</pre>"
      },
      "correct": "D",
      "explanation": "Object properties can be reassigned using either dot notation or bracket notation. The property <pre>a</pre> is updated from 1 to 2.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 10,
      "question": "How do you create a shallow copy of an object?",
      "options": {
        "A": "Both A and B",
        "B": "<pre>Object.assign({}, obj)</pre>",
        "C": "<pre>JSON.parse(JSON.stringify(obj))</pre>",
        "D": "<pre>{...obj}</pre>"
      },
      "correct": "A",
      "explanation": "Both the spread operator and <pre>Object.assign()</pre> create shallow copies. <pre>JSON.parse(JSON.stringify(obj))</pre> creates a deep copy but loses methods and special values.",
      "topic": {
        "topics": [
          "Object references and copying"
        ]
      }
    },
    {
      "id": 11,
      "question": "What does [CODE]delete obj.property[/CODE] do?",
      "options": {
        "A": "Sets the property to undefined",
        "B": "Removes the property from the object",
        "C": "Sets the property to null",
        "D": "Throws an error"
      },
      "correct": "B",
      "explanation": "The <pre>delete</pre> operator removes a property from an object entirely. After deletion, the property no longer exists on the object.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which method returns property key-value pairs as arrays?",
      "options": {
        "A": "<pre>Object.entries()</pre>",
        "B": "<pre>Object.pairs()</pre>",
        "C": "<pre>Object.toArray()</pre>",
        "D": "<pre>Object.properties()</pre>"
      },
      "correct": "A",
      "explanation": "<pre>Object.entries()</pre> returns an array of a given object's own enumerable string-keyed property <pre>[key, value]</pre> pairs.",
      "topic": {
        "topics": [
          "Object iteration and keys"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the result of [CODE]{} === {}?[/CODE]",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>true</pre>",
        "C": "<pre>false</pre>",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "Objects are compared by reference, not by value. Even though both are empty objects, they are different objects in memory.",
      "topic": {
        "topics": [
          "Object comparison and equality"
        ]
      }
    },
    {
      "id": 14,
      "question": "How do you check if an object is empty (has no own properties)?",
      "options": {
        "A": "<pre>obj.isEmpty()</pre>",
        "B": "<pre>obj === {}</pre>",
        "C": "<pre>Object.keys(obj).length === 0</pre>",
        "D": "<pre>!obj</pre>"
      },
      "correct": "C",
      "explanation": "The most reliable way is to get the object's own keys and check if the array is empty. Comparing with <pre>{}</pre> doesn't work due to reference comparison.",
      "topic": {
        "topics": [
          "Object iteration and keys"
        ]
      }
    },
    {
      "id": 15,
      "question": "What does [CODE]const {name} = {name: 'John', age: 30}[/CODE] assign?",
      "options": {
        "A": "<pre>name = 'John'</pre>",
        "B": "<pre>name = {name: 'John'}</pre>",
        "C": "<pre>name = undefined</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "Object destructuring extracts properties from objects into variables. The variable name matches the property name by default.",
      "topic": {
        "topics": [
          "Basic object patterns"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which method prevents new properties from being added to an object?",
      "options": {
        "A": "<pre>Object.lock()</pre>",
        "B": "<pre>Object.freeze()</pre>",
        "C": "<pre>Object.seal()</pre>",
        "D": "<pre>Object.preventExtensions()</pre>"
      },
      "correct": "D",
      "explanation": "<pre>Object.preventExtensions()</pre> prevents new properties from being added to an object, but allows modification and deletion of existing properties.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the result of [CODE]Object.getPrototypeOf({})[/CODE]?",
      "options": {
        "A": "<pre>null</pre>",
        "B": "<pre>Object.prototype</pre>",
        "C": "<pre>{}</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "B",
      "explanation": "Objects created with literal notation inherit from <pre>Object.prototype</pre>. <pre>Object.getPrototypeOf()</pre> returns the prototype of the specified object.",
      "topic": {
        "topics": [
          "Object creation and literals"
        ]
      }
    },
    {
      "id": 18,
      "question": "How do you merge two objects into a new object?",
      "options": {
        "A": "<pre>{...obj1, ...obj2}</pre>",
        "B": "<pre>Object.assign({}, obj1, obj2)</pre>",
        "C": "<pre>Object.merge(obj1, obj2)</pre>",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "Both the spread operator and <pre>Object.assign()</pre> can merge objects. Later properties overwrite earlier ones if there are conflicts.",
      "topic": {
        "topics": [
          "Object references and copying"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does [CODE]'a' in {a: undefined}[/CODE] return?",
      "options": {
        "A": "Error",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>in</pre> operator checks for property existence, not property value. Even if the value is <pre>undefined</pre>, the property exists.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which method makes an object immutable?",
      "options": {
        "A": "<pre>Object.freeze()</pre>",
        "B": "<pre>Object.seal()</pre>",
        "C": "<pre>Object.preventExtensions()</pre>",
        "D": "<pre>Object.immutable()</pre>"
      },
      "correct": "A",
      "explanation": "<pre>Object.freeze()</pre> makes an object completely immutable - no properties can be added, removed, or modified. It's the strictest form of object protection.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the result of [CODE]Object.keys('hello')[/CODE]?",
      "options": {
        "A": "<pre>['h', 'e', 'l', 'l', 'o']</pre>",
        "B": "<pre>['0', '1', '2', '3', '4']</pre>",
        "C": "<pre>[]</pre>",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "When a string is passed to <pre>Object.keys()</pre>, it treats the string as an array-like object and returns the indices as strings.",
      "topic": {
        "topics": [
          "Object iteration and keys"
        ]
      }
    },
    {
      "id": 22,
      "question": "How do you create an object with a computed property name?",
      "options": {
        "A": "<pre>{[key]: value}</pre>",
        "B": "<pre>{key: value}</pre>",
        "C": "<pre>{'key': value}</pre>",
        "D": "<pre>Object.computed(key, value)</pre>"
      },
      "correct": "A",
      "explanation": "Computed property names allow you to use an expression in square brackets as the property name in object literals.",
      "topic": {
        "topics": [
          "Object creation and literals"
        ]
      }
    },
    {
      "id": 23,
      "question": "What does [CODE]Object.assign(obj, {a: 1})[/CODE] return?",
      "options": {
        "A": "The modified obj",
        "B": "A new object",
        "C": "<pre>true</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "A",
      "explanation": "<pre>Object.assign()</pre> returns the target object after copying properties. It modifies the target object in place.",
      "topic": {
        "topics": [
          "Object references and copying"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which method gets property descriptors for an object?",
      "options": {
        "A": "<pre>Object.getDescriptors()</pre>",
        "B": "<pre>Object.descriptors()</pre>",
        "C": "<pre>Object.getOwnPropertyDescriptors()</pre>",
        "D": "<pre>Object.properties()</pre>"
      },
      "correct": "C",
      "explanation": "<pre>Object.getOwnPropertyDescriptors()</pre> returns all own property descriptors of an object, including information about writability, enumerability, and configurability.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the result of [CODE]const obj = {}; obj[1] = 'a'; obj['1'][/CODE]?",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>'a'</pre>",
        "C": "<pre>1</pre>",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "Object property names are always strings (or Symbols). When you use a number as a property name, it's automatically converted to a string.",
      "topic": {
        "topics": [
          "Property access and modification"
        ]
      }
    },
    {
      "id": 26,
      "question": "How do you define a getter method in an object literal?",
      "options": {
        "A": "<pre>{get prop() { return value; }}</pre>",
        "B": "<pre>{prop: function() { return value; }}</pre>",
        "C": "<pre>{prop: () => value}</pre>",
        "D": "<pre>{prop: value}</pre>"
      },
      "correct": "A",
      "explanation": "Getter methods are defined using the <pre>get</pre> keyword followed by the property name and a function. They are accessed like properties, not called like methods.",
      "topic": {
        "topics": [
          "Object methods and functions"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does [CODE]Object.is(NaN, NaN)[/CODE] return?",
      "options": {
        "A": "<pre>true</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "<pre>Object.is()</pre> is similar to <pre>===</pre> but has different behavior for <pre>NaN</pre> and <pre>-0</pre>. It correctly identifies that <pre>NaN</pre> is the same as <pre>NaN</pre>.",
      "topic": {
        "topics": [
          "Object comparison and equality"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which method creates an object from key-value pairs?",
      "options": {
        "A": "<pre>Object.fromPairs()</pre>",
        "B": "<pre>Object.fromEntries()</pre>",
        "C": "<pre>Object.create()</pre>",
        "D": "<pre>Object.construct()</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.fromEntries()</pre> transforms a list of key-value pairs (like from <pre>Object.entries()</pre>) into an object.",
      "topic": {
        "topics": [
          "Object creation and literals"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the result of [CODE]Object.prototype.toString.call([])[/CODE]?",
      "options": {
        "A": "<pre>[]</pre>",
        "B": "<pre>'[object Object]'</pre>",
        "C": "<pre>'array'</pre>",
        "D": "<pre>'[object Array]'</pre>"
      },
      "correct": "D",
      "explanation": "This pattern is used to get the internal <pre>[[Class]]</pre> of an object. For arrays, it returns <pre>'[object Array]'</pre>, which is more reliable than <pre>typeof</pre> for type checking.",
      "topic": {
        "topics": [
          "Object methods and functions"
        ]
      }
    },
    {
      "id": 30,
      "question": "How do you check if an object has a specific property value?",
      "options": {
        "A": "<pre>value in Object.values(obj)</pre>",
        "B": "<pre>obj.hasValue(value)</pre>",
        "C": "<pre>Object.values(obj).includes(value)</pre>",
        "D": "<pre>obj.contains(value)</pre>"
      },
      "correct": "C",
      "explanation": "Get all values with <pre>Object.values()</pre> and then use <pre>includes()</pre> to check if the value exists in the array of values.",
      "topic": {
        "topics": [
          "Object iteration and keys"
        ]
      }
    }
  ]
}
