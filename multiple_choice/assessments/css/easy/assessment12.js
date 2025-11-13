module.exports = {
  "metadata": {
    "title": "CSS Basic Layout - Positioning",
    "description": "Master CSS positioning properties including static, relative, absolute, and fixed, understand offset properties (top, right, bottom, left), learn z-index and stacking context basics, and discover practical use cases for different positioning values.",
    "difficulty": "easy",
    "domain": "css",
    "timeLimit": 30,
    "questionCount": 30,
    "assessmentId": 12,
    "assessmentUniqueId": 1763060617803,
    "testType": "multiple-choice",
    "topics": [
      "Position Property Values",
      "Static Positioning",
      "Relative Positioning",
      "Absolute Positioning",
      "Fixed Positioning",
      "Offset Properties",
      "Z-Index and Stacking",
      "Stacking Context Basics",
      "Positioning Use Cases",
      "Position Relative to Parent"
    ],
    "topicLinks": [
      {
        "topicName": "Position Property Values",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
      },
      {
        "topicName": "Static Positioning",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#static"
      },
      {
        "topicName": "Relative Positioning",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#relative"
      },
      {
        "topicName": "Absolute Positioning",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute"
      },
      {
        "topicName": "Fixed Positioning",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed"
      },
      {
        "topicName": "Offset Properties",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/top"
      },
      {
        "topicName": "Z-Index and Stacking",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
      },
      {
        "topicName": "Stacking Context Basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context"
      },
      {
        "topicName": "Positioning Use Cases",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning"
      },
      {
        "topicName": "Position Relative to Parent",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute"
      }
    ],
    "keywords": [
      "position",
      "static",
      "relative",
      "absolute",
      "fixed",
      "sticky",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "stacking-context",
      "offset-properties",
      "positioning-context",
      "document-flow",
      "positioned-element",
      "positioning-parent",
      "containing-block",
      "stacking-order",
      "viewport-positioning",
      "relative-offset",
      "absolute-parent",
      "fixed-header",
      "fixed-footer",
      "overlay",
      "tooltip-positioning",
      "dropdown-positioning",
      "positioning-use-cases"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the default value of the <pre>position</pre> property for all HTML elements?",
      "options": {
        "A": "<pre>static</pre>",
        "B": "<pre>absolute</pre>",
        "C": "<pre>relative</pre>",
        "D": "<pre>fixed</pre>"
      },
      "correct": "A",
      "explanation": "The default position value is static. Elements with position: static are positioned according to the normal document flow and are not affected by top, right, bottom, left, or z-index properties.",
      "difficulty": "easy",
      "topic": "Static Positioning"
    },
    {
      "id": 2,
      "question": "Which positioning value removes an element from the normal document flow?",
      "options": {
        "A": "<pre>static</pre>",
        "B": "<pre>relative</pre>",
        "C": "<pre>absolute</pre>",
        "D": "<pre>none</pre>"
      },
      "correct": "C",
      "explanation": "position: absolute removes the element from the normal document flow. The element is positioned relative to its nearest positioned ancestor (an ancestor with position other than static), and other elements act as if it doesn't exist in the flow.",
      "difficulty": "easy",
      "topic": "Absolute Positioning"
    },
    {
      "id": 3,
      "question": "What happens when you set <pre>position: relative;</pre> on an element?",
      "options": {
        "A": "The element is removed from the document flow",
        "B": "The element becomes a block element",
        "C": "The element is positioned relative to the viewport",
        "D": "The element stays in the flow but can be offset from its normal position"
      },
      "correct": "D",
      "explanation": "position: relative keeps the element in the normal document flow, but allows you to offset it using top, right, bottom, and left properties. The original space is still reserved in the layout, even when the element is visually moved.",
      "difficulty": "easy",
      "topic": "Relative Positioning"
    },
    {
      "id": 4,
      "question": "Which positioning value keeps an element fixed relative to the viewport when scrolling?",
      "options": {
        "A": "<pre>static</pre>",
        "B": "<pre>relative</pre>",
        "C": "<pre>absolute</pre>",
        "D": "<pre>fixed</pre>"
      },
      "correct": "D",
      "explanation": "position: fixed positions the element relative to the viewport (browser window). It stays in the same position even when the page is scrolled. This is commonly used for fixed headers, footers, or floating action buttons.",
      "difficulty": "easy",
      "topic": "Fixed Positioning"
    },
    {
      "id": 5,
      "question": "Do offset properties like <pre>top</pre> and <pre>left</pre> work on elements with <pre>position: static;</pre>?",
      "options": {
        "A": "Yes, they work on all elements",
        "B": "No, they are ignored on static elements",
        "C": "Only top works, not left",
        "D": "They work only if the element has a width set"
      },
      "correct": "B",
      "explanation": "Offset properties (top, right, bottom, left) have no effect on statically positioned elements. These properties only work when position is set to relative, absolute, fixed, or sticky.",
      "difficulty": "easy",
      "topic": "Static Positioning"
    },
    {
      "id": 6,
      "question": "An absolutely positioned element positions itself relative to which ancestor?",
      "options": {
        "A": "Its immediate parent element",
        "B": "Always the <pre><body></pre> element",
        "C": "Always the viewport",
        "D": "The nearest positioned ancestor (position other than static)"
      },
      "correct": "D",
      "explanation": "An absolutely positioned element is positioned relative to its nearest positioned ancestor—any ancestor with position: relative, absolute, fixed, or sticky. If no positioned ancestor exists, it positions relative to the initial containing block (usually the document).",
      "difficulty": "easy",
      "topic": "Position Relative to Parent"
    },
    {
      "id": 7,
      "question": "What is the purpose of the <pre>z-index</pre> property?",
      "options": {
        "A": "To set the element's width",
        "B": "To control the stacking order of positioned elements",
        "C": "To set the element's height",
        "D": "To control horizontal positioning"
      },
      "correct": "B",
      "explanation": "The z-index property controls the stacking order of positioned elements (elements with position other than static). Higher z-index values appear in front of elements with lower values. It only works on positioned elements.",
      "difficulty": "easy",
      "topic": "Z-Index and Stacking"
    },
    {
      "id": 8,
      "question": "If you set [CODE]position: relative; top: 20px;[/CODE] on an element, what happens?",
      "options": {
        "A": "The element moves up 20px from its normal position",
        "B": "The element moves 20px down from its normal position",
        "C": "The element moves 20px to the right",
        "D": "Nothing happens"
      },
      "correct": "B",
      "explanation": "With position: relative, the top property moves the element down from its normal position. A positive top value pushes the element downward, while a negative value would pull it upward. The offset is from the top edge of where the element would normally be.",
      "difficulty": "easy",
      "topic": "Relative Positioning"
    },
    {
      "id": 9,
      "question": "Which position value is commonly used for sticky headers that remain visible while scrolling?",
      "options": {
        "A": "<pre>static</pre>",
        "B": "<pre>fixed</pre>",
        "C": "<pre>absolute</pre>",
        "D": "<pre>relative</pre>"
      },
      "correct": "B",
      "explanation": "position: fixed is commonly used for sticky headers and footers. The element remains fixed to the viewport and doesn't move when the page is scrolled, making it perfect for navigation bars that should always be visible.",
      "difficulty": "easy",
      "topic": "Positioning Use Cases"
    },
    {
      "id": 10,
      "question": "Does <pre>z-index</pre> work on elements with <pre>position: static;</pre>?",
      "options": {
        "A": "No, z-index only works on positioned elements",
        "B": "Yes, it works on all elements",
        "C": "Only if the element is a block element",
        "D": "Only in modern browsers"
      },
      "correct": "A",
      "explanation": "z-index has no effect on statically positioned elements. It only works on positioned elements (position: relative, absolute, fixed, or sticky). You must change the position property to use z-index.",
      "difficulty": "easy",
      "topic": "Z-Index and Stacking"
    },
    {
      "id": 11,
      "question": "What happens to the space an element occupied when you change it to <pre>position: absolute;</pre>?",
      "options": {
        "A": "The space is preserved",
        "B": "Nothing changes",
        "C": "A gap is left with a border",
        "D": "The space collapses and other elements move up to fill it"
      },
      "correct": "D",
      "explanation": "When an element is positioned absolutely, it's removed from the normal document flow. The space it previously occupied collapses, and surrounding elements reposition as if the absolutely positioned element doesn't exist.",
      "difficulty": "easy",
      "topic": "Absolute Positioning"
    },
    {
      "id": 12,
      "question": "Which CSS properties are used to offset a positioned element from its edges?",
      "options": {
        "A": "<pre>margin-top</pre>, <pre>margin-left</pre>",
        "B": "<pre>top</pre>, <pre>right</pre>, <pre>bottom</pre>, <pre>left</pre>",
        "C": "<pre>padding-top</pre>, <pre>padding-left</pre>",
        "D": "<pre>x</pre>, <pre>y</pre>"
      },
      "correct": "B",
      "explanation": "The offset properties are top, right, bottom, and left. These properties specify the distance from the edges of the element's containing block (for absolute/fixed) or from its normal position (for relative).",
      "difficulty": "easy",
      "topic": "Offset Properties"
    },
    {
      "id": 13,
      "question": "If a parent has <pre>position: relative;</pre> and a child has <pre>position: absolute;</pre>, where does the child position itself?",
      "options": {
        "A": "Relative to the viewport",
        "B": "Relative to the parent element",
        "C": "Relative to the body element",
        "D": "It doesn't move"
      },
      "correct": "B",
      "explanation": "When a parent has position: relative (or any position value other than static), it becomes the positioning context for absolutely positioned children. The child's top, right, bottom, and left values are calculated relative to the parent's padding box.",
      "difficulty": "easy",
      "topic": "Position Relative to Parent"
    },
    {
      "id": 14,
      "question": "What is a common use case for <pre>position: relative;</pre>?",
      "options": {
        "A": "To establish a positioning context for absolutely positioned children",
        "B": "To create fixed headers",
        "C": "To remove elements from the flow",
        "D": "To make elements invisible"
      },
      "correct": "A",
      "explanation": "A common use case for position: relative is to create a positioning context for absolutely positioned child elements. The parent doesn't need to be offset—just having position: relative makes it the reference point for children with position: absolute.",
      "difficulty": "easy",
      "topic": "Relative Positioning"
    },
    {
      "id": 15,
      "question": "Can you use both <pre>top</pre> and <pre>bottom</pre> offset properties together on the same element?",
      "options": {
        "A": "No, you can only use one at a time",
        "B": "Only on absolutely positioned elements",
        "C": "Yes, and they work together to stretch the element",
        "D": "Only if width is not set"
      },
      "correct": "C",
      "explanation": "You can use both top and bottom (or left and right) together on positioned elements. When both are set, they define the element's height (or width) by stretching it between the two edges. For example, top: 0; bottom: 0; makes an absolutely positioned element stretch to fill its container's full height.",
      "difficulty": "easy",
      "topic": "Offset Properties"
    },
    {
      "id": 16,
      "question": "Which element appears on top by default when two positioned elements overlap?",
      "options": {
        "A": "The element with higher z-index",
        "B": "The element that appears later in the HTML",
        "C": "The element with smaller dimensions",
        "D": "The element with position: fixed"
      },
      "correct": "B",
      "explanation": "When positioned elements overlap without z-index specified, the element that appears later in the HTML source code will be on top. This is the default stacking order. You can override this with z-index values.",
      "difficulty": "easy",
      "topic": "Stacking Context Basics"
    },
    {
      "id": 17,
      "question": "Does <pre>position: relative;</pre> with no offset properties have any visual effect?",
      "options": {
        "A": "Yes, it changes the element's display",
        "B": "Yes, it removes the element from the flow",
        "C": "Yes, it adds spacing around the element",
        "D": "No, the element appears in its normal position"
      },
      "correct": "D",
      "explanation": "position: relative with no offset properties (top, right, bottom, left) has no visual effect—the element appears in its normal position. However, it's still useful because it establishes a positioning context for absolutely positioned descendants and allows z-index to work.",
      "difficulty": "easy",
      "topic": "Relative Positioning"
    },
    {
      "id": 18,
      "question": "What is the purpose of using <pre>position: relative;</pre> on a parent container?",
      "options": {
        "A": "To make the parent scrollable",
        "B": "To make child elements visible",
        "C": "To increase the parent's z-index",
        "D": "To establish a positioning reference for absolutely positioned children"
      },
      "correct": "D",
      "explanation": "Setting position: relative on a parent establishes it as the containing block for absolutely positioned children. This is a very common pattern—the parent acts as the reference point without moving itself, while children with position: absolute can be positioned relative to it using offset properties.",
      "difficulty": "easy",
      "topic": "Positioning Use Cases"
    },
    {
      "id": 19,
      "question": "If an element has [CODE]position: absolute; top: 0; right: 0;[/CODE], where will it appear?",
      "options": {
        "A": "Bottom-left corner of its positioned parent",
        "B": "Top-left corner of its positioned parent",
        "C": "Top-right corner of its positioned parent",
        "D": "Bottom-right corner of its positioned parent"
      },
      "correct": "C",
      "explanation": "With position: absolute, top: 0, and right: 0, the element will be positioned at the top-right corner of its nearest positioned ancestor. The top: 0 aligns it to the top edge, and right: 0 aligns it to the right edge.",
      "difficulty": "easy",
      "topic": "Absolute Positioning"
    },
    {
      "id": 20,
      "question": "Can negative values be used with offset properties like <pre>top</pre> and <pre>left</pre>?",
      "options": {
        "A": "Yes, negative values move the element in the opposite direction",
        "B": "No, only positive values are allowed",
        "C": "Only on fixed elements",
        "D": "Only in percentage units"
      },
      "correct": "A",
      "explanation": "Negative values work with offset properties. For example, top: -10px moves the element up from its reference point, and left: -20px moves it to the left. This is useful for overlapping elements or positioning elements outside their container.",
      "difficulty": "easy",
      "topic": "Offset Properties"
    },
    {
      "id": 21,
      "question": "What is the default <pre>z-index</pre> value for positioned elements?",
      "options": {
        "A": "<pre>0</pre>",
        "B": "<pre>1</pre>",
        "C": "<pre>-1</pre>",
        "D": "<pre>auto</pre>"
      },
      "correct": "D",
      "explanation": "The default z-index value is auto, which places the element in the same stacking context as its parent with a stack level of 0. Elements with z-index: auto don't create new stacking contexts (unless they're flex items or grid items).",
      "difficulty": "easy",
      "topic": "Z-Index and Stacking"
    },
    {
      "id": 22,
      "question": "Which position value would you use for a tooltip that needs to appear above a button?",
      "options": {
        "A": "<pre>static</pre>",
        "B": "<pre>relative</pre>",
        "C": "<pre>absolute</pre>",
        "D": "<pre>fixed</pre>"
      },
      "correct": "C",
      "explanation": "position: absolute is ideal for tooltips. The button (parent) would have position: relative, and the tooltip would have position: absolute to position it relative to the button. You can then use offset properties and z-index to place it exactly where needed.",
      "difficulty": "easy",
      "topic": "Positioning Use Cases"
    },
    {
      "id": 23,
      "question": "Does <pre>position: fixed;</pre> remove an element from the document flow?",
      "options": {
        "A": "No, it keeps the element in the flow",
        "B": "Only on mobile devices",
        "C": "Yes, other elements behave as if it doesn't exist",
        "D": "Only if z-index is set"
      },
      "correct": "C",
      "explanation": "position: fixed removes the element from the normal document flow, just like position: absolute. Other elements will reposition as if the fixed element doesn't exist. The fixed element is then positioned relative to the viewport.",
      "difficulty": "easy",
      "topic": "Fixed Positioning"
    },
    {
      "id": 24,
      "question": "What happens if no ancestor of an absolutely positioned element has a position other than static?",
      "options": {
        "A": "The element positions relative to the initial containing block (document)",
        "B": "The element won't render",
        "C": "The element becomes statically positioned",
        "D": "The element positions relative to the viewport"
      },
      "correct": "A",
      "explanation": "If an absolutely positioned element has no positioned ancestor, it positions relative to the initial containing block, which is typically the <html> element or the document. This is why it's common practice to set position: relative on a parent to create a positioning context.",
      "difficulty": "easy",
      "topic": "Absolute Positioning"
    },
    {
      "id": 25,
      "question": "Can you combine <pre>position: relative;</pre> with offset properties to slightly adjust an element's position?",
      "options": {
        "A": "Only if the element is inline",
        "B": "No, relative positioning doesn't support offsets",
        "C": "Yes, that's a common use case for fine-tuning layout",
        "D": "Only with negative values"
      },
      "correct": "C",
      "explanation": "Yes, using position: relative with small offset values (like top: 2px or left: -5px) is a common technique for fine-tuning element positions without affecting the layout flow. The element's original space remains reserved, so it doesn't disrupt surrounding elements.",
      "difficulty": "easy",
      "topic": "Relative Positioning"
    },
    {
      "id": 26,
      "question": "Which position value would you use for a modal overlay that covers the entire viewport?",
      "options": {
        "A": "<pre>static</pre>",
        "B": "<pre>fixed</pre>",
        "C": "<pre>absolute</pre>",
        "D": "<pre>relative</pre>"
      },
      "correct": "B",
      "explanation": "position: fixed with top: 0, left: 0, right: 0, bottom: 0 (or width/height: 100%) is ideal for modal overlays. It covers the entire viewport and stays in place even when the underlying page is scrolled, which is the expected behavior for modals.",
      "difficulty": "easy",
      "topic": "Positioning Use Cases"
    },
    {
      "id": 27,
      "question": "What is a stacking context?",
      "options": {
        "A": "A 3D rendering space where z-index determines order within that context",
        "B": "A way to stack divs vertically",
        "C": "A CSS grid layout feature",
        "D": "A flexbox alignment property"
      },
      "correct": "A",
      "explanation": "A stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis. Elements within the same stacking context are layered according to their z-index values. Certain CSS properties (like position with z-index, opacity, transform) create new stacking contexts.",
      "difficulty": "easy",
      "topic": "Stacking Context Basics"
    },
    {
      "id": 28,
      "question": "If you set [CODE]position: absolute; left: 50%;[/CODE], where does the element's left edge position?",
      "options": {
        "A": "At 50% from the left edge of its positioned parent",
        "B": "At the center of the viewport",
        "C": "At the right edge of the parent",
        "D": "It doesn't move"
      },
      "correct": "A",
      "explanation": "left: 50% positions the element's left edge at 50% from the left edge of its positioned parent (or containing block). Note that this doesn't center the element—it places the left edge at the center. To truly center, you'd also need to offset by half the element's width (or use transform: translateX(-50%)).",
      "difficulty": "easy",
      "topic": "Absolute Positioning"
    },
    {
      "id": 29,
      "question": "Does <pre>margin</pre> work on absolutely positioned elements?",
      "options": {
        "A": "Yes, margin works normally on positioned elements",
        "B": "No, positioned elements ignore margin",
        "C": "Only top and left margins work",
        "D": "Only if z-index is set"
      },
      "correct": "A",
      "explanation": "Yes, margin works on absolutely positioned elements. Margins are calculated from the element's offset position. For example, if an element has top: 0 and margin-top: 10px, there will be a 10px gap between the top edge of the containing block and the element.",
      "difficulty": "easy",
      "topic": "Absolute Positioning"
    },
    {
      "id": 30,
      "question": "Which elements can have their <pre>z-index</pre> changed?",
      "options": {
        "A": "All elements",
        "B": "Only positioned elements (position other than static)",
        "C": "Only block elements",
        "D": "Only elements with a background color"
      },
      "correct": "B",
      "explanation": "z-index only works on positioned elements—elements with position: relative, absolute, fixed, or sticky. It has no effect on statically positioned elements (position: static, which is the default). To use z-index, you must first set a position value other than static.",
      "difficulty": "easy",
      "topic": "Z-Index and Stacking"
    }
  ]
}
