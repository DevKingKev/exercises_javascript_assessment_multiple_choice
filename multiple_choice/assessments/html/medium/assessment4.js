module.exports = {
  "metadata": {
    "title": "Advanced HTML Form Controls and Validation",
    "description": "Test your understanding of advanced HTML form elements, validation attributes, and modern form features for complex user interfaces.",
    "difficulty": "medium",
    "domain": "html",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "Advanced Form Controls",
      "Form Validation",
      "Input Attributes",
      "User Experience",
      "Accessibility",
      "Semantic HTML",
      "Browser Compatibility",
      "Progressive Enhancement"
    ],
    "topicLinks": [
      {
        "topicName": "Advanced Form Controls",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
      },
      {
        "topicName": "Form Validation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
      },
      {
        "topicName": "Input Attributes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
      },
      {
        "topicName": "User Experience",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
      },
      {
        "topicName": "Accessibility",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms"
      },
      {
        "topicName": "Semantic HTML",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
      },
      {
        "topicName": "Browser Compatibility",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode"
      },
      {
        "topicName": "Progressive Enhancement",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement"
      }
    ],
    "assessmentId": 4,
    "assessmentUniqueId": 1762969936015,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the key difference between <pre>select</pre> with multiple attribute and <pre>datalist</pre>?",
      "options": {
        "A": "Datalist allows custom values, select multiple only allows predefined options",
        "B": "Select multiple has better browser support",
        "C": "Datalist requires JavaScript to function",
        "D": "Select multiple provides better accessibility"
      },
      "correct": "A",
      "explanation": "<pre>datalist</pre> provides suggestions but allows users to enter custom values, while <pre>select multiple</pre> restricts users to only the predefined options in the list.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "User Experience"
        ]
      }
    },
    {
      "id": 2,
      "question": "What accessibility role does a <pre>fieldset</pre> with <pre>legend</pre> provide for screen readers?",
      "options": {
        "A": "It creates a group role with an accessible name",
        "B": "It automatically focuses the first field",
        "C": "It provides keyboard navigation between fields",
        "D": "It announces field validation errors"
      },
      "correct": "B",
      "explanation": "A <pre>fieldset</pre> with <pre>legend</pre> creates a semantic group that screen readers announce, helping users understand the relationship between related form controls.",
      "topic": {
        "topics": [
          "Accessibility",
          "Semantic HTML"
        ]
      }
    },
    {
      "id": 3,
      "question": "What happens when you use <pre>formnovalidate</pre> on a submit button in a form with required fields?",
      "options": {
        "A": "The form submits without checking required fields",
        "B": "Only server-side validation occurs",
        "C": "The form shows validation errors but still submits",
        "D": "The button becomes disabled until fields are valid"
      },
      "correct": "C",
      "explanation": "<pre>formnovalidate</pre> bypasses client-side validation, allowing form submission even when required fields are empty or validation rules aren't met.",
      "topic": {
        "topics": [
          "Form Validation",
          "Advanced Form Controls"
        ]
      }
    },
    {
      "id": 4,
      "question": "How does the <pre>output</pre> element differ from a read-only input for displaying calculations?",
      "options": {
        "A": "Output has semantic meaning for calculated results",
        "B": "Output automatically updates without JavaScript",
        "C": "Output provides better visual styling",
        "D": "Output values are included in form submission"
      },
      "correct": "C",
      "explanation": "<pre>output</pre> semantically represents the result of a calculation, making it clear to browsers and assistive technologies that the value is computed rather than user-input.",
      "topic": {
        "topics": [
          "Semantic HTML",
          "Advanced Form Controls"
        ]
      }
    },
    {
      "id": 5,
      "question": "When should you use <pre>progress</pre> versus <pre>meter</pre> for displaying file upload status?",
      "options": {
        "A": "Use progress for completion percentage, meter for speed",
        "B": "They are interchangeable for file uploads",
        "C": "Use meter for uploads, progress for downloads",
        "D": "Use progress for ongoing processes, meter for measured values"
      },
      "correct": "D",
      "explanation": "Use <pre>progress</pre> for file upload completion (ongoing process) and <pre>meter</pre> for measured values like upload speed or storage usage within a known range.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "User Experience"
        ]
      }
    },
    {
      "id": 6,
      "question": "What is the benefit of using the <pre>form</pre> attribute to associate inputs outside their parent form?",
      "options": {
        "A": "It enables flexible component-based form layouts",
        "B": "It improves form submission performance",
        "C": "It allows cross-origin form associations",
        "D": "It enables automatic input validation"
      },
      "correct": "A",
      "explanation": "The <pre>form</pre> attribute allows inputs to be placed anywhere in the HTML while still belonging to a form, enabling modular and flexible form layouts.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 7,
      "question": "What happens when multiple submit buttons in a form have different <pre>formmethod</pre> attributes?",
      "options": {
        "A": "Each button uses its specified HTTP method when clicked",
        "B": "All buttons default to the form's method attribute",
        "C": "The browser shows a validation error",
        "D": "The form uses the method from the first button"
      },
      "correct": "B",
      "explanation": "Each submit button with <pre>formmethod</pre> will use its specified HTTP method (GET, POST, etc.) when clicked, allowing different operations from the same form.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "User Experience"
        ]
      }
    },
    {
      "id": 8,
      "question": "How can you provide fallback for <pre>datalist</pre> in older browsers?",
      "options": {
        "A": "Provide a separate select element as alternative",
        "B": "Use JavaScript to detect support and polyfill",
        "C": "Hide datalist and show text input only",
        "D": "Use CSS to style select like datalist"
      },
      "correct": "A",
      "explanation": "For progressive enhancement, provide a <pre>select</pre> element that's shown when datalist isn't supported, or use JavaScript to enhance the experience.",
      "topic": {
        "topics": [
          "Progressive Enhancement",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the purpose of the <pre>for</pre> attribute on an <pre>output</pre> element?",
      "options": {
        "A": "It specifies which input elements the output depends on",
        "B": "It links the output to a form element",
        "C": "It defines the output's maximum value",
        "D": "It associates the output with a label"
      },
      "correct": "A",
      "explanation": "The <pre>for</pre> attribute on <pre>output</pre> specifies the IDs of input elements that contribute to the calculation, establishing their relationship.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Semantic HTML"
        ]
      }
    },
    {
      "id": 10,
      "question": "What accessibility feature do <pre>progress</pre> and <pre>meter</pre> provide by default?",
      "options": {
        "A": "They announce value changes to screen readers",
        "B": "They provide built-in keyboard navigation",
        "C": "They have inherent semantic roles",
        "D": "They automatically focus when updated"
      },
      "correct": "C",
      "explanation": "Both elements have inherent ARIA roles (progressbar and meter) that screen readers understand, providing semantic meaning without additional attributes.",
      "topic": {
        "topics": [
          "Accessibility",
          "Advanced Form Controls"
        ]
      }
    },
    {
      "id": 11,
      "question": "What happens when you combine <pre>formaction</pre> and <pre>formnovalidate</pre> on a button?",
      "options": {
        "A": "Only formaction works, formnovalidate is ignored",
        "B": "The form submits to the custom URL without validation",
        "C": "The browser shows a conflict error",
        "D": "The form validates then submits to custom URL"
      },
      "correct": "B",
      "explanation": "When combined, <pre>formaction</pre> specifies the submission URL and <pre>formnovalidate</pre> disables validation for that submission path.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Form Validation"
        ]
      }
    },
    {
      "id": 12,
      "question": "How should you style the different states of a <pre>meter</pre> element?",
      "options": {
        "A": "Wrap meter in span with state classes",
        "B": "Apply JavaScript to toggle CSS classes",
        "C": "Use the value attribute with CSS attribute selectors",
        "D": "Use CSS pseudo-classes for optimal, suboptimal ranges"
      },
      "correct": "A",
      "explanation": "Use CSS pseudo-elements like <pre>::-webkit-meter-optimum-value</pre> and <pre>::-moz-meter-bar</pre> to style different value ranges in supported browsers.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the correct way to make a <pre>fieldset</pre> accessible when it contains radio buttons?",
      "options": {
        "A": "Place each radio in its own fieldset",
        "B": "Add role=\"radiogroup\" to the fieldset",
        "C": "Use legend to describe the radio group purpose",
        "D": "Use aria-labelledby on each radio"
      },
      "correct": "C",
      "explanation": "A <pre>legend</pre> within the <pre>fieldset</pre> provides the accessible name for the radio button group, describing what the selection represents.",
      "topic": {
        "topics": [
          "Accessibility",
          "Advanced Form Controls"
        ]
      }
    },
    {
      "id": 14,
      "question": "What happens when an input with <pre>form</pre> attribute references a non-existent form ID?",
      "options": {
        "A": "The input is not associated with any form",
        "B": "The browser creates a new form automatically",
        "C": "The input uses the nearest parent form",
        "D": "The page throws a JavaScript error"
      },
      "correct": "D",
      "explanation": "If the <pre>form</pre> attribute references a non-existent ID, the input won't be associated with any form and won't be submitted with form data.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 15,
      "question": "How does <pre>formmethod=\"dialog\"</pre> affect form submission?",
      "options": {
        "A": "It submits the form via AJAX instead of page reload",
        "B": "It closes the form's parent dialog without submitting",
        "C": "It triggers the form's onsubmit event only",
        "D": "It prevents any form submission"
      },
      "correct": "B",
      "explanation": "<pre>formmethod=\"dialog\"</pre> closes a dialog form without traditional submission, typically used in <pre>dialog</pre> elements to close without data processing.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "User Experience"
        ]
      }
    },
    {
      "id": 16,
      "question": "What is the purpose of the <pre>labels</pre> property on an <pre>output</pre> element?",
      "options": {
        "A": "It provides accessible names for the output element",
        "B": "Output elements don't have a labels property",
        "C": "It specifies which inputs contribute to the output",
        "D": "It associates the output with form labels"
      },
      "correct": "B",
      "explanation": "<pre>output</pre> elements don't have a <pre>labels</pre> property like form controls. Use <pre>aria-labelledby</pre> or <pre>aria-label</pre> for accessible names.",
      "topic": {
        "topics": [
          "Accessibility",
          "Advanced Form Controls"
        ]
      }
    },
    {
      "id": 17,
      "question": "How can you update a <pre>progress</pre> element's value dynamically?",
      "options": {
        "A": "Modify the value attribute using setAttribute",
        "B": "Use the updateProgress method",
        "C": "Change the value property directly",
        "D": "Trigger a progress event"
      },
      "correct": "C",
      "explanation": "Update a <pre>progress</pre> element by setting its <pre>value</pre> property directly: <pre>element.value = newValue</pre>.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "User Experience"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the benefit of using <pre>fieldset</pre> over CSS grouping for form sections?",
      "options": {
        "A": "It enables client-side validation for the group",
        "B": "It automatically applies CSS styles to grouped elements",
        "C": "It improves form submission performance",
        "D": "It provides semantic structure and built-in accessibility"
      },
      "correct": "D",
      "explanation": "<pre>fieldset</pre> provides semantic meaning and built-in accessibility features that CSS grouping alone cannot provide, helping assistive technologies understand form structure.",
      "topic": {
        "topics": [
          "Semantic HTML",
          "Accessibility"
        ]
      }
    },
    {
      "id": 19,
      "question": "What happens when a <pre>datalist</pre> contains duplicate option values?",
      "options": {
        "A": "The browser shows duplicate suggestions",
        "B": "Only the first occurrence is shown",
        "C": "The datalist fails to load",
        "D": "The browser removes duplicates automatically"
      },
      "correct": "D",
      "explanation": "Browsers typically deduplicate <pre>datalist</pre> options, showing each unique value only once in the suggestions list.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 20,
      "question": "How does the <pre>form</pre> attribute affect input validation?",
      "options": {
        "A": "It disables validation for that input",
        "B": "It enables cross-form validation",
        "C": "It has no effect on validation",
        "D": "It associates the input with the form's validation rules"
      },
      "correct": "D",
      "explanation": "The <pre>form</pre> attribute associates the input with a form's validation constraints, making it participate in the form's validation process.",
      "topic": {
        "topics": [
          "Form Validation",
          "Advanced Form Controls"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the correct way to make a <pre>meter</pre> element accessible?",
      "options": {
        "A": "Add aria-valuenow, aria-valuemin, aria-valuemax",
        "B": "Use role=\"meter\" with ARIA attributes",
        "C": "Provide a visible label using label element",
        "D": "Meter elements are accessible by default"
      },
      "correct": "C",
      "explanation": "While <pre>meter</pre> has built-in semantics, provide a visible label using <pre>label</pre> with <pre>for</pre> attribute or <pre>aria-labelledby</pre> for clarity.",
      "topic": {
        "topics": [
          "Accessibility",
          "Advanced Form Controls"
        ]
      }
    },
    {
      "id": 22,
      "question": "What happens when you use <pre>formaction</pre> with a relative URL?",
      "options": {
        "A": "The browser converts it to absolute URL",
        "B": "It resolves relative to the form's action URL",
        "C": "It resolves relative to the current page URL",
        "D": "Relative URLs are not allowed in formaction"
      },
      "correct": "C",
      "explanation": "Relative URLs in <pre>formaction</pre> resolve relative to the current document's URL, same as regular relative URLs in HTML.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 23,
      "question": "How can you create a multi-step form using the form attribute?",
      "options": {
        "A": "Use fieldset for each step with form attribute",
        "B": "Use multiple forms with the same name attribute",
        "C": "Create separate forms and combine data with JavaScript",
        "D": "Place each step's inputs outside forms with same form ID"
      },
      "correct": "A",
      "explanation": "Use the <pre>form</pre> attribute to associate inputs from different steps with a single form element, enabling progressive disclosure while maintaining single form submission.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "User Experience"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is the purpose of the <pre>name</pre> attribute on an <pre>output</pre> element?",
      "options": {
        "A": "It provides an identifier for the output element",
        "B": "It includes the output value in form submission data",
        "C": "It associates the output with input elements",
        "D": "It sets the accessible name for screen readers"
      },
      "correct": "A",
      "explanation": "The <pre>name</pre> attribute on <pre>output</pre> provides an identifier that can be used to reference the element in JavaScript or include its value in form data.",
      "topic": {
        "topics": [
          "Advanced Form Controls",
          "Form Validation"
        ]
      }
    },
    {
      "id": 25,
      "question": "What progressive enhancement strategy works best for <pre>progress</pre> elements?",
      "options": {
        "A": "Use meter as fallback for progress",
        "B": "Use JavaScript to create animated divs",
        "C": "Hide progress in unsupported browsers",
        "D": "Provide a fallback text showing percentage"
      },
      "correct": "D",
      "explanation": "Provide text content inside the <pre>progress</pre> element that shows the percentage or status, which displays in browsers that don't support the element.",
      "topic": {
        "topics": [
          "Progressive Enhancement",
          "Browser Compatibility"
        ]
      }
    }
  ]
}
