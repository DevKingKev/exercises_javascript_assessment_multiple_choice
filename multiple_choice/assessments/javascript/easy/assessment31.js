// assessment31.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript ES Module Import/Export Basics",
    "description": "Fundamental concepts of ES module syntax including default and named exports and imports.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Named exports",
        "Default exports",
        "Import syntax",
        "Export syntax",
        "Module patterns",
        "Syntax differences",
        "Common usage"
    ],
    "topicLinks": [
        {
            "topicName": "Named exports",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"
        },
        {
            "topicName": "Default exports",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#default_exports"
        },
        {
            "topicName": "Import syntax",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"
        },
        {
            "topicName": "Export syntax",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"
        },
        {
            "topicName": "Module patterns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
        },
        {
            "topicName": "Syntax differences",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features"
        },
        {
            "topicName": "Common usage",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_features_into_your_script"
        }
    ],
    "assessmentId": 31,
    "assessmentUniqueId": 1762770437062,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the correct syntax for a named export?",
        "options": {
            "A": "<pre>export const name = 'value';</pre>",
            "B": "<pre>export default const name = 'value';</pre>",
            "C": "<pre>const name = 'value'; export name;</pre>",
            "D": "<pre>export = name;</pre>"
        },
        "correct": "A",
        "explanation": "Named exports use the <pre>export</pre> keyword before the declaration, or can be exported separately using <pre>export { name };</pre>",
        "topic": {
            "topics": ["Named exports"]
        }
    },
    {
        "id": 2,
        "question": "How do you import a default export?",
        "options": {
            "A": "<pre>import Module from './module.js';</pre>",
            "B": "<pre>import { Module } from './module.js';</pre>",
            "C": "<pre>import default Module from './module.js';</pre>",
            "D": "<pre>import * as Module from './module.js';</pre>"
        },
        "correct": "A",
        "explanation": "Default imports don't use curly braces. You can choose any name for the imported default export.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 3,
        "question": "What is the correct way to export a function as default?",
        "options": {
            "A": "<pre>export default function() {}</pre>",
            "B": "<pre>export function default() {}</pre>",
            "C": "<pre>function myFunc() {} export default myFunc;</pre>",
            "D": "Both A and C"
        },
        "correct": "D",
        "explanation": "You can export a function as default either inline with the declaration or separately after defining it.",
        "topic": {
            "topics": ["Default exports"]
        }
    },
    {
        "id": 4,
        "question": "How do you import multiple named exports?",
        "options": {
            "A": "<pre>import { name1, name2 } from './module.js';</pre>",
            "B": "<pre>import name1, name2 from './module.js';</pre>",
            "C": "<pre>import [name1, name2] from './module.js';</pre>",
            "D": "<pre>import (name1, name2) from './module.js';</pre>"
        },
        "correct": "A",
        "explanation": "Multiple named imports use curly braces with comma-separated names inside.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 5,
        "question": "What is the difference between default and named exports?",
        "options": {
            "A": "A module can have one default but multiple named exports",
            "B": "Default exports are private, named are public",
            "C": "Named exports are faster",
            "D": "There is no difference"
        },
        "correct": "A",
        "explanation": "Each module can have only one default export but can have multiple named exports.",
        "topic": {
            "topics": ["Syntax differences"]
        }
    },
    {
        "id": 6,
        "question": "How do you import everything from a module?",
        "options": {
            "A": "<pre>import * as module from './module.js';</pre>",
            "B": "<pre>import all from './module.js';</pre>",
            "C": "<pre>import { * } from './module.js';</pre>",
            "D": "<pre>import ./module.js;</pre>"
        },
        "correct": "A",
        "explanation": "The namespace import <pre>import * as name</pre> imports all exports into an object.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 7,
        "question": "What is this export syntax? [CODE]export { variable1, variable2 };[/CODE]",
        "options": {
            "A": "Named exports",
            "B": "Default export",
            "C": "Multiple default exports",
            "D": "Invalid syntax"
        },
        "correct": "A",
        "explanation": "This exports multiple variables as named exports using the export list syntax.",
        "topic": {
            "topics": ["Named exports"]
        }
    },
    {
        "id": 8,
        "question": "How do you import a named export with a different name?",
        "options": {
            "A": "<pre>import { original as alias } from './module.js';</pre>",
            "B": "<pre>import original as alias from './module.js';</pre>",
            "C": "<pre>import { alias } from './module.js' as original;</pre>",
            "D": "<pre>import alias from './module.js' as original;</pre>"
        },
        "correct": "A",
        "explanation": "Use the <pre>as</pre> keyword inside the import braces to rename a named import.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 9,
        "question": "What does this export? [CODE]export default class Calculator {}[/CODE]",
        "options": {
            "A": "A default export",
            "B": "A named export",
            "C": "Both default and named export",
            "D": "Invalid syntax"
        },
        "correct": "A",
        "explanation": "The <pre>default</pre> keyword makes this a default export of the class.",
        "topic": {
            "topics": ["Default exports"]
        }
    },
    {
        "id": 10,
        "question": "How do you import both default and named exports?",
        "options": {
            "A": "<pre>import defaultExport, { namedExport } from './module.js';</pre>",
            "B": "<pre>import defaultExport, namedExport from './module.js';</pre>",
            "C": "<pre>import { defaultExport, namedExport } from './module.js';</pre>",
            "D": "<pre>import defaultExport from './module.js' and namedExport;</pre>"
        },
        "correct": "A",
        "explanation": "Place the default import first (without braces) followed by named imports in braces.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 11,
        "question": "What is the correct way to export a variable that was declared earlier?",
        "options": {
            "A": "<pre>export { variableName };</pre>",
            "B": "<pre>export variableName;</pre>",
            "C": "<pre>export let variableName;</pre>",
            "D": "<pre>export = variableName;</pre>"
        },
        "correct": "A",
        "explanation": "Use the export list syntax to export variables that were declared separately.",
        "topic": {
            "topics": ["Named exports"]
        }
    },
    {
        "id": 12,
        "question": "What type of export is this? [CODE]const config = {};\nexport { config as default };[/CODE]",
        "options": {
            "A": "Default export",
            "B": "Named export",
            "C": "Both default and named",
            "D": "Invalid syntax"
        },
        "correct": "A",
        "explanation": "Using <pre>as default</pre> in an export list makes it a default export.",
        "topic": {
            "topics": ["Default exports"]
        }
    },
    {
        "id": 13,
        "question": "How do you import a module for side effects only?",
        "options": {
            "A": "<pre>import './module.js';</pre>",
            "B": "<pre>import sideEffects from './module.js';</pre>",
            "C": "<pre>import {} from './module.js';</pre>",
            "D": "<pre>import * from './module.js';</pre>"
        },
        "correct": "A",
        "explanation": "Importing without any bindings runs the module's code for side effects without importing any exports.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 14,
        "question": "What is wrong with this code? [CODE]export default const API_KEY = '123';[/CODE]",
        "options": {
            "A": "Cannot use 'const' with default export this way",
            "B": "Should use 'var' instead of 'const'",
            "C": "Missing semicolon",
            "D": "Nothing is wrong"
        },
        "correct": "A",
        "explanation": "When exporting a default const/let/var declaration, you need to either export separately or use: <pre>const API_KEY = '123'; export default API_KEY;</pre>",
        "topic": {
            "topics": ["Default exports"]
        }
    },
    {
        "id": 15,
        "question": "How do you export multiple functions as named exports?",
        "options": {
            "A": "<pre>export function func1() {}\nexport function func2() {}</pre>",
            "B": "<pre>export default function func1() {}\nexport default function func2() {}</pre>",
            "C": "<pre>export { func1, func2 };</pre>",
            "D": "Both A and C"
        },
        "correct": "D",
        "explanation": "You can export each function individually or use an export list to export multiple at once.",
        "topic": {
            "topics": ["Named exports"]
        }
    },
    {
        "id": 16,
        "question": "What does this import do? [CODE]import { reallyLongName as short } from './module.js';[/CODE]",
        "options": {
            "A": "Imports a named export with a shorter alias",
            "B": "Imports a default export with a different name",
            "C": "Imports everything with an alias",
            "D": "Invalid syntax"
        },
        "correct": "A",
        "explanation": "This imports the named export 'reallyLongName' but gives it the local name 'short'.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 17,
        "question": "Can a module have both default and named exports?",
        "options": {
            "A": "Yes",
            "B": "No",
            "C": "Only in Node.js",
            "D": "Only in browsers"
        },
        "correct": "A",
        "explanation": "A module can have one default export and multiple named exports at the same time.",
        "topic": {
            "topics": ["Module patterns"]
        }
    },
    {
        "id": 18,
        "question": "What is the correct way to export an object as default?",
        "options": {
            "A": "<pre>export default { key: 'value' };</pre>",
            "B": "<pre>export { key: 'value' } as default;</pre>",
            "C": "<pre>export default object { key: 'value' };</pre>",
            "D": "<pre>default export { key: 'value' };</pre>"
        },
        "correct": "A",
        "explanation": "Use <pre>export default</pre> followed by the object literal to export it as the default.",
        "topic": {
            "topics": ["Default exports"]
        }
    },
    {
        "id": 19,
        "question": "How do you import a default export with a named import syntax?",
        "options": {
            "A": "You cannot - use different syntax",
            "B": "<pre>import { default as alias } from './module.js';</pre>",
            "C": "<pre>import default from './module.js';</pre>",
            "D": "<pre>import * as default from './module.js';</pre>"
        },
        "correct": "B",
        "explanation": "You can import a default export as a named import using <pre>import { default as name }</pre>",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 20,
        "question": "What is this syntax? [CODE]export const pi = 3.14;\nexport const e = 2.71;[/CODE]",
        "options": {
            "A": "Multiple named exports",
            "B": "Multiple default exports",
            "C": "Invalid - too many exports",
            "D": "Side-effect exports"
        },
        "correct": "A",
        "explanation": "This exports two constants as separate named exports from the module.",
        "topic": {
            "topics": ["Named exports"]
        }
    },
    {
        "id": 21,
        "question": "How do you re-export from another module?",
        "options": {
            "A": "<pre>export { name } from './other-module.js';</pre>",
            "B": "<pre>import { name } from './other-module.js'; export name;</pre>",
            "C": "<pre>export './other-module.js';</pre>",
            "D": "<pre>re-export name from './other-module.js';</pre>"
        },
        "correct": "A",
        "explanation": "The re-export syntax allows exporting from another module without importing it first.",
        "topic": {
            "topics": ["Export syntax"]
        }
    },
    {
        "id": 22,
        "question": "What is the main advantage of named exports?",
        "options": {
            "A": "Can export multiple values from a module",
            "B": "Faster than default exports",
            "C": "Work in older browsers",
            "D": "Auto-complete in editors"
        },
        "correct": "A",
        "explanation": "Named exports allow a module to export multiple values, while default exports are limited to one per module.",
        "topic": {
            "topics": ["Syntax differences"]
        }
    },
    {
        "id": 23,
        "question": "How do you export a function after defining it?",
        "options": {
            "A": "<pre>function calculate() {}\nexport { calculate };</pre>",
            "B": "<pre>function calculate() {}\nexport calculate;</pre>",
            "C": "<pre>export function calculate() {}</pre>",
            "D": "Both A and C"
        },
        "correct": "D",
        "explanation": "You can export a function either inline with its declaration or separately using the export list.",
        "topic": {
            "topics": ["Named exports"]
        }
    },
    {
        "id": 24,
        "question": "What is the purpose of this import? [CODE]import 'styles.css';[/CODE]",
        "options": {
            "A": "Import for side effects only",
            "B": "Import default from CSS",
            "C": "Import all CSS classes",
            "D": "Invalid import"
        },
        "correct": "A",
        "explanation": "This imports a module (like CSS) solely for its side effects without importing any specific exports.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 25,
        "question": "What is the difference between these two? [CODE]export default function() {}\nexport function named() {}[/CODE]",
        "options": {
            "A": "First is default, second is named export",
            "B": "Both are named exports",
            "C": "First is private, second is public",
            "D": "No difference"
        },
        "correct": "A",
        "explanation": "The first function is the module's default export, the second is a named export.",
        "topic": {
            "topics": ["Syntax differences"]
        }
    },
    {
        "id": 26,
        "question": "How do you import all named exports as an object?",
        "options": {
            "A": "<pre>import * as utils from './utils.js';</pre>",
            "B": "<pre>import utils from './utils.js';</pre>",
            "C": "<pre>import { * } from './utils.js';</pre>",
            "D": "<pre>import all utils from './utils.js';</pre>"
        },
        "correct": "A",
        "explanation": "The namespace import <pre>import * as name</pre> collects all named exports into an object.",
        "topic": {
            "topics": ["Import syntax"]
        }
    },
    {
        "id": 27,
        "question": "What is wrong with this export? [CODE]const data = {};\nexport data;[/CODE]",
        "options": {
            "A": "Missing curly braces for named export",
            "B": "Should use 'export default'",
            "C": "Cannot export const variables",
            "D": "Nothing is wrong"
        },
        "correct": "A",
        "explanation": "To export a previously declared variable, use <pre>export { data };</pre> with curly braces.",
        "topic": {
            "topics": ["Named exports"]
        }
    },
    {
        "id": 28,
        "question": "How do you re-export everything from another module?",
        "options": {
            "A": "<pre>export * from './other-module.js';</pre>",
            "B": "<pre>import * from './other-module.js'; export *;</pre>",
            "C": "<pre>export all from './other-module.js';</pre>",
            "D": "<pre>re-export * from './other-module.js';</pre>"
        },
        "correct": "A",
        "explanation": "<pre>export *</pre> re-exports all named exports from the specified module.",
        "topic": {
            "topics": ["Export syntax"]
        }
    },
    {
        "id": 29,
        "question": "What is the main advantage of default exports?",
        "options": {
            "A": "Simpler import syntax for main module functionality",
            "B": "Better performance",
            "C": "Work in CommonJS modules",
            "D": "Auto-renaming in imports"
        },
        "correct": "A",
        "explanation": "Default exports provide a clean import syntax for the primary functionality of a module.",
        "topic": {
            "topics": ["Syntax differences"]
        }
    },
    {
        "id": 30,
        "question": "What does this import do? [CODE]import Main, { helper1, helper2 } from './module.js';[/CODE]",
        "options": {
            "A": "Imports default and two named exports",
            "B": "Imports three named exports",
            "C": "Imports default with two aliases",
            "D": "Invalid syntax"
        },
        "correct": "A",
        "explanation": "This imports the default export as 'Main' and two named exports 'helper1' and 'helper2'.",
        "topic": {
            "topics": ["Import syntax"]
        }
    }
];

module.exports = { metadata, questions };