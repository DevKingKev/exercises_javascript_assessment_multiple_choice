module.exports = {
  "metadata": {
    "title": "CSS Basic Transitions",
    "description": "Master CSS transitions to create smooth, animated effects. Learn about transition properties, timing functions, delays, and best practices for performance-optimized animations.",
    "difficulty": "easy",
    "domain": "css",
    "timeLimit": 30,
    "questionCount": 30,
    "assessmentId": 25,
    "assessmentUniqueId": 1763069009779,
    "testType": "multiple-choice",
    "topics": [
      "Transition Property Introduction",
      "Transition-property",
      "Transition-duration",
      "Transition-timing-function",
      "Transition-delay",
      "Transition Shorthand",
      "Hover Effects with Transitions",
      "Transition Performance",
      "Multiple Property Transitions",
      "Transition Best Practices"
    ],
    "topicLinks": [
      "Transition Property Introduction",
      "Transition-property",
      "Transition-duration",
      "Transition-timing-function",
      "Transition-delay",
      "Transition Shorthand",
      "Hover Effects with Transitions",
      "Transition Performance",
      "Multiple Property Transitions",
      "Transition Best Practices"
    ],
    "keywords": [
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "ease",
      "linear",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "hover effects",
      "transform",
      "opacity",
      "animation performance",
      "will-change",
      "all property",
      "cubic-bezier",
      "smooth transitions",
      "property animation",
      "timing function",
      "animation delay",
      "shorthand syntax",
      "GPU acceleration",
      "paint performance",
      "composite layers"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What does the CSS <pre>transition</pre> property do?",
      "options": {
        "A": "Instantly changes property values",
        "B": "Creates a smooth animation between property value changes",
        "C": "Delays page loading",
        "D": "Transitions between pages"
      },
      "correct": "B",
      "explanation": "The transition property creates smooth animations when CSS property values change, instead of having them change instantly. This enhances user experience with fluid visual effects.",
      "topic": "Transition Property Introduction"
    },
    {
      "id": 2,
      "question": "Which property specifies which CSS properties should be transitioned?",
      "options": {
        "A": "transition-name",
        "B": "animation-property",
        "C": "transition-property",
        "D": "transition-target"
      },
      "correct": "C",
      "explanation": "The transition-property specifies which CSS properties should have transitions applied. You can specify individual properties like 'opacity', 'transform', or use 'all' for all animatable properties.",
      "topic": "Transition-property"
    },
    {
      "id": 3,
      "question": "What is the default value of <pre>transition-property</pre>?",
      "options": {
        "A": "all",
        "B": "none",
        "C": "auto",
        "D": "inherit"
      },
      "correct": "A",
      "explanation": "The default value of transition-property is 'all', which means transitions will apply to all animatable properties that change.",
      "topic": "Transition-property"
    },
    {
      "id": 4,
      "question": "How do you specify that only the <pre>opacity</pre> property should transition?",
      "options": {
        "A": "transition: opacity-only",
        "B": "transition-property: opacity",
        "C": "animation-property: opacity",
        "D": "transition-target: opacity"
      },
      "correct": "B",
      "explanation": "Use transition-property: opacity to specify that only the opacity property should transition when it changes.",
      "topic": "Transition-property"
    },
    {
      "id": 5,
      "question": "What does <pre>transition-duration</pre> control?",
      "options": {
        "A": "How long the element exists",
        "B": "How long the transition animation takes to complete",
        "C": "The delay before the transition starts",
        "D": "The speed curve of the transition"
      },
      "correct": "B",
      "explanation": "transition-duration specifies how long the transition animation takes to complete, typically specified in seconds (s) or milliseconds (ms).",
      "topic": "Transition-duration"
    },
    {
      "id": 6,
      "question": "How do you specify a transition duration of 500 milliseconds?",
      "options": {
        "A": "transition-duration: 0.5s or transition-duration: 500ms",
        "B": "transition-duration: 500",
        "C": "transition-time: 500ms",
        "D": "duration: 500"
      },
      "correct": "A",
      "explanation": "You can specify duration as 0.5s (seconds) or 500ms (milliseconds). Both are equivalent and valid.",
      "topic": "Transition-duration"
    },
    {
      "id": 7,
      "question": "What is the default value of <pre>transition-duration</pre>?",
      "options": {
        "A": "1s",
        "B": "0s",
        "C": "0.3s",
        "D": "auto"
      },
      "correct": "B",
      "explanation": "The default value of transition-duration is 0s, which means no transition occurs (instant change) unless explicitly specified.",
      "topic": "Transition-duration"
    },
    {
      "id": 8,
      "question": "What does <pre>transition-timing-function</pre> control?",
      "options": {
        "A": "When the transition starts",
        "B": "The speed curve/acceleration of the transition",
        "C": "How long the transition lasts",
        "D": "Which properties transition"
      },
      "correct": "B",
      "explanation": "transition-timing-function controls the speed curve or acceleration pattern of the transition, determining how intermediate values are calculated over time.",
      "topic": "Transition-timing-function"
    },
    {
      "id": 9,
      "question": "What does the <pre>ease</pre> timing function do?",
      "options": {
        "A": "Constant speed throughout",
        "B": "Starts slow, then speeds up",
        "C": "Starts fast, then slows down",
        "D": "Starts slow, speeds up, then slows down at the end"
      },
      "correct": "D",
      "explanation": "The 'ease' timing function (the default) starts slow, speeds up in the middle, and slows down at the end, creating a smooth, natural-feeling animation.",
      "topic": "Transition-timing-function"
    },
    {
      "id": 10,
      "question": "Which timing function creates a constant speed transition?",
      "options": {
        "A": "linear",
        "B": "ease",
        "C": "constant",
        "D": "steady"
      },
      "correct": "A",
      "explanation": "The 'linear' timing function creates a transition with constant speed from start to finish, with no acceleration or deceleration.",
      "topic": "Transition-timing-function"
    },
    {
      "id": 11,
      "question": "What does the <pre>ease-in</pre> timing function do?",
      "options": {
        "A": "Starts slow, gradually accelerates",
        "B": "Starts fast, ends slow",
        "C": "Constant speed",
        "D": "Random speed variations"
      },
      "correct": "A",
      "explanation": "The 'ease-in' timing function starts slowly and gradually accelerates toward the end of the transition.",
      "topic": "Transition-timing-function"
    },
    {
      "id": 12,
      "question": "What does the <pre>ease-out</pre> timing function do?",
      "options": {
        "A": "Starts slow, ends slow",
        "B": "Constant speed",
        "C": "Starts slow, stays slow",
        "D": "Starts fast, gradually decelerates"
      },
      "correct": "D",
      "explanation": "The 'ease-out' timing function starts quickly and gradually decelerates toward the end, creating a smooth landing effect.",
      "topic": "Transition-timing-function"
    },
    {
      "id": 13,
      "question": "What does <pre>transition-delay</pre> do?",
      "options": {
        "A": "Slows down the transition",
        "B": "Delays the page load",
        "C": "Specifies a wait time before the transition starts",
        "D": "Pauses the transition midway"
      },
      "correct": "C",
      "explanation": "transition-delay specifies how long to wait before starting the transition animation after the property change is triggered.",
      "topic": "Transition-delay"
    },
    {
      "id": 14,
      "question": "Can <pre>transition-delay</pre> have negative values?",
      "options": {
        "A": "No, only positive values are allowed",
        "B": "Only with ease timing",
        "C": "Yes, negative values start the transition partway through",
        "D": "Only in modern browsers"
      },
      "correct": "C",
      "explanation": "Yes, negative transition-delay values are allowed. They cause the transition to start immediately but appear as if it already started partway through the animation.",
      "topic": "Transition-delay"
    },
    {
      "id": 15,
      "question": "What is the correct order for the transition shorthand property?",
      "options": {
        "A": "property duration delay timing-function",
        "B": "property duration timing-function delay",
        "C": "duration property timing-function delay",
        "D": "timing-function duration delay property"
      },
      "correct": "B",
      "explanation": "The transition shorthand order is: property duration timing-function delay. For example: transition: opacity 0.3s ease-in 0.1s",
      "topic": "Transition Shorthand"
    },
    {
      "id": 16,
      "question": "Which is a valid transition shorthand?",
      "options": {
        "A": "transition: 0.3s opacity ease",
        "B": "transition: ease opacity 0.3s",
        "C": "transition: opacity 0.3s ease",
        "D": "transition: 0.3s ease opacity"
      },
      "correct": "C",
      "explanation": "transition: opacity 0.3s ease follows the correct order: property, duration, timing-function. This transitions the opacity property over 0.3 seconds with an ease timing function.",
      "topic": "Transition Shorthand"
    },
    {
      "id": 17,
      "question": "How do you transition multiple properties with different durations?",
      "options": {
        "A": "Use multiple transition properties",
        "B": "Comma-separate transition values",
        "C": "Use transition-all",
        "D": "It's not possible"
      },
      "correct": "B",
      "explanation": "You can transition multiple properties with different settings by comma-separating them: transition: opacity 0.3s, transform 0.5s",
      "topic": "Multiple Property Transitions"
    },
    {
      "id": 18,
      "question": "What is a common use case for transitions on <pre>:hover</pre>?",
      "options": {
        "A": "Page navigation",
        "B": "Loading animations",
        "C": "Smooth color or size changes when hovering over elements",
        "D": "Form validation"
      },
      "correct": "C",
      "explanation": "A common use case is creating smooth effects when hovering over buttons or links, such as gradually changing background color, scale, or opacity instead of instant changes.",
      "topic": "Hover Effects with Transitions"
    },
    {
      "id": 19,
      "question": "Where should you place the <pre>transition</pre> property for hover effects?",
      "options": {
        "A": "On the :hover selector",
        "B": "On the base element (not the :hover state)",
        "C": "On both the base element and :hover",
        "D": "In a separate animation rule"
      },
      "correct": "B",
      "explanation": "Place the transition property on the base element (not :hover) so the transition applies both when hovering and when the hover ends, creating smooth transitions in both directions.",
      "topic": "Hover Effects with Transitions"
    },
    {
      "id": 20,
      "question": "Which properties are most performant to transition?",
      "options": {
        "A": "width and height",
        "B": "color and background-color",
        "C": "margin and padding",
        "D": "transform and opacity"
      },
      "correct": "D",
      "explanation": "transform and opacity are most performant because they can be GPU-accelerated and don't trigger layout or paint operations, only compositing.",
      "topic": "Transition Performance"
    },
    {
      "id": 21,
      "question": "Why is transitioning <pre>width</pre> or <pre>height</pre> less performant than <pre>transform: scale()</pre>?",
      "options": {
        "A": "They're equally performant",
        "B": "Width/height trigger layout recalculation, while transform uses GPU compositing",
        "C": "Width/height are not animatable",
        "D": "Transform is newer technology"
      },
      "correct": "B",
      "explanation": "Transitioning width or height triggers layout recalculation and repainting. Using transform: scale() instead only affects compositing, which is GPU-accelerated and much faster.",
      "topic": "Transition Performance"
    },
    {
      "id": 22,
      "question": "Can you transition the <pre>display</pre> property?",
      "options": {
        "A": "Yes, it transitions smoothly",
        "B": "Only from none to block",
        "C": "No, display is not an animatable property",
        "D": "Only with JavaScript"
      },
      "correct": "C",
      "explanation": "No, the display property is not animatable. It changes instantly. Use opacity and visibility instead for fade-in/out effects, or height for collapsing animations.",
      "topic": "Transition Best Practices"
    },
    {
      "id": 23,
      "question": "What does <pre>transition: all 0.3s</pre> do?",
      "options": {
        "A": "Transitions only the 'all' property",
        "B": "Creates three transitions",
        "C": "Applies to all elements on the page",
        "D": "Transitions all animatable properties over 0.3 seconds"
      },
      "correct": "D",
      "explanation": "transition: all 0.3s applies a 0.3-second transition to all animatable properties that change. While convenient, it's often better to specify individual properties for performance.",
      "topic": "Multiple Property Transitions"
    },
    {
      "id": 24,
      "question": "What is the default timing function for transitions?",
      "options": {
        "A": "linear",
        "B": "steps",
        "C": "ease-in-out",
        "D": "ease"
      },
      "correct": "D",
      "explanation": "The default timing function is 'ease', which provides a smooth acceleration and deceleration effect.",
      "topic": "Transition-timing-function"
    },
    {
      "id": 25,
      "question": "Can you use <pre>cubic-bezier()</pre> for custom timing functions?",
      "options": {
        "A": "No, only predefined values are allowed",
        "B": "Only with keyframe animations",
        "C": "Only in Chrome",
        "D": "Yes, cubic-bezier() allows custom acceleration curves"
      },
      "correct": "D",
      "explanation": "Yes, cubic-bezier() allows you to create custom timing functions by specifying control points. For example: cubic-bezier(0.4, 0, 0.2, 1)",
      "topic": "Transition-timing-function"
    },
    {
      "id": 26,
      "question": "What happens if you specify <pre>transition-duration</pre> without <pre>transition-property</pre>?",
      "options": {
        "A": "It applies to all properties (default is 'all')",
        "B": "The transition won't work",
        "C": "Only opacity transitions",
        "D": "Browser throws an error"
      },
      "correct": "A",
      "explanation": "If you don't specify transition-property, it defaults to 'all', so the duration will apply to all animatable properties that change.",
      "topic": "Transition Best Practices"
    },
    {
      "id": 27,
      "question": "Which is better for performance: transitioning <pre>left</pre> or <pre>transform: translateX()</pre>?",
      "options": {
        "A": "left is faster",
        "B": "They're equal",
        "C": "transform: translateX() is faster",
        "D": "Depends on the browser"
      },
      "correct": "C",
      "explanation": "transform: translateX() is much faster because it's GPU-accelerated and only affects compositing. Transitioning 'left' triggers layout and paint operations.",
      "topic": "Transition Performance"
    },
    {
      "id": 28,
      "question": "What does the <pre>ease-in-out</pre> timing function do?",
      "options": {
        "A": "Constant speed throughout",
        "B": "Random timing",
        "C": "Starts fast, ends fast",
        "D": "Starts slow, ends slow, with acceleration in the middle"
      },
      "correct": "D",
      "explanation": "The 'ease-in-out' timing function starts slowly, accelerates in the middle, and slows down at the end, creating a smooth start and finish.",
      "topic": "Transition-timing-function"
    },
    {
      "id": 29,
      "question": "Can transitions work with pseudo-elements like <pre>::before</pre> and <pre>::after</pre>?",
      "options": {
        "A": "Yes, pseudo-elements can have transitions",
        "B": "No, only real elements",
        "C": "Only ::before",
        "D": "Only with JavaScript"
      },
      "correct": "A",
      "explanation": "Yes, transitions work perfectly with pseudo-elements like ::before and ::after. They're commonly used for creating animated underlines, overlays, and decorative effects.",
      "topic": "Transition Best Practices"
    },
    {
      "id": 30,
      "question": "What is a good transition duration for most hover effects?",
      "options": {
        "A": "0.1s to 0.3s for responsive feel",
        "B": "1s to 2s for dramatic effect",
        "C": "5s for smooth animation",
        "D": "0.01s for instant feedback"
      },
      "correct": "A",
      "explanation": "For most hover effects, 0.1s to 0.3s (100-300ms) provides a responsive feel that's smooth but not sluggish. Longer durations can feel slow and unresponsive.",
      "topic": "Hover Effects with Transitions"
    }
  ]
}
