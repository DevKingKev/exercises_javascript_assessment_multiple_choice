module.exports = {
    metadata: {
        title: "CSS Medium Level - General Assessment 1",
        description: "Test your intermediate CSS knowledge across advanced selectors, pseudo-classes, flexbox, grid, responsive design, transforms, and modern CSS features. This comprehensive assessment covers essential medium-level concepts.",
        difficulty: "medium",
        domain: "css",
        timeLimit: 45,
        questionCount: 25,
        assessmentId: 1,
        assessmentUniqueId: 1763078080614,
        testType: "multiple-choice",
        topics: [
            "Advanced Selectors",
            "Pseudo-elements",
            "Flexbox Advanced",
            "CSS Grid Layout",
            "Responsive Design",
            "CSS Custom Properties",
            "Transforms",
            "Positioning Deep Dive",
            "CSS Functions",
            "Typography Advanced"
        ],
        topicLinks: [
            "Advanced Selectors",
            "Pseudo-elements",
            "Flexbox Advanced",
            "CSS Grid Layout",
            "Responsive Design",
            "CSS Custom Properties",
            "Transforms",
            "Positioning Deep Dive",
            "CSS Functions",
            "Typography Advanced"
        ],
        keywords: [
            "attribute selectors",
            "pseudo-elements",
            "::before",
            "::after",
            "flexbox",
            "flex-grow",
            "flex-shrink",
            "grid",
            "grid-template-areas",
            "media queries",
            "custom properties",
            "css variables",
            "transform",
            "translate",
            "rotate",
            "scale",
            "position sticky",
            "calc",
            "clamp",
            "min",
            "max",
            "font-display",
            "text-rendering",
            "specificity",
            "nth-child",
            "combinators"
        ]
    },
    questions: [
        {
            id: 1,
            question: "What does the attribute selector <pre>[href^=\"https\"]</pre> match?",
            options: {
                A: "Elements with href containing 'https' anywhere",
                B: "Elements with href starting with 'https'",
                C: "Elements with href ending with 'https'",
                D: "Elements with href exactly equal to 'https'"
            },
            correct: "B",
            explanation: "The <pre>^=</pre> operator in attribute selectors matches elements where the attribute value starts with the specified string. So <pre>[href^=\"https\"]</pre> matches any element with an href attribute that begins with 'https', useful for selecting secure links. Other operators include <pre>$=</pre> for 'ends with', <pre>*=</pre> for 'contains', and <pre>=</pre> for exact match.",
            topic: "Advanced Selectors"
        },
        {
            id: 2,
            question: "What is the difference between the <pre>></pre> and <pre>space</pre> combinators in CSS?",
            options: {
                A: "They are identical",
                B: "> selects direct children only, space selects all descendants",
                C: "> selects all descendants, space selects direct children",
                D: "> is for classes, space is for IDs"
            },
            correct: "B",
            explanation: "The child combinator <pre>></pre> selects only direct children of an element, while the descendant combinator (space) selects all descendants at any nesting level. For example, <pre>div > p</pre> selects only <pre>&lt;p&gt;</pre> elements that are direct children of <pre>&lt;div&gt;</pre>, while <pre>div p</pre> selects all <pre>&lt;p&gt;</pre> elements inside any <pre>&lt;div&gt;</pre>, regardless of how deeply nested. This distinction is important for precise selector targeting and performance optimization.",
            topic: "Advanced Selectors"
        },
        {
            id: 3,
            question: "What does the <pre>::before</pre> pseudo-element allow you to do?",
            options: {
                A: "Insert content before the element's opening tag in the HTML",
                B: "Insert content before the element's content using CSS",
                C: "Style the first child element",
                D: "Add spacing before an element"
            },
            correct: "B",
            explanation: "The <pre>::before</pre> pseudo-element creates a virtual element before the content of the selected element and requires the <pre>content</pre> property to display anything. It's commonly used for decorative elements, icons, or counters without adding extra HTML markup. The content is inserted inside the element, before its actual content, not before the element itself in the DOM tree. This is useful for adding visual elements purely through CSS.",
            topic: "Pseudo-elements"
        },
        {
            id: 4,
            question: "In the <pre>flex</pre> shorthand property <pre>flex: 1 1 200px</pre>, what does each value represent?",
            options: {
                A: "width, height, margin",
                B: "flex-grow, flex-shrink, flex-basis",
                C: "flex-start, flex-end, flex-center",
                D: "min-width, max-width, width"
            },
            correct: "B",
            explanation: "The <pre>flex</pre> shorthand represents three properties: <pre>flex-grow</pre> (ability to grow), <pre>flex-shrink</pre> (ability to shrink), and <pre>flex-basis</pre> (initial size). In <pre>flex: 1 1 200px</pre>, the item can grow (1), can shrink (1), and has a base size of 200px. The flex-grow and flex-shrink values are unitless ratios that determine how space is distributed among flex items. Understanding this shorthand is crucial for creating flexible, responsive layouts.",
            topic: "Flexbox Advanced"
        },
        {
            id: 5,
            question: "What happens when you set <pre>flex-basis: 0</pre> on a flex item?",
            options: {
                A: "The item becomes invisible",
                B: "The item's size is based entirely on flex-grow/shrink, ignoring content size",
                C: "The item takes up no space",
                D: "It's the same as flex-basis: auto"
            },
            correct: "B",
            explanation: "Setting <pre>flex-basis: 0</pre> makes the flex item's initial size zero before any growing or shrinking occurs, meaning the item's final size will be determined entirely by the <pre>flex-grow</pre> and <pre>flex-shrink</pre> values, ignoring the intrinsic content size. This is useful when you want flex items to divide space purely based on their flex-grow ratios. For example, <pre>flex: 1 1 0</pre> (often written as <pre>flex: 1</pre>) creates equal-sized items regardless of content, while <pre>flex: 1 1 auto</pre> sizes items based on content plus any extra space.",
            topic: "Flexbox Advanced"
        },
        {
            id: 6,
            question: "What does <pre>grid-template-areas</pre> allow you to create?",
            options: {
                A: "Automatic grid sizing",
                B: "Named grid regions for intuitive layout definition",
                C: "Grid gaps and spacing",
                D: "Grid line numbers"
            },
            correct: "B",
            explanation: "The <pre>grid-template-areas</pre> property allows you to create named grid regions using a visual ASCII-art style syntax, making layouts more intuitive and maintainable. For example:\n[CODE]grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";[/CODE]\nYou then assign elements to these areas using <pre>grid-area: header</pre>. This approach provides a clear visual representation of the layout directly in your CSS and makes it easy to reorganize layouts at different breakpoints by simply redefining the template areas.",
            topic: "CSS Grid Layout"
        },
        {
            id: 7,
            question: "What is the difference between <pre>fr</pre> units and percentages in CSS Grid?",
            options: {
                A: "They are identical",
                B: "fr distributes available space after content, percentages use total container size",
                C: "fr is for rows, percentages for columns",
                D: "Percentages are more flexible than fr"
            },
            correct: "B",
            explanation: "The <pre>fr</pre> (fraction) unit distributes the remaining available space after accounting for fixed-size tracks and content, while percentages are calculated based on the total container size. For example, with <pre>grid-template-columns: 200px 1fr 2fr</pre>, the 200px is allocated first, then the remaining space is divided with 1fr getting 1/3 and 2fr getting 2/3. With percentages like <pre>grid-template-columns: 200px 33% 67%</pre>, the percentages might cause overflow if the container is smaller than 200px + (33% + 67% of container). The fr unit is generally more flexible and intuitive for responsive layouts.",
            topic: "CSS Grid Layout"
        },
        {
            id: 8,
            question: "What does a media query with <pre>min-width: 768px</pre> target?",
            options: {
                A: "Viewports exactly 768px wide",
                B: "Viewports 768px wide or wider",
                C: "Viewports narrower than 768px",
                D: "Viewports between 768px and 1024px"
            },
            correct: "B",
            explanation: "A media query with <pre>min-width: 768px</pre> applies styles to viewports that are 768px wide or wider. This is the foundation of mobile-first responsive design, where you start with mobile styles as the base and progressively enhance for larger screens. The opposite, <pre>max-width: 768px</pre>, would target viewports 768px or narrower (desktop-first approach). Mobile-first is generally preferred because it ensures core functionality works on all devices and encourages performance optimization.",
            topic: "Responsive Design"
        },
        {
            id: 9,
            question: "How do CSS custom properties (variables) differ from preprocessor variables like Sass variables?",
            options: {
                A: "They are identical in functionality",
                B: "CSS variables are dynamic and can be changed at runtime, Sass variables are static",
                C: "Sass variables are faster",
                D: "CSS variables don't support inheritance"
            },
            correct: "B",
            explanation: "CSS custom properties (variables) are dynamic and part of the browser's runtime, meaning they can be changed via JavaScript, respond to media queries, and cascade/inherit through the DOM. Sass variables are static and compiled away during build time. For example, you can change a CSS variable's value with JavaScript (<pre>element.style.setProperty('--color', 'blue')</pre>) or in a media query, but Sass variables are fixed once compiled. CSS variables also respect the cascade and can have different values in different parts of the DOM tree, making them more flexible for theming and dynamic styling.",
            topic: "CSS Custom Properties"
        },
        {
            id: 10,
            question: "What is the scope of a CSS custom property defined on <pre>:root</pre>?",
            options: {
                A: "Only the root element",
                B: "Global - available to all elements via inheritance",
                C: "Only direct children of root",
                D: "Limited to the current file"
            },
            correct: "B",
            explanation: "When you define a custom property on <pre>:root</pre> (which targets the <pre>&lt;html&gt;</pre> element), it becomes globally available to all elements in the document through inheritance. Custom properties inherit by default, so any element can access <pre>var(--my-variable)</pre> if it was defined on :root. This makes :root the ideal place for global theme variables like colors, spacing, and typography. You can then override these variables locally by redefining them on specific elements or classes, creating a flexible theming system.",
            topic: "CSS Custom Properties"
        },
        {
            id: 11,
            question: "What does <pre>transform: translateX(50%) translateY(-50%)</pre> do when both are applied?",
            options: {
                A: "Moves the element 50% right and 50% up",
                B: "Only the last transform applies",
                C: "Creates a diagonal movement",
                D: "Cancels both transforms"
            },
            correct: "A",
            explanation: "Multiple transform functions are combined and both apply. <pre>translateX(50%)</pre> moves the element 50% of its own width to the right, and <pre>translateY(-50%)</pre> moves it 50% of its own height upward. Percentages in translate are relative to the element's own dimensions, not the container. This combination is commonly used for centering absolutely positioned elements:\n[CODE].center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}[/CODE]\nNote that transform functions are applied in order from right to left in the value string.",
            topic: "Transforms"
        },
        {
            id: 12,
            question: "How does <pre>position: sticky</pre> behave?",
            options: {
                A: "Always fixed to the viewport",
                B: "Acts like relative until scrolling past a threshold, then becomes fixed",
                C: "Always relative to parent",
                D: "Same as position: absolute"
            },
            correct: "B",
            explanation: "The <pre>sticky</pre> positioning is a hybrid between relative and fixed. An element with <pre>position: sticky</pre> acts like <pre>position: relative</pre> within its normal document flow until the user scrolls to a point where it reaches a specified offset (using top, bottom, left, or right), at which point it becomes fixed relative to its containing block. It's commonly used for sticky headers that scroll with content initially but then stick to the top of the viewport. The element must have at least one of top, right, bottom, or left defined for sticky to work.",
            topic: "Positioning Deep Dive"
        },
        {
            id: 13,
            question: "What does the <pre>calc()</pre> function allow you to do?",
            options: {
                A: "Calculate element positions only",
                B: "Perform mathematical calculations mixing different units",
                C: "Only add and subtract same units",
                D: "Create animations"
            },
            correct: "B",
            explanation: "The <pre>calc()</pre> function allows you to perform mathematical calculations that mix different units, making it incredibly powerful for responsive design. For example, <pre>width: calc(100% - 80px)</pre> subtracts a fixed 80px from a percentage width, or <pre>font-size: calc(16px + 2vw)</pre> combines pixels with viewport units. You can use addition (+), subtraction (-), multiplication (*), and division (/) operators. Spaces around + and - operators are required. This is useful for creating fluid layouts that combine fixed and flexible sizing.",
            topic: "CSS Functions"
        },
        {
            id: 14,
            question: "What does <pre>clamp(1rem, 2.5vw, 2rem)</pre> do for font-size?",
            options: {
                A: "Sets font-size to exactly 2.5vw",
                B: "Sets font-size to 2.5vw, but never smaller than 1rem or larger than 2rem",
                C: "Chooses the largest value",
                D: "Adds all three values together"
            },
            correct: "B",
            explanation: "The <pre>clamp()</pre> function takes three parameters: minimum value, preferred value, and maximum value. It returns the preferred value (middle parameter) clamped between the min and max. So <pre>clamp(1rem, 2.5vw, 2rem)</pre> creates fluid typography that scales with viewport width (2.5vw) but never goes below 1rem or above 2rem. This is an elegant way to create responsive typography without media queries:\n[CODE]font-size: clamp(1rem, 2.5vw, 2rem);\n/* Equivalent to: */\nfont-size: max(1rem, min(2.5vw, 2rem));[/CODE]\nThe clamp function is ideal for responsive spacing, typography, and sizing.",
            topic: "CSS Functions"
        },
        {
            id: 15,
            question: "What does the <pre>:nth-child(3n+1)</pre> selector match?",
            options: {
                A: "Every third element",
                B: "Elements 1, 4, 7, 10, 13... (every third element starting from first)",
                C: "Only the first and third elements",
                D: "Elements at positions 3, 6, 9..."
            },
            correct: "B",
            explanation: "The <pre>:nth-child(3n+1)</pre> selector uses the formula <pre>an+b</pre> where 'a' is the cycle interval and 'b' is the offset. With 3n+1, it matches every 3rd element starting from position 1:\n- When n=0: 3(0)+1 = 1 (first element)\n- When n=1: 3(1)+1 = 4 (fourth element)\n- When n=2: 3(2)+1 = 7 (seventh element)\n\nThis pattern continues indefinitely. Other common patterns include <pre>:nth-child(even)</pre> for even-numbered children, <pre>:nth-child(odd)</pre> for odd-numbered, and <pre>:nth-child(3n)</pre> for every third element (positions 3, 6, 9...). Understanding nth-child formulas enables powerful selection patterns without adding classes.",
            topic: "Advanced Selectors"
        },
        {
            id: 16,
            question: "What is the difference between <pre>::first-line</pre> and <pre>:first-child</pre>?",
            options: {
                A: "They select the same thing",
                B: "::first-line is a pseudo-element for the first line of text, :first-child is a pseudo-class for the first child element",
                C: "::first-line is for paragraphs only",
                D: ":first-child is deprecated"
            },
            correct: "B",
            explanation: "<pre>::first-line</pre> is a pseudo-element that selects the first formatted line of text within a block-level element, which is dynamic and changes as the viewport resizes. <pre>:first-child</pre> is a pseudo-class that selects an element that is the first child of its parent. For example:\n[CODE]p::first-line { font-weight: bold; }\n/* Bolds first line of each paragraph */\n\ndiv :first-child { margin-top: 0; }\n/* Targets first child element of each div */[/CODE]\n::first-line only accepts certain properties like font, color, background, and text-decoration. It's useful for drop-cap effects or styling the beginning of articles.",
            topic: "Pseudo-elements"
        },
        {
            id: 17,
            question: "What does <pre>flex-wrap: wrap</pre> do in a flex container?",
            options: {
                A: "Prevents items from shrinking",
                B: "Allows flex items to wrap onto multiple lines when they don't fit",
                C: "Makes all items equal width",
                D: "Centers items vertically"
            },
            correct: "B",
            explanation: "<pre>flex-wrap: wrap</pre> allows flex items to wrap onto multiple lines when they don't fit in a single line, instead of shrinking or overflowing. By default, flex containers use <pre>flex-wrap: nowrap</pre>, which forces all items onto one line. With wrap enabled, items will flow to new lines based on their flex-basis and the available space. You can also use <pre>flex-wrap: wrap-reverse</pre> to wrap items in reverse order. When using wrap, the <pre>align-content</pre> property becomes useful for controlling spacing between the wrapped lines.",
            topic: "Flexbox Advanced"
        },
        {
            id: 18,
            question: "What does the <pre>repeat()</pre> function do in CSS Grid?",
            options: {
                A: "Repeats animations",
                B: "Creates repeated track patterns in grid-template-columns or grid-template-rows",
                C: "Duplicates grid items",
                D: "Repeats background images"
            },
            correct: "B",
            explanation: "The <pre>repeat()</pre> function creates repeated track patterns in grid definitions, reducing repetitive code. For example, <pre>grid-template-columns: repeat(3, 1fr)</pre> is equivalent to <pre>grid-template-columns: 1fr 1fr 1fr</pre>. You can also combine it with other values: <pre>repeat(2, 100px 1fr)</pre> creates the pattern <pre>100px 1fr 100px 1fr</pre>. Advanced usage includes <pre>repeat(auto-fit, minmax(200px, 1fr))</pre> for responsive grids that automatically adjust the number of columns based on available space, creating flexible layouts without media queries.",
            topic: "CSS Grid Layout"
        },
        {
            id: 19,
            question: "What does <pre>@media (prefers-color-scheme: dark)</pre> detect?",
            options: {
                A: "Screen brightness level",
                B: "User's operating system dark mode preference",
                C: "Time of day",
                D: "Browser theme color"
            },
            correct: "B",
            explanation: "The <pre>prefers-color-scheme</pre> media query detects whether the user has requested a light or dark color theme through their operating system settings. It has three values: <pre>light</pre>, <pre>dark</pre>, and <pre>no-preference</pre>. This allows you to create automatic dark mode support:\n[CODE]@media (prefers-color-scheme: dark) {\n  :root {\n    --bg-color: #1a1a1a;\n    --text-color: #ffffff;\n  }\n}[/CODE]\nThis respects user preferences for reduced eye strain and battery saving on OLED screens. It's commonly combined with CSS custom properties for easy theme switching.",
            topic: "Responsive Design"
        },
        {
            id: 20,
            question: "What is the purpose of the <pre>var()</pre> function's second parameter?",
            options: {
                A: "To specify the variable type",
                B: "To provide a fallback value if the custom property is undefined",
                C: "To set a maximum value",
                D: "To animate the variable"
            },
            correct: "B",
            explanation: "The second parameter in <pre>var()</pre> provides a fallback value that's used if the custom property is not defined or invalid. For example, <pre>color: var(--theme-color, blue)</pre> will use the --theme-color if it exists, otherwise defaults to blue. This is useful for progressive enhancement and providing safe defaults. You can even nest var() functions as fallbacks: <pre>var(--color-1, var(--color-2, black))</pre>. The fallback can be any valid CSS value for that property, making it a robust way to handle missing variables.",
            topic: "CSS Custom Properties"
        },
        {
            id: 21,
            question: "What does <pre>transform-origin</pre> control?",
            options: {
                A: "Where the element was originally positioned",
                B: "The point around which transformations occur",
                C: "The starting point of animations",
                D: "The original size of the element"
            },
            correct: "B",
            explanation: "The <pre>transform-origin</pre> property sets the point around which transformations (rotate, scale, skew) occur. By default, it's <pre>center center</pre> (50% 50%), but you can change it to any position. For example, <pre>transform-origin: top left</pre> makes rotations pivot from the top-left corner instead of center. This is particularly important for rotation and scaling:\n[CODE].card {\n  transform: rotateY(180deg);\n  transform-origin: left center; /* Rotates like opening a door */\n}[/CODE]\nYou can use keywords (top, bottom, left, right, center), percentages, or length units.",
            topic: "Transforms"
        },
        {
            id: 22,
            question: "What does the <pre>minmax()</pre> function do in CSS Grid?",
            options: {
                A: "Sets minimum and maximum values for images",
                B: "Defines a size range for grid tracks between a minimum and maximum value",
                C: "Calculates the min and max of two values",
                D: "Sets media query breakpoints"
            },
            correct: "B",
            explanation: "The <pre>minmax()</pre> function defines a size range for grid tracks, specifying a minimum and maximum size. For example, <pre>grid-template-columns: minmax(100px, 1fr)</pre> creates a column that's at least 100px wide but can grow to take up available space (1fr). This is powerful for responsive grids:\n[CODE]grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n/* Creates responsive columns that are at least 250px\n   but expand to fill space, automatically wrapping */[/CODE]\nThe first value (min) can be a length or min-content, and the second value (max) can be a length, max-content, or fr unit.",
            topic: "CSS Grid Layout"
        },
        {
            id: 23,
            question: "What does <pre>font-display: swap</pre> do?",
            options: {
                A: "Swaps between two different fonts",
                B: "Shows fallback font immediately, then swaps to web font when loaded",
                C: "Displays fonts in alphabetical order",
                D: "Changes font on hover"
            },
            correct: "B",
            explanation: "<pre>font-display: swap</pre> is a font loading strategy that shows the fallback font immediately while the web font downloads, then swaps to the web font once it's loaded. This prevents FOIT (Flash of Invisible Text) and improves perceived performance. The values are:\n- <pre>auto</pre>: Browser default (often block)\n- <pre>block</pre>: Brief invisible period, then swap (FOIT)\n- <pre>swap</pre>: Show fallback immediately, swap when loaded (FOUT)\n- <pre>fallback</pre>: Very brief block, then swap with timeout\n- <pre>optional</pre>: Brief block, use font only if cached\n\n'swap' is generally recommended for better user experience, though it can cause layout shifts if fallback and web fonts have different metrics.",
            topic: "Typography Advanced"
        },
        {
            id: 24,
            question: "What is the difference between <pre>grid-template-columns: auto</pre> and <pre>grid-template-columns: 1fr</pre>?",
            options: {
                A: "They are identical",
                B: "auto sizes based on content, 1fr distributes available space",
                C: "auto is for rows, 1fr is for columns",
                D: "1fr is slower than auto"
            },
            correct: "B",
            explanation: "The <pre>auto</pre> keyword sizes tracks based on their content (similar to max-content), while <pre>1fr</pre> distributes the available space among flexible tracks. For example:\n[CODE]grid-template-columns: auto 1fr auto;\n/* First and last columns size to content,\n   middle column takes remaining space */\n\ngrid-template-columns: 1fr 1fr 1fr;\n/* All columns share space equally */[/CODE]\nWith auto, a column will be as wide as its widest content. With 1fr, columns divide the available space regardless of content size. You can mix them for flexible layouts where some columns are content-sized and others fill remaining space.",
            topic: "CSS Grid Layout"
        },
        {
            id: 25,
            question: "What does the <pre>~</pre> (general sibling) combinator select?",
            options: {
                A: "All siblings before the element",
                B: "All siblings after the element at the same level",
                C: "Only the immediately adjacent sibling",
                D: "All elements in the document"
            },
            correct: "B",
            explanation: "The general sibling combinator <pre>~</pre> selects all siblings that come after the specified element and share the same parent. For example, <pre>h2 ~ p</pre> selects all <pre>&lt;p&gt;</pre> elements that come after an <pre>&lt;h2&gt;</pre> at the same level. This differs from the adjacent sibling combinator <pre>+</pre>, which only selects the immediately following sibling:\n[CODE]/* Adjacent: only the next p */\nh2 + p { color: blue; }\n\n/* General: all following p elements */\nh2 ~ p { color: red; }[/CODE]\nThe general sibling combinator is useful for styling content sections that follow a specific element, like paragraphs after a heading.",
            topic: "Advanced Selectors"
        }
    ]
};
