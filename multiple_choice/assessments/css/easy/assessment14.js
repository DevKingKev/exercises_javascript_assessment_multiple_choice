module.exports = {
  "metadata": {
    "title": "CSS Lists and Tables Styling",
    "description": "Master CSS list styling including list-style-type, list-style-position, and custom bullet images, learn table formatting with border-collapse, border-spacing, and table-layout, and discover practical techniques for styling table cells and creating zebra striping with nth-child.",
    "difficulty": "easy",
    "domain": "css",
    "timeLimit": 30,
    "questionCount": 30,
    "assessmentId": 14,
    "assessmentUniqueId": 1763063281090,
    "testType": "multiple-choice",
    "topics": [
      "List Style Type",
      "List Style Position",
      "List Style Image",
      "Removing List Styles",
      "Border Collapse",
      "Border Spacing",
      "Table Layout",
      "Table Cell Styling",
      "Nth-Child Basics",
      "Zebra Striping Tables"
    ],
    "topicLinks": [
      {
        "topicName": "List Style Type",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type"
      },
      {
        "topicName": "List Style Position",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position"
      },
      {
        "topicName": "List Style Image",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image"
      },
      {
        "topicName": "Removing List Styles",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style"
      },
      {
        "topicName": "Border Collapse",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse"
      },
      {
        "topicName": "Border Spacing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing"
      },
      {
        "topicName": "Table Layout",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout"
      },
      {
        "topicName": "Table Cell Styling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"
      },
      {
        "topicName": "Nth-Child Basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child"
      },
      {
        "topicName": "Zebra Striping Tables",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables"
      }
    ],
    "keywords": [
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "list-style",
      "disc",
      "circle",
      "square",
      "none",
      "inside",
      "outside",
      "custom-bullets",
      "border-collapse",
      "collapse",
      "separate",
      "border-spacing",
      "table-layout",
      "auto",
      "fixed",
      "nth-child",
      "zebra-striping",
      "table-cells",
      "table-headers",
      "th",
      "td",
      "tr",
      "list-reset",
      "remove-bullets",
      "table-borders"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the default <pre>list-style-type</pre> for unordered lists (<pre><ul></pre>)?",
      "options": {
        "A": "<pre>disc</pre>",
        "B": "<pre>square</pre>",
        "C": "<pre>circle</pre>",
        "D": "<pre>none</pre>"
      },
      "correct": "A",
      "explanation": "The default list-style-type for unordered lists (<ul>) is disc, which displays filled circular bullets. Ordered lists (<ol>) default to decimal numbers (1, 2, 3, etc.).",
      "difficulty": "easy",
      "topic": "List Style Type"
    },
    {
      "id": 2,
      "question": "What does <pre>list-style-position: inside;</pre> do?",
      "options": {
        "A": "Removes the bullet points",
        "B": "Places the bullet inside the list item's content box",
        "C": "Changes the bullet color",
        "D": "Makes the list horizontal"
      },
      "correct": "B",
      "explanation": "list-style-position: inside places the bullet marker inside the list item's content box, so text wraps underneath the bullet. The default value is outside, which places the marker outside the content box, with text not wrapping under the bullet.",
      "difficulty": "easy",
      "topic": "List Style Position"
    },
    {
      "id": 3,
      "question": "How do you completely remove bullet points from a list?",
      "options": {
        "A": "<pre>bullets: hidden;</pre>",
        "B": "<pre>list-style-type: none;</pre>",
        "C": "<pre>display: none;</pre>",
        "D": "<pre>list-bullets: off;</pre>"
      },
      "correct": "B",
      "explanation": "list-style-type: none removes all bullet points or numbering from a list. This is commonly used for navigation menus or when you want to create custom list styling. You can also use the shorthand list-style: none.",
      "difficulty": "easy",
      "topic": "Removing List Styles"
    },
    {
      "id": 4,
      "question": "What does <pre>border-collapse: collapse;</pre> do to a table?",
      "options": {
        "A": "Hides the table borders",
        "B": "Adds spacing between cells",
        "C": "Merges adjacent cell borders into a single border",
        "D": "Makes the table disappear"
      },
      "correct": "C",
      "explanation": "border-collapse: collapse merges the borders of adjacent table cells into a single border, creating a clean look without double borders. The alternative value is separate (the default), which keeps cell borders distinct with potential spacing between them.",
      "difficulty": "easy",
      "topic": "Border Collapse"
    },
    {
      "id": 5,
      "question": "Which property controls the space between table cells when <pre>border-collapse: separate;</pre> is used?",
      "options": {
        "A": "<pre>border-spacing</pre>",
        "B": "<pre>padding</pre>",
        "C": "<pre>margin</pre>",
        "D": "<pre>cell-spacing</pre>"
      },
      "correct": "A",
      "explanation": "border-spacing controls the space between table cells when border-collapse is set to separate. You can specify one value for both horizontal and vertical spacing, or two values (horizontal then vertical). For example: border-spacing: 10px or border-spacing: 5px 10px.",
      "difficulty": "easy",
      "topic": "Border Spacing"
    },
    {
      "id": 6,
      "question": "What is the default value of <pre>table-layout</pre>?",
      "options": {
        "A": "<pre>fixed</pre>",
        "B": "<pre>flexible</pre>",
        "C": "<pre>responsive</pre>",
        "D": "<pre>auto</pre>"
      },
      "correct": "D",
      "explanation": "The default value of table-layout is auto, which means the table and column widths are determined by the content. With table-layout: fixed, the table width is determined by the table's width property and the first row's cell widths, which can improve performance for large tables.",
      "difficulty": "easy",
      "topic": "Table Layout"
    },
    {
      "id": 7,
      "question": "How do you create zebra striping (alternating row colors) in a table?",
      "options": {
        "A": "<pre>tr:odd { background-color: gray; }</pre>",
        "B": "<pre>tr:nth-child(even) { background-color: gray; }</pre>",
        "C": "<pre>tr:alternate { background-color: gray; }</pre>",
        "D": "<pre>tr:stripe { background-color: gray; }</pre>"
      },
      "correct": "B",
      "explanation": "Use the :nth-child(even) or :nth-child(odd) pseudo-class to create zebra striping. For example, tr:nth-child(even) { background-color: #f2f2f2; } colors every even-numbered row. You could also use :nth-child(2n) for even rows or :nth-child(2n+1) for odd rows.",
      "difficulty": "easy",
      "topic": "Zebra Striping Tables"
    },
    {
      "id": 8,
      "question": "Can you use a custom image as a list bullet?",
      "options": {
        "A": "No, only built-in bullet types are allowed",
        "B": "Yes, using <pre>list-style-image</pre>",
        "C": "Only in modern browsers",
        "D": "Only for ordered lists"
      },
      "correct": "B",
      "explanation": "Yes, list-style-image allows you to use a custom image as a bullet. Example: list-style-image: url('bullet.png'). If the image fails to load, the browser falls back to the list-style-type value. For more control over image bullets, many developers use ::before pseudo-elements with background images.",
      "difficulty": "easy",
      "topic": "List Style Image"
    },
    {
      "id": 9,
      "question": "What are the valid values for <pre>list-style-type</pre> on an unordered list?",
      "options": {
        "A": "Only <pre>decimal</pre> and <pre>alpha</pre>",
        "B": "Only <pre>disc</pre> and <pre>circle</pre>",
        "C": "<pre>disc</pre>, <pre>circle</pre>, <pre>square</pre>, <pre>none</pre>",
        "D": "<pre>bullet</pre>, <pre>dot</pre>, <pre>marker</pre>"
      },
      "correct": "C",
      "explanation": "For unordered lists, the main list-style-type values are disc (filled circle), circle (hollow circle), square (filled square), and none (no marker). There are also other values like disclosure-open and disclosure-closed, but disc, circle, square, and none are the most common.",
      "difficulty": "easy",
      "topic": "List Style Type"
    },
    {
      "id": 10,
      "question": "Does <pre>border-spacing</pre> work when <pre>border-collapse: collapse;</pre> is set?",
      "options": {
        "A": "Yes, it always works",
        "B": "Only on the first row",
        "C": "Only with positive values",
        "D": "No, border-spacing is ignored when borders are collapsed"
      },
      "correct": "D",
      "explanation": "border-spacing has no effect when border-collapse is set to collapse because collapsed borders eliminate the space between cells entirely. border-spacing only works with border-collapse: separate (the default).",
      "difficulty": "easy",
      "topic": "Border Spacing"
    },
    {
      "id": 11,
      "question": "What is the shorthand property for setting all list styles at once?",
      "options": {
        "A": "<pre>list</pre>",
        "B": "<pre>list-properties</pre>",
        "C": "<pre>ul-style</pre>",
        "D": "<pre>list-style</pre>"
      },
      "correct": "D",
      "explanation": "list-style is the shorthand property that can set list-style-type, list-style-position, and list-style-image in one declaration. Example: list-style: square inside or list-style: none. Values can be in any order.",
      "difficulty": "easy",
      "topic": "Removing List Styles"
    },
    {
      "id": 12,
      "question": "What does <pre>table-layout: fixed;</pre> do?",
      "options": {
        "A": "Makes table column widths depend only on the first row and table width, not content",
        "B": "Prevents the table from scrolling",
        "C": "Fixes the table position on the page",
        "D": "Prevents editing the table"
      },
      "correct": "A",
      "explanation": "table-layout: fixed makes the browser use the widths from the first row (or colgroup/col elements) to determine column widths, ignoring content in subsequent rows. This can significantly improve rendering performance for large tables, but requires careful width management.",
      "difficulty": "easy",
      "topic": "Table Layout"
    },
    {
      "id": 13,
      "question": "How do you style only the header cells in a table?",
      "options": {
        "A": "Use <pre>th { ... }</pre>",
        "B": "Use <pre>header { ... }</pre>",
        "C": "Use <pre>.table-header { ... }</pre>",
        "D": "Use <pre>td:first { ... }</pre>"
      },
      "correct": "A",
      "explanation": "Table header cells use the <th> element, so you can style them with the th selector. Common styles include font-weight: bold (often default), text-align: left, and distinct background colors. The <td> element is used for regular table data cells.",
      "difficulty": "easy",
      "topic": "Table Cell Styling"
    },
    {
      "id": 14,
      "question": "What does <pre>:nth-child(odd)</pre> select?",
      "options": {
        "A": "The first element only",
        "B": "Every even-numbered element",
        "C": "Every odd-numbered element (1st, 3rd, 5th, etc.)",
        "D": "Only elements with odd numbers in their content"
      },
      "correct": "C",
      "explanation": ":nth-child(odd) selects elements that are odd-numbered children of their parent (1st, 3rd, 5th, 7th, etc.). This is equivalent to :nth-child(2n+1). For even elements, use :nth-child(even) or :nth-child(2n).",
      "difficulty": "easy",
      "topic": "Nth-Child Basics"
    },
    {
      "id": 15,
      "question": "What is the difference between <pre>list-style-position: inside;</pre> and <pre>outside;</pre>?",
      "options": {
        "A": "Inside places bullets inside the content box; outside places them outside",
        "B": "Inside makes bullets smaller; outside makes them larger",
        "C": "Inside hides bullets; outside shows them",
        "D": "There is no difference"
      },
      "correct": "A",
      "explanation": "With list-style-position: outside (default), the bullet is placed outside the content box, and text doesn't wrap underneath it. With inside, the bullet is inside the content box, and wrapped text appears underneath the bullet, which can look messy for long list items.",
      "difficulty": "easy",
      "topic": "List Style Position"
    },
    {
      "id": 16,
      "question": "How do you add 10 pixels of spacing between table cells?",
      "options": {
        "A": "[CODE]border-collapse: separate; border-spacing: 10px;[/CODE]",
        "B": "<pre>cell-spacing: 10px;</pre>",
        "C": "<pre>margin: 10px;</pre> on cells",
        "D": "<pre>padding: 10px;</pre> on the table"
      },
      "correct": "A",
      "explanation": "To add spacing between table cells, use border-collapse: separate (or ensure it's not set to collapse) and then set border-spacing: 10px. The margin property doesn't work on table cells, and padding adds space inside cells, not between them.",
      "difficulty": "easy",
      "topic": "Border Spacing"
    },
    {
      "id": 17,
      "question": "Can you use <pre>list-style-type: decimal;</pre> on an unordered list?",
      "options": {
        "A": "No, decimal only works on ordered lists",
        "B": "Yes, CSS allows any list-style-type on any list",
        "C": "Only in HTML5",
        "D": "Only if the list has more than 10 items"
      },
      "correct": "B",
      "explanation": "Yes, CSS allows you to use any list-style-type value on any type of list. You can use decimal, lower-alpha, or upper-roman on <ul> elements, and disc, circle, or square on <ol> elements. The HTML tag doesn't restrict the CSS styling.",
      "difficulty": "easy",
      "topic": "List Style Type"
    },
    {
      "id": 18,
      "question": "What is a common CSS reset for lists used in navigation menus?",
      "options": {
        "A": "<pre>bullets: hidden;</pre>",
        "B": "<pre>display: none;</pre>",
        "C": "<pre>list-reset: true;</pre>",
        "D": "[CODE]list-style: none; margin: 0; padding: 0;[/CODE]"
      },
      "correct": "D",
      "explanation": "For navigation menus, it's common to reset lists with list-style: none (removes bullets), margin: 0, and padding: 0 (removes default spacing). This provides a clean slate for styling the navigation. You might also set display: flex or display: inline-block on list items for horizontal menus.",
      "difficulty": "easy",
      "topic": "Removing List Styles"
    },
    {
      "id": 19,
      "question": "Which table elements can you apply <pre>border-collapse</pre> to?",
      "options": {
        "A": "Only <pre><table></pre> elements",
        "B": "Only <pre><tr></pre> elements",
        "C": "Only <pre><td></pre> elements",
        "D": "All table elements"
      },
      "correct": "A",
      "explanation": "border-collapse is applied to the <table> element, not to individual rows or cells. It affects how borders are rendered for the entire table structure. The property is inherited by table elements but should be set on the table itself.",
      "difficulty": "easy",
      "topic": "Border Collapse"
    },
    {
      "id": 20,
      "question": "What does [CODE]tr:nth-child(3n)[/CODE] select?",
      "options": {
        "A": "Every third element regardless of type",
        "B": "Only the third row",
        "C": "The first three rows",
        "D": "Every third row (3rd, 6th, 9th, etc.)"
      },
      "correct": "D",
      "explanation": ":nth-child(3n) selects every third element (3rd, 6th, 9th, 12th, etc.). The 'n' is a counter starting at 0, so 3n produces 0, 3, 6, 9, etc. To start at the first and select every third (1st, 4th, 7th), use :nth-child(3n+1).",
      "difficulty": "easy",
      "topic": "Nth-Child Basics"
    },
    {
      "id": 21,
      "question": "Does <pre>padding</pre> work on <pre><td></pre> and <pre><th></pre> elements?",
      "options": {
        "A": "No, table cells don't support padding",
        "B": "Yes, padding works normally on table cells",
        "C": "Only on <pre><th></pre> elements",
        "D": "Only when border-collapse is separate"
      },
      "correct": "B",
      "explanation": "Yes, padding works perfectly on table cells (<td> and <th>). It adds space inside the cell between the content and the cell's border. This is very commonly used to add breathing room in tables, like padding: 10px or padding: 8px 12px.",
      "difficulty": "easy",
      "topic": "Table Cell Styling"
    },
    {
      "id": 22,
      "question": "How do you specify different horizontal and vertical spacing for <pre>border-spacing</pre>?",
      "options": {
        "A": "<pre>border-spacing-x: 5px; border-spacing-y: 10px;</pre>",
        "B": "<pre>border-spacing: 5px 10px;</pre> (horizontal then vertical)",
        "C": "<pre>border-spacing: horizontal 5px vertical 10px;</pre>",
        "D": "You can only set one value"
      },
      "correct": "B",
      "explanation": "border-spacing accepts one or two values. With two values, the first is horizontal spacing (between columns) and the second is vertical spacing (between rows). For example: border-spacing: 5px 10px. With one value, it applies to both dimensions.",
      "difficulty": "easy",
      "topic": "Border Spacing"
    },
    {
      "id": 23,
      "question": "What is the benefit of using <pre>table-layout: fixed;</pre>?",
      "options": {
        "A": "Better visual appearance",
        "B": "Faster rendering performance for large tables",
        "C": "Automatically responsive tables",
        "D": "Better SEO"
      },
      "correct": "B",
      "explanation": "table-layout: fixed improves rendering performance because the browser can start rendering the table after reading the first row, without analyzing all content to calculate optimal column widths. This is especially beneficial for large tables with many rows.",
      "difficulty": "easy",
      "topic": "Table Layout"
    },
    {
      "id": 24,
      "question": "Can you use <pre>list-style-image</pre> with a gradient?",
      "options": {
        "A": "No, only image URLs are allowed",
        "B": "Only with radial gradients",
        "C": "Yes, using <pre>list-style-image: linear-gradient(...);</pre>",
        "D": "Only in Chrome"
      },
      "correct": "C",
      "explanation": "Yes, you can use gradients with list-style-image, such as list-style-image: linear-gradient(to right, red, blue). However, browser support varies, and sizing can be tricky. For more control, it's often better to use ::before pseudo-elements with background gradients.",
      "difficulty": "easy",
      "topic": "List Style Image"
    },
    {
      "id": 25,
      "question": "How do you select every other table row starting with the first row?",
      "options": {
        "A": "<pre>tr:nth-child(odd)</pre> or <pre>tr:nth-child(2n+1)</pre>",
        "B": "<pre>tr:nth-child(even)</pre>",
        "C": "<pre>tr:first-child</pre>",
        "D": "<pre>tr:alternate</pre>"
      },
      "correct": "A",
      "explanation": "tr:nth-child(odd) or tr:nth-child(2n+1) selects odd-numbered rows (1st, 3rd, 5th, etc.). Both syntaxes are equivalent. For even rows (2nd, 4th, 6th), use :nth-child(even) or :nth-child(2n).",
      "difficulty": "easy",
      "topic": "Zebra Striping Tables"
    },
    {
      "id": 26,
      "question": "What happens if you set both <pre>list-style-image</pre> and <pre>list-style-type</pre>?",
      "options": {
        "A": "list-style-type is used as fallback if the image fails to load",
        "B": "list-style-type is ignored",
        "C": "Both are displayed together",
        "D": "An error occurs"
      },
      "correct": "A",
      "explanation": "When both are set, list-style-image is used if the image loads successfully, and list-style-type serves as a fallback if the image fails to load. This is a good practice to ensure bullets always appear even if the image URL is broken.",
      "difficulty": "easy",
      "topic": "List Style Image"
    },
    {
      "id": 27,
      "question": "Can you use <pre>text-align</pre> on table cells?",
      "options": {
        "A": "Only on <pre><th></pre> elements",
        "B": "No, use align attribute instead",
        "C": "Yes, text-align works on <pre><td></pre> and <pre><th></pre> elements",
        "D": "Only when table-layout is fixed"
      },
      "correct": "C",
      "explanation": "Yes, text-align works on table cells. Common usage: th { text-align: left; } for left-aligned headers, or td { text-align: right; } for right-aligned numbers. You can also use text-align: center for centered content.",
      "difficulty": "easy",
      "topic": "Table Cell Styling"
    },
    {
      "id": 28,
      "question": "What is the default <pre>list-style-position</pre> value?",
      "options": {
        "A": "<pre>inside</pre>",
        "B": "<pre>auto</pre>",
        "C": "<pre>outside</pre>",
        "D": "<pre>normal</pre>"
      },
      "correct": "C",
      "explanation": "The default value of list-style-position is outside, which places the bullet marker outside the content box of the list item. This is generally preferred as it looks cleaner, with text not wrapping underneath bullets.",
      "difficulty": "easy",
      "topic": "List Style Position"
    },
    {
      "id": 29,
      "question": "How do you create alternating row colors starting with white for the first row and gray for the second?",
      "options": {
        "A": "[CODE]tr { background: alternating(white, gray); }[/CODE]",
        "B": "[CODE]tr:nth-child(odd) { background: gray; }[/CODE]",
        "C": "[CODE]tr:first { background: white; }[/CODE]",
        "D": "[CODE]tr:nth-child(even) { background: gray; }[/CODE]"
      },
      "correct": "D",
      "explanation": "To start with white (1st row) and gray for the second row, use tr:nth-child(even) { background: gray; }. This makes even rows (2nd, 4th, 6th) gray while odd rows (1st, 3rd, 5th) remain white (or inherit the default). You might also need tbody tr:nth-child(even) if you have a <thead>.",
      "difficulty": "easy",
      "topic": "Zebra Striping Tables"
    },
    {
      "id": 30,
      "question": "Does <pre>margin</pre> work on <pre><td></pre> elements?",
      "options": {
        "A": "No, table cells don't support margin",
        "B": "Yes, margin works like on any other element",
        "C": "Only top and bottom margins work",
        "D": "Only when border-collapse is separate"
      },
      "correct": "A",
      "explanation": "No, margin doesn't work on table cells (<td> and <th>). To add spacing between cells, use border-spacing on the table (with border-collapse: separate). For spacing inside cells, use padding, which works normally on table cells.",
      "difficulty": "easy",
      "topic": "Table Cell Styling"
    }
  ]
}
