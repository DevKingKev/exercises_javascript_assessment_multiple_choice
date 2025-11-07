module.exports = {
    metadata: {
        title: "Advanced JavaScript Patterns & Optimization",
        description: "Test your knowledge of advanced JavaScript patterns including generators, iterators, proxies, symbols, functional programming, and performance optimization techniques.",
        difficulty: "medium",
        timeLimit: 45,
        questionCount: 25,
        topics: [
            "Generators and Iterators",
            "Proxies and Reflect API",
            "Symbols and Well-known Symbols",
            "Functional Programming Patterns",
            "Memory Management and Optimization",
            "Advanced Regular Expressions",
            "Error Handling Strategies",
            "Module Patterns and Dynamic Imports",
            "WeakMap and WeakSet",
            "Memoization and Caching"
        ],
        topicLinks: [
            {
                topicName: "Generators and Iterators",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators"
            },
            {
                topicName: "Proxies and Reflect API",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            },
            {
                topicName: "Symbols and Well-known Symbols",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"
            },
            {
                topicName: "Functional Programming Patterns",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function"
            },
            {
                topicName: "Memory Management and Optimization",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management"
            },
            {
                topicName: "Advanced Regular Expressions",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"
            },
            {
                topicName: "Error Handling Strategies",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"
            },
            {
                topicName: "Module Patterns and Dynamic Imports",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
                topicName: "WeakMap and WeakSet",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"
            },
            {
                topicName: "Memoization and Caching",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
            }
        ],
        assessmentId: 5,
        assessmentUniqueId: 1762342945742,
        testType: "multiple-choice"
    },
    questions: [
        {
            id: 1,
            question: "What happens when you call [CODE]next()[/CODE] on a generator that has already completed?",
            options: {
                A: "It throws a TypeError",
                B: "It returns <pre>{ value: undefined, done: true }</pre>",
                C: "It restarts the generator from the beginning",
                D: "It returns the last yielded value"
            },
            correct: "B",
            explanation: "Once a generator has completed (reached a return statement or the end of the function), calling <pre>next()</pre> will always return <pre>{ value: undefined, done: true }</pre>. The generator doesn't restart, throw errors, or return previous values. If the generator had an explicit return value, subsequent calls to <pre>next()</pre> after completion will still return <pre>undefined</pre> as the value, not the return value. This behavior allows you to safely call <pre>next()</pre> multiple times without error handling.",
            topic: {
                topics: ["Generators and Iterators"]
            }
        },
        {
            id: 2,
            question: "What is the primary difference between a Proxy's [CODE]get[/CODE] trap and using a getter on an object?",
            options: {
                A: "Proxies are faster than getters",
                B: "A Proxy can intercept property access for properties that don't exist yet",
                C: "Getters can be used with primitives, Proxies cannot",
                D: "A Proxy's get trap cannot return undefined"
            },
            correct: "B",
            explanation: "The key advantage of a Proxy's <pre>get</pre> trap is that it can intercept access to any property, including those that haven't been defined yet. Traditional getters must be defined for specific properties in advance. This makes Proxies extremely powerful for creating dynamic objects, virtual properties, default values for missing properties, or implementing features like auto-vivification. For example, you could create an object that returns empty arrays for any undefined property, or an object that fetches data on-demand when properties are accessed.",
            topic: {
                topics: ["Proxies and Reflect API"]
            }
        },
        {
            id: 3,
            question: "What is the purpose of [CODE]Symbol.iterator[/CODE]?",
            options: {
                A: "It defines how an object should be converted to a string",
                B: "It makes an object iterable in for...of loops and spread operations",
                C: "It prevents an object from being garbage collected",
                D: "It creates a unique identifier for the object"
            },
            correct: "B",
            explanation: "<pre>Symbol.iterator</pre> is a well-known symbol that defines the default iterator for an object. When you implement <pre>[Symbol.iterator]()</pre> on an object, you make it iterable, meaning it can be used with <pre>for...of</pre> loops, the spread operator (<pre>...</pre>), <pre>Array.from()</pre>, and destructuring. The method should return an iterator object with a <pre>next()</pre> method that returns <pre>{ value, done }</pre> objects. This is how built-in iterables like Arrays, Strings, Maps, and Sets work. Custom iterables allow you to define your own iteration behavior for any object.",
            topic: {
                topics: ["Symbols and Well-known Symbols"]
            }
        },
        {
            id: 4,
            question: "In functional programming, what is a 'pure function'?",
            options: {
                A: "A function that only uses primitive types",
                B: "A function that has no side effects and always returns the same output for the same input",
                C: "A function that doesn't use any variables",
                D: "A function written in strict mode"
            },
            correct: "B",
            explanation: "A pure function is one that: (1) always produces the same output given the same input (referential transparency), and (2) has no side effects (doesn't modify external state, doesn't perform I/O, doesn't mutate arguments). Pure functions are predictable, easy to test, and enable optimizations like memoization. Examples of impure operations include modifying global variables, mutating arguments, making API calls, logging to console, or changing the DOM. Pure functions are a cornerstone of functional programming and make code more maintainable and easier to reason about.",
            topic: {
                topics: ["Functional Programming Patterns"]
            }
        },
        {
            id: 5,
            question: "What does the [CODE]Reflect.get(target, property, receiver)[/CODE] method do that regular property access doesn't?",
            options: {
                A: "It's significantly faster for large objects",
                B: "It allows you to specify a custom 'this' binding for getter functions",
                C: "It prevents property access on frozen objects",
                D: "It automatically converts the result to a string"
            },
            correct: "B",
            explanation: "The third parameter of <pre>Reflect.get()</pre>, the <pre>receiver</pre>, allows you to specify what <pre>this</pre> should be when a getter is invoked. This is particularly useful when working with Proxies and inheritance chains. If the property being accessed has a getter function, that getter will be called with <pre>receiver</pre> as its <pre>this</pre> value. This provides fine-grained control over the execution context of getters, which isn't possible with regular property access (<pre>obj.prop</pre>). This feature is especially powerful when implementing proxy chains or custom property access patterns.",
            topic: {
                topics: ["Proxies and Reflect API"]
            }
        },
        {
            id: 6,
            question: "What is the main advantage of using [CODE]WeakMap[/CODE] over [CODE]Map[/CODE] for storing object metadata?",
            options: {
                A: "WeakMap is faster for large datasets",
                B: "WeakMap allows garbage collection of keys when no other references exist",
                C: "WeakMap can use primitive values as keys",
                D: "WeakMap maintains insertion order"
            },
            correct: "B",
            explanation: "<pre>WeakMap</pre> holds 'weak' references to its keys, meaning if there are no other references to a key object, it can be garbage collected even though it exists in the WeakMap. This prevents memory leaks when storing metadata about objects. For example, if you're tracking DOM elements and those elements are removed from the page, a WeakMap will automatically clean up their entries. In contrast, a regular Map holds strong references, keeping keys in memory indefinitely. The trade-off is that WeakMaps are not enumerable (no <pre>size</pre>, <pre>keys()</pre>, or iteration), and keys must be objects, not primitives.",
            topic: {
                topics: ["WeakMap and WeakSet", "Memory Management and Optimization"]
            }
        },
        {
            id: 7,
            question: "What does this generator function do?\n[CODE]function* range(start, end) {\n  for (let i = start; i < end; i++) {\n    yield i;\n  }\n}[/CODE]",
            options: {
                A: "Returns an array of numbers from start to end",
                B: "Creates an iterator that produces numbers lazily on demand",
                C: "Calculates the sum of numbers in the range",
                D: "Throws an error because generators can't use for loops"
            },
            correct: "B",
            explanation: "This generator creates a lazy iterator that produces numbers from <pre>start</pre> to <pre>end - 1</pre> only when requested via <pre>next()</pre> calls. Unlike returning an array, which creates all values in memory immediately, this generator computes each value on-demand. This is memory-efficient for large ranges: <pre>range(0, 1000000)</pre> doesn't allocate a million-element array. You can use it with <pre>for...of</pre>: <pre>for (const num of range(1, 5)) { }</pre>, or convert to an array with <pre>Array.from(range(1, 5))</pre>. This lazy evaluation is a key benefit of generators for working with sequences.",
            topic: {
                topics: ["Generators and Iterators"]
            }
        },
        {
            id: 8,
            question: "What is 'currying' in functional programming?",
            options: {
                A: "Converting a function with multiple arguments into a sequence of functions each taking a single argument",
                B: "Executing a function repeatedly with different arguments",
                C: "Combining multiple functions into one",
                D: "Making a function run faster by optimizing its code"
            },
            correct: "A",
            explanation: "Currying transforms a function that takes multiple arguments into a chain of functions, each taking a single argument. For example, <pre>add(a, b)</pre> becomes <pre>add(a)(b)</pre>. This enables partial application: you can create specialized functions by fixing some arguments. Example: <pre>const add = a => b => a + b; const add5 = add(5); add5(3); // 8</pre>. Currying is useful for creating reusable function configurations, function composition, and improving code readability in functional pipelines. It's a fundamental technique in functional programming that promotes code reuse and modularity.",
            topic: {
                topics: ["Functional Programming Patterns"]
            }
        },
        {
            id: 9,
            question: "What does the [CODE]deleteProperty[/CODE] trap in a Proxy intercept?",
            options: {
                A: "The <pre>delete</pre> operator",
                B: "Setting a property to undefined",
                C: "The <pre>Object.freeze()</pre> method",
                D: "Garbage collection of the object"
            },
            correct: "A",
            explanation: "The <pre>deleteProperty</pre> trap intercepts the <pre>delete</pre> operator. When you write <pre>delete obj.prop</pre> on a proxied object, the trap is called with the target and property name. This allows you to: prevent deletion of certain properties, log deletion attempts, trigger side effects, or implement virtual properties that can't really be deleted. The trap should return a boolean indicating success. Note that setting a property to <pre>undefined</pre> does NOT trigger this trap—that triggers the <pre>set</pre> trap. This distinction is important for implementing proper property management in proxies.",
            topic: {
                topics: ["Proxies and Reflect API"]
            }
        },
        {
            id: 10,
            question: "What is the primary use case for [CODE]Symbol.toPrimitive[/CODE]?",
            options: {
                A: "Converting objects to primitive values in type coercion contexts",
                B: "Making objects immutable",
                C: "Enabling objects to be used as Map keys",
                D: "Allowing objects to be serialized to JSON"
            },
            correct: "A",
            explanation: "<pre>Symbol.toPrimitive</pre> is a well-known symbol that lets you customize how an object is converted to a primitive value. The method receives a hint: <pre>'string'</pre>, <pre>'number'</pre>, or <pre>'default'</pre>. Example:\n<pre>const obj = {\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') return 42;\n    if (hint === 'string') return 'hello';\n    return true;\n  }\n};</pre>\nThis controls conversions like <pre>+obj</pre> (number), <pre>String(obj)</pre> (string), and <pre>obj + ''</pre> (default). Without this symbol, JavaScript uses <pre>valueOf()</pre> and <pre>toString()</pre>. <pre>Symbol.toPrimitive</pre> takes precedence over these methods and provides more explicit control over type coercion.",
            topic: {
                topics: ["Symbols and Well-known Symbols"]
            }
        },
        {
            id: 11,
            question: "What is memoization and when should it be used?",
            options: {
                A: "A technique to make functions run asynchronously",
                B: "Caching function results based on arguments to avoid redundant computations",
                C: "Converting callbacks to promises",
                D: "A method to prevent memory leaks"
            },
            correct: "B",
            explanation: "Memoization is an optimization technique where function results are cached based on their input arguments. When the function is called again with the same arguments, the cached result is returned instead of recomputing. This is most effective for: (1) pure functions (same input always produces same output), (2) expensive computations, (3) functions called repeatedly with the same arguments. Example: Fibonacci calculations, API response caching, complex calculations. Implementation typically uses a Map or object to store results keyed by arguments. Trade-off: increased memory usage for decreased computation time. Not suitable for functions with side effects or those rarely called with duplicate arguments.",
            topic: {
                topics: ["Memoization and Caching", "Memory Management and Optimization"]
            }
        },
        {
            id: 12,
            question: "What does the [CODE]yield*[/CODE] expression do in a generator?",
            options: {
                A: "Yields multiple values at once as an array",
                B: "Delegates iteration to another iterable or generator",
                C: "Terminates the generator early",
                D: "Creates a new generator instance"
            },
            correct: "B",
            explanation: "<pre>yield*</pre> delegates to another iterable or generator, yielding all its values one by one. Example:\n<pre>function* g1() { yield* [1, 2]; }\nfunction* g2() { yield 0; yield* g1(); yield 3; }</pre>\n<pre>[...g2()]</pre> produces <pre>[0, 1, 2, 3]</pre>. It's like automatically iterating through the delegated iterable and yielding each value. This is useful for: composing generators, flattening nested structures, or recursively traversing data. The delegated generator can also receive values sent via <pre>next(value)</pre> and return a final value. <pre>yield*</pre> makes generator composition elegant and is essential for building complex iteration patterns.",
            topic: {
                topics: ["Generators and Iterators"]
            }
        },
        {
            id: 13,
            question: "What is the difference between [CODE]Object.freeze()[/CODE] and using a Proxy with a [CODE]set[/CODE] trap that returns false?",
            options: {
                A: "There is no difference; they work exactly the same",
                B: "<pre>Object.freeze()</pre> is permanent and prevents all mutations; Proxy can have conditional logic",
                C: "Proxies are frozen by default",
                D: "<pre>Object.freeze()</pre> only works on arrays"
            },
            correct: "B",
            explanation: "<pre>Object.freeze()</pre> makes an object completely immutable—no properties can be added, deleted, or modified, and this is permanent. A Proxy with a <pre>set</pre> trap, however, can implement conditional immutability: you can allow some properties to change, prevent changes based on user roles, log change attempts, or even toggle immutability on/off. The Proxy approach is more flexible but requires more code and has performance overhead. Additionally, <pre>Object.freeze()</pre> is shallow (doesn't freeze nested objects), while a Proxy can implement deep immutability by recursively wrapping nested objects. Choose <pre>Object.freeze()</pre> for simple, permanent immutability; Proxies for sophisticated control.",
            topic: {
                topics: ["Proxies and Reflect API"]
            }
        },
        {
            id: 14,
            question: "What is 'function composition' in functional programming?",
            options: {
                A: "Writing functions inside other functions",
                B: "Combining multiple functions where the output of one is the input of the next",
                C: "Using arrow functions instead of regular functions",
                D: "Making functions run in parallel"
            },
            correct: "B",
            explanation: "Function composition is combining simple functions to build more complex ones. The output of one function becomes the input to the next. Example:\n<pre>const compose = (f, g) => x => f(g(x));\nconst addOne = x => x + 1;\nconst double = x => x * 2;\nconst addOneThenDouble = compose(double, addOne);\naddOneThenDouble(3); // (3 + 1) * 2 = 8</pre>\nComposition reads right-to-left (or use <pre>pipe</pre> for left-to-right). Benefits: code reusability, readability, testability. Each function does one thing well, and you combine them for complex operations. This is a fundamental pattern in functional programming for building maintainable data transformation pipelines.",
            topic: {
                topics: ["Functional Programming Patterns"]
            }
        },
        {
            id: 15,
            question: "What is the advantage of using named capture groups in regular expressions?",
            options: {
                A: "They make regex execute faster",
                B: "They allow accessing matched groups by name instead of index, improving readability",
                C: "They enable regex to match multiple patterns simultaneously",
                D: "They are required for global flag matching"
            },
            correct: "B",
            explanation: "Named capture groups (syntax: <pre>(?<name>...)</pre>) let you access matched groups by descriptive names instead of numeric indices. Example:\n<pre>const re = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;\nconst match = '2023-11-15'.match(re);\nmatch.groups.year; // '2023'\nmatch.groups.month; // '11'</pre>\nThis is far more readable than <pre>match[1]</pre>, <pre>match[2]</pre>, especially in complex patterns. Named groups also make regex self-documenting and prevent errors when adding/removing groups (which changes indices). They're supported in modern JavaScript and are invaluable for maintainable regex patterns, especially in data parsing and validation.",
            topic: {
                topics: ["Advanced Regular Expressions"]
            }
        },
        {
            id: 16,
            question: "What does [CODE]import()[/CODE] return?",
            options: {
                A: "The module object directly",
                B: "A Promise that resolves to the module object",
                C: "A callback function to access the module",
                D: "An array of exported functions"
            },
            correct: "B",
            explanation: "Dynamic <pre>import()</pre> returns a Promise that resolves to the module object. This enables loading modules on-demand, reducing initial bundle size. Example:\n<pre>const button = document.querySelector('#load');\nbutton.addEventListener('click', async () => {\n  const module = await import('./heavyModule.js');\n  module.doSomething();\n});</pre>\nThis is crucial for code-splitting: load features only when needed. The Promise-based nature allows error handling (<pre>catch</pre>), parallel loading (<pre>Promise.all</pre>), and conditional imports. Unlike static <pre>import</pre> statements, dynamic imports can use variables for module paths and execute anywhere in code, not just at the top level.",
            topic: {
                topics: ["Module Patterns and Dynamic Imports"]
            }
        },
        {
            id: 17,
            question: "What is a key difference between [CODE]WeakSet[/CODE] and [CODE]Set[/CODE]?",
            options: {
                A: "WeakSet can only store objects and doesn't prevent garbage collection",
                B: "WeakSet stores values in sorted order",
                C: "WeakSet allows duplicate values",
                D: "WeakSet is synchronized for multi-threading"
            },
            correct: "A",
            explanation: "<pre>WeakSet</pre> can only store objects (not primitives) and holds weak references to them—if there are no other references to an object in a WeakSet, it can be garbage collected. This prevents memory leaks. Use cases: tracking objects without preventing their cleanup (e.g., marking DOM elements as 'processed' without keeping them alive). Trade-offs: WeakSets are not enumerable (no <pre>size</pre>, no iteration, can't list contents) because members may be garbage collected at any time. Regular Sets store any value type, hold strong references (preventing GC), and are fully enumerable. WeakSet is specialized for memory-conscious object tracking.",
            topic: {
                topics: ["WeakMap and WeakSet", "Memory Management and Optimization"]
            }
        },
        {
            id: 18,
            question: "What does the [CODE]return()[/CODE] method do when called on a generator iterator?",
            options: {
                A: "Returns the current yielded value",
                B: "Completes the generator early, optionally with a return value",
                C: "Restarts the generator from the beginning",
                D: "Throws an exception inside the generator"
            },
            correct: "B",
            explanation: "Calling <pre>return(value)</pre> on a generator iterator terminates the generator early and returns <pre>{ value: value, done: true }</pre>. Any <pre>finally</pre> blocks in the generator will execute before completion. Example:\n<pre>function* gen() {\n  try { yield 1; yield 2; }\n  finally { console.log('cleanup'); }\n}\nconst g = gen();\ng.next(); // { value: 1, done: false }\ng.return(99); // logs 'cleanup', returns { value: 99, done: true }\ng.next(); // { value: undefined, done: true }</pre>\nThis is useful for cleanup when you're done with a generator early, similar to breaking out of a loop. It's also used internally by <pre>for...of</pre> when breaking.",
            topic: {
                topics: ["Generators and Iterators"]
            }
        },
        {
            id: 19,
            question: "What is the [CODE]lookbehind[/CODE] assertion in regular expressions used for?",
            options: {
                A: "Matching text that comes before a specific pattern without including it in the match",
                B: "Reversing the direction of the regex search",
                C: "Finding all previous occurrences of a pattern",
                D: "Matching the last occurrence of a pattern"
            },
            correct: "A",
            explanation: "Lookbehind assertions (<pre>(?<=...)</pre> for positive, <pre>(?<!...)</pre> for negative) match a position in the string based on what comes before it, without including that content in the match. Example:\n<pre>'$100 €200'.match(/(?<=\\$)\\d+/); // ['100'] - matches numbers after $\n'$100 €200'.match(/(?<!\\$)\\d+/); // ['200'] - matches numbers NOT after $</pre>\nThis is powerful for context-sensitive matching: extracting values with specific prefixes, validating format without capturing delimiters, or filtering matches based on preceding context. Unlike capturing groups, lookbehinds don't consume characters or appear in match results—they're pure assertions about position.",
            topic: {
                topics: ["Advanced Regular Expressions"]
            }
        },
        {
            id: 20,
            question: "What is 'partial application' in functional programming?",
            options: {
                A: "Running only part of a function's code",
                B: "Creating a new function by fixing some arguments of an existing function",
                C: "Using async/await with functions",
                D: "Splitting a function into multiple files"
            },
            correct: "B",
            explanation: "Partial application creates a new function by pre-filling some arguments of an existing function. Example:\n<pre>function multiply(a, b, c) { return a * b * c; }\nconst multiplyBy2 = multiply.bind(null, 2);\nmultiplyBy2(3, 4); // 2 * 3 * 4 = 24</pre>\nOr with closures:\n<pre>const partial = (fn, ...args) => (...rest) => fn(...args, ...rest);\nconst add = (a, b, c) => a + b + c;\nconst add5 = partial(add, 5);\nadd5(10, 15); // 30</pre>\nThis creates specialized functions from generic ones, enabling code reuse and configuration. Unlike currying (which transforms arity), partial application fixes specific arguments. It's useful for callbacks, configuration, and creating function variants.",
            topic: {
                topics: ["Functional Programming Patterns"]
            }
        },
        {
            id: 21,
            question: "What happens if a Proxy's [CODE]set[/CODE] trap returns false?",
            options: {
                A: "The property is still set but a warning is logged",
                B: "In strict mode, a TypeError is thrown; in non-strict mode, the operation silently fails",
                C: "The target object is frozen",
                D: "The Proxy is automatically destroyed"
            },
            correct: "B",
            explanation: "When a Proxy's <pre>set</pre> trap returns <pre>false</pre>, the behavior depends on strict mode. In strict mode, a TypeError is thrown: <pre>'set' on proxy: trap returned falsish</pre>. In non-strict mode, the assignment silently fails—the property isn't set, but no error occurs. This allows Proxies to enforce invariants and prevent invalid state changes. Example use case: preventing modification of read-only properties, enforcing type validation, or implementing access control. Always return <pre>true</pre> from the trap if the operation should succeed. This same pattern applies to other traps like <pre>deleteProperty</pre> and <pre>defineProperty</pre>.",
            topic: {
                topics: ["Proxies and Reflect API"]
            }
        },
        {
            id: 22,
            question: "What is the purpose of the [CODE]try...catch...finally[/CODE] block's [CODE]finally[/CODE] clause?",
            options: {
                A: "To catch errors that weren't caught by catch",
                B: "To execute code regardless of whether an error occurred",
                C: "To retry the operation if it failed",
                D: "To log all errors to the console"
            },
            correct: "B",
            explanation: "The <pre>finally</pre> block executes regardless of whether the <pre>try</pre> block succeeded or threw an error, and even if the <pre>catch</pre> block threw a new error or returned early. This makes it perfect for cleanup operations: closing files, releasing resources, hiding loading spinners, re-enabling buttons. Example:\n<pre>try {\n  await fetchData();\n} catch (error) {\n  handleError(error);\n} finally {\n  hideSpinner(); // Always runs\n}</pre>\nImportant: <pre>finally</pre> can override return values: if <pre>finally</pre> contains a <pre>return</pre>, that becomes the function's return value, even if <pre>try</pre> or <pre>catch</pre> returned something else. This is a subtle gotcha to be aware of.",
            topic: {
                topics: ["Error Handling Strategies"]
            }
        },
        {
            id: 23,
            question: "What does [CODE]Symbol.for('key')[/CODE] do differently than [CODE]Symbol('key')[/CODE]?",
            options: {
                A: "Nothing, they're identical",
                B: "[CODE]Symbol.for()[/CODE] creates or retrieves a globally shared symbol with the given key",
                C: "[CODE]Symbol.for()[/CODE] is faster",
                D: "[CODE]Symbol.for()[/CODE] creates a symbol that can be serialized to JSON"
            },
            correct: "B",
            explanation: "<pre>Symbol.for('key')</pre> maintains a global symbol registry. If a symbol with that key exists, it returns it; otherwise, it creates a new one and registers it. This enables symbol sharing across different parts of code or even across realms (iframes, windows). Example:\n<pre>Symbol.for('app.id') === Symbol.for('app.id'); // true\nSymbol('app.id') === Symbol('app.id'); // false</pre>\nRegular <pre>Symbol()</pre> creates a unique symbol every time. Use <pre>Symbol.for()</pre> when you need a shared symbol identifier (like in libraries that need cross-module coordination). <pre>Symbol.keyFor(symbol)</pre> retrieves the registry key for a symbol created with <pre>Symbol.for()</pre>.",
            topic: {
                topics: ["Symbols and Well-known Symbols"]
            }
        },
        {
            id: 24,
            question: "What is a closure in the context of memory management?",
            options: {
                A: "A memory leak that needs to be avoided",
                B: "A function that retains access to its outer scope's variables, potentially preventing garbage collection",
                C: "A way to free memory immediately",
                D: "A type of memory compression"
            },
            correct: "B",
            explanation: "Closures allow inner functions to access outer scope variables even after the outer function has returned. This creates a reference chain that prevents garbage collection of those variables. Example:\n<pre>function outer() {\n  const largeData = new Array(1000000);\n  return () => console.log(largeData.length);\n}\nconst fn = outer(); // largeData can't be GC'd</pre>\nWhile closures are powerful and useful, they can inadvertently cause memory leaks if large objects are captured unnecessarily. Best practices: minimize captured variables, explicitly null out unneeded references, use WeakMap for object metadata. Understanding closure memory implications is crucial for performance in long-running applications with many event handlers or callbacks.",
            topic: {
                topics: ["Memory Management and Optimization"]
            }
        },
        {
            id: 25,
            question: "What is the difference between [CODE]throw new Error()[/CODE] and [CODE]throw 'error message'[/CODE]?",
            options: {
                A: "No difference; both work the same way",
                B: "Error objects include stack traces and are more informative; strings don't",
                C: "Strings are thrown faster",
                D: "Error objects can only be caught in strict mode"
            },
            correct: "B",
            explanation: "While JavaScript allows throwing any value, throwing <pre>Error</pre> objects is strongly preferred because they automatically capture a stack trace showing where the error occurred and the call chain leading to it. Example:\n<pre>throw new Error('Something failed'); // Has .stack property\nthrow 'Something failed'; // Just a string, no stack</pre>\nError objects also have standard properties like <pre>name</pre> and <pre>message</pre>, making them easier to handle consistently. You can create custom error classes extending <pre>Error</pre> for specific error types. Stack traces are invaluable for debugging. Throwing non-Error values makes debugging much harder and violates community best practices. Always throw Error objects or custom Error subclasses.",
            topic: {
                topics: ["Error Handling Strategies"]
            }
        }
    ]
};
