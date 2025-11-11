module.exports = {
  "metadata": {
    "title": "HTML Forms: Advanced Input Elements & Form Features",
    "description": "Test your knowledge of advanced HTML form elements, input attributes, form organization, and specialized form controls.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Advanced Input Types",
      "Form Organization",
      "Input Attributes",
      "Form Accessibility",
      "Form Validation",
      "Specialized Controls",
      "Form Submission",
      "Field Organization",
      "Input Modes",
      "Form Security"
    ],
    "topicLinks": [
      {
        "topicName": "Advanced Input Types",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
      },
      {
        "topicName": "Form Organization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"
      },
      {
        "topicName": "Input Attributes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
      },
      {
        "topicName": "Form Accessibility",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
      },
      {
        "topicName": "Form Validation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation"
      },
      {
        "topicName": "Specialized Controls",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range"
      },
      {
        "topicName": "Form Submission",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
      },
      {
        "topicName": "Field Organization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend"
      },
      {
        "topicName": "Input Modes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode"
      },
      {
        "topicName": "Form Security",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Security"
      }
    ],
    "assessmentId": 6,
    "assessmentUniqueId": 1762875558742,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What does the <pre><fieldset></pre> element do in a form?",
      "options": {
        "A": "Sets field boundaries",
        "B": "Creates a field validation set",
        "C": "Groups related form controls together",
        "D": "Defines form field properties"
      },
      "correct": "C",
      "explanation": "The <pre><fieldset></pre> element groups several form controls together, creating a visual and semantic grouping. It's often used with <pre><legend></pre> to provide a caption for the group. This improves form organization and accessibility by relating similar fields. Example: [CODE]<fieldset>\n  <legend>Personal Information</legend>\n  <input type=\"text\" name=\"name\">\n  <input type=\"email\" name=\"email\">\n</fieldset>[/CODE]",
      "topic": {
        "topics": [
          "Form Organization"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which input type is specifically designed for telephone numbers?",
      "options": {
        "A": "<pre>type=\"contact\"</pre>",
        "B": "<pre>type=\"phone\"</pre>",
        "C": "<pre>type=\"number\"</pre>",
        "D": "<pre>type=\"tel\"</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>type=\"tel\"</pre> input is designed for telephone numbers. On mobile devices, it typically displays a telephone keypad instead of the standard keyboard. While it doesn't validate phone number formats, it provides better user experience for phone number input. Example: <pre><input type=\"tel\" name=\"phone\"></pre>",
      "topic": {
        "topics": [
          "Advanced Input Types"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the purpose of the <pre>formnovalidate</pre> attribute on a submit button?",
      "options": {
        "A": "Prevents form submission",
        "B": "Submits the form without validation",
        "C": "Validates form on server only",
        "D": "Disables client-side validation"
      },
      "correct": "B",
      "explanation": "The <pre>formnovalidate</pre> attribute on a submit button allows the form to be submitted without client-side validation. This is useful for 'Save Draft' or similar buttons where incomplete data might be acceptable. Example: <pre><button type=\"submit\" formnovalidate>Save Draft</button></pre>",
      "topic": {
        "topics": [
          "Form Validation",
          "Form Submission"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which attribute specifies the minimum value for a number input?",
      "options": {
        "A": "<pre>min</pre>",
        "B": "<pre>minimum</pre>",
        "C": "<pre>low</pre>",
        "D": "<pre>start</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>min</pre> attribute specifies the minimum value allowed for number inputs, range inputs, and date inputs. It works with <pre>max</pre> and <pre>step</pre> to define acceptable value ranges. Example: <pre><input type=\"number\" min=\"0\" max=\"100\" step=\"5\"></pre>",
      "topic": {
        "topics": [
          "Input Attributes",
          "Form Validation"
        ]
      }
    },
    {
      "id": 5,
      "question": "What does the <pre>inputmode</pre> attribute control?",
      "options": {
        "A": "The type of keyboard displayed on mobile devices",
        "B": "The input validation mode",
        "C": "The form submission mode",
        "D": "The input formatting mode"
      },
      "correct": "A",
      "explanation": "The <pre>inputmode</pre> attribute hints at the type of data that might be entered, influencing which keyboard is shown on mobile devices. Values include <pre>numeric</pre>, <pre>tel</pre>, <pre>email</pre>, <pre>url</pre>, and <pre>decimal</pre>. Example: <pre><input inputmode=\"numeric\" pattern=\"[0-9]*\"></pre>",
      "topic": {
        "topics": [
          "Input Modes",
          "Form Accessibility"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which element provides a caption for a <pre><fieldset></pre>?",
      "options": {
        "A": "<pre><label></pre>",
        "B": "<pre><caption></pre>",
        "C": "<pre><legend></pre>",
        "D": "<pre><title></pre>"
      },
      "correct": "C",
      "explanation": "The <pre><legend></pre> element provides a caption or title for a <pre><fieldset></pre> element. It should be the first child of the fieldset and describes the group of form controls. Example: [CODE]<fieldset>\n  <legend>Shipping Address</legend>\n  <!-- form controls -->\n</fieldset>[/CODE]",
      "topic": {
        "topics": [
          "Field Organization",
          "Form Accessibility"
        ]
      }
    },
    {
      "id": 7,
      "question": "What does the <pre>step</pre> attribute control in number inputs?",
      "options": {
        "A": "The form submission steps",
        "B": "The validation steps",
        "C": "The increment between valid values",
        "D": "The input formatting steps"
      },
      "correct": "C",
      "explanation": "The <pre>step</pre> attribute specifies the legal number intervals for number inputs and range sliders. For example, <pre>step=\"2\"</pre> would allow only even numbers. It works with <pre>min</pre> and <pre>max</pre> to define precise value constraints. Example: <pre><input type=\"number\" step=\"0.5\" min=\"0\" max=\"10\"></pre>",
      "topic": {
        "topics": [
          "Input Attributes",
          "Form Validation"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which input type is best for selecting a week?",
      "options": {
        "A": "<pre>type=\"week\"</pre>",
        "B": "<pre>type=\"date\"</pre>",
        "C": "<pre>type=\"calendar\"</pre>",
        "D": "<pre>type=\"time\"</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>type=\"week\"</pre> input allows users to select a specific week (year and week number). It provides a specialized picker in supporting browsers and returns values in the format 'YYYY-Www'. Example: <pre><input type=\"week\" name=\"vacation_week\"></pre>",
      "topic": {
        "topics": [
          "Advanced Input Types"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the purpose of the <pre>form</pre> attribute on form controls?",
      "options": {
        "A": "Defines the form action",
        "B": "Associates a control with a form outside the form element",
        "C": "Specifies form validation rules",
        "D": "Sets the form method"
      },
      "correct": "B",
      "explanation": "The <pre>form</pre> attribute allows form controls to be associated with a form even when they're not nested inside the form element. The attribute value must match the form's id. Example: [CODE]<form id=\"myForm\"></form>\n<input type=\"text\" name=\"username\" form=\"myForm\">[/CODE]",
      "topic": {
        "topics": [
          "Form Organization",
          "Form Submission"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which attribute makes a checkbox indeterminate?",
      "options": {
        "A": "Can only be set via JavaScript",
        "B": "<pre>indeterminate</pre>",
        "C": "<pre>partial</pre>",
        "D": "<pre>mixed</pre>"
      },
      "correct": "A",
      "explanation": "The indeterminate state of a checkbox can only be set via JavaScript, not through HTML attributes. It represents a 'partially checked' state, often used in tree views or 'select all' scenarios. Example: [CODE]const checkbox = document.getElementById('myCheckbox');\ncheckbox.indeterminate = true;[/CODE]",
      "topic": {
        "topics": [
          "Specialized Controls"
        ]
      }
    },
    {
      "id": 11,
      "question": "What does the <pre>formenctype</pre> attribute specify?",
      "options": {
        "A": "The form encryption method",
        "B": "The encoding type for form submission",
        "C": "The form content type",
        "D": "The form encoding validation"
      },
      "correct": "B",
      "explanation": "The <pre>formenctype</pre> attribute specifies how form data should be encoded when submitted. It overrides the form's <pre>enctype</pre> attribute. Common values are <pre>application/x-www-form-urlencoded</pre> (default), <pre>multipart/form-data</pre> (file uploads), and <pre>text/plain</pre>. Example: <pre><button type=\"submit\" formenctype=\"multipart/form-data\">Upload</button></pre>",
      "topic": {
        "topics": [
          "Form Submission"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which input type is designed for search queries?",
      "options": {
        "A": "<pre>type=\"search\"</pre>",
        "B": "<pre>type=\"text\"</pre>",
        "C": "<pre>type=\"query\"</pre>",
        "D": "<pre>type=\"find\"</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>type=\"search\"</pre> input is semantically designed for search queries. Browsers may style it differently (rounded corners, clear button) and provide search-specific features. Example: <pre><input type=\"search\" name=\"q\" placeholder=\"Search...\"></pre>",
      "topic": {
        "topics": [
          "Advanced Input Types"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the purpose of the <pre>formtarget</pre> attribute?",
      "options": {
        "A": "Defines form security target",
        "B": "Sets form validation target",
        "C": "Specifies where to display form response",
        "D": "Specifies form data target"
      },
      "correct": "C",
      "explanation": "The <pre>formtarget</pre> attribute specifies where to display the response after form submission, overriding the form's <pre>target</pre> attribute. It works like the <pre>target</pre> attribute on links. Example: <pre><button type=\"submit\" formtarget=\"_blank\">Open in New Tab</button></pre>",
      "topic": {
        "topics": [
          "Form Submission"
        ]
      }
    },
    {
      "id": 14,
      "question": "Which attribute specifies the maximum number of characters for a textarea?",
      "options": {
        "A": "<pre>chars</pre>",
        "B": "<pre>size</pre>",
        "C": "<pre>limit</pre>",
        "D": "<pre>maxlength</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>maxlength</pre> attribute specifies the maximum number of characters allowed in a textarea or text input. The browser prevents users from typing beyond this limit. Example: <pre><textarea maxlength=\"500\">Enter up to 500 characters</textarea></pre>",
      "topic": {
        "topics": [
          "Input Attributes",
          "Form Validation"
        ]
      }
    },
    {
      "id": 15,
      "question": "What does the <pre>formmethod</pre> attribute do?",
      "options": {
        "A": "Defines form validation method",
        "B": "Overrides the form's method attribute",
        "C": "Specifies form processing method",
        "D": "Sets form security method"
      },
      "correct": "B",
      "explanation": "The <pre>formmethod</pre> attribute overrides the form's <pre>method</pre> attribute for a specific submit button. This allows different submission methods from the same form. Example: <pre><button type=\"submit\" formmethod=\"get\">Search</button></pre>",
      "topic": {
        "topics": [
          "Form Submission"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which input type is designed for color selection?",
      "options": {
        "A": "<pre>type=\"color\"</pre>",
        "B": "<pre>type=\"picker\"</pre>",
        "C": "<pre>type=\"palette\"</pre>",
        "D": "<pre>type=\"rgb\"</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>type=\"color\"</pre> input provides a color picker interface. It returns the selected color as a hexadecimal value. Example: <pre><input type=\"color\" name=\"bgcolor\" value=\"#ff0000\"></pre>",
      "topic": {
        "topics": [
          "Advanced Input Types"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the purpose of the <pre>dirname</pre> attribute?",
      "options": {
        "A": "Specifies form direction",
        "B": "Sets the input direction",
        "C": "Defines directory name for file inputs",
        "D": "Submits the text direction along with the value"
      },
      "correct": "D",
      "explanation": "The <pre>dirname</pre> attribute causes the text direction (ltr or rtl) to be submitted along with the input value. This is useful for forms that need to preserve text direction. Example: <pre><input type=\"text\" name=\"message\" dirname=\"message.dir\"></pre>",
      "topic": {
        "topics": [
          "Input Attributes",
          "Form Submission"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which attribute specifies that a field should be filled automatically?",
      "options": {
        "A": "<pre>autocomplete</pre>",
        "B": "<pre>auto-fill</pre>",
        "C": "<pre>suggest</pre>",
        "D": "<pre>complete</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>autocomplete</pre> attribute controls whether the browser can automatically complete the field. Values include <pre>on</pre>, <pre>off</pre>, and specific field types like <pre>name</pre>, <pre>email</pre>, etc. Example: <pre><input type=\"email\" autocomplete=\"email\"></pre>",
      "topic": {
        "topics": [
          "Input Attributes",
          "Form Accessibility"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does the <pre>formaction</pre> attribute override?",
      "options": {
        "A": "Form validation action",
        "B": "The form's action attribute",
        "C": "Form security action",
        "D": "Form processing action"
      },
      "correct": "B",
      "explanation": "The <pre>formaction</pre> attribute overrides the form's <pre>action</pre> attribute for a specific submit button. This allows different submission URLs from the same form. Example: <pre><button type=\"submit\" formaction=\"/save-draft\">Save Draft</button></pre>",
      "topic": {
        "topics": [
          "Form Submission"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which input type is designed for time input without timezone?",
      "options": {
        "A": "<pre>type=\"hour\"</pre>",
        "B": "<pre>type=\"datetime\"</pre>",
        "C": "<pre>type=\"clock\"</pre>",
        "D": "<pre>type=\"time\"</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>type=\"time\"</pre> input allows users to select a time value (hours and minutes) without timezone information. It returns values in 24-hour format. Example: <pre><input type=\"time\" name=\"appointment\"></pre>",
      "topic": {
        "topics": [
          "Advanced Input Types"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the purpose of the <pre>multiple</pre> attribute on file inputs?",
      "options": {
        "A": "Enables multiple file validation",
        "B": "Creates multiple file fields",
        "C": "Allows selecting multiple files",
        "D": "Supports multiple file formats"
      },
      "correct": "C",
      "explanation": "The <pre>multiple</pre> attribute on file inputs allows users to select multiple files at once. The files are submitted as an array. Example: <pre><input type=\"file\" name=\"documents\" multiple></pre>",
      "topic": {
        "topics": [
          "Input Attributes",
          "Specialized Controls"
        ]
      }
    },
    {
      "id": 22,
      "question": "Which attribute specifies the acceptable file types for file inputs?",
      "options": {
        "A": "<pre>filetypes</pre>",
        "B": "<pre>accept</pre>",
        "C": "<pre>types</pre>",
        "D": "<pre>extensions</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>accept</pre> attribute specifies which file types are acceptable for file inputs. It can use MIME types or file extensions. Example: <pre><input type=\"file\" accept=\".jpg,.png,.pdf\"></pre> or <pre><input type=\"file\" accept=\"image/*\"></pre>",
      "topic": {
        "topics": [
          "Input Attributes",
          "Form Validation"
        ]
      }
    },
    {
      "id": 23,
      "question": "What does the <pre>novalidate</pre> attribute do on a form?",
      "options": {
        "A": "Disables all validation",
        "B": "Enables server-side validation only",
        "C": "Prevents form submission",
        "D": "Disables client-side validation"
      },
      "correct": "D",
      "explanation": "The <pre>novalidate</pre> attribute on a form element disables the browser's built-in client-side validation. This is useful when you want to handle validation entirely through JavaScript. Example: <pre><form novalidate>...</form></pre>",
      "topic": {
        "topics": [
          "Form Validation"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which input type is designed for URL input?",
      "options": {
        "A": "<pre>type=\"http\"</pre>",
        "B": "<pre>type=\"link\"</pre>",
        "C": "<pre>type=\"web\"</pre>",
        "D": "<pre>type=\"url\"</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>type=\"url\"</pre> input is designed for URL input. It provides URL validation and on mobile devices, shows a URL-optimized keyboard. Example: <pre><input type=\"url\" name=\"website\"></pre>",
      "topic": {
        "topics": [
          "Advanced Input Types"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the purpose of the <pre>form</pre> element's <pre>enctype</pre> attribute?",
      "options": {
        "A": "Sets form encryption type",
        "B": "Specifies how form data is encoded for submission",
        "C": "Defines form content type",
        "D": "Specifies form encoding validation"
      },
      "correct": "B",
      "explanation": "The <pre>enctype</pre> attribute specifies how form data should be encoded when submitted to the server. The default is <pre>application/x-www-form-urlencoded</pre>, while <pre>multipart/form-data</pre> is required for file uploads. Example: <pre><form enctype=\"multipart/form-data\">...</form></pre>",
      "topic": {
        "topics": [
          "Form Submission"
        ]
      }
    },
    {
      "id": 26,
      "question": "Which attribute sets the initial number of visible lines in a textarea?",
      "options": {
        "A": "<pre>size</pre>",
        "B": "<pre>lines</pre>",
        "C": "<pre>height</pre>",
        "D": "<pre>rows</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>rows</pre> attribute specifies the visible number of text lines in a textarea. It works with <pre>cols</pre> to set the initial size. Example: <pre><textarea rows=\"4\" cols=\"50\">Default text</textarea></pre>",
      "topic": {
        "topics": [
          "Input Attributes"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does the <pre>pattern</pre> attribute use for validation?",
      "options": {
        "A": "JavaScript patterns",
        "B": "CSS patterns",
        "C": "Regular expressions",
        "D": "HTML patterns"
      },
      "correct": "C",
      "explanation": "The <pre>pattern</pre> attribute uses regular expressions to validate input. If the input doesn't match the pattern, the form won't submit. Example: <pre><input type=\"text\" pattern=\"[A-Za-z]{3}\" title=\"3 letters only\"></pre>",
      "topic": {
        "topics": [
          "Form Validation"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which input type is designed for month selection?",
      "options": {
        "A": "<pre>type=\"date\"</pre>",
        "B": "<pre>type=\"month\"</pre>",
        "C": "<pre>type=\"calendar\"</pre>",
        "D": "<pre>type=\"year\"</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>type=\"month\"</pre> input allows users to select a specific month and year. It returns values in the format 'YYYY-MM'. Example: <pre><input type=\"month\" name=\"birthmonth\"></pre>",
      "topic": {
        "topics": [
          "Advanced Input Types"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the purpose of the <pre>form</pre> attribute's <pre>rel</pre> value?",
      "options": {
        "A": "Specifies the relationship between the form and its target",
        "B": "Defines form reliability",
        "C": "Sets form relevance",
        "D": "Specifies form rendering"
      },
      "correct": "A",
      "explanation": "The <pre>rel</pre> attribute on forms specifies the relationship between the current document and the linked resource (the form's target). Values include <pre>external</pre>, <pre>nofollow</pre>, and <pre>opener</pre>. Example: <pre><form action=\"/submit\" rel=\"nofollow\">...</form></pre>",
      "topic": {
        "topics": [
          "Form Security",
          "Form Submission"
        ]
      }
    },
    {
      "id": 30,
      "question": "Which attribute specifies that a textarea can be resized by the user?",
      "options": {
        "A": "<pre>flexible</pre>",
        "B": "<pre>resizable</pre>",
        "C": "By default, but can be controlled with CSS",
        "D": "<pre>sizable</pre>"
      },
      "correct": "C",
      "explanation": "Textareas are resizable by default in most browsers. This behavior can be controlled with CSS using the <pre>resize</pre> property. Example: <pre>textarea { resize: none; }</pre> to disable resizing, or <pre>resize: vertical;</pre> to allow only vertical resizing.",
      "topic": {
        "topics": [
          "Specialized Controls"
        ]
      }
    }
  ]
}
