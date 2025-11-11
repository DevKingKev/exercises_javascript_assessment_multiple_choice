module.exports = {
  "metadata": {
    "title": "JavaScript Promises and Async/Await Basics",
    "description": "Fundamental concepts of Promises, async/await syntax, and basic asynchronous programming patterns in JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Promise basics",
      "Async function syntax",
      "Await keyword",
      "Promise resolution",
      "Error handling basics",
      "Execution order",
      "Simple async patterns"
    ],
    "topicLinks": [
      {
        "topicName": "Promise basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
      },
      {
        "topicName": "Async function syntax",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
      },
      {
        "topicName": "Await keyword",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"
      },
      {
        "topicName": "Promise resolution",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"
      },
      {
        "topicName": "Error handling basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"
      },
      {
        "topicName": "Execution order",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
      },
      {
        "topicName": "Simple async patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises"
      }
    ],
    "assessmentId": 24,
    "assessmentUniqueId": 1762735386492,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What does the <pre>async</pre> keyword do when placed before a function?",
      "options": {
        "A": "Makes the function run faster",
        "B": "Makes the function always return a Promise",
        "C": "Prevents the function from throwing errors",
        "D": "Makes the function synchronous"
      },
      "correct": "B",
      "explanation": "The <pre>async</pre> keyword automatically wraps the function's return value in a Promise. Even if you return a regular value, it becomes a resolved Promise.",
      "topic": {
        "topics": [
          "Async function syntax"
        ]
      }
    },
    {
      "id": 2,
      "question": "What does <pre>Promise.resolve(5)</pre> return?",
      "options": {
        "A": "The number 5",
        "B": "A Promise that resolves to 5",
        "C": "A rejected Promise",
        "D": "An error"
      },
      "correct": "B",
      "explanation": "<pre>Promise.resolve()</pre> creates a Promise that is immediately resolved with the given value. So <pre>Promise.resolve(5)</pre> returns a Promise that resolves to 5.",
      "topic": {
        "topics": [
          "Promise resolution"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the purpose of the <pre>await</pre> keyword?",
      "options": {
        "A": "To make code run faster",
        "B": "To create a new Promise",
        "C": "To handle Promise rejections",
        "D": "To pause execution until a Promise settles"
      },
      "correct": "D",
      "explanation": "The <pre>await</pre> keyword can only be used inside async functions and pauses the execution until the Promise is settled (either resolved or rejected).",
      "topic": {
        "topics": [
          "Await keyword"
        ]
      }
    },
    {
      "id": 4,
      "question": "What will this code log? [CODE]async function test() {\n  return 'hello';\n}\ntest().then(console.log);[/CODE]",
      "options": {
        "A": "<pre>Promise {'hello'}</pre>",
        "B": "<pre>'hello'</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Nothing"
      },
      "correct": "B",
      "explanation": "Async functions always return Promises. The value 'hello' is automatically wrapped in a resolved Promise, which then passes 'hello' to the <pre>then</pre> callback.",
      "topic": {
        "topics": [
          "Async function syntax"
        ]
      }
    },
    {
      "id": 5,
      "question": "What does <pre>Promise.reject('error')</pre> return?",
      "options": {
        "A": "Returns 'error'",
        "B": "A Promise that resolves with 'error'",
        "C": "Throws an error immediately",
        "D": "A Promise that rejects with 'error'"
      },
      "correct": "D",
      "explanation": "<pre>Promise.reject()</pre> creates a Promise that is immediately rejected with the given reason. The rejection can be caught with <pre>catch()</pre> or <pre>try/catch</pre> with await.",
      "topic": {
        "topics": [
          "Promise resolution"
        ]
      }
    },
    {
      "id": 6,
      "question": "What will be logged first? [CODE]console.log('A');\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');[/CODE]",
      "options": {
        "A": "Nothing",
        "B": "<pre>B</pre>",
        "C": "<pre>C</pre>",
        "D": "<pre>A</pre>"
      },
      "correct": "D",
      "explanation": "Even with 0 delay, <pre>setTimeout</pre> callbacks go to the task queue and execute after synchronous code. So the order is A, C, B.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 7,
      "question": "How do you handle errors in a Promise chain?",
      "options": {
        "A": "Using <pre>.catch()</pre> method",
        "B": "Using <pre>.error()</pre> method",
        "C": "Using <pre>.finally()</pre> method",
        "D": "Using <pre>.then()</pre> with two arguments"
      },
      "correct": "A",
      "explanation": "The <pre>.catch()</pre> method is used to handle any rejections that occur in the Promise chain. It catches errors from any previous <pre>.then()</pre> in the chain.",
      "topic": {
        "topics": [
          "Error handling basics"
        ]
      }
    },
    {
      "id": 8,
      "question": "What does this code return? [CODE]async function getValue() {\n  await Promise.resolve(10);\n  return 20;\n}[/CODE]",
      "options": {
        "A": "The number 20",
        "B": "A Promise that resolves to 20",
        "C": "A Promise that resolves to 10",
        "D": "undefined"
      },
      "correct": "B",
      "explanation": "Async functions always return Promises. The function waits for the first Promise, then returns 20, which becomes the resolved value of the returned Promise.",
      "topic": {
        "topics": [
          "Async function syntax"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the state of a new Promise that hasn't settled yet?",
      "options": {
        "A": "Resolved",
        "B": "Pending",
        "C": "Rejected",
        "D": "Fulfilled"
      },
      "correct": "B",
      "explanation": "A Promise can be in one of three states: pending (not settled yet), fulfilled (resolved successfully), or rejected (resolved with an error).",
      "topic": {
        "topics": [
          "Promise basics"
        ]
      }
    },
    {
      "id": 10,
      "question": "What will this code log? [CODE]Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => console.log(x));[/CODE]",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>1</pre>",
        "C": "<pre>2</pre>",
        "D": "Nothing"
      },
      "correct": "C",
      "explanation": "The Promise resolves to 1, the first <pre>then</pre> adds 1 to get 2, and the second <pre>then</pre> logs 2.",
      "topic": {
        "topics": [
          "Promise basics"
        ]
      }
    },
    {
      "id": 11,
      "question": "Can you use <pre>await</pre> outside of an async function?",
      "options": {
        "A": "No, it will cause a syntax error",
        "B": "Yes, anywhere in the code",
        "C": "Only in module scope",
        "D": "Only in arrow functions"
      },
      "correct": "A",
      "explanation": "The <pre>await</pre> keyword can only be used inside functions declared with <pre>async</pre>. Using it elsewhere results in a syntax error.",
      "topic": {
        "topics": [
          "Await keyword"
        ]
      }
    },
    {
      "id": 12,
      "question": "What does <pre>.finally()</pre> do in a Promise chain?",
      "options": {
        "A": "Only runs if the Promise rejects",
        "B": "Only runs if the Promise resolves",
        "C": "Runs regardless of resolution or rejection",
        "D": "Stops the Promise chain"
      },
      "correct": "C",
      "explanation": "The <pre>.finally()</pre> method executes a callback regardless of whether the Promise was fulfilled or rejected. It's useful for cleanup operations.",
      "topic": {
        "topics": [
          "Promise basics"
        ]
      }
    },
    {
      "id": 13,
      "question": "What will this code log? [CODE]async function test() {\n  const result = await Promise.resolve('done');\n  console.log(result);\n}\ntest();[/CODE]",
      "options": {
        "A": "<pre>'done'</pre>",
        "B": "<pre>Promise {'done'}</pre>",
        "C": "<pre>undefined</pre>",
        "D": "Nothing"
      },
      "correct": "A",
      "explanation": "The <pre>await</pre> keyword unwraps the Promise value, so <pre>result</pre> becomes 'done', which is then logged.",
      "topic": {
        "topics": [
          "Await keyword"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the correct way to create a Promise that resolves after 1 second?",
      "options": {
        "A": "<pre>Promise.resolve(setTimeout(1000))</pre>",
        "B": "<pre>new Promise(resolve => setTimeout(resolve, 1000))</pre>",
        "C": "<pre>setTimeout(Promise.resolve, 1000)</pre>",
        "D": "<pre>Promise.delay(1000)</pre>"
      },
      "correct": "B",
      "explanation": "The Promise constructor takes an executor function that receives <pre>resolve</pre> and <pre>reject</pre> functions. We call <pre>resolve</pre> inside the setTimeout to resolve after 1 second.",
      "topic": {
        "topics": [
          "Promise basics"
        ]
      }
    },
    {
      "id": 15,
      "question": "What will be the execution order? [CODE]console.log('1');\nasync function run() {\n  console.log('2');\n  await Promise.resolve();\n  console.log('3');\n}\nrun();\nconsole.log('4');[/CODE]",
      "options": {
        "A": "<pre>2, 1, 3, 4</pre>",
        "B": "<pre>1, 2, 3, 4</pre>",
        "C": "<pre>1, 2, 4, 3</pre>",
        "D": "<pre>1, 4, 2, 3</pre>"
      },
      "correct": "C",
      "explanation": "1 and 2 log synchronously. The await pauses the async function, so 4 logs next. Then the microtask (await) runs and 3 logs last.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 16,
      "question": "How do you convert a callback-based function to return a Promise?",
      "options": {
        "A": "Return the callback directly",
        "B": "Add <pre>async</pre> keyword",
        "C": "Use <pre>Promise.wrap()</pre>",
        "D": "Use the Promise constructor"
      },
      "correct": "D",
      "explanation": "The Promise constructor is used to wrap callback-based functions. Call <pre>resolve</pre> on success and <pre>reject</pre> on error within the callback.",
      "topic": {
        "topics": [
          "Simple async patterns"
        ]
      }
    },
    {
      "id": 17,
      "question": "What does this code log? [CODE]Promise.reject('error')\n  .catch(error => 'handled')\n  .then(console.log);[/CODE]",
      "options": {
        "A": "Nothing",
        "B": "<pre>'error'</pre>",
        "C": "<pre>'handled'</pre>",
        "D": "Throws an error"
      },
      "correct": "C",
      "explanation": "The rejection is caught by <pre>catch()</pre> which returns 'handled'. This becomes the resolved value for the next <pre>then()</pre>, which logs 'handled'.",
      "topic": {
        "topics": [
          "Error handling basics"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the value of <pre>result</pre>? [CODE]async function test() {\n  return await 5;\n}\nconst result = test();[/CODE]",
      "options": {
        "A": "The number 5",
        "B": "A Promise",
        "C": "undefined",
        "D": "An error"
      },
      "correct": "B",
      "explanation": "Async functions always return Promises. Even though we await a non-Promise value (5), the function itself returns a Promise that resolves to 5.",
      "topic": {
        "topics": [
          "Async function syntax"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does <pre>Promise.all()</pre> do?",
      "options": {
        "A": "Waits for all Promises to resolve or any to reject",
        "B": "Runs Promises one after another",
        "C": "Returns the first resolved Promise",
        "D": "Stops if any Promise rejects"
      },
      "correct": "A",
      "explanation": "<pre>Promise.all()</pre> takes an array of Promises and returns a new Promise that resolves when all input Promises resolve, or rejects immediately if any input Promise rejects.",
      "topic": {
        "topics": [
          "Simple async patterns"
        ]
      }
    },
    {
      "id": 20,
      "question": "How can you handle errors in an async function?",
      "options": {
        "A": "Use try/catch block",
        "B": "Use <pre>.catch()</pre> on the function call",
        "C": "Errors cannot be caught in async functions",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "You can use try/catch inside the async function, or you can use <pre>.catch()</pre> when calling the async function since it returns a Promise.",
      "topic": {
        "topics": [
          "Error handling basics"
        ]
      }
    },
    {
      "id": 21,
      "question": "What will this code log? [CODE]async function test() {\n  throw new Error('fail');\n}\ntest().catch(() => console.log('caught'));[/CODE]",
      "options": {
        "A": "<pre>'caught'</pre>",
        "B": "Error: fail",
        "C": "Nothing",
        "D": "undefined"
      },
      "correct": "A",
      "explanation": "Throwing in an async function is equivalent to rejecting the returned Promise. The rejection is caught by the <pre>.catch()</pre> method, which logs 'caught'.",
      "topic": {
        "topics": [
          "Error handling basics"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the difference between <pre>Promise.resolve()</pre> and <pre>new Promise(resolve => resolve())</pre>?",
      "options": {
        "A": "They are functionally equivalent",
        "B": "Only one can take a value",
        "C": "One is faster",
        "D": "One is deprecated"
      },
      "correct": "A",
      "explanation": "Both create an immediately resolved Promise. <pre>Promise.resolve()</pre> is just a shorthand for the longer constructor syntax.",
      "topic": {
        "topics": [
          "Promise resolution"
        ]
      }
    },
    {
      "id": 23,
      "question": "What will be logged? [CODE]console.log('start');\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('end');[/CODE]",
      "options": {
        "A": "<pre>start, end, promise</pre>",
        "B": "<pre>start, promise, end</pre>",
        "C": "<pre>promise, start, end</pre>",
        "D": "<pre>start, end</pre>"
      },
      "correct": "A",
      "explanation": "Synchronous code runs first (start, end), then microtasks (Promise callbacks) run before the next event loop cycle, so 'promise' logs last.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 24,
      "question": "Can you await multiple Promises sequentially?",
      "options": {
        "A": "Only in certain browsers",
        "B": "No, await only works with one Promise",
        "C": "Only with Promise.all()",
        "D": "Yes, by using multiple await statements"
      },
      "correct": "D",
      "explanation": "You can use multiple await statements to run Promises sequentially. Each await will pause the function until that Promise settles.",
      "topic": {
        "topics": [
          "Simple async patterns"
        ]
      }
    },
    {
      "id": 25,
      "question": "What does this return? [CODE]async function test() {\n  return Promise.resolve(42);\n}[/CODE]",
      "options": {
        "A": "A Promise that resolves to 42",
        "B": "The number 42",
        "C": "A Promise that resolves to a Promise",
        "D": "undefined"
      },
      "correct": "A",
      "explanation": "Async functions automatically unwrap returned Promises. Returning <pre>Promise.resolve(42)</pre> is the same as returning 42 directly in an async function.",
      "topic": {
        "topics": [
          "Async function syntax"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is the purpose of <pre>Promise.race()</pre>?",
      "options": {
        "A": "Returns the fastest resolving Promise",
        "B": "Runs all Promises in parallel",
        "C": "Returns the first settled Promise (resolve or reject)",
        "D": "Times out slow Promises"
      },
      "correct": "C",
      "explanation": "<pre>Promise.race()</pre> returns a Promise that settles (either resolves or rejects) as soon as any of the input Promises settles.",
      "topic": {
        "topics": [
          "Simple async patterns"
        ]
      }
    },
    {
      "id": 27,
      "question": "What will this code log? [CODE]async function getData() {\n  const value = await 'hello';\n  return value;\n}\ngetData().then(console.log);[/CODE]",
      "options": {
        "A": "<pre>undefined</pre>",
        "B": "<pre>Promise {'hello'}</pre>",
        "C": "<pre>'hello'</pre>",
        "D": "Syntax error"
      },
      "correct": "C",
      "explanation": "You can await non-Promise values. The value is automatically wrapped in a resolved Promise, so <pre>await 'hello'</pre> simply returns 'hello'.",
      "topic": {
        "topics": [
          "Await keyword"
        ]
      }
    },
    {
      "id": 28,
      "question": "How do you run async operations in parallel?",
      "options": {
        "A": "Use multiple await statements",
        "B": "Use Promise.all() with await",
        "C": "Use async/await in a loop",
        "D": "Async operations cannot run in parallel"
      },
      "correct": "B",
      "explanation": "To run async operations in parallel, start all Promises first (without await), then use <pre>await Promise.all()</pre> to wait for all results.",
      "topic": {
        "topics": [
          "Simple async patterns"
        ]
      }
    },
    {
      "id": 29,
      "question": "What happens if you don't handle a Promise rejection?",
      "options": {
        "A": "It becomes a resolved Promise",
        "B": "The program crashes immediately",
        "C": "The rejection is ignored",
        "D": "It may cause an unhandled promise rejection warning"
      },
      "correct": "D",
      "explanation": "Unhandled Promise rejections don't crash Node.js or browsers immediately, but they generate warnings and may cause issues in future Node.js versions.",
      "topic": {
        "topics": [
          "Error handling basics"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the main benefit of async/await over Promise chains?",
      "options": {
        "A": "Fewer features",
        "B": "Better performance",
        "C": "More readable, synchronous-looking code",
        "D": "Works in older browsers"
      },
      "correct": "C",
      "explanation": "Async/await makes asynchronous code look and behave more like synchronous code, which is easier to read and understand, especially for complex logic with multiple async steps.",
      "topic": {
        "topics": [
          "Async function syntax"
        ]
      }
    }
  ]
}
