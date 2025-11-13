# Assessment Creation Guidelines

This document outlines the rules and standards for creating JavaScript multiple-choice assessments in this project.

## File Structure

Assessments are organized by difficulty level:
```
/assessments/javascript/
  ├── easy/
  │   ├── assessment1.js
  │   ├── assessment2.js
  │   └── ...
  ├── medium/
  │   ├── assessment1.js
  │   ├── assessment2.js
  │   └── ...
  └── hard/
      ├── assessment1.js
      └── ...
```

## Assessment Structure

Each assessment file must export a module with the following structure:

```javascript
module.exports = {
  metadata: {
    title: "Assessment Title",
    description: "Brief description of what this assessment covers",
    difficulty: "easy|medium|hard",
    domain: "javascript", // short identifier for the assessment domain (see note below)
    timeLimit: 30, // in minutes
    questionCount: 30, // number of questions
    topics: [
      "Topic 1",
      "Topic 2",
      // ... up to 10 topics
    ],
    topicLinks: [
      {
        topicName: "Topic 1",
        refLink: "https://developer.mozilla.org/en-US/docs/..."
      },
      // ... must match all topics above
    ],
    assessmentId: 1, // unique number for this difficulty level
    assessmentUniqueId: 1730726400000, // unique timestamp, matching the time of creation of the file
    testType: "multiple-choice|coding"
  },
  questions: [
    // Array of question objects
  ]
};
```

### domain (new)

A mandatory metadata property `domain` is used to declare the subject area or technology the assessment covers. For this repository, all JavaScript assessments should set:

```javascript
domain: "javascript"
```
For HTML it should be:
```javascript
domain: "html"
```
and so on. 

Why this helps:
- UI filters and listing pages can group and filter assessments by domain.
- Back-end indexing, analytics, and import/export tooling can use the domain field to route or validate content.

Guidance:
- Use a short, lowercase identifier (for example: `javascript`, `python`, `html`).
- If your file uses JSON-style quoted keys, use `"domain": "javascript"` to match the file's style.
- This field is optional for now but recommended for all new assessments.

## Difficulty Level Specifications

### Easy
- **Questions**: 30
- **Time Limit**: 30 minutes
- **Topics**: 7-10 fundamental JavaScript concepts
- **Complexity**: Basic syntax, simple concepts, straightforward scenarios
- **Examples**: Variables, data types, basic operators, simple functions, array methods

### Medium
- **Questions**: 25
- **Time Limit**: 45 minutes
- **Topics**: 7-10 advanced JavaScript concepts
- **Complexity**: Advanced patterns, deeper understanding, complex scenarios
- **Examples**: Closures, prototypes, async patterns, proxies, generators, functional programming

### Hard
- **Questions**: 20
- **Time Limit**: 60 minutes
- **Topics**: 7-10 expert-level concepts
- **Complexity**: Expert patterns, edge cases, performance optimization, architectural decisions
- **Examples**: Advanced async patterns, metaprogramming, memory optimization, security

## Question Structure

Each question must have the following structure:

```javascript
{
  id: 1, // Sequential number starting from 1
  question: "Question text with [CODE]code syntax[/CODE] for inline code",
  options: {
    A: "First option with <pre>inline code</pre> if needed",
    B: "Second option",
    C: "Third option",
    D: "Fourth option"
  },
  correct: "A", // The correct answer letter
  explanation: "Detailed explanation with <pre>short code</pre> or [CODE]longer code blocks[/CODE]",
  topic: {
    topics: ["Topic Name", "Optional Second Topic"] // Max 2 topics
  }
}
```

## Code Formatting Rules

### In Questions (`question` property)
- **Use `<pre>...<pre>` for single words, function names, or simple inline references**
  - Example: `"What is the difference between <pre>fetch()</pre> and <pre>XMLHttpRequest</pre>?"`
  - Example: `"What does the <pre>typeof</pre> operator return?"`
  - Example: `"How does <pre>Array.from()</pre> work?"`
  
- **Use `[CODE]...[/CODE]` for code snippets with statements, expressions, or multi-line code**
  - Example: `"What does [CODE]console.log('Hello')[/CODE] do?"`
  - Example with block:
    ```
    "What does this code do?\n[CODE]function test() {\n  return 42;\n}[/CODE]"
    ```
  - Example: `"What is the result of [CODE]typeof null[/CODE]?"`

**Rule of thumb**: If it's just a word, function name, or API reference without code logic, use `<pre>`. If it contains actual code execution, expressions, or multiple statements, use `[CODE]`.

### In Options (`options` property)
- **Always use `<pre>...<pre>` tags** for code snippets
- Keep code short and inline where possible
- Example: `"It returns <pre>undefined</pre>"`
- Example: `"The <pre>Array.from()</pre> method creates a new array"`
- We should never have `[CODE]` in the options, always `<pre></pre>` where there are code snippets.

### In Explanations (`explanation` property)
- **Use `<pre>...<pre>` for short inline code** (single values, method names, short expressions)
  - Example: `"The <pre>typeof</pre> operator returns a string"`
  - Example: `"This returns <pre>null</pre> because..."`
  
- **Use `[CODE]...[/CODE]` for longer code blocks** (multi-line code, complete examples, code snippets)
  - Example: 
    ```
    "Here's how it works:\n[CODE]const arr = [1, 2, 3];\nconst doubled = arr.map(x => x * 2);\nconsole.log(doubled); // [2, 4, 6][/CODE]\nThe map method..."
    ```
**When in the 'html'**: When producing code snippets for HTML, we should not escape `<` and `>` inside `<pre>` with html entities `&lt;`  and `&gt;` , unless we have a question specifically pertaining to html entities.

**General Rule**: If the code is more than a single line or contains multiple statements, use `[CODE]`. Otherwise, use `<pre>`.

## Content Quality Standards

### Question Text
- Must be clear and unambiguous
- Should test understanding, not memorization
- Avoid trick questions
- Include context when showing code examples
- Use realistic scenarios when applicable

### Explanations - Acronyms and Technical Terms
- **Always spell out acronyms on first use in explanations**
  - Example: ✅ "Cross-Site Request Forgery (CSRF) mitigations include..."
  - Example: ❌ "CSRF mitigations include..." (assumes reader knows the acronym)
- After defining an acronym, you may use the acronym alone in subsequent sentences
- This applies to all technical acronyms: XSS, CORS, CSP, CSRF, API, DOM, etc.
- Exception: Well-known acronyms like HTML, CSS, JavaScript, HTTP, URL don't need to be spelled out
- Goal: Make explanations educational and accessible without assuming prior knowledge

### Options
- All options should be plausible
- Incorrect options should represent common misconceptions
- Keep options roughly similar in length
- Avoid "All of the above" or "None of the above" unless necessary
- Ensure only one correct answer

### Answer Distribution and Option Randomization

- Aim for a largely equitable distribution of correct-answer letters (A, B, C, D) across each assessment. For an assessment with N questions the target is roughly N/4 correct answers per letter (use floor/ceil as needed). Small deviations are acceptable, but avoid heavy bias (for example: >50% of correct answers being the same letter) and avoid long runs where the same letter is correct repeatedly.
- When authoring manually:
  - Track correct-letter counts as you add questions and choose correct letters so the final distribution is balanced.
  - Avoid assigning the same correct letter more than 3 times in a row unless there is a strong pedagogical reason.
- When generating content programmatically:
  - After generating all questions, compute the frequency of correct letters and rebalance by swapping option contents between questions or by shuffling options and updating the `correct` property accordingly.
  - Prefer an automated post-processing step that enforces near-uniform distribution (difference between most/least frequent correct-letter counts ≤ 1 where possible).
- Presentation-time randomization: the UI may randomize option order when showing the question to the learner; when shuffling, ensure the persisted `correct` value (A/B/C/D) is updated to match the shuffled order or store the correct index separately so rendering can map it safely.
- Manual review: always do a quick manual pass for newly created assessments to verify there is no obvious pattern (e.g., all "A" answers) and that distractors remain plausible after any rebalancing.

### Explanations
- **Must be detailed and educational** (2-4 paragraphs for medium/hard)
- Explain why the correct answer is right
- Explain why other options are wrong (when relevant)
- Provide additional context and use cases
- Include code examples to illustrate concepts
- Reference best practices and common pitfalls
- Easy: 1-2 paragraphs
- Medium: 2-3 paragraphs with deeper technical details
- Hard: 3-4 paragraphs with comprehensive analysis

### Topics
- Each question should have 1-2 topics maximum
- Topics must be from the metadata topics list
- Choose the most relevant topic(s) for the question

## MDN Documentation Links

All topics in metadata must have corresponding MDN documentation links:

```javascript
topicLinks: [
  {
    topicName: "Topic Name", // Must match exactly with topics array
    refLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/..."
  }
]
```

Use official MDN documentation links for all JavaScript concepts.

## Assessment ID Guidelines

### assessmentId
- Sequential number within the same difficulty level
- Easy assessments: 1, 2, 3, 4, 5...
- Medium assessments: 1, 2, 3, 4, 5...
- Hard assessments: 1, 2, 3, 4, 5...

### assessmentUniqueId
- Unique timestamp for each assessment
- Use Unix timestamp in milliseconds
- Example: `1730726400000`
- Should be unique across all assessments globally

Clarification: the `assessmentUniqueId` must be the exact millisecond value produced by calling `Date.now()` at the moment the assessment file is created (i.e., the Unix epoch time in milliseconds). In practice this means:

- When you create a new assessment file, run `Date.now()` (or read the millisecond value from your editor/IDE or a quick Node/console snippet) and paste that integer into `assessmentUniqueId`.
- The value should represent the creation moment of the file, not an arbitrary timestamp.
- If you create multiple assessment files sequentially, make sure later files have larger `assessmentUniqueId` values than earlier files (this preserves ordering like `assessment5` > `assessment4`).
- Keep `assessmentUniqueId` unique across all assessments (easy/medium/hard). Do not reuse values.

Why this matters: the UI and some tooling may use this millisecond timestamp as a unique identifier and to infer ordering. Using `Date.now()` at creation time produces a precise, machine-sortable value and avoids collisions from reusing placeholder timestamps.

### testType

- Multiple choice: `"multiple-choice"`
- Coding: `"coding"`


## Topic Coverage Guidelines

### Avoid Duplication
- Before creating a new assessment, review existing assessments
- Ensure questions don't duplicate existing content
- Cover new aspects or angles of topics already addressed
- Build upon concepts from easier difficulty levels

### Topic Distribution
- Distribute questions evenly across topics
- Each topic should have 2-4 questions
- Balance foundational and advanced aspects
- Include practical application questions

## Best Practices

1. **Progressive Difficulty**: Within an assessment, arrange questions from easier to harder
2. **Real-World Relevance**: Use practical scenarios developers encounter
3. **Modern JavaScript**: Focus on ES6+ features and current best practices
4. **Consistency**: Follow the exact structure and formatting rules
5. **Educational Value**: Every question should teach something valuable
6. **Accuracy**: Verify all technical information is correct
7. **Code Quality**: Use clean, idiomatic JavaScript in examples

## Example Question (Easy)

```javascript
{
  id: 1,
  question: "What is the result of [CODE]typeof null[/CODE]?",
  options: {
    A: "<pre>\"null\"</pre>",
    B: "<pre>\"object\"</pre>",
    C: "<pre>\"undefined\"</pre>",
    D: "<pre>\"number\"</pre>"
  },
  correct: "B",
  explanation: "The <pre>typeof null</pre> returns <pre>\"object\"</pre>, which is actually a long-standing bug in JavaScript that has been kept for backward compatibility. Despite <pre>null</pre> representing the intentional absence of a value, the typeof operator incorrectly identifies it as an object. This is one of JavaScript's quirks that developers need to be aware of when checking for null values.",
  topic: {
    topics: ["Data Types and Primitives"]
  }
}
```

## Example Question (Medium)

```javascript
{
  id: 1,
  question: "What happens when you call [CODE]next()[/CODE] on a generator that has already completed?",
  options: {
    A: "It throws a TypeError",
    B: "It returns <pre>{ value: undefined, done: true }</pre>",
    C: "It restarts the generator from the beginning",
    D: "It returns the last yielded value"
  },
  correct: "B",
  explanation: "Once a generator has completed (reached a return statement or the end of the function), calling <pre>next()</pre> will always return <pre>{ value: undefined, done: true }</pre>. The generator doesn't restart, throw errors, or return previous values. If the generator had an explicit return value, subsequent calls to <pre>next()</pre> after completion will still return <pre>undefined</pre> as the value, not the return value. This behavior allows you to safely call <pre>next()</pre> multiple times without error handling.",
  topic: {
    topics: ["Generators and Iterators"]
  }
}
```

## Example Question with Longer Code (Medium/Hard)

```javascript
{
  id: 15,
  question: "What will this code output?\n[CODE]const obj = {\n  value: 42,\n  getValue() {\n    return this.value;\n  }\n};\nconst fn = obj.getValue;\nconsole.log(fn());[/CODE]",
  options: {
    A: "<pre>42</pre>",
    B: "<pre>undefined</pre>",
    C: "<pre>null</pre>",
    D: "It throws a TypeError"
  },
  correct: "B",
  explanation: "The code outputs <pre>undefined</pre> because when you extract a method from an object and call it as a standalone function, it loses its context (<pre>this</pre> binding). Here's what happens:\n[CODE]// Method extraction\nconst fn = obj.getValue; // fn is now a standalone function\n// When called, 'this' is undefined (strict mode) or global object\nfn(); // this.value is undefined[/CODE]\nTo preserve the context, you can use <pre>bind()</pre>, arrow functions, or call it directly on the object. Example fix:\n[CODE]const fn = obj.getValue.bind(obj);\nconsole.log(fn()); // Now outputs 42[/CODE]\nThis is a common gotcha when passing methods as callbacks or extracting them for later use.",
  topic: {
    topics: ["this Binding", "Object Methods"]
  }
}
```

## Validation Checklist

Before submitting a new assessment, verify:

- [ ] Metadata is complete with all required fields
- [ ] Number of questions matches `questionCount` in metadata
- [ ] Time limit is appropriate for difficulty level
- [ ] All topics have corresponding MDN links
- [ ] `[CODE]` tags used in questions for code generally, but `<pre>` can be used if we are just referring to a word , for example `<pre>undefined</pre>`. A code example "2 * 3 + 4" or "'hello'.charAt(1)" should be rendered in `[CODE]`. A code "Math.max()" asking about the function can be in  `<pre>`  but "Math.max(5, 10, 3)" should be in `[CODE]` since it is a code statement and not a mere reference to a function.
- [ ] `<pre>` tags used in options for all code
- [ ] `<pre>` for short code, `[CODE]` for blocks in explanations
- [ ] Each question has unique ID (1 to N)
- [ ] All questions have exactly 4 options (A, B, C, D)
- [ ] Correct answer is specified and valid
- [ ] Explanations are detailed and educational
- [ ] Topics are from the metadata list (max 2 per question)
- [ ] No duplicate questions from existing assessments
- [ ] Code examples are tested and accurate
- [ ] Consistent formatting throughout

## Notes

- The UI will automatically style `[CODE]` blocks with proper syntax highlighting and larger code blocks
- The UI will style `<pre>` as inline code snippets with subtle background
- Always prefer MDN documentation over other sources
- When in doubt about a concept, verify with official ECMAScript specification
- Keep the tone professional but accessible
- Focus on practical knowledge that developers will use

---

**Last Updated**: November 4, 2025
