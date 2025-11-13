module.exports = {
  "metadata": {
    "title": "Asynchronous JavaScript & Performance",
    "description": "In-depth questions on async patterns, event loop, timers, Promise utilities, microtasks vs macrotasks, and performance considerations",
    "difficulty": "medium",
    "domain": "javascript",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "Event loop and call stack",
      "Microtasks vs macrotasks",
      "Promises and Promise utilities",
      "Timers and setImmediate",
      "Web Workers and concurrency",
      "Performance profiling and memory",
      "Debounce and throttle patterns",
      "RequestAnimationFrame",
      "XHR vs fetch",
      "Stream APIs"
    ],
    "assessmentId": 2,
    "assessmentUniqueId": 1762254854229,
    "testType": "multiple-choice",
    "topicLinks": [
      {
        "topicName": "Event loop and call stack",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
      },
      {
        "topicName": "Microtasks vs macrotasks",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_and_macrotask_queues"
      },
      {
        "topicName": "Promises and Promise utilities",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises"
      },
      {
        "topicName": "Timers and setImmediate",
        "refLink": "https://nodejs.org/api/timers.html"
      },
      {
        "topicName": "Web Workers and concurrency",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
      },
      {
        "topicName": "Performance profiling and memory",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Performance"
      },
      {
        "topicName": "Debounce and throttle patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Performance#debouncing_and_throttling"
      },
      {
        "topicName": "RequestAnimationFrame",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"
      },
      {
        "topicName": "XHR vs fetch",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
      },
      {
        "topicName": "Stream APIs",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Streams_API"
      }
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "Which of the following best describes the relationship between microtasks and macrotasks?",
      "options": {
        "A": "Microtasks run after macrotasks and before the next paint",
        "B": "Macrotasks run before microtasks in every tick",
        "C": "They run simultaneously on separate threads",
        "D": "Microtasks run between macrotasks within the same event loop turn and are drained before rendering"
      },
      "correct": "D",
      "explanation": "Microtasks (Promise callbacks, mutation observer callbacks) are executed after the currently running script and before the event loop continues to the next macrotask; they are drained before rendering/paint.",
      "topic": {
        "topics": [
          "Microtasks vs macrotasks"
        ]
      }
    },
    {
      "id": 2,
      "question": "What will this output order be?\n\n[CODE]\nconsole.log('start');\nsetTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('end');\n[/CODE]",
      "options": {
        "A": "start, end, promise, timeout",
        "B": "start, end, timeout, promise",
        "C": "start, promise, end, timeout",
        "D": "promise, start, end, timeout"
      },
      "correct": "A",
      "explanation": "Synchronous logs run first (start, end). Then microtasks (promise) then next macrotask (timeout). So: start, end, promise, timeout.",
      "topic": {
        "topics": [
          "Event loop and call stack"
        ]
      }
    },
    {
      "id": 3,
      "question": "Which Promise utility returns after all input promises settle and gives their status?",
      "options": {
        "A": "Promise.all",
        "B": "Promise.allSettled",
        "C": "Promise.race",
        "D": "Promise.any"
      },
      "correct": "B",
      "explanation": "Promise.allSettled waits for all promises to settle and returns an array describing each outcome, regardless of fulfillment or rejection.",
      "topic": {
        "topics": [
          "Promises and Promise utilities"
        ]
      }
    },
    {
      "id": 4,
      "question": "To avoid layout thrashing when performing many DOM reads and writes, you should:",
      "options": {
        "A": "Interleave reads and writes",
        "B": "Use setTimeout for each write",
        "C": "Batch reads, then batch writes",
        "D": "Call requestAnimationFrame for reads"
      },
      "correct": "C",
      "explanation": "Batching DOM reads together and then batching writes reduces forced synchronous layouts and improves performance (avoid alternating reads/writes which cause layout thrashing).",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which approach is best to limit how often a scroll handler runs to improve performance?",
      "options": {
        "A": "Use setInterval with a very small interval",
        "B": "Debounce the handler",
        "C": "Run the handler synchronously on each event",
        "D": "Throttle the handler or use requestAnimationFrame-based throttling"
      },
      "correct": "D",
      "explanation": "Throttling or using requestAnimationFrame ensures the handler runs at a controlled rate (e.g., once per animation frame), preventing expensive continuous work during high-frequency events like scroll.",
      "topic": {
        "topics": [
          "Debounce and throttle patterns"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which API provides a way to run scripts in background threads in the browser?",
      "options": {
        "A": "setInterval",
        "B": "Promise",
        "C": "requestAnimationFrame",
        "D": "Web Workers"
      },
      "correct": "D",
      "explanation": "Web Workers allow JavaScript to run in background threads separate from the main UI thread, useful for CPU-intensive tasks without blocking the UI.",
      "topic": {
        "topics": [
          "Web Workers and concurrency"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the main difference between fetch() and XHR?",
      "options": {
        "A": "There is no difference",
        "B": "XHR is asynchronous only, fetch is synchronous",
        "C": "fetch automatically retries failed requests",
        "D": "fetch supports promises and streams; XHR doesn't natively support promises"
      },
      "correct": "D",
      "explanation": "fetch() returns a Promise and integrates better with modern APIs (streams, Service Workers), whereas XHR uses callbacks and an older API surface.",
      "topic": {
        "topics": [
          "XHR vs fetch"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which of these is true about requestAnimationFrame (rAF)?",
      "options": {
        "A": "rAF callbacks run as microtasks",
        "B": "rAF is deprecated",
        "C": "rAF schedules callbacks before the next repaint",
        "D": "rAF guarantees 60fps on all devices"
      },
      "correct": "C",
      "explanation": "requestAnimationFrame schedules a callback to run before the next repaint; it's useful for smooth animations and syncing DOM updates with frame rendering.",
      "topic": {
        "topics": [
          "RequestAnimationFrame"
        ]
      }
    },
    {
      "id": 9,
      "question": "Which pattern helps avoid holding large objects in memory between asynchronous callbacks?",
      "options": {
        "A": "Passing minimal data to callbacks and releasing references",
        "B": "Capturing large objects in closures permanently",
        "C": "Using global variables",
        "D": "Using JSON.stringify for everything"
      },
      "correct": "A",
      "explanation": "Minimize captured state and release references so garbage collector can reclaim memory; avoid unnecessary large closures or globals that keep data alive.",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which API lets you process large streams of data incrementally in the browser?",
      "options": {
        "A": "XMLHttpRequest only",
        "B": "Fetch Streams / ReadableStream",
        "C": "localStorage",
        "D": "setTimeout"
      },
      "correct": "B",
      "explanation": "The Streams API (ReadableStream) and fetch streaming response bodies let you process data chunks progressively instead of loading everything into memory.",
      "topic": {
        "topics": [
          "Stream APIs"
        ]
      }
    },
    {
      "id": 11,
      "question": "If you need a callback to run as soon as possible after the current script but before the next repaint, which queue should you use?",
      "options": {
        "A": "Macrotask queue (setTimeout)",
        "B": "Microtask queue (Promise.then)",
        "C": "Rendering queue (requestAnimationFrame)",
        "D": "MessageChannel only"
      },
      "correct": "B",
      "explanation": "Microtasks are executed after the current task and before rendering/next macrotask; Promise.then schedules a microtask. This is suitable for immediate continuation work.",
      "topic": {
        "topics": [
          "Microtasks vs macrotasks"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which is a low-overhead way to schedule many small tasks without blocking rendering?",
      "options": {
        "A": "Use a tight while loop",
        "B": "Chunk work across rAF frames or use setTimeout(…, 0)",
        "C": "Create thousands of Web Workers",
        "D": "Block the main thread intentionally"
      },
      "correct": "B",
      "explanation": "Chunking heavy work across requestAnimationFrame frames or using setTimeout (or cooperative yielding) keeps the UI responsive; creating many workers is heavy and while loops block the thread.",
      "topic": {
        "topics": [
          "RequestAnimationFrame"
        ]
      }
    },
    {
      "id": 13,
      "question": "Which technique can reduce the frequency of expensive layout calculations triggered by DOM updates?",
      "options": {
        "A": "Make many small writes interleaved with reads",
        "B": "Perform DOM reads inside write loops",
        "C": "Use document fragments and batch DOM updates",
        "D": "Use eval() to batch updates"
      },
      "correct": "C",
      "explanation": "Using document fragments and batching DOM writes reduces layout recalculations and reflows; avoid interleaving reads and writes that cause forced synchronous layouts.",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    },
    {
      "id": 14,
      "question": "When using setTimeout(fn, 0) in browsers, which statement is true?",
      "options": {
        "A": "It schedules a macrotask which runs after microtasks and next tick",
        "B": "It runs immediately before microtasks",
        "C": "It runs as a microtask",
        "D": "It schedules work on another thread"
      },
      "correct": "A",
      "explanation": "setTimeout schedules a macrotask; macrotasks run after the current script and microtasks are drained, so the timeout callback runs later than Promise microtasks.",
      "topic": {
        "topics": [
          "Timers and setImmediate"
        ]
      }
    },
    {
      "id": 15,
      "question": "What's a good strategy to profile and find a memory leak in a web app?",
      "options": {
        "A": "Always assume it's the garbage collector's fault",
        "B": "Remove all event listeners arbitrarily",
        "C": "Use browser DevTools memory snapshots and compare retained objects between interactions",
        "D": "Use console.log to print every object"
      },
      "correct": "C",
      "explanation": "Use DevTools memory profiling, take heap snapshots before/after interactions, inspect retained trees, and look for unexpected references (closures, global caches, orphaned DOM nodes).",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which Node API yields behavior most similar to setTimeout(fn, 0) but schedules callbacks earlier in certain environments?",
      "options": {
        "A": "setImmediate",
        "B": "process.nextTick",
        "C": "requestAnimationFrame",
        "D": "Promise.resolve()"
      },
      "correct": "A",
      "explanation": "setImmediate schedules a macrotask that on Node runs after I/O events callbacks; process.nextTick runs before I/O. setImmediate is often used to break up long operations.",
      "topic": {
        "topics": [
          "Timers and setImmediate"
        ]
      }
    },
    {
      "id": 17,
      "question": "Which Promise utility returns the first fulfilled promise, rejecting only if all promises reject?",
      "options": {
        "A": "Promise.any",
        "B": "Promise.race",
        "C": "Promise.all",
        "D": "Promise.allSettled"
      },
      "correct": "A",
      "explanation": "Promise.any resolves as soon as one input promise fulfills; it rejects only if all input promises reject.",
      "topic": {
        "topics": [
          "Promises and Promise utilities"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which technique is most effective to prevent blocking the main thread when doing heavy CPU work in a browser?",
      "options": {
        "A": "Use setTimeout for small slices",
        "B": "Use Web Workers to move CPU-heavy tasks off the main thread",
        "C": "Use synchronous XHR during processing",
        "D": "Store large arrays in localStorage"
      },
      "correct": "B",
      "explanation": "Web Workers enable running scripts in background threads, avoiding main-thread blocking for CPU-heavy tasks.",
      "topic": {
        "topics": [
          "Web Workers and concurrency"
        ]
      }
    },
    {
      "id": 19,
      "question": "Which tool helps measure long tasks that may cause jank in the main thread?",
      "options": {
        "A": "Network tab only",
        "B": "Console tab",
        "C": "Application tab",
        "D": "Performance tab's Long Tasks and Flame Chart in DevTools"
      },
      "correct": "D",
      "explanation": "DevTools Performance panel visualizes long tasks and call stacks, helping identify jank caused by main-thread work.",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    },
    {
      "id": 20,
      "question": "When trying to measure time spent in a function to find a bottleneck, which API is more precise than Date.now()?",
      "options": {
        "A": "console.time only",
        "B": "setTimeout with 0 delay",
        "C": "performance.now()",
        "D": "Math.random()"
      },
      "correct": "C",
      "explanation": "performance.now() provides sub-millisecond precision for high-resolution timing useful in profiling code sections.",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    },
    {
      "id": 21,
      "question": "Which approach best reduces memory retained by closures in long-lived timers?",
      "options": {
        "A": "Clear timers and null out references when no longer needed",
        "B": "Keep references to large objects in outer scope",
        "C": "Attach large objects to window for GC protection",
        "D": "Use eval to free memory"
      },
      "correct": "A",
      "explanation": "Clearing timers and removing references allows the garbage collector to reclaim memory instead of keeping it retained by closures.",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    },
    {
      "id": 22,
      "question": "Which API helps avoid layout thrashing by batching visual updates into the browser's rendering pipeline?",
      "options": {
        "A": "setTimeout(fn, 0)",
        "B": "console.log",
        "C": "Promise.resolve().then(fn)",
        "D": "requestAnimationFrame"
      },
      "correct": "D",
      "explanation": "requestAnimationFrame schedules DOM changes to sync with the browser's rendering cycle, reducing layout thrashing when used correctly.",
      "topic": {
        "topics": [
          "RequestAnimationFrame"
        ]
      }
    },
    {
      "id": 23,
      "question": "When streaming a large response from fetch, what object allows incremental reads?",
      "options": {
        "A": "response.text() only",
        "B": "ReadableStream/response.body.getReader",
        "C": "XMLHttpRequest only",
        "D": "localStorage"
      },
      "correct": "B",
      "explanation": "The Streams API exposes a ReadableStream on response.body letting you read chunks progressively rather than waiting for the whole payload.",
      "topic": {
        "topics": [
          "Stream APIs"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which approach lowers main-thread overhead for many small deferred tasks?",
      "options": {
        "A": "process them synchronously",
        "B": "Create thousands of timers",
        "C": "Batch tasks and run them on microtask or rAF checkpoints where appropriate",
        "D": "Disable microtasks"
      },
      "correct": "C",
      "explanation": "Batching small tasks and scheduling them appropriately prevents constant context switching and reduces overhead.",
      "topic": {
        "topics": [
          "Debounce and throttle patterns"
        ]
      }
    },
    {
      "id": 25,
      "question": "Which metric indicates the time until the main thread first becomes free to handle user input?",
      "options": {
        "A": "First Input Delay (FID)",
        "B": "Time to First Byte (TTFB)",
        "C": "DOMContentLoaded",
        "D": "Total Blocking Time (TBT)"
      },
      "correct": "A",
      "explanation": "First Input Delay measures the delay between first user interaction and when the main thread can respond; it's a key responsiveness metric.",
      "topic": {
        "topics": [
          "Performance profiling and memory"
        ]
      }
    }
  ]
}
