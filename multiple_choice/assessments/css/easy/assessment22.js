module.exports = {
    "metadata": {
        "title": "CSS Grid Layout Continued",
        "description": "Continue exploring CSS Grid Layout with grid areas, alignment, auto-placement, and grid item properties. Build on grid fundamentals with practical layout techniques.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 22,
        "assessmentUniqueId": 1763068314317,
        "testType": "multiple-choice",
        "topics": [
            "Grid Template Areas",
            "Grid Area Property",
            "Grid Auto Flow",
            "Grid Auto Rows and Columns",
            "Justify Items",
            "Align Content",
            "Justify Self",
            "Align Self",
            "Grid Item Order",
            "Named Grid Lines"
        ],
        "topicLinks": [
            {
                "topicName": "Grid Template Areas",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"
            },
            {
                "topicName": "Grid Area Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area"
            },
            {
                "topicName": "Grid Auto Flow",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"
            },
            {
                "topicName": "Grid Auto Rows and Columns",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows"
            },
            {
                "topicName": "Justify Items",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"
            },
            {
                "topicName": "Align Content",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
            },
            {
                "topicName": "Justify Self",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"
            },
            {
                "topicName": "Align Self",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"
            },
            {
                "topicName": "Grid Item Order",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/order"
            },
            {
                "topicName": "Named Grid Lines",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines"
            }
        ],
        "keywords": [
            "grid-template-areas",
            "grid-area",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-auto-columns",
            "justify-items",
            "align-items",
            "justify-content",
            "align-content",
            "justify-self",
            "align-self",
            "dense",
            "named lines",
            "grid item placement",
            "grid alignment",
            "grid auto-placement",
            "grid shorthand",
            "order property",
            "grid template",
            "implicit grid",
            "explicit grid",
            "grid layout",
            "responsive grid",
            "grid positioning",
            "grid spacing"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What does the <pre>grid-template-areas</pre> property allow you to define?",
            "options": {
                "A": "Named grid areas using a visual ASCII representation",
                "B": "The size of grid columns only",
                "C": "The gap between grid items",
                "D": "The alignment of grid items"
            },
            "correct": "B",
            "explanation": "The grid-template-areas property allows you to define named grid areas using a visual ASCII-art style representation, making it easy to visualize the layout structure directly in CSS.",
            "topic": "Grid Template Areas"
        },
        {
            "id": 2,
            "question": "In grid-template-areas, what does a period (.) represent?",
            "options": {
                "A": "A grid line separator",
                "B": "A margin between cells",
                "C": "An empty grid cell",
                "D": "A border around the cell"
            },
            "correct": "C",
            "explanation": "In grid-template-areas, a period (.) represents an empty or unnamed grid cell that won't contain any named area.",
            "topic": "Grid Template Areas"
        },
        {
            "id": 3,
            "question": "Which property is used to place a grid item into a named grid area?",
            "options": {
                "A": "grid-position",
                "B": "area-name",
                "C": "grid-name",
                "D": "grid-area"
            },
            "correct": "D",
            "explanation": "The grid-area property is used to place a grid item into a named grid area defined by grid-template-areas, or as shorthand for grid-row-start/grid-column-start/grid-row-end/grid-column-end.",
            "topic": "Grid Area Property"
        },
        {
            "id": 4,
            "question": "What is the default value of the <pre>grid-auto-flow</pre> property?",
            "options": {
                "A": "row",
                "B": "column",
                "C": "dense",
                "D": "auto"
            },
            "correct": "A",
            "explanation": "The default value of grid-auto-flow is 'row', which means auto-placed items fill in row by row, creating new rows as needed.",
            "topic": "Grid Auto Flow"
        },
        {
            "id": 5,
            "question": "What does <pre>grid-auto-flow: dense</pre> do?",
            "options": {
                "A": "Makes grid items smaller",
                "B": "Increases the gap between items",
                "C": "Attempts to fill holes in the grid with smaller items",
                "D": "Compresses all grid items"
            },
            "correct": "A",
            "explanation": "The 'dense' keyword in grid-auto-flow tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later, potentially changing visual order.",
            "topic": "Grid Auto Flow"
        },
        {
            "id": 6,
            "question": "What does the <pre>grid-auto-rows</pre> property define?",
            "options": {
                "A": "The width of automatically created columns",
                "B": "The height of explicitly defined rows",
                "C": "The height of implicitly created rows",
                "D": "The number of rows in the grid"
            },
            "correct": "B",
            "explanation": "The grid-auto-rows property defines the size (height) of rows that are created implicitly when grid items are placed outside the explicitly defined grid.",
            "topic": "Grid Auto Rows and Columns"
        },
        {
            "id": 7,
            "question": "Which property controls the default horizontal alignment of ALL grid items within their grid areas?",
            "options": {
                "A": "align-items",
                "B": "justify-content",
                "C": "justify-items",
                "D": "align-content"
            },
            "correct": "C",
            "explanation": "The justify-items property (on the grid container) controls the default horizontal (inline-axis) alignment of all grid items within their grid areas.",
            "topic": "Justify Items"
        },
        {
            "id": 8,
            "question": "What is the default value of <pre>justify-items</pre> in a grid container?",
            "options": {
                "A": "center",
                "B": "stretch",
                "C": "start",
                "D": "end"
            },
            "correct": "C",
            "explanation": "The default value of justify-items is 'stretch', which makes grid items stretch to fill the entire width of their grid area.",
            "topic": "Justify Items"
        },
        {
            "id": 9,
            "question": "Which property aligns the entire grid content within the grid container when there's extra space?",
            "options": {
                "A": "justify-items",
                "B": "align-content",
                "C": "align-items",
                "D": "grid-align"
            },
            "correct": "C",
            "explanation": "The align-content property aligns the entire grid vertically within the grid container when the total size of the grid is less than the size of the container.",
            "topic": "Align Content"
        },
        {
            "id": 10,
            "question": "What does <pre>justify-self</pre> allow you to do?",
            "options": {
                "A": "Align all grid items horizontally",
                "B": "Justify text content within a grid item",
                "C": "Align the entire grid container",
                "D": "Align a single grid item horizontally within its grid area"
            },
            "correct": "D",
            "explanation": "The justify-self property allows you to override the justify-items value for a single grid item, controlling its horizontal alignment within its grid area.",
            "topic": "Justify Self"
        },
        {
            "id": 11,
            "question": "Which property would you use to vertically center a single grid item in its grid area?",
            "options": {
                "A": "align-self: center",
                "B": "align-items: center",
                "C": "justify-self: center",
                "D": "vertical-align: center"
            },
            "correct": "D",
            "explanation": "The align-self: center property vertically centers a single grid item within its grid area, overriding the align-items value from the container.",
            "topic": "Align Self"
        },
        {
            "id": 12,
            "question": "Can the <pre>order</pre> property be used with grid items?",
            "options": {
                "A": "No, it only works with flexbox",
                "B": "Only in combination with grid-area",
                "C": "Only with grid-auto-flow: column",
                "D": "Yes, it changes the visual order of grid items"
            },
            "correct": "D",
            "explanation": "Yes, the order property works with grid items (as well as flex items), allowing you to change their visual order without changing the HTML source order.",
            "topic": "Grid Item Order"
        },
        {
            "id": 13,
            "question": "What is the default value of the <pre>order</pre> property?",
            "options": {
                "A": "1",
                "B": "auto",
                "C": "0",
                "D": "-1"
            },
            "correct": "B",
            "explanation": "The default value of the order property is 0. Items are displayed in source order unless you assign different order values.",
            "topic": "Grid Item Order"
        },
        {
            "id": 14,
            "question": "How do you define a named grid line in <pre>grid-template-columns</pre>?",
            "options": {
                "A": "Using #name before the track size",
                "B": "Using [name] before or after the track size",
                "C": "Using (name) after the track size",
                "D": "Using .name before the track size"
            },
            "correct": "B",
            "explanation": "You define named grid lines using square brackets [name] before or after track sizes in grid-template-columns or grid-template-rows.",
            "topic": "Named Grid Lines"
        },
        {
            "id": 15,
            "question": "If you have <pre>grid-template-columns: [start] 1fr [middle] 1fr [end]</pre>, how many columns are created?",
            "options": {
                "A": "1 column",
                "B": "2 columns",
                "C": "3 columns",
                "D": "4 columns"
            },
            "correct": "B",
            "explanation": "This creates 2 columns with 3 named grid lines: 'start' at the beginning, 'middle' between the columns, and 'end' at the end.",
            "topic": "Named Grid Lines"
        },
        {
            "id": 16,
            "question": "What does <pre>grid-auto-columns</pre> specify?",
            "options": {
                "A": "The width of implicitly created columns",
                "B": "The number of columns to create automatically",
                "C": "The width of all columns",
                "D": "The minimum width of columns"
            },
            "correct": "A",
            "explanation": "The grid-auto-columns property specifies the size (width) of columns that are created implicitly when items are placed outside the explicitly defined grid.",
            "topic": "Grid Auto Rows and Columns"
        },
        {
            "id": 17,
            "question": "In grid-template-areas, can a named area span multiple rows or columns?",
            "options": {
                "A": "No, each area must be a single cell",
                "B": "Only across columns, not rows",
                "C": "Yes, by repeating the area name across cells",
                "D": "Only with the span keyword"
            },
            "correct": "C",
            "explanation": "Yes, a named area can span multiple cells by repeating the area name across the desired cells in the grid-template-areas definition. The area must form a rectangle.",
            "topic": "Grid Template Areas"
        },
        {
            "id": 18,
            "question": "What happens if a grid item is placed using <pre>grid-area</pre> but the named area doesn't exist?",
            "options": {
                "A": "The item is hidden",
                "B": "The browser throws an error",
                "C": "The item is auto-placed in the grid",
                "D": "The entire grid is invalidated"
            },
            "correct": "A",
            "explanation": "If a grid item references a non-existent named area, the grid-area property is ignored and the item is auto-placed in the grid according to normal auto-placement rules.",
            "topic": "Grid Area Property"
        },
        {
            "id": 19,
            "question": "Which value for <pre>grid-auto-flow</pre> fills columns before rows?",
            "options": {
                "A": "row",
                "B": "column",
                "C": "vertical",
                "D": "column-first"
            },
            "correct": "B",
            "explanation": "The 'column' value for grid-auto-flow makes auto-placed items fill in column by column instead of row by row.",
            "topic": "Grid Auto Flow"
        },
        {
            "id": 20,
            "question": "What does <pre>justify-content: space-between</pre> do in a grid container?",
            "options": {
                "A": "Adds space between grid items within their areas",
                "B": "Distributes extra horizontal space evenly between columns",
                "C": "Centers the grid horizontally",
                "D": "Stretches columns to fill the container"
            },
            "correct": "B",
            "explanation": "justify-content: space-between distributes extra horizontal space in the grid container evenly between the columns, with no space at the edges.",
            "topic": "Justify Items"
        },
        {
            "id": 21,
            "question": "Can you use both <pre>grid-template-areas</pre> and line-based placement (<pre>grid-column</pre>) in the same grid?",
            "options": {
                "A": "No, you must choose one approach",
                "B": "Yes, but grid-template-areas takes precedence",
                "C": "Yes, they can be used together",
                "D": "Only if grid-auto-flow is set to dense"
            },
            "correct": "B",
            "explanation": "Yes, you can use both grid-template-areas and line-based placement together in the same grid. They're complementary techniques.",
            "topic": "Grid Template Areas"
        },
        {
            "id": 22,
            "question": "What is the shorthand order for the <pre>grid-area</pre> property when using line numbers?",
            "options": {
                "A": "column-start / row-start / column-end / row-end",
                "B": "start-row / start-column / end-row / end-column",
                "C": "top / right / bottom / left",
                "D": "row-start / column-start / row-end / column-end"
            },
            "correct": "D",
            "explanation": "The grid-area shorthand order is: grid-row-start / grid-column-start / grid-row-end / grid-column-end (row values first, then column values).",
            "topic": "Grid Area Property"
        },
        {
            "id": 23,
            "question": "What does <pre>align-content: start</pre> do in a grid container?",
            "options": {
                "A": "Aligns the entire grid to the top of the container",
                "B": "Aligns items to the start of their grid areas",
                "C": "Aligns text to the start",
                "D": "Creates a new starting grid line"
            },
            "correct": "A",
            "explanation": "align-content: start aligns the entire grid content to the top (start) of the grid container when there's extra vertical space.",
            "topic": "Align Content"
        },
        {
            "id": 24,
            "question": "Which property controls both <pre>align-items</pre> and <pre>justify-items</pre> at once?",
            "options": {
                "A": "grid-items",
                "B": "place-items",
                "C": "align-justify",
                "D": "grid-align"
            },
            "correct": "B",
            "explanation": "The place-items property is a shorthand that sets both align-items and justify-items in one declaration.",
            "topic": "Justify Items"
        },
        {
            "id": 25,
            "question": "If a grid item has <pre>grid-column: 2 / 4</pre>, how many columns does it span?",
            "options": {
                "A": "1 column",
                "B": "4 columns",
                "C": "3 columns",
                "D": "2 columns"
            },
            "correct": "D",
            "explanation": "grid-column: 2 / 4 means the item starts at grid line 2 and ends at grid line 4, spanning 2 columns (columns 2 and 3).",
            "topic": "Grid Area Property"
        },
        {
            "id": 26,
            "question": "What is the difference between the explicit and implicit grid?",
            "options": {
                "A": "Explicit is defined with grid-template-*, implicit is auto-created",
                "B": "There is no difference",
                "C": "Explicit is for columns, implicit is for rows",
                "D": "Implicit grids don't support named areas"
            },
            "correct": "A",
            "explanation": "The explicit grid is defined using grid-template-columns/rows/areas. The implicit grid is automatically created when items are placed outside the explicit grid, sized by grid-auto-rows/columns.",
            "topic": "Grid Auto Rows and Columns"
        },
        {
            "id": 27,
            "question": "Can you have multiple grid lines with the same name?",
            "options": {
                "A": "Yes, and you can target them using [name n] syntax",
                "B": "No, names must be unique",
                "C": "Only if they're on opposite sides of the grid",
                "D": "Only in implicit grids"
            },
            "correct": "A",
            "explanation": "Yes, you can have multiple grid lines with the same name. You can reference them using [name n] where n is the occurrence number (e.g., [col 2] for the second line named 'col').",
            "topic": "Named Grid Lines"
        },
        {
            "id": 28,
            "question": "What does <pre>grid-auto-flow: row dense</pre> do?",
            "options": {
                "A": "Creates denser rows with less spacing",
                "B": "Makes rows automatically resize",
                "C": "Flows items row-by-row and fills holes with later items",
                "D": "Removes gaps between rows"
            },
            "correct": "C",
            "explanation": "grid-auto-flow: row dense places items row-by-row (the default direction) but also attempts to fill in holes earlier in the grid with smaller items that come later.",
            "topic": "Grid Auto Flow"
        },
        {
            "id": 29,
            "question": "Which property would you use to horizontally center the entire grid within its container?",
            "options": {
                "A": "align-content: center",
                "B": "justify-items: center",
                "C": "justify-content: center",
                "D": "text-align: center"
            },
            "correct": "C",
            "explanation": "justify-content: center horizontally centers the entire grid within the grid container when there's extra horizontal space available.",
            "topic": "Justify Items"
        },
        {
            "id": 30,
            "question": "In grid-template-areas, must all rows have the same number of cells?",
            "options": {
                "A": "No, rows can have different cell counts",
                "B": "Only when grid-auto-flow is set to row",
                "C": "Only if using named areas",
                "D": "Yes, all rows must have equal cells to form a rectangle"
            },
            "correct": "D",
            "explanation": "Yes, in grid-template-areas, all rows must have the same number of cells (columns) to form a proper rectangular grid. Unequal rows will invalidate the property.",
            "topic": "Grid Template Areas"
        }
    ]
};
