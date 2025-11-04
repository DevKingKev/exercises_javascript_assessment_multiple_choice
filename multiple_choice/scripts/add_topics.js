const fs = require('fs');
const path = require('path');

const assessmentsRoot = path.join(__dirname, '..', 'assessments');

// Mapping from canonical topic string (as appears in metadata.topics) to MDN link and keywords
const TOPIC_MAP = {
    // easy/assessment1
    'Variable declarations (var, let, const)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables',
        keywords: ['var', 'let', 'const', 'declare variable', 'declare']
    },
    'Array and string methods': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
        keywords: ['array', 'string', 'toUpperCase', 'toLowerCase', 'join', 'slice', 'push', 'pop', 'map']
    },
    'Function basics and scope': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
        keywords: ['function', 'scope', 'return', 'parameter', 'arguments']
    },
    'Object properties and creation': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
        keywords: ['object', 'property', 'object.create', 'hasOwnProperty']
    },
    'Conditional statements and loops': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling',
        keywords: ['if', 'else', 'switch', 'for (', 'while (', 'loop']
    },
    'DOM manipulation basics': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
        keywords: ['document', 'getElementById', 'querySelector', 'innerHTML', 'DOM']
    },
    'Event handling fundamentals': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener',
        keywords: ['event', 'addEventListener', 'click', 'event delegation']
    },

    // easy/assessment2
    'Type coercion and typeof operator': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        keywords: ['typeof', 'coercion', '==', '===', 'toString']
    },
    'Array methods (unshift, pop, includes, filter, map)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
        keywords: ['unshift', 'pop', 'includes', 'filter', 'map', 'array']
    },
    'String methods (toLowerCase, trim, length)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
        keywords: ['toLowerCase', 'trim', 'length', "'", 'string']
    },
    'Variable scoping (let, const, block scope)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Glossary/Scope',
        keywords: ['scope', 'block scope', 'let', 'const']
    },
    'Boolean logic and NaN handling': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Glossary/Falsy',
        keywords: ['NaN', 'Boolean', 'true', 'false', 'falsy']
    },
    'Control flow statements': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling',
        keywords: ['if', 'switch', 'for', 'while']
    },
    'Object creation methods': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
        keywords: ['new Object', '{}', 'Object.create', 'constructor']
    },

    // easy/assessment3
    'Math object methods (Math.max, Math.min, Math.pow)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math',
        keywords: ['math', 'Math.', 'pow', 'max', 'min']
    },
    'Array methods (push, slice, reverse, sort, concat)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
        keywords: ['push', 'slice', 'reverse', 'sort', 'concat', 'array']
    },
    'String methods (slice, charAt, substring, indexOf)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
        keywords: ['charAt', 'substring', 'indexOf', 'slice', 'string']
    },
    'Function declaration and invocation': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
        keywords: ['function', 'invoke', 'call()', 'apply()']
    },
    'Mathematical operations and precedence': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence',
        keywords: ['+', '-', '*', '/', 'precedence']
    },
    'Array operations and manipulation': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections',
        keywords: ['array', 'splice', 'push', 'pop']
    },
    'String indexing and character access': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
        keywords: ['[0]', 'charAt', 'string', 'index']
    },

    // easy/assessment4
    'ES6+ Features (arrow functions, template literals, destructuring)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript',
        keywords: ['arrow', '=>', 'template', '`${', 'destructur']
    },
    'Error handling (try/catch, error types)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling',
        keywords: ['try', 'catch', 'throw', 'error']
    },
    'Date and Time operations': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date',
        keywords: ['Date', 'getFullYear', 'timestamp', 'Date.now']
    },
    'JSON parsing and stringifying': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
        keywords: ['JSON.parse', 'JSON.stringify', 'JSON']
    },
    'Regular expressions basics': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
        keywords: ['regex', 'RegExp', '\\d', '^', '$', 'match']
    },
    'Loop types and iteration methods': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
        keywords: ['for', 'while', 'for...of', 'for...in', 'iteration']
    },
    'Callback functions and basic async concepts': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous',
        keywords: ['callback', 'setTimeout', 'async', 'promise', 'then']
    },
    'Modern JavaScript syntax and best practices': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript',
        keywords: ['ES6', 'const', 'let', 'arrow', 'template', 'destructur']
    },

    // medium/assessment1
    'Closures and lexical scope': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        keywords: ['closure', 'closures', 'lexical', 'outer', 'inner', 'count']
    },
    'Prototypes and inheritance': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain',
        keywords: ['prototype', 'prototype chain', 'inheritance', 'Person.prototype']
    },
    'Promises and async/await': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises',
        keywords: ['promise', 'then', 'catch', 'async', 'await']
    },
    "The 'this' keyword and binding": {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
        keywords: ['this', 'bind', 'call', 'apply', 'greetFunc']
    },
    'ES6 Classes and inheritance': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
        keywords: ['class', 'extends', 'constructor', 'super']
    },
    'Array methods (reduce, map, filter, find)': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
        keywords: ['reduce', 'map', 'filter', 'find', 'array']
    },
    'Spread and rest operators': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
        keywords: ['...', 'spread', 'rest', '...rest']
    },
    'Destructuring patterns': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
        keywords: ['destructur', 'const [', 'const {']
    },
    'Event loop and call stack': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop',
        keywords: ['event loop', 'call stack', 'microtask', 'setTimeout']
    },
    'Higher-order functions': {
        mdn: 'https://developer.mozilla.org/en-US/docs/Glossary/Higher-order_function',
        keywords: ['higher-order', 'callback', 'map', 'reduce', 'function passed']
    }
};

function buildRefTopic (topicName) {
    const entry = TOPIC_MAP[topicName];
    if (entry) return { topicName, refLink: entry.mdn };
    const search = 'https://developer.mozilla.org/en-US/search?q=' + encodeURIComponent(topicName);
    return { topicName, refLink: search };
}

function detectTopicsForQuestion (qText, metadataTopics) {
    const text = (qText || '').toLowerCase();
    const matched = new Set();

    metadataTopics.forEach(mt => {
        const mapEntry = TOPIC_MAP[mt];
        if (!mapEntry) return;
        for (const kw of mapEntry.keywords) {
            if (!kw) continue;
            if (text.indexOf(kw.toLowerCase()) !== -1) {
                matched.add(mt);
                break;
            }
        }
    });

    // If no matches, fall back to first metadata topic
    if (matched.size === 0 && metadataTopics.length > 0) {
        matched.add(metadataTopics[0]);
    }

    return Array.from(matched).map(buildRefTopic);
}

function processAssessmentFile (filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    const match = fileName.match(/(\d+)/);
    const assessmentId = match ? parseInt(match[1], 10) : null;

    // require the file to get metadata and questions safely
    const absPath = path.resolve(filePath);
    delete require.cache[absPath];
    const mod = require(absPath);
    const metadata = mod.metadata || {};
    const questions = mod.questions || [];

    // add assessmentId
    metadata.assessmentId = assessmentId;

    // for each question, add topic: { topics: [ {topicName, refLink}, ... ] }
    questions.forEach(q => {
        const qText = (q.question || '') + '\n' + (q.explanation || '');
        const topicsForQ = detectTopicsForQuestion(qText, metadata.topics || []);
        // topicsForQ items are objects { topicName, refLink }
        q.topic = { topics: topicsForQ };
    });

    // write back the file with a stable JS representation
    const newContent = `// ${fileName} - AUTO-GENERATED topics and assessmentId\n` +
        `const metadata = ${JSON.stringify(metadata, null, 4)};\n\n` +
        `const questions = ${JSON.stringify(questions, null, 4)};\n\n` +
        `module.exports = { metadata, questions };\n`;

    fs.writeFileSync(filePath, newContent, 'utf8');
    return filePath;
}

function walkAssessments (root) {
    const changed = [];
    const subdirs = fs.readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory());
    for (const dirent of subdirs) {
        const dirPath = path.join(root, dirent.name);
        const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
        for (const f of files) {
            const fp = path.join(dirPath, f);
            try {
                const changedFile = processAssessmentFile(fp);
                changed.push(changedFile);
                console.log('Updated', changedFile);
            } catch (err) {
                console.error('Failed to process', fp, err);
            }
        }
    }
    return changed;
}

if (require.main === module) {
    const changed = walkAssessments(assessmentsRoot);
    console.log('Done. Files updated:', changed.length);
}
