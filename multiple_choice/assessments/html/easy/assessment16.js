module.exports = {
  "metadata": {
    "title": "HTML Deprecated Tags: Migration Strategies and Modern Practices",
    "description": "Test your understanding of migrating from deprecated HTML tags to modern alternatives, focusing on practical implementation and best practices.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Tag Migration",
      "CSS Replacement",
      "Modern Layouts",
      "Accessibility Improvements",
      "Progressive Enhancement",
      "Browser Support",
      "Semantic HTML",
      "Responsive Design",
      "Web Standards",
      "Maintenance Benefits"
    ],
    "topicLinks": [
      {
        "topicName": "Tag Migration",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#obsolete_and_deprecated_elements"
      },
      {
        "topicName": "CSS Replacement",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "topicName": "Modern Layouts",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout"
      },
      {
        "topicName": "Accessibility Improvements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
      },
      {
        "topicName": "Progressive Enhancement",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement"
      },
      {
        "topicName": "Browser Support",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#browser_compatibility"
      },
      {
        "topicName": "Semantic HTML",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
      },
      {
        "topicName": "Responsive Design",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
      },
      {
        "topicName": "Web Standards",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Standards"
      },
      {
        "topicName": "Maintenance Benefits",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
      }
    ],
    "assessmentId": 16,
    "assessmentUniqueId": 1762947267385,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What CSS property would you use to replace <pre><font size=\"3\"></pre>?",
      "options": {
        "A": "<pre>size: 3;</pre>",
        "B": "<pre>text-size: medium;</pre>",
        "C": "<pre>font-size: 16px;</pre>",
        "D": "<pre>font-scale: 1.2;</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>font-size</pre> with specific units (px, em, rem) to replace the <pre>font</pre> tag's size attribute. This provides precise control and follows modern CSS standards.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Tag Migration"
        ]
      }
    },
    {
      "id": 2,
      "question": "How would you convert <pre><center>Hello</center></pre> to modern HTML/CSS?",
      "options": {
        "A": "<pre><div style=\"text-align: center;\">Hello</div></pre>",
        "B": "<pre><div align=\"center\">Hello</div></pre>",
        "C": "<pre><middle>Hello</middle></pre>",
        "D": "<pre><div center>Hello</div></pre>"
      },
      "correct": "A",
      "explanation": "Replace <pre>center</pre> with a block element (like <pre>div</pre>) and apply <pre>text-align: center;</pre> via CSS. This separates presentation from structure.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Modern Layouts"
        ]
      }
    },
    {
      "id": 3,
      "question": "What modern CSS technique can create smooth scrolling effects instead of <pre>marquee</pre>?",
      "options": {
        "A": "JavaScript setTimeout",
        "B": "CSS animations with @keyframes",
        "C": "HTML5 video background",
        "D": "CSS float with overflow"
      },
      "correct": "B",
      "explanation": "CSS animations using @keyframes provide smooth, performant scrolling effects that are more accessible and controllable than the deprecated <pre>marquee</pre> tag.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Modern Layouts"
        ]
      }
    },
    {
      "id": 4,
      "question": "Why is CSS preferred over presentational HTML tags for styling?",
      "options": {
        "A": "CSS eliminates the need for JavaScript",
        "B": "CSS files are always smaller than HTML",
        "C": "CSS works without any HTML structure",
        "D": "CSS allows consistent styling across multiple pages"
      },
      "correct": "D",
      "explanation": "CSS allows you to define styles once and apply them consistently across multiple pages, making maintenance much easier than updating individual HTML attributes on each element.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Maintenance Benefits"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the modern alternative to <pre>frameset</pre> for creating page layouts?",
      "options": {
        "A": "Multiple iframe elements",
        "B": "CSS Grid or Flexbox layouts",
        "C": "HTML tables for layout",
        "D": "JavaScript-generated content"
      },
      "correct": "B",
      "explanation": "CSS Grid and Flexbox provide modern, responsive layout systems that replace the problematic <pre>frameset</pre> approach, offering better accessibility and mobile compatibility.",
      "topic": {
        "topics": [
          "Modern Layouts",
          "Tag Migration"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you replace <pre><font color=\"red\"></pre> with modern CSS?",
      "options": {
        "A": "<pre>color: red;</pre>",
        "B": "<pre>text-color: red;</pre>",
        "C": "<pre>font-color: red;</pre>",
        "D": "<pre>style: red;</pre>"
      },
      "correct": "A",
      "explanation": "The CSS <pre>color</pre> property directly replaces the <pre>font</pre> tag's color attribute, providing the same functionality with better separation of concerns.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Tag Migration"
        ]
      }
    },
    {
      "id": 7,
      "question": "What accessibility issue was common with the <pre>blink</pre> tag?",
      "options": {
        "A": "It made text invisible to screen readers",
        "B": "It could trigger seizures in photosensitive users",
        "C": "It prevented keyboard navigation",
        "D": "It broke voice recognition software"
      },
      "correct": "B",
      "explanation": "The <pre>blink</pre> tag could trigger seizures in users with photosensitive epilepsy and was generally distracting, making content harder to read for everyone.",
      "topic": {
        "topics": [
          "Accessibility Improvements",
          "Tag Migration"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which CSS property provides the most control over text appearance?",
      "options": {
        "A": "<pre>text-format</pre>",
        "B": "<pre>text-style</pre>",
        "C": "<pre>typography</pre>",
        "D": "<pre>font</pre> shorthand property"
      },
      "correct": "D",
      "explanation": "The CSS <pre>font</pre> shorthand property allows you to set multiple font properties at once: family, size, weight, style, and more, replacing multiple <pre>font</pre> tag attributes.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Modern Layouts"
        ]
      }
    },
    {
      "id": 9,
      "question": "What problem did <pre>frameset</pre> cause for search engines?",
      "options": {
        "A": "Frames required special meta tags for SEO",
        "B": "Frames made pages load too slowly for crawlers",
        "C": "Search engines blocked framed sites entirely",
        "D": "Search engines couldn't properly index framed content"
      },
      "correct": "D",
      "explanation": "Search engines had difficulty properly indexing content within framesets because each frame was essentially a separate page, making it hard to understand the overall page structure and content relationships.",
      "topic": {
        "topics": [
          "Tag Migration",
          "Web Standards"
        ]
      }
    },
    {
      "id": 10,
      "question": "How can you create a blinking effect accessibly with CSS?",
      "options": {
        "A": "Use HTML5 <pre>blink</pre> with ARIA labels",
        "B": "Use JavaScript with accessibility attributes",
        "C": "Use the CSS <pre>blink</pre> property",
        "D": "Use reduced opacity with respect for motion preferences"
      },
      "correct": "D",
      "explanation": "Create subtle blinking effects using CSS opacity changes while respecting <pre>prefers-reduced-motion</pre> media queries to ensure accessibility for users with vestibular disorders.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Accessibility Improvements"
        ]
      }
    },
    {
      "id": 11,
      "question": "What modern approach ensures deprecated tags won't break future browsers?",
      "options": {
        "A": "Adding browser-specific prefixes",
        "B": "Using valid, standards-compliant HTML",
        "C": "Using JavaScript polyfills",
        "D": "Sticking to HTML4.01 standards"
      },
      "correct": "B",
      "explanation": "Using valid, standards-compliant HTML according to current specifications ensures your website will work in future browsers without relying on deprecated features that may be removed.",
      "topic": {
        "topics": [
          "Web Standards",
          "Browser Support"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which CSS feature allows responsive text sizing?",
      "options": {
        "A": "Viewport units (vw) and media queries",
        "B": "HTML size attributes with JavaScript",
        "C": "Fixed pixel sizes for all elements",
        "D": "The <pre>responsive</pre> CSS property"
      },
      "correct": "A",
      "explanation": "CSS viewport units (vw, vh) combined with media queries allow text to scale responsively based on screen size, replacing the rigid sizing of the <pre>font</pre> tag.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Responsive Design"
        ]
      }
    },
    {
      "id": 13,
      "question": "What was the main navigation problem with frames?",
      "options": {
        "A": "Browser back/forward buttons didn't work as expected",
        "B": "Frames required special navigation menus",
        "C": "Links couldn't open in new windows",
        "D": "Navigation was only possible with keyboard"
      },
      "correct": "A",
      "explanation": "Frames caused confusion with browser navigation - the back/forward buttons would navigate individual frames rather than the entire page, and bookmarking often captured the wrong frame state.",
      "topic": {
        "topics": [
          "Tag Migration",
          "Accessibility Improvements"
        ]
      }
    },
    {
      "id": 14,
      "question": "How do you center an image horizontally without <pre>center</pre>?",
      "options": {
        "A": "<pre>float: center;</pre>",
        "B": "<pre>align: center;</pre>",
        "C": "<pre>position: center;</pre>",
        "D": "<pre>display: block; margin: 0 auto;</pre>"
      },
      "correct": "D",
      "explanation": "Make the image a block element with <pre>display: block;</pre> and center it with <pre>margin: 0 auto;</pre>. This works for any block-level element with a defined width.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Modern Layouts"
        ]
      }
    },
    {
      "id": 15,
      "question": "What benefit does CSS provide for website maintenance?",
      "options": {
        "A": "Smaller HTML file sizes",
        "B": "Automatic browser compatibility",
        "C": "Global style changes from one location",
        "D": "Faster server processing"
      },
      "correct": "C",
      "explanation": "CSS allows you to make global style changes from a single location (external stylesheet), making maintenance much easier than updating individual HTML attributes across multiple pages.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Maintenance Benefits"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which modern HTML element is designed for independent content?",
      "options": {
        "A": "<pre>frame</pre>",
        "B": "<pre>div</pre>",
        "C": "<pre>article</pre>",
        "D": "<pre>independent</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>article</pre> element represents self-contained content that could be distributed independently, providing semantic meaning that frames lacked.",
      "topic": {
        "topics": [
          "Semantic HTML",
          "Modern Layouts"
        ]
      }
    },
    {
      "id": 17,
      "question": "What CSS technique creates smooth horizontal scrolling?",
      "options": {
        "A": "<pre>@keyframes slide { transform: translateX(); }</pre>",
        "B": "<pre>animation: marquee;</pre>",
        "C": "<pre>scroll: horizontal;</pre>",
        "D": "<pre>move: left;</pre>"
      },
      "correct": "A",
      "explanation": "CSS keyframe animations with <pre>transform: translateX();</pre> create smooth horizontal scrolling effects that are more performant and accessible than <pre>marquee</pre>.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Modern Layouts"
        ]
      }
    },
    {
      "id": 18,
      "question": "Why should you avoid the <pre>align</pre> attribute in modern HTML?",
      "options": {
        "A": "It causes rendering errors",
        "B": "It only works in table elements",
        "C": "It's deprecated in favor of CSS alignment",
        "D": "It's not supported in mobile browsers"
      },
      "correct": "C",
      "explanation": "The <pre>align</pre> attribute is deprecated and should be replaced with CSS properties like <pre>text-align</pre>, <pre>float</pre>, or modern layout techniques like Flexbox and Grid.",
      "topic": {
        "topics": [
          "Tag Migration",
          "CSS Replacement"
        ]
      }
    },
    {
      "id": 19,
      "question": "What modern feature helps users with motion sensitivity?",
      "options": {
        "A": "CSS <pre>no-animation</pre> property",
        "B": "JavaScript motion detection",
        "C": "HTML5 <pre>reduced-motion</pre> attribute",
        "D": "<pre>prefers-reduced-motion</pre> media query"
      },
      "correct": "D",
      "explanation": "The CSS <pre>prefers-reduced-motion</pre> media query allows you to respect users' system preferences for reduced motion, making animations and effects more accessible.",
      "topic": {
        "topics": [
          "Accessibility Improvements",
          "CSS Replacement"
        ]
      }
    },
    {
      "id": 20,
      "question": "How does semantic HTML improve on deprecated presentational tags?",
      "options": {
        "A": "It provides meaning and structure to content",
        "B": "It makes pages load faster automatically",
        "C": "It requires less CSS styling",
        "D": "It works in older browsers better"
      },
      "correct": "A",
      "explanation": "Semantic HTML elements provide meaning and structure to content, improving accessibility, SEO, and maintainability compared to presentational tags that only affected appearance.",
      "topic": {
        "topics": [
          "Semantic HTML",
          "Web Standards"
        ]
      }
    },
    {
      "id": 21,
      "question": "What CSS property controls text decoration like underlines?",
      "options": {
        "A": "<pre>underline</pre>",
        "B": "<pre>font-decoration</pre>",
        "C": "<pre>text-style</pre>",
        "D": "<pre>text-decoration</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>text-decoration</pre> property controls underlines, overlines, and line-through effects, replacing deprecated tags like <pre>u</pre> and <pre>strike</pre>.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Tag Migration"
        ]
      }
    },
    {
      "id": 22,
      "question": "Why are modern CSS layouts better than frames for responsive design?",
      "options": {
        "A": "They require less HTML code",
        "B": "They adapt to different screen sizes automatically",
        "C": "They work without any JavaScript",
        "D": "They are easier to learn for beginners"
      },
      "correct": "B",
      "explanation": "Modern CSS layouts (Flexbox, Grid) automatically adapt to different screen sizes and devices, while frames had fixed dimensions that didn't work well on mobile devices.",
      "topic": {
        "topics": [
          "Modern Layouts",
          "Responsive Design"
        ]
      }
    },
    {
      "id": 23,
      "question": "What tool can help identify deprecated tags in existing code?",
      "options": {
        "A": "HTML validators like W3C Validator",
        "B": "Browser developer tools",
        "C": "CSS preprocessors",
        "D": "JavaScript linters"
      },
      "correct": "A",
      "explanation": "HTML validators like the W3C Markup Validation Service can identify deprecated tags and suggest modern alternatives, helping you update legacy code.",
      "topic": {
        "topics": [
          "Tag Migration",
          "Web Standards"
        ]
      }
    },
    {
      "id": 24,
      "question": "How do you set font family with CSS instead of <pre>font face</pre>?",
      "options": {
        "A": "<pre>text-font: Arial;</pre>",
        "B": "<pre>font-family: Arial, sans-serif;</pre>",
        "C": "<pre>face: Arial;</pre>",
        "D": "<pre>typeface: Arial;</pre>"
      },
      "correct": "B",
      "explanation": "The CSS <pre>font-family</pre> property replaces the <pre>font</pre> tag's face attribute, allowing for font fallbacks and web font integration.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Tag Migration"
        ]
      }
    },
    {
      "id": 25,
      "question": "What accessibility standard encourages moving away from presentational HTML?",
      "options": {
        "A": "HTTP/2 Protocol",
        "B": "W3C HTML5 Specification",
        "C": "WCAG (Web Content Accessibility Guidelines)",
        "D": "ECMAScript Standard"
      },
      "correct": "C",
      "explanation": "WCAG guidelines encourage semantic HTML and proper separation of structure and presentation to ensure content is accessible to users with disabilities.",
      "topic": {
        "topics": [
          "Accessibility Improvements",
          "Web Standards"
        ]
      }
    },
    {
      "id": 26,
      "question": "Which CSS layout method provides two-dimensional control?",
      "options": {
        "A": "Flexbox",
        "B": "CSS Grid",
        "C": "Floats",
        "D": "Positioning"
      },
      "correct": "B",
      "explanation": "CSS Grid provides two-dimensional layout control (rows and columns), making it ideal for complex layouts that previously required frames or tables.",
      "topic": {
        "topics": [
          "Modern Layouts",
          "CSS Replacement"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is the main advantage of external CSS files?",
      "options": {
        "A": "They can be cached by browsers for faster loading",
        "B": "They work without HTML files",
        "C": "They automatically update all websites",
        "D": "They require no server configuration"
      },
      "correct": "A",
      "explanation": "External CSS files can be cached by browsers, meaning they only need to be downloaded once and then reused across multiple pages, improving performance.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Maintenance Benefits"
        ]
      }
    },
    {
      "id": 28,
      "question": "How can you ensure old deprecated tags still work during migration?",
      "options": {
        "A": "Use progressive enhancement with modern fallbacks",
        "B": "Add JavaScript polyfills for all deprecated tags",
        "C": "Use both old and new methods together",
        "D": "Only update when all users have modern browsers"
      },
      "correct": "A",
      "explanation": "Progressive enhancement involves building with modern standards while ensuring basic functionality works everywhere, then enhancing with modern features for capable browsers.",
      "topic": {
        "topics": [
          "Progressive Enhancement",
          "Tag Migration"
        ]
      }
    },
    {
      "id": 29,
      "question": "What CSS feature allows consistent spacing without deprecated attributes?",
      "options": {
        "A": "JavaScript spacing functions",
        "B": "HTML spacing attributes",
        "C": "CSS custom properties (variables)",
        "D": "Browser-default spacing only"
      },
      "correct": "C",
      "explanation": "CSS custom properties (variables) allow you to define consistent spacing values that can be reused throughout your CSS, replacing inconsistent HTML attributes.",
      "topic": {
        "topics": [
          "CSS Replacement",
          "Modern Layouts"
        ]
      }
    },
    {
      "id": 30,
      "question": "Why is it important to learn modern alternatives to deprecated tags?",
      "options": {
        "A": "To eliminate all CSS from projects",
        "B": "To make websites load instantly",
        "C": "To build future-proof, accessible websites",
        "D": "To work only with the latest browsers"
      },
      "correct": "C",
      "explanation": "Learning modern alternatives ensures you can build websites that are future-proof, accessible, and maintainable, rather than relying on deprecated features that may stop working.",
      "topic": {
        "topics": [
          "Web Standards",
          "Tag Migration"
        ]
      }
    }
  ]
}
