// assessment12.js - HTML Accessibility (ARIA Basics)
const metadata = {
    "title": "HTML Accessibility: ARIA Basics and Screen Reader Support",
    "description": "Test your understanding of basic ARIA attributes, semantic HTML for accessibility, and screen reader considerations.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "ARIA Roles",
        "Accessible Labels",
        "Semantic HTML",
        "Screen Readers",
        "Keyboard Navigation",
        "ARIA Attributes",
        "Element Descriptions",
        "Decorative Content",
        "Accessibility Basics",
        "User Experience"
    ],
    "topicLinks": [
        {
            "topicName": "ARIA Roles",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"
        },
        {
            "topicName": "Accessible Labels",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"
        },
        {
            "topicName": "Semantic HTML",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
        },
        {
            "topicName": "Screen Readers",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide"
        },
        {
            "topicName": "Keyboard Navigation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets"
        },
        {
            "topicName": "ARIA Attributes",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes"
        },
        {
            "topicName": "Element Descriptions",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby"
        },
        {
            "topicName": "Decorative Content",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden"
        },
        {
            "topicName": "Accessibility Basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
        },
        {
            "topicName": "User Experience",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG"
        }
    ],
    "assessmentId": 12,
    "assessmentUniqueId": 1762891316461,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the purpose of the <pre>role</pre> attribute in ARIA?",
        "options": {
            "A": "Defines what type of element something is for assistive technology",
            "B": "Sets the element's visual appearance",
            "C": "Defines the element's behavior in JavaScript",
            "D": "Specifies the element's CSS styling"
        },
        "correct": "A",
        "explanation": "The <pre>role</pre> attribute defines the type of user interface element for assistive technologies like screen readers. For example, <pre>role=\"button\"</pre> tells screen readers that a <pre>div</pre> functions as a button, even though it's not a native <pre>button</pre> element.",
        "topic": {
            "topics": ["ARIA Roles", "Accessibility Basics"]
        }
    },
    {
        "id": 2,
        "question": "What does <pre>aria-label</pre> provide for an element?",
        "options": {
            "A": "An accessible name for screen reader users",
            "B": "A visual label for sighted users",
            "C": "A CSS class for styling",
            "D": "A JavaScript identifier"
        },
        "correct": "A",
        "explanation": "The <pre>aria-label</pre> attribute provides an accessible name for screen reader users when the element doesn't have visible text. Example: <pre><button aria-label=\"Close menu\">X</button></pre> helps screen reader users understand the button's purpose.",
        "topic": {
            "topics": ["Accessible Labels", "Screen Readers"]
        }
    },
    {
        "id": 3,
        "question": "When should you use semantic HTML elements instead of ARIA roles?",
        "options": {
            "A": "Always, when native HTML elements are available",
            "B": "Only for complex widgets",
            "C": "When you need custom styling",
            "D": "For all interactive elements"
        },
        "correct": "A",
        "explanation": "You should always prefer semantic HTML elements (like <pre>button</pre>, <pre>nav</pre>, <pre>main</pre>) over using ARIA roles when possible. Semantic HTML provides built-in accessibility features, while ARIA should only supplement when native HTML isn't sufficient.",
        "topic": {
            "topics": ["Semantic HTML", "Accessibility Basics"]
        }
    },
    {
        "id": 4,
        "question": "What does <pre>aria-describedby</pre> do?",
        "options": {
            "A": "Links an element to additional descriptive content",
            "B": "Hides descriptive content from screen readers",
            "C": "Creates a description for visual users",
            "D": "Sets the element's tooltip text"
        },
        "correct": "A",
        "explanation": "The <pre>aria-describedby</pre> attribute links an element to additional descriptive content elsewhere on the page. Screen readers will read this description after the element's label. Example: <pre><input aria-describedby=\"password-help\"></pre> connected to <pre><div id=\"password-help\">Must be 8 characters long</div></pre>",
        "topic": {
            "topics": ["Element Descriptions", "Screen Readers"]
        }
    },
    {
        "id": 5,
        "question": "When should you use <pre>aria-hidden=\"true\"</pre>?",
        "options": {
            "A": "For decorative elements that don't need screen reader attention",
            "B": "For important content that should be hidden",
            "C": "For all images on the page",
            "D": "For text that is temporarily invisible"
        },
        "correct": "A",
        "explanation": "Use <pre>aria-hidden=\"true\"</pre> for purely decorative elements that don't convey meaningful information, such as decorative icons, visual flourishes, or repeated content that would be confusing to screen reader users.",
        "topic": {
            "topics": ["Decorative Content", "Screen Readers"]
        }
    },
    {
        "id": 6,
        "question": "Why is proper heading structure important for screen reader users?",
        "options": {
            "A": "It provides page structure and navigation landmarks",
            "B": "It makes text larger and easier to read",
            "C": "It improves page loading speed",
            "D": "It enhances visual design"
        },
        "correct": "A",
        "explanation": "Proper heading structure (<pre>h1</pre> through <pre>h6</pre>) provides screen reader users with a clear document outline and navigation landmarks. Users can jump between headings to quickly understand page structure and find content.",
        "topic": {
            "topics": ["Semantic HTML", "Screen Readers"]
        }
    },
    {
        "id": 7,
        "question": "What is the purpose of the <pre>tabindex</pre> attribute?",
        "options": {
            "A": "Controls keyboard navigation order and focus",
            "B": "Creates tabbed content interfaces",
            "C": "Sets the element's z-index value",
            "D": "Defines table indexing"
        },
        "correct": "A",
        "explanation": "The <pre>tabindex</pre> attribute controls keyboard navigation order and whether an element can receive focus. <pre>tabindex=\"0\"</pre> makes an element focusable in natural order, while <pre>tabindex=\"-1\"</pre> allows programmatic focus but removes from tab order.",
        "topic": {
            "topics": ["Keyboard Navigation", "User Experience"]
        }
    },
    {
        "id": 8,
        "question": "Which ARIA role would you use for a navigation menu?",
        "options": {
            "A": "<pre>role=\"navigation\"</pre>",
            "B": "<pre>role=\"menu\"</pre>",
            "C": "<pre>role=\"list\"</pre>",
            "D": "<pre>role=\"links\"</pre>"
        },
        "correct": "A",
        "explanation": "Use <pre>role=\"navigation\"</pre> for main navigation menus. However, it's better to use the semantic <pre>nav</pre> element instead. ARIA roles should only be used when you can't use the appropriate semantic HTML element.",
        "topic": {
            "topics": ["ARIA Roles", "Semantic HTML"]
        }
    },
    {
        "id": 9,
        "question": "What does <pre>alt</pre> text provide for images?",
        "options": {
            "A": "Text description for screen readers and when images fail to load",
            "B": "Image file source information",
            "C": "CSS styling for images",
            "D": "JavaScript image manipulation"
        },
        "correct": "A",
        "explanation": "The <pre>alt</pre> attribute provides alternative text that describes the image's content or function. Screen readers read this text aloud, and it displays when images can't load. Always provide meaningful <pre>alt</pre> text for informative images.",
        "topic": {
            "topics": ["Accessible Labels", "Screen Readers"]
        }
    },
    {
        "id": 10,
        "question": "Why should interactive elements be keyboard accessible?",
        "options": {
            "A": "Many users navigate using keyboard only",
            "B": "Keyboard navigation is faster than mouse",
            "C": "It's required for mobile devices",
            "D": "It improves SEO ranking"
        },
        "correct": "A",
        "explanation": "Interactive elements should be keyboard accessible because many users rely on keyboard navigation exclusively, including people with motor disabilities, visual impairments, or those who prefer keyboard shortcuts for efficiency.",
        "topic": {
            "topics": ["Keyboard Navigation", "User Experience"]
        }
    },
    {
        "id": 11,
        "question": "What is the first rule of ARIA?",
        "options": {
            "A": "Don't use ARIA if you can use native HTML",
            "B": "Always use ARIA for better accessibility",
            "C": "Use ARIA only for complex widgets",
            "D": "ARIA should replace semantic HTML"
        },
        "correct": "A",
        "explanation": "The first rule of ARIA is: don't use ARIA if you can use native HTML elements instead. Semantic HTML elements provide built-in accessibility features, while ARIA should only supplement when native HTML isn't sufficient or available.",
        "topic": {
            "topics": ["ARIA Attributes", "Semantic HTML"]
        }
    },
    {
        "id": 12,
        "question": "How does <pre>aria-label</pre> differ from visible text content?",
        "options": {
            "A": "<pre>aria-label</pre> overrides visible text for screen readers",
            "B": "<pre>aria-label</pre> adds to visible text",
            "C": "<pre>aria-label</pre> is only for visual users",
            "D": "<pre>aria-label</pre> creates tooltips"
        },
        "correct": "A",
        "explanation": "When both <pre>aria-label</pre> and visible text content are present, <pre>aria-label</pre> overrides the visible text for screen reader users. Use this carefully to provide clearer context without changing the visual presentation.",
        "topic": {
            "topics": ["Accessible Labels", "Screen Readers"]
        }
    },
    {
        "id": 13,
        "question": "What is the purpose of the <pre>main</pre> landmark role?",
        "options": {
            "A": "Identifies the primary content of the page",
            "B": "Marks the most important heading",
            "C": "Defines the main navigation area",
            "D": "Indicates the page's header content"
        },
        "correct": "A",
        "explanation": "The <pre>main</pre> landmark role (or the <pre>main</pre> element) identifies the primary content of the page. Screen reader users can jump directly to this area to skip repetitive navigation and access the main content.",
        "topic": {
            "topics": ["ARIA Roles", "Semantic HTML"]
        }
    },
    {
        "id": 14,
        "question": "When should you use <pre>aria-describedby</pre> instead of <pre>aria-label</pre>?",
        "options": {
            "A": "When you have longer, more detailed descriptions",
            "B": "When you want to hide the description",
            "C": "When the description is very short",
            "D": "When you need visual styling"
        },
        "correct": "A",
        "explanation": "Use <pre>aria-describedby</pre> for longer, more detailed descriptions that would be too verbose for <pre>aria-label</pre>. <pre>aria-label</pre> is best for concise labels, while <pre>aria-describedby</pre> can reference paragraphs of helpful text.",
        "topic": {
            "topics": ["Element Descriptions", "Accessible Labels"]
        }
    },
    {
        "id": 15,
        "question": "Why is color contrast important for accessibility?",
        "options": {
            "A": "It ensures text is readable for users with low vision",
            "B": "It makes websites load faster",
            "C": "It improves mobile responsiveness",
            "D": "It enhances visual design aesthetics"
        },
        "correct": "A",
        "explanation": "Color contrast ensures text is readable for users with low vision, color blindness, or those viewing screens in bright light. WCAG guidelines specify minimum contrast ratios between text and background colors for different text sizes.",
        "topic": {
            "topics": ["User Experience", "Accessibility Basics"]
        }
    },
    {
        "id": 16,
        "question": "What does <pre>role=\"button\"</pre> do for a <pre>div</pre> element?",
        "options": {
            "A": "Tells screen readers it functions as a button",
            "B": "Makes it look like a button visually",
            "C": "Adds click event handling automatically",
            "D": "Changes its CSS display property"
        },
        "correct": "A",
        "explanation": "<pre>role=\"button\"</pre> tells screen readers that a <pre>div</pre> functions as a button, but it doesn't provide button behavior. You must still add keyboard event handling (<pre>onkeydown</pre> for Enter/Space) and focus management to make it fully accessible.",
        "topic": {
            "topics": ["ARIA Roles", "Keyboard Navigation"]
        }
    },
    {
        "id": 17,
        "question": "How can users typically navigate through form fields using keyboard?",
        "options": {
            "A": "Using Tab and Shift+Tab keys",
            "B": "Using Arrow keys only",
            "C": "Using Enter key repeatedly",
            "D": "Using Space bar exclusively"
        },
        "correct": "A",
        "explanation": "Keyboard users typically navigate through form fields using the Tab key to move forward and Shift+Tab to move backward. Ensure all form fields are in a logical tab order and visibly show focus indicators.",
        "topic": {
            "topics": ["Keyboard Navigation", "User Experience"]
        }
    },
    {
        "id": 18,
        "question": "What is the purpose of the <pre>lang</pre> attribute on the <pre>html</pre> element?",
        "options": {
            "A": "Specifies the page's primary language for screen readers",
            "B": "Sets the language for CSS styling",
            "C": "Defines the programming language",
            "D": "Specifies the server language"
        },
        "correct": "A",
        "explanation": "The <pre>lang</pre> attribute specifies the page's primary language, which helps screen readers pronounce content correctly and allows translation tools to work properly. Example: <pre>html lang=\"en\"</pre> for English content.",
        "topic": {
            "topics": ["Semantic HTML", "Screen Readers"]
        }
    },
    {
        "id": 19,
        "question": "When is it appropriate to use <pre>aria-hidden=\"true\"</pre> on an interactive element?",
        "options": {
            "A": "Never, it would make the element inaccessible",
            "B": "When the element is temporarily disabled",
            "C": "When the element has a visual label",
            "D": "When the element is off-screen"
        },
        "correct": "A",
        "explanation": "Never use <pre>aria-hidden=\"true\"</pre> on interactive elements that should be accessible. This would hide them from screen readers entirely, making them unusable for assistive technology users.",
        "topic": {
            "topics": ["Decorative Content", "Screen Readers"]
        }
    },
    {
        "id": 20,
        "question": "What does a screen reader typically announce for a properly labeled button?",
        "options": {
            "A": "The button's accessible name and role",
            "B": "Only the visible text content",
            "C": "The button's CSS classes",
            "D": "The page title and button text"
        },
        "correct": "A",
        "explanation": "Screen readers typically announce the button's accessible name (from <pre>aria-label</pre>, text content, or <pre>alt</pre> text) followed by its role. For example: \"Submit button\" or \"Close menu button\".",
        "topic": {
            "topics": ["Screen Readers", "Accessible Labels"]
        }
    },
    {
        "id": 21,
        "question": "Why should you avoid using <pre>div</pre> for buttons when <pre>button</pre> exists?",
        "options": {
            "A": "<pre>button</pre> has built-in accessibility and behavior",
            "B": "<pre>div</pre> buttons load faster",
            "C": "<pre>button</pre> elements are harder to style",
            "D": "<pre>div</pre> is more semantic"
        },
        "correct": "A",
        "explanation": "The <pre>button</pre> element has built-in accessibility features: it's focusable, clickable with keyboard, announces as a button to screen readers, and has proper semantic meaning. Using <pre>div</pre> requires adding all these features manually.",
        "topic": {
            "topics": ["Semantic HTML", "Keyboard Navigation"]
        }
    },
    {
        "id": 22,
        "question": "What is the purpose of focus indicators on interactive elements?",
        "options": {
            "A": "Show which element currently has keyboard focus",
            "B": "Make elements more visually appealing",
            "C": "Indicate element hover states",
            "D": "Show which elements are clickable"
        },
        "correct": "A",
        "explanation": "Focus indicators show which element currently has keyboard focus, helping keyboard users understand where they are on the page. Never remove focus indicators with CSS, as this makes navigation impossible for keyboard users.",
        "topic": {
            "topics": ["Keyboard Navigation", "User Experience"]
        }
    },
    {
        "id": 23,
        "question": "How does <pre>aria-describedby</pre> help with form validation?",
        "options": {
            "A": "It can connect error messages to form fields",
            "B": "It hides error messages from users",
            "C": "It prevents form submission",
            "D": "It styles error messages differently"
        },
        "correct": "A",
        "explanation": "<pre>aria-describedby</pre> can connect error messages to form fields, ensuring screen reader users hear the error when they focus on the invalid field. Example: <pre><input aria-describedby=\"email-error\"></pre> connected to an error message element.",
        "topic": {
            "topics": ["Element Descriptions", "Screen Readers"]
        }
    },
    {
        "id": 24,
        "question": "What should you consider when using icons without text labels?",
        "options": {
            "A": "Add <pre>aria-label</pre> to provide context",
            "B": "Make the icons larger for visibility",
            "C": "Use colorful icons only",
            "D": "Place icons at the top of the page"
        },
        "correct": "A",
        "explanation": "When using icons without visible text labels, always add <pre>aria-label</pre> to provide context for screen reader users. Example: <pre><button aria-label=\"Search\"><svg>...</svg></button></pre> ensures the button's purpose is clear.",
        "topic": {
            "topics": ["Accessible Labels", "Screen Readers"]
        }
    },
    {
        "id": 25,
        "question": "Why is it important to test websites with screen readers?",
        "options": {
            "A": "To understand the experience of blind and low-vision users",
            "B": "To make websites load faster",
            "C": "To improve visual design",
            "D": "To test mobile responsiveness"
        },
        "correct": "A",
        "explanation": "Testing with screen readers helps you understand how blind and low-vision users experience your website. It reveals issues with navigation, content structure, and element labeling that might not be apparent visually.",
        "topic": {
            "topics": ["Screen Readers", "User Experience"]
        }
    },
    {
        "id": 26,
        "question": "What does the <pre>article</pre> element provide for accessibility?",
        "options": {
            "A": "A self-contained content landmark",
            "B": "Automatic reading assistance",
            "C": "Built-in styling for articles",
            "D": "Automatic translation features"
        },
        "correct": "A",
        "explanation": "The <pre>article</pre> element creates a self-contained content landmark that screen readers can identify and navigate to. It should represent content that could stand alone, like blog posts, news articles, or forum posts.",
        "topic": {
            "topics": ["Semantic HTML", "Screen Readers"]
        }
    },
    {
        "id": 27,
        "question": "How can you make a custom dropdown menu keyboard accessible?",
        "options": {
            "A": "Use Arrow keys for navigation and Enter/Space for selection",
            "B": "Require mouse interaction only",
            "C": "Use Tab key to move through all options",
            "D": "Use number keys for quick selection"
        },
        "correct": "A",
        "explanation": "For custom dropdown menus, use Arrow keys for navigating options and Enter or Space bar for selection. Also ensure the menu can be opened with Enter/Space and closed with Escape key, following standard keyboard interaction patterns.",
        "topic": {
            "topics": ["Keyboard Navigation", "User Experience"]
        }
    },
    {
        "id": 28,
        "question": "What is the purpose of the <pre>label</pre> element in forms?",
        "options": {
            "A": "Associates text with form controls for accessibility",
            "B": "Styles form field titles",
            "C": "Groups related form fields",
            "D": "Validates form input"
        },
        "correct": "A",
        "explanation": "The <pre>label</pre> element associates text with form controls, making them accessible to screen readers and providing a larger click target. Use <pre>for</pre> attribute or wrap the input element with the label.",
        "topic": {
            "topics": ["Semantic HTML", "Screen Readers"]
        }
    },
    {
        "id": 29,
        "question": "Why should you avoid auto-playing videos with sound?",
        "options": {
            "A": "It can be disruptive for screen reader users",
            "B": "It improves page performance",
            "C": "It makes videos load slower",
            "D": "It's required for mobile devices"
        },
        "correct": "A",
        "explanation": "Auto-playing videos with sound can be disruptive for screen reader users, who rely on audio output. It can also cause accessibility issues for people with cognitive disabilities. Always provide controls to pause, stop, or mute auto-playing media.",
        "topic": {
            "topics": ["User Experience", "Accessibility Basics"]
        }
    },
    {
        "id": 30,
        "question": "What is the most important principle of web accessibility?",
        "options": {
            "A": "Ensure content is perceivable, operable, and understandable",
            "B": "Make websites visually appealing",
            "C": "Use the latest JavaScript frameworks",
            "D": "Optimize for search engines"
        },
        "correct": "A",
        "explanation": "The most important principle is ensuring content is perceivable (available to senses), operable (usable with various input methods), and understandable (clear and predictable). This forms the foundation of WCAG (Web Content Accessibility Guidelines) and inclusive design.",
        "topic": {
            "topics": ["Accessibility Basics", "User Experience"]
        }
    }
];

module.exports = { metadata, questions };