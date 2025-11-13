module.exports = {
  "metadata": {
    "title": "JavaScript Event Loop Basics",
    "description": "Fundamental concepts of the JavaScript event loop, microtasks, and macrotasks for understanding asynchronous execution.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Event loop concept",
      "Microtasks",
      "Macrotasks",
      "Execution order",
      "Async operations",
      "Task queues",
      "Simple timing"
    ],
    "topicLinks": [
      {
        "topicName": "Event loop concept",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
      },
      {
        "topicName": "Microtasks",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide"
      },
      {
        "topicName": "Macrotasks",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout"
      },
      {
        "topicName": "Execution order",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"
      },
      {
        "topicName": "Async operations",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts"
      },
      {
        "topicName": "Task queues",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#run-to-completion"
      },
      {
        "topicName": "Simple timing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
      }
    ],
    "assessmentId": 40,
    "assessmentUniqueId": 1762787673124,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the JavaScript event loop responsible for?",
      "options": {
        "A": "Managing asynchronous operations and callbacks",
        "B": "Creating animation loops",
        "C": "Handling mouse events only",
        "D": "Optimizing JavaScript performance"
      },
      "correct": "A",
      "explanation": "The event loop manages the execution of asynchronous code by processing tasks from different queues in a specific order.",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which of these is a microtask?",
      "options": {
        "A": "Promise callbacks",
        "B": "setTimeout callbacks",
        "C": "setInterval callbacks",
        "D": "Event listeners"
      },
      "correct": "A",
      "explanation": "Promise callbacks (.then, .catch, .finally) and queueMicrotask() are examples of microtasks.",
      "topic": {
        "topics": [
          "Microtasks"
        ]
      }
    },
    {
      "id": 3,
      "question": "Which of these is a macrotask?",
      "options": {
        "A": "setTimeout callbacks",
        "B": "Promise resolutions",
        "C": "queueMicrotask callbacks",
        "D": "Mutation observer callbacks"
      },
      "correct": "A",
      "explanation": "setTimeout, setInterval, and event listeners are examples of macrotasks.",
      "topic": {
        "topics": [
          "Macrotasks"
        ]
      }
    },
    {
      "id": 4,
      "question": "In what order does JavaScript process tasks?",
      "options": {
        "A": "Synchronous code → Microtasks → Macrotasks",
        "B": "Macrotasks → Microtasks → Synchronous code",
        "C": "Synchronous code → Macrotasks → Microtasks",
        "D": "Whatever finishes first"
      },
      "correct": "A",
      "explanation": "JavaScript runs all synchronous code first, then all microtasks, then the next macrotask from the queue.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 5,
      "question": "What happens after all synchronous code executes?",
      "options": {
        "A": "All microtasks run before any macrotasks",
        "B": "Macrotasks run before microtasks",
        "C": "Tasks run in random order",
        "D": "The program stops"
      },
      "correct": "A",
      "explanation": "The event loop processes all available microtasks before moving to the next macrotask.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which would execute first: Promise.resolve() or setTimeout with 0 delay?",
      "options": {
        "A": "Promise.resolve()",
        "B": "setTimeout",
        "C": "They execute at the same time",
        "D": "It's random"
      },
      "correct": "A",
      "explanation": "Promise.resolve() is a microtask and runs before setTimeout callbacks, which are macrotasks.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the purpose of the event loop?",
      "options": {
        "A": "To allow JavaScript to handle async operations without blocking",
        "B": "To make JavaScript run faster",
        "C": "To create infinite loops",
        "D": "To handle user interface events only"
      },
      "correct": "A",
      "explanation": "The event loop enables JavaScript's non-blocking nature by managing asynchronous operations while keeping the main thread responsive.",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 8,
      "question": "Where do Promise callbacks execute in the event loop?",
      "options": {
        "A": "In the microtask queue",
        "B": "In the macrotask queue",
        "C": "Immediately when resolved",
        "D": "In a separate thread"
      },
      "correct": "A",
      "explanation": "Promise callbacks are added to the microtask queue and execute after synchronous code but before macrotasks.",
      "topic": {
        "topics": [
          "Microtasks"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the minimum delay for setTimeout?",
      "options": {
        "A": "Exactly 0ms",
        "B": "About 1-4ms in modern browsers",
        "C": "Exactly 1ms",
        "D": "No minimum delay"
      },
      "correct": "B",
      "explanation": "Even with setTimeout(fn, 0), browsers enforce a minimum delay of about 1-4ms for performance reasons.",
      "topic": {
        "topics": [
          "Simple timing"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which statement about the event loop is true?",
      "options": {
        "A": "It only runs in Node.js, not browsers",
        "B": "It's single-threaded but handles async operations",
        "C": "It uses multiple threads for better performance",
        "D": "It's being deprecated in modern JavaScript"
      },
      "correct": "B",
      "explanation": "JavaScript has a single-threaded event loop that manages asynchronous operations through task queues.",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 11,
      "question": "What happens when a microtask adds more microtasks?",
      "options": {
        "A": "They are ignored",
        "B": "They all run before moving to macrotasks",
        "C": "They cause an infinite loop error",
        "D": "They are added to the macrotask queue"
      },
      "correct": "B",
      "explanation": "The event loop continues processing microtasks until the microtask queue is empty, even if new microtasks are added.",
      "topic": {
        "topics": [
          "Microtasks"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which API creates a macrotask?",
      "options": {
        "A": "queueMicrotask",
        "B": "setTimeout",
        "C": "Promise.then",
        "D": "async/await"
      },
      "correct": "B",
      "explanation": "setTimeout and setInterval add callbacks to the macrotask queue.",
      "topic": {
        "topics": [
          "Macrotasks"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the execution order of this code? [CODE]console.log('1');\nsetTimeout(() => console.log('2'));\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');[/CODE]",
      "options": {
        "A": "<pre>1, 4, 2, 3</pre>",
        "B": "<pre>1, 4, 3, 2</pre>",
        "C": "<pre>1, 2, 3, 4</pre>",
        "D": "<pre>1, 3, 4, 2</pre>"
      },
      "correct": "B",
      "explanation": "Synchronous logs (1,4) run first, then microtasks (3), then macrotasks (2).",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 14,
      "question": "Where do event listeners (click, keypress) execute?",
      "options": {
        "A": "As microtasks",
        "B": "As macrotasks",
        "C": "Immediately when triggered",
        "D": "In a separate event thread"
      },
      "correct": "B",
      "explanation": "DOM events are processed as macrotasks in the event loop.",
      "topic": {
        "topics": [
          "Macrotasks"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the main difference between microtasks and macrotasks?",
      "options": {
        "A": "Macrotasks are faster to execute",
        "B": "Microtasks have higher priority in the event loop",
        "C": "Microtasks can be cancelled",
        "D": "Macrotasks use less memory"
      },
      "correct": "B",
      "explanation": "Microtasks execute before macrotasks and have priority in the event loop processing order.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which method explicitly adds a function to the microtask queue?",
      "options": {
        "A": "setImmediate()",
        "B": "queueMicrotask()",
        "C": "process.nextTick()",
        "D": "setTimeout(fn, 0)"
      },
      "correct": "B",
      "explanation": "queueMicrotask() is the standard way to explicitly add a function to the microtask queue.",
      "topic": {
        "topics": [
          "Microtasks"
        ]
      }
    },
    {
      "id": 17,
      "question": "What does 'non-blocking' mean in JavaScript?",
      "options": {
        "A": "Functions don't return values",
        "B": "JavaScript can run on multiple CPUs",
        "C": "Async operations don't stop other code from running",
        "D": "Code executes without errors"
      },
      "correct": "C",
      "explanation": "Non-blocking means long operations don't prevent other code from executing, thanks to the event loop.",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which executes first after a button click?",
      "options": {
        "A": "Promise in the click handler",
        "B": "setTimeout in the click handler",
        "C": "Synchronous code in the click handler",
        "D": "They all execute simultaneously"
      },
      "correct": "C",
      "explanation": "Synchronous code in the event handler runs immediately, before any microtasks or macrotasks from that handler.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the call stack?",
      "options": {
        "A": "A stack of event listeners",
        "B": "A data structure for API calls",
        "C": "Where synchronous function calls are tracked",
        "D": "Memory for variable storage"
      },
      "correct": "C",
      "explanation": "The call stack tracks the execution context of currently running functions in a last-in, first-out manner.",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 20,
      "question": "When does the event loop check for new tasks?",
      "options": {
        "A": "Continuously in a loop",
        "B": "Every millisecond",
        "C": "When the call stack is empty",
        "D": "When a user interacts with the page"
      },
      "correct": "C",
      "explanation": "The event loop checks for new tasks only when the call stack is empty, ensuring synchronous code completes first.",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 21,
      "question": "Which of these creates the most immediate execution after sync code?",
      "options": {
        "A": "setImmediate()",
        "B": "setTimeout(fn, 0)",
        "C": "queueMicrotask()",
        "D": "requestAnimationFrame()"
      },
      "correct": "C",
      "explanation": "queueMicrotask() adds to the microtask queue, which runs before any macrotasks like setTimeout.",
      "topic": {
        "topics": [
          "Microtasks"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the role of Web APIs in the event loop?",
      "options": {
        "A": "Manage the call stack",
        "B": "Provide JavaScript language features",
        "C": "Handle async operations outside the main thread",
        "D": "Execute microtasks"
      },
      "correct": "C",
      "explanation": "Web APIs (like setTimeout, fetch) handle operations outside the main thread and queue callbacks when complete.",
      "topic": {
        "topics": [
          "Async operations"
        ]
      }
    },
    {
      "id": 23,
      "question": "How many macrotasks run per event loop cycle?",
      "options": {
        "A": "All available macrotasks",
        "B": "Up to 10",
        "C": "One (usually)",
        "D": "As many as possible"
      },
      "correct": "C",
      "explanation": "Typically, one macrotask runs per event loop cycle, after all microtasks are processed.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 24,
      "question": "Where do async/await operations fit in the event loop?",
      "options": {
        "A": "They bypass the event loop",
        "B": "They create new macrotasks",
        "C": "They run synchronously",
        "D": "They use microtasks for their callbacks"
      },
      "correct": "D",
      "explanation": "Async/await is syntactic sugar for Promises, so they use the microtask queue for execution.",
      "topic": {
        "topics": [
          "Microtasks"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the purpose of having both micro and macrotasks?",
      "options": {
        "A": "To make JavaScript multi-threaded",
        "B": "For backward compatibility",
        "C": "To complicate the event loop",
        "D": "To prioritize certain async operations over others"
      },
      "correct": "D",
      "explanation": "Different task types allow high-priority operations (microtasks) to execute before lower-priority ones (macrotasks).",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 26,
      "question": "Which would log last? [CODE]console.log('A');\nsetTimeout(() => console.log('B'));\nqueueMicrotask(() => console.log('C'));\nPromise.resolve().then(() => console.log('D'));[/CODE]",
      "options": {
        "A": "<pre>A</pre>",
        "B": "<pre>C</pre>",
        "C": "<pre>D</pre>",
        "D": "<pre>B</pre>"
      },
      "correct": "D",
      "explanation": "A (sync) runs first, then C and D (microtasks), then B (macrotask) runs last.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 27,
      "question": "What happens if synchronous code runs for a long time?",
      "options": {
        "A": "Async callbacks interrupt the synchronous code",
        "B": "Async callbacks are lost",
        "C": "The event loop creates a new thread",
        "D": "Async callbacks are delayed until it finishes"
      },
      "correct": "D",
      "explanation": "The event loop can only process tasks when the call stack is empty, so long synchronous code blocks async operations.",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which task type has the highest priority?",
      "options": {
        "A": "Animation frames",
        "B": "Macrotasks",
        "C": "They all have equal priority",
        "D": "Microtasks"
      },
      "correct": "D",
      "explanation": "Microtasks execute before macrotasks and have the highest priority after synchronous code.",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is a simple way to remember execution order?",
      "options": {
        "A": "Micro → Macro → Sync",
        "B": "Whatever was scheduled first",
        "C": "Macro → Micro → Sync",
        "D": "Sync → Micro → Macro"
      },
      "explanation": "The simple rule is: Synchronous code always runs first, then all microtasks, then one macrotask from the queue.",
      "correct": "D",
      "topic": {
        "topics": [
          "Execution order"
        ]
      }
    },
    {
      "id": 30,
      "question": "Why is understanding the event loop important?",
      "options": {
        "A": "It's only important for library authors",
        "B": "To make JavaScript run faster",
        "C": "To avoid using callbacks",
        "D": "To write predictable asynchronous code"
      },
      "explanation": "Understanding the event loop helps predict execution order and avoid timing-related bugs in asynchronous code.",
      "correct": "D",
      "topic": {
        "topics": [
          "Event loop concept"
        ]
      }
    }
  ]
}
