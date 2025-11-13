module.exports = {
  "metadata": {
    "title": "JavaScript Event Delegation Basics",
    "description": "Fundamental concepts of event delegation, event bubbling, and efficient DOM event handling patterns.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Event delegation concept",
      "Event bubbling",
      "Event target",
      "Dynamic element handling",
      "Performance benefits",
      "Delegation patterns",
      "Practical use cases"
    ],
    "topicLinks": [
      {
        "topicName": "Event delegation concept",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation"
      },
      {
        "topicName": "Event bubbling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles"
      },
      {
        "topicName": "Event target",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Event/target"
      },
      {
        "topicName": "Dynamic element handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
      },
      {
        "topicName": "Performance benefits",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#memory_issues"
      },
      {
        "topicName": "Delegation patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Element/matches"
      },
      {
        "topicName": "Practical use cases",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#using_event_delegation"
      }
    ],
    "assessmentId": 37,
    "assessmentUniqueId": 1762785703744,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is event delegation in JavaScript?",
      "options": {
        "A": "Attaching one event listener to a parent to handle children",
        "B": "Delegating events to another function",
        "C": "Creating multiple event listeners",
        "D": "Sending events to a server"
      },
      "correct": "A",
      "explanation": "Event delegation uses a single event listener on a parent element to handle events from multiple child elements through event bubbling.",
      "topic": {
        "topics": [
          "Event delegation concept"
        ]
      }
    },
    {
      "id": 2,
      "question": "Why is event delegation useful for dynamic content?",
      "options": {
        "A": "It works for elements added after page load",
        "B": "It makes events faster",
        "C": "It requires less code",
        "D": "It prevents event bubbling"
      },
      "correct": "A",
      "explanation": "Since the listener is on a stable parent, it automatically handles events from dynamically added children without needing to attach new listeners.",
      "topic": {
        "topics": [
          "Dynamic element handling"
        ]
      }
    },
    {
      "id": 3,
      "question": "How do you identify which child element was clicked in event delegation?",
      "options": {
        "A": "Check event.target",
        "B": "Check event.currentTarget",
        "C": "Check this keyword",
        "D": "Check event.source"
      },
      "correct": "A",
      "explanation": "event.target refers to the actual element that triggered the event, which is the child element that was clicked.",
      "topic": {
        "topics": [
          "Event target"
        ]
      }
    },
    {
      "id": 4,
      "question": "What is event bubbling?",
      "options": {
        "A": "Events propagate upward from target to ancestors",
        "B": "Events create bubbles in the DOM",
        "C": "Events propagate downward to children",
        "D": "Events duplicate themselves"
      },
      "correct": "A",
      "explanation": "Event bubbling means events start at the target element and propagate up through its ancestors, enabling event delegation.",
      "topic": {
        "topics": [
          "Event bubbling"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which scenario is ideal for event delegation?",
      "options": {
        "A": "A list where items can be added/removed",
        "B": "A single button on a page",
        "C": "A form with one input field",
        "D": "A static header element"
      },
      "correct": "A",
      "explanation": "Event delegation is perfect for lists with dynamic items because you don't need to manage listeners for each new item.",
      "topic": {
        "topics": [
          "Practical use cases"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you check if the clicked element matches a specific selector?",
      "options": {
        "A": "<pre>event.target.matches('.selector')</pre>",
        "B": "<pre>event.matches('.selector')</pre>",
        "C": "<pre>this.matches('.selector')</pre>",
        "D": "<pre>event.currentTarget.matches('.selector')</pre>"
      },
      "correct": "A",
      "explanation": "The matches() method on event.target checks if the clicked element matches a CSS selector.",
      "topic": {
        "topics": [
          "Delegation patterns"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the performance benefit of event delegation?",
      "options": {
        "A": "Uses fewer event listeners",
        "B": "Makes events trigger faster",
        "C": "Reduces DOM size",
        "D": "Compresses event data"
      },
      "correct": "A",
      "explanation": "One listener on a parent replaces many individual listeners on children, reducing memory usage and setup time.",
      "topic": {
        "topics": [
          "Performance benefits"
        ]
      }
    },
    {
      "id": 8,
      "question": "In event delegation, what does event.currentTarget refer to?",
      "options": {
        "A": "The element with the event listener",
        "B": "The element that was clicked",
        "C": "The document root",
        "D": "The event source"
      },
      "correct": "A",
      "explanation": "event.currentTarget is the element that has the event listener attached (the parent in delegation).",
      "topic": {
        "topics": [
          "Event target"
        ]
      }
    },
    {
      "id": 9,
      "question": "How do you stop event bubbling if needed?",
      "options": {
        "A": "<pre>event.stopBubbling()</pre>",
        "B": "<pre>event.stopPropagation()</pre>",
        "C": "<pre>event.preventDefault()</pre>",
        "D": "<pre>event.cancelBubble()</pre>"
      },
      "correct": "B",
      "explanation": "stopPropagation() prevents the event from bubbling up to parent elements, which would break event delegation.",
      "topic": {
        "topics": [
          "Event bubbling"
        ]
      }
    },
    {
      "id": 10,
      "question": "What is a common mistake in event delegation?",
      "options": {
        "A": "Using too many parent listeners",
        "B": "Not checking if event.target matches desired element",
        "C": "Attaching listeners to document only",
        "D": "Using event delegation for all events"
      },
      "correct": "B",
      "explanation": "Forgetting to verify that event.target is the specific child you want to handle can cause the handler to run for unwanted clicks.",
      "topic": {
        "topics": [
          "Delegation patterns"
        ]
      }
    },
    {
      "id": 11,
      "question": "Which event does NOT bubble by default?",
      "options": {
        "A": "click",
        "B": "focus",
        "C": "mouseover",
        "D": "keydown"
      },
      "correct": "B",
      "explanation": "The focus event does not bubble by default, so it cannot be used with event delegation without special handling.",
      "topic": {
        "topics": [
          "Event bubbling"
        ]
      }
    },
    {
      "id": 12,
      "question": "How do you handle clicks on specific list items using delegation?",
      "options": {
        "A": "Add listeners to each li individually",
        "B": "Add listener to ul, check if event.target is li",
        "C": "Add listener to document only",
        "D": "Use inline onclick handlers"
      },
      "correct": "B",
      "explanation": "Attach one listener to the ul element and check if event.target (or its parent) is an li element.",
      "topic": {
        "topics": [
          "Practical use cases"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the difference between event.target and event.currentTarget?",
      "options": {
        "A": "They are always the same",
        "B": "target is clicked element, currentTarget is listener element",
        "C": "target is listener, currentTarget is clicked",
        "D": "target is parent, currentTarget is child"
      },
      "correct": "B",
      "explanation": "event.target is the element that triggered the event, event.currentTarget is the element with the event listener.",
      "topic": {
        "topics": [
          "Event target"
        ]
      }
    },
    {
      "id": 14,
      "question": "Why might you use event delegation for a large table?",
      "options": {
        "A": "Tables don't support direct listeners",
        "B": "Avoid attaching hundreds of cell listeners",
        "C": "It makes table rendering faster",
        "D": "Tables require delegation by default"
      },
      "correct": "B",
      "explanation": "A table with hundreds of cells would require hundreds of individual listeners without delegation, which is inefficient.",
      "topic": {
        "topics": [
          "Performance benefits"
        ]
      }
    },
    {
      "id": 15,
      "question": "How can you find the closest parent with a specific class from event.target?",
      "options": {
        "A": "<pre>event.closest('.class')</pre>",
        "B": "<pre>event.target.closest('.class')</pre>",
        "C": "<pre>this.closest('.class')</pre>",
        "D": "<pre>event.target.find('.class')</pre>"
      },
      "correct": "B",
      "explanation": "The closest() method searches up the DOM tree from event.target to find the nearest ancestor matching the selector.",
      "topic": {
        "topics": [
          "Delegation patterns"
        ]
      }
    },
    {
      "id": 16,
      "question": "What happens if you click between list items in a delegated listener?",
      "options": {
        "A": "It triggers all list items",
        "B": "event.target might be the ul, not an li",
        "C": "The click is ignored completely",
        "D": "It throws an error"
      },
      "correct": "B",
      "explanation": "If you click the padding between items, event.target could be the ul itself, so you need to check what was actually clicked.",
      "topic": {
        "topics": [
          "Event target"
        ]
      }
    },
    {
      "id": 17,
      "question": "When should you NOT use event delegation?",
      "options": {
        "A": "For a dynamic list of items",
        "B": "For a grid of interactive cells",
        "C": "For a single, static button",
        "D": "For a menu with submenus"
      },
      "correct": "C",
      "explanation": "For single static elements, direct event listeners are simpler and more appropriate than delegation.",
      "topic": {
        "topics": [
          "Practical use cases"
        ]
      }
    },
    {
      "id": 18,
      "question": "How do you handle events for elements deep inside the clicked element?",
      "options": {
        "A": "Only handle direct children",
        "B": "Attach listeners to every nested element",
        "C": "Use closest() to find the relevant parent",
        "D": "Use event.stopPropagation() on children"
      },
      "correct": "C",
      "explanation": "If a child contains other elements, event.target might be a deep descendant. Use closest() to find the element you actually want to handle.",
      "topic": {
        "topics": [
          "Delegation patterns"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the memory advantage of event delegation?",
      "options": {
        "A": "Delegation caches event handlers",
        "B": "Events use compressed data",
        "C": "Fewer listeners means less memory usage",
        "D": "It shares handlers between elements"
      },
      "correct": "C",
      "explanation": "Each event listener consumes memory. Delegation uses one listener instead of many, reducing overall memory footprint.",
      "topic": {
        "topics": [
          "Performance benefits"
        ]
      }
    },
    {
      "id": 20,
      "question": "How do you remove event delegation?",
      "options": {
        "A": "Event delegation cannot be removed",
        "B": "Remove listeners from all children",
        "C": "Remove the single parent listener",
        "D": "Use event.removeDelegation()"
      },
      "correct": "C",
      "explanation": "Since there's only one listener on the parent, removing that single listener stops all delegated event handling.",
      "topic": {
        "topics": [
          "Event delegation concept"
        ]
      }
    },
    {
      "id": 21,
      "question": "What does event.stopPropagation() do to event delegation?",
      "options": {
        "A": "Speeds up event delegation",
        "B": "Makes delegation work better",
        "C": "Prevents the event from reaching delegated listeners",
        "D": "Has no effect on delegation"
      },
      "correct": "C",
      "explanation": "If a child element calls stopPropagation(), the event won't bubble up to the parent, breaking event delegation.",
      "topic": {
        "topics": [
          "Event bubbling"
        ]
      }
    },
    {
      "id": 22,
      "question": "How can you handle different types of children with one delegated listener?",
      "options": {
        "A": "Only handle one type of child",
        "B": "Use multiple delegated listeners",
        "C": "Check event.target with different selectors",
        "D": "Use a switch statement on event.type"
      },
      "correct": "C",
      "explanation": "You can check event.target.matches() with different CSS selectors to handle multiple child types in one listener.",
      "topic": {
        "topics": [
          "Delegation patterns"
        ]
      }
    },
    {
      "id": 23,
      "question": "Why is document.body often used for event delegation?",
      "options": {
        "A": "It's the fastest option",
        "B": "It has special delegation powers",
        "C": "It captures all events that bubble up",
        "D": "It prevents event conflicts"
      },
      "correct": "C",
      "explanation": "Since most events bubble up to body, using it as the delegate captures events from anywhere on the page.",
      "topic": {
        "topics": [
          "Practical use cases"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is a potential downside of using document for delegation?",
      "options": {
        "A": "It doesn't work for dynamic content",
        "B": "It only works for click events",
        "C": "It's slower than direct listeners",
        "D": "The handler runs for many unrelated clicks"
      },
      "correct": "D",
      "explanation": "Using document means your handler runs for every click on the page, so you must carefully filter event.target.",
      "topic": {
        "topics": [
          "Delegation patterns"
        ]
      }
    },
    {
      "id": 25,
      "question": "How do you handle events for elements that might not exist yet?",
      "options": {
        "A": "Attach listeners after creating elements",
        "B": "Wait for them to be created first",
        "C": "Use setTimeout to check periodically",
        "D": "Use delegation on a stable parent"
      },
      "correct": "D",
      "explanation": "Event delegation automatically handles future elements because the listener is on a parent that already exists.",
      "topic": {
        "topics": [
          "Dynamic element handling"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is the event capturing phase?",
      "options": {
        "A": "Events duplicate during propagation",
        "B": "Events are captured for analysis",
        "C": "Events stop propagating",
        "D": "Events propagate down from document to target"
      },
      "correct": "D",
      "explanation": "Event capturing is the opposite of bubbling - events propagate down from document to target before the bubbling phase.",
      "topic": {
        "topics": [
          "Event bubbling"
        ]
      }
    },
    {
      "id": 27,
      "question": "How can you use event capturing for delegation?",
      "options": {
        "A": "It's not possible with delegation",
        "B": "Use event.capture() method",
        "C": "Set event.capture = true",
        "D": "Pass {capture: true} to addEventListener"
      },
      "correct": "D",
      "explanation": "You can use the capture phase by setting the capture option to true, though bubbling is more commonly used for delegation.",
      "topic": {
        "topics": [
          "Event bubbling"
        ]
      }
    },
    {
      "id": 28,
      "question": "What is the main advantage of delegation for large applications?",
      "options": {
        "A": "Makes all events global",
        "B": "Automatically removes old listeners",
        "C": "Eliminates the need for event listeners",
        "D": "Simplifies event management for dynamic UI"
      },
      "correct": "D",
      "explanation": "In large apps with complex, dynamic UIs, delegation reduces the complexity of managing many individual event listeners.",
      "topic": {
        "topics": [
          "Performance benefits"
        ]
      }
    },
    {
      "id": 29,
      "question": "How do you handle keyboard events with delegation?",
      "options": {
        "A": "Only use document for keyboard delegation",
        "B": "Keyboard events cannot be delegated",
        "C": "Use special key delegation methods",
        "D": "Same as click events - check event.target"
      },
      "correct": "D",
      "explanation": "Keyboard events bubble just like mouse events, so you can use the same delegation patterns by checking event.target.",
      "topic": {
        "topics": [
          "Practical use cases"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the first step in implementing event delegation?",
      "options": {
        "A": "Remove existing direct listeners",
        "B": "Find all child elements to delegate",
        "C": "Create a delegation function",
        "D": "Identify a stable parent element"
      },
      "explanation": "The first step is finding a parent element that contains (or will contain) the children you want to handle, and that won't be removed from DOM.",
      "correct": "D",
      "topic": {
        "topics": [
          "Event delegation concept"
        ]
      }
    }
  ]
}
