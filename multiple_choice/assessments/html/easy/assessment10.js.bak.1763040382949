module.exports = {
  "metadata": {
    "title": "HTML Entities and Special Characters: Practical Usage",
    "description": "Test your understanding of HTML entities usage, special character handling, and practical applications in web development.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Entity Syntax",
      "Reserved Characters",
      "Symbol Usage",
      "Whitespace Entities",
      "Mathematical Entities",
      "Currency Entities",
      "Legal Symbols",
      "Punctuation Entities",
      "Entity Best Practices",
      "Character Display"
    ],
    "topicLinks": [
      {
        "topicName": "Entity Syntax",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Entity"
      },
      {
        "topicName": "Reserved Characters",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content"
      },
      {
        "topicName": "Symbol Usage",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/symbol"
      },
      {
        "topicName": "Whitespace Entities",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br"
      },
      {
        "topicName": "Mathematical Entities",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo"
      },
      {
        "topicName": "Currency Entities",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data"
      },
      {
        "topicName": "Legal Symbols",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small"
      },
      {
        "topicName": "Punctuation Entities",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
      },
      {
        "topicName": "Entity Best Practices",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Character_references"
      },
      {
        "topicName": "Character Display",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset"
      }
    ],
    "assessmentId": 10,
    "assessmentUniqueId": 1762890392150,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the correct way to display '5 < 10' in HTML content?",
      "options": {
        "A": "<pre>5 < 10</pre>",
        "B": "<pre>5 &amp;lt; 10</pre>",
        "C": "<pre>5 &lt; 10</pre>",
        "D": "<pre>5 [less than] 10</pre>"
      },
      "correct": "B",
      "explanation": "To display '5 < 10' correctly, you must use <pre>&amp;lt;</pre> for the less-than symbol. Writing <pre>5 < 10</pre> would cause a parsing error because the browser would interpret <pre>< 10</pre> as an invalid HTML tag.",
      "topic": {
        "topics": [
          "Reserved Characters",
          "Entity Syntax"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which entity would you use to keep 'Chapter 3' from breaking across lines?",
      "options": {
        "A": "<pre>Chapter&3</pre>",
        "B": "<pre>Chapter 3</pre>",
        "C": "<pre>Chapter&amp;nbsp;3</pre>",
        "D": "<pre>Chapter&break;3</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>&amp;nbsp;</pre> between 'Chapter' and '3' to create a non-breaking space: <pre>Chapter&amp;nbsp;3</pre>. This ensures the phrase stays together on one line instead of potentially breaking as 'Chapter' on one line and '3' on the next.",
      "topic": {
        "topics": [
          "Whitespace Entities",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 3,
      "question": "How do you correctly display 'Smith & Sons' in HTML?",
      "options": {
        "A": "<pre>Smith & Sons</pre>",
        "B": "<pre>Smith &amp;amp; Sons</pre>",
        "C": "<pre>Smith &amp; Sons</pre>",
        "D": "<pre>Smith and Sons</pre>"
      },
      "correct": "B",
      "explanation": "The correct way is <pre>Smith &amp;amp; Sons</pre>. The ampersand (&) must be escaped as <pre>&amp;amp;</pre> because it's used to start entity references. Using a plain & would cause parsing issues.",
      "topic": {
        "topics": [
          "Reserved Characters",
          "Entity Syntax"
        ]
      }
    },
    {
      "id": 4,
      "question": "What does <pre>&amp;euro;50 &amp;plusmn; &amp;euro;5</pre> display?",
      "options": {
        "A": "€50 ÷ €5",
        "B": "€50 + €5",
        "C": "€50 - €5",
        "D": "€50 ± €5"
      },
      "correct": "D",
      "explanation": "This displays as '€50 ± €5', showing a price of 50 euros with a tolerance of plus or minus 5 euros. <pre>&amp;euro;</pre> produces the Euro symbol and <pre>&amp;plusmn;</pre> produces the plus-minus symbol.",
      "topic": {
        "topics": [
          "Currency Entities",
          "Mathematical Entities"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which entity combination creates a proper copyright notice?",
      "options": {
        "A": "<pre>&amp;copy; 2025 My Company</pre>",
        "B": "<pre>&copy; 2025 My Company</pre>",
        "C": "<pre>Copyright 2025 My Company</pre>",
        "D": "<pre>&amp;copyright; 2025 My Company</pre>"
      },
      "correct": "A",
      "explanation": "<pre>&amp;copy; 2025 My Company</pre> creates '© 2025 My Company'. The <pre>&amp;copy;</pre> entity produces the copyright symbol, which is the standard way to indicate copyright in web content.",
      "topic": {
        "topics": [
          "Legal Symbols",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 6,
      "question": "How do you display mathematical expression '8 × 4 ÷ 2' correctly?",
      "options": {
        "A": "<pre>8 × 4 ÷ 2</pre>",
        "B": "<pre>8 x 4 / 2</pre>",
        "C": "<pre>8 * 4 / 2</pre>",
        "D": "<pre>8 &amp;times; 4 &amp;divide; 2</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>8 &amp;times; 4 &amp;divide; 2</pre> to display proper mathematical symbols. <pre>&amp;times;</pre> creates the multiplication sign (×) and <pre>&amp;divide;</pre> creates the division sign (÷), which are more appropriate for mathematical expressions than 'x' and '/'.",
      "topic": {
        "topics": [
          "Mathematical Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the main advantage of using <pre>&amp;nbsp;</pre> over multiple regular spaces?",
      "options": {
        "A": "It creates a space that won't collapse",
        "B": "It makes text invisible",
        "C": "It increases font size",
        "D": "It adds special styling"
      },
      "correct": "A",
      "explanation": "The main advantage is that <pre>&amp;nbsp;</pre> creates a space that won't collapse. Multiple regular spaces in HTML collapse into a single space, but each <pre>&amp;nbsp;</pre> creates a distinct, non-collapsing space that maintains its width.",
      "topic": {
        "topics": [
          "Whitespace Entities",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which entity would you use for a temperature reading like '25°C'?",
      "options": {
        "A": "<pre>25&amp;deg;C</pre>",
        "B": "<pre>25°C</pre>",
        "C": "<pre>25 degrees C</pre>",
        "D": "<pre>25&temperature;C</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>25&amp;deg;C</pre> to display '25°C'. The <pre>&amp;deg;</pre> entity produces the degree symbol, which is the standard way to indicate temperature measurements in scientific and technical content.",
      "topic": {
        "topics": [
          "Symbol Usage",
          "Mathematical Entities"
        ]
      }
    },
    {
      "id": 9,
      "question": "How do you correctly quote someone with nested quotes in HTML?",
      "options": {
        "A": "<pre>He said, &amp;quot;She told me, &amp;apos;Hello&amp;apos;&amp;quot;</pre>",
        "B": "<pre>He said, \"She told me, 'Hello'\"</pre>",
        "C": "<pre>He said, &quot;She told me, 'Hello'&quot;</pre>",
        "D": "<pre>He said, \"She told me, &apos;Hello&apos;\"</pre>"
      },
      "correct": "A",
      "explanation": "For nested quotes, use <pre>&amp;quot;</pre> for double quotes and <pre>&amp;apos;</pre> for single quotes: <pre>He said, &amp;quot;She told me, &amp;apos;Hello&amp;apos;&amp;quot;</pre>. This ensures proper parsing and display regardless of the quoting style used in the HTML.",
      "topic": {
        "topics": [
          "Punctuation Entities",
          "Reserved Characters"
        ]
      }
    },
    {
      "id": 10,
      "question": "What does <pre>Price: &amp;pound;15 &amp;ndash; &amp;pound;25</pre> display?",
      "options": {
        "A": "Price: £15 to £25",
        "B": "Price: £15 - £25",
        "C": "Price: £15 – £25",
        "D": "Price: £15 — £25"
      },
      "correct": "C",
      "explanation": "This displays as 'Price: £15 – £25'. <pre>&amp;pound;</pre> creates the British pound symbol and <pre>&amp;ndash;</pre> creates an en dash (–), which is typographically appropriate for ranges.",
      "topic": {
        "topics": [
          "Currency Entities",
          "Punctuation Entities"
        ]
      }
    },
    {
      "id": 11,
      "question": "When must you use HTML entities instead of typing characters directly?",
      "options": {
        "A": "For numbers and letters only",
        "B": "For all non-alphabet characters",
        "C": "Only when using old browsers",
        "D": "For <, >, &, and \" in content"
      },
      "correct": "D",
      "explanation": "You must use HTML entities for the characters <, >, &, and \" when they appear in HTML content because these characters have special meaning in HTML syntax and would be interpreted as code rather than displayed as content.",
      "topic": {
        "topics": [
          "Reserved Characters",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which entity combination creates a proper registered trademark notice?",
      "options": {
        "A": "<pre>SuperProduct&registered;</pre>",
        "B": "<pre>SuperProduct&reg;</pre>",
        "C": "<pre>SuperProduct (R)</pre>",
        "D": "<pre>SuperProduct&amp;reg;</pre>"
      },
      "correct": "D",
      "explanation": "<pre>SuperProduct&amp;reg;</pre> creates 'SuperProduct®'. The <pre>&amp;reg;</pre> entity produces the registered trademark symbol, which is the proper way to indicate a registered trademark in web content.",
      "topic": {
        "topics": [
          "Legal Symbols",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 13,
      "question": "How do you display 'if x > y then' correctly in HTML?",
      "options": {
        "A": "<pre>if x &amp;gt; y then</pre>",
        "B": "<pre>if x > y then</pre>",
        "C": "<pre>if x greater than y then</pre>",
        "D": "<pre>if x &gt; y then</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>if x &amp;gt; y then</pre> to display 'if x > y then'. The greater-than symbol (>) must be escaped as <pre>&amp;gt;</pre> when used in content to prevent parsing issues, though it's less critical than escaping <.",
      "topic": {
        "topics": [
          "Reserved Characters",
          "Entity Syntax"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the purpose of using <pre>&amp;nbsp;</pre> in a company name like 'ABC Inc.'?",
      "options": {
        "A": "Makes the name bold",
        "B": "Prevents 'ABC' and 'Inc.' from separating",
        "C": "Adds extra spacing for style",
        "D": "Hides the name from search engines"
      },
      "correct": "B",
      "explanation": "Using <pre>ABC&amp;nbsp;Inc.</pre> prevents the company name from breaking across lines. This ensures 'ABC Inc.' always appears together, which is important for proper branding and readability.",
      "topic": {
        "topics": [
          "Whitespace Entities",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 15,
      "question": "Which entity would you use for a fraction like '3⁄4'?",
      "options": {
        "A": "<pre>3&amp;divide;4</pre>",
        "B": "<pre>3/4</pre>",
        "C": "<pre>&amp;frac34;</pre>",
        "D": "<pre>3&fraction;4</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>&amp;frac34;</pre> to display the vulgar fraction three quarters (¾). HTML provides entities for common fractions including <pre>&amp;frac12;</pre> (½), <pre>&amp;frac14;</pre> (¼), and <pre>&amp;frac34;</pre> (¾).",
      "topic": {
        "topics": [
          "Mathematical Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 16,
      "question": "How do you display a price range in Japanese yen correctly?",
      "options": {
        "A": "<pre>&amp;yen;1,000 &amp;ndash; &amp;yen;5,000</pre>",
        "B": "<pre>¥1,000 - ¥5,000</pre>",
        "C": "<pre>Yen 1,000 to 5,000</pre>",
        "D": "<pre>1000&yen; to 5000&yen;</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>&amp;yen;1,000 &amp;ndash; &amp;yen;5,000</pre> to display '¥1,000 – ¥5,000'. This uses the proper yen symbol entity and an en dash for the range, creating typographically correct pricing information.",
      "topic": {
        "topics": [
          "Currency Entities",
          "Punctuation Entities"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the difference between <pre>&amp;quot;</pre> and typing \" directly?",
      "options": {
        "A": "<pre>&amp;quot;</pre> is larger",
        "B": "<pre>&amp;quot;</pre> works everywhere, \" may not in attributes",
        "C": "\" is only for programming",
        "D": "There is no difference"
      },
      "correct": "B",
      "explanation": "The key difference is that <pre>&amp;quot;</pre> works consistently everywhere in HTML, while using \" directly may cause issues in attribute values. For example, <pre>title=\"He said, &amp;quot;Hello&amp;quot;\"</pre> works correctly, while nested quotes without entities would break.",
      "topic": {
        "topics": [
          "Reserved Characters",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which entity would you use for a measurement like '10 × 15 cm'?",
      "options": {
        "A": "<pre>10 by 15 cm</pre>",
        "B": "<pre>10 x 15 cm</pre>",
        "C": "<pre>10 &amp;times; 15 cm</pre>",
        "D": "<pre>10*15 cm</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>10 &amp;times; 15 cm</pre> to display '10 × 15 cm'. The multiplication symbol (×) is the standard way to denote dimensions in measurements and is more professional than using the letter 'x'.",
      "topic": {
        "topics": [
          "Mathematical Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 19,
      "question": "How do you create a proper trademark notice for an unregistered product?",
      "options": {
        "A": "<pre>CoolProduct&trade;</pre>",
        "B": "<pre>CoolProduct&amp;trade;</pre>",
        "C": "<pre>CoolProduct (TM)</pre>",
        "D": "<pre>CoolProduct&trademark;</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>CoolProduct&amp;trade;</pre> to create 'CoolProduct™'. The <pre>&amp;trade;</pre> entity produces the trademark symbol, which is used for unregistered trademarks or when trademark registration is pending.",
      "topic": {
        "topics": [
          "Legal Symbols",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 20,
      "question": "What does <pre>5&amp;plusmn;2&amp;deg;C</pre> display?",
      "options": {
        "A": "5-2°C",
        "B": "5+2°C",
        "C": "5±2°C",
        "D": "5÷2°C"
      },
      "correct": "C",
      "explanation": "This displays as '5±2°C', indicating a temperature of 5 degrees Celsius with a tolerance of plus or minus 2 degrees. <pre>&amp;plusmn;</pre> creates the plus-minus symbol and <pre>&amp;deg;</pre> creates the degree symbol.",
      "topic": {
        "topics": [
          "Mathematical Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 21,
      "question": "When is it acceptable to use regular spaces instead of <pre>&amp;nbsp;</pre>?",
      "options": {
        "A": "Only in programming code",
        "B": "When line breaks at that point are acceptable",
        "C": "Never, always use entities",
        "D": "Only for single spaces"
      },
      "correct": "B",
      "explanation": "Use regular spaces when line breaks at that point are acceptable and natural. Reserve <pre>&amp;nbsp;</pre> for situations where you specifically want to prevent line breaks, such as in names, dates, measurements, or between closely related words.",
      "topic": {
        "topics": [
          "Whitespace Entities",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 22,
      "question": "How do you display 'The file is < 1MB' correctly?",
      "options": {
        "A": "<pre>The file is smaller than 1MB</pre>",
        "B": "<pre>The file is < 1MB</pre>",
        "C": "<pre>The file is [less than] 1MB</pre>",
        "D": "<pre>The file is &amp;lt; 1MB</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>The file is &amp;lt; 1MB</pre> to display 'The file is < 1MB'. The less-than symbol must always be escaped in HTML content to prevent it from being interpreted as the start of a tag.",
      "topic": {
        "topics": [
          "Reserved Characters",
          "Entity Syntax"
        ]
      }
    },
    {
      "id": 23,
      "question": "Which entity would you use for a British price like '£25 per item'?",
      "options": {
        "A": "<pre>25 pounds per item</pre>",
        "B": "<pre>GBP 25 per item</pre>",
        "C": "<pre>&amp;pound;25 per item</pre>",
        "D": "<pre>25&currency; per item</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>&amp;pound;25 per item</pre> to display '£25 per item'. The <pre>&amp;pound;</pre> entity produces the British pound sterling symbol, which is the standard way to denote British currency in content.",
      "topic": {
        "topics": [
          "Currency Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is the benefit of using <pre>&amp;apos;</pre> over a straight apostrophe?",
      "options": {
        "A": "It looks more curved",
        "B": "It works reliably in all contexts, including attributes",
        "C": "It's required for SEO",
        "D": "It makes text italic"
      },
      "correct": "B",
      "explanation": "The main benefit is that <pre>&amp;apos;</pre> works reliably in all HTML contexts, including within attribute values. While straight apostrophes usually work in content, using the entity ensures consistent behavior everywhere.",
      "topic": {
        "topics": [
          "Punctuation Entities",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 25,
      "question": "How do you display a mathematical formula like 'a ≠ b'?",
      "options": {
        "A": "<pre>a not equal to b</pre>",
        "B": "<pre>a != b</pre>",
        "C": "<pre>a &amp;ne; b</pre>",
        "D": "<pre>a &notequal; b</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>a &amp;ne; b</pre> to display 'a ≠ b'. The <pre>&amp;ne;</pre> entity produces the not equal to symbol (≠), which is the proper mathematical symbol for inequality.",
      "topic": {
        "topics": [
          "Mathematical Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 26,
      "question": "Which entity combination creates proper dimensions: '2 × 4 × 6 inches'?",
      "options": {
        "A": "<pre>2*4*6 inches</pre>",
        "B": "<pre>2 x 4 x 6 inches</pre>",
        "C": "<pre>2 by 4 by 6 inches</pre>",
        "D": "<pre>2 &amp;times; 4 &amp;times; 6 inches</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>2 &amp;times; 4 &amp;times; 6 inches</pre> to display '2 × 4 × 6 inches'. Using the multiplication symbol (×) for dimensions is standard practice in technical and manufacturing contexts.",
      "topic": {
        "topics": [
          "Mathematical Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does <pre>&amp;nbsp;&amp;nbsp;&amp;nbsp;</pre> create?",
      "options": {
        "A": "A line break",
        "B": "One extra-wide space",
        "C": "A tab character",
        "D": "Three non-breaking spaces in a row"
      },
      "correct": "D",
      "explanation": "<pre>&amp;nbsp;&amp;nbsp;&amp;nbsp;</pre> creates three consecutive non-breaking spaces. Unlike regular spaces that collapse, each <pre>&amp;nbsp;</pre> maintains its width, creating consistent spacing for alignment or indentation purposes.",
      "topic": {
        "topics": [
          "Whitespace Entities",
          "Entity Syntax"
        ]
      }
    },
    {
      "id": 28,
      "question": "How do you correctly display 'The value is > 100'?",
      "options": {
        "A": "<pre>The value is &amp;gt; 100</pre>",
        "B": "<pre>The value is > 100</pre>",
        "C": "<pre>The value is greater than 100</pre>",
        "D": "<pre>The value is &gt; 100</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>The value is &amp;gt; 100</pre> to display 'The value is > 100'. While modern browsers often handle > correctly in content, using the entity ensures consistent behavior across all browsers and contexts.",
      "topic": {
        "topics": [
          "Reserved Characters",
          "Entity Best Practices"
        ]
      }
    },
    {
      "id": 29,
      "question": "Which entity would you use for a French price like '50€'?",
      "options": {
        "A": "<pre>50&amp;euro;</pre>",
        "B": "<pre>50 Euros</pre>",
        "C": "<pre>50&euro;</pre>",
        "D": "<pre>50&currency;</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>50&amp;euro;</pre> to display '50€'. The <pre>&amp;euro;</pre> entity produces the Euro symbol, and in French formatting, the currency symbol typically follows the amount rather than preceding it.",
      "topic": {
        "topics": [
          "Currency Entities",
          "Symbol Usage"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the most important reason to use HTML entities?",
      "options": {
        "A": "To make text look fancy",
        "B": "To ensure characters display correctly and avoid parsing errors",
        "C": "To improve page loading speed",
        "D": "To comply with HTML validators only"
      },
      "correct": "B",
      "explanation": "The most important reason to use HTML entities is to ensure characters display correctly and avoid parsing errors. Entities guarantee that reserved characters like <, >, &, and \" are treated as content rather than HTML code, preventing display issues and rendering errors.",
      "topic": {
        "topics": [
          "Entity Best Practices",
          "Character Display"
        ]
      }
    }
  ]
}
