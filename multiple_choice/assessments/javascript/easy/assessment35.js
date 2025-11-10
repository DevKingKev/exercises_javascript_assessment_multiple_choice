// assessment35.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Debugging and Console Basics",
    "description": "Fundamental debugging techniques, console methods, and basic troubleshooting skills for JavaScript developers.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Console methods",
        "Debugging tools",
        "Error identification",
        "Breakpoint usage",
        "Variable inspection",
        "Debugging workflow",
        "Common debugging scenarios"
    ],
    "topicLinks": [
        {
            "topicName": "Console methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Console"
        },
        {
            "topicName": "Debugging tools",
            "refLink": "https://developer.mozilla.org/en-US/docs/Tools/Debugger"
        },
        {
            "topicName": "Error identification",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors"
        },
        {
            "topicName": "Breakpoint usage",
            "refLink": "https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Set_a_breakpoint"
        },
        {
            "topicName": "Variable inspection",
            "refLink": "https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Examine_variables"
        },
        {
            "topicName": "Debugging workflow",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong"
        },
        {
            "topicName": "Common debugging scenarios",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools"
        }
    ],
    "assessmentId": 35,
    "assessmentUniqueId": 1762785095145,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the most basic method for outputting values during debugging?",
        "options": {
            "A": "<pre>console.log()</pre>",
            "B": "<pre>console.debug()</pre>",
            "C": "<pre>console.output()</pre>",
            "D": "<pre>console.print()</pre>"
        },
        "correct": "A",
        "explanation": "console.log() is the most commonly used method for printing values to the browser console for debugging.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 2,
        "question": "How do you display an object as a table in the console?",
        "options": {
            "A": "<pre>console.table(object)</pre>",
            "B": "<pre>console.logTable(object)</pre>",
            "C": "<pre>console.display(object, 'table')</pre>",
            "D": "<pre>console.objectTable(object)</pre>"
        },
        "correct": "A",
        "explanation": "console.table() displays arrays and objects as an interactive table in the console, making data easier to read.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 3,
        "question": "What does console.error() do differently from console.log()?",
        "options": {
            "A": "Displays message with error styling and includes stack trace",
            "B": "Stops code execution",
            "C": "Only works in Node.js",
            "D": "Logs to a different file"
        },
        "correct": "A",
        "explanation": "console.error() displays messages with red error styling and includes a stack trace, making it ideal for error messages.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 4,
        "question": "How do you set a breakpoint in browser developer tools?",
        "options": {
            "A": "Click on the line number in Sources tab",
            "B": "Add debugger; statement in code",
            "C": "Right-click and select 'Breakpoint'",
            "D": "All of the above"
        },
        "correct": "D",
        "explanation": "You can set breakpoints by clicking line numbers, using debugger statements, or through context menus in developer tools.",
        "topic": {
            "topics": ["Breakpoint usage"]
        }
    },
    {
        "id": 5,
        "question": "What is the purpose of the debugger statement?",
        "options": {
            "A": "Pauses execution when developer tools are open",
            "B": "Fixes bugs automatically",
            "C": "Logs all variables",
            "D": "Clears the console"
        },
        "correct": "A",
        "explanation": "The debugger statement pauses JavaScript execution when developer tools are open, acting as a programmatic breakpoint.",
        "topic": {
            "topics": ["Breakpoint usage"]
        }
    },
    {
        "id": 6,
        "question": "How do you group related console messages together?",
        "options": {
            "A": "<pre>console.group()</pre> and <pre>console.groupEnd()</pre>",
            "B": "<pre>console.category()</pre>",
            "C": "<pre>console.organize()</pre>",
            "D": "<pre>console.bundle()</pre>"
        },
        "correct": "A",
        "explanation": "console.group() starts a grouped message, and console.groupEnd() ends the group, making related logs collapsible.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 7,
        "question": "What does console.warn() display?",
        "options": {
            "A": "Yellow warning messages with stack trace",
            "B": "Red error messages",
            "C": "Blue information messages",
            "D": "Green success messages"
        },
        "correct": "A",
        "explanation": "console.warn() displays messages with yellow warning styling and includes a stack trace.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 8,
        "question": "How can you see all variables in the current scope while debugging?",
        "options": {
            "A": "Check the 'Scope' section in debugger",
            "B": "Use console.variables()",
            "C": "Type 'show vars' in console",
            "D": "Use console.inspect()"
        },
        "correct": "A",
        "explanation": "The 'Scope' section in browser developer tools shows all variables available in the current execution context.",
        "topic": {
            "topics": ["Variable inspection"]
        }
    },
    {
        "id": 9,
        "question": "What is the purpose of console.assert()?",
        "options": {
            "A": "Logs an error message if assertion is false",
            "B": "Asserts dominance over the code",
            "C": "Always throws an error",
            "D": "Asserts that code is correct"
        },
        "correct": "A",
        "explanation": "console.assert() writes an error message to the console only if the first argument is false.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 10,
        "question": "How do you measure how long an operation takes?",
        "options": {
            "A": "<pre>console.time()</pre> and <pre>console.timeEnd()</pre>",
            "B": "<pre>console.measure()</pre>",
            "C": "<pre>console.stopwatch()</pre>",
            "D": "<pre>console.duration()</pre>"
        },
        "correct": "A",
        "explanation": "console.time() starts a timer, and console.timeEnd() stops it and displays the elapsed time.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 11,
        "question": "What does the call stack show in developer tools?",
        "options": {
            "A": "The sequence of function calls that led to current position",
            "B": "All variables in memory",
            "C": "Network requests made",
            "D": "CSS styles applied"
        },
        "correct": "A",
        "explanation": "The call stack shows the chain of function calls that led to the current execution point, helping trace execution flow.",
        "topic": {
            "topics": ["Debugging tools"]
        }
    },
    {
        "id": 12,
        "question": "How do you clear the console output?",
        "options": {
            "A": "<pre>console.clear()</pre>",
            "B": "<pre>console.empty()</pre>",
            "C": "<pre>console.clean()</pre>",
            "D": "<pre>console.reset()</pre>"
        },
        "correct": "A",
        "explanation": "console.clear() clears the console of all previous output.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 13,
        "question": "What is a conditional breakpoint?",
        "options": {
            "A": "A breakpoint that only triggers when a condition is true",
            "B": "A breakpoint that fixes conditions",
            "C": "A breakpoint for conditional statements only",
            "D": "A breakpoint that conditions code"
        },
        "correct": "A",
        "explanation": "Conditional breakpoints pause execution only when a specified condition evaluates to true.",
        "topic": {
            "topics": ["Breakpoint usage"]
        }
    },
    {
        "id": 14,
        "question": "How do you display an interactive list of object properties?",
        "options": {
            "A": "<pre>console.dir(object)</pre>",
            "B": "<pre>console.properties(object)</pre>",
            "C": "<pre>console.inspect(object)</pre>",
            "D": "<pre>console.list(object)</pre>"
        },
        "correct": "A",
        "explanation": "console.dir() displays an interactive listing of all properties of a specified JavaScript object.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 15,
        "question": "What is the first step when you encounter an error?",
        "options": {
            "A": "Read the error message carefully",
            "B": "Restart the browser",
            "C": "Add more console.log statements",
            "D": "Search online immediately"
        },
        "correct": "A",
        "explanation": "Always read the error message first - it often contains the exact location and description of the problem.",
        "topic": {
            "topics": ["Debugging workflow"]
        }
    },
    {
        "id": 16,
        "question": "How can you track how many times a function is called?",
        "options": {
            "A": "<pre>console.count()</pre>",
            "B": "<pre>console.track()</pre>",
            "C": "<pre>console.increment()</pre>",
            "D": "<pre>console.calls()</pre>"
        },
        "correct": "A",
        "explanation": "console.count() logs the number of times that particular call to count() has been invoked.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 17,
        "question": "What does 'stepping over' do in debugger?",
        "options": {
            "A": "Executes current line without entering functions",
            "B": "Skips to next breakpoint",
            "C": "Jumps out of current function",
            "D": "Executes the entire program"
        },
        "correct": "A",
        "explanation": "'Step over' executes the current line of code but doesn't enter into function calls on that line.",
        "topic": {
            "topics": ["Debugging tools"]
        }
    },
    {
        "id": 18,
        "question": "How do you log multiple values with descriptive labels?",
        "options": {
            "A": "<pre>console.log({var1, var2, var3})</pre>",
            "B": "<pre>console.log('var1:', var1, 'var2:', var2)</pre>",
            "C": "<pre>console.label(var1, var2)</pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "You can use object shorthand or multiple parameters with labels to log multiple values clearly.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 19,
        "question": "What is 'stepping into' used for?",
        "options": {
            "A": "Entering function calls to debug inside them",
            "B": "Stepping into variables",
            "C": "Entering HTML elements",
            "D": "Stepping into the next file"
        },
        "correct": "A",
        "explanation": "'Step into' enters function calls to debug the code inside those functions.",
        "topic": {
            "topics": ["Debugging tools"]
        }
    },
    {
        "id": 20,
        "question": "How can you style console output?",
        "options": {
            "A": "Using CSS in the second parameter of console.log",
            "B": "With console.style() method",
            "C": "Using HTML tags in the message",
            "D": "With console.format() method"
        },
        "correct": "A",
        "explanation": "console.log() can accept CSS styles as a second parameter: <pre>console.log('%cStyled text', 'color: red;')</pre>",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 21,
        "question": "What does the 'Watch' panel do in debugger?",
        "options": {
            "A": "Lets you monitor specific variable values",
            "B": "Watches for new errors",
            "C": "Monitors network activity",
            "D": "Watches the screen for changes"
        },
        "correct": "A",
        "explanation": "The 'Watch' panel allows you to monitor the values of specific variables or expressions as you debug.",
        "topic": {
            "topics": ["Variable inspection"]
        }
    },
    {
        "id": 22,
        "question": "How do you log a stack trace?",
        "options": {
            "A": "<pre>console.trace()</pre>",
            "B": "<pre>console.stack()</pre>",
            "C": "<pre>console.track()</pre>",
            "D": "<pre>console.callstack()</pre>"
        },
        "correct": "A",
        "explanation": "console.trace() outputs a stack trace to the console, showing the call path to reach that point.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 23,
        "question": "What is a common mistake when using console.log for objects?",
        "options": {
            "A": "Objects show current state when expanded, not when logged",
            "B": "Objects cannot be logged",
            "C": "Objects log as undefined",
            "D": "Objects clear the console"
        },
        "correct": "A",
        "explanation": "When you log objects, the console shows the object's current state when expanded, not its state when logged.",
        "topic": {
            "topics": ["Common debugging scenarios"]
        }
    },
    {
        "id": 24,
        "question": "How can you quickly test a value in the console?",
        "options": {
            "A": "Type JavaScript directly in console and press Enter",
            "B": "Create a new HTML file",
            "C": "Use console.test() method",
            "D": "Refresh the page with new code"
        },
        "correct": "A",
        "explanation": "You can type any JavaScript expression directly in the browser console to test and evaluate it immediately.",
        "topic": {
            "topics": ["Debugging tools"]
        }
    },
    {
        "id": 25,
        "question": "What does 'stepping out' do in debugger?",
        "options": {
            "A": "Executes remaining function and pauses at caller",
            "B": "Exits the debugger",
            "C": "Steps out of the current file",
            "D": "Skips the entire function"
        },
        "correct": "A",
        "explanation": "'Step out' continues execution until the current function returns, then pauses in the calling function.",
        "topic": {
            "topics": ["Debugging tools"]
        }
    },
    {
        "id": 26,
        "question": "How do you log informational messages?",
        "options": {
            "A": "<pre>console.info()</pre>",
            "B": "<pre>console.information()</pre>",
            "C": "<pre>console.message()</pre>",
            "D": "<pre>console.note()</pre>"
        },
        "correct": "A",
        "explanation": "console.info() displays informational messages, often with a distinctive icon in some browsers.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 27,
        "question": "What is the purpose of setting breakpoints in multiple places?",
        "options": {
            "A": "To isolate where an error occurs",
            "B": "To make code run faster",
            "C": "To prevent errors",
            "D": "To organize code better"
        },
        "correct": "A",
        "explanation": "Setting multiple breakpoints helps narrow down exactly where in the code an issue is occurring.",
        "topic": {
            "topics": ["Debugging workflow"]
        }
    },
    {
        "id": 28,
        "question": "How can you see all available console methods?",
        "options": {
            "A": "Type 'console' in console and explore properties",
            "B": "They are listed in HTML",
            "C": "Use console.help()",
            "D": "Check JavaScript documentation only"
        },
        "correct": "A",
        "explanation": "Typing 'console' in the browser console will show all available methods and properties.",
        "topic": {
            "topics": ["Console methods"]
        }
    },
    {
        "id": 29,
        "question": "What should you do after fixing a bug?",
        "options": {
            "A": "Test the fix and remove debug code",
            "B": "Add more features immediately",
            "C": "Keep all console.log statements",
            "D": "Close developer tools quickly"
        },
        "correct": "A",
        "explanation": "Always test that your fix works and clean up debug statements before finalizing your code.",
        "topic": {
            "topics": ["Debugging workflow"]
        }
    },
    {
        "id": 30,
        "question": "Why is it important to understand basic debugging?",
        "options": {
            "A": "It saves time and helps understand code flow",
            "B": "It makes code run faster",
            "C": "It's required for all JavaScript",
            "D": "It prevents all future bugs"
        },
        "explanation": "Effective debugging saves development time, helps understand how code executes, and is an essential developer skill.",
        "correct": "A",
        "topic": {
            "topics": ["Common debugging scenarios"]
        }
    }
];

module.exports = { metadata, questions };