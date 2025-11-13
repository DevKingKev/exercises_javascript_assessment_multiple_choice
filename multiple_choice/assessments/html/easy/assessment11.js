module.exports = {
  "metadata": {
    "title": "HTML Entities: Everyday Usage and Common Scenarios",
    "description": "Test your practical knowledge of HTML entities usage in common web development scenarios and content creation.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Common Entity Usage",
      "Content Formatting",
      "Business Applications",
      "Technical Documentation",
      "International Content",
      "Mathematical Expressions",
      "Financial Displays",
      "Legal Notices",
      "Measurement Units",
      "Text Alignment"
    ],
    "topicLinks": [
      {
        "topicName": "Common Entity Usage",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Entity"
      },
      {
        "topicName": "Content Formatting",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content"
      },
      {
        "topicName": "Business Applications",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small"
      },
      {
        "topicName": "Technical Documentation",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"
      },
      {
        "topicName": "International Content",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset"
      },
      {
        "topicName": "Mathematical Expressions",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo"
      },
      {
        "topicName": "Financial Displays",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data"
      },
      {
        "topicName": "Legal Notices",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"
      },
      {
        "topicName": "Measurement Units",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"
      },
      {
        "topicName": "Text Alignment",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br"
      }
    ],
    "assessmentId": 11,
    "assessmentUniqueId": 1762890813247,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "How would you display a company name with '& Co.' that shouldn't break across lines?",
      "options": {
        "A": "<pre>Smith &amp;amp; Co.</pre>",
        "B": "<pre>Smith & Co.</pre>",
        "C": "<pre>Smith and Co.</pre>",
        "D": "<pre>Smith&amp;Co.</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>Smith &amp;amp; Co.</pre> to display 'Smith & Co.' with proper ampersand encoding and to keep the company name together. The ampersand must be escaped, and the space before 'Co.' ensures readability while maintaining the entity's integrity.",
      "topic": {
        "topics": [
          "Business Applications",
          "Common Entity Usage"
        ]
      }
    },
    {
      "id": 2,
      "question": "What's the correct way to show dimensions for a photo: '8 × 10 inches'?",
      "options": {
        "A": "<pre>8 &amp;times; 10 inches</pre>",
        "B": "<pre>8 x 10 inches</pre>",
        "C": "<pre>8 by 10 inches</pre>",
        "D": "<pre>8*10 inches</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>8 &amp;times; 10 inches</pre> to display '8 × 10 inches'. The multiplication symbol (×) is the standard for denoting dimensions in photography, printing, and other technical fields.",
      "topic": {
        "topics": [
          "Measurement Units",
          "Technical Documentation"
        ]
      }
    },
    {
      "id": 3,
      "question": "How do you create a proper copyright footer for a website?",
      "options": {
        "A": "<pre>&amp;copy; 2025 Company Name. All rights reserved.</pre>",
        "B": "<pre>Copyright 2025 Company Name. All rights reserved.</pre>",
        "C": "<pre>(c) 2025 Company Name. All rights reserved.</pre>",
        "D": "<pre>© 2025 Company Name. All rights reserved.</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>&amp;copy; 2025 Company Name. All rights reserved.</pre> to create a standard copyright notice. The <pre>&amp;copy;</pre> entity ensures the copyright symbol displays correctly across all browsers and devices.",
      "topic": {
        "topics": [
          "Legal Notices",
          "Business Applications"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which entity would you use to prevent a date from breaking: 'January 1, 2025'?",
      "options": {
        "A": "<pre>January&amp;nbsp;1,&amp;nbsp;2025</pre>",
        "B": "<pre>January 1, 2025</pre>",
        "C": "<pre>January-1-2025</pre>",
        "D": "<pre>01/01/2025</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>January&amp;nbsp;1,&amp;nbsp;2025</pre> to ensure the entire date stays together on one line. This prevents awkward line breaks like 'January' on one line and '1, 2025' on the next.",
      "topic": {
        "topics": [
          "Content Formatting",
          "Common Entity Usage"
        ]
      }
    },
    {
      "id": 5,
      "question": "How do you display a temperature range with tolerance: '20°C ± 2°C'?",
      "options": {
        "A": "<pre>20&amp;deg;C &amp;plusmn; 2&amp;deg;C</pre>",
        "B": "<pre>20°C +/- 2°C</pre>",
        "C": "<pre>20C ± 2C</pre>",
        "D": "<pre>20 degrees C plus/minus 2 degrees C</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>20&amp;deg;C &amp;plusmn; 2&amp;deg;C</pre> to display '20°C ± 2°C'. This uses the degree symbol for temperature and the plus-minus symbol for tolerance, creating professional technical notation.",
      "topic": {
        "topics": [
          "Measurement Units",
          "Technical Documentation"
        ]
      }
    },
    {
      "id": 6,
      "question": "What's the proper way to show a British price in an online store?",
      "options": {
        "A": "<pre>&amp;pound;49.99</pre>",
        "B": "<pre>£49.99</pre>",
        "C": "<pre>GBP 49.99</pre>",
        "D": "<pre>49.99 pounds</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>&amp;pound;49.99</pre> to display '£49.99'. The pound symbol before the amount is standard British formatting, and using the entity ensures consistent display across all platforms.",
      "topic": {
        "topics": [
          "Financial Displays",
          "International Content"
        ]
      }
    },
    {
      "id": 7,
      "question": "How do you correctly display a comparison: 'if age < 18 then'?",
      "options": {
        "A": "<pre>if age &amp;lt; 18 then</pre>",
        "B": "<pre>if age < 18 then</pre>",
        "C": "<pre>if age less than 18 then</pre>",
        "D": "<pre>if age [less than] 18 then</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>if age &amp;lt; 18 then</pre> to display 'if age < 18 then'. The less-than symbol must be escaped to prevent the browser from interpreting it as the start of an HTML tag.",
      "topic": {
        "topics": [
          "Technical Documentation",
          "Common Entity Usage"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which entity combination creates a professional fraction display?",
      "options": {
        "A": "<pre>3&amp;frac14; cups flour</pre>",
        "B": "<pre>3 1/4 cups flour</pre>",
        "C": "<pre>3.25 cups flour</pre>",
        "D": "<pre>3 and 1/4 cups flour</pre>"
      },
      "correct": "A",
      "explanation": "Use <pre>3&amp;frac14; cups flour</pre> to display '3¼ cups flour'. Vulgar fractions like ¼ are commonly used in recipes and provide better readability than decimal or slash fractions.",
      "topic": {
        "topics": [
          "Measurement Units",
          "Content Formatting"
        ]
      }
    },
    {
      "id": 9,
      "question": "How do you display a registered product name in a product description?",
      "options": {
        "A": "<pre>SuperWidget®</pre>",
        "B": "<pre>SuperWidget&amp;reg;</pre>",
        "C": "<pre>SuperWidget (R)</pre>",
        "D": "<pre>SuperWidget [Registered]</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>SuperWidget&amp;reg;</pre> to display 'SuperWidget®'. The registered trademark symbol should immediately follow the product name without spaces for proper trademark usage.",
      "topic": {
        "topics": [
          "Legal Notices",
          "Business Applications"
        ]
      }
    },
    {
      "id": 10,
      "question": "What's the correct way to show a price range in euros?",
      "options": {
        "A": "<pre>€10 - €50</pre>",
        "B": "<pre>&amp;euro;10 &amp;ndash; &amp;euro;50</pre>",
        "C": "<pre>10 to 50 euros</pre>",
        "D": "<pre>EUR 10-50</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>&amp;euro;10 &amp;ndash; &amp;euro;50</pre> to display '€10 – €50'. The en dash (–) is typographically correct for ranges, and repeating the currency symbol ensures clarity.",
      "topic": {
        "topics": [
          "Financial Displays",
          "Content Formatting"
        ]
      }
    },
    {
      "id": 11,
      "question": "How do you prevent a measurement from breaking: '5 × 7 × 9 cm'?",
      "options": {
        "A": "<pre>5×7×9 cm</pre>",
        "B": "<pre>5&amp;nbsp;&amp;times;&amp;nbsp;7&amp;nbsp;&amp;times;&amp;nbsp;9&amp;nbsp;cm</pre>",
        "C": "<pre>5 x 7 x 9 cm</pre>",
        "D": "<pre>5 by 7 by 9 cm</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>5&amp;nbsp;&amp;times;&amp;nbsp;7&amp;nbsp;&amp;times;&amp;nbsp;9&amp;nbsp;cm</pre> to ensure the entire measurement stays together. Non-breaking spaces prevent line breaks between numbers and symbols.",
      "topic": {
        "topics": [
          "Measurement Units",
          "Text Alignment"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which entity would you use for a mathematical equation: 'π ≈ 3.14'?",
      "options": {
        "A": "<pre>pi ≈ 3.14</pre>",
        "B": "<pre>&amp;pi; &amp;asymp; 3.14</pre>",
        "C": "<pre>pi ~ 3.14</pre>",
        "D": "<pre>π ≈ 3.14</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>&amp;pi; &amp;asymp; 3.14</pre> to display 'π ≈ 3.14'. The pi symbol and approximately equal to symbol are standard mathematical notation that should be represented with entities for consistency.",
      "topic": {
        "topics": [
          "Mathematical Expressions",
          "Technical Documentation"
        ]
      }
    },
    {
      "id": 13,
      "question": "How do you display a Japanese price correctly in an international store?",
      "options": {
        "A": "<pre>1500 yen</pre>",
        "B": "<pre>&amp;yen;1,500</pre>",
        "C": "<pre>¥1,500</pre>",
        "D": "<pre>JPY 1,500</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>&amp;yen;1,500</pre> to display '¥1,500'. The yen symbol before the amount is standard in Japanese pricing, and the entity ensures proper display across different systems.",
      "topic": {
        "topics": [
          "Financial Displays",
          "International Content"
        ]
      }
    },
    {
      "id": 14,
      "question": "What's the proper way to show a comparison with greater than?",
      "options": {
        "A": "<pre>if score > 90 then A</pre>",
        "B": "<pre>if score &amp;gt; 90 then A</pre>",
        "C": "<pre>if score greater than 90 then A</pre>",
        "D": "<pre>if score &gt; 90 then A</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>if score &amp;gt; 90 then A</pre> to display 'if score > 90 then A'. While > is less critical to escape than <, using the entity ensures consistent behavior and follows best practices.",
      "topic": {
        "topics": [
          "Technical Documentation",
          "Common Entity Usage"
        ]
      }
    },
    {
      "id": 15,
      "question": "How do you create a professional-looking list of ingredients with fractions?",
      "options": {
        "A": "<pre>1.5 cups sugar</pre>",
        "B": "<pre>1&amp;frac12; cups sugar</pre>",
        "C": "<pre>1 1/2 cups sugar</pre>",
        "D": "<pre>One and half cups sugar</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>1&amp;frac12; cups sugar</pre> to display '1½ cups sugar'. Vulgar fractions are traditional in recipes and provide better visual hierarchy than decimal or text representations.",
      "topic": {
        "topics": [
          "Content Formatting",
          "Measurement Units"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which entity combination shows a temperature with degree symbol?",
      "options": {
        "A": "<pre>98.6 F</pre>",
        "B": "<pre>98.6&amp;deg;F</pre>",
        "C": "<pre>98.6°F</pre>",
        "D": "<pre>98.6 degrees F</pre>"
      },
      "correct": "B",
      "explanation": "Use <pre>98.6&amp;deg;F</pre> to display '98.6°F'. The degree symbol is essential for proper temperature notation and should be used with the scale abbreviation without spaces.",
      "topic": {
        "topics": [
          "Measurement Units",
          "Technical Documentation"
        ]
      }
    },
    {
      "id": 17,
      "question": "How do you display a company name with 'LLC' that shouldn't separate?",
      "options": {
        "A": "<pre>TechInnovationsLLC</pre>",
        "B": "<pre>Tech Innovations LLC</pre>",
        "C": "<pre>Tech Innovations&amp;nbsp;LLC</pre>",
        "D": "<pre>Tech Innovations (LLC)</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>Tech Innovations&amp;nbsp;LLC</pre> to ensure the legal designation stays with the company name. This prevents awkward breaks like 'Tech Innovations' on one line and 'LLC' alone on the next.",
      "topic": {
        "topics": [
          "Business Applications",
          "Text Alignment"
        ]
      }
    },
    {
      "id": 18,
      "question": "What's the correct way to show a mathematical product?",
      "options": {
        "A": "<pre>Area = 5 x 3</pre>",
        "B": "<pre>Area = 5 * 3</pre>",
        "C": "<pre>Area = 5 &amp;times; 3</pre>",
        "D": "<pre>Area = 15</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>Area = 5 &amp;times; 3</pre> to display 'Area = 5 × 3'. The multiplication symbol is standard mathematical notation for showing the dimensions being multiplied.",
      "topic": {
        "topics": [
          "Mathematical Expressions",
          "Technical Documentation"
        ]
      }
    },
    {
      "id": 19,
      "question": "How do you display a European-style price with comma decimal?",
      "options": {
        "A": "<pre>EUR 25.99</pre>",
        "B": "<pre>€25.99</pre>",
        "C": "<pre>&amp;euro;25,99</pre>",
        "D": "<pre>25,99 euros</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>&amp;euro;25,99</pre> to display '€25,99'. Many European countries use commas as decimal separators, and the currency symbol typically precedes the amount.",
      "topic": {
        "topics": [
          "Financial Displays",
          "International Content"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which entity prevents a phone number from breaking?",
      "options": {
        "A": "<pre>(555) 123-4567</pre>",
        "B": "<pre>555-123-4567</pre>",
        "C": "<pre>(555)&amp;nbsp;123&amp;nbsp;4567</pre>",
        "D": "<pre>5551234567</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>(555)&amp;nbsp;123&amp;nbsp;4567</pre> to display '(555) 123 4567' with non-breaking spaces. This keeps the phone number together while maintaining readable formatting.",
      "topic": {
        "topics": [
          "Content Formatting",
          "Text Alignment"
        ]
      }
    },
    {
      "id": 21,
      "question": "How do you show a division calculation in educational content?",
      "options": {
        "A": "<pre>15 ÷ 3 = 5</pre>",
        "B": "<pre>15 / 3 = 5</pre>",
        "C": "<pre>15 &amp;divide; 3 = 5</pre>",
        "D": "<pre>15 divided by 3 equals 5</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>15 &amp;divide; 3 = 5</pre> to display '15 ÷ 3 = 5'. The division symbol is standard mathematical notation and is more appropriate for educational content than the slash.",
      "topic": {
        "topics": [
          "Mathematical Expressions",
          "Technical Documentation"
        ]
      }
    },
    {
      "id": 22,
      "question": "What's the proper way to display a range of temperatures?",
      "options": {
        "A": "<pre>20 to 25 degrees C</pre>",
        "B": "<pre>20°C - 25°C</pre>",
        "C": "<pre>20&amp;deg;C &amp;ndash; 25&amp;deg;C</pre>",
        "D": "<pre>20C-25C</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>20&amp;deg;C &amp;ndash; 25&amp;deg;C</pre> to display '20°C – 25°C'. The en dash is typographically correct for ranges, and repeating the unit ensures clarity.",
      "topic": {
        "topics": [
          "Measurement Units",
          "Content Formatting"
        ]
      }
    },
    {
      "id": 23,
      "question": "How do you display a trademark for a new product name?",
      "options": {
        "A": "<pre>CoolApp™</pre>",
        "B": "<pre>CoolApp (TM)</pre>",
        "C": "<pre>CoolApp&amp;trade;</pre>",
        "D": "<pre>CoolApp [Trademark]</pre>"
      },
      "correct": "C",
      "explanation": "Use <pre>CoolApp&amp;trade;</pre> to display 'CoolApp™'. The trademark symbol is used for unregistered marks or when registration is pending, and should immediately follow the product name.",
      "topic": {
        "topics": [
          "Legal Notices",
          "Business Applications"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which entity combination creates proper chemical notation?",
      "options": {
        "A": "<pre>H~2~O</pre>",
        "B": "<pre>H2O</pre>",
        "C": "<pre>H-two-O</pre>",
        "D": "<pre>H&amp;sub2;O</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>H&amp;sub2;O</pre> to display 'H₂O'. The subscript 2 is essential for proper chemical notation and can be created using the subscript entity.",
      "topic": {
        "topics": [
          "Technical Documentation",
          "Mathematical Expressions"
        ]
      }
    },
    {
      "id": 25,
      "question": "How do you prevent a person's title from separating from their name?",
      "options": {
        "A": "<pre>Doctor Smith</pre>",
        "B": "<pre>Dr. Smith</pre>",
        "C": "<pre>Dr.Smith</pre>",
        "D": "<pre>Dr.&amp;nbsp;Smith</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>Dr.&amp;nbsp;Smith</pre> to ensure the title and name stay together. This prevents awkward line breaks where 'Dr.' appears at the end of one line and 'Smith' at the beginning of the next.",
      "topic": {
        "topics": [
          "Content Formatting",
          "Text Alignment"
        ]
      }
    },
    {
      "id": 26,
      "question": "What's the correct way to show a mathematical inequality?",
      "options": {
        "A": "<pre>x != y</pre>",
        "B": "<pre>x not equal to y</pre>",
        "C": "<pre>x ≠ y</pre>",
        "D": "<pre>x &amp;ne; y</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>x &amp;ne; y</pre> to display 'x ≠ y'. The not equal to symbol is standard mathematical notation and should be used in technical and educational content.",
      "topic": {
        "topics": [
          "Mathematical Expressions",
          "Technical Documentation"
        ]
      }
    },
    {
      "id": 27,
      "question": "How do you display a measurement with non-breaking spaces?",
      "options": {
        "A": "<pre>10ft × 8ft</pre>",
        "B": "<pre>10 ft x 8 ft</pre>",
        "C": "<pre>10 by 8 feet</pre>",
        "D": "<pre>10&amp;nbsp;ft&amp;nbsp;&amp;times;&amp;nbsp;8&amp;nbsp;ft</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>10&amp;nbsp;ft&amp;nbsp;&amp;times;&amp;nbsp;8&amp;nbsp;ft</pre> to ensure the entire measurement stays together. This prevents the unit from separating from the number or the dimensions from breaking across lines.",
      "topic": {
        "topics": [
          "Measurement Units",
          "Text Alignment"
        ]
      }
    },
    {
      "id": 28,
      "question": "Which entity shows a proper fraction in a recipe?",
      "options": {
        "A": "<pre>three quarters teaspoon salt</pre>",
        "B": "<pre>3/4 teaspoon salt</pre>",
        "C": "<pre>0.75 teaspoon salt</pre>",
        "D": "<pre>&amp;frac34; teaspoon salt</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>&amp;frac34; teaspoon salt</pre> to display '¾ teaspoon salt'. Vulgar fractions are traditional in recipes and are more visually distinctive than other formats.",
      "topic": {
        "topics": [
          "Content Formatting",
          "Measurement Units"
        ]
      }
    },
    {
      "id": 29,
      "question": "How do you display a price with tolerance in engineering specs?",
      "options": {
        "A": "<pre>plus or minus 50 euros</pre>",
        "B": "<pre>±€50</pre>",
        "C": "<pre>+/- €50</pre>",
        "D": "<pre>&amp;plusmn;&amp;euro;50</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>&amp;plusmn;&amp;euro;50</pre> to display '±€50'. This notation is common in engineering and technical specifications to indicate tolerance or variation.",
      "topic": {
        "topics": [
          "Technical Documentation",
          "Financial Displays"
        ]
      }
    },
    {
      "id": 30,
      "question": "What's the main benefit of using HTML entities in international content?",
      "options": {
        "A": "Reduces file size",
        "B": "Makes content load faster",
        "C": "Improves SEO rankings",
        "D": "Ensures consistent display across different systems and languages"
      },
      "correct": "D",
      "explanation": "The main benefit is ensuring consistent display across different systems, browsers, and languages. Entities guarantee that special characters, symbols, and formatting appear correctly regardless of the user's system configuration or language settings.",
      "topic": {
        "topics": [
          "International Content",
          "Common Entity Usage"
        ]
      }
    }
  ]
}
