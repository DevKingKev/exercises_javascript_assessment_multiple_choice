module.exports = {
  "metadata": {
    "title": "CSS Advanced Flexbox",
    "description": "Intermediate assessment covering advanced flexbox concepts: flex-grow, flex-shrink, flex-basis, flex shorthand, order property, align-self, flex-wrap, align-content for multi-line containers, nested flex containers, spacing techniques, and common flexbox patterns.",
    "difficulty": "medium",
    "domain": "css",
    "timeLimit": 45,
    "questionCount": 25,
    "assessmentId": 7,
    "assessmentUniqueId": 1763116207704,
    "testType": "multiple-choice",
    "topics": [
      "Advanced Flexbox",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex shorthand",
      "order property",
      "align-self",
      "flex-wrap",
      "align-content",
      "Nested Flex Containers",
      "Flexbox Spacing",
      "Flexbox Patterns"
    ],
    "topicLinks": [
      {
        "topicName": "Advanced Flexbox",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout"
      },
      {
        "topicName": "flex-grow",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow"
      },
      {
        "topicName": "flex-shrink",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"
      },
      {
        "topicName": "flex-basis",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"
      },
      {
        "topicName": "flex shorthand",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
      },
      {
        "topicName": "order property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/order"
      },
      {
        "topicName": "align-self",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"
      },
      {
        "topicName": "flex-wrap",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"
      },
      {
        "topicName": "align-content",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
      },
      {
        "topicName": "Nested Flex Containers",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#nested_flex_containers"
      },
      {
        "topicName": "Flexbox Spacing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container"
      },
      {
        "topicName": "Flexbox Patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox"
      }
    ],
    "keywords": [
      "flexbox",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex",
      "order",
      "align-self",
      "flex-wrap",
      "nowrap",
      "wrap",
      "wrap-reverse",
      "align-content",
      "nested flex",
      "spacing",
      "holy grail",
      "sticky footer"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What does <pre>flex-grow: 1</pre> do to a flex item?",
      "options": {
        "A": "Fixes the item at 1px",
        "B": "Allows the item to grow to fill available space proportionally",
        "C": "Makes the item grow by 1px",
        "D": "Prevents the item from growing"
      },
      "correct": "B",
      "explanation": "<pre>flex-grow</pre> controls how much a flex item will grow relative to other flex items when there is extra space in the container. A value of 1 means the item can grow and will share available space equally with other items that have <pre>flex-grow: 1</pre>. A value of 0 (default) prevents growth.",
      "topic": "flex-grow"
    },
    {
      "id": 2,
      "question": "If three flex items have <pre>flex-grow: 1</pre>, <pre>flex-grow: 2</pre>, and <pre>flex-grow: 1</pre> respectively, how is extra space distributed?",
      "options": {
        "A": "Equally among all three",
        "B": "Only the second item grows",
        "C": "1:2:1 ratio (second item gets twice as much)",
        "D": "No growth occurs"
      },
      "correct": "C",
      "explanation": "The extra space is distributed in proportion to the <pre>flex-grow</pre> values. With values of 1, 2, and 1 (total of 4), the items receive 1/4, 2/4, and 1/4 of the available extra space respectively. The second item grows twice as much as the others.",
      "topic": "flex-grow"
    },
    {
      "id": 3,
      "question": "What does <pre>flex-shrink: 0</pre> prevent?",
      "options": {
        "A": "The item from growing",
        "B": "The item from displaying",
        "C": "The item from shrinking below its base size",
        "D": "Flexbox from working"
      },
      "correct": "C",
      "explanation": "<pre>flex-shrink</pre> determines whether a flex item can shrink when there isn't enough space. The default value is 1 (can shrink). Setting it to 0 prevents the item from shrinking below its <pre>flex-basis</pre> or content size, which can cause overflow.",
      "topic": "flex-shrink"
    },
    {
      "id": 4,
      "question": "What does <pre>flex-basis: 200px</pre> specify?",
      "options": {
        "A": "The initial main size of the item before growing or shrinking",
        "B": "The final size of the item",
        "C": "The minimum size",
        "D": "The maximum size"
      },
      "correct": "A",
      "explanation": "<pre>flex-basis</pre> sets the initial size of a flex item along the main axis before any growing or shrinking occurs. It's similar to width (for row direction) or height (for column direction) but takes priority. After this base size is set, <pre>flex-grow</pre> and <pre>flex-shrink</pre> adjust it.",
      "topic": "flex-basis"
    },
    {
      "id": 5,
      "question": "What is the difference between <pre>flex-basis: 0</pre> and <pre>flex-basis: auto</pre>?",
      "options": {
        "A": "They are identical",
        "B": "<pre>0</pre> ignores content size; <pre>auto</pre> uses content size as the base",
        "C": "<pre>auto</pre> doesn't work",
        "D": "<pre>0</pre> hides the item"
      },
      "correct": "B",
      "explanation": "With <pre>flex-basis: auto</pre>, the base size is determined by the item's content or width/height property. With <pre>flex-basis: 0</pre>, the base size starts at zero and space is distributed purely based on <pre>flex-grow</pre> ratios, ignoring content size.",
      "topic": "flex-basis"
    },
    {
      "id": 6,
      "question": "What does the shorthand <pre>flex: 1</pre> expand to?",
      "options": {
        "A": "<pre>flex-grow: 1;</pre> only",
        "B": "<pre>flex-grow: 1; flex-shrink: 1; flex-basis: 0%;</pre>",
        "C": "<pre>flex-grow: 1; flex-shrink: 0; flex-basis: auto;</pre>",
        "D": "<pre>flex: 1px;</pre>"
      },
      "correct": "B",
      "explanation": "The shorthand <pre>flex: 1</pre> expands to <pre>flex-grow: 1; flex-shrink: 1; flex-basis: 0%;</pre>. This means the item can grow and shrink, starting from a zero base. This is commonly used to create equal-width flexible items that ignore their content size.",
      "topic": "flex shorthand"
    },
    {
      "id": 7,
      "question": "What does <pre>flex: auto</pre> expand to?",
      "options": {
        "A": "<pre>flex-grow: 1; flex-shrink: 1; flex-basis: auto;</pre>",
        "B": "<pre>flex-grow: 0; flex-shrink: 0; flex-basis: auto;</pre>",
        "C": "<pre>flex-grow: 1; flex-shrink: 0; flex-basis: 0;</pre>",
        "D": "It's invalid syntax"
      },
      "correct": "A",
      "explanation": "<pre>flex: auto</pre> is equivalent to <pre>flex: 1 1 auto</pre>, meaning the item can grow and shrink based on available space, but starts with its content size as the base. This is useful for flexible items that respect their content size.",
      "topic": "flex shorthand"
    },
    {
      "id": 8,
      "question": "What does <pre>flex: none</pre> do?",
      "options": {
        "A": "Makes the item inflexible (cannot grow or shrink)",
        "B": "Removes the item from the flex container",
        "C": "Same as <pre>flex: 0</pre>",
        "D": "Disables flexbox"
      },
      "correct": "A",
      "explanation": "<pre>flex: none</pre> expands to <pre>flex: 0 0 auto</pre>, making the item completely inflexible. It won't grow or shrink and will maintain its content size or specified width/height. This is useful for fixed-size items in a flex layout.",
      "topic": "flex shorthand"
    },
    {
      "id": 9,
      "question": "What does the <pre>order</pre> property do?",
      "options": {
        "A": "Controls the visual order of flex items without changing the DOM",
        "B": "Sorts items alphabetically",
        "C": "Numbers items automatically",
        "D": "Orders items by size"
      },
      "correct": "A",
      "explanation": "The <pre>order</pre> property controls the visual order in which flex items appear. Items are displayed in ascending order value (default is 0). Lower values appear first. This changes visual order but not DOM order, which affects screen readers and tab order.",
      "topic": "order property"
    },
    {
      "id": 10,
      "question": "If flex items have order values of 2, -1, 0, and 3, what is their visual order?",
      "options": {
        "A": "-1, 0, 2, 3",
        "B": "2, -1, 0, 3",
        "C": "0, -1, 2, 3",
        "D": "3, 2, 0, -1"
      },
      "correct": "A",
      "explanation": "Items are displayed in ascending order by their <pre>order</pre> value. So -1 comes first, then 0 (the default), then 2, then 3. Negative values are valid and will appear before items with order 0 or positive values.",
      "topic": "order property"
    },
    {
      "id": 11,
      "question": "What does <pre>align-self: flex-end</pre> do to a single flex item?",
      "options": {
        "A": "Aligns the item to the end of the main axis",
        "B": "Aligns text to the end",
        "C": "Moves the item to the end position",
        "D": "Aligns the item to the end of the cross axis"
      },
      "correct": "D",
      "explanation": "<pre>align-self</pre> aligns a single flex item along the cross axis, overriding the container's <pre>align-items</pre> value. <pre>flex-end</pre> aligns the item to the end of the cross axis. For a row direction flex container, this would be the bottom.",
      "topic": "align-self"
    },
    {
      "id": 12,
      "question": "Can <pre>align-self</pre> override the container's <pre>align-items</pre>?",
      "options": {
        "A": "No, the container always wins",
        "B": "Only in nested flex containers",
        "C": "Only if align-items is not set",
        "D": "Yes, align-self applies to individual items"
      },
      "correct": "D",
      "explanation": "<pre>align-self</pre> specifically allows individual flex items to override the container's <pre>align-items</pre> setting. This is useful when most items should align one way but a few items need different cross-axis alignment.",
      "topic": "align-self"
    },
    {
      "id": 13,
      "question": "What does <pre>flex-wrap: wrap</pre> enable?",
      "options": {
        "A": "Text wrapping inside items",
        "B": "Wrapping the container",
        "C": "Flex items to wrap onto multiple lines when they don't fit",
        "D": "Word wrapping"
      },
      "correct": "C",
      "explanation": "<pre>flex-wrap: wrap</pre> allows flex items to wrap onto multiple lines instead of shrinking or overflowing. By default, flexbox uses <pre>nowrap</pre>, keeping all items on one line. <pre>wrap</pre> creates a multi-line flex container.",
      "topic": "flex-wrap"
    },
    {
      "id": 14,
      "question": "What is the difference between <pre>flex-wrap: wrap</pre> and <pre>flex-wrap: wrap-reverse</pre>?",
      "options": {
        "A": "They are identical",
        "B": "<pre>wrap-reverse</pre> reverses the order of items",
        "C": "<pre>wrap-reverse</pre> wraps lines in the opposite direction",
        "D": "<pre>wrap-reverse</pre> doesn't work"
      },
      "correct": "C",
      "explanation": "Both allow wrapping, but <pre>wrap-reverse</pre> stacks the flex lines in reverse order. For a row container, new lines appear above instead of below. The cross-start and cross-end directions are swapped.",
      "topic": "flex-wrap"
    },
    {
      "id": 15,
      "question": "When does <pre>align-content</pre> have an effect?",
      "options": {
        "A": "Always",
        "B": "Only in multi-line flex containers (when flex-wrap allows wrapping)",
        "C": "Only with align-items",
        "D": "Never"
      },
      "correct": "B",
      "explanation": "<pre>align-content</pre> controls how flex lines are distributed along the cross axis in a multi-line flex container. It has no effect on single-line containers (<pre>flex-wrap: nowrap</pre>). It's similar to <pre>justify-content</pre> but for the cross axis.",
      "topic": "align-content"
    },
    {
      "id": 16,
      "question": "What's the difference between <pre>align-items</pre> and <pre>align-content</pre>?",
      "options": {
        "A": "They are the same",
        "B": "<pre>align-items</pre> only works with grid",
        "C": "<pre>align-content</pre> doesn't work",
        "D": "<pre>align-items</pre> aligns items within each line; <pre>align-content</pre> aligns the lines themselves"
      },
      "correct": "D",
      "explanation": "<pre>align-items</pre> aligns flex items within their flex line (cross-axis alignment per line). <pre>align-content</pre> aligns the flex lines themselves when there are multiple lines. Both affect cross-axis alignment but at different levels.",
      "topic": "align-content"
    },
    {
      "id": 17,
      "question": "Can a flex item also be a flex container?",
      "options": {
        "A": "No, they are mutually exclusive",
        "B": "Only with a special property",
        "C": "Yes, by setting display: flex on the flex item",
        "D": "Only in CSS Grid"
      },
      "correct": "C",
      "explanation": "A flex item can also be a flex container by setting <pre>display: flex</pre> on it. This creates nested flex containers, which is useful for complex layouts. The inner flex context is independent of the outer one.",
      "topic": "Nested Flex Containers"
    },
    {
      "id": 18,
      "question": "In nested flex containers, does the outer flex container's <pre>justify-content</pre> affect the inner flex items?",
      "options": {
        "A": "Yes, it cascades down",
        "B": "Only if explicitly set",
        "C": "No, each flex context is independent",
        "D": "Only with flex-direction: column"
      },
      "correct": "C",
      "explanation": "Each flex container establishes its own flex formatting context. Properties like <pre>justify-content</pre> on the outer container only affect its direct children (which may themselves be flex containers), not the nested flex items inside those children.",
      "topic": "Nested Flex Containers"
    },
    {
      "id": 19,
      "question": "What's a common way to create equal spacing between flex items?",
      "options": {
        "A": "Using <pre>gap</pre> property",
        "B": "Using margins on items",
        "C": "Using <pre>justify-content: space-between</pre>",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All approaches work: <pre>gap</pre> (modern, recommended) adds space between items; margins (e.g., <pre>margin-right</pre>) create spacing; <pre>justify-content: space-between</pre> distributes space between items. Each has different use cases and browser support considerations.",
      "topic": "Flexbox Spacing"
    },
    {
      "id": 20,
      "question": "What's the advantage of using <pre>gap</pre> over margins for flexbox spacing?",
      "options": {
        "A": "No advantage",
        "B": "Gap works in all browsers",
        "C": "Gap is faster",
        "D": "Gap only adds space between items, not at the edges, and requires less code"
      },
      "correct": "D",
      "explanation": "The <pre>gap</pre> property (now supported in flexbox) only adds space between items, not before the first or after the last item. This eliminates the need for negative margins or <pre>:not(:last-child)</pre> selectors that were previously needed with margin-based spacing.",
      "topic": "Flexbox Spacing"
    },
    {
      "id": 21,
      "question": "In the Holy Grail layout pattern, which CSS display values are typically used?",
      "options": {
        "A": "Only display: block",
        "B": "Combination of display: flex for the main container and possibly nested flex containers",
        "C": "Only display: table",
        "D": "Only display: grid"
      },
      "correct": "B",
      "explanation": "The Holy Grail layout (header, footer, three-column middle with fixed sidebars and fluid center) is commonly implemented using flexbox. The main container uses <pre>display: flex</pre> with <pre>flex-direction: column</pre>, and the middle section may use nested flex for the three columns.",
      "topic": "Flexbox Patterns"
    },
    {
      "id": 22,
      "question": "How can you create a sticky footer using flexbox?",
      "options": {
        "A": "Using <pre>position: sticky</pre>",
        "B": "Using <pre>position: fixed</pre>",
        "C": "Sticky footers require JavaScript",
        "D": "Using a flex container with <pre>min-height: 100vh</pre> and pushing footer to the bottom with <pre>margin-top: auto</pre>"
      },
      "correct": "D",
      "explanation": "A sticky footer (footer at bottom even with little content) can be achieved with flexbox: make the body or wrapper a flex container with <pre>flex-direction: column</pre> and <pre>min-height: 100vh</pre>, then use <pre>margin-top: auto</pre> on the footer or <pre>flex-grow: 1</pre> on the main content.",
      "topic": "Flexbox Patterns"
    },
    {
      "id": 23,
      "question": "What's the default value of <pre>flex-shrink</pre>?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "auto",
        "D": "none"
      },
      "correct": "B",
      "explanation": "The default value of <pre>flex-shrink</pre> is 1, meaning flex items will shrink if needed to fit in the container. This is why flex items shrink by default when the container is too small, unless you explicitly set <pre>flex-shrink: 0</pre>.",
      "topic": "flex-shrink"
    },
    {
      "id": 24,
      "question": "What happens when you set <pre>flex-basis: 0</pre> and <pre>flex-grow: 1</pre> on all flex items?",
      "options": {
        "A": "Items disappear",
        "B": "Flexbox breaks",
        "C": "Items size based on content",
        "D": "Items become equal width regardless of content"
      },
      "correct": "D",
      "explanation": "Starting from a base size of 0 and growing equally (<pre>flex-grow: 1</pre>) distributes all available space equally among items, ignoring their content size. This creates equal-width items. This is the same as using <pre>flex: 1</pre>.",
      "topic": "flex-basis"
    },
    {
      "id": 25,
      "question": "Which flexbox property combination would you use to create a responsive navigation that wraps to multiple rows on small screens?",
      "options": {
        "A": "<pre>display: flex; flex-wrap: wrap;</pre>",
        "B": "<pre>display: flex; flex-direction: column;</pre>",
        "C": "<pre>display: block;</pre>",
        "D": "<pre>display: flex; flex-wrap: nowrap;</pre>"
      },
      "correct": "A",
      "explanation": "Using <pre>display: flex</pre> with <pre>flex-wrap: wrap</pre> allows navigation items to wrap onto multiple lines when there isn't enough horizontal space. Combined with appropriate <pre>flex-basis</pre> or <pre>min-width</pre> on items, this creates a responsive navigation without media queries.",
      "topic": "flex-wrap"
    }
  ]
}
