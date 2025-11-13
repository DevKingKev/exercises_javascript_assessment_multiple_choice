module.exports = {
    "metadata": {
        "title": "CSS Basic Flexbox Introduction",
        "description": "Master the fundamentals of CSS Flexbox layout including creating flex containers with display: flex, controlling direction with flex-direction, aligning content with justify-content and align-items, understanding the main axis and cross axis concepts, and building basic flex layouts for centering content and creating navigation bars.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 19,
        "assessmentUniqueId": 1763066512194,
        "testType": "multiple-choice",
        "topics": [
            "Display Flex",
            "Flex Container",
            "Flex Items",
            "Flex Direction",
            "Justify Content",
            "Align Items",
            "Main Axis",
            "Cross Axis",
            "Centering with Flexbox",
            "Flex Layouts"
        ],
        "topicLinks": [
            {
                "topicName": "Display Flex",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display#flex"
            },
            {
                "topicName": "Flex Container",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container"
            },
            {
                "topicName": "Flex Items",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#flex_items"
            },
            {
                "topicName": "Flex Direction",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"
            },
            {
                "topicName": "Justify Content",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
            },
            {
                "topicName": "Align Items",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
            },
            {
                "topicName": "Main Axis",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_main_axis"
            },
            {
                "topicName": "Cross Axis",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_cross_axis"
            },
            {
                "topicName": "Centering with Flexbox",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#center_item"
            },
            {
                "topicName": "Flex Layouts",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox"
            }
        ],
        "keywords": [
            "flexbox",
            "display-flex",
            "flex-container",
            "flex-items",
            "flex-direction",
            "row",
            "column",
            "row-reverse",
            "column-reverse",
            "justify-content",
            "align-items",
            "main-axis",
            "cross-axis",
            "flex-start",
            "flex-end",
            "center",
            "space-between",
            "space-around",
            "space-evenly",
            "stretch",
            "baseline",
            "flexbox-centering",
            "flex-layout",
            "navigation-bar",
            "responsive-flexbox",
            "flex-properties"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "How do you create a flex container?",
            "options": {
                "A": "display: flexbox;",
                "B": "display: flex;",
                "C": "flex: container;",
                "D": "layout: flex;"
            },
            "correct": "B",
            "explanation": "You create a flex container by applying display: flex to an element. This makes all direct children of that element become flex items. The parent becomes the flex container, and its layout behavior changes to use the flexbox model.",
            "topic": "Display Flex"
        },
        {
            "id": 2,
            "question": "What is the default value of <pre>flex-direction</pre>?",
            "options": {
                "A": "column",
                "B": "row",
                "C": "row-reverse",
                "D": "horizontal"
            },
            "correct": "B",
            "explanation": "The default value of flex-direction is 'row', which means flex items are laid out horizontally from left to right (in left-to-right languages). This creates a horizontal main axis with items arranged in a row.",
            "topic": "Flex Direction"
        },
        {
            "id": 3,
            "question": "What does <pre>justify-content: center;</pre> do?",
            "options": {
                "A": "Centers items vertically",
                "B": "Centers items along the main axis",
                "C": "Centers items along the cross axis",
                "D": "Centers the container itself"
            },
            "correct": "B",
            "explanation": "justify-content: center centers flex items along the main axis. If flex-direction is row (default), items are centered horizontally. If flex-direction is column, items are centered vertically. It always works along the main axis direction.",
            "topic": "Justify Content"
        },
        {
            "id": 4,
            "question": "What does <pre>align-items: center;</pre> do?",
            "options": {
                "A": "Centers items along the main axis",
                "B": "Centers items along the cross axis",
                "C": "Centers items diagonally",
                "D": "Centers the container"
            },
            "correct": "B",
            "explanation": "align-items: center centers flex items along the cross axis (perpendicular to the main axis). If flex-direction is row, items are centered vertically. If flex-direction is column, items are centered horizontally.",
            "topic": "Align Items"
        },
        {
            "id": 5,
            "question": "What are the direct children of a flex container called?",
            "options": {
                "A": "Flex children",
                "B": "Flex elements",
                "C": "Flex items",
                "D": "Flex nodes"
            },
            "correct": "C",
            "explanation": "The direct children of a flex container are called 'flex items'. Only direct children become flex items—grandchildren and deeper descendants are not flex items unless their parent is also a flex container.",
            "topic": "Flex Items"
        },
        {
            "id": 6,
            "question": "What does <pre>flex-direction: column;</pre> do?",
            "options": {
                "A": "Arranges flex items horizontally",
                "B": "Arranges flex items vertically from top to bottom",
                "C": "Reverses the item order",
                "D": "Creates multiple columns"
            },
            "correct": "B",
            "explanation": "flex-direction: column arranges flex items vertically in a column, stacking them from top to bottom. This changes the main axis to vertical and the cross axis to horizontal. Items flow in the block direction.",
            "topic": "Flex Direction"
        },
        {
            "id": 7,
            "question": "What does <pre>justify-content: space-between;</pre> do?",
            "options": {
                "A": "Adds equal space between all items, including edges",
                "B": "Distributes items with equal space between them, first item at start, last item at end",
                "C": "Centers all items",
                "D": "Spreads items evenly with equal space everywhere"
            },
            "correct": "B",
            "explanation": "justify-content: space-between distributes flex items evenly along the main axis with the first item at the start edge and the last item at the end edge. Space is only between items, not at the edges. This is great for navigation bars.",
            "topic": "Justify Content"
        },
        {
            "id": 8,
            "question": "What is the main axis in flexbox?",
            "options": {
                "A": "Always horizontal",
                "B": "Always vertical",
                "C": "The axis defined by flex-direction",
                "D": "The longest axis"
            },
            "correct": "C",
            "explanation": "The main axis is defined by the flex-direction property. If flex-direction is row or row-reverse, the main axis is horizontal. If flex-direction is column or column-reverse, the main axis is vertical. The cross axis is always perpendicular to the main axis.",
            "topic": "Main Axis"
        },
        {
            "id": 9,
            "question": "What is the cross axis in flexbox?",
            "options": {
                "A": "Always horizontal",
                "B": "Always vertical",
                "C": "The axis perpendicular to the main axis",
                "D": "The same as the main axis"
            },
            "correct": "C",
            "explanation": "The cross axis is always perpendicular to the main axis. If the main axis is horizontal (flex-direction: row), the cross axis is vertical. If the main axis is vertical (flex-direction: column), the cross axis is horizontal.",
            "topic": "Cross Axis"
        },
        {
            "id": 10,
            "question": "What is the default value of <pre>align-items</pre>?",
            "options": {
                "A": "center",
                "B": "flex-start",
                "C": "flex-end",
                "D": "stretch"
            },
            "correct": "D",
            "explanation": "The default value of align-items is 'stretch', which makes flex items stretch to fill the container along the cross axis (if they don't have a fixed height/width on that axis). This is why flex items often appear to be the same height by default.",
            "topic": "Align Items"
        },
        {
            "id": 11,
            "question": "How do you center an item both horizontally and vertically with flexbox?",
            "options": {
                "A": "justify-content: center; align-items: center;",
                "B": "align-content: center;",
                "C": "flex-center: both;",
                "D": "center: true;"
            },
            "correct": "A",
            "explanation": "To center an item both horizontally and vertically, use justify-content: center (centers on main axis) and align-items: center (centers on cross axis) on the flex container. This is one of the most common flexbox use cases.",
            "topic": "Centering with Flexbox"
        },
        {
            "id": 12,
            "question": "What does <pre>justify-content: flex-start;</pre> do?",
            "options": {
                "A": "Aligns items to the end of the main axis",
                "B": "Aligns items to the start of the main axis",
                "C": "Centers items",
                "D": "Stretches items"
            },
            "correct": "B",
            "explanation": "justify-content: flex-start (the default) aligns flex items to the start of the main axis. For flex-direction: row, this is the left edge (in LTR languages). For flex-direction: column, this is the top edge.",
            "topic": "Justify Content"
        },
        {
            "id": 13,
            "question": "What does <pre>align-items: flex-end;</pre> do?",
            "options": {
                "A": "Aligns items to the end of the main axis",
                "B": "Aligns items to the start of the cross axis",
                "C": "Aligns items to the end of the cross axis",
                "D": "Aligns items to the center"
            },
            "correct": "C",
            "explanation": "align-items: flex-end aligns flex items to the end of the cross axis. For flex-direction: row, this aligns items to the bottom. For flex-direction: column, this aligns items to the right (in LTR languages).",
            "topic": "Align Items"
        },
        {
            "id": 14,
            "question": "Does <pre>display: flex;</pre> affect grandchildren of the flex container?",
            "options": {
                "A": "Yes, all descendants become flex items",
                "B": "No, only direct children become flex items",
                "C": "Only if they have no parent",
                "D": "Only in modern browsers"
            },
            "correct": "B",
            "explanation": "display: flex only affects direct children of the flex container—they become flex items. Grandchildren and deeper descendants are not flex items and are laid out normally within their flex item parent, unless that parent is also a flex container.",
            "topic": "Flex Container"
        },
        {
            "id": 15,
            "question": "What does <pre>flex-direction: row-reverse;</pre> do?",
            "options": {
                "A": "Arranges items vertically in reverse",
                "B": "Arranges items horizontally from right to left",
                "C": "Flips the container upside down",
                "D": "Has no effect"
            },
            "correct": "B",
            "explanation": "flex-direction: row-reverse arranges flex items horizontally but in reverse order—from right to left (in LTR languages). The main axis is still horizontal, but the start and end are flipped. This can be useful for RTL language support or specific layouts.",
            "topic": "Flex Direction"
        },
        {
            "id": 16,
            "question": "What does <pre>justify-content: flex-end;</pre> do?",
            "options": {
                "A": "Aligns items to the start of the main axis",
                "B": "Aligns items to the end of the main axis",
                "C": "Centers items",
                "D": "Distributes items evenly"
            },
            "correct": "B",
            "explanation": "justify-content: flex-end aligns flex items to the end of the main axis. For flex-direction: row, this pushes items to the right edge (in LTR languages). For flex-direction: column, this pushes items to the bottom.",
            "topic": "Justify Content"
        },
        {
            "id": 17,
            "question": "Can you use flexbox to create a navigation bar with items spread out?",
            "options": {
                "A": "No, flexbox can't do this",
                "B": "Yes, using justify-content: space-between or space-around",
                "C": "Only with JavaScript",
                "D": "Only with CSS Grid"
            },
            "correct": "B",
            "explanation": "Yes, flexbox is perfect for navigation bars. Use display: flex on the nav container and justify-content: space-between to spread items across the width, or space-around/space-evenly for even spacing. This creates responsive navigation layouts easily.",
            "topic": "Flex Layouts"
        },
        {
            "id": 18,
            "question": "What does <pre>align-items: stretch;</pre> do?",
            "options": {
                "A": "Stretches items along the main axis",
                "B": "Stretches items to fill the container along the cross axis",
                "C": "Makes items taller",
                "D": "Has no effect"
            },
            "correct": "B",
            "explanation": "align-items: stretch (the default) stretches flex items to fill the container along the cross axis, unless they have a fixed size on that axis. For flex-direction: row, items stretch to the container's height. This creates equal-height columns automatically.",
            "topic": "Align Items"
        },
        {
            "id": 19,
            "question": "What property controls alignment along the main axis?",
            "options": {
                "A": "align-items",
                "B": "align-content",
                "C": "justify-content",
                "D": "flex-align"
            },
            "correct": "C",
            "explanation": "justify-content controls alignment and spacing along the main axis. It determines how flex items are distributed along the primary direction of the flex container (the direction defined by flex-direction).",
            "topic": "Justify Content"
        },
        {
            "id": 20,
            "question": "What property controls alignment along the cross axis?",
            "options": {
                "A": "justify-content",
                "B": "align-items",
                "C": "cross-align",
                "D": "flex-align"
            },
            "correct": "B",
            "explanation": "align-items controls how flex items are aligned along the cross axis (perpendicular to the main axis). It determines vertical alignment when flex-direction is row, and horizontal alignment when flex-direction is column.",
            "topic": "Align Items"
        },
        {
            "id": 21,
            "question": "What does <pre>justify-content: space-around;</pre> do?",
            "options": {
                "A": "Same as space-between",
                "B": "Distributes items with equal space around each item (half-size space at edges)",
                "C": "Centers all items",
                "D": "Adds space only between items"
            },
            "correct": "B",
            "explanation": "justify-content: space-around distributes items with equal space around each item. This means the space between items is twice the space at the edges (each item has equal space on both sides). The edges get half-size spaces.",
            "topic": "Justify Content"
        },
        {
            "id": 22,
            "question": "If <pre>flex-direction: column;</pre>, what direction is the main axis?",
            "options": {
                "A": "Horizontal",
                "B": "Vertical",
                "C": "Diagonal",
                "D": "Depends on the container"
            },
            "correct": "B",
            "explanation": "When flex-direction is column, the main axis is vertical (top to bottom). This means justify-content controls vertical distribution and align-items controls horizontal alignment. The cross axis becomes horizontal.",
            "topic": "Main Axis"
        },
        {
            "id": 23,
            "question": "What does <pre>align-items: baseline;</pre> do?",
            "options": {
                "A": "Aligns items to the top",
                "B": "Aligns items so their text baselines align",
                "C": "Stretches items",
                "D": "Centers items"
            },
            "correct": "B",
            "explanation": "align-items: baseline aligns flex items so that their text baselines align with each other. This is useful when you have items with different font sizes or padding but want the text to line up. It aligns based on the first line of text.",
            "topic": "Align Items"
        },
        {
            "id": 24,
            "question": "What does <pre>flex-direction: column-reverse;</pre> do?",
            "options": {
                "A": "Arranges items horizontally in reverse",
                "B": "Arranges items vertically from bottom to top",
                "C": "Has no effect",
                "D": "Creates multiple columns"
            },
            "correct": "B",
            "explanation": "flex-direction: column-reverse arranges flex items vertically but in reverse order—from bottom to top. The main axis is still vertical, but the start and end are flipped. Items appear in reverse order compared to their source order.",
            "topic": "Flex Direction"
        },
        {
            "id": 25,
            "question": "Can a flex item also be a flex container?",
            "options": {
                "A": "No, only one level of flex is allowed",
                "B": "Yes, by applying display: flex to the flex item",
                "C": "Only in CSS Grid",
                "D": "Only with JavaScript"
            },
            "correct": "B",
            "explanation": "Yes, a flex item can also be a flex container by applying display: flex to it. This creates nested flexbox layouts, allowing for complex responsive designs. Each level of flexbox operates independently with its own main and cross axes.",
            "topic": "Flex Container"
        },
        {
            "id": 26,
            "question": "What is a common use case for <pre>align-items: stretch;</pre>?",
            "options": {
                "A": "Centering items",
                "B": "Creating equal-height columns or cards",
                "C": "Distributing space",
                "D": "Reversing item order"
            },
            "correct": "B",
            "explanation": "align-items: stretch (the default) is commonly used to create equal-height columns or cards. When flex items don't have a fixed height, they automatically stretch to match the tallest item, creating a uniform appearance without needing to calculate heights.",
            "topic": "Align Items"
        },
        {
            "id": 27,
            "question": "What does <pre>justify-content: space-evenly;</pre> do?",
            "options": {
                "A": "Same as space-between",
                "B": "Same as space-around",
                "C": "Distributes items with equal space between items and at edges",
                "D": "Centers items"
            },
            "correct": "C",
            "explanation": "justify-content: space-evenly distributes flex items with equal space between them AND equal space at the edges. Unlike space-around (where edge space is half), space-evenly ensures all gaps are exactly the same size, including the gaps at the start and end.",
            "topic": "Justify Content"
        },
        {
            "id": 28,
            "question": "If you want items to stack vertically, which <pre>flex-direction</pre> should you use?",
            "options": {
                "A": "row",
                "B": "column",
                "C": "vertical",
                "D": "stack"
            },
            "correct": "B",
            "explanation": "Use flex-direction: column to stack items vertically from top to bottom. This changes the main axis to vertical, so items flow in a column like block elements. Use column-reverse to stack from bottom to top.",
            "topic": "Flex Direction"
        },
        {
            "id": 29,
            "question": "What happens to the main and cross axes when you change <pre>flex-direction</pre>?",
            "options": {
                "A": "Nothing changes",
                "B": "They swap—what was main becomes cross and vice versa",
                "C": "Only the main axis changes",
                "D": "The container rotates"
            },
            "correct": "B",
            "explanation": "When you change flex-direction from row to column (or vice versa), the main and cross axes swap. Row makes horizontal the main axis and vertical the cross axis. Column makes vertical the main axis and horizontal the cross axis. This affects how justify-content and align-items work.",
            "topic": "Main Axis"
        },
        {
            "id": 30,
            "question": "What is the simplest way to center a single element with flexbox?",
            "options": {
                "A": "Apply display: flex to the element itself",
                "B": "Apply display: flex, justify-content: center, and align-items: center to the parent",
                "C": "Apply center: true to the element",
                "D": "Flexbox cannot center elements"
            },
            "correct": "B",
            "explanation": "To center a single element with flexbox, make its parent a flex container with display: flex, then use justify-content: center (centers on main axis) and align-items: center (centers on cross axis). This centers the element both horizontally and vertically within the parent.",
            "topic": "Centering with Flexbox"
        }
    ]
};
