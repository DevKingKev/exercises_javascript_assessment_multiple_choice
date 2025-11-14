module.exports = {
  "metadata": {
    "title": "CSS Medium - Positioning Deep Dive",
    "description": "Intermediate assessment covering advanced CSS positioning: stacking contexts and z-index behavior, sticky positioning (hybrid relative/fixed), containing blocks for positioned elements, offset properties in different position modes, fixed vs sticky positioning differences, centering techniques with absolute positioning, inset shorthand property, and common position traps and gotchas.",
    "difficulty": "medium",
    "domain": "css",
    "timeLimit": 45,
    "questionCount": 25,
    "assessmentId": 12,
    "assessmentUniqueId": 1763118194844,
    "testType": "multiple-choice",
    "topics": [
      "CSS Positioning",
      "Stacking Context",
      "z-index",
      "position: sticky",
      "Containing Block",
      "Offset Properties",
      "position: fixed",
      "position: absolute",
      "Centering Techniques",
      "inset Property",
      "Position Gotchas"
    ],
    "topicLinks": [
      {
        "topicName": "CSS Positioning",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
      },
      {
        "topicName": "Stacking Context",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context"
      },
      {
        "topicName": "z-index",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
      },
      {
        "topicName": "position: sticky",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky"
      },
      {
        "topicName": "Containing Block",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block"
      },
      {
        "topicName": "inset Property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/inset"
      }
    ],
    "keywords": [
      "position",
      "absolute",
      "relative",
      "fixed",
      "sticky",
      "z-index",
      "stacking context",
      "containing block",
      "top",
      "right",
      "bottom",
      "left",
      "inset",
      "centering",
      "offset"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What creates a new stacking context?",
      "options": {
        "A": "Elements with position other than static and z-index other than auto, opacity < 1, transform, filter, and several other properties",
        "B": "Any element with a z-index value",
        "C": "Only elements with z-index: 999",
        "D": "All positioned elements"
      },
      "correct": "A",
      "explanation": "Multiple properties create stacking contexts: positioned elements with z-index ≠ auto, elements with opacity < 1, transform, filter, will-change, contain: paint, and others. Understanding what creates stacking contexts is crucial for z-index behavior.",
      "topic": "Stacking Context"
    },
    {
      "id": 2,
      "question": "Does <pre>z-index</pre> work on <pre>position: static</pre> elements?",
      "options": {
        "A": "Yes, always",
        "B": "Only in flexbox",
        "C": "Only with negative values",
        "D": "No, z-index only works on positioned elements (relative, absolute, fixed, sticky)"
      },
      "correct": "D",
      "explanation": "Elements with <pre>position: static</pre> (the default) ignore <pre>z-index</pre>. You must use <pre>relative</pre>, <pre>absolute</pre>, <pre>fixed</pre>, or <pre>sticky</pre> positioning for z-index to have any effect. This is a common gotcha.",
      "topic": "z-index"
    },
    {
      "id": 3,
      "question": "How does <pre>position: sticky</pre> behave?",
      "options": {
        "A": "Always sticks to viewport like fixed",
        "B": "Same as position: relative",
        "C": "Acts like relative positioning until scrolling reaches a threshold, then behaves like fixed within its container",
        "D": "Makes element permanently visible"
      },
      "correct": "C",
      "explanation": "<pre>position: sticky</pre> is a hybrid: it behaves like <pre>relative</pre> until the element reaches a specified offset (e.g., <pre>top: 0</pre>) during scrolling, then it 'sticks' like <pre>fixed</pre> until its container scrolls out of view.",
      "topic": "position: sticky"
    },
    {
      "id": 4,
      "question": "What is required for <pre>position: sticky</pre> to work?",
      "options": {
        "A": "Just position: sticky",
        "B": "At least one offset property (top, right, bottom, or left) must be specified",
        "C": "A z-index value",
        "D": "A fixed height"
      },
      "correct": "B",
      "explanation": "Sticky positioning requires at least one threshold offset like <pre>top: 0</pre> or <pre>bottom: 20px</pre> to define when sticking should occur. Without an offset property, sticky behaves identically to relative positioning.",
      "topic": "position: sticky"
    },
    {
      "id": 5,
      "question": "What is the containing block for an absolutely positioned element?",
      "options": {
        "A": "Always the viewport",
        "B": "The parent element",
        "C": "The nearest ancestor with position other than static (relative, absolute, fixed, sticky)",
        "D": "The body element"
      },
      "correct": "C",
      "explanation": "Absolutely positioned elements are positioned relative to their nearest positioned ancestor (position ≠ static). If no positioned ancestor exists, it uses the initial containing block (viewport). This is why you often set <pre>position: relative</pre> on containers.",
      "topic": "Containing Block"
    },
    {
      "id": 6,
      "question": "What is the containing block for a fixed positioned element?",
      "options": {
        "A": "The nearest positioned ancestor",
        "B": "The viewport (or the element with transform/perspective/filter property)",
        "C": "The parent element",
        "D": "The root element"
      },
      "correct": "B",
      "explanation": "Fixed elements are normally positioned relative to the viewport. However, if an ancestor has <pre>transform</pre>, <pre>perspective</pre>, <pre>filter</pre>, or certain other properties, that ancestor becomes the containing block instead. This is a common gotcha.",
      "topic": "Containing Block"
    },
    {
      "id": 7,
      "question": "How do offset properties (<pre>top</pre>, <pre>left</pre>, etc.) work with <pre>position: relative</pre>?",
      "options": {
        "A": "Position element relative to parent",
        "B": "Offset element from its normal position in the document flow, leaving a gap",
        "C": "Same as absolute positioning",
        "D": "No effect"
      },
      "correct": "B",
      "explanation": "With <pre>position: relative</pre>, offset properties move the element from where it would normally be, but it still occupies its original space in the layout. <pre>top: 20px</pre> moves it 20px down from its normal position, leaving a gap.",
      "topic": "Offset Properties"
    },
    {
      "id": 8,
      "question": "How do offset properties work with <pre>position: absolute</pre>?",
      "options": {
        "A": "Offset from normal position",
        "B": "Position element relative to its containing block edges (positioned ancestor or viewport)",
        "C": "No effect",
        "D": "Only work with pixels"
      },
      "correct": "B",
      "explanation": "Absolute positioning uses offset properties to position the element relative to its containing block's edges. <pre>top: 10px; left: 20px;</pre> positions it 10px from the top and 20px from the left of the containing block.",
      "topic": "Offset Properties"
    },
    {
      "id": 9,
      "question": "What's the difference between <pre>position: fixed</pre> and <pre>position: sticky</pre>?",
      "options": {
        "A": "No difference",
        "B": "Fixed is always positioned relative to viewport; sticky toggles between relative and fixed based on scroll position",
        "C": "Sticky is newer",
        "D": "Fixed doesn't work on mobile"
      },
      "correct": "B",
      "explanation": "<pre>fixed</pre> elements are always removed from flow and positioned relative to the viewport. <pre>sticky</pre> elements start in normal flow (like relative) and only become fixed when scrolling reaches the threshold, and only within their container's bounds.",
      "topic": "position: sticky"
    },
    {
      "id": 10,
      "question": "How do you center an absolutely positioned element?",
      "options": {
        "A": "<pre>top: 50%; left: 50%; transform: translate(-50%, -50%);</pre> or <pre>inset: 0; margin: auto;</pre> with defined width/height",
        "B": "<pre>margin: auto;</pre> only",
        "C": "<pre>text-align: center;</pre>",
        "D": "It's impossible"
      },
      "correct": "A",
      "explanation": "Two common methods: 1) <pre>top: 50%; left: 50%; transform: translate(-50%, -50%);</pre> (works without defined dimensions), or 2) <pre>top: 0; right: 0; bottom: 0; left: 0; margin: auto;</pre> (requires defined width/height).",
      "topic": "Centering Techniques"
    },
    {
      "id": 11,
      "question": "What does the <pre>inset</pre> property do?",
      "options": {
        "A": "Shorthand for top, right, bottom, left offset properties",
        "B": "Sets padding",
        "C": "Creates indentation",
        "D": "Sets margins"
      },
      "correct": "A",
      "explanation": "<pre>inset</pre> is shorthand for setting all four offset properties. <pre>inset: 10px;</pre> equals <pre>top: 10px; right: 10px; bottom: 10px; left: 10px;</pre>. You can also use 2, 3, or 4 values like margin/padding.",
      "topic": "inset Property"
    },
    {
      "id": 12,
      "question": "What does <pre>inset: 0;</pre> do on an absolutely positioned element?",
      "options": {
        "A": "Removes positioning",
        "B": "Stretches the element to fill its containing block (all edges at 0)",
        "C": "Centers the element",
        "D": "Has no effect"
      },
      "correct": "B",
      "explanation": "<pre>inset: 0;</pre> sets all offsets to 0, stretching the element to fill its containing block's dimensions. Equivalent to <pre>top: 0; right: 0; bottom: 0; left: 0;</pre>. Combined with <pre>margin: auto;</pre>, it can center elements.",
      "topic": "inset Property"
    },
    {
      "id": 13,
      "question": "Can child elements have a higher z-index than their parent's stacking context?",
      "options": {
        "A": "Yes, always",
        "B": "Only with z-index: 9999",
        "C": "No, child elements cannot escape their parent's stacking context to appear above elements in a different context",
        "D": "Only if parent has z-index: auto"
      },
      "correct": "C",
      "explanation": "Children are confined to their parent's stacking context. If parent A has z-index: 1 and parent B has z-index: 2, no child of A can appear above B or B's children, regardless of the child's z-index value.",
      "topic": "Stacking Context"
    },
    {
      "id": 14,
      "question": "What happens with this code: <pre>.parent { position: relative; z-index: 1; } .child { position: absolute; z-index: 999; }</pre> when another element has z-index: 2?",
      "options": {
        "A": "Child appears above everything with z-index: 999",
        "B": "The element with z-index: 2 appears above both parent and child because the parent creates a stacking context with z-index: 1",
        "C": "They overlap randomly",
        "D": "z-index doesn't work"
      },
      "correct": "B",
      "explanation": "The parent's <pre>z-index: 1</pre> creates a stacking context containing the child. The child's <pre>z-index: 999</pre> only matters within that context. An external element with <pre>z-index: 2</pre> appears above the entire parent context.",
      "topic": "Stacking Context"
    },
    {
      "id": 15,
      "question": "Why might <pre>position: sticky</pre> not work?",
      "options": {
        "A": "Browser doesn't support it",
        "B": "Needs JavaScript to activate",
        "C": "It always works",
        "D": "Common issues: no offset property specified, parent has overflow hidden, sticky element is the only child of its container, or container height equals element height"
      },
      "correct": "D",
      "explanation": "Sticky positioning fails when: 1) no threshold offset is set, 2) ancestor has <pre>overflow: hidden/auto/scroll</pre>, 3) container doesn't have enough scroll space, or 4) element is as tall as its container. These are common gotchas.",
      "topic": "position: sticky"
    },
    {
      "id": 16,
      "question": "What does <pre>top: 50%</pre> mean on an absolutely positioned element?",
      "options": {
        "A": "Element moves 50% of its own height",
        "B": "Element's center is at 50%",
        "C": "Element is centered",
        "D": "Element's top edge is positioned 50% down from the top of its containing block"
      },
      "correct": "D",
      "explanation": "<pre>top: 50%</pre> positions the element's top edge at 50% of the containing block's height. To center, you need <pre>transform: translateY(-50%)</pre> to shift the element up by half its own height: <pre>top: 50%; transform: translateY(-50%);</pre>",
      "topic": "Offset Properties"
    },
    {
      "id": 17,
      "question": "How does <pre>transform</pre> affect the containing block?",
      "options": {
        "A": "No effect",
        "B": "Only for 3D transforms",
        "C": "Only affects the element itself",
        "D": "An element with transform creates a containing block for fixed and absolutely positioned descendants"
      },
      "correct": "D",
      "explanation": "Elements with <pre>transform</pre> (also <pre>perspective</pre>, <pre>filter</pre>) create a new containing block for fixed and absolute descendants. This means <pre>position: fixed</pre> children will be fixed relative to the transformed element, not the viewport.",
      "topic": "Containing Block"
    },
    {
      "id": 18,
      "question": "What is a common mistake when using <pre>z-index</pre>?",
      "options": {
        "A": "Forgetting that z-index only works on positioned elements and within stacking contexts",
        "B": "Using negative values",
        "C": "Using values over 100",
        "D": "Using decimal values"
      },
      "correct": "A",
      "explanation": "Common mistakes: 1) applying z-index to static elements (doesn't work), 2) not understanding stacking contexts (why z-index: 9999 doesn't always win), 3) forgetting parent context hierarchy. Always ensure <pre>position ≠ static</pre> for z-index to work.",
      "topic": "z-index"
    },
    {
      "id": 19,
      "question": "What does <pre>position: absolute</pre> do to an element's display?",
      "options": {
        "A": "Changes display to block",
        "B": "No effect on display",
        "C": "Makes it invisible",
        "D": "Removes element from document flow and can make it blockified (block-level box)"
      },
      "correct": "D",
      "explanation": "Absolutely positioned elements are removed from the normal document flow (don't affect other elements' layout) and become block-level boxes. Inline elements with <pre>position: absolute</pre> can have width/height set as if they were blocks.",
      "topic": "position: absolute"
    },
    {
      "id": 20,
      "question": "Can you use negative values for offset properties?",
      "options": {
        "A": "No, must be positive",
        "B": "Yes, negative values position elements outside their containing block",
        "C": "Only with relative positioning",
        "D": "Only in modern browsers"
      },
      "correct": "B",
      "explanation": "Negative offset values are valid and useful. <pre>top: -10px;</pre> on an absolute element positions it 10px above its containing block's top edge. <pre>right: -20px;</pre> pushes it 20px beyond the right edge.",
      "topic": "Offset Properties"
    },
    {
      "id": 21,
      "question": "What happens when you specify both <pre>top</pre> and <pre>bottom</pre> on an absolutely positioned element?",
      "options": {
        "A": "bottom is ignored",
        "B": "The element stretches vertically to satisfy both constraints (if height is auto)",
        "C": "Causes an error",
        "D": "top takes precedence always"
      },
      "correct": "B",
      "explanation": "When both <pre>top</pre> and <pre>bottom</pre> are set (and height is auto), the element stretches to satisfy both constraints: <pre>top: 10px; bottom: 10px;</pre> makes it span from 10px from top to 10px from bottom. Same applies to left/right.",
      "topic": "Offset Properties"
    },
    {
      "id": 22,
      "question": "How does <pre>position: sticky</pre> interact with its container?",
      "options": {
        "A": "Ignores container boundaries",
        "B": "Always sticks regardless of container",
        "C": "Sticky element can only stick while its containing element is in view; it unsticks when container scrolls out",
        "D": "Breaks out of container"
      },
      "correct": "C",
      "explanation": "Sticky positioning is confined to its container. The element sticks while scrolling within its container's bounds, but when the container itself scrolls out of view, the sticky element goes with it. This is a key difference from fixed positioning.",
      "topic": "position: sticky"
    },
    {
      "id": 23,
      "question": "What's a gotcha with percentage values in offset properties?",
      "options": {
        "A": "They don't work",
        "B": "Always relative to viewport",
        "C": "Only work with absolute positioning",
        "D": "Percentages are relative to the containing block's dimensions, not the element's own dimensions"
      },
      "correct": "D",
      "explanation": "Percentage offsets like <pre>top: 50%</pre> are calculated relative to the containing block's height/width, not the element's own dimensions. This is why centering requires <pre>transform: translate(-50%, -50%)</pre> to account for the element's size.",
      "topic": "Offset Properties"
    },
    {
      "id": 24,
      "question": "Does <pre>z-index: auto</pre> create a stacking context?",
      "options": {
        "A": "Yes, always",
        "B": "Only on flex items",
        "C": "No, z-index must be an integer to create a stacking context (on positioned elements)",
        "D": "Only with position: relative"
      },
      "correct": "C",
      "explanation": "On positioned elements, <pre>z-index: auto</pre> does NOT create a new stacking context, while any integer value (including 0) does. This is crucial: <pre>position: relative; z-index: auto;</pre> doesn't create context, but <pre>position: relative; z-index: 0;</pre> does.",
      "topic": "Stacking Context"
    },
    {
      "id": 25,
      "question": "What's the best way to ensure a modal appears above all content?",
      "options": {
        "A": "Use z-index: 999999",
        "B": "Use position: fixed only",
        "C": "Understand stacking contexts and place the modal outside deeply nested contexts, or use a high z-index within a top-level stacking context",
        "D": "Use !important"
      },
      "correct": "C",
      "explanation": "Rather than using arbitrarily high z-index values, understand stacking contexts. Place modals as direct children of body or a top-level stacking context. If a modal is buried in nested contexts, no z-index value can make it appear above elements in a higher context.",
      "topic": "Stacking Context"
    }
  ]
}
