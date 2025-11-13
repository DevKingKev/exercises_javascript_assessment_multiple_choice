module.exports = {
    "metadata": {
        "title": "CSS Text Styling and Typography",
        "description": "Master CSS text styling properties including fonts, colors, alignment, decorations, and spacing for effective typography.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 6,
        "assessmentUniqueId": 1763044162813,
        "testType": "multiple-choice",
        "topics": [
            "Color Property and Values",
            "Font Family and Font Stacks",
            "Font Size Units",
            "Font Weight",
            "Font Style",
            "Text Alignment",
            "Text Decoration",
            "Text Transform",
            "Line Height",
            "Letter and Word Spacing"
        ],
        "topicLinks": [
            {
                "topicName": "Color Property and Values",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/color"
            },
            {
                "topicName": "Font Family and Font Stacks",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family"
            },
            {
                "topicName": "Font Size Units",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size"
            },
            {
                "topicName": "Font Weight",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"
            },
            {
                "topicName": "Font Style",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-style"
            },
            {
                "topicName": "Text Alignment",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"
            },
            {
                "topicName": "Text Decoration",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"
            },
            {
                "topicName": "Text Transform",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform"
            },
            {
                "topicName": "Line Height",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"
            },
            {
                "topicName": "Letter and Word Spacing",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing"
            }
        ],
        "keywords": [
            "color",
            "font-family",
            "font-stack",
            "font-size",
            "px",
            "em",
            "rem",
            "percentage",
            "font-weight",
            "bold",
            "normal",
            "font-style",
            "italic",
            "oblique",
            "text-align",
            "left",
            "right",
            "center",
            "justify",
            "text-decoration",
            "underline",
            "line-through",
            "text-transform",
            "uppercase",
            "lowercase",
            "capitalize",
            "line-height",
            "letter-spacing",
            "word-spacing",
            "typography",
            "web-fonts",
            "fallback-fonts"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What is the purpose of a font stack in CSS?",
            "options": {
                "A": "To make fonts load faster",
                "B": "To provide fallback fonts if the preferred font is unavailable",
                "C": "To combine multiple fonts into one",
                "D": "To specify font size"
            },
            "correct": "B",
            "explanation": "A font stack is a list of fonts separated by commas, where the browser tries each font in order until it finds one that's available. Example: font-family: Arial, Helvetica, sans-serif; This ensures text displays even if the first choice isn't available.",
            "difficulty": "easy",
            "topic": "Font Family and Font Stacks"
        },
        {
            "id": 2,
            "question": "Which <pre>text-align</pre> value distributes text evenly between both margins?",
            "options": {
                "A": "center",
                "B": "distribute",
                "C": "justify",
                "D": "spread"
            },
            "correct": "C",
            "explanation": "text-align: justify; stretches lines of text to align with both the left and right margins, creating even edges on both sides. This is commonly used in newspapers and magazines.",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 3,
            "question": "What does <pre>text-transform: capitalize;</pre> do?",
            "options": {
                "A": "Converts all text to uppercase",
                "B": "Capitalizes the first letter of each word",
                "C": "Converts all text to lowercase",
                "D": "Capitalizes only the first letter of the first word"
            },
            "correct": "B",
            "explanation": "text-transform: capitalize; makes the first letter of each word uppercase while leaving the rest of the letters unchanged. For example, \"hello world\" becomes \"Hello World\".",
            "difficulty": "easy",
            "topic": "Text Transform"
        },
        {
            "id": 4,
            "question": "What is the difference between <pre>em</pre> and <pre>rem</pre> units for font-size?",
            "options": {
                "A": "They are exactly the same",
                "B": "rem is relative to the parent element, em is relative to the root element",
                "C": "em is relative to the parent element, rem is relative to the root element",
                "D": "em is for margins, rem is for font sizes"
            },
            "correct": "C",
            "explanation": "em units are relative to the font-size of the parent element and can compound through nesting. rem (root em) units are always relative to the root (html) element's font-size, providing more predictable sizing.",
            "difficulty": "easy",
            "topic": "Font Size Units"
        },
        {
            "id": 5,
            "question": "Which property controls the space between lines of text?",
            "options": {
                "A": "letter-spacing",
                "B": "line-height",
                "C": "word-spacing",
                "D": "text-spacing"
            },
            "correct": "B",
            "explanation": "line-height controls the vertical space between lines of text. A value of 1.5 means the line height is 1.5 times the font size. Proper line-height improves readability, typically between 1.4-1.8 for body text.",
            "difficulty": "easy",
            "topic": "Line Height"
        },
        {
            "id": 6,
            "question": "What does <pre>font-weight: 400;</pre> represent?",
            "options": {
                "A": "Extra bold",
                "B": "Light weight",
                "C": "Normal weight",
                "D": "Bold"
            },
            "correct": "C",
            "explanation": "Font-weight values range from 100 (thinnest) to 900 (thickest) in increments of 100. 400 is equivalent to 'normal', and 700 is equivalent to 'bold'. Not all fonts support all weights.",
            "difficulty": "easy",
            "topic": "Font Weight"
        },
        {
            "id": 7,
            "question": "How do you remove the underline from a link?",
            "options": {
                "A": "<pre>link-style: none;</pre>",
                "B": "<pre>text-decoration: remove;</pre>",
                "C": "<pre>underline: none;</pre>",
                "D": "<pre>text-decoration: none;</pre>"
            },
            "correct": "D",
            "explanation": "text-decoration: none; removes decorations like underlines from text. This is commonly used on links: a { text-decoration: none; } Remember to maintain accessibility when removing link underlines.",
            "difficulty": "easy",
            "topic": "Text Decoration"
        },
        {
            "id": 8,
            "question": "Which property controls the space between individual letters?",
            "options": {
                "A": "letter-spacing",
                "B": "word-spacing",
                "C": "character-spacing",
                "D": "text-spacing"
            },
            "correct": "A",
            "explanation": "letter-spacing controls the horizontal space between characters. Positive values increase spacing, negative values decrease it. Example: letter-spacing: 2px; or letter-spacing: 0.1em;",
            "difficulty": "easy",
            "topic": "Letter and Word Spacing"
        },
        {
            "id": 9,
            "question": "What is the difference between <pre>italic</pre> and <pre>oblique</pre> font styles?",
            "options": {
                "A": "They are exactly the same",
                "B": "Italic uses a designed italic font; oblique is slanted regular font",
                "C": "Oblique is bolder than italic",
                "D": "Italic is only for serif fonts"
            },
            "correct": "B",
            "explanation": "font-style: italic; uses a specifically designed italic version of the font if available. font-style: oblique; mechanically slants the regular font. Most fonts have italic variants, so oblique is rarely needed.",
            "difficulty": "easy",
            "topic": "Font Style"
        },
        {
            "id": 10,
            "question": "In a font stack, what type of font should be listed last?",
            "options": {
                "A": "A specific font name",
                "B": "A generic font family (serif, sans-serif, monospace)",
                "C": "A web font",
                "D": "A bold font"
            },
            "correct": "B",
            "explanation": "Always end a font stack with a generic font family (serif, sans-serif, monospace, cursive, or fantasy) as a final fallback. Example: font-family: Georgia, Times, serif; This ensures the browser always has a font to use.",
            "difficulty": "easy",
            "topic": "Font Family and Font Stacks"
        },
        {
            "id": 11,
            "question": "Which color format includes transparency?",
            "options": {
                "A": "rgb()",
                "B": "rgba()",
                "C": "hex (#RRGGBB)",
                "D": "hsl()"
            },
            "correct": "B",
            "explanation": "rgba() includes an alpha channel for transparency. The 'a' represents alpha (opacity) from 0 (fully transparent) to 1 (fully opaque). Example: rgba(255, 0, 0, 0.5) is semi-transparent red. hsla() also supports transparency.",
            "difficulty": "easy",
            "topic": "Color Property and Values"
        },
        {
            "id": 12,
            "question": "What does <pre>text-align: center;</pre> do to text?",
            "options": {
                "A": "Centers text vertically in its container",
                "B": "Centers text horizontally in its container",
                "C": "Centers text both horizontally and vertically",
                "D": "Centers the container on the page"
            },
            "correct": "B",
            "explanation": "text-align: center; centers text horizontally within its containing element. It does not affect vertical alignment. For vertical centering, you would need other techniques like flexbox or line-height.",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 13,
            "question": "If the root element has <pre>font-size: 16px;</pre>, what is <pre>2rem</pre> in pixels?",
            "options": {
                "A": "32px",
                "B": "24px",
                "C": "16px",
                "D": "8px"
            },
            "correct": "A",
            "explanation": "rem units are always relative to the root element's font-size. If the root is 16px, then 2rem = 2 × 16px = 32px. This makes rem units predictable and easy to calculate.",
            "difficulty": "easy",
            "topic": "Font Size Units"
        },
        {
            "id": 14,
            "question": "What is the numeric equivalent of <pre>font-weight: bold;</pre>?",
            "options": {
                "A": "400",
                "B": "500",
                "C": "600",
                "D": "700"
            },
            "correct": "D",
            "explanation": "font-weight: bold; is equivalent to font-weight: 700;. Similarly, 'normal' equals 400, 'lighter' and 'bolder' are relative values. The numeric scale goes from 100 to 900.",
            "difficulty": "easy",
            "topic": "Font Weight"
        },
        {
            "id": 15,
            "question": "How do you create a strikethrough effect on text?",
            "options": {
                "A": "<pre>text-decoration: strike;</pre>",
                "B": "<pre>font-decoration: line;</pre>",
                "C": "<pre>text-style: strikethrough;</pre>",
                "D": "<pre>text-decoration: line-through;</pre>"
            },
            "correct": "D",
            "explanation": "text-decoration: line-through; creates a horizontal line through the middle of text (strikethrough). Other values include 'underline', 'overline', and 'none'. You can also combine multiple values.",
            "difficulty": "easy",
            "topic": "Text Decoration"
        },
        {
            "id": 16,
            "question": "What does <pre>word-spacing: 10px;</pre> affect?",
            "options": {
                "A": "Space between letters",
                "B": "Space between lines",
                "C": "Space between words",
                "D": "Space between paragraphs"
            },
            "correct": "C",
            "explanation": "word-spacing controls the horizontal space between words. Positive values increase spacing, negative values decrease it. Example: word-spacing: 5px; adds 5 pixels of space between each word.",
            "difficulty": "easy",
            "topic": "Letter and Word Spacing"
        },
        {
            "id": 17,
            "question": "Which value makes text appear slanted?",
            "options": {
                "A": "<pre>font-style: italic;</pre>",
                "B": "<pre>font-weight: slant;</pre>",
                "C": "<pre>text-style: slant;</pre>",
                "D": "<pre>font-variant: slant;</pre>"
            },
            "correct": "A",
            "explanation": "font-style: italic; makes text appear slanted. If the font has a designed italic variant, it uses that; otherwise it may simulate it. The property accepts values: normal, italic, and oblique.",
            "difficulty": "easy",
            "topic": "Font Style"
        },
        {
            "id": 18,
            "question": "What is a recommended line-height value for improving readability of body text?",
            "options": {
                "A": "0.5",
                "B": "1.0",
                "C": "3.0",
                "D": "1.5"
            },
            "correct": "D",
            "explanation": "A line-height of 1.4 to 1.8 is recommended for body text to improve readability. 1.5 is a common choice. Values too small make text cramped and hard to read; values too large make lines feel disconnected.",
            "difficulty": "easy",
            "topic": "Line Height"
        },
        {
            "id": 19,
            "question": "Which is a valid hexadecimal color value?",
            "options": {
                "A": "#GGHHII",
                "B": "##FF0000",
                "C": "#XXYYZZ",
                "D": "#123456"
            },
            "correct": "D",
            "explanation": "Hexadecimal colors use # followed by 6 digits (0-9, A-F). #123456 is valid. The format is #RRGGBB where RR=red, GG=green, BB=blue. Shorthand is also available: #RGB expands to #RRGGBB (e.g., #F00 = #FF0000).",
            "difficulty": "easy",
            "topic": "Color Property and Values"
        },
        {
            "id": 20,
            "question": "How do you align text to the right edge of its container?",
            "options": {
                "A": "<pre>text-align: end;</pre>",
                "B": "<pre>text-align: right;</pre>",
                "C": "<pre>align: right;</pre>",
                "D": "<pre>text-position: right;</pre>"
            },
            "correct": "B",
            "explanation": "text-align: right; aligns text to the right edge of its container. Other values are left, center, and justify. Note that 'start' and 'end' values are also available and are direction-aware for RTL languages.",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 21,
            "question": "If parent element has <pre>font-size: 20px;</pre>, what is <pre>1.5em</pre> in pixels?",
            "options": {
                "A": "20px",
                "B": "30px",
                "C": "25px",
                "D": "15px"
            },
            "correct": "B",
            "explanation": "em units are relative to the parent element's font-size. 1.5em = 1.5 × 20px = 30px. Be careful with em units as they compound through nested elements, which can lead to unexpected sizes.",
            "difficulty": "easy",
            "topic": "Font Size Units"
        },
        {
            "id": 22,
            "question": "Which font-weight value represents the lightest weight?",
            "options": {
                "A": "300",
                "B": "200",
                "C": "100",
                "D": "400"
            },
            "correct": "C",
            "explanation": "font-weight: 100; is the lightest weight (Thin/Hairline). The scale goes from 100 (thinnest) to 900 (boldest) in increments of 100. However, not all fonts provide all nine weights.",
            "difficulty": "easy",
            "topic": "Font Weight"
        },
        {
            "id": 23,
            "question": "What does <pre>text-transform: uppercase;</pre> do?",
            "options": {
                "A": "Makes only the first letter uppercase",
                "B": "Converts all text to uppercase letters",
                "C": "Converts all text to lowercase letters",
                "D": "Capitalizes each word"
            },
            "correct": "B",
            "explanation": "text-transform: uppercase; converts all text to uppercase letters. For example, \"Hello World\" becomes \"HELLO WORLD\". Other values are lowercase, capitalize, and none.",
            "difficulty": "easy",
            "topic": "Text Transform"
        },
        {
            "id": 24,
            "question": "Can you apply multiple text-decoration values to an element?",
            "options": {
                "A": "No, only one decoration at a time",
                "B": "Yes, but only underline and overline",
                "C": "Yes, by using spaces between values",
                "D": "Only in CSS3"
            },
            "correct": "C",
            "explanation": "You can apply multiple text-decoration values separated by spaces. Example: text-decoration: underline overline; applies both underline and overline. You can also specify color and style.",
            "difficulty": "easy",
            "topic": "Text Decoration"
        },
        {
            "id": 25,
            "question": "Which property would you use to increase spacing between all words in a paragraph?",
            "options": {
                "A": "letter-spacing",
                "B": "line-height",
                "C": "text-spacing",
                "D": "word-spacing"
            },
            "correct": "D",
            "explanation": "word-spacing increases (positive values) or decreases (negative values) the space between words. Example: word-spacing: 0.5em; adds extra space between words. letter-spacing affects individual characters.",
            "difficulty": "easy",
            "topic": "Letter and Word Spacing"
        },
        {
            "id": 26,
            "question": "What is the default value of <pre>font-style</pre>?",
            "options": {
                "A": "italic",
                "B": "oblique",
                "C": "normal",
                "D": "regular"
            },
            "correct": "C",
            "explanation": "The default font-style is 'normal', which displays text in its standard upright form. Other values are 'italic' and 'oblique'. You can reset to normal with font-style: normal;",
            "difficulty": "easy",
            "topic": "Font Style"
        },
        {
            "id": 27,
            "question": "What unit is best for creating fluid typography that scales with viewport size?",
            "options": {
                "A": "rem (root em)",
                "B": "pt (points)",
                "C": "px (pixels)",
                "D": "cm (centimeters)"
            },
            "correct": "A",
            "explanation": "rem units are ideal for scalable typography because they're relative to the root font-size, which users can control. This respects user preferences and accessibility needs. Combining rem with media queries creates responsive typography.",
            "difficulty": "easy",
            "topic": "Font Size Units"
        },
        {
            "id": 28,
            "question": "In <pre>rgb(255, 0, 0)</pre>, what color does this represent?",
            "options": {
                "A": "Red",
                "B": "Green",
                "C": "Blue",
                "D": "White"
            },
            "correct": "A",
            "explanation": "rgb(255, 0, 0) represents red. RGB values go from 0-255 for each channel (Red, Green, Blue). Here, red is maximum (255) while green and blue are 0, resulting in pure red.",
            "difficulty": "easy",
            "topic": "Color Property and Values"
        },
        {
            "id": 29,
            "question": "Why might you use negative <pre>letter-spacing</pre>?",
            "options": {
                "A": "To remove all spacing",
                "B": "To make letters overlap",
                "C": "To bring letters closer together for a tighter appearance",
                "D": "It's not allowed"
            },
            "correct": "C",
            "explanation": "Negative letter-spacing values bring letters closer together, creating a tighter, more compact appearance. Example: letter-spacing: -1px; This can be useful for headlines or logos, but use sparingly as it may reduce readability.",
            "difficulty": "easy",
            "topic": "Letter and Word Spacing"
        },
        {
            "id": 30,
            "question": "What does a <pre>line-height</pre> value without units (e.g., 1.5) mean?",
            "options": {
                "A": "1.5 pixels",
                "B": "1.5 percent",
                "C": "1.5 times the element's font-size",
                "D": "It's invalid syntax"
            },
            "correct": "C",
            "explanation": "A unitless line-height value (e.g., 1.5) is a multiplier of the element's font-size. If font-size is 16px, line-height: 1.5 equals 24px. Unitless values are preferred as they scale proportionally with font-size changes.",
            "difficulty": "easy",
            "topic": "Line Height"
        }
    ]
};
