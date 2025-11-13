module.exports = {
    "metadata": {
        "title": "CSS Flexbox, Units, and Transitions",
        "description": "Test your understanding of Flexbox layout basics, CSS units, and transition properties.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 4,
        "assessmentUniqueId": 1763042415106,
        "testType": "multiple-choice",
        "topics": [
            "Flexbox Basics",
            "Flex Container Properties",
            "Flex Item Properties",
            "CSS Units",
            "Absolute vs Relative Units",
            "Transitions",
            "Transform Basics",
            "Timing Functions"
        ],
        "topicLinks": [
            {
                "topicName": "Flexbox Basics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
            },
            {
                "topicName": "Flex Container Properties",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis"
            },
            {
                "topicName": "Flex Item Properties",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
            },
            {
                "topicName": "CSS Units",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
            },
            {
                "topicName": "Absolute vs Relative Units",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/length"
            },
            {
                "topicName": "Transitions",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions"
            },
            {
                "topicName": "Transform Basics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
            },
            {
                "topicName": "Timing Functions",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"
            }
        ],
        "keywords": [
            "flexbox",
            "flex",
            "display-flex",
            "flex-direction",
            "flex-wrap",
            "justify-content",
            "align-items",
            "align-content",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "align-self",
            "order",
            "units",
            "px",
            "em",
            "rem",
            "percentage",
            "vh",
            "vw",
            "vmin",
            "vmax",
            "transition",
            "transition-property",
            "transition-duration",
            "transition-timing-function",
            "transition-delay",
            "transform",
            "ease",
            "linear"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "How do you create a flex container?",
            "options": {
                "A": "<pre>flexbox: true;</pre>",
                "B": "<pre>flex: container;</pre>",
                "C": "<pre>layout: flex;</pre>",
                "D": "<pre>display: flex;</pre>"
            },
            "correct": "D",
            "explanation": "Setting display: flex on an element makes it a flex container, and its direct children become flex items. This enables flexbox layout for that container.",
            "difficulty": "easy",
            "topic": "Flexbox Basics"
        },
        {
            "id": 2,
            "question": "Which CSS unit is relative to the font size of the root element?",
            "options": {
                "A": "<pre>em</pre>",
                "B": "<pre>px</pre>",
                "C": "<pre>rem</pre>",
                "D": "<pre>%</pre>"
            },
            "correct": "C",
            "explanation": "The rem (root em) unit is relative to the font size of the root element (usually the <html> element). Unlike em, which is relative to the parent element's font size, rem is consistent throughout the document.",
            "difficulty": "easy",
            "topic": "Absolute vs Relative Units"
        },
        {
            "id": 3,
            "question": "What does the <pre>flex-direction</pre> property control?",
            "options": {
                "A": "The scrolling direction",
                "B": "The direction of text in flex items",
                "C": "The direction flex items are laid out in the flex container",
                "D": "The animation direction"
            },
            "correct": "C",
            "explanation": "The flex-direction property defines the main axis direction in which flex items are placed in the flex container. Values include row (default), row-reverse, column, and column-reverse.",
            "difficulty": "easy",
            "topic": "Flex Container Properties"
        },
        {
            "id": 4,
            "question": "Which property is used to create smooth changes between CSS property values?",
            "options": {
                "A": "<pre>animation</pre>",
                "B": "<pre>transform</pre>",
                "C": "<pre>change</pre>",
                "D": "<pre>transition</pre>"
            },
            "correct": "D",
            "explanation": "The transition property allows you to create smooth changes between CSS property values over a specified duration, such as changing color or size on hover.",
            "difficulty": "easy",
            "topic": "Transitions"
        },
        {
            "id": 5,
            "question": "What is the difference between <pre>em</pre> and <pre>rem</pre> units?",
            "options": {
                "A": "em is relative to the parent element's font size; rem is relative to the root element's font size",
                "B": "em is absolute; rem is relative",
                "C": "They are exactly the same",
                "D": "em is for margins; rem is for fonts"
            },
            "correct": "A",
            "explanation": "The em unit is relative to the font size of its parent element, while rem (root em) is always relative to the font size of the root element. This makes rem more predictable for consistent sizing.",
            "difficulty": "easy",
            "topic": "Absolute vs Relative Units"
        },
        {
            "id": 6,
            "question": "Which property aligns flex items along the main axis?",
            "options": {
                "A": "<pre>align-items</pre>",
                "B": "<pre>align-content</pre>",
                "C": "<pre>align-self</pre>",
                "D": "<pre>justify-content</pre>"
            },
            "correct": "D",
            "explanation": "The justify-content property aligns flex items along the main axis (horizontal if flex-direction is row). Values include flex-start, flex-end, center, space-between, and space-around.",
            "difficulty": "easy",
            "topic": "Flex Container Properties"
        },
        {
            "id": 7,
            "question": "Which unit represents 1% of the viewport's height?",
            "options": {
                "A": "<pre>vh</pre>",
                "B": "<pre>vw</pre>",
                "C": "<pre>%</pre>",
                "D": "<pre>vmin</pre>"
            },
            "correct": "A",
            "explanation": "The vh (viewport height) unit represents 1% of the viewport's height. 100vh equals the full height of the viewport.",
            "difficulty": "easy",
            "topic": "CSS Units"
        },
        {
            "id": 8,
            "question": "What does <pre>flex-wrap: wrap;</pre> do?",
            "options": {
                "A": "Wraps text inside flex items",
                "B": "Creates a wrapping animation",
                "C": "Wraps the flex container",
                "D": "Allows flex items to wrap onto multiple lines"
            },
            "correct": "D",
            "explanation": "flex-wrap: wrap allows flex items to wrap onto multiple lines if they don't fit in a single line. The default value is nowrap, which keeps all items on one line.",
            "difficulty": "easy",
            "topic": "Flex Container Properties"
        },
        {
            "id": 9,
            "question": "Which property specifies how long a transition effect takes to complete?",
            "options": {
                "A": "<pre>transition-timing-function</pre>",
                "B": "<pre>transition-delay</pre>",
                "C": "<pre>transition-duration</pre>",
                "D": "<pre>transition-time</pre>"
            },
            "correct": "C",
            "explanation": "The transition-duration property specifies how long the transition takes to complete, typically in seconds (s) or milliseconds (ms).",
            "difficulty": "easy",
            "topic": "Transitions"
        },
        {
            "id": 10,
            "question": "What is <pre>px</pre> classified as?",
            "options": {
                "A": "An absolute unit",
                "B": "A relative unit",
                "C": "A viewport unit",
                "D": "A percentage unit"
            },
            "correct": "A",
            "explanation": "Pixels (px) are absolute units - they represent a fixed size and don't scale based on other elements. However, they can appear different on different displays due to device pixel density.",
            "difficulty": "easy",
            "topic": "Absolute vs Relative Units"
        },
        {
            "id": 11,
            "question": "Which property aligns flex items along the cross axis?",
            "options": {
                "A": "<pre>justify-content</pre>",
                "B": "<pre>align-items</pre>",
                "C": "<pre>flex-align</pre>",
                "D": "<pre>cross-align</pre>"
            },
            "correct": "B",
            "explanation": "The align-items property aligns flex items along the cross axis (vertical if flex-direction is row). Values include flex-start, flex-end, center, baseline, and stretch (default).",
            "difficulty": "easy",
            "topic": "Flex Container Properties"
        },
        {
            "id": 12,
            "question": "What does the <pre>transform</pre> property do?",
            "options": {
                "A": "Changes the color of an element",
                "B": "Applies a 2D or 3D transformation to an element",
                "C": "Transitions between states",
                "D": "Transforms text to uppercase"
            },
            "correct": "B",
            "explanation": "The transform property applies 2D or 3D transformations to elements, such as translate, rotate, scale, and skew. It's often used with transitions for smooth animations.",
            "difficulty": "easy",
            "topic": "Transform Basics"
        },
        {
            "id": 13,
            "question": "Which unit represents 1% of the viewport's width?",
            "options": {
                "A": "<pre>vh</pre>",
                "B": "<pre>vmax</pre>",
                "C": "<pre>%</pre>",
                "D": "<pre>vw</pre>"
            },
            "correct": "D",
            "explanation": "The vw (viewport width) unit represents 1% of the viewport's width. 100vw equals the full width of the viewport.",
            "difficulty": "easy",
            "topic": "CSS Units"
        },
        {
            "id": 14,
            "question": "What does <pre>flex-grow</pre> control?",
            "options": {
                "A": "How much a flex item can shrink",
                "B": "The initial size of a flex item",
                "C": "How much a flex item can grow relative to other flex items",
                "D": "The font size growth"
            },
            "correct": "C",
            "explanation": "The flex-grow property defines how much a flex item can grow relative to the rest of the flex items when there's extra space. The default value is 0 (no growth).",
            "difficulty": "easy",
            "topic": "Flex Item Properties"
        },
        {
            "id": 15,
            "question": "What is the shorthand property for setting transition-property, transition-duration, transition-timing-function, and transition-delay?",
            "options": {
                "A": "<pre>animation</pre>",
                "B": "<pre>change</pre>",
                "C": "<pre>transition</pre>",
                "D": "<pre>effect</pre>"
            },
            "correct": "C",
            "explanation": "The transition shorthand property can set all transition properties in one declaration: transition: property duration timing-function delay.",
            "difficulty": "easy",
            "topic": "Transitions"
        },
        {
            "id": 16,
            "question": "What is the default value of <pre>flex-direction</pre>?",
            "options": {
                "A": "<pre>column</pre>",
                "B": "<pre>row</pre>",
                "C": "<pre>row-reverse</pre>",
                "D": "<pre>column-reverse</pre>"
            },
            "correct": "B",
            "explanation": "The default value of flex-direction is row, which means flex items are laid out horizontally from left to right in a left-to-right language.",
            "difficulty": "easy",
            "topic": "Flex Container Properties"
        },
        {
            "id": 17,
            "question": "Which timing function creates a transition that starts slow, speeds up, then slows down at the end?",
            "options": {
                "A": "<pre>linear</pre>",
                "B": "<pre>ease</pre>",
                "C": "<pre>ease-in</pre>",
                "D": "<pre>ease-out</pre>"
            },
            "correct": "B",
            "explanation": "The ease timing function (the default) creates a transition that starts slowly, accelerates in the middle, and slows down at the end, creating a natural-feeling animation.",
            "difficulty": "easy",
            "topic": "Timing Functions"
        },
        {
            "id": 18,
            "question": "What does <pre>vmin</pre> represent?",
            "options": {
                "A": "The minimum viewport size allowed",
                "B": "1% of the viewport's smaller dimension (width or height)",
                "C": "The minimum font size",
                "D": "A very small unit"
            },
            "correct": "B",
            "explanation": "The vmin unit equals 1% of the viewport's smaller dimension. If the viewport is 1000px wide and 800px tall, 1vmin = 8px (1% of 800px).",
            "difficulty": "easy",
            "topic": "CSS Units"
        },
        {
            "id": 19,
            "question": "Which property controls the initial main size of a flex item?",
            "options": {
                "A": "<pre>flex-grow</pre>",
                "B": "<pre>flex-basis</pre>",
                "C": "<pre>flex-shrink</pre>",
                "D": "<pre>flex-size</pre>"
            },
            "correct": "B",
            "explanation": "The flex-basis property sets the initial main size of a flex item before any growing or shrinking occurs. It can be a length value or 'auto' (default).",
            "difficulty": "easy",
            "topic": "Flex Item Properties"
        },
        {
            "id": 20,
            "question": "How do you delay the start of a transition?",
            "options": {
                "A": "<pre>transition-wait</pre>",
                "B": "<pre>transition-delay</pre>",
                "C": "<pre>transition-pause</pre>",
                "D": "<pre>transition-start</pre>"
            },
            "correct": "B",
            "explanation": "The transition-delay property specifies when the transition effect will start, typically in seconds (s) or milliseconds (ms). For example, transition-delay: 0.5s waits half a second before starting.",
            "difficulty": "easy",
            "topic": "Transitions"
        },
        {
            "id": 21,
            "question": "What does <pre>align-self</pre> do?",
            "options": {
                "A": "Aligns all flex items in a container",
                "B": "Centers the flex container",
                "C": "Allows a single flex item to override align-items",
                "D": "Aligns text within a flex item"
            },
            "correct": "C",
            "explanation": "The align-self property allows a single flex item to override the align-items value set on the flex container. It accepts the same values as align-items.",
            "difficulty": "easy",
            "topic": "Flex Item Properties"
        },
        {
            "id": 22,
            "question": "Which is an absolute unit in CSS?",
            "options": {
                "A": "<pre>em</pre>",
                "B": "<pre>%</pre>",
                "C": "<pre>px</pre>",
                "D": "<pre>vh</pre>"
            },
            "correct": "C",
            "explanation": "Pixels (px) are absolute units with a fixed size. Other absolute units include cm, mm, in, pt, and pc. Relative units like em, %, and vh scale based on other values.",
            "difficulty": "easy",
            "topic": "Absolute vs Relative Units"
        },
        {
            "id": 23,
            "question": "What is the default value of <pre>justify-content</pre>?",
            "options": {
                "A": "<pre>center</pre>",
                "B": "<pre>space-between</pre>",
                "C": "<pre>flex-start</pre>",
                "D": "<pre>flex-end</pre>"
            },
            "correct": "C",
            "explanation": "The default value of justify-content is flex-start, which packs flex items toward the start of the main axis (left side for row direction in LTR languages).",
            "difficulty": "easy",
            "topic": "Flex Container Properties"
        },
        {
            "id": 24,
            "question": "Which transition timing function creates a constant speed throughout the transition?",
            "options": {
                "A": "<pre>ease</pre>",
                "B": "<pre>step-start</pre>",
                "C": "<pre>ease-in-out</pre>",
                "D": "<pre>linear</pre>"
            },
            "correct": "D",
            "explanation": "The linear timing function creates a transition with constant speed from start to finish, with no acceleration or deceleration.",
            "difficulty": "easy",
            "topic": "Timing Functions"
        },
        {
            "id": 25,
            "question": "What does <pre>flex-shrink</pre> control?",
            "options": {
                "A": "How much a flex item can shrink when there's not enough space",
                "B": "How much a flex item can grow",
                "C": "The font size of flex items",
                "D": "The initial size of a flex item"
            },
            "correct": "A",
            "explanation": "The flex-shrink property defines how much a flex item can shrink relative to other flex items when there isn't enough space. The default value is 1 (can shrink).",
            "difficulty": "easy",
            "topic": "Flex Item Properties"
        },
        {
            "id": 26,
            "question": "What does <pre>%</pre> (percentage) size relative to?",
            "options": {
                "A": "The viewport size",
                "B": "The parent element",
                "C": "The root element",
                "D": "The font size"
            },
            "correct": "B",
            "explanation": "Percentage units are relative to the parent element's corresponding property. For example, width: 50% sets width to 50% of the parent's width.",
            "difficulty": "easy",
            "topic": "CSS Units"
        },
        {
            "id": 27,
            "question": "Which value of <pre>justify-content</pre> distributes items evenly with space between them but not at the edges?",
            "options": {
                "A": "<pre>space-around</pre>",
                "B": "<pre>space-between</pre>",
                "C": "<pre>space-evenly</pre>",
                "D": "<pre>center</pre>"
            },
            "correct": "B",
            "explanation": "justify-content: space-between distributes flex items evenly along the main axis with the first item at the start and the last item at the end, and equal space between items.",
            "difficulty": "easy",
            "topic": "Flex Container Properties"
        },
        {
            "id": 28,
            "question": "Can you transition between display: none and display: block?",
            "options": {
                "A": "No, display changes happen instantly and cannot be transitioned",
                "B": "Yes, transitions work on all properties",
                "C": "Yes, but only with ease timing function",
                "D": "Yes, but only with linear timing function"
            },
            "correct": "A",
            "explanation": "The display property cannot be transitioned because it has discrete values (not continuous). Display changes happen instantly. Use opacity and visibility for smooth show/hide transitions.",
            "difficulty": "easy",
            "topic": "Transitions"
        },
        {
            "id": 29,
            "question": "What is the shorthand for <pre>flex-grow</pre>, <pre>flex-shrink</pre>, and <pre>flex-basis</pre>?",
            "options": {
                "A": "<pre>flex</pre>",
                "B": "<pre>flex-item</pre>",
                "C": "<pre>flexbox</pre>",
                "D": "<pre>flexible</pre>"
            },
            "correct": "A",
            "explanation": "The flex shorthand property sets flex-grow, flex-shrink, and flex-basis in one declaration. For example: flex: 1 0 auto means grow: 1, shrink: 0, basis: auto.",
            "difficulty": "easy",
            "topic": "Flex Item Properties"
        },
        {
            "id": 30,
            "question": "What does <pre>vmax</pre> represent?",
            "options": {
                "A": "The maximum viewport size",
                "B": "The maximum font size",
                "C": "1% of the viewport's larger dimension (width or height)",
                "D": "100% of the viewport"
            },
            "correct": "C",
            "explanation": "The vmax unit equals 1% of the viewport's larger dimension. If the viewport is 1000px wide and 800px tall, 1vmax = 10px (1% of 1000px).",
            "difficulty": "easy",
            "topic": "CSS Units"
        }
    ]
};
