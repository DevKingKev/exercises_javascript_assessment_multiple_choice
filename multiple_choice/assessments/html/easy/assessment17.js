module.exports = {
    "metadata": {
        "title": "HTML Validation and Best Practices",
        "description": "Test your understanding of HTML validation rules, proper syntax, and web standards compliance for clean, accessible code.",
        "difficulty": "easy",
        "domain": "html",
        "timeLimit": 30,
        "questionCount": 30,
        "topics": [
            "Element Nesting",
            "Void Elements",
            "Attribute Quoting",
            "Case Sensitivity",
            "HTML Structure",
            "W3C Validator",
            "Validation Errors",
            "Semantic Markup",
            "Accessibility Compliance",
            "Code Quality"
        ],
        "topicLinks": [
            {
                "topicName": "Element Nesting",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_categories"
            },
            {
                "topicName": "Void Elements",
                "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Void_element"
            },
            {
                "topicName": "Attribute Quoting",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
            },
            {
                "topicName": "Case Sensitivity",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#case_sensitivity"
            },
            {
                "topicName": "HTML Structure",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
            },
            {
                "topicName": "W3C Validator",
                "refLink": "https://validator.w3.org/"
            },
            {
                "topicName": "Validation Errors",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"
            },
            {
                "topicName": "Semantic Markup",
                "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
            },
            {
                "topicName": "Accessibility Compliance",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
            },
            {
                "topicName": "Code Quality",
                "refLink": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML"
            }
        ],
        "assessmentId": 17,
        "assessmentUniqueId": 1762947267386,
        "testType": "multiple-choice"
    },
    "questions": [
        {
            "id": 1,
            "question": "Which HTML element nesting is correct?",
            "options": {
                "A": "<pre><p><strong>Text</p></strong></pre>",
                "B": "<pre><strong><p>Text</p></strong></pre>",
                "C": "<pre><p><strong>Text</strong></p></pre>",
                "D": "<pre><p><strong>Text</strong></p></pre>"
            },
            "correct": "C",
            "explanation": "Proper HTML nesting requires that elements close in the reverse order they were opened. Option C correctly nests <pre>strong</pre> inside <pre>p</pre> with proper closing order.",
            "topic": {
                "topics": ["Element Nesting", "Validation Errors"]
            }
        },
        {
            "id": 2,
            "question": "Which tag is a void element that should be self-closing?",
            "options": {
                "A": "<pre>div</pre>",
                "B": "<pre>img</pre>",
                "C": "<pre>span</pre>",
                "D": "<pre>a</pre>"
            },
            "correct": "B",
            "explanation": "The <pre>img</pre> tag is a void element that doesn't require a closing tag. It should be self-closed as <pre><img src=\"image.jpg\" alt=\"description\"></pre> in HTML5.",
            "topic": {
                "topics": ["Void Elements", "HTML Structure"]
            }
        },
        {
            "id": 3,
            "question": "What is the recommended case for HTML element names?",
            "options": {
                "A": "UPPERCASE",
                "B": "lowercase",
                "C": "camelCase",
                "D": "Sentence case"
            },
            "correct": "B",
            "explanation": "HTML5 is case-insensitive for element names, but the convention and best practice is to use lowercase for better readability and consistency.",
            "topic": {
                "topics": ["Case Sensitivity", "Code Quality"]
            }
        },
        {
            "id": 4,
            "question": "Which attribute quoting is valid HTML?",
            "options": {
                "A": "<pre>class=header</pre>",
                "B": "<pre>class=\"header\"</pre>",
                "C": "<pre>class='header'</pre>",
                "D": "Both B and C"
            },
            "correct": "D",
            "explanation": "HTML allows both double quotes <pre>\"\"</pre> and single quotes <pre>''</pre> for attribute values. While double quotes are more common, both are valid according to the specification.",
            "topic": {
                "topics": ["Attribute Quoting", "Validation Errors"]
            }
        },
        {
            "id": 5,
            "question": "What is the purpose of the W3C HTML Validator?",
            "options": {
                "A": "To minify HTML code",
                "B": "To check HTML syntax and standards compliance",
                "C": "To convert HTML to other formats",
                "D": "To optimize images in HTML"
            },
            "correct": "B",
            "explanation": "The W3C HTML Validator checks HTML documents for syntax errors, standards compliance, and potential issues that could affect rendering or accessibility.",
            "topic": {
                "topics": ["W3C Validator", "Code Quality"]
            }
        },
        {
            "id": 6,
            "question": "Which element should NOT be nested inside a <pre>p</pre> paragraph?",
            "options": {
                "A": "<pre>strong</pre>",
                "B": "<pre>em</pre>",
                "C": "<pre>div</pre>",
                "D": "<pre>span</pre>"
            },
            "correct": "C",
            "explanation": "Block-level elements like <pre>div</pre> cannot be nested inside inline containers like <pre>p</pre> paragraphs. This violates HTML content model rules.",
            "topic": {
                "topics": ["Element Nesting", "Validation Errors"]
            }
        },
        {
            "id": 7,
            "question": "What is the correct way to write a line break in HTML?",
            "options": {
                "A": "<pre><br></br></pre>",
                "B": "<pre><br /></pre>",
                "C": "<pre><break></pre>",
                "D": "<pre><br></pre>"
            },
            "correct": "D",
            "explanation": "In HTML5, void elements like <pre>br</pre> don't require a closing tag or self-closing slash. <pre><br></pre> is the correct, valid syntax.",
            "topic": {
                "topics": ["Void Elements", "HTML Structure"]
            }
        },
        {
            "id": 8,
            "question": "Why is consistent attribute quoting important?",
            "options": {
                "A": "It makes HTML files smaller",
                "B": "It prevents parsing errors with spaces in values",
                "C": "It improves JavaScript performance",
                "D": "It enables CSS animations"
            },
            "correct": "B",
            "explanation": "Quoting attributes prevents parsing errors when attribute values contain spaces, special characters, or could be misinterpreted by browsers.",
            "topic": {
                "topics": ["Attribute Quoting", "Validation Errors"]
            }
        },
        {
            "id": 9,
            "question": "Which document type declaration is valid for HTML5?",
            "options": {
                "A": "<pre><!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"></pre>",
                "B": "<pre><!DOCTYPE html></pre>",
                "C": "<pre><!DOCTYPE HTML5></pre>",
                "D": "<pre><html version=\"5.0\"></pre>"
            },
            "correct": "B",
            "explanation": "HTML5 uses the simple declaration <pre><!DOCTYPE html></pre> which is case-insensitive but typically written in uppercase for consistency.",
            "topic": {
                "topics": ["HTML Structure", "Code Quality"]
            }
        },
        {
            "id": 10,
            "question": "What common error occurs when forgetting to close an HTML element?",
            "options": {
                "A": "The page loads faster",
                "B": "Elements appear nested incorrectly",
                "C": "CSS stops working entirely",
                "D": "JavaScript files won't load"
            },
            "correct": "B",
            "explanation": "Unclosed HTML elements cause incorrect nesting where browsers must guess where elements end, often resulting in unexpected layout and styling issues.",
            "topic": {
                "topics": ["Validation Errors", "Element Nesting"]
            }
        },
        {
            "id": 11,
            "question": "Which is a valid reason to validate HTML?",
            "options": {
                "A": "To guarantee perfect design",
                "B": "To ensure cross-browser compatibility",
                "C": "To automatically fix all errors",
                "D": "To make websites load instantly"
            },
            "correct": "B",
            "explanation": "Valid HTML is more likely to render consistently across different browsers and devices, reducing cross-browser compatibility issues.",
            "topic": {
                "topics": ["W3C Validator", "Code Quality"]
            }
        },
        {
            "id": 12,
            "question": "How should you write an input element with a placeholder?",
            "options": {
                "A": "<pre><input type=text placeholder=Enter your name></pre>",
                "B": "<pre><input type=\"text\" placeholder=\"Enter your name\"></pre>",
                "C": "<pre><input Type=\"text\" Placeholder=\"Enter your name\"></pre>",
                "D": "Both B and C"
            },
            "correct": "B",
            "explanation": "Option B uses lowercase element/attribute names and properly quoted attributes with spaces in values - following HTML best practices.",
            "topic": {
                "topics": ["Attribute Quoting", "Case Sensitivity"]
            }
        },
        {
            "id": 13,
            "question": "Which element is NOT a void element?",
            "options": {
                "A": "<pre>meta</pre>",
                "B": "<pre>link</pre>",
                "C": "<pre>input</pre>",
                "D": "<pre>section</pre>"
            },
            "correct": "D",
            "explanation": "<pre>section</pre> is a container element that requires a closing tag, unlike void elements that are self-closing and cannot contain content.",
            "topic": {
                "topics": ["Void Elements", "HTML Structure"]
            }
        },
        {
            "id": 14,
            "question": "What problem can mixed case HTML cause?",
            "options": {
                "A": "Slower page loading",
                "B": "Harder to read and maintain code",
                "C": "Automatic validation failure",
                "D": "CSS property conflicts"
            },
            "correct": "B",
            "explanation": "While HTML5 is case-insensitive, mixed case makes code harder to read, maintain, and can cause confusion in team environments.",
            "topic": {
                "topics": ["Case Sensitivity", "Code Quality"]
            }
        },
        {
            "id": 15,
            "question": "Which is a required element in valid HTML5?",
            "options": {
                "A": "<pre>head</pre> and <pre>body</pre>",
                "B": "<pre>doctype</pre> only",
                "C": "<pre>html</pre>, <pre>head</pre>, and <pre>body</pre>",
                "D": "<pre>title</pre> within <pre>head</pre>"
            },
            "correct": "C",
            "explanation": "Valid HTML5 requires the root <pre>html</pre> element containing <pre>head</pre> and <pre>body</pre> sections for proper document structure.",
            "topic": {
                "topics": ["HTML Structure", "Validation Errors"]
            }
        },
        {
            "id": 16,
            "question": "What does the validator report for unquoted attributes with spaces?",
            "options": {
                "A": "A warning",
                "B": "An error",
                "C": "A suggestion",
                "D": "No issue"
            },
            "correct": "B",
            "explanation": "Unquoted attributes with spaces cause parsing errors as browsers can't determine where the attribute value ends, resulting in validation errors.",
            "topic": {
                "topics": ["Attribute Quoting", "W3C Validator"]
            }
        },
        {
            "id": 17,
            "question": "Which nesting would cause a validation error?",
            "options": {
                "A": "<pre><ul><li>Item</li></ul></pre>",
                "B": "<pre><a href=\"#\"><span>Link</span></a></pre>",
                "C": "<pre><p><div>Content</div></p></pre>",
                "D": "<pre><header><h1>Title</h1></header></pre>"
            },
            "correct": "C",
            "explanation": "Placing a block-level <pre>div</pre> inside an inline container <pre>p</pre> violates HTML content model rules and causes validation errors.",
            "topic": {
                "topics": ["Element Nesting", "Validation Errors"]
            }
        },
        {
            "id": 18,
            "question": "How many root <pre>html</pre> elements should a valid document have?",
            "options": {
                "A": "One",
                "B": "Two (head and body)",
                "C": "As many as needed",
                "D": "None required"
            },
            "correct": "A",
            "explanation": "A valid HTML document must have exactly one root <pre>html</pre> element that contains all other elements.",
            "topic": {
                "topics": ["HTML Structure", "Validation Errors"]
            }
        },
        {
            "id": 19,
            "question": "What is the advantage of using lowercase for CSS classes in HTML?",
            "options": {
                "A": "Faster CSS rendering",
                "B": "Consistency with HTML element convention",
                "C": "Smaller file size",
                "D": "Better JavaScript compatibility"
            },
            "correct": "B",
            "explanation": "Using lowercase for CSS classes maintains consistency with the lowercase convention for HTML elements, making code more readable and maintainable.",
            "topic": {
                "topics": ["Case Sensitivity", "Code Quality"]
            }
        },
        {
            "id": 20,
            "question": "Which is a correct void element for embedding an image?",
            "options": {
                "A": "<pre><img src=\"photo.jpg\"></img></pre>",
                "B": "<pre><image src=\"photo.jpg\"></pre>",
                "C": "<pre><img src=\"photo.jpg\"></pre>",
                "D": "<pre><img src=\"photo.jpg\" /></pre>"
            },
            "correct": "C",
            "explanation": "In HTML5, <pre>img</pre> is a void element that doesn't require a closing tag. Option C shows the correct syntax without unnecessary closing.",
            "topic": {
                "topics": ["Void Elements", "HTML Structure"]
            }
        },
        {
            "id": 21,
            "question": "What happens if you omit the <pre>alt</pre> attribute on an <pre>img</pre> tag?",
            "options": {
                "A": "Validation error for required attribute",
                "B": "Image won't display",
                "C": "Warning for accessibility",
                "D": "No issue - it's optional"
            },
            "correct": "C",
            "explanation": "Validators typically give warnings for missing <pre>alt</pre> attributes since they're crucial for accessibility, though not technically required for validation.",
            "topic": {
                "topics": ["W3C Validator", "Accessibility Compliance"]
            }
        },
        {
            "id": 22,
            "question": "Which character is recommended for indentation in HTML?",
            "options": {
                "A": "Tabs only",
                "B": "Spaces only",
                "C": "Either tabs or spaces, but consistent",
                "D": "No indentation needed"
            },
            "correct": "C",
            "explanation": "HTML doesn't require specific indentation, but consistent indentation (using either tabs or spaces consistently) greatly improves code readability and maintenance.",
            "topic": {
                "topics": ["Code Quality", "HTML Structure"]
            }
        },
        {
            "id": 23,
            "question": "What is the proper way to nest a list within another list?",
            "options": {
                "A": "<pre><ul><li>Item<ul><li>Subitem</li></ul></li></ul></pre>",
                "B": "<pre><ul><li>Item</li><ul><li>Subitem</li></ul></ul></pre>",
                "C": "<pre><ul><li>Item</li></ul><ul><li>Subitem</li></ul></pre>",
                "D": "<pre><ul><li>Item<ul><li>Subitem</li></ul></li></ul></pre>"
            },
            "correct": "A",
            "explanation": "Nested lists must be completely contained within a list item (<pre>li</pre>) of the parent list to maintain valid HTML structure.",
            "topic": {
                "topics": ["Element Nesting", "Validation Errors"]
            }
        },
        {
            "id": 24,
            "question": "Why should you avoid uppercase attribute names?",
            "options": {
                "A": "They are invalid in HTML5",
                "B": "They conflict with JavaScript properties",
                "C": "They reduce readability and are unconventional",
                "D": "They cause CSS to fail"
            },
            "correct": "C",
            "explanation": "While technically valid in HTML5, uppercase attribute names reduce code readability and violate common conventions, making code harder to maintain.",
            "topic": {
                "topics": ["Case Sensitivity", "Code Quality"]
            }
        },
        {
            "id": 25,
            "question": "Which meta tag is correctly written?",
            "options": {
                "A": "<pre><meta charset=\"UTF-8\"></pre>",
                "B": "<pre><meta charset=\"UTF-8\" /></pre>",
                "C": "<pre><meta charset=UTF-8></pre>",
                "D": "<pre><meta charset=\"UTF-8\"></meta></pre>"
            },
            "correct": "A",
            "explanation": "Option A shows the correct HTML5 syntax for the charset meta tag - a void element with quoted attribute and no closing tag.",
            "topic": {
                "topics": ["Void Elements", "Attribute Quoting"]
            }
        },
        {
            "id": 26,
            "question": "What is the main benefit of valid HTML for accessibility?",
            "options": {
                "A": "Faster screen reader performance",
                "B": "Proper semantic structure for assistive technology",
                "C": "Automatic voice control compatibility",
                "D": "Larger click targets for mobile"
            },
            "correct": "B",
            "explanation": "Valid HTML ensures proper semantic structure that assistive technologies like screen readers can interpret correctly, making content accessible to users with disabilities.",
            "topic": {
                "topics": ["Accessibility Compliance", "Semantic Markup"]
            }
        },
        {
            "id": 27,
            "question": "Which error would a validator catch?",
            "options": {
                "A": "Poor color contrast",
                "B": "Missing closing </pre>div</pre> tag",
                "C": "Slow loading images",
                "D": "Complex CSS animations"
            },
            "correct": "B",
            "explanation": "HTML validators catch syntax errors like missing closing tags, improper nesting, and invalid attributes - structural issues that affect parsing.",
            "topic": {
                "topics": ["W3C Validator", "Validation Errors"]
            }
        },
        {
            "id": 28,
            "question": "How should you write a link with multiple classes?",
            "options": {
                "A": "<pre><a class=\"btn primary large\">Click</a></pre>",
                "B": "<pre><a class=btn primary large>Click</a></pre>",
                "C": "<pre><a class=\"btn,primary,large\">Click</a></pre>",
                "D": "<pre><a class=[btn,primary,large]>Click</a></pre>"
            },
            "correct": "A",
            "explanation": "Multiple CSS classes are separated by spaces within a single quoted attribute value, as shown in option A.",
            "topic": {
                "topics": ["Attribute Quoting", "Code Quality"]
            }
        },
        {
            "id": 29,
            "question": "What is the impact of using deprecated elements in modern HTML?",
            "options": {
                "A": "Automatic validation failure",
                "B": "Potential future browser incompatibility",
                "C": "Immediate rendering errors",
                "D": "CSS stops working"
            },
            "correct": "B",
            "explanation": "Deprecated elements may work in current browsers but could be removed in future versions, causing compatibility issues. Validators flag them as warnings.",
            "topic": {
                "topics": ["Validation Errors", "Code Quality"]
            }
        },
        {
            "id": 30,
            "question": "Why is proper HTML validation important for web development?",
            "options": {
                "A": "It guarantees perfect visual design",
                "B": "It ensures cross-browser compatibility and accessibility",
                "C": "It automatically optimizes performance",
                "D": "It replaces the need for testing"
            },
            "correct": "B",
            "explanation": "Valid HTML provides a solid foundation that works reliably across different browsers and devices while supporting accessibility features - essential for professional web development.",
            "topic": {
                "topics": ["W3C Validator", "Accessibility Compliance"]
            }
        }
    ]
};