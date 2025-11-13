module.exports = {
  "metadata": {
    "title": "Advanced Semantic HTML5 Elements",
    "description": "Test your understanding of semantic HTML5 elements for better accessibility, SEO, and document structure.",
    "difficulty": "medium",
    "domain": "html",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "Semantic HTML5",
      "Accessibility",
      "Document Structure",
      "Text-level Semantics",
      "Interactive Elements",
      "Code Representation",
      "SEO Optimization",
      "Browser Compatibility"
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
        "topicName": "Document Structure",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning"
      },
      {
        "topicName": "Text-level Semantics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics"
      },
      {
        "topicName": "Interactive Elements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#interactive_elements"
      },
      {
        "topicName": "Code Representation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content"
      },
      {
        "topicName": "SEO Optimization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
      },
      {
        "topicName": "Browser Compatibility",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#browser_compatibility"
      }
    ],
    "assessmentId": 5,
    "assessmentUniqueId": 1762970604431,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the semantic purpose of the <pre>datetime</pre> attribute in the <pre>time</pre> element?",
      "options": {
        "A": "It enables date calculations in JavaScript",
        "B": "It sets the timezone for the displayed date",
        "C": "It provides machine-readable timestamp for human-readable date",
        "D": "It formats the date for different locales"
      },
      "correct": "C",
      "explanation": "The <pre>datetime</pre> attribute provides a machine-readable timestamp while the element content shows human-readable format. This helps search engines and scripts understand the exact time.",
      "topic": {
        "topics": [
          "Semantic HTML5",
          "SEO Optimization"
        ]
      }
    },
    {
      "id": 2,
      "question": "When should you use the <pre>mark</pre> element versus <pre>strong</pre>?",
      "options": {
        "A": "Use mark for important text, strong for highlighted text",
        "B": "Use mark for search highlights, strong for importance",
        "C": "They are interchangeable in modern HTML",
        "D": "Use mark for code, strong for regular text"
      },
      "correct": "A",
      "explanation": "<pre>mark</pre> indicates text highlighted for reference (like search results), while <pre>strong</pre> indicates text with strong importance or urgency.",
      "topic": {
        "topics": [
          "Text-level Semantics",
          "Accessibility"
        ]
      }
    },
    {
      "id": 3,
      "question": "What accessibility feature do <pre>details</pre> and <pre>summary</pre> provide by default?",
      "options": {
        "A": "Built-in keyboard navigation and screen reader support",
        "B": "Automatic ARIA expanded states",
        "C": "Focus management for expanded content",
        "D": "Voice control compatibility"
      },
      "correct": "A",
      "explanation": "These elements provide native expand/collapse functionality with built-in keyboard navigation (Enter/Space) and screen reader announcements without JavaScript.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Accessibility"
        ]
      }
    },
    {
      "id": 4,
      "question": "What is the correct way to make a <pre>dialog</pre> accessible when opened?",
      "options": {
        "A": "Use JavaScript to trap focus inside dialog",
        "B": "Add role=\"dialog\" and aria-hidden=\"false\"",
        "C": "Set tabindex=\"0\" on the dialog element",
        "D": "Use showModal() and ensure focus moves to dialog"
      },
      "correct": "A",
      "explanation": "Use <pre>showModal()</pre> which automatically traps focus, adds backdrop, and makes the dialog top-layer. Always provide an accessible name with aria-labelledby.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Accessibility"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the semantic purpose of the <pre>abbr</pre> element?",
      "options": {
        "A": "It defines abbreviations and provides expansion via title",
        "B": "It creates tooltips for any text content",
        "C": "It enables screen reader pronunciation hints",
        "D": "It marks text as abbreviated for styling"
      },
      "correct": "D",
      "explanation": "<pre>abbr</pre> represents an abbreviation or acronym. Use the <pre>title</pre> attribute to provide the full expansion, which helps users and screen readers.",
      "topic": {
        "topics": [
          "Text-level Semantics",
          "Accessibility"
        ]
      }
    },
    {
      "id": 6,
      "question": "What content should be placed inside the <pre>address</pre> element?",
      "options": {
        "A": "Contact information for the document author or article",
        "B": "Any physical address mentioned in the content",
        "C": "Email addresses and phone numbers only",
        "D": "Geographic coordinates for map integration"
      },
      "correct": "A",
      "explanation": "<pre>address</pre> should contain contact information for the document's author or the article's author, not every address mentioned in content.",
      "topic": {
        "topics": [
          "Document Structure",
          "Semantic HTML5"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the difference between <pre>cite</pre> and <pre>blockquote</pre>?",
      "options": {
        "A": "blockquote for quotations, cite for source attribution",
        "B": "cite is for titles, blockquote for quotes",
        "C": "They are used together for all quotations",
        "D": "cite for inline quotes, blockquote for block quotes"
      },
      "correct": "B",
      "explanation": "<pre>blockquote</pre> represents extended quotations, while <pre>cite</pre> represents the title of a work being referenced or the source of a quotation.",
      "topic": {
        "topics": [
          "Text-level Semantics",
          "Semantic HTML5"
        ]
      }
    },
    {
      "id": 8,
      "question": "When should you use <pre>code</pre> versus <pre>pre</pre> for code examples?",
      "options": {
        "A": "code for JavaScript, pre for HTML",
        "B": "code for inline code, pre for code blocks with formatting",
        "C": "pre for syntax highlighting, code for plain code",
        "D": "They serve identical purposes"
      },
      "correct": "B",
      "explanation": "Use <pre>code</pre> for inline code snippets and <pre>pre</pre> for code blocks that need whitespace preservation. Often use them together.",
      "topic": {
        "topics": [
          "Code Representation",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the purpose of the <pre>kbd</pre> element?",
      "options": {
        "A": "It represents user keyboard input",
        "B": "It creates keyboard shortcuts for navigation",
        "C": "It enables keyboard event handling",
        "D": "It styles text to look like keyboard keys"
      },
      "correct": "D",
      "explanation": "<pre>kbd</pre> represents user keyboard input, such as keyboard shortcuts or keys to press. It helps distinguish actual keys from other text.",
      "topic": {
        "topics": [
          "Code Representation",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 10,
      "question": "What does the <pre>samp</pre> element represent semantically?",
      "options": {
        "A": "Sample output from a computer program",
        "B": "Code samples for documentation",
        "C": "Example user input values",
        "D": "Template content for reuse"
      },
      "correct": "B",
      "explanation": "<pre>samp</pre> represents sample output from a computer program, such as console output or program results, distinguishing it from user input or code.",
      "topic": {
        "topics": [
          "Code Representation",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the correct usage of the <pre>var</pre> element?",
      "options": {
        "A": "It enables dynamic content substitution",
        "B": "It creates CSS custom properties",
        "C": "It defines JavaScript variables in HTML",
        "D": "It represents variables in mathematical or programming contexts"
      },
      "correct": "D",
      "explanation": "<pre>var</pre> represents variables in mathematical expressions or programming context. It typically renders in italics to distinguish from surrounding text.",
      "topic": {
        "topics": [
          "Code Representation",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 12,
      "question": "What accessibility consideration is important for <pre>details</pre> elements?",
      "options": {
        "A": "Use JavaScript for keyboard navigation",
        "B": "Add ARIA expanded state manually",
        "C": "Ensure content is visible to screen readers when closed",
        "D": "Provide accessible name for the summary element"
      },
      "correct": "D",
      "explanation": "Ensure the <pre>summary</pre> element has clear, descriptive text that serves as an accessible name for the disclosure widget.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Accessibility"
        ]
      }
    },
    {
      "id": 13,
      "question": "How should you handle browser compatibility for the <pre>dialog</pre> element?",
      "options": {
        "A": "Use polyfill and feature detection",
        "B": "Hide dialog in unsupported browsers",
        "C": "Use div with ARIA roles as fallback",
        "D": "Require modern browsers only"
      },
      "correct": "C",
      "explanation": "Use feature detection and provide a fallback using <pre>div</pre> with ARIA roles for browsers that don't support native <pre>dialog</pre>.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the semantic benefit of using <pre>time</pre> with datetime?",
      "options": {
        "A": "Provides countdown timer functionality",
        "B": "Automatically formats dates for user's locale",
        "C": "Enables date-based searching and sorting",
        "D": "Enables calendar integration"
      },
      "correct": "C",
      "explanation": "Machine-readable dates enable search engines to understand temporal context and allow scripts to perform date calculations and sorting.",
      "topic": {
        "topics": [
          "Semantic HTML5",
          "SEO Optimization"
        ]
      }
    },
    {
      "id": 15,
      "question": "When should you avoid using the <pre>mark</pre> element?",
      "options": {
        "A": "When highlighting for syntax purposes",
        "B": "When highlighting search terms in results",
        "C": "When the highlighting is purely decorative",
        "D": "When emphasizing quotes in text"
      },
      "correct": "C",
      "explanation": "Avoid <pre>mark</pre> for purely decorative highlighting. Use CSS instead. Reserve it for content highlighted for reference relevance.",
      "topic": {
        "topics": [
          "Text-level Semantics",
          "Accessibility"
        ]
      }
    },
    {
      "id": 16,
      "question": "What is the correct structure for a citation with <pre>blockquote</pre> and <pre>cite</pre>?",
      "options": {
        "A": "blockquote wraps quote, cite inside for source",
        "B": "cite wraps blockquote for attribution",
        "C": "Place cite after blockquote as sibling",
        "D": "Use cite attribute on blockquote"
      },
      "correct": "C",
      "explanation": "Place <pre>cite</pre> inside <pre>blockquote</pre>, typically in a <pre>footer</pre> element, to associate the source with the quotation.",
      "topic": {
        "topics": [
          "Text-level Semantics",
          "Document Structure"
        ]
      }
    },
    {
      "id": 17,
      "question": "How does the <pre>address</pre> element affect document outline?",
      "options": {
        "A": "It doesn't create a section in the document outline",
        "B": "It creates a new section for contact information",
        "C": "It affects the nearest parent section",
        "D": "It only affects outline when inside header"
      },
      "correct": "A",
      "explanation": "<pre>address</pre> is a sectioning root and doesn't contribute to the document outline. It's scoped to its nearest sectioning content.",
      "topic": {
        "topics": [
          "Document Structure",
          "Semantic HTML5"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the purpose of the <pre>open</pre> attribute on <pre>details</pre>?",
      "options": {
        "A": "It allows multiple details to be open",
        "B": "It enables the details element",
        "C": "It makes the content visible by default",
        "D": "It triggers animation on open"
      },
      "correct": "A",
      "explanation": "The <pre>open</pre> attribute makes the <pre>details</pre> content visible by default when the page loads, without user interaction.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 19,
      "question": "What keyboard interaction does <pre>dialog</pre> provide with showModal()?",
      "options": {
        "A": "Esc key closes dialog, Tab traps focus",
        "B": "Enter submits form, Space expands",
        "C": "Arrow keys navigate options",
        "D": "No built-in keyboard support"
      },
      "correct": "A",
      "explanation": "<pre>showModal()</pre> automatically enables Esc to close and traps focus within the dialog using the top-layer and inert features.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Accessibility"
        ]
      }
    },
    {
      "id": 20,
      "question": "How should you mark up an abbreviation that appears multiple times?",
      "options": {
        "A": "Use abbr with title on first occurrence only",
        "B": "Use CSS tooltips instead of abbr",
        "C": "Use abbr only in a definitions list",
        "D": "Use abbr with title every time it appears"
      },
      "correct": "D",
      "explanation": "Use <pre>abbr</pre> with <pre>title</pre> on every occurrence to ensure accessibility whenever the abbreviation appears in content.",
      "topic": {
        "topics": [
          "Text-level Semantics",
          "Accessibility"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the correct usage of code elements for a multi-line code block?",
      "options": {
        "A": "pre element without code inside",
        "B": "code element with white-space: pre",
        "C": "Multiple code elements for each line",
        "D": "pre wrapped around code element"
      },
      "correct": "D",
      "explanation": "Wrap <pre>code</pre> inside <pre>pre</pre> for multi-line code blocks to preserve formatting and provide semantic meaning.",
      "topic": {
        "topics": [
          "Code Representation",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 22,
      "question": "What happens when you nest <pre>details</pre> elements?",
      "options": {
        "A": "They work independently as separate disclosure widgets",
        "B": "They create an accordion pattern automatically",
        "C": "Only the parent details can be opened",
        "D": "Nested details are not allowed in HTML"
      },
      "correct": "B",
      "explanation": "Nested <pre>details</pre> elements work independently. Each maintains its own open/closed state without affecting others.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Browser Compatibility"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the semantic difference between <pre>abbr</pre> and <pre>dfn</pre>?",
      "options": {
        "A": "abbr for acronyms, dfn for abbreviations",
        "B": "abbr for abbreviations, dfn for term definitions",
        "C": "They are synonyms in HTML5",
        "D": "abbr for styling, dfn for semantics"
      },
      "correct": "B",
      "explanation": "<pre>abbr</pre> represents abbreviations/acronyms, while <pre>dfn</pre> represents the defining instance of a term in the document.",
      "topic": {
        "topics": [
          "Text-level Semantics",
          "Semantic HTML5"
        ]
      }
    },
    {
      "id": 24,
      "question": "How should you represent keyboard shortcuts in documentation?",
      "options": {
        "A": "Use kbd for each key, separate with plus signs",
        "B": "Use var for shortcut variables",
        "C": "Use samp for keyboard output",
        "D": "Use code element for entire shortcut"
      },
      "correct": "D",
      "explanation": "Use <pre>kbd</pre> for individual keys and separate with + or - to represent keyboard shortcuts like <pre>kbd>Ctrl</kbd>+<kbd>S</kbd></pre>.",
      "topic": {
        "topics": [
          "Code Representation",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the progressive enhancement approach for <pre>dialog</pre>?",
      "options": {
        "B": "Hide dialog in unsupported browsers",
        "C": "Use details/summary as fallback",
        "D": "Require JavaScript for all dialogs",
        "undefined": "Use feature detection and polyfill if needed"
      },
      "explanation": "Use feature detection to check for <pre>dialog</pre> support and load a polyfill for browsers that don't support the native element.",
      "topic": {
        "topics": [
          "Interactive Elements",
          "Browser Compatibility"
        ]
      }
    }
  ]
}
