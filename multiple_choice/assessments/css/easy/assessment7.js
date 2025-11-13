module.exports = {
    "metadata": {
        "title": "CSS Typography and Text Effects",
        "description": "Explore advanced text styling techniques, color formats, font properties, and spacing options for professional typography in web design.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 7,
        "assessmentUniqueId": 1763044706335,
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
            "color-values",
            "named-colors",
            "hsl",
            "hsla",
            "rgba",
            "hex-colors",
            "web-safe-fonts",
            "system-fonts",
            "font-fallback",
            "generic-font-families",
            "relative-units",
            "absolute-units",
            "font-weight-scale",
            "font-style-variants",
            "text-align-values",
            "text-decoration-line",
            "text-decoration-style",
            "text-decoration-color",
            "text-transform-values",
            "line-height-units",
            "letter-spacing-values",
            "word-spacing-values",
            "typography-best-practices",
            "readability",
            "accessibility",
            "web-typography"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What does the first value in <pre>hsl(120, 100%, 50%)</pre> represent?",
            "options": {
                "A": "Saturation",
                "B": "Lightness",
                "C": "Hue (color angle on color wheel)",
                "D": "Opacity"
            },
            "correct": "C",
            "explanation": "In HSL (Hue, Saturation, Lightness), the first value is the hue, measured in degrees (0-360) on the color wheel. 0/360 is red, 120 is green, 240 is blue. hsl(120, 100%, 50%) creates pure green.",
            "difficulty": "easy",
            "topic": "Color Property and Values"
        },
        {
            "id": 2,
            "question": "Which generic font family displays text in a typewriter-style fixed-width font?",
            "options": {
                "A": "serif",
                "B": "sans-serif",
                "C": "monospace",
                "D": "cursive"
            },
            "correct": "C",
            "explanation": "The monospace generic font family uses fixed-width fonts where each character takes the same horizontal space. This is commonly used for code examples. Examples include Courier, Consolas, and Monaco.",
            "difficulty": "easy",
            "topic": "Font Family and Font Stacks"
        },
        {
            "id": 3,
            "question": "What is the advantage of using percentage (%) for font-size?",
            "options": {
                "A": "It's always exactly 100% of the viewport",
                "B": "It scales relative to the parent element's font-size",
                "C": "It never changes size",
                "D": "It's required by browsers"
            },
            "correct": "B",
            "explanation": "Percentage values for font-size are relative to the parent element's font-size. For example, if the parent is 16px, then 150% equals 24px. This creates scalable, responsive typography.",
            "difficulty": "easy",
            "topic": "Font Size Units"
        },
        {
            "id": 4,
            "question": "What is <pre>font-weight: 900;</pre> typically called?",
            "options": {
                "A": "Normal",
                "B": "Bold",
                "C": "Light",
                "D": "Black or Extra Bold"
            },
            "correct": "D",
            "explanation": "font-weight: 900; is the boldest weight, often called 'Black' or 'Extra Bold'. The full scale is: 100 (Thin), 200 (Extra Light), 300 (Light), 400 (Normal), 500 (Medium), 600 (Semi Bold), 700 (Bold), 800 (Extra Bold), 900 (Black).",
            "difficulty": "easy",
            "topic": "Font Weight"
        },
        {
            "id": 5,
            "question": "Can <pre>font-style</pre> accept values other than normal, italic, and oblique?",
            "options": {
                "A": "Yes, it can accept degree values for oblique",
                "B": "No, only those three values are allowed",
                "C": "Yes, it can accept color values",
                "D": "Yes, it can accept font-weight values"
            },
            "correct": "A",
            "explanation": "font-style: oblique can accept an optional angle value, like oblique 10deg, to specify the slant angle. If no angle is specified, the browser uses a default slant. This provides fine control over text appearance.",
            "difficulty": "easy",
            "topic": "Font Style"
        },
        {
            "id": 6,
            "question": "What happens with <pre>text-align: justify;</pre> on the last line of a paragraph?",
            "options": {
                "A": "The last line is also justified",
                "B": "The last line is typically left-aligned",
                "C": "The last line is centered",
                "D": "The last line is right-aligned"
            },
            "correct": "B",
            "explanation": "With text-align: justify, the last line of a paragraph is typically left-aligned (or follows the start direction in RTL languages). The property text-align-last can be used to control the alignment of the last line specifically.",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 7,
            "question": "How can you add an overline decoration to text?",
            "options": {
                "A": "<pre>text-style: overline;</pre>",
                "B": "<pre>text-decoration: overline;</pre>",
                "C": "<pre>text-line: top;</pre>",
                "D": "<pre>border-top: 1px;</pre>"
            },
            "correct": "B",
            "explanation": "text-decoration: overline; adds a line above the text. You can combine multiple decorations: text-decoration: underline overline; applies both. Modern CSS also allows specifying style and color.",
            "difficulty": "easy",
            "topic": "Text Decoration"
        },
        {
            "id": 8,
            "question": "What does <pre>text-transform: none;</pre> do?",
            "options": {
                "A": "Converts text to lowercase",
                "B": "Removes any text transformation, displaying original case",
                "C": "Capitalizes the first letter",
                "D": "Converts text to uppercase"
            },
            "correct": "B",
            "explanation": "text-transform: none; is the default value that displays text in its original case, removing any inherited transformations. This is useful for resetting text-transform applied by parent elements or CSS frameworks.",
            "difficulty": "easy",
            "topic": "Text Transform"
        },
        {
            "id": 9,
            "question": "Why is unitless <pre>line-height</pre> preferred over fixed units?",
            "options": {
                "A": "It scales proportionally when font-size changes",
                "B": "It loads faster",
                "C": "It's required by modern browsers",
                "D": "It uses less memory"
            },
            "correct": "A",
            "explanation": "Unitless line-height (e.g., 1.5) scales proportionally with font-size changes, maintaining consistent spacing. Fixed units like 20px don't scale, which can cause readability issues when font sizes change. Unitless values are inherited as the multiplier, not the computed value.",
            "difficulty": "easy",
            "topic": "Line Height"
        },
        {
            "id": 10,
            "question": "What is the default value of <pre>letter-spacing</pre>?",
            "options": {
                "A": "0",
                "B": "normal",
                "C": "1px",
                "D": "auto"
            },
            "correct": "B",
            "explanation": "The default letter-spacing value is 'normal', which uses the font's default spacing. Setting it to 0 might actually be different from 'normal' depending on the font. Use 'normal' to reset custom spacing.",
            "difficulty": "easy",
            "topic": "Letter and Word Spacing"
        },
        {
            "id": 11,
            "question": "Which color format is <pre>#F00</pre>?",
            "options": {
                "A": "Shorthand hexadecimal for #FF0000 (red)",
                "B": "Invalid syntax",
                "C": "RGB format",
                "D": "HSL format"
            },
            "correct": "A",
            "explanation": "Three-digit hex colors are shorthand where each digit is doubled. #F00 expands to #FF0000 (red), #0F0 to #00FF00 (green), #00F to #0000FF (blue). This shorthand only works when color values can be represented by paired digits.",
            "difficulty": "easy",
            "topic": "Color Property and Values"
        },
        {
            "id": 12,
            "question": "What should be quoted in a <pre>font-family</pre> declaration?",
            "options": {
                "A": "All font names",
                "B": "No font names should be quoted",
                "C": "Only generic font families",
                "D": "Font names containing spaces or special characters"
            },
            "correct": "D",
            "explanation": "Font names with spaces (e.g., 'Times New Roman') or special characters should be quoted. Single-word font names can be unquoted (e.g., Arial). Generic families (serif, sans-serif) should never be quoted.",
            "difficulty": "easy",
            "topic": "Font Family and Font Stacks"
        },
        {
            "id": 13,
            "question": "If root font-size is 16px, what is <pre>0.875rem</pre> in pixels?",
            "options": {
                "A": "12px",
                "B": "16px",
                "C": "14px",
                "D": "18px"
            },
            "correct": "C",
            "explanation": "0.875rem × 16px = 14px. This is a common conversion used for smaller text. Using rem units keeps typography scalable and respects user font-size preferences for better accessibility.",
            "difficulty": "easy",
            "topic": "Font Size Units"
        },
        {
            "id": 14,
            "question": "What does <pre>font-weight: lighter;</pre> do?",
            "options": {
                "A": "Sets weight to 100",
                "B": "Sets weight to 300",
                "C": "Makes the font one weight lighter than the parent",
                "D": "Has no effect"
            },
            "correct": "C",
            "explanation": "font-weight: lighter; is a relative value that makes the font one step lighter than the inherited weight. Similarly, 'bolder' makes it one step heavier. The exact weight depends on the parent's weight and available font weights.",
            "difficulty": "easy",
            "topic": "Font Weight"
        },
        {
            "id": 15,
            "question": "What is the difference between <pre>font-style: italic;</pre> and using the <pre>&lt;i&gt;</pre> tag?",
            "options": {
                "A": "They are exactly the same",
                "B": "font-style is only for CSS3",
                "C": "<i> tag is deprecated",
                "D": "CSS provides styling; HTML tag has semantic meaning"
            },
            "correct": "D",
            "explanation": "The <i> tag has semantic meaning (like for technical terms or foreign words), while font-style: italic; is purely presentational. The <em> tag indicates emphasis. Both can display italics, but serve different purposes in HTML semantics.",
            "difficulty": "easy",
            "topic": "Font Style"
        },
        {
            "id": 16,
            "question": "Which <pre>text-align</pre> value is useful for forms where labels align with input fields?",
            "options": {
                "A": "right",
                "B": "left",
                "C": "center",
                "D": "justify"
            },
            "correct": "A",
            "explanation": "text-align: right; is often used for form labels in a column to the left of input fields, creating a clean aligned edge next to the inputs. This improves the visual connection between labels and their fields.",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 17,
            "question": "Can you specify a color for <pre>text-decoration</pre>?",
            "options": {
                "A": "No, it always matches the text color",
                "B": "Only with underlines, not other decorations",
                "C": "Only in CSS4",
                "D": "Yes, using text-decoration-color property"
            },
            "correct": "D",
            "explanation": "text-decoration-color allows you to set a different color for the decoration line. Example: text-decoration: underline; text-decoration-color: red; creates a red underline. You can also use shorthand: text-decoration: underline red;",
            "difficulty": "easy",
            "topic": "Text Decoration"
        },
        {
            "id": 18,
            "question": "When would you use <pre>text-transform: lowercase;</pre>?",
            "options": {
                "A": "To remove bold formatting",
                "B": "To make text smaller",
                "C": "To convert all text to lowercase letters",
                "D": "To align text to the left"
            },
            "correct": "C",
            "explanation": "text-transform: lowercase; converts all text to lowercase letters, regardless of how it's written in the HTML. Example: \"HELLO World\" becomes \"hello world\". This is useful for normalizing text appearance, such as email addresses or usernames.",
            "difficulty": "easy",
            "topic": "Text Transform"
        },
        {
            "id": 19,
            "question": "What line-height would create single-spaced text?",
            "options": {
                "A": "0",
                "B": "1 or 100%",
                "C": "0.5",
                "D": "2"
            },
            "correct": "B",
            "explanation": "line-height: 1; (or 100%) creates single-spaced text where the line height equals the font size. However, this is often too tight for body text. Values of 1.4-1.8 provide better readability.",
            "difficulty": "easy",
            "topic": "Line Height"
        },
        {
            "id": 20,
            "question": "Can <pre>word-spacing</pre> accept negative values?",
            "options": {
                "A": "No, only positive values",
                "B": "Only with em units",
                "C": "Only in Chrome",
                "D": "Yes, to reduce space between words"
            },
            "correct": "D",
            "explanation": "word-spacing can accept negative values to reduce the space between words. Example: word-spacing: -2px; brings words closer together. However, extreme negative values can make text illegible.",
            "difficulty": "easy",
            "topic": "Letter and Word Spacing"
        },
        {
            "id": 21,
            "question": "What does <pre>rgba(0, 0, 0, 0.5)</pre> represent?",
            "options": {
                "A": "Solid black",
                "B": "Solid gray",
                "C": "Semi-transparent white",
                "D": "Semi-transparent black"
            },
            "correct": "D",
            "explanation": "rgba(0, 0, 0, 0.5) creates semi-transparent black with 50% opacity. The RGB values (0, 0, 0) create black, and the alpha value of 0.5 makes it 50% transparent. This is useful for overlays and shadows.",
            "difficulty": "easy",
            "topic": "Color Property and Values"
        },
        {
            "id": 22,
            "question": "Which fonts are considered 'web-safe' and widely available?",
            "options": {
                "A": "Fonts that load quickly",
                "B": "Fonts from Google Fonts",
                "C": "System fonts installed on most devices",
                "D": "Fonts smaller than 1MB"
            },
            "correct": "C",
            "explanation": "Web-safe fonts are system fonts pre-installed on most devices, like Arial, Times New Roman, Courier, Georgia, and Verdana. They don't require downloading, ensuring consistent display and fast loading.",
            "difficulty": "easy",
            "topic": "Font Family and Font Stacks"
        },
        {
            "id": 23,
            "question": "Why might you use <pre>font-size: clamp(1rem, 2.5vw, 2rem);</pre>?",
            "options": {
                "A": "To fix the font size at 1rem",
                "B": "To create responsive typography with minimum and maximum sizes",
                "C": "To make text invisible",
                "D": "To apply multiple font sizes"
            },
            "correct": "B",
            "explanation": "clamp() creates fluid typography: clamp(minimum, preferred, maximum). The font size scales with 2.5vw (viewport width) but never goes below 1rem or above 2rem. This creates responsive text without media queries.",
            "difficulty": "easy",
            "topic": "Font Size Units"
        },
        {
            "id": 24,
            "question": "If a font doesn't support <pre>font-weight: 600;</pre>, what happens?",
            "options": {
                "A": "The browser uses the closest available weight",
                "B": "The text becomes invisible",
                "C": "An error occurs",
                "D": "The text is always bold"
            },
            "correct": "A",
            "explanation": "If a specific font-weight isn't available, the browser uses the closest available weight. For example, if 600 isn't available, it might use 700 (bold) or 400 (normal) depending on what's available in the font family.",
            "difficulty": "easy",
            "topic": "Font Weight"
        },
        {
            "id": 25,
            "question": "What is the default value of <pre>font-style</pre> for most elements?",
            "options": {
                "A": "italic",
                "B": "normal",
                "C": "oblique",
                "D": "regular"
            },
            "correct": "B",
            "explanation": "The default font-style is 'normal' for most elements. Some elements like <em>, <i>, <cite>, and <address> have default italic styling from the browser's user agent stylesheet, but their computed font-style can still be changed.",
            "difficulty": "easy",
            "topic": "Font Style"
        },
        {
            "id": 26,
            "question": "What is <pre>text-align: start;</pre> equivalent to in left-to-right languages?",
            "options": {
                "A": "center",
                "B": "justify",
                "C": "right",
                "D": "left"
            },
            "correct": "D",
            "explanation": "text-align: start; aligns text to the start of the writing direction. In left-to-right (LTR) languages like English, this is equivalent to 'left'. In right-to-left (RTL) languages like Arabic, it's equivalent to 'right'. This is useful for international sites.",
            "difficulty": "easy",
            "topic": "Text Alignment"
        },
        {
            "id": 27,
            "question": "What does <pre>text-decoration-style: wavy;</pre> do?",
            "options": {
                "A": "Makes the text wavy",
                "B": "Creates a wavy decoration line",
                "C": "Adds animation to text",
                "D": "It's invalid CSS"
            },
            "correct": "B",
            "explanation": "text-decoration-style controls the style of the decoration line, not the text itself. Values include 'solid', 'double', 'dotted', 'dashed', and 'wavy'. Example: text-decoration: underline wavy red; creates a red wavy underline.",
            "difficulty": "easy",
            "topic": "Text Decoration"
        },
        {
            "id": 28,
            "question": "Which text-transform value would you use to format a title in Title Case?",
            "options": {
                "A": "capitalize",
                "B": "lowercase",
                "C": "uppercase",
                "D": "title-case"
            },
            "correct": "A",
            "explanation": "text-transform: capitalize; capitalizes the first letter of each word, creating Title Case. Note: it capitalizes ALL words, including articles like 'a' and 'the', which may not follow proper title case rules in English.",
            "difficulty": "easy",
            "topic": "Text Transform"
        },
        {
            "id": 29,
            "question": "What happens with <pre>line-height: 0;</pre>?",
            "options": {
                "A": "Text becomes invisible",
                "B": "It's invalid CSS",
                "C": "Normal line height is used",
                "D": "Lines of text overlap completely"
            },
            "correct": "D",
            "explanation": "line-height: 0; makes the line boxes have zero height, causing lines of text to overlap at the same vertical position. This creates unreadable text and is rarely useful except for specific layout hacks.",
            "difficulty": "easy",
            "topic": "Line Height"
        },
        {
            "id": 30,
            "question": "When should you use <pre>letter-spacing</pre> on body text?",
            "options": {
                "A": "Sparingly, as it can reduce readability if overused",
                "B": "Always for all text",
                "C": "Never, it's only for headings",
                "D": "Only with monospace fonts"
            },
            "correct": "A",
            "explanation": "letter-spacing should be used carefully on body text. Small adjustments (e.g., 0.01em-0.03em) can improve readability for some fonts, but excessive spacing reduces readability. It's more commonly used for headings, logos, or all-caps text.",
            "difficulty": "easy",
            "topic": "Letter and Word Spacing"
        }
    ]
};
