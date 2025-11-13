module.exports = {
    "metadata": {
        "title": "CSS Box Model Fundamentals",
        "description": "Master the CSS box model including content, padding, border, margin, box-sizing, and calculating total element dimensions.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 9,
        "assessmentUniqueId": 1763046500000,
        "testType": "multiple-choice",
        "topics": [
            "Box Model Layers",
            "Width and Height",
            "Padding Property",
            "Margin Property",
            "Margin Collapsing",
            "Border Property",
            "Border Radius",
            "Box Sizing",
            "Total Element Dimensions",
            "Border Styles"
        ],
        "topicLinks": [
            {
                "topicName": "Box Model Layers",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model"
            },
            {
                "topicName": "Width and Height",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/width"
            },
            {
                "topicName": "Padding Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            },
            {
                "topicName": "Margin Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
            },
            {
                "topicName": "Margin Collapsing",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing"
            },
            {
                "topicName": "Border Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border"
            },
            {
                "topicName": "Border Radius",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
            },
            {
                "topicName": "Box Sizing",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
            },
            {
                "topicName": "Total Element Dimensions",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model"
            },
            {
                "topicName": "Border Styles",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-style"
            }
        ],
        "keywords": [
            "box-model",
            "content",
            "padding",
            "border",
            "margin",
            "width",
            "height",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "border-width",
            "border-style",
            "border-color",
            "border-radius",
            "box-sizing",
            "content-box",
            "border-box",
            "margin-collapse",
            "total-width",
            "total-height",
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What are the four main layers of the CSS box model from inside to outside?",
            "options": {
                "A": "Content, padding, border, margin",
                "B": "Content, border, padding, margin",
                "C": "Margin, border, padding, content",
                "D": "Border, padding, content, margin"
            },
            "correct": "A",
            "explanation": "The CSS box model consists of four layers from inside to outside: Content (the actual content), Padding (space around content), Border (surrounds padding), and Margin (space outside border). Understanding this order is fundamental to CSS layout.",
            "difficulty": "easy",
            "topic": "Box Model Layers"
        },
        {
            "id": 2,
            "question": "With [CODE]box-sizing: content-box; width: 200px; padding: 20px; border: 5px;[/CODE], what is the total width?",
            "options": {
                "A": "200px",
                "B": "250px",
                "C": "240px",
                "D": "230px"
            },
            "correct": "B",
            "explanation": "With content-box (default), width only applies to content. Total width = width + padding-left + padding-right + border-left + border-right = 200px + 20px + 20px + 5px + 5px = 250px.",
            "difficulty": "easy",
            "topic": "Total Element Dimensions"
        },
        {
            "id": 3,
            "question": "What does <pre>padding: 10px 20px;</pre> apply?",
            "options": {
                "A": "10px top/bottom, 20px left/right",
                "B": "10px all sides, 20px top only",
                "C": "20px top/bottom, 10px left/right",
                "D": "10px left/right, 20px top/bottom"
            },
            "correct": "A",
            "explanation": "With two values, padding applies the first to top and bottom, the second to left and right. So padding: 10px 20px; means 10px vertical (top/bottom) and 20px horizontal (left/right).",
            "difficulty": "easy",
            "topic": "Padding Property"
        },
        {
            "id": 4,
            "question": "What happens when vertical margins of two block elements touch?",
            "options": {
                "A": "They add together",
                "B": "They create a gap between elements",
                "C": "They cancel out",
                "D": "They collapse to the larger margin"
            },
            "correct": "D",
            "explanation": "Margin collapsing occurs when vertical margins of adjacent block elements meet. They collapse to the size of the larger margin, not the sum. For example, if one has 20px margin-bottom and the next has 30px margin-top, the space between is 30px, not 50px.",
            "difficulty": "easy",
            "topic": "Margin Collapsing"
        },
        {
            "id": 5,
            "question": "What is the shorthand order for the <pre>border</pre> property?",
            "options": {
                "A": "width, color, style",
                "B": "style, width, color",
                "C": "The order doesn't matter",
                "D": "width, style, color"
            },
            "correct": "C",
            "explanation": "In the border shorthand, the order of width, style, and color doesn't matter because they're different value types. border: 2px solid red; and border: solid red 2px; both work. However, style is required for the border to display.",
            "difficulty": "easy",
            "topic": "Border Property"
        },
        {
            "id": 6,
            "question": "How do you create a perfect circle using <pre>border-radius</pre>?",
            "options": {
                "A": "Set border-radius to 100px",
                "B": "Set border-radius to circle",
                "C": "Set border-radius to 50%",
                "D": "Use border-shape: circle"
            },
            "correct": "C",
            "explanation": "border-radius: 50%; creates a perfect circle on a square element (equal width and height). The 50% refers to 50% of the element's width/height. For rectangles, this creates an ellipse.",
            "difficulty": "easy",
            "topic": "Border Radius"
        },
        {
            "id": 7,
            "question": "What is the difference between [CODE]box-sizing: content-box;[/CODE] and [CODE]box-sizing: border-box;[/CODE]?",
            "options": {
                "A": "content-box includes padding/border in width; border-box doesn't",
                "B": "They are exactly the same",
                "C": "border-box includes padding/border in width; content-box doesn't",
                "D": "content-box is for margins, border-box is for padding"
            },
            "correct": "C",
            "explanation": "With border-box, the width/height includes padding and border (easier to work with). With content-box (default), width/height only applies to content, and padding/border are added on top, making total size larger.",
            "difficulty": "easy",
            "topic": "Box Sizing"
        },
        {
            "id": 8,
            "question": "If an element has [CODE]width: 300px; padding: 15px; box-sizing: border-box;[/CODE], what is the content width?",
            "options": {
                "A": "300px",
                "B": "285px",
                "C": "330px",
                "D": "270px"
            },
            "correct": "D",
            "explanation": "With border-box, the specified width includes padding and border. Content width = total width - padding-left - padding-right = 300px - 15px - 15px = 270px. The total element is still 300px wide.",
            "difficulty": "easy",
            "topic": "Box Sizing"
        },
        {
            "id": 9,
            "question": "What does <pre>margin: 10px 20px 30px;</pre> apply (three values)?",
            "options": {
                "A": "10px all, 20px top, 30px bottom",
                "B": "10px top, 20px left/right, 30px bottom",
                "C": "10px top/bottom, 20px left, 30px right",
                "D": "10px left, 20px top/bottom, 30px right"
            },
            "correct": "B",
            "explanation": "With three values: first is top, second is left and right, third is bottom. So margin: 10px 20px 30px; means 10px top, 20px left and right, 30px bottom.",
            "difficulty": "easy",
            "topic": "Margin Property"
        },
        {
            "id": 10,
            "question": "Which border style creates a dashed line?",
            "options": {
                "A": "<pre>border-style: dotted;</pre>",
                "B": "<pre>border-style: dashed;</pre>",
                "C": "<pre>border-style: broken;</pre>",
                "D": "<pre>border-style: line;</pre>"
            },
            "correct": "B",
            "explanation": "border-style: dashed; creates a dashed border with distinct segments. Other styles include solid (continuous line), dotted (dots), double (two lines), groove, ridge, inset, outset, and none.",
            "difficulty": "easy",
            "topic": "Border Styles"
        },
        {
            "id": 11,
            "question": "What is the key difference between padding and margin?",
            "options": {
                "A": "Padding is for text only; margin is for boxes",
                "B": "Margin is inside the border; padding is outside the border",
                "C": "They are the same thing",
                "D": "Padding is inside the border; margin is outside the border"
            },
            "correct": "D",
            "explanation": "Padding creates space inside the border (between border and content) and includes the element's background. Margin creates space outside the border (between elements) and is always transparent. This distinction is crucial for layout and styling.",
            "difficulty": "easy",
            "topic": "Box Model Layers"
        },
        {
            "id": 12,
            "question": "Can you set different values for each side of the padding?",
            "options": {
                "A": "No, padding is always uniform",
                "B": "Yes, using padding-top, padding-right, padding-bottom, padding-left",
                "C": "Only for top and bottom",
                "D": "Only in flexbox"
            },
            "correct": "B",
            "explanation": "You can set individual padding for each side using padding-top, padding-right, padding-bottom, padding-left, or use shorthand: padding: 10px 20px 30px 40px; (top, right, bottom, left - clockwise from top).",
            "difficulty": "easy",
            "topic": "Padding Property"
        },
        {
            "id": 13,
            "question": "What does <pre>margin: 0 auto;</pre> commonly achieve?",
            "options": {
                "A": "Centers a block element horizontally",
                "B": "Removes all margins",
                "C": "Centers content vertically",
                "D": "Sets automatic margin on all sides"
            },
            "correct": "A",
            "explanation": "margin: 0 auto; sets top/bottom margins to 0 and left/right margins to auto, which centers a block-level element horizontally within its container. The element must have a defined width for this to work.",
            "difficulty": "easy",
            "topic": "Margin Property"
        },
        {
            "id": 14,
            "question": "Do margins collapse horizontally?",
            "options": {
                "A": "No, only vertical margins collapse",
                "B": "Yes, always",
                "C": "Only in flexbox",
                "D": "Only in grid"
            },
            "correct": "A",
            "explanation": "Margin collapsing only occurs with vertical (top and bottom) margins of block elements. Horizontal (left and right) margins never collapse; they always add together.",
            "difficulty": "easy",
            "topic": "Margin Collapsing"
        },
        {
            "id": 15,
            "question": "What does <pre>border: none;</pre> do?",
            "options": {
                "A": "Sets border to transparent",
                "B": "Makes border invisible but keeps space",
                "C": "Sets border width to 0",
                "D": "Removes the border completely"
            },
            "correct": "D",
            "explanation": "border: none; removes the border entirely by setting border-style to none. This is different from border-width: 0; which sets width to zero but keeps the border style. 'none' is more explicit and commonly used.",
            "difficulty": "easy",
            "topic": "Border Styles"
        },
        {
            "id": 16,
            "question": "Can <pre>border-radius</pre> have different values for each corner?",
            "options": {
                "A": "No, it must be uniform",
                "B": "Only two corners can differ",
                "C": "Yes, using four values or individual properties",
                "D": "Only in CSS3"
            },
            "correct": "C",
            "explanation": "border-radius can have different values for each corner: border-radius: 10px 20px 30px 40px; (top-left, top-right, bottom-right, bottom-left) or use individual properties like border-top-left-radius.",
            "difficulty": "easy",
            "topic": "Border Radius"
        },
        {
            "id": 17,
            "question": "What does <pre>width: auto;</pre> do?",
            "options": {
                "A": "Sets width to 100%",
                "B": "Makes the element disappear",
                "C": "Sets width to 0",
                "D": "Lets the browser calculate the width based on content and context"
            },
            "correct": "D",
            "explanation": "width: auto; is the default value that lets the browser calculate the width based on the element's content, display type, and container. For block elements, this typically means filling available width; for inline elements, it's based on content.",
            "difficulty": "easy",
            "topic": "Width and Height"
        },
        {
            "id": 18,
            "question": "What is the purpose of <pre>padding</pre>?",
            "options": {
                "A": "To create space between elements",
                "B": "To create space between content and border inside an element",
                "C": "To add borders to elements",
                "D": "To change element size"
            },
            "correct": "B",
            "explanation": "Padding creates space between the element's content and its border, inside the element. It's used to give content breathing room within its container. The padding area includes the element's background color/image.",
            "difficulty": "easy",
            "topic": "Padding Property"
        },
        {
            "id": 19,
            "question": "Can margins have negative values?",
            "options": {
                "A": "Yes, negative margins pull elements closer or cause overlap",
                "B": "No, margins must be positive",
                "C": "Only top margin can be negative",
                "D": "Only in flexbox"
            },
            "correct": "A",
            "explanation": "Margins can be negative, which pulls elements closer together or creates overlap. For example, margin-top: -20px; pulls an element upward. This is a powerful but sometimes tricky technique for precise positioning.",
            "difficulty": "easy",
            "topic": "Margin Property"
        },
        {
            "id": 20,
            "question": "What does <pre>border-style: double;</pre> create?",
            "options": {
                "A": "Two separate borders",
                "B": "A border with two parallel lines",
                "C": "A thicker solid border",
                "D": "A dashed border"
            },
            "correct": "B",
            "explanation": "border-style: double; creates a border consisting of two parallel solid lines with a gap between them. The total border width is defined by border-width, and the space between the lines is calculated automatically.",
            "difficulty": "easy",
            "topic": "Border Styles"
        },
        {
            "id": 21,
            "question": "With [CODE]box-sizing: border-box; width: 200px; padding: 20px; border: 10px;[/CODE], what is the total width?",
            "options": {
                "A": "240px",
                "B": "200px",
                "C": "260px",
                "D": "180px"
            },
            "correct": "B",
            "explanation": "With border-box, the specified width includes padding and border. So the total width is exactly 200px, with the content area being smaller to accommodate padding and border: 200px - 40px (padding) - 20px (border) = 140px content.",
            "difficulty": "easy",
            "topic": "Box Sizing"
        },
        {
            "id": 22,
            "question": "What does <pre>padding: 15px;</pre> (one value) apply?",
            "options": {
                "A": "15px to all four sides",
                "B": "15px to top only",
                "C": "15px to top and bottom",
                "D": "15px to left and right"
            },
            "correct": "A",
            "explanation": "When a single value is provided, it applies to all four sides equally. padding: 15px; is equivalent to padding: 15px 15px 15px 15px; (top, right, bottom, left).",
            "difficulty": "easy",
            "topic": "Padding Property"
        },
        {
            "id": 23,
            "question": "What happens when a parent element has a margin and its first child also has a margin-top?",
            "options": {
                "A": "They add together",
                "B": "Only the parent's margin applies",
                "C": "The larger margin collapses through and appears outside the parent",
                "D": "Only the child's margin applies"
            },
            "correct": "C",
            "explanation": "This is margin collapse through a parent. The child's top margin can collapse through the parent if there's no padding, border, or other content separating them. The larger margin appears outside the parent. Adding padding or border to the parent prevents this.",
            "difficulty": "easy",
            "topic": "Margin Collapsing"
        },
        {
            "id": 24,
            "question": "How do you set only the bottom border?",
            "options": {
                "A": "<pre>border: bottom 1px solid;</pre>",
                "B": "<pre>border: 1px solid bottom;</pre>",
                "C": "<pre>border-bottom: 1px solid black;</pre>",
                "D": "<pre>bottom-border: 1px solid;</pre>"
            },
            "correct": "C",
            "explanation": "Use border-bottom (or border-top, border-left, border-right) to set individual borders. Syntax: border-bottom: width style color; Example: border-bottom: 2px solid red; This is commonly used for underline effects.",
            "difficulty": "easy",
            "topic": "Border Property"
        },
        {
            "id": 25,
            "question": "What is the default value of <pre>box-sizing</pre>?",
            "options": {
                "A": "border-box",
                "B": "padding-box",
                "C": "content-box",
                "D": "margin-box"
            },
            "correct": "C",
            "explanation": "The default box-sizing is content-box, where width/height apply only to content. Many developers prefer border-box (where width/height include padding and border) and set it globally: * { box-sizing: border-box; }",
            "difficulty": "easy",
            "topic": "Box Sizing"
        },
        {
            "id": 26,
            "question": "Does padding affect the background color of an element?",
            "options": {
                "A": "No, padding is always transparent",
                "B": "Only for background images",
                "C": "Only if background-clip is set",
                "D": "Yes, background extends into the padding area"
            },
            "correct": "D",
            "explanation": "The element's background color and background image extend into the padding area by default. This is why padding creates colored space around content. Margin, however, is always transparent.",
            "difficulty": "easy",
            "topic": "Padding Property"
        },
        {
            "id": 27,
            "question": "What does <pre>height: 100%;</pre> require to work properly?",
            "options": {
                "A": "Nothing, it always works",
                "B": "It only works in flexbox",
                "C": "The element must be position: absolute",
                "D": "The parent element must have a defined height"
            },
            "correct": "D",
            "explanation": "Percentage heights require the parent element to have an explicit height. If the parent's height is auto or undefined, the child's percentage height won't work as expected. This is a common source of confusion in CSS.",
            "difficulty": "easy",
            "topic": "Width and Height"
        },
        {
            "id": 28,
            "question": "What does <pre>border-style: dotted;</pre> create?",
            "options": {
                "A": "A dashed line with long segments",
                "B": "A border made of dots",
                "C": "A solid line",
                "D": "A double line"
            },
            "correct": "B",
            "explanation": "border-style: dotted; creates a border consisting of a series of dots. The exact appearance can vary slightly between browsers. It's distinct from 'dashed' which uses longer line segments.",
            "difficulty": "easy",
            "topic": "Border Styles"
        },
        {
            "id": 29,
            "question": "What does <pre>margin: 10px 20px 30px 40px;</pre> apply (four values)?",
            "options": {
                "A": "10px left, 20px top, 30px right, 40px bottom",
                "B": "10px top, 20px right, 30px bottom, 40px left",
                "C": "10px all sides in sequence",
                "D": "The order is random"
            },
            "correct": "B",
            "explanation": "With four values, they apply clockwise from the top: top, right, bottom, left (TRouBLe mnemonic). So margin: 10px 20px 30px 40px; means 10px top, 20px right, 30px bottom, 40px left.",
            "difficulty": "easy",
            "topic": "Margin Property"
        },
        {
            "id": 30,
            "question": "Can <pre>border-radius</pre> use percentage values?",
            "options": {
                "A": "Yes, percentages are relative to element dimensions",
                "B": "No, only pixel values",
                "C": "Only for circles",
                "D": "Only in modern browsers"
            },
            "correct": "A",
            "explanation": "border-radius accepts percentages, pixels, ems, and other units. Percentages are relative to the element's dimensions. border-radius: 50%; creates a circle on a square element. You can mix units: border-radius: 10px 20%;",
            "difficulty": "easy",
            "topic": "Border Radius"
        }
    ]
};
