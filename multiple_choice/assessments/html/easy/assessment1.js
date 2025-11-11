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
            "A": "<pre><html></pre>",
            "B": "<pre><head></pre>",
            "C": "<pre><body></pre>",
            "D": "<pre><DOCTYPE></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><html></pre> element is the root element of an HTML document. It contains all other elements on the page. The <pre><!DOCTYPE html></pre> declaration comes before it but is not an element. The <pre><head></pre> and <pre><body></pre> elements are children of <pre><html></pre>.",
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
            "A": "<pre><a></pre>",
            "B": "<pre><link></pre>",
            "C": "<pre><href></pre>",
            "D": "<pre><url></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><a></pre> (anchor) element creates hyperlinks using the <pre>href</pre> attribute. The <pre><link></pre> element is used in the <pre><head></pre> to link external resources like stylesheets.",
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
        "explanation": "The <pre><ul></pre> (unordered list) element creates a bulleted list. Each <pre><li></pre> (list item) represents one bullet point. For numbered lists, use <pre><ol></pre> (ordered list) instead.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 5,
        "question": "Which HTML5 element is used to define a header section of a page or section?",
        "options": {
            "A": "<pre><header></pre>",
            "B": "<pre><head></pre>",
            "C": "<pre><top></pre>",
            "D": "<pre><section></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><header></pre> element represents introductory content, typically containing headings, logos, or navigation. Don't confuse it with <pre><head></pre>, which contains metadata and is not visible on the page.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 6,
        "question": "What is the correct way to make text bold in HTML?",
        "options": {
            "A": "<pre><strong></pre> or <pre><b></pre>",
            "B": "<pre><bold></pre>",
            "C": "<pre><em></pre>",
            "D": "<pre><i></pre>"
        },
        "correct": "A",
        "explanation": "Both <pre><strong></pre> and <pre><b></pre> make text bold. <pre><strong></pre> indicates strong importance (semantic), while <pre><b></pre> is purely stylistic. <pre><em></pre> and <pre><i></pre> create italic text instead.",
        "topic": {
            "topics": ["Text formatting"]
        }
    },
    {
        "id": 7,
        "question": "Where should the <pre><title></pre> element be placed in an HTML document?",
        "options": {
            "A": "Inside the <pre><head></pre> section",
            "B": "Inside the <pre><body></pre> section",
            "C": "Before the <pre><html></pre> tag",
            "D": "Anywhere in the document"
        },
        "correct": "A",
        "explanation": "The <pre><title></pre> element must be placed inside the <pre><head></pre> section. It defines the document title shown in the browser tab and is required for valid HTML. It's not displayed in the page body.",
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
            "A": "<pre><h1></pre>",
            "B": "<pre><h6></pre>",
            "C": "<pre><heading></pre>",
            "D": "<pre><header></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><h1></pre> element defines the most important heading. Headings range from <pre><h1></pre> (most important) to <pre><h6></pre> (least important). Use only one <pre><h1></pre> per page for best SEO and accessibility.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 10,
        "question": "What is the purpose of the <pre><br></pre> tag?",
        "options": {
            "A": "Inserts a single line break",
            "B": "Makes text bold",
            "C": "Creates a paragraph",
            "D": "Adds a border"
        },
        "correct": "A",
        "explanation": "The <pre><br></pre> tag inserts a single line break. It's an empty (self-closing) tag. For paragraphs, use <pre><p></pre> instead. Avoid using multiple <pre><br></pre> tags for spacing; use CSS instead.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 11,
        "question": "Which HTML element defines a paragraph?",
        "options": {
            "A": "<pre><p></pre>",
            "B": "<pre><para></pre>",
            "C": "<pre><paragraph></pre>",
            "D": "<pre><text></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><p></pre> element defines a paragraph of text. Browsers automatically add spacing before and after paragraphs. It's a block-level element.",
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
        "explanation": "The <pre><ol></pre> (ordered list) element creates a numbered list. By default, items are numbered 1, 2, 3, etc. You can change the numbering style with the <pre>type</pre> attribute.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 13,
        "question": "Which attribute is required for the <pre><img></pre> tag to be valid?",
        "options": {
            "A": "<pre>src</pre>",
            "B": "<pre>alt</pre>",
            "C": "<pre>width</pre>",
            "D": "<pre>height</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>src</pre> (source) attribute is required for the <pre><img></pre> tag, as it specifies the image file path. While <pre>alt</pre> is highly recommended for accessibility, only <pre>src</pre> is technically required for the tag to function.",
        "topic": {
            "topics": ["Attributes and their usage"]
        }
    },
    {
        "id": 14,
        "question": "What is the semantic purpose of the <pre><nav></pre> element?",
        "options": {
            "A": "Defines a section of navigation links",
            "B": "Creates a navigation button",
            "C": "Styles the page header",
            "D": "Adds a menu bar"
        },
        "correct": "A",
        "explanation": "The <pre><nav></pre> element is a semantic HTML5 element that defines a section containing navigation links. It helps screen readers and search engines identify the main navigation areas of a page.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 15,
        "question": "Which element is used to emphasize text with italic style?",
        "options": {
            "A": "<pre><em></pre> or <pre><i></pre>",
            "B": "<pre><italic></pre>",
            "C": "<pre><strong></pre>",
            "D": "<pre><b></pre>"
        },
        "correct": "A",
        "explanation": "Both <pre><em></pre> (emphasis) and <pre><i></pre> (italic) create italic text. <pre><em></pre> indicates semantic emphasis, while <pre><i></pre> is stylistic. <pre><strong></pre> and <pre><b></pre> create bold text.",
        "topic": {
            "topics": ["Text formatting"]
        }
    },
    {
        "id": 16,
        "question": "What is the purpose of the <pre><footer></pre> element?",
        "options": {
            "A": "Defines footer content for a page or section",
            "B": "Adds footnotes to text",
            "C": "Creates the bottom margin",
            "D": "Displays copyright text only"
        },
        "correct": "A",
        "explanation": "The <pre><footer></pre> element represents footer content, typically containing copyright, contact info, or related links. It can be used for the page footer or section footers. It's a semantic HTML5 element.",
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
            "A": "<pre><tr></pre>",
            "B": "<pre><td></pre>",
            "C": "<pre><th></pre>",
            "D": "<pre><table></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><tr></pre> (table row) element creates a row in a table. Inside <pre><tr></pre>, use <pre><td></pre> for data cells or <pre><th></pre> for header cells.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 19,
        "question": "What is the correct HTML for creating a horizontal line?",
        "options": {
            "A": "<pre><hr></pre>",
            "B": "<pre><line></pre>",
            "C": "<pre><horizontal></pre>",
            "D": "<pre><br></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><hr></pre> (horizontal rule) element creates a thematic break, typically displayed as a horizontal line. It's an empty element. Use it to separate content sections.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 20,
        "question": "Which HTML element is used to define the main content of a document?",
        "options": {
            "A": "<pre><main></pre>",
            "B": "<pre><content></pre>",
            "C": "<pre><body></pre>",
            "D": "<pre><article></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><main></pre> element represents the main content of the <pre><body></pre>. There should be only one <pre><main></pre> per page, and it should not be inside <pre><header></pre>, <pre><footer></pre>, <pre><nav></pre>, or <pre><aside></pre>.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 21,
        "question": "What does the <pre><span></pre> element do?",
        "options": {
            "A": "Defines an inline container for styling text",
            "B": "Creates a paragraph",
            "C": "Adds spacing between elements",
            "D": "Makes text span multiple lines"
        },
        "correct": "A",
        "explanation": "The <pre><span></pre> element is an inline container used to group text for styling with CSS or manipulation with JavaScript. It has no semantic meaning and doesn't change layout by default.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    },
    {
        "id": 22,
        "question": "Which element represents a self-contained piece of content like a blog post?",
        "options": {
            "A": "<pre><article></pre>",
            "B": "<pre><section></pre>",
            "C": "<pre><div></pre>",
            "D": "<pre><content></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><article></pre> element represents self-contained, independently distributable content like blog posts, news articles, or forum posts. It should make sense on its own when syndicated.",
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
            "A": "<pre><th></pre>",
            "B": "<pre><td></pre>",
            "C": "<pre><tr></pre>",
            "D": "<pre><thead></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><th></pre> (table header) element defines a header cell in a table. It's typically bold and centered by default. <pre><td></pre> is for regular data cells, and <pre><thead></pre> groups header rows.",
        "topic": {
            "topics": ["Lists and tables"]
        }
    },
    {
        "id": 26,
        "question": "What does the <pre><div></pre> element represent?",
        "options": {
            "A": "A generic block-level container",
            "B": "A division sign",
            "C": "A divider line",
            "D": "A diverse element"
        },
        "correct": "A",
        "explanation": "The <pre><div></pre> element is a generic block-level container with no semantic meaning. It's used to group elements for styling or layout purposes. Prefer semantic elements like <pre><section></pre> or <pre><article></pre> when appropriate.",
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
        "question": "What is the semantic meaning of <pre><aside></pre>?",
        "options": {
            "A": "Content indirectly related to main content, like sidebars",
            "B": "Content on the side of the page",
            "C": "Hidden content",
            "D": "Additional paragraphs"
        },
        "correct": "A",
        "explanation": "The <pre><aside></pre> element represents content tangentially related to the main content, such as sidebars, pull quotes, or related links. It's separate from but related to the main content.",
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
            "A": "<pre><button></pre>",
            "B": "<pre><click></pre>",
            "C": "<pre><input></pre>",
            "D": "<pre><submit></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><button></pre> element creates a clickable button. It's more flexible than <pre><input type=\"button\"></pre> because it can contain HTML content like images or formatted text. Use <pre>type=\"button\"</pre>, <pre>\"submit\"</pre>, or <pre>\"reset\"</pre> to specify button behavior.",
        "topic": {
            "topics": ["Common HTML elements"]
        }
    }
];

module.exports = { metadata, questions };
