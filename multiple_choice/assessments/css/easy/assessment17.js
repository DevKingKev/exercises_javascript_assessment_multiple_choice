module.exports = {
  "metadata": {
    "title": "CSS Borders and Outlines",
    "description": "Master CSS borders and outlines including border-width, border-style, border-color properties, understand border shorthand syntax, learn to style individual border sides, create rounded corners with border-radius, and understand the key differences between outline and border properties including layout impact and use cases.",
    "difficulty": "easy",
    "domain": "css",
    "timeLimit": 30,
    "questionCount": 30,
    "assessmentId": 17,
    "assessmentUniqueId": 1763065698602,
    "testType": "multiple-choice",
    "topics": [
      "Border Width Property",
      "Border Style Property",
      "Border Color Property",
      "Border Shorthand",
      "Individual Border Sides",
      "Border Radius",
      "Outline Property",
      "Outline Offset",
      "Outline vs Border",
      "Border and Outline Use Cases"
    ],
    "topicLinks": [
      {
        "topicName": "Border Width Property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-width"
      },
      {
        "topicName": "Border Style Property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-style"
      },
      {
        "topicName": "Border Color Property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-color"
      },
      {
        "topicName": "Border Shorthand",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border"
      },
      {
        "topicName": "Individual Border Sides",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top"
      },
      {
        "topicName": "Border Radius",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
      },
      {
        "topicName": "Outline Property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline"
      },
      {
        "topicName": "Outline Offset",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset"
      },
      {
        "topicName": "Outline vs Border",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline#outline_vs._borders"
      },
      {
        "topicName": "Border and Outline Use Cases",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders"
      }
    ],
    "keywords": [
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-shorthand",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-radius",
      "rounded-corners",
      "outline",
      "outline-offset",
      "outline-style",
      "outline-width",
      "outline-color",
      "border-vs-outline",
      "box-model",
      "layout-impact",
      "focus-indicator",
      "solid-border",
      "dashed-border",
      "dotted-border",
      "double-border",
      "groove-ridge-inset-outset",
      "accessibility-outline"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the default value of <pre>border-style</pre>?",
      "options": {
        "A": "solid",
        "B": "none",
        "C": "dashed",
        "D": "hidden"
      },
      "correct": "B",
      "explanation": "The default value of border-style is 'none', which means no border is displayed. You must set a border-style (like solid, dashed, or dotted) for a border to be visible, even if border-width and border-color are specified.",
      "topic": "Border Style Property"
    },
    {
      "id": 2,
      "question": "Which border-style value creates a border that looks like it's carved into the page?",
      "options": {
        "A": "outset",
        "B": "ridge",
        "C": "groove",
        "D": "inset"
      },
      "correct": "C",
      "explanation": "The 'groove' border-style creates a border that appears carved into the page with a 3D effect. 'Ridge' is the opposite (raised), 'inset' makes the whole box appear pressed in, and 'outset' makes it appear raised out.",
      "topic": "Border Style Property"
    },
    {
      "id": 3,
      "question": "What does the shorthand [CODE]border: 2px solid red;[/CODE] set?",
      "options": {
        "A": "Only the border width",
        "B": "Border width, style, and color for all four sides",
        "C": "Only the top border",
        "D": "Border style only"
      },
      "correct": "B",
      "explanation": "The border shorthand sets border-width, border-style, and border-color for all four sides at once. The order can be any combination of width, style, and color values. In this case: 2px width, solid style, red color on all sides.",
      "topic": "Border Shorthand"
    },
    {
      "id": 4,
      "question": "How do you create a border only on the top of an element?",
      "options": {
        "A": "border-top: 1px solid black;",
        "B": "border: top;",
        "C": "top-border: 1px solid black;",
        "D": "border-side: top;"
      },
      "correct": "A",
      "explanation": "Use border-top with width, style, and color values to create a border only on the top. Similarly, border-right, border-bottom, and border-left target individual sides. This allows different styling for each side of an element.",
      "topic": "Individual Border Sides"
    },
    {
      "id": 5,
      "question": "What does <pre>border-radius: 50%;</pre> do to a square element?",
      "options": {
        "A": "Makes it slightly rounded",
        "B": "Has no effect",
        "C": "Makes it an oval",
        "D": "Makes it a circle"
      },
      "correct": "D",
      "explanation": "border-radius: 50% on a square element creates a perfect circle because it rounds each corner by 50% of the element's dimensions. On a rectangular element, 50% would create an oval/ellipse shape instead.",
      "topic": "Border Radius"
    },
    {
      "id": 6,
      "question": "What is the key difference between <pre>border</pre> and <pre>outline</pre>?",
      "options": {
        "A": "Border is always thicker",
        "B": "Outline is always visible",
        "C": "Border can't be styled",
        "D": "Outline doesn't take up space in the layout (doesn't affect box model)"
      },
      "correct": "D",
      "explanation": "The key difference is that outline doesn't take up space in the layout—it's drawn outside the border without affecting the element's size or position. Border is part of the box model and increases the element's total size. Outline also can't be styled per-side.",
      "topic": "Outline vs Border"
    },
    {
      "id": 7,
      "question": "Can you set different border styles for each side of an element?",
      "options": {
        "A": "No, all sides must have the same style",
        "B": "Only with JavaScript",
        "C": "Yes, using border-top-style, border-right-style, etc.",
        "D": "Only in modern browsers"
      },
      "correct": "C",
      "explanation": "Yes, you can use border-top-style, border-right-style, border-bottom-style, and border-left-style to set different styles for each side. You can also use the shorthand border-style with multiple values: border-style: solid dashed dotted double; (top, right, bottom, left).",
      "topic": "Individual Border Sides"
    },
    {
      "id": 8,
      "question": "What does <pre>outline-offset</pre> do?",
      "options": {
        "A": "Changes the outline color",
        "B": "Sets the space between the outline and the border/edge of the element",
        "C": "Makes the outline thicker",
        "D": "Hides the outline"
      },
      "correct": "B",
      "explanation": "outline-offset sets the space between the outline and the border edge of the element. Positive values move the outline outward, negative values move it inward. This is useful for creating focus indicators with spacing from the element.",
      "topic": "Outline Offset"
    },
    {
      "id": 9,
      "question": "Which value must be set for a border to be visible?",
      "options": {
        "A": "border-color",
        "B": "border-width",
        "C": "All three must be set",
        "D": "border-style (to something other than 'none')"
      },
      "correct": "D",
      "explanation": "border-style must be set to a value other than 'none' for a border to be visible. border-width defaults to 'medium' (about 3px) and border-color defaults to the element's text color (currentColor), so they're optional. But without a border-style, no border appears.",
      "topic": "Border Style Property"
    },
    {
      "id": 10,
      "question": "How do you create rounded corners on only the top-left corner?",
      "options": {
        "A": "border-radius: 10px 0 0 0;",
        "B": "border-top-left-radius: 10px;",
        "C": "corner-radius: top-left 10px;",
        "D": "Both A and B work"
      },
      "correct": "D",
      "explanation": "Both methods work. You can use border-top-left-radius: 10px; to target one corner specifically, or use the border-radius shorthand with four values (top-left, top-right, bottom-right, bottom-left): border-radius: 10px 0 0 0;",
      "topic": "Border Radius"
    },
    {
      "id": 11,
      "question": "What happens if you set [CODE]border-width: 5px 10px;[/CODE]?",
      "options": {
        "A": "All sides get 5px",
        "B": "Top gets 5px, right gets 10px, bottom and left get 0",
        "C": "Top/bottom get 5px, left/right get 10px",
        "D": "Invalid syntax"
      },
      "correct": "C",
      "explanation": "With two values, border-width: 5px 10px; sets the first value (5px) for top and bottom, and the second value (10px) for left and right. This follows the same pattern as margin and padding shorthand.",
      "topic": "Border Width Property"
    },
    {
      "id": 12,
      "question": "Can you set different colors for each border side?",
      "options": {
        "A": "Yes, using border-top-color, border-right-color, etc.",
        "B": "No, all sides must be the same color",
        "C": "Only two different colors maximum",
        "D": "Only with border shorthand"
      },
      "correct": "A",
      "explanation": "Yes, you can use border-top-color, border-right-color, border-bottom-color, and border-left-color to set different colors for each side. You can also use border-color with multiple values: border-color: red blue green yellow; (top, right, bottom, left).",
      "topic": "Border Color Property"
    },
    {
      "id": 13,
      "question": "When is <pre>outline</pre> commonly used instead of <pre>border</pre>?",
      "options": {
        "A": "For creating boxes",
        "B": "For rounded corners",
        "C": "For layouts",
        "D": "For focus indicators on interactive elements"
      },
      "correct": "D",
      "explanation": "outline is commonly used for focus indicators (like when an input is focused) because it doesn't affect layout or cause elements to shift. It provides visual feedback without changing the element's size or causing layout reflow, which is important for accessibility.",
      "topic": "Border and Outline Use Cases"
    },
    {
      "id": 14,
      "question": "What does [CODE]border-width: 1px 2px 3px 4px;[/CODE] do?",
      "options": {
        "A": "All sides: 1px",
        "B": "Top: 1px, Right: 2px, Bottom: 3px, Left: 4px",
        "C": "Top/Bottom: 1px, Left/Right: 2px",
        "D": "Creates a diagonal border"
      },
      "correct": "B",
      "explanation": "With four values, the order is always top, right, bottom, left (clockwise from the top, remember 'TRouBLe'). So: top border is 1px, right is 2px, bottom is 3px, left is 4px. This pattern applies to all four-value shorthands (border-width, border-color, margin, padding, etc.).",
      "topic": "Border Width Property"
    },
    {
      "id": 15,
      "question": "Can <pre>outline</pre> have rounded corners with <pre>border-radius</pre>?",
      "options": {
        "A": "Yes, but only in modern browsers with outline following border-radius",
        "B": "Yes, in all browsers",
        "C": "No, outlines are always rectangular",
        "D": "Only with outline-radius property"
      },
      "correct": "A",
      "explanation": "Modern browsers (Firefox, Chrome, Safari) now support outlines following border-radius curves, but this wasn't always the case. Older implementations rendered outlines as rectangles regardless of border-radius. There's no outline-radius property; the outline just follows the border-radius shape.",
      "topic": "Outline Property"
    },
    {
      "id": 16,
      "question": "What is the default <pre>border-color</pre> if not specified?",
      "options": {
        "A": "Black",
        "B": "The element's text color (currentColor)",
        "C": "Transparent",
        "D": "White"
      },
      "correct": "B",
      "explanation": "If border-color is not specified, it defaults to 'currentColor', which is the element's current text color. This means the border will match the element's color property by default. This is useful for maintaining color consistency.",
      "topic": "Border Color Property"
    },
    {
      "id": 17,
      "question": "Which border-style creates a series of square dots?",
      "options": {
        "A": "dashed",
        "B": "circled",
        "C": "spotted",
        "D": "dotted"
      },
      "correct": "D",
      "explanation": "border-style: dotted creates a border made of square dots (or round dots in some browsers). 'dashed' creates short line segments instead. The exact rendering of dotted and dashed can vary slightly between browsers.",
      "topic": "Border Style Property"
    },
    {
      "id": 18,
      "question": "Does <pre>outline</pre> affect the element's width and height in the box model?",
      "options": {
        "A": "Yes, it increases both width and height",
        "B": "No, outline is drawn outside without affecting dimensions",
        "C": "Only affects width",
        "D": "Only affects height"
      },
      "correct": "B",
      "explanation": "No, outline does NOT affect the element's width or height in the box model. It's drawn outside the border without taking up space. This means adding an outline won't cause layout shifts or change the element's computed dimensions.",
      "topic": "Outline vs Border"
    },
    {
      "id": 19,
      "question": "What does [CODE]border-radius: 10px 20px;[/CODE] do?",
      "options": {
        "A": "All corners: 10px",
        "B": "Top-left/bottom-right: 10px, top-right/bottom-left: 20px",
        "C": "Top: 10px, right: 20px",
        "D": "Creates an error"
      },
      "correct": "B",
      "explanation": "With two values, border-radius sets the first value for top-left and bottom-right corners, and the second value for top-right and bottom-left corners (diagonal corners get the same value). This creates a diagonal pattern.",
      "topic": "Border Radius"
    },
    {
      "id": 20,
      "question": "Can you use <pre>outline-offset</pre> with negative values?",
      "options": {
        "A": "Yes, negative values draw the outline inside the element",
        "B": "No, only positive values",
        "C": "Only in Firefox",
        "D": "Negative values hide the outline"
      },
      "correct": "A",
      "explanation": "Yes, outline-offset can be negative. Negative values draw the outline inward, inside the element's border. For example, outline-offset: -5px; draws the outline 5px inside the border edge. This can create interesting visual effects.",
      "topic": "Outline Offset"
    },
    {
      "id": 21,
      "question": "What is the shorthand order for the <pre>border</pre> property?",
      "options": {
        "A": "Must be: style, width, color",
        "B": "Must be: width, color, style",
        "C": "Any order: width, style, and color can be in any sequence",
        "D": "Must be: color, style, width"
      },
      "correct": "C",
      "explanation": "The border shorthand is flexible—width, style, and color can be in any order. border: 2px solid red, border: solid red 2px, and border: red 2px solid all work the same. The browser identifies each value by its type.",
      "topic": "Border Shorthand"
    },
    {
      "id": 22,
      "question": "Which border-style value creates two parallel lines?",
      "options": {
        "A": "parallel",
        "B": "dashed",
        "C": "double",
        "D": "twin"
      },
      "correct": "C",
      "explanation": "border-style: double creates a border with two parallel solid lines. The space between the lines is equal to the border-width minus the width of the two lines. For the double border to be visible, border-width should be at least 3px.",
      "topic": "Border Style Property"
    },
    {
      "id": 23,
      "question": "Can you style individual sides of an <pre>outline</pre>?",
      "options": {
        "A": "No, outline applies to all four sides equally",
        "B": "Yes, using outline-top, outline-right, etc.",
        "C": "Only in CSS Grid",
        "D": "Only with outline-side property"
      },
      "correct": "A",
      "explanation": "No, you cannot style individual sides of an outline. Unlike border (which has border-top, border-right, etc.), outline is always applied to all four sides equally. If you need different styling per side, you must use border instead.",
      "topic": "Outline vs Border"
    },
    {
      "id": 24,
      "question": "What does [CODE]border: none;[/CODE] do?",
      "options": {
        "A": "Hides the border but reserves space for it",
        "B": "Removes the border entirely (sets border-style to none)",
        "C": "Makes the border transparent",
        "D": "Sets border width to 0"
      },
      "correct": "B",
      "explanation": "border: none sets border-style to 'none', which removes the border entirely. No space is reserved for it, and border-width becomes irrelevant. This is the same as border-style: none and is commonly used to remove default borders from elements like inputs and buttons.",
      "topic": "Border Shorthand"
    },
    {
      "id": 25,
      "question": "How do you create an elliptical border-radius?",
      "options": {
        "A": "It's impossible",
        "B": "Use border-ellipse",
        "C": "Use two values separated by a slash: border-radius: 50px / 25px;",
        "D": "Use border-radius: ellipse;"
      },
      "correct": "C",
      "explanation": "You can create elliptical corners by using a slash (/) to separate horizontal and vertical radii: border-radius: 50px / 25px; creates corners with 50px horizontal radius and 25px vertical radius. This allows for non-circular rounded corners.",
      "topic": "Border Radius"
    },
    {
      "id": 26,
      "question": "What is a use case for <pre>border</pre> over <pre>outline</pre>?",
      "options": {
        "A": "To reduce file size",
        "B": "When you want to avoid layout changes",
        "C": "For focus indicators",
        "D": "When you need different styling on each side"
      },
      "correct": "D",
      "explanation": "Use border when you need different styling on different sides (border-top, border-right, etc.) or when you want the border to be part of the element's dimensions in the box model. Outline can't be styled per-side and doesn't affect layout.",
      "topic": "Border and Outline Use Cases"
    },
    {
      "id": 27,
      "question": "What does [CODE]border-style: solid dashed;[/CODE] create?",
      "options": {
        "A": "All sides solid",
        "B": "Invalid syntax",
        "C": "Top solid, right dashed, bottom and left solid",
        "D": "Top/bottom solid, left/right dashed"
      },
      "correct": "D",
      "explanation": "With two values in border-style, the first value applies to top and bottom, the second to left and right. So border-style: solid dashed creates solid borders on top and bottom, dashed borders on left and right. This follows the same pattern as other shorthand properties.",
      "topic": "Border Style Property"
    },
    {
      "id": 28,
      "question": "Can <pre>outline-width</pre> be set to different values for each side?",
      "options": {
        "A": "No, outline-width applies equally to all sides",
        "B": "Yes, using outline-top-width, etc.",
        "C": "Only with outline-width shorthand",
        "D": "Only in CSS4"
      },
      "correct": "A",
      "explanation": "No, outline-width applies equally to all four sides. Unlike border-width which can have different values per side, outline is uniform around the element. This is another key difference between outline and border.",
      "topic": "Outline Property"
    },
    {
      "id": 29,
      "question": "What happens with [CODE]border-left: 5px solid blue;[/CODE] if the element already has [CODE]border: 2px solid red;[/CODE]?",
      "options": {
        "A": "Both borders display",
        "B": "The left border becomes 5px solid blue, other sides stay 2px solid red",
        "C": "Error - conflicting styles",
        "D": "The later rule is ignored"
      },
      "correct": "B",
      "explanation": "Specific border properties override the general shorthand. The border-left rule overrides just the left side, making it 5px solid blue, while top, right, and bottom remain 2px solid red. Specific properties always have higher specificity than the shorthand when applied later.",
      "topic": "Individual Border Sides"
    },
    {
      "id": 30,
      "question": "Why should you avoid removing focus outlines with <pre>outline: none;</pre>?",
      "options": {
        "A": "It slows down the browser",
        "B": "It breaks keyboard accessibility by removing visible focus indicators",
        "C": "It's invalid CSS",
        "D": "It affects all elements on the page"
      },
      "correct": "B",
      "explanation": "Removing focus outlines with outline: none breaks keyboard accessibility because users navigating with Tab/Shift+Tab can't see which element has focus. If you must customize the outline, always provide an alternative focus indicator (like a border change or box-shadow) to maintain accessibility.",
      "topic": "Border and Outline Use Cases"
    }
  ]
}
