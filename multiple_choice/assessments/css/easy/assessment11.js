module.exports = {
    "metadata": {
        "title": "CSS Display and Visibility Properties",
        "description": "Master CSS display properties including block, inline, inline-block, and none, understand visibility differences, and learn when to use each display value for effective layout control.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 11,
        "assessmentUniqueId": 1763051500000,
        "testType": "multiple-choice",
        "topics": [
            "Display Property Values",
            "Block-level Elements",
            "Inline Elements",
            "Inline-block Elements",
            "Display None",
            "Visibility Property",
            "Hiding Elements Comparison",
            "Default Display Values",
            "Display Value Use Cases",
            "Opacity vs Visibility"
        ],
        "topicLinks": [
            {
                "topicName": "Display Property Values",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
            },
            {
                "topicName": "Block-level Elements",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements"
            },
            {
                "topicName": "Inline Elements",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements"
            },
            {
                "topicName": "Inline-block Elements",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display#inline-block"
            },
            {
                "topicName": "Display None",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display#none"
            },
            {
                "topicName": "Visibility Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"
            },
            {
                "topicName": "Hiding Elements Comparison",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility#accessibility_concerns"
            },
            {
                "topicName": "Default Display Values",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display#syntax"
            },
            {
                "topicName": "Display Value Use Cases",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_display_property"
            },
            {
                "topicName": "Opacity vs Visibility",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
            }
        ],
        "keywords": [
            "display",
            "block",
            "inline",
            "inline-block",
            "display-none",
            "visibility",
            "visibility-hidden",
            "visibility-visible",
            "opacity",
            "hide-element",
            "show-element",
            "block-element",
            "inline-element",
            "default-display",
            "div-display",
            "span-display",
            "p-display",
            "a-display",
            "width-height",
            "layout-space",
            "document-flow",
            "accessibility",
            "screen-reader",
            "vertical-align",
            "inline-block-spacing",
            "element-behavior",
            "display-change",
            "hiding-methods",
            "element-visibility"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "Which elements have <pre>display: block;</pre> by default?",
            "options": {
                "A": "<pre>&lt;span&gt;</pre>, <pre>&lt;a&gt;</pre>, <pre>&lt;em&gt;</pre>",
                "B": "<pre>&lt;div&gt;</pre>, <pre>&lt;p&gt;</pre>, <pre>&lt;h1&gt;</pre>",
                "C": "<pre>&lt;strong&gt;</pre>, <pre>&lt;code&gt;</pre>, <pre>&lt;b&gt;</pre>",
                "D": "<pre>&lt;img&gt;</pre>, <pre>&lt;input&gt;</pre>, <pre>&lt;button&gt;</pre>"
            },
            "correct": "B",
            "explanation": "Block-level elements include <div>, <p>, <h1> through <h6>, <ul>, <ol>, <section>, <article>, etc. They start on new lines and take up full width by default.",
            "difficulty": "easy",
            "topic": "Block-level Elements"
        },
        {
            "id": 2,
            "question": "What happens when you apply <pre>width: 200px;</pre> to an inline element like <pre>&lt;span&gt;</pre>?",
            "options": {
                "A": "The span becomes 200px wide",
                "B": "The width property is ignored",
                "C": "The span converts to display: block automatically",
                "D": "The page breaks"
            },
            "correct": "B",
            "explanation": "Inline elements ignore width and height properties. Their dimensions are determined solely by their content. To set width/height on an inline element, change it to display: block or display: inline-block.",
            "difficulty": "easy",
            "topic": "Inline Elements"
        },
        {
            "id": 3,
            "question": "What is the default <pre>display</pre> value of a <pre>&lt;div&gt;</pre> element?",
            "options": {
                "A": "<pre>inline</pre>",
                "B": "<pre>inline-block</pre>",
                "C": "<pre>block</pre>",
                "D": "<pre>flex</pre>"
            },
            "correct": "C",
            "explanation": "The <div> element has display: block by default, meaning it starts on a new line, takes up the full width available, and can have width/height set.",
            "difficulty": "easy",
            "topic": "Default Display Values"
        },
        {
            "id": 4,
            "question": "What is the main difference between <pre>display: none;</pre> and <pre>visibility: hidden;</pre>?",
            "options": {
                "A": "They work exactly the same way",
                "B": "display: none removes element from layout; visibility: hidden keeps its space",
                "C": "visibility: hidden removes element from layout; display: none keeps its space",
                "D": "display: none only works on block elements"
            },
            "correct": "B",
            "explanation": "display: none completely removes the element from the document flow (no space reserved). visibility: hidden makes the element invisible but it still takes up space in the layout.",
            "difficulty": "easy",
            "topic": "Hiding Elements Comparison"
        },
        {
            "id": 5,
            "question": "What is the default <pre>display</pre> value of a <pre>&lt;span&gt;</pre> element?",
            "options": {
                "A": "<pre>block</pre>",
                "B": "<pre>inline</pre>",
                "C": "<pre>inline-block</pre>",
                "D": "<pre>none</pre>"
            },
            "correct": "B",
            "explanation": "The <span> element has display: inline by default, meaning it flows with text, doesn't start on a new line, and cannot have width/height directly applied.",
            "difficulty": "easy",
            "topic": "Default Display Values"
        },
        {
            "id": 6,
            "question": "Which <pre>display</pre> value allows an element to flow inline but also accept width and height?",
            "options": {
                "A": "<pre>display: inline;</pre>",
                "B": "<pre>display: block;</pre>",
                "C": "<pre>display: inline-block;</pre>",
                "D": "<pre>display: flex;</pre>"
            },
            "correct": "C",
            "explanation": "display: inline-block combines the best of both: elements flow inline (side-by-side) like inline elements, but respect width, height, padding, and margin like block elements.",
            "difficulty": "easy",
            "topic": "Inline-block Elements"
        },
        {
            "id": 7,
            "question": "Do block-level elements start on a new line by default?",
            "options": {
                "A": "No, they flow inline with text",
                "B": "Yes, they always start on a new line",
                "C": "Only if width is set",
                "D": "Only in modern browsers"
            },
            "correct": "B",
            "explanation": "Block-level elements always start on a new line and create a line break after them. They stack vertically and take up the full width of their container by default.",
            "difficulty": "easy",
            "topic": "Block-level Elements"
        },
        {
            "id": 8,
            "question": "Which hiding method keeps an element accessible to screen readers?",
            "options": {
                "A": "<pre>display: none;</pre>",
                "B": "<pre>visibility: hidden;</pre>",
                "C": "<pre>opacity: 0;</pre>",
                "D": "All of them"
            },
            "correct": "C",
            "explanation": "opacity: 0 makes an element fully transparent but keeps it in the document flow and accessible to screen readers. Both display: none and visibility: hidden hide content from assistive technologies.",
            "difficulty": "easy",
            "topic": "Opacity vs Visibility"
        },
        {
            "id": 9,
            "question": "What is the default <pre>display</pre> value of a <pre>&lt;p&gt;</pre> element?",
            "options": {
                "A": "<pre>inline</pre>",
                "B": "<pre>block</pre>",
                "C": "<pre>inline-block</pre>",
                "D": "<pre>paragraph</pre>"
            },
            "correct": "B",
            "explanation": "The <p> (paragraph) element has display: block by default, so it starts on a new line and takes up full width with margins above and below.",
            "difficulty": "easy",
            "topic": "Default Display Values"
        },
        {
            "id": 10,
            "question": "Can you set <pre>height: 100px;</pre> on an element with <pre>display: inline;</pre>?",
            "options": {
                "A": "Yes, it works normally",
                "B": "No, inline elements ignore height",
                "C": "Only if width is also set",
                "D": "Only on images"
            },
            "correct": "B",
            "explanation": "Inline elements ignore both width and height properties. Their size is determined by their content. Use display: inline-block or display: block to apply dimensions.",
            "difficulty": "easy",
            "topic": "Inline Elements"
        },
        {
            "id": 11,
            "question": "What happens to surrounding elements when you change an element from <pre>display: block;</pre> to <pre>display: none;</pre>?",
            "options": {
                "A": "Nothing changes",
                "B": "They shift to fill the space where the hidden element was",
                "C": "They become invisible too",
                "D": "A gap remains where the element was"
            },
            "correct": "B",
            "explanation": "display: none removes the element from the document flow entirely, so surrounding elements shift and reflow to fill the space where the hidden element was located.",
            "difficulty": "easy",
            "topic": "Display None"
        },
        {
            "id": 12,
            "question": "What is the default <pre>display</pre> value of an <pre>&lt;a&gt;</pre> (link) element?",
            "options": {
                "A": "<pre>block</pre>",
                "B": "<pre>inline</pre>",
                "C": "<pre>inline-block</pre>",
                "D": "<pre>link</pre>"
            },
            "correct": "B",
            "explanation": "The <a> element has display: inline by default, so links flow with surrounding text. Developers often change this to block or inline-block for buttons and navigation menus.",
            "difficulty": "easy",
            "topic": "Default Display Values"
        },
        {
            "id": 13,
            "question": "Do inline elements respect top and bottom margins?",
            "options": {
                "A": "Yes, all margins work on inline elements",
                "B": "No, top and bottom margins are ignored",
                "C": "Only top margin works",
                "D": "Only if the element has content"
            },
            "correct": "B",
            "explanation": "Inline elements ignore top and bottom margins. Only left and right margins are applied. For full margin control, use display: inline-block or display: block.",
            "difficulty": "easy",
            "topic": "Inline Elements"
        },
        {
            "id": 14,
            "question": "When should you use <pre>visibility: hidden;</pre> instead of <pre>display: none;</pre>?",
            "options": {
                "A": "When you want to remove the element from the layout",
                "B": "When you want to hide the element but keep its space in the layout",
                "C": "They are interchangeable",
                "D": "For better performance"
            },
            "correct": "B",
            "explanation": "Use visibility: hidden when you want to hide an element but preserve its layout space, preventing other elements from shifting. Use display: none to completely remove it from the flow.",
            "difficulty": "easy",
            "topic": "Visibility Property"
        },
        {
            "id": 15,
            "question": "What's a common use case for <pre>display: inline-block;</pre>?",
            "options": {
                "A": "Creating paragraphs of text",
                "B": "Building horizontal navigation menus with controllable item sizes",
                "C": "Hiding elements",
                "D": "Making text bold"
            },
            "correct": "B",
            "explanation": "display: inline-block is commonly used for horizontal navigation menus, button groups, and grid layouts where you want elements side-by-side with specific dimensions and spacing.",
            "difficulty": "easy",
            "topic": "Display Value Use Cases"
        },
        {
            "id": 16,
            "question": "Do block elements take up the full available width by default?",
            "options": {
                "A": "No, only as wide as their content",
                "B": "Yes, they expand to 100% of their container's width",
                "C": "Only if width: 100% is explicitly set",
                "D": "Only in CSS3"
            },
            "correct": "B",
            "explanation": "Block elements automatically expand to fill 100% of their container's width by default (unless a specific width is set). This is a key characteristic that distinguishes them from inline elements.",
            "difficulty": "easy",
            "topic": "Block-level Elements"
        },
        {
            "id": 17,
            "question": "Can a child element with <pre>visibility: visible;</pre> be shown when its parent has <pre>visibility: hidden;</pre>?",
            "options": {
                "A": "No, the child is always hidden with the parent",
                "B": "Yes, the child can override and be visible",
                "C": "Only if the child is display: block",
                "D": "Only with JavaScript"
            },
            "correct": "B",
            "explanation": "Unlike display: none, visibility can be overridden by child elements. A child with visibility: visible will show even when its parent has visibility: hidden.",
            "difficulty": "easy",
            "topic": "Visibility Property"
        },
        {
            "id": 18,
            "question": "What's the difference between [CODE]opacity: 0;[/CODE] and [CODE]visibility: hidden;[/CODE]?",
            "options": {
                "A": "They are identical",
                "B": "opacity: 0 is still clickable; visibility: hidden is not",
                "C": "visibility: hidden is clickable; opacity: 0 is not",
                "D": "opacity: 0 removes the element from layout"
            },
            "correct": "B",
            "explanation": "opacity: 0 makes an element fully transparent but it remains interactive (clickable/hoverable). visibility: hidden makes it non-interactive - you cannot click through or interact with it.",
            "difficulty": "easy",
            "topic": "Opacity vs Visibility"
        },
        {
            "id": 19,
            "question": "Can you change a <pre>&lt;span&gt;</pre> to behave like a block element?",
            "options": {
                "A": "No, HTML elements cannot change display types",
                "B": "Yes, by setting display: block",
                "C": "Only with JavaScript",
                "D": "Yes, but only in HTML5"
            },
            "correct": "B",
            "explanation": "Any element's display behavior can be changed with CSS. Setting display: block on a <span> makes it behave like a block element, starting on a new line and accepting width/height.",
            "difficulty": "easy",
            "topic": "Display Property Values"
        },
        {
            "id": 20,
            "question": "What is the default <pre>display</pre> value of a <pre>&lt;ul&gt;</pre> element?",
            "options": {
                "A": "<pre>inline</pre>",
                "B": "<pre>list</pre>",
                "C": "<pre>block</pre>",
                "D": "<pre>list-item</pre>"
            },
            "correct": "C",
            "explanation": "The <ul> element has display: block by default. The <li> elements inside have display: list-item, which is a special block-like display that includes list markers (bullets).",
            "difficulty": "easy",
            "topic": "Default Display Values"
        },
        {
            "id": 21,
            "question": "Why do inline-block elements sometimes have small gaps between them?",
            "options": {
                "A": "Browser rendering bug",
                "B": "Whitespace in HTML code creates gaps",
                "C": "Automatic margin is added",
                "D": "This only happens in old browsers"
            },
            "correct": "B",
            "explanation": "inline-block elements treat whitespace in HTML (spaces, tabs, newlines) as actual space. This creates small gaps between elements. Remove by using font-size: 0 on parent or eliminating whitespace in HTML.",
            "difficulty": "easy",
            "topic": "Inline-block Elements"
        },
        {
            "id": 22,
            "question": "Which hiding method can be smoothly animated with CSS transitions?",
            "options": {
                "A": "<pre>display: none;</pre>",
                "B": "<pre>opacity</pre>",
                "C": "<pre>visibility: hidden;</pre>",
                "D": "None of them"
            },
            "correct": "B",
            "explanation": "opacity can be smoothly animated with CSS transitions for fade effects. display cannot be animated (it's on/off instantly). visibility can transition but only with discrete steps, not smoothly.",
            "difficulty": "easy",
            "topic": "Hiding Elements Comparison"
        },
        {
            "id": 23,
            "question": "Does <pre>vertical-align</pre> work on block-level elements?",
            "options": {
                "A": "Yes, it works on all elements",
                "B": "No, only on inline and inline-block elements",
                "C": "Only on block elements",
                "D": "Yes, but only for text"
            },
            "correct": "B",
            "explanation": "vertical-align only applies to inline, inline-block, and table-cell elements. It's ignored on block elements. For block alignment, use flexbox, grid, or positioning techniques.",
            "difficulty": "easy",
            "topic": "Inline-block Elements"
        },
        {
            "id": 24,
            "question": "What is the default <pre>display</pre> value of a <pre>&lt;strong&gt;</pre> element?",
            "options": {
                "A": "<pre>block</pre>",
                "B": "<pre>bold</pre>",
                "C": "<pre>inline</pre>",
                "D": "<pre>inline-block</pre>"
            },
            "correct": "C",
            "explanation": "The <strong> element has display: inline by default. It flows with text and makes content bold (font-weight: bold), but it's an inline element by default.",
            "difficulty": "easy",
            "topic": "Default Display Values"
        },
        {
            "id": 25,
            "question": "If you hide an element with <pre>display: none;</pre>, can JavaScript still access it?",
            "options": {
                "A": "No, it's removed from the DOM",
                "B": "Yes, it remains in the DOM and can be manipulated",
                "C": "Only if it has an ID",
                "D": "Only after page reload"
            },
            "correct": "B",
            "explanation": "display: none hides the element visually and removes it from layout, but it remains in the DOM. JavaScript can still access, modify, and toggle its display property.",
            "difficulty": "easy",
            "topic": "Display None"
        },
        {
            "id": 26,
            "question": "What happens when you set <pre>display: inline;</pre> on a <pre>&lt;div&gt;</pre>?",
            "options": {
                "A": "Nothing, divs must be block",
                "B": "The div flows inline with text and ignores width/height",
                "C": "The div is deleted",
                "D": "The div becomes invisible"
            },
            "correct": "B",
            "explanation": "Setting display: inline on a <div> changes its behavior to inline. It flows with surrounding content, doesn't start on a new line, and won't respect width/height properties.",
            "difficulty": "easy",
            "topic": "Display Property Values"
        },
        {
            "id": 27,
            "question": "Which of these are inline elements by default?",
            "options": {
                "A": "<pre>&lt;div&gt;</pre>, <pre>&lt;p&gt;</pre>, <pre>&lt;h1&gt;</pre>",
                "B": "<pre>&lt;span&gt;</pre>, <pre>&lt;a&gt;</pre>, <pre>&lt;strong&gt;</pre>",
                "C": "<pre>&lt;section&gt;</pre>, <pre>&lt;article&gt;</pre>, <pre>&lt;nav&gt;</pre>",
                "D": "<pre>&lt;ul&gt;</pre>, <pre>&lt;ol&gt;</pre>, <pre>&lt;li&gt;</pre>"
            },
            "correct": "B",
            "explanation": "Common inline elements include <span>, <a>, <strong>, <em>, <code>, <img>, etc. They flow with text and don't start on new lines by default.",
            "difficulty": "easy",
            "topic": "Inline Elements"
        },
        {
            "id": 28,
            "question": "Can an element with <pre>opacity: 0;</pre> still receive click events?",
            "options": {
                "A": "No, it's completely non-interactive",
                "B": "Yes, it's still fully interactive and clickable",
                "C": "Only if it has a background",
                "D": "Only on hover"
            },
            "correct": "B",
            "explanation": "opacity: 0 only affects visual transparency, not interactivity. The element remains fully clickable and can receive all events. Use pointer-events: none to prevent clicks.",
            "difficulty": "easy",
            "topic": "Opacity vs Visibility"
        },
        {
            "id": 29,
            "question": "Why would you set <pre>display: block;</pre> on a link (<pre>&lt;a&gt;</pre>)?",
            "options": {
                "A": "To make it invisible",
                "B": "To create a full-width clickable area and control dimensions",
                "C": "To remove the underline",
                "D": "To change the link color"
            },
            "correct": "B",
            "explanation": "Setting display: block on links is common for navigation menus and buttons. It makes the entire box clickable (not just text), allows width/height control, and makes links stack vertically.",
            "difficulty": "easy",
            "topic": "Display Value Use Cases"
        },
        {
            "id": 30,
            "question": "Which display value is best for creating side-by-side boxes with specific widths that wrap to new lines?",
            "options": {
                "A": "<pre>display: inline;</pre>",
                "B": "<pre>display: block;</pre>",
                "C": "<pre>display: inline-block;</pre>",
                "D": "<pre>display: none;</pre>"
            },
            "correct": "C",
            "explanation": "display: inline-block is ideal for creating side-by-side layouts. Elements sit horizontally, respect width/height/margins, and automatically wrap to new lines when container width is exceeded.",
            "difficulty": "easy",
            "topic": "Inline-block Elements"
        }
    ]
};
