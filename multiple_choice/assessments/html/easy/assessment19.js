module.exports = {
  "metadata": {
    "title": "HTML Comments and Code Organization Best Practices",
    "description": "Learn proper commenting techniques, code organization strategies, and when to use comments versus semantic HTML for clean, maintainable code.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Comment Syntax",
      "Commenting Best Practices",
      "Code Readability",
      "Semantic HTML vs Comments",
      "Conditional Comments",
      "Code Organization",
      "Maintenance Strategies",
      "Documentation",
      "Team Collaboration",
      "Code Quality"
    ],
    "topicLinks": [
      {
        "topicName": "Comment Syntax",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments"
      },
      {
        "topicName": "Commenting Best Practices",
        "refLink": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML#html_comments"
      },
      {
        "topicName": "Code Readability",
        "refLink": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML"
      },
      {
        "topicName": "Semantic HTML vs Comments",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
      },
      {
        "topicName": "Conditional Comments",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode"
      },
      {
        "topicName": "Code Organization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
      },
      {
        "topicName": "Maintenance Strategies",
        "refLink": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML#general_guidelines"
      },
      {
        "topicName": "Documentation",
        "refLink": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide"
      },
      {
        "topicName": "Team Collaboration",
        "refLink": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML#consistency"
      },
      {
        "topicName": "Code Quality",
        "refLink": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML#readability"
      }
    ],
    "assessmentId": 19,
    "assessmentUniqueId": 1762957678998,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the correct syntax for an HTML comment?",
      "options": {
        "A": "<pre><!-- This is a comment --></pre>",
        "B": "<pre>/* This is a comment */</pre>",
        "C": "<pre>// This is a comment</pre>",
        "D": "<pre># This is a comment</pre>"
      },
      "correct": "A",
      "explanation": "HTML comments use the <pre><!-- --></pre> syntax, which is different from JavaScript (<pre>//</pre> or <pre>/* */</pre>) or other programming languages.",
      "topic": {
        "topics": [
          "Comment Syntax",
          "Code Quality"
        ]
      }
    },
    {
      "id": 2,
      "question": "Why should you avoid over-commenting in HTML?",
      "options": {
        "A": "Too many comments make code harder to read",
        "B": "Comments slow down page loading",
        "C": "Comments are visible to website visitors",
        "D": "Browsers ignore comments after 100 lines"
      },
      "correct": "A",
      "explanation": "Excessive comments can clutter code and make it harder to read. Comments should provide value, not state the obvious or repeat what's clear from the code itself.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Code Readability"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is a good use case for HTML comments?",
      "options": {
        "A": "Explaining complex layout sections",
        "B": "Describing what every div does",
        "C": "Repeating the element name",
        "D": "Commenting out entire pages"
      },
      "correct": "A",
      "explanation": "Comments are most valuable for explaining complex sections, marking important landmarks, or providing context that isn't obvious from the code structure alone.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Code Organization"
        ]
      }
    },
    {
      "id": 4,
      "question": "How can you temporarily disable a section of HTML without deleting it?",
      "options": {
        "A": "Wrap it in <pre><disabled></pre> tags",
        "B": "Use CSS display: none",
        "C": "Add the hidden attribute",
        "D": "Comment out the section"
      },
      "correct": "D",
      "explanation": "Wrapping code in comment tags <pre><!-- --></pre> is the standard way to temporarily disable HTML sections while preserving them for future use.",
      "topic": {
        "topics": [
          "Comment Syntax",
          "Maintenance Strategies"
        ]
      }
    },
    {
      "id": 5,
      "question": "What was the original purpose of conditional comments?",
      "options": {
        "A": "To add comments only on weekends",
        "B": "To create comment forms",
        "C": "To serve different HTML to different browsers",
        "D": "To validate comment syntax"
      },
      "correct": "C",
      "explanation": "Conditional comments were primarily used to serve specific HTML or CSS to different versions of Internet Explorer, though they're now deprecated.",
      "topic": {
        "topics": [
          "Conditional Comments",
          "Code Organization"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which is better for indicating a page header: comments or semantic HTML?",
      "options": {
        "A": "Comments like <pre><!-- Header section --></pre>",
        "B": "Semantic <pre><header></pre> element",
        "C": "Both are equally good",
        "D": "Neither - use div with class"
      },
      "correct": "B",
      "explanation": "Semantic HTML elements like <pre><header></pre> provide built-in meaning that's understood by browsers and assistive technologies, making comments unnecessary for basic structure.",
      "topic": {
        "topics": [
          "Semantic HTML vs Comments",
          "Code Quality"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is a good practice for organizing large HTML files?",
      "options": {
        "A": "Put all code in one long section",
        "B": "Use comments to separate logical sections",
        "C": "Create multiple HTML files for each element",
        "D": "Avoid any organization to keep files small"
      },
      "correct": "B",
      "explanation": "Using comments to separate logical sections (like header, main content, sidebar, footer) makes large files more manageable and readable.",
      "topic": {
        "topics": [
          "Code Organization",
          "Code Readability"
        ]
      }
    },
    {
      "id": 8,
      "question": "Why should you avoid putting sensitive information in comments?",
      "options": {
        "A": "Comments are encrypted differently",
        "B": "Comments are visible in page source",
        "C": "Comments get deleted automatically",
        "D": "Comments cause security warnings"
      },
      "correct": "B",
      "explanation": "HTML comments are visible to anyone who views the page source, so they should never contain passwords, API keys, or other sensitive information.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Code Quality"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the main benefit of consistent code organization?",
      "options": {
        "A": "Faster page loading",
        "B": "Easier maintenance and collaboration",
        "C": "Smaller file sizes",
        "D": "Automatic SEO improvement"
      },
      "correct": "B",
      "explanation": "Consistent organization makes code easier to understand, maintain, and collaborate on, especially in team environments or when returning to code after time away.",
      "topic": {
        "topics": [
          "Code Organization",
          "Team Collaboration"
        ]
      }
    },
    {
      "id": 10,
      "question": "How do you write a multi-line comment in HTML?",
      "options": {
        "A": "<pre>/* Multiple line comment */</pre>",
        "B": "<pre>// Multiple // line // comment</pre>",
        "C": "<pre><!-- Multiple line comment --></pre>",
        "D": "<pre><comment>Multiple line comment</comment></pre>"
      },
      "correct": "C",
      "explanation": "HTML uses the same <pre><!-- --></pre> syntax for both single-line and multi-line comments. The comment continues until the closing <pre>--></pre>.",
      "topic": {
        "topics": [
          "Comment Syntax",
          "Code Quality"
        ]
      }
    },
    {
      "id": 11,
      "question": "What should you do with old commented-out code?",
      "options": {
        "A": "Leave it for historical reference",
        "B": "Delete it if it's no longer needed",
        "C": "Move it to a separate archive file",
        "D": "Convert it to JavaScript comments"
      },
      "correct": "B",
      "explanation": "Old commented-out code should be deleted if it's no longer needed. Version control systems like Git preserve history, so you can always recover deleted code if necessary.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Maintenance Strategies"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which is an example of a good comment?",
      "options": {
        "A": "<pre><!-- Navigation menu for mobile devices --></pre>",
        "B": "<pre><!-- This is a div --></pre>",
        "C": "<pre><!-- Content goes here --></pre>",
        "D": "<pre><!-- This is HTML code --></pre>"
      },
      "correct": "A",
      "explanation": "Good comments provide context that isn't obvious from the code itself, like explaining why certain markup is used for specific devices or use cases.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Documentation"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the current status of conditional comments in modern browsers?",
      "options": {
        "A": "Fully supported in all browsers",
        "B": "Only work in Internet Explorer 10+",
        "C": "Work only in mobile browsers",
        "D": "Completely deprecated and ignored"
      },
      "correct": "D",
      "explanation": "Conditional comments were deprecated and removed from modern browsers. They only worked in older versions of Internet Explorer and should not be used in new projects.",
      "topic": {
        "topics": [
          "Conditional Comments",
          "Code Quality"
        ]
      }
    },
    {
      "id": 14,
      "question": "How can semantic HTML reduce the need for comments?",
      "options": {
        "A": "Semantic HTML automatically generates comments",
        "B": "Semantic elements are self-documenting",
        "C": "Browsers ignore comments in semantic elements",
        "D": "Semantic HTML hides comments from view"
      },
      "correct": "B",
      "explanation": "Semantic elements like <pre>nav</pre>, <pre>article</pre>, and <pre>footer</pre> clearly indicate their purpose, reducing the need for explanatory comments.",
      "topic": {
        "topics": [
          "Semantic HTML vs Comments",
          "Code Readability"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is a good practice for comment formatting?",
      "options": {
        "A": "Use inconsistent spacing",
        "B": "Be consistent with spacing and capitalization",
        "C": "Mix uppercase and lowercase randomly",
        "D": "Avoid any formatting rules"
      },
      "correct": "B",
      "explanation": "Consistent formatting (like always using one space after <!-- or keeping comments at consistent indentation levels) improves readability and professionalism.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Team Collaboration"
        ]
      }
    },
    {
      "id": 16,
      "question": "Why might you use comments during development?",
      "options": {
        "A": "To increase page loading speed",
        "B": "To make the file larger",
        "C": "To hide elements from search engines",
        "D": "To mark TODO items or temporary fixes"
      },
      "correct": "D",
      "explanation": "Comments are useful for marking temporary code, TODO items, or sections that need further work during the development process.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Maintenance Strategies"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is wrong with this comment: <pre><!--<div>Content</div>--></pre>?",
      "options": {
        "A": "The div should be outside comments",
        "B": "Comments cannot contain HTML tags",
        "C": "It uses the wrong comment syntax",
        "D": "Nothing - it's perfectly valid"
      },
      "correct": "D",
      "explanation": "This is actually valid HTML. Comments can contain any content, including HTML tags, and browsers will ignore everything between <!-- and -->.",
      "topic": {
        "topics": [
          "Comment Syntax",
          "Code Quality"
        ]
      }
    },
    {
      "id": 18,
      "question": "How should you handle comments in production code?",
      "options": {
        "A": "Keep only comments that provide value",
        "B": "Remove all comments to improve performance",
        "C": "Add more comments for documentation",
        "D": "Convert comments to JavaScript"
      },
      "correct": "A",
      "explanation": "In production, keep comments that provide meaningful context, explain complex logic, or help with maintenance, but remove outdated or trivial comments.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Code Organization"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the advantage of using section comments in team projects?",
      "options": {
        "A": "They prevent CSS from loading",
        "B": "They make HTML validate better",
        "C": "They help team members navigate code quickly",
        "D": "They automatically generate documentation"
      },
      "correct": "C",
      "explanation": "Section comments act as landmarks that help team members quickly understand the code structure and find specific sections without reading everything.",
      "topic": {
        "topics": [
          "Code Organization",
          "Team Collaboration"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which comment style is recommended for marking the end of large sections?",
      "options": {
        "A": "<pre><!-- end section --></pre>",
        "B": "Any consistent style that's readable",
        "C": "<pre><!-- ///////////// --></pre>",
        "D": "<pre><!-- ============ --></pre>"
      },
      "correct": "B",
      "explanation": "The specific style matters less than consistency. Choose a clear, readable style for end comments and use it consistently throughout the project.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Code Readability"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is a potential downside of too many comments?",
      "options": {
        "A": "They can become outdated and misleading",
        "B": "They increase file size significantly",
        "C": "They prevent JavaScript execution",
        "D": "They cause browser compatibility issues"
      },
      "correct": "A",
      "explanation": "When code changes but comments aren't updated, they can become misleading and actually make the code harder to understand than having no comments at all.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Maintenance Strategies"
        ]
      }
    },
    {
      "id": 22,
      "question": "How can you quickly comment multiple lines in most code editors?",
      "options": {
        "A": "Copy and paste from another file",
        "B": "Manually type <!-- on each line",
        "C": "Use a separate commenting tool",
        "D": "Select lines and use Ctrl+/ or Cmd+/"
      },
      "correct": "D",
      "explanation": "Most modern code editors support keyboard shortcuts (like Ctrl+/ or Cmd+/) to quickly comment/uncomment selected lines of HTML.",
      "topic": {
        "topics": [
          "Comment Syntax",
          "Code Organization"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the purpose of using visual separators in comments?",
      "options": {
        "A": "To make comments more decorative",
        "B": "To increase comment character count",
        "C": "To clearly distinguish major sections",
        "D": "To trigger special browser rendering"
      },
      "correct": "C",
      "explanation": "Visual separators (like lines of dashes or equal signs) help distinguish major sections and make the document structure more visually apparent when scanning code.",
      "topic": {
        "topics": [
          "Code Organization",
          "Code Readability"
        ]
      }
    },
    {
      "id": 24,
      "question": "When should you prefer semantic elements over explanatory comments?",
      "options": {
        "A": "When you want to hide content",
        "B": "Only for screen reader users",
        "C": "Always - semantic HTML is more meaningful",
        "D": "When comments would be too long"
      },
      "correct": "C",
      "explanation": "Semantic HTML should always be preferred over comments because it provides actual structure and meaning that's understood by browsers, assistive technologies, and developers.",
      "topic": {
        "topics": [
          "Semantic HTML vs Comments",
          "Code Quality"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is a good practice for comment content?",
      "options": {
        "A": "Use technical jargon exclusively",
        "B": "Describe every HTML element in detail",
        "C": "Write comments that explain 'why' not just 'what'",
        "D": "Write comments in multiple languages"
      },
      "correct": "C",
      "explanation": "Good comments explain the reasoning behind code decisions (the 'why') rather than just describing what the code does (the 'what'), which is usually obvious from the code itself.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Documentation"
        ]
      }
    },
    {
      "id": 26,
      "question": "How do comments affect website performance?",
      "options": {
        "A": "They have minimal impact on performance",
        "B": "They significantly slow down page loading",
        "C": "They double the memory usage",
        "D": "They prevent CSS from caching"
      },
      "correct": "A",
      "explanation": "HTML comments have minimal impact on performance since they're ignored by browsers during rendering. The main consideration is file size, which is usually negligible.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Code Quality"
        ]
      }
    },
    {
      "id": 27,
      "question": "What should you avoid in comments for international teams?",
      "options": {
        "A": "Using only one language if team is multilingual",
        "B": "Writing comments that are too short",
        "C": "Using consistent formatting",
        "D": "Explaining complex sections"
      },
      "correct": "A",
      "explanation": "In international teams, avoid writing comments in a language that not all team members understand. Use a common language or keep comments simple and clear.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Team Collaboration"
        ]
      }
    },
    {
      "id": 28,
      "question": "What is the benefit of using a consistent comment header format?",
      "options": {
        "A": "It validates HTML better",
        "B": "It improves SEO ranking",
        "C": "It changes comment color in browsers",
        "D": "It makes automated documentation possible"
      },
      "correct": "D",
      "explanation": "Consistent comment headers can be parsed by documentation tools and help maintain standardized documentation across projects and team members.",
      "topic": {
        "topics": [
          "Documentation",
          "Team Collaboration"
        ]
      }
    },
    {
      "id": 29,
      "question": "Why is it important to remove debug comments before deployment?",
      "options": {
        "A": "They use special characters that break validation",
        "B": "Debug comments can expose internal logic",
        "C": "Browsers display debug comments to users",
        "D": "Debug comments prevent CSS loading"
      },
      "correct": "B",
      "explanation": "Debug comments might reveal implementation details, temporary fixes, or internal logic that shouldn't be exposed in production environments.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Maintenance Strategies"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the best approach to learning good commenting practices?",
      "options": {
        "A": "Read code from experienced developers",
        "B": "Always write maximum comments",
        "C": "Never use comments to avoid mistakes",
        "D": "Use AI to generate all comments"
      },
      "correct": "A",
      "explanation": "Studying well-commented code from experienced developers and established projects is one of the best ways to learn effective commenting practices and styles.",
      "topic": {
        "topics": [
          "Commenting Best Practices",
          "Code Quality"
        ]
      }
    }
  ]
}
