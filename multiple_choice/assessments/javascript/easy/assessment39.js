module.exports = {
  "metadata": {
    "title": "JavaScript Event Delegation Essentials",
    "description": "Core concepts and practical implementations of event delegation for efficient DOM event handling.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Delegation fundamentals",
      "Event propagation",
      "Element targeting",
      "Dynamic events",
      "Efficiency benefits",
      "Implementation patterns",
      "Use case scenarios"
    ],
    "topicLinks": [
      {
        "topicName": "Delegation fundamentals",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation"
      },
      {
        "topicName": "Event propagation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles"
      },
      {
        "topicName": "Element targeting",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Event/target"
      },
      {
        "topicName": "Dynamic events",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
      },
      {
        "topicName": "Efficiency benefits",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#memory_issues"
      },
      {
        "topicName": "Implementation patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Element/matches"
      },
      {
        "topicName": "Use case scenarios",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#using_event_delegation"
      }
    ],
    "assessmentId": 39,
    "assessmentUniqueId": 1762786694981,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What problem does event delegation primarily solve?",
      "options": {
        "A": "Handling events for multiple similar elements efficiently",
        "B": "Making events trigger faster",
        "C": "Reducing JavaScript file size",
        "D": "Eliminating the need for event listeners"
      },
      "correct": "A",
      "explanation": "Event delegation solves the problem of efficiently handling events for multiple similar elements by using a single parent listener.",
      "topic": {
        "topics": [
          "Delegation fundamentals"
        ]
      }
    },
    {
      "id": 2,
      "question": "In event delegation, where is the event listener typically placed?",
      "options": {
        "A": "On a common parent element",
        "B": "On each child element",
        "C": "On the document only",
        "D": "On the window object"
      },
      "correct": "A",
      "explanation": "The event listener is placed on a common parent element that contains all the child elements you want to handle events for.",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    },
    {
      "id": 3,
      "question": "How does event delegation handle newly added elements?",
      "options": {
        "A": "Automatically, without additional setup",
        "B": "By adding new listeners when elements are created",
        "C": "Only if you call a refresh method",
        "D": "They need manual event binding"
      },
      "correct": "A",
      "explanation": "New elements automatically work with existing event delegation because the listener is on the parent, which already contains or will contain the new elements.",
      "topic": {
        "topics": [
          "Dynamic events"
        ]
      }
    },
    {
      "id": 4,
      "question": "What property helps you identify the specific element that was clicked?",
      "options": {
        "A": "event.target",
        "B": "event.source",
        "C": "this.element",
        "D": "event.origin"
      },
      "correct": "A",
      "explanation": "event.target refers to the actual element that initiated the event, allowing you to identify which specific child was interacted with.",
      "topic": {
        "topics": [
          "Element targeting"
        ]
      }
    },
    {
      "id": 5,
      "question": "Why is event delegation more memory-efficient?",
      "options": {
        "A": "It uses one listener instead of many",
        "B": "It compresses event data",
        "C": "It shares handler functions",
        "D": "It uses weaker references"
      },
      "correct": "A",
      "explanation": "One event listener consumes less memory than dozens or hundreds of individual listeners, making delegation more efficient.",
      "topic": {
        "topics": [
          "Efficiency benefits"
        ]
      }
    },
    {
      "id": 6,
      "question": "What method checks if an element matches a CSS selector?",
      "options": {
        "A": "element.matches()",
        "B": "element.is()",
        "C": "element.hasSelector()",
        "D": "element.check()"
      },
      "correct": "A",
      "explanation": "The matches() method returns true if the element would be selected by the specified CSS selector string.",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is a common real-world use case for event delegation?",
      "options": {
        "A": "A shopping cart with dynamic items",
        "B": "A single contact form",
        "C": "A static image gallery",
        "D": "A fixed navigation bar"
      },
      "correct": "A",
      "explanation": "Shopping carts where items can be added, removed, or updated are perfect candidates for event delegation.",
      "topic": {
        "topics": [
          "Use case scenarios"
        ]
      }
    },
    {
      "id": 8,
      "question": "How do you find the closest parent with a specific class from the clicked element?",
      "options": {
        "A": "event.target.closest('.className')",
        "B": "event.findParent('.className')",
        "C": "this.closest('.className')",
        "D": "event.parent('.className')"
      },
      "correct": "A",
      "explanation": "The closest() method traverses up from event.target to find the nearest ancestor matching the selector.",
      "topic": {
        "topics": [
          "Element targeting"
        ]
      }
    },
    {
      "id": 9,
      "question": "What happens if a child element calls event.stopPropagation()?",
      "options": {
        "A": "It has no effect on delegation",
        "B": "Event delegation won't work for that event",
        "C": "The event handler runs twice",
        "D": "Only the child handler is called"
      },
      "correct": "B",
      "explanation": "stopPropagation() prevents the event from bubbling up to parent elements, so delegated listeners won't receive the event.",
      "topic": {
        "topics": [
          "Event propagation"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which phase of event flow is typically used for delegation?",
      "options": {
        "A": "Capturing phase",
        "B": "Bubbling phase",
        "C": "Target phase",
        "D": "Initial phase"
      },
      "correct": "B",
      "explanation": "Event delegation typically uses the bubbling phase, where events propagate upward from the target to ancestors.",
      "topic": {
        "topics": [
          "Event propagation"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the main advantage of delegation for application performance?",
      "options": {
        "A": "Fewer DOM queries",
        "B": "Reduced memory usage from fewer listeners",
        "C": "Smaller JavaScript bundles",
        "D": "Faster event processing"
      },
      "correct": "B",
      "explanation": "The primary performance benefit is reduced memory usage since you have fewer event listeners to manage.",
      "topic": {
        "topics": [
          "Efficiency benefits"
        ]
      }
    },
    {
      "id": 12,
      "question": "How can you handle different actions based on which element was clicked?",
      "options": {
        "A": "Check event.target with different selectors",
        "B": "Use multiple delegated listeners",
        "C": "Store actions in data attributes",
        "D": "Both A and C"
      },
      "correct": "D",
      "explanation": "You can check event.target with different selectors and/or read data attributes to determine the appropriate action.",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is a good parent choice for delegating button clicks in a form?",
      "options": {
        "A": "The document body",
        "B": "The form element itself",
        "C": "Each button individually",
        "D": "The window object"
      },
      "correct": "B",
      "explanation": "The form element is a natural parent for delegating button events since it contains all the form controls.",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    },
    {
      "id": 14,
      "question": "How do you prevent the default action in a delegated event handler?",
      "options": {
        "A": "return false",
        "B": "event.preventDefault()",
        "C": "event.stopDefault()",
        "D": "event.cancel()"
      },
      "correct": "B",
      "explanation": "preventDefault() stops the browser's default action, such as form submission or link navigation.",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    },
    {
      "id": 15,
      "question": "What happens when you click on a button inside a list item with delegation?",
      "options": {
        "A": "The event doesn't trigger",
        "B": "event.target could be the button, not the li",
        "C": "event.target is always the li",
        "D": "Both button and li events fire"
      },
      "correct": "B",
      "explanation": "If you click directly on a button inside an li, event.target will be the button, so you may need closest() to find the li.",
      "topic": {
        "topics": [
          "Element targeting"
        ]
      }
    },
    {
      "id": 16,
      "question": "Why is delegation useful for complex user interfaces?",
      "options": {
        "A": "Reduces CSS complexity",
        "B": "Makes UI updates faster",
        "C": "Simplifies event management for dynamic components",
        "D": "Eliminates JavaScript errors"
      },
      "correct": "C",
      "explanation": "In complex UIs with many interactive elements, delegation simplifies event management and reduces code complexity.",
      "topic": {
        "topics": [
          "Use case scenarios"
        ]
      }
    },
    {
      "id": 17,
      "question": "How can you delegate events for elements that don't exist yet?",
      "options": {
        "A": "Use setTimeout to check periodically",
        "B": "They cannot have delegated events",
        "C": "Add listener to a parent that will contain them",
        "D": "Use mutation observers to add listeners later"
      },
      "correct": "C",
      "explanation": "By placing the listener on a stable parent that will contain future elements, they automatically work when created.",
      "topic": {
        "topics": [
          "Dynamic events"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the relationship between event delegation and event bubbling?",
      "options": {
        "A": "They are unrelated concepts",
        "B": "Bubbling is an alternative to delegation",
        "C": "Delegation relies on bubbling to work",
        "D": "Delegation prevents bubbling"
      },
      "correct": "C",
      "explanation": "Event delegation depends on event bubbling to propagate events from children up to the parent listener.",
      "topic": {
        "topics": [
          "Event propagation"
        ]
      }
    },
    {
      "id": 19,
      "question": "How do you handle keyboard events with delegation?",
      "options": {
        "A": "By using the capture phase only",
        "B": "Keyboard events cannot be delegated",
        "C": "The same way as mouse events - they bubble too",
        "D": "Only with special key delegation methods"
      },
      "correct": "C",
      "explanation": "Keyboard events bubble up the DOM tree just like mouse events, so they can be handled with the same delegation patterns.",
      "topic": {
        "topics": [
          "Dynamic events"
        ]
      }
    },
    {
      "id": 20,
      "question": "What is a potential issue with using document for all delegation?",
      "options": {
        "A": "It doesn't work for dynamic content",
        "B": "It's slower than direct listeners",
        "C": "Handler runs for every event on the page",
        "D": "It only works in modern browsers"
      },
      "correct": "C",
      "explanation": "Using document means your handler runs for every event that bubbles to document, requiring careful filtering.",
      "topic": {
        "topics": [
          "Efficiency benefits"
        ]
      }
    },
    {
      "id": 21,
      "question": "How do you remove a delegated event handler?",
      "options": {
        "A": "Remove handlers from all children",
        "B": "Call undelegate() method",
        "C": "removeEventListener on the parent",
        "D": "Delegated handlers cannot be removed"
      },
      "correct": "C",
      "explanation": "Since there's only one listener on the parent, removeEventListener on that parent removes all delegated handling.",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    },
    {
      "id": 22,
      "question": "What makes event delegation ideal for list interactions?",
      "options": {
        "A": "Reduces list HTML size",
        "B": "Makes list rendering faster",
        "C": "Handles any number of items with one listener",
        "D": "Eliminates the need for list elements"
      },
      "correct": "C",
      "explanation": "Whether you have 10 or 1000 list items, one delegated listener handles them all efficiently.",
      "topic": {
        "topics": [
          "Use case scenarios"
        ]
      }
    },
    {
      "id": 23,
      "question": "How can you ensure a delegated handler only runs for specific elements?",
      "options": {
        "A": "Set event.onlyFor property",
        "B": "Use event.filter() method",
        "C": "Use conditional event listeners",
        "D": "Check event.target with matches()"
      },
      "correct": "D",
      "explanation": "Using event.target.matches() with a CSS selector ensures the handler only processes events from desired elements.",
      "topic": {
        "topics": [
          "Element targeting"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is the benefit of delegation for code maintenance?",
      "options": {
        "A": "Fewer JavaScript files",
        "B": "Automatic event documentation",
        "C": "Eliminates the need for testing",
        "D": "Centralized event handling logic"
      },
      "correct": "D",
      "explanation": "Having event logic in one place makes it easier to maintain, debug, and understand how events are handled.",
      "topic": {
        "topics": [
          "Efficiency benefits"
        ]
      }
    },
    {
      "id": 25,
      "question": "How do you handle events for elements with specific data attributes using delegation?",
      "options": {
        "A": "event.data.action",
        "B": "event.hasDataAttribute('action')",
        "C": "this.dataset.action",
        "D": "event.target.matches('[data-action]')"
      },
      "correct": "D",
      "explanation": "Use matches() with attribute selectors to check for data attributes on the clicked element.",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is a key difference between direct listeners and delegation?",
      "options": {
        "A": "Direct listeners use less memory",
        "B": "Direct listeners are faster",
        "C": "Delegation only works for clicks",
        "D": "Delegation uses one listener for multiple elements"
      },
      "correct": "D",
      "explanation": "The fundamental difference is that delegation uses one parent listener instead of individual listeners on each element.",
      "topic": {
        "topics": [
          "Delegation fundamentals"
        ]
      }
    },
    {
      "id": 27,
      "question": "How can you debug which element triggered a delegated event?",
      "options": {
        "A": "Use event.debug()",
        "B": "console.log(this)",
        "C": "console.log(event)",
        "D": "console.log(event.target)"
      },
      "correct": "D",
      "explanation": "Logging event.target shows exactly which element was clicked, helping debug delegation issues.",
      "topic": {
        "topics": [
          "Element targeting"
        ]
      }
    },
    {
      "id": 28,
      "question": "What type of applications benefit least from event delegation?",
      "options": {
        "A": "Interactive dashboards",
        "B": "Single-page applications",
        "C": "Dynamic web applications",
        "D": "Static pages with few interactive elements"
      },
      "correct": "D",
      "explanation": "Static pages with minimal interactivity don't gain significant benefits from event delegation.",
      "topic": {
        "topics": [
          "Use case scenarios"
        ]
      }
    },
    {
      "id": 29,
      "question": "How do you handle mouseover events with delegation?",
      "options": {
        "A": "By using event capturing only",
        "B": "Mouseover events cannot be delegated",
        "C": "Only with special hover delegation",
        "D": "Same as click events - they bubble too"
      },
      "correct": "D",
      "explanation": "Mouseover events bubble up the DOM tree and can be handled with the same delegation patterns as click events.",
      "topic": {
        "topics": [
          "Dynamic events"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the first step in converting direct listeners to delegation?",
      "options": {
        "A": "Rewrite all event handler functions",
        "B": "Remove all existing event listeners",
        "C": "Change event types to 'delegated'",
        "D": "Identify a common parent for all target elements"
      },
      "explanation": "The first step is finding a suitable parent element that contains or will contain all elements you want to handle events for.",
      "correct": "D",
      "topic": {
        "topics": [
          "Implementation patterns"
        ]
      }
    }
  ]
}
