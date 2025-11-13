module.exports = {
    "metadata": {
        "title": "CSS Box Model, Display, and Text Styling",
        "description": "Test your understanding of the CSS box model, display properties, and text styling fundamentals.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 2,
        "assessmentUniqueId": 1731600000000,
        "testType": "multiple-choice",
        "topics": [
            "Box Model Basics",
            "Margin and Padding",
            "Display Property",
            "Width and Height",
            "Box Sizing",
            "Text Properties",
            "Font Properties",
            "Text Alignment"
        ],
        "topicLinks": [
            {
                "topicName": "Box Model Basics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model"
            },
            {
                "topicName": "Margin and Padding",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing"
            },
            {
                "topicName": "Display Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
            },
            {
                "topicName": "Width and Height",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/width"
            },
            {
                "topicName": "Box Sizing",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
            },
            {
                "topicName": "Text Properties",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text"
            },
            {
                "topicName": "Font Properties",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/font"
            },
            {
                "topicName": "Text Alignment",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"
            }
        ],
        "keywords": [
            "box-model",
            "margin",
            "padding",
            "border",
            "content",
            "display",
            "block",
            "inline",
            "inline-block",
            "none",
            "width",
            "height",
            "box-sizing",
            "content-box",
            "border-box",
            "text-align",
            "line-height",
            "letter-spacing",
            "word-spacing",
            "text-transform",
            "text-decoration",
            "font-size",
            "font-weight",
            "font-style",
            "text-indent",
            "white-space",
            "overflow",
            "vertical-align"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What are the four components of the CSS box model, listed from innermost to outermost?",
            "options": {
                "A": "Content, margin, padding, border",
                "B": "Content, border, padding, margin",
                "C": "Margin, border, padding, content",
                "D": "Content, padding, border, margin"
            },
            "correct": "D",
            "explanation": "The CSS box model consists of four layers from inside to outside: content (the actual content), padding (space around content), border (surrounds the padding), and margin (space outside the border).",
            "difficulty": "easy",
            "topic": "Box Model Basics"
        },
        {
            "id": 2,
            "question": "Which CSS property is used to add space between the content and the border of an element?",
            "options": {
                "A": "<pre>margin</pre>",
                "B": "<pre>padding</pre>",
                "C": "<pre>border-spacing</pre>",
                "D": "<pre>gap</pre>"
            },
            "correct": "B",
            "explanation": "The padding property adds space between an element's content and its border. Margin adds space outside the border, while gap is used in flexbox and grid layouts.",
            "difficulty": "easy",
            "topic": "Margin and Padding"
        },
        {
            "id": 3,
            "question": "What is the default value of the <pre>display</pre> property for a <pre>&lt;div&gt;</pre> element?",
            "options": {
                "A": "<pre>inline</pre>",
                "B": "<pre>block</pre>",
                "C": "<pre>inline-block</pre>",
                "D": "<pre>flex</pre>"
            },
            "correct": "B",
            "explanation": "The &lt;div&gt; element is a block-level element by default, which means it starts on a new line and takes up the full width available.",
            "difficulty": "easy",
            "topic": "Display Property"
        },
        {
            "id": 4,
            "question": "Which display value allows an element to sit on the same line as other elements while still respecting width and height properties?",
            "options": {
                "A": "<pre>inline-block</pre>",
                "B": "<pre>inline</pre>",
                "C": "<pre>block</pre>",
                "D": "<pre>flex</pre>"
            },
            "correct": "A",
            "explanation": "The inline-block value combines characteristics of both inline and block elements. Elements can sit on the same line like inline elements, but can have width and height set like block elements.",
            "difficulty": "easy",
            "topic": "Display Property"
        },
        {
            "id": 5,
            "question": "What happens when you set <pre>margin: 20px 10px;</pre> on an element?",
            "options": {
                "A": "Top and bottom margins are 20px, left and right margins are 10px",
                "B": "All margins are 20px",
                "C": "Top margin is 20px, bottom margin is 10px",
                "D": "Left and right margins are 20px, top and bottom margins are 10px"
            },
            "correct": "A",
            "explanation": "When using two values with margin (or padding), the first value applies to top and bottom, and the second value applies to left and right.",
            "difficulty": "easy",
            "topic": "Margin and Padding"
        },
        {
            "id": 6,
            "question": "Which property controls the capitalization of text?",
            "options": {
                "A": "<pre>text-transform</pre>",
                "B": "<pre>text-case</pre>",
                "C": "<pre>font-variant</pre>",
                "D": "<pre>text-style</pre>"
            },
            "correct": "A",
            "explanation": "The text-transform property controls text capitalization with values like uppercase, lowercase, capitalize, and none.",
            "difficulty": "easy",
            "topic": "Text Properties"
        },
        {
            "id": 7,
            "question": "What does <pre>box-sizing: border-box;</pre> do?",
            "options": {
                "A": "Removes the border from the element",
                "B": "Makes the border included in the element's total width and height",
                "C": "Makes padding and margin included in width and height",
                "D": "Only includes the content in width and height calculations"
            },
            "correct": "B",
            "explanation": "With box-sizing: border-box, the width and height properties include the content, padding, and border, but not the margin. This makes sizing elements more predictable.",
            "difficulty": "easy",
            "topic": "Box Sizing"
        },
        {
            "id": 8,
            "question": "Which CSS property is used to add space between individual letters in text?",
            "options": {
                "A": "<pre>letter-spacing</pre>",
                "B": "<pre>word-spacing</pre>",
                "C": "<pre>text-spacing</pre>",
                "D": "<pre>character-spacing</pre>"
            },
            "correct": "A",
            "explanation": "The letter-spacing property increases or decreases the space between characters in text. The word-spacing property affects space between words.",
            "difficulty": "easy",
            "topic": "Text Properties"
        },
        {
            "id": 9,
            "question": "What is the default value of <pre>box-sizing</pre> in CSS?",
            "options": {
                "A": "<pre>border-box</pre>",
                "B": "<pre>padding-box</pre>",
                "C": "<pre>content-box</pre>",
                "D": "<pre>margin-box</pre>"
            },
            "correct": "C",
            "explanation": "The default value is content-box, which means width and height only apply to the content area. Padding and border are added outside the specified width and height.",
            "difficulty": "easy",
            "topic": "Box Sizing"
        },
        {
            "id": 10,
            "question": "Which property controls the horizontal alignment of text within an element?",
            "options": {
                "A": "<pre>vertical-align</pre>",
                "B": "<pre>text-align</pre>",
                "C": "<pre>align-content</pre>",
                "D": "<pre>justify-content</pre>"
            },
            "correct": "B",
            "explanation": "The text-align property sets the horizontal alignment of text with values like left, right, center, and justify.",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 11,
            "question": "What happens when margins of two vertically adjacent block-level elements meet?",
            "options": {
                "A": "They add together",
                "B": "They multiply together",
                "C": "They cancel out completely",
                "D": "They collapse to the larger of the two margins"
            },
            "correct": "D",
            "explanation": "This is called margin collapse. When vertical margins of block-level elements meet, they collapse to use only the larger margin value, not the sum of both.",
            "difficulty": "easy",
            "topic": "Margin and Padding"
        },
        {
            "id": 12,
            "question": "Which display value completely removes an element from the document flow and hides it?",
            "options": {
                "A": "<pre>visibility: hidden</pre>",
                "B": "<pre>display: hidden</pre>",
                "C": "<pre>display: none</pre>",
                "D": "<pre>opacity: 0</pre>"
            },
            "correct": "C",
            "explanation": "display: none removes the element from the document flow entirely, as if it doesn't exist. visibility: hidden hides it but maintains its space. opacity: 0 makes it transparent but still takes up space and can be interacted with.",
            "difficulty": "easy",
            "topic": "Display Property"
        },
        {
            "id": 13,
            "question": "What does the <pre>line-height</pre> property control?",
            "options": {
                "A": "The space between lines of text",
                "B": "The thickness of underlines",
                "C": "The length of a line of text",
                "D": "The height of individual characters"
            },
            "correct": "A",
            "explanation": "The line-height property sets the amount of space between lines of text within an element. It's often expressed as a unitless number (multiplier of font-size) or as a length value.",
            "difficulty": "easy",
            "topic": "Text Properties"
        },
        {
            "id": 14,
            "question": "If an element has <pre>width: 200px; padding: 10px; border: 5px solid;</pre> and the default <pre>box-sizing</pre> value, what is its total width?",
            "options": {
                "A": "230px",
                "B": "210px",
                "C": "220px",
                "D": "200px"
            },
            "correct": "A",
            "explanation": "With the default box-sizing: content-box, the total width is calculated as: width (200px) + left padding (10px) + right padding (10px) + left border (5px) + right border (5px) = 230px.",
            "difficulty": "easy",
            "topic": "Box Model Basics"
        },
        {
            "id": 15,
            "question": "Which value of <pre>text-decoration</pre> removes underlines from links?",
            "options": {
                "A": "<pre>hidden</pre>",
                "B": "<pre>remove</pre>",
                "C": "<pre>none</pre>",
                "D": "<pre>clear</pre>"
            },
            "correct": "C",
            "explanation": "text-decoration: none removes all text decorations, including the default underline on links. Other common values include underline, overline, and line-through.",
            "difficulty": "easy",
            "topic": "Text Properties"
        },
        {
            "id": 16,
            "question": "What does <pre>margin: 0 auto;</pre> typically achieve when applied to a block-level element with a defined width?",
            "options": {
                "A": "Makes the element full width",
                "B": "Centers the element vertically",
                "C": "Removes all spacing",
                "D": "Centers the element horizontally"
            },
            "correct": "D",
            "explanation": "Setting left and right margins to 'auto' with a defined width centers a block-level element horizontally. The 0 sets top and bottom margins to zero.",
            "difficulty": "easy",
            "topic": "Margin and Padding"
        },
        {
            "id": 17,
            "question": "Which property sets the boldness or lightness of text?",
            "options": {
                "A": "<pre>font-style</pre>",
                "B": "<pre>font-weight</pre>",
                "C": "<pre>font-variant</pre>",
                "D": "<pre>text-weight</pre>"
            },
            "correct": "B",
            "explanation": "The font-weight property controls the boldness of text, with values ranging from 100 to 900, or keywords like normal, bold, bolder, and lighter.",
            "difficulty": "easy",
            "topic": "Font Properties"
        },
        {
            "id": 18,
            "question": "Can inline elements have top and bottom margins applied to them?",
            "options": {
                "A": "Yes, all margins work on inline elements",
                "B": "No, inline elements ignore top and bottom margins",
                "C": "Only if display is set to inline-block",
                "D": "Yes, but only with negative values"
            },
            "correct": "B",
            "explanation": "Inline elements ignore top and bottom margins (and padding mostly affects background, not layout). They only respect left and right margins. To apply vertical margins, use inline-block or block display.",
            "difficulty": "easy",
            "topic": "Display Property"
        },
        {
            "id": 19,
            "question": "What does the <pre>text-indent</pre> property do?",
            "options": {
                "A": "Indents only the first line of text in a block",
                "B": "Indents all lines in a paragraph",
                "C": "Creates hanging indents",
                "D": "Adds space between paragraphs"
            },
            "correct": "A",
            "explanation": "The text-indent property specifies the indentation of the first line of text in a block-level element. It's commonly used for paragraphs.",
            "difficulty": "easy",
            "topic": "Text Properties"
        },
        {
            "id": 20,
            "question": "Which shorthand properly sets padding values for top, right, bottom, and left in that order?",
            "options": {
                "A": "<pre>padding: 10px 20px 30px 40px;</pre>",
                "B": "<pre>padding: 10px 40px 30px 20px;</pre>",
                "C": "<pre>padding: 40px 30px 20px 10px;</pre>",
                "D": "<pre>padding: 10px 30px 20px 40px;</pre>"
            },
            "correct": "A",
            "explanation": "When using four values with padding (or margin), they are applied in clockwise order: top, right, bottom, left (often remembered as 'TRouBLe').",
            "difficulty": "easy",
            "topic": "Margin and Padding"
        },
        {
            "id": 21,
            "question": "What does <pre>font-style: italic;</pre> do?",
            "options": {
                "A": "Makes text bold",
                "B": "Changes the font family",
                "C": "Makes text slanted/italicized",
                "D": "Underlines the text"
            },
            "correct": "C",
            "explanation": "The font-style property with value 'italic' displays text in an italic (slanted) typeface. Other values include normal and oblique.",
            "difficulty": "easy",
            "topic": "Font Properties"
        },
        {
            "id": 22,
            "question": "Which CSS property can prevent text from wrapping to the next line?",
            "options": {
                "A": "<pre>text-wrap</pre>",
                "B": "<pre>line-break</pre>",
                "C": "<pre>word-break</pre>",
                "D": "<pre>white-space</pre>"
            },
            "correct": "D",
            "explanation": "The white-space property with value 'nowrap' prevents text from wrapping to a new line. Other values like 'pre', 'pre-wrap', and 'pre-line' control whitespace handling differently.",
            "difficulty": "easy",
            "topic": "Text Properties"
        },
        {
            "id": 23,
            "question": "What is the purpose of <pre>max-width</pre> property?",
            "options": {
                "A": "Sets the exact width of an element",
                "B": "Sets the maximum width an element can grow to",
                "C": "Sets the minimum width of an element",
                "D": "Removes width constraints"
            },
            "correct": "B",
            "explanation": "The max-width property sets the maximum width of an element. The element can be smaller but will never exceed this width, making it useful for responsive design.",
            "difficulty": "easy",
            "topic": "Width and Height"
        },
        {
            "id": 24,
            "question": "If you set <pre>padding: 15px;</pre> on an element, what happens?",
            "options": {
                "A": "Only top padding is 15px",
                "B": "Top and bottom padding is 15px",
                "C": "Left and right padding is 15px",
                "D": "All four sides have 15px padding"
            },
            "correct": "D",
            "explanation": "When using a single value with padding (or margin), it applies to all four sides equally (top, right, bottom, and left).",
            "difficulty": "easy",
            "topic": "Margin and Padding"
        },
        {
            "id": 25,
            "question": "Which property adds space between words in text?",
            "options": {
                "A": "<pre>letter-spacing</pre>",
                "B": "<pre>text-spacing</pre>",
                "C": "<pre>word-spacing</pre>",
                "D": "<pre>word-gap</pre>"
            },
            "correct": "C",
            "explanation": "The word-spacing property increases or decreases the space between words in text. letter-spacing affects individual characters.",
            "difficulty": "easy",
            "topic": "Text Properties"
        },
        {
            "id": 26,
            "question": "What does <pre>display: inline;</pre> do to an element?",
            "options": {
                "A": "Makes it take up the full width available",
                "B": "Hides the element",
                "C": "Allows it to sit on the same line as adjacent content without forcing line breaks",
                "D": "Makes it a flex container"
            },
            "correct": "C",
            "explanation": "Elements with display: inline flow along with text and other inline elements. They don't start on a new line and only take up as much width as needed. Width and height properties don't apply to inline elements.",
            "difficulty": "easy",
            "topic": "Display Property"
        },
        {
            "id": 27,
            "question": "Which value for <pre>text-align</pre> stretches lines to fill the full width by adjusting spacing?",
            "options": {
                "A": "<pre>center</pre>",
                "B": "<pre>justify</pre>",
                "C": "<pre>stretch</pre>",
                "D": "<pre>fill</pre>"
            },
            "correct": "B",
            "explanation": "text-align: justify adjusts word spacing so that text fills the full width of the container, creating straight edges on both left and right sides (except typically the last line).",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 28,
            "question": "If an element has <pre>width: 300px; box-sizing: border-box; padding: 20px; border: 10px solid;</pre>, what is the width of the content area?",
            "options": {
                "A": "300px",
                "B": "240px",
                "C": "260px",
                "D": "280px"
            },
            "correct": "B",
            "explanation": "With box-sizing: border-box, the total width is 300px INCLUDING padding and border. Content width = 300px - (left padding 20px + right padding 20px) - (left border 10px + right border 10px) = 240px.",
            "difficulty": "easy",
            "topic": "Box Sizing"
        },
        {
            "id": 29,
            "question": "What is the purpose of the <pre>overflow</pre> property?",
            "options": {
                "A": "Changes the display type",
                "B": "Sets the maximum width of content",
                "C": "Adds extra space around content",
                "D": "Controls what happens when content is too large for its container"
            },
            "correct": "D",
            "explanation": "The overflow property controls what happens when content overflows its container. Values include visible (default), hidden (clip overflow), scroll (show scrollbars), and auto (scrollbars when needed).",
            "difficulty": "easy",
            "topic": "Box Model Basics"
        },
        {
            "id": 30,
            "question": "What does negative margin do?",
            "options": {
                "A": "It's invalid CSS and does nothing",
                "B": "It creates extra space around the element",
                "C": "It pulls the element closer to adjacent elements, potentially overlapping them",
                "D": "It only works with inline elements"
            },
            "correct": "C",
            "explanation": "Negative margins are valid CSS and pull elements in the opposite direction of positive margins. They can be used to overlap elements, create layouts, or counteract other spacing.",
            "difficulty": "easy",
            "topic": "Margin and Padding"
        }
    ]
};
