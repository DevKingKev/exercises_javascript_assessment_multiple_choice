module.exports = {
    metadata: {
        title: "CSS Medium Level - General Assessment 2",
        description: "Expand your intermediate CSS skills with advanced animations, filters, blend modes, CSS counters, multi-column layouts, aspect ratios, gradients, and form styling techniques. This assessment builds on foundational concepts with practical applications.",
        difficulty: "medium",
        domain: "css",
        timeLimit: 45,
        questionCount: 25,
        assessmentId: 2,
        assessmentUniqueId: 1763078613360,
        testType: "multiple-choice",
        topics: [
            "CSS Animations",
            "Filters and Blend Modes",
            "CSS Counters",
            "Multi-column Layout",
            "Aspect Ratio and Object Fit",
            "Gradients",
            "Form Styling",
            "Overflow and Scrolling",
            "Advanced Pseudo-classes",
            "CSS Shapes and Clipping"
        ],
        topicLinks: [
            {
                topicName: "CSS Animations",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations"
            },
            {
                topicName: "Filters and Blend Modes",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
            },
            {
                topicName: "CSS Counters",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters"
            },
            {
                topicName: "Multi-column Layout",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout"
            },
            {
                topicName: "Aspect Ratio and Object Fit",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"
            },
            {
                topicName: "Gradients",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient"
            },
            {
                topicName: "Form Styling",
                refLink: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms"
            },
            {
                topicName: "Overflow and Scrolling",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
            },
            {
                topicName: "Advanced Pseudo-classes",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"
            },
            {
                topicName: "CSS Shapes and Clipping",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path"
            }
        ],
        keywords: [
            "keyframes",
            "animation-duration",
            "animation-timing-function",
            "animation-iteration-count",
            "animation-direction",
            "animation-fill-mode",
            "filter",
            "blur",
            "grayscale",
            "mix-blend-mode",
            "background-blend-mode",
            "counter-reset",
            "counter-increment",
            "column-count",
            "column-gap",
            "aspect-ratio",
            "object-fit",
            "linear-gradient",
            "radial-gradient",
            "appearance",
            "checked",
            "valid",
            "invalid",
            "scroll-snap-type",
            "clip-path"
        ]
    },
    questions: [
        {
            id: 1,
            question: "What does the <pre>@keyframes</pre> rule define in CSS animations?",
            options: {
                A: "The duration of the animation",
                B: "The intermediate steps or waypoints of an animation sequence",
                C: "The element to animate",
                D: "The timing function of the animation"
            },
            correct: "B",
            explanation: "The <pre>@keyframes</pre> rule defines the intermediate steps or waypoints in an animation sequence by specifying CSS styles at various points during the animation. You define keyframes using percentages (0% to 100%) or the keywords <pre>from</pre> (0%) and <pre>to</pre> (100%). For example:\n[CODE]@keyframes slideIn {\n  from { transform: translateX(-100%); }\n  to { transform: translateX(0); }\n}[/CODE]\nYou can then reference this animation by name using the <pre>animation-name</pre> property. The browser automatically interpolates between the defined keyframes to create smooth animations.",
            topic: {
                topics: ["CSS Animations"]
            }
        },
        {
            id: 2,
            question: "What does <pre>animation-iteration-count: infinite</pre> do?",
            options: {
                A: "Makes the animation run once",
                B: "Makes the animation run continuously without stopping",
                C: "Stops the animation",
                D: "Pauses the animation after one iteration"
            },
            correct: "B",
            explanation: "<pre>animation-iteration-count: infinite</pre> makes the animation run continuously without stopping, repeating indefinitely. By default, animations run once (<pre>animation-iteration-count: 1</pre>), but you can specify any number of iterations or use <pre>infinite</pre> for endless repetition. This is commonly used for loading spinners, pulsing effects, or background animations:\n[CODE].spinner {\n  animation: rotate 1s linear infinite;\n}\n@keyframes rotate {\n  to { transform: rotate(360deg); }\n}[/CODE]\nCombine with <pre>animation-direction: alternate</pre> to create back-and-forth infinite animations.",
            topic: {
                topics: ["CSS Animations"]
            }
        },
        {
            id: 3,
            question: "What is the purpose of <pre>animation-fill-mode: forwards</pre>?",
            options: {
                A: "Makes the animation play forward only",
                B: "Keeps the element at the final keyframe state after animation completes",
                C: "Starts the animation from the beginning",
                D: "Increases animation speed"
            },
            correct: "B",
            explanation: "<pre>animation-fill-mode: forwards</pre> causes the element to retain the styles from the final keyframe (100% or <pre>to</pre>) after the animation completes. Without this, the element would snap back to its original state. The values are:\n- <pre>none</pre>: Default, no styles applied before or after\n- <pre>forwards</pre>: Retains final keyframe styles\n- <pre>backwards</pre>: Applies first keyframe styles during animation-delay\n- <pre>both</pre>: Applies both forwards and backwards\n\nThis is essential when you want animations to persist their end state, like fading in elements that should remain visible.",
            topic: {
                topics: ["CSS Animations"]
            }
        },
        {
            id: 4,
            question: "What does <pre>animation-direction: alternate</pre> do?",
            options: {
                A: "Plays the animation in reverse only",
                B: "Alternates between playing forward and backward on each iteration",
                C: "Plays two animations at once",
                D: "Chooses a random direction each time"
            },
            correct: "B",
            explanation: "<pre>animation-direction: alternate</pre> makes the animation play forward on odd iterations and backward on even iterations, creating a smooth back-and-forth effect. The values are:\n- <pre>normal</pre>: Forward every iteration (default)\n- <pre>reverse</pre>: Backward every iteration\n- <pre>alternate</pre>: Forward, then backward, then forward, etc.\n- <pre>alternate-reverse</pre>: Backward, then forward, then backward, etc.\n\nThis is perfect for pendulum effects, pulsing animations, or any motion that should oscillate:\n[CODE]animation: pulse 2s ease-in-out infinite alternate;[/CODE]",
            topic: {
                topics: ["CSS Animations"]
            }
        },
        {
            id: 5,
            question: "What does the <pre>filter: blur(5px)</pre> property do?",
            options: {
                A: "Makes the element transparent",
                B: "Applies a Gaussian blur with a 5px radius to the element",
                C: "Moves the element 5px",
                D: "Increases element brightness"
            },
            correct: "B",
            explanation: "<pre>filter: blur(5px)</pre> applies a Gaussian blur effect with a 5-pixel radius to the element, making it appear out of focus. The blur radius determines how many pixels blend together. Larger values create stronger blurs. This filter is commonly used for:\n- Creating frosted glass effects\n- Blurring backgrounds behind modals\n- Loading states or disabled elements\n- Depth of field effects\n\nYou can combine multiple filters:\n[CODE]filter: blur(3px) brightness(0.8);[/CODE]\nNote that filters can impact performance on complex layouts.",
            topic: {
                topics: ["Filters and Blend Modes"]
            }
        },
        {
            id: 6,
            question: "What is the difference between <pre>filter: grayscale(1)</pre> and <pre>filter: grayscale(100%)</pre>?",
            options: {
                A: "grayscale(1) is stronger",
                B: "They are equivalent - both create full grayscale",
                C: "grayscale(100%) is invalid syntax",
                D: "grayscale(1) only affects text"
            },
            correct: "B",
            explanation: "Both <pre>filter: grayscale(1)</pre> and <pre>filter: grayscale(100%)</pre> are equivalent and create a fully grayscale image. The grayscale filter accepts values from 0 to 1 (or 0% to 100%), where 0 means no effect and 1/100% means complete grayscale conversion. You can use partial values for subtle effects:\n[CODE]filter: grayscale(0.5);   /* 50% grayscale */\nfilter: grayscale(50%);    /* Same as above */\nfilter: grayscale(0);      /* No effect */\nfilter: grayscale(1);      /* Full grayscale */[/CODE]\nThis is useful for desaturating images on hover or indicating disabled states.",
            topic: {
                topics: ["Filters and Blend Modes"]
            }
        },
        {
            id: 7,
            question: "What does <pre>mix-blend-mode</pre> control?",
            options: {
                A: "How colors mix in gradients",
                B: "How an element's content blends with its background and elements behind it",
                C: "Font blending",
                D: "Animation blending"
            },
            correct: "B",
            explanation: "<pre>mix-blend-mode</pre> determines how an element's content blends with the content of its parent and the elements behind it. Common values include:\n- <pre>multiply</pre>: Darker, like overlaying inks\n- <pre>screen</pre>: Lighter, like overlaying light\n- <pre>overlay</pre>: Combination of multiply and screen\n- <pre>difference</pre>: Inverts colors based on brightness\n- <pre>color-dodge</pre>: Brightens the backdrop\n\nThis creates photoshop-like effects purely with CSS:\n[CODE].overlay {\n  mix-blend-mode: multiply;\n}[/CODE]\nDifferent from <pre>background-blend-mode</pre>, which only blends background layers.",
            topic: {
                topics: ["Filters and Blend Modes"]
            }
        },
        {
            id: 8,
            question: "How do you initialize a CSS counter?",
            options: {
                A: "Using counter-start property",
                B: "Using counter-reset property on a parent element",
                C: "Using counter-begin property",
                D: "Counters initialize automatically"
            },
            correct: "B",
            explanation: "You initialize a CSS counter using the <pre>counter-reset</pre> property on a parent or ancestor element. This sets the counter to 0 (or a specified value). Then use <pre>counter-increment</pre> to increase it:\n[CODE]ol {\n  counter-reset: my-counter;  /* Initialize */\n}\nli {\n  counter-increment: my-counter;  /* Increment */\n}\nli::before {\n  content: counter(my-counter) \". \";  /* Display */\n}[/CODE]\nYou can reset to a specific value: <pre>counter-reset: my-counter 5</pre> starts at 5. This enables custom numbering schemes without JavaScript.",
            topic: {
                topics: ["CSS Counters"]
            }
        },
        {
            id: 9,
            question: "What is the purpose of the <pre>content</pre> property when using CSS counters?",
            options: {
                A: "To style the counter",
                B: "To display the counter value in generated content",
                C: "To increment the counter",
                D: "To reset the counter"
            },
            correct: "B",
            explanation: "The <pre>content</pre> property is used with pseudo-elements (<pre>::before</pre> or <pre>::after</pre>) to display the counter value in generated content. You use the <pre>counter()</pre> or <pre>counters()</pre> function within content:\n[CODE]h2 {\n  counter-increment: section;\n}\nh2::before {\n  content: \"Section \" counter(section) \": \";\n}[/CODE]\nYou can also format counters with different numbering systems:\n[CODE]content: counter(item, upper-roman);  /* I, II, III */\ncontent: counter(item, lower-alpha);   /* a, b, c */[/CODE]\nThis creates automatic numbering that updates dynamically.",
            topic: {
                topics: ["CSS Counters"]
            }
        },
        {
            id: 10,
            question: "What does <pre>column-count: 3</pre> do?",
            options: {
                A: "Creates 3 rows",
                B: "Divides the content into 3 newspaper-style columns",
                C: "Sets 3 grid columns",
                D: "Creates 3 flex items"
            },
            correct: "B",
            explanation: "<pre>column-count: 3</pre> divides the content into three newspaper-style columns, with content flowing from one column to the next. This is part of the CSS Multi-column Layout module:\n[CODE].article {\n  column-count: 3;\n  column-gap: 2rem;\n  column-rule: 1px solid #ccc;\n}[/CODE]\nContent automatically reflows as the container resizes. You can also use <pre>column-width</pre> to specify an optimal width and let the browser determine the count, or use both together. Use <pre>break-inside: avoid</pre> on elements to prevent them from splitting across columns.",
            topic: {
                topics: ["Multi-column Layout"]
            }
        },
        {
            id: 11,
            question: "What is the purpose of <pre>column-gap</pre> in multi-column layout?",
            options: {
                A: "Creates space between rows",
                B: "Sets the spacing between columns",
                C: "Sets column width",
                D: "Creates gaps in text"
            },
            correct: "B",
            explanation: "<pre>column-gap</pre> sets the spacing between columns in a multi-column layout. It can use any length unit (px, em, rem, %) or the keyword <pre>normal</pre> (typically 1em). For example:\n[CODE].text {\n  column-count: 3;\n  column-gap: 40px;  /* 40px between columns */\n}[/CODE]\nNote that <pre>column-gap</pre> is also used in Grid and Flexbox layouts (formerly <pre>grid-column-gap</pre> and <pre>flex-gap</pre>). The gap doesn't apply to the outer edges, only between columns. You can add visual separators with <pre>column-rule</pre>.",
            topic: {
                topics: ["Multi-column Layout"]
            }
        },
        {
            id: 12,
            question: "What does <pre>aspect-ratio: 16/9</pre> do?",
            options: {
                A: "Sets width to 16px and height to 9px",
                B: "Maintains a 16:9 width-to-height ratio for the element",
                C: "Creates a 16x9 grid",
                D: "Sets font aspect ratio"
            },
            correct: "B",
            explanation: "<pre>aspect-ratio: 16/9</pre> maintains a 16:9 width-to-height ratio for the element, automatically calculating one dimension based on the other. This is incredibly useful for responsive media:\n[CODE].video-container {\n  width: 100%;\n  aspect-ratio: 16/9;\n  /* Height automatically calculated */\n}[/CODE]\nBefore this property, developers used the padding-hack technique. Now it's much simpler. Common aspect ratios include:\n- <pre>16/9</pre>: Widescreen video\n- <pre>4/3</pre>: Standard video\n- <pre>1/1</pre>: Square\n- <pre>3/2</pre>: Photography\n\nYou can use it with images, videos, or any element needing consistent proportions.",
            topic: {
                topics: ["Aspect Ratio and Object Fit"]
            }
        },
        {
            id: 13,
            question: "When using <pre>object-fit: cover</pre> on an image, what happens?",
            options: {
                A: "Image shrinks to fit inside container",
                B: "Image is scaled to cover the entire container, potentially cropping parts",
                C: "Image is stretched to fill container",
                D: "Image maintains original size"
            },
            correct: "B",
            explanation: "<pre>object-fit: cover</pre> scales the image to cover the entire container while maintaining its aspect ratio, which may crop parts of the image. This is perfect for thumbnail images or hero sections where you want to fill a space:\n[CODE]img {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;  /* Fills 300x200, may crop */\n  object-position: center;  /* Which part to show */\n}[/CODE]\nOther object-fit values:\n- <pre>contain</pre>: Fits entirely inside, may have empty space\n- <pre>fill</pre>: Stretches to fill (default)\n- <pre>scale-down</pre>: Uses smaller of none or contain\n- <pre>none</pre>: Original size, may overflow",
            topic: {
                topics: ["Aspect Ratio and Object Fit"]
            }
        },
        {
            id: 14,
            question: "What does a <pre>linear-gradient(to right, red, blue)</pre> create?",
            options: {
                A: "A vertical gradient from red to blue",
                B: "A horizontal gradient from red on the left to blue on the right",
                C: "A diagonal gradient",
                D: "A radial gradient"
            },
            correct: "B",
            explanation: "<pre>linear-gradient(to right, red, blue)</pre> creates a horizontal gradient that transitions from red on the left side to blue on the right side. The first parameter specifies direction:\n- <pre>to right</pre>: Left to right →\n- <pre>to bottom</pre>: Top to bottom ↓ (default)\n- <pre>to top</pre>: Bottom to top ↑\n- <pre>to left</pre>: Right to left ←\n- <pre>45deg</pre>: Angled gradients\n- <pre>to bottom right</pre>: Diagonal\n\nYou can add multiple color stops:\n[CODE]background: linear-gradient(to right, red, yellow 50%, blue);[/CODE]\nGradients are treated as background-image, not background-color.",
            topic: {
                topics: ["Gradients"]
            }
        },
        {
            id: 15,
            question: "What is the difference between <pre>linear-gradient</pre> and <pre>radial-gradient</pre>?",
            options: {
                A: "They are the same",
                B: "linear-gradient transitions along a straight line, radial-gradient radiates from a center point",
                C: "linear-gradient is for borders, radial-gradient for backgrounds",
                D: "radial-gradient only works on circles"
            },
            correct: "B",
            explanation: "<pre>linear-gradient</pre> creates color transitions along a straight line (horizontal, vertical, or diagonal), while <pre>radial-gradient</pre> creates color transitions that radiate outward from a center point in a circular or elliptical pattern:\n[CODE]/* Linear: straight line */\nbackground: linear-gradient(red, blue);\n\n/* Radial: center outward */\nbackground: radial-gradient(red, blue);[/CODE]\n\nRadial gradients can be circular or elliptical and you can control the center position and shape:\n[CODE]background: radial-gradient(circle at top left, red, blue);[/CODE]\nBoth support multiple color stops and can create complex patterns.",
            topic: {
                topics: ["Gradients"]
            }
        },
        {
            id: 16,
            question: "What does <pre>appearance: none</pre> do on form elements?",
            options: {
                A: "Hides the element",
                B: "Removes the browser's default styling, allowing custom styling",
                C: "Makes the element disabled",
                D: "Changes the element type"
            },
            correct: "B",
            explanation: "<pre>appearance: none</pre> removes the browser's default native styling from form elements, giving you a blank slate for custom styling. This is essential for creating custom-styled checkboxes, radio buttons, and select dropdowns:\n[CODE]input[type=\"checkbox\"] {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #333;\n  /* Now you can fully customize */\n}\ninput[type=\"checkbox\"]:checked {\n  background: blue;\n}[/CODE]\nWithout this, browser default styles often override your custom CSS. Note: some browsers may require vendor prefixes (<pre>-webkit-appearance</pre>, <pre>-moz-appearance</pre>).",
            topic: {
                topics: ["Form Styling"]
            }
        },
        {
            id: 17,
            question: "What does the <pre>:checked</pre> pseudo-class select?",
            options: {
                A: "All form elements",
                B: "Radio buttons, checkboxes, and option elements that are checked or selected",
                C: "Only checkboxes",
                D: "Invalid form inputs"
            },
            correct: "B",
            explanation: "The <pre>:checked</pre> pseudo-class matches radio buttons, checkboxes, and <pre>&lt;option&gt;</pre> elements that are in a checked or selected state. This is powerful for creating custom form controls and interactive components:\n[CODE]input[type=\"checkbox\"]:checked {\n  background: blue;\n}\n\n/* Custom checkbox with ::before */\ninput[type=\"checkbox\"]:checked::before {\n  content: \"✓\";\n}[/CODE]\nYou can even create CSS-only toggles and tabs using <pre>:checked</pre> combined with the adjacent sibling selector (<pre>+</pre>) to show/hide content without JavaScript.",
            topic: {
                topics: ["Form Styling", "Advanced Pseudo-classes"]
            }
        },
        {
            id: 18,
            question: "What is the purpose of the <pre>:valid</pre> and <pre>:invalid</pre> pseudo-classes?",
            options: {
                A: "To validate CSS syntax",
                B: "To style form inputs based on whether their value meets validation requirements",
                C: "To check browser compatibility",
                D: "To validate HTML structure"
            },
            correct: "B",
            explanation: "The <pre>:valid</pre> and <pre>:invalid</pre> pseudo-classes allow you to style form inputs based on whether their current value satisfies validation constraints (like <pre>required</pre>, <pre>pattern</pre>, <pre>type</pre>, <pre>min</pre>, <pre>max</pre>):\n[CODE]input:valid {\n  border-color: green;\n}\ninput:invalid {\n  border-color: red;\n}[/CODE]\nThis provides instant visual feedback to users. You often combine these with <pre>:focus</pre> or use <pre>:user-invalid</pre> (newer) to avoid showing errors before the user interacts:\n[CODE]input:user-invalid {\n  border-color: red;\n}[/CODE]\nWorks with HTML5 validation attributes automatically.",
            topic: {
                topics: ["Form Styling", "Advanced Pseudo-classes"]
            }
        },
        {
            id: 19,
            question: "What does <pre>scroll-snap-type: y mandatory</pre> do?",
            options: {
                A: "Disables vertical scrolling",
                B: "Creates snap points that force content to snap to defined positions when scrolling vertically",
                C: "Makes scrolling slower",
                D: "Adds a scrollbar"
            },
            correct: "B",
            explanation: "<pre>scroll-snap-type: y mandatory</pre> enables scroll snapping on the y-axis (vertical) with mandatory snapping, meaning the scroll container must snap to a snap point when scrolling stops. This creates carousel-like or page-by-page scrolling:\n[CODE].container {\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n}\n.section {\n  scroll-snap-align: start;  /* Where to snap */\n}[/CODE]\nThe syntax is <pre>scroll-snap-type: [axis] [strictness]</pre>:\n- Axis: <pre>x</pre>, <pre>y</pre>, <pre>both</pre>, <pre>block</pre>, <pre>inline</pre>\n- Strictness: <pre>mandatory</pre> (must snap) or <pre>proximity</pre> (snaps if close)\n\nGreat for image galleries, full-page sections, and mobile interfaces.",
            topic: {
                topics: ["Overflow and Scrolling"]
            }
        },
        {
            id: 20,
            question: "What is the purpose of <pre>overscroll-behavior</pre>?",
            options: {
                A: "Controls animation speed",
                B: "Controls what happens when scrolling reaches the boundary of a scroll container",
                C: "Sets scrollbar color",
                D: "Creates parallax effects"
            },
            correct: "B",
            explanation: "<pre>overscroll-behavior</pre> controls what happens when the user scrolls beyond the boundaries of a scroll container. Values include:\n- <pre>auto</pre>: Default behavior (scroll chaining to parent)\n- <pre>contain</pre>: Prevents scroll chaining, no bounce effect\n- <pre>none</pre>: Prevents scroll chaining and bounce/overscroll effects\n\nThis is useful for preventing unwanted scroll behavior:\n[CODE].modal {\n  overscroll-behavior: contain;\n  /* Prevents body from scrolling when modal is scrolled to end */\n}[/CODE]\nOn mobile, this prevents the pull-to-refresh gesture when scrolling within elements. You can specify axis: <pre>overscroll-behavior-y: contain</pre>.",
            topic: {
                topics: ["Overflow and Scrolling"]
            }
        },
        {
            id: 21,
            question: "What does the <pre>:not()</pre> pseudo-class do?",
            options: {
                A: "Inverts colors",
                B: "Selects elements that do not match the selector inside the parentheses",
                C: "Hides elements",
                D: "Creates negative margins"
            },
            correct: "B",
            explanation: "The <pre>:not()</pre> pseudo-class selects elements that do not match the selector(s) inside its parentheses. This is called the negation pseudo-class:\n[CODE]/* All paragraphs except those with class 'special' */\np:not(.special) {\n  color: gray;\n}\n\n/* All inputs except checkboxes */\ninput:not([type=\"checkbox\"]) {\n  border: 1px solid black;\n}[/CODE]\nYou can chain multiple :not() selectors or use complex selectors inside. In modern browsers, you can pass a selector list:\n[CODE]:not(.class1, .class2, #id1) { }[/CODE]\nThis helps avoid writing overly specific selectors and keeps CSS DRY.",
            topic: {
                topics: ["Advanced Pseudo-classes"]
            }
        },
        {
            id: 22,
            question: "What does <pre>:nth-of-type()</pre> select differently than <pre>:nth-child()</pre>?",
            options: {
                A: "They select the same elements",
                B: ":nth-of-type() selects by element type only, :nth-child() considers all children",
                C: ":nth-of-type() is for classes only",
                D: ":nth-child() is deprecated"
            },
            correct: "B",
            explanation: "<pre>:nth-of-type()</pre> selects elements based on their position among siblings of the same type, while <pre>:nth-child()</pre> considers all children regardless of type:\n[CODE]<div>\n  <h2>Title</h2>      <!-- 1st child, 1st h2 -->\n  <p>First</p>       <!-- 2nd child, 1st p -->\n  <p>Second</p>      <!-- 3rd child, 2nd p -->\n</div>\n\np:nth-child(2) { }      /* Selects first p (2nd child) */\np:nth-of-type(2) { }    /* Selects second p (2nd p) */[/CODE]\nUse <pre>:nth-of-type()</pre> when you only care about elements of a specific type, regardless of other element types in between. This is more reliable in mixed-content situations.",
            topic: {
                topics: ["Advanced Pseudo-classes"]
            }
        },
        {
            id: 23,
            question: "What does <pre>clip-path: circle(50%)</pre> do?",
            options: {
                A: "Creates a 50% opacity circle",
                B: "Clips the element to a circular shape with 50% radius",
                C: "Creates a border-radius",
                D: "Scales the element to 50%"
            },
            correct: "B",
            explanation: "<pre>clip-path: circle(50%)</pre> clips the element to a circular shape with a radius of 50% (creating a circle that fits within the element's box). Any content outside this circle is hidden:\n[CODE]img {\n  clip-path: circle(50%);\n  /* Creates circular image */\n}\n\n/* Circle at specific position */\nclip-path: circle(40% at 30% 50%);\n/* 40% radius, centered at 30% from left, 50% from top */[/CODE]\nOther clip-path shapes include:\n- <pre>ellipse()</pre>: Oval shapes\n- <pre>polygon()</pre>: Custom polygons\n- <pre>inset()</pre>: Rectangle with rounded corners\n\nThis is more flexible than border-radius for creative shapes.",
            topic: {
                topics: ["CSS Shapes and Clipping"]
            }
        },
        {
            id: 24,
            question: "What does <pre>animation-play-state: paused</pre> do?",
            options: {
                A: "Stops the animation permanently",
                B: "Pauses the animation at its current position",
                C: "Slows down the animation",
                D: "Resets the animation"
            },
            correct: "B",
            explanation: "<pre>animation-play-state: paused</pre> pauses the animation at its current position. Change it back to <pre>running</pre> to resume. This is useful for creating play/pause controls:\n[CODE].element {\n  animation: slide 3s infinite;\n}\n.element.paused {\n  animation-play-state: paused;\n}\n\n/* JavaScript */\nelement.classList.toggle('paused');[/CODE]\nOr pause on hover:\n[CODE].spinner {\n  animation: rotate 2s linear infinite;\n}\n.spinner:hover {\n  animation-play-state: paused;\n}[/CODE]\nUnlike stopping an animation (removing it), paused animations retain their current state and can be resumed smoothly.",
            topic: {
                topics: ["CSS Animations"]
            }
        },
        {
            id: 25,
            question: "What does <pre>backdrop-filter</pre> do differently than <pre>filter</pre>?",
            options: {
                A: "They are identical",
                B: "backdrop-filter applies effects to the area behind an element, filter applies to the element itself",
                C: "backdrop-filter is faster",
                D: "filter is for images only"
            },
            correct: "B",
            explanation: "<pre>backdrop-filter</pre> applies filter effects (like blur, brightness, contrast) to the area behind an element, while <pre>filter</pre> applies effects to the element itself and its contents. This creates frosted glass or iOS-style blur effects:\n[CODE].glass {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  /* Blurs everything behind this element */\n}\n\n.element {\n  filter: blur(10px);\n  /* Blurs the element and its contents */\n}[/CODE]\n<pre>backdrop-filter</pre> is perfect for overlays, modals, and navigation bars with translucent backgrounds. Browser support is good but not universal, so provide fallbacks for older browsers.",
            topic: {
                topics: ["Filters and Blend Modes"]
            }
        }
    ]
};
