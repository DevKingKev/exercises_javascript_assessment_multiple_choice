module.exports = {
    "metadata": {
        "title": "JavaScript ES Module Fundamentals",
        "description": "Basic import and export syntax, default vs named exports, and common ES module patterns.",
        "difficulty": "easy",
        "domain": "javascript",
        "timeLimit": 30,
        "questionCount": 30,
        "topics": [
            "Export declarations",
            "Import statements",
            "Default exports",
            "Named exports",
            "Module syntax",
            "Export patterns",
            "Import patterns"
        ],
        "topicLinks": [
            {
                "topicName": "Export declarations",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"
            },
            {
                "topicName": "Import statements",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"
            },
            {
                "topicName": "Default exports",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#default_exports"
            },
            {
                "topicName": "Named exports",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#named_exports"
            },
            {
                "topicName": "Module syntax",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
                "topicName": "Export patterns",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features"
            },
            {
                "topicName": "Import patterns",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_features_into_your_script"
            }
        ],
        "assessmentId": 32,
        "assessmentUniqueId": 1762771175390,
        "testType": "multiple-choice"
    },
    "questions": [
        {
            "id": 1,
            "question": "What is the correct syntax to export a variable as a named export?",
            "options": {
                "A": "<pre>const count = 5; export count;</pre>",
                "B": "<pre>const count = 5; export default count;</pre>",
                "C": "<pre>export default const count = 5;</pre>",
                "D": "<pre>export const count = 5;</pre>"
            },
            "correct": "D",
            "explanation": "Named exports use the <pre>export</pre> keyword before the variable declaration, or can be exported later with <pre>export { count };</pre>",
            "topic": {
                "topics": [
                    "Named exports"
                ]
            }
        },
        {
            "id": 2,
            "question": "How do you import a named export called 'apiKey'?",
            "options": {
                "A": "<pre>import default apiKey from './config.js';</pre>",
                "B": "<pre>import apiKey from './config.js';</pre>",
                "C": "<pre>import { apiKey } from './config.js';</pre>",
                "D": "<pre>import * as apiKey from './config.js';</pre>"
            },
            "correct": "C",
            "explanation": "Named imports use curly braces around the export name. The name must match exactly.",
            "topic": {
                "topics": [
                    "Import statements"
                ]
            }
        },
        {
            "id": 3,
            "question": "What type of export is this? [CODE]export default class User {}[/CODE]",
            "options": {
                "A": "Named export",
                "B": "Default export",
                "C": "Both default and named",
                "D": "Invalid syntax"
            },
            "correct": "B",
            "explanation": "The <pre>default</pre> keyword indicates this is the module's default export.",
            "topic": {
                "topics": [
                    "Default exports"
                ]
            }
        },
        {
            "id": 4,
            "question": "How can you export multiple variables at once?",
            "options": {
                "A": "<pre>export { name, age, email };</pre>",
                "B": "<pre>export name, age, email;</pre>",
                "C": "<pre>export default name, age, email;</pre>",
                "D": "<pre>export [name, age, email];</pre>"
            },
            "correct": "A",
            "explanation": "Use an export list with curly braces to export multiple previously declared variables.",
            "topic": {
                "topics": [
                    "Named exports"
                ]
            }
        },
        {
            "id": 5,
            "question": "What is the main difference between default and named imports?",
            "options": {
                "A": "There is no difference",
                "B": "Named imports are faster",
                "C": "Default imports only work with functions",
                "D": "Default imports don't use curly braces"
            },
            "correct": "D",
            "explanation": "Default imports: <pre>import name from './module.js';</pre> Named imports: <pre>import { name } from './module.js';</pre>",
            "topic": {
                "topics": [
                    "Import patterns"
                ]
            }
        },
        {
            "id": 6,
            "question": "How do you import a default export with a custom name?",
            "options": {
                "A": "<pre>import myName from './module.js';</pre>",
                "B": "<pre>import { default as myName } from './module.js';</pre>",
                "C": "<pre>import myName as default from './module.js';</pre>",
                "D": "Both A and B"
            },
            "correct": "D",
            "explanation": "You can use either syntax to import a default export with a custom name.",
            "topic": {
                "topics": [
                    "Import statements"
                ]
            }
        },
        {
            "id": 7,
            "question": "What does this export? [CODE]const PI = 3.14;\nexport { PI };</pre>",
            "options": {
                "A": "Both default and named",
                "B": "A default export",
                "C": "A named export",
                "D": "Nothing - invalid syntax"
            },
            "correct": "C",
            "explanation": "This exports PI as a named export using the export list syntax.",
            "topic": {
                "topics": [
                    "Named exports"
                ]
            }
        },
        {
            "id": 8,
            "question": "How do you import all exports from a module as an object?",
            "options": {
                "A": "<pre>import all from './utils.js';</pre>",
                "B": "<pre>import utils from './utils.js';</pre>",
                "C": "<pre>import { * } from './utils.js';</pre>",
                "D": "<pre>import * as utils from './utils.js';</pre>"
            },
            "correct": "D",
            "explanation": "The namespace import syntax imports all exports as properties of an object.",
            "topic": {
                "topics": [
                    "Import patterns"
                ]
            }
        },
        {
            "id": 9,
            "question": "What is wrong with this code? [CODE]export const name = 'John';\nexport default name;[/CODE]",
            "options": {
                "A": "Should use 'let' instead of 'const'",
                "B": "Cannot export same variable twice",
                "C": "Missing semicolons",
                "D": "Nothing - it's valid"
            },
            "correct": "D",
            "explanation": "This is valid - it exports 'name' as both a named export and the default export.",
            "topic": {
                "topics": [
                    "Export patterns"
                ]
            }
        },
        {
            "id": 10,
            "question": "How do you import a named export with a different local name?",
            "options": {
                "A": "<pre>import { longName as short } from './module.js';</pre>",
                "B": "<pre>import longName as short from './module.js';</pre>",
                "C": "<pre>import short from './module.js' as longName;</pre>",
                "D": "<pre>import { short } from './module.js' as longName;</pre>"
            },
            "correct": "A",
            "explanation": "Use the <pre>as</pre> keyword inside the import braces to rename a named import.",
            "topic": {
                "topics": [
                    "Import statements"
                ]
            }
        },
        {
            "id": 11,
            "question": "What is the correct way to export a function as default?",
            "options": {
                "A": "<pre>export default function calculate() {}</pre>",
                "B": "<pre>export function default calculate() {}</pre>",
                "C": "<pre>function calculate() {} export default;</pre>",
                "D": "<pre>default export function calculate() {}</pre>"
            },
            "correct": "A",
            "explanation": "The <pre>export default</pre> keywords come before the function declaration.",
            "topic": {
                "topics": [
                    "Default exports"
                ]
            }
        },
        {
            "id": 12,
            "question": "How do you import a module only for its side effects?",
            "options": {
                "A": "<pre>import sideEffects from './styles.css';</pre>",
                "B": "<pre>import './styles.css';</pre>",
                "C": "<pre>import {} from './styles.css';</pre>",
                "D": "<pre>import * from './styles.css';</pre>"
            },
            "correct": "B",
            "explanation": "An import statement without any bindings runs the module for side effects only.",
            "topic": {
                "topics": [
                    "Import patterns"
                ]
            }
        },
        {
            "id": 13,
            "question": "What does this import do? [CODE]import MathUtils, { PI, calculate } from './math.js';[/CODE]",
            "options": {
                "A": "Imports default with two parameters",
                "B": "Imports three named exports",
                "C": "Imports default and two named exports",
                "D": "Invalid syntax"
            },
            "correct": "C",
            "explanation": "This imports the default export as 'MathUtils' and two named exports 'PI' and 'calculate'.",
            "topic": {
                "topics": [
                    "Import statements"
                ]
            }
        },
        {
            "id": 14,
            "question": "How do you export a variable that was declared earlier?",
            "options": {
                "A": "<pre>const data = {};\nexport { data };</pre>",
                "B": "Both A and C",
                "C": "<pre>const data = {};\nexport default data;</pre>",
                "D": "<pre>const data = {};\nexport data;</pre>"
            },
            "correct": "B",
            "explanation": "You can export a previously declared variable as either a named export or default export.",
            "topic": {
                "topics": [
                    "Export declarations"
                ]
            }
        },
        {
            "id": 15,
            "question": "What is the result of this import? [CODE]import * as Lib from './library.js';[/CODE]",
            "options": {
                "A": "Only named exports are imported",
                "B": "Only default export is imported",
                "C": "All exports are available as Lib.properties",
                "D": "Nothing is imported"
            },
            "correct": "C",
            "explanation": "Namespace imports collect all exports (both default and named) into an object.",
            "topic": {
                "topics": [
                    "Import patterns"
                ]
            }
        },
        {
            "id": 16,
            "question": "How do you re-export a named export from another module?",
            "options": {
                "A": "<pre>re-export name from './other.js';</pre>",
                "B": "<pre>import { name } from './other.js';\nexport name;</pre>",
                "C": "<pre>export name from './other.js';</pre>",
                "D": "<pre>export { name } from './other.js';</pre>"
            },
            "correct": "D",
            "explanation": "The re-export syntax allows exporting from another module without creating a local binding.",
            "topic": {
                "topics": [
                    "Export patterns"
                ]
            }
        },
        {
            "id": 17,
            "question": "What is the advantage of named exports?",
            "options": {
                "A": "Better performance",
                "B": "Simpler import syntax",
                "C": "Can export multiple values from one module",
                "D": "Auto-completion in editors"
            },
            "correct": "C",
            "explanation": "Named exports allow a module to export multiple values, while default exports are limited to one per module.",
            "topic": {
                "topics": [
                    "Export patterns"
                ]
            }
        },
        {
            "id": 18,
            "question": "How do you export an object literal as default?",
            "options": {
                "A": "<pre>default export { key: 'value' };</pre>",
                "B": "<pre>export { key: 'value' } as default;</pre>",
                "C": "<pre>export default object { key: 'value' };</pre>",
                "D": "<pre>export default { key: 'value' };</pre>"
            },
            "correct": "D",
            "explanation": "Use <pre>export default</pre> followed by the object literal to export it as the default.",
            "topic": {
                "topics": [
                    "Default exports"
                ]
            }
        },
        {
            "id": 19,
            "question": "What does this export? [CODE]export const version = '1.0';\nexport const author = 'John';[/CODE]",
            "options": {
                "A": "Two named exports",
                "B": "One default and one named export",
                "C": "Two default exports",
                "D": "Invalid - too many exports"
            },
            "correct": "A",
            "explanation": "This exports two constants as separate named exports from the module.",
            "topic": {
                "topics": [
                    "Named exports"
                ]
            }
        },
        {
            "id": 20,
            "question": "How do you import the default export using named import syntax?",
            "options": {
                "A": "<pre>import { default as MyModule } from './module.js';</pre>",
                "B": "<pre>import default MyModule from './module.js';</pre>",
                "C": "<pre>import MyModule as default from './module.js';</pre>",
                "D": "<pre>import { MyModule } from './module.js' as default;</pre>"
            },
            "correct": "A",
            "explanation": "You can import the default export as a named import using <pre>default as name</pre> syntax.",
            "topic": {
                "topics": [
                    "Import statements"
                ]
            }
        },
        {
            "id": 21,
            "question": "What is the correct way to export a class?",
            "options": {
                "A": "<pre>export class Calculator {}</pre>",
                "B": "<pre>class Calculator {} export Calculator;</pre>",
                "C": "<pre>export default class Calculator {}</pre>",
                "D": "All of the above"
            },
            "correct": "D",
            "explanation": "Classes can be exported as named exports, default exports, or exported after declaration.",
            "topic": {
                "topics": [
                    "Export declarations"
                ]
            }
        },
        {
            "id": 22,
            "question": "How do you import multiple named exports in one statement?",
            "options": {
                "A": "<pre>import func1, func2, func3 from './utils.js';</pre>",
                "B": "<pre>import { func1, func2, func3 } from './utils.js';</pre>",
                "C": "<pre>import [func1, func2, func3] from './utils.js';</pre>",
                "D": "<pre>import func1; import func2; import func3 from './utils.js';</pre>"
            },
            "correct": "B",
            "explanation": "Multiple named imports are comma-separated within curly braces.",
            "topic": {
                "topics": [
                    "Import statements"
                ]
            }
        },
        {
            "id": 23,
            "question": "What is the purpose of this export? [CODE]export { User as default };</CODE>",
            "options": {
                "A": "Exports default as User",
                "B": "Exports User as the default export",
                "C": "Exports both User and default",
                "D": "Invalid syntax"
            },
            "correct": "B",
            "explanation": "This exports the User variable as the module's default export using the export list syntax.",
            "topic": {
                "topics": [
                    "Default exports"
                ]
            }
        },
        {
            "id": 24,
            "question": "How do you re-export all named exports from another module?",
            "options": {
                "A": "<pre>export all from './math.js';</pre>",
                "B": "<pre>export * from './math.js';</pre>",
                "C": "<pre>import * from './math.js'; export *;</pre>",
                "D": "<pre>re-export * from './math.js';</pre>"
            },
            "correct": "B",
            "explanation": "<pre>export *</pre> re-exports all named exports from the specified module.",
            "topic": {
                "topics": [
                    "Export patterns"
                ]
            }
        },
        {
            "id": 25,
            "question": "What is the main advantage of default exports?",
            "options": {
                "A": "Can export multiple values",
                "B": "Better performance",
                "C": "Clean import syntax for primary module functionality",
                "D": "Work in older browsers"
            },
            "correct": "C",
            "explanation": "Default exports provide a simple, clean import syntax for the main functionality of a module.",
            "topic": {
                "topics": [
                    "Export patterns"
                ]
            }
        },
        {
            "id": 26,
            "question": "How do you export a constant as both default and named?",
            "options": {
                "A": "<pre>export const API_URL = '...';\nexport default API_URL;</pre>",
                "B": "<pre>export default const API_URL = '...';</pre>",
                "C": "<pre>export API_URL as default and named;</pre>",
                "D": "Cannot export both ways"
            },
            "correct": "A",
            "explanation": "You can export the same value as both a named export and the default export using separate statements.",
            "topic": {
                "topics": [
                    "Export patterns"
                ]
            }
        },
        {
            "id": 27,
            "question": "What does this import statement do? [CODE]import './initialize.js';[/CODE]",
            "options": {
                "A": "Runs the module for side effects",
                "B": "Imports the default export",
                "C": "Imports all named exports",
                "D": "Invalid import statement"
            },
            "correct": "A",
            "explanation": "This runs the module's code but doesn't import any exports, useful for initialization scripts.",
            "topic": {
                "topics": [
                    "Import patterns"
                ]
            }
        },
        {
            "id": 28,
            "question": "How do you export a function that was declared earlier?",
            "options": {
                "A": "<pre>function greet() {}\nexport { greet };</pre>",
                "B": "<pre>function greet() {}\nexport greet;</pre>",
                "C": "Both A and C",
                "D": "<pre>export function greet() {}</pre>"
            },
            "correct": "C",
            "explanation": "You can export a function either inline with its declaration or separately after defining it.",
            "topic": {
                "topics": [
                    "Export declarations"
                ]
            }
        },
        {
            "id": 29,
            "question": "What is the correct syntax for a mixed import?",
            "options": {
                "A": "<pre>import Main, { helper } from './module.js';</pre>",
                "B": "<pre>import { Main, helper } from './module.js';</pre>",
                "C": "<pre>import Main and { helper } from './module.js';</pre>",
                "D": "<pre>import Main, helper from './module.js';</pre>"
            },
            "correct": "A",
            "explanation": "For mixed imports, the default import comes first (no braces) followed by named imports in braces.",
            "topic": {
                "topics": [
                    "Import statements"
                ]
            }
        },
        {
            "id": 30,
            "question": "What is a key benefit of ES modules over older module systems?",
            "options": {
                "A": "Better performance in all cases",
                "B": "Static analysis and tree-shaking",
                "C": "Simpler syntax only",
                "D": "Works without build tools"
            },
            "explanation": "ES modules enable static analysis, allowing tools to determine dependencies at compile time and remove unused code (tree-shaking).",
            "correct": "B",
            "topic": {
                "topics": [
                    "Module syntax"
                ]
            }
        }
    ]
};
