module.exports = {
    metadata: {
        title: "JavaScript Type System & Modern Features",
        description: "Deep dive into JavaScript's type system, coercion rules, modern ES2020+ features including optional chaining, nullish coalescing, private fields, BigInt, and advanced variable scoping.",
        difficulty: "medium",
        timeLimit: 45,
        questionCount: 25,
        topics: [
            "Type Coercion and Conversion",
            "Equality Operators and Comparison",
            "Variable Hoisting and TDZ",
            "Optional Chaining and Nullish Coalescing",
            "Private Class Fields and Methods",
            "BigInt and Numeric Operations",
            "Logical Assignment Operators",
            "Numeric Separators and Literals",
            "Top-level Await",
            "Static Initialization Blocks"
        ],
        topicLinks: [
            {
                topic: "Type Coercion and Conversion",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion"
            },
            {
                topic: "Equality Operators and Comparison",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
            },
            {
                topic: "Variable Hoisting and TDZ",
                refLink: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
            },
            {
                topic: "Optional Chaining and Nullish Coalescing",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
            },
            {
                topic: "Private Class Fields and Methods",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields"
            },
            {
                topic: "BigInt and Numeric Operations",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"
            },
            {
                topic: "Logical Assignment Operators",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment"
            },
            {
                topic: "Numeric Separators and Literals",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators"
            },
            {
                topic: "Top-level Await",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await"
            },
            {
                topic: "Static Initialization Blocks",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks"
            }
        ],
        assessmentId: 7,
        assessmentUniqueId: 1730985600000,
        testType: "multiple-choice"
    },
    questions: [
        {
            id: 1,
            question: "What is the result of [CODE][] + {}[/CODE]?",
            options: {
                A: "<pre>0</pre>",
                B: "<pre>\"[object Object]\"</pre>",
                C: "<pre>\"{}\"</pre>",
                D: "<pre>NaN</pre>"
            },
            correct: "B",
            explanation: "When using the <pre>+</pre> operator with non-primitive values, JavaScript converts both operands to primitives. The empty array <pre>[]</pre> converts to an empty string <pre>\"\"</pre>, and the empty object <pre>{}</pre> converts to <pre>\"[object Object]\"</pre> (via its <pre>toString()</pre> method). String concatenation then results in <pre>\"\" + \"[object Object]\"</pre> which equals <pre>\"[object Object]\"</pre>.\n\nThis demonstrates JavaScript's type coercion hierarchy: when the <pre>+</pre> operator encounters objects, it calls <pre>valueOf()</pre> first, and if that doesn't return a primitive, it falls back to <pre>toString()</pre>. Arrays have a special <pre>toString()</pre> that joins elements with commas (empty for <pre>[]</pre>), while objects use the default <pre>[object Object]</pre> representation.\n\nUnderstanding these coercion rules is crucial for avoiding bugs and writing predictable code.",
            topic: {
                topics: ["Type Coercion and Conversion"]
            }
        },
        {
            id: 2,
            question: "What is the difference between <pre>==</pre> and <pre>===</pre> when comparing values?",
            options: {
                A: "<pre>==</pre> is faster than <pre>===</pre>",
                B: "<pre>==</pre> performs type coercion before comparison; <pre>===</pre> checks type and value without coercion",
                C: "They are identical in modern JavaScript",
                D: "<pre>===</pre> only works with primitives"
            },
            correct: "B",
            explanation: "The double equals (<pre>==</pre>) performs type coercion before comparing values, while triple equals (<pre>===</pre>) checks both type and value without any conversion (strict equality).\n\nExamples of the difference:\n[CODE]// Type coercion with ==\n5 == '5'    // true (string coerced to number)\n0 == false  // true (boolean coerced to number)\nnull == undefined  // true (special case)\n'' == 0     // true (empty string coerced to 0)\n\n// Strict comparison with ===\n5 === '5'   // false (different types)\n0 === false // false (different types)\nnull === undefined  // false (different types)\n'' === 0    // false (different types)[/CODE]\n\nBest practice: Always use <pre>===</pre> (strict equality) unless you specifically need type coercion. The <pre>==</pre> operator follows complex coercion rules that can lead to unexpected bugs. The only common exception is checking for <pre>null</pre> or <pre>undefined</pre>: <pre>value == null</pre> checks for both.",
            topic: {
                topics: ["Equality Operators and Comparison"]
            }
        },
        {
            id: 3,
            question: "What is the Temporal Dead Zone (TDZ)?",
            options: {
                A: "A performance optimization technique",
                B: "The time between entering scope and variable initialization where <pre>let</pre>/<pre>const</pre> variables cannot be accessed",
                C: "A deprecated feature from ES5",
                D: "The delay in async operations"
            },
            correct: "B",
            explanation: "The Temporal Dead Zone (TDZ) is the period between entering a scope and the actual declaration/initialization of a <pre>let</pre> or <pre>const</pre> variable, during which the variable exists but cannot be accessed. Attempting to access it throws a ReferenceError.\n\n[CODE]// TDZ example\nconsole.log(x); // ReferenceError: Cannot access 'x' before initialization\nlet x = 10;\n\n// Compare with var (no TDZ)\nconsole.log(y); // undefined (hoisted but not initialized)\nvar y = 10;\n\n// TDZ in blocks\n{\n  // TDZ starts here for 'temp'\n  console.log(temp); // ReferenceError\n  let temp = 5;      // TDZ ends here\n  console.log(temp); // 5\n}[/CODE]\n\nThe TDZ exists to catch errors where variables are used before they're properly initialized. Unlike <pre>var</pre> which hoists to <pre>undefined</pre>, <pre>let</pre> and <pre>const</pre> remain uninitialized in the TDZ, making accidental early access more obvious. This is a deliberate design choice to encourage better coding practices.",
            topic: {
                topics: ["Variable Hoisting and TDZ"]
            }
        },
        {
            id: 4,
            question: "What does the optional chaining operator [CODE]?.[/CODE] do?",
            options: {
                A: "Makes properties optional in type definitions",
                B: "Short-circuits and returns <pre>undefined</pre> if the reference is <pre>null</pre> or <pre>undefined</pre>",
                C: "Creates a new object with optional properties",
                D: "Throws an error for missing properties"
            },
            correct: "B",
            explanation: "The optional chaining operator (<pre>?.</pre>) safely accesses nested object properties by short-circuiting and returning <pre>undefined</pre> if any reference in the chain is <pre>null</pre> or <pre>undefined</pre>, instead of throwing an error.\n\n[CODE]// Without optional chaining - risky\nconst city = user.address.city; // Error if user or address is null/undefined\n\n// With optional chaining - safe\nconst city = user?.address?.city; // undefined if any part is null/undefined\n\n// Works with arrays\nconst firstItem = arr?.[0];\n\n// Works with function calls\nconst result = obj.method?.();\n\n// Combining multiple uses\nconst data = api?.users?.[0]?.profile?.name ?? 'Unknown';\n\n// Common pattern with nullish coalescing\nconst email = user?.contact?.email ?? 'no-email@example.com';[/CODE]\n\nOptional chaining stops evaluation and returns <pre>undefined</pre> immediately when it encounters <pre>null</pre> or <pre>undefined</pre>. It only checks for <pre>null</pre>/<pre>undefined</pre>, not other falsy values like <pre>0</pre>, <pre>''</pre>, or <pre>false</pre>. This makes it perfect for safely accessing deeply nested properties without verbose null checks.",
            topic: {
                topics: ["Optional Chaining and Nullish Coalescing"]
            }
        },
        {
            id: 5,
            question: "What is the difference between the nullish coalescing operator [CODE]??[/CODE] and the OR operator [CODE]||[/CODE]?",
            options: {
                A: "They work identically",
                B: "<pre>??</pre> only returns the right operand for <pre>null</pre>/<pre>undefined</pre>; <pre>||</pre> returns it for any falsy value",
                C: "<pre>??</pre> is faster",
                D: "<pre>||</pre> is deprecated"
            },
            correct: "B",
            explanation: "The nullish coalescing operator (<pre>??</pre>) only treats <pre>null</pre> and <pre>undefined</pre> as \"missing\" values, while the OR operator (<pre>||</pre>) treats all falsy values (<pre>0</pre>, <pre>''</pre>, <pre>false</pre>, <pre>NaN</pre>, <pre>null</pre>, <pre>undefined</pre>) as reasons to return the right operand.\n\n[CODE]// Different behavior with falsy values\nconst count1 = 0 || 10;  // 10 (0 is falsy)\nconst count2 = 0 ?? 10;  // 0 (0 is not null/undefined)\n\nconst name1 = '' || 'Guest';  // 'Guest' (empty string is falsy)\nconst name2 = '' ?? 'Guest';  // '' (empty string is not null/undefined)\n\nconst flag1 = false || true;  // true (false is falsy)\nconst flag2 = false ?? true;  // false (false is not null/undefined)\n\n// When they're the same\nconst value1 = null || 'default';  // 'default'\nconst value2 = null ?? 'default';  // 'default'\n\nconst value3 = undefined || 'default';  // 'default'\nconst value4 = undefined ?? 'default';  // 'default'[/CODE]\n\nUse <pre>??</pre> when <pre>0</pre>, <pre>''</pre>, or <pre>false</pre> are valid values you want to preserve. Use <pre>||</pre> when you want any falsy value to trigger the default. This distinction prevents bugs where <pre>0</pre> counts or empty strings are incorrectly replaced with defaults.",
            topic: {
                topics: ["Optional Chaining and Nullish Coalescing"]
            }
        },
        {
            id: 6,
            question: "How do you declare a private field in a JavaScript class?",
            options: {
                A: "Using the <pre>private</pre> keyword",
                B: "Prefixing the field name with <pre>#</pre>",
                C: "Using <pre>_</pre> prefix by convention",
                D: "Wrapping in closures"
            },
            correct: "B",
            explanation: "JavaScript uses the <pre>#</pre> prefix to declare truly private class fields that cannot be accessed from outside the class, not even from instances or subclasses.\n\n[CODE]class BankAccount {\n  #balance = 0;  // Private field\n  #pin;          // Private field (uninitialized)\n  \n  constructor(initialBalance, pin) {\n    this.#balance = initialBalance;\n    this.#pin = pin;\n  }\n  \n  deposit(amount) {\n    this.#balance += amount;  // Accessible inside class\n  }\n  \n  withdraw(amount, pin) {\n    if (pin === this.#pin) {\n      this.#balance -= amount;\n      return true;\n    }\n    return false;\n  }\n  \n  getBalance() {\n    return this.#balance;\n  }\n}\n\nconst account = new BankAccount(100, '1234');\naccount.deposit(50);\nconsole.log(account.getBalance()); // 150\nconsole.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class[/CODE]\n\nPrivate fields are genuinely private—there's no way to access them from outside the class, even with bracket notation or reflection. This is different from the <pre>_prefix</pre> convention which is just a hint to developers. Private methods use the same <pre>#</pre> syntax.",
            topic: {
                topics: ["Private Class Fields and Methods"]
            }
        },
        {
            id: 7,
            question: "What is BigInt used for in JavaScript?",
            options: {
                A: "Storing large floating-point numbers",
                B: "Representing integers larger than <pre>Number.MAX_SAFE_INTEGER</pre> (2^53 - 1)",
                C: "Compressing large data structures",
                D: "Optimizing memory usage"
            },
            correct: "B",
            explanation: "BigInt is a numeric primitive that can represent integers beyond the safe integer limit of regular numbers (<pre>Number.MAX_SAFE_INTEGER</pre> = 9,007,199,254,740,991). It's created by appending <pre>n</pre> to an integer literal or using the <pre>BigInt()</pre> function.\n\n[CODE]// Regular numbers lose precision at large values\nconst big1 = 9007199254740991;      // MAX_SAFE_INTEGER\nconst big2 = 9007199254740992;      // Loses precision\nconsole.log(big1 + 1 === big2);     // true (unexpected!)\n\n// BigInt maintains precision\nconst bigInt1 = 9007199254740991n;\nconst bigInt2 = 9007199254740992n;\nconsole.log(bigInt1 + 1n === bigInt2); // true (expected)\n\n// Creating BigInts\nconst a = 123n;                     // Literal\nconst b = BigInt('123456789012345678901234567890');\nconst c = BigInt(123);              // From number\n\n// Operations\nconst sum = 100n + 50n;             // 150n\nconst product = 10n * 5n;           // 50n\nconst power = 2n ** 100n;           // Very large number\n\n// Cannot mix with regular numbers\nconst mixed = 10n + 5;              // TypeError\nconst correct = 10n + BigInt(5);    // 15n[/CODE]\n\nImportant: BigInt cannot be mixed with regular numbers in operations, cannot be used with <pre>Math</pre> methods, and doesn't support decimals. Use it for cryptography, timestamps beyond milliseconds, or financial calculations requiring exact large integers.",
            topic: {
                topics: ["BigInt and Numeric Operations"]
            }
        },
        {
            id: 8,
            question: "What does the logical OR assignment operator [CODE]||=[/CODE] do?",
            options: {
                A: "Always assigns the right value",
                B: "Assigns the right value only if the left is falsy",
                C: "Performs bitwise OR",
                D: "Combines OR and comparison"
            },
            correct: "B",
            explanation: "The logical OR assignment operator (<pre>||=</pre>) assigns the right operand to the left variable only if the left operand is falsy. It's shorthand for <pre>x = x || y</pre>.\n\n[CODE]// Traditional pattern\nlet config = config || {};\n\n// Using ||= (cleaner)\nlet config;\nconfig ||= {};\n\n// More examples\nlet count = 0;\ncount ||= 10;  // count is now 10 (0 is falsy)\n\nlet name = 'John';\nname ||= 'Guest';  // name stays 'John' (not falsy)\n\nlet value;\nvalue ||= 'default';  // value becomes 'default' (undefined is falsy)\n\n// Practical use: setting defaults\nfunction processOptions(options = {}) {\n  options.timeout ||= 5000;\n  options.retries ||= 3;\n  options.debug ||= false;\n  return options;\n}\n\nprocessOptions({ timeout: 1000 });\n// { timeout: 1000, retries: 3, debug: false }[/CODE]\n\nRelated operators:\n- <pre>&&=</pre>: Assigns only if left is truthy\n- <pre>??=</pre>: Assigns only if left is <pre>null</pre> or <pre>undefined</pre>\n\nThese logical assignment operators combine assignment with short-circuit evaluation, making default value patterns more concise and readable.",
            topic: {
                topics: ["Logical Assignment Operators"]
            }
        },
        {
            id: 9,
            question: "What happens when you try to access a variable declared with <pre>let</pre> before its declaration?",
            options: {
                A: "Returns <pre>undefined</pre>",
                B: "Throws a ReferenceError",
                C: "Returns <pre>null</pre>",
                D: "Creates the variable automatically"
            },
            correct: "B",
            explanation: "Accessing a <pre>let</pre> or <pre>const</pre> variable before its declaration throws a ReferenceError because of the Temporal Dead Zone (TDZ). This is different from <pre>var</pre>, which hoists to <pre>undefined</pre>.\n\n[CODE]// With let - ReferenceError\nconsole.log(x); // ReferenceError: Cannot access 'x' before initialization\nlet x = 10;\n\n// With const - same behavior\nconsole.log(y); // ReferenceError: Cannot access 'y' before initialization\nconst y = 20;\n\n// With var - undefined (hoisted)\nconsole.log(z); // undefined\nvar z = 30;\n\n// Hoisting explained\n{\n  // let/const are hoisted but uninitialized (TDZ)\n  // Trying to access them here: ReferenceError\n  \n  let a = 1;\n  const b = 2;\n  // Now accessible\n}\n\n// Function hoisting works differently\nfoo(); // Works! Function declarations are fully hoisted\nfunction foo() {\n  console.log('Called');\n}\n\nbar(); // ReferenceError: Cannot access 'bar' before initialization\nconst bar = () => console.log('Called');[/CODE]\n\nThe TDZ helps catch bugs where variables are used before they're initialized. It enforces better coding practices by making temporal dependencies explicit.",
            topic: {
                topics: ["Variable Hoisting and TDZ"]
            }
        },
        {
            id: 10,
            question: "What is the purpose of numeric separators in JavaScript?",
            options: {
                A: "They change how numbers are calculated",
                B: "They improve readability of large numbers without affecting the value",
                C: "They enable decimal precision",
                D: "They are required for BigInt"
            },
            correct: "B",
            explanation: "Numeric separators (<pre>_</pre>) are purely for readability and have no effect on the numeric value. They help make large numbers easier to read by visually grouping digits.\n\n[CODE]// Without separators - hard to read\nconst budget = 1000000000;\nconst bytes = 1073741824;\nconst creditCard = 1234567890123456;\n\n// With separators - much clearer\nconst budget = 1_000_000_000;        // 1 billion\nconst bytes = 1_073_741_824;         // 1 GB in bytes\nconst creditCard = 1234_5678_9012_3456;\n\n// Works with different number types\nconst decimal = 123_456.789_012;\nconst binary = 0b1010_0001_1000_0101;\nconst hex = 0x12_34_56_78;\nconst bigInt = 123_456_789_012_345_678_901n;\n\n// You can place underscores anywhere (except at start/end)\nconst grouped = 1_2_3_4_5;          // Valid but unusual\n\n// Invalid placements\nconst invalid1 = _123;               // SyntaxError\nconst invalid2 = 123_;               // SyntaxError\nconst invalid3 = 123._456;           // SyntaxError\n\n// The value is unchanged\nconsole.log(1_000 === 1000);         // true\nconsole.log(1_000_000);              // 1000000[/CODE]\n\nNumeric separators are ignored by the JavaScript engine and don't affect the value, type, or performance. They're purely a developer convenience for writing more readable code, especially useful for constants and configuration values.",
            topic: {
                topics: ["Numeric Separators and Literals"]
            }
        },
        {
            id: 11,
            question: "What is the result of [CODE]typeof NaN[/CODE]?",
            options: {
                A: "<pre>\"NaN\"</pre>",
                B: "<pre>\"number\"</pre>",
                C: "<pre>\"undefined\"</pre>",
                D: "<pre>\"object\"</pre>"
            },
            correct: "B",
            explanation: "Despite its name (Not-a-Number), <pre>NaN</pre> has the type <pre>\"number\"</pre>. This is one of JavaScript's quirks. <pre>NaN</pre> is a special numeric value that represents an invalid or undefined mathematical result.\n\n[CODE]console.log(typeof NaN);           // \"number\"\n\n// NaN is the only value not equal to itself\nconsole.log(NaN === NaN);          // false\nconsole.log(NaN == NaN);           // false\n\n// How to check for NaN correctly\nconsole.log(Number.isNaN(NaN));    // true\nconsole.log(Number.isNaN(123));    // false\nconsole.log(Number.isNaN('hello')); // false (not coerced)\n\n// Global isNaN coerces (less reliable)\nconsole.log(isNaN(NaN));           // true\nconsole.log(isNaN('hello'));       // true (coerced to NaN)\nconsole.log(isNaN(123));           // false\n\n// Operations that produce NaN\nconsole.log(0 / 0);                // NaN\nconsole.log(Math.sqrt(-1));        // NaN\nconsole.log(parseInt('hello'));    // NaN\nconsole.log('a' * 5);              // NaN\n\n// NaN in calculations\nconsole.log(5 + NaN);              // NaN\nconsole.log(NaN + NaN);            // NaN[/CODE]\n\nAlways use <pre>Number.isNaN()</pre> (not the global <pre>isNaN()</pre>) to check for <pre>NaN</pre>, as it doesn't perform type coercion and gives more reliable results.",
            topic: {
                topics: ["Type Coercion and Conversion"]
            }
        },
        {
            id: 12,
            question: "What does top-level <pre>await</pre> enable in JavaScript modules?",
            options: {
                A: "Faster async operations",
                B: "Using <pre>await</pre> outside of async functions in ES modules",
                C: "Backwards compatibility with older browsers",
                D: "Automatic error handling"
            },
            correct: "B",
            explanation: "Top-level await allows you to use the <pre>await</pre> keyword at the top level of ES modules without wrapping it in an async function. This makes module initialization with async operations cleaner and more intuitive.\n\n[CODE]// Before (needed async IIFE or wrapper)\n(async () => {\n  const data = await fetch('/api/config');\n  const config = await data.json();\n  export default config; // Can't export from here!\n})();\n\n// After (top-level await)\nconst data = await fetch('/api/config');\nconst config = await data.json();\nexport default config;\n\n// Dynamic imports with top-level await\nconst module = await import('./dynamic-module.js');\n\n// Conditional imports\nconst featureModule = condition\n  ? await import('./feature-a.js')\n  : await import('./feature-b.js');\n\n// Parallel loading\nconst [users, posts] = await Promise.all([\n  fetch('/api/users').then(r => r.json()),\n  fetch('/api/posts').then(r => r.json())\n]);\n\nexport { users, posts };[/CODE]\n\nImportant considerations:\n- Only works in ES modules (type=\"module\")\n- The module becomes async, blocking dependent modules\n- Can impact app startup time if overused\n- Enables cleaner initialization patterns\n- Module execution order respects async dependencies\n\nTop-level await is useful for loading configuration, feature detection, or setting up module-level resources that need async initialization.",
            topic: {
                topics: ["Top-level Await"]
            }
        },
        {
            id: 13,
            question: "What is the difference between [CODE]Object.is()[/CODE] and [CODE]===[/CODE]?",
            options: {
                A: "They are identical",
                B: "<pre>Object.is()</pre> handles <pre>NaN</pre> and <pre>-0</pre>/<pre>+0</pre> differently than <pre>===</pre>",
                C: "<pre>Object.is()</pre> performs type coercion",
                D: "<pre>===</pre> is more accurate"
            },
            correct: "B",
            explanation: "<pre>Object.is()</pre> provides \"same-value equality\" which is more mathematically correct than <pre>===</pre> in two edge cases: <pre>NaN</pre> comparison and distinguishing <pre>-0</pre> from <pre>+0</pre>.\n\n[CODE]// NaN comparison\nconsole.log(NaN === NaN);          // false (unexpected)\nconsole.log(Object.is(NaN, NaN));  // true (expected)\n\n// Zero comparison\nconsole.log(+0 === -0);            // true (may be unexpected)\nconsole.log(Object.is(+0, -0));    // false (distinguishes signs)\n\n// All other cases are the same\nconsole.log(5 === 5);              // true\nconsole.log(Object.is(5, 5));      // true\n\nconsole.log('x' === 'x');          // true\nconsole.log(Object.is('x', 'x'));  // true\n\nconsole.log(null === null);        // true\nconsole.log(Object.is(null, null)); // true\n\n// Use cases\nfunction includes(arr, value) {\n  // Can find NaN in arrays\n  return arr.some(item => Object.is(item, value));\n}\n\nconsole.log(includes([1, NaN, 3], NaN)); // true\nconsole.log([1, NaN, 3].includes(NaN));  // true (includes also uses SameValueZero)[/CODE]\n\nFor most comparisons, <pre>===</pre> is sufficient and more common. Use <pre>Object.is()</pre> when you specifically need to handle <pre>NaN</pre> correctly or distinguish between positive and negative zero.",
            topic: {
                topics: ["Equality Operators and Comparison"]
            }
        },
        {
            id: 14,
            question: "What does a static initialization block in a class do?",
            options: {
                A: "Initializes instance properties",
                B: "Runs once when the class is defined, useful for complex static initialization",
                C: "Creates static methods",
                D: "Prevents class instantiation"
            },
            correct: "B",
            explanation: "Static initialization blocks run once when the class is evaluated, providing a dedicated space for complex static field initialization. They have access to private static fields and run before any instances are created.\n\n[CODE]class DatabaseConnection {\n  static #connection;\n  static #config;\n  \n  // Static initialization block\n  static {\n    console.log('Initializing database...');\n    try {\n      this.#config = loadConfig();\n      this.#connection = createConnection(this.#config);\n      console.log('Database ready');\n    } catch (error) {\n      console.error('Failed to initialize:', error);\n      this.#connection = null;\n    }\n  }\n  \n  static getConnection() {\n    return this.#connection;\n  }\n}\n\n// Multiple static blocks execute in order\nclass Example {\n  static value1;\n  static value2;\n  \n  static {\n    console.log('Block 1');\n    this.value1 = 'first';\n  }\n  \n  static {\n    console.log('Block 2');\n    this.value2 = this.value1.toUpperCase();\n  }\n}\n\nconsole.log(Example.value2); // 'FIRST'\n\n// Use case: computed static properties\nclass Constants {\n  static maxSize;\n  \n  static {\n    const config = fetchConfig();\n    this.maxSize = config.size * 1024;\n  }\n}[/CODE]\n\nStatic blocks are useful for:\n- Complex initialization logic that needs try-catch\n- Setting up private static state\n- Initialization that depends on other static fields\n- Side effects during class definition",
            topic: {
                topics: ["Static Initialization Blocks"]
            }
        },
        {
            id: 15,
            question: "What is the result of [CODE]0.1 + 0.2 === 0.3[/CODE]?",
            options: {
                A: "<pre>true</pre>",
                B: "<pre>false</pre>",
                C: "<pre>NaN</pre>",
                D: "SyntaxError"
            },
            correct: "B",
            explanation: "The expression <pre>0.1 + 0.2 === 0.3</pre> evaluates to <pre>false</pre> due to floating-point precision issues. JavaScript uses IEEE 754 double-precision floating-point format, which cannot precisely represent all decimal fractions.\n\n[CODE]console.log(0.1 + 0.2);           // 0.30000000000000004\nconsole.log(0.1 + 0.2 === 0.3);    // false\n\n// Why this happens\nconsole.log(0.1.toString(2));      // Binary representation is repeating\n// 0.0001100110011001100110011001100110011001100110011001101\n\n// Solutions:\n\n// 1. Use Number.EPSILON for comparisons\nfunction nearlyEqual(a, b) {\n  return Math.abs(a - b) < Number.EPSILON;\n}\nconsole.log(nearlyEqual(0.1 + 0.2, 0.3)); // true\n\n// 2. Round to fixed decimal places\nconst sum = Math.round((0.1 + 0.2) * 10) / 10;\nconsole.log(sum === 0.3);          // true\n\n// 3. Use integers (cents instead of dollars)\nconst price = 10; // cents\nconst tax = 20;   // cents\nconst total = (price + tax) / 100; // convert back to dollars\n\n// 4. Use a decimal library for precision-critical work\n// (like financial calculations)\n\n// More examples of the issue\nconsole.log(0.3 - 0.2);            // 0.09999999999999998\nconsole.log(0.3 - 0.1);            // 0.19999999999999998[/CODE]\n\nThis isn't a JavaScript bug—it's how binary floating-point arithmetic works in all programming languages. For precise decimal arithmetic (like money), use integers or decimal libraries.",
            topic: {
                topics: ["Type Coercion and Conversion"]
            }
        },
        {
            id: 16,
            question: "What is the logical AND assignment operator [CODE]&&=[/CODE] used for?",
            options: {
                A: "Assigns if the left operand is falsy",
                B: "Assigns only if the left operand is truthy",
                C: "Performs bitwise AND",
                D: "Checks for strict equality"
            },
            correct: "B",
            explanation: "The logical AND assignment operator (<pre>&&=</pre>) assigns the right operand only if the left operand is truthy. It short-circuits if the left side is falsy, leaving the variable unchanged.\n\n[CODE]// Basic usage\nlet x = 1;\nx &&= 2;  // x is truthy, so assign: x = 2\n\nlet y = 0;\ny &&= 5;  // y is falsy, no assignment: y stays 0\n\n// Equivalent to:\nlet z = 1;\nif (z) {\n  z = 2;\n}\n// or: z = z && 2;\n\n// Practical examples\nlet user = { name: 'John', age: 30 };\nuser.age &&= user.age + 1;  // Increment only if age exists\n\nlet config = { debug: true };\nconfig.debug &&= 'verbose';  // Update debug to 'verbose' if it was truthy\n\n// Conditional update pattern\nlet data = fetchData();\ndata &&= processData(data);  // Only process if data exists\n\n// Compare with other logical assignment\nlet a = '';\na ||= 'default';  // Assigns because empty string is falsy\na &&= 'updated';  // No assignment because empty string is falsy\na ??= 'null check'; // No assignment because not null/undefined\n\n// Guarded method calls\nlet obj = getObject();\nobj?.property &&= newValue;  // Safe update with optional chaining[/CODE]\n\nUse <pre>&&=</pre> when you want to update a value only if it currently exists and is truthy. Common patterns: conditional updates, guarded transformations, and state management.",
            topic: {
                topics: ["Logical Assignment Operators"]
            }
        },
        {
            id: 17,
            question: "What happens when you use <pre>const</pre> with an object in JavaScript?",
            options: {
                A: "The object and its properties become immutable",
                B: "The variable binding is immutable, but object properties can still be modified",
                C: "The object is frozen automatically",
                D: "<pre>const</pre> doesn't work with objects"
            },
            correct: "B",
            explanation: "<pre>const</pre> creates an immutable binding, but it doesn't make the value itself immutable. For objects, you can't reassign the variable, but you can modify the object's properties.\n\n[CODE]const obj = { name: 'John', age: 30 };\n\n// Modifying properties - ALLOWED\nobj.name = 'Jane';       // Works\nobj.city = 'NYC';        // Works\ndelete obj.age;          // Works\n\nconsole.log(obj);        // { name: 'Jane', city: 'NYC' }\n\n// Reassigning variable - NOT ALLOWED\nobj = { name: 'Bob' };   // TypeError: Assignment to constant variable\n\n// Same behavior with arrays\nconst arr = [1, 2, 3];\narr.push(4);             // Works - [1, 2, 3, 4]\narr[0] = 10;             // Works - [10, 2, 3, 4]\narr = [5, 6];            // TypeError\n\n// To make object immutable, use Object.freeze()\nconst frozen = Object.freeze({ name: 'John' });\nfrozen.name = 'Jane';    // Fails silently (TypeError in strict mode)\nfrozen.age = 30;         // Fails silently\nconsole.log(frozen);     // { name: 'John' } - unchanged\n\n// Deep freeze requires recursion\nfunction deepFreeze(obj) {\n  Object.freeze(obj);\n  Object.values(obj).forEach(value => {\n    if (typeof value === 'object' && value !== null) {\n      deepFreeze(value);\n    }\n  });\n  return obj;\n}[/CODE]\n\nRemember: <pre>const</pre> protects the binding (variable assignment), not the value's mutability. For true immutability, combine <pre>const</pre> with <pre>Object.freeze()</pre>.",
            topic: {
                topics: ["Variable Hoisting and TDZ"]
            }
        },
        {
            id: 18,
            question: "What is the nullish coalescing assignment operator [CODE]??=[/CODE] used for?",
            options: {
                A: "Assigns if left is any falsy value",
                B: "Assigns only if left is <pre>null</pre> or <pre>undefined</pre>",
                C: "Performs null checks",
                D: "Merges objects"
            },
            correct: "B",
            explanation: "The nullish coalescing assignment (<pre>??=</pre>) assigns the right operand only when the left operand is <pre>null</pre> or <pre>undefined</pre>. It doesn't assign for other falsy values like <pre>0</pre>, <pre>''</pre>, or <pre>false</pre>.\n\n[CODE]// Basic usage\nlet value = null;\nvalue ??= 'default';  // Assigns: value = 'default'\n\nlet existing = 'kept';\nexisting ??= 'default';  // No assignment: existing stays 'kept'\n\n// Key difference from ||=\nlet count = 0;\ncount ||= 10;   // Assigns: count = 10 (0 is falsy)\ncount ??= 10;   // No assignment: count stays 0 (0 is not null/undefined)\n\nlet name = '';\nname ||= 'Guest';   // Assigns: name = 'Guest' ('' is falsy)\nname ??= 'Guest';   // No assignment: name stays '' ('' is not null/undefined)\n\n// Practical examples\nfunction setDefaults(options = {}) {\n  options.timeout ??= 5000;      // Only set if null/undefined\n  options.retries ??= 3;\n  options.cache ??= true;\n  return options;\n}\n\nsetDefaults({ timeout: 0 });     // Keeps timeout: 0\nsetDefaults({ retries: null });  // Sets retries: 3\n\n// Configuration merging\nclass Config {\n  #apiUrl;\n  \n  setApiUrl(url) {\n    this.#apiUrl ??= url;  // Only set if not already set\n  }\n}\n\n// Lazy initialization\nlet cache;\nfunction getCache() {\n  cache ??= new Map();  // Create only if needed\n  return cache;\n}[/CODE]\n\nUse <pre>??=</pre> when <pre>0</pre>, <pre>''</pre>, and <pre>false</pre> are valid values that shouldn't be replaced with defaults. Perfect for configuration objects where these falsy values have meaning.",
            topic: {
                topics: ["Logical Assignment Operators", "Optional Chaining and Nullish Coalescing"]
            }
        },
        {
            id: 19,
            question: "What is the difference between a private field [CODE]#field[/CODE] and a convention-based private field [CODE]_field[/CODE]?",
            options: {
                A: "They are the same",
                B: "<pre>#field</pre> is truly private and inaccessible outside the class; <pre>_field</pre> is just a naming convention",
                C: "<pre>_field</pre> is faster",
                D: "<pre>#field</pre> is deprecated"
            },
            correct: "B",
            explanation: "Private fields with <pre>#</pre> provide genuine encapsulation enforced by the language, while <pre>_</pre> prefix is merely a convention that provides no actual privacy.\n\n[CODE]class WithConvention {\n  constructor() {\n    this._private = 'not really private';\n  }\n}\n\nclass WithPrivateField {\n  #private = 'truly private';\n  \n  getPrivate() {\n    return this.#private;\n  }\n}\n\n// Convention-based (weak privacy)\nconst obj1 = new WithConvention();\nconsole.log(obj1._private);     // 'not really private' - accessible!\nobj1._private = 'changed';      // Can be modified\nconsole.log(Object.keys(obj1)); // ['_private'] - enumerable\n\n// True private fields (strong privacy)\nconst obj2 = new WithPrivateField();\nconsole.log(obj2.#private);     // SyntaxError: Private field\nconsole.log(obj2.getPrivate()); // 'truly private' - only via public method\nobj2.#private = 'x';            // SyntaxError\nconsole.log(Object.keys(obj2)); // [] - not enumerable\n\n// Private fields can't be accessed by subclasses\nclass Child extends WithPrivateField {\n  tryAccess() {\n    return this.#private;       // SyntaxError\n  }\n}\n\n// Complete encapsulation example\nclass Counter {\n  #count = 0;\n  #maxCount;\n  \n  constructor(max) {\n    this.#maxCount = max;\n  }\n  \n  increment() {\n    if (this.#count < this.#maxCount) {\n      this.#count++;\n      return true;\n    }\n    return false;\n  }\n  \n  get value() {\n    return this.#count;\n  }\n  \n  // Private method\n  #reset() {\n    this.#count = 0;\n  }\n}[/CODE]\n\nUse <pre>#</pre> private fields when you need actual encapsulation for security, API stability, or internal invariants. Use <pre>_</pre> convention for backwards compatibility or when privacy isn't critical.",
            topic: {
                topics: ["Private Class Fields and Methods"]
            }
        },
        {
            id: 20,
            question: "What is the result of [CODE]typeof typeof 42[/CODE]?",
            options: {
                A: "<pre>\"number\"</pre>",
                B: "<pre>\"string\"</pre>",
                C: "<pre>\"undefined\"</pre>",
                D: "<pre>\"object\"</pre>"
            },
            correct: "B",
            explanation: "The expression <pre>typeof typeof 42</pre> evaluates to <pre>\"string\"</pre> because <pre>typeof</pre> always returns a string, and the <pre>typeof</pre> of any string is <pre>\"string\"</pre>.\n\n[CODE]// Breaking it down:\nconsole.log(typeof 42);            // \"number\" (a string)\nconsole.log(typeof \"number\");     // \"string\"\nconsole.log(typeof typeof 42);    // \"string\"\n\n// More examples of typeof returning strings\nconsole.log(typeof typeof 'hello');  // \"string\"\nconsole.log(typeof typeof true);     // \"string\"\nconsole.log(typeof typeof undefined);// \"string\"\nconsole.log(typeof typeof null);     // \"string\"\nconsole.log(typeof typeof {});       // \"string\"\n\n// All typeof results\nconst types = [\n  typeof undefined,    // \"undefined\"\n  typeof true,        // \"boolean\"\n  typeof 42,          // \"number\"\n  typeof 42n,         // \"bigint\"\n  typeof 'text',      // \"string\"\n  typeof Symbol(),    // \"symbol\"\n  typeof {},          // \"object\"\n  typeof [],          // \"object\"\n  typeof null,        // \"object\" (quirk)\n  typeof (() => {}),  // \"function\"\n];\n\nconsole.log(types.every(t => typeof t === 'string')); // true\n\n// Practical use: validating types\nfunction isType(value, expectedType) {\n  return typeof value === expectedType;\n}\n\nconsole.log(isType(42, 'number'));    // true\nconsole.log(isType('hi', 'string'));  // true[/CODE]\n\nThe <pre>typeof</pre> operator always returns one of these string values: <pre>\"undefined\"</pre>, <pre>\"boolean\"</pre>, <pre>\"number\"</pre>, <pre>\"bigint\"</pre>, <pre>\"string\"</pre>, <pre>\"symbol\"</pre>, <pre>\"function\"</pre>, or <pre>\"object\"</pre>.",
            topic: {
                topics: ["Type Coercion and Conversion"]
            }
        },
        {
            id: 21,
            question: "Can you mix BigInt and regular numbers in arithmetic operations?",
            options: {
                A: "Yes, they automatically convert",
                B: "No, it throws a TypeError",
                C: "Only in addition and subtraction",
                D: "Yes, but with precision loss"
            },
            correct: "B",
            explanation: "JavaScript does not allow mixing BigInt and regular numbers in arithmetic operations. You must explicitly convert between types to perform operations, preventing accidental precision loss.\n\n[CODE]// Direct mixing throws TypeError\nconst big = 100n;\nconst num = 50;\n\nconsole.log(big + num);     // TypeError: Cannot mix BigInt and other types\nconsole.log(big * num);     // TypeError\nconsole.log(big - num);     // TypeError\n\n// Must explicitly convert\nconsole.log(big + BigInt(num));     // 150n\nconsole.log(Number(big) + num);     // 150 (may lose precision if big is large)\n\n// Conversion functions\nconst fromNumber = BigInt(123);     // 123n\nconst toString = big.toString();    // \"100\"\nconst toNumber = Number(big);       // 100 (dangerous for large values!)\n\n// Comparisons work across types\nconsole.log(100n > 50);             // true\nconsole.log(100n == 100);           // true (loose equality, type coercion)\nconsole.log(100n === 100);          // false (strict equality, different types)\n\n// Safe number conversion check\nfunction safeToBigInt(num) {\n  if (!Number.isSafeInteger(num)) {\n    throw new Error('Number not safe for conversion');\n  }\n  return BigInt(num);\n}\n\n// Use case: handling both types\nfunction add(a, b) {\n  const isBigInt = typeof a === 'bigint' || typeof b === 'bigint';\n  if (isBigInt) {\n    return BigInt(a) + BigInt(b);\n  }\n  return a + b;\n}[/CODE]\n\nThis restriction prevents subtle bugs from automatic conversion. Always be explicit about conversions, especially when dealing with values near <pre>Number.MAX_SAFE_INTEGER</pre>.",
            topic: {
                topics: ["BigInt and Numeric Operations"]
            }
        },
        {
            id: 22,
            question: "What happens when you access a private field from outside its class using bracket notation?",
            options: {
                A: "It returns <pre>undefined</pre>",
                B: "It's a SyntaxError caught at parse time",
                C: "It throws a ReferenceError at runtime",
                D: "It works normally"
            },
            correct: "B",
            explanation: "Attempting to access private fields from outside the class is a syntax error detected during parsing, not a runtime error. The <pre>#</pre> syntax is part of the class field declaration grammar.\n\n[CODE]class MyClass {\n  #privateField = 42;\n  \n  getPrivate() {\n    return this.#privateField;  // OK inside class\n  }\n}\n\nconst obj = new MyClass();\n\n// These are all syntax errors (caught at parse time)\nconsole.log(obj.#privateField);     // SyntaxError\nconsole.log(obj['#privateField']);  // SyntaxError\nconst key = '#privateField';\nconsole.log(obj[key]);              // SyntaxError\n\n// Cannot access via Object methods\nconsole.log(Object.keys(obj));              // []\nconsole.log(Object.getOwnPropertyNames(obj)); // []\nconsole.log(JSON.stringify(obj));           // {}\n\n// Cannot use Reflect\nReflect.get(obj, '#privateField');  // SyntaxError\n\n// Cannot use in..operator\n'#privateField' in obj;             // SyntaxError\n\n// Private fields are truly private - no workarounds\n// Only accessible through public methods\nconsole.log(obj.getPrivate());      // 42 - works!\n\n// Even Proxy can't intercept private fields\nconst proxy = new Proxy(obj, {\n  get(target, prop) {\n    console.log('Accessing:', prop);\n    return target[prop];\n  }\n});\nproxy.getPrivate(); // Works, but private field access happens in class context[/CODE]\n\nPrivate fields use a distinct syntax (<pre>#name</pre>) that's part of the class definition, not a property name. This ensures true encapsulation enforced at the language level.",
            topic: {
                topics: ["Private Class Fields and Methods"]
            }
        },
        {
            id: 23,
            question: "What is the purpose of <pre>Number.isFinite()</pre> vs the global <pre>isFinite()</pre>?",
            options: {
                A: "They are identical",
                B: "<pre>Number.isFinite()</pre> doesn't coerce non-numbers; global <pre>isFinite()</pre> does",
                C: "<pre>Number.isFinite()</pre> is deprecated",
                D: "Global <pre>isFinite()</pre> is more accurate"
            },
            correct: "B",
            explanation: "<pre>Number.isFinite()</pre> is more strict—it returns <pre>true</pre> only for actual finite numbers without type coercion. The global <pre>isFinite()</pre> coerces values to numbers first, which can lead to unexpected results.\n\n[CODE]// Number.isFinite() - no coercion, more strict\nconsole.log(Number.isFinite(123));       // true\nconsole.log(Number.isFinite(Infinity));  // false\nconsole.log(Number.isFinite(NaN));       // false\nconsole.log(Number.isFinite('123'));     // false (string, not coerced)\nconsole.log(Number.isFinite(null));      // false (not a number)\nconsole.log(Number.isFinite(true));      // false (not a number)\n\n// Global isFinite() - coerces to number first\nconsole.log(isFinite(123));              // true\nconsole.log(isFinite(Infinity));         // false\nconsole.log(isFinite(NaN));              // false\nconsole.log(isFinite('123'));            // true (coerced to 123)\nconsole.log(isFinite(null));             // true (coerced to 0)\nconsole.log(isFinite(true));             // true (coerced to 1)\n\n// Similar difference with Number.isNaN() vs isNaN()\nconsole.log(Number.isNaN('hello'));      // false (not actually NaN)\nconsole.log(isNaN('hello'));             // true (coerced to NaN)\n\n// Practical use: validation without surprises\nfunction validateNumber(value) {\n  if (!Number.isFinite(value)) {\n    throw new Error('Expected a finite number');\n  }\n  return value;\n}\n\nvalidateNumber(42);        // OK\nvalidateNumber('42');      // Error (strict checking)\nvalidateNumber(Infinity);  // Error\nvalidateNumber(NaN);       // Error\n\n// Best practice: prefer Number.isFinite() and Number.isNaN()\n// They don't have coercion surprises[/CODE]\n\nAlways use <pre>Number.isFinite()</pre>, <pre>Number.isNaN()</pre>, and <pre>Number.isInteger()</pre> instead of their global counterparts for predictable, type-safe checks.",
            topic: {
                topics: ["Type Coercion and Conversion"]
            }
        },
        {
            id: 24,
            question: "How does optional chaining [CODE]?.[/CODE] interact with function calls?",
            options: {
                A: "It cannot be used with functions",
                B: "It safely calls functions and returns <pre>undefined</pre> if the function doesn't exist",
                C: "It always throws an error",
                D: "It only works with object properties"
            },
            correct: "B",
            explanation: "Optional chaining works with function calls using the <pre>?.()</pre> syntax. If the function doesn't exist or the object is <pre>null</pre>/<pre>undefined</pre>, it returns <pre>undefined</pre> instead of throwing an error.\n\n[CODE]// Without optional chaining - risky\nconst result = obj.method();  // Error if obj.method doesn't exist\n\n// With optional chaining - safe\nconst result = obj.method?.();  // undefined if method doesn't exist\n\n// Practical examples\nconst user = {\n  name: 'John',\n  greet: function() {\n    return `Hello, ${this.name}`;\n  }\n};\n\nconsole.log(user.greet?.());      // \"Hello, John\"\nconsole.log(user.farewell?.());   // undefined (method doesn't exist)\n\n// With callbacks\nconst config = {\n  onSuccess: (data) => console.log('Success:', data)\n};\n\nconfig.onSuccess?.('Data loaded');  // Logs: \"Success: Data loaded\"\nconfig.onError?.('Failed');         // Does nothing (onError doesn't exist)\n\n// API response handling\nconst api = {\n  users: {\n    getById: (id) => ({ id, name: 'John' })\n  }\n};\n\nconst user1 = api.users?.getById?.(1);    // { id: 1, name: 'John' }\nconst admin = api.admin?.getById?.(1);    // undefined (admin doesn't exist)\n\n// Event handlers\nconst button = document.querySelector('#missing-button');\nbutton?.addEventListener?.('click', handler);  // Safe, does nothing if button is null\n\n// Combining with nullish coalescing\nconst data = fetchData();\nconst processed = data?.process?.() ?? 'default value';[/CODE]\n\nThis pattern is especially useful for optional callbacks, plugin APIs, polyfills, or any situation where a method might not be available.",
            topic: {
                topics: ["Optional Chaining and Nullish Coalescing"]
            }
        },
        {
            id: 25,
            question: "What is the difference between [CODE]Number('123')[/CODE] and [CODE]parseInt('123')[/CODE]?",
            options: {
                A: "They are identical",
                B: "<pre>Number()</pre> is strict and rejects invalid formats; <pre>parseInt()</pre> parses until invalid character",
                C: "<pre>parseInt()</pre> is more accurate",
                D: "<pre>Number()</pre> only works with integers"
            },
            correct: "B",
            explanation: "<pre>Number()</pre> attempts to convert the entire string to a number and returns <pre>NaN</pre> if any part is invalid. <pre>parseInt()</pre> parses from the beginning until it hits an invalid character, potentially returning a partial result.\n\n[CODE]// Pure numbers - same result\nconsole.log(Number('123'));        // 123\nconsole.log(parseInt('123'));      // 123\n\n// Decimals - different behavior\nconsole.log(Number('123.45'));     // 123.45\nconsole.log(parseInt('123.45'));   // 123 (stops at decimal)\n\n// Whitespace - both handle it\nconsole.log(Number('  123  '));    // 123\nconsole.log(parseInt('  123  '));  // 123\n\n// Mixed content - key difference\nconsole.log(Number('123abc'));     // NaN (entire string is invalid)\nconsole.log(parseInt('123abc'));   // 123 (parses until 'a')\n\nconsole.log(Number('123.45.67'));  // NaN\nconsole.log(parseInt('123.45.67')); // 123\n\n// Hexadecimal\nconsole.log(Number('0x10'));       // 16\nconsole.log(parseInt('0x10'));     // 16\nconsole.log(parseInt('10', 16));   // 16 (explicit radix)\n\n// Binary and octal\nconsole.log(Number('0b1010'));     // 10\nconsole.log(parseInt('0b1010'));   // 0 (stops at 'b')\nconsole.log(parseInt('1010', 2));  // 10 (binary with radix)\n\n// Empty strings\nconsole.log(Number(''));           // 0\nconsole.log(parseInt(''));         // NaN\n\n// Best practices\nconst strictNum = Number(input);   // Use for full validation\nconst partialNum = parseInt(input, 10); // Always specify radix!\n\n// For decimals, use parseFloat\nconsole.log(parseFloat('123.45')); // 123.45\nconsole.log(parseFloat('123.45abc')); // 123.45[/CODE]\n\nUse <pre>Number()</pre> when you need strict validation. Use <pre>parseInt(radix)</pre> with an explicit radix when you want to extract integers from strings that might contain extra characters. Always specify the radix (base) to avoid confusion!",
            topic: {
                topics: ["Type Coercion and Conversion"]
            }
        }
    ]
};
