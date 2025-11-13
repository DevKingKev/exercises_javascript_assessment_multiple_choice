module.exports = {
    "metadata": {
        "title": "CSS Positioning - Advanced Concepts",
        "description": "Explore advanced CSS positioning concepts including sticky positioning, stacking contexts with transforms and opacity, multiple positioning scenarios, centering techniques with absolute positioning, and practical positioning patterns for real-world layouts.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 13,
        "assessmentUniqueId": 1731520800000,
        "testType": "multiple-choice",
        "topics": [
            "Sticky Positioning",
            "Transform and Positioning",
            "Opacity and Stacking Context",
            "Centering with Positioning",
            "Multiple Offset Properties",
            "Percentage Offsets",
            "Positioning and Width/Height",
            "Containing Block Concepts",
            "Positioning Combinations",
            "Practical Positioning Patterns"
        ],
        "topicLinks": [
            {
                "topicName": "Sticky Positioning",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky"
            },
            {
                "topicName": "Transform and Positioning",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
            },
            {
                "topicName": "Opacity and Stacking Context",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context"
            },
            {
                "topicName": "Centering with Positioning",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#centering_with_absolute_positioning"
            },
            {
                "topicName": "Multiple Offset Properties",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#values"
            },
            {
                "topicName": "Percentage Offsets",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/top"
            },
            {
                "topicName": "Positioning and Width/Height",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning"
            },
            {
                "topicName": "Containing Block Concepts",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block"
            },
            {
                "topicName": "Positioning Combinations",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning"
            },
            {
                "topicName": "Practical Positioning Patterns",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#examples"
            }
        ],
        "keywords": [
            "sticky-position",
            "position-sticky",
            "transform-stacking",
            "opacity-stacking",
            "centering-absolute",
            "translate-center",
            "offset-percentage",
            "containing-block",
            "position-combination",
            "top-bottom-together",
            "left-right-together",
            "element-stretching",
            "auto-margins",
            "absolute-centering",
            "fixed-centering",
            "overlay-positioning",
            "dropdown-menu",
            "badge-positioning",
            "corner-positioning",
            "fullscreen-overlay",
            "sticky-header",
            "sticky-sidebar",
            "viewport-units",
            "calc-positioning",
            "negative-z-index",
            "stacking-order",
            "position-inherit",
            "position-initial"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What is <pre>position: sticky;</pre> in CSS?",
            "options": {
                "A": "Same as position: fixed",
                "B": "A hybrid between relative and fixed positioning",
                "C": "Same as position: absolute",
                "D": "A deprecated positioning value"
            },
            "correct": "B",
            "explanation": "position: sticky is a hybrid of relative and fixed positioning. The element is treated as relatively positioned until it crosses a specified threshold (using offset values), at which point it becomes fixed. It's commonly used for sticky headers that scroll with content until reaching the top, then stay fixed.",
            "difficulty": "easy",
            "topic": "Sticky Positioning"
        },
        {
            "id": 2,
            "question": "How do you center an absolutely positioned element both horizontally and vertically using offsets and transform?",
            "options": {
                "A": "[CODE]top: 50%; left: 50%; transform: translate(-50%, -50%);[/CODE]",
                "B": "[CODE]top: 25%; left: 25%;[/CODE]",
                "C": "[CODE]margin: auto;[/CODE]",
                "D": "[CODE]position: center;[/CODE]"
            },
            "correct": "A",
            "explanation": "To perfectly center an absolutely positioned element, use top: 50% and left: 50% to position the top-left corner at the center, then use transform: translate(-50%, -50%) to shift the element back by half its own width and height. This centers the element regardless of its dimensions.",
            "difficulty": "easy",
            "topic": "Centering with Positioning"
        },
        {
            "id": 3,
            "question": "Does setting <pre>opacity: 0.99;</pre> create a new stacking context?",
            "options": {
                "A": "No, only z-index creates stacking contexts",
                "B": "Yes, any opacity value less than 1 creates a stacking context",
                "C": "Only if the element is positioned",
                "D": "Only in modern browsers"
            },
            "correct": "B",
            "explanation": "Yes, any opacity value less than 1 (including 0.99, 0.5, etc.) creates a new stacking context. This means child elements with z-index will stack relative to this context, not to elements outside it. This is true even for statically positioned elements.",
            "difficulty": "easy",
            "topic": "Opacity and Stacking Context"
        },
        {
            "id": 4,
            "question": "If an element has [CODE]position: absolute; top: 0; bottom: 0;[/CODE] with no height set, what happens?",
            "options": {
                "A": "The element has zero height",
                "B": "The element stretches to fill the full height of its positioned parent",
                "C": "Only top: 0 is applied",
                "D": "The styles conflict and are ignored"
            },
            "correct": "B",
            "explanation": "When both top and bottom are set on an absolutely positioned element without a specified height, the element stretches to fill the space between those two offsets. Similarly, setting both left and right without a width makes the element stretch horizontally. This is a powerful technique for creating flexible layouts.",
            "difficulty": "easy",
            "topic": "Multiple Offset Properties"
        },
        {
            "id": 5,
            "question": "What does <pre>position: sticky;</pre> require to work properly?",
            "options": {
                "A": "Only the position property",
                "B": "At least one offset value (top, right, bottom, or left)",
                "C": "A z-index value",
                "D": "A fixed width"
            },
            "correct": "B",
            "explanation": "position: sticky requires at least one threshold value (top, right, bottom, or left) to define when the element should become sticky. For example, top: 0 makes the element stick when it reaches the top of the viewport. Without an offset value, sticky positioning won't work.",
            "difficulty": "easy",
            "topic": "Sticky Positioning"
        },
        {
            "id": 6,
            "question": "Can you use <pre>calc()</pre> with offset properties like <pre>top</pre>?",
            "options": {
                "A": "Yes, calc() works with all offset properties",
                "B": "No, only fixed pixel values are allowed",
                "C": "Only with position: absolute",
                "D": "Only in CSS3"
            },
            "correct": "A",
            "explanation": "Yes, calc() can be used with offset properties. For example, top: calc(50% - 20px) or left: calc(100% - 50px). This is very useful for precise positioning calculations that mix units, like combining percentages with fixed pixel offsets.",
            "difficulty": "easy",
            "topic": "Percentage Offsets"
        },
        {
            "id": 7,
            "question": "Does <pre>transform</pre> create a new stacking context?",
            "options": {
                "A": "No, transform doesn't affect stacking",
                "B": "Yes, any transform value creates a stacking context",
                "C": "Only transform: translateZ() creates one",
                "D": "Only when combined with position: absolute"
            },
            "correct": "B",
            "explanation": "Yes, any transform value (except none) creates a new stacking context. This includes 2D transforms like translate(), rotate(), scale(), etc. Elements with transforms also become containing blocks for fixed-positioned descendants, which is an important side effect.",
            "difficulty": "easy",
            "topic": "Transform and Positioning"
        },
        {
            "id": 8,
            "question": "How can you center an absolutely positioned element horizontally using only offsets and auto margins?",
            "options": {
                "A": "[CODE]left: 50%; margin-left: auto;[/CODE]",
                "B": "[CODE]left: 0; right: 0; margin: 0 auto;[/CODE]",
                "C": "[CODE]left: auto; right: auto;[/CODE]",
                "D": "[CODE]margin-left: 50%;[/CODE]"
            },
            "correct": "B",
            "explanation": "For an absolutely positioned element with a specified width, setting left: 0, right: 0, and margin: 0 auto (or margin-left: auto and margin-right: auto) centers it horizontally. The auto margins equally distribute the remaining space on both sides.",
            "difficulty": "easy",
            "topic": "Centering with Positioning"
        },
        {
            "id": 9,
            "question": "What happens to a <pre>position: fixed;</pre> element when its ancestor has a <pre>transform</pre> property?",
            "options": {
                "A": "Nothing changes, it stays fixed to the viewport",
                "B": "The fixed element becomes positioned relative to the transformed ancestor",
                "C": "The fixed element becomes statically positioned",
                "D": "The page throws an error"
            },
            "correct": "B",
            "explanation": "This is a common gotcha: when an ancestor has a transform property (or will-change: transform, perspective, filter, etc.), it creates a new containing block, and the fixed element positions relative to that ancestor instead of the viewport. This can break fixed positioning unexpectedly.",
            "difficulty": "easy",
            "topic": "Transform and Positioning"
        },
        {
            "id": 10,
            "question": "Can <pre>z-index</pre> accept negative values?",
            "options": {
                "A": "No, only positive integers are allowed",
                "B": "Yes, negative values place elements behind those with z-index: 0 or auto",
                "C": "Only on fixed elements",
                "D": "Only in newer browsers"
            },
            "correct": "B",
            "explanation": "Yes, z-index can be negative. A negative z-index (like -1, -10, etc.) places the element behind elements with z-index: 0, auto, or positive values within the same stacking context. This is useful for background overlays or decorative elements that should appear behind normal content.",
            "difficulty": "easy",
            "topic": "Opacity and Stacking Context"
        },
        {
            "id": 11,
            "question": "For <pre>position: sticky;</pre> to work, can the parent container have <pre>overflow: hidden;</pre>?",
            "options": {
                "A": "Yes, overflow doesn't affect sticky positioning",
                "B": "No, overflow: hidden (or auto, scroll) on ancestors prevents sticky from working properly",
                "C": "Only overflow: scroll prevents it",
                "D": "Only overflow: auto prevents it"
            },
            "correct": "B",
            "explanation": "Sticky positioning won't work if any ancestor has overflow: hidden, auto, or scroll. The sticky element needs to be able to stick relative to the scrolling container, and overflow properties create new scrolling contexts that interfere with this behavior. This is a common reason why sticky positioning fails.",
            "difficulty": "easy",
            "topic": "Sticky Positioning"
        },
        {
            "id": 12,
            "question": "What is the containing block for an absolutely positioned element?",
            "options": {
                "A": "Always the <pre><body></pre> element",
                "B": "The nearest ancestor with position other than static",
                "C": "The immediate parent element",
                "D": "Always the viewport"
            },
            "correct": "B",
            "explanation": "The containing block for an absolutely positioned element is the padding box of the nearest positioned ancestor (position: relative, absolute, fixed, or sticky). If no positioned ancestor exists, it's the initial containing block (usually the viewport or document root).",
            "difficulty": "easy",
            "topic": "Containing Block Concepts"
        },
        {
            "id": 13,
            "question": "How do you position a notification badge at the top-right corner of a button?",
            "options": {
                "A": "Set the button to <pre>position: relative;</pre> and badge to [CODE]position: absolute; top: 0; right: 0;[/CODE]",
                "B": "Set both to position: fixed",
                "C": "Use only margins",
                "D": "Set the badge to position: sticky"
            },
            "correct": "A",
            "explanation": "The standard pattern is: parent (button) gets position: relative to establish the positioning context, and the badge gets position: absolute with top: 0 and right: 0 to position at the top-right corner. Often you'd use negative values (like top: -5px) to make it overlap the corner.",
            "difficulty": "easy",
            "topic": "Practical Positioning Patterns"
        },
        {
            "id": 14,
            "question": "If you use [CODE]position: absolute; left: 10%; right: 10%;[/CODE] with no width, what happens?",
            "options": {
                "A": "The element has 10% width",
                "B": "The element has 80% width (100% - 10% - 10%)",
                "C": "Only left: 10% is applied",
                "D": "The styles are invalid"
            },
            "correct": "B",
            "explanation": "When left and right are both set without a width, the element stretches to fill the space between those offsets. With left: 10% and right: 10%, the element spans 80% of the container's width, positioned 10% from the left edge.",
            "difficulty": "easy",
            "topic": "Positioning and Width/Height"
        },
        {
            "id": 15,
            "question": "What does [CODE]position: absolute; inset: 0;[/CODE] do?",
            "options": {
                "A": "Sets all offsets to 0, making the element fill its positioned parent",
                "B": "Removes the element from the page",
                "C": "Centers the element",
                "D": "inset is not a valid CSS property"
            },
            "correct": "A",
            "explanation": "inset is a shorthand for setting top, right, bottom, and left all at once. inset: 0 is equivalent to top: 0; right: 0; bottom: 0; left: 0, which makes an absolutely positioned element fill its entire positioned parent. You can also use inset with 1-4 values like margin or padding.",
            "difficulty": "easy",
            "topic": "Multiple Offset Properties"
        },
        {
            "id": 16,
            "question": "Can percentage values in offset properties (like <pre>top: 50%;</pre>) refer to the element's own dimensions?",
            "options": {
                "A": "Yes, percentages are always relative to the element itself",
                "B": "No, percentages are relative to the containing block's dimensions",
                "C": "Only for width and height",
                "D": "Only on fixed elements"
            },
            "correct": "B",
            "explanation": "Offset percentage values are relative to the containing block's dimensions, not the element's own size. top: 50% means 50% of the containing block's height, and left: 50% means 50% of its width. This is why you need transform: translate(-50%, -50%) to truly center an element—transform percentages DO refer to the element's own dimensions.",
            "difficulty": "easy",
            "topic": "Percentage Offsets"
        },
        {
            "id": 17,
            "question": "What is a common use case for <pre>position: sticky;</pre>?",
            "options": {
                "A": "Creating tooltips",
                "B": "Table headers that stick to the top while scrolling the table",
                "C": "Modal overlays",
                "D": "Centering elements"
            },
            "correct": "B",
            "explanation": "position: sticky is perfect for table headers or section headings that should stick to the top of the viewport while scrolling their container. The element scrolls normally until reaching the threshold (like top: 0), then sticks in place until its container scrolls out of view.",
            "difficulty": "easy",
            "topic": "Sticky Positioning"
        },
        {
            "id": 18,
            "question": "If multiple sibling elements have the same <pre>z-index</pre> value, which appears on top?",
            "options": {
                "A": "The first element in the HTML",
                "B": "The last element in the HTML (source order)",
                "C": "The largest element",
                "D": "Random, browser-dependent"
            },
            "correct": "B",
            "explanation": "When sibling elements have the same z-index, the element that appears later in the HTML source order appears on top. This is called source order or document order. To override this, give the element you want on top a higher z-index value.",
            "difficulty": "easy",
            "topic": "Opacity and Stacking Context"
        },
        {
            "id": 19,
            "question": "How do you create a full-screen overlay using <pre>position: fixed;</pre>?",
            "options": {
                "A": "[CODE]position: fixed; width: 100%; height: 100%;[/CODE]",
                "B": "[CODE]position: fixed; top: 0; left: 0; right: 0; bottom: 0;[/CODE]",
                "C": "[CODE]position: fixed; inset: 0;[/CODE]",
                "D": "All of the above work"
            },
            "correct": "D",
            "explanation": "All three approaches create a full-screen overlay. The first uses explicit width/height: 100%, the second stretches using all four offsets, and the third uses the inset shorthand (equivalent to the second). Options B and C are often preferred as they adapt better to viewport changes.",
            "difficulty": "easy",
            "topic": "Practical Positioning Patterns"
        },
        {
            "id": 20,
            "question": "Can you combine <pre>position: relative;</pre> with <pre>z-index</pre> to change stacking order?",
            "options": {
                "A": "Yes, position: relative with z-index changes stacking order without offsetting the element",
                "B": "No, you need position: absolute for z-index to work",
                "C": "Only if you also set an offset",
                "D": "Only on block elements"
            },
            "correct": "A",
            "explanation": "Yes, a common pattern is using position: relative with z-index (and no offset values) purely to control stacking order. The element stays in its normal position but can appear above or below other elements. This is lighter than using position: absolute when you don't need to move the element.",
            "difficulty": "easy",
            "topic": "Positioning Combinations"
        },
        {
            "id": 21,
            "question": "What happens when a sticky element reaches the edge of its container?",
            "options": {
                "A": "It stays stuck forever",
                "B": "It stops being sticky and scrolls away with its container",
                "C": "It becomes fixed",
                "D": "It disappears"
            },
            "correct": "B",
            "explanation": "A sticky element sticks only within its parent container's boundaries. When the container scrolls out of view, the sticky element scrolls with it. This is different from position: fixed, which stays in place indefinitely. Sticky positioning is container-aware.",
            "difficulty": "easy",
            "topic": "Sticky Positioning"
        },
        {
            "id": 22,
            "question": "How do you center an absolutely positioned element vertically using auto margins?",
            "options": {
                "A": "[CODE]top: 50%; margin-top: auto;[/CODE]",
                "B": "[CODE]top: 0; bottom: 0; margin: auto 0;[/CODE]",
                "C": "[CODE]margin-top: 25%; margin-bottom: 25%;[/CODE]",
                "D": "[CODE]vertical-align: middle;[/CODE]"
            },
            "correct": "B",
            "explanation": "For an absolutely positioned element with a specified height, setting top: 0, bottom: 0, and margin: auto 0 (or margin-top: auto and margin-bottom: auto) centers it vertically. The auto margins equally distribute the remaining space above and below. For both horizontal and vertical centering, use margin: auto with all four offsets.",
            "difficulty": "easy",
            "topic": "Centering with Positioning"
        },
        {
            "id": 23,
            "question": "Can you use viewport units (like <pre>vw</pre> and <pre>vh</pre>) with offset properties?",
            "options": {
                "A": "Yes, viewport units work with all offset properties",
                "B": "No, only px and % are allowed",
                "C": "Only with position: fixed",
                "D": "Only for top and left"
            },
            "correct": "A",
            "explanation": "Yes, you can use viewport units with offset properties. For example, top: 10vh or left: 5vw. This is useful when you want positioning relative to the viewport size, such as placing an element 10% of viewport height from the top.",
            "difficulty": "easy",
            "topic": "Percentage Offsets"
        },
        {
            "id": 24,
            "question": "What is the stacking order priority from back to front when z-index values are equal?",
            "options": {
                "A": "Background, inline elements, block elements, positioned elements",
                "B": "Positioned elements, block elements, inline elements, background",
                "C": "Background, block elements, floats, inline elements, positioned elements",
                "D": "Random based on browser"
            },
            "correct": "C",
            "explanation": "Within the same stacking context with equal z-index, the stacking order from back to front is: (1) background and borders, (2) positioned elements with negative z-index, (3) block-level descendants in flow, (4) floats, (5) inline descendants in flow, (6) positioned elements with z-index: auto or 0, (7) positioned elements with positive z-index. Source order breaks ties.",
            "difficulty": "easy",
            "topic": "Opacity and Stacking Context"
        },
        {
            "id": 25,
            "question": "How do you position a dropdown menu directly below a navigation item?",
            "options": {
                "A": "Set nav item to <pre>position: relative;</pre> and dropdown to [CODE]position: absolute; top: 100%; left: 0;[/CODE]",
                "B": "Use only margins",
                "C": "Set both to position: fixed",
                "D": "Use float: left"
            },
            "correct": "A",
            "explanation": "The standard dropdown pattern: the navigation item gets position: relative, and the dropdown gets position: absolute with top: 100% (positions it directly below the nav item) and left: 0 (aligns it with the left edge). This creates a dropdown that positions perfectly relative to its trigger element.",
            "difficulty": "easy",
            "topic": "Practical Positioning Patterns"
        },
        {
            "id": 26,
            "question": "What is the difference between <pre>inset: 10px;</pre> and <pre>inset: 10px 20px;</pre>?",
            "options": {
                "A": "No difference, the second value is ignored",
                "B": "First sets all offsets to 10px; second sets top/bottom to 10px and left/right to 20px",
                "C": "First sets top to 10px; second sets top to 10px and right to 20px",
                "D": "inset doesn't accept multiple values"
            },
            "correct": "B",
            "explanation": "inset works like margin/padding shorthand: one value sets all four offsets; two values set vertical (top/bottom) and horizontal (left/right); three values set top, horizontal, bottom; four values set top, right, bottom, left in clockwise order.",
            "difficulty": "easy",
            "topic": "Multiple Offset Properties"
        },
        {
            "id": 27,
            "question": "Does <pre>will-change: transform;</pre> create a new stacking context?",
            "options": {
                "A": "No, will-change is just a performance hint",
                "B": "Yes, will-change with certain values creates a stacking context",
                "C": "Only if combined with position: absolute",
                "D": "Only in Chrome"
            },
            "correct": "B",
            "explanation": "Yes, will-change with values like transform, opacity, or filter creates a new stacking context, just like actually setting those properties. It also creates a containing block for fixed-positioned descendants. This is a performance optimization but has stacking side effects.",
            "difficulty": "easy",
            "topic": "Opacity and Stacking Context"
        },
        {
            "id": 28,
            "question": "Can you animate an element smoothly from <pre>position: static;</pre> to <pre>position: absolute;</pre>?",
            "options": {
                "A": "Yes, with CSS transitions",
                "B": "No, position cannot be animated smoothly—it changes instantly",
                "C": "Only with JavaScript",
                "D": "Only the offset values can animate"
            },
            "correct": "B",
            "explanation": "The position property itself cannot be smoothly animated—it changes instantly. However, you can animate the offset properties (top, left, etc.) on a positioned element, or use transform (which can animate smoothly) to move elements visually without changing their position property.",
            "difficulty": "easy",
            "topic": "Positioning Combinations"
        },
        {
            "id": 29,
            "question": "What is the initial value of offset properties like <pre>top</pre>, <pre>left</pre>, etc.?",
            "options": {
                "A": "<pre>0</pre>",
                "B": "<pre>auto</pre>",
                "C": "<pre>initial</pre>",
                "D": "<pre>none</pre>"
            },
            "correct": "B",
            "explanation": "The initial value for offset properties (top, right, bottom, left) is auto. With auto, the element positions according to its normal flow (for relative) or at its default position (for absolute/fixed). Setting auto essentially means 'don't offset this edge.'",
            "difficulty": "easy",
            "topic": "Multiple Offset Properties"
        },
        {
            "id": 30,
            "question": "How do you position an element in the bottom-right corner of the viewport using <pre>position: fixed;</pre>?",
            "options": {
                "A": "[CODE]position: fixed; bottom: 0; right: 0;[/CODE]",
                "B": "[CODE]position: fixed; top: 100%; left: 100%;[/CODE]",
                "C": "[CODE]position: fixed; bottom: 100%; right: 100%;[/CODE]",
                "D": "[CODE]position: fixed; align: bottom-right;[/CODE]"
            },
            "correct": "A",
            "explanation": "To position a fixed element in the bottom-right corner of the viewport, use position: fixed with bottom: 0 and right: 0. This pins the element to the bottom and right edges. This pattern is commonly used for 'back to top' buttons or chat widgets.",
            "difficulty": "easy",
            "topic": "Practical Positioning Patterns"
        }
    ]
};
