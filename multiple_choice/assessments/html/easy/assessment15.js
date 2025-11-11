// assessment15.js - HTML Deprecated Tags and Modern Alternatives
const metadata = {
    "title": "HTML Deprecated Tags: Why They Were Removed and Modern Alternatives",
    "description": "Test your understanding of deprecated HTML tags, why they were removed from the standard, and modern CSS and HTML alternatives.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Deprecated Elements",
        "CSS Alternatives",
        "Modern HTML",
        "Accessibility Concerns",
        "Separation of Concerns",
        "Presentation vs Structure",
        "Browser Compatibility",
        "Progressive Enhancement",
        "Semantic Markup",
        "Web Standards"
    ],
    "topicLinks": [
        {
            "topicName": "Deprecated Elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#obsolete_and_deprecated_elements"
        },
        {
            "topicName": "CSS Alternatives",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
            "topicName": "Modern HTML",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        },
        {
            "topicName": "Accessibility Concerns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
        },
        {
            "topicName": "Separation of Concerns",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments"
        },
        {
            "topicName": "Presentation vs Structure",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_categories"
        },
        {
            "topicName": "Browser Compatibility",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#browser_compatibility"
        },
        {
            "topicName": "Progressive Enhancement",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement"
        },
        {
            "topicName": "Semantic Markup",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
        },
        {
            "topicName": "Web Standards",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Standards"
        }
    ],
    "assessmentId": 15,
    "assessmentUniqueId": 1762893552411,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "Why was the <pre>font</pre> tag deprecated in HTML?",
        "options": {
            "A": "It mixed presentation with structure, violating separation of concerns",
            "B": "It was too difficult to use correctly",
            "C": "It only worked in Internet Explorer",
            "D": "It made text load too slowly"
        },
        "correct": "A",
        "explanation": "The <pre>font</pre> tag was deprecated because it mixed presentation (styling) with structure (content), violating the principle of separation of concerns. Modern web development uses CSS for all styling aspects.",
        "topic": {
            "topics": ["Deprecated Elements", "Separation of Concerns"]
        }
    },
    {
        "id": 2,
        "question": "What is the modern CSS alternative to the <pre>center</pre> tag?",
        "options": {
            "A": "<pre>text-align: center;</pre>",
            "B": "<pre>align: center;</pre>",
            "C": "<pre>position: center;</pre>",
            "D": "<pre>display: center;</pre>"
        },
        "correct": "A",
        "explanation": "The modern alternative to <pre>center</pre> is CSS <pre>text-align: center;</pre> for inline content, or <pre>margin: 0 auto;</pre> for block elements with a defined width.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 3,
        "question": "Which CSS feature should replace the <pre>marquee</pre> tag for scrolling content?",
        "options": {
            "A": "CSS animations and transitions",
            "B": "JavaScript setInterval",
            "C": "HTML5 video elements",
            "D": "CSS float property"
        },
        "correct": "A",
        "explanation": "CSS animations and transitions provide modern, accessible alternatives to the <pre>marquee</pre> tag. They offer better performance, more control, and don't cause accessibility issues like marquees did.",
        "topic": {
            "topics": ["CSS Alternatives", "Accessibility Concerns"]
        }
    },
    {
        "id": 4,
        "question": "Why was the <pre>blink</pre> tag removed from web standards?",
        "options": {
            "A": "It caused accessibility issues and was considered annoying",
            "B": "It only worked in Netscape Navigator",
            "C": "It required too much processing power",
            "D": "It conflicted with JavaScript"
        },
        "correct": "A",
        "explanation": "The <pre>blink</pre> tag was removed because it caused accessibility problems (distracting for users with cognitive disabilities) and was widely considered annoying and unprofessional.",
        "topic": {
            "topics": ["Deprecated Elements", "Accessibility Concerns"]
        }
    },
    {
        "id": 5,
        "question": "What modern element replaced <pre>frameset</pre> for embedding external content?",
        "options": {
            "A": "<pre>iframe</pre>",
            "B": "<pre>embed</pre>",
            "C": "<pre>object</pre>",
            "D": "<pre>include</pre>"
        },
        "ical": "A",
        "explanation": "The <pre>iframe</pre> element replaced <pre>frameset</pre> for embedding external content. While <pre>frameset</pre> created entire page layouts with multiple frames, <pre>iframe</pre> embeds content within a normal page flow.",
        "topic": {
            "topics": ["Modern HTML", "CSS Alternatives"]
        }
    },
    {
        "id": 6,
        "question": "What CSS property should you use instead of the <pre>font</pre> tag's size attribute?",
        "options": {
            "A": "<pre>font-size</pre>",
            "B": "<pre>text-size</pre>",
            "C": "<pre>size</pre>",
            "D": "<pre>font-scale</pre>"
        },
        "correct": "A",
        "explanation": "Use the CSS <pre>font-size</pre> property instead of the <pre>font</pre> tag's size attribute. This provides better control and follows modern web standards for styling.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 7,
        "question": "Why were frames (<pre>frame</pre>, <pre>frameset</pre>) deprecated?",
        "options": {
            "A": "They caused navigation and accessibility problems",
            "B": "They made pages load faster",
            "C": "They were too difficult to style",
            "D": "They only worked on desktop computers"
        },
        "correct": "A",
        "explanation": "Frames were deprecated because they caused numerous problems: broken back/forward navigation, bookmarking issues, poor accessibility for screen readers, and SEO difficulties.",
        "topic": {
            "topics": ["Deprecated Elements", "Accessibility Concerns"]
        }
    },
    {
        "id": 8,
        "question": "What is the modern approach to creating scrolling text effects?",
        "options": {
            "A": "CSS animations with @keyframes",
            "B": "JavaScript with requestAnimationFrame",
            "C": "HTML5 canvas element",
            "D": "SVG animations"
        },
        "correct": "A",
        "explanation": "CSS animations with @keyframes provide a modern, performant way to create scrolling text effects. They are more accessible and give developers finer control over timing and easing.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 9,
        "question": "Which deprecated tag was used for setting text color?",
        "options": {
            "A": "<pre>font</pre> with color attribute",
            "B": "<pre>color</pre>",
            "C": "<pre>text</pre> with color attribute",
            "D": "<pre>style</pre> with color attribute"
        },
        "correct": "A",
        "explanation": "The <pre>font</pre> tag with the color attribute was used to set text color. This has been replaced by the CSS <pre>color</pre> property for better separation of concerns.",
        "topic": {
            "topics": ["Deprecated Elements", "CSS Alternatives"]
        }
    },
    {
        "id": 10,
        "question": "What CSS property replaces the <pre>font</pre> tag's face attribute?",
        "options": {
            "A": "<pre>font-family</pre>",
            "B": "<pre>font-face</pre>",
            "C": "<pre>text-font</pre>",
            "D": "<pre>typeface</pre>"
        },
        "correct": "A",
        "explanation": "The CSS <pre>font-family</pre> property replaces the <pre>font</pre> tag's face attribute for specifying font families. This allows for better font stacking and web font integration.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 11,
        "question": "Why is it important to avoid deprecated tags in modern web development?",
        "options": {
            "A": "They may not be supported in current or future browsers",
            "B": "They make HTML files smaller",
            "C": "They improve page loading speed",
            "D": "They are required for mobile devices"
        },
        "correct": "A",
        "explanation": "Deprecated tags may not be supported in current or future browsers, leading to broken functionality. Using modern standards ensures compatibility and accessibility.",
        "topic": {
            "topics": ["Browser Compatibility", "Web Standards"]
        }
    },
    {
        "id": 12,
        "question": "What modern layout technique replaced frames for creating website layouts?",
        "options": {
            "A": "CSS Flexbox and Grid",
            "B": "HTML tables",
            "C": "JavaScript frameworks",
            "D": "SVG layouts"
        },
        "correct": "A",
        "explanation": "CSS Flexbox and Grid layouts have replaced frames for creating modern website layouts. They provide responsive, accessible alternatives without the drawbacks of frames.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 13,
        "question": "Which tag was used for creating scrolling text banners?",
        "options": {
            "A": "<pre>marquee</pre>",
            "B": "<pre>scroll</pre>",
            "C": "<pre>banner</pre>",
            "D": "<pre>ticker</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>marquee</pre> tag was used to create scrolling text banners. It was non-standard, caused accessibility issues, and has been replaced by CSS and JavaScript solutions.",
        "topic": {
            "topics": ["Deprecated Elements", "Accessibility Concerns"]
        }
    },
    {
        "id": 14,
        "question": "What principle of web development encourages using CSS instead of presentational HTML?",
        "options": {
            "A": "Separation of concerns",
            "B": "Progressive enhancement",
            "C": "Graceful degradation",
            "D": "Mobile first"
        },
        "correct": "A",
        "explanation": "Separation of concerns is the principle that encourages keeping structure (HTML), presentation (CSS), and behavior (JavaScript) separate. This makes code more maintainable and accessible.",
        "topic": {
            "topics": ["Separation of Concerns", "Web Standards"]
        }
    },
    {
        "id": 15,
        "question": "Which CSS feature can create blinking effects more accessibly than the <pre>blink</pre> tag?",
        "options": {
            "A": "CSS animations with opacity changes",
            "B": "JavaScript alert boxes",
            "C": "HTML5 blink element",
            "D": "CSS blink property"
        },
        "correct": "A",
        "explanation": "CSS animations with controlled opacity changes can create blinking effects while allowing for better accessibility controls, such as reduced motion preferences and clearer semantic meaning.",
        "topic": {
            "topics": ["CSS Alternatives", "Accessibility Concerns"]
        }
    },
    {
        "id": 16,
        "question": "What was the main problem with the <pre>basefont</pre> tag?",
        "options": {
            "A": "It applied global styling that was hard to override",
            "B": "It only worked with specific fonts",
            "C": "It required special server configuration",
            "D": "It made text impossible to read"
        },
        "correct": "A",
        "explanation": "The <pre>basefont</pre> tag set a default font for the entire document, making it difficult to override and violating the principle of separation between structure and presentation.",
        "topic": {
            "topics": ["Deprecated Elements", "Presentation vs Structure"]
        }
    },
    {
        "id": 17,
        "question": "Which modern CSS property provides the most control over text alignment?",
        "options": {
            "A": "<pre>text-align</pre>",
            "B": "<pre>align-content</pre>",
            "C": "<pre>justify-content</pre>",
            "D": "<pre>place-items</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>text-align</pre> CSS property provides control over text alignment, replacing the deprecated <pre>center</pre> tag and other alignment attributes.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 18,
        "question": "Why should blinking or scrolling content be used sparingly?",
        "options": {
            "A": "It can cause accessibility issues and distract users",
            "B": "It makes websites load slower",
            "C": "It only works on modern browsers",
            "D": "It requires special plugins"
        },
        "correct": "A",
        "explanation": "Blinking or scrolling content can cause accessibility issues, particularly for users with cognitive disabilities, and can be distracting for all users. It should be used sparingly and with accessibility considerations.",
        "topic": {
            "topics": ["Accessibility Concerns", "Web Standards"]
        }
    },
    {
        "id": 19,
        "question": "What replaced the <pre>applet</pre> tag for embedding interactive content?",
        "options": {
            "A": "<pre>object</pre> or <pre>embed</pre>",
            "B": "<pre>java</pre>",
            "C": "<pre>plugin</pre>",
            "D": "<pre>interactive</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>object</pre> and <pre>embed</pre> elements replaced the <pre>applet</pre> tag for embedding interactive content and plugins, providing a more standardized approach.",
        "topic": {
            "topics": ["Modern HTML", "Web Standards"]
        }
    },
    {
        "id": 20,
        "question": "Which CSS methodology helps avoid the need for presentational HTML?",
        "options": {
            "A": "All of these help separate presentation from structure",
            "B": "Using external stylesheets",
            "C": "CSS Grid and Flexbox for layout",
            "D": "CSS custom properties (variables)"
        },
        "correct": "A",
        "explanation": "All these CSS methodologies help separate presentation from structure: external stylesheets, modern layout techniques, and CSS variables all contribute to keeping styling in CSS rather than HTML.",
        "topic": {
            "topics": ["CSS Alternatives", "Separation of Concerns"]
        }
    },
    {
        "id": 21,
        "question": "What was the <pre>dir</pre> tag used for, and why was it deprecated?",
        "options": {
            "A": "Directory lists, replaced by <pre>ul</pre> for better semantics",
            "B": "Direction of text, replaced by CSS direction property",
            "C": "Direct embedding of files, replaced by <pre>iframe</pre>",
            "D": "Directory navigation, replaced by JavaScript"
        },
        "correct": "A",
        "explanation": "The <pre>dir</pre> tag was used for directory lists but was deprecated in favor of <pre>ul</pre> (unordered list) which has better semantic meaning and styling capabilities.",
        "topic": {
            "topics": ["Deprecated Elements", "Semantic Markup"]
        }
    },
    {
        "id": 22,
        "question": "How can you center a block element horizontally without using <pre>center</pre>?",
        "options": {
            "A": "<pre>margin: 0 auto;</pre>",
            "B": "<pre>align: center;</pre>",
            "C": "<pre>position: center;</pre>",
            "D": "<pre>float: center;</pre>"
        },
        "correct": "A",
        "explanation": "Use <pre>margin: 0 auto;</pre> on a block element with a defined width to center it horizontally. This is the modern CSS alternative to the deprecated <pre>center</pre> tag for block-level elements.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 23,
        "question": "Why was the <pre>isindex</pre> tag removed from HTML?",
        "options": {
            "A": "It was made obsolete by the <pre>input</pre> element",
            "B": "It caused security vulnerabilities",
            "C": "It only worked in specific browsers",
            "D": "It was too difficult to style"
        },
        "correct": "A",
        "explanation": "The <pre>isindex</pre> tag was an early way to create search inputs but was made obsolete by the more flexible and powerful <pre>input</pre> element with its various types.",
        "topic": {
            "topics": ["Deprecated Elements", "Modern HTML"]
        }
    },
    {
        "id": 24,
        "question": "What modern technique allows for responsive font sizing?",
        "options": {
            "A": "CSS viewport units and media queries",
            "B": "HTML font size attributes",
            "C": "JavaScript font scaling",
            "D": "SVG text elements"
        },
        "correct": "A",
        "explanation": "CSS viewport units (vw, vh), relative units (em, rem), and media queries allow for responsive font sizing that adapts to different screen sizes and user preferences.",
        "topic": {
            "topics": ["CSS Alternatives", "Modern HTML"]
        }
    },
    {
        "id": 25,
        "question": "Which deprecated tag was used for underlined text?",
        "options": {
            "A": "<pre>u</pre>",
            "B": "<pre>underline</pre>",
            "C": "<pre>text-decoration</pre>",
            "D": "<pre>line</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>u</pre> tag was used for underlined text but was deprecated in favor of CSS <pre>text-decoration: underline;</pre>. Note: <pre>u</pre> was later reintroduced with semantic meaning for unarticulated annotations.",
        "topic": {
            "topics": ["Deprecated Elements", "CSS Alternatives"]
        }
    },
    {
        "id": 26,
        "question": "What is the benefit of using CSS over presentational HTML attributes?",
        "options": {
            "A": "Better maintainability and consistency",
            "B": "Smaller file sizes",
            "C": "Faster rendering in all browsers",
            "D": "Easier to learn for beginners"
        },
        "correct": "A",
        "explanation": "CSS provides better maintainability and consistency because styles can be defined once and applied to multiple elements, making global changes much easier than updating individual HTML attributes.",
        "topic": {
            "topics": ["CSS Alternatives", "Separation of Concerns"]
        }
    },
    {
        "id": 27,
        "question": "Which tag was used for strikethrough text before CSS became standard?",
        "options": {
            "A": "<pre>strike</pre>",
            "B": "<pre>line-through</pre>",
            "C": "<pre>delete</pre>",
            "D": "<pre>cancel</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>strike</pre> tag was used for strikethrough text but was deprecated in favor of the more semantic <pre>del</pre> element or CSS <pre>text-decoration: line-through;</pre>.",
        "topic": {
            "topics": ["Deprecated Elements", "Semantic Markup"]
        }
    },
    {
        "id": 28,
        "question": "What modern approach ensures websites work without relying on deprecated features?",
        "options": {
            "A": "Progressive enhancement",
            "B": "Graceful degradation",
            "C": "Feature detection",
            "D": "All of these"
        },
        "correct": "A",
        "explanation": "Progressive enhancement is the modern approach that starts with basic functionality that works everywhere, then enhances with modern features for capable browsers, ensuring sites don't rely on deprecated or unsupported features.",
        "topic": {
            "topics": ["Progressive Enhancement", "Web Standards"]
        }
    },
    {
        "id": 29,
        "question": "Why should you validate your HTML code?",
        "options": {
            "A": "To ensure it follows current standards and avoids deprecated elements",
            "B": "To make it load faster",
            "C": "To improve SEO ranking automatically",
            "D": "To reduce file size significantly"
        },
        "correct": "A",
        "explanation": "Validating HTML ensures your code follows current web standards, helps avoid deprecated elements, and improves compatibility across different browsers and devices.",
        "topic": {
            "topics": ["Web Standards", "Browser Compatibility"]
        }
    },
    {
        "id": 30,
        "question": "What is the main goal of modern web standards regarding HTML and CSS?",
        "options": {
            "A": "Separation of structure and presentation",
            "B": "Making websites look the same everywhere",
            "C": "Eliminating all animation from the web",
            "D": "Requiring JavaScript for basic functionality"
        },
        "correct": "A",
        "explanation": "The main goal is separation of structure (HTML) and presentation (CSS), which leads to more maintainable, accessible, and future-proof websites that can adapt to different devices and user needs.",
        "topic": {
            "topics": ["Separation of Concerns", "Web Standards"]
        }
    }
];

module.exports = { metadata, questions };