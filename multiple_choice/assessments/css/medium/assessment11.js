module.exports = {
  "metadata": {
    "title": "CSS Medium - CSS Animations",
    "description": "Intermediate assessment covering CSS animations: @keyframes rule definition, animation-name to reference keyframes, animation-duration for animation length, animation-timing-function (ease, linear, cubic-bezier), animation-delay, animation-iteration-count (infinite, number), animation-direction (normal, reverse, alternate), animation-fill-mode (forwards, backwards, both), animation-play-state (running, paused), and shorthand animation property.",
    "difficulty": "medium",
    "domain": "css",
    "timeLimit": 45,
    "questionCount": 25,
    "assessmentId": 11,
    "assessmentUniqueId": 1763117754702,
    "testType": "multiple-choice",
    "topics": [
      "CSS Animations",
      "@keyframes",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "Animation Shorthand",
      "Keyframe Selectors",
      "cubic-bezier",
      "Animation Control"
    ],
    "topicLinks": [
      {
        "topicName": "CSS Animations",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations"
      },
      {
        "topicName": "@keyframes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"
      },
      {
        "topicName": "animation-name",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name"
      },
      {
        "topicName": "animation-duration",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration"
      },
      {
        "topicName": "animation-timing-function",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"
      },
      {
        "topicName": "animation-delay",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"
      },
      {
        "topicName": "animation-iteration-count",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count"
      },
      {
        "topicName": "animation-direction",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction"
      },
      {
        "topicName": "animation-fill-mode",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"
      },
      {
        "topicName": "animation-play-state",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"
      },
      {
        "topicName": "animation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
      }
    ],
    "keywords": [
      "animation",
      "@keyframes",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "ease",
      "linear",
      "cubic-bezier",
      "animation-delay",
      "animation-iteration-count",
      "infinite",
      "animation-direction",
      "reverse",
      "alternate",
      "animation-fill-mode",
      "forwards",
      "backwards",
      "animation-play-state",
      "running",
      "paused"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the purpose of the <pre>@keyframes</pre> rule?",
      "options": {
        "A": "To set animation speed",
        "B": "To define animation styles at various points in the animation sequence",
        "C": "To delay animations",
        "D": "To pause animations"
      },
      "correct": "B",
      "explanation": "The <pre>@keyframes</pre> rule defines the animation sequence by specifying CSS styles at various points (0%, 50%, 100%, etc.) throughout the animation. For example: <pre>@keyframes slide { 0% { left: 0; } 100% { left: 100px; } }</pre>",
      "topic": "@keyframes"
    },
    {
      "id": 2,
      "question": "How do you apply a keyframe animation to an element?",
      "options": {
        "A": "<pre>animation-name: slide;</pre>",
        "B": "<pre>animation: @slide;</pre>",
        "C": "<pre>keyframes: slide;</pre>",
        "D": "<pre>@animation: slide;</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>animation-name</pre> to reference a <pre>@keyframes</pre> animation: <pre>animation-name: slide;</pre>. The name must match the identifier in the <pre>@keyframes</pre> rule. You also need to set <pre>animation-duration</pre> for the animation to run.",
      "topic": "animation-name"
    },
    {
      "id": 3,
      "question": "What does <pre>animation-duration: 2s;</pre> specify?",
      "options": {
        "A": "Animation starts after 2 seconds",
        "B": "Animation pauses for 2 seconds",
        "C": "Animation repeats every 2 seconds",
        "D": "Animation lasts 2 seconds from start to finish"
      },
      "correct": "D",
      "explanation": "<pre>animation-duration</pre> specifies how long one complete cycle of the animation takes. <pre>2s</pre> means the animation runs from 0% to 100% over 2 seconds. You can use seconds (<pre>s</pre>) or milliseconds (<pre>ms</pre>).",
      "topic": "animation-duration"
    },
    {
      "id": 4,
      "question": "What is the default value of <pre>animation-timing-function</pre>?",
      "options": {
        "A": "<pre>ease</pre>",
        "B": "<pre>linear</pre>",
        "C": "<pre>ease-in-out</pre>",
        "D": "<pre>cubic-bezier(0,0,1,1)</pre>"
      },
      "correct": "A",
      "explanation": "The default timing function is <pre>ease</pre>, which starts slowly, speeds up, then slows down at the end. This creates a more natural-looking animation than <pre>linear</pre> (constant speed).",
      "topic": "animation-timing-function"
    },
    {
      "id": 5,
      "question": "What does <pre>animation-timing-function: linear;</pre> do?",
      "options": {
        "A": "Animation moves in a straight line",
        "B": "Animation runs vertically",
        "C": "Animation accelerates linearly",
        "D": "Animation proceeds at constant speed from start to finish"
      },
      "correct": "D",
      "explanation": "<pre>linear</pre> creates a constant-speed animation with no acceleration or deceleration. The animation progresses at the same rate throughout. This is different from <pre>ease</pre> which varies speed.",
      "topic": "animation-timing-function"
    },
    {
      "id": 6,
      "question": "What is <pre>cubic-bezier()</pre> used for in animations?",
      "options": {
        "A": "Creating 3D animations",
        "B": "Defining custom timing functions with precise control over acceleration",
        "C": "Drawing curves",
        "D": "Setting animation paths"
      },
      "correct": "B",
      "explanation": "<pre>cubic-bezier(x1, y1, x2, y2)</pre> creates custom timing functions. For example, <pre>cubic-bezier(0.42, 0, 0.58, 1)</pre> is equivalent to <pre>ease-in-out</pre>. The values control the acceleration curve, allowing precise control over animation pacing.",
      "topic": "animation-timing-function"
    },
    {
      "id": 7,
      "question": "What does <pre>animation-delay: 1s;</pre> do?",
      "options": {
        "A": "Makes animation run for 1 second",
        "B": "Waits 1 second before starting the animation",
        "C": "Pauses animation for 1 second in the middle",
        "D": "Repeats animation every 1 second"
      },
      "correct": "B",
      "explanation": "<pre>animation-delay</pre> specifies how long to wait before starting the animation. <pre>1s</pre> means the animation begins 1 second after being applied. Negative values are allowed and start the animation partway through.",
      "topic": "animation-delay"
    },
    {
      "id": 8,
      "question": "What does a negative <pre>animation-delay</pre> do?",
      "options": {
        "A": "Prevents animation from running",
        "B": "Causes an error",
        "C": "Reverses the animation",
        "D": "Starts the animation immediately at a point partway through its cycle"
      },
      "correct": "D",
      "explanation": "A negative delay like <pre>animation-delay: -1s;</pre> starts the animation immediately, but as if it had already been running for 1 second. This is useful for staggering animations or starting midway through a cycle.",
      "topic": "animation-delay"
    },
    {
      "id": 9,
      "question": "What does <pre>animation-iteration-count: infinite;</pre> mean?",
      "options": {
        "A": "Animation is very long",
        "B": "Animation runs at infinite speed",
        "C": "Animation repeats forever until stopped",
        "D": "Animation never starts"
      },
      "correct": "C",
      "explanation": "<pre>infinite</pre> makes the animation repeat continuously. Otherwise, you can specify a number like <pre>animation-iteration-count: 3;</pre> to repeat exactly 3 times. Decimal values like <pre>2.5</pre> are also valid.",
      "topic": "animation-iteration-count"
    },
    {
      "id": 10,
      "question": "What does <pre>animation-iteration-count: 2.5;</pre> do?",
      "options": {
        "A": "Invalid value, causes error",
        "B": "Rounds to 3 iterations",
        "C": "Plays the animation 2.5 times (2 complete cycles plus half of a third)",
        "D": "Animation duration is multiplied by 2.5"
      },
      "correct": "C",
      "explanation": "Decimal iteration counts are valid. <pre>2.5</pre> means the animation plays twice completely, then plays halfway through a third time before stopping. This allows for animations that don't end at the 100% keyframe.",
      "topic": "animation-iteration-count"
    },
    {
      "id": 11,
      "question": "What does <pre>animation-direction: reverse;</pre> do?",
      "options": {
        "A": "Plays the animation backwards (from 100% to 0%)",
        "B": "Reverses the element position",
        "C": "Inverts colors",
        "D": "Mirrors the element"
      },
      "correct": "A",
      "explanation": "<pre>reverse</pre> plays the animation in reverse, starting from the 100% keyframe and ending at 0%. This is useful when you want the opposite effect of your keyframes without rewriting them.",
      "topic": "animation-direction"
    },
    {
      "id": 12,
      "question": "What does <pre>animation-direction: alternate;</pre> do?",
      "options": {
        "A": "Switches between two animations",
        "B": "Animation plays forward, then backward on alternating iterations",
        "C": "Animation alternates between elements",
        "D": "Animation skips every other frame"
      },
      "correct": "B",
      "explanation": "<pre>alternate</pre> makes the animation play forward on odd iterations and backward on even iterations. Combined with <pre>animation-iteration-count: infinite;</pre>, this creates a smooth back-and-forth effect without jarring resets.",
      "topic": "animation-direction"
    },
    {
      "id": 13,
      "question": "What is the difference between <pre>alternate</pre> and <pre>alternate-reverse</pre>?",
      "options": {
        "A": "<pre>alternate</pre> starts forward; <pre>alternate-reverse</pre> starts backward",
        "B": "No difference",
        "C": "<pre>alternate-reverse</pre> is faster",
        "D": "<pre>alternate-reverse</pre> only works with infinite iterations"
      },
      "correct": "A",
      "explanation": "<pre>alternate</pre> plays forward first (0%→100%), then backward (100%→0%). <pre>alternate-reverse</pre> plays backward first (100%→0%), then forward (0%→100%). Both continue alternating with each iteration.",
      "topic": "animation-direction"
    },
    {
      "id": 14,
      "question": "What does <pre>animation-fill-mode: forwards;</pre> do?",
      "options": {
        "A": "Animation moves forward",
        "B": "Element retains the styles from the final keyframe (100%) after animation ends",
        "C": "Animation plays faster",
        "D": "Animation only affects forward movement"
      },
      "correct": "B",
      "explanation": "<pre>forwards</pre> makes the element keep the styles from the last keyframe after the animation completes. Without this, the element snaps back to its original state. Useful for permanent state changes via animation.",
      "topic": "animation-fill-mode"
    },
    {
      "id": 15,
      "question": "What does <pre>animation-fill-mode: backwards;</pre> do?",
      "options": {
        "A": "Element applies styles from the first keyframe (0%) during animation-delay period",
        "B": "Animation runs in reverse",
        "C": "Element moves backward",
        "D": "Animation fills from back to front"
      },
      "correct": "A",
      "explanation": "<pre>backwards</pre> applies the first keyframe's styles immediately, even during the <pre>animation-delay</pre>. Without it, the element shows its original styles while waiting. This prevents a visual jump when the animation starts.",
      "topic": "animation-fill-mode"
    },
    {
      "id": 16,
      "question": "What does <pre>animation-fill-mode: both;</pre> achieve?",
      "options": {
        "A": "Runs two animations",
        "B": "Combines effects of both <pre>forwards</pre> and <pre>backwards</pre>",
        "C": "Animates both width and height",
        "D": "Affects both parent and child"
      },
      "correct": "B",
      "explanation": "<pre>both</pre> applies first keyframe styles during delay (like <pre>backwards</pre>) and retains final keyframe styles after completion (like <pre>forwards</pre>). This is the most common fill mode for complete animation control.",
      "topic": "animation-fill-mode"
    },
    {
      "id": 17,
      "question": "How do you pause an animation with CSS?",
      "options": {
        "A": "<pre>animation-pause: true;</pre>",
        "B": "<pre>animation: stop;</pre>",
        "C": "<pre>animation-play-state: paused;</pre>",
        "D": "<pre>animation-running: false;</pre>"
      },
      "correct": "C",
      "explanation": "<pre>animation-play-state: paused;</pre> pauses the animation at its current position. <pre>animation-play-state: running;</pre> resumes it. This is useful for user-controlled animations: <pre>.element:hover { animation-play-state: paused; }</pre>",
      "topic": "animation-play-state"
    },
    {
      "id": 18,
      "question": "What is the shorthand syntax order for the <pre>animation</pre> property?",
      "options": {
        "A": "name, duration, timing, delay, iteration, direction, fill-mode, play-state",
        "B": "duration, name, timing, delay, iteration, direction, fill-mode, play-state (duration and name can be in any order, but duration must be before delay)",
        "C": "All properties can be in any order",
        "D": "name must be first, others in any order"
      },
      "correct": "B",
      "explanation": "The shorthand is: <pre>animation: duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name</pre>. Duration must come before delay (both are time values). Name can be anywhere. Example: <pre>animation: 2s ease-in 1s infinite alternate both running slide;</pre>",
      "topic": "Animation Shorthand"
    },
    {
      "id": 19,
      "question": "Can you define multiple animations on one element?",
      "options": {
        "A": "No, only one animation per element",
        "B": "Yes, but they override each other",
        "C": "Only with JavaScript",
        "D": "Yes, separate animations with commas"
      },
      "correct": "D",
      "explanation": "Multiple animations are separated by commas: <pre>animation: slide 2s, fade 1s, rotate 3s;</pre> or <pre>animation-name: slide, fade, rotate; animation-duration: 2s, 1s, 3s;</pre>. All animations run simultaneously on the element.",
      "topic": "Animation Shorthand"
    },
    {
      "id": 20,
      "question": "In <pre>@keyframes</pre>, what do <pre>from</pre> and <pre>to</pre> represent?",
      "options": {
        "A": "Animation direction",
        "B": "Starting and ending elements",
        "C": "Import/export syntax",
        "D": "<pre>from</pre> is 0%, <pre>to</pre> is 100%"
      },
      "correct": "D",
      "explanation": "<pre>from</pre> is equivalent to <pre>0%</pre> and <pre>to</pre> is equivalent to <pre>100%</pre>. You can use either: <pre>@keyframes slide { from { left: 0; } to { left: 100px; } }</pre> or <pre>@keyframes slide { 0% { left: 0; } 100% { left: 100px; } }</pre>",
      "topic": "@keyframes"
    },
    {
      "id": 21,
      "question": "Can you use percentages between 0% and 100% in <pre>@keyframes</pre>?",
      "options": {
        "A": "No, only from and to",
        "B": "Only 50% is allowed",
        "C": "Yes, you can define any percentage keyframes like 25%, 50%, 75%",
        "D": "Only multiples of 10%"
      },
      "correct": "C",
      "explanation": "You can use any percentage values to create complex animations: <pre>@keyframes complex { 0% { opacity: 0; } 25% { opacity: 1; } 75% { opacity: 1; } 100% { opacity: 0; } }</pre>. This creates precise control over animation timing.",
      "topic": "@keyframes"
    },
    {
      "id": 22,
      "question": "What happens if you don't specify <pre>animation-duration</pre>?",
      "options": {
        "A": "Animation runs at default 1s",
        "B": "Animation doesn't run (default is 0s)",
        "C": "Browser chooses duration",
        "D": "Animation runs infinitely"
      },
      "correct": "B",
      "explanation": "The default <pre>animation-duration</pre> is <pre>0s</pre>, so the animation won't be visible without explicitly setting a duration. This is a common mistake when animations don't appear to work.",
      "topic": "animation-duration"
    },
    {
      "id": 23,
      "question": "What timing function creates a bounce effect at the end?",
      "options": {
        "A": "<pre>ease-out</pre>",
        "B": "<pre>linear</pre>",
        "C": "Custom <pre>cubic-bezier()</pre> with values outside 0-1 range",
        "D": "<pre>bounce</pre>"
      },
      "correct": "C",
      "explanation": "To create bouncing effects, use <pre>cubic-bezier()</pre> with values outside 0-1. For example: <pre>cubic-bezier(0.68, -0.55, 0.265, 1.55)</pre> creates an overshoot/bounce. There's no built-in <pre>bounce</pre> timing function.",
      "topic": "animation-timing-function"
    },
    {
      "id": 24,
      "question": "Can different keyframe percentages have different timing functions?",
      "options": {
        "A": "No, timing function is global for the animation",
        "B": "Only in JavaScript",
        "C": "Yes, you can specify <pre>animation-timing-function</pre> within individual keyframe blocks",
        "D": "Only for 3D animations"
      },
      "correct": "C",
      "explanation": "You can set different timing functions between keyframes: <pre>@keyframes move { 0% { left: 0; animation-timing-function: ease-in; } 50% { left: 100px; animation-timing-function: ease-out; } 100% { left: 200px; } }</pre> This allows complex, multi-phase animations.",
      "topic": "animation-timing-function"
    },
    {
      "id": 25,
      "question": "What's the benefit of using <pre>animation-fill-mode: forwards;</pre> vs setting final styles with JavaScript?",
      "options": {
        "A": "No difference",
        "B": "fill-mode only works on hover",
        "C": "JavaScript is always better",
        "D": "CSS is declarative, more performant, and doesn't require JavaScript execution"
      },
      "correct": "D",
      "explanation": "Using <pre>animation-fill-mode: forwards;</pre> is more performant and declarative than JavaScript. The browser handles the final state natively without JS overhead. It's also more maintainable and works even if JavaScript fails to load or is disabled.",
      "topic": "animation-fill-mode"
    }
  ]
}
