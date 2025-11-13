module.exports = {
    "metadata": {
        "title": "Advanced Semantic HTML5 Implementation",
        "description": "Test your understanding of semantic HTML5 elements for improved accessibility, document structure, and user experience.",
        "difficulty": "medium",
        "domain": "html",
        "timeLimit": 45,
        "questionCount": 25,
        "topics": [
            "Semantic HTML5",
            "Accessibility",
            "Document Semantics",
            "Interactive Elements",
            "Text Semantics",
            "Code Semantics",
            "SEO and Metadata",
            "Browser Support"
        ],
        "topicLinks": [
            {
                "topicName": "Semantic HTML5",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
            },
            {
                "topicName": "Accessibility",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            },
            {
                "topicName": "Document Semantics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning"
            },
            {
                "topicName": "Interactive Elements",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#interactive_elements"
            },
            {
                "topicName": "Text Semantics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics"
            },
            {
                "topicName": "Code Semantics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content"
            },
            {
                "topicName": "SEO and Metadata",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
            },
            {
                "topicName": "Browser Support",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#browser_compatibility"
            }
        ],
        "assessmentId": 6,
        "assessmentUniqueId": 1762951267394,
        "testType": "multiple-choice"
    },
    "questions": [
        {
            "id": 1,
            "question": "What is the correct way to represent a relative time duration using the <pre>time</pre> element?",
            "options": {
                "A": "Use datetime with ISO 8601 duration format",
                "B": "Time element cannot represent durations",
                "C": "Use the text content without datetime",
                "D": "Combine multiple time elements"
            },
            "correct": "A",
            "explanation": "Use ISO 8601 duration format in datetime attribute for relative times: <pre>time datetime=\"PT2H30M\">2 hours 30 minutes</time></pre>",
            "topic": {
                "topics": ["Semantic HTML5", "Text Semantics"]
            }
        },
        {
            "id": 2,
            "question": "What accessibility consideration is important when using the <pre>mark</pre> element?",
            "options": {
                "A": "Ensure sufficient color contrast for highlighted text",
                "B": "Add role=\"mark\" for screen readers",
                "C": "Provide alternative text for marked content",
                "D": "Use aria-label to describe the highlight purpose"
            },
            "correct": "C",
            "explanation": "Ensure marked text has sufficient color contrast (4.5:1) for accessibility. The semantic meaning is preserved without additional ARIA.",
            "topic": {
                "topics": ["Accessibility", "Text Semantics"]
            }
        },
        {
            "id": 3,
            "question": "How can you programmatically control a <pre>details</pre> element's open state?",
            "options": {
                "A": "Toggle the open property in JavaScript",
                "B": "Use the toggle() method",
                "C": "Add/remove the open attribute",
                "D": "Trigger click event on summary"
            },
            "correct": "C",
            "explanation": "Toggle the <pre>open</pre> attribute to control visibility: <pre>details.open = !details.open</pre> or <pre>details.toggleAttribute('open')</pre>",
            "topic": {
                "topics": ["Interactive Elements", "Browser Support"]
            }
        },
        {
            "id": 4,
            "question": "What is the correct way to close a modal dialog without JavaScript?",
            "options": {
                "A": "Use a form with method=\"dialog\" and submit",
                "B": "Add a button with onclick=\"close()\"",
                "C": "Dialog cannot be closed without JavaScript",
                "D": "Use the Esc key automatically"
            },
            "correct": "A",
            "explanation": "Use a form with method=\"dialog\": <pre>form method=\"dialog\">button type=\"submit\">Close</button></form></pre> This closes the dialog natively.",
            "topic": {
                "topics": ["Interactive Elements", "Semantic HTML5"]
            }
        },
        {
            "id": 5,
            "question": "What is the semantic difference between <pre>abbr</pre> and <pre>acronym</pre> in HTML5?",
            "options": {
                "A": "acronym is obsolete, use abbr for both",
                "B": "abbr for short forms, acronym for pronounceable",
                "C": "acronym has better browser support",
                "D": "abbr requires title, acronym doesn't"
            },
            "correct": "B",
            "explanation": "<pre>acronym</pre> is obsolete in HTML5. Use <pre>abbr</pre> for all abbreviations and acronyms, with title attribute for expansion.",
            "topic": {
                "topics": ["Text Semantics", "Browser Support"]
            }
        },
        {
            "id": 6,
            "question": "What content should NOT be placed inside an <pre>address</pre> element?",
            "options": {
                "A": "Generic contact information for the business",
                "B": "Author's social media links",
                "C": "Every address mentioned in article content",
                "D": "Publication date and copyright information"
            },
            "correct": "D",
            "explanation": "Avoid placing generic business addresses or every address mentioned in content. Reserve for document/article author contact information.",
            "topic": {
                "topics": ["Document Semantics", "Semantic HTML5"]
            }
        },
        {
            "id": 7,
            "question": "How should you mark up a quotation that includes its source citation?",
            "options": {
                "A": "blockquote with cite attribute and footer with cite",
                "B": "q element with nested cite element",
                "C": "blockquote with nested cite only",
                "D": "Use figure and figcaption instead"
            },
            "correct": "A",
            "explanation": "Use <pre>blockquote cite=\"source-url\">quote text <footer>— <cite>Source Name</cite></footer></blockquote></pre> for proper attribution.",
            "topic": {
                "topics": ["Text Semantics", "Document Semantics"]
            }
        },
        {
            "id": 8,
            "question": "What is the purpose of the <pre>samp</pre> element in technical documentation?",
            "options": {
                "A": "To represent sample output from programs",
                "B": "To mark up code samples for copying",
                "C": "To indicate user input examples",
                "D": "To style technical terms differently"
            },
            "correct": "B",
            "explanation": "<pre>samp</pre> represents sample output from computer programs, distinguishing program output from user input or code instructions.",
            "topic": {
                "topics": ["Code Semantics", "Text Semantics"]
            }
        },
        {
            "id": 9,
            "question": "What keyboard navigation is built into <pre>details</pre> elements?",
            "options": {
                "A": "Enter or Space toggles open state",
                "B": "Arrow keys navigate between details",
                "C": "Tab moves to next details element",
                "D": "No built-in keyboard support"
            },
            "correct": "A",
            "explanation": "Pressing Enter or Space on the summary element toggles the open state, providing built-in keyboard accessibility.",
            "topic": {
                "topics": ["Interactive Elements", "Accessibility"]
            }
        },
        {
            "id": 10,
            "question": "How should you represent a variable in a mathematical equation?",
            "options": {
                "A": "Use var element for variables",
                "B": "Use code element for all math",
                "C": "Use i element for italic styling",
                "D": "Use span with math role"
            },
            "correct": "D",
            "explanation": "Use <pre>var</pre> for variables in mathematical or programming contexts: <pre>The value of <var>x</var> is 5.</pre>",
            "topic": {
                "topics": ["Code Semantics", "Text Semantics"]
            }
        },
        {
            "id": 11,
            "question": "What is the benefit of using <pre>time</pre> for event dates in a blog?",
            "options": {
                "A": "Enables date-based content aggregation",
                "B": "Automatically creates calendar events",
                "C": "Improves page loading performance",
                "D": "Provides timezone conversion"
            },
            "correct": "A",
            "explanation": "Machine-readable dates allow search engines and scripts to aggregate, sort, and filter content chronologically.",
            "topic": {
                "topics": ["SEO and Metadata", "Semantic HTML5"]
            }
        },
        {
            "id": 12,
            "question": "What CSS is needed to style the marker of a <pre>details</pre> element?",
            "options": {
                "A": "details::marker for the toggle arrow",
                "B": "summary::-webkit-details-marker",
                "C": "details > summary::before",
                "D": "It cannot be styled with CSS"
            },
            "correct": "B",
            "explanation": "Use <pre>summary::-webkit-details-marker</pre> for WebKit browsers and <pre>summary::marker</pre> for standard compliance to style the toggle arrow.",
            "topic": {
                "topics": ["Interactive Elements", "Browser Support"]
            }
        },
        {
            "id": 13,
            "question": "What is the correct way to make a <pre>dialog</pre> focusable when closed?",
            "options": {
                "A": "Add tabindex=\"0\" to the dialog element",
                "B": "Use show() instead of showModal()",
                "C": "Dialog is always focusable",
                "D": "Wrap dialog in a button"
            },
            "correct": "A",
            "explanation": "Add <pre>tabindex=\"0\"</pre> to make a closed dialog focusable for accessibility: <pre>dialog tabindex=\"0\"</pre>",
            "topic": {
                "topics": ["Interactive Elements", "Accessibility"]
            }
        },
        {
            "id": 14,
            "question": "When should you use <pre>mark</pre> in search results?",
            "options": {
                "A": "To highlight the search terms in each result",
                "B": "To mark the most relevant results",
                "C": "To indicate sponsored results",
                "D": "To show result ranking numbers"
            },
            "correct": "B",
            "explanation": "Use <pre>mark</pre> to highlight the actual search terms within each search result snippet for user reference.",
            "topic": {
                "topics": ["Text Semantics", "User Experience"]
            }
        },
        {
            "id": 15,
            "question": "What is the semantic purpose of nesting <pre>cite</pre> inside <pre>blockquote</pre>?",
            "options": {
                "A": "It creates a direct association between quote and source",
                "B": "It improves SEO for quoted content",
                "C": "It enables citation styling",
                "D": "It validates HTML structure"
            },
            "correct": "A",
            "explanation": "Nesting <pre>cite</pre> inside <pre>blockquote</pre> semantically associates the source with the quotation for better document structure.",
            "topic": {
                "topics": ["Document Semantics", "Text Semantics"]
            }
        },
        {
            "id": 16,
            "question": "How should you represent keyboard shortcuts in documentation?",
            "options": {
                "A": "kbd for each key, separated by plus",
                "B": "samp for the entire shortcut",
                "C": "code for keyboard commands",
                "D": "mark for important shortcuts"
            },
            "correct": "C",
            "explanation": "Use <pre>kbd</pre> for individual keys: <pre>Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save.</pre>",
            "topic": {
                "topics": ["Code Semantics", "Text Semantics"]
            }
        },
        {
            "id": 17,
            "question": "What happens when multiple <pre>details</pre> elements are open simultaneously?",
            "options": {
                "A": "They function independently as accordion items",
                "B": "Only one can be open at a time",
                "C": "The page performance decreases",
                "D": "Screen readers announce all open content"
            },
            "correct": "D",
            "explanation": "Multiple <pre>details</pre> elements can be open simultaneously and function independently without affecting each other.",
            "topic": {
                "topics": ["Interactive Elements", "Accessibility"]
            }
        },
        {
            "id": 18,
            "question": "What is the correct way to use <pre>address</pre> for an organization?",
            "options": {
                "A": "Place it in the footer for site-wide contact",
                "B": "Use it in the header for business address",
                "C": "Wrap every occurrence of the address",
                "D": "Use it only in contact page content"
            },
            "correct": "A",
            "explanation": "Place <pre>address</pre> in the document footer for site-wide contact information, or in article for author contact.",
            "topic": {
                "topics": ["Document Semantics", "Semantic HTML5"]
            }
        },
        {
            "id": 19,
            "question": "What JavaScript method is used to close a <pre>dialog</pre> and return a value?",
            "options": {
                "A": "close() with return value parameter",
                "B": "hide() method",
                "C": "remove() from DOM",
                "D": "setAttribute('open', false)"
            },
            "correct": "A",
            "explanation": "Use <pre>dialog.close(returnValue)</pre> to close a dialog and set its returnValue property for form processing.",
            "topic": {
                "topics": ["Interactive Elements", "Browser Support"]
            }
        },
        {
            "id": 20,
            "question": "What is the accessibility impact of using <pre>abbr</pre> without title?",
            "options": {
                "A": "Screen readers may not announce it as abbreviation",
                "B": "It has no accessibility impact",
                "C": "The abbreviation becomes invisible",
                "D": "It creates a validation error"
            },
            "correct": "A",
            "explanation": "Without <pre>title</pre>, screen readers may not recognize the text as an abbreviation or provide the expansion to users.",
            "topic": {
                "topics": ["Accessibility", "Text Semantics"]
            }
        },
        {
            "id": 21,
            "question": "How should you mark up code that includes expected output?",
            "options": {
                "A": "Use pre with multiple code elements",
                "B": "Use samp for output within code block",
                "C": "Separate code and output with hr",
                "D": "Use different background colors"
            },
            "correct": "B",
            "explanation": "Use <pre>samp</pre> within <pre>code</pre> blocks to distinguish expected output from the code itself.",
            "topic": {
                "topics": ["Code Semantics", "Text Semantics"]
            }
        },
        {
            "id": 22,
            "question": "What is the correct datetime format for a specific date and time?",
            "options": {
                "A": "YYYY-MM-DDThh:mm:ssZ",
                "B": "MM/DD/YYYY hh:mm:ss",
                "C": "DD Month YYYY at hh:mm",
                "D": "YYYYMMDDhhmmss"
            },
            "correct": "A",
            "explanation": "Use ISO 8601 format: <pre>datetime=\"2024-01-15T14:30:00Z\"</pre> for machine-readable dates with timezone.",
            "topic": {
                "topics": ["Semantic HTML5", "SEO and Metadata"]
            }
        },
        {
            "id": 23,
            "question": "What happens when you use <pre>dialog</pre> without JavaScript?",
            "options": {
                "A": "The dialog content is visible but not modal",
                "B": "The dialog is hidden from all users",
                "C": "It falls back to details/summary",
                "D": "It shows as a regular div"
            },
            "correct": "A",
            "explanation": "Without JavaScript, <pre>dialog</pre> content is visible in the normal document flow but lacks modal behavior.",
            "topic": {
                "topics": ["Interactive Elements", "Browser Support"]
            }
        },
        {
            "id": 24,
            "question": "What is the semantic difference between <pre>code</pre> and <pre>pre</pre>?",
            "options": {
                "A": "code for semantics, pre for formatting",
                "B": "pre for code, code for variables",
                "C": "They are interchangeable",
                "D": "code requires pre as parent"
            },
            "correct": "A",
            "explanation": "<pre>code</pre> provides semantic meaning (this is code), while <pre>pre</pre> provides formatting (preserve whitespace). Often used together.",
            "topic": {
                "topics": ["Code Semantics", "Text Semantics"]
            }
        },
        {
            "id": 25,
            "question": "How can you improve accessibility of a complex <pre>blockquote</pre>?",
            "options": {
                "A": "Add role=\"quote\" and aria-label",
                "B": "Use cite attribute for source URL",
                "C": "Provide a summary before the quote",
                "D": "Wrap in figure with figcaption"
            },
            "correct": "D",
            "explanation": "For complex quotes, use <pre>figure</pre> with <pre>blockquote</pre> and <pre>figcaption</pre> for the citation to improve semantic structure.",
            "topic": {
                "topics": ["Accessibility", "Document Semantics"]
            }
        }
    ]
};