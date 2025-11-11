// assessment1.js - HTML Fundamentals
const metadata = {
    "title": "HTML Basics: Elements, Attributes & Structure",
    "description": "Test your understanding of basic HTML elements, attributes, document structure, and semantic markup.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "HTML document structure",
        "Common HTML elements",
        "Attributes and their usage",
        "Semantic HTML",
        "Links and navigation",
        "Lists and tables",
        "Text formatting"
    ],
    "topicLinks": [
        {
            "topicName": "HTML document structure",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
        },
        {
            "topicName": "Common HTML elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        },
        {
            "topicName": "Attributes and their usage",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
        },
        {
            "topicName": "Semantic HTML",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html"
        },
        {
            "topicName": "Links and navigation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
        },
        {
            "topicName": "Lists and tables",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
        },
        {
            "topicName": "Text formatting",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics"
        }
    ],
    "assessmentId": 1,
    "assessmentUniqueId": 1762828704553,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "Which HTML element defines the root of an HTML document?",
        "options": {
            "A": "<pre>&lt;html&gt;</pre>",
            "B": "<pre>&lt;head&gt;</pre>",
            "C": "<pre>&lt;body&gt;</pre>",
            "D": "<pre>&lt;DOCTYPE&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;html&gt;</pre> element is the root element of an HTML document. It contains all other elements on the page. The <pre>&lt;!DOCTYPE html&gt;</pre> declaration comes before it but is not an element. The <pre>&lt;head&gt;</pre> and <pre>&lt;body&gt;</pre> elements are children of <pre>&lt;html&gt;</pre>.",
        "topic": {
            "topics": ["HTML document structure"]
        }
    },
    {
        "id": 2,
        "question": "What is the purpose of the <pre>alt</pre> attribute in an image tag?",
        "options": {
            "A": "Provides alternative text when the image cannot be displayed",
            "B": "Sets the image alignment",
            "C": "Specifies the image width",
            "D": "Defines the image format"
        },
        "correct": "A",
        "explanation": "The <pre>alt</pre> attribute provides alternative text for an image if it cannot be displayed. This text is important for accessibility (screen readers) and appears when images fail to load. It should describe the image content meaningfully.",
        "topic": {
            "topics": ["Attributes and their usage"]
        }
    },
    {
        "id": 3,
        "question": "Which element is used to create a hyperlink?",
        "options": {
            "A": "<pre>&lt;a&gt;</pre>",
            "B": "<pre>&lt;link&gt;</pre>",
            "C": "<pre>&lt;href&gt;</pre>",
            "D": "<pre>&lt;url&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;a&gt;</pre> (anchor) element creates hyperlinks using the <pre>href</pre> attribute. The <pre>&lt;link&gt;</pre> element is used in the <pre>&lt;head&gt;</pre> to link external resources like stylesheets.",
        "topic": {
            "topics": ["Links and navigation"]
        }
    },
    {
        "id": 4,
        "question": "What does this HTML create? [CODE]<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk</li>\n</ul>[/CODE]",
        "options": {
            "A": "An unordered (bulleted) list",
            "B": "An ordered (numbered) list",
            "C": "A dropdown menu",
            "D": "A table"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;ul&gt;</pre> (unordered list) element creates a bulleted list. Each <pre>&lt;li&gt;</pre> (list item) represents one bullet point. For numbered lists, use <pre>&lt;ol&gt;</pre> (ordered list) instead.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 5,
        "question": "Which HTML5 element is used to define a header section of a page or section?",
        "options": {
            "A": "<pre>&lt;header&gt;</pre>",
            "B": "<pre>&lt;head&gt;</pre>",
            "C": "<pre>&lt;top&gt;</pre>",
            "D": "<pre>&lt;section&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;header&gt;</pre> element represents introductory content, typically containing headings, logos, or navigation. Don't confuse it with <pre>&lt;head&gt;</pre>, which contains metadata and is not visible on the page.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 6,
        "question": "What is the correct way to make text bold in HTML?",
        "options": {
            "A": "<pre>&lt;strong&gt;</pre> or <pre>&lt;b&gt;</pre>",
            "B": "<pre>&lt;bold&gt;</pre>",
            "C": "<pre>&lt;em&gt;</pre>",
            "D": "<pre>&lt;i&gt;</pre>"
        },
        "correct": "A",
        "explanation": "Both <pre>&lt;strong&gt;</pre> and <pre>&lt;b&gt;</pre> make text bold. <pre>&lt;strong&gt;</pre> indicates strong importance (semantic), while <pre>&lt;b&gt;</pre> is purely stylistic. <pre>&lt;em&gt;</pre> and <pre>&lt;i&gt;</pre> create italic text instead.",
        "topic": {
            "topics": ["Text formatting"]
        }
    },
    {
        "id": 7,
        "question": "Where should the <pre>&lt;title&gt;</pre> element be placed in an HTML document?",
        "options": {
            "A": "Inside the <pre>&lt;head&gt;</pre> section",
            "B": "Inside the <pre>&lt;body&gt;</pre> section",
            "C": "Before the <pre>&lt;html&gt;</pre> tag",
            "D": "Anywhere in the document"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;title&gt;</pre> element must be placed inside the <pre>&lt;head&gt;</pre> section. It defines the document title shown in the browser tab and is required for valid HTML. It's not displayed in the page body.",
        "topic": {
            "topics": ["HTML document structure"]
        }
    },
    {
        "id": 8,
        "question": "What does the <pre>href</pre> attribute specify in [CODE]<a href=\"https://example.com\">Link</a>[/CODE]?",
        "options": {
            "A": "The URL the link points to",
            "B": "The link text",
            "C": "The link color",
            "D": "The link target window"
        },
        "correct": "A",
        "explanation": "The <pre>href</pre> (hypertext reference) attribute specifies the URL or destination the link points to. When clicked, the browser navigates to this URL.",
        "topic": {
            "topics": ["Links and navigation"]
        }
    },
    {
        "id": 9,
        "question": "Which element is used to define the most important heading?",
        "options": {
            "A": "<pre>&lt;h1&gt;</pre>",
            "B": "<pre>&lt;h6&gt;</pre>",
            "C": "<pre>&lt;heading&gt;</pre>",
            "D": "<pre>&lt;header&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;h1&gt;</pre> element defines the most important heading. Headings range from <pre>&lt;h1&gt;</pre> (most important) to <pre>&lt;h6&gt;</pre> (least important). Use only one <pre>&lt;h1&gt;</pre> per page for best SEO and accessibility.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 10,
        "question": "What is the purpose of the <pre>&lt;br&gt;</pre> tag?",
        "options": {
            "A": "Inserts a single line break",
            "B": "Makes text bold",
            "C": "Creates a paragraph",
            "D": "Adds a border"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;br&gt;</pre> tag inserts a single line break. It's an empty (self-closing) tag. For paragraphs, use <pre>&lt;p&gt;</pre> instead. Avoid using multiple <pre>&lt;br&gt;</pre> tags for spacing; use CSS instead.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 11,
        "question": "Which HTML element defines a paragraph?",
        "options": {
            "A": "<pre>&lt;p&gt;</pre>",
            "B": "<pre>&lt;para&gt;</pre>",
            "C": "<pre>&lt;paragraph&gt;</pre>",
            "D": "<pre>&lt;text&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;p&gt;</pre> element defines a paragraph of text. Browsers automatically add spacing before and after paragraphs. It's a block-level element.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 12,
        "question": "What does this HTML create? [CODE]<ol>\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>[/CODE]",
        "options": {
            "A": "A numbered (ordered) list",
            "B": "A bulleted (unordered) list",
            "C": "A table with three rows",
            "D": "Three paragraphs"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;ol&gt;</pre> (ordered list) element creates a numbered list. By default, items are numbered 1, 2, 3, etc. You can change the numbering style with the <pre>type</pre> attribute.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 13,
        "question": "Which attribute is required for the <pre>&lt;img&gt;</pre> tag to be valid?",
        "options": {
            "A": "<pre>src</pre>",
            "B": "<pre>alt</pre>",
            "C": "<pre>width</pre>",
            "D": "<pre>height</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>src</pre> (source) attribute is required for the <pre>&lt;img&gt;</pre> tag, as it specifies the image file path. While <pre>alt</pre> is highly recommended for accessibility, only <pre>src</pre> is technically required for the tag to function.",
        "topic": {
            "topics": ["Attributes and their usage"]
        }
    },
    {
        "id": 14,
        "question": "What is the semantic purpose of the <pre>&lt;nav&gt;</pre> element?",
        "options": {
            "A": "Defines a section of navigation links",
            "B": "Creates a navigation button",
            "C": "Styles the page header",
            "D": "Adds a menu bar"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;nav&gt;</pre> element is a semantic HTML5 element that defines a section containing navigation links. It helps screen readers and search engines identify the main navigation areas of a page.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 15,
        "question": "Which element is used to emphasize text with italic style?",
        "options": {
            "A": "<pre>&lt;em&gt;</pre> or <pre>&lt;i&gt;</pre>",
            "B": "<pre>&lt;italic&gt;</pre>",
            "C": "<pre>&lt;strong&gt;</pre>",
            "D": "<pre>&lt;b&gt;</pre>"
        },
        "correct": "A",
        "explanation": "Both <pre>&lt;em&gt;</pre> (emphasis) and <pre>&lt;i&gt;</pre> (italic) create italic text. <pre>&lt;em&gt;</pre> indicates semantic emphasis, while <pre>&lt;i&gt;</pre> is stylistic. <pre>&lt;strong&gt;</pre> and <pre>&lt;b&gt;</pre> create bold text.",
        "topic": {
            "topics": ["Text formatting"]
        }
    },
    {
        "id": 16,
        "question": "What is the purpose of the <pre>&lt;footer&gt;</pre> element?",
        "options": {
            "A": "Defines footer content for a page or section",
            "B": "Adds footnotes to text",
            "C": "Creates the bottom margin",
            "D": "Displays copyright text only"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;footer&gt;</pre> element represents footer content, typically containing copyright, contact info, or related links. It can be used for the page footer or section footers. It's a semantic HTML5 element.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 17,
        "question": "What does the <pre>target=\"_blank\"</pre> attribute do in [CODE]<a href=\"url\" target=\"_blank\">Link</a>[/CODE]?",
        "options": {
            "A": "Opens the link in a new tab or window",
            "B": "Makes the link blank",
            "C": "Disables the link",
            "D": "Sets a blank target URL"
        },
        "correct": "A",
        "explanation": "The <pre>target=\"_blank\"</pre> attribute makes the link open in a new browser tab or window. For security, it's recommended to also add <pre>rel=\"noopener noreferrer\"</pre> when using <pre>target=\"_blank\"</pre>.",
        "topic": {
            "topics": ["Links and navigation"]
        }
    },
    {
        "id": 18,
        "question": "Which element creates a table row?",
        "options": {
            "A": "<pre>&lt;tr&gt;</pre>",
            "B": "<pre>&lt;td&gt;</pre>",
            "C": "<pre>&lt;th&gt;</pre>",
            "D": "<pre>&lt;table&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;tr&gt;</pre> (table row) element creates a row in a table. Inside <pre>&lt;tr&gt;</pre>, use <pre>&lt;td&gt;</pre> for data cells or <pre>&lt;th&gt;</pre> for header cells.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 19,
        "question": "What is the correct HTML for creating a horizontal line?",
        "options": {
            "A": "<pre>&lt;hr&gt;</pre>",
            "B": "<pre>&lt;line&gt;</pre>",
            "C": "<pre>&lt;horizontal&gt;</pre>",
            "D": "<pre>&lt;br&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;hr&gt;</pre> (horizontal rule) element creates a thematic break, typically displayed as a horizontal line. It's an empty element. Use it to separate content sections.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 20,
        "question": "Which HTML element is used to define the main content of a document?",
        "options": {
            "A": "<pre>&lt;main&gt;</pre>",
            "B": "<pre>&lt;content&gt;</pre>",
            "C": "<pre>&lt;body&gt;</pre>",
            "D": "<pre>&lt;article&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;main&gt;</pre> element represents the main content of the <pre>&lt;body&gt;</pre>. There should be only one <pre>&lt;main&gt;</pre> per page, and it should not be inside <pre>&lt;header&gt;</pre>, <pre>&lt;footer&gt;</pre>, <pre>&lt;nav&gt;</pre>, or <pre>&lt;aside&gt;</pre>.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 21,
        "question": "What does the <pre>&lt;span&gt;</pre> element do?",
        "options": {
            "A": "Defines an inline container for styling text",
            "B": "Creates a paragraph",
            "C": "Adds spacing between elements",
            "D": "Makes text span multiple lines"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;span&gt;</pre> element is an inline container used to group text for styling with CSS or manipulation with JavaScript. It has no semantic meaning and doesn't change layout by default.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 22,
        "question": "Which element represents a self-contained piece of content like a blog post?",
        "options": {
            "A": "<pre>&lt;article&gt;</pre>",
            "B": "<pre>&lt;section&gt;</pre>",
            "C": "<pre>&lt;div&gt;</pre>",
            "D": "<pre>&lt;content&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;article&gt;</pre> element represents self-contained, independently distributable content like blog posts, news articles, or forum posts. It should make sense on its own when syndicated.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 23,
        "question": "What is the purpose of the <pre>id</pre> attribute in HTML?",
        "options": {
            "A": "Provides a unique identifier for an element",
            "B": "Defines the element type",
            "C": "Sets the element's class",
            "D": "Specifies the element's content"
        },
        "correct": "A",
        "explanation": "The <pre>id</pre> attribute assigns a unique identifier to an element. Each <pre>id</pre> must be unique within a page. It's used for CSS styling, JavaScript targeting, and anchor links.",
        "topic": {
            "topics": ["Attributes and their usage"]
        }
    },
    {
        "id": 24,
        "question": "What does [CODE]<a href=\"#section1\">Jump</a>[/CODE] do?",
        "options": {
            "A": "Links to an element with id=\"section1\" on the same page",
            "B": "Creates a social media link",
            "C": "Opens a new section",
            "D": "Adds a hashtag to the URL"
        },
        "correct": "A",
        "explanation": "The <pre>#</pre> symbol creates an anchor link to an element with the matching <pre>id</pre> attribute on the same page. Clicking scrolls to that element. This is useful for table of contents or skip navigation links.",
        "topic": {
            "topics": ["Links and navigation"]
        }
    },
    {
        "id": 25,
        "question": "Which element defines a table header cell?",
        "options": {
            "A": "<pre>&lt;th&gt;</pre>",
            "B": "<pre>&lt;td&gt;</pre>",
            "C": "<pre>&lt;tr&gt;</pre>",
            "D": "<pre>&lt;thead&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;th&gt;</pre> (table header) element defines a header cell in a table. It's typically bold and centered by default. <pre>&lt;td&gt;</pre> is for regular data cells, and <pre>&lt;thead&gt;</pre> groups header rows.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 26,
        "question": "What does the <pre>&lt;div&gt;</pre> element represent?",
        "options": {
            "A": "A generic block-level container",
            "B": "A division sign",
            "C": "A divider line",
            "D": "A diverse element"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;div&gt;</pre> element is a generic block-level container with no semantic meaning. It's used to group elements for styling or layout purposes. Prefer semantic elements like <pre>&lt;section&gt;</pre> or <pre>&lt;article&gt;</pre> when appropriate.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 27,
        "question": "Which attribute specifies an element's CSS class?",
        "options": {
            "A": "<pre>class</pre>",
            "B": "<pre>id</pre>",
            "C": "<pre>style</pre>",
            "D": "<pre>name</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>class</pre> attribute assigns one or more CSS classes to an element. Multiple classes are separated by spaces. Unlike <pre>id</pre>, the same class can be used on multiple elements.",
        "topic": {
            "topics": ["Attributes and their usage"]
        }
    },
    {
        "id": 28,
        "question": "What is the semantic meaning of <pre>&lt;aside&gt;</pre>?",
        "options": {
            "A": "Content indirectly related to main content, like sidebars",
            "B": "Content on the side of the page",
            "C": "Hidden content",
            "D": "Additional paragraphs"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;aside&gt;</pre> element represents content tangentially related to the main content, such as sidebars, pull quotes, or related links. It's separate from but related to the main content.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 29,
        "question": "What does [CODE]<img src=\"logo.png\" width=\"100\" height=\"50\">[/CODE] do?",
        "options": {
            "A": "Displays logo.png with 100px width and 50px height",
            "B": "Creates a 100x50 placeholder image",
            "C": "Resizes the original image file",
            "D": "Validates the image dimensions"
        },
        "correct": "A",
        "explanation": "The <pre>width</pre> and <pre>height</pre> attributes set the display dimensions of the image in pixels. This doesn't change the actual file; it only affects how the browser displays it. Setting dimensions helps prevent layout shift during page load.",
        "topic": {
            "topics": ["Attributes and their usage"]
        }
    },
    {
        "id": 30,
        "question": "Which element creates a clickable button?",
        "options": {
            "A": "<pre>&lt;button&gt;</pre>",
            "B": "<pre>&lt;click&gt;</pre>",
            "C": "<pre>&lt;input&gt;</pre>",
            "D": "<pre>&lt;submit&gt;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&lt;button&gt;</pre> element creates a clickable button. It's more flexible than <pre>&lt;input type=\"button\"&gt;</pre> because it can contain HTML content like images or formatted text. Use <pre>type=\"button\"</pre>, <pre>\"submit\"</pre>, or <pre>\"reset\"</pre> to specify button behavior.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    }
];

module.exports = { metadata, questions };
