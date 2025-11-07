// assessment21.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Prototype Chain Fundamentals",
    "description": "Basic concepts of prototype inheritance, object creation, and property lookup in JavaScript. Focuses on practical understanding of how prototypes work.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Object creation patterns",
        "Property lookup",
        "Method inheritance",
        "Prototype relationships",
        "Instance creation",
        "Built-in prototypes",
        "Prototype modification"
    ],
    "topicLinks": [
        {
            "topicName": "Object creation patterns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
        },
        {
            "topicName": "Property lookup",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
        },
        {
            "topicName": "Method inheritance",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#inheriting_methods"
        },
        {
            "topicName": "Prototype relationships",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf"
        },
        {
            "topicName": "Instance creation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"
        },
        {
            "topicName": "Built-in prototypes",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"
        },
        {
            "topicName": "Prototype modification",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"
        }
    ],
    "assessmentId": 21,
    "assessmentUniqueId": 1762521400375,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the main purpose of the prototype in JavaScript?",
        "options": {
            "A": "To share properties and methods between objects",
            "B": "To make objects faster",
            "C": "To hide private data",
            "D": "To create classes"
        },
        "correct": "A",
        "explanation": "The prototype allows objects to inherit properties and methods from other objects, enabling code reuse and memory efficiency since methods don't need to be copied to each instance.",
        "topic": {
            "topics": ["Method inheritance"]
        }
    },
    {
        "id": 2,
        "question": "How do you check if one object is the prototype of another?",
        "options": {
            "A": "<pre>prototypeObj.isPrototypeOf(obj)</pre>",
            "B": "<pre>obj instanceof prototypeObj</pre>",
            "C": "<pre>obj.hasPrototype(prototypeObj)</pre>",
            "D": "<pre>prototypeObj === obj.__proto__</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>isPrototypeOf()</pre> method checks if an object exists in another object's prototype chain. It's more reliable than manually checking <pre>__proto__</pre>.",
        "topic": {
            "topics": ["Prototype relationships"]
        }
    },
    {
        "id": 3,
        "question": "What is created when you use <pre>new Person()</pre>?",
        "options": {
            "A": "An instance of Person",
            "B": "A copy of Person",
            "C": "A reference to Person",
            "D": "A class named Person"
        },
        "correct": "A",
        "explanation": "The <pre>new</pre> keyword creates a new object instance that inherits from <pre>Person.prototype</pre> and calls the Person constructor function to initialize it.",
        "topic": {
            "topics": ["Instance creation"]
        }
    },
    {
        "id": 4,
        "question": "Where does JavaScript look first when accessing an object's property?",
        "options": {
            "A": "On the object itself",
            "B": "On the object's prototype",
            "C": "On Object.prototype",
            "D": "It checks all at once"
        },
        "correct": "A",
        "explanation": "JavaScript first checks if the property exists directly on the object. If not found, it then looks up the prototype chain until the property is found or the chain ends.",
        "topic": {
            "topics": ["Property lookup"]
        }
    },
    {
        "id": 5,
        "question": "What is the default prototype for objects created with <pre>{}</pre>?",
        "options": {
            "A": "<pre>Object.prototype</pre>",
            "B": "<pre>null</pre>",
            "C": "<pre>Array.prototype</pre>",
            "D": "No prototype"
        },
        "correct": "A",
        "explanation": "Objects created with object literal syntax automatically inherit from <pre>Object.prototype</pre>, which provides basic methods like <pre>toString()</pre> and <pre>hasOwnProperty()</pre>.",
        "topic": {
            "topics": ["Built-in prototypes"]
        }
    },
    {
        "id": 6,
        "question": "How can you add a method to all arrays in JavaScript?",
        "options": {
            "A": "<pre>Array.prototype.newMethod = function() {}</pre>",
            "B": "<pre>Array.newMethod = function() {}</pre>",
            "C": "<pre>allArrays.addMethod()</pre>",
            "D": "It's not possible"
        },
        "correct": "A",
        "explanation": "By adding a method to <pre>Array.prototype</pre>, all array instances will have access to that method through the prototype chain. This is called 'monkey patching'.",
        "topic": {
            "topics": ["Built-in prototypes"]
        }
    },
    {
        "id": 7,
        "question": "What does <pre>Object.create()</pre> do?",
        "options": {
            "A": "Creates a new object with specified prototype",
            "B": "Copies an existing object",
            "C": "Creates a class",
            "D": "Makes an object immutable"
        },
        "correct": "A",
        "explanation": "<pre>Object.create(proto)</pre> creates a new object whose prototype is set to the <pre>proto</pre> argument. This is a clean way to set up inheritance.",
        "topic": {
            "topics": ["Object creation patterns"]
        }
    },
    {
        "id": 8,
        "question": "What happens when you assign a value to an object property?",
        "options": {
            "A": "It always sets the property on the object itself",
            "B": "It modifies the prototype",
            "C": "It creates a new prototype",
            "D": "It checks the prototype first"
        },
        "correct": "A",
        "explanation": "Property assignment always sets the property directly on the object, even if a property with the same name exists in the prototype chain. This creates or updates an 'own property'.",
        "topic": {
            "topics": ["Property lookup"]
        }
    },
    {
        "id": 9,
        "question": "What is the result of [CODE]'hello'.toString === Object.prototype.toString[/CODE]?",
        "options": {
            "A": "<pre>false</pre>",
            "B": "<pre>true</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "This returns <pre>false</pre> because strings use <pre>String.prototype.toString</pre>, not <pre>Object.prototype.toString</pre>. Each built-in type has its own prototype chain.",
        "topic": {
            "topics": ["Built-in prototypes"]
        }
    },
    {
        "id": 10,
        "question": "How do you create an object that doesn't inherit from anything?",
        "options": {
            "A": "<pre>Object.create(null)</pre>",
            "B": "<pre>new Object()</pre>",
            "C": "<pre>{}</pre>",
            "D": "<pre>Object.empty()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>Object.create(null)</pre> creates an object with no prototype, meaning it doesn't inherit any methods from <pre>Object.prototype</pre>. These are called 'dictionary objects'.",
        "topic": {
            "topics": ["Object creation patterns"]
        }
    },
    {
        "id": 11,
        "question": "What is property shadowing in JavaScript?",
        "options": {
            "A": "When an object's own property hides a prototype property",
            "B": "When properties are invisible",
            "C": "When properties change color",
            "D": "When properties are deleted"
        },
        "correct": "A",
        "explanation": "Property shadowing occurs when an object has its own property with the same name as a property in its prototype chain. The own property 'shadows' or hides the prototype property.",
        "topic": {
            "topics": ["Property lookup"]
        }
    },
    {
        "id": 12,
        "question": "What method can you use to get all own property names of an object?",
        "options": {
            "A": "<pre>Object.getOwnPropertyNames(obj)</pre>",
            "B": "<pre>obj.getPropertyNames()</pre>",
            "C": "<pre>Object.keys(obj)</pre>",
            "D": "Both A and C"
        },
        "correct": "D",
        "explanation": "Both <pre>Object.getOwnPropertyNames()</pre> and <pre>Object.keys()</pre> return an object's own properties. <pre>getOwnPropertyNames()</pre> includes non-enumerable properties while <pre>keys()</pre> only includes enumerable ones.",
        "topic": {
            "topics": ["Property lookup"]
        }
    },
    {
        "id": 13,
        "question": "What is the prototype of a function?",
        "options": {
            "A": "<pre>Function.prototype</pre>",
            "B": "<pre>Object.prototype</pre>",
            "C": "<pre>null</pre>",
            "D": "Functions don't have prototypes"
        },
        "correct": "A",
        "explanation": "All functions inherit from <pre>Function.prototype</pre>, which provides methods like <pre>call()</pre>, <pre>apply()</pre>, and <pre>bind()</pre>.",
        "topic": {
            "topics": ["Built-in prototypes"]
        }
    },
    {
        "id": 14,
        "question": "How can you prevent modifications to an object's prototype?",
        "options": {
            "A": "<pre>Object.freeze(Object.prototype)</pre>",
            "B": "<pre>Object.lock(obj)</pre>",
            "C": "<pre>obj.sealPrototype()</pre>",
            "D": "It's not possible"
        },
        "correct": "A",
        "explanation": "<pre>Object.freeze()</pre> makes an object immutable. Freezing <pre>Object.prototype</pre> prevents modifications to the base prototype that all objects inherit from.",
        "topic": {
            "topics": ["Prototype modification"]
        }
    },
    {
        "id": 15,
        "question": "What does the <pre>new</pre> keyword do internally?",
        "options": {
            "A": "Creates object, sets prototype, calls constructor",
            "B": "Just calls the function",
            "C": "Only creates an empty object",
            "D": "Copies the function"
        },
        "correct": "A",
        "explanation": "The <pre>new</pre> keyword: 1) Creates a new object, 2) Sets the object's prototype to the constructor's prototype, 3) Calls the constructor with <pre>this</pre> set to the new object, 4) Returns the new object.",
        "topic": {
            "topics": ["Instance creation"]
        }
    },
    {
        "id": 16,
        "question": "What is the relationship between <pre>Object</pre> and <pre>Object.prototype</pre>?",
        "options": {
            "A": "Object.prototype is the prototype of objects created by Object",
            "B": "Object is an instance of Object.prototype",
            "C": "They are the same thing",
            "D": "There is no relationship"
        },
        "correct": "A",
        "explanation": "<pre>Object.prototype</pre> is the prototype for objects created by the <pre>Object</pre> constructor or with object literal syntax. It's at the top of most prototype chains.",
        "topic": {
            "topics": ["Built-in prototypes"]
        }
    },
    {
        "id": 17,
        "question": "How can you iterate over only an object's own properties?",
        "options": {
            "A": "Use <pre>hasOwnProperty()</pre> check in a loop",
            "B": "Use <pre>for...in</pre> without checks",
            "C": "Use <pre>Object.values()</pre>",
            "D": "It's not possible"
        },
        "correct": "A",
        "explanation": "When using <pre>for...in</pre>, you should check <pre>obj.hasOwnProperty(key)</pre> to filter out inherited properties from the prototype chain.",
        "topic": {
            "topics": ["Property lookup"]
        }
    },
    {
        "id": 18,
        "question": "What happens when you delete an object's own property?",
        "options": {
            "A": "The property is removed from the object",
            "B": "The property is removed from the prototype",
            "C": "All instances lose the property",
            "D": "It creates an error"
        },
        "correct": "A",
        "explanation": "The <pre>delete</pre> operator only removes own properties from an object. If a property with the same name exists in the prototype chain, it becomes visible again after deletion.",
        "topic": {
            "topics": ["Property lookup"]
        }
    },
    {
        "id": 19,
        "question": "What is the purpose of <pre>Object.getPrototypeOf()</pre>?",
        "options": {
            "A": "To safely get an object's prototype",
            "B": "To set an object's prototype",
            "C": "To create a new prototype",
            "D": "To delete a prototype"
        },
        "correct": "A",
        "explanation": "<pre>Object.getPrototypeOf(obj)</pre> is the standard way to get an object's prototype, replacing the non-standard <pre>__proto__</pre> property.",
        "topic": {
            "topics": ["Prototype relationships"]
        }
    },
    {
        "id": 20,
        "question": "Can you change an object's prototype after it's created?",
        "options": {
            "A": "Yes, with <pre>Object.setPrototypeOf()</pre>",
            "B": "No, prototypes are fixed",
            "C": "Only for arrays",
            "D": "Only before the object is used"
        },
        "correct": "A",
        "explanation": "<pre>Object.setPrototypeOf(obj, proto)</pre> can change an object's prototype after creation, but this is generally discouraged for performance reasons.",
        "topic": {
            "topics": ["Prototype modification"]
        }
    },
    {
        "id": 21,
        "question": "What is the result of [CODE]Function.prototype.isPrototypeOf(Object)[/CODE]?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "This returns <pre>true</pre> because <pre>Object</pre> is a constructor function, and all functions inherit from <pre>Function.prototype</pre>.",
        "topic": {
            "topics": ["Prototype relationships"]
        }
    },
    {
        "id": 22,
        "question": "How do built-in methods like <pre>toString()</pre> work on primitives?",
        "options": {
            "A": "JavaScript temporarily wraps them in objects",
            "B": "Primitives have their own methods",
            "C": "It's a special language feature",
            "D": "They don't work on primitives"
        },
        "correct": "A",
        "explanation": "When you call a method on a primitive, JavaScript automatically wraps it in a temporary object (String, Number, etc.), calls the method, then discards the wrapper.",
        "topic": {
            "topics": ["Method inheritance"]
        }
    },
    {
        "id": 23,
        "question": "What is the difference between <pre>prototype</pre> and <pre>__proto__</pre>?",
        "options": {
            "A": "<pre>prototype</pre> is on functions, <pre>__proto__</pre> is on objects",
            "B": "They are the same thing",
            "C": "<pre>prototype</pre> is newer",
            "D": "<pre>__proto__</pre> is only for arrays"
        },
        "correct": "A",
        "explanation": "<pre>prototype</pre> is a property of constructor functions that sets what new instances will inherit. <pre>__proto__</pre> is a property of objects that points to their actual prototype.",
        "topic": {
            "topics": ["Prototype relationships"]
        }
    },
    {
        "id": 24,
        "question": "What happens if you call a method that doesn't exist on an object or its prototype?",
        "options": {
            "A": "It throws a TypeError",
            "B": "It returns <pre>undefined</pre>",
            "C": "It creates the method",
            "D": "It searches parent scopes"
        },
        "correct": "A",
        "explanation": "When JavaScript can't find a method anywhere in the prototype chain, it throws a TypeError: 'undefined is not a function' (or similar).",
        "topic": {
            "topics": ["Method inheritance"]
        }
    },
    {
        "id": 25,
        "question": "How can you create multiple objects that share the same methods efficiently?",
        "options": {
            "A": "Put methods on a shared prototype",
            "B": "Copy methods to each object",
            "C": "Use global functions",
            "D": "It's not possible"
        },
        "correct": "A",
        "explanation": "By placing methods on a prototype, all objects that inherit from that prototype share the same method instances, which is memory-efficient.",
        "topic": {
            "topics": ["Method inheritance"]
        }
    },
    {
        "id": 26,
        "question": "What is the prototype chain for an array?",
        "options": {
            "A": "Array → Array.prototype → Object.prototype → null",
            "B": "Array → Object.prototype → null",
            "C": "Array → Array.prototype → null",
            "D": "Array → Function.prototype → Object.prototype → null"
        },
        "correct": "A",
        "explanation": "Arrays inherit from <pre>Array.prototype</pre>, which inherits from <pre>Object.prototype</pre>, which ultimately points to <pre>null</pre>.",
        "topic": {
            "topics": ["Built-in prototypes"]
        }
    },
    {
        "id": 27,
        "question": "What does <pre>Object.create()</pre> return if passed <pre>null</pre>?",
        "options": {
            "A": "An object with no prototype",
            "B": "<pre>null</pre>",
            "C": "An empty object",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "<pre>Object.create(null)</pre> creates an object that doesn't inherit from anything - its prototype chain ends immediately. These are useful as pure dictionaries.",
        "topic": {
            "topics": ["Object creation patterns"]
        }
    },
    {
        "id": 28,
        "question": "How can you check if a property is inherited vs own?",
        "options": {
            "A": "Use <pre>hasOwnProperty()</pre>",
            "B": "Use <pre>typeof</pre>",
            "C": "Use <pre>instanceof</pre>",
            "D": "Check if it's <pre>undefined</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>hasOwnProperty()</pre> method returns <pre>true</pre> only if the property exists directly on the object (not inherited).",
        "topic": {
            "topics": ["Property lookup"]
        }
    },
    {
        "id": 29,
        "question": "What is the result of [CODE]Object.prototype.isPrototypeOf([])[/CODE]?",
        "options": {
            "A": "<pre>true</pre>",
            "B": "<pre>false</pre>",
            "C": "<pre>undefined</pre>",
            "D": "Error"
        },
        "correct": "A",
        "explanation": "This returns <pre>true</pre> because arrays inherit from <pre>Array.prototype</pre>, which in turn inherits from <pre>Object.prototype</pre>.",
        "topic": {
            "topics": ["Prototype relationships"]
        }
    },
    {
        "id": 30,
        "question": "Why is understanding prototypes important for JavaScript developers?",
        "options": {
            "A": "It's fundamental to how JavaScript works",
            "B": "It makes code run faster",
            "C": "It's only needed for advanced features",
            "D": "It's optional knowledge"
        },
        "correct": "A",
        "explanation": "Prototypes are core to JavaScript's object model. Understanding them is essential for effective object-oriented programming, debugging, and working with libraries and frameworks in JavaScript.",
        "topic": {
            "topics": ["Method inheritance"]
        }
    }
];

module.exports = { metadata, questions };