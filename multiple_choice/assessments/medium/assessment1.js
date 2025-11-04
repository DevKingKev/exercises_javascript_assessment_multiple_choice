// assessment1.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "Advanced JavaScript Concepts",
    "description": "Closures, prototypes, asynchronous programming, promises, async/await, this keyword, classes, and advanced ES6+ features",
    "difficulty": "medium",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
        "Closures and lexical scope",
        "Prototypes and inheritance",
        "Promises and async/await",
        "The 'this' keyword and binding",
        "ES6 Classes and inheritance",
        "Array methods (reduce, map, filter, find)",
        "Spread and rest operators",
        "Destructuring patterns",
        "Event loop and call stack",
        "Higher-order functions"
    ],
    "assessmentId": 1,
    "assessmentUniqueId": 1761349899000,
    "testType": "multiple-choice",
    "topicLinks": [
        {
            "topicName": "Closures and lexical scope",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
        },
        {
            "topicName": "The 'this' keyword and binding",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
        },
        {
            "topicName": "Array methods (reduce, map, filter, find)",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        },
        {
            "topicName": "Higher-order functions",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Higher-order_function"
        },
        {
            "topicName": "Promises and async/await",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises"
        },
        {
            "topicName": "Spread and rest operators",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
        },
        {
            "topicName": "Destructuring patterns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
        },
        {
            "topicName": "Prototypes and inheritance",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
        },
        {
            "topicName": "ES6 Classes and inheritance",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
        },
        {
            "topicName": "Event loop and call stack",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
        }
    ]
};

const questions = [
    {
        "id": 1,
        "question": "What will the following code output?\n\n[CODE]\nfunction outer() {\n    let count = 0;\n    return function inner() {\n        count++;\n        return count;\n    };\n}\n\nconst counter = outer();\nconsole.log(counter());\nconsole.log(counter());\n[/CODE]",
        "options": {
            "A": "0, 0",
            "B": "1, 1",
            "C": "1, 2",
            "D": "undefined, undefined"
        },
        "correct": "C",
        "explanation": "This demonstrates a closure. The inner function maintains access to the 'count' variable from the outer function's scope even after outer() has finished executing. This is called lexical scoping.\n\nWhen counter() is called the first time, count increments from 0 to 1 and returns 1. The second call increments it to 2 and returns 2. The variable persists between calls because the inner function 'closes over' the outer function's variables, creating a closure that preserves the state.",
        "topic": {
            "topics": [
                "Closures and lexical scope",
                "The 'this' keyword and binding"
            ]
        }
    },
    {
        "id": 2,
        "question": "What is the output of this code?\n\n[CODE]\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.reduce((acc, curr) => acc + curr, 0);\nconsole.log(result);\n[/CODE]",
        "options": {
            "A": "0",
            "B": "15",
            "C": "[1, 2, 3, 4, 5]",
            "D": "undefined"
        },
        "correct": "B",
        "explanation": "The reduce() method executes a reducer function on each element of the array, resulting in a single output value. It takes two parameters: the reducer function and an initial value (0 in this case).\n\nThe reducer function receives an accumulator (acc) and the current value (curr). Starting with acc = 0:\n- First iteration: 0 + 1 = 1\n- Second: 1 + 2 = 3\n- Third: 3 + 3 = 6\n- Fourth: 6 + 4 = 10\n- Fifth: 10 + 5 = 15\n\nReduce is powerful for transforming arrays into single values like sums, products, or even objects.",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)",
                "Higher-order functions"
            ]
        }
    },
    {
        "id": 3,
        "question": "Which statement about Promises is TRUE?",
        "options": {
            "A": "Promises are always synchronous",
            "B": "A Promise can be in one of three states: pending, fulfilled, or rejected",
            "C": "You cannot chain multiple .then() calls",
            "D": "Promises execute immediately and block code execution"
        },
        "correct": "B",
        "explanation": "A Promise represents the eventual completion (or failure) of an asynchronous operation. It exists in exactly one of three states:\n\n1. PENDING: Initial state, neither fulfilled nor rejected\n2. FULFILLED: The operation completed successfully\n3. REJECTED: The operation failed\n\nOnce a Promise transitions from pending to fulfilled or rejected, it becomes 'settled' and cannot change states again. This immutability is a key feature of Promises.\n\nPromises are asynchronous (A is false), can be chained with multiple .then() calls (C is false), and don't block code execution (D is false) - they allow other code to run while waiting for the async operation to complete.",
        "topic": {
            "topics": [
                "Promises and async/await",
                "The 'this' keyword and binding"
            ]
        }
    },
    {
        "id": 4,
        "question": "What will this code output?\n\n[CODE]\nconst obj = {\n    name: 'Alice',\n    greet: function() {\n        console.log(this.name);\n    }\n};\n\nconst greetFunc = obj.greet;\ngreetFunc();\n[/CODE]",
        "options": {
            "A": "Alice",
            "B": "undefined",
            "C": "null",
            "D": "TypeError"
        },
        "correct": "B",
        "explanation": "This demonstrates how 'this' binding works in JavaScript. The value of 'this' is determined by HOW a function is called, not where it's defined.\n\nWhen we assign obj.greet to greetFunc, we're creating a reference to the function but losing the context of the object. When greetFunc() is called as a standalone function (not as a method of obj), 'this' refers to the global object (or undefined in strict mode).\n\nSince the global object doesn't have a 'name' property, this.name returns undefined.\n\nTo fix this, you could use:\n- greetFunc.call(obj) - explicitly set 'this'\n- obj.greet.bind(obj) - create a bound function\n- Arrow functions which don't have their own 'this'",
        "topic": {
            "topics": [
                "The 'this' keyword and binding"
            ]
        }
    },
    {
        "id": 5,
        "question": "What is the difference between 'async/await' and Promises?",
        "options": {
            "A": "async/await is faster than Promises",
            "B": "async/await is syntactic sugar that makes Promises easier to work with",
            "C": "async/await doesn't use Promises at all",
            "D": "Promises are deprecated in favor of async/await"
        },
        "correct": "B",
        "explanation": "async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. They don't replace Promises - they make them easier to use.\n\nKey points:\n- An async function always returns a Promise\n- await can only be used inside async functions\n- await pauses execution until the Promise resolves\n- Error handling uses try/catch instead of .catch()\n\nExample comparison:\n\nPromises:\nfetch(url)\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error(error));\n\nasync/await:\ntry {\n    const response = await fetch(url);\n    const data = await response.json();\n    console.log(data);\n} catch (error) {\n    console.error(error);\n}\n\nBoth accomplish the same thing, but async/await is often more readable.",
        "topic": {
            "topics": [
                "Promises and async/await"
            ]
        }
    },
    {
        "id": 6,
        "question": "What will this code output?\n\n[CODE]\nconst arr = [1, 2, 3];\nconst [a, ...rest] = arr;\nconsole.log(rest);\n[/CODE]",
        "options": {
            "A": "1",
            "B": "[1, 2, 3]",
            "C": "[2, 3]",
            "D": "undefined"
        },
        "correct": "C",
        "explanation": "This uses destructuring with the rest operator (...). Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.\n\nThe rest operator collects the 'rest' of the elements:\n- 'a' gets the first element (1)\n- '...rest' collects all remaining elements into a new array [2, 3]\n\nThe rest operator must always be the last element in destructuring. It's different from the spread operator (which looks identical but is used differently):\n\nRest (in destructuring): const [first, ...others] = arr;\nSpread (in array literals): const newArr = [...arr, 4, 5];\n\nBoth use '...' syntax but serve opposite purposes - rest collects items, spread expands them.",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)",
                "Spread and rest operators",
                "Destructuring patterns"
            ]
        }
    },
    {
        "id": 7,
        "question": "What does the following code demonstrate?\n\n[CODE]\nclass Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    speak() {\n        console.log(`${this.name} makes a sound`);\n    }\n}\n\nclass Dog extends Animal {\n    speak() {\n        console.log(`${this.name} barks`);\n    }\n}\n[/CODE]",
        "options": {
            "A": "Encapsulation",
            "B": "Polymorphism",
            "C": "Abstraction",
            "D": "Composition"
        },
        "correct": "B",
        "explanation": "This is a classic example of polymorphism in object-oriented programming. Polymorphism means 'many forms' - the same method name (speak) behaves differently depending on which class instance it's called on.\n\nKey concepts shown:\n\n1. INHERITANCE: Dog extends Animal, inheriting its properties and methods\n2. METHOD OVERRIDING: Dog provides its own implementation of speak()\n3. POLYMORPHISM: Both Animal and Dog have a speak() method, but they behave differently\n\nWhen you call speak() on a Dog instance, JavaScript uses the Dog's version, not Animal's. This is called method overriding.\n\nExample:\nconst animal = new Animal('Generic');\nanimal.speak(); // 'Generic makes a sound'\n\nconst dog = new Dog('Rex');\ndog.speak(); // 'Rex barks'\n\nSame method name, different behavior based on the object type - that's polymorphism!",
        "topic": {
            "topics": [
                "Prototypes and inheritance",
                "The 'this' keyword and binding",
                "ES6 Classes and inheritance"
            ]
        }
    },
    {
        "id": 8,
        "question": "What will be the output?\n\n[CODE]\nconsole.log(typeof null);\nconsole.log(typeof undefined);\nconsole.log(typeof []);\nconsole.log(typeof {});\n[/CODE]",
        "options": {
            "A": "'null', 'undefined', 'array', 'object'",
            "B": "'object', 'undefined', 'object', 'object'",
            "C": "'null', 'undefined', 'object', 'object'",
            "D": "'object', 'object', 'array', 'object'"
        },
        "correct": "B",
        "explanation": "This reveals some quirks in JavaScript's typeof operator:\n\n1. typeof null returns 'object' - This is a famous JavaScript bug that dates back to its creation! null is a primitive value, not an object, but due to how JavaScript's type system was implemented, this bug was never fixed for backward compatibility reasons.\n\n2. typeof undefined returns 'undefined' - This is correct and expected.\n\n3. typeof [] returns 'object' - Arrays ARE objects in JavaScript (they're a special type of object). To specifically check for arrays, use Array.isArray([]) which returns true.\n\n4. typeof {} returns 'object' - This is correct; {} is an object literal.\n\nTo properly check types:\n- Arrays: Array.isArray(value)\n- null: value === null\n- Objects (excluding null): typeof value === 'object' && value !== null\n- Other primitives: typeof works fine",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)"
            ]
        }
    },
    {
        "id": 9,
        "question": "What is a closure in JavaScript?",
        "options": {
            "A": "A way to close and terminate a function",
            "B": "A function that has access to variables from its outer scope",
            "C": "A method to prevent memory leaks",
            "D": "A syntax for defining anonymous functions"
        },
        "correct": "B",
        "explanation": "A closure is created when a function is defined inside another function, and the inner function has access to the outer function's variables even after the outer function has finished executing. This is one of JavaScript's most powerful features.\n\nHow closures work:\n\nfunction createCounter() {\n    let count = 0;  // Private variable\n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        decrement: function() {\n            count--;\n            return count;\n        }\n    };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.increment(); // 2\ncounter.decrement(); // 1\n\nThe 'count' variable is enclosed in the closure, accessible to increment and decrement functions but not directly accessible from outside. This creates private variables in JavaScript.\n\nCommon uses:\n- Data privacy/encapsulation\n- Factory functions\n- Callbacks and event handlers\n- Maintaining state in functional programming",
        "topic": {
            "topics": [
                "Closures and lexical scope",
                "The 'this' keyword and binding",
                "Higher-order functions"
            ]
        }
    },
    {
        "id": 10,
        "question": "What will this code output?\n\n[CODE]\nconst promise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve('Success!'), 1000);\n});\n\npromise.then(result => console.log(result));\nconsole.log('Waiting...');\n[/CODE]",
        "options": {
            "A": "'Success!' then 'Waiting...'",
            "B": "'Waiting...' then 'Success!'",
            "C": "Only 'Success!'",
            "D": "Only 'Waiting...'"
        },
        "correct": "B",
        "explanation": "This demonstrates JavaScript's asynchronous execution and the event loop. Understanding execution order is crucial for async programming.\n\nExecution flow:\n\n1. The Promise is created and setTimeout is scheduled (but doesn't block)\n2. .then() registers a callback but doesn't execute yet\n3. console.log('Waiting...') executes immediately (synchronous)\n4. The script finishes, and the call stack is empty\n5. After 1 second, setTimeout's callback executes, resolving the Promise\n6. The Promise's .then() callback is added to the microtask queue\n7. The event loop processes microtasks, executing console.log('Success!')\n\nOutput:\n'Waiting...'  (immediately)\n'Success!'    (after 1 second)\n\nKey concepts:\n- Synchronous code runs first\n- Async callbacks (setTimeout) are scheduled for later\n- Promise callbacks (.then) are microtasks and run before setTimeout callbacks\n- The event loop manages when async code executes",
        "topic": {
            "topics": [
                "Promises and async/await",
                "The 'this' keyword and binding",
                "Spread and rest operators",
                "Event loop and call stack",
                "Higher-order functions"
            ]
        }
    },
    {
        "id": 11,
        "question": "What is the purpose of the 'bind()' method?",
        "options": {
            "A": "To combine two objects together",
            "B": "To create a new function with a specific 'this' value",
            "C": "To bind event listeners to DOM elements",
            "D": "To create a copy of an array"
        },
        "correct": "B",
        "explanation": "The bind() method creates a new function with a permanently bound 'this' value, regardless of how the function is called. This is essential for controlling context in JavaScript.\n\nSyntax: func.bind(thisArg, arg1, arg2, ...)\n\nExample:\n\nconst person = {\n    name: 'Alice',\n    greet: function() {\n        console.log('Hello, ' + this.name);\n    }\n};\n\nconst greetFunc = person.greet;\ngreetFunc(); // 'Hello, undefined' - lost context!\n\nconst boundGreet = person.greet.bind(person);\nboundGreet(); // 'Hello, Alice' - context preserved!\n\nCommon use cases:\n\n1. Event handlers:\nbutton.addEventListener('click', this.handleClick.bind(this));\n\n2. Callbacks:\nsetTimeout(this.doSomething.bind(this), 1000);\n\n3. Partial application (pre-setting arguments):\nconst multiply = (a, b) => a * b;\nconst double = multiply.bind(null, 2);\ndouble(5); // 10\n\nRelated methods: call() and apply() invoke immediately, while bind() returns a new function.",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Spread and rest operators",
                "Event loop and call stack",
                "Higher-order functions"
            ]
        }
    },
    {
        "id": 12,
        "question": "What does the spread operator (...) do in this context?\n\n[CODE]\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\n[/CODE]",
        "options": {
            "A": "Creates a nested array",
            "B": "Merges the arrays into a single flat array",
            "C": "Creates a reference to the original arrays",
            "D": "Throws an error"
        },
        "correct": "B",
        "explanation": "The spread operator (...) expands an iterable (like an array) into individual elements. It's incredibly versatile and creates shallow copies, not references.\n\nIn this example:\n[...arr1, ...arr2] expands to [1, 2, 3, 4, 5, 6]\n\nCommon use cases:\n\n1. Combining arrays:\nconst all = [...arr1, ...arr2];\n\n2. Copying arrays (shallow copy):\nconst copy = [...original];\n\n3. Adding elements:\nconst withNew = [...arr1, 'new', ...arr2];\n\n4. Function arguments:\nconst numbers = [1, 2, 3];\nMath.max(...numbers); // same as Math.max(1, 2, 3)\n\n5. Object spreading (ES2018+):\nconst obj1 = {a: 1, b: 2};\nconst obj2 = {c: 3};\nconst combined = {...obj1, ...obj2}; // {a: 1, b: 2, c: 3}\n\nImportant: Spread creates a shallow copy. Nested objects/arrays are still referenced, not copied deeply.",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)",
                "Spread and rest operators"
            ]
        }
    },
    {
        "id": 13,
        "question": "What will this code output?\n\n[CODE]\nfunction* generator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\n\nconst gen = generator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n[/CODE]",
        "options": {
            "A": "1, 1",
            "B": "1, 2",
            "C": "undefined, undefined",
            "D": "Error"
        },
        "correct": "B",
        "explanation": "This demonstrates generator functions, indicated by the asterisk (*) after 'function'. Generators are special functions that can pause and resume execution, making them powerful for creating iterators and handling async operations.\n\nHow generators work:\n\n1. Calling generator() doesn't execute the function - it returns a generator object\n2. Each call to .next() executes until the next 'yield' statement\n3. .next() returns an object: {value: yielded_value, done: false/true}\n\nExecution flow:\n- gen.next() → executes until 'yield 1' → returns {value: 1, done: false}\n- gen.next() → continues from where it paused, executes until 'yield 2' → returns {value: 2, done: false}\n- gen.next() → would yield 3\n- gen.next() → would return {value: undefined, done: true}\n\nCommon uses:\n- Creating custom iterators\n- Lazy evaluation (generating values on demand)\n- Implementing async patterns (though async/await is now preferred)\n- Infinite sequences\n- State machines\n\nGenerators provide fine-grained control over function execution.",
        "topic": {
            "topics": [
                "Promises and async/await",
                "The 'this' keyword and binding"
            ]
        }
    },
    {
        "id": 14,
        "question": "What is prototype inheritance in JavaScript?",
        "options": {
            "A": "A way to copy properties from one object to another",
            "B": "Objects inherit properties and methods from their prototype object",
            "C": "A method only available in ES6 classes",
            "D": "A way to prevent property access"
        },
        "correct": "B",
        "explanation": "Prototype inheritance is JavaScript's mechanism for object inheritance. Every JavaScript object has an internal link to another object called its prototype, forming a prototype chain.\n\nHow it works:\n\nfunction Person(name) {\n    this.name = name;\n}\n\nPerson.prototype.greet = function() {\n    console.log('Hi, I am ' + this.name);\n};\n\nconst alice = new Person('Alice');\nalice.greet(); // 'Hi, I am Alice'\n\nWhen you call alice.greet():\n1. JavaScript looks for 'greet' on the alice object - not found\n2. It looks up the prototype chain to Person.prototype - found!\n3. Executes the method with 'this' bound to alice\n\nPrototype chain:\nalice → Person.prototype → Object.prototype → null\n\nKey concepts:\n- All objects inherit from Object.prototype (unless explicitly set to null)\n- Prototype properties are shared among all instances (memory efficient)\n- Instance properties shadow prototype properties with the same name\n- Modern syntax (ES6 classes) is syntactic sugar over prototypes\n\nChecking prototypes:\n- Object.getPrototypeOf(alice) === Person.prototype // true\n- alice instanceof Person // true\n- alice.hasOwnProperty('name') // true (own property)\n- alice.hasOwnProperty('greet') // false (inherited)",
        "topic": {
            "topics": [
                "Prototypes and inheritance",
                "The 'this' keyword and binding",
                "ES6 Classes and inheritance"
            ]
        }
    },
    {
        "id": 15,
        "question": "What will this code output?\n\n[CODE]\nconst obj = { a: 1, b: 2, c: 3 };\nconst { a, ...rest } = obj;\nconsole.log(rest);\n[/CODE]",
        "options": {
            "A": "{ a: 1, b: 2, c: 3 }",
            "B": "{ b: 2, c: 3 }",
            "C": "1",
            "D": "undefined"
        },
        "correct": "B",
        "explanation": "This demonstrates object destructuring with the rest operator. Similar to array destructuring, it extracts properties and collects the remaining ones.\n\nBreakdown:\n- 'a' extracts the 'a' property (value 1)\n- '...rest' collects all remaining properties into a new object\n- Result: rest = { b: 2, c: 3 }\n\nPractical examples:\n\n1. Removing properties:\nconst user = { name: 'Alice', password: '123', email: 'a@b.com' };\nconst { password, ...safeUser } = user;\n// safeUser = { name: 'Alice', email: 'a@b.com' }\n\n2. Function parameters:\nfunction updateUser({ id, ...updates }) {\n    // id is extracted, updates contains all other properties\n    database.update(id, updates);\n}\n\n3. Combining with defaults:\nconst config = { timeout: 3000, retries: 3 };\nconst { timeout = 5000, debug = false, ...other } = config;\n// timeout = 3000, debug = false, other = { retries: 3 }\n\nThe rest operator in objects (ES2018) mirrors its array functionality, making data manipulation more elegant and functional.",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)",
                "Spread and rest operators",
                "Destructuring patterns"
            ]
        }
    },
    {
        "id": 16,
        "question": "Which array method does NOT mutate the original array?",
        "options": {
            "A": "push()",
            "B": "sort()",
            "C": "map()",
            "D": "splice()"
        },
        "correct": "C",
        "explanation": "Understanding which methods mutate (modify) arrays versus which return new arrays is crucial for avoiding bugs and writing predictable code.\n\nMUTATING methods (modify original):\n- push(), pop() - add/remove from end\n- shift(), unshift() - add/remove from start\n- splice() - add/remove at any position\n- sort() - sorts in place\n- reverse() - reverses in place\n\nNON-MUTATING methods (return new array/value):\n- map() - transforms each element\n- filter() - selects elements\n- slice() - extracts portion\n- concat() - combines arrays\n- reduce() - reduces to single value\n- find(), findIndex() - searches\n- every(), some() - tests elements\n\nExample:\n\nconst original = [1, 2, 3];\n\n// Mutating:\noriginal.push(4);\nconsole.log(original); // [1, 2, 3, 4] - MODIFIED!\n\n// Non-mutating:\nconst doubled = original.map(x => x * 2);\nconsole.log(original); // [1, 2, 3, 4] - unchanged\nconsole.log(doubled); // [2, 4, 6, 8] - new array\n\nBest practice: Prefer non-mutating methods for predictable, functional code. Use spread or slice() to copy before mutating if needed:\nconst copy = [...original];\ncopy.sort(); // original unchanged",
        "topic": {
            "topics": [
                "Array methods (reduce, map, filter, find)",
                "Spread and rest operators",
                "Higher-order functions"
            ]
        }
    },
    {
        "id": 17,
        "question": "What is the output of this code?\n\n[CODE]\nconst arr = [1, 2, 3, 4, 5];\nconst filtered = arr.filter(x => x > 2).map(x => x * 2);\nconsole.log(filtered);\n[/CODE]",
        "options": {
            "A": "[2, 4, 6, 8, 10]",
            "B": "[6, 8, 10]",
            "C": "[3, 4, 5]",
            "D": "[1, 2, 3, 4, 5]"
        },
        "correct": "B",
        "explanation": "This demonstrates method chaining with array methods, a common functional programming pattern in JavaScript. Each method returns a new array, allowing you to chain operations.\n\nStep-by-step execution:\n\n1. Start: [1, 2, 3, 4, 5]\n\n2. filter(x => x > 2):\n   - Tests each element: 1>2? no, 2>2? no, 3>2? yes, 4>2? yes, 5>2? yes\n   - Result: [3, 4, 5]\n\n3. map(x => x * 2) on [3, 4, 5]:\n   - Transforms each: 3*2=6, 4*2=8, 5*2=10\n   - Result: [6, 8, 10]\n\nMethod chaining benefits:\n- Readable, declarative code\n- Each step is independent and testable\n- No intermediate variables needed\n- Immutable transformations\n\nCommon patterns:\n\narray\n    .filter(predicate)    // select elements\n    .map(transform)       // transform each\n    .reduce(accumulate)   // combine to single value\n\nExample:\nconst users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 17}];\nconst adultNames = users\n    .filter(u => u.age >= 18)\n    .map(u => u.name);\n// ['Alice']",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)",
                "Higher-order functions"
            ]
        }
    },
    {
        "id": 18,
        "question": "What does 'use strict' do in JavaScript?",
        "options": {
            "A": "Makes the code run faster",
            "B": "Enables strict mode which catches common coding errors",
            "C": "Forces type checking like TypeScript",
            "D": "Disables deprecated features"
        },
        "correct": "B",
        "explanation": "'use strict' is a directive that enables strict mode, which helps you write more secure and error-free JavaScript by catching silent errors and preventing potentially problematic practices.\n\nWhat strict mode does:\n\n1. PREVENTS silent errors:\n'use strict';\nx = 10; // ReferenceError: x is not defined (without strict: creates global variable)\n\n2. PREVENTS accidental globals:\nfunction test() {\n    'use strict';\n    myVar = 5; // Error instead of creating window.myVar\n}\n\n3. PROHIBITS duplicate parameters:\nfunction sum(a, a, b) { // Error in strict mode\n    return a + a + b;\n}\n\n4. MAKES 'this' undefined in functions:\n'use strict';\nfunction show() {\n    console.log(this); // undefined (not global object)\n}\n\n5. DISALLOWS octal syntax:\nconst num = 010; // Error (octal literals)\n\n6. PREVENTS deleting variables:\nconst x = 5;\ndelete x; // Error\n\nScope:\n- Global: Place at top of file\n- Function: Place at top of function\n- Automatic in ES6 modules and classes\n\nBest practice: Always use strict mode. It catches bugs early and makes code more maintainable. Modern JavaScript (ES6+) enables it automatically in modules.",
        "topic": {
            "topics": [
                "Promises and async/await",
                "The 'this' keyword and binding",
                "ES6 Classes and inheritance"
            ]
        }
    },
    {
        "id": 19,
        "question": "What is the difference between 'call()', 'apply()', and 'bind()'?",
        "options": {
            "A": "They are different names for the same function",
            "B": "call() and apply() invoke immediately; bind() returns a new function",
            "C": "Only bind() can set the 'this' value",
            "D": "call() is synchronous, apply() is asynchronous"
        },
        "correct": "B",
        "explanation": "These three methods control the 'this' context of functions, but they work differently. Understanding them is essential for managing context in JavaScript.\n\nDifferences:\n\n1. CALL() - invokes immediately with arguments listed individually:\nfunction greet(greeting, punctuation) {\n    console.log(greeting + ', ' + this.name + punctuation);\n}\nconst person = { name: 'Alice' };\ngreet.call(person, 'Hello', '!'); // 'Hello, Alice!'\n\n2. APPLY() - invokes immediately with arguments as an array:\ngreet.apply(person, ['Hello', '!']); // 'Hello, Alice!'\n// Useful when you have an array of arguments\nconst args = ['Hi', '?'];\ngreet.apply(person, args);\n\n3. BIND() - returns a NEW function with bound 'this' (doesn't invoke):\nconst boundGreet = greet.bind(person, 'Hey');\nboundGreet('!!!'); // 'Hey, Alice!!!'\n// Useful for callbacks and event handlers\n\nMemory tricks:\n- call: C for Comma-separated arguments\n- apply: A for Array of arguments\n- bind: B for Binding returns a new function\n\nCommon use cases:\n- call/apply: Borrowing methods from other objects\n- bind: Event handlers, callbacks, partial application\n\nModern alternative: Arrow functions inherit 'this' from enclosing scope, often eliminating the need for bind().",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)",
                "Higher-order functions"
            ]
        }
    },
    {
        "id": 20,
        "question": "What will this code output?\n\n[CODE]\nconst promise1 = Promise.resolve(3);\nconst promise2 = Promise.reject('Error');\nconst promise3 = Promise.resolve(5);\n\nPromise.all([promise1, promise2, promise3])\n    .then(results => console.log(results))\n    .catch(error => console.log(error));\n[/CODE]",
        "options": {
            "A": "[3, 'Error', 5]",
            "B": "[3, 5]",
            "C": "'Error'",
            "D": "undefined"
        },
        "correct": "C",
        "explanation": "Promise.all() is a powerful method for handling multiple promises, but it has an important characteristic: it fails fast. If ANY promise rejects, the entire Promise.all() rejects immediately.\n\nHow Promise.all() works:\n\n1. Takes an array of promises\n2. Returns a single promise that:\n   - RESOLVES when ALL promises resolve (with array of all results)\n   - REJECTS when ANY promise rejects (with the first rejection reason)\n\nIn this example:\n- promise1 resolves with 3\n- promise2 rejects with 'Error' ← This causes immediate rejection\n- promise3 would resolve with 5 (but never checked)\n- The .catch() handler receives 'Error'\n\nAlternatives for different needs:\n\n1. Promise.allSettled() - waits for all, never rejects:\nPromise.allSettled([promise1, promise2, promise3])\n    .then(results => console.log(results));\n// [{status: 'fulfilled', value: 3},\n//  {status: 'rejected', reason: 'Error'},\n//  {status: 'fulfilled', value: 5}]\n\n2. Promise.race() - resolves/rejects with first settled:\nPromise.race([promise1, promise2, promise3])\n// Returns promise1's result (3) - first to settle\n\n3. Promise.any() - resolves with first fulfillment, rejects if all reject:\nPromise.any([promise1, promise2, promise3])\n// Returns 3 (first successful resolution)\n\nUse Promise.all() when you need all operations to succeed.",
        "topic": {
            "topics": [
                "Promises and async/await",
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)"
            ]
        }
    },
    {
        "id": 21,
        "question": "What is event delegation in JavaScript?",
        "options": {
            "A": "Assigning multiple events to one element",
            "B": "Using a parent element to handle events for its children",
            "C": "Preventing default browser behavior",
            "D": "Removing event listeners automatically"
        },
        "correct": "B",
        "explanation": "Event delegation is a pattern that leverages event bubbling to handle events at a higher level in the DOM rather than attaching listeners to individual elements. This is more efficient and handles dynamically added elements.\n\nHow event bubbling works:\nWhen an event occurs on an element, it first runs handlers on that element, then on its parent, then grandparent, and so on up to the document root.\n\nExample without delegation (inefficient):\nconst buttons = document.querySelectorAll('button');\nbuttons.forEach(button => {\n    button.addEventListener('click', handleClick); // 100 listeners for 100 buttons!\n});\n\nExample with delegation (efficient):\nconst container = document.querySelector('.button-container');\ncontainer.addEventListener('click', (e) => {\n    if (e.target.matches('button')) {\n        handleClick(e); // One listener handles all buttons!\n    }\n});\n\nBenefits:\n1. PERFORMANCE: One listener instead of many\n2. DYNAMIC ELEMENTS: Handles elements added after page load\n3. MEMORY: Less memory usage\n4. CLEANUP: Only one listener to remove\n\nPractical example:\ndocument.querySelector('.todo-list').addEventListener('click', (e) => {\n    if (e.target.classList.contains('delete-btn')) {\n        deleteTodo(e.target.closest('.todo-item'));\n    } else if (e.target.classList.contains('complete-btn')) {\n        completeTodo(e.target.closest('.todo-item'));\n    }\n});\n\nUse e.target (the actual clicked element) and e.currentTarget (the element with the listener) to determine what was clicked.",
        "topic": {
            "topics": [
                "Promises and async/await",
                "The 'this' keyword and binding",
                "ES6 Classes and inheritance"
            ]
        }
    },
    {
        "id": 22,
        "question": "What will this code output?\n\n[CODE]\nconst obj = { a: 1 };\nconst copy1 = obj;\nconst copy2 = { ...obj };\n\ncopy1.a = 2;\ncopy2.a = 3;\n\nconsole.log(obj.a);\n[/CODE]",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "undefined"
        },
        "correct": "B",
        "explanation": "This demonstrates the crucial difference between reference assignment and copying objects. Understanding this prevents many common bugs in JavaScript.\n\nWhat happens:\n\n[CODE]\nconst obj = { a: 1 };\nconst copy1 = obj;\nconst copy2 = { ...obj };\n\ncopy1.a = 2;\ncopy2.a = 3;\n\nconsole.log(obj.a);\n[/CODE]\n\n1. const copy1 = obj;\n   - Creates a REFERENCE to the same object\n   - Both 'obj' and 'copy1' point to the same memory location\n   - Changes to copy1 affect obj (they're the same object!)\n\n2. const copy2 = { ...obj };\n   - Creates a SHALLOW COPY (new object)\n   - copy2 is a different object with the same properties\n   - Changes to copy2 don't affect obj\n\n3. copy1.a = 2;\n   - Since copy1 and obj reference the same object, obj.a becomes 2\n\n4. copy2.a = 3;\n   - copy2 is independent, so obj.a stays 2\n\nVisual representation:\n\n[CODE]\nobj → {a: 1} ← copy1 (same object)\ncopy2 → {a: 1} (different object)\n[/CODE]\n\nImportant caveats:\n\nSHALLOW COPY (spread, Object.assign):\n\n[CODE]\nconst obj = { a: 1, nested: { b: 2 } };\nconst copy = { ...obj };\ncopy.nested.b = 3;\nconsole.log(obj.nested.b); // 3 - nested objects still referenced!\n[/CODE]\n\nDEEP COPY (various methods):\n\n[CODE]\n// Quick but limited:\nconst deepCopy = JSON.parse(JSON.stringify(obj));\n// Better for complex objects:\nconst deepCopy = structuredClone(obj); // Modern browsers\n[/CODE]\n\nRule of thumb: Use spread for simple objects, structuredClone() for nested structures.",
        "topic": {
            "topics": [
                "The 'this' keyword and binding",
                "Spread and rest operators"
            ]
        }
    },
    {
        "id": 23,
        "question": "What does Object.freeze() do?",
        "options": {
            "A": "Stops all JavaScript execution",
            "B": "Makes an object immutable (prevents modifications)",
            "C": "Copies an object",
            "D": "Serializes an object to JSON"
        },
        "correct": "B",
        "explanation": "Object.freeze() makes an object immutable by preventing any modifications to its properties. This is useful for creating constants and preventing accidental mutations.\n\nWhat Object.freeze() does:\n\nconst obj = { name: 'Alice', age: 25 };\nObject.freeze(obj);\n\nobj.name = 'Bob';        // Fails silently (or throws in strict mode)\nobj.newProp = 'value';   // Fails silently\ndelete obj.age;          // Fails silently\n\nconsole.log(obj); // { name: 'Alice', age: 25 } - unchanged\n\nChecking if frozen:\nObject.isFrozen(obj); // true\n\nLimitations (SHALLOW freeze):\n\nconst obj = {\n    name: 'Alice',\n    address: { city: 'NYC' }\n};\nObject.freeze(obj);\n\nobj.name = 'Bob'; // Fails\nobj.address.city = 'LA'; // SUCCEEDS! Nested object not frozen\n\nDeep freeze (must implement yourself):\nfunction deepFreeze(obj) {\n    Object.freeze(obj);\n    Object.keys(obj).forEach(key => {\n        if (typeof obj[key] === 'object' && obj[key] !== null) {\n            deepFreeze(obj[key]);\n        }\n    });\n    return obj;\n}\n\nRelated methods:\n- Object.seal(): Prevents adding/removing properties, but allows modification\n- Object.preventExtensions(): Prevents adding properties only\n\nUse cases:\n- Configuration objects\n- Constants that should never change\n- Functional programming (immutability)\n- Preventing accidental mutations in shared data\n\nNote: freeze() doesn't affect primitive values (they're already immutable).",
        "topic": {
            "topics": [
                "The 'this' keyword and binding"
            ]
        }
    },
    {
        "id": 24,
        "question": "What is the purpose of the 'super' keyword in ES6 classes?",
        "options": {
            "A": "To create a superclass",
            "B": "To call the parent class constructor or methods",
            "C": "To make a class abstract",
            "D": "To define static methods"
        },
        "correct": "B",
        "explanation": "The 'super' keyword is used in class inheritance to call the parent class's constructor and methods. It's essential when extending classes to properly initialize the parent class.\n\nTwo main uses:\n\n1. CALLING PARENT CONSTRUCTOR:\nclass Animal {\n    constructor(name) {\n        this.name = name;\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name, breed) {\n        super(name);  // MUST call super() before using 'this'\n        this.breed = breed;\n    }\n}\n\nconst dog = new Dog('Rex', 'Labrador');\n// super(name) calls Animal's constructor with 'Rex'\n\n2. CALLING PARENT METHODS:\nclass Animal {\n    speak() {\n        return 'Some sound';\n    }\n}\n\nclass Dog extends Animal {\n    speak() {\n        const parentSound = super.speak(); // Call parent's speak()\n        return parentSound + ' and bark!';\n    }\n}\n\nconst dog = new Dog();\ndog.speak(); // 'Some sound and bark!'\n\nImportant rules:\n\n1. In constructor: super() MUST be called before accessing 'this':\nclass Child extends Parent {\n    constructor() {\n        // this.value = 5; // ERROR! Can't use 'this' before super()\n        super();\n        this.value = 5; // OK now\n    }\n}\n\n2. In methods: super.methodName() calls parent's version\n3. Can't use super in regular functions, only in class methods\n4. super() can only be called in constructors of derived classes\n\nWithout super(), the parent class doesn't initialize, causing errors. It's the bridge between parent and child classes.",
        "topic": {
            "topics": [
                "Prototypes and inheritance",
                "The 'this' keyword and binding",
                "ES6 Classes and inheritance"
            ]
        }
    },
    {
        "id": 25,
        "question": "What is a 'memory leak' in JavaScript and how can closures cause them?",
        "options": {
            "A": "When a variable is declared but never used",
            "B": "When objects are held in memory unnecessarily, preventing garbage collection",
            "C": "When a function is called too many times",
            "D": "When you use too many variables"
        },
        "correct": "B",
        "explanation": "A memory leak occurs when memory that's no longer needed isn't released, causing the application to consume more and more memory over time. Closures can accidentally create memory leaks if not handled properly.\n\nHow closures can cause memory leaks:\n\n1. EVENT LISTENERS:\nfunction setupButton() {\n    const bigData = new Array(1000000).fill('data'); // Large data\n    const button = document.getElementById('myButton');\n    \n    button.addEventListener('click', function() {\n        console.log(bigData[0]); // Closure keeps bigData in memory!\n    });\n    \n    // If button is removed but listener isn't, bigData stays in memory\n}\n\nFIX: Remove listeners when done:\nconst handler = function() { /* ... */ };\nbutton.addEventListener('click', handler);\n// Later:\nbutton.removeEventListener('click', handler);\n\n2. TIMERS:\nfunction startTimer() {\n    const hugeArray = new Array(1000000);\n    \n    setInterval(function() {\n        // Even if not used, closure keeps hugeArray in memory forever!\n        console.log('tick');\n    }, 1000);\n}\n\nFIX: Clear timers and avoid capturing unnecessary data:\nconst timerId = setInterval(() => console.log('tick'), 1000);\nclearInterval(timerId); // When done\n\n3. DETACHED DOM ELEMENTS:\nlet elements = [];\nfunction addElement() {\n    const div = document.createElement('div');\n    document.body.appendChild(div);\n    elements.push(div); // Keeps reference even after removal\n    \n    div.addEventListener('click', function() {\n        // This closure also holds reference\n    });\n}\n\nCommon leak sources:\n- Forgotten timers (setInterval, setTimeout)\n- Event listeners not removed\n- Circular references\n- Global variables accumulating data\n- Caching without size limits\n\nPrevention strategies:\n- Remove event listeners when elements are removed\n- Clear intervals/timeouts when done\n- Avoid global variables for temporary data\n- Use WeakMap/WeakSet for cached data\n- Use browser DevTools to profile memory usage\n\nModern garbage collectors are good, but can't collect what's still referenced!",
        "topic": {
            "topics": [
                "Closures and lexical scope",
                "The 'this' keyword and binding",
                "Array methods (reduce, map, filter, find)",
                "Spread and rest operators",
                "Event loop and call stack",
                "Higher-order functions"
            ]
        }
    }
];

module.exports = { metadata, questions };
