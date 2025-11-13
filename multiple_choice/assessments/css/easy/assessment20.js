module.exports = {
    "metadata": {
        "title": "CSS Flexbox - Item Properties and Wrapping",
        "description": "Expand your flexbox knowledge with flex item properties including flex-grow, flex-shrink, flex-basis, and the flex shorthand, understand flex-wrap for multi-line layouts, explore align-self for individual item alignment, and learn gap property for spacing, along with practical patterns like cards, grids, and responsive layouts.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 20,
        "assessmentUniqueId": 1763066899169,
        "testType": "multiple-choice",
        "topics": [
            "Flex Grow",
            "Flex Shrink",
            "Flex Basis",
            "Flex Shorthand",
            "Flex Wrap",
            "Align Self",
            "Gap Property",
            "Align Content",
            "Order Property",
            "Practical Flex Patterns"
        ],
        "topicLinks": [
            {
                "topicName": "Flex Grow",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow"
            },
            {
                "topicName": "Flex Shrink",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"
            },
            {
                "topicName": "Flex Basis",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"
            },
            {
                "topicName": "Flex Shorthand",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
            },
            {
                "topicName": "Flex Wrap",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"
            },
            {
                "topicName": "Align Self",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"
            },
            {
                "topicName": "Gap Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
            },
            {
                "topicName": "Align Content",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
            },
            {
                "topicName": "Order Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/order"
            },
            {
                "topicName": "Practical Flex Patterns",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox"
            }
        ],
        "keywords": [
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "flex-shorthand",
            "flex-wrap",
            "nowrap",
            "wrap",
            "wrap-reverse",
            "align-self",
            "gap",
            "row-gap",
            "column-gap",
            "align-content",
            "order",
            "flex-items",
            "multi-line-flex",
            "responsive-flexbox",
            "flex-proportion",
            "flex-ratio",
            "flex-sizing",
            "item-spacing",
            "visual-order",
            "source-order",
            "flex-cards",
            "flex-grid"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What does <pre>flex-grow: 1;</pre> do to a flex item?",
            "options": {
                "A": "Makes the item 1px wide",
                "B": "Allows the item to grow to fill available space",
                "C": "Shrinks the item",
                "D": "Has no effect"
            },
            "correct": "B",
            "explanation": "flex-grow: 1 allows the flex item to grow and fill available space in the container. If multiple items have flex-grow: 1, they share the extra space equally. The number represents the growth factor relative to other flex items.",
            "topic": "Flex Grow"
        },
        {
            "id": 2,
            "question": "What is the default value of <pre>flex-wrap</pre>?",
            "options": {
                "A": "wrap",
                "B": "nowrap",
                "C": "wrap-reverse",
                "D": "auto"
            },
            "correct": "B",
            "explanation": "The default value of flex-wrap is 'nowrap', which means all flex items will try to fit on one line, shrinking if necessary. Items won't wrap to multiple lines unless you set flex-wrap: wrap.",
            "topic": "Flex Wrap"
        },
        {
            "id": 3,
            "question": "What does <pre>flex-shrink: 0;</pre> do?",
            "options": {
                "A": "Allows the item to shrink",
                "B": "Prevents the item from shrinking below its size",
                "C": "Makes the item invisible",
                "D": "Doubles the item size"
            },
            "correct": "B",
            "explanation": "flex-shrink: 0 prevents the flex item from shrinking when there isn't enough space. The item will maintain its size (based on flex-basis or width) even if it causes overflow. The default is flex-shrink: 1, which allows shrinking.",
            "topic": "Flex Shrink"
        },
        {
            "id": 4,
            "question": "What does <pre>flex-wrap: wrap;</pre> do?",
            "options": {
                "A": "Prevents items from wrapping",
                "B": "Allows flex items to wrap to multiple lines",
                "C": "Wraps text inside items",
                "D": "Reverses item order"
            },
            "correct": "B",
            "explanation": "flex-wrap: wrap allows flex items to wrap to multiple lines when they don't fit on one line. This creates a multi-line flex container, useful for responsive card grids or galleries that adapt to screen width.",
            "topic": "Flex Wrap"
        },
        {
            "id": 5,
            "question": "What does <pre>align-self</pre> do?",
            "options": {
                "A": "Aligns all items in the container",
                "B": "Allows an individual flex item to override align-items",
                "C": "Aligns the container itself",
                "D": "Centers text inside the item"
            },
            "correct": "B",
            "explanation": "align-self allows an individual flex item to override the align-items value set on the container. This lets you align one item differently on the cross axis while other items follow the container's align-items setting.",
            "topic": "Align Self"
        },
        {
            "id": 6,
            "question": "What does <pre>flex-basis</pre> define?",
            "options": {
                "A": "The maximum size of the item",
                "B": "The initial/ideal size of a flex item before growing or shrinking",
                "C": "The minimum size of the item",
                "D": "The final size of the item"
            },
            "correct": "B",
            "explanation": "flex-basis defines the initial/ideal size of a flex item before available space is distributed (via flex-grow) or before items shrink (via flex-shrink). It's like a starting point for sizing. Default is 'auto', which uses the item's width/height.",
            "topic": "Flex Basis"
        },
        {
            "id": 7,
            "question": "What does [CODE]flex: 1;[/CODE] mean?",
            "options": {
                "A": "flex-grow: 1; flex-shrink: 1; flex-basis: 0%;",
                "B": "flex-grow: 1; only",
                "C": "flex-basis: 1px;",
                "D": "Makes the item 1px wide"
            },
            "correct": "A",
            "explanation": "flex: 1 is shorthand for flex-grow: 1; flex-shrink: 1; flex-basis: 0%. This makes items grow to fill space equally (ignoring their content size) and allows them to shrink. It's commonly used to create equal-width columns.",
            "topic": "Flex Shorthand"
        },
        {
            "id": 8,
            "question": "What does the <pre>gap</pre> property do in flexbox?",
            "options": {
                "A": "Creates gaps in the content",
                "B": "Adds spacing between flex items",
                "C": "Removes items",
                "D": "Changes flex-direction"
            },
            "correct": "B",
            "explanation": "The gap property (also row-gap and column-gap) adds spacing between flex items without using margins. This is much cleaner than using margins on items because you don't need to remove margins from edge items. It only adds space between items, not at the edges.",
            "topic": "Gap Property"
        },
        {
            "id": 9,
            "question": "If three items have <pre>flex-grow: 1;</pre>, <pre>flex-grow: 2;</pre>, and <pre>flex-grow: 1;</pre>, how is extra space distributed?",
            "options": {
                "A": "Equally among all three",
                "B": "The second item gets twice as much as the first and third",
                "C": "Only the second item grows",
                "D": "The first item gets the most"
            },
            "correct": "B",
            "explanation": "flex-grow values represent proportions. With 1:2:1 ratio, the available space is divided into 4 parts (1+2+1). The first item gets 1/4, second gets 2/4 (half), and third gets 1/4. The second item grows twice as much as the others.",
            "topic": "Flex Grow"
        },
        {
            "id": 10,
            "question": "What does <pre>order: -1;</pre> do to a flex item?",
            "options": {
                "A": "Hides the item",
                "B": "Moves the item to appear first visually (before items with order: 0)",
                "C": "Deletes the item",
                "D": "Reverses the item"
            },
            "correct": "B",
            "explanation": "The order property changes the visual order of flex items without changing the source HTML. The default is 0. Lower values appear first, so order: -1 moves an item before items with order: 0. This doesn't affect tab order or screen readers.",
            "topic": "Order Property"
        },
        {
            "id": 11,
            "question": "What does <pre>align-content</pre> control?",
            "options": {
                "A": "Individual item alignment",
                "B": "Alignment of flex lines in a multi-line flex container",
                "C": "Text alignment inside items",
                "D": "Container alignment"
            },
            "correct": "B",
            "explanation": "align-content controls how multiple flex lines are distributed along the cross axis in a multi-line flex container (when flex-wrap: wrap creates multiple rows/columns). It only works when there's extra space and multiple lines. It's like justify-content but for the cross axis with wrapping.",
            "topic": "Align Content"
        },
        {
            "id": 12,
            "question": "What is the default value of <pre>flex-grow</pre>?",
            "options": {
                "A": "1",
                "B": "0",
                "C": "auto",
                "D": "none"
            },
            "correct": "B",
            "explanation": "The default value of flex-grow is 0, which means flex items won't grow to fill available space by default. They'll only take up the space they need based on their content and flex-basis. You must explicitly set flex-grow to allow growth.",
            "topic": "Flex Grow"
        },
        {
            "id": 13,
            "question": "What is the default value of <pre>flex-shrink</pre>?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "auto",
                "D": "none"
            },
            "correct": "B",
            "explanation": "The default value of flex-shrink is 1, which means flex items can shrink if there isn't enough space. This is why items shrink by default when the container is too small. Set flex-shrink: 0 to prevent shrinking.",
            "topic": "Flex Shrink"
        },
        {
            "id": 14,
            "question": "What does <pre>flex-wrap: wrap-reverse;</pre> do?",
            "options": {
                "A": "Prevents wrapping",
                "B": "Wraps items to multiple lines in reverse order",
                "C": "Reverses item order on one line",
                "D": "Same as flex-wrap: wrap"
            },
            "correct": "B",
            "explanation": "flex-wrap: wrap-reverse allows wrapping like 'wrap', but new lines appear in the opposite direction. For flex-direction: row, new lines appear above instead of below. This reverses the cross axis direction for wrapped lines.",
            "topic": "Flex Wrap"
        },
        {
            "id": 15,
            "question": "Can you use <pre>gap</pre> instead of margins for spacing flex items?",
            "options": {
                "A": "No, only margins work",
                "B": "Yes, gap is often cleaner because it doesn't add space at container edges",
                "C": "Only in CSS Grid",
                "D": "Only in older browsers"
            },
            "correct": "B",
            "explanation": "Yes, gap is often cleaner than margins for spacing flex items because it only adds space between items, not at the edges. With margins, you'd need negative margins on the container or :first-child/:last-child selectors to remove edge spacing.",
            "topic": "Gap Property"
        },
        {
            "id": 16,
            "question": "What does [CODE]flex: 0 0 200px;[/CODE] create?",
            "options": {
                "A": "An item that can grow and shrink",
                "B": "An item that is fixed at 200px (won't grow or shrink)",
                "C": "An item that only grows",
                "D": "An item that only shrinks"
            },
            "correct": "B",
            "explanation": "flex: 0 0 200px means flex-grow: 0 (won't grow), flex-shrink: 0 (won't shrink), flex-basis: 200px (starts at 200px). This creates a fixed-size item that stays at exactly 200px regardless of available space.",
            "topic": "Flex Shorthand"
        },
        {
            "id": 17,
            "question": "What does <pre>align-self: auto;</pre> do?",
            "options": {
                "A": "Centers the item",
                "B": "Uses the container's align-items value",
                "C": "Stretches the item",
                "D": "Has no effect"
            },
            "correct": "B",
            "explanation": "align-self: auto (the default) means the flex item inherits the align-items value from its flex container. This is the default behavior before you override it with a specific align-self value on an individual item.",
            "topic": "Align Self"
        },
        {
            "id": 18,
            "question": "What is the default value of <pre>flex-basis</pre>?",
            "options": {
                "A": "0",
                "B": "100%",
                "C": "auto",
                "D": "content"
            },
            "correct": "C",
            "explanation": "The default value of flex-basis is 'auto', which means the item's size is based on its width/height property or its content size. Setting flex-basis: 0 makes items ignore their content size and distribute space purely based on flex-grow ratios.",
            "topic": "Flex Basis"
        },
        {
            "id": 19,
            "question": "How do you create equal-width flex items that fill the container?",
            "options": {
                "A": "width: 100%;",
                "B": "flex: 1; on each item",
                "C": "flex-grow: 100%;",
                "D": "equal: true;"
            },
            "correct": "B",
            "explanation": "flex: 1 on each item makes them equal width and fills the container. This is shorthand for flex: 1 1 0%, which means items grow equally (flex-grow: 1), can shrink (flex-shrink: 1), and start from 0% basis, distributing all space equally regardless of content.",
            "topic": "Flex Shorthand"
        },
        {
            "id": 20,
            "question": "Does <pre>order</pre> affect the tab order for keyboard users?",
            "options": {
                "A": "Yes, it changes both visual and tab order",
                "B": "No, it only changes visual order; tab order follows HTML source order",
                "C": "Only in modern browsers",
                "D": "Only if tabindex is set"
            },
            "correct": "B",
            "explanation": "The order property only changes visual presentation, not the underlying DOM order. Keyboard tab order and screen readers still follow the source HTML order. This is important for accessibility—visual order and logical order can differ, which can confuse users.",
            "topic": "Order Property"
        },
        {
            "id": 21,
            "question": "What does <pre>gap: 20px;</pre> do?",
            "options": {
                "A": "Sets both row-gap and column-gap to 20px",
                "B": "Only sets horizontal gap",
                "C": "Only sets vertical gap",
                "D": "Creates 20px margin around container"
            },
            "correct": "A",
            "explanation": "gap: 20px is shorthand that sets both row-gap and column-gap to 20px, creating 20px spacing between all flex items in both directions. You can also use two values like gap: 20px 10px (row-gap then column-gap) for different spacing.",
            "topic": "Gap Property"
        },
        {
            "id": 22,
            "question": "When does <pre>align-content</pre> have an effect?",
            "options": {
                "A": "Always",
                "B": "Only when flex-wrap allows multiple lines and there's extra space on cross axis",
                "C": "Only in flex-direction: row",
                "D": "Only in flex-direction: column"
            },
            "correct": "B",
            "explanation": "align-content only works when there are multiple flex lines (flex-wrap: wrap or wrap-reverse) AND there's extra space along the cross axis. With a single line (nowrap), it has no effect. It distributes space between lines, not individual items.",
            "topic": "Align Content"
        },
        {
            "id": 23,
            "question": "What does [CODE]flex: auto;[/CODE] mean?",
            "options": {
                "A": "flex: 0 1 auto; (default flex values)",
                "B": "flex: 1 1 auto; (can grow and shrink based on content size)",
                "C": "flex: 0 0 auto;",
                "D": "No flex behavior"
            },
            "correct": "B",
            "explanation": "flex: auto is shorthand for flex: 1 1 auto, meaning flex-grow: 1 (can grow), flex-shrink: 1 (can shrink), flex-basis: auto (size based on content). Items can grow/shrink but respect their content size, unlike flex: 1 which uses flex-basis: 0%.",
            "topic": "Flex Shorthand"
        },
        {
            "id": 24,
            "question": "Can you set different <pre>order</pre> values for different screen sizes using media queries?",
            "options": {
                "A": "No, order is fixed",
                "B": "Yes, you can change visual order responsively with media queries",
                "C": "Only with JavaScript",
                "D": "Only in flexbox, not grid"
            },
            "correct": "B",
            "explanation": "Yes, you can change the order property within media queries to reorder items at different screen sizes. This is useful for responsive designs where you want different visual orders on mobile vs desktop, like moving a sidebar below content on small screens.",
            "topic": "Order Property"
        },
        {
            "id": 25,
            "question": "What is a common use case for <pre>flex-shrink: 0;</pre>?",
            "options": {
                "A": "Making items grow faster",
                "B": "Preventing images or buttons from becoming too small",
                "C": "Creating equal-width columns",
                "D": "Centering items"
            },
            "correct": "B",
            "explanation": "flex-shrink: 0 is commonly used to prevent specific items (like images, buttons, or icons) from shrinking below their natural size when space is tight. This ensures important elements maintain their intended size while other items shrink.",
            "topic": "Flex Shrink"
        },
        {
            "id": 26,
            "question": "What does <pre>flex-basis: 0;</pre> do when combined with <pre>flex-grow: 1;</pre>?",
            "options": {
                "A": "Makes items invisible",
                "B": "Makes items distribute space equally ignoring content size",
                "C": "Has no effect",
                "D": "Prevents items from growing"
            },
            "correct": "B",
            "explanation": "flex-basis: 0 with flex-grow: 1 makes items distribute available space equally, ignoring their content size. This is different from flex-basis: auto (default), which gives items with more content a larger initial size before distributing extra space.",
            "topic": "Flex Basis"
        },
        {
            "id": 27,
            "question": "What does [CODE]align-self: stretch;[/CODE] do to a single flex item?",
            "options": {
                "A": "Stretches it along the main axis",
                "B": "Stretches it to fill the container height (or width on cross axis)",
                "C": "Makes it wider",
                "D": "Has no effect"
            },
            "correct": "B",
            "explanation": "align-self: stretch makes an individual flex item stretch to fill the container along the cross axis, overriding the container's align-items. For flex-direction: row, it stretches to container height. This is the default align-items value.",
            "topic": "Align Self"
        },
        {
            "id": 28,
            "question": "Can you use <pre>row-gap</pre> and <pre>column-gap</pre> separately?",
            "options": {
                "A": "No, you must use gap",
                "B": "Yes, to set different spacing for rows vs columns",
                "C": "Only in CSS Grid",
                "D": "Only in older browsers"
            },
            "correct": "B",
            "explanation": "Yes, you can use row-gap and column-gap separately to set different spacing. For example, row-gap: 20px; column-gap: 10px; creates 20px vertical spacing and 10px horizontal spacing between items. The gap shorthand is gap: 20px 10px (row then column).",
            "topic": "Gap Property"
        },
        {
            "id": 29,
            "question": "What is the default value of <pre>order</pre>?",
            "options": {
                "A": "1",
                "B": "-1",
                "C": "0",
                "D": "auto"
            },
            "correct": "C",
            "explanation": "The default value of order is 0. All flex items start with order: 0 and appear in source order. Items with lower values appear first (e.g., order: -1), and items with higher values appear last (e.g., order: 1).",
            "topic": "Order Property"
        },
        {
            "id": 30,
            "question": "What pattern creates a responsive card grid that wraps?",
            "options": {
                "A": "display: flex; on container only",
                "B": "display: flex; flex-wrap: wrap; gap: 20px; on container, flex: 1 1 300px; on items",
                "C": "display: grid; only",
                "D": "width: 100%; on items"
            },
            "correct": "B",
            "explanation": "A responsive card grid uses display: flex and flex-wrap: wrap on the container (to allow wrapping), gap for spacing, and flex: 1 1 300px on items (grow from 300px minimum). Cards wrap to new rows when they can't fit, creating an auto-fitting grid layout.",
            "topic": "Practical Flex Patterns"
        }
    ]
};
