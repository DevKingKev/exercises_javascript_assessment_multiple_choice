module.exports = {
    metadata: {
        title: "JavaScript Execution Context & Advanced Patterns",
        description: "Test your understanding of JavaScript execution context, scope chains, module systems, error propagation, and advanced programming patterns.",
        difficulty: "medium",
        timeLimit: 45,
        questionCount: 25,
        topics: [
            "Execution Context and Call Stack",
            "Scope Chain and Variable Lookup",
            "Module Systems (CommonJS vs ES6)",
            "Error Propagation and Stack Traces",
            "Immediately Invoked Function Expressions (IIFE)",
            "Currying and Partial Application",
            "Function Composition",
            "Immutable Patterns",
            "Lazy Evaluation",
            "Coercion Rules and Type Conversion"
        ],
        topicLinks: [
            {
                topicName: "Execution Context and Call Stack",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
            },
            {
                topicName: "Scope Chain and Variable Lookup",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
            },
            {
                topicName: "Module Systems (CommonJS vs ES6)",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
                topicName: "Error Propagation and Stack Traces",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"
            },
            {
                topicName: "Immediately Invoked Function Expressions (IIFE)",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
            },
            {
                topicName: "Currying and Partial Application",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/Currying"
            },
            {
                topicName: "Function Composition",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/Function_composition"
            },
            {
                topicName: "Immutable Patterns",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"
            },
            {
                topicName: "Lazy Evaluation",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/Lazy_evaluation"
            },
            {
                topicName: "Coercion Rules and Type Conversion",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion"
            }
        ],
        assessmentId: 8,
        assessmentUniqueId: 1762343141336,
        testType: "multiple-choice"
    },
    questions: [
        {
            id: 1,
            question: "What is the output of this code?\n[CODE]function outer() {\n  const x = 10;\n  function inner() {\n    console.log(x);\n    console.log(y);\n  }\n  const y = 20;\n  return inner;\n}\n\nconst fn = outer();\nfn();[/CODE]",
            options: {
                A: "<pre>10, undefined</pre>",
                B: "<pre>10, 20</pre>",
                C: "<pre>undefined, 20</pre>",
                D: "ReferenceError"
            },
            correct: "B",
            explanation: "The output is <pre>10, 20</pre> because of how closures and the scope chain work in JavaScript. When <pre>inner()</pre> is defined inside <pre>outer()</pre>, it captures the entire lexical scope of <pre>outer()</pre>, including all variables declared in that scope (both <pre>x</pre> and <pre>y</pre>).\n\nEven though <pre>y</pre> is declared after <pre>inner()</pre> is defined, by the time <pre>inner()</pre> is executed (when <pre>fn()</pre> is called), both <pre>x</pre> and <pre>y</pre> have been initialized. This demonstrates that closures capture variables by reference, not by value at definition time.\n\nThe scope chain lookup happens when the function is executed, not when it's defined. This is why both variables are accessible even though one was declared after the function definition.",
            topic: {
                topics: ["Scope Chain and Variable Lookup", "Execution Context and Call Stack"]
            }
        },
        {
            id: 2,
            question: "What is the key difference between CommonJS <pre>require()</pre> and ES6 <pre>import</pre>?",
            options: {
                A: "CommonJS is synchronous; ES6 imports are asynchronous",
                B: "CommonJS only works in Node.js; ES6 imports only work in browsers",
                C: "CommonJS supports tree shaking; ES6 imports don't",
                D: "CommonJS imports are static; ES6 imports are dynamic"
            },
            correct: "A",
            explanation: "The key difference is that CommonJS <pre>require()</pre> is synchronous and loads modules at runtime, while ES6 <pre>import</pre> is asynchronous and can be statically analyzed at compile time.\n\n[CODE]// CommonJS - synchronous\nconst fs = require('fs');\nconst data = fs.readFileSync('file.txt');\n\n// ES6 imports - asynchronous and statically analyzable\nimport { readFile } from 'fs/promises';\nconst data = await readFile('file.txt');\n\n// Dynamic imports in ES6 (async)\nconst module = await import('./module.js');[/CODE]\n\nThis difference has several implications:\n- CommonJS modules can be conditionally loaded anywhere in code\n- ES6 imports must be at the top level (except for dynamic imports)\n- ES6 imports enable better tooling like tree shaking and static analysis\n- CommonJS is the original Node.js module system\n- ES6 modules are the modern standard supported in both browsers and Node.js\n\nES6 modules also have live bindings, meaning imported values can change if the exporting module updates them, whereas CommonJS imports are copies.",
            topic: {
                topics: ["Module Systems (CommonJS vs ES6)"]
            }
        },
        {
            id: 3,
            question: "What does this IIFE pattern accomplish?\n[CODE](function() {\n  let count = 0;\n  window.increment = function() {\n    return ++count;\n  };\n  window.getCount = function() {\n    return count;\n  };\n})();[/CODE]",
            options: {
                A: "Creates a memory leak",
                B: "Implements a singleton with private state",
                C: "Pollutes the global scope unnecessarily",
                D: "Creates a recursive function"
            },
            correct: "B",
            explanation: "This IIFE (Immediately Invoked Function Expression) implements a module pattern with private state. The <pre>count</pre> variable is encapsulated within the IIFE's scope and cannot be accessed directly from outside, making it truly private.\n\n[CODE]// Usage:\nincrement(); // 1\nincrement(); // 2\ngetCount();  // 2\nconsole.log(count); // ReferenceError: count is not defined\n\n// Alternative modern approach with ES6 modules\nexport let count = 0;\nexport function increment() {\n  return ++count;\n}\n\n// Or with closures in class-like pattern\nfunction createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}\nconst counter = createCounter();[/CODE]\n\nThis pattern was commonly used before ES6 modules to:\n- Avoid polluting the global namespace\n- Create private variables and functions\n- Implement the module pattern\n- Prevent naming collisions\n\nWhile ES6 modules are now preferred, understanding IIFEs is still important for working with legacy code and understanding JavaScript's scoping mechanisms.",
            topic: {
                topics: ["Immediately Invoked Function Expressions (IIFE)", "Scope Chain and Variable Lookup"]
            }
        },
        {
            id: 4,
            question: "What is the result of this curried function call?\n[CODE]const multiply = a => b => c => a * b * c;\nconst result = multiply(2)(3)(4);[/CODE]",
            options: {
                A: "<pre>24</pre>",
                B: "<pre>function</pre>",
                C: "<pre>9</pre>",
                D: "TypeError"
            },
            correct: "A",
            explanation: "The result is <pre>24</pre> because this is a curried function that takes three arguments one at a time. Currying transforms a function that takes multiple arguments into a sequence of functions each taking a single argument.\n\n[CODE]// Step by step execution:\nconst step1 = multiply(2);    // returns: b => c => 2 * b * c\nconst step2 = step1(3);       // returns: c => 2 * 3 * c\nconst step3 = step2(4);       // returns: 2 * 3 * 4 = 24\n\n// Equivalent uncurried version\nconst multiplySimple = (a, b, c) => a * b * c;\nmultiplySimple(2, 3, 4); // 24\n\n// Practical currying example\nconst discount = percentage => price => price * (1 - percentage);\nconst tenPercentOff = discount(0.1);\nconst twentyPercentOff = discount(0.2);\n\nconsole.log(tenPercentOff(100));     // 90\nconsole.log(twentyPercentOff(100));  // 80[/CODE]\n\nCurrying is useful for:\n- Creating specialized functions from general ones\n- Function composition\n- Partial application\n- Making code more declarative and reusable\n\nThis pattern is fundamental in functional programming and enables powerful abstraction techniques.",
            topic: {
                topics: ["Currying and Partial Application", "Function Composition"]
            }
        },
        {
            id: 5,
            question: "What does this code demonstrate about error propagation?\n[CODE]function a() {\n  throw new Error('Original error');\n}\n\nfunction b() {\n  try {\n    a();\n  } catch (err) {\n    throw new Error('Wrapped error: ' + err.message);\n  }\n}\n\nfunction c() {\n  try {\n    b();\n  } catch (err) {\n    console.log(err.message);\n    console.log(err.stack);\n  }\n}\n\nc();[/CODE]",
            options: {
                A: "Error stack traces are preserved through re-throwing",
                B: "The original stack trace is lost when wrapping errors",
                C: "Errors cannot be caught in nested function calls",
                D: "All error information is automatically preserved"
            },
            correct: "B",
            explanation: "This demonstrates that the original stack trace is lost when wrapping errors in new Error objects. When you catch an error and throw a new one, the stack trace of the original error is not preserved in the new error's stack.\n\n[CODE]// Better approach: preserve original error\nfunction betterB() {\n  try {\n    a();\n  } catch (err) {\n    // Create new error but preserve stack\n    const newError = new Error('Wrapped error: ' + err.message);\n    newError.originalError = err;  // Attach original error\n    newError.stack = err.stack;    // Or preserve stack\n    throw newError;\n  }\n}\n\n// Modern approach with Error cause (ES2022)\nfunction modernB() {\n  try {\n    a();\n  } catch (err) {\n    throw new Error('Wrapped error', { cause: err });\n  }\n}\n\n// Usage with cause\ntry {\n  modernB();\n} catch (err) {\n  console.log(err.message);      // 'Wrapped error'\n  console.log(err.cause.message); // 'Original error'\n  console.log(err.cause.stack);   // Original stack trace\n}[/CODE]\n\nBest practices for error propagation:\n- Use <pre>Error.cause</pre> (ES2022+) to preserve original errors\n- Don't swallow errors without logging\n- Provide meaningful error messages\n- Consider custom error types for different error categories\n- Always include relevant context in error messages",
            topic: {
                topics: ["Error Propagation and Stack Traces"]
            }
        },
        {
            id: 6,
            question: "What is the output of this function composition?\n[CODE]const compose = (f, g) => x => f(g(x));\nconst add5 = x => x + 5;\nconst multiply3 = x => x * 3;\nconst addThenMultiply = compose(multiply3, add5);\nconsole.log(addThenMultiply(10));[/CODE]",
            options: {
                A: "<pre>45</pre>",
                B: "<pre>35</pre>",
                C: "<pre>50</pre>",
                D: "<pre>15</pre>"
            },
            correct: "A",
            explanation: "The output is <pre>45</pre> because function composition applies functions from right to left. The <pre>compose(multiply3, add5)</pre> creates a new function that first applies <pre>add5</pre> and then applies <pre>multiply3</pre> to the result.\n\n[CODE]// Step by step:\n// compose(multiply3, add5) means: multiply3(add5(x))\n// With x = 10:\n// add5(10) = 15\n// multiply3(15) = 45\n\n// Alternative: pipe (left to right composition)\nconst pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);\nconst addThenMultiplyPipe = pipe(add5, multiply3);\nconsole.log(addThenMultiplyPipe(10)); // 45 (same result)\n\n// More complex composition\nconst double = x => x * 2;\nconst square = x => x * x;\nconst subtract10 = x => x - 10;\n\nconst complex = compose(subtract10, compose(square, double));\nconsole.log(complex(5)); // (5 * 2) = 10, then 10² = 100, then 100 - 10 = 90\n\n// Real-world example: data transformation pipeline\nconst cleanText = str => str.trim().toLowerCase();\nconst removeSpecialChars = str => str.replace(/[^a-z0-9]/g, '');\nconst capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);\n\nconst processName = compose(capitalize, compose(removeSpecialChars, cleanText));\nconsole.log(processName('  john@doe!  ')); // 'Johndoe'[/CODE]\n\nFunction composition enables building complex transformations from simple, reusable functions, making code more declarative and easier to reason about.",
            topic: {
                topics: ["Function Composition", "Currying and Partial Application"]
            }
        },
        {
            id: 7,
            question: "What does this code demonstrate about JavaScript's execution context?\n[CODE]console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');[/CODE]",
            options: {
                A: "All logs happen simultaneously",
                B: "The order is: Start, End, Timeout, Promise",
                C: "The order is: Start, End, Promise, Timeout",
                D: "The order is random"
            },
            correct: "C",
            explanation: "The output order is: <pre>Start, End, Promise, Timeout</pre>. This demonstrates the JavaScript event loop and the difference between microtasks (Promise callbacks) and macrotasks (setTimeout callbacks).\n\n[CODE]// Execution order explanation:\n// 1. 'Start' - synchronous execution\n// 2. setTimeout callback queued as macrotask\n// 3. Promise callback queued as microtask\n// 4. 'End' - synchronous execution\n// 5. Call stack empty, microtasks executed: 'Promise'\n// 6. Macrotasks executed: 'Timeout'\n\n// More complex example\nconsole.log('Script start');\n\nsetTimeout(() => console.log('setTimeout'), 0);\n\nPromise.resolve()\n  .then(() => console.log('Promise 1'))\n  .then(() => console.log('Promise 2'));\n\nPromise.resolve().then(() => console.log('Promise 3'));\n\nconsole.log('Script end');\n\n// Output:\n// Script start\n// Script end\n// Promise 1\n// Promise 3\n// Promise 2\n// setTimeout[/CODE]\n\nKey concepts:\n- **Microtasks**: Promise callbacks, queueMicrotask, MutationObserver\n- **Macrotasks**: setTimeout, setInterval, I/O operations, UI rendering\n- **Event Loop**: Processes microtasks before macrotasks\n- **Call Stack**: Where synchronous code executes\n\nUnderstanding this execution model is crucial for writing correct asynchronous code and avoiding race conditions.",
            topic: {
                topics: ["Execution Context and Call Stack"]
            }
        },
        {
            id: 8,
            question: "What is the difference between these two function calls?\n[CODE]const obj = { value: 42 };\n\nfunction getValue() {\n  return this.value;\n}\n\n// Call 1\nconst result1 = getValue.call(obj);\n\n// Call 2\nconst result2 = (() => this.value).call(obj);[/CODE]",
            options: {
                A: "Both return 42",
                B: "Call 1 returns 42, Call 2 returns undefined",
                C: "Call 1 returns undefined, Call 2 returns 42",
                D: "Both return undefined"
            },
            correct: "B",
            explanation: "Call 1 returns <pre>42</pre> because <pre>call()</pre> explicitly sets <pre>this</pre> for regular functions. Call 2 returns <pre>undefined</pre> because arrow functions have lexical <pre>this</pre> binding and ignore the <pre>call()</pre> context.\n\n[CODE]// Regular functions have dynamic 'this'\nfunction regularFunc() {\n  return this.value;\n}\n\n// Arrow functions have lexical 'this'\nconst arrowFunc = () => this.value;\n\nconst obj = { value: 42 };\n\nconsole.log(regularFunc.call(obj));     // 42\nconsole.log(arrowFunc.call(obj));       // undefined (ignores call)\n\n// Arrow functions capture 'this' from enclosing scope\nclass Example {\n  value = 100;\n  \n  regularMethod() {\n    return this.value;\n  }\n  \n  arrowMethod = () => this.value;\n}\n\nconst instance = new Example();\nconst { regularMethod, arrowMethod } = instance;\n\nconsole.log(regularMethod());           // undefined (lost context)\nconsole.log(arrowMethod());             // 100 (preserved context)\n\n// Practical use cases\n// Regular functions: when you need dynamic 'this' (event handlers)\nbutton.addEventListener('click', function() {\n  console.log(this); // button element\n});\n\n// Arrow functions: when you want lexical 'this' (callbacks)\nsetTimeout(() => {\n  console.log(this); // same as enclosing scope\n}, 100);[/CODE]\n\nThis distinction is fundamental to understanding JavaScript's <pre>this</pre> binding rules and choosing the right function type for different scenarios.",
            topic: {
                topics: ["Execution Context and Call Stack", "Scope Chain and Variable Lookup"]
            }
        },
        {
            id: 9,
            question: "What does this lazy evaluation pattern accomplish?\n[CODE]function lazyRange(start, end) {\n  return {\n    [Symbol.iterator]: function*() {\n      let current = start;\n      while (current < end) {\n        yield current++;\n      }\n    }\n  };\n}\n\nconst numbers = lazyRange(1, 1000000);\nconst firstTen = [];\nfor (const num of numbers) {\n  if (firstTen.length >= 10) break;\n  firstTen.push(num);\n}[/CODE]",
            options: {
                A: "Creates an array with 1 million elements immediately",
                B: "Generates numbers on-demand as needed",
                C: "Causes a stack overflow",
                D: "Returns undefined for all values"
            },
            correct: "B",
            explanation: "This implements lazy evaluation using generators, generating numbers on-demand only when they are actually needed. Unlike creating an array with 1 million elements upfront, this approach only generates the first 10 numbers that are actually used.\n\n[CODE]// Traditional approach (eager evaluation)\nfunction eagerRange(start, end) {\n  const result = [];\n  for (let i = start; i < end; i++) {\n    result.push(i);\n  }\n  return result; // All elements created immediately\n}\n\n// Lazy approach with generator\nfunction* lazyRangeGen(start, end) {\n  for (let i = start; i < end; i++) {\n    yield i; // Generate one element at a time\n  }\n}\n\n// Memory comparison\nconst eager = eagerRange(1, 1000000);  // Allocates 1M elements\nconst lazy = lazyRangeGen(1, 1000000); // No allocation until used\n\n// Take only first 10 elements\nconst first10Eager = eager.slice(0, 10);  // But 1M elements already allocated\nconst first10Lazy = [];\nfor (const num of lazy) {\n  if (first10Lazy.length >= 10) break;\n  first10Lazy.push(num);  // Only 10 elements allocated\n}\n\n// Practical lazy evaluation example\nfunction* fibonacci() {\n  let [a, b] = [0, 1];\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nconst fib = fibonacci();\nconsole.log([...Array(10)].map(() => fib.next().value));\n// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] - Infinite sequence, finite usage[/CODE]\n\nLazy evaluation benefits:\n- Memory efficiency for large sequences\n- Ability to work with infinite sequences\n- Better performance when only partial results are needed\n- Composability of operations",
            topic: {
                topics: ["Lazy Evaluation", "Immutable Patterns"]
            }
        },
        {
            id: 10,
            question: "What is the result of this coercion example?\n[CODE]console.log([] + {});\nconsole.log({} + []);\nconsole.log([] + []);\nconsole.log({} + {});[/CODE]",
            options: {
                A: "<pre>\\\"[object Object]\\\", \\\"[object Object]\\\", \\\"\\\", \\\"[object Object][object Object]\\\"</pre>",
                B: "<pre>\\\"[object Object]\\\", 0, \\\"\\\", NaN</pre>",
                C: "<pre>\\\"[object Object]\\\", \\\"[object Object]\\\", \\\"[object Object]\\\", \\\"[object Object]\\\"</pre>",
                D: "<pre>\\\"\\\", \\\"[object Object]\\\", \\\"\\\", \\\"[object Object]\\\"</pre>"
            },
            correct: "A",
            explanation: "The results demonstrate JavaScript's complex type coercion rules when using the <pre>+</pre> operator with objects:\n\n[CODE]// 1. [] + {}\n// [] converts to empty string \\\"\\\"\n// {} converts to \\\"[object Object]\\\"\n// Result: \\\"\\\" + \\\"[object Object]\\\" = \\\"[object Object]\\\"\n\n// 2. {} + []\n// In many contexts, {} is treated as empty block, not object\n// So this becomes: +[] which converts [] to number\n// [] converts to 0 when coerced to number\n// Result: 0\n\n// 3. [] + []\n// Both arrays convert to empty strings\n// Result: \\\"\\\" + \\\"\\\" = \\\"\\\"\n\n// 4. {} + {}\n// First {} as empty block, second {} as object\n// Becomes: +{} which converts {} to number\n// {} converts to NaN when coerced to number\n// Result: NaN\n\n// More predictable with explicit conversion\nconsole.log(String([]) + String({}));    // \\\"[object Object]\\\"\nconsole.log(Number([]) + Number({}));    // NaN\n\n// Best practice: avoid implicit coercion\nconsole.log([].toString() + {}.toString()); // \\\"[object Object]\\\"\nconsole.log([].concat({}).join(''));        // \\\"[object Object]\\\"[/CODE]\n\nThese results highlight why implicit type coercion can be confusing and error-prone. Best practices:\n- Use explicit type conversion (<pre>String()</pre>, <pre>Number()</pre>, <pre>Boolean()</pre>)\n- Use strict equality (<pre>===</pre>) instead of loose equality (<pre>==</pre>)\n- Be cautious with <pre>+</pre> operator when operands might be objects\n- Consider using template literals for string concatenation",
            topic: {
                topics: ["Coercion Rules and Type Conversion"]
            }
        },
        {
            id: 11,
            question: "What is the output of this scope chain example?\n[CODE]var a = 1;\nfunction test() {\n  console.log(a);\n  var a = 2;\n  console.log(a);\n}\n\ntest();\nconsole.log(a);[/CODE]",
            options: {
                A: "<pre>1, 2, 1</pre>",
                B: "<pre>undefined, 2, 1</pre>",
                C: "<pre>1, 2, 2</pre>",
                D: "<pre>undefined, 2, 2</pre>"
            },
            correct: "B",
            explanation: "The output is <pre>undefined, 2, 1</pre> due to variable hoisting and function scope behavior with <pre>var</pre>. This demonstrates the Temporal Dead Zone-like behavior with <pre>var</pre> declarations.\n\n[CODE]// What actually happens due to hoisting:\nvar a = 1;\nfunction test() {\n  var a;          // hoisted declaration (undefined)\n  console.log(a); // undefined\n  a = 2;          // assignment\n  console.log(a); // 2\n}\n\ntest();\nconsole.log(a);   // 1 (global a unchanged)\n\n// Compare with let/const (true TDZ)\nlet b = 1;\nfunction testLet() {\n  console.log(b); // ReferenceError: Cannot access 'b' before initialization\n  let b = 2;\n}\n\n// Function scope vs block scope\nfunction scopeExample() {\n  if (true) {\n    var functionScoped = 'I exist everywhere in function';\n    let blockScoped = 'I only exist in this block';\n  }\n  console.log(functionScoped); // 'I exist everywhere in function'\n  console.log(blockScoped);    // ReferenceError\n}\n\n// Best practices\nfunction modernExample() {\n  // Declare all variables at the top\n  let a = 1;\n  const b = 2;\n  \n  // Use block scope appropriately\n  if (condition) {\n    let temp = a + b;\n    // temp only exists in this block\n  }\n  \n  return a + b;\n}[/CODE]\n\nThis example shows why <pre>let</pre> and <pre>const</pre> were introduced - to provide block scoping and prevent confusing hoisting behaviors that can lead to bugs.",
            topic: {
                topics: ["Scope Chain and Variable Lookup", "Execution Context and Call Stack"]
            }
        },
        {
            id: 12,
            question: "What does this immutable pattern accomplish?\n[CODE]function updateProfile(profile, updates) {\n  return {\n    ...profile,\n    ...updates,\n    address: {\n      ...profile.address,\n      ...updates.address\n    },\n    updatedAt: Date.now()\n  };\n}\n\nconst user = {\n  name: 'John',\n  age: 30,\n  address: { city: 'NYC', zip: '10001' }\n};\n\nconst updated = updateProfile(user, { age: 31, address: { zip: '10002' } });[/CODE]",
            options: {
                A: "Mutates the original user object",
                B: "Creates a shallow copy with nested mutations",
                C: "Creates a completely new immutable object",
                D: "Throws an error due to spread syntax"
            },
            correct: "C",
            explanation: "This pattern creates a completely new immutable object without modifying the original. It uses the spread operator to create shallow copies at each level of nesting, ensuring the original object remains unchanged.\n\n[CODE]// Original objects remain unchanged\nconsole.log(user.age);           // 30 (unchanged)\nconsole.log(user.address.zip);   // '10001' (unchanged)\n\nconsole.log(updated.age);        // 31\nconsole.log(updated.address.zip); // '10002'\n\n// Reference comparison\nconsole.log(user === updated);               // false\nconsole.log(user.address === updated.address); // false (new address object)\n\n// Without spread - problematic approaches\nfunction badUpdate(profile, updates) {\n  // This mutates the original!\n  return Object.assign(profile, updates);\n}\n\nfunction shallowUpdate(profile, updates) {\n  // Creates shallow copy, but nested objects are shared!\n  return { ...profile, ...updates };\n}\n\n// Better immutable update utilities\nfunction deepUpdate(obj, path, value) {\n  if (path.length === 0) return value;\n  const [first, ...rest] = path;\n  return {\n    ...obj,\n    [first]: deepUpdate(obj[first] || {}, rest, value)\n  };\n}\n\nconst deeplyUpdated = deepUpdate(user, ['address', 'zip'], '10003');\n\n// Using libraries for complex updates\n// import { produce } from 'immer';\n// const nextState = produce(currentState, draft => {\n//   draft.age = 31;\n//   draft.address.zip = '10002';\n// });[/CODE]\n\nImmutable patterns are essential for:\n- Predictable state management\n- Change detection (React, Vue)\n- Functional programming\n- Avoiding side effects\n- Debugging and testing",
            topic: {
                topics: ["Immutable Patterns"]
            }
        },
        {
            id: 13,
            question: "What is the difference between these module exports?\n[CODE]// module.js\nmodule.exports = { a: 1, b: 2 };\n\nexports.c = 3;\n\n// vs\n\nexports = { a: 1, b: 2 };\n\nmodule.exports.c = 3;[/CODE]",
            options: {
                A: "Both work identically",
                B: "First approach exports {a:1, b:2}; second exports {c:3}",
                C: "First approach exports {a:1, b:2, c:3}; second exports {a:1, b:2}",
                D: "Both throw errors"
            },
            correct: "B",
            explanation: "The first approach exports <pre>{a:1, b:2, c:3}</pre> while the second approach exports only <pre>{a:1, b:2}</pre>. This demonstrates the subtle difference between <pre>module.exports</pre> and <pre>exports</pre> in CommonJS.\n\n[CODE]// Understanding the relationship:\n// In CommonJS, exports is initially a reference to module.exports\nconsole.log(module.exports === exports); // true (initially)\n\n// Approach 1: Both work together\nmodule.exports = { a: 1, b: 2 };  // Reassigns module.exports\nexports.c = 3;                    // Adds to the same object\n// Result: { a: 1, b: 2, c: 3 }\n\n// Approach 2: exports reference is broken\nexports = { a: 1, b: 2 };        // Reassigns exports, breaks reference\nmodule.exports.c = 3;             // Adds to module.exports directly\n// Result: { c: 3 } (exports assignment is ignored)\n\n// Best practices for CommonJS exports\n// Option 1: Assign to module.exports\nmodule.exports = {\n  a: 1,\n  b: 2,\n  c: 3\n};\n\n// Option 2: Assign properties to exports\nexports.a = 1;\nexports.b = 2;\nexports.c = 3;\n\n// Option 3: Mixed (but be careful)\nmodule.exports = { a: 1, b: 2 };\nmodule.exports.c = 3;\n\n// ES6 modules (preferred)\nexport const a = 1;\nexport const b = 2;\nexport default function() { /* ... */ };[/CODE]\n\nThe key insight is that <pre>exports</pre> is just a variable that initially references <pre>module.exports</pre>. Reassigning <pre>exports</pre> breaks this reference, while mutating <pre>exports</pre> (adding properties) works because it's modifying the referenced object.",
            topic: {
                topics: ["Module Systems (CommonJS vs ES6)"]
            }
        },
        {
            id: 14,
            question: "What does this partial application example demonstrate?\n[CODE]function multiply(a, b, c) {\n  return a * b * c;\n}\n\nconst partialMultiply = (a, b) => (c) => multiply(a, b, c);\nconst doubleAndTriple = partialMultiply(2, 3);\n\nconsole.log(doubleAndTriple(4));\nconsole.log(doubleAndTriple(5));[/CODE]",
            options: {
                A: "Currying a function",
                B: "Creating a specialized function with pre-filled arguments",
                C: "Memoizing function results",
                D: "Creating a higher-order function"
            },
            correct: "B",
            explanation: "This demonstrates partial application - creating a specialized function (<pre>doubleAndTriple</pre>) by pre-filling some arguments of a more general function (<pre>multiply</pre>). The resulting function can be reused with different remaining arguments.\n\n[CODE]// Partial application vs currying\n// Currying: transform f(a, b, c) into f(a)(b)(c)\nconst curriedMultiply = a => b => c => a * b * c;\n\n// Partial application: fix some arguments\nconst partial = (fn, ...fixedArgs) => (...remainingArgs) => \n  fn(...fixedArgs, ...remainingArgs);\n\nconst doubleAndTriple = partial(multiply, 2, 3);\nconsole.log(doubleAndTriple(4)); // 24\nconsole.log(doubleAndTriple(5)); // 30\n\n// Using Function.prototype.bind\nconst boundMultiply = multiply.bind(null, 2, 3);\nconsole.log(boundMultiply(4)); // 24\n\n// Practical examples\n// Configuration functions\nconst createRequest = (baseURL, headers) => (endpoint, data) => \n  fetch(`${baseURL}${endpoint}`, { headers, body: JSON.stringify(data) });\n\nconst apiRequest = createRequest('https://api.example.com', {\n  'Content-Type': 'application/json'\n});\n\napiRequest('/users', { name: 'John' });\napiRequest('/products', { category: 'electronics' });\n\n// Validation functions\nconst createValidator = (type, rules) => (value) => \n  validate(value, type, rules);\n\nconst emailValidator = createValidator('email', { required: true });\nconst passwordValidator = createValidator('password', { minLength: 8 });\n\nconsole.log(emailValidator('test@example.com'));\nconsole.log(passwordValidator('123'));[/CODE]\n\nPartial application is useful for:\n- Creating specialized functions from general ones\n- Reducing code duplication\n- Improving code readability\n- Configuring functions with common parameters\n- Building functional pipelines",
            topic: {
                topics: ["Currying and Partial Application", "Function Composition"]
            }
        },
        {
            id: 15,
            question: "What is the result of this execution context example?\n[CODE]const obj = {\n  name: 'Object',\n  regular: function() {\n    console.log(this.name);\n  },\n  arrow: () => {\n    console.log(this.name);\n  },\n  nested: {\n    name: 'Nested',\n    regular: function() {\n      console.log(this.name);\n    },\n    arrow: () => {\n      console.log(this.name);\n    }\n  }\n};\n\nobj.regular();\nobj.arrow();\nobj.nested.regular();\nobj.nested.arrow();[/CODE]",
            options: {
                A: "<pre>'Object', 'Object', 'Nested', 'Nested'</pre>",
                B: "<pre>'Object', undefined, 'Nested', undefined</pre>",
                C: "<pre>'Object', undefined, 'Nested', 'Object'</pre>",
                D: "<pre>'Object', undefined, 'Nested', undefined</pre>"
            },
            correct: "B",
            explanation: "The output demonstrates how <pre>this</pre> binding differs between regular functions and arrow functions in different contexts:\n\n[CODE]// Output explanation:\nobj.regular();        // 'Object' - this refers to obj\nobj.arrow();          // undefined - arrow functions don't have their own this\nobj.nested.regular(); // 'Nested' - this refers to nested object\nobj.nested.arrow();   // undefined - arrow functions capture this from enclosing scope\n\n// Detailed analysis:\nconst obj = {\n  name: 'Object',\n  regular: function() {\n    // Regular function - this determined by call site\n    console.log(this.name); // 'Object' (this = obj)\n  },\n  arrow: () => {\n    // Arrow function - this captured from lexical scope (module scope)\n    console.log(this.name); // undefined (this = global/module scope)\n  },\n  nested: {\n    name: 'Nested',\n    regular: function() {\n      // Regular function - this determined by call site\n      console.log(this.name); // 'Nested' (this = nested)\n    },\n    arrow: () => {\n      // Arrow function - this captured from obj's scope, not nested's\n      console.log(this.name); // undefined (this = obj's scope)\n    }\n  }\n};\n\n// Fixing arrow function behavior\nconst fixedObj = {\n  name: 'Object',\n  arrow: function() {  // Use regular function\n    console.log(this.name);\n  },\n  nested: {\n    name: 'Nested',\n    arrow: function() {  // Use regular function\n      console.log(this.name);\n    }.bind(this)  // Or bind if needed\n  }\n};[/CODE]\n\nKey takeaways:\n- Arrow functions inherit <pre>this</pre> from their enclosing scope\n- Regular functions have <pre>this</pre> determined by how they're called\n- Object literals don't create new scope for arrow functions\n- Use regular functions when you need dynamic <pre>this</pre> binding\n- Use arrow functions when you want to preserve lexical <pre>this</pre>",
            topic: {
                topics: ["Execution Context and Call Stack", "Scope Chain and Variable Lookup"]
            }
        },
        {
            id: 16,
            question: "What does this error handling pattern accomplish?\n[CODE]async function fetchWithRetry(url, retries = 3) {\n  for (let i = 0; i < retries; i++) {\n    try {\n      const response = await fetch(url);\n      if (!response.ok) throw new Error(`HTTP ${response.status}`);\n      return await response.json();\n    } catch (error) {\n      if (i === retries - 1) throw error;\n      console.log(`Attempt ${i + 1} failed, retrying...`);\n      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));\n    }\n  }\n}[/CODE]",
            options: {
                A: "Makes parallel requests for better performance",
                B: "Implements exponential backoff retry logic",
                C: "Caches successful responses",
                D: "Validates response schema"
            },
            correct: "B",
            explanation: "This implements exponential backoff retry logic with increasing delays between retry attempts. The pattern is essential for handling transient failures in distributed systems and network requests.\n\n[CODE]// Enhanced version with exponential backoff\nasync function fetchWithExponentialBackoff(url, maxRetries = 5) {\n  let lastError;\n  \n  for (let attempt = 0; attempt < maxRetries; attempt++) {\n    try {\n      const response = await fetch(url);\n      \n      if (response.ok) {\n        return await response.json();\n      }\n      \n      // Don't retry client errors (4xx) except 429 (Too Many Requests)\n      if (response.status >= 400 && response.status < 500 && response.status !== 429) {\n        throw new Error(`Client error: ${response.status}`);\n      }\n      \n      throw new Error(`HTTP ${response.status}`);\n      \n    } catch (error) {\n      lastError = error;\n      \n      if (attempt === maxRetries - 1) {\n        throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);\n      }\n      \n      // Exponential backoff: 1s, 2s, 4s, 8s...\n      const delay = Math.pow(2, attempt) * 1000;\n      console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);\n      await new Promise(resolve => setTimeout(resolve, delay));\n    }\n  }\n}\n\n// With jitter to avoid thundering herd problem\nfunction withJitter(delay) {\n  return delay * (0.5 + Math.random()); // 50-150% of delay\n}\n\n// Circuit breaker pattern (advanced)\nclass CircuitBreaker {\n  constructor(request, options = {}) {\n    this.request = request;\n    this.state = 'CLOSED';\n    this.failureCount = 0;\n    this.nextAttempt = Date.now();\n    this.options = { \n      failureThreshold: 5, \n      timeout: 5000, \n      ...options \n    };\n  }\n  \n  async fire(...args) {\n    if (this.state === 'OPEN') {\n      if (this.nextAttempt <= Date.now()) {\n        this.state = 'HALF_OPEN';\n      } else {\n        throw new Error('Circuit breaker is OPEN');\n      }\n    }\n    \n    try {\n      const response = await this.request(...args);\n      this.success();\n      return response;\n    } catch (error) {\n      this.failure(error);\n      throw error;\n    }\n  }\n  \n  success() {\n    this.failureCount = 0;\n    this.state = 'CLOSED';\n  }\n  \n  failure(error) {\n    this.failureCount++;\n    if (this.failureCount >= this.options.failureThreshold) {\n      this.state = 'OPEN';\n      this.nextAttempt = Date.now() + this.options.timeout;\n    }\n  }\n}[/CODE]\n\nRetry patterns are crucial for:\n- Handling transient network failures\n- Dealing with rate limiting\n- Improving application resilience\n- Graceful degradation",
            topic: {
                topics: ["Error Propagation and Stack Traces"]
            }
        },
        {
            id: 17,
            question: "What is the result of this coercion chain?\n[CODE]console.log([] == ![]);\nconsole.log({} == !{});\nconsole.log([] == 0);\nconsole.log({} == 0);[/CODE]",
            options: {
                A: "<pre>true, false, true, false</pre>",
                B: "<pre>true, true, true, false</pre>",
                C: "<pre>false, false, true, false</pre>",
                D: "<pre>true, false, false, false</pre>"
            },
            correct: "A",
            explanation: "The results demonstrate JavaScript's complex abstract equality comparison algorithm. Understanding these rules helps avoid subtle bugs when using loose equality (<pre>==</pre>).\n\n[CODE]// Step by step evaluation:\n\n// 1. [] == ![]\n// ![] converts to false (objects are truthy)\n// [] == false\n// [] converts to \\\"\\\" (empty string)\n// \\\"\\\" == false\n// \\\"\\\" converts to 0, false converts to 0\n// 0 == 0 → true\n\n// 2. {} == !{}\n// !{} converts to false (objects are truthy)\n// {} == false\n// {} converts to \\\"[object Object]\\\"\n// \\\"[object Object]\\\" == false\n// \\\"[object Object]\\\" converts to NaN, false converts to 0\n// NaN == 0 → false\n\n// 3. [] == 0\n// [] converts to \\\"\\\"\n// \\\"\\\" == 0\n// \\\"\\\" converts to 0\n// 0 == 0 → true\n\n// 4. {} == 0\n// {} converts to \\\"[object Object]\\\"\n// \\\"[object Object]\\\" == 0\n// \\\"[object Object]\\\" converts to NaN\n// NaN == 0 → false\n\n// Abstract equality algorithm summary:\n// 1. If types are same, use strict equality\n// 2. If null/undefined, return true only with null/undefined\n// 3. If number/string, convert string to number\n// 4. If boolean, convert to number\n// 5. If object, convert to primitive (usually string)\n\n// Best practices:\nconsole.log([] === ![]);    // false - always use strict equality\nconsole.log({} === !{});    // false\nconsole.log([] === 0);      // false\nconsole.log({} === 0);      // false\n\n// Explicit conversion when needed\nconsole.log(Number([]) === Number(![]));  // 0 === 0 → true\nconsole.log(String({}) === String(!{}));  // \\\"[object Object]\\\" === \\\"false\\\" → false[/CODE]\n\nThese examples highlight why strict equality (<pre>===</pre>) is generally preferred over loose equality (<pre>==</pre>) to avoid unexpected type coercion.",
            topic: {
                topics: ["Coercion Rules and Type Conversion"]
            }
        },
        {
            id: 18,
            question: "What does this function composition utility demonstrate?\n[CODE]const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);\n\nconst add = x => y => x + y;\nconst multiply = x => y => x * y;\nconst square = x => x * x;\n\nconst compute = pipe(\n  add(5),\n  multiply(3),\n  square\n);\n\nconsole.log(compute(10));[/CODE]",
            options: {
                A: "<pre>2025</pre>",
                B: "<pre>225</pre>",
                C: "<pre>675</pre>",
                D: "<pre>45</pre>"
            },
            correct: "A",
            explanation: "The result is <pre>2025</pre> because the <pre>pipe</pre> function applies each function from left to right, composing them into a single operation. This demonstrates functional composition with curried functions.\n\n[CODE]// Step by step execution:\n// compute(10) = pipe(add(5), multiply(3), square)(10)\n// 1. add(5)(10) = 15\n// 2. multiply(3)(15) = 45\n// 3. square(45) = 2025\n\n// Compare with compose (right to left)\nconst compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);\n\nconst computeCompose = compose(\n  square,\n  multiply(3),\n  add(5)\n);\n\nconsole.log(computeCompose(10)); // 2025 (same result, different order)\n\n// Practical data transformation pipeline\nconst users = [\n  { name: 'john', age: 25, active: true },\n  { name: 'jane', age: 30, active: false },\n  { name: 'bob', age: 35, active: true }\n];\n\nconst processUsers = pipe(\n  // Filter active users\n  arr => arr.filter(user => user.active),\n  // Sort by age\n  arr => arr.sort((a, b) => a.age - b.age),\n  // Extract names\n  arr => arr.map(user => user.name),\n  // Capitalize names\n  arr => arr.map(name => name.charAt(0).toUpperCase() + name.slice(1))\n);\n\nconsole.log(processUsers(users)); // ['John', 'Bob']\n\n// Point-free style with reusable utilities\nconst filter = predicate => arr => arr.filter(predicate);\nconst sort = comparator => arr => arr.sort(comparator);\nconst map = fn => arr => arr.map(fn);\n\nconst processUsersPointFree = pipe(\n  filter(user => user.active),\n  sort((a, b) => a.age - b.age),\n  map(user => user.name),\n  map(name => name.charAt(0).toUpperCase() + name.slice(1))\n);[/CODE]\n\nFunction composition enables:\n- Building complex transformations from simple functions\n- Code reuse and modularity\n- Declarative programming style\n- Easy testing of individual functions\n- Readable data processing pipelines",
            topic: {
                topics: ["Function Composition", "Currying and Partial Application"]
            }
        },
        {
            id: 19,
            question: "What is the key benefit of this immutable update pattern?\n[CODE]function setIn(obj, path, value) {\n  if (path.length === 0) return value;\n  const [key, ...rest] = path;\n  \n  if (rest.length === 0) {\n    return { ...obj, [key]: value };\n  }\n  \n  return {\n    ...obj,\n    [key]: setIn(obj[key] || {}, rest, value)\n  };\n}\n\nconst state = { user: { profile: { name: 'John', age: 30 } } };\nconst newState = setIn(state, ['user', 'profile', 'age'], 31);[/CODE]",
            options: {
                A: "It mutates the original state for performance",
                B: "It creates a new object with only the changed path updated",
                C: "It deep clones the entire object",
                D: "It freezes the object to prevent changes"
            },
            correct: "B",
            explanation: "This pattern creates a new object with only the changed path updated, while sharing unchanged parts between the old and new objects. This is called structural sharing and is fundamental to efficient immutable updates.\n\n[CODE]// Structural sharing example\nconst original = {\n  user: {\n    profile: { name: 'John', age: 30 },\n    settings: { theme: 'dark' }\n  },\n  products: [{ id: 1 }, { id: 2 }]\n};\n\nconst updated = setIn(original, ['user', 'profile', 'age'], 31);\n\n// References to unchanged parts are shared\nconsole.log(original.user.settings === updated.user.settings); // true\nconsole.log(original.products === updated.products);           // true\n\n// Only changed path is recreated\nconsole.log(original.user === updated.user);                   // false\nconsole.log(original.user.profile === updated.user.profile);   // false\n\n// Manual equivalent (verbose)\nconst updatedManual = {\n  ...original,\n  user: {\n    ...original.user,\n    profile: {\n      ...original.user.profile,\n      age: 31\n    }\n  }\n};\n\n// Enhanced version with array support\nfunction setInEnhanced(obj, path, value) {\n  if (path.length === 0) return value;\n  const [key, ...rest] = path;\n  \n  if (rest.length === 0) {\n    if (Array.isArray(obj)) {\n      const newArray = [...obj];\n      newArray[key] = value;\n      return newArray;\n    }\n    return { ...obj, [key]: value };\n  }\n  \n  const nextObj = obj[key] || (typeof rest[0] === 'number' ? [] : {});\n  \n  if (Array.isArray(obj)) {\n    const newArray = [...obj];\n    newArray[key] = setInEnhanced(nextObj, rest, value);\n    return newArray;\n  }\n  \n  return {\n    ...obj,\n    [key]: setInEnhanced(nextObj, rest, value)\n  };\n}\n\n// Using libraries like Immer for complex updates\n// import { produce } from 'immer';\n// const newState = produce(state, draft => {\n//   draft.user.profile.age = 31;\n// });[/CODE]\n\nStructural sharing provides:\n- Memory efficiency for large objects\n- Fast equality checks (reference equality)\n- Predictable state updates\n- Easy undo/redo functionality\n- Optimal performance for UI frameworks",
            topic: {
                topics: ["Immutable Patterns"]
            }
        },
        {
            id: 20,
            question: "What does this generator pattern accomplish?\n[CODE]function* paginate(items, pageSize) {\n  for (let i = 0; i < items.length; i += pageSize) {\n    yield items.slice(i, i + pageSize);\n  }\n}\n\nconst data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst pages = paginate(data, 3);\n\nfor (const page of pages) {\n  console.log('Page:', page);\n}[/CODE]",
            options: {
                A: "Creates infinite pagination",
                B: "Generates pages on-demand as needed",
                C: "Mutates the original array",
                D: "Causes memory leak with large arrays"
            },
            correct: "B",
            explanation: "This generator pattern creates a paginator that generates pages on-demand as they are consumed, rather than creating all pages upfront. This is memory-efficient for large datasets.\n\n[CODE]// Traditional approach (eager)\nfunction paginateEager(items, pageSize) {\n  const pages = [];\n  for (let i = 0; i < items.length; i += pageSize) {\n    pages.push(items.slice(i, i + pageSize));\n  }\n  return pages; // All pages created immediately\n}\n\n// Generator approach (lazy)\nfunction* paginateLazy(items, pageSize) {\n  for (let i = 0; i < items.length; i += pageSize) {\n    yield items.slice(i, i + pageSize); // Generate one page at a time\n  }\n}\n\n// Memory comparison with large dataset\nconst largeData = Array.from({ length: 1000000 }, (_, i) => i);\n\nconst eagerPages = paginateEager(largeData, 1000); // 1000 pages created immediately\nconst lazyPages = paginateLazy(largeData, 1000);   // No pages created yet\n\n// Only create pages as needed\nlet count = 0;\nfor (const page of lazyPages) {\n  console.log('Processing page', ++count);\n  if (count >= 5) break; // Only 5 pages actually created\n}\n\n// Infinite pagination example\nfunction* infiniteSequence() {\n  let page = 1;\n  while (true) {\n    // Simulate API call\n    yield fetchPage(page);\n    page++;\n  }\n}\n\nasync function fetchPage(pageNum) {\n  // Simulate API call\n  return { page: pageNum, data: [] };\n}\n\n// Async generator for streaming data\nasync function* streamData(url) {\n  const response = await fetch(url);\n  const reader = response.body.getReader();\n  \n  try {\n    while (true) {\n      const { done, value } = await reader.read();\n      if (done) break;\n      yield value;\n    }\n  } finally {\n    reader.releaseLock();\n  }\n}\n\n// Using generators for complex state machines\nfunction* stateMachine() {\n  let state = 'idle';\n  \n  while (true) {\n    const action = yield state;\n    \n    switch (state) {\n      case 'idle':\n        if (action === 'start') state = 'running';\n        break;\n      case 'running':\n        if (action === 'pause') state = 'paused';\n        else if (action === 'stop') state = 'idle';\n        break;\n      case 'paused':\n        if (action === 'resume') state = 'running';\n        else if (action === 'stop') state = 'idle';\n        break;\n    }\n  }\n}[/CODE]\n\nGenerator patterns are powerful for:\n- Lazy evaluation and memory efficiency\n- Working with infinite sequences\n- Complex state management\n- Async data streaming\n- Custom iteration logic",
            topic: {
                topics: ["Lazy Evaluation"]
            }
        },
        {
            id: 21,
            question: "What is the difference between these import approaches?\n[CODE]// Approach 1: Named imports\nimport { useState, useEffect } from 'react';\n\n// Approach 2: Namespace import\nimport * as React from 'react';\n\n// Approach 3: Default import\nimport React from 'react';[/CODE]",
            options: {
                A: "Approach 1 is invalid syntax",
                B: "Approach 2 imports everything into a namespace object",
                C: "All three work identically in all cases",
                D: "Approach 3 only works with CommonJS modules"
            },
            correct: "B",
            explanation: "Approach 2 imports all exports from the module into a namespace object. The differences between these import approaches have important implications for bundle size, tree shaking, and code organization.\n\n[CODE]// Understanding module exports\n// react.js (simplified)\nexport function useState(initial) { /* ... */ }\nexport function useEffect(effect) { /* ... */ }\nexport default { /* default export object */ };\n\n// Approach 1: Named imports (recommended)\nimport { useState, useEffect } from 'react';\n// Only imports what you use\n// Enables tree shaking\n// Clear dependencies\n\n// Approach 2: Namespace import\nimport * as React from 'react';\n// Imports ALL exports into React object\n// Usage: React.useState, React.useEffect\n// May include unused exports in bundle\n// Useful for libraries with many utilities\n\n// Approach 3: Default import\nimport React from 'react';\n// Only imports the default export\n// Does NOT include named exports like useState, useEffect\n// This would cause: React.useState is undefined\n\n// Mixed approach\nimport React, { useState, useEffect } from 'react';\n// Imports default as React + named exports\n\n// Re-exporting patterns\n// utils.js\nexport const add = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\n\n// math.js - barrel export\nexport { add, multiply } from './utils';\nexport const complexOperation = () => { /* ... */ };\n\n// consumer.js\nimport { add, multiply } from './math'; // Clean imports\n\n// Dynamic imports (code splitting)\nconst loadComponent = async () => {\n  const { HeavyComponent } = await import('./HeavyComponent');\n  return HeavyComponent;\n};\n\n// Conditional imports\nif (featureFlag) {\n  const analytics = await import('./analytics');\n  analytics.track('event');\n}\n\n// Best practices:\n// 1. Use named imports for better tree shaking\n// 2. Use namespace imports when you need many utilities\n// 3. Use dynamic imports for code splitting\n// 4. Avoid mixing default and named exports in same module\n// 5. Use barrel exports to simplify import paths[/CODE]\n\nUnderstanding these patterns helps optimize bundle size and maintain clean, modular code architecture.",
            topic: {
                topics: ["Module Systems (CommonJS vs ES6)"]
            }
        },
        {
            id: 22,
            question: "What does this error boundary pattern accomplish in React?\n[CODE]class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false, error: null };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true, error };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log('Error caught:', error, errorInfo);\n    this.props.onError?.(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return this.props.fallback || <div>Something went wrong</div>;\n    }\n    return this.props.children;\n  }\n}[/CODE]",
            options: {
                A: "Prevents all errors in the application",
                B: "Catches and handles errors in child component trees",
                C: "Logs errors but doesn't recover from them",
                D: "Only catches synchronous rendering errors"
            },
            correct: "B",
            explanation: "This Error Boundary pattern catches JavaScript errors anywhere in the child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed. This prevents the entire app from breaking due to errors in one component.\n\n[CODE]// Usage example\nfunction App() {\n  return (\n    <ErrorBoundary \n      fallback={<ErrorScreen />}\n      onError={(error, errorInfo) => {\n        // Send to error reporting service\n        errorService.report(error, errorInfo);\n      }}\n    >\n      <UserProfile />\n      <ProductList />\n      <ShoppingCart />\n    </ErrorBoundary>\n  );\n}\n\n// Multiple error boundaries for granular error handling\nfunction GranularApp() {\n  return (\n    <div>\n      <ErrorBoundary fallback={<HeaderError />}>\n        <AppHeader />\n      </ErrorBoundary>\n      \n      <ErrorBoundary fallback={<ContentError />}>\n        <MainContent />\n      </ErrorBoundary>\n      \n      <ErrorBoundary fallback={<FooterError />}>\n        <AppFooter />\n      </ErrorBoundary>\n    </div>\n  );\n}\n\n// Error boundary limitations\nclass LimitedErrorBoundary extends React.Component {\n  componentDidCatch(error, errorInfo) {\n    // Catches errors in:\n    // - Rendering\n    // - Lifecycle methods\n    // - Constructors of child components\n    \n    // Does NOT catch errors in:\n    // - Event handlers\n    // - Async code (setTimeout, promises)\n    // - Server side rendering\n    // - Errors thrown in the error boundary itself\n  }\n}\n\n// Handling async errors\nfunction AsyncErrorHandler() {\n  const [error, setError] = useState(null);\n  \n  if (error) {\n    return <div>Error: {error.message}</div>;\n  }\n  \n  const handleAsyncOperation = async () => {\n    try {\n      await fetchData();\n    } catch (err) {\n      setError(err); // Handle async errors in state\n    }\n  };\n  \n  return <button onClick={handleAsyncOperation}>Load</button>;\n}\n\n// Modern approach with hooks\nfunction useErrorHandler() {\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    if (error) {\n      // Handle error\n      errorService.report(error);\n    }\n  }, [error]);\n  \n  return setError;\n}\n\nfunction ComponentWithErrorHandling() {\n  const handleError = useErrorHandler();\n  \n  useEffect(() => {\n    fetchData().catch(handleError);\n  }, [handleError]);\n  \n  // ... component logic\n}[/CODE]\n\nError boundaries are essential for:\n- Preventing total app crashes\n- Graceful error recovery\n- Better user experience\n- Error monitoring and reporting\n- Isolating component failures",
            topic: {
                topics: ["Error Propagation and Stack Traces"]
            }
        },
        {
            id: 23,
            question: "What is the result of this execution order example?\n[CODE]async function asyncFunc() {\n  console.log('2');\n  await Promise.resolve();\n  console.log('4');\n}\n\nconsole.log('1');\nasyncFunc();\nconsole.log('3');[/CODE]",
            options: {
                A: "<pre>1, 2, 3, 4</pre>",
                B: "<pre>1, 2, 4, 3</pre>",
                C: "<pre>2, 1, 4, 3</pre>",
                D: "<pre>1, 3, 2, 4</pre>"
            },
            correct: "A",
            explanation: "The output is <pre>1, 2, 3, 4</pre> because <pre>await</pre> causes the function to pause and return control to the calling context, allowing synchronous code to continue executing before the awaited promise resolves.\n\n[CODE]// Step by step execution:\nconsole.log('1');           // 1 - synchronous\nasyncFunc();                // call async function\n  console.log('2');         // 2 - synchronous part of asyncFunc\n  await Promise.resolve();  // pause function, return control\nconsole.log('3');           // 3 - synchronous code continues\n// Microtask queue processed: resume asyncFunc\nconsole.log('4');           // 4 - after await\n\n// More complex example\nasync function complexAsync() {\n  console.log('A');\n  \n  await Promise.resolve();\n  console.log('B');\n  \n  await new Promise(resolve => setTimeout(resolve, 0));\n  console.log('C');\n  \n  await Promise.resolve().then(() => console.log('D'));\n  console.log('E');\n}\n\nconsole.log('Start');\ncomplexAsync();\nconsole.log('End');\n\n// Output: Start, A, End, B, D, C, E\n\n// Execution order explanation:\n// 1. 'Start' - synchronous\n// 2. 'A' - synchronous part of complexAsync\n// 3. await Promise.resolve() - yields to microtask queue\n// 4. 'End' - synchronous code continues\n// 5. Microtasks: 'B' (from first await)\n// 6. await setTimeout - yields to macrotask queue\n// 7. Microtasks continue: 'D' (from Promise.then)\n// 8. 'E' cannot run yet because we're waiting for setTimeout\n// 9. Macrotask: setTimeout callback, then 'C'\n// 10. Finally 'E' after all awaits complete\n\n// Converting async/await to promise chain\nfunction promiseEquivalent() {\n  console.log('A');\n  \n  return Promise.resolve()\n    .then(() => {\n      console.log('B');\n      return new Promise(resolve => setTimeout(resolve, 0));\n    })\n    .then(() => {\n      console.log('C');\n      return Promise.resolve().then(() => console.log('D'));\n    })\n    .then(() => {\n      console.log('E');\n    });\n}[/CODE]\n\nUnderstanding async/await execution order is crucial for:\n- Debugging asynchronous code\n- Avoiding race conditions\n- Writing predictable async logic\n- Performance optimization\n- Proper error handling",
            topic: {
                topics: ["Execution Context and Call Stack"]
            }
        },
        {
            id: 24,
            question: "What does this function memoization pattern accomplish?\n[CODE]function memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\nconst expensiveCalculation = memoize((x, y) => {\n  console.log('Calculating...');\n  return x * y + Math.sqrt(x * y);\n});[/CODE]",
            options: {
                A: "Caches function results based on arguments",
                B: "Speeds up first function call",
                C: "Prevents function from being called multiple times",
                D: "Creates a lazy version of the function"
            },
            correct: "A",
            explanation: "This memoization pattern caches function results based on the input arguments, returning cached results for repeated calls with the same arguments instead of recalculating. This optimizes expensive computations.\n\n[CODE]// Usage example\nconsole.log(expensiveCalculation(10, 20)); // Calculating... then result\nconsole.log(expensiveCalculation(10, 20)); // Cached result (no Calculating...)\nconsole.log(expensiveCalculation(5, 15));  // Calculating... then new result\n\n// Enhanced memoization with cache limits\nfunction memoizeWithLimit(fn, limit = 100) {\n  const cache = new Map();\n  const keys = [];\n  \n  return function(...args) {\n    const key = JSON.stringify(args);\n    \n    if (cache.has(key)) {\n      // Move to end (most recently used)\n      keys.splice(keys.indexOf(key), 1);\n      keys.push(key);\n      return cache.get(key);\n    }\n    \n    // Evict oldest if limit reached\n    if (keys.length >= limit) {\n      const oldestKey = keys.shift();\n      cache.delete(oldestKey);\n    }\n    \n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    keys.push(key);\n    \n    return result;\n  };\n}\n\n// Memoization with custom key generator\nfunction memoizeWithKey(fn, keyGenerator = JSON.stringify) {\n  const cache = new Map();\n  return function(...args) {\n    const key = keyGenerator(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\n// React useMemo hook (similar concept)\nfunction ExpensiveComponent({ a, b }) {\n  const result = React.useMemo(() => {\n    return expensiveCalculation(a, b);\n  }, [a, b]); // Only recalculate when a or b changes\n  \n  return <div>{result}</div>;\n}\n\n// When NOT to memoize\n// - Functions with side effects\n// - Functions that always return different results\n// - Very fast functions (overhead > benefit)\n// - Functions with non-serializable arguments\n\n// Memoization use cases:\n// - Expensive mathematical computations\n// - API response caching\n// - Component rendering optimization\n// - Recursive function optimization (Fibonacci)\n\nconst fibonacci = memoize(function(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n});\n\nconsole.log(fibonacci(40)); // Fast with memoization[/CODE]\n\nMemoization provides significant performance benefits for:\n- Pure functions with expensive computations\n- Functions called repeatedly with same arguments\n- Recursive algorithms\n- Data transformation pipelines",
            topic: {
                topics: ["Lazy Evaluation", "Immutable Patterns"]
            }
        },
        {
            id: 25,
            question: "What is the key difference between these two patterns?\n[CODE]// Pattern 1: Constructor function\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.greet = function() {\n  return `Hello, ${this.name}`;\n};\n\n// Pattern 2: Factory function\nfunction createPerson(name) {\n  return {\n    name,\n    greet() {\n      return `Hello, ${this.name}`;\n    }\n  };\n}[/CODE]",
            options: {
                A: "Pattern 1 uses prototypal inheritance; Pattern 2 uses object composition",
                B: "Both patterns work identically",
                C: "Pattern 1 is more memory efficient; Pattern 2 is faster",
                D: "Pattern 2 supports inheritance; Pattern 1 doesn't"
            },
            correct: "A",
            explanation: "Pattern 1 uses prototypal inheritance where methods are shared via the prototype, while Pattern 2 uses object composition where each object gets its own copy of methods. This has important implications for memory usage and flexibility.\n\n[CODE]// Memory comparison\nconst people1 = [];\nconst people2 = [];\n\n// Constructor pattern (shared methods)\nfor (let i = 0; i < 1000; i++) {\n  people1.push(new Person(`Person${i}`));\n}\n// All instances share the same greet method via prototype\n\n// Factory pattern (individual methods)\nfor (let i = 0; i < 1000; i++) {\n  people2.push(createPerson(`Person${i}`));\n}\n// Each instance has its own greet method\n\n// Prototype chain inspection\nconst person1 = new Person('John');\nconsole.log(person1.greet === people1[0].greet); // true (same method)\n\nconst person2 = createPerson('Jane');\nconsole.log(person2.greet === people2[0].greet); // false (different methods)\n\n// Modern class syntax (syntactic sugar for Pattern 1)\nclass PersonClass {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  greet() {\n    return `Hello, ${this.name}`;\n  }\n}\n\n// Enhanced factory with closure privacy\nfunction createPrivatePerson(name) {\n  const privateData = {};\n  \n  return {\n    getName() {\n      return name;\n    },\n    setName(newName) {\n      name = newName;\n    },\n    greet() {\n      return `Hello, ${name}`;\n    }\n  };\n}\n\nconst privatePerson = createPrivatePerson('Secret');\nconsole.log(privatePerson.name); // undefined (truly private)\nconsole.log(privatePerson.getName()); // 'Secret'\n\n// Mixin composition with factories\nconst CanSpeak = {\n  speak() {\n    return `${this.greet()}! How are you?`;\n  }\n};\n\nconst CanWalk = {\n  walk() {\n    return `${this.name} is walking`;\n  }\n};\n\nfunction createActor(name) {\n  return Object.assign(\n    createPerson(name),\n    CanSpeak,\n    CanWalk\n  );\n}\n\nconst actor = createActor('Performer');\nconsole.log(actor.greet()); // Hello, Performer\nconsole.log(actor.speak()); // Hello, Performer! How are you?\nconsole.log(actor.walk());  // Performer is walking\n\n// When to use each pattern:\n// Constructor/Class: When you need inheritance hierarchy\n// Factory: When you need composition, privacy, or flexibility\n// Factory + Closure: When you need true privacy\n// Factory + Mixins: When you need behavior composition[/CODE]\n\nUnderstanding these patterns helps choose the right abstraction for different use cases, considering factors like memory usage, encapsulation needs, and code organization.",
            topic: {
                topics: ["Execution Context and Call Stack", "Scope Chain and Variable Lookup"]
            }
        }
    ]
};