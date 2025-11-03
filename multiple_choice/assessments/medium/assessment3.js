// assessment3.js - AUTO-GENERATED
const metadata = {
    "title": "DOM APIs & Advanced Browser Features",
    "description": "Questions cover DOM traversal/manipulation, events, Shadow DOM, custom elements, template, selectors, and mutation observers.",
    "difficulty": "medium",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
        "DOM traversal and manipulation",
        "Event delegation",
        "Shadow DOM and encapsulation",
        "Custom Elements",
        "Template and cloning",
        "Selectors API",
        "MutationObserver",
        "Node and Element interfaces",
        "focus and accessibility",
        "Element.getBoundingClientRect"
    ],
    "assessmentId": 3,
    "assessmentUniqueId": 1761906616000,
    "testType": "multiple-choice",
    "topicLinks": [
        { "topicName": "DOM traversal and manipulation", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" },
        { "topicName": "Event delegation", "mdnLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation" },
        { "topicName": "Shadow DOM and encapsulation", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" },
        { "topicName": "Custom Elements", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" },
        { "topicName": "Template and cloning", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" },
        { "topicName": "Selectors API", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" },
        { "topicName": "MutationObserver", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver" },
        { "topicName": "Node and Element interfaces", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/API/Node" },
        { "topicName": "focus and accessibility", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility" },
        { "topicName": "Element.getBoundingClientRect", "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect" }
    ]
};

const questions = [
    {
        "id": 1,
        "question": "Which method returns the first element within the document that matches the specified selector?",
        "options": { "A": "getElementById", "B": "querySelector", "C": "getElementsByClassName", "D": "querySelectorAll" },
        "correct": "B",
        "explanation": "document.querySelector returns the first Element within the document that matches the specified selector.",
        "topic": { "topics": ["Selectors API"] }
    },
    {
        "id": 2,
        "question": "Which approach best implements event delegation for many similar child elements?",
        "options": { "A": "Attach listeners to each child", "B": "Attach one listener to the parent and inspect event.target", "C": "Use setInterval to poll for events", "D": "Use inline onclick attributes" },
        "correct": "B",
        "explanation": "Event delegation attaches a single listener to a common ancestor and inspects event.target to handle events for many children efficiently.",
        "topic": { "topics": ["Event delegation"] }
    },
    {
        "id": 3,
        "question": "What is a primary benefit of Shadow DOM?",
        "options": { "A": "Runs on a separate thread", "B": "Encapsulation of styles and markup from the main document", "C": "Makes elements invisible to assistive tech", "D": "Automatically optimizes performance" },
        "correct": "B",
        "explanation": "Shadow DOM provides encapsulation so internal DOM nodes and styles don't leak into the main document and vice versa.",
        "topic": { "topics": ["Shadow DOM and encapsulation"] }
    },
    {
        "id": 4,
        "question": "Which lifecycle callback is invoked when a custom element is inserted into the DOM?",
        "options": { "A": "connectedCallback", "B": "disconnectedCallback", "C": "attributeChangedCallback", "D": "adoptedCallback" },
        "correct": "A",
        "explanation": "connectedCallback is called each time the custom element is appended into a document-connected element.",
        "topic": { "topics": ["Custom Elements"] }
    },
    {
        "id": 5,
        "question": "Which is the correct way to clone a template's content into the document?",
        "options": { "A": "document.importNode(template.content, true)", "B": "template.cloneNode(false)", "C": "use innerHTML on the template element", "D": "call template.content.toString()" },
        "correct": "A",
        "explanation": "importNode(template.content, true) clones the template content deeply so it can be inserted into the document.",
        "topic": { "topics": ["Template and cloning"] }
    },
    {
        "id": 6,
        "question": "Which interface would you use to observe DOM mutations like added/removed nodes?",
        "options": { "A": "IntersectionObserver", "B": "MutationObserver", "C": "ResizeObserver", "D": "PerformanceObserver" },
        "correct": "B",
        "explanation": "MutationObserver lets you observe changes to the DOM tree, attributes, and characterData.",
        "topic": { "topics": ["MutationObserver"] }
    },
    {
        "id": 7,
        "question": "Which method gives an element's size and position relative to the viewport?",
        "options": { "A": "element.offsetParent", "B": "element.getClientRects", "C": "element.getBoundingClientRect", "D": "element.getComputedStyle" },
        "correct": "C",
        "explanation": "getBoundingClientRect returns the size of an element and its position relative to the viewport.",
        "topic": { "topics": ["Element.getBoundingClientRect"] }
    },
    {
        "id": 8,
        "question": "Which property would you check to know which element currently has keyboard focus?",
        "options": { "A": "document.activeElement", "B": "document.focusedElement", "C": "window.focused", "D": "document.getSelection" },
        "correct": "A",
        "explanation": "document.activeElement references the element in the document that currently has focus.",
        "topic": { "topics": ["focus and accessibility"] }
    },
    {
        "id": 9,
        "question": "In event handling, which flag prevents further propagation of the current event in the bubbling or capturing phases?",
        "options": { "A": "stopImmediatePropagation", "B": "preventDefault", "C": "stopPropagation", "D": "cancelBubble" },
        "correct": "C",
        "explanation": "event.stopPropagation() stops the event from bubbling (or capturing) further; stopImmediatePropagation also prevents other listeners on the same element.",
        "topic": { "topics": ["Event delegation"] }
    },
    {
        "id": 10,
        "question": "Which selector will match all elements with a data-role attribute equal to 'nav'?",
        "options": { "A": "[data-role]", "B": "[data-role='nav']", "C": ".data-role-nav", "D": "#data-role-nav" },
        "correct": "B",
        "explanation": "Attribute selectors with an exact match: [data-role='nav'] matches elements whose data-role attribute equals 'nav'.",
        "topic": { "topics": ["Selectors API"] }
    },
    {
        "id": 11,
        "question": "Which Node property returns the node type (e.g., element, text, comment)?",
        "options": { "A": "nodeType", "B": "nodeKind", "C": "nodeName", "D": "nodeValue" },
        "correct": "A",
        "explanation": "Node.nodeType is a numeric code representing the type (1 = Element, 3 = Text, etc.).",
        "topic": { "topics": ["Node and Element interfaces"] }
    },
    {
        "id": 12,
        "question": "Which of the following is true about Shadow DOM CSS scoping?",
        "options": { "A": "Global styles always penetrate shadow roots", "B": "Styles inside a shadow root do not affect the main document", "C": "Shadow DOM prevents any style inheritance", "D": "Styles from outside cannot affect anything inside a shadow root under any circumstances" },
        "correct": "B",
        "explanation": "Shadow DOM scopes styles so styles defined inside a shadow root do not bleed out; styles from the document may still affect components via CSS custom properties depending on shadow mode.",
        "topic": { "topics": ["Shadow DOM and encapsulation"] }
    },
    {
        "id": 13,
        "question": "Which method is appropriate to efficiently insert many nodes into the DOM?",
        "options": { "A": "appendChild for each node directly into document.body", "B": "Build nodes in a DocumentFragment and append the fragment once", "C": "Use innerHTML with concatenated strings always", "D": "Use synchronous XHR to fetch markup" },
        "correct": "B",
        "explanation": "DocumentFragment allows batching DOM insertions in memory and attaching once, minimizing reflows.",
        "topic": { "topics": ["DOM traversal and manipulation"] }
    },
    {
        "id": 14,
        "question": "Which API helps you lazily load offscreen images when they approach the viewport?",
        "options": { "A": "ResizeObserver", "B": "MutationObserver", "C": "IntersectionObserver", "D": "PerformanceObserver" },
        "correct": "C",
        "explanation": "IntersectionObserver provides a way to asynchronously observe changes in the intersection of a target element with an ancestor or the top-level document's viewport, useful for lazy-loading.",
        "topic": { "topics": ["Node and Element interfaces"] }
    },
    {
        "id": 15,
        "question": "Which is a safe practice when creating custom elements to avoid leaking internals?",
        "options": { "A": "Always attach open shadow root", "B": "Prefer closed shadow root to prevent access", "C": "Never use shadow DOM", "D": "Expose all internal nodes via properties" },
        "correct": "B",
        "explanation": "Using a closed shadow root prevents outside scripts from accessing shadow internals via element.shadowRoot; it's a trade-off with extensibility and testing.",
        "topic": { "topics": ["Custom Elements"] }
    }
    ,
    {
        "id": 16,
        "question": "Which property is typically used to read/write data-* attributes from an element?",
        "options": { "A": "element.dataset", "B": "element.data", "C": "element.getAttributeNames", "D": "element.custom" },
        "correct": "A",
        "explanation": "element.dataset provides a DOMStringMap for reading and writing data-* attributes in a convenient camelCase form.",
        "topic": { "topics": ["DOM traversal and manipulation"] }
    },
    {
        "id": 17,
        "question": "Which method tests whether an element would be selected by a given selector?",
        "options": { "A": "element.matches(selector)", "B": "element.querySelector(selector)", "C": "document.getElementById", "D": "element.select()" },
        "correct": "A",
        "explanation": "Element.matches returns true if the element would be selected by the specified selector string.",
        "topic": { "topics": ["Selectors API"] }
    },
    {
        "id": 18,
        "question": "Which method on Node helps you determine the document order relationship between two nodes?",
        "options": { "A": "compareDocumentPosition", "B": "isEqualNode", "C": "contains only", "D": "getRootNode" },
        "correct": "A",
        "explanation": "Node.compareDocumentPosition returns a bitmask describing the relative position of two nodes (preceding, following, contained, etc.).",
        "topic": { "topics": ["Node and Element interfaces"] }
    },
    {
        "id": 19,
        "question": "Which API is the most appropriate to detect when an element's size changes?",
        "options": { "A": "MutationObserver on attributes only", "B": "ResizeObserver", "C": "IntersectionObserver", "D": "setInterval polling" },
        "correct": "B",
        "explanation": "ResizeObserver observes changes to the size of an element; it's the modern API for element size changes.",
        "topic": { "topics": ["Node and Element interfaces"] }
    },
    {
        "id": 20,
        "question": "Which property is safer than innerHTML when inserting plain text from untrusted sources?",
        "options": { "A": "textContent", "B": "dataset", "C": "outerHTML", "D": "insertAdjacentHTML" },
        "correct": "A",
        "explanation": "textContent inserts text without parsing HTML, avoiding script injection risks associated with innerHTML.",
        "topic": { "topics": ["DOM traversal and manipulation"] }
    },
    {
        "id": 21,
        "question": "Which classList method toggles a class only if a second boolean argument is true/false?",
        "options": { "A": "classList.add with condition", "B": "classList.toggle(name, force)", "C": "classList.replace", "D": "classList.contains" },
        "correct": "B",
        "explanation": "classList.toggle(name, force) will add the class if force is true and remove it if force is false.",
        "topic": { "topics": ["DOM traversal and manipulation"] }
    },
    {
        "id": 22,
        "question": "Which element method returns the closest ancestor that matches the selector?",
        "options": { "A": "element.closest(selector)", "B": "element.parentNode(selector)", "C": "element.findAncestor", "D": "element.querySelectorAll" },
        "correct": "A",
        "explanation": "closest traverses ancestors (including the element itself) and returns the first that matches the selector.",
        "topic": { "topics": ["Selectors API"] }
    },
    {
        "id": 23,
        "question": "Which approach helps avoid reflows when reading layout values and writing styles?",
        "options": { "A": "Perform read after write", "B": "Interleave many reads and writes", "C": "Batch reads first, then batch writes", "D": "Always use offsetWidth for writes" },
        "correct": "C",
        "explanation": "Batching reads and then writes prevents forced synchronous layout and reduces reflows.",
        "topic": { "topics": ["Performance profiling and memory"] }
    },
    {
        "id": 24,
        "question": "Which attribute is typically used to make <template> content inert until it's instantiated?",
        "options": { "A": "disabled", "B": "hidden", "C": "template's content is already inert by default", "D": "data-template" },
        "correct": "C",
        "explanation": "Template content is inert and not part of the document until it is cloned and inserted; scripts inside templates do not execute.",
        "topic": { "topics": ["Template and cloning"] }
    },
    {
        "id": 25,
        "question": "Which method removes a child and optionally returns it for reuse?",
        "options": { "A": "element.deleteChild", "B": "element.removeChild(node)", "C": "element.clearChild", "D": "element.popChild" },
        "correct": "B",
        "explanation": "removeChild returns the removed node, allowing you to reuse it or insert it elsewhere.",
        "topic": { "topics": ["DOM traversal and manipulation"] }
    }
];

module.exports = { metadata, questions };
