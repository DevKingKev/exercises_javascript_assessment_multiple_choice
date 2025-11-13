module.exports = {
  "metadata": {
    "title": "JavaScript Functions & Scope",
    "description": "Deep dive into JavaScript function concepts including declarations, expressions, arrow functions, parameters, return values, scope chains, closures, and the 'this' keyword. Understanding these concepts is fundamental to mastering JavaScript and building robust applications with proper encapsulation and data flow.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Function declarations and expressions",
      "Arrow functions and syntax",
      "Function parameters and arguments",
      "Return statements and values",
      "Scope and scope chain",
      "Closures basics",
      "The 'this' keyword"
    ],
    "topicLinks": [
      {
        "topicName": "Function declarations and expressions",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
      },
      {
        "topicName": "Arrow functions and syntax",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
      },
      {
        "topicName": "Function parameters and arguments",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters"
      },
      {
        "topicName": "Return statements and values",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return"
      },
      {
        "topicName": "Scope and scope chain",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
      },
      {
        "topicName": "Closures basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
      },
      {
        "topicName": "The 'this' keyword",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
      }
    ],
    "assessmentId": 7,
    "assessmentUniqueId": 1762263745317,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the difference between a function declaration and a function expression?",
      "options": {
        "A": "No difference",
        "B": "Declarations are hoisted, expressions are not",
        "C": "Expressions are faster",
        "D": "Declarations cannot have names"
      },
      "correct": "B",
      "explanation": "Function declarations are hoisted (can be called before they're defined in the code), while function expressions are not hoisted. This is an important behavioral difference.",
      "topic": {
        "topics": [
          "Function declarations and expressions",
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 2,
      "question": "What does the following function return?\n\n[CODE]\nfunction test() {\n    return;\n    'unreachable';\n}\n[/CODE]",
      "options": {
        "A": "undefined",
        "B": "Error",
        "C": "null",
        "D": "'unreachable'"
      },
      "correct": "A",
      "explanation": "A return statement without a value returns undefined. The code after return is never executed (dead code).",
      "topic": {
        "topics": [
          "Return statements and values",
          "Function declarations and expressions"
        ]
      }
    },
    {
      "id": 3,
      "question": "How many parameters does this arrow function have?\n\n[CODE]\n(a, b, c = 10) => a + b + c\n[/CODE]",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "It's invalid syntax"
      },
      "correct": "B",
      "explanation": "The function has three parameters: a, b, and c. The parameter c has a default value of 10, but it's still counted as a parameter.",
      "topic": {
        "topics": [
          "Arrow functions and syntax",
          "Function parameters and arguments"
        ]
      }
    },
    {
      "id": 4,
      "question": "What will this code output?\n\n[CODE]\nfunction outer() {\n    let x = 10;\n    function inner() {\n        console.log(x);\n    }\n    return inner;\n}\nconst fn = outer();\nfn();\n[/CODE]",
      "options": {
        "A": "10",
        "B": "undefined",
        "C": "Error",
        "D": "null"
      },
      "correct": "A",
      "explanation": "This demonstrates a closure. The inner function maintains access to the outer function's variables even after the outer function has returned. It prints 10.",
      "topic": {
        "topics": [
          "Closures basics",
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the value of 'this' in an arrow function?",
      "options": {
        "A": "The global object",
        "B": "The function itself",
        "C": "undefined",
        "D": "Inherited from enclosing scope"
      },
      "correct": "D",
      "explanation": "Arrow functions don't have their own 'this' binding. They inherit 'this' from the enclosing lexical scope, which is different from regular functions.",
      "topic": {
        "topics": [
          "Arrow functions and syntax",
          "The 'this' keyword"
        ]
      }
    },
    {
      "id": 6,
      "question": "What happens when you call a function with more arguments than parameters?",
      "options": {
        "A": "Error",
        "B": "Extra arguments are ignored",
        "C": "Extra arguments are accessible via arguments object",
        "D": "Both B and C"
      },
      "correct": "D",
      "explanation": "JavaScript allows calling functions with any number of arguments. Extra arguments are ignored by named parameters but can be accessed through the arguments object in regular functions.",
      "topic": {
        "topics": [
          "Function parameters and arguments"
        ]
      }
    },
    {
      "id": 7,
      "question": "What does this function return?\n\n[CODE]\nconst add = (a, b) => { a + b };\nadd(2, 3);\n[/CODE]",
      "options": {
        "A": "undefined",
        "B": "5",
        "C": "{ a + b }",
        "D": "Error"
      },
      "correct": "A",
      "explanation": "The curly braces create a function body that requires an explicit return statement. Without it, the function returns undefined. Use parentheses () or remove braces for implicit return.",
      "topic": {
        "topics": [
          "Arrow functions and syntax",
          "Return statements and values"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which statement about scope is correct?",
      "options": {
        "A": "var has block scope",
        "B": "All variables are global",
        "C": "let has function scope",
        "D": "const has block scope"
      },
      "correct": "D",
      "explanation": "const (and let) have block scope, meaning they're only accessible within the block where they're defined. var has function scope, not block scope.",
      "topic": {
        "topics": [
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 9,
      "question": "What will this code output?\n\n[CODE]\nfunction test() {\n    console.log(a);\n    var a = 5;\n}\ntest();\n[/CODE]",
      "options": {
        "A": "5",
        "B": "Error",
        "C": "null",
        "D": "undefined"
      },
      "correct": "D",
      "explanation": "Due to hoisting, var declarations are moved to the top of their scope, but not their assignments. So 'a' is declared but undefined at the console.log.",
      "topic": {
        "topics": [
          "Scope and scope chain",
          "Function declarations and expressions"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which is a valid arrow function with no parameters?",
      "options": {
        "A": "=> { return 5; }",
        "B": "() => 5",
        "C": "_ => 5",
        "D": "Both B and C"
      },
      "correct": "D",
      "explanation": "Both () => 5 and _ => 5 are valid. Empty parentheses or a single underscore (by convention) can represent no parameters. Option A is invalid syntax.",
      "topic": {
        "topics": [
          "Arrow functions and syntax",
          "Function parameters and arguments"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is a closure in JavaScript?",
      "options": {
        "A": "A function that closes the program",
        "B": "A closed block of code",
        "C": "A function with access to its outer scope variables",
        "D": "A private method"
      },
      "correct": "C",
      "explanation": "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. This is a powerful JavaScript feature.",
      "topic": {
        "topics": [
          "Closures basics",
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 12,
      "question": "What does a function return if there's no return statement?",
      "options": {
        "A": "null",
        "B": "0",
        "C": "undefined",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "Functions without an explicit return statement automatically return undefined. This is JavaScript's default behavior.",
      "topic": {
        "topics": [
          "Return statements and values"
        ]
      }
    },
    {
      "id": 13,
      "question": "What will this code output?\n\n[CODE]\nlet x = 1;\nfunction test() {\n    console.log(x);\n    let x = 2;\n}\ntest();\n[/CODE]",
      "options": {
        "A": "1",
        "B": "2",
        "C": "ReferenceError",
        "D": "undefined"
      },
      "correct": "C",
      "explanation": "This triggers the Temporal Dead Zone. The local x is hoisted but not initialized, and accessing it before the let statement causes a ReferenceError.",
      "topic": {
        "topics": [
          "Scope and scope chain",
          "Function declarations and expressions"
        ]
      }
    },
    {
      "id": 14,
      "question": "Which is the correct syntax for default parameters?",
      "options": {
        "A": "function test(a: 5, b: 10) {}",
        "B": "function test(a || 5, b || 10) {}",
        "C": "function test(a := 5, b := 10) {}",
        "D": "function test(a = 5, b = 10) {}"
      },
      "correct": "D",
      "explanation": "ES6 default parameters use the syntax parameter = defaultValue. This sets a default value if the argument is undefined or not provided.",
      "topic": {
        "topics": [
          "Function parameters and arguments"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is 'this' in a regular function called without context?",
      "options": {
        "A": "undefined (in strict mode)",
        "B": "The function itself",
        "C": "null",
        "D": "Empty object"
      },
      "correct": "A",
      "explanation": "In strict mode, 'this' is undefined when a function is called without context. In non-strict mode, it defaults to the global object (window in browsers).",
      "topic": {
        "topics": [
          "The 'this' keyword",
          "Function declarations and expressions"
        ]
      }
    },
    {
      "id": 16,
      "question": "What will this code output?\n\n[CODE]\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 0);\n}\n[/CODE]",
      "options": {
        "A": "0 1 2",
        "B": "Error",
        "C": "undefined undefined undefined",
        "D": "3 3 3"
      },
      "correct": "D",
      "explanation": "var has function scope, so all callbacks share the same i. By the time they execute, the loop has finished and i is 3. Using let instead would print 0 1 2.",
      "topic": {
        "topics": [
          "Closures basics",
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 17,
      "question": "Which function syntax allows implicit return?",
      "options": {
        "A": "function() { value }",
        "B": "function() => value",
        "C": "() => value",
        "D": "None of the above"
      },
      "correct": "C",
      "explanation": "Arrow functions without curly braces have implicit return. The expression after => is automatically returned without needing the return keyword.",
      "topic": {
        "topics": [
          "Arrow functions and syntax",
          "Return statements and values"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the scope of a variable declared with let inside a function?",
      "options": {
        "A": "Function scope",
        "B": "Block scope",
        "C": "Global scope",
        "D": "Module scope"
      },
      "correct": "B",
      "explanation": "Variables declared with let have block scope. They're only accessible within the block (including function blocks) where they're declared.",
      "topic": {
        "topics": [
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does the rest parameter (...args) collect?",
      "options": {
        "A": "All arguments as an array",
        "B": "Remaining arguments as an array",
        "C": "First argument only",
        "D": "No arguments"
      },
      "correct": "B",
      "explanation": "The rest parameter collects all remaining arguments into an array. It must be the last parameter and is prefixed with three dots.",
      "topic": {
        "topics": [
          "Function parameters and arguments"
        ]
      }
    },
    {
      "id": 20,
      "question": "What will this code output?\n\n[CODE]\nfunction outer() {\n    return function inner() {\n        return 'hello';\n    };\n}\nconsole.log(outer()());\n[/CODE]",
      "options": {
        "A": "function inner() { return 'hello'; }",
        "B": "Error",
        "C": "'hello'",
        "D": "undefined"
      },
      "correct": "C",
      "explanation": "outer() returns the inner function. outer()() calls outer first (returning inner), then immediately calls inner (returning 'hello').",
      "topic": {
        "topics": [
          "Function declarations and expressions",
          "Return statements and values"
        ]
      }
    },
    {
      "id": 21,
      "question": "Which method can you use to change the value of 'this' when calling a function?",
      "options": {
        "A": "call()",
        "B": "apply()",
        "C": "bind()",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All three methods can change 'this' context: call() and apply() invoke the function immediately, while bind() returns a new function with the bound context.",
      "topic": {
        "topics": [
          "The 'this' keyword"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the output of this code?\n\n[CODE]\nconst multiply = (x) => (y) => x * y;\nconst double = multiply(2);\nconsole.log(double(5));\n[/CODE]",
      "options": {
        "A": "7",
        "B": "undefined",
        "C": "10",
        "D": "Error"
      },
      "correct": "C",
      "explanation": "This is currying. multiply(2) returns a function that multiplies by 2. double(5) then multiplies 2 * 5 = 10.",
      "topic": {
        "topics": [
          "Arrow functions and syntax",
          "Closures basics"
        ]
      }
    },
    {
      "id": 23,
      "question": "What happens when you try to reassign a function parameter declared with const?",
      "options": {
        "A": "Parameters cannot use const",
        "B": "Error",
        "C": "Parameter is reassigned",
        "D": "undefined"
      },
      "correct": "A",
      "explanation": "Function parameters cannot be declared with const, let, or var. They are implicitly declared and behave similarly to let in terms of scope.",
      "topic": {
        "topics": [
          "Function parameters and arguments",
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 24,
      "question": "What does this function return?\n\n[CODE]\nfunction test() {\n    return\n    {\n        value: 42\n    };\n}\n[/CODE]",
      "options": {
        "A": "{ value: 42 }",
        "B": "Error",
        "C": "42",
        "D": "undefined"
      },
      "correct": "D",
      "explanation": "JavaScript automatically inserts a semicolon after 'return', making it 'return;' which returns undefined. Always put the opening brace on the same line as return.",
      "topic": {
        "topics": [
          "Return statements and values"
        ]
      }
    },
    {
      "id": 25,
      "question": "Which creates a function that remembers its creation environment?",
      "options": {
        "A": "Anonymous function",
        "B": "Arrow function",
        "C": "Regular function",
        "D": "Closure"
      },
      "correct": "D",
      "explanation": "A closure is a function that remembers and can access variables from its outer (enclosing) scope, even after the outer function has finished executing.",
      "topic": {
        "topics": [
          "Closures basics",
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is the difference between call() and apply()?",
      "options": {
        "A": "No difference",
        "B": "call() takes arguments separately, apply() takes an array",
        "C": "apply() is faster",
        "D": "call() cannot change 'this'"
      },
      "correct": "B",
      "explanation": "Both change 'this' context, but call() takes arguments individually: func.call(thisArg, arg1, arg2), while apply() takes an array: func.apply(thisArg, [arg1, arg2]).",
      "topic": {
        "topics": [
          "The 'this' keyword",
          "Function parameters and arguments"
        ]
      }
    },
    {
      "id": 27,
      "question": "What will this code output?\n\n[CODE]\nconst obj = {\n    x: 10,\n    getX: function() { return this.x; }\n};\nconst fn = obj.getX;\nconsole.log(fn());\n[/CODE]",
      "options": {
        "A": "10",
        "B": "undefined",
        "C": "Error",
        "D": "null"
      },
      "correct": "B",
      "explanation": "When the method is assigned to a variable and called separately, it loses its 'this' binding. 'this' becomes undefined (strict mode) or the global object.",
      "topic": {
        "topics": [
          "The 'this' keyword",
          "Function declarations and expressions"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which is a valid immediately invoked function expression (IIFE)?",
      "options": {
        "A": "function hi() { console.log('hi'); }()",
        "B": "function() { console.log('hi'); }()",
        "C": "(function() { console.log('hi'); }",
        "D": "(function() { console.log('hi'); })()"
      },
      "correct": "D",
      "explanation": "An IIFE requires the function to be wrapped in parentheses to make it an expression, followed by () to immediately invoke it.",
      "topic": {
        "topics": [
          "Function declarations and expressions",
          "Scope and scope chain"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is a higher-order function?",
      "options": {
        "A": "A function that takes or returns another function",
        "B": "A complex function",
        "C": "A function with many parameters",
        "D": "A function defined at a high scope level"
      },
      "correct": "A",
      "explanation": "A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result. Examples include map(), filter(), and reduce().",
      "topic": {
        "topics": [
          "Function declarations and expressions"
        ]
      }
    },
    {
      "id": 30,
      "question": "What does bind() return?",
      "options": {
        "B": "The result of calling the function",
        "C": "undefined",
        "D": "The original function modified",
        "undefined": "A new function with bound 'this' context"
      },
      "explanation": "bind() returns a new function with a permanently bound 'this' value and optionally pre-filled arguments. The original function is not modified.",
      "topic": {
        "topics": [
          "The 'this' keyword",
          "Function declarations and expressions"
        ]
      }
    }
  ]
}
