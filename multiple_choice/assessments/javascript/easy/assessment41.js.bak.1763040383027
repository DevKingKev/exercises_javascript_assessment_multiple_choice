module.exports = {
  "metadata": {
    "title": "JavaScript Accessibility & Security Basics",
    "description": "Fundamental accessibility practices and security considerations for safe and inclusive web development.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Security best practices",
      "Accessibility fundamentals",
      "DOM safety",
      "User input handling",
      "Semantic HTML",
      "Cross-site scripting prevention",
      "Inclusive design"
    ],
    "topicLinks": [
      {
        "topicName": "Security best practices",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Security"
      },
      {
        "topicName": "Accessibility fundamentals",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility"
      },
      {
        "topicName": "DOM safety",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations"
      },
      {
        "topicName": "User input handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site"
      },
      {
        "topicName": "Semantic HTML",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
      },
      {
        "topicName": "Cross-site scripting prevention",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss"
      },
      {
        "topicName": "Inclusive design",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript"
      }
    ],
    "assessmentId": 41,
    "assessmentUniqueId": 1762788453491,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "Why should you avoid innerHTML for user-generated content?",
      "options": {
        "A": "It breaks CSS styling",
        "B": "It's slower than other methods",
        "C": "It doesn't work with modern JavaScript",
        "D": "It can lead to XSS attacks"
      },
      "correct": "D",
      "explanation": "innerHTML can execute malicious scripts from user input, creating cross-site scripting (XSS) vulnerabilities.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 2,
      "question": "What is a safer alternative to innerHTML for adding text content?",
      "options": {
        "A": "outerHTML",
        "B": "innerText",
        "C": "textContent",
        "D": "document.write"
      },
      "correct": "C",
      "explanation": "textContent safely inserts text without parsing HTML, preventing script execution from user input.",
      "topic": {
        "topics": [
          "DOM safety"
        ]
      }
    },
    {
      "id": 3,
      "question": "What should you always add to img elements for accessibility?",
      "options": {
        "A": "title attribute",
        "B": "alt attribute",
        "C": "srcset attribute",
        "D": "loading attribute"
      },
      "correct": "B",
      "explanation": "The alt attribute provides text descriptions for screen readers and when images fail to load.",
      "topic": {
        "topics": [
          "Accessibility fundamentals"
        ]
      }
    },
    {
      "id": 4,
      "question": "Why is it important to use semantic HTML elements?",
      "options": {
        "A": "They provide meaning and improve accessibility",
        "B": "They make pages load faster",
        "C": "They are required for JavaScript to work",
        "D": "They automatically style content"
      },
      "correct": "A",
      "explanation": "Semantic elements like header, nav, main, and footer provide structure that assistive technologies can understand.",
      "topic": {
        "topics": [
          "Semantic HTML"
        ]
      }
    },
    {
      "id": 5,
      "question": "What should you do before using user input in your application?",
      "options": {
        "A": "Convert it to uppercase",
        "B": "Validate and sanitize it",
        "C": "Store it in localStorage first",
        "D": "Display it immediately"
      },
      "correct": "B",
      "explanation": "Always validate input meets expected format and sanitize it to remove potentially harmful content.",
      "topic": {
        "topics": [
          "User input handling"
        ]
      }
    },
    {
      "id": 6,
      "question": "What is XSS?",
      "options": {
        "A": "XML security standards",
        "B": "Extra style sheets",
        "C": "Cross-site scripting attacks",
        "D": "Extended script syntax"
      },
      "correct": "C",
      "explanation": "XSS (Cross-site Scripting) is a security vulnerability where attackers inject malicious scripts into web pages.",
      "topic": {
        "topics": [
          "Cross-site scripting prevention"
        ]
      }
    },
    {
      "id": 7,
      "question": "Why should form inputs have associated label elements?",
      "options": {
        "A": "For better accessibility and usability",
        "B": "To make forms submit faster",
        "C": "To automatically validate input",
        "D": "For CSS styling purposes"
      },
      "correct": "A",
      "explanation": "Labels improve accessibility for screen readers and make forms more usable by providing click targets.",
      "topic": {
        "topics": [
          "Accessibility fundamentals"
        ]
      }
    },
    {
      "id": 8,
      "question": "What is a content security policy (CSP)?",
      "options": {
        "A": "A method for organizing CSS files",
        "B": "A way to optimize content delivery",
        "C": "A security layer to prevent XSS attacks",
        "D": "A JavaScript framework feature"
      },
      "correct": "C",
      "explanation": "CSP helps prevent XSS by restricting sources of scripts and other resources that can be loaded.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 9,
      "question": "Why is it important to provide keyboard navigation?",
      "options": {
        "A": "To support touch devices only",
        "B": "To make websites faster",
        "C": "For better SEO ranking",
        "D": "For users who can't use a mouse"
      },
      "correct": "D",
      "explanation": "Keyboard accessibility is essential for users with motor disabilities and those who prefer keyboard navigation.",
      "topic": {
        "topics": [
          "Inclusive design"
        ]
      }
    },
    {
      "id": 10,
      "question": "What should you use instead of document.write()?",
      "options": {
        "A": "DOM manipulation methods",
        "B": "console.log",
        "C": "alert()",
        "D": "It's still safe to use"
      },
      "correct": "A",
      "explanation": "document.write() can block page rendering and has security implications. Use DOM methods like createElement and appendChild instead.",
      "topic": {
        "topics": [
          "DOM safety"
        ]
      }
    },
    {
      "id": 11,
      "question": "Why should you avoid using eval()?",
      "options": {
        "A": "It can execute arbitrary code and create security risks",
        "B": "It's deprecated in JavaScript",
        "C": "It only works in older browsers",
        "D": "It's too slow for modern apps"
      },
      "correct": "A",
      "explanation": "eval() executes any string as code, making it extremely dangerous with untrusted input.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 12,
      "question": "What is ARIA used for?",
      "options": {
        "A": "Creating responsive layouts",
        "B": "Making animations smoother",
        "C": "Adding authentication to websites",
        "D": "Improving accessibility when HTML semantics aren't enough"
      },
      "correct": "D",
      "explanation": "ARIA (Accessible Rich Internet Applications) provides additional accessibility information when native HTML isn't sufficient.",
      "topic": {
        "topics": [
          "Accessibility fundamentals"
        ]
      }
    },
    {
      "id": 13,
      "question": "Why should you hash passwords before storing them?",
      "options": {
        "A": "To protect user data if the database is compromised",
        "B": "To make passwords easier to remember",
        "C": "To reduce storage space",
        "D": "To make login faster"
      },
      "correct": "A",
      "explanation": "Hashing passwords ensures that plain text passwords aren't stored, protecting users if data is breached.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the purpose of the tabindex attribute?",
      "options": {
        "A": "To style tabs in a UI",
        "B": "To create table indexes",
        "C": "To control keyboard navigation order",
        "D": "To index database tables"
      },
      "correct": "C",
      "explanation": "tabindex controls the order in which elements receive focus when users navigate with the Tab key.",
      "topic": {
        "topics": [
          "Accessibility fundamentals"
        ]
      }
    },
    {
      "id": 15,
      "question": "Why should you use HTTPS instead of HTTP?",
      "options": {
        "A": "To encrypt data between browser and server",
        "B": "To make websites load faster",
        "C": "To improve JavaScript performance",
        "D": "To reduce server costs"
      },
      "correct": "A",
      "explanation": "HTTPS encrypts communication, preventing eavesdropping and tampering with sensitive data.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 16,
      "question": "What should you provide for audio and video content?",
      "options": {
        "A": "Higher resolution versions",
        "B": "Captions and transcripts",
        "C": "Download links",
        "D": "Background music"
      },
      "correct": "B",
      "explanation": "Captions and transcripts make audio/video content accessible to deaf and hard-of-hearing users.",
      "topic": {
        "topics": [
          "Inclusive design"
        ]
      }
    },
    {
      "id": 17,
      "question": "Why is it bad practice to store sensitive data in localStorage?",
      "options": {
        "A": "It slows down the browser",
        "B": "It has limited storage capacity",
        "C": "It's accessible by any JavaScript on the page",
        "D": "It doesn't work on mobile devices"
      },
      "correct": "C",
      "explanation": "localStorage is vulnerable to XSS attacks and should never contain sensitive information like tokens or personal data.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 18,
      "question": "What color contrast ratio is recommended for normal text?",
      "options": {
        "A": "Any ratio is fine",
        "B": "At least 2:1",
        "C": "At least 7:1",
        "D": "At least 4.5:1"
      },
      "correct": "D",
      "explanation": "WCAG recommends minimum 4.5:1 contrast ratio for normal text to ensure readability for users with visual impairments.",
      "topic": {
        "topics": [
          "Accessibility fundamentals"
        ]
      }
    },
    {
      "id": 19,
      "question": "What should you use to create interactive custom controls?",
      "options": {
        "A": "Only div and span elements",
        "B": "ARIA roles and keyboard event handlers",
        "C": "Inline JavaScript events",
        "D": "CSS animations only"
      },
      "correct": "B",
      "explanation": "Custom controls need proper ARIA roles and keyboard support to be accessible to all users.",
      "topic": {
        "topics": [
          "Inclusive design"
        ]
      }
    },
    {
      "id": 20,
      "question": "Why should you avoid autoplaying videos with sound?",
      "options": {
        "A": "It uses too much bandwidth",
        "B": "It can be disruptive and inaccessible",
        "C": "It breaks mobile browsers",
        "D": "It's not supported in all browsers"
      },
      "correct": "B",
      "explanation": "Autoplaying media can disorient users and interfere with screen readers. Always provide user control.",
      "topic": {
        "topics": [
          "Accessibility fundamentals"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the purpose of input sanitization?",
      "options": {
        "A": "To remove potentially harmful content from user input",
        "B": "To format input for better display",
        "C": "To compress data before storage",
        "D": "To translate input to different languages"
      },
      "correct": "A",
      "explanation": "Sanitization removes or neutralizes dangerous content like script tags from user input before processing.",
      "topic": {
        "topics": [
          "User input handling"
        ]
      }
    },
    {
      "id": 22,
      "question": "Why should you use proper heading hierarchy (h1-h6)?",
      "options": {
        "A": "To satisfy SEO requirements only",
        "B": "To make text larger and more visible",
        "C": "To improve page loading speed",
        "D": "To create a logical document structure for screen readers"
      },
      "correct": "D",
      "explanation": "Proper heading structure helps screen reader users understand page organization and navigate content.",
      "topic": {
        "topics": [
          "Semantic HTML"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is a safe way to include third-party scripts?",
      "options": {
        "A": "Use subresource integrity (SRI) hashes",
        "B": "Load them from any CDN",
        "C": "Embed them directly in HTML",
        "D": "Load them asynchronously only"
      },
      "correct": "A",
      "explanation": "SRI hashes ensure third-party scripts haven't been tampered with by verifying their content matches expected hashes.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 24,
      "question": "Why should you provide visible focus indicators?",
      "options": {
        "A": "To make the website more colorful",
        "B": "So keyboard users can see which element has focus",
        "C": "To indicate loading states",
        "D": "For better mobile touch targets"
      },
      "correct": "B",
      "explanation": "Visible focus indicators are essential for keyboard users to navigate and understand where they are on the page.",
      "topic": {
        "topics": [
          "Inclusive design"
        ]
      }
    },
    {
      "id": 25,
      "question": "What should you do with user input before using it in database queries?",
      "options": {
        "A": "Validate it only on the client side",
        "B": "Convert it to JSON format",
        "C": "Store it in session storage first",
        "D": "Use parameterized queries to prevent SQL injection"
      },
      "correct": "D",
      "explanation": "Parameterized queries separate SQL code from data, preventing SQL injection attacks.",
      "topic": {
        "topics": [
          "User input handling"
        ]
      }
    },
    {
      "id": 26,
      "question": "Why is it important to test with screen readers?",
      "options": {
        "A": "To validate HTML syntax",
        "B": "To check website performance",
        "C": "To ensure your site is accessible to blind users",
        "D": "To test mobile responsiveness"
      },
      "correct": "C",
      "explanation": "Screen reader testing helps identify accessibility issues that affect users who rely on assistive technology.",
      "topic": {
        "topics": [
          "Accessibility fundamentals"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is the principle of least privilege in security?",
      "options": {
        "A": "Limit website features for safety",
        "B": "Make all features available to everyone",
        "C": "Require maximum security for all actions",
        "D": "Give users and systems only the permissions they need"
      },
      "correct": "D",
      "explanation": "This principle minimizes potential damage by restricting access rights to only what's necessary.",
      "topic": {
        "topics": [
          "Security best practices"
        ]
      }
    },
    {
      "id": 28,
      "question": "Why should you use fieldset and legend elements for forms?",
      "options": {
        "A": "To automatically validate form data",
        "B": "To make forms submit faster",
        "C": "To group related form controls accessibly",
        "D": "To style form sections differently"
      },
      "correct": "C",
      "explanation": "fieldset groups related form controls, and legend provides a description, improving accessibility.",
      "topic": {
        "topics": [
          "Semantic HTML"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is a safe way to handle file uploads?",
      "options": {
        "A": "Trust client-side validation only",
        "B": "Validate file types and sizes on the server",
        "C": "Accept all file types for flexibility",
        "D": "Store files in localStorage"
      },
      "correct": "B",
      "explanation": "Server-side validation is essential since client-side checks can be bypassed. Restrict allowed file types and sizes.",
      "topic": {
        "topics": [
          "User input handling"
        ]
      }
    },
    {
      "id": 30,
      "question": "Why should you avoid using div for everything?",
      "options": {
        "A": "div elements are slower to render",
        "B": "Semantic elements provide better accessibility and structure",
        "C": "div doesn't work with CSS Grid",
        "D": "div is being deprecated in HTML6"
      },
      "explanation": "Semantic elements like main, article, section, and nav provide meaning that helps both users and assistive technologies understand content structure.",
      "correct": "B",
      "topic": {
        "topics": [
          "Semantic HTML"
        ]
      }
    }
  ]
}
