module.exports = {
  "metadata": {
    "title": "JavaScript Object Essentials",
    "description": "Fundamental object concepts, property management, and practical object usage patterns in JavaScript. This assessment covers core object operations that are essential for effective JavaScript development.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Object property existence",
      "Object value retrieval",
      "Object method binding",
      "Object property iteration",
      "Object reference behavior",
      "Object literal enhancements",
      "Object pattern matching"
    ],
    "topicLinks": [
      {
        "topicName": "Object property existence",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in"
      },
      {
        "topicName": "Object value retrieval",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
      },
      {
        "topicName": "Object method binding",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"
      },
      {
        "topicName": "Object property iteration",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
      },
      {
        "topicName": "Object reference behavior",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects"
      },
      {
        "topicName": "Object literal enhancements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer"
      },
      {
        "topicName": "Object pattern matching",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
      }
    ],
    "assessmentId": 16,
    "assessmentUniqueId": 1762477288481,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What does [CODE]obj.hasOwnProperty('prop')[/CODE] check?",
      "options": {
        "A": "If the property exists directly on the object",
        "B": "If the property exists in the prototype chain",
        "C": "If the property value is truthy",
        "D": "If the property is enumerable"
      },
      "correct": "A",
      "explanation": "<pre>hasOwnProperty()</pre> checks if the property exists directly on the object itself, not inherited from its prototype chain.",
      "topic": {
        "topics": [
          "Object property existence"
        ]
      }
    },
    {
      "id": 2,
      "question": "How do you safely access a nested property that might not exist?",
      "options": {
        "A": "<pre>obj?.level1?.level2</pre>",
        "B": "<pre>obj.level1.level2</pre>",
        "C": "<pre>obj['level1']['level2']</pre>",
        "D": "<pre>Object.get(obj, 'level1.level2')</pre>"
      },
      "correct": "A",
      "explanation": "The optional chaining operator (<pre>?.</pre>) returns <pre>undefined</pre> if any part of the chain is <pre>null</pre> or <pre>undefined</pre>, preventing errors.",
      "topic": {
        "topics": [
          "Object value retrieval"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the result of [CODE]const obj = {a: 1}; const obj2 = obj; obj2.a = 2; obj.a[/CODE]?",
      "options": {
        "A": "<pre>2</pre>",
        "B": "<pre>1</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "Objects are assigned by reference. Both <pre>obj</pre> and <pre>obj2</pre> point to the same object in memory, so changes through one variable affect the other.",
      "topic": {
        "topics": [
          "Object reference behavior"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which method preserves the 'this' context when passing an object method as a callback?",
      "options": {
        "A": "<pre>method.bind(obj)</pre>",
        "B": "<pre>obj.method()</pre>",
        "C": "<pre>method.call(obj)</pre>",
        "D": "<pre>method.apply(obj)</pre>"
      },
      "correct": "A",
      "explanation": "<pre>bind()</pre> creates a new function with the <pre>this</pre> context permanently bound to the specified object, perfect for callbacks.",
      "topic": {
        "topics": [
          "Object method binding"
        ]
      }
    },
    {
      "id": 5,
      "question": "What does [CODE]for (const key in {a: 1, b: 2}) { console.log(key) }[/CODE] output?",
      "options": {
        "A": "<pre>'a' 'b'</pre>",
        "B": "<pre>1 2</pre>",
        "C": "<pre>0 1</pre>",
        "D": "<pre>'a:1' 'b:2'</pre>"
      },
      "correct": "A",
      "explanation": "<pre>for...in</pre> iterates over enumerable property names (keys), not values. It includes inherited enumerable properties unless filtered.",
      "topic": {
        "topics": [
          "Object property iteration"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you use property value shorthand with method definitions?",
      "options": {
        "A": "<pre>const name = 'John'; const obj = {name, greet() {}}</pre>",
        "B": "<pre>const obj = {name: 'John', function greet() {}}</pre>",
        "C": "<pre>const obj = {name: 'John', greet: function() {}}</pre>",
        "D": "<pre>const obj = {'name': 'John', 'greet'() {}}</pre>"
      },
      "correct": "A",
      "explanation": "Property value shorthand and method shorthand can be combined in object literals for concise object creation.",
      "topic": {
        "topics": [
          "Object literal enhancements"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the result of [CODE]const {a, ...rest} = {a: 1, b: 2, c: 3}; rest[/CODE]?",
      "options": {
        "A": "<pre>{b: 2, c: 3}</pre>",
        "B": "<pre>{a: 1}</pre>",
        "C": "<pre>{a: 1, b: 2, c: 3}</pre>",
        "D": "<pre>undefined</pre>"
      },
      "correct": "A",
      "explanation": "The rest operator (<pre>...</pre>) in destructuring collects the remaining properties into a new object after extracting specified properties.",
      "topic": {
        "topics": [
          "Object pattern matching"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which operator checks if a property exists without accessing its value?",
      "options": {
        "A": "<pre>in</pre>",
        "B": "<pre>has</pre>",
        "C": "<pre>exists</pre>",
        "D": "<pre>contains</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>in</pre> operator checks if a property exists in an object or its prototype chain, without triggering getters or accessing the value.",
      "topic": {
        "topics": [
          "Object property existence"
        ]
      }
    },
    {
      "id": 9,
      "question": "What does [CODE]Object.assign({}, {a: 1}, {a: 2})[/CODE] return?",
      "options": {
        "A": "<pre>{a: 1}</pre>",
        "B": "<pre>{a: 2}</pre>",
        "C": "<pre>{a: 1, a: 2}</pre>",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "<pre>Object.assign()</pre> merges objects from right to left. Later properties overwrite earlier ones with the same name.",
      "topic": {
        "topics": [
          "Object value retrieval"
        ]
      }
    },
    {
      "id": 10,
      "question": "How do you check if an object has any properties?",
      "options": {
        "A": "<pre>obj !== {}</pre>",
        "B": "<pre>Object.keys(obj).length > 0</pre>",
        "C": "<pre>obj.hasProperties()</pre>",
        "D": "<pre>Object.hasProperties(obj)</pre>"
      },
      "correct": "B",
      "explanation": "Getting the object's keys and checking the array length is the most reliable way to determine if an object has any own enumerable properties.",
      "topic": {
        "topics": [
          "Object property existence"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the result of [CODE]const obj = {a: 1}; JSON.parse(JSON.stringify(obj)) === obj[/CODE]?",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>true</pre>",
        "D": "Error"
      },
      "correct": "B",
      "explanation": "Even though the objects have the same content, they are different objects in memory, so strict equality returns <pre>false</pre>.",
      "topic": {
        "topics": [
          "Object reference behavior"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which method is called when an object is used in a string context?",
      "options": {
        "A": "<pre>valueOf()</pre>",
        "B": "<pre>toString()</pre>",
        "C": "<pre>stringify()</pre>",
        "D": "<pre>toJSON()</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>toString()</pre> method is automatically called when an object is used in a string context, like concatenation with strings.",
      "topic": {
        "topics": [
          "Object method binding"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does [CODE]Object.entries({x: 10, y: 20}).map(([key, value]) => key + value)[/CODE] return?",
      "options": {
        "A": "<pre>['x', 'y']</pre>",
        "B": "<pre>['x10', 'y20']</pre>",
        "C": "<pre>[10, 20]</pre>",
        "D": "<pre>[30]</pre>"
      },
      "correct": "B",
      "explanation": "<pre>Object.entries()</pre> returns <pre>[key, value]</pre> pairs. The map function destructures each pair and concatenates key and value.",
      "topic": {
        "topics": [
          "Object property iteration"
        ]
      }
    },
    {
      "id": 14,
      "question": "How do you create an object with a method that uses arrow function syntax?",
      "options": {
        "A": "<pre>{method() => {}}</pre>",
        "B": "<pre>{method: () => {}}</pre>",
        "C": "<pre>{arrow method() {}}</pre>",
        "D": "<pre>{=> method() {}}</pre>"
      },
      "correct": "B",
      "explanation": "Arrow functions can be used as property values, but they have different <pre>this</pre> binding compared to method shorthand.",
      "topic": {
        "topics": [
          "Object literal enhancements"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the result of [CODE]const obj = {a: 1}; const {a: x, b: y = 2} = obj; x + y[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>3</pre>",
        "C": "<pre>NaN</pre>",
        "D": "<pre>1</pre>"
      },
      "correct": "B",
      "explanation": "Property <pre>a</pre> is extracted as <pre>x</pre> (value 1), and property <pre>b</pre> uses default value 2 since it doesn't exist. 1 + 2 = 3.",
      "topic": {
        "topics": [
          "Object pattern matching"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which method creates the most accurate deep copy of an object?",
      "options": {
        "A": "<pre>{...obj}</pre>",
        "B": "There's no built-in method for all cases",
        "C": "<pre>Object.assign({}, obj)</pre>",
        "D": "<pre>JSON.parse(JSON.stringify(obj))</pre>"
      },
      "correct": "B",
      "explanation": "JavaScript has no built-in deep copy method. Different approaches work for different cases, but none handle all scenarios perfectly.",
      "topic": {
        "topics": [
          "Object reference behavior"
        ]
      }
    },
    {
      "id": 17,
      "question": "What does [CODE]'valueOf' in {}.__proto__[/CODE] return?",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>false</pre>",
        "C": "<pre>true</pre>",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "<pre>valueOf</pre> is a method on <pre>Object.prototype</pre>, which is the prototype of empty objects, so the <pre>in</pre> operator returns <pre>true</pre>.",
      "topic": {
        "topics": [
          "Object property existence"
        ]
      }
    },
    {
      "id": 18,
      "question": "How do you get all property values including inherited ones?",
      "options": {
        "A": "<pre>obj.getAllValues()</pre>",
        "B": "<pre>Object.values(obj)</pre>",
        "C": "Use a for...in loop and collect values",
        "D": "<pre>Object.getOwnPropertyValues(obj)</pre>"
      },
      "correct": "C",
      "explanation": "There's no built-in method. You need to use <pre>for...in</pre> to iterate over all enumerable properties (including inherited) and collect their values.",
      "topic": {
        "topics": [
          "Object value retrieval"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the result of [CODE]const obj = {count: 0}; function increment() { this.count++ }; increment.call(obj); obj.count[/CODE]?",
      "options": {
        "A": "Error",
        "B": "<pre>0</pre>",
        "C": "<pre>1</pre>",
        "D": "<pre>NaN</pre>"
      },
      "correct": "C",
      "explanation": "<pre>call()</pre> sets the <pre>this</pre> context for the function call, so <pre>this.count</pre> refers to <pre>obj.count</pre>, which gets incremented.",
      "topic": {
        "topics": [
          "Object method binding"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which loop only iterates over an object's own properties?",
      "options": {
        "A": "<pre>for (const key in obj) {}</pre>",
        "B": "<pre>for (const value of obj) {}</pre>",
        "C": "<pre>Object.keys(obj).forEach(key => {})</pre>",
        "D": "<pre>Object.entries(obj).for(([k, v]) => {})</pre>"
      },
      "correct": "C",
      "explanation": "<pre>Object.keys()</pre> returns only own enumerable properties, so iterating over them excludes inherited properties.",
      "topic": {
        "topics": [
          "Object property iteration"
        ]
      }
    },
    {
      "id": 21,
      "question": "What does [CODE]const name = 'id'; const obj = {[name]: 123, [`${name}Value`]: 456}; obj.idValue[/CODE] return?",
      "options": {
        "A": "<pre>'idValue'</pre>",
        "B": "<pre>123</pre>",
        "C": "<pre>456</pre>",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "Computed property names can use any expression, including template literals. The property <pre>idValue</pre> has value 456.",
      "topic": {
        "topics": [
          "Object literal enhancements"
        ]
      }
    },
    {
      "id": 22,
      "question": "How do you extract multiple properties with different variable names?",
      "options": {
        "A": "<pre>const x = a, y = b from {a: 1, b: 2}</pre>",
        "B": "<pre>const {x: a, y: b} = {a: 1, b: 2}</pre>",
        "C": "<pre>const {a: x, b: y} = {a: 1, b: 2}</pre>",
        "D": "<pre>const [x, y] = {a: 1, b: 2}</pre>"
      },
      "correct": "C",
      "explanation": "The syntax <pre>{sourceProp: targetVar}</pre> in destructuring extracts <pre>sourceProp</pre> and assigns it to <pre>targetVar</pre>.",
      "topic": {
        "topics": [
          "Object pattern matching"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the result of [CODE]const obj = {}; obj.undefined = 1; obj[undefined][/CODE]?",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>null</pre>",
        "C": "<pre>1</pre>",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "Property names are converted to strings. <pre>undefined</pre> becomes the string <pre>'undefined'</pre>, so both notations access the same property.",
      "topic": {
        "topics": [
          "Object value retrieval"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which method is most efficient for checking if an object has a specific property?",
      "options": {
        "A": "<pre>'prop' in obj</pre>",
        "B": "<pre>Object.has(obj, 'prop')</pre>",
        "C": "<pre>obj.prop !== undefined</pre>",
        "D": "<pre>obj.hasOwnProperty('prop')</pre>"
      },
      "correct": "D",
      "explanation": "<pre>hasOwnProperty()</pre> is optimized for this specific use case and doesn't traverse the prototype chain unnecessarily.",
      "topic": {
        "topics": [
          "Object property existence"
        ]
      }
    },
    {
      "id": 25,
      "question": "What does [CODE]const obj = {value: 10, getDouble() { return this.value * 2 }}; const double = obj.getDouble; double()[/CODE] return?",
      "options": {
        "A": "Error",
        "B": "<pre>20</pre>",
        "C": "<pre>undefined</pre>",
        "D": "<pre>NaN</pre>"
      },
      "correct": "D",
      "explanation": "When a method is extracted from an object, it loses its <pre>this</pre> binding. <pre>this.value</pre> becomes <pre>undefined</pre>, and <pre>undefined * 2</pre> is <pre>NaN</pre>.",
      "topic": {
        "topics": [
          "Object method binding"
        ]
      }
    },
    {
      "id": 26,
      "question": "How do you iterate over both keys and values of an object?",
      "options": {
        "A": "<pre>obj.forEach((key, value) => {})</pre>",
        "B": "<pre>for (const [key, value] in obj) {}</pre>",
        "C": "<pre>Object.keysAndValues(obj).forEach(pair => {})</pre>",
        "D": "<pre>Object.entries(obj).forEach(([key, value]) => {})</pre>"
      },
      "correct": "D",
      "explanation": "<pre>Object.entries()</pre> returns <pre>[key, value]</pre> pairs that can be destructured in the loop for convenient access to both.",
      "topic": {
        "topics": [
          "Object property iteration"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is the result of [CODE]const a = 1; const b = 2; const obj = {a, b, sum() { return this.a + this.b }}; obj.sum()[/CODE]?",
      "options": {
        "A": "<pre>NaN</pre>",
        "B": "Error",
        "C": "<pre>undefined</pre>",
        "D": "<pre>3</pre>"
      },
      "correct": "D",
      "explanation": "Property value shorthand creates properties <pre>a</pre> and <pre>b</pre> with values 1 and 2. The method can access them via <pre>this</pre>.",
      "topic": {
        "topics": [
          "Object literal enhancements"
        ]
      }
    },
    {
      "id": 28,
      "question": "How do you destructure nested object properties?",
      "options": {
        "A": "<pre>const {nested->prop} = obj</pre>",
        "B": "<pre>const {nested.prop} = obj</pre>",
        "C": "<pre>const {nested{prop}} = obj</pre>",
        "D": "<pre>const {nested: {prop}} = obj</pre>"
      },
      "correct": "D",
      "explanation": "Nested destructuring uses the same object literal syntax to extract properties from nested objects.",
      "topic": {
        "topics": [
          "Object pattern matching"
        ]
      }
    },
    {
      "id": 29,
      "question": "What does [CODE]const obj = {a: 1}; Object.defineProperty(obj, 'b', {value: 2, enumerable: false}); 'b' in obj[/CODE] return?",
      "options": {
        "A": "<pre>false</pre>",
        "B": "Error",
        "C": "<pre>undefined</pre>",
        "D": "<pre>true</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>in</pre> operator checks property existence regardless of enumerability. Non-enumerable properties still exist and are detected by <pre>in</pre>.",
      "topic": {
        "topics": [
          "Object property existence"
        ]
      }
    },
    {
      "id": 30,
      "question": "Which approach creates a true copy of an object (not a reference)?",
      "options": {
        "A": "<pre>obj</pre>",
        "B": "<pre>Object.reference(obj)</pre>",
        "C": "<pre>const copy = obj</pre>",
        "D": "<pre>{...obj}</pre>"
      },
      "correct": "D",
      "explanation": "The spread operator creates a shallow copy with new object reference. Simple assignment creates a reference to the same object.",
      "topic": {
        "topics": [
          "Object reference behavior"
        ]
      }
    }
  ]
}
