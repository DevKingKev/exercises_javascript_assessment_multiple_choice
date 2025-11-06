// assessment9.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript DOM and Events",
    "description": "Document Object Model manipulation, event handling, element selection, and dynamic content updates. This assessment covers essential browser APIs for interacting with web page elements, handling user interactions, and creating dynamic web experiences.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "DOM element selection",
        "Element manipulation and styling",
        "Event handling and listeners",
        "DOM traversal and navigation",
        "Dynamic content creation",
        "Form element handling",
        "Browser event types"
    ],
    "topicLinks": [
        {
            "topicName": "DOM element selection",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"
        },
        {
            "topicName": "Element manipulation and styling",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Element"
        },
        {
            "topicName": "Event handling and listeners",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
        },
        {
            "topicName": "DOM traversal and navigation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Node"
        },
        {
            "topicName": "Dynamic content creation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"
        },
        {
            "topicName": "Form element handling",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement"
        },
        {
            "topicName": "Browser event types",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Events"
        }
    ],
    "assessmentId": 9,
    "assessmentUniqueId": 1730726404000,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "Which method selects the first element that matches a CSS selector?",
        "options": {
            "A": "<pre>document.querySelector()</pre>",
            "B": "<pre>document.getElementById()</pre>",
            "C": "<pre>document.getElementsByClassName()</pre>",
            "D": "<pre>document.findElement()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>document.querySelector()</pre> returns the first element that matches the specified CSS selector. It's very flexible and can select elements by ID, class, tag name, or any valid CSS selector. For example, <pre>document.querySelector('#myId')</pre> selects by ID, while <pre>document.querySelector('.myClass')</pre> selects by class.",
        "topic": {
            "topics": [
                "DOM element selection"
            ]
        }
    },
    {
        "id": 2,
        "question": "How do you change the text content of an element?",
        "options": {
            "A": "<pre>element.textContent = 'new text'</pre>",
            "B": "<pre>element.innerHTML = 'new text'</pre>",
            "C": "<pre>element.value = 'new text'</pre>",
            "D": "<pre>element.setText('new text')</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>textContent</pre> property sets or returns the text content of an element and all its descendants. Unlike <pre>innerHTML</pre>, it doesn't parse HTML tags, making it safer for user-generated content. For form elements like inputs, you would use <pre>value</pre> instead.",
        "topic": {
            "topics": [
                "Element manipulation and styling"
            ]
        }
    },
    {
        "id": 3,
        "question": "What is the correct way to add a click event listener to a button?",
        "options": {
            "A": "<pre>button.onClick = function() {}</pre>",
            "B": "<pre>button.addEvent('click', function() {})</pre>",
            "C": "<pre>button.addEventListener('click', function() {})</pre>",
            "D": "<pre>button.click(function() {})</pre>"
        },
        "correct": "C",
        "explanation": "<pre>addEventListener()</pre> is the modern standard for adding event handlers. It allows multiple handlers for the same event and provides better control over event propagation. The older <pre>onclick</pre> property can only have one handler and is less flexible.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    },
    {
        "id": 4,
        "question": "How do you create a new div element?",
        "options": {
            "A": "<pre>document.newElement('div')</pre>",
            "B": "<pre>document.createElement('div')</pre>",
            "C": "<pre>new DivElement()</pre>",
            "D": "<pre>document.div()</pre>"
        },
        "correct": "B",
        "explanation": "<pre>document.createElement()</pre> creates a new element with the specified tag name. The element is created in memory but not yet added to the document. You need to use methods like <pre>appendChild()</pre> or <pre>append()</pre> to add it to the DOM.",
        "topic": {
            "topics": [
                "Dynamic content creation"
            ]
        }
    },
    {
        "id": 5,
        "question": "Which property gets the parent element of a node?",
        "options": {
            "A": "<pre>element.parent</pre>",
            "B": "<pre>element.parentElement</pre>",
            "C": "<pre>element.parentNode</pre>",
            "D": "<pre>element.owner</pre>"
        },
        "correct": "C",
        "explanation": "<pre>parentNode</pre> returns the parent node of the specified element. <pre>parentElement</pre> is similar but returns null if the parent is not an element node (like a document node). For most DOM traversal, <pre>parentNode</pre> is commonly used.",
        "topic": {
            "topics": [
                "DOM traversal and navigation"
            ]
        }
    },
    {
        "id": 6,
        "question": "How do you prevent the default behavior of an event?",
        "options": {
            "A": "<pre>event.stop()</pre>",
            "B": "<pre>event.preventDefault()</pre>",
            "C": "<pre>event.cancel()</pre>",
            "D": "<pre>event.stopDefault()</pre>"
        },
        "correct": "B",
        "explanation": "<pre>preventDefault()</pre> prevents the browser's default action for the event. For example, it can prevent a form from submitting, a link from navigating, or context menu from appearing. This is different from <pre>stopPropagation()</pre> which stops the event from bubbling up.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    },
    {
        "id": 7,
        "question": "What does <pre>document.getElementById('myId')</pre> return if no element is found?",
        "options": {
            "A": "<pre>null</pre>",
            "B": "<pre>undefined</pre>",
            "C": "<pre>false</pre>",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "When no element matches the specified ID, <pre>getElementById()</pre> returns <pre>null</pre>. This is important to check for in your code to avoid errors when trying to manipulate non-existent elements.",
        "topic": {
            "topics": [
                "DOM element selection"
            ]
        }
    },
    {
        "id": 8,
        "question": "How do you add a CSS class to an element?",
        "options": {
            "A": "<pre>element.addClass('className')</pre>",
            "B": "<pre>element.className = 'className'</pre>",
            "C": "<pre>element.classList.add('className')</pre>",
            "D": "<pre>element.style.class = 'className'</pre>"
        },
        "correct": "C",
        "explanation": "<pre>classList.add()</pre> is the modern way to add a class to an element. It doesn't affect existing classes. The older <pre>className</pre> property replaces all classes, so you'd need to concatenate strings to preserve existing classes.",
        "topic": {
            "topics": [
                "Element manipulation and styling"
            ]
        }
    },
    {
        "id": 9,
        "question": "Which event fires when a form is submitted?",
        "options": {
            "A": "<pre>click</pre>",
            "B": "<pre>change</pre>",
            "C": "<pre>submit</pre>",
            "D": "<pre>input</pre>"
        },
        "correct": "C",
        "explanation": "The <pre>submit</pre> event fires when a form is submitted, either by clicking a submit button, pressing Enter in a text field, or calling <pre>form.submit()</pre>. This is where you typically validate form data before sending it to the server.",
        "topic": {
            "topics": [
                "Form element handling",
                "Browser event types"
            ]
        }
    },
    {
        "id": 10,
        "question": "How do you get the value of an input element?",
        "options": {
            "A": "<pre>input.textContent</pre>",
            "B": "<pre>input.innerHTML</pre>",
            "C": "<pre>input.value</pre>",
            "D": "<pre>input.text</pre>"
        },
        "correct": "C",
        "explanation": "Form elements like <pre>input</pre>, <pre>select</pre>, and <pre>textarea</pre> use the <pre>value</pre> property to get and set their current value. Regular elements like <pre>div</pre> or <pre>span</pre> use <pre>textContent</pre> or <pre>innerHTML</pre> instead.",
        "topic": {
            "topics": [
                "Form element handling"
            ]
        }
    },
    {
        "id": 11,
        "question": "What is the difference between <pre>innerHTML</pre> and <pre>textContent</pre>?",
        "options": {
            "A": "No difference",
            "B": "<pre>innerHTML</pre> parses HTML, <pre>textContent</pre> doesn't",
            "C": "<pre>textContent</pre> is faster",
            "D": "<pre>innerHTML</pre> works only for text"
        },
        "correct": "B",
        "explanation": "<pre>innerHTML</pre> gets or sets HTML content and will parse any HTML tags in the string. <pre>textContent</pre> gets or sets text content and treats everything as plain text. For security, use <pre>textContent</pre> when dealing with user input to prevent Cross-Site Scripting (XSS) attacks.",
        "topic": {
            "topics": [
                "Element manipulation and styling",
                "Dynamic content creation"
            ]
        }
    },
    {
        "id": 12,
        "question": "How do you remove an element from the DOM?",
        "options": {
            "A": "<pre>element.delete()</pre>",
            "B": "<pre>element.remove()</pre>",
            "C": "<pre>element.hide()</pre>",
            "D": "<pre>document.remove(element)</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>remove()</pre> method removes the element from the DOM tree. Older approaches used <pre>parent.removeChild(element)</pre>, but the modern <pre>remove()</pre> method is simpler and more intuitive.",
        "topic": {
            "topics": [
                "Element manipulation and styling"
            ]
        }
    },
    {
        "id": 13,
        "question": "Which method selects all elements that match a CSS selector?",
        "options": {
            "A": "<pre>document.querySelector()</pre>",
            "B": "<pre>document.querySelectorAll()</pre>",
            "C": "<pre>document.getElementsBySelector()</pre>",
            "D": "<pre>document.findAll()</pre>"
        },
        "correct": "B",
        "explanation": "<pre>document.querySelectorAll()</pre> returns a NodeList of all elements that match the specified CSS selector. Unlike <pre>getElementsByClassName()</pre> which returns a live collection, <pre>querySelectorAll()</pre> returns a static collection.",
        "topic": {
            "topics": [
                "DOM element selection"
            ]
        }
    },
    {
        "id": 14,
        "question": "What does <pre>event.target</pre> refer to?",
        "options": {
            "A": "The element that triggered the event",
            "B": "The element the listener is attached to",
            "C": "The document object",
            "D": "The parent element"
        },
        "correct": "A",
        "explanation": "<pre>event.target</pre> refers to the element that originally triggered the event, which might be different from <pre>event.currentTarget</pre> (the element the listener is attached to) when events bubble up through the DOM tree.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    },
    {
        "id": 15,
        "question": "How do you append a child element to a parent?",
        "options": {
            "A": "<pre>parent.add(child)</pre>",
            "B": "<pre>parent.appendChild(child)</pre>",
            "C": "<pre>parent.insert(child)</pre>",
            "D": "<pre>child.appendTo(parent)</pre>"
        },
        "correct": "B",
        "explanation": "<pre>appendChild()</pre> adds a node to the end of the list of children of a specified parent node. The newer <pre>append()</pre> method can also be used and allows adding multiple nodes and text, but <pre>appendChild()</pre> is more widely supported.",
        "topic": {
            "topics": [
                "Dynamic content creation"
            ]
        }
    },
    {
        "id": 16,
        "question": "Which event fires when the DOM content is fully loaded?",
        "options": {
            "A": "<pre>window.onload</pre>",
            "B": "<pre>DOMContentLoaded</pre>",
            "C": "<pre>document.ready</pre>",
            "D": "<pre>content.loaded</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>DOMContentLoaded</pre> event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. <pre>window.onload</pre> waits for all resources to load.",
        "topic": {
            "topics": [
                "Browser event types"
            ]
        }
    },
    {
        "id": 17,
        "question": "How do you get all child elements of a parent?",
        "options": {
            "A": "<pre>parent.children</pre>",
            "B": "<pre>parent.childNodes</pre>",
            "C": "<pre>parent.getChildren()</pre>",
            "D": "<pre>parent.allChildren</pre>"
        },
        "correct": "A",
        "explanation": "<pre>children</pre> returns a live HTMLCollection of child elements, excluding text nodes and comments. <pre>childNodes</pre> returns all child nodes including text nodes and comments, which is usually not what you want.",
        "topic": {
            "topics": [
                "DOM traversal and navigation"
            ]
        }
    },
    {
        "id": 18,
        "question": "What is event bubbling?",
        "options": {
            "A": "Events moving from parent to child",
            "B": "Events moving from child to parent",
            "C": "Multiple events firing at once",
            "D": "Events repeating automatically"
        },
        "correct": "B",
        "explanation": "Event bubbling is when an event starts at the target element and bubbles up through its ancestors in the DOM tree. This allows parent elements to handle events from their children. The opposite is event capturing, which goes from top to bottom.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    },
    {
        "id": 19,
        "question": "How do you set an inline style on an element?",
        "options": {
            "A": "<pre>element.css('color', 'red')</pre>",
            "B": "<pre>element.style.color = 'red'</pre>",
            "C": "<pre>element.setStyle('color', 'red')</pre>",
            "D": "<pre>element.addStyle('color: red')</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>style</pre> property allows you to set inline CSS styles directly on an element. CSS property names that contain hyphens become camelCase in JavaScript (e.g., <pre>backgroundColor</pre> for 'background-color').",
        "topic": {
            "topics": [
                "Element manipulation and styling"
            ]
        }
    },
    {
        "id": 20,
        "question": "Which method is used to attach an event listener?",
        "options": {
            "A": "<pre>addEventListener()</pre>",
            "B": "<pre>attachEvent()</pre>",
            "C": "<pre>on()</pre>",
            "D": "<pre>listen()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>addEventListener()</pre> is the standard method for registering event handlers. It allows multiple handlers for the same event type and provides control over event propagation. The older <pre>attachEvent()</pre> was used in Internet Explorer.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    },
    {
        "id": 21,
        "question": "How do you check if an element has a specific class?",
        "options": {
            "A": "<pre>element.hasClass('className')</pre>",
            "B": "<pre>element.classList.contains('className')</pre>",
            "C": "<pre>element.className.includes('className')</pre>",
            "D": "<pre>element.hasClassName('className')</pre>"
        },
        "correct": "B",
        "explanation": "<pre>classList.contains()</pre> returns <pre>true</pre> if the element has the specified class, <pre>false</pre> otherwise. This is more reliable than checking <pre>className</pre> which requires string parsing and can have false positives.",
        "topic": {
            "topics": [
                "Element manipulation and styling"
            ]
        }
    },
    {
        "id": 22,
        "question": "What does <pre>document.createElement('div')</pre> return?",
        "options": {
            "A": "A string containing HTML",
            "B": "A reference to a new div element",
            "C": "A boolean value",
            "D": "An array of elements"
        },
        "correct": "B",
        "explanation": "<pre>document.createElement()</pre> returns a reference to a newly created element node. The element exists in memory but is not yet part of the document. You need to explicitly add it to the DOM using methods like <pre>appendChild()</pre> or <pre>append()</pre>.",
        "topic": {
            "topics": [
                "Dynamic content creation"
            ]
        }
    },
    {
        "id": 23,
        "question": "Which event fires when an input value changes?",
        "options": {
            "A": "<pre>input</pre>",
            "B": "<pre>change</pre>",
            "C": "<pre>keyup</pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both <pre>input</pre> and <pre>change</pre> events fire when values change, but at different times. The <pre>input</pre> event fires immediately on each change, while <pre>change</pre> fires when the element loses focus after the value has changed.",
        "topic": {
            "topics": [
                "Form element handling",
                "Browser event types"
            ]
        }
    },
    {
        "id": 24,
        "question": "How do you get the next sibling element?",
        "options": {
            "A": "<pre>element.nextSibling</pre>",
            "B": "<pre>element.nextElementSibling</pre>",
            "C": "<pre>element.siblingNext</pre>",
            "D": "<pre>element.getNextSibling()</pre>"
        },
        "correct": "B",
        "explanation": "<pre>nextElementSibling</pre> returns the next element node, skipping text nodes and comments. <pre>nextSibling</pre> returns the very next node regardless of type, which is often a text node containing whitespace.",
        "topic": {
            "topics": [
                "DOM traversal and navigation"
            ]
        }
    },
    {
        "id": 25,
        "question": "What is the purpose of <pre>event.stopPropagation()</pre>?",
        "options": {
            "A": "Prevents the default action",
            "B": "Stops the event from bubbling up",
            "C": "Removes the event listener",
            "D": "Pauses the event execution"
        },
        "correct": "B",
        "explanation": "<pre>stopPropagation()</pre> prevents the event from bubbling up to parent elements. This is useful when you want to handle an event exclusively in the current element without parent elements also receiving the event.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    },
    {
        "id": 26,
        "question": "How do you set an attribute on an element?",
        "options": {
            "A": "<pre>element.setAttribute('name', 'value')</pre>",
            "B": "<pre>element.attribute('name', 'value')</pre>",
            "C": "<pre>element.attr('name', 'value')</pre>",
            "D": "<pre>element.addAttribute('name', 'value')</pre>"
        },
        "correct": "A",
        "explanation": "<pre>setAttribute()</pre> sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise, a new attribute is added with the specified name and value.",
        "topic": {
            "topics": [
                "Element manipulation and styling"
            ]
        }
    },
    {
        "id": 27,
        "question": "Which method removes an event listener?",
        "options": {
            "A": "<pre>removeEventListener()</pre>",
            "B": "<pre>detachEvent()</pre>",
            "C": "<pre>unlisten()</pre>",
            "D": "<pre>off()</pre>"
        },
        "correct": "A",
        "explanation": "<pre>removeEventListener()</pre> removes an event listener previously registered with <pre>addEventListener()</pre>. The function reference must be the same as the one used when adding the listener, which is why named functions are often preferred for event handlers.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    },
    {
        "id": 28,
        "question": "What does <pre>document.readyState</pre> indicate?",
        "options": {
            "A": "The browser's network status",
            "B": "The loading state of the document",
            "C": "The JavaScript execution state",
            "D": "The user's interaction state"
        },
        "correct": "B",
        "explanation": "<pre>document.readyState</pre> indicates the loading state of the document. It can be 'loading' (document is still loading), 'interactive' (document has finished loading but sub-resources are still loading), or 'complete' (document and all sub-resources have finished loading).",
        "topic": {
            "topics": [
                "Browser event types"
            ]
        }
    },
    {
        "id": 29,
        "question": "How do you insert an element before another element?",
        "options": {
            "A": "<pre>parent.insertBefore(newElement, referenceElement)</pre>",
            "B": "<pre>referenceElement.before(newElement)</pre>",
            "C": "<pre>parent.insert(newElement, referenceElement)</pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both methods work. <pre>insertBefore()</pre> is the traditional method that inserts a node before a reference node as a child of a specified parent node. The newer <pre>before()</pre> method is more intuitive and inserts nodes before the element it's called on.",
        "topic": {
            "topics": [
                "Dynamic content creation"
            ]
        }
    },
    {
        "id": 30,
        "question": "What is the event object passed to event handlers?",
        "options": {
            "A": "The element that triggered the event",
            "B": "An object containing event information",
            "C": "The function that will be executed",
            "D": "The parent element of the target"
        },
        "correct": "B",
        "explanation": "The event object is automatically passed to event handlers and contains information about the event, such as the target element, event type, mouse position, key pressed, and methods to control event propagation and default behavior.",
        "topic": {
            "topics": [
                "Event handling and listeners"
            ]
        }
    }
];

module.exports = { metadata, questions };