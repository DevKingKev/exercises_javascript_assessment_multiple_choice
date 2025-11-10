// assessment36.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Debugging Fundamentals",
    "description": "Essential debugging techniques, console methods, and developer tools for effective JavaScript troubleshooting.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Console debugging",
        "Breakpoint strategies",
        "Error tracking",
        "Variable monitoring",
        "Execution control",
        "Debugging patterns",
        "Tool utilization"
    ],
    "topicLinks": [
        {
            "topicName": "Console debugging",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Console"
        },
        {
            "topicName": "Breakpoint strategies",
            "refLink": "https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Set_a_breakpoint"
        },
        {
            "topicName": "Error tracking",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors"
        },
        {
            "topicName": "Variable monitoring",
            "refLink": "https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Examine_variables"
        },
        {
            "topicName": "Execution control",
            "refLink": "https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Step_through_code"
        },
        {
            "topicName": "Debugging patterns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong"
        },
        {
            "topicName": "Tool utilization",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools"
        }
    ],
    "assessmentId": 36,
    "assessmentUniqueId": 1762785563100,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What console method displays data as an interactive tree?",
        "options": {
            "A": "<pre>console.dir()</pre>",
            "B": "<pre>console.tree()</pre>",
            "C": "<pre>console.explore()</pre>",
            "D": "<pre>console.inspect()</pre>"
        },
        "correct": "A",
        "explanation": "console.dir() displays an interactive tree of properties for a specified JavaScript object, making it easy to explore nested structures.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 2,
        "question": "How do you pause execution at a specific line without modifying code?",
        "options": {
            "A": "Set a breakpoint in developer tools",
            "B": "Add console.pause()",
            "C": "Use debugger statement",
            "D": "Add a special comment"
        },
        "correct": "A",
        "explanation": "You can click on the line number in the Sources panel of developer tools to set a breakpoint without changing your code.",
        "topic": {
            "topics": ["Breakpoint strategies"]
        }
    },
    {
        "id": 3,
        "question": "What does console.groupCollapsed() do?",
        "options": {
            "A": "Creates a collapsed group of console messages",
            "B": "Groups errors together",
            "C": "Collapses all console output",
            "D": "Hides broken code"
        },
        "correct": "A",
        "explanation": "console.groupCollapsed() creates a new inline group in the console that starts collapsed, requiring a click to expand.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 4,
        "question": "How can you monitor a variable's value change during execution?",
        "options": {
            "A": "Add it to the Watch panel in debugger",
            "B": "Use console.watch()",
            "C": "Wrap it in monitor() function",
            "D": "Use console.track()"
        },
        "correct": "A",
        "explanation": "The Watch panel in browser developer tools lets you monitor variable values and expressions as you step through code.",
        "topic": {
            "topics": ["Variable monitoring"]
        }
    },
    {
        "id": 5,
        "question": "What is the purpose of 'Resume' button in debugger?",
        "options": {
            "A": "Continues execution until next breakpoint",
            "B": "Restarts the program",
            "C": "Resumes from error",
            "D": "Reloads the page"
        },
        "correct": "A",
        "explanation": "The 'Resume' button continues code execution until the next breakpoint is encountered or the program ends.",
        "topic": {
            "topics": ["Execution control"]
        }
    },
    {
        "id": 6,
        "question": "How do you log multiple related values with a single statement?",
        "options": {
            "A": "<pre>console.log({var1, var2, var3})</pre>",
            "B": "<pre>console.multiple(var1, var2, var3)</pre>",
            "C": "<pre>console.batch(var1, var2, var3)</pre>",
            "D": "<pre>console.all(var1, var2, var3)</pre>"
        },
        "correct": "A",
        "explanation": "Using object literal shorthand with console.log() automatically labels each value with its variable name.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 7,
        "question": "What does a red 'X' next to a breakpoint indicate?",
        "options": {
            "A": "The breakpoint is disabled",
            "B": "The breakpoint has an error",
            "C": "The breakpoint is conditional",
            "D": "The breakpoint is active"
        },
        "correct": "A",
        "explanation": "A red 'X' or faded breakpoint indicator typically means the breakpoint is currently disabled.",
        "topic": {
            "topics": ["Breakpoint strategies"]
        }
    },
    {
        "id": 8,
        "question": "How can you quickly test a function in the console?",
        "options": {
            "A": "Call the function directly in console",
            "B": "Create a new test file",
            "C": "Use console.testFunction()",
            "D": "Refresh the page and check"
        },
        "correct": "A",
        "explanation": "You can call any globally available function directly in the browser console to test its behavior.",
        "topic": {
            "topics": ["Tool utilization"]
        }
    },
    {
        "id": 9,
        "question": "What is a useful first step when code behaves unexpectedly?",
        "options": {
            "A": "Add strategic console.log statements",
            "B": "Rewrite the entire function",
            "C": "Check the HTML structure",
            "D": "Restart the development server"
        },
        "correct": "A",
        "explanation": "Adding console.log at key points helps track execution flow and variable values to identify where things go wrong.",
        "topic": {
            "topics": ["Debugging patterns"]
        }
    },
    {
        "id": 10,
        "question": "How do you create a conditional breakpoint?",
        "options": {
            "A": "Right-click breakpoint and add condition",
            "B": "Use if(debugger) statement",
            "C": "Add console.breakIf()",
            "D": "Wrap code in debug conditional"
        },
        "correct": "A",
        "explanation": "Right-click a breakpoint in developer tools and select 'Edit breakpoint' to add a condition that must be true for the breakpoint to trigger.",
        "topic": {
            "topics": ["Breakpoint strategies"]
        }
    },
    {
        "id": 11,
        "question": "What does console.timeLog() do?",
        "options": {
            "A": "Logs elapsed time without stopping timer",
            "B": "Logs the current time",
            "C": "Stops and logs the timer",
            "D": "Logs timezone information"
        },
        "correct": "A",
        "explanation": "console.timeLog() logs the current value of a timer without stopping it, useful for intermediate timing checks.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 12,
        "question": "How can you see what event listeners are attached to an element?",
        "options": {
            "A": "Check Event Listeners tab in Elements panel",
            "B": "Use console.listeners()",
            "C": "Check the Event panel",
            "D": "Use getEventListeners() in console"
        },
        "correct": "A",
        "explanation": "The Event Listeners tab in the Elements panel shows all event listeners attached to the selected DOM element.",
        "topic": {
            "topics": ["Tool utilization"]
        }
    },
    {
        "id": 13,
        "question": "What is the benefit of using console.table() over console.log() for arrays?",
        "options": {
            "A": "Easier to read structured data",
            "B": "Faster execution",
            "C": "Smaller output",
            "D": "Works with larger arrays"
        },
        "correct": "A",
        "explanation": "console.table() displays arrays and objects in a sortable, filterable table format that's much easier to read than raw log output.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 14,
        "question": "How do you step through code one line at a time?",
        "options": {
            "A": "Use 'Step over' button repeatedly",
            "B": "Set breakpoints on every line",
            "C": "Use console.step()",
            "D": "Press F11 continuously"
        },
        "correct": "A",
        "explanation": "The 'Step over' button executes one line at a time, allowing you to follow the exact execution path.",
        "topic": {
            "topics": ["Execution control"]
        }
    },
    {
        "id": 15,
        "question": "What does a purple console message indicate?",
        "options": {
            "A": "It's a console.warn() message",
            "B": "It's a severe error",
            "C": "It's a network request",
            "D": "It's a deprecated feature warning"
        },
        "correct": "A",
        "explanation": "console.warn() typically displays messages with yellow or purple styling in browser consoles.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 16,
        "question": "How can you quickly inspect a DOM element in console?",
        "options": {
            "A": "Use $0 after selecting element in Elements panel",
            "B": "Use inspect() function",
            "C": "Use console.element()",
            "D": "Right-click and 'Inspect in console'"
        },
        "correct": "A",
        "explanation": "$0 references the currently selected element in the Elements panel, making it easy to inspect in console.",
        "topic": {
            "topics": ["Tool utilization"]
        }
    },
    {
        "id": 17,
        "question": "What is a common debugging strategy for async code?",
        "options": {
            "A": "Add logs at start and end of async operations",
            "B": "Remove all async/await keywords",
            "C": "Convert to synchronous code",
            "D": "Ignore timing issues"
        },
        "correct": "A",
        "explanation": "Logging at the beginning and completion of async operations helps track their execution order and timing.",
        "topic": {
            "topics": ["Debugging patterns"]
        }
    },
    {
        "id": 18,
        "question": "How do you disable all breakpoints temporarily?",
        "options": {
            "A": "Click 'Deactivate breakpoints' button",
            "B": "Remove all debugger statements",
            "C": "Close developer tools",
            "D": "Use console.disableBreakpoints()"
        },
        "correct": "A",
        "explanation": "The 'Deactivate breakpoints' button in debugger temporarily disables all breakpoints without removing them.",
        "topic": {
            "topics": ["Breakpoint strategies"]
        }
    },
    {
        "id": 19,
        "question": "What does the blue arrow in call stack indicate?",
        "options": {
            "A": "Current execution position",
            "B": "Async function call",
            "C": "Error location",
            "D": "Next function to execute"
        },
        "correct": "A",
        "explanation": "The blue arrow or highlight in the call stack shows the current execution position in the stack trace.",
        "topic": {
            "topics": ["Error tracking"]
        }
    },
    {
        "id": 20,
        "question": "How can you log a value only once?",
        "options": {
            "A": "<pre>console.logOnce()</pre>",
            "B": "<pre>console.unique()</pre>",
            "C": "Use a flag variable",
            "D": "There's no built-in method"
        },
        "correct": "D",
        "explanation": "There's no built-in console.logOnce(). You need to implement this yourself with a flag or use a conditional.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 21,
        "question": "What is the purpose of 'Blackboxing' a script?",
        "options": {
            "A": "Skip debugging third-party library code",
            "B": "Hide sensitive code",
            "C": "Make code run faster",
            "D": "Encrypt the source code"
        },
        "correct": "A",
        "explanation": "Blackboxing tells the debugger to skip over specified scripts (like libraries) when stepping through code.",
        "topic": {
            "topics": ["Debugging patterns"]
        }
    },
    {
        "id": 22,
        "question": "How do you check if a variable is defined before using it?",
        "options": {
            "A": "<pre>console.log(typeof variable)</pre>",
            "B": "<pre>console.check(variable)</pre>",
            "C": "<pre>console.defined(variable)</pre>",
            "D": "<pre>console.exists(variable)</pre>"
        },
        "correct": "A",
        "explanation": "Using typeof in console.log helps check if a variable is defined and what type it is without throwing errors.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 23,
        "question": "What does the 'Scope' section show when paused at a breakpoint?",
        "options": {
            "A": "All accessible variables and their values",
            "B": "Only global variables",
            "C": "Variable names but not values",
            "D": "Future variable states"
        },
        "correct": "A",
        "explanation": "The Scope section displays all variables in the current execution context, including local, closure, and global variables with their current values.",
        "topic": {
            "topics": ["Variable monitoring"]
        }
    },
    {
        "id": 24,
        "question": "How can you quickly find all console.log statements in your code?",
        "options": {
            "A": "Use Find in Files feature for 'console.log'",
            "B": "Check the Console panel",
            "C": "Use console.findLogs()",
            "D": "Search HTML files only"
        },
        "correct": "A",
        "explanation": "Using your editor's 'Find in Files' feature to search for 'console.log' helps locate all logging statements quickly.",
        "topic": {
            "topics": ["Debugging patterns"]
        }
    },
    {
        "id": 25,
        "question": "What is a good practice for console.log in production?",
        "options": {
            "A": "Remove or comment out most logs",
            "B": "Add more detailed logs",
            "C": "Convert all to console.error",
            "D": "Keep all logs for debugging"
        },
        "correct": "A",
        "explanation": "Remove or disable most console.log statements in production to avoid cluttering the console and potential performance impacts.",
        "topic": {
            "topics": ["Debugging patterns"]
        }
    },
    {
        "id": 26,
        "question": "How do you inspect network requests in developer tools?",
        "options": {
            "A": "Use the Network panel",
            "B": "Check Console for fetch logs",
            "C": "Use console.network()",
            "D": "Look in Sources panel"
        },
        "correct": "A",
        "explanation": "The Network panel shows all network requests made by the page, including status, timing, and response data.",
        "topic": {
            "topics": ["Tool utilization"]
        }
    },
    {
        "id": 27,
        "question": "What does console.profile() do?",
        "options": {
            "A": "Starts JavaScript CPU profiling",
            "B": "Creates user profiles",
            "C": "Profiles network performance",
            "D": "Measures memory usage only"
        },
        "correct": "A",
        "explanation": "console.profile() starts recording a CPU profile to analyze which functions are taking the most time.",
        "topic": {
            "topics": ["Console debugging"]
        }
    },
    {
        "id": 28,
        "question": "How can you test a small code snippet without affecting your main code?",
        "options": {
            "A": "Use the browser console directly",
            "B": "Create a separate project",
            "C": "Use a online code playground",
            "D": "Both A and C"
        },
        "correct": "D",
        "explanation": "Both the browser console and online playgrounds like JSFiddle are great for testing small code snippets safely.",
        "topic": {
            "topics": ["Tool utilization"]
        }
    },
    {
        "id": 29,
        "question": "What is the benefit of using debugger over console.log?",
        "options": {
            "A": "Allows interactive inspection of current state",
            "B": "Faster to type",
            "C": "Works without developer tools",
            "D": "Logs more information"
        },
        "correct": "A",
        "explanation": "debugger statements pause execution and allow interactive inspection of all variables and the call stack, unlike static console.log output.",
        "topic": {
            "topics": ["Breakpoint strategies"]
        }
    },
    {
        "id": 30,
        "question": "Why is it important to understand the call stack when debugging?",
        "options": {
            "A": "It shows the execution path that led to current state",
            "B": "It makes code run faster",
            "C": "It prevents stack overflow errors",
            "D": "It organizes your code structure"
        },
        "explanation": "Understanding the call stack helps trace how your code reached its current state, which is crucial for identifying the source of bugs.",
        "correct": "A",
        "topic": {
            "topics": ["Error tracking"]
        }
    }
];

module.exports = { metadata, questions };