module.exports = {
  "metadata": {
    "title": "HTML Entities and Special Characters",
    "description": "Test your understanding of HTML entities, special characters, symbols, and when to use character references in HTML documents.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "HTML Entities",
      "Special Characters",
      "Symbols and Icons",
      "Character Encoding",
      "Mathematical Symbols",
      "Currency Symbols",
      "Copyright and Trademarks",
      "Whitespace Handling",
      "Character References",
      "Accessibility Symbols"
    ],
    "topicLinks": [
      {
        "topicName": "HTML Entities",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Entity"
      },
      {
        "topicName": "Special Characters",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content"
      },
      {
        "topicName": "Symbols and Icons",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/symbol"
      },
      {
        "topicName": "Character Encoding",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset"
      },
      {
        "topicName": "Mathematical Symbols",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo"
      },
      {
        "topicName": "Currency Symbols",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data"
      },
      {
        "topicName": "Copyright and Trademarks",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small"
      },
      {
        "topicName": "Whitespace Handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br"
      },
      {
        "topicName": "Character References",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Character_references"
      },
      {
        "topicName": "Accessibility Symbols",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
      }
    ],
    "assessmentId": 9,
    "assessmentUniqueId": 1762879900000,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "Which HTML entity represents the ampersand symbol (&)?",
      "options": {
        "A": "<pre>&amp;and;</pre>",
        "B": "<pre>&amp;amp;</pre>",
        "C": "<pre>&amp;symbol;</pre>",
        "D": "<pre>&amp;ersand;</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>&amp;amp;</pre> entity represents the ampersand symbol (&). Since the ampersand is used to start HTML entities, you must use <pre>&amp;amp;</pre> when you want to display an actual ampersand character in your HTML content.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Special Characters"
        ]
      }
    },
    {
      "id": 2,
      "question": "What does the <pre>&amp;lt;</pre> entity display?",
      "options": {
        "A": "Left bracket ([)",
        "B": "Greater-than symbol (>)",
        "C": "Left arrow (←)",
        "D": "Less-than symbol (<)"
      },
      "correct": "D",
      "explanation": "The <pre>&amp;lt;</pre> entity displays the less-than symbol (<). This is necessary because the < character is used to start HTML tags, so if you want to display it as content, you must use the entity.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Special Characters"
        ]
      }
    },
    {
      "id": 3,
      "question": "Which entity creates a non-breaking space?",
      "options": {
        "A": "<pre>&amp;nbs;</pre>",
        "B": "<pre>&amp;space;</pre>",
        "C": "<pre>&amp;nbsp;</pre>",
        "D": "<pre>&amp;blank;</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>&amp;nbsp;</pre> entity creates a non-breaking space, which prevents browsers from breaking a line at that space. This is useful for keeping words together like \"Dr.&amp;nbsp;Smith\" to ensure they don't break across lines.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Whitespace Handling"
        ]
      }
    },
    {
      "id": 4,
      "question": "What symbol does <pre>&amp;copy;</pre> produce?",
      "options": {
        "A": "Copyright symbol (©)",
        "B": "Registered trademark (®)",
        "C": "Trademark symbol (™)",
        "D": "Copyleft symbol (🄯)"
      },
      "correct": "A",
      "explanation": "The <pre>&amp;copy;</pre> entity produces the copyright symbol ©. This is commonly used in footers to indicate copyright ownership. Example: <pre>&amp;copy; 2025 Company Name</pre> displays as © 2025 Company Name.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Copyright and Trademarks"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which entity represents the greater-than symbol (>)?",
      "options": {
        "A": "<pre>&amp;more;</pre>",
        "B": "<pre>&amp;gt;</pre>",
        "C": "<pre>&amp;greater;</pre>",
        "D": "<pre>&amp;above;</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>&amp;gt;</pre> entity represents the greater-than symbol (>). Like the less-than symbol, the greater-than symbol has special meaning in HTML and must be escaped when used as content.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Special Characters"
        ]
      }
    },
    {
      "id": 6,
      "question": "What does <pre>&amp;quot;</pre> display?",
      "options": {
        "A": "Question mark (?)",
        "B": "Single quotation mark (')",
        "C": "Double quotation mark (\")",
        "D": "Quotation dash (—)"
      },
      "correct": "C",
      "explanation": "The <pre>&amp;quot;</pre> entity displays a double quotation mark (\"). This is useful when you need to include quotes within an attribute value that's already enclosed in quotes.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Special Characters"
        ]
      }
    },
    {
      "id": 7,
      "question": "Which entity produces the Euro currency symbol?",
      "options": {
        "A": "<pre>&amp;eur;</pre>",
        "B": "<pre>&amp;euro;</pre>",
        "C": "<pre>&amp;currency;</pre>",
        "D": "<pre>&amp;euros;</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>&amp;euro;</pre> entity produces the Euro currency symbol (€). Example: <pre>Price: &amp;euro;25.99</pre> displays as Price: €25.99.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Currency Symbols"
        ]
      }
    },
    {
      "id": 8,
      "question": "What symbol does <pre>&amp;reg;</pre> create?",
      "options": {
        "A": "Registration mark (❐)",
        "B": "Copyright symbol (©)",
        "C": "Trademark symbol (™)",
        "D": "Registered trademark symbol (®)"
      },
      "correct": "D",
      "explanation": "The <pre>&amp;reg;</pre> entity creates the registered trademark symbol (®). This indicates that a name, logo, or phrase is officially registered with a trademark office.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Copyright and Trademarks"
        ]
      }
    },
    {
      "id": 9,
      "question": "Which entity represents the multiplication sign?",
      "options": {
        "A": "<pre>&amp;multiply;</pre>",
        "B": "<pre>&amp;times;</pre>",
        "C": "<pre>&amp;star;</pre>",
        "D": "<pre>&amp;x;</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>&amp;times;</pre> entity represents the multiplication sign (×). This is different from the letter 'x' and is used in mathematical expressions. Example: <pre>5 &amp;times; 3 = 15</pre> displays as 5 × 3 = 15.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Mathematical Symbols"
        ]
      }
    },
    {
      "id": 10,
      "question": "What does <pre>&amp;pound;</pre> display?",
      "options": {
        "A": "Weight symbol (lb)",
        "B": "Number sign (#)",
        "C": "Hash symbol (#)",
        "D": "British pound symbol (£)"
      },
      "correct": "D",
      "explanation": "The <pre>&amp;pound;</pre> entity displays the British pound sterling symbol (£). Example: <pre>Cost: &amp;pound;45.00</pre> displays as Cost: £45.00.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Currency Symbols"
        ]
      }
    },
    {
      "id": 11,
      "question": "Which entity should you use to display a single quotation mark?",
      "options": {
        "A": "<pre>&amp;squot;</pre>",
        "B": "<pre>&amp;quote;</pre>",
        "C": "<pre>&amp;apos;</pre>",
        "D": "<pre>&amp;singlequote;</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>&amp;apos;</pre> entity displays a single quotation mark or apostrophe ('). While often optional in HTML content, it's essential within attribute values that use single quotes.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Special Characters"
        ]
      }
    },
    {
      "id": 12,
      "question": "What symbol does <pre>&amp;trade;</pre> produce?",
      "options": {
        "A": "Trademark symbol (™)",
        "B": "Registered trademark (®)",
        "C": "Copyright symbol (©)",
        "D": "Trade symbol (🏪)"
      },
      "correct": "A",
      "explanation": "The <pre>&amp;trade;</pre> entity produces the trademark symbol (™). This indicates an unregistered trademark or that a name, logo, or phrase is being used as a trademark.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Copyright and Trademarks"
        ]
      }
    },
    {
      "id": 13,
      "question": "Which entity represents the division sign?",
      "options": {
        "A": "<pre>&amp;slash;</pre>",
        "B": "<pre>&amp;div;</pre>",
        "C": "<pre>&amp;division;</pre>",
        "D": "<pre>&amp;divide;</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>&amp;divide;</pre> entity represents the division sign (÷). This is used in mathematical expressions. Example: <pre>12 &amp;divide; 3 = 4</pre> displays as 12 ÷ 3 = 4.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Mathematical Symbols"
        ]
      }
    },
    {
      "id": 14,
      "question": "What does <pre>&amp;yen;</pre> display?",
      "options": {
        "A": "Japanese yen symbol (¥)",
        "B": "Chinese yuan symbol (元)",
        "C": "Dollar symbol ($)",
        "D": "Cent symbol (¢)"
      },
      "correct": "A",
      "explanation": "The <pre>&amp;yen;</pre> entity displays the Japanese yen symbol (¥). This currency symbol is used for both Japanese yen and Chinese yuan in some contexts.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Currency Symbols"
        ]
      }
    },
    {
      "id": 15,
      "question": "Which entity represents the plus-minus symbol?",
      "options": {
        "A": "<pre>&amp;+-;</pre>",
        "B": "<pre>&amp;plusminus;</pre>",
        "C": "<pre>&amp;pm;</pre>",
        "D": "<pre>&amp;plusmn;</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>&amp;plusmn;</pre> entity represents the plus-minus symbol (±). This is used in mathematics to indicate approximation or tolerance. Example: <pre>Temperature: 20&amp;plusmn;2°C</pre> displays as Temperature: 20±2°C.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Mathematical Symbols"
        ]
      }
    },
    {
      "id": 16,
      "question": "When should you use HTML entities instead of typing characters directly?",
      "options": {
        "A": "When the character has special meaning in HTML",
        "B": "Always, for all special characters",
        "C": "Only for mathematical symbols",
        "D": "Never, with UTF-8 encoding"
      },
      "correct": "A",
      "explanation": "You should use HTML entities when the character has special meaning in HTML syntax (<, >, &, \") or when you need to ensure the character displays correctly across different systems and encodings, even though UTF-8 handles most characters directly.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Character References"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the main purpose of <pre>&amp;nbsp;</pre>?",
      "options": {
        "A": "To indent the first line of a paragraph",
        "B": "To create extra spacing between paragraphs",
        "C": "To prevent line breaks between words",
        "D": "To create visible space characters"
      },
      "correct": "C",
      "explanation": "The main purpose of <pre>&amp;nbsp;</pre> (non-breaking space) is to prevent browsers from breaking a line between words or elements. It's commonly used in names, dates, measurements, and other contexts where breaking would be awkward.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Whitespace Handling"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which entity represents the degree symbol?",
      "options": {
        "A": "<pre>&amp;temp;</pre>",
        "B": "<pre>&amp;degree;</pre>",
        "C": "<pre>&amp;deg;</pre>",
        "D": "<pre>&amp;circle;</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>&amp;deg;</pre> entity represents the degree symbol (°). This is commonly used for temperatures, angles, and geographic coordinates. Example: <pre>45&amp;deg; angle</pre> displays as 45° angle.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Symbols and Icons"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does <pre>&amp;cent;</pre> display?",
      "options": {
        "A": "Currency symbol (¤)",
        "B": "Dollar symbol ($)",
        "C": "Percent symbol (%)",
        "D": "Cent symbol (¢)"
      },
      "correct": "D",
      "explanation": "The <pre>&amp;cent;</pre> entity displays the cent symbol (¢). This is used primarily for US currency subdivisions. Example: <pre>Price: 99&amp;cent;</pre> displays as Price: 99¢.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Currency Symbols"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which entity represents the section symbol?",
      "options": {
        "A": "<pre>&amp;sect;</pre>",
        "B": "<pre>&amp;section;</pre>",
        "C": "<pre>&amp;para;</pre>",
        "D": "<pre>&amp;sec;</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>&amp;sect;</pre> entity represents the section symbol (§). This is commonly used in legal documents and references to indicate sections. Example: <pre>See &amp;sect; 4.2</pre> displays as See § 4.2.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Symbols and Icons"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the numeric entity for the copyright symbol?",
      "options": {
        "A": "<pre>&amp;#174;</pre>",
        "B": "<pre>&amp;#169;</pre>",
        "C": "<pre>&amp;#8482;</pre>",
        "D": "<pre>&amp;#64;</pre>"
      },
      "correct": "B",
      "explanation": "The numeric entity <pre>&amp;#169;</pre> represents the copyright symbol (©). HTML entities can be written using named entities (<pre>&amp;copy;</pre>) or numeric entities using either decimal (<pre>&amp;#169;</pre>) or hexadecimal (<pre>&amp;#xA9;</pre>) codes.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Character References"
        ]
      }
    },
    {
      "id": 22,
      "question": "Which entity produces the bullet point symbol?",
      "options": {
        "A": "<pre>&amp;dot;</pre>",
        "B": "<pre>&amp;bullet;</pre>",
        "C": "<pre>&amp;bull;</pre>",
        "D": "<pre>&amp;list;</pre>"
      },
      "correct": "C",
      "explanation": "The <pre>&amp;bull;</pre> entity produces the bullet point symbol (•). This can be used to create custom list markers or separate items inline. Example: <pre>Item &amp;bull; Item</pre> displays as Item • Item.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Symbols and Icons"
        ]
      }
    },
    {
      "id": 23,
      "question": "What does <pre>&amp;frac12;</pre> display?",
      "options": {
        "A": "Vulgar fraction one half (½)",
        "B": "Division symbol (÷)",
        "C": "Number 1/2",
        "D": "Mathematical fraction"
      },
      "correct": "A",
      "explanation": "The <pre>&amp;frac12;</pre> entity displays the vulgar fraction one half (½). Other fraction entities include <pre>&amp;frac14;</pre> for ¼ and <pre>&amp;frac34;</pre> for ¾.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Mathematical Symbols"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which entity represents the em dash?",
      "options": {
        "A": "<pre>&amp;longdash;</pre>",
        "B": "<pre>&amp;emdash;</pre>",
        "C": "<pre>&amp;dash;</pre>",
        "D": "<pre>&amp;mdash;</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>&amp;mdash;</pre> entity represents the em dash (—), which is a long dash used for punctuation, similar to parentheses or colons. The shorter en dash is <pre>&amp;ndash;</pre> (–).",
      "topic": {
        "topics": [
          "HTML Entities",
          "Special Characters"
        ]
      }
    },
    {
      "id": 25,
      "question": "What is the primary reason to use <pre>&amp;nbsp;</pre> instead of regular spaces?",
      "options": {
        "A": "To create wider spacing",
        "B": "To prevent unwanted line breaks",
        "C": "To improve SEO",
        "D": "To make text bold"
      },
      "correct": "B",
      "explanation": "The primary reason to use <pre>&amp;nbsp;</pre> instead of regular spaces is to prevent browsers from breaking lines at that point. Regular spaces are 'breaking spaces' where lines can wrap, while non-breaking spaces keep content together.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Whitespace Handling"
        ]
      }
    },
    {
      "id": 26,
      "question": "Which entity represents the inverted question mark used in Spanish?",
      "options": {
        "A": "<pre>&amp;invertquest;</pre>",
        "B": "<pre>&amp;iquest;</pre>",
        "C": "<pre>&amp;spanishquest;</pre>",
        "D": "<pre>&amp;question;</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>&amp;iquest;</pre> entity represents the inverted question mark (¿) used at the beginning of questions in Spanish. The inverted exclamation mark is <pre>&amp;iexcl;</pre> (¡).",
      "topic": {
        "topics": [
          "HTML Entities",
          "Special Characters"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does <pre>&amp;middot;</pre> display?",
      "options": {
        "A": "Bullet point (•)",
        "B": "Middle dot (·)",
        "C": "Decimal point (.)",
        "D": "Multiplication dot (⋅)"
      },
      "correct": "B",
      "explanation": "The <pre>&amp;middot;</pre> entity displays the middle dot (·), which is used as a decimal point in some countries, as a multiplication sign, or as a separator in lists and names.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Mathematical Symbols"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which entity should you use to display the ampersand in HTML content?",
      "options": {
        "A": "<pre>&amp;amp;</pre>",
        "B": "<pre>&amp;</pre>",
        "C": "<pre>&amp;and;</pre>",
        "D": "<pre>&amp;ersand;</pre>"
      },
      "correct": "A",
      "explanation": "You must use <pre>&amp;amp;</pre> to display an ampersand in HTML content because the ampersand character (&) is used to start entity references. If you use a plain &, the browser will try to interpret what follows as an entity.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Character References"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the hexadecimal entity for the Euro symbol?",
      "options": {
        "A": "<pre>&amp;#x20AC;</pre>",
        "B": "<pre>&amp;#x24;</pre>",
        "C": "<pre>&amp;#xA3;</pre>",
        "D": "<pre>&amp;#x20;</pre>"
      },
      "correct": "A",
      "explanation": "The hexadecimal entity for the Euro symbol is <pre>&amp;#x20AC;</pre>. HTML entities can be written in hexadecimal format with <pre>&amp;#x</pre> followed by the hex code, or in decimal format with <pre>&amp;#</pre> followed by the decimal code.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Character References"
        ]
      }
    },
    {
      "id": 30,
      "question": "When are HTML entities absolutely necessary in modern HTML?",
      "options": {
        "A": "Only when using ASCII encoding",
        "B": "For all non-alphanumeric characters",
        "C": "For characters <, >, &, and \" in content",
        "D": "Never, with proper UTF-8 declaration"
      },
      "correct": "C",
      "explanation": "HTML entities are absolutely necessary for the characters <, >, &, and \" when they appear in HTML content, because these characters have special meaning in HTML syntax. While UTF-8 can display most characters directly, these four must be escaped to avoid parsing errors.",
      "topic": {
        "topics": [
          "HTML Entities",
          "Character References"
        ]
      }
    }
  ]
}
