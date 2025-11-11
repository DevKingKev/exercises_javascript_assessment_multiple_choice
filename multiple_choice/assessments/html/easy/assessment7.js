// assessment7.js - HTML Forms Comprehensive
const metadata = {
    "title": "HTML Forms: Comprehensive Form Controls & Features",
    "description": "Test your understanding of HTML form elements, input types, accessibility features, and form organization techniques.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Form Structure",
        "Input Types",
        "Form Attributes",
        "Accessibility",
        "Validation",
        "Select Elements",
        "Text Areas",
        "Buttons",
        "Form Organization",
        "User Experience"
    ],
    "topicLinks": [
        {
            "topicName": "Form Structure",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
        },
        {
            "topicName": "Input Types",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
        },
        {
            "topicName": "Form Attributes",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
        },
        {
            "topicName": "Accessibility",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
        },
        {
            "topicName": "Validation",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation"
        },
        {
            "topicName": "Select Elements",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"
        },
        {
            "topicName": "Text Areas",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
        },
        {
            "topicName": "Buttons",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
        },
        {
            "topicName": "Form Organization",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"
        },
        {
            "topicName": "User Experience",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
        }
    ],
    "assessmentId": 7,
    "assessmentUniqueId": 1762877766913,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What is the purpose of the <pre>autofocus</pre> attribute in a form?",
        "options": {
            "A": "Automatically focuses the input when the page loads",
            "B": "Automatically fills the input with suggested values",
            "C": "Focuses the input when user hovers over it",
            "D": "Makes the input always visible on screen"
        },
        "correct": "A",
        "explanation": "The <pre>autofocus</pre> attribute automatically focuses the input element when the page loads, placing the cursor in the field ready for user input. Only one element should have this attribute per page. Example: <pre><input type=\"text\" autofocus></pre>",
        "topic": {
            "topics": ["Form Attributes", "User Experience"]
        }
    },
    {
        "id": 2,
        "question": "Which input type is best for collecting a user's age?",
        "options": {
            "A": "<pre>type=\"number\"</pre>",
            "B": "<pre>type=\"text\"</pre>",
            "C": "<pre>type=\"range\"</pre>",
            "D": "<pre>type=\"age\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"number\"</pre> input is ideal for age because it restricts input to numeric values and provides increment/decrement controls. Example: <pre><input type=\"number\" name=\"age\" min=\"0\" max=\"120\"></pre>",
        "topic": {
            "topics": ["Input Types", "Validation"]
        }
    },
    {
        "id": 3,
        "question": "What does the <pre>size</pre> attribute control in a text input?",
        "options": {
            "A": "The visible width in characters",
            "B": "The maximum input length",
            "C": "The font size of the text",
            "D": "The input field height"
        },
        "correct": "A",
        "explanation": "The <pre>size</pre> attribute specifies the visible width of an input field in average character widths. Example: <pre><input type=\"text\" size=\"20\"></pre> creates a field approximately 20 characters wide.",
        "topic": {
            "topics": ["Form Attributes", "User Experience"]
        }
    },
    {
        "id": 4,
        "question": "How do you create a group of checkboxes for multiple selections?",
        "options": {
            "A": "Use the same <pre>name</pre> attribute with different values",
            "B": "Use different <pre>name</pre> attributes for each",
            "C": "Wrap them in a <pre><checkbox-group></pre> element",
            "D": "Use the <pre>group</pre> attribute"
        },
        "correct": "A",
        "explanation": "Checkboxes in the same group should share the same <pre>name</pre> attribute but have different <pre>value</pre> attributes. This allows multiple selections and groups the values together when submitted. Example: [CODE]<input type=\"checkbox\" name=\"interests\" value=\"sports\">\n<input type=\"checkbox\" name=\"interests\" value=\"music\">[/CODE]",
        "topic": {
            "topics": ["Input Types", "Form Organization"]
        }
    },
    {
        "id": 5,
        "question": "What is the purpose of the <pre>title</pre> attribute in form elements?",
        "options": {
            "A": "Provides additional information as a tooltip",
            "B": "Sets the form title",
            "C": "Defines the input field title",
            "D": "Creates a title for validation messages"
        },
        "correct": "A",
        "explanation": "The <pre>title</pre> attribute provides additional information about an element, typically displayed as a tooltip when users hover over it. It's also used by screen readers and can provide context for validation errors. Example: <pre><input type=\"text\" title=\"Enter your full name\"></pre>",
        "topic": {
            "topics": ["Accessibility", "Form Attributes"]
        }
    },
    {
        "id": 6,
        "question": "Which attribute makes a radio button selected by default?",
        "options": {
            "A": "<pre>checked</pre>",
            "B": "<pre>selected</pre>",
            "C": "<pre>default</pre>",
            "D": "<pre>value=\"true\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>checked</pre> boolean attribute makes a radio button or checkbox selected by default when the page loads. Example: <pre><input type=\"radio\" name=\"gender\" value=\"male\" checked></pre>",
        "topic": {
            "topics": ["Form Attributes", "Input Types"]
        }
    },
    {
        "id": 7,
        "question": "What does the <pre>form</pre> element's <pre>method</pre> attribute specify?",
        "options": {
            "A": "The HTTP method for form submission",
            "B": "The validation method to use",
            "C": "The form processing method",
            "D": "The form display method"
        },
        "correct": "A",
        "explanation": "The <pre>method</pre> attribute specifies the HTTP method used when submitting the form. Common values are <pre>GET</pre> (appends data to URL) and <pre>POST</pre> (sends data in request body). Example: <pre><form method=\"POST\"></form></pre>",
        "topic": {
            "topics": ["Form Structure", "Form Attributes"]
        }
    },
    {
        "id": 8,
        "question": "How do you make a textarea non-resizable?",
        "options": {
            "A": "Use CSS <pre>resize: none;</pre>",
            "B": "Add <pre>resizable=\"false\"</pre> attribute",
            "C": "Use <pre><textarea fixed></pre>",
            "D": "Add <pre>style=\"no-resize\"</pre>"
        },
        "correct": "A",
        "explanation": "To prevent users from resizing a textarea, use CSS: <pre>textarea { resize: none; }</pre>. This disables the resize handle that appears in the bottom-right corner of textareas in most browsers.",
        "topic": {
            "topics": ["Text Areas", "User Experience"]
        }
    },
    {
        "id": 9,
        "question": "Which input type provides a slider for selecting a value from a range?",
        "options": {
            "A": "<pre>type=\"range\"</pre>",
            "B": "<pre>type=\"slider\"</pre>",
            "C": "<pre>type=\"number\"</pre>",
            "D": "<pre>type=\"select\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"range\"</pre> input creates a slider control. Use <pre>min</pre>, <pre>max</pre>, and <pre>step</pre> to configure the range. Example: <pre><input type=\"range\" min=\"0\" max=\"100\" value=\"50\"></pre>",
        "topic": {
            "topics": ["Input Types", "User Experience"]
        }
    },
    {
        "id": 10,
        "question": "What is the purpose of the <pre>for</pre> attribute in a label?",
        "options": {
            "A": "Associates the label with a specific input element",
            "B": "Defines what the label is for",
            "C": "Specifies the form the label belongs to",
            "D": "Sets the label's target URL"
        },
        "correct": "A",
        "explanation": "The <pre>for</pre> attribute associates a label with a specific form control by matching the control's <pre>id</pre> attribute. This improves accessibility and makes the label clickable. Example: <pre><label for=\"username\">Username:</label><input id=\"username\"></pre>",
        "topic": {
            "topics": ["Accessibility", "Form Structure"]
        }
    },
    {
        "id": 11,
        "question": "Which attribute specifies that an input should be submitted with the form but not editable?",
        "options": {
            "A": "<pre>readonly</pre>",
            "B": "<pre>disabled</pre>",
            "C": "<pre>static</pre>",
            "D": "<pre>fixed</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>readonly</pre> attribute makes an input field non-editable but still includes its value in form submission. Example: <pre><input type=\"text\" value=\"Fixed Value\" readonly></pre>",
        "topic": {
            "topics": ["Form Attributes", "Input Types"]
        }
    },
    {
        "id": 12,
        "question": "How do you create a multi-line text input field?",
        "options": {
            "A": "Use the <pre><textarea></pre> element",
            "B": "Use <pre><input type=\"multiline\"></pre>",
            "C": "Add <pre>multiline=\"true\"</pre> to text input",
            "D": "Use <pre><text></pre> element"
        },
        "correct": "A",
        "explanation": "The <pre><textarea></pre> element creates a multi-line text input field. Use <pre>rows</pre> and <pre>cols</pre> to set initial dimensions. Example: <pre><textarea rows=\"4\" cols=\"50\"></textarea></pre>",
        "topic": {
            "topics": ["Text Areas", "Input Types"]
        }
    },
    {
        "id": 13,
        "question": "What does the <pre>selected</pre> attribute do in an option element?",
        "options": {
            "A": "Makes the option pre-selected in the dropdown",
            "B": "Highlights the option as selected",
            "C": "Makes the option selectable",
            "D": "Filters the selectable options"
        },
        "correct": "A",
        "explanation": "The <pre>selected</pre> attribute makes an option pre-selected when the page loads. Only one option should have this in a single-select dropdown. Example: <pre><option selected>Default Option</option></pre>",
        "topic": {
            "topics": ["Select Elements", "Form Attributes"]
        }
    },
    {
        "id": 14,
        "question": "Which button type resets all form fields to their initial values?",
        "options": {
            "A": "<pre>type=\"reset\"</pre>",
            "B": "<pre>type=\"clear\"</pre>",
            "C": "<pre>type=\"default\"</pre>",
            "D": "<pre>type=\"cancel\"</pre>"
        },
        "correct": "A",
        "explanation": "A button with <pre>type=\"reset\"</pre> resets all form fields to their initial values when clicked. Example: <pre><button type=\"reset\">Clear Form</button></pre>",
        "topic": {
            "topics": ["Buttons", "Form Structure"]
        }
    },
    {
        "id": 15,
        "question": "What is the purpose of the <pre>pattern</pre> attribute?",
        "options": {
            "A": "Validates input against a regular expression",
            "B": "Sets a visual pattern for the input",
            "C": "Defines the input formatting pattern",
            "D": "Creates a pattern for auto-completion"
        },
        "correct": "A",
        "explanation": "The <pre>pattern</pre> attribute specifies a regular expression that the input's value must match. If the pattern doesn't match, the form won't submit. Example: <pre><input pattern=\"[A-Za-z]{3}\" title=\"Three letters\"></pre>",
        "topic": {
            "topics": ["Validation", "Form Attributes"]
        }
    },
    {
        "id": 16,
        "question": "How do you create a hidden field that submits data but isn't visible?",
        "options": {
            "A": "Use <pre><input type=\"hidden\"></pre>",
            "B": "Use <pre><hidden></pre> element",
            "C": "Add <pre>visible=\"false\"</pre> to any input",
            "D": "Use CSS to hide a regular input"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"hidden\"</pre> input creates a field that submits data but isn't visible to users. Useful for storing IDs, tokens, or state information. Example: <pre><input type=\"hidden\" name=\"user_id\" value=\"123\"></pre>",
        "topic": {
            "topics": ["Input Types", "Form Structure"]
        }
    },
    {
        "id": 17,
        "question": "Which attribute specifies where to send form data?",
        "options": {
            "A": "<pre>action</pre>",
            "B": "<pre>target</pre>",
            "C": "<pre>method</pre>",
            "D": "<pre>submit</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>action</pre> attribute specifies the URL where the form data should be sent when submitted. Example: <pre><form action=\"/submit-form\"></form></pre>",
        "topic": {
            "topics": ["Form Structure", "Form Attributes"]
        }
    },
    {
        "id": 18,
        "question": "What does the <pre>disabled</pre> attribute do to a form control?",
        "options": {
            "A": "Prevents user interaction and excludes from submission",
            "B": "Hides the form control from view",
            "C": "Makes the control read-only",
            "D": "Grays out the control but allows interaction"
        },
        "correct": "A",
        "explanation": "The <pre>disabled</pre> attribute prevents users from interacting with the form control and excludes its value from form submission. The control appears grayed out. Example: <pre><input type=\"text\" disabled></pre>",
        "topic": {
            "topics": ["Form Attributes", "Input Types"]
        }
    },
    {
        "id": 19,
        "question": "How do you create a dropdown list with predefined options?",
        "options": {
            "A": "Use <pre><select></pre> with <pre><option></pre> elements",
            "B": "Use <pre><input type=\"dropdown\"></pre>",
            "C": "Use <pre><list></pre> element",
            "D": "Use <pre><options></pre> element"
        },
        "correct": "A",
        "explanation": "The <pre><select></pre> element creates a dropdown list, with each <pre><option></pre> representing a choice. Example: [CODE]<select name=\"country\">\n  <option value=\"us\">United States</option>\n  <option value=\"ca\">Canada</option>\n</select>[/CODE]",
        "topic": {
            "topics": ["Select Elements", "Form Structure"]
        }
    },
    {
        "id": 20,
        "question": "Which input type is specifically designed for email addresses?",
        "options": {
            "A": "<pre>type=\"email\"</pre>",
            "B": "<pre>type=\"text\"</pre>",
            "C": "<pre>type=\"mail\"</pre>",
            "D": "<pre>type=\"address\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"email\"</pre> input is designed for email addresses. It provides validation and on mobile devices shows an email-optimized keyboard. Example: <pre><input type=\"email\" name=\"user_email\"></pre>",
        "topic": {
            "topics": ["Input Types", "Validation"]
        }
    },
    {
        "id": 21,
        "question": "What is the purpose of the <pre>value</pre> attribute in form controls?",
        "options": {
            "A": "Sets the initial value of the control",
            "B": "Defines the control's importance",
            "C": "Specifies the validation value",
            "D": "Sets the display value only"
        },
        "correct": "A",
        "explanation": "The <pre>value</pre> attribute sets the initial value of a form control. For text inputs, it pre-fills the field; for checkboxes/radios, it defines the submitted value when checked. Example: <pre><input type=\"text\" value=\"Default Text\"></pre>",
        "topic": {
            "topics": ["Form Attributes", "Input Types"]
        }
    },
    {
        "id": 22,
        "question": "How do you make a form control required before submission?",
        "options": {
            "A": "Add the <pre>required</pre> attribute",
            "B": "Use <pre>validate=\"required\"</pre>",
            "C": "Add <pre>mandatory=\"true\"</pre>",
            "D": "Use <pre><required></pre> element"
        },
        "correct": "A",
        "explanation": "The <pre>required</pre> attribute specifies that a form field must be filled out before the form can be submitted. Example: <pre><input type=\"text\" required></pre>",
        "topic": {
            "topics": ["Validation", "Form Attributes"]
        }
    },
    {
        "id": 23,
        "question": "Which element is used to group related form controls visually and semantically?",
        "options": {
            "A": "<pre><fieldset></pre>",
            "B": "<pre><group></pre>",
            "C": "<pre><section></pre>",
            "D": "<pre><div></pre>"
        },
        "correct": "A",
        "explanation": "The <pre><fieldset></pre> element groups related form controls together, creating both a visual and semantic grouping. Often used with <pre><legend></pre> for a caption. Example: [CODE]<fieldset>\n  <legend>Contact Info</legend>\n  <!-- form controls -->\n</fieldset>[/CODE]",
        "topic": {
            "topics": ["Form Organization", "Accessibility"]
        }
    },
    {
        "id": 24,
        "question": "What does the <pre>placeholder</pre> attribute provide?",
        "options": {
            "A": "Hint text that disappears when user types",
            "B": "Default value for the input",
            "C": "Label for the input field",
            "D": "Example text that stays visible"
        },
        "correct": "A",
        "explanation": "The <pre>placeholder</pre> attribute provides short hint text that describes the expected value. It disappears when the user starts typing. Example: <pre><input type=\"text\" placeholder=\"Enter your name\"></pre>",
        "topic": {
            "topics": ["Form Attributes", "User Experience"]
        }
    },
    {
        "id": 25,
        "question": "Which input type obscures entered characters for privacy?",
        "options": {
            "A": "<pre>type=\"password\"</pre>",
            "B": "<pre>type=\"hidden\"</pre>",
            "C": "<pre>type=\"secure\"</pre>",
            "D": "<pre>type=\"private\"</pre>"
        },
        "correct": "A",
        "explanation": "The <pre>type=\"password\"</pre> input obscures entered characters (typically showing dots or asterisks) to prevent shoulder-surfing. Example: <pre><input type=\"password\" name=\"user_password\"></pre>",
        "topic": {
            "topics": ["Input Types", "User Experience"]
        }
    },
    {
        "id": 26,
        "question": "How do you specify that a textarea should wrap text?",
        "options": {
            "A": "Use the <pre>wrap</pre> attribute",
            "B": "Add <pre>text-wrap=\"true\"</pre>",
            "C": "Use CSS <pre>white-space: normal;</pre>",
            "D": "Textareas wrap by default"
        },
        "correct": "A",
        "explanation": "The <pre>wrap</pre> attribute specifies how text should be wrapped in a textarea. Values include <pre>soft</pre> (default), <pre>hard</pre> (with line breaks), and <pre>off</pre> (no wrapping). Example: <pre><textarea wrap=\"hard\"></textarea></pre>",
        "topic": {
            "topics": ["Text Areas", "Form Attributes"]
        }
    },
    {
        "id": 27,
        "question": "What is the purpose of the <pre>name</pre> attribute in form controls?",
        "options": {
            "A": "Identifies the field when form data is submitted",
            "B": "Sets the visible label for the field",
            "C": "Defines the field's variable name in JavaScript",
            "D": "Specifies the field's display name"
        },
        "correct": "A",
        "explanation": "The <pre>name</pre> attribute identifies the form control when the form data is submitted. It becomes the key in the key-value pairs sent to the server. Example: <pre><input type=\"text\" name=\"username\"></pre> submits as <pre>username=entered_value</pre>",
        "topic": {
            "topics": ["Form Attributes", "Form Structure"]
        }
    },
    {
        "id": 28,
        "question": "Which button type is the default for buttons inside forms?",
        "options": {
            "A": "<pre>type=\"submit\"</pre>",
            "B": "<pre>type=\"button\"</pre>",
            "C": "<pre>type=\"reset\"</pre>",
            "D": "No default type"
        },
        "correct": "A",
        "explanation": "When no type is specified for a button inside a form, it defaults to <pre>type=\"submit\"</pre>, which submits the form when clicked. Always specify the type explicitly for clarity.",
        "topic": {
            "topics": ["Buttons", "Form Structure"]
        }
    },
    {
        "id": 29,
        "question": "How do you allow multiple selections in a dropdown list?",
        "options": {
            "A": "Add <pre>multiple</pre> attribute to <pre><select></pre>",
            "B": "Use <pre><select multiple></pre>",
            "C": "Add <pre>selection=\"multiple\"</pre>",
            "D": "Use <pre><multiselect></pre> element"
        },
        "correct": "A",
        "explanation": "The <pre>multiple</pre> attribute allows users to select multiple options in a <pre><select></pre> element by holding Ctrl/Cmd while clicking. Example: <pre><select multiple></select></pre>",
        "topic": {
            "topics": ["Select Elements", "Form Attributes"]
        }
    },
    {
        "id": 30,
        "question": "What does the <pre>maxlength</pre> attribute restrict?",
        "options": {
            "A": "The maximum number of characters allowed",
            "B": "The maximum value for number inputs",
            "C": "The maximum width of the input field",
            "D": "The maximum number of options in a select"
        },
        "correct": "A",
        "explanation": "The <pre>maxlength</pre> attribute restricts the maximum number of characters users can enter in a text input or textarea. The browser prevents typing beyond this limit. Example: <pre><input type=\"text\" maxlength=\"50\"></pre>",
        "topic": {
            "topics": ["Validation", "Form Attributes"]
        }
    }
];

module.exports = { metadata, questions };