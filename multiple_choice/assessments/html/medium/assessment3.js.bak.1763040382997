module.exports = {
    "metadata": {
        "title": "Advanced HTML Form Controls and Features",
        "description": "Test your understanding of advanced HTML form elements, attributes, and accessibility features for complex form implementations.",
        "difficulty": "medium",
        "domain": "html",
        "timeLimit": 45,
        "questionCount": 25,
        "topics": [
            "Advanced Form Controls",
            "Form Accessibility",
            "Input Types and Attributes",
            "Form Validation",
            "User Experience",
            "Semantic HTML",
            "Progressive Enhancement",
            "Cross-browser Compatibility"
        ],
        "topicLinks": [
            {
                "topicName": "Advanced Form Controls",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
            },
            {
                "topicName": "Form Accessibility",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms"
            },
            {
                "topicName": "Input Types and Attributes",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
            },
            {
                "topicName": "Form Validation",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
            },
            {
                "topicName": "User Experience",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
            },
            {
                "topicName": "Semantic HTML",
                "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
            },
            {
                "topicName": "Progressive Enhancement",
                "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement"
            },
            {
                "topicName": "Cross-browser Compatibility",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode"
            }
        ],
        "assessmentId": 3,
        "assessmentUniqueId": 1762969513539,
        "testType": "multiple-choice"
    },
    "questions": [
        {
            "id": 1,
            "question": "What is the primary purpose of the <pre>datalist</pre> element in this form implementation?",
            "options": {
                "A": "It provides suggested autocomplete options for an input field",
                "B": "It validates user input against a predefined list",
                "C": "It creates a dropdown menu for form selection",
                "D": "It stores form data for later submission"
            },
            "correct": "A",
            "explanation": "The <pre>datalist</pre> element provides suggested autocomplete options that users can select from while typing. Unlike <pre>select</pre>, it allows free-form input while offering suggestions.\n\n[CODE]<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n</datalist>[/CODE]",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 2,
            "question": "What accessibility benefit does using <pre>fieldset</pre> and <pre>legend</pre> provide in forms?",
            "options": {
                "A": "They group related controls and provide a programmatic label for the group",
                "B": "They automatically focus on the first field in the group",
                "C": "They prevent form submission until all fields are filled",
                "D": "They enable keyboard shortcuts for form navigation"
            },
            "correct": "B",
            "explanation": "<pre>fieldset</pre> groups related form controls, while <pre>legend</pre> provides a programmatic label for the entire group. This helps screen reader users understand the relationship between controls and their purpose.",
            "topic": {
                "topics": ["Form Accessibility", "Semantic HTML"]
            }
        },
        {
            "id": 3,
            "question": "What happens when a user submits this form with the <pre>formnovalidate</pre> attribute?",
            "options": {
                "A": "The form submits without client-side validation",
                "B": "The form validation occurs on the server only",
                "C": "The form automatically saves a draft",
                "D": "The form clears all input values"
            },
            "correct": "A",
            "explanation": "The <pre>formnovalidate</pre> attribute prevents client-side validation when the form is submitted, allowing submission even if fields don't meet validation requirements.\n\n[CODE]<input type=\"submit\" value=\"Save Draft\" formnovalidate>[/CODE]",
            "topic": {
                "topics": ["Form Validation", "Advanced Form Controls"]
            }
        },
        {
            "id": 4,
            "question": "What is the semantic purpose of the <pre>output</pre> element in this calculation form?",
            "options": {
                "A": "It displays the result of a calculation or user action",
                "B": "It stores calculated values for form submission",
                "C": "It validates mathematical input formats",
                "D": "It creates read-only form fields"
            },
            "correct": "C",
            "explanation": "The <pre>output</pre> element semantically represents the result of a calculation or user action. It's specifically designed for displaying computed values.\n\n[CODE]<output name=\"result\" for=\"a b\">0</output>[/CODE]",
            "topic": {
                "topics": ["Semantic HTML", "Advanced Form Controls"]
            }
        },
        {
            "id": 5,
            "question": "What is the difference between <pre>progress</pre> and <pre>meter</pre> elements?",
            "options": {
                "A": "Progress shows task completion, meter shows measurements within a range",
                "B": "Progress is for uploads, meter is for downloads",
                "C": "Progress requires JavaScript, meter works without it",
                "D": "Progress has animation, meter is static"
            },
            "correct": "D",
            "explanation": "<pre>progress</pre> indicates task completion progress, while <pre>meter</pre> represents scalar measurements within a known range. Progress is for ongoing processes, meter for measured values.",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 6,
            "question": "What happens when an input uses the <pre>form</pre> attribute to associate with a different form?",
            "options": {
                "A": "The input becomes part of the specified form for submission",
                "B": "The input inherits the form's validation rules",
                "C": "The input's values are copied to the target form",
                "D": "The input triggers the form's submit event"
            },
            "correct": "B",
            "explanation": "The <pre>form</pre> attribute allows an input to be associated with a form even when it's not nested inside it. This enables form controls outside the form element to participate in form submission.\n\n[CODE]<input type=\"text\" name=\"extra\" form=\"main-form\">[/CODE]",
            "topic": {
                "topics": ["Advanced Form Controls", "Cross-browser Compatibility"]
            }
        },
        {
            "id": 7,
            "question": "What is the purpose of the <pre>formaction</pre> attribute on a submit button?",
            "options": {
                "A": "It overrides the form's action URL for that specific submission",
                "B": "It specifies the form validation action",
                "C": "It defines the form's method as an action",
                "D": "It triggers form submission via AJAX"
            },
            "correct": "A",
            "explanation": "<pre>formaction</pre> overrides the form's <pre>action</pre> attribute for that specific submit button, allowing different submission endpoints from the same form.\n\n[CODE]<input type=\"submit\" value=\"Save\" formaction=\"/save\">\n<input type=\"submit\" value=\"Publish\" formaction=\"/publish\">[/CODE]",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 8,
            "question": "How does the <pre>formmethod</pre> attribute affect form submission?",
            "options": {
                "A": "It overrides the form's method for a specific submit button",
                "B": "It specifies the validation method for form fields",
                "C": "It defines how form data is encoded",
                "D": "It sets the form's submission timeout"
            },
            "correct": "C",
            "explanation": "<pre>formmethod</pre> overrides the form's <pre>method</pre> attribute for a specific submit button, allowing different HTTP methods from the same form.\n\n[CODE]<input type=\"submit\" value=\"Preview\" formmethod=\"get\">\n<input type=\"submit\" value=\"Submit\" formmethod=\"post\">[/CODE]",
            "topic": {
                "topics": ["Advanced Form Controls", "Cross-browser Compatibility"]
            }
        },
        {
            "id": 9,
            "question": "What accessibility issue exists in this form implementation?",
            "options": {
                "A": "Missing association between labels and inputs",
                "B": "Incorrect use of fieldset for single controls",
                "C": "Progress element without current value",
                "D": "Datalist without accessible name"
            },
            "correct": "D",
            "explanation": "The <pre>datalist</pre> element should have an accessible name when it provides important suggestions. Use <pre>aria-label</pre> or associate with a visible label.\n\n[CODE]<datalist id=\"colors\" aria-label=\"Suggested colors\">\n  <option value=\"Red\">\n  <option value=\"Blue\">\n</datalist>[/CODE]",
            "topic": {
                "topics": ["Form Accessibility", "Advanced Form Controls"]
            }
        },
        {
            "id": 10,
            "question": "What is the benefit of using <pre>meter</pre> over a custom progress bar?",
            "options": {
                "A": "Built-in semantics and accessibility support",
                "B": "Automatic animation and transitions",
                "C": "Better browser performance",
                "D": "Customizable color schemes"
            },
            "correct": "B",
            "explanation": "<pre>meter</pre> provides built-in semantics that screen readers can interpret, along with browser-native styling and accessibility features without additional JavaScript.",
            "topic": {
                "topics": ["Semantic HTML", "Form Accessibility"]
            }
        },
        {
            "id": 11,
            "question": "How can you make a <pre>datalist</pre> work in browsers that don't support it?",
            "options": {
                "A": "Provide a fallback select element",
                "B": "Use JavaScript polyfill for autocomplete",
                "C": "Convert to textarea with suggestions",
                "D": "Hide the datalist completely"
            },
            "correct": "A",
            "explanation": "For progressive enhancement, provide a <pre>select</pre> element as fallback. Browsers that support datalist will use it, others will show the select.\n\n[CODE]<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">...</datalist>\n<select name=\"browser_fallback\">...</select>[/CODE]",
            "topic": {
                "topics": ["Progressive Enhancement", "Cross-browser Compatibility"]
            }
        },
        {
            "id": 12,
            "question": "What happens when multiple submit buttons have different <pre>formaction</pre> attributes?",
            "options": {
                "A": "Each button submits to its specified URL",
                "B": "Only the first formaction is used",
                "C": "The form uses the main action attribute",
                "D": "The browser shows an error"
            },
            "correct": "A",
            "explanation": "Each submit button with a <pre>formaction</pre> attribute will submit the form to its specified URL when clicked, allowing multiple submission targets from one form.",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 13,
            "question": "What is the correct way to associate an <pre>output</pre> element with its source inputs?",
            "options": {
                "A": "Use the <pre>for</pre> attribute with input IDs",
                "B": "Nest the output inside the input elements",
                "C": "Use JavaScript event listeners",
                "D": "Place output next to the inputs"
            },
            "correct": "A",
            "explanation": "The <pre>for</pre> attribute specifies which input elements the output is associated with, using their ID values separated by spaces.\n\n[CODE]<output name=\"result\" for=\"price quantity\">0</output>[/CODE]",
            "topic": {
                "topics": ["Advanced Form Controls", "Semantic HTML"]
            }
        },
        {
            "id": 14,
            "question": "What is the purpose of the <pre>high</pre> and <pre>low</pre> attributes on <pre>meter</pre>?",
            "options": {
                "A": "They define optimal and suboptimal value ranges",
                "B": "They set minimum and maximum display values",
                "C": "They control animation speed thresholds",
                "D": "They define validation boundaries"
            },
            "correct": "B",
            "explanation": "<pre>low</pre> and <pre>high</pre> define the ranges for suboptimal values, while <pre>optimum</pre> specifies the ideal value. Browsers may color these ranges differently.",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 15,
            "question": "How does <pre>formnovalidate</pre> differ from <pre>novalidate</pre> on the form element?",
            "options": {
                "A": "formnovalidate applies to a specific button, novalidate to entire form",
                "B": "formnovalidate works on all buttons, novalidate on specific ones",
                "C": "formnovalidate is for client-side, novalidate for server-side",
                "D": "They are identical in functionality"
            },
            "correct": "A",
            "explanation": "<pre>novalidate</pre> on the form element disables validation for all submissions, while <pre>formnovalidate</pre> on a button only affects submissions via that specific button.",
            "topic": {
                "topics": ["Form Validation", "Advanced Form Controls"]
            }
        },
        {
            "id": 16,
            "question": "What is the accessibility consideration for <pre>progress</pre> elements?",
            "options": {
                "A": "They should have an accessible name describing what's progressing",
                "B": "They automatically announce updates to screen readers",
                "C": "They require JavaScript for accessibility",
                "D": "They should be hidden from screen readers"
            },
            "correct": "B",
            "explanation": "<pre>progress</pre> elements should have an accessible name using <pre>aria-label</pre> or associated label to describe what process is being tracked for screen reader users.",
            "topic": {
                "topics": ["Form Accessibility", "Advanced Form Controls"]
            }
        },
        {
            "id": 17,
            "question": "What happens when you use both <pre>formaction</pre> and <pre>formmethod</pre> on a button?",
            "options": {
                "A": "Both attributes work together for that submission",
                "B": "Only formaction is applied",
                "C": "The browser ignores both attributes",
                "D": "They cancel each other out"
            },
            "correct": "A",
            "explanation": "When used together on a submit button, <pre>formaction</pre> specifies the URL and <pre>formmethod</pre> specifies the HTTP method for that particular form submission.",
            "topic": {
                "topics": ["Advanced Form Controls", "Cross-browser Compatibility"]
            }
        },
        {
            "id": 18,
            "question": "How can you make a <pre>fieldset</pre> accessible when it's disabled?",
            "options": {
                "A": "Use aria-disabled and maintain focusability",
                "B": "Hide the fieldset from screen readers",
                "C": "Remove the legend element",
                "D": "Add role=\"presentation\""
            },
            "correct": "C",
            "explanation": "When a <pre>fieldset</pre> is disabled, use <pre>aria-disabled=\"true\"</pre> and ensure the content remains accessible. Don't remove focusability entirely.\n\n[CODE]<fieldset disabled aria-disabled=\"true\">[/CODE]",
            "topic": {
                "topics": ["Form Accessibility", "Advanced Form Controls"]
            }
        },
        {
            "id": 19,
            "question": "What is the benefit of using the <pre>form</pre> attribute for inputs outside forms?",
            "options": {
                "A": "It allows flexible form layout in HTML structure",
                "B": "It improves form submission performance",
                "C": "It enables cross-origin form submissions",
                "D": "It automatically validates external inputs"
            },
            "correct": "D",
            "explanation": "The <pre>form</pre> attribute enables inputs to be placed anywhere in the document while still belonging to a form, providing layout flexibility without JavaScript.",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 20,
            "question": "What is the difference between <pre>datalist</pre> and <pre>select</pre> with <pre>size</pre> attribute?",
            "options": {
                "A": "Datalist allows custom input, select requires exact match",
                "B": "Select has better browser support",
                "C": "Datalist works without JavaScript",
                "D": "Select provides better accessibility"
            },
            "correct": "A",
            "explanation": "<pre>datalist</pre> provides suggestions but allows free-form input, while <pre>select</pre> requires users to choose from predefined options only.",
            "topic": {
                "topics": ["Advanced Form Controls", "Progressive Enhancement"]
            }
        },
        {
            "id": 21,
            "question": "How should you update an <pre>output</pre> element's value dynamically?",
            "options": {
                "A": "Set its value property via JavaScript",
                "B": "Change the text content directly",
                "C": "Use the setAttribute method",
                "D": "Trigger a form reset event"
            },
            "correct": "B",
            "explanation": "Update an <pre>output</pre> element by changing its <pre>textContent</pre> or <pre>innerHTML</pre> property. It doesn't have a value attribute like inputs.\n\n[CODE]document.querySelector('output').textContent = newValue;[/CODE]",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 22,
            "question": "What is the purpose of the <pre>optimum</pre> attribute on <pre>meter</pre>?",
            "options": {
                "A": "It indicates the ideal value within the range",
                "B": "It sets the maximum possible value",
                "C": "It defines the optimal animation speed",
                "D": "It specifies the default value"
            },
            "correct": "A",
            "explanation": "The <pre>optimum</pre> attribute indicates the ideal numeric value. Browsers may display values closer to optimum more favorably in the meter's visual representation.",
            "topic": {
                "topics": ["Advanced Form Controls", "User Experience"]
            }
        },
        {
            "id": 23,
            "question": "What happens when a form has both main attributes and button override attributes?",
            "options": {
                "A": "Button attributes override form attributes for that submission",
                "B": "Form attributes always take precedence",
                "C": "The browser shows a validation error",
                "D": "Only the first declared attribute works"
            },
            "correct": "A",
            "explanation": "When a submit button has <pre>formaction</pre>, <pre>formmethod</pre>, or <pre>formnovalidate</pre>, these override the form's main attributes for submissions via that button.",
            "topic": {
                "topics": ["Advanced Form Controls", "Cross-browser Compatibility"]
            }
        },
        {
            "id": 24,
            "question": "How can you style <pre>progress</pre> and <pre>meter</pre> elements consistently across browsers?",
            "options": {
                "A": "Use vendor prefixes for CSS pseudo-elements",
                "B": "Wrap them in divs with custom styling",
                "C": "Use appearance: none and custom styles",
                "D": "They cannot be styled consistently"
            },
            "correct": "C",
            "explanation": "Use <pre>appearance: none</pre> to remove default styling, then apply custom styles using the standard element selectors and pseudo-elements where supported.",
            "topic": {
                "topics": ["Advanced Form Controls", "Cross-browser Compatibility"]
            }
        },
        {
            "id": 25,
            "question": "What is the progressive enhancement approach for <pre>output</pre> elements?",
            "options": {
                "A": "Provide a fallback read-only input",
                "B": "Use JavaScript to create the output dynamically",
                "C": "Hide the output in unsupported browsers",
                "D": "Use a span with ARIA role instead"
            },
            "correct": "D",
            "explanation": "For browsers that don't support <pre>output</pre>, ensure the content is still visible and functional. The element degrades gracefully to inline content.",
            "topic": {
                "topics": ["Progressive Enhancement", "Advanced Form Controls"]
            }
        }
    ]
};