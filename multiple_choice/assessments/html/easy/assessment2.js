// assessment2.js - HTML Forms and Input Elements
const metadata = {
    "title": "HTML Forms: Input Elements & Form Controls",
    "description": "Test your knowledge of HTML form elements, input types, form attributes, and basic form validation.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Form elements",
        "Input types",
        "Form attributes",
        "Labels and accessibility",
        "Form validation",
        "Select and option elements",
        "Textarea and buttons"
    ],
    "topicLinks": [
        {
            "topicName": "Form elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
        },
        {
            "topicName": "Input types",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
        },
        {
            "topicName": "Form attributes",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
        },
        {
            "topicName": "Labels and accessibility",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"
        },
        {
            "topicName": "Form validation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation"
        },
        {
            "topicName": "Select and option elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"
        },
        {
            "topicName": "Textarea and buttons",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
        }
    ],
    "assessmentId": 2,
    "assessmentUniqueId": 1762828717709,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the purpose of the <pre><form></pre> element?",
        "options": {
            "A": "Groups form controls and defines how to submit data",
            "B": "Creates a formatted text area",
            "C": "Displays a form template",
            "D": "Validates user input"
        },
        "correct": "A",
        "explanation": "The <pre><form></pre> element groups related form controls and defines how to submit the collected data using attributes like <pre>action</pre> (URL to submit to) and <pre>method</pre> (HTTP method like GET or POST).",
        "topic": {
            "topics": ["Form elements"]
        }
    },
    {
        "id": 2,
        "question": "Which input type creates a text field for email addresses?",
        "options": {
            "A": "<pre>type=\"email\"</pre>",
            "B": "<pre>type=\"text\"</pre>",
            "C": "<pre>type=\"mail\"</pre>",
            "D": "<pre>type=\"address\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"email\"</pre> input creates a field specifically for email addresses. It provides built-in validation to ensure the entered value looks like a valid email format, and mobile browsers show email-optimized keyboards.",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 3,
        "question": "What does the <pre>required</pre> attribute do in [CODE]<input type=\"text\" required>[/CODE]?",
        "options": {
            "A": "Makes the field mandatory before form submission",
            "B": "Highlights the field in red",
            "C": "Sets a default value",
            "D": "Makes the field read-only"
        },
        "correct": "A",
        "explanation": "The <pre>required</pre> attribute is a boolean attribute that prevents form submission if the field is empty. The browser displays a validation message when users try to submit without filling the required field.",
        "topic": {
            "topics": ["Form validation"]
        }
    },
    {
        "id": 4,
        "question": "How do you associate a label with an input field for accessibility?",
        "options": {
            "A": "Use the <pre>for</pre> attribute matching the input's <pre>id</pre>",
            "B": "Place them next to each other",
            "C": "Use the <pre>name</pre> attribute",
            "D": "Use the <pre>link</pre> attribute"
        },
        "correct": "A",
        "explanation": "Connect a <pre><label></pre> to an input using [CODE]<label for=\"email\">Email:</label>\n<input type=\"email\" id=\"email\">[/CODE]. The <pre>for</pre> attribute must match the input's <pre>id</pre>. This improves accessibility and makes the label clickable to focus the input.",
        "topic": {
            "topics": ["Labels and accessibility"]
        }
    },
    {
        "id": 5,
        "question": "What does this create? [CODE]<select>\n  <option>Red</option>\n  <option>Blue</option>\n  <option>Green</option>\n</select>[/CODE]",
        "options": {
            "A": "A dropdown menu with three options",
            "B": "Three radio buttons",
            "C": "Three checkboxes",
            "D": "A list of links"
        },
        "correct": "A",
        "explanation": "The <pre><select></pre> element creates a dropdown menu. Each <pre><option></pre> element represents a choice in the dropdown. Users can select one option at a time by default.",
        "topic": {
            "topics": ["Select and option elements"]
        }
    },
    {
        "id": 6,
        "question": "Which input type creates a password field that hides characters?",
        "options": {
            "A": "<pre>type=\"password\"</pre>",
            "B": "<pre>type=\"hidden\"</pre>",
            "C": "<pre>type=\"secret\"</pre>",
            "D": "<pre>type=\"secure\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"password\"</pre> input creates a field that obscures entered characters (typically showing dots or asterisks). This prevents shoulder-surfing but doesn't encrypt the data during transmission.",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 7,
        "question": "What is the purpose of the <pre><textarea></pre> element?",
        "options": {
            "A": "Creates a multi-line text input field",
            "B": "Displays read-only text",
            "C": "Creates a single-line input",
            "D": "Formats text with styling"
        },
        "correct": "A",
        "explanation": "The <pre><textarea></pre> element creates a resizable multi-line text input field. Use <pre>rows</pre> and <pre>cols</pre> attributes to set initial size, or use CSS for better control.",
        "topic": {
            "topics": ["Textarea and buttons"]
        }
    },
    {
        "id": 8,
        "question": "What does [CODE]<input type=\"checkbox\" name=\"agree\" value=\"yes\">[/CODE] create?",
        "options": {
            "A": "A checkbox that can be checked or unchecked",
            "B": "A radio button",
            "C": "A toggle switch",
            "D": "A dropdown option"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"checkbox\"</pre> input creates a checkbox that users can check or uncheck. Multiple checkboxes can be selected independently. When checked, it submits the specified <pre>value</pre> (\"yes\" in this case).",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 9,
        "question": "What's the difference between radio buttons and checkboxes?",
        "options": {
            "A": "Radio buttons allow selecting only one option; checkboxes allow multiple",
            "B": "Radio buttons are round; checkboxes are square (visual only)",
            "C": "Radio buttons are for text; checkboxes are for numbers",
            "D": "No difference, they're interchangeable"
        },
        "correct": "A",
        "explanation": "Radio buttons (<pre>type=\"radio\"</pre>) allow selecting only one option from a group (sharing the same <pre>name</pre> attribute). Checkboxes allow selecting multiple options independently. This is a functional difference, not just visual.",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 10,
        "question": "What does the <pre>placeholder</pre> attribute do in [CODE]<input type=\"text\" placeholder=\"Enter name\">[/CODE]?",
        "options": {
            "A": "Displays hint text that disappears when user types",
            "B": "Sets the default value",
            "C": "Creates a label",
            "D": "Validates the input format"
        },
        "correct": "A",
        "explanation": "The <pre>placeholder</pre> attribute shows temporary hint text inside the input field. It disappears when the user starts typing. It's not a substitute for a <pre><label></pre> element, which should always be used for accessibility.",
        "topic": {
            "topics": ["Form attributes"]
        }
    },
    {
        "id": 11,
        "question": "Which attribute sets the initial value of an input field?",
        "options": {
            "A": "<pre>value</pre>",
            "B": "<pre>default</pre>",
            "C": "<pre>initial</pre>",
            "D": "<pre>placeholder</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>value</pre> attribute sets the initial value of an input field. For text inputs, it pre-fills the field. For buttons, it sets the button text. For checkboxes/radios, it defines the value sent when checked.",
        "topic": {
            "topics": ["Form attributes"]
        }
    },
    {
        "id": 12,
        "question": "What does [CODE]<button type=\"submit\">Send</button>[/CODE] do inside a form?",
        "options": {
            "A": "Submits the form when clicked",
            "B": "Resets the form",
            "C": "Creates a generic button with no action",
            "D": "Validates the form"
        },
        "correct": "A",
        "explanation": "A button with <pre>type=\"submit\"</pre> triggers form submission when clicked. This is the default type for buttons inside forms. Use <pre>type=\"button\"</pre> for buttons that don't submit, or <pre>type=\"reset\"</pre> to clear the form.",
        "topic": {
            "topics": ["Textarea and buttons"]
        }
    },
    {
        "id": 13,
        "question": "Which input type creates a date picker?",
        "options": {
            "A": "<pre>type=\"date\"</pre>",
            "B": "<pre>type=\"calendar\"</pre>",
            "C": "<pre>type=\"datetime\"</pre>",
            "D": "<pre>type=\"picker\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"date\"</pre> input provides a date picker interface in supported browsers. It ensures the date is in a standard format (YYYY-MM-DD) and provides built-in validation.",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 14,
        "question": "What does the <pre>name</pre> attribute specify in form controls?",
        "options": {
            "A": "The key used when submitting the form data",
            "B": "The visible label text",
            "C": "The CSS class name",
            "D": "The element's ID"
        },
        "correct": "A",
        "explanation": "The <pre>name</pre> attribute defines the key (parameter name) used when submitting form data. For example, [CODE]<input name=\"email\" value=\"test@example.com\">[/CODE] submits as <pre>email=test@example.com</pre>.",
        "topic": {
            "topics": ["Form attributes"]
        }
    },
    {
        "id": 15,
        "question": "How do you create a radio button group where only one can be selected?",
        "options": {
            "A": "Give all radio buttons the same <pre>name</pre> attribute",
            "B": "Place them in the same <pre><div></pre>",
            "C": "Use the <pre>group</pre> attribute",
            "D": "Give them sequential IDs"
        },
        "correct": "A",
        "explanation": "Radio buttons with the same <pre>name</pre> attribute form a mutually exclusive group. Only one can be selected at a time. Each should have a different <pre>value</pre> to distinguish which option was chosen. Example: [CODE]<input type=\"radio\" name=\"size\" value=\"S\">\n<input type=\"radio\" name=\"size\" value=\"M\">[/CODE]",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 16,
        "question": "What does the <pre>disabled</pre> attribute do in [CODE]<input type=\"text\" disabled>[/CODE]?",
        "options": {
            "A": "Prevents user interaction and excludes from form submission",
            "B": "Hides the input field",
            "C": "Makes the field required",
            "D": "Validates the input"
        },
        "correct": "A",
        "explanation": "The <pre>disabled</pre> attribute prevents users from interacting with the field and excludes its value from form submission. The field typically appears grayed out. Use <pre>readonly</pre> if you want to prevent editing but still submit the value.",
        "topic": {
            "topics": ["Form attributes"]
        }
    },
    {
        "id": 17,
        "question": "Which input type creates a slider control?",
        "options": {
            "A": "<pre>type=\"range\"</pre>",
            "B": "<pre>type=\"slider\"</pre>",
            "C": "<pre>type=\"number\"</pre>",
            "D": "<pre>type=\"scale\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"range\"</pre> input creates a slider control. Use <pre>min</pre>, <pre>max</pre>, and <pre>step</pre> attributes to configure the range and increments. Example: [CODE]<input type=\"range\" min=\"0\" max=\"100\" step=\"5\">[/CODE]",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 18,
        "question": "What does [CODE]<option selected>Blue</option>[/CODE] do in a select dropdown?",
        "options": {
            "A": "Makes Blue the pre-selected option",
            "B": "Highlights Blue in a different color",
            "C": "Makes Blue the only selectable option",
            "D": "Validates the selection"
        },
        "correct": "A",
        "explanation": "The <pre>selected</pre> boolean attribute makes an option pre-selected when the page loads. Only one option should have this attribute in a single-select dropdown. Without it, the first option is selected by default.",
        "topic": {
            "topics": ["Select and option elements"]
        }
    },
    {
        "id": 19,
        "question": "What is the purpose of the <pre>action</pre> attribute in [CODE]<form action=\"/submit\">[/CODE]?",
        "options": {
            "A": "Specifies the URL where form data is sent",
            "B": "Defines the form's behavior",
            "C": "Sets the submit button text",
            "D": "Creates a form action handler"
        },
        "correct": "A",
        "explanation": "The <pre>action</pre> attribute specifies the URL that processes the form data when submitted. If omitted, the form submits to the current page URL. Example: [CODE]<form action=\"/api/contact\" method=\"POST\">[/CODE]",
        "topic": {
            "topics": ["Form elements"]
        }
    },
    {
        "id": 20,
        "question": "Which input type creates a number input with increment/decrement buttons?",
        "options": {
            "A": "<pre>type=\"number\"</pre>",
            "B": "<pre>type=\"integer\"</pre>",
            "C": "<pre>type=\"numeric\"</pre>",
            "D": "<pre>type=\"counter\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"number\"</pre> input creates a numeric field with spinner controls (up/down arrows). Use <pre>min</pre>, <pre>max</pre>, and <pre>step</pre> attributes to constrain values. It validates that only numbers are entered.",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 21,
        "question": "What does the <pre>method</pre> attribute specify in [CODE]<form method=\"POST\">[/CODE]?",
        "options": {
            "A": "The HTTP method used to submit form data",
            "B": "The validation method",
            "C": "The encoding method",
            "D": "The form submission function"
        },
        "correct": "A",
        "explanation": "The <pre>method</pre> attribute specifies the HTTP method for submission. <pre>POST</pre> sends data in the request body (for sensitive data or large amounts). <pre>GET</pre> appends data to the URL (for searches or non-sensitive data).",
        "topic": {
            "topics": ["Form elements"]
        }
    },
    {
        "id": 22,
        "question": "What does [CODE]<input type=\"file\">[/CODE] create?",
        "options": {
            "A": "A file upload button that opens a file picker",
            "B": "A text field for file paths",
            "C": "A link to download files",
            "D": "A file manager interface"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"file\"</pre> input creates a file upload control with a button that opens the system's file picker. Use the <pre>accept</pre> attribute to restrict file types, and <pre>multiple</pre> to allow selecting multiple files.",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 23,
        "question": "What does the <pre>readonly</pre> attribute do in [CODE]<input type=\"text\" readonly value=\"Fixed\">[/CODE]?",
        "options": {
            "A": "Prevents editing but includes value in form submission",
            "B": "Hides the input field",
            "C": "Makes the field optional",
            "D": "Same as disabled"
        },
        "correct": "A",
        "explanation": "The <pre>readonly</pre> attribute prevents users from modifying the field's value, but unlike <pre>disabled</pre>, the value is still submitted with the form. The field can receive focus and be copied.",
        "topic": {
            "topics": ["Form attributes"]
        }
    },
    {
        "id": 24,
        "question": "How do you create a multi-select dropdown?",
        "options": {
            "A": "Add <pre>multiple</pre> attribute to <pre><select></pre>",
            "B": "Use <pre>type=\"multiple\"</pre>",
            "C": "Use multiple <pre><select></pre> elements",
            "D": "Use checkboxes instead"
        },
        "correct": "A",
        "explanation": "Adding the <pre>multiple</pre> boolean attribute to <pre><select></pre> allows selecting multiple options by holding Ctrl/Cmd while clicking. Example: [CODE]<select multiple>\n  <option>Red</option>\n  <option>Blue</option>\n</select>[/CODE]",
        "topic": {
            "topics": ["Select and option elements"]
        }
    },
    {
        "id": 25,
        "question": "What does [CODE]<input type=\"hidden\" name=\"id\" value=\"123\">[/CODE] do?",
        "options": {
            "A": "Submits data invisibly without displaying it to users",
            "B": "Hides the input until clicked",
            "C": "Encrypts the value",
            "D": "Creates a password field"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"hidden\"</pre> input stores data that's submitted with the form but not visible to users. It's commonly used for IDs, tokens, or state information. Note: The value is still visible in page source.",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 26,
        "question": "What does the <pre>maxlength</pre> attribute do in [CODE]<input type=\"text\" maxlength=\"10\">[/CODE]?",
        "options": {
            "A": "Limits input to maximum 10 characters",
            "B": "Sets minimum length to 10",
            "C": "Sets the field width to 10 pixels",
            "D": "Validates that length equals 10"
        },
        "correct": "A",
        "explanation": "The <pre>maxlength</pre> attribute restricts the maximum number of characters users can enter. The browser prevents typing beyond this limit. Use <pre>minlength</pre> to set a minimum character requirement.",
        "topic": {
            "topics": ["Form validation"]
        }
    },
    {
        "id": 27,
        "question": "Which input type creates a color picker?",
        "options": {
            "A": "<pre>type=\"color\"</pre>",
            "B": "<pre>type=\"picker\"</pre>",
            "C": "<pre>type=\"palette\"</pre>",
            "D": "<pre>type=\"rgb\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"color\"</pre> input provides a color picker interface in supported browsers. It returns the selected color as a hexadecimal value (e.g., #ff0000 for red).",
        "topic": {
            "topics": ["Input types"]
        }
    },
    {
        "id": 28,
        "question": "What does [CODE]<button type=\"reset\">Clear</button>[/CODE] do inside a form?",
        "options": {
            "A": "Resets all form fields to their initial values",
            "B": "Submits the form",
            "C": "Clears the browser cache",
            "D": "Deletes the form"
        },
        "correct": "A",
        "explanation": "A button with <pre>type=\"reset\"</pre> restores all form fields to their initial values (as defined by <pre>value</pre> attributes or defaults). It doesn't submit the form or clear fields to empty values.",
        "topic": {
            "topics": ["Textarea and buttons"]
        }
    },
    {
        "id": 29,
        "question": "What does the <pre>pattern</pre> attribute do in [CODE]<input type=\"text\" pattern=\"[0-9]{3}\">[/CODE]?",
        "options": {
            "A": "Validates input against a regular expression (3 digits)",
            "B": "Creates a repeating pattern background",
            "C": "Sets a default value pattern",
            "D": "Formats the input display"
        },
        "correct": "A",
        "explanation": "The <pre>pattern</pre> attribute specifies a regular expression that the input must match for validation. In this example, it requires exactly 3 digits. The browser shows a validation message if the pattern doesn't match.",
        "topic": {
            "topics": ["Form validation"]
        }
    },
    {
        "id": 30,
        "question": "Which attribute makes a checkbox checked by default?",
        "options": {
            "A": "<pre>checked</pre>",
            "B": "<pre>selected</pre>",
            "C": "<pre>default</pre>",
            "D": "<pre>value=\"true\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>checked</pre> boolean attribute makes a checkbox or radio button selected by default when the page loads. Example: [CODE]<input type=\"checkbox\" checked>[/CODE]. For dropdowns, use <pre>selected</pre> instead.",
        "topic": {
            "topics": ["Input types"]
        }
    }
];

module.exports = { metadata, questions };
