module.exports = {
  "metadata": {
    "title": "JavaScript Event Delegation Patterns",
    "description": "Practical event delegation techniques for efficient DOM event handling with dynamic content and multiple elements.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Delegation implementation",
      "Event flow",
      "Target identification",
      "Dynamic content handling",
      "Performance optimization",
      "Common patterns",
      "Real-world scenarios"
    ],
    "topicLinks": [
      {
        "topicName": "Delegation implementation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation"
      },
      {
        "topicName": "Event flow",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase"
      },
      {
        "topicName": "Target identification",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Event/target"
      },
      {
        "topicName": "Dynamic content handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
      },
      {
        "topicName": "Performance optimization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#memory_issues"
      },
      {
        "topicName": "Common patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Element/matches"
      },
      {
        "topicName": "Real-world scenarios",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#using_event_delegation"
      }
    ],
    "assessmentId": 38,
    "assessmentUniqueId": 1762786334603,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the primary mechanism that makes event delegation possible?",
      "options": {
        "A": "Event bubbling",
        "B": "Event capturing",
        "C": "Event pooling",
        "D": "Event delegation"
      },
      "correct": "A",
      "explanation": "Event bubbling allows events to propagate up from the target element to its ancestors, enabling parent elements to handle events from their children.",
      "topic": {
        "topics": [
          "Event flow"
        ]
      }
    },
    {
      "id": 2,
      "question": "How do you typically set up event delegation for a list?",
      "options": {
        "A": "Add one listener to the ul element",
        "B": "Add listeners to each li element",
        "C": "Add a listener to the document",
        "D": "Use inline event handlers"
      },
      "correct": "A",
      "explanation": "For a list, you add a single event listener to the ul (or ol) element and handle events from its li children through bubbling.",
      "topic": {
        "topics": [
          "Delegation implementation"
        ]
      }
    },
    {
      "id": 3,
      "question": "What property do you check to see which element was actually clicked?",
      "options": {
        "A": "event.target",
        "B": "event.currentTarget",
        "C": "this",
        "D": "event.source"
      },
      "correct": "A",
      "explanation": "event.target refers to the specific element that triggered the event, which is crucial for identifying which child was interacted with.",
      "topic": {
        "topics": [
          "Target identification"
        ]
      }
    },
    {
      "id": 4,
      "question": "Why is event delegation more efficient for large numbers of elements?",
      "options": {
        "A": "It uses fewer event listeners",
        "B": "It processes events faster",
        "C": "It uses less memory per event",
        "D": "It compresses event data"
      },
      "correct": "A",
      "explanation": "One event listener on a parent replaces potentially hundreds of individual listeners, reducing memory usage and initialization time.",
      "topic": {
        "topics": [
          "Performance optimization"
        ]
      }
    },
    {
      "id": 5,
      "question": "How do you verify that a clicked element is the type you want to handle?",
      "options": {
        "A": "event.target.matches('selector')",
        "B": "event.matches('selector')",
        "C": "this.matches('selector')",
        "D": "event.target === desiredElement"
      },
      "correct": "A",
      "explanation": "The matches() method checks if event.target matches a CSS selector, allowing you to filter which elements should trigger the handler.",
      "topic": {
        "topics": [
          "Common patterns"
        ]
      }
    },
    {
      "id": 6,
      "question": "What happens when new elements are added to a container with event delegation?",
      "options": {
        "A": "They automatically work with existing delegation",
        "B": "They need new event listeners",
        "C": "They won't respond to events",
        "D": "They inherit events from siblings"
      },
      "correct": "A",
      "explanation": "Since the listener is on the parent, any new children automatically benefit from event delegation without additional setup.",
      "topic": {
        "topics": [
          "Dynamic content handling"
        ]
      }
    },
    {
      "id": 7,
      "question": "Which method helps find a specific ancestor of the clicked element?",
      "options": {
        "A": "event.target.closest('selector')",
        "B": "event.closest('selector')",
        "C": "this.closest('selector')",
        "D": "event.find('selector')"
      },
      "correct": "A",
      "explanation": "closest() searches up the DOM tree from event.target to find the nearest ancestor matching the selector.",
      "topic": {
        "topics": [
          "Target identification"
        ]
      }
    },
    {
      "id": 8,
      "question": "What is a common use case for event delegation?",
      "options": {
        "A": "A todo list with dynamic items",
        "B": "A single submit button",
        "C": "A static navigation menu",
        "D": "A fixed header element"
      },
      "correct": "A",
      "explanation": "Todo lists with items that can be added, removed, or modified are perfect for event delegation.",
      "topic": {
        "topics": [
          "Real-world scenarios"
        ]
      }
    },
    {
      "id": 9,
      "question": "How do you prevent event delegation from working?",
      "options": {
        "A": "Use event.preventDefault()",
        "B": "Call event.stopPropagation() on a child",
        "C": "Set event.bubbles = false",
        "D": "Use capture phase only"
      },
      "correct": "B",
      "explanation": "stopPropagation() stops the event from bubbling up to parent elements, which breaks event delegation.",
      "topic": {
        "topics": [
          "Event flow"
        ]
      }
    },
    {
      "id": 10,
      "question": "What is the difference between event.target and event.currentTarget in delegation?",
      "options": {
        "A": "target is parent, currentTarget is child",
        "B": "target is clicked element, currentTarget is parent with listener",
        "C": "They are always the same in delegation",
        "D": "currentTarget is always document"
      },
      "correct": "B",
      "explanation": "In event delegation, event.target is the child that was clicked, while event.currentTarget is the parent with the event listener.",
      "topic": {
        "topics": [
          "Target identification"
        ]
      }
    },
    {
      "id": 11,
      "question": "Why might you use document.body for event delegation?",
      "options": {
        "A": "It has special event properties",
        "B": "To handle events from anywhere on the page",
        "C": "It's faster than other elements",
        "D": "It prevents event conflicts"
      },
      "correct": "B",
      "explanation": "Using document.body as the delegate captures events from any element on the page that bubbles up to the body.",
      "topic": {
        "topics": [
          "Common patterns"
        ]
      }
    },
    {
      "id": 12,
      "question": "How do you handle multiple types of elements with one delegated listener?",
      "options": {
        "A": "Use multiple if statements",
        "B": "Check event.target with different selectors",
        "C": "Create separate delegated listeners",
        "D": "Only one type can be handled per listener"
      },
      "correct": "B",
      "explanation": "You can use multiple event.target.matches() checks or a switch statement to handle different element types in one listener.",
      "topic": {
        "topics": [
          "Delegation implementation"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is a potential drawback of using event delegation?",
      "options": {
        "A": "It doesn't work in all browsers",
        "B": "Handler runs for many events that need filtering",
        "C": "It's slower than direct listeners",
        "D": "It only works for click events"
      },
      "correct": "B",
      "explanation": "The delegated handler runs for every event that bubbles up to the parent, so you need to filter which events to actually process.",
      "topic": {
        "topics": [
          "Performance optimization"
        ]
      }
    },
    {
      "id": 14,
      "question": "How can you improve performance when using event delegation on document?",
      "options": {
        "A": "Use event.stopPropagation() everywhere",
        "B": "Use more specific parent elements when possible",
        "C": "Set useCapture to true",
        "D": "Use fewer if statements"
      },
      "correct": "B",
      "explanation": "Using a more specific container instead of document reduces the number of events that trigger the handler, improving performance.",
      "topic": {
        "topics": [
          "Performance optimization"
        ]
      }
    },
    {
      "id": 15,
      "question": "What happens if you click on text within a list item?",
      "options": {
        "A": "event.target is always the li",
        "B": "event.target might be the text node, not the li",
        "C": "The event doesn't trigger",
        "D": "It throws an error"
      },
      "correct": "B",
      "explanation": "If you click directly on text, event.target could be the text node, so you may need to use closest() to find the li.",
      "topic": {
        "topics": [
          "Target identification"
        ]
      }
    },
    {
      "id": 16,
      "question": "How do you remove event delegation?",
      "options": {
        "A": "Remove listeners from all children",
        "B": "Remove the single parent listener",
        "C": "Call removeDelegation()",
        "D": "Event delegation cannot be removed"
      },
      "correct": "B",
      "explanation": "Since there's only one event listener on the parent, removing that listener stops all delegated event handling.",
      "topic": {
        "topics": [
          "Delegation implementation"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the event capturing phase?",
      "options": {
        "A": "Events are captured for later use",
        "B": "Events stop propagating",
        "C": "Events propagate from document down to target",
        "D": "Events duplicate themselves"
      },
      "correct": "C",
      "explanation": "Event capturing is the phase where events propagate from the document down to the target element, before the bubbling phase.",
      "topic": {
        "topics": [
          "Event flow"
        ]
      }
    },
    {
      "id": 18,
      "question": "Can you use event delegation with keyboard events?",
      "options": {
        "A": "Only if using event capturing",
        "B": "No, keyboard events don't bubble",
        "C": "Yes, they bubble like mouse events",
        "D": "Only with specific key codes"
      },
      "correct": "C",
      "explanation": "Keyboard events like keydown, keyup, and keypress bubble up the DOM tree, making them suitable for event delegation.",
      "topic": {
        "topics": [
          "Real-world scenarios"
        ]
      }
    },
    {
      "id": 19,
      "question": "How do you handle events for elements with specific data attributes?",
      "options": {
        "A": "this.dataset.attribute",
        "B": "event.hasAttribute('data-attribute')",
        "C": "event.target.matches('[data-attribute]')",
        "D": "event.data.attribute"
      },
      "correct": "C",
      "explanation": "You can use matches() with attribute selectors to check for data attributes: '[data-action]', '[data-id=\"value\"]', etc.",
      "topic": {
        "topics": [
          "Common patterns"
        ]
      }
    },
    {
      "id": 20,
      "question": "What is a good practice when using event delegation?",
      "options": {
        "A": "Always use document for maximum coverage",
        "B": "Use delegation for every event",
        "C": "Use the closest practical parent, not always document",
        "D": "Avoid delegation for performance"
      },
      "correct": "C",
      "explanation": "Use the closest stable parent that contains all elements you want to handle, rather than always using document, for better performance.",
      "topic": {
        "topics": [
          "Performance optimization"
        ]
      }
    },
    {
      "id": 21,
      "question": "How can you handle events for elements that are frequently added and removed?",
      "options": {
        "A": "Use inline event handlers",
        "B": "Add/remove listeners each time",
        "C": "Event delegation on a stable parent",
        "D": "Use mutation observers"
      },
      "correct": "C",
      "explanation": "Event delegation automatically handles dynamically added/removed elements without needing to manage individual listeners.",
      "topic": {
        "topics": [
          "Dynamic content handling"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the main benefit of delegation for memory management?",
      "options": {
        "A": "Automatic garbage collection",
        "B": "Events use less memory",
        "C": "Reduces the number of event listeners",
        "D": "Events are pooled and reused"
      },
      "correct": "C",
      "explanation": "Fewer event listeners means less memory usage and easier cleanup, especially important for long-running applications.",
      "topic": {
        "topics": [
          "Performance optimization"
        ]
      }
    },
    {
      "id": 23,
      "question": "How do you handle events for elements that might be nested inside the target?",
      "options": {
        "A": "Only handle direct children",
        "B": "Check event.target.parentElement",
        "C": "Use event.target.closest() to find the relevant element",
        "D": "Use event.relatedTarget"
      },
      "correct": "C",
      "explanation": "closest() finds the nearest ancestor matching your selector, even if event.target is a nested child element.",
      "topic": {
        "topics": [
          "Target identification"
        ]
      }
    },
    {
      "id": 24,
      "question": "What type of applications benefit most from event delegation?",
      "options": {
        "A": "Applications with few interactive elements",
        "B": "Static brochure websites",
        "C": "Server-rendered pages with little JavaScript",
        "D": "Single-page applications with dynamic content"
      },
      "correct": "D",
      "explanation": "SPAs with complex, dynamic UIs benefit greatly from event delegation's ability to handle changing content efficiently.",
      "topic": {
        "topics": [
          "Real-world scenarios"
        ]
      }
    },
    {
      "id": 25,
      "question": "How do you set up event delegation for a table?",
      "options": {
        "A": "Only delegate on thead or tbody",
        "B": "Add listeners to each table cell",
        "C": "Use table.delegate() method",
        "D": "Add listener to table element, check for td/th clicks"
      },
      "correct": "D",
      "explanation": "Add one listener to the table element and check if event.target is a td, th, or use closest() to find the relevant cell.",
      "topic": {
        "topics": [
          "Delegation implementation"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is event.target useful for in delegation?",
      "options": {
        "A": "Stopping event propagation",
        "B": "Finding the parent element",
        "C": "Getting event metadata",
        "D": "Identifying which specific element was interacted with"
      },
      "correct": "D",
      "explanation": "event.target tells you exactly which element originated the event, which is essential for determining what action to take.",
      "topic": {
        "topics": [
          "Target identification"
        ]
      }
    },
    {
      "id": 27,
      "question": "How can you debug event delegation issues?",
      "options": {
        "A": "Add console.log to every element",
        "B": "Check the Events panel in devtools",
        "C": "Use event.debug() method",
        "D": "Check event.target and event.currentTarget in console"
      },
      "correct": "D",
      "explanation": "Logging event.target and event.currentTarget helps verify which elements are involved and whether delegation is working correctly.",
      "topic": {
        "topics": [
          "Common patterns"
        ]
      }
    },
    {
      "id": 28,
      "question": "What is a key advantage of delegation for team development?",
      "options": {
        "A": "Automatically documents event handling",
        "B": "Makes code easier to read",
        "C": "Eliminates the need for communication",
        "D": "Reduces conflicts when multiple features add elements"
      },
      "correct": "D",
      "explanation": "With delegation, different team members can add interactive elements without worrying about event listener conflicts or management.",
      "topic": {
        "topics": [
          "Real-world scenarios"
        ]
      }
    },
    {
      "id": 29,
      "question": "How do you handle events for elements that share a common class?",
      "options": {
        "A": "event.hasClass('common-class')",
        "B": "event.className === 'common-class'",
        "C": "this.classList.contains('common-class')",
        "D": "event.target.matches('.common-class')"
      },
      "correct": "D",
      "explanation": "Use matches() with a class selector to check if the clicked element has the specific class you're looking for.",
      "topic": {
        "topics": [
          "Common patterns"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the first consideration when implementing event delegation?",
      "options": {
        "A": "Write the event filtering logic",
        "B": "Decide which events to handle",
        "C": "Remove existing direct listeners",
        "D": "Choose the right parent element"
      },
      "explanation": "The most important decision is selecting the appropriate parent element that will contain all target elements and remain stable in the DOM.",
      "correct": "D",
      "topic": {
        "topics": [
          "Delegation implementation"
        ]
      }
    }
  ]
}
