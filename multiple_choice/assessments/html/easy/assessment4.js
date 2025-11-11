// assessment1.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "HTML Fundamentals and Basic Elements",
    "description": "Basic HTML document structure, common elements, attributes, and fundamental web page concepts.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "HTML Document Structure",
        "Basic HTML Elements",
        "HTML Attributes",
        "Text Formatting",
        "Links and Anchors",
        "Lists and Tables",
        "Forms and Input Elements",
        "Semantic HTML",
        "HTML Comments",
        "Accessibility Basics"
    ],
    "topicLinks": [
        {
            "topicName": "HTML Document Structure",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
        },
        {
            "topicName": "Basic HTML Elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        },
        {
            "topicName": "HTML Attributes",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
        },
        {
            "topicName": "Text Formatting",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
        },
        {
            "topicName": "Links and Anchors",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
        },
        {
            "topicName": "Lists and Tables",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables"
        },
        {
            "topicName": "Forms and Input Elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
        },
        {
            "topicName": "Semantic HTML",
            "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
        },
        {
            "topicName": "HTML Comments",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments"
        },
        {
            "topicName": "Accessibility Basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
        }
    ],
    "assessmentId": 1,
    "assessmentUniqueId": 1762835796212,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the correct HTML5 document type declaration?",
        "options": {
            "A": "<pre><!DOCTYPE html></pre>",
            "B": "<pre><!DOCTYPE HTML5></pre>",
            "C": "<pre><!DOCTYPE html5></pre>",
            "D": "<pre><DOCTYPE html></pre>"
        },
        "correct": "A",
        "explanation": "The correct HTML5 document type declaration is <pre><!DOCTYPE html></pre>. This declaration tells the browser which version of HTML the document is using. HTML5 simplified this to just <pre><!DOCTYPE html></pre>, making it case-insensitive and much simpler than previous HTML versions. It must be the very first thing in your HTML document, before the <pre><html></pre> tag.",
        "topic": {
            "topics": ["HTML Document Structure"]
        }
    },
    {
        "id": 2,
        "question": "Which HTML element is used to create a hyperlink?",
        "options": {
            "A": "<pre><link></pre>",
            "B": "<pre><a></pre>",
            "C": "<pre><href></pre>",
            "D": "<pre><hyper></pre>"
        },
        "correct": "B",
        "explanation": "The <pre><a></pre> element (anchor element) is used to create hyperlinks in HTML. It requires the <pre>href</pre> attribute to specify the destination URL. Example: <pre><a href=\"https://example.com\">Visit Example</a></pre>. The <pre><link></pre> element is used for linking external resources like CSS files, not for creating clickable links in the document content.",
        "topic": {
            "topics": ["Links and Anchors"]
        }
    },
    {
        "id": 3,
        "question": "What does this HTML code create? [CODE]<input type=\"text\" required>[/CODE]",
        "options": {
            "A": "A text input that must be filled out",
            "B": "A password input field",
            "C": "A read-only text field",
            "D": "A hidden input field"
        },
        "correct": "A",
        "explanation": "This creates a text input field with the <pre>required</pre> attribute, which means the field must be filled out before the form can be submitted. The <pre>required</pre> attribute is a boolean attribute - when present, it specifies that the input field must be filled out. If a user tries to submit the form without filling this field, the browser will show a validation error message.",
        "topic": {
            "topics": ["Forms and Input Elements"]
        }
    },
    {
        "id": 4,
        "question": "Which attribute is used to provide alternative text for images?",
        "options": {
            "A": "<pre>title</pre>",
            "B": "<pre>alt</pre>",
            "C": "<pre>src</pre>",
            "D": "<pre>description</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>alt</pre> attribute provides alternative text for images. This text is displayed if the image cannot be loaded, and is essential for accessibility as screen readers use it to describe images to visually impaired users. Example: <pre><img src=\"photo.jpg\" alt=\"A beautiful sunset over mountains\"></pre>. The <pre>title</pre> attribute provides additional information that appears as a tooltip, while <pre>src</pre> specifies the image source.",
        "topic": {
            "topics": ["Accessibility Basics", "HTML Attributes"]
        }
    },
    {
        "id": 5,
        "question": "What is the purpose of the <head> element in HTML?",
        "options": {
            "A": "To display the main content of the page",
            "B": "To contain metadata and links to external resources",
            "C": "To create the page header",
            "D": "To define the page footer"
        },
        "correct": "B",
        "explanation": "The <pre><head></pre> element contains metadata (data about the document) and links to external resources like CSS files, scripts, and the page title. It does not display visible content to users. Common elements inside <pre><head></pre> include <pre><title></pre>, <pre><meta></pre>, <pre><link></pre>, and <pre><style></pre>. The visible content goes in the <pre><body></pre> element.",
        "topic": {
            "topics": ["HTML Document Structure"]
        }
    },
    {
        "id": 6,
        "question": "Which HTML element is used to define the most important heading?",
        "options": {
            "A": "<pre><heading></pre>",
            "B": "<pre><h1></pre>",
            "C": "<pre><head></pre>",
            "D": "<pre><header></pre>"
        },
        "correct": "B",
        "explanation": "The <pre><h1></pre> element defines the most important heading on the page. HTML provides six levels of headings from <pre><h1></pre> (most important) to <pre><h6></pre> (least important). Headings create a document structure and are crucial for both SEO and accessibility. Each page should typically have only one <pre><h1></pre> element representing the main topic.",
        "topic": {
            "topics": ["Text Formatting", "Semantic HTML"]
        }
    },
    {
        "id": 7,
        "question": "How do you create an unordered list in HTML?",
        "options": {
            "A": "<pre><ul></pre>",
            "B": "<pre><ol></pre>",
            "C": "<pre><list></pre>",
            "D": "<pre><li></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><ul></pre> element creates an unordered list (bulleted list). Each item in the list is defined with <pre><li></pre> elements. Example: [CODE]<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk</li>\n</ul>[/CODE] For ordered lists (numbered), use <pre><ol></pre> instead.",
        "topic": {
            "topics": ["Lists and Tables"]
        }
    },
    {
        "id": 8,
        "question": "What is the correct way to comment out HTML code?",
        "options": {
            "A": "<pre><!-- This is a comment --></pre>",
            "B": "<pre>// This is a comment</pre>",
            "C": "<pre><comment>This is a comment</comment></pre>",
            "D": "<pre>/* This is a comment */</pre>"
        },
        "correct": "A",
        "explanation": "HTML comments are written using <pre><!-- comment text --></pre> syntax. Comments are not displayed in the browser and are useful for documenting code or temporarily disabling elements. Example: <pre><!-- This menu is under construction --></pre>. The other options are comment syntax from other languages: <pre>//</pre> is JavaScript, <pre>/* */</pre> is CSS.",
        "topic": {
            "topics": ["HTML Comments"]
        }
    },
    {
        "id": 9,
        "question": "Which HTML element defines a table row?",
        "options": {
            "A": "<pre><table></pre>",
            "B": "<pre><tr></pre>",
            "C": "<pre><td></pre>",
            "D": "<pre><th></pre>"
        },
        "correct": "B",
        "explanation": "The <pre><tr></pre> element defines a table row. Tables are structured with <pre><table></pre> containing <pre><tr></pre> (table rows), which contain <pre><td></pre> (table data cells) or <pre><th></pre> (table header cells). Example: [CODE]<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>[/CODE]",
        "topic": {
            "topics": ["Lists and Tables"]
        }
    },
    {
        "id": 10,
        "question": "What is the purpose of the <meta charset=\"UTF-8\"> tag?",
        "options": {
            "A": "To set the page title",
            "B": "To define the character encoding for the document",
            "C": "To link a CSS file",
            "D": "To create a metadata section"
        },
        "correct": "B",
        "explanation": "The <pre><meta charset=\"UTF-8\"></pre> tag specifies the character encoding for the HTML document. UTF-8 is the recommended encoding as it supports most characters from all human languages. This ensures that special characters, emojis, and non-Latin scripts display correctly. It should be included in the <pre><head></pre> section of every HTML document.",
        "topic": {
            "topics": ["HTML Document Structure"]
        }
    },
    {
        "id": 11,
        "question": "Which HTML element is used to create a drop-down list?",
        "options": {
            "A": "<pre><input type=\"dropdown\"></pre>",
            "B": "<pre><select></pre>",
            "C": "<pre><list></pre>",
            "D": "<pre><option></pre>"
        },
        "correct": "B",
        "explanation": "The <pre><select></pre> element creates a drop-down list. It contains <pre><option></pre> elements for each item in the list. Example: [CODE]<select name=\"cars\">\n  <option value=\"volvo\">Volvo</option>\n  <option value=\"saab\">Saab</option>\n  <option value=\"mercedes\">Mercedes</option>\n</select>[/CODE] Users can select one option from the drop-down list.",
        "topic": {
            "topics": ["Forms and Input Elements"]
        }
    },
    {
        "id": 12,
        "question": "What does the <br> element do?",
        "options": {
            "A": "Creates a bold text",
            "B": "Adds a line break",
            "C": "Creates a horizontal rule",
            "D": "Makes text bigger"
        },
        "correct": "B",
        "explanation": "The <pre><br></pre> element inserts a single line break. It's an empty element (doesn't have a closing tag) and is useful for creating line breaks in addresses, poems, or anywhere you need text to break to the next line. Example: <pre>First line<br>Second line</pre> would display as two separate lines. For thematic breaks, use <pre><hr></pre> (horizontal rule) instead.",
        "topic": {
            "topics": ["Text Formatting"]
        }
    },
    {
        "id": 13,
        "question": "Which attribute specifies where to open a linked document?",
        "options": {
            "A": "<pre>href</pre>",
            "B": "<pre>src</pre>",
            "C": "<pre>target</pre>",
            "D": "<pre>link</pre>"
        },
        "correct": "C",
        "explanation": "The <pre>target</pre> attribute specifies where to open the linked document. Common values include <pre>_blank</pre> (new window/tab), <pre>_self</pre> (same frame), <pre>_parent</pre> (parent frame), and <pre>_top</pre> (full body of window). Example: <pre><a href=\"https://example.com\" target=\"_blank\">Open in new tab</a></pre>. The <pre>href</pre> attribute specifies the link destination.",
        "topic": {
            "topics": ["Links and Anchors", "HTML Attributes"]
        }
    },
    {
        "id": 14,
        "question": "What is the semantic purpose of the <footer> element?",
        "options": {
            "A": "To create a page header",
            "B": "To define a footer for a document or section",
            "C": "To add footnotes to text",
            "D": "To create a form footer"
        },
        "correct": "B",
        "explanation": "The <pre><footer></pre> element defines a footer for its nearest sectioning content or root element. It typically contains information about the author, copyright data, related documents, or links. This is a semantic HTML5 element that helps search engines and screen readers understand the page structure better. A page can have multiple <pre><footer></pre> elements for different sections.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 15,
        "question": "Which input type creates a checkbox?",
        "options": {
            "A": "<pre><input type=\"check\"></pre>",
            "B": "<pre><input type=\"checkbox\"></pre>",
            "C": "<pre><checkbox></pre>",
            "D": "<pre><input type=\"radio\"></pre>"
        },
        "correct": "B",
        "explanation": "The <pre><input type=\"checkbox\"></pre> creates a checkbox that users can select or deselect. Checkboxes allow multiple selections in a group. Example: <pre><input type=\"checkbox\" id=\"vehicle1\" name=\"vehicle1\" value=\"Bike\"></pre>. For single selection from a group, use <pre>type=\"radio\"</pre> instead. Checkboxes are commonly used in forms for multiple-choice questions or feature selections.",
        "topic": {
            "topics": ["Forms and Input Elements"]
        }
    },
    {
        "id": 16,
        "question": "What is the correct way to make text bold in HTML?",
        "options": {
            "A": "<pre><bold>text</bold></pre>",
            "B": "<pre><strong>text</strong></pre>",
            "C": "<pre><b>text</b></pre>",
            "D": "Both B and C"
        },
        "correct": "D",
        "explanation": "Both <pre><strong></pre> and <pre><b></pre> can make text bold, but they have different semantic meanings. <pre><strong></pre> indicates that the text has strong importance, while <pre><b></pre> is used to draw attention without implying importance. Visually, both typically render as bold text, but screen readers may emphasize <pre><strong></pre> content more strongly. <pre><bold></pre> is not a valid HTML element.",
        "topic": {
            "topics": ["Text Formatting", "Semantic HTML"]
        }
    },
    {
        "id": 17,
        "question": "Which HTML element is used to define a paragraph?",
        "options": {
            "A": "<pre><para></pre>",
            "B": "<pre><p></pre>",
            "C": "<pre><paragraph></pre>",
            "D": "<pre><text></pre>"
        },
        "correct": "B",
        "explanation": "The <pre><p></pre> element defines a paragraph in HTML. Browsers automatically add some margin before and after each paragraph. Example: <pre><p>This is a paragraph of text.</p></pre>. Using proper paragraph elements helps create a semantic document structure and improves accessibility for screen reader users.",
        "topic": {
            "topics": ["Text Formatting"]
        }
    },
    {
        "id": 18,
        "question": "What does the <label> element do in a form?",
        "options": {
            "A": "Creates a title for the form",
            "B": "Defines a caption for an input element",
            "C": "Adds a border around form elements",
            "D": "Validates form input"
        },
        "correct": "B",
        "explanation": "The <pre><label></pre> element defines a label for form elements. It improves accessibility and usability by providing a clickable label for the associated input. Labels can be associated with inputs using the <pre>for</pre> attribute matching the input's <pre>id</pre>, or by nesting the input inside the label. Example: <pre><label for=\"username\">Username:</label><input id=\"username\" type=\"text\"></pre>",
        "topic": {
            "topics": ["Forms and Input Elements", "Accessibility Basics"]
        }
    },
    {
        "id": 19,
        "question": "Which character entity is used for the less-than symbol (<)?",
        "options": {
            "A": "<pre>&amp;lt;</pre>",
            "B": "<pre>&amp;gt;</pre>",
            "C": "<pre>&amp;less;</pre>",
            "D": "<pre>&amp;lsymbol;</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>&amp;lt;</pre> character entity represents the less-than symbol (<). HTML uses character entities to display reserved characters that would otherwise be interpreted as HTML code. Similarly, <pre>&amp;gt;</pre> represents the greater-than symbol (>), and <pre>&amp;amp;</pre> represents the ampersand (&). These are essential when you need to display HTML code as text on a webpage.",
        "topic": {
            "topics": ["HTML Attributes", "Text Formatting"]
        }
    },
    {
        "id": 20,
        "question": "What is the purpose of the <nav> element?",
        "options": {
            "A": "To create a navigation menu",
            "B": "To define a naval chart",
            "C": "To navigate between pages automatically",
            "D": "To create a navigation bar at the bottom"
        },
        "correct": "A",
        "explanation": "The <pre><nav></pre> element defines a section of navigation links. It's a semantic HTML5 element that should contain major navigation blocks, such as the main menu, table of contents, or pagination controls. Using <pre><nav></pre> helps search engines and screen readers identify the primary navigation areas of your website. Not all groups of links need to be in a <pre><nav></pre> element - only major navigation sections.",
        "topic": {
            "topics": ["Semantic HTML"]
        }
    },
    {
        "id": 21,
        "question": "Which input type should be used for email addresses?",
        "options": {
            "A": "<pre><input type=\"text\"></pre>",
            "B": "<pre><input type=\"email\"></pre>",
            "C": "<pre><input type=\"mail\"></pre>",
            "D": "<pre><email></pre>"
        },
        "correct": "B",
        "explanation": "The <pre><input type=\"email\"></pre> is specifically designed for email addresses. It provides built-in validation in modern browsers to ensure the input looks like a valid email address. On mobile devices, it often triggers a specialized keyboard with the @ symbol readily available. While <pre>type=\"text\"</pre> would work, using <pre>type=\"email\"</pre> provides better user experience and validation.",
        "topic": {
            "topics": ["Forms and Input Elements"]
        }
    },
    {
        "id": 22,
        "question": "What does the <div> element represent?",
        "options": {
            "A": "A division or section in a document",
            "B": "A dynamic content area",
            "C": "A divider line between sections",
            "D": "A document version"
        },
        "correct": "A",
        "explanation": "The <pre><div></pre> element defines a division or section in an HTML document. It's a generic container with no semantic meaning, used to group elements for styling purposes or because they share attribute values. While <pre><div></pre> is very useful for layout and styling with CSS, modern HTML5 encourages using semantic elements like <pre><header></pre>, <pre><nav></pre>, <pre><section></pre>, etc., when they better describe the content.",
        "topic": {
            "topics": ["Basic HTML Elements"]
        }
    },
    {
        "id": 23,
        "question": "Which attribute is used to make an input field read-only?",
        "options": {
            "A": "<pre>disabled</pre>",
            "B": "<pre>readonly</pre>",
            "C": "<pre>static</pre>",
            "D": "<pre>fixed</pre>"
        },
        "correct": "B",
        "explanation": "The <pre>readonly</pre> attribute makes an input field read-only, meaning users can see the value but cannot modify it. The field is still included in form submissions. Example: <pre><input type=\"text\" value=\"Cannot change this\" readonly></pre>. This differs from <pre>disabled</pre>, which also prevents modification but excludes the field from form submission and typically grays out the input.",
        "topic": {
            "topics": ["Forms and Input Elements", "HTML Attributes"]
        }
    },
    {
        "id": 24,
        "question": "What is the purpose of the <title> element?",
        "options": {
            "A": "To create a heading on the page",
            "B": "To define the browser tab title",
            "C": "To add a title attribute to elements",
            "D": "To style text as a title"
        },
        "correct": "B",
        "explanation": "The <pre><title></pre> element defines the title of the document, which is shown in the browser's title bar or tab. It's also used as the default title when bookmarking the page and is important for SEO as search engines display it in search results. The <pre><title></pre> must be placed within the <pre><head></pre> section and should be descriptive and concise.",
        "topic": {
            "topics": ["HTML Document Structure"]
        }
    },
    {
        "id": 25,
        "question": "Which HTML element is used for quoted content from another source?",
        "options": {
            "A": "<pre><quote></pre>",
            "B": "<pre><blockquote></pre>",
            "C": "<pre><q></pre>",
            "D": "Both B and C"
        },
        "correct": "D",
        "explanation": "Both <pre><blockquote></pre> and <pre><q></pre> are used for quoted content. <pre><blockquote></pre> is for longer quotations that form their own block, typically displayed as indented text. <pre><q></pre> is for shorter, inline quotations that browsers typically surround with quotation marks. Both can use the <pre>cite</pre> attribute to reference the source URL. <pre><quote></pre> is not a valid HTML element.",
        "topic": {
            "topics": ["Text Formatting", "Semantic HTML"]
        }
    },
    {
        "id": 26,
        "question": "What does the <span> element do?",
        "options": {
            "A": "Creates a horizontal space",
            "B": "Defines an inline container for text",
            "C": "Adds spacing between elements",
            "D": "Creates a span of columns"
        },
        "correct": "B",
        "explanation": "The <pre><span></pre> element is an inline container used to mark up part of a text or part of a document. It has no visual representation on its own but is commonly used with CSS to style specific portions of text or with JavaScript to manipulate specific text segments. Unlike <pre><div></pre> which is block-level, <pre><span></pre> is inline and doesn't cause line breaks.",
        "topic": {
            "topics": ["Basic HTML Elements"]
        }
    },
    {
        "id": 27,
        "question": "Which attribute specifies an image source?",
        "options": {
            "A": "<pre>source</pre>",
            "B": "<pre>img</pre>",
            "C": "<pre>src</pre>",
            "D": "<pre>href</pre>"
        },
        "correct": "C",
        "explanation": "The <pre>src</pre> attribute specifies the source (URL or path) of an image for the <pre><img></pre> element. Example: <pre><img src=\"images/photo.jpg\" alt=\"Description\"></pre>. The <pre>src</pre> attribute is required for <pre><img></pre> elements to display an image. For links, the <pre>href</pre> attribute is used instead to specify the destination URL.",
        "topic": {
            "topics": ["HTML Attributes", "Basic HTML Elements"]
        }
    },
    {
        "id": 28,
        "question": "What is the correct way to create a submit button in HTML?",
        "options": {
            "A": "<pre><button type=\"submit\">Submit</button></pre>",
            "B": "<pre><input type=\"submit\" value=\"Submit\"></pre>",
            "C": "<pre><submit>Submit</submit></pre>",
            "D": "Both A and B"
        },
        "correct": "D",
        "explanation": "Both <pre><button type=\"submit\"></pre> and <pre><input type=\"submit\"></pre> create submit buttons. The <pre><button></pre> element allows HTML content between the tags, while <pre><input></pre> uses the <pre>value</pre> attribute for the button text. Example A: <pre><button type=\"submit\"><strong>Submit</strong> Form</button></pre>. Example B: <pre><input type=\"submit\" value=\"Submit\"></pre>.",
        "topic": {
            "topics": ["Forms and Input Elements"]
        }
    },
    {
        "id": 29,
        "question": "Which HTML element defines important text?",
        "options": {
            "A": "<pre><important></pre>",
            "B": "<pre><em></pre>",
            "C": "<pre><strong></pre>",
            "D": "<pre><highlight></pre>"
        },
        "correct": "C",
        "explanation": "The <pre><strong></pre> element defines text with strong importance. Browsers typically render this as bold text, but the semantic meaning is about importance, not just visual styling. Screen readers may emphasize <pre><strong></pre> content. For text that should be emphasized but not necessarily important, use <pre><em></pre> (emphasis) instead, which typically renders as italic.",
        "topic": {
            "topics": ["Text Formatting", "Semantic HTML"]
        }
    },
    {
        "id": 30,
        "question": "What is the purpose of the <main> element?",
        "options": {
            "A": "To indicate the main content of a document",
            "B": "To create the main navigation",
            "C": "To define the main script file",
            "D": "To contain the main heading"
        },
        "correct": "A",
        "explanation": "The <pre><main></pre> element represents the dominant content of the <pre><body></pre> of a document. It should contain content that is unique to that document and not repeated across pages (like navigation, headers, or footers). There should be only one <pre><main></pre> element per page that is not hidden. This semantic element helps screen readers and search engines identify the primary content of the page.",
        "topic": {
            "topics": ["Semantic HTML", "HTML Document Structure"]
        }
    }
];

module.exports = { metadata, questions };