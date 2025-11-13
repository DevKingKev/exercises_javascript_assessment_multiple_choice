module.exports = {
  "metadata": {
    "title": "HTML Block vs Inline Elements: Display Behavior and Usage",
    "description": "Test your understanding of block-level and inline elements, their display behavior, nesting rules, and practical usage in HTML.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Block Elements",
      "Inline Elements",
      "Display Behavior",
      "CSS Display Property",
      "Nesting Rules",
      "Layout Fundamentals",
      "Semantic Block Elements",
      "Text-level Semantics",
      "Element Categories",
      "Content Flow"
    ],
    "topicLinks": [
      {
        "topicName": "Block Elements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements"
      },
      {
        "topicName": "Inline Elements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements"
      },
      {
        "topicName": "Display Behavior",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
      },
      {
        "topicName": "CSS Display Property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
      },
      {
        "topicName": "Nesting Rules",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_categories"
      },
      {
        "topicName": "Layout Fundamentals",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction"
      },
      {
        "topicName": "Semantic Block Elements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
      },
      {
        "topicName": "Text-level Semantics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics"
      },
      {
        "topicName": "Element Categories",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories"
      },
      {
        "topicName": "Content Flow",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout"
      }
    ],
    "assessmentId": 13,
    "assessmentUniqueId": 1762892927227,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the main visual difference between block and inline elements?",
      "options": {
        "A": "Block elements start on a new line, inline elements flow within text",
        "B": "Block elements are always larger than inline elements",
        "C": "Inline elements have borders, block elements don't",
        "D": "Block elements can contain text, inline elements cannot"
      },
      "correct": "A",
      "explanation": "Block elements always start on a new line and take up the full available width, while inline elements flow within the text content and only take up as much width as necessary. This is the fundamental display behavior difference.",
      "topic": {
        "topics": [
          "Block Elements",
          "Inline Elements",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which of these elements is typically a block-level element?",
      "options": {
        "A": "<pre>p</pre>",
        "B": "<pre>span</pre>",
        "C": "<pre>a</pre>",
        "D": "<pre>strong</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>p</pre> (paragraph) element is a block-level element. It starts on a new line and takes the full available width. <pre>span</pre>, <pre>a</pre>, and <pre>strong</pre> are inline elements that flow within text content.",
      "topic": {
        "topics": [
          "Block Elements",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 3,
      "question": "What happens when you put two block elements next to each other in HTML?",
      "options": {
        "A": "They stack vertically, each on its own line",
        "B": "They appear side by side horizontally",
        "C": "They overlap each other",
        "D": "The second element is hidden"
      },
      "correct": "A",
      "explanation": "Block elements stack vertically by default. Each block element starts on a new line and takes the full available width, causing subsequent block elements to appear below previous ones in the normal document flow.",
      "topic": {
        "topics": [
          "Block Elements",
          "Display Behavior",
          "Content Flow"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which element is commonly used as an inline container for styling text?",
      "options": {
        "A": "<pre>span</pre>",
        "B": "<pre>div</pre>",
        "C": "<pre>section</pre>",
        "D": "<pre>article</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>span</pre> element is an inline container used to mark up part of a text or document for styling or scripting. It doesn't add any semantic meaning and is perfect for applying CSS to specific text portions.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 5,
      "question": "How can you make a block element behave like an inline element?",
      "options": {
        "A": "Use CSS: <pre>display: inline;</pre>",
        "B": "Add <pre>inline=\"true\"</pre> attribute",
        "C": "Wrap it in a <pre>span</pre> element",
        "D": "Use the <pre>inline</pre> HTML element"
      },
      "correct": "A",
      "explanation": "You can change a block element's display behavior using CSS: <pre>display: inline;</pre>. This makes the element flow inline with text instead of starting on a new line.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which of these is a valid nesting pattern?",
      "options": {
        "A": "<pre>p</pre> containing <pre>strong</pre>",
        "B": "<pre>span</pre> containing <pre>div</pre>",
        "C": "<pre>a</pre> containing <pre>p</pre>",
        "D": "<pre>em</pre> containing <pre>section</pre>"
      },
      "correct": "A",
      "explanation": "It's valid to nest inline elements like <pre>strong</pre> inside block elements like <pre>p</pre>. However, you generally cannot nest block elements inside inline elements, as this violates HTML content model rules.",
      "topic": {
        "topics": [
          "Nesting Rules",
          "Block Elements",
          "Inline Elements"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the default display behavior of heading elements like <pre>h1</pre> through <pre>h6</pre>?",
      "options": {
        "A": "Block-level",
        "B": "Inline",
        "C": "Inline-block",
        "D": "Flex"
      },
      "correct": "A",
      "explanation": "All heading elements (<pre>h1</pre> through <pre>h6</pre>) are block-level elements by default. They start on new lines and take the full available width, with browsers applying default margin and font sizing.",
      "topic": {
        "topics": [
          "Block Elements",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which CSS property value would make elements appear side by side?",
      "options": {
        "A": "<pre>display: inline-block;</pre>",
        "B": "<pre>display: block;</pre>",
        "C": "<pre>display: table;</pre>",
        "D": "<pre>display: none;</pre>"
      },
      "correct": "A",
      "explanation": "<pre>display: inline-block;</pre> makes elements flow inline like text but allows them to have width, height, and other block-like properties. This is commonly used to create horizontal layouts.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 9,
      "question": "What is the primary purpose of the <pre>div</pre> element?",
      "options": {
        "A": "Creating divisions in mathematical formulas",
        "B": "A generic block-level container for grouping content",
        "C": "Displaying content inline with text",
        "D": "Adding decorative dividers between sections"
      },
      "correct": "B",
      "explanation": "The <pre>div</pre> element is a generic block-level container with no semantic meaning. It's used to group content for styling purposes or when no other semantic element is appropriate.",
      "topic": {
        "topics": [
          "Block Elements",
          "Layout Fundamentals"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which element would you use to emphasize text within a paragraph?",
      "options": {
        "A": "<pre>div</pre>",
        "B": "<pre>em</pre>",
        "C": "<pre>section</pre>",
        "D": "<pre>aside</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>em</pre> element is an inline element used to emphasize text. It's semantically appropriate for adding emphasis within flowing text content and is typically rendered as italic.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 11,
      "question": "What happens when you apply <pre>display: block;</pre> to an inline element?",
      "options": {
        "A": "It becomes invisible",
        "B": "It starts behaving like a block element",
        "C": "It loses all styling",
        "D": "It stops responding to clicks"
      },
      "correct": "B",
      "explanation": "Applying <pre>display: block;</pre> to an inline element makes it behave like a block element: it starts on a new line and takes the full available width. This is useful when you need inline elements to have block-level layout properties.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which of these elements can contain both block and inline elements?",
      "options": {
        "A": "<pre>strong</pre>",
        "B": "<pre>div</pre>",
        "C": "<pre>span</pre>",
        "D": "<pre>a</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>div</pre> element, being a block-level container, can contain both other block elements and inline elements. Most inline elements can only contain other inline elements and text.",
      "topic": {
        "topics": [
          "Block Elements",
          "Nesting Rules"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is the default display value of the <pre>img</pre> element?",
      "options": {
        "A": "Block",
        "B": "Inline",
        "C": "Inline-block",
        "D": "None"
      },
      "correct": "B",
      "explanation": "The <pre>img</pre> element is an inline element by default, meaning it flows with text content. However, it's a replaced element that can have width and height, behaving somewhat like inline-block.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 14,
      "question": "Which semantic HTML5 element represents a self-contained composition?",
      "options": {
        "A": "<pre>div</pre>",
        "B": "<pre>article</pre>",
        "C": "<pre>span</pre>",
        "D": "<pre>aside</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>article</pre> element represents a self-contained composition that could be distributed independently, such as a blog post, news article, or forum post. It's a block-level semantic element.",
      "topic": {
        "topics": [
          "Semantic Block Elements",
          "Block Elements"
        ]
      }
    },
    {
      "id": 15,
      "question": "What CSS property value completely removes an element from the document flow?",
      "options": {
        "A": "<pre>display: inline;</pre>",
        "B": "<pre>display: none;</pre>",
        "C": "<pre>display: block;</pre>",
        "D": "<pre>display: contents;</pre>"
      },
      "correct": "B",
      "explanation": "<pre>display: none;</pre> completely removes the element from the document flow. The element is not rendered and doesn't take up any space, unlike <pre>visibility: hidden;</pre> which hides the element but preserves its space.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which element is designed for tangential or related content?",
      "options": {
        "A": "<pre>footer</pre>",
        "B": "<pre>aside</pre>",
        "C": "<pre>header</pre>",
        "D": "<pre>main</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>aside</pre> element represents content that is tangentially related to the content around it, such as sidebars, pull quotes, or advertising. It's a block-level semantic element.",
      "topic": {
        "topics": [
          "Semantic Block Elements",
          "Block Elements"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the main difference between <pre>strong</pre> and <pre>b</pre> elements?",
      "options": {
        "A": "<pre>strong</pre> is newer than <pre>b</pre>",
        "B": "<pre>strong</pre> is block-level, <pre>b</pre> is inline",
        "C": "<pre>strong</pre> has semantic importance, <pre>b</pre> is stylistic",
        "D": "<pre>strong</pre> can contain block elements"
      },
      "correct": "C",
      "explanation": "Both <pre>strong</pre> and <pre>b</pre> are inline elements that typically render as bold text. However, <pre>strong</pre> indicates strong importance, while <pre>b</pre> is purely presentational without semantic meaning.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which display value creates a flex container?",
      "options": {
        "A": "<pre>display: inline;</pre>",
        "B": "<pre>display: block;</pre>",
        "C": "<pre>display: flex;</pre>",
        "D": "<pre>display: grid;</pre>"
      },
      "correct": "C",
      "explanation": "<pre>display: flex;</pre> creates a flex container, enabling a flexible layout model where child elements can be easily aligned, ordered, and distributed within the container.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Layout Fundamentals"
        ]
      }
    },
    {
      "id": 19,
      "question": "What is the content category of elements that can contain text and other inline elements?",
      "options": {
        "A": "Flow content",
        "B": "Sectioning content",
        "C": "Phrasing content",
        "D": "Heading content"
      },
      "correct": "C",
      "explanation": "Phrasing content includes elements that can contain text and other inline elements. This category includes elements like <pre>span</pre>, <pre>strong</pre>, <pre>em</pre>, and <pre>a</pre> that are used within paragraphs and other text containers.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Element Categories"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which element represents a thematic grouping of content?",
      "options": {
        "A": "<pre>div</pre>",
        "B": "<pre>span</pre>",
        "C": "<pre>section</pre>",
        "D": "<pre>group</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>section</pre> element represents a thematic grouping of content, typically with a heading. It's a block-level semantic element that should be used for distinct sections of a document.",
      "topic": {
        "topics": [
          "Semantic Block Elements",
          "Block Elements"
        ]
      }
    },
    {
      "id": 21,
      "question": "What happens when you nest a block element inside an inline element?",
      "options": {
        "A": "The inline element becomes block-level",
        "B": "The block element becomes inline",
        "C": "It's invalid HTML and may not render correctly",
        "D": "It creates a new formatting context"
      },
      "correct": "C",
      "explanation": "Nesting block elements inside inline elements is invalid HTML according to the content model. Browsers may try to correct it, but the rendering can be unpredictable and should be avoided.",
      "topic": {
        "topics": [
          "Nesting Rules",
          "Element Categories"
        ]
      }
    },
    {
      "id": 22,
      "question": "Which element is used for quoted content from another source?",
      "options": {
        "A": "<pre>quote</pre>",
        "B": "<pre>q</pre>",
        "C": "<pre>blockquote</pre>",
        "D": "<pre>cite</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>blockquote</pre> element is a block-level element used for longer quotations that form their own block of content. For shorter, inline quotes, use the <pre>q</pre> element instead.",
      "topic": {
        "topics": [
          "Block Elements",
          "Semantic Block Elements"
        ]
      }
    },
    {
      "id": 23,
      "question": "What CSS property value makes an element inline but allows block-like properties?",
      "options": {
        "A": "<pre>display: flex;</pre>",
        "B": "<pre>display: inline;</pre>",
        "C": "<pre>display: inline-block;</pre>",
        "D": "<pre>display: block;</pre>"
      },
      "correct": "C",
      "explanation": "<pre>display: inline-block;</pre> makes an element flow inline with text but allows it to have width, height, margins, and padding like a block element. This is useful for creating custom inline components.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which element represents a line break opportunity?",
      "options": {
        "A": "<pre>lb</pre>",
        "B": "<pre>br</pre>",
        "C": "<pre>break</pre>",
        "D": "<pre>wbr</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>wbr</pre> (word break opportunity) element is an inline element that represents a position where the browser may break a line if necessary. It's useful for long words or URLs that might otherwise break awkwardly.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the default display behavior of list items (<pre>li</pre>)?",
      "options": {
        "A": "List-item",
        "B": "Inline",
        "C": "Inline-block",
        "D": "Block-level"
      },
      "correct": "D",
      "explanation": "List items (<pre>li</pre>) are block-level elements. They display as blocks within their parent list container (<pre>ul</pre> or <pre>ol</pre>), with each list item starting on a new line by default.",
      "topic": {
        "topics": [
          "Block Elements",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 26,
      "question": "Which element is used for computer code within text?",
      "options": {
        "A": "<pre>samp</pre>",
        "B": "<pre>pre</pre>",
        "C": "<pre>kbd</pre>",
        "D": "<pre>code</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>code</pre> element is an inline element used to represent fragments of computer code within flowing text. For block-level code blocks, use <pre>pre</pre> with <pre>code</pre> inside.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does the <pre>display: contents;</pre> value do?",
      "options": {
        "A": "Creates a table-like display",
        "B": "Hides the element and its contents",
        "C": "Makes the element transparent",
        "D": "Makes the element's children act as direct children of its parent"
      },
      "correct": "D",
      "explanation": "<pre>display: contents;</pre> makes the element itself disappear from the formatting structure, causing its children to behave as if they were direct children of the element's parent. The element's content is still rendered.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Display Behavior"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which element represents a line break within text?",
      "options": {
        "A": "<pre>lb</pre>",
        "B": "<pre>hr</pre>",
        "C": "<pre>break</pre>",
        "D": "<pre>br</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>br</pre> element is an inline element that represents a line break. It's an empty element used to force a line break within text content, such as in addresses or poetry.",
      "topic": {
        "topics": [
          "Inline Elements",
          "Text-level Semantics"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the main advantage of using semantic block elements over <pre>div</pre>?",
      "options": {
        "A": "Automatic styling",
        "B": "Faster rendering",
        "C": "Smaller file size",
        "D": "Better accessibility and SEO"
      },
      "correct": "D",
      "explanation": "Semantic block elements like <pre>header</pre>, <pre>nav</pre>, <pre>main</pre>, and <pre>footer</pre> provide better accessibility (screen readers can navigate by landmarks) and SEO (search engines understand content structure better) compared to generic <pre>div</pre> elements.",
      "topic": {
        "topics": [
          "Semantic Block Elements",
          "Block Elements"
        ]
      }
    },
    {
      "id": 30,
      "question": "Which display value creates a grid container?",
      "options": {
        "A": "<pre>display: table;</pre>",
        "B": "<pre>display: flex;</pre>",
        "C": "<pre>display: block;</pre>",
        "D": "<pre>display: grid;</pre>"
      },
      "correct": "D",
      "explanation": "<pre>display: grid;</pre> creates a grid container, enabling a two-dimensional layout system where you can define rows and columns to precisely position child elements.",
      "topic": {
        "topics": [
          "CSS Display Property",
          "Layout Fundamentals"
        ]
      }
    }
  ]
}
