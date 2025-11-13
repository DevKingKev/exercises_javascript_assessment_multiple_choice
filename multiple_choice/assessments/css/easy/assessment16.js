module.exports = {
    "metadata": {
        "title": "CSS Units and Values",
        "description": "Master CSS units and values including absolute units (px, pt, cm, mm), relative units (em, rem, %, vh, vw), understand when to use different unit types, learn viewport units (vh, vw, vmin, vmax), and explore keywords like inherit, initial, and auto for flexible and responsive designs.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 16,
        "assessmentUniqueId": 1763065098705,
        "testType": "multiple-choice",
        "topics": [
            "Absolute Units",
            "Relative Units",
            "Em Unit",
            "Rem Unit",
            "Percentage Values",
            "Viewport Units",
            "Inherit Keyword",
            "Initial Keyword",
            "Auto Value",
            "Unit Selection Best Practices"
        ],
        "topicLinks": [
            {
                "topicName": "Absolute Units",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#absolute_length_units"
            },
            {
                "topicName": "Relative Units",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units"
            },
            {
                "topicName": "Em Unit",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems"
            },
            {
                "topicName": "Rem Unit",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems"
            },
            {
                "topicName": "Percentage Values",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/percentage"
            },
            {
                "topicName": "Viewport Units",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/length#viewport-percentage_lengths"
            },
            {
                "topicName": "Inherit Keyword",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/inherit"
            },
            {
                "topicName": "Initial Keyword",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/initial"
            },
            {
                "topicName": "Auto Value",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/width#auto"
            },
            {
                "topicName": "Unit Selection Best Practices",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
            }
        ],
        "keywords": [
            "css-units",
            "absolute-units",
            "relative-units",
            "px",
            "em",
            "rem",
            "percentage",
            "viewport-units",
            "vh",
            "vw",
            "vmin",
            "vmax",
            "inherit",
            "initial",
            "auto",
            "pt",
            "cm",
            "mm",
            "font-size",
            "responsive-design",
            "accessibility",
            "unit-conversion",
            "root-em",
            "parent-relative",
            "viewport-relative",
            "length-units",
            "css-values",
            "browser-defaults"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What does <pre>px</pre> stand for in CSS?",
            "options": {
                "A": "Percentage",
                "B": "Pixels",
                "C": "Points",
                "D": "Picture elements"
            },
            "correct": "B",
            "explanation": "px stands for pixels, which is an absolute unit in CSS. One pixel represents one dot on the screen. However, on high-DPI screens, a CSS pixel may actually map to multiple physical screen pixels for consistent sizing across devices.",
            "difficulty": "easy",
            "topic": "Absolute Units"
        },
        {
            "id": 2,
            "question": "What is <pre>em</pre> relative to?",
            "options": {
                "A": "The root element's font size",
                "B": "The parent element's font size",
                "C": "The viewport width",
                "D": "Always 16px"
            },
            "correct": "B",
            "explanation": "em is relative to the font-size of the parent element. For example, if the parent has font-size: 20px, then 1.5em equals 30px. This can cause compounding effects when em values are nested, which is why rem is sometimes preferred.",
            "difficulty": "easy",
            "topic": "Em Unit"
        },
        {
            "id": 3,
            "question": "What does <pre>rem</pre> stand for?",
            "options": {
                "A": "Relative em",
                "B": "Root em",
                "C": "Responsive em",
                "D": "Reference em"
            },
            "correct": "B",
            "explanation": "rem stands for 'root em'. It's always relative to the root element's (<html>) font-size, typically 16px by default. Unlike em, rem doesn't compound when nested, making it more predictable for consistent sizing throughout a design.",
            "difficulty": "easy",
            "topic": "Rem Unit"
        },
        {
            "id": 4,
            "question": "What does <pre>vh</pre> represent?",
            "options": {
                "A": "Very high",
                "B": "Vertical height",
                "C": "1% of the viewport height",
                "D": "Variable height"
            },
            "correct": "C",
            "explanation": "vh stands for viewport height. 1vh equals 1% of the viewport's height. So 100vh would be 100% of the viewport height. This is useful for creating full-height sections that adapt to different screen sizes.",
            "difficulty": "easy",
            "topic": "Viewport Units"
        },
        {
            "id": 5,
            "question": "If the parent element has <pre>font-size: 20px</pre> and a child has <pre>font-size: 2em</pre>, what is the child's computed font size?",
            "options": {
                "A": "20px",
                "B": "40px",
                "C": "2px",
                "D": "22px"
            },
            "correct": "B",
            "explanation": "2em multiplied by the parent's font-size of 20px equals 40px. The em unit calculates based on the parent element's font-size, so 2 × 20px = 40px.",
            "difficulty": "easy",
            "topic": "Em Unit"
        },
        {
            "id": 6,
            "question": "What does the <pre>inherit</pre> keyword do?",
            "options": {
                "A": "Sets the property to the browser's default value",
                "B": "Sets the property to the parent element's computed value",
                "C": "Removes all styling",
                "D": "Makes the element invisible"
            },
            "correct": "B",
            "explanation": "The inherit keyword makes an element inherit the computed value of that property from its parent element. For example, div { color: inherit; } would use the parent's color. This works even for properties that don't naturally inherit.",
            "difficulty": "easy",
            "topic": "Inherit Keyword"
        },
        {
            "id": 7,
            "question": "Which unit is best for responsive font sizing that respects user preferences?",
            "options": {
                "A": "px",
                "B": "pt",
                "C": "rem",
                "D": "cm"
            },
            "correct": "C",
            "explanation": "rem is best for responsive font sizing because it's relative to the root font-size, which users can adjust in their browser settings for accessibility. Using px ignores user font-size preferences, making content less accessible.",
            "difficulty": "easy",
            "topic": "Unit Selection Best Practices"
        },
        {
            "id": 8,
            "question": "What does <pre>vw</pre> represent?",
            "options": {
                "A": "Very wide",
                "B": "1% of the viewport width",
                "C": "Vertical width",
                "D": "Variable width"
            },
            "correct": "B",
            "explanation": "vw stands for viewport width. 1vw equals 1% of the viewport's width. So 50vw would be 50% of the viewport width. This is useful for creating responsive layouts that scale with the browser window width.",
            "difficulty": "easy",
            "topic": "Viewport Units"
        },
        {
            "id": 9,
            "question": "What is a percentage (<pre>%</pre>) width relative to?",
            "options": {
                "A": "The viewport width",
                "B": "The parent element's width",
                "C": "The element's own width",
                "D": "Always 100px"
            },
            "correct": "B",
            "explanation": "Percentage widths are relative to the parent element's width (specifically, its content box width). For example, if a parent is 500px wide and a child has width: 50%, the child will be 250px wide.",
            "difficulty": "easy",
            "topic": "Percentage Values"
        },
        {
            "id": 10,
            "question": "What does <pre>pt</pre> stand for?",
            "options": {
                "A": "Pixels tall",
                "B": "Points (1/72 of an inch)",
                "C": "Percentage top",
                "D": "Position top"
            },
            "correct": "B",
            "explanation": "pt stands for points, where 1pt equals 1/72 of an inch. This is an absolute unit traditionally used in print design. For web design, px or relative units are generally preferred because pt doesn't scale well across different screen densities.",
            "difficulty": "easy",
            "topic": "Absolute Units"
        },
        {
            "id": 11,
            "question": "What does the <pre>initial</pre> keyword do?",
            "options": {
                "A": "Sets the property to its default CSS specification value",
                "B": "Inherits from the parent",
                "C": "Sets the property to the first value used",
                "D": "Resets all styles on the page"
            },
            "correct": "A",
            "explanation": "The initial keyword sets a property to its initial value as defined in the CSS specification. For example, color: initial sets the color to black (not inherited from parent), and display: initial sets display to inline for most elements.",
            "difficulty": "easy",
            "topic": "Initial Keyword"
        },
        {
            "id": 12,
            "question": "If the root <pre><html></pre> element has <pre>font-size: 16px</pre> and an element has <pre>font-size: 2rem</pre>, what is the computed size?",
            "options": {
                "A": "16px",
                "B": "2px",
                "C": "32px",
                "D": "18px"
            },
            "correct": "C",
            "explanation": "2rem multiplied by the root font-size of 16px equals 32px. The rem unit always references the root (<html>) element's font-size, so 2 × 16px = 32px. This is consistent regardless of parent element font sizes.",
            "difficulty": "easy",
            "topic": "Rem Unit"
        },
        {
            "id": 13,
            "question": "What does <pre>margin: auto</pre> do on a block element with a defined width?",
            "options": {
                "A": "Sets margin to 0",
                "B": "Centers the element horizontally",
                "C": "Makes the element full width",
                "D": "Removes all margins"
            },
            "correct": "B",
            "explanation": "margin: auto (or margin: 0 auto for horizontal centering) centers a block element horizontally within its parent container, provided the element has a defined width. The browser calculates equal left and right margins to center the element.",
            "difficulty": "easy",
            "topic": "Auto Value"
        },
        {
            "id": 14,
            "question": "Which unit is absolute and doesn't change based on other elements?",
            "options": {
                "A": "em",
                "B": "px",
                "C": "%",
                "D": "rem"
            },
            "correct": "B",
            "explanation": "px (pixels) is an absolute unit that represents a fixed size and doesn't change based on parent elements or the root font-size. In contrast, em, rem, and % are relative units that calculate based on other values.",
            "difficulty": "easy",
            "topic": "Absolute Units"
        },
        {
            "id": 15,
            "question": "What does <pre>vmin</pre> represent?",
            "options": {
                "A": "The minimum viewport size ever recorded",
                "B": "1% of the smaller dimension (width or height) of the viewport",
                "C": "The minimum font size",
                "D": "Very minimal"
            },
            "correct": "B",
            "explanation": "vmin equals 1% of the viewport's smaller dimension. If the viewport is 1200px wide and 800px tall, 1vmin = 8px (1% of 800px). This is useful for maintaining proportions regardless of whether the device is portrait or landscape.",
            "difficulty": "easy",
            "topic": "Viewport Units"
        },
        {
            "id": 16,
            "question": "When should you use <pre>px</pre> instead of relative units?",
            "options": {
                "A": "For borders, shadows, and precise details that shouldn't scale",
                "B": "For all font sizes",
                "C": "For all layouts",
                "D": "Never, always use relative units"
            },
            "correct": "A",
            "explanation": "px is appropriate for elements that need precise, fixed sizes regardless of user preferences, such as borders (1px border), box shadows, or icon sizes. For typography and layout spacing, relative units like rem and em are generally better for accessibility and responsiveness.",
            "difficulty": "easy",
            "topic": "Unit Selection Best Practices"
        },
        {
            "id": 17,
            "question": "What is <pre>width: auto</pre> for a block element?",
            "options": {
                "A": "0 width",
                "B": "100% of parent width",
                "C": "Fills available width (default block behavior)",
                "D": "50% of parent width"
            },
            "correct": "C",
            "explanation": "width: auto is the default for block elements and makes them fill the available width of their container while respecting padding, border, and margin. This is different from width: 100%, which can cause overflow if padding/border is added.",
            "difficulty": "easy",
            "topic": "Auto Value"
        },
        {
            "id": 18,
            "question": "What does <pre>cm</pre> represent in CSS?",
            "options": {
                "A": "Content margin",
                "B": "Centimeters (1cm = 96px/2.54)",
                "C": "Character measurement",
                "D": "Color mode"
            },
            "correct": "B",
            "explanation": "cm stands for centimeters, an absolute physical unit. In CSS, 1cm is defined as 96px/2.54 (approximately 37.8px). Like other absolute physical units (mm, in, pt), cm is rarely used for screen design and is more appropriate for print stylesheets.",
            "difficulty": "easy",
            "topic": "Absolute Units"
        },
        {
            "id": 19,
            "question": "Can <pre>em</pre> be used for properties other than font-size?",
            "options": {
                "A": "No, only for font-size",
                "B": "Yes, for any length property (padding, margin, width, etc.)",
                "C": "Only for text-related properties",
                "D": "Only for width and height"
            },
            "correct": "B",
            "explanation": "em can be used for any CSS property that accepts length values, including padding, margin, width, height, border-radius, etc. When used for properties other than font-size, em is relative to the element's own font-size (not the parent's).",
            "difficulty": "easy",
            "topic": "Em Unit"
        },
        {
            "id": 20,
            "question": "What does <pre>vmax</pre> represent?",
            "options": {
                "A": "The maximum viewport size",
                "B": "1% of the larger dimension (width or height) of the viewport",
                "C": "The maximum font size",
                "D": "Very maximum"
            },
            "correct": "B",
            "explanation": "vmax equals 1% of the viewport's larger dimension. If the viewport is 1200px wide and 800px tall, 1vmax = 12px (1% of 1200px). This is the opposite of vmin and is useful for ensuring elements scale with the largest viewport dimension.",
            "difficulty": "easy",
            "topic": "Viewport Units"
        },
        {
            "id": 21,
            "question": "What is the default root font-size in most browsers?",
            "options": {
                "A": "12px",
                "B": "14px",
                "C": "16px",
                "D": "18px"
            },
            "correct": "C",
            "explanation": "The default root font-size in most browsers is 16px. This means 1rem = 16px by default. Users can change this in their browser settings for accessibility, which is why using rem for font sizes is more accessible than using fixed px values.",
            "difficulty": "easy",
            "topic": "Rem Unit"
        },
        {
            "id": 22,
            "question": "What is a percentage (<pre>%</pre>) padding relative to?",
            "options": {
                "A": "The element's own height",
                "B": "The parent element's width (even for top/bottom padding)",
                "C": "The viewport width",
                "D": "The element's own width"
            },
            "correct": "B",
            "explanation": "Percentage padding (all sides: top, right, bottom, left) is always relative to the parent element's width, not height. This quirk allows for creating responsive aspect-ratio boxes using percentage padding, as both vertical and horizontal padding reference the same dimension.",
            "difficulty": "easy",
            "topic": "Percentage Values"
        },
        {
            "id": 23,
            "question": "Which keyword makes a non-inheriting property inherit from its parent?",
            "options": {
                "A": "auto",
                "B": "initial",
                "C": "inherit",
                "D": "default"
            },
            "correct": "C",
            "explanation": "The inherit keyword forces a property to inherit from its parent, even if it normally wouldn't. For example, border: inherit makes the child use the parent's border value, even though border doesn't naturally inherit. This is useful for forcing inheritance on any property.",
            "difficulty": "easy",
            "topic": "Inherit Keyword"
        },
        {
            "id": 24,
            "question": "What does <pre>height: 100vh</pre> create?",
            "options": {
                "A": "An element as tall as its parent",
                "B": "An element as tall as the viewport",
                "C": "An element 100 pixels tall",
                "D": "An element with variable height"
            },
            "correct": "B",
            "explanation": "height: 100vh makes an element exactly as tall as the viewport (browser window height). This is commonly used for full-screen hero sections or to ensure content fills the visible area. Note that on mobile, 100vh can be tricky due to dynamic browser UI elements.",
            "difficulty": "easy",
            "topic": "Viewport Units"
        },
        {
            "id": 25,
            "question": "What does <pre>mm</pre> represent in CSS?",
            "options": {
                "A": "Maximum margin",
                "B": "Millimeters (1mm = 96px/25.4)",
                "C": "Minimum measurement",
                "D": "Media mode"
            },
            "correct": "B",
            "explanation": "mm stands for millimeters, an absolute physical unit. In CSS, 1mm is defined as 96px/25.4 (approximately 3.78px). Like cm and in, mm is rarely used for screen design and is more suitable for print stylesheets where physical dimensions matter.",
            "difficulty": "easy",
            "topic": "Absolute Units"
        },
        {
            "id": 26,
            "question": "If an element has <pre>font-size: 1.5em</pre> and its parent has <pre>font-size: 2em</pre>, and the grandparent has <pre>font-size: 10px</pre>, what is the final computed size?",
            "options": {
                "A": "15px",
                "B": "20px",
                "C": "30px",
                "D": "3em"
            },
            "correct": "C",
            "explanation": "em values compound. First, parent: 2em × 10px = 20px. Then, element: 1.5em × 20px = 30px. This compounding is why rem is often preferred—it avoids this multiplication effect by always referencing the root element.",
            "difficulty": "easy",
            "topic": "Em Unit"
        },
        {
            "id": 27,
            "question": "What happens with <pre>color: initial</pre>?",
            "options": {
                "A": "The color is inherited from the parent",
                "B": "The color is set to the CSS specification's initial value (typically black)",
                "C": "The color becomes transparent",
                "D": "The color becomes white"
            },
            "correct": "B",
            "explanation": "color: initial sets the color to its initial value as defined in the CSS spec, which is the color of the browser's rendering (typically black). This is different from inherit, which would use the parent's color. For color, the initial value is not inherited.",
            "difficulty": "easy",
            "topic": "Initial Keyword"
        },
        {
            "id": 28,
            "question": "When is it better to use <pre>rem</pre> instead of <pre>em</pre>?",
            "options": {
                "A": "When you want consistent sizing relative to the root, avoiding compounding",
                "B": "When you want to ignore user font-size preferences",
                "C": "When you need pixel-perfect designs",
                "D": "rem and em are always interchangeable"
            },
            "correct": "A",
            "explanation": "rem is better when you want consistent, predictable sizing relative to the root font-size without compounding effects. This is especially useful for component-based designs where you want consistent spacing. Use em when you specifically want sizes to scale with the local (parent) font-size.",
            "difficulty": "easy",
            "topic": "Unit Selection Best Practices"
        },
        {
            "id": 29,
            "question": "What does <pre>width: 50vw</pre> mean?",
            "options": {
                "A": "50% of the parent element's width",
                "B": "50% of the viewport width",
                "C": "50 pixels wide",
                "D": "50% of the element's current width"
            },
            "correct": "B",
            "explanation": "50vw means 50% of the viewport width. If the browser window is 1000px wide, the element will be 500px wide. Unlike percentage widths, viewport units are always relative to the viewport, not the parent element.",
            "difficulty": "easy",
            "topic": "Viewport Units"
        },
        {
            "id": 30,
            "question": "What is the benefit of using <pre>margin: 0 auto</pre> over explicit pixel margins?",
            "options": {
                "A": "It's faster",
                "B": "It automatically centers the element regardless of parent width",
                "C": "It uses less memory",
                "D": "It's required by modern browsers"
            },
            "correct": "B",
            "explanation": "margin: 0 auto automatically calculates equal left and right margins to center the element, regardless of the parent's width. This is more flexible than setting explicit pixel margins because it adapts to different screen sizes and container widths, making it ideal for responsive design.",
            "difficulty": "easy",
            "topic": "Auto Value"
        }
    ]
};
