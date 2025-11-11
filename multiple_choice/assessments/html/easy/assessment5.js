// assessment5.js - HTML Interactive Elements and More
const metadata = {
    "title": "HTML Interactive Elements and Additional Features",
    "description": "Test your understanding of HTML interactive elements, media, meta tags, and additional HTML features not covered in previous assessments.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Interactive Elements",
        "Meta Tags and SEO",
        "Media Elements",
        "HTML Entities",
        "Accessibility Features",
        "Form Enhancements",
        "Embedded Content",
        "Document Metadata",
        "Text Semantics",
        "Content Sectioning"
    ],
    "topicLinks": [
        {
            "topicName": "Interactive Elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
        },
        {
            "topicName": "Meta Tags and SEO",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
        },
        {
            "topicName": "Media Elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"
        },
        {
            "topicName": "HTML Entities",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Entity"
        },
        {
            "topicName": "Accessibility Features",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
        },
        {
            "topicName": "Form Enhancements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist"
        },
        {
            "topicName": "Embedded Content",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object"
        },
        {
            "topicName": "Document Metadata",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"
        },
        {
            "topicName": "Text Semantics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark"
        },
        {
            "topicName": "Content Sectioning",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
        }
    ],
    "assessmentId": 5,
    "assessmentUniqueId": 1762838704553,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What does the <pre><details></pre> element create?",
        "options": {
            "A": "A disclosure widget that shows/hides content",
            "B": "A detailed description list",
            "C": "A settings menu",
            "D": "A tooltip element"
        },
        "correct": "A",
        "explanation": "The <pre><details></details></pre> element creates a disclosure widget where users can show or hide additional content. It's typically used with <pre><summary></pre> to provide a visible heading. Example: [CODE]<details>\n  <summary>More Info</summary>\n  <p>This is hidden content that appears when clicked.</p>\n</details>[/CODE] This creates an interactive element without JavaScript.",
        "topic": {
            "topics": ["Interactive Elements"]
        }
    },
    {
        "id": 2,
        "question": "Which meta tag is used to set the viewport for responsive design?",
        "options": {
            "A": "<pre><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"></pre>",
            "B": "<pre><meta name=\"responsive\" content=\"mobile\"></pre>",
            "C": "<pre><meta name=\"screen\" content=\"flexible\"></pre>",
            "D": "<pre><meta name=\"layout\" content=\"adaptive\"></pre>"
        },
        "correct": "A",
        "explanation": "The viewport meta tag controls how a webpage is displayed on mobile devices. <pre>width=device-width</pre> sets the page width to match the screen width, and <pre>initial-scale=1.0</pre> sets the initial zoom level. This is essential for responsive web design and ensures content scales properly on different screen sizes.",
        "topic": {
            "topics": ["Meta Tags and SEO"]
        }
    },
    {
        "id": 3,
        "question": "What does the <pre><mark></pre> element do?",
        "options": {
            "A": "Highlights text for reference or notation purposes",
            "B": "Creates a bookmark marker",
            "C": "Marks text as important",
            "D": "Adds a checkmark symbol"
        },
        "correct": "A",
        "explanation": "The <pre><mark></pre> element represents text that is highlighted for reference or notation purposes, typically due to its relevance in another context. Browsers usually display it with a yellow background. Example: <pre>The search found <mark>HTML elements</mark> in the document.</pre> This is different from <pre><strong></pre> which indicates importance.",
        "topic": {
            "topics": ["Text Semantics"]
        }
    },
    {
        "id": 4,
        "question": "What is the purpose of the <pre><datalist></pre> element?",
        "options": {
            "A": "Provides pre-defined options for an input field",
            "B": "Creates a data table",
            "C": "Lists database records",
            "D": "Defines data types"
        },
        "correct": "A",
        "explanation": "The <pre><datalist></pre> element contains a set of <pre><option></pre> elements that represent pre-defined values for an input field. Users can either select from the list or type their own value. Example: [CODE]<label for=\"browser\">Choose browser:</label>\n<input list=\"browsers\" id=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n</datalist>[/CODE]",
        "topic": {
            "topics": ["Form Enhancements"]
        }
    },
    {
        "id": 5,
        "question": "Which HTML entity represents the copyright symbol?",
        "options": {
            "A": "<pre>&amp;copy;</pre>",
            "B": "<pre>&amp;copyright;</pre>",
            "C": "<pre>&amp;c;</pre>",
            "D": "<pre>&amp;copyr;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&amp;copy;</pre> entity represents the copyright symbol ©. HTML entities are used to display reserved characters or symbols that would otherwise be interpreted as HTML code. Other common entities include <pre>&amp;reg;</pre> for ®, <pre>&amp;trade;</pre> for ™, and <pre>&amp;nbsp;</pre> for a non-breaking space.",
        "topic": {
            "topics": ["HTML Entities"]
        }
    },
    {
        "id": 6,
        "question": "What does the <pre><progress></pre> element represent?",
        "options": {
            "A": "The completion progress of a task",
            "B": "A loading animation",
            "C": "A progress bar for file uploads only",
            "D": "A timer countdown"
        },
        "correct": "A",
        "explanation": "The <pre><progress></pre> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar. Use the <pre>value</pre> attribute for current progress and <pre>max</pre> for the total value. Example: [CODE]<progress value=\"70\" max=\"100\">70%</progress>[/CODE] This shows a progress bar at 70% completion.",
        "topic": {
            "topics": ["Interactive Elements"]
        }
    },
    {
        "id": 7,
        "question": "Which attribute makes an input field focused when the page loads?",
        "options": {
            "A": "<pre>autofocus</pre>",
            "B": "<pre>focus</pre>",
            "C": "<pre>selected</pre>",
            "D": "<pre>defaultfocus</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>autofocus</pre> boolean attribute automatically focuses the input field when the page loads. This is useful for forms where users are expected to start typing immediately. Example: <pre><input type=\"text\" autofocus></pre> Only one element should have this attribute per page to avoid confusion.",
        "topic": {
            "topics": ["Form Enhancements"]
        }
    },
    {
        "id": 8,
        "question": "What is the purpose of the <pre><base></pre> element?",
        "options": {
            "A": "Specifies the base URL for all relative URLs in the document",
            "B": "Defines the basic structure of the page",
            "C": "Sets the baseline for CSS styling",
            "D": "Creates a base template"
        },
        "correct": "A",
        "explanation": "The <pre><base></pre> element specifies the base URL to use for all relative URLs in a document. It must appear in the <pre><head></pre> section and there can be only one base element per document. Example: <pre><base href=\"https://example.com/images/\"></pre> This makes all relative image URLs resolve from this base path.",
        "topic": {
            "topics": ["Document Metadata"]
        }
    },
    {
        "id": 9,
        "question": "Which element creates a thematic break between content sections?",
        "options": {
            "A": "<pre><hr></pre>",
            "B": "<pre><break></pre>",
            "C": "<pre><section></pre>",
            "D": "<pre><divider></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><hr></pre> (horizontal rule) element represents a thematic break between paragraph-level elements, such as a change of scene in a story or a shift of topic within a section. It's typically displayed as a horizontal line. This is a semantic element that helps structure content meaningfully.",
        "topic": {
            "topics": ["Content Sectioning"]
        }
    },
    {
        "id": 10,
        "question": "What does the <pre><wbr></pre> element do?",
        "options": {
            "A": "Suggests a possible line-break opportunity",
            "B": "Creates a word break",
            "C": "Wraps text to the next line",
            "D": "Breaks words into syllables"
        },
        "correct": "A",
        "explanation": "The <pre><wbr></pre> (word break opportunity) element represents a position within text where the browser may optionally break a line if necessary. It's useful for long words or URLs that might otherwise break awkwardly. Example: <pre>https://example.com/very<wbr>long<wbr>path</pre> This suggests where the URL can break if needed.",
        "topic": {
            "topics": ["Text Semantics"]
        }
    },
    {
        "id": 11,
        "question": "Which meta tag is used for page description in search results?",
        "options": {
            "A": "<pre><meta name=\"description\" content=\"Page description\"></pre>",
            "B": "<pre><meta name=\"summary\" content=\"Page summary\"></pre>",
            "C": "<pre><meta description=\"Page description\"></pre>",
            "D": "<pre><description>Page description</description></pre>"
        },
        "correct": "A",
        "explanation": "The description meta tag provides a concise explanation of the page content. Search engines often use this description in search results. Example: <pre><meta name=\"description\" content=\"Learn HTML basics with our comprehensive guide\"></pre> This helps improve click-through rates from search results by giving users a preview of page content.",
        "topic": {
            "topics": ["Meta Tags and SEO"]
        }
    },
    {
        "id": 12,
        "question": "What is the purpose of the <pre><meter></pre> element?",
        "options": {
            "A": "Represents a scalar measurement within a known range",
            "B": "Measures page loading time",
            "C": "Creates a metric conversion tool",
            "D": "Displays temperature readings"
        },
        "correct": "A",
        "explanation": "The <pre><meter></pre> element represents a scalar measurement within a known range, or a fractional value. Examples include disk usage, vote counts, or quiz scores. Example: [CODE]<meter value=\"0.6\" min=\"0\" max=\"1\">60%</meter>[/CODE] This shows a gauge at 60% full. Different from <pre><progress></pre> which shows task completion.",
        "topic": {
            "topics": ["Interactive Elements"]
        }
    },
    {
        "id": 13,
        "question": "Which attribute adds a hint to help users fill out a field?",
        "options": {
            "A": "<pre>placeholder</pre>",
            "B": "<pre>hint</pre>",
            "C": "<pre>tip</pre>",
            "D": "<pre>help</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>placeholder</pre> attribute provides a short hint that describes the expected value of an input field. It disappears when the user starts typing. Example: <pre><input type=\"text\" placeholder=\"Enter your email\"></pre> Note: Placeholders are not a substitute for proper labels, which are essential for accessibility.",
        "topic": {
            "topics": ["Form Enhancements", "Accessibility Features"]
        }
    },
    {
        "id": 14,
        "question": "What does the <pre><object></pre> element do?",
        "options": {
            "A": "Embeds external resources like PDFs or Flash",
            "B": "Creates JavaScript objects",
            "C": "Defines HTML object types",
            "D": "Embeds 3D models only"
        },
        "correct": "A",
        "explanation": "The <pre><object></pre> element represents an external resource, which can be treated as an image, nested browsing context, or resource to be handled by a plugin. It can embed various content types like PDFs, Flash, or even other web pages. Example: [CODE]<object data=\"document.pdf\" type=\"application/pdf\" width=\"100%\" height=\"500\">\n  <p>Your browser doesn't support PDFs.</p>\n</object>[/CODE]",
        "topic": {
            "topics": ["Embedded Content"]
        }
    },
    {
        "id": 15,
        "question": "Which HTML entity represents a non-breaking space?",
        "options": {
            "A": "<pre>&amp;nbsp;</pre>",
            "B": "<pre>&amp;space;</pre>",
            "C": "<pre>&amp;nbs;</pre>",
            "D": "<pre>&amp;blank;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&amp;nbsp;</pre> entity represents a non-breaking space, which prevents browsers from breaking a line at that space. This is useful for keeping words together, like in \"Dr.&amp;nbsp;Smith\" to ensure \"Dr. Smith\" doesn't break across lines. Non-breaking spaces are also commonly used in HTML to create multiple spaces since regular consecutive spaces collapse.",
        "topic": {
            "topics": ["HTML Entities"]
        }
    },
    {
        "id": 16,
        "question": "What is the purpose of the <pre>lang</pre> attribute in the <pre><html></pre> tag?",
        "options": {
            "A": "Specifies the language of the document",
            "B": "Sets the language for styling",
            "C": "Defines programming language",
            "D": "Creates language options"
        },
        "correct": "A",
        "explanation": "The <pre>lang</pre> attribute specifies the primary language of the document's content. This is important for accessibility (screen readers), search engines, and translation tools. Example: <pre><html lang=\"en\"></pre> for English or <pre><html lang=\"es\"></pre> for Spanish. Use ISO language codes and include region if needed: <pre>lang=\"en-US\"</pre> for American English.",
        "topic": {
            "topics": ["Accessibility Features", "Document Metadata"]
        }
    },
    {
        "id": 17,
        "question": "Which element represents a side comment or small print?",
        "options": {
            "A": "<pre><small></pre>",
            "B": "<pre><aside></pre>",
            "C": "<pre><comment></pre>",
            "D": "<pre><note></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><small></pre> element represents side comments and small print, like copyright and legal text, independent of its styled presentation. Browsers typically render it one font size smaller. Example: <pre><small>Copyright 2025 Company Name. All rights reserved.</small></pre> This is semantic HTML that indicates the content is of lesser importance.",
        "topic": {
            "topics": ["Text Semantics"]
        }
    },
    {
        "id": 18,
        "question": "What does the <pre><template></pre> element do?",
        "options": {
            "A": "Holds HTML content that can be cloned and inserted later",
            "B": "Creates a template for the entire page",
            "C": "Defines CSS template styles",
            "D": "Stores JavaScript templates"
        },
        "correct": "A",
        "explanation": "The <pre><template></pre> element serves as a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript. The content is inert until activated. Example: [CODE]<template id=\"user-card\">\n  <div class=\"card\">\n    <h3></h3>\n    <p></p>\n  </div>\n</template>[/CODE]",
        "topic": {
            "topics": ["Interactive Elements"]
        }
    },
    {
        "id": 19,
        "question": "Which attribute specifies that a form should not be validated?",
        "options": {
            "A": "<pre>novalidate</pre>",
            "B": "<pre>no-validation</pre>",
            "C": "<pre>skipvalidate</pre>",
            "D": "<pre>formnovalidate</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>novalidate</pre> boolean attribute indicates that the form should not be validated when submitted. This is useful when you want to handle validation with custom JavaScript instead of the browser's built-in validation. Example: <pre><form novalidate></pre> For individual submit buttons, use <pre>formnovalidate</pre> instead.",
        "topic": {
            "topics": ["Form Enhancements"]
        }
    },
    {
        "id": 20,
        "question": "What is the purpose of the <pre><sup></pre> element?",
        "options": {
            "A": "Defines superscript text",
            "B": "Creates superior quality text",
            "C": "Makes text super important",
            "D": "Adds supplementary content"
        },
        "correct": "A",
        "explanation": "The <pre><sup></pre> element defines superscript text, which appears half a character above the normal line and is sometimes rendered in a smaller font. It's commonly used for footnotes, mathematical exponents, and ordinal indicators. Example: <pre>E = mc<sup>2</sup></pre> displays as E = mc². For subscript text, use <pre><sub></pre> instead.",
        "topic": {
            "topics": ["Text Semantics"]
        }
    },
    {
        "id": 21,
        "question": "Which meta tag prevents search engines from indexing a page?",
        "options": {
            "A": "<pre><meta name=\"robots\" content=\"noindex\"></pre>",
            "B": "<pre><meta name=\"search\" content=\"exclude\"></pre>",
            "C": "<pre><meta name=\"google\" content=\"noindex\"></pre>",
            "D": "<pre><meta index=\"false\"></pre>"
        },
        "correct": "A",
        "explanation": "The robots meta tag with <pre>noindex</pre> value tells search engines not to index the page. Other useful values include <pre>nofollow</pre> (don't follow links), <pre>noarchive</pre> (don't show cached version), and <pre>nosnippet</pre> (don't show description). Example: <pre><meta name=\"robots\" content=\"noindex, nofollow\"></pre>",
        "topic": {
            "topics": ["Meta Tags and SEO"]
        }
    },
    {
        "id": 22,
        "question": "What does the <pre><cite></pre> element represent?",
        "options": {
            "A": "The title of a creative work",
            "B": "A citation reference number",
            "C": "A city location",
            "D": "A programming citation"
        },
        "correct": "A",
        "explanation": "The <pre><cite></pre> element represents the title of a creative work (e.g., a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theater production, a play, an opera, a musical, an exhibition, etc.). Example: <pre>More information in <cite>The Great Gatsby</cite>.</pre> Browsers typically render it in italics.",
        "topic": {
            "topics": ["Text Semantics"]
        }
    },
    {
        "id": 23,
        "question": "Which attribute specifies that an input field should be automatically completed?",
        "options": {
            "A": "<pre>autocomplete</pre>",
            "B": "<pre>auto-fill</pre>",
            "C": "<pre>suggest</pre>",
            "D": "<pre>complete</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>autocomplete</pre> attribute specifies whether a field should have autocomplete enabled. It can be set to <pre>\"on\"</pre> (allow) or <pre>\"off\"</pre> (disable). You can also use specific values like <pre>\"name\"</pre>, <pre>\"email\"</pre>, or <pre>\"current-password\"</pre> to help browsers provide appropriate suggestions. Example: <pre><input type=\"email\" autocomplete=\"email\"></pre>",
        "topic": {
            "topics": ["Form Enhancements"]
        }
    },
    {
        "id": 24,
        "question": "What is the purpose of the <pre><kbd></pre> element?",
        "options": {
            "A": "Represents keyboard input",
            "B": "Creates keyboard shortcuts",
            "C": "Defines keyboard layout",
            "D": "Marks text as keyboard-related"
        },
        "correct": "A",
        "explanation": "The <pre><kbd></pre> element represents user input from a keyboard, voice input, or any other text entry device. Browsers typically display it in a monospace font. Example: <pre>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</pre> This is useful for documentation, tutorials, and technical writing to distinguish user input from regular text.",
        "topic": {
            "topics": ["Text Semantics"]
        }
    },
    {
        "id": 25,
        "question": "Which element defines a container for multiple image resources?",
        "options": {
            "A": "<pre><picture></pre>",
            "B": "<pre><images></pre>",
            "C": "<pre><gallery></pre>",
            "D": "<pre><multi-img></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><picture></pre> element contains zero or more <pre><source></pre> elements and one <pre><img></pre> element to provide versions of an image for different display/device scenarios. Example: [CODE]<picture>\n  <source media=\"(min-width: 800px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 400px)\" srcset=\"medium.jpg\">\n  <img src=\"small.jpg\" alt=\"Description\">\n</picture>[/CODE] This enables responsive images.",
        "topic": {
            "topics": ["Media Elements"]
        }
    },
    {
        "id": 26,
        "question": "What does the <pre><output></pre> element represent?",
        "options": {
            "A": "The result of a calculation or user action",
            "B": "Output from a computer program",
            "C": "Form submission results",
            "D": "Console output"
        },
        "correct": "A",
        "explanation": "The <pre><output></pre> element represents the result of a calculation or user action. It's commonly used with forms and JavaScript to display computed results. Example: [CODE]<form oninput=\"result.value = parseInt(a.value) + parseInt(b.value)\">\n  <input type=\"number\" id=\"a\" value=\"10\"> +\n  <input type=\"number\" id=\"b\" value=\"20\"> =\n  <output name=\"result\" for=\"a b\">30</output>\n</form>[/CODE]",
        "topic": {
            "topics": ["Interactive Elements"]
        }
    },
    {
        "id": 27,
        "question": "Which attribute specifies the visible width of a text area?",
        "options": {
            "A": "<pre>cols</pre>",
            "B": "<pre>width</pre>",
            "C": "<pre>size</pre>",
            "D": "<pre>visible-width</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>cols</pre> attribute specifies the visible width of a text area, measured in average character widths. Example: <pre><textarea cols=\"50\" rows=\"10\">Default text</textarea></pre> The <pre>rows</pre> attribute specifies the visible number of text lines. While CSS is preferred for styling, these attributes provide basic sizing that works even without CSS.",
        "topic": {
            "topics": ["Form Enhancements"]
        }
    },
    {
        "id": 28,
        "question": "What is the purpose of the <pre><time></pre> element?",
        "options": {
            "A": "Represents a specific period in time",
            "B": "Creates a timer countdown",
            "C": "Displays the current time",
            "D": "Formats time strings"
        },
        "correct": "A",
        "explanation": "The <pre><time></pre> element represents a specific period in time. It can include the <pre>datetime</pre> attribute to provide a machine-readable format. Example: <pre>The meeting is on <time datetime=\"2025-01-15T14:30\">January 15, 2025 at 2:30 PM</time>.</pre> This helps search engines, browsers, and other tools understand and process time information consistently.",
        "topic": {
            "topics": ["Text Semantics"]
        }
    },
    {
        "id": 29,
        "question": "Which element represents a group of rows in a table?",
        "options": {
            "A": "<pre><tbody></pre>",
            "B": "<pre><tgroup></pre>",
            "C": "<pre><rowgroup></pre>",
            "D": "<pre><grouptable></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><tbody></pre> element groups one or more <pre><tr></pre> elements as the body of a table. Tables can have multiple <pre><tbody></pre> elements to group rows semantically. Example: [CODE]<table>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>John</td><td>25</td></tr>\n    <tr><td>Jane</td><td>30</td></tr>\n  </tbody>\n</table>[/CODE]",
        "topic": {
            "topics": ["Content Sectioning"]
        }
    },
    {
        "id": 30,
        "question": "What does the <pre>spellcheck</pre> attribute do?",
        "options": {
            "A": "Controls whether spelling checking is enabled",
            "B": "Checks spelling automatically",
            "C": "Adds spell check functionality",
            "D": "Defines custom spelling rules"
        },
        "correct": "A",
        "explanation": "The <pre>spellcheck</pre> attribute specifies whether the element's content is checked for spelling errors. It can be set to <pre>true</pre> (check spelling), <pre>false</pre> (don't check), or left empty for default behavior. Example: <pre><textarea spellcheck=\"true\">This text will be spell-checked.</textarea></pre> This is particularly useful for content-editable elements and text areas.",
        "topic": {
            "topics": ["Form Enhancements", "Accessibility Features"]
        }
    }
];

module.exports = { metadata, questions };