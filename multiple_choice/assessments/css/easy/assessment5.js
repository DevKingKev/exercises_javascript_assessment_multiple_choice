module.exports = {
    "metadata": {
        "title": "CSS Selectors and Syntax Fundamentals",
        "description": "Master the fundamentals of CSS syntax, including selectors, properties, values, and proper CSS structure.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 5,
        "assessmentUniqueId": 1763043538027,
        "testType": "multiple-choice",
        "topics": [
            "CSS Syntax Structure",
            "Element Selectors",
            "Class Selectors",
            "ID Selectors",
            "Universal Selector",
            "Grouping Selectors",
            "Descendant Selectors",
            "CSS Comments",
            "Case Sensitivity",
            "Valid Properties and Values"
        ],
        "topicLinks": [
            {
                "topicName": "CSS Syntax Structure",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax"
            },
            {
                "topicName": "Element Selectors",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors"
            },
            {
                "topicName": "Class Selectors",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors"
            },
            {
                "topicName": "ID Selectors",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors"
            },
            {
                "topicName": "Universal Selector",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors"
            },
            {
                "topicName": "Grouping Selectors",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list"
            },
            {
                "topicName": "Descendant Selectors",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"
            },
            {
                "topicName": "CSS Comments",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Comments"
            },
            {
                "topicName": "Case Sensitivity",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Syntax"
            },
            {
                "topicName": "Valid Properties and Values",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declarations"
            }
        ],
        "keywords": [
            "selector",
            "property",
            "value",
            "declaration",
            "rule",
            "element-selector",
            "type-selector",
            "class-selector",
            "id-selector",
            "universal-selector",
            "grouping",
            "descendant-combinator",
            "descendant-selector",
            "comment",
            "syntax",
            "case-sensitive",
            "case-insensitive",
            "curly-braces",
            "semicolon",
            "colon",
            "dot",
            "hash",
            "asterisk",
            "comma",
            "whitespace",
            "css-rule",
            "declaration-block",
            "selector-list"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What are the three main parts of a CSS rule?",
            "options": {
                "A": "Selector, declaration, semicolon",
                "B": "Selector, property, value",
                "C": "Selector, declaration block, curly braces",
                "D": "Element, class, ID"
            },
            "correct": "B",
            "explanation": "A complete CSS rule consists of three parts: a selector (identifies which elements to style), a property (what aspect to change), and a value (how to change it). These are combined as: selector { property: value; }",
            "difficulty": "easy",
            "topic": "CSS Syntax Structure"
        },
        {
            "id": 2,
            "question": "Which symbol is used to denote a class selector in CSS?",
            "options": {
                "A": "#",
                "B": "*",
                "C": ".",
                "D": "@"
            },
            "correct": "C",
            "explanation": "A period (.) is used before the class name to create a class selector. For example, .myClass selects all elements with class=\"myClass\".",
            "difficulty": "easy",
            "topic": "Class Selectors"
        },
        {
            "id": 3,
            "question": "Which selector targets all HTML elements on a page?",
            "options": {
                "A": "<pre>all { }</pre>",
                "B": "<pre>body { }</pre>",
                "C": "<pre>* { }</pre>",
                "D": "<pre>everything { }</pre>"
            },
            "correct": "C",
            "explanation": "The asterisk (*) is the universal selector that matches every element on the page. It's often used for CSS resets: * { margin: 0; padding: 0; }",
            "difficulty": "easy",
            "topic": "Universal Selector"
        },
        {
            "id": 4,
            "question": "What character separates the property from its value in a CSS declaration?",
            "options": {
                "A": "Semicolon (;)",
                "B": "Equals sign (=)",
                "C": "Comma (,)",
                "D": "Colon (:)"
            },
            "correct": "D",
            "explanation": "A colon (:) separates the property name from its value in CSS. The semicolon (;) ends the declaration. Example: color: blue;",
            "difficulty": "easy",
            "topic": "CSS Syntax Structure"
        },
        {
            "id": 5,
            "question": "Which symbol is used to denote an ID selector?",
            "options": {
                "A": ".",
                "B": "%",
                "C": "&",
                "D": "#"
            },
            "correct": "D",
            "explanation": "The hash symbol (#) is used before the ID name to create an ID selector. For example, #header selects the element with id=\"header\".",
            "difficulty": "easy",
            "topic": "ID Selectors"
        },
        {
            "id": 6,
            "question": "How do you write a CSS comment?",
            "options": {
                "A": "<pre>// This is a comment</pre>",
                "B": "<pre>&lt;!-- This is a comment --&gt;</pre>",
                "C": "<pre>/* This is a comment */</pre>",
                "D": "<pre># This is a comment</pre>"
            },
            "correct": "C",
            "explanation": "CSS comments use /* to start and */ to end. They can span multiple lines and are ignored by the browser. Example: /* This styles the header */",
            "difficulty": "easy",
            "topic": "CSS Comments"
        },
        {
            "id": 7,
            "question": "Which selector would target all <pre>&lt;p&gt;</pre> elements inside a <pre>&lt;div&gt;</pre>?",
            "options": {
                "A": "<pre>div.p</pre>",
                "B": "<pre>div p</pre>",
                "C": "<pre>div + p</pre>",
                "D": "<pre>div, p</pre>"
            },
            "correct": "B",
            "explanation": "div p is a descendant selector (with a space between) that targets all <p> elements inside any <div>, regardless of how deeply nested they are.",
            "difficulty": "easy",
            "topic": "Descendant Selectors"
        },
        {
            "id": 8,
            "question": "How do you apply the same styles to multiple selectors?",
            "options": {
                "A": "List them with spaces between",
                "B": "List them with commas between",
                "C": "List them with semicolons between",
                "D": "Write separate rules for each"
            },
            "correct": "B",
            "explanation": "Selectors can be grouped using commas to apply the same styles to multiple elements. Example: h1, h2, h3 { color: blue; } styles all three heading levels.",
            "difficulty": "easy",
            "topic": "Grouping Selectors"
        },
        {
            "id": 9,
            "question": "Are CSS property names case-sensitive?",
            "options": {
                "A": "Yes, they must be lowercase",
                "B": "No, they are case-insensitive",
                "C": "Yes, they must be uppercase",
                "D": "Only in HTML documents"
            },
            "correct": "B",
            "explanation": "CSS property names are case-insensitive. However, it's standard practice to write them in lowercase for consistency. Both 'color' and 'COLOR' work, but lowercase is preferred.",
            "difficulty": "easy",
            "topic": "Case Sensitivity"
        },
        {
            "id": 10,
            "question": "What is the correct syntax for an element selector targeting all <pre>&lt;h1&gt;</pre> elements?",
            "options": {
                "A": "<pre>.h1 { }</pre>",
                "B": "<pre>#h1 { }</pre>",
                "C": "<pre>h1 { }</pre>",
                "D": "<pre>&lt;h1&gt; { }</pre>"
            },
            "correct": "C",
            "explanation": "Element selectors (also called type selectors) use just the element name without any special characters. h1 { } targets all <h1> elements.",
            "difficulty": "easy",
            "topic": "Element Selectors"
        },
        {
            "id": 11,
            "question": "Which of the following is a valid CSS declaration?",
            "options": {
                "A": "<pre>color: blue;</pre>",
                "B": "<pre>color = blue;</pre>",
                "C": "<pre>color blue;</pre>",
                "D": "<pre>color := blue;</pre>"
            },
            "correct": "A",
            "explanation": "The correct syntax uses a colon (:) between property and value, and ends with a semicolon (;). Format: property: value;",
            "difficulty": "easy",
            "topic": "CSS Syntax Structure"
        },
        {
            "id": 12,
            "question": "Can a single element have both a class and an ID?",
            "options": {
                "A": "No, only one or the other",
                "B": "Yes, but the ID will be ignored",
                "C": "Yes, both can be used on the same element",
                "D": "Only in HTML5"
            },
            "correct": "C",
            "explanation": "An element can have both a class and an ID attribute. Example: <div id=\"header\" class=\"container\">. The ID selector (#header) has higher specificity than the class selector (.container).",
            "difficulty": "easy",
            "topic": "ID Selectors"
        },
        {
            "id": 13,
            "question": "What character ends each CSS declaration?",
            "options": {
                "A": "Semicolon (;)",
                "B": "Colon (:)",
                "C": "Period (.)",
                "D": "Comma (,)"
            },
            "correct": "A",
            "explanation": "Each CSS declaration must end with a semicolon (;). While the last declaration in a block can technically omit it, it's best practice to always include it.",
            "difficulty": "easy",
            "topic": "CSS Syntax Structure"
        },
        {
            "id": 14,
            "question": "Which selector has the highest specificity?",
            "options": {
                "A": "ID selector",
                "B": "Class selector",
                "C": "Element selector",
                "D": "Universal selector"
            },
            "correct": "A",
            "explanation": "ID selectors have higher specificity than class selectors, which have higher specificity than element selectors. The universal selector (*) has the lowest specificity.",
            "difficulty": "easy",
            "topic": "ID Selectors"
        },
        {
            "id": 15,
            "question": "Are class names case-sensitive in CSS?",
            "options": {
                "A": "No, they are case-insensitive",
                "B": "Only in strict mode",
                "C": "Yes, .MyClass and .myclass are different",
                "D": "Only in external stylesheets"
            },
            "correct": "C",
            "explanation": "Class names ARE case-sensitive in CSS. .MyClass and .myclass are treated as different selectors and will match different HTML elements.",
            "difficulty": "easy",
            "topic": "Case Sensitivity"
        },
        {
            "id": 16,
            "question": "What do curly braces <pre>{ }</pre> contain in a CSS rule?",
            "options": {
                "A": "The selector",
                "B": "The declaration block with properties and values",
                "C": "The element name",
                "D": "Comments only"
            },
            "correct": "B",
            "explanation": "Curly braces { } enclose the declaration block, which contains one or more declarations (property: value pairs). Example: h1 { color: blue; font-size: 24px; }",
            "difficulty": "easy",
            "topic": "CSS Syntax Structure"
        },
        {
            "id": 17,
            "question": "Which is correct for selecting elements with class \"button\"?",
            "options": {
                "A": "<pre>button { }</pre>",
                "B": "<pre>class.button { }</pre>",
                "C": "<pre>#button { }</pre>",
                "D": "<pre>.button { }</pre>"
            },
            "correct": "D",
            "explanation": "Class selectors use a period (.) before the class name. .button selects all elements with class=\"button\". Note that 'button' without the period would select <button> elements.",
            "difficulty": "easy",
            "topic": "Class Selectors"
        },
        {
            "id": 18,
            "question": "In the selector <pre>ul li</pre>, what is the relationship between ul and li?",
            "options": {
                "A": "li is a descendant of ul",
                "B": "ul and li are grouped together",
                "C": "ul is a descendant of li",
                "D": "They are separate selectors"
            },
            "correct": "A",
            "explanation": "The space between selectors creates a descendant combinator. ul li selects all <li> elements that are descendants (children, grandchildren, etc.) of <ul> elements.",
            "difficulty": "easy",
            "topic": "Descendant Selectors"
        },
        {
            "id": 19,
            "question": "Can CSS comments span multiple lines?",
            "options": {
                "A": "No, only single line comments are allowed",
                "B": "Yes, comments can span multiple lines",
                "C": "Only with special syntax",
                "D": "Only in external stylesheets"
            },
            "correct": "B",
            "explanation": "CSS comments using /* */ can span multiple lines. Example:\n/* This is a\n   multi-line\n   comment */",
            "difficulty": "easy",
            "topic": "CSS Comments"
        },
        {
            "id": 20,
            "question": "Which selector would you use to target an element with id=\"header\"?",
            "options": {
                "A": "<pre>#header</pre>",
                "B": "<pre>header</pre>",
                "C": "<pre>.header</pre>",
                "D": "<pre>*header</pre>"
            },
            "correct": "A",
            "explanation": "ID selectors use the hash symbol (#) followed by the ID name. #header selects the element with id=\"header\". IDs should be unique on a page.",
            "difficulty": "easy",
            "topic": "ID Selectors"
        },
        {
            "id": 21,
            "question": "What does the following selector target: <pre>p, div, span</pre>?",
            "options": {
                "A": "Only paragraphs inside divs and spans",
                "B": "Paragraphs that are siblings of divs and spans",
                "C": "All paragraph, div, and span elements",
                "D": "The first p, div, and span on the page"
            },
            "correct": "C",
            "explanation": "Commas create a selector list (grouping) that applies the same styles to multiple different selectors. p, div, span targets all <p>, <div>, and <span> elements.",
            "difficulty": "easy",
            "topic": "Grouping Selectors"
        },
        {
            "id": 22,
            "question": "Which of these is NOT a valid property name?",
            "options": {
                "A": "<pre>text_align</pre>",
                "B": "<pre>font-size</pre>",
                "C": "<pre>background-color</pre>",
                "D": "<pre>border-radius</pre>"
            },
            "correct": "A",
            "explanation": "CSS property names use hyphens (-) not underscores (_). The correct property is text-align, not text_align. Hyphens are the standard separator in CSS property names.",
            "difficulty": "easy",
            "topic": "Valid Properties and Values"
        },
        {
            "id": 23,
            "question": "What is the difference between <pre>div p</pre> and <pre>div, p</pre>?",
            "options": {
                "A": "They are the same",
                "B": "div p selects p inside div; div, p selects all divs and all p elements",
                "C": "div, p is invalid syntax",
                "D": "div p is invalid syntax"
            },
            "correct": "B",
            "explanation": "div p (with space) is a descendant selector targeting <p> elements inside <div>. div, p (with comma) is a grouping selector targeting all <div> AND all <p> elements separately.",
            "difficulty": "easy",
            "topic": "Descendant Selectors"
        },
        {
            "id": 24,
            "question": "Can an element have multiple classes?",
            "options": {
                "A": "No, only one class per element",
                "B": "Only in HTML5",
                "C": "Yes, separate multiple classes with commas",
                "D": "Yes, separate multiple classes with spaces"
            },
            "correct": "D",
            "explanation": "An element can have multiple classes separated by spaces in the class attribute. Example: <div class=\"container active large\">. Each class can be targeted with .container, .active, or .large.",
            "difficulty": "easy",
            "topic": "Class Selectors"
        },
        {
            "id": 25,
            "question": "What makes <pre>h1 { color: blue }</pre> a complete CSS rule?",
            "options": {
                "A": "It has a selector and a value",
                "B": "It has a semicolon",
                "C": "It has curly braces",
                "D": "It has a selector, property, and value"
            },
            "correct": "D",
            "explanation": "A complete CSS rule requires: a selector (h1), a property (color), and a value (blue), enclosed in curly braces. The semicolon is recommended but optional for the last/only declaration.",
            "difficulty": "easy",
            "topic": "CSS Syntax Structure"
        },
        {
            "id": 26,
            "question": "Which selector targets all <pre>&lt;div&gt;</pre> elements?",
            "options": {
                "A": "<pre>.div</pre>",
                "B": "<pre>#div</pre>",
                "C": "<pre>div</pre>",
                "D": "<pre>*div</pre>"
            },
            "correct": "C",
            "explanation": "The element selector (type selector) div targets all <div> elements. No special characters are needed - just use the element name.",
            "difficulty": "easy",
            "topic": "Element Selectors"
        },
        {
            "id": 27,
            "question": "In CSS, which is case-sensitive?",
            "options": {
                "A": "Property names",
                "B": "Property values (like color names)",
                "C": "Class and ID names",
                "D": "Element names"
            },
            "correct": "C",
            "explanation": "Class and ID names are case-sensitive. .MyClass is different from .myclass. However, property names, element names, and most property values (like color names) are case-insensitive.",
            "difficulty": "easy",
            "topic": "Case Sensitivity"
        },
        {
            "id": 28,
            "question": "What does the universal selector <pre>*</pre> match when used alone?",
            "options": {
                "A": "Only block-level elements",
                "B": "Only inline elements",
                "C": "Every element in the document",
                "D": "Only elements without classes or IDs"
            },
            "correct": "C",
            "explanation": "The universal selector * matches every single element in the document. It's commonly used for CSS resets: * { margin: 0; padding: 0; box-sizing: border-box; }",
            "difficulty": "easy",
            "topic": "Universal Selector"
        },
        {
            "id": 29,
            "question": "Which descendant selector correctly targets <pre>&lt;span&gt;</pre> elements inside elements with class \"container\"?",
            "options": {
                "A": "<pre>.container, span</pre>",
                "B": "<pre>.container span</pre>",
                "C": "<pre>.container.span</pre>",
                "D": "<pre>.container > span</pre>"
            },
            "correct": "B",
            "explanation": ".container span uses the descendant combinator (space) to select all <span> elements inside elements with class=\"container\", at any nesting level. Option D would only select direct children.",
            "difficulty": "easy",
            "topic": "Descendant Selectors"
        },
        {
            "id": 30,
            "question": "What happens if you forget the semicolon at the end of a CSS declaration?",
            "options": {
                "A": "The entire stylesheet fails",
                "B": "Only that rule is ignored",
                "C": "Nothing, semicolons are optional",
                "D": "The next declaration may be ignored"
            },
            "correct": "D",
            "explanation": "If you omit the semicolon, the browser may ignore the next declaration because it can't tell where one declaration ends and another begins. While the last declaration in a block doesn't require a semicolon, it's best practice to always include it.",
            "difficulty": "easy",
            "topic": "CSS Syntax Structure"
        }
    ]
};
