module.exports = {
  "metadata": {
    "title": "CSS Medium - CSS Grid Layout",
    "description": "Intermediate assessment covering CSS Grid Layout fundamentals: display: grid, grid-template-columns/rows, gap properties, grid-template-areas, grid-column/row placement, fr units, repeat() function, minmax() for responsive tracks, implicit vs explicit grids, and auto-placement algorithm.",
    "difficulty": "medium",
    "domain": "css",
    "timeLimit": 45,
    "questionCount": 25,
    "assessmentId": 6,
    "assessmentUniqueId": 1763115833931,
    "testType": "multiple-choice",
    "topics": [
      "CSS Grid Layout",
      "display: grid",
      "grid-template-columns",
      "grid-template-rows",
      "gap properties",
      "grid-template-areas",
      "grid-column and grid-row",
      "fr unit",
      "repeat() function",
      "minmax()",
      "Implicit vs Explicit Grid",
      "Auto-placement Algorithm"
    ],
    "topicLinks": [
      {
        "topicName": "CSS Grid Layout",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"
      },
      {
        "topicName": "display: grid",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
      },
      {
        "topicName": "grid-template-columns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
      },
      {
        "topicName": "grid-template-rows",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"
      },
      {
        "topicName": "gap properties",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
      },
      {
        "topicName": "grid-template-areas",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"
      },
      {
        "topicName": "grid-column and grid-row",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column"
      },
      {
        "topicName": "fr unit",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#the_fr_unit"
      },
      {
        "topicName": "repeat() function",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/repeat"
      },
      {
        "topicName": "minmax()",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/minmax"
      },
      {
        "topicName": "Implicit vs Explicit Grid",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#the_implicit_and_explicit_grid"
      },
      {
        "topicName": "Auto-placement Algorithm",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout"
      }
    ],
    "keywords": [
      "grid",
      "display: grid",
      "grid-template-columns",
      "grid-template-rows",
      "gap",
      "row-gap",
      "column-gap",
      "grid-gap",
      "grid-template-areas",
      "grid-column",
      "grid-row",
      "fr",
      "repeat",
      "minmax",
      "implicit grid",
      "explicit grid",
      "auto-placement"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What does <pre>display: grid</pre> do to an element?",
      "options": {
        "A": "Makes it a grid item",
        "B": "Applies a background grid pattern",
        "C": "Makes it a grid container with its children as grid items",
        "D": "Enables gridlines for debugging"
      },
      "correct": "C",
      "explanation": "Setting <pre>display: grid</pre> establishes a grid formatting context, making the element a grid container and its direct children become grid items. The container controls the layout of its children using grid properties.",
      "topic": "display: grid"
    },
    {
      "id": 2,
      "question": "What does <pre>grid-template-columns: 100px 200px 100px</pre> create?",
      "options": {
        "A": "Three columns with total width 400px",
        "B": "A single column repeated three times",
        "C": "Three rows",
        "D": "Three columns: 100px, 200px, and 100px wide"
      },
      "correct": "D",
      "explanation": "This creates three explicit column tracks with widths of 100px, 200px, and 100px respectively. Each space-separated value defines one column track. Grid items will be placed into these columns according to the auto-placement algorithm or explicit placement.",
      "topic": "grid-template-columns"
    },
    {
      "id": 3,
      "question": "How does <pre>grid-template-rows: 50px auto 100px</pre> size the three rows?",
      "options": {
        "A": "All rows 50px",
        "B": "First and third 50px, middle 100px",
        "C": "All rows automatic",
        "D": "First row 50px, second row fits content, third row 100px"
      },
      "correct": "D",
      "explanation": "The first row is fixed at 50px, the second row uses <pre>auto</pre> sizing (grows to fit its content), and the third row is fixed at 100px. The <pre>auto</pre> keyword makes a track size based on the largest item in that track.",
      "topic": "grid-template-rows"
    },
    {
      "id": 4,
      "question": "What is the difference between <pre>grid-gap</pre> and <pre>gap</pre>?",
      "options": {
        "A": "<pre>grid-gap</pre> is required for grid layouts",
        "B": "<pre>grid-gap</pre> is faster",
        "C": "<pre>gap</pre> doesn't work in grid",
        "D": "They are identical; <pre>gap</pre> is the modern standard property name"
      },
      "correct": "D",
      "explanation": "<pre>grid-gap</pre> was the original property name for grid layouts. It has been replaced by the shorthand <pre>gap</pre> property which works for both grid and flexbox. Modern CSS should use <pre>gap</pre>, though <pre>grid-gap</pre> still works for backward compatibility.",
      "topic": "gap properties"
    },
    {
      "id": 5,
      "question": "What does <pre>gap: 10px 20px</pre> set?",
      "options": {
        "A": "10px row gap, 20px column gap",
        "B": "10px gap on all sides",
        "C": "20px row gap, 10px column gap",
        "D": "10px top/bottom, 20px left/right padding"
      },
      "correct": "A",
      "explanation": "The <pre>gap</pre> shorthand follows the pattern <pre>gap: row-gap column-gap</pre>. So <pre>gap: 10px 20px</pre> sets 10px spacing between rows and 20px spacing between columns. If only one value is provided, it applies to both.",
      "topic": "gap properties"
    },
    {
      "id": 6,
      "question": "What does this grid-template-areas define?\n[CODE]\ngrid-template-areas:\n  'header header'\n  'sidebar main'\n  'footer footer';\n[/CODE]",
      "options": {
        "A": "Invalid syntax",
        "B": "A 3-column, 2-row layout",
        "C": "Six separate areas",
        "D": "A 2-column, 3-row layout with named areas"
      },
      "correct": "D",
      "explanation": "This creates a grid with 2 columns and 3 rows. The header and footer span both columns (repeated names create spanning areas). The middle row has sidebar in the first column and main in the second. Named areas make it easy to place items using <pre>grid-area: header</pre>.",
      "topic": "grid-template-areas"
    },
    {
      "id": 7,
      "question": "How do you place a grid item to span from column line 1 to line 3?",
      "options": {
        "A": "<pre>grid-column: 1 / 3</pre>",
        "B": "<pre>grid-column: span 2</pre>",
        "C": "<pre>grid-column-start: 1; grid-column-end: 3;</pre>",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "All three methods achieve the same result. <pre>grid-column: 1 / 3</pre> is the shorthand. <pre>span 2</pre> spans 2 tracks from the start. The longhand properties can also be used separately. The item will occupy columns 1 and 2 (up to line 3).",
      "topic": "grid-column and grid-row"
    },
    {
      "id": 8,
      "question": "What does the <pre>fr</pre> unit represent in CSS Grid?",
      "options": {
        "A": "Fixed ratio",
        "B": "Frame rate",
        "C": "A fraction of the available space in the grid container",
        "D": "Font-relative unit"
      },
      "correct": "C",
      "explanation": "The <pre>fr</pre> unit represents a fraction of the available space in the grid container. For example, <pre>grid-template-columns: 1fr 2fr</pre> creates two columns where the second is twice as wide as the first, sharing the available space proportionally.",
      "topic": "fr unit"
    },
    {
      "id": 9,
      "question": "What does <pre>grid-template-columns: 1fr 2fr 1fr</pre> create?",
      "options": {
        "A": "Three columns: first and third are equal, middle is twice as wide",
        "B": "Three equal columns",
        "C": "Three columns totaling 4 units",
        "D": "Four columns"
      },
      "correct": "A",
      "explanation": "This creates three columns sharing the available space in ratio 1:2:1. If the container is 400px wide, the columns would be 100px, 200px, and 100px. The <pre>fr</pre> unit distributes available space proportionally based on the fraction values.",
      "topic": "fr unit"
    },
    {
      "id": 10,
      "question": "What does <pre>repeat(3, 100px)</pre> expand to?",
      "options": {
        "A": "<pre>100px 100px 100px</pre>",
        "B": "<pre>300px</pre>",
        "C": "Three rows of 100px",
        "D": "A single 100px column repeated"
      },
      "correct": "A",
      "explanation": "The <pre>repeat()</pre> function generates repeated track definitions. <pre>repeat(3, 100px)</pre> is equivalent to writing <pre>100px 100px 100px</pre>. This is useful for creating multiple tracks with the same size without repetitive code.",
      "topic": "repeat() function"
    },
    {
      "id": 11,
      "question": "What does <pre>grid-template-columns: repeat(4, 1fr)</pre> create?",
      "options": {
        "A": "Four rows",
        "B": "Four equal-width columns",
        "C": "A single column",
        "D": "Four columns with total width 4fr"
      },
      "correct": "B",
      "explanation": "This creates four columns, each taking up an equal fraction (1fr) of the available space. It's equivalent to <pre>1fr 1fr 1fr 1fr</pre>. The repeat function with fr units is a common pattern for equal-width responsive columns.",
      "topic": "repeat() function"
    },
    {
      "id": 12,
      "question": "What does <pre>minmax(100px, 1fr)</pre> mean for a grid track?",
      "options": {
        "A": "Fixed at 100px",
        "B": "Minimum 100px, maximum 1 fraction of available space",
        "C": "Between 100px and 100% width",
        "D": "Always 1fr"
      },
      "correct": "B",
      "explanation": "The <pre>minmax()</pre> function defines a size range for a track. <pre>minmax(100px, 1fr)</pre> means the track will be at least 100px wide but can grow to take up a proportional share (1fr) of remaining space. This creates flexible yet bounded tracks.",
      "topic": "minmax()"
    },
    {
      "id": 13,
      "question": "What is the purpose of <pre>minmax()</pre> in responsive grid layouts?",
      "options": {
        "A": "To set minimum and maximum values only",
        "B": "To create flexible tracks that respect size constraints",
        "C": "To calculate averages",
        "D": "To create media queries"
      },
      "correct": "B",
      "explanation": "<pre>minmax()</pre> enables responsive behavior by allowing tracks to grow and shrink within defined bounds. For example, <pre>repeat(auto-fit, minmax(250px, 1fr))</pre> creates a responsive grid where columns are at least 250px but grow to fill space.",
      "topic": "minmax()"
    },
    {
      "id": 14,
      "question": "What is the explicit grid?",
      "options": {
        "A": "Grid lines that are visible",
        "B": "The grid that auto-generates",
        "C": "The grid defined by grid-template-columns, grid-template-rows, and grid-template-areas",
        "D": "Grid items with explicit placement"
      },
      "correct": "C",
      "explanation": "The explicit grid is the grid structure you define explicitly using <pre>grid-template-columns</pre>, <pre>grid-template-rows</pre>, or <pre>grid-template-areas</pre>. It determines the initial grid track structure before any auto-generation occurs.",
      "topic": "Implicit vs Explicit Grid"
    },
    {
      "id": 15,
      "question": "What is the implicit grid?",
      "options": {
        "A": "Hidden grid lines",
        "B": "The grid template",
        "C": "Automatically generated rows or columns when items are placed outside the explicit grid",
        "D": "Grid gaps"
      },
      "correct": "C",
      "explanation": "The implicit grid consists of rows or columns that are automatically created when grid items are placed outside the explicit grid or when there are more items than cells in the explicit grid. These tracks are sized using <pre>grid-auto-rows</pre> and <pre>grid-auto-columns</pre>.",
      "topic": "Implicit vs Explicit Grid"
    },
    {
      "id": 16,
      "question": "If you define <pre>grid-template-columns: repeat(3, 1fr)</pre> but have 10 grid items, what happens?",
      "options": {
        "A": "The grid auto-generates additional rows (implicit grid)",
        "B": "Only 3 items are displayed",
        "C": "Error - too many items",
        "D": "Items overflow the container"
      },
      "correct": "A",
      "explanation": "With 3 columns defined and 10 items, the grid will create 4 rows: 3 rows to fit 9 items, plus a 4th row for the remaining item. The first row is explicit if defined; additional rows are implicit and sized by <pre>grid-auto-rows</pre> (or auto by default).",
      "topic": "Implicit vs Explicit Grid"
    },
    {
      "id": 17,
      "question": "What property controls the size of implicitly created grid tracks?",
      "options": {
        "A": "<pre>grid-template-columns</pre>",
        "B": "<pre>grid-auto-rows</pre> and <pre>grid-auto-columns</pre>",
        "C": "<pre>grid-size</pre>",
        "D": "<pre>auto-grid</pre>"
      },
      "correct": "B",
      "explanation": "The <pre>grid-auto-rows</pre> and <pre>grid-auto-columns</pre> properties control the size of implicitly generated tracks. For example, <pre>grid-auto-rows: 100px</pre> makes all auto-generated rows 100px tall.",
      "topic": "Implicit vs Explicit Grid"
    },
    {
      "id": 18,
      "question": "How does the auto-placement algorithm work by default?",
      "options": {
        "A": "Random placement",
        "B": "Column by column",
        "C": "Places items row by row, filling each row before moving to the next",
        "D": "Items are not placed automatically"
      },
      "correct": "C",
      "explanation": "By default, the auto-placement algorithm places items in row-major order (controlled by <pre>grid-auto-flow: row</pre>), filling each row left to right before moving to the next row. This can be changed to column-major with <pre>grid-auto-flow: column</pre>.",
      "topic": "Auto-placement Algorithm"
    },
    {
      "id": 19,
      "question": "What does <pre>grid-auto-flow: dense</pre> do?",
      "options": {
        "A": "Creates denser grids",
        "B": "Attempts to fill gaps by placing smaller items in earlier empty cells",
        "C": "Compresses the grid",
        "D": "Increases item density"
      },
      "correct": "B",
      "explanation": "The <pre>dense</pre> keyword enables a packing algorithm that tries to fill holes in the grid. If a later item can fit in an earlier gap, it will be placed there. This can change visual order from DOM order, so use carefully for accessibility.",
      "topic": "Auto-placement Algorithm"
    },
    {
      "id": 20,
      "question": "What does <pre>grid-column: 2 / span 3</pre> mean?",
      "options": {
        "A": "Spans from column 2 to 3",
        "B": "Starts at column 2 and ends at column 3",
        "C": "Starts at column line 2 and spans 3 columns",
        "D": "Invalid syntax"
      },
      "correct": "C",
      "explanation": "This places the item starting at column line 2 and spanning across 3 column tracks. So if it starts at line 2, it spans tracks 2, 3, and 4, ending at line 5. The <pre>span</pre> keyword indicates how many tracks to span.",
      "topic": "grid-column and grid-row"
    },
    {
      "id": 21,
      "question": "Can you mix <pre>fr</pre> units with fixed units like <pre>px</pre> in the same track definition?",
      "options": {
        "A": "Yes, fixed sizes are allocated first, then fr units share the remaining space",
        "B": "No, they are incompatible",
        "C": "Only with minmax()",
        "D": "Only in implicit grids"
      },
      "correct": "A",
      "explanation": "You can mix unit types like <pre>grid-template-columns: 200px 1fr 2fr</pre>. The browser first allocates space for fixed-size tracks (200px), then distributes the remaining space among fr units. The second column gets 1/3 and the third gets 2/3 of the remaining space.",
      "topic": "fr unit"
    },
    {
      "id": 22,
      "question": "What is the shorthand for <pre>grid-row-start</pre> and <pre>grid-row-end</pre>?",
      "options": {
        "A": "<pre>grid-placement</pre>",
        "B": "<pre>grid-rows</pre>",
        "C": "<pre>row</pre>",
        "D": "<pre>grid-row</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>grid-row</pre> shorthand combines <pre>grid-row-start</pre> and <pre>grid-row-end</pre> with a slash: <pre>grid-row: 1 / 3</pre>. Similarly, <pre>grid-column</pre> is the shorthand for column placement. The <pre>grid-area</pre> property can set all four values at once.",
      "topic": "grid-column and grid-row"
    },
    {
      "id": 23,
      "question": "What does <pre>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))</pre> create?",
      "options": {
        "A": "Fixed columns of 200px",
        "B": "A responsive grid that creates as many columns as fit, each at least 200px",
        "C": "Exactly one column",
        "D": "An error"
      },
      "correct": "B",
      "explanation": "This creates a responsive grid layout. <pre>auto-fit</pre> generates as many column tracks as will fit in the container, with each track being at least 200px and growing to fill space (1fr). Columns automatically wrap as the viewport resizes, no media queries needed.",
      "topic": "repeat() function"
    },
    {
      "id": 24,
      "question": "What's the difference between <pre>auto-fit</pre> and <pre>auto-fill</pre> in repeat()?",
      "options": {
        "A": "They are identical",
        "B": "<pre>auto-fit</pre> collapses empty tracks; <pre>auto-fill</pre> keeps them",
        "C": "<pre>auto-fill</pre> is deprecated",
        "D": "<pre>auto-fit</pre> is faster"
      },
      "correct": "B",
      "explanation": "<pre>auto-fill</pre> creates as many tracks as will fit, keeping empty tracks. <pre>auto-fit</pre> also creates tracks but collapses empty ones to zero, allowing content to expand. Use <pre>auto-fit</pre> when you want items to grow into available space.",
      "topic": "repeat() function"
    },
    {
      "id": 25,
      "question": "How do you reference a named grid line defined as <pre>grid-template-columns: [start] 1fr [middle] 1fr [end]</pre>?",
      "options": {
        "A": "<pre>grid-column-start: start</pre>",
        "B": "<pre>grid-column-start: [start]</pre>",
        "C": "<pre>grid-column: start / end</pre>",
        "D": "Both A and C"
      },
      "correct": "D",
      "explanation": "Named grid lines can be referenced by their name without brackets. <pre>grid-column-start: start</pre> and <pre>grid-column: start / end</pre> both work. Named lines make grid placement more semantic and maintainable than using numeric line numbers.",
      "topic": "grid-template-columns"
    }
  ]
}
