module.exports = {
    metadata: {
        title: "CSS Medium Level - General Assessment 3",
        description: "Master intermediate CSS concepts including container queries, scroll-driven effects, logical properties, CSS architecture, print styles, dark mode implementation, typography optimization, and advanced positioning techniques. Complete your medium-level foundation with this comprehensive assessment.",
        difficulty: "medium",
        domain: "css",
        timeLimit: 45,
        questionCount: 25,
        assessmentId: 3,
        assessmentUniqueId: 1763078945510,
        testType: "multiple-choice",
        topics: [
            "Container Queries",
            "CSS Logical Properties",
            "CSS Architecture",
            "Print Styles",
            "Dark Mode Implementation",
            "Scroll Behavior",
            "Advanced Typography",
            "Complex Stacking",
            "Grid Advanced Patterns",
            "Flexbox Patterns"
        ],
        topicLinks: [
            {
                topicName: "Container Queries",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries"
            },
            {
                topicName: "CSS Logical Properties",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"
            },
            {
                topicName: "CSS Architecture",
                refLink: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing"
            },
            {
                topicName: "Print Styles",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/print"
            },
            {
                topicName: "Dark Mode Implementation",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
            },
            {
                topicName: "Scroll Behavior",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior"
            },
            {
                topicName: "Advanced Typography",
                refLink: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals"
            },
            {
                topicName: "Complex Stacking",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context"
            },
            {
                topicName: "Grid Advanced Patterns",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids"
            },
            {
                topicName: "Flexbox Patterns",
                refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox"
            }
        ],
        keywords: [
            "container queries",
            "container-type",
            "logical properties",
            "margin-inline",
            "padding-block",
            "BEM",
            "OOCSS",
            "print media",
            "page-break",
            "prefers-color-scheme",
            "color-scheme",
            "scroll-behavior",
            "scroll-margin",
            "font-variation-settings",
            "text-rendering",
            "stacking context",
            "isolation",
            "grid-auto-flow",
            "subgrid",
            "align-self",
            "justify-self",
            "order",
            "auto-fit",
            "auto-fill",
            "dense"
        ]
    },
    questions: [
        {
            id: 1,
            question: "What is the purpose of <pre>container-type: inline-size</pre>?",
            options: {
                A: "Sets the container's inline size",
                B: "Establishes a containment context for container queries based on inline dimension",
                C: "Makes the container inline-block",
                D: "Changes text direction"
            },
            correct: "B",
            explanation: "<pre>container-type: inline-size</pre> establishes a containment context that allows child elements to respond to the container's inline dimension (width in horizontal writing modes) using container queries. This enables component-based responsive design:\n[CODE].card {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card-content { display: flex; }\n}[/CODE]\nUnlike media queries which respond to viewport size, container queries respond to the container's size, making components truly reusable. The <pre>inline-size</pre> value provides containment for width while allowing height to adjust naturally.",
            topic: {
                topics: ["Container Queries"]
            }
        },
        {
            id: 2,
            question: "What is the difference between <pre>@media</pre> queries and <pre>@container</pre> queries?",
            options: {
                A: "They are identical",
                B: "@media responds to viewport size, @container responds to container size",
                C: "@container is for print only",
                D: "@media is deprecated"
            },
            correct: "B",
            explanation: "<pre>@media</pre> queries respond to viewport/device characteristics (like screen width), while <pre>@container</pre> queries respond to a specific container's size. This is a fundamental shift in responsive design:\n[CODE]/* Media query - viewport based */\n@media (min-width: 600px) { }\n\n/* Container query - container based */\n@container (min-width: 600px) { }[/CODE]\nContainer queries enable true component-level responsiveness. A card component can adapt based on where it's placed (sidebar vs main content), not just viewport width. This makes components more modular and reusable across different layouts.",
            topic: {
                topics: ["Container Queries"]
            }
        },
        {
            id: 3,
            question: "What does <pre>margin-inline-start</pre> represent?",
            options: {
                A: "Always left margin",
                B: "The margin at the start of the inline direction (left in LTR, right in RTL)",
                C: "Top margin",
                D: "Inner margin"
            },
            correct: "B",
            explanation: "<pre>margin-inline-start</pre> is a logical property that represents the margin at the start of the inline direction. In left-to-right (LTR) languages, this is the left side; in right-to-left (RTL) languages like Arabic or Hebrew, it's the right side:\n[CODE]/* Logical - adapts to text direction */\n.element {\n  margin-inline-start: 1rem;\n}\n\n/* Equivalent physical properties */\n/* LTR: margin-left: 1rem */\n/* RTL: margin-right: 1rem */[/CODE]\nLogical properties make internationalization easier by automatically adapting to different writing modes and text directions without separate stylesheets.",
            topic: {
                topics: ["CSS Logical Properties"]
            }
        },
        {
            id: 4,
            question: "What is the difference between <pre>padding-block</pre> and <pre>padding-inline</pre>?",
            options: {
                A: "padding-block is for vertical, padding-inline is for horizontal",
                B: "padding-block applies to block axis (vertical in horizontal writing), padding-inline to inline axis",
                C: "They are the same",
                D: "padding-block is for borders only"
            },
            correct: "B",
            explanation: "<pre>padding-block</pre> applies padding to the block axis (typically vertical in horizontal writing modes), while <pre>padding-inline</pre> applies to the inline axis (typically horizontal). These are logical properties that adapt to writing mode:\n[CODE]/* Logical properties */\n.element {\n  padding-block: 1rem 2rem;    /* top and bottom */\n  padding-inline: 0.5rem;      /* left and right */\n}\n\n/* Equivalent physical in horizontal writing */\npadding-top: 1rem;\npadding-bottom: 2rem;\npadding-left: 0.5rem;\npadding-right: 0.5rem;[/CODE]\nYou can also use <pre>padding-block-start</pre>, <pre>padding-block-end</pre>, <pre>padding-inline-start</pre>, and <pre>padding-inline-end</pre> for individual sides.",
            topic: {
                topics: ["CSS Logical Properties"]
            }
        },
        {
            id: 5,
            question: "What does BEM stand for in CSS architecture?",
            options: {
                A: "Basic Element Model",
                B: "Block Element Modifier",
                C: "Browser Extension Method",
                D: "Box Element Margin"
            },
            correct: "B",
            explanation: "BEM stands for Block Element Modifier, a popular CSS naming methodology that creates clear, maintainable class names. The structure is:\n- **Block**: Independent component (<pre>.card</pre>)\n- **Element**: Part of a block (<pre>.card__title</pre>)\n- **Modifier**: Variation of block or element (<pre>.card--featured</pre>)\n\n[CODE]/* Block */\n.card { }\n\n/* Element (uses __) */\n.card__title { }\n.card__image { }\n\n/* Modifier (uses --) */\n.card--featured { }\n.card__title--large { }[/CODE]\nBEM reduces specificity conflicts, makes HTML structure clear from class names, and improves code maintainability in large projects.",
            topic: {
                topics: ["CSS Architecture"]
            }
        },
        {
            id: 6,
            question: "What does the <pre>@media print</pre> rule target?",
            options: {
                A: "Printers only",
                B: "Styles that apply when the page is printed or in print preview",
                C: "Text printing effects",
                D: "3D printers"
            },
            correct: "B",
            explanation: "<pre>@media print</pre> applies styles specifically when the page is printed or viewed in print preview mode. This allows you to create print-friendly versions of your pages:\n[CODE]@media print {\n  /* Hide navigation, ads, etc. */\n  nav, .sidebar, .ads {\n    display: none;\n  }\n  \n  /* Ensure readable text */\n  body {\n    font-size: 12pt;\n    color: black;\n  }\n  \n  /* Show link URLs */\n  a[href]::after {\n    content: \" (\" attr(href) \")\";\n  }\n}[/CODE]\nCommon print optimizations include removing backgrounds to save ink, ensuring proper page breaks, and showing full URLs for links.",
            topic: {
                topics: ["Print Styles"]
            }
        },
        {
            id: 7,
            question: "What does <pre>page-break-inside: avoid</pre> do?",
            options: {
                A: "Prevents page breaks entirely",
                B: "Prevents page breaks from occurring inside the element when printing",
                C: "Creates page breaks",
                D: "Only works on screen"
            },
            correct: "B",
            explanation: "<pre>page-break-inside: avoid</pre> prevents page breaks from occurring inside an element when printing, ensuring the element stays together on one page. This is important for keeping related content intact:\n[CODE]@media print {\n  /* Keep code blocks together */\n  pre, code {\n    page-break-inside: avoid;\n  }\n  \n  /* Keep images with captions */\n  figure {\n    page-break-inside: avoid;\n  }\n}[/CODE]\nModern CSS also supports <pre>break-inside: avoid</pre> which works the same way. You can also use <pre>page-break-before</pre> and <pre>page-break-after</pre> to control breaks around elements. These properties ensure professional-looking printed documents.",
            topic: {
                topics: ["Print Styles"]
            }
        },
        {
            id: 8,
            question: "How do you implement automatic dark mode detection in CSS?",
            options: {
                A: "Using dark-mode property",
                B: "Using @media (prefers-color-scheme: dark)",
                C: "Using theme attribute",
                D: "Dark mode requires JavaScript"
            },
            correct: "B",
            explanation: "You implement automatic dark mode detection using the <pre>@media (prefers-color-scheme: dark)</pre> media query, which detects the user's system-level dark mode preference:\n[CODE]:root {\n  --bg: white;\n  --text: black;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #1a1a1a;\n    --text: #ffffff;\n  }\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}[/CODE]\nThis respects user preferences automatically. Combine with CSS custom properties for easy theme management. You can also use <pre>prefers-color-scheme: light</pre> to explicitly target light mode.",
            topic: {
                topics: ["Dark Mode Implementation"]
            }
        },
        {
            id: 9,
            question: "What does the <pre>color-scheme</pre> property do?",
            options: {
                A: "Sets the color palette",
                B: "Indicates which color schemes the element supports, affecting browser UI elements",
                C: "Creates gradients",
                D: "Validates color values"
            },
            correct: "B",
            explanation: "The <pre>color-scheme</pre> property indicates which color schemes (light/dark) an element supports, which affects browser-provided UI elements like form controls, scrollbars, and system colors:\n[CODE]:root {\n  color-scheme: light dark;\n  /* Supports both, adapts to user preference */\n}\n\n/* Or explicitly set one */\n.light-only {\n  color-scheme: light;\n}\n\n.dark-only {\n  color-scheme: dark;\n}[/CODE]\nThis ensures native form controls and scrollbars match your theme. Without it, you might have dark-themed content with light-themed form inputs. It also affects CSS system colors, making them adapt to the current scheme.",
            topic: {
                topics: ["Dark Mode Implementation"]
            }
        },
        {
            id: 10,
            question: "What does <pre>scroll-behavior: smooth</pre> enable?",
            options: {
                A: "Faster scrolling",
                B: "Smooth scrolling animations when jumping to anchors or using scrollTo",
                C: "Prevents scrolling",
                D: "Changes scrollbar appearance"
            },
            correct: "B",
            explanation: "<pre>scroll-behavior: smooth</pre> enables smooth scrolling animations when programmatically scrolling or navigating to anchor links, instead of instant jumps:\n[CODE]html {\n  scroll-behavior: smooth;\n}\n\n/* Now anchor links scroll smoothly */\n<a href=\"#section2\">Jump to section 2</a>[/CODE]\nThis also affects JavaScript scrolling methods like <pre>scrollTo()</pre> and <pre>scrollIntoView()</pre>. However, respect user preferences:\n[CODE]@media (prefers-reduced-motion: reduce) {\n  html {\n    scroll-behavior: auto;\n  }\n}[/CODE]\nSome users find smooth scrolling disorienting or experience motion sickness, so providing an instant option for accessibility is important.",
            topic: {
                topics: ["Scroll Behavior"]
            }
        },
        {
            id: 11,
            question: "What is <pre>scroll-margin</pre> used for?",
            options: {
                A: "Margins around scrollbars",
                B: "Offset when scrolling to an element, useful for fixed headers",
                C: "Scroll speed control",
                D: "Scrollbar width"
            },
            correct: "B",
            explanation: "<pre>scroll-margin</pre> defines offset space around an element when it becomes a scroll target, which is essential when you have fixed headers or navigation:\n[CODE]/* Fixed header is 80px tall */\nheader {\n  position: fixed;\n  height: 80px;\n}\n\n/* Sections need offset when scrolled to */\nsection {\n  scroll-margin-top: 80px;\n}\n\n/* Now anchor links don't hide behind header */\n<a href=\"#section2\">Go to section 2</a>[/CODE]\nThis ensures content isn't hidden behind fixed elements when using anchor navigation or <pre>scrollIntoView()</pre>. You can use <pre>scroll-margin-top</pre>, <pre>scroll-margin-bottom</pre>, etc., or the shorthand <pre>scroll-margin</pre>.",
            topic: {
                topics: ["Scroll Behavior"]
            }
        },
        {
            id: 12,
            question: "What does <pre>font-variation-settings</pre> control?",
            options: {
                A: "Font family variations",
                B: "Axes in variable fonts for fine-tuned control",
                C: "Font loading speed",
                D: "Font color variations"
            },
            correct: "B",
            explanation: "<pre>font-variation-settings</pre> provides low-level control over variable font axes, allowing fine-tuned adjustments to weight, width, slant, and custom axes:\n[CODE]/* Variable font with multiple axes */\n.text {\n  font-family: 'MyVariableFont';\n  font-variation-settings: \n    'wght' 450,  /* Weight */\n    'wdth' 80,   /* Width */\n    'slnt' -10;  /* Slant */\n}\n\n/* Animate weight on hover */\n.text:hover {\n  font-variation-settings: 'wght' 700;\n}[/CODE]\nVariable fonts contain multiple styles in one file, reducing file size and enabling smooth transitions between weights. Use standard properties like <pre>font-weight</pre> when possible, as they're higher-level and more maintainable. Use font-variation-settings for custom axes.",
            topic: {
                topics: ["Advanced Typography"]
            }
        },
        {
            id: 13,
            question: "What does <pre>text-rendering: optimizeLegibility</pre> do?",
            options: {
                A: "Makes text render faster",
                B: "Enables kerning and ligatures for better typography at the cost of performance",
                C: "Reduces text quality",
                D: "Only affects mobile devices"
            },
            correct: "B",
            explanation: "<pre>text-rendering: optimizeLegibility</pre> prioritizes typography quality by enabling kerning (letter spacing adjustments) and ligatures (combined letter forms) at the potential cost of rendering performance:\n[CODE]h1, h2, h3 {\n  text-rendering: optimizeLegibility;\n}[/CODE]\nThe values are:\n- <pre>auto</pre>: Browser decides (default)\n- <pre>optimizeSpeed</pre>: Prioritize speed, disable kerning/ligatures\n- <pre>optimizeLegibility</pre>: Prioritize typography, enable kerning/ligatures\n- <pre>geometricPrecision</pre>: Prioritize geometric accuracy\n\nUse <pre>optimizeLegibility</pre> for headings and important text where typography matters. Avoid on body text in long documents as it can impact performance.",
            topic: {
                topics: ["Advanced Typography"]
            }
        },
        {
            id: 14,
            question: "What creates a new stacking context in CSS?",
            options: {
                A: "Only z-index",
                B: "Multiple properties including positioned elements with z-index, opacity < 1, transform, filter, etc.",
                C: "Background color only",
                D: "Margin and padding"
            },
            correct: "B",
            explanation: "Many CSS properties create new stacking contexts, not just <pre>z-index</pre>. Common triggers include:\n- Positioned elements (relative, absolute, fixed, sticky) with <pre>z-index</pre> other than auto\n- Elements with <pre>opacity</pre> less than 1\n- Elements with <pre>transform</pre> other than none\n- Elements with <pre>filter</pre> other than none\n- Elements with <pre>mix-blend-mode</pre> other than normal\n- Flex/grid items with <pre>z-index</pre> other than auto\n- Elements with <pre>isolation: isolate</pre>\n\n[CODE]/* These all create stacking contexts */\n.context1 { opacity: 0.99; }\n.context2 { transform: translateZ(0); }\n.context3 { filter: blur(0); }[/CODE]\nUnderstanding stacking contexts is crucial for fixing z-index issues.",
            topic: {
                topics: ["Complex Stacking"]
            }
        },
        {
            id: 15,
            question: "What is the purpose of <pre>isolation: isolate</pre>?",
            options: {
                A: "Prevents element interaction",
                B: "Creates a new stacking context to isolate blend modes and z-index",
                C: "Isolates events",
                D: "Creates shadow DOM"
            },
            correct: "B",
            explanation: "<pre>isolation: isolate</pre> explicitly creates a new stacking context, which is useful for isolating blend mode effects or managing z-index hierarchies without side effects:\n[CODE]/* Isolate blend mode effects */\n.container {\n  isolation: isolate;\n}\n\n.child {\n  mix-blend-mode: multiply;\n  /* Only blends with siblings, not elements outside container */\n}[/CODE]\nThis is cleaner than using <pre>opacity: 0.99</pre> or similar hacks to create stacking contexts. It also helps contain z-index issues within components, preventing conflicts with other parts of the page. The default value is <pre>auto</pre> (no isolation).",
            topic: {
                topics: ["Complex Stacking"]
            }
        },
        {
            id: 16,
            question: "What does <pre>grid-auto-flow: dense</pre> do?",
            options: {
                A: "Makes grid items denser",
                B: "Fills gaps in the grid by placing items in earlier empty spaces",
                C: "Increases grid spacing",
                D: "Creates a dense layout with no gaps"
            },
            correct: "B",
            explanation: "<pre>grid-auto-flow: dense</pre> enables the dense packing algorithm, which fills gaps in the grid by placing smaller items in earlier empty spaces, even if it means items appear out of source order:\n[CODE].grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-flow: dense;\n}\n\n/* Items will fill gaps */\n.large { grid-column: span 2; }\n.small { grid-column: span 1; }[/CODE]\nThis creates a more visually compact layout but can affect accessibility since visual order differs from DOM order. Screen readers follow DOM order, not visual order. Use with caution and test with keyboard navigation. Default is <pre>row</pre> (flows left to right, top to bottom without backtracking).",
            topic: {
                topics: ["Grid Advanced Patterns"]
            }
        },
        {
            id: 17,
            question: "What is the difference between <pre>auto-fit</pre> and <pre>auto-fill</pre> in CSS Grid?",
            options: {
                A: "They are identical",
                B: "auto-fit collapses empty tracks, auto-fill creates empty tracks",
                C: "auto-fill is faster",
                D: "auto-fit only works with pixels"
            },
            correct: "B",
            explanation: "<pre>auto-fit</pre> and <pre>auto-fill</pre> both create responsive grids, but differ in handling empty space:\n- <pre>auto-fill</pre>: Creates empty tracks to fill the row\n- <pre>auto-fit</pre>: Collapses empty tracks and expands filled ones\n\n[CODE]/* auto-fill: creates empty 200px columns */\ngrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n\n/* auto-fit: expands items to fill space */\ngrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));[/CODE]\nWith few items, <pre>auto-fit</pre> makes them expand to fill the container, while <pre>auto-fill</pre> maintains the column width and leaves empty space. Use <pre>auto-fit</pre> when you want items to stretch, <pre>auto-fill</pre> when you want consistent sizing.",
            topic: {
                topics: ["Grid Advanced Patterns"]
            }
        },
        {
            id: 18,
            question: "What does the <pre>order</pre> property do in Flexbox and Grid?",
            options: {
                A: "Orders items alphabetically",
                B: "Changes the visual order of items without changing HTML order",
                C: "Orders by size",
                D: "Only works in Flexbox"
            },
            correct: "B",
            explanation: "The <pre>order</pre> property changes the visual order of flex or grid items without modifying the HTML source order. Default is 0, items are displayed in source order unless <pre>order</pre> is specified:\n[CODE].item1 { order: 3; }\n.item2 { order: 1; }  /* Appears first */\n.item3 { order: 2; }[/CODE]\nLower values appear first, higher values later. This is useful for responsive reordering:\n[CODE]@media (max-width: 600px) {\n  .sidebar { order: 2; }  /* Move after main content */\n  .main { order: 1; }\n}[/CODE]\nCaution: Visual order differs from DOM order, which affects screen readers and keyboard navigation. Use semantic HTML order and only reorder for visual layout when necessary.",
            topic: {
                topics: ["Flexbox Patterns", "Grid Advanced Patterns"]
            }
        },
        {
            id: 19,
            question: "What is the purpose of <pre>align-self</pre> in Flexbox?",
            options: {
                A: "Aligns all items",
                B: "Overrides align-items for a specific flex item",
                C: "Aligns text",
                D: "Centers the container"
            },
            correct: "B",
            explanation: "<pre>align-self</pre> allows a specific flex item to override the <pre>align-items</pre> value set on the flex container, giving individual control over cross-axis alignment:\n[CODE].container {\n  display: flex;\n  align-items: center;  /* All items centered */\n}\n\n.special-item {\n  align-self: flex-end;  /* This one at the end */\n}[/CODE]\nValues include:\n- <pre>auto</pre>: Inherit from align-items (default)\n- <pre>flex-start</pre>: Align to start of cross axis\n- <pre>flex-end</pre>: Align to end of cross axis\n- <pre>center</pre>: Center on cross axis\n- <pre>stretch</pre>: Stretch to fill container\n- <pre>baseline</pre>: Align baselines\n\nThis is essential for creating flexible layouts where most items align one way but specific items need different alignment.",
            topic: {
                topics: ["Flexbox Patterns"]
            }
        },
        {
            id: 20,
            question: "What does <pre>justify-self</pre> do in CSS Grid?",
            options: {
                A: "Justifies text",
                B: "Aligns an individual grid item along the inline axis within its cell",
                C: "Only works in Flexbox",
                D: "Creates justified layouts"
            },
            correct: "B",
            explanation: "<pre>justify-self</pre> aligns an individual grid item along the inline axis (typically horizontal) within its grid cell, overriding <pre>justify-items</pre> set on the grid container:\n[CODE].grid {\n  display: grid;\n  justify-items: start;  /* All items align left */\n}\n\n.special-item {\n  justify-self: end;  /* This one aligns right */\n}[/CODE]\nValues include:\n- <pre>auto</pre>: Inherit from justify-items (default)\n- <pre>start</pre>: Align to start of cell\n- <pre>end</pre>: Align to end of cell\n- <pre>center</pre>: Center in cell\n- <pre>stretch</pre>: Stretch to fill cell\n\nNote: <pre>justify-self</pre> doesn't work in Flexbox (no effect), only Grid. In Flexbox, use margins for similar effects.",
            topic: {
                topics: ["Grid Advanced Patterns"]
            }
        },
        {
            id: 21,
            question: "What is OOCSS in CSS architecture?",
            options: {
                A: "Object-Oriented CSS - separating structure from skin and container from content",
                B: "Optimized Ordered CSS",
                C: "Overflow Object CSS",
                D: "Outdated CSS Syntax"
            },
            correct: "A",
            explanation: "OOCSS (Object-Oriented CSS) is a methodology that promotes two main principles:\n1. **Separate structure from skin**: Visual features (colors, borders) separate from layout\n2. **Separate container from content**: Objects should look the same regardless of location\n\n[CODE]/* Structure */\n.box {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n/* Skin */\n.box-primary {\n  background: blue;\n  color: white;\n}\n\n/* Reusable anywhere */\n<div class=\"box box-primary\">Content</div>[/CODE]\nThis creates modular, reusable components that are easier to maintain and lead to less CSS bloat. Objects are independent and predictable.",
            topic: {
                topics: ["CSS Architecture"]
            }
        },
        {
            id: 22,
            question: "What does <pre>@page</pre> rule control in print stylesheets?",
            options: {
                A: "Page navigation",
                B: "Page margins and size when printing",
                C: "Web pages only",
                D: "Page loading"
            },
            correct: "B",
            explanation: "The <pre>@page</pre> rule defines page properties like margins and size for print media, allowing control over the printed page layout:\n[CODE]@page {\n  size: A4 portrait;\n  margin: 2cm;\n}\n\n/* First page different margins */\n@page :first {\n  margin-top: 5cm;\n}\n\n/* Left and right pages */\n@page :left {\n  margin-left: 3cm;\n}\n\n@page :right {\n  margin-right: 3cm;\n}[/CODE]\nYou can control page size (A4, letter, legal), orientation (portrait, landscape), and margins. The <pre>:left</pre>, <pre>:right</pre>, and <pre>:first</pre> pseudo-classes allow different styling for different pages, useful for creating professional print layouts with proper binding margins.",
            topic: {
                topics: ["Print Styles"]
            }
        },
        {
            id: 23,
            question: "What does <pre>writing-mode: vertical-rl</pre> do?",
            options: {
                A: "Makes text bold",
                B: "Creates vertical text flow from right to left (top to bottom, columns right to left)",
                C: "Rotates elements",
                D: "Only affects Asian languages"
            },
            correct: "B",
            explanation: "<pre>writing-mode: vertical-rl</pre> changes the text flow to vertical, running from top to bottom, with columns progressing from right to left (as in traditional Japanese or Chinese):\n[CODE].vertical {\n  writing-mode: vertical-rl;\n  /* Text flows top→bottom, columns right→left */\n}[/CODE]\nValues include:\n- <pre>horizontal-tb</pre>: Horizontal top-to-bottom (default)\n- <pre>vertical-rl</pre>: Vertical right-to-left\n- <pre>vertical-lr</pre>: Vertical left-to-right\n\nWriting mode affects logical properties - <pre>inline-start</pre> becomes top in vertical-rl. This demonstrates why logical properties are important for internationalization and creative layouts.",
            topic: {
                topics: ["CSS Logical Properties", "Advanced Typography"]
            }
        },
        {
            id: 24,
            question: "What does <pre>contain: layout</pre> do for performance?",
            options: {
                A: "Contains overflowing content",
                B: "Isolates layout calculations to improve rendering performance",
                C: "Creates containers",
                D: "Only affects mobile devices"
            },
            correct: "B",
            explanation: "<pre>contain: layout</pre> tells the browser that the element's internal layout is isolated from the rest of the page, allowing the browser to optimize rendering by only recalculating layout for that subtree:\n[CODE].widget {\n  contain: layout;\n  /* Layout changes inside don't affect outside */\n}[/CODE]\nValues include:\n- <pre>none</pre>: No containment\n- <pre>layout</pre>: Layout containment\n- <pre>paint</pre>: Paint containment\n- <pre>size</pre>: Size containment\n- <pre>style</pre>: Style containment\n- <pre>content</pre>: Shorthand for layout + paint\n- <pre>strict</pre>: Shorthand for layout + paint + size\n\nThis optimization is particularly useful for repeated components, infinite scrolling, and complex widgets where internal changes shouldn't trigger page-wide recalculation.",
            topic: {
                topics: ["CSS Architecture"]
            }
        },
        {
            id: 25,
            question: "What does <pre>inset</pre> property provide as a shorthand?",
            options: {
                A: "Insert content",
                B: "Shorthand for top, right, bottom, left positioning offsets",
                C: "Inner padding",
                D: "Inline styles"
            },
            correct: "B",
            explanation: "<pre>inset</pre> is a shorthand property for setting <pre>top</pre>, <pre>right</pre>, <pre>bottom</pre>, and <pre>left</pre> positioning offsets in one declaration:\n[CODE]/* Traditional */\n.element {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n/* Shorthand */\n.element {\n  position: absolute;\n  inset: 0;  /* All sides 0 */\n}\n\n/* Different values */\ninset: 10px 20px;         /* top/bottom left/right */\ninset: 10px 20px 30px;    /* top left/right bottom */\ninset: 10px 20px 30px 40px; /* top right bottom left */[/CODE]\nYou can also use logical versions: <pre>inset-block</pre> and <pre>inset-inline</pre>. This shorthand makes centering and full-coverage positioning more concise.",
            topic: {
                topics: ["CSS Logical Properties"]
            }
        }
    ]
};
