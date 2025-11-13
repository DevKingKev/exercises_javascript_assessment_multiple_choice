module.exports = {
  "metadata": {
    "title": "Advanced HTML Table Features and Accessibility",
    "description": "Deep dive into HTML table structure, spanning cells, column styling, accessibility features, and complex table layouts for semantic and accessible data presentation.",
    "difficulty": "medium",
    "domain": "html",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "Table Structure (thead, tbody, tfoot)",
      "Cell Spanning (colspan, rowspan)",
      "Column Styling (colgroup, col)",
      "Table Accessibility",
      "scope Attribute",
      "Table Captions",
      "Complex Table Layouts",
      "Semantic Table Markup"
    ],
    "topicLinks": [
      {
        "topicName": "Table Structure (thead, tbody, tfoot)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      },
      {
        "topicName": "Cell Spanning (colspan, rowspan)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#colspan"
      },
      {
        "topicName": "Column Styling (colgroup, col)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup"
      },
      {
        "topicName": "Table Accessibility",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced"
      },
      {
        "topicName": "scope Attribute",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope"
      },
      {
        "topicName": "Table Captions",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption"
      },
      {
        "topicName": "Complex Table Layouts",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables"
      },
      {
        "topicName": "Semantic Table Markup",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      }
    ],
    "assessmentId": 11,
    "assessmentUniqueId": 1763029066047,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the primary purpose of using <pre><thead></pre>, <pre><tbody></pre>, and <pre><tfoot></pre> elements in a table?",
      "options": {
        "A": "To improve page load performance by lazy-loading table sections",
        "B": "To enable automatic pagination of long tables",
        "C": "To apply different CSS styles automatically based on row position",
        "D": "To provide semantic grouping of table content and enable features like fixed headers and footers when scrolling"
      },
      "correct": "D",
      "explanation": "The <pre><thead></pre>, <pre><tbody></pre>, and <pre><tfoot></pre> elements provide semantic grouping of table rows. This semantic structure allows browsers to implement features like keeping headers and footers visible when scrolling through long tables. It also helps assistive technologies understand the table structure better. While you can style these sections differently with CSS, the primary purpose is semantic organization. These elements don't provide automatic pagination or lazy-loading; those would require JavaScript. The semantic grouping also helps when printing long tables, as browsers can repeat headers and footers on each printed page.",
      "topics": [
        "Table Structure (thead, tbody, tfoot)"
      ]
    },
    {
      "id": 2,
      "question": "When using <pre>colspan</pre> on a table cell, what happens to the table layout?",
      "options": {
        "A": "The cell spans across multiple columns, and you must reduce the number of cells in that row accordingly",
        "B": "The cell creates extra columns that extend beyond the table's original width",
        "C": "The cell content is automatically split across the specified number of columns",
        "D": "The cell height increases proportionally to the colspan value"
      },
      "correct": "A",
      "explanation": "The <pre>colspan</pre> attribute causes a cell to span across multiple columns horizontally. When you use <pre>colspan=\"3\"</pre>, that single cell occupies the space of three columns. Importantly, you must account for this in your table structure by reducing the total number of <pre><td></pre> or <pre><th></pre> elements in that row. If a normal row has 5 cells and one cell has <pre>colspan=\"3\"</pre>, you would only have 3 cell elements in that row (the spanning cell plus 2 regular cells). The attribute doesn't create extra columns beyond the table width, doesn't split content, and doesn't affect cell height.",
      "topics": [
        "Cell Spanning (colspan, rowspan)"
      ]
    },
    {
      "id": 3,
      "question": "What is the correct usage of the <pre>scope</pre> attribute on table header cells?",
      "options": {
        "A": "It limits the number of data cells that can appear under that header",
        "B": "It defines which CSS styles should apply to the header cell",
        "C": "It specifies whether the header applies to a row, column, row group, or column group for accessibility",
        "D": "It controls whether the header is visible when scrolling"
      },
      "correct": "C",
      "explanation": "The <pre>scope</pre> attribute on <pre><th></pre> elements explicitly defines the relationship between header cells and data cells for assistive technologies. The valid values are <pre>row</pre> (header applies to its row), <pre>col</pre> (header applies to its column), <pre>rowgroup</pre> (header applies to a group of rows), and <pre>colgroup</pre> (header applies to a group of columns). This is crucial for screen reader users who need to understand which headers apply to which data cells. For simple tables, browsers can often infer these relationships, but explicit <pre>scope</pre> attributes make tables more accessible and remove ambiguity. It has no relation to CSS styling, cell limits, or scrolling behavior.",
      "topics": [
        "scope Attribute",
        "Table Accessibility"
      ]
    },
    {
      "id": 4,
      "question": "How does <pre>rowspan</pre> differ from <pre>colspan</pre> in table cell spanning?",
      "options": {
        "A": "rowspan is only valid on <pre><th></pre> elements, while colspan works on both <pre><th></pre> and <pre><td></pre>",
        "B": "rowspan spans cells vertically across multiple rows, while colspan spans horizontally across columns",
        "C": "rowspan requires JavaScript to function, while colspan is pure HTML",
        "D": "rowspan automatically merges cell content, while colspan keeps content separate"
      },
      "correct": "B",
      "explanation": "The <pre>rowspan</pre> attribute causes a cell to span vertically across multiple rows, while <pre>colspan</pre> spans horizontally across multiple columns. Both attributes work on both <pre><th></pre> and <pre><td></pre> elements. When using <pre>rowspan=\"3\"</pre>, the cell occupies the vertical space of three rows, and you must omit the corresponding cells in the subsequent rows at that column position. Neither attribute requires JavaScript or automatically merges content—they simply extend the physical space a single cell occupies. You can combine both attributes on the same cell to span both rows and columns simultaneously, creating complex table layouts.",
      "topics": [
        "Cell Spanning (colspan, rowspan)"
      ]
    },
    {
      "id": 5,
      "question": "What is the purpose of the <pre><colgroup></pre> and <pre><col></pre> elements in HTML tables?",
      "options": {
        "A": "To enforce data validation rules for table columns",
        "B": "To enable automatic column sorting functionality",
        "C": "To create responsive columns that collapse on mobile devices",
        "D": "To define column-specific attributes and styling without adding classes to individual cells"
      },
      "correct": "D",
      "explanation": "The <pre><colgroup></pre> element groups columns together, and <pre><col></pre> elements within it define attributes for entire columns. This allows you to apply styling or attributes to all cells in a column without adding classes or styles to each individual <pre><td></pre> or <pre><th></pre> element. For example, you can set background colors, widths, or other CSS properties. While <pre><col></pre> has limited CSS support (mainly background, borders, width, and visibility), it's useful for consistent column formatting. These elements don't provide sorting, responsive behavior, or validation—those features require CSS or JavaScript. The <pre><colgroup></pre> can also have a <pre>span</pre> attribute to apply properties to multiple consecutive columns.",
      "topics": [
        "Column Styling (colgroup, col)"
      ]
    },
    {
      "id": 6,
      "question": "Where must the <pre><caption></pre> element be placed in a table, and what is its primary purpose?",
      "options": {
        "A": "Anywhere inside the table; it provides a tooltip when hovering over the table",
        "B": "After <pre><tfoot></pre>; it provides summary statistics for the table data",
        "C": "Inside <pre><thead></pre>; it labels the header section specifically",
        "D": "As the first child of the <pre><table></pre> element; it provides a visible title and context for the table"
      },
      "correct": "D",
      "explanation": "The <pre><caption></pre> element must be the first child of the <pre><table></pre> element, placed immediately after the opening <pre><table></pre> tag. It provides a visible title or description for the table, which is important for both sighted users and assistive technologies. Screen readers announce the caption to help users understand the table's purpose before diving into its content. By default, the caption is visually centered above the table, but you can style it with CSS (including the <pre>caption-side</pre> property to move it below). It's not a tooltip, doesn't belong in <pre><thead></pre>, and isn't meant for summary statistics (though it could include descriptive text about the table's content).",
      "topics": [
        "Table Captions",
        "Table Accessibility"
      ]
    },
    {
      "id": 7,
      "question": "When creating an accessible data table with both row and column headers, what is the recommended approach?",
      "options": {
        "A": "Use <pre><th></pre> elements with appropriate <pre>scope</pre> attributes to identify header cells",
        "B": "Use <pre><td></pre> elements with <pre>class=\"header\"</pre> and bold styling",
        "C": "Place all headers in a separate table above the data table",
        "D": "Use ARIA attributes exclusively without <pre><th></pre> elements"
      },
      "correct": "A",
      "explanation": "For accessible tables, use <pre><th></pre> elements for header cells and include the <pre>scope</pre> attribute to explicitly define whether each header applies to a row (<pre>scope=\"row\"</pre>) or column (<pre>scope=\"col\"</pre>). This semantic markup allows assistive technologies to correctly announce the relationship between headers and data cells. For simple tables, <pre><th></pre> alone may be sufficient, but <pre>scope</pre> removes ambiguity. Using <pre><td></pre> with styling doesn't provide semantic meaning. Separate tables or ARIA-only approaches are more complex and not recommended when semantic HTML can handle the job. For very complex tables with multi-level headers, you might need the <pre>headers</pre> attribute or <pre>id</pre> references, but <pre><th></pre> with <pre>scope</pre> is the foundation.",
      "topics": [
        "Table Accessibility",
        "scope Attribute"
      ]
    },
    {
      "id": 8,
      "question": "What happens when you set <pre>colspan=\"0\"</pre> on a table cell?",
      "options": {
        "A": "The cell is hidden from display",
        "B": "The cell spans from its position to the end of the current column group",
        "C": "It causes a validation error; colspan must be a positive integer",
        "D": "The cell returns to normal width (no spanning)"
      },
      "correct": "B",
      "explanation": "The special value <pre>colspan=\"0\"</pre> makes the cell span from its current position to the end of the current column group (defined by <pre><colgroup></pre>). If there's no column group, it spans to the end of the table. This is useful for creating flexible table layouts where you want a cell to automatically span the remaining columns without hardcoding the exact number. However, browser support for this feature has been inconsistent historically, so it's less commonly used in practice. Most developers prefer explicit numeric values for <pre>colspan</pre> to ensure predictable behavior. The value 0 is technically valid HTML5, not a validation error, and doesn't hide the cell or reset its width.",
      "topics": [
        "Cell Spanning (colspan, rowspan)",
        "Complex Table Layouts"
      ]
    },
    {
      "id": 9,
      "question": "In a table with <pre><thead></pre>, <pre><tbody></pre>, and <pre><tfoot></pre>, what is the correct order these elements should appear in the HTML markup?",
      "options": {
        "A": "The order must be <pre><thead></pre>, <pre><tbody></pre>, <pre><tfoot></pre>",
        "B": "The order can be any sequence; the browser will render them correctly",
        "C": "Either <pre><thead></pre>, <pre><tbody></pre>, <pre><tfoot></pre> or <pre><thead></pre>, <pre><tfoot></pre>, <pre><tbody></pre> are valid",
        "D": "The order must be <pre><thead></pre>, <pre><tfoot></pre>, <pre><tbody></pre>"
      },
      "correct": "C",
      "explanation": "In HTML5, both orderings are valid: <pre><thead></pre>, <pre><tbody></pre>, <pre><tfoot></pre> or <pre><thead></pre>, <pre><tfoot></pre>, <pre><tbody></pre>. Historically, HTML4 required <pre><tfoot></pre> to appear before <pre><tbody></pre> so browsers could render the footer while still loading body rows in long tables. HTML5 relaxed this requirement, allowing the more intuitive order. Regardless of the source order in your HTML, browsers will render the footer at the bottom of the table visually. The semantic meaning remains the same. However, for maintainability and readability, most developers prefer the logical order: thead, tbody, tfoot. If you have multiple <pre><tbody></pre> elements (which is valid), they all go between thead and tfoot.",
      "topics": [
        "Table Structure (thead, tbody, tfoot)",
        "Semantic Table Markup"
      ]
    },
    {
      "id": 10,
      "question": "Which CSS properties can be reliably applied to <pre><col></pre> elements for column styling?",
      "options": {
        "A": "All CSS properties work normally on <pre><col></pre> elements",
        "B": "Only <pre>background</pre>, <pre>border</pre>, <pre>width</pre>, and <pre>visibility</pre> are reliably supported",
        "C": "Only <pre>width</pre> can be applied; all other properties are ignored",
        "D": "No CSS properties are supported; <pre><col></pre> is purely semantic"
      },
      "correct": "B",
      "explanation": "The <pre><col></pre> element has limited CSS support. According to the specification, only a few properties reliably work: <pre>background</pre> (background color and images), <pre>border</pre> (if <pre>border-collapse</pre> is set on the table), <pre>width</pre> (to set column width), and <pre>visibility</pre> (to hide columns). Other CSS properties like padding, margin, font properties, or color are generally ignored because <pre><col></pre> doesn't actually contain content—the individual cells do. This limitation exists because <pre><col></pre> is a structural element that affects layout but doesn't hold data. For other styling needs, you'll need to target the actual <pre><td></pre> and <pre><th></pre> elements, possibly using CSS selectors like <pre>td:nth-child(n)</pre>.",
      "topics": [
        "Column Styling (colgroup, col)"
      ]
    },
    {
      "id": 11,
      "question": "What is the correct way to create a table cell that spans 2 rows and 3 columns simultaneously?",
      "options": {
        "A": "<pre><td span=\"2,3\"></pre>",
        "B": "<pre><td span-row=\"2\" span-col=\"3\"></pre>",
        "C": "<pre><td rowspan=\"2\" colspan=\"3\"></pre>",
        "D": "<pre><td rows=\"2\" cols=\"3\"></pre>"
      },
      "correct": "C",
      "explanation": "To span both rows and columns, combine both <pre>rowspan</pre> and <pre>colspan</pre> attributes on the same cell: <pre><td rowspan=\"2\" colspan=\"3\"></pre>. This creates a cell that occupies the vertical space of 2 rows and the horizontal space of 3 columns. When calculating the cells in subsequent rows, you must account for this spanning cell by omitting the cells it occupies. For example, if the spanning cell is in the first column of a 5-column table, the next row would only have 2 <pre><td></pre> elements (since the spanning cell already occupies 3 of the 5 columns, and it spans down into this row). There are no combined <pre>span</pre> attributes or alternative syntaxes like <pre>rows</pre> or <pre>cols</pre>.",
      "topics": [
        "Cell Spanning (colspan, rowspan)",
        "Complex Table Layouts"
      ]
    },
    {
      "id": 12,
      "question": "For a complex table with nested headers, what is the most accessible approach when <pre>scope</pre> alone is insufficient?",
      "options": {
        "A": "Use the <pre>headers</pre> attribute on data cells, referencing the <pre>id</pre> values of all relevant header cells",
        "B": "Split the complex table into multiple simpler tables",
        "C": "Use nested <pre><table></pre> elements inside cells",
        "D": "Add <pre>aria-label</pre> to every cell with a description of its headers"
      },
      "correct": "A",
      "explanation": "For complex tables where <pre>scope</pre> is insufficient (such as tables with multi-level headers or headers that aren't in the first row/column), use the <pre>headers</pre> attribute on <pre><td></pre> elements. Each header cell gets a unique <pre>id</pre>, and data cells use <pre>headers</pre> to list all applicable header IDs separated by spaces: <pre><td headers=\"header1 header2 header3\"></pre>. This explicitly defines the relationship between data and all its headers. While splitting into simpler tables might work for some cases, it changes the data structure and may not be appropriate. Nested tables create accessibility issues and should be avoided. Adding <pre>aria-label</pre> to every cell is overly verbose and less effective than the native <pre>headers</pre> mechanism that assistive technologies are designed to use.",
      "topics": [
        "Table Accessibility",
        "Complex Table Layouts"
      ]
    },
    {
      "id": 13,
      "question": "What does the <pre>span</pre> attribute do when used on a <pre><colgroup></pre> element?",
      "options": {
        "A": "It defines how many row groups the column group applies to",
        "B": "It sets the width of each column in pixels",
        "C": "It determines how many cells can be merged in that column group",
        "D": "It specifies the number of consecutive columns the column group represents"
      },
      "correct": "D",
      "explanation": "The <pre>span</pre> attribute on <pre><colgroup></pre> specifies how many consecutive columns that group represents. For example, <pre><colgroup span=\"3\"></pre> defines a group of 3 columns. This is useful when you want to apply the same attributes or styling to multiple consecutive columns without creating individual <pre><col></pre> elements. Note that if a <pre><colgroup></pre> contains child <pre><col></pre> elements, the <pre>span</pre> attribute is ignored, and the number of columns is determined by the number of <pre><col></pre> children. The <pre>span</pre> attribute doesn't relate to row groups, pixel widths, or cell merging—it's purely about grouping multiple columns for styling or structural purposes.",
      "topics": [
        "Column Styling (colgroup, col)"
      ]
    },
    {
      "id": 14,
      "question": "When should you use multiple <pre><tbody></pre> elements in a single table?",
      "options": {
        "A": "Never; tables can only have one <pre><tbody></pre> element",
        "B": "When you want to logically group related rows, such as separating data by category or applying borders between groups",
        "C": "Only when the table has more than 100 rows for performance reasons",
        "D": "When you need to apply different JavaScript event handlers to different row groups"
      },
      "correct": "B",
      "explanation": "HTML allows multiple <pre><tbody></pre> elements in a single table, which is useful for logically grouping related rows. For example, you might group sales data by quarter, with each quarter in its own <pre><tbody></pre>, allowing you to apply borders or styling between groups easily. This semantic grouping also helps with accessibility and CSS targeting. Unlike the restriction of having only one <pre><thead></pre> and <pre><tfoot></pre>, you can have as many <pre><tbody></pre> sections as needed. The grouping isn't related to row count thresholds or performance—it's about semantic organization. While you could use multiple tbody elements to simplify JavaScript event handling, that's a side benefit rather than the primary use case.",
      "topics": [
        "Table Structure (thead, tbody, tfoot)",
        "Semantic Table Markup"
      ]
    },
    {
      "id": 15,
      "question": "What is the difference between <pre>scope=\"row\"</pre> and <pre>scope=\"rowgroup\"</pre> on a header cell?",
      "options": {
        "A": "They are equivalent; both apply to the entire row",
        "B": "<pre>scope=\"row\"</pre> applies to cells in the same row; <pre>scope=\"rowgroup\"</pre> applies to all rows in the current row group (thead, tbody, or tfoot)",
        "C": "<pre>scope=\"rowgroup\"</pre> is only valid inside <pre><thead></pre>",
        "D": "<pre>scope=\"row\"</pre> spans one row; <pre>scope=\"rowgroup\"</pre> automatically adds <pre>rowspan</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>scope=\"row\"</pre> attribute indicates that a header cell applies only to cells within the same row. In contrast, <pre>scope=\"rowgroup\"</pre> indicates the header applies to all rows within the current row group section (<pre><thead></pre>, <pre><tbody></pre>, or <pre><tfoot></pre>). This distinction is important for complex tables. For example, if you have a header at the start of a <pre><tbody></pre> that categorizes all rows in that body section, use <pre>scope=\"rowgroup\"</pre>. The <pre>rowgroup</pre> value can be used in any section, not just <pre><thead></pre>. These <pre>scope</pre> values don't affect spanning or visual layout—they only provide semantic information for assistive technologies to understand header relationships.",
      "topics": [
        "scope Attribute",
        "Table Accessibility"
      ]
    },
    {
      "id": 16,
      "question": "How can you style alternate row groups when using multiple <pre><tbody></pre> elements?",
      "options": {
        "A": "Use <pre>tbody:nth-child(odd)</pre> and <pre>tbody:nth-child(even)</pre> CSS selectors",
        "B": "Use <pre>tbody:nth-of-type(odd)</pre> and <pre>tbody:nth-of-type(even)</pre> CSS selectors",
        "C": "Add <pre>class=\"odd\"</pre> or <pre>class=\"even\"</pre> manually; CSS can't target tbody elements",
        "D": "Use <pre>tr:nth-child(odd)</pre> which automatically accounts for tbody boundaries"
      },
      "correct": "B",
      "explanation": "To style alternate <pre><tbody></pre> elements, use the <pre>:nth-of-type()</pre> pseudo-class: <pre>tbody:nth-of-type(odd)</pre> and <pre>tbody:nth-of-type(even)</pre>. The <pre>:nth-child()</pre> selector counts all children of the parent, including <pre><thead></pre> and <pre><tfoot></pre>, which could throw off your alternating pattern. The <pre>:nth-of-type()</pre> selector only counts elements of the specified type (tbody), making it reliable for this use case. CSS can definitely target tbody elements—there's no need for manual classes (though classes work fine if you prefer). Using <pre>tr:nth-child()</pre> would alternate individual rows, not row groups, and wouldn't respect tbody boundaries since it counts tr elements across the entire table.",
      "topics": [
        "Table Structure (thead, tbody, tfoot)",
        "Complex Table Layouts"
      ]
    },
    {
      "id": 17,
      "question": "What accessibility issue arises when using tables for layout purposes instead of data presentation?",
      "options": {
        "A": "Tables always load slower than CSS layouts",
        "B": "Tables for layout cause the page to fail HTML validation",
        "C": "Screen readers announce table structure (rows, columns, headers), confusing users when the content isn't actually tabular data",
        "D": "Layout tables cannot be styled with CSS"
      },
      "correct": "C",
      "explanation": "When tables are used for layout rather than data, screen readers announce table semantics (\"table with 3 columns and 5 rows\", navigating by row/column) even though the content isn't actually tabular data. This creates confusion and a poor user experience for screen reader users. The solution is to use CSS for layout (flexbox, grid, etc.) and reserve tables exclusively for actual tabular data. If you must use a table for layout (which is strongly discouraged), you could add <pre>role=\"presentation\"</pre> or <pre>role=\"none\"</pre> to remove the table semantics, but it's better to use proper CSS layout techniques. Tables don't inherently load slower, can be styled with CSS, and aren't invalid HTML for layout (just bad practice). Modern web development uses semantic HTML, where elements match their content's meaning.",
      "topics": [
        "Table Accessibility",
        "Semantic Table Markup"
      ]
    },
    {
      "id": 18,
      "question": "When a cell has <pre>rowspan=\"3\"</pre>, what must you remember when coding subsequent rows?",
      "options": {
        "A": "Omit the cell at that column position in the next 2 rows, as the spanning cell already occupies that space",
        "B": "Nothing special; the browser automatically handles cell positioning",
        "C": "Add <pre>rowspan=\"0\"</pre> to cells in subsequent rows at that column",
        "D": "Add empty cells with <pre><td></td></pre> in subsequent rows at that column position"
      },
      "correct": "A",
      "explanation": "When a cell has <pre>rowspan=\"3\"</pre>, it occupies vertical space across 3 rows. In the next 2 rows, you must omit the cell at that column position because the spanning cell already fills that space. For example, if row 1 has a cell in column 2 with <pre>rowspan=\"3\"</pre>, rows 2 and 3 should have one fewer cell, with no cell in the second column position. Adding empty <pre><td></td></pre> elements would create extra cells and break the table layout. There's no <pre>rowspan=\"0\"</pre> needed in subsequent rows—that's not how rowspan works. While browsers can sometimes recover from mistakes, you must explicitly structure your HTML correctly by omitting cells in the spanned positions.",
      "topics": [
        "Cell Spanning (colspan, rowspan)",
        "Complex Table Layouts"
      ]
    },
    {
      "id": 19,
      "question": "What is the correct semantic usage of <pre><th></pre> vs <pre><td></pre> in table cells?",
      "options": {
        "A": "<pre><th></pre> for header cells (labels), <pre><td></pre> for data cells (values)",
        "B": "<pre><th></pre> for the first row and column, <pre><td></pre> for all other cells",
        "C": "<pre><th></pre> only in <pre><thead></pre>, <pre><td></pre> only in <pre><tbody></pre>",
        "D": "<pre><th></pre> for bold text, <pre><td></pre> for normal text"
      },
      "correct": "A",
      "explanation": "Use <pre><th></pre> for header cells that label or describe data, and <pre><td></pre> for the actual data cells. This is a semantic distinction about the cell's purpose, not about styling or position. While <pre><th></pre> elements are commonly in <pre><thead></pre>, they can appear anywhere in the table—including in <pre><tbody></pre> as row headers. For example, in a table showing monthly sales by region, the region names in the first column would be <pre><th scope=\"row\"></pre> even though they're in <pre><tbody></pre>. The default bold rendering of <pre><th></pre> is presentational; the important part is the semantic meaning that helps assistive technologies. You could have a table with <pre><th></pre> elements as both column headers and row headers, creating a grid of data cells in the middle.",
      "topics": [
        "Semantic Table Markup",
        "Table Accessibility"
      ]
    },
    {
      "id": 20,
      "question": "How does the <pre>caption-side</pre> CSS property affect table captions?",
      "options": {
        "A": "It determines the caption's font size relative to the table",
        "B": "It controls whether the caption is visible or hidden",
        "C": "It aligns caption text to left, center, or right",
        "D": "It positions the caption above (<pre>top</pre>) or below (<pre>bottom</pre>) the table"
      },
      "correct": "D",
      "explanation": "The <pre>caption-side</pre> CSS property controls whether the <pre><caption></pre> appears above or below the table. Valid values are <pre>top</pre> (default, caption above table) and <pre>bottom</pre> (caption below table). This doesn't affect visibility—use <pre>display: none</pre> or <pre>visibility: hidden</pre> for that. It also doesn't control text alignment (use <pre>text-align</pre> for that) or font size (use <pre>font-size</pre>). The property only affects vertical positioning. Some older browser implementations supported additional values like <pre>left</pre> and <pre>right</pre>, but these were never standardized. The caption remains semantically associated with the table regardless of visual position, maintaining accessibility.",
      "topics": [
        "Table Captions"
      ]
    },
    {
      "id": 21,
      "question": "What is a common use case for <pre><colgroup></pre> without any <pre><col></pre> children, using only the <pre>span</pre> attribute?",
      "options": {
        "A": "To hide multiple columns at once",
        "B": "To create column dividers or borders",
        "C": "To make columns sortable",
        "D": "To apply the same background color or styling to a group of consecutive columns"
      },
      "correct": "D",
      "explanation": "Using <pre><colgroup span=\"3\" style=\"background-color: lightblue;\"></pre> without child <pre><col></pre> elements applies the same styling to 3 consecutive columns efficiently. This is simpler than creating three separate <pre><col></pre> elements when they all need identical styling. You can have multiple <pre><colgroup></pre> elements to style different column groups differently, such as highlighting every third column or distinguishing between different data categories. This approach doesn't hide columns (use <pre>visibility: collapse</pre> on <pre><col></pre> for that), doesn't create sortability (that requires JavaScript), and while you could style borders, the primary use is applying uniform styling to column groups.",
      "topics": [
        "Column Styling (colgroup, col)"
      ]
    },
    {
      "id": 22,
      "question": "In a table representing a schedule with time slots as rows and days as columns, what <pre>scope</pre> values should be used?",
      "options": {
        "A": "Time headers with <pre>scope=\"row\"</pre>, day headers with <pre>scope=\"col\"</pre>",
        "B": "All headers should use <pre>scope=\"rowgroup\"</pre>",
        "C": "Time headers with <pre>scope=\"col\"</pre>, day headers with <pre>scope=\"row\"</pre>",
        "D": "No scope attributes needed; the table structure is self-explanatory"
      },
      "correct": "A",
      "explanation": "In a schedule table where time slots are rows and days are columns, the time headers (in the first column) should have <pre>scope=\"row\"</pre> because each time label applies to the entire row across all days. The day headers (in the first row) should have <pre>scope=\"col\"</pre> because each day label applies to the entire column down through all time slots. This semantic markup helps screen reader users understand that a data cell at the intersection of \"Monday\" and \"2:00 PM\" represents Monday at 2 PM. While simple tables might seem self-explanatory visually, explicit <pre>scope</pre> attributes remove ambiguity for assistive technologies and are considered a best practice for accessibility.",
      "topics": [
        "scope Attribute",
        "Table Accessibility"
      ]
    },
    {
      "id": 23,
      "question": "What happens if you use both <pre><col></pre> elements inside <pre><colgroup></pre> and also set a <pre>span</pre> attribute on the <pre><colgroup></pre>?",
      "options": {
        "A": "The <pre>span</pre> attribute is ignored; the number of <pre><col></pre> children determines the column count",
        "B": "The <pre>col</pre> elements are ignored; the <pre>span</pre> attribute takes precedence",
        "C": "Each <pre><col></pre> element is repeated according to the <pre>span</pre> value",
        "D": "It causes a validation error; you cannot mix both approaches"
      },
      "correct": "A",
      "explanation": "When a <pre><colgroup></pre> contains <pre><col></pre> children, the <pre>span</pre> attribute on the <pre><colgroup></pre> is ignored. The number and properties of columns are determined by the <pre><col></pre> elements themselves. Each <pre><col></pre> can have its own <pre>span</pre> attribute if needed. This allows for flexible column definitions within a group. You can use either approach (colgroup with span, or colgroup with col children), but not both simultaneously on the same colgroup. This isn't a validation error—the specification explicitly defines this precedence behavior. Use individual <pre><col></pre> elements when you need different styling for each column, and use <pre>span</pre> when all columns in the group are identical.",
      "topics": [
        "Column Styling (colgroup, col)",
        "Semantic Table Markup"
      ]
    },
    {
      "id": 24,
      "question": "For a complex table with both horizontal and vertical headers, what is the minimum accessibility requirement?",
      "options": {
        "A": "Use only <pre><td></pre> elements with bold styling for headers",
        "B": "Use <pre><th></pre> elements for all headers, and include <pre>scope</pre> attributes to clarify header directions",
        "C": "Split the table into separate tables for horizontal and vertical sections",
        "D": "Use <pre>role=\"table\"</pre> and ARIA attributes instead of semantic HTML"
      },
      "correct": "B",
      "explanation": "For tables with both horizontal and vertical headers, use <pre><th></pre> elements for all headers (not <pre><td></pre> with styling), and include <pre>scope</pre> attributes to explicitly indicate whether each header applies to a row or column. Column headers should have <pre>scope=\"col\"</pre>, and row headers should have <pre>scope=\"row\"</pre>. This semantic markup, combined with clear scope definitions, allows screen readers to correctly announce header-cell relationships as users navigate the table. Splitting tables changes the data structure and may not represent the information correctly. While ARIA attributes can supplement accessibility, native semantic HTML (<pre><th></pre> with <pre>scope</pre>) should be the foundation. For very complex tables, you might add the <pre>headers</pre> attribute to data cells.",
      "topics": [
        "Table Accessibility",
        "Complex Table Layouts"
      ]
    },
    {
      "id": 25,
      "question": "What is the proper way to add a summary or description to a table for accessibility purposes?",
      "options": {
        "A": "Use the deprecated <pre>summary</pre> attribute on the <pre><table></pre> element",
        "B": "Include a <pre><div></pre> with the description directly before the table",
        "C": "Add a <pre>title</pre> attribute to the <pre><table></pre> element",
        "undefined": "Use a <pre><caption></pre> element with descriptive text, or use <pre>aria-describedby</pre> referencing an element with the description"
      },
      "explanation": "The <pre>summary</pre> attribute was deprecated in HTML5. Modern best practices recommend using the <pre><caption></pre> element for visible descriptions, which helps all users, not just screen reader users. If you need a longer description that shouldn't be visually prominent, use <pre>aria-describedby</pre> on the <pre><table></pre> element, pointing to the <pre>id</pre> of a paragraph or div containing the detailed description. The <pre>title</pre> attribute is not reliably accessible and shouldn't be relied upon. A <pre><div></pre> before the table might be visible but isn't semantically associated with the table, so assistive technologies won't know it's related. The <pre>caption</pre> element is semantically linked to its table and is the preferred method when the description should be visible.",
      "topics": [
        "Table Accessibility",
        "Table Captions"
      ]
    }
  ]
}
