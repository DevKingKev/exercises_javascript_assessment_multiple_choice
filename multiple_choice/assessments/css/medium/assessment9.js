module.exports = {
    metadata: {
        title: "CSS Medium - CSS Custom Properties (Variables)",
        description: "Intermediate assessment covering CSS custom properties (variables): declaring custom properties with --variable-name syntax, var() function usage, variable scope (global vs local), :root for global variables, fallback values, cascading and inheritance, JavaScript manipulation, theming and responsive use cases, and performance benefits.",
        difficulty: "medium",
        domain: "css",
        timeLimit: 45,
        questionCount: 25,
        assessmentId: 9,
        assessmentUniqueId: 1763116884720,
        testType: "multiple-choice",
        topics: [
            "CSS Custom Properties",
            "CSS Variables",
            "Variable Declaration",
            "var() Function",
            "Variable Scope",
            ":root Selector",
            "Global Variables",
            "Local Variables",
            "Fallback Values",
            "Cascading Variables",
            "Variable Inheritance",
            "JavaScript Manipulation",
            "CSS Theming",
            "Performance"
        ],
        topicLinks: [
            { "topicName": "CSS Custom Properties", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
            { "topicName": "CSS Variables", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/--*" },
            { "topicName": "var() Function", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/var" },
            { "topicName": ":root Selector", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:root" },
            { "topicName": "Cascading Variables", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade" },
            { "topicName": "JavaScript Manipulation", "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty" }
        ],
        keywords: [
            "custom properties",
            "css variables",
            "--variable",
            "var()",
            "scope",
            ":root",
            "fallback",
            "cascading",
            "inheritance",
            "theming",
            "javascript",
            "setProperty",
            "getPropertyValue",
            "performance"
        ]
    },
    questions: [
        {
            id: 1,
            question: "What is the correct syntax for declaring a CSS custom property?",
            options: {
                A: "<pre>$variable-name: value;</pre>",
                B: "<pre>--variable-name: value;</pre>",
                C: "<pre>@variable-name: value;</pre>",
                D: "<pre>var-name: value;</pre>"
            },
            correct: "B",
            explanation: "CSS custom properties are declared using two dashes followed by the property name: <pre>--variable-name: value;</pre>. For example: <pre>--primary-color: #3498db;</pre>. This distinguishes them from standard CSS properties.",
            topic: "Variable Declaration"
        },
        {
            id: 2,
            question: "How do you use a CSS custom property value?",
            options: {
                A: "<pre>color: $primary-color;</pre>",
                B: "<pre>color: var(--primary-color);</pre>",
                C: "<pre>color: --primary-color;</pre>",
                D: "<pre>color: @primary-color;</pre>"
            },
            correct: "B",
            explanation: "To use a custom property, use the <pre>var()</pre> function with the property name: <pre>color: var(--primary-color);</pre>. The <pre>var()</pre> function retrieves the value of the custom property from the cascade.",
            topic: "var() Function"
        },
        {
            id: 3,
            question: "Where should you typically declare global CSS variables?",
            options: {
                A: "In the <pre>body</pre> selector",
                B: "In the <pre>:root</pre> pseudo-class",
                C: "In the <pre>html</pre> selector",
                D: "In a <pre>*</pre> universal selector"
            },
            correct: "B",
            explanation: "The <pre>:root</pre> pseudo-class is the conventional place to declare global CSS variables. <pre>:root</pre> represents the root element (<pre><html></pre>) and has higher specificity than the <pre>html</pre> selector, making it ideal for global variables: <pre>:root { --primary-color: blue; }</pre>",
            topic: ":root Selector"
        },
        {
            id: 4,
            question: "What happens if you reference a custom property that doesn't exist?",
            options: {
                A: "A JavaScript error is thrown",
                B: "The property is treated as invalid and ignored (browser uses initial/inherited value)",
                C: "The browser assigns a default value",
                D: "The entire stylesheet fails to load"
            },
            correct: "B",
            explanation: "If a custom property doesn't exist, the declaration using it is invalid at computed-value time. The browser falls back to the inherited value (if the property inherits) or the initial value. No error is thrown. Example: <pre>color: var(--nonexistent);</pre> would be invalid.",
            topic: "var() Function"
        },
        {
            id: 5,
            question: "How do you provide a fallback value in <pre>var()</pre>?",
            options: {
                A: "<pre>var(--color, blue)</pre>",
                B: "<pre>var(--color || blue)</pre>",
                C: "<pre>var(--color) || blue</pre>",
                D: "<pre>var(--color default blue)</pre>"
            },
            correct: "A",
            explanation: "Provide a fallback value as the second parameter to <pre>var()</pre>, separated by a comma: <pre>color: var(--primary-color, blue);</pre>. If <pre>--primary-color</pre> isn't defined, <pre>blue</pre> is used. You can even nest fallbacks: <pre>var(--color1, var(--color2, red))</pre>",
            topic: "Fallback Values"
        },
        {
            id: 6,
            question: "Can CSS custom properties be inherited?",
            options: {
                A: "No, they never inherit",
                B: "Yes, custom properties inherit by default like color and font-family",
                C: "Only if you use <pre>inherit</pre> keyword",
                D: "Only global variables inherit"
            },
            correct: "B",
            explanation: "CSS custom properties inherit by default. If you define <pre>--primary-color</pre> on a parent element, child elements can access it unless overridden. This inheritance is key to how scoped variables work in CSS.",
            topic: "Variable Inheritance"
        },
        {
            id: 7,
            question: "What is the scope of a variable declared on a specific element?",
            options: {
                A: "Global to the entire document",
                B: "Local to that element and its descendants",
                C: "Only to that exact element",
                D: "To all elements of the same type"
            },
            correct: "B",
            explanation: "Variables declared on an element are scoped to that element and its descendants (through inheritance). For example, <pre>.card { --spacing: 20px; }</pre> makes <pre>--spacing</pre> available to <pre>.card</pre> and all elements inside it, but not to sibling or parent elements.",
            topic: "Variable Scope"
        },
        {
            id: 8,
            question: "Can you override a global variable locally?",
            options: {
                A: "No, global variables cannot be changed",
                B: "Yes, declare the same variable name in a more specific selector",
                C: "Only with <pre>!important</pre>",
                D: "Only through JavaScript"
            },
            correct: "B",
            explanation: "You can override global variables by redeclaring them in more specific selectors. The cascade applies normally: <pre>:root { --color: blue; } .special { --color: red; }</pre>. Elements with class <pre>special</pre> will use red, demonstrating the cascading nature of variables.",
            topic: "Cascading Variables"
        },
        {
            id: 9,
            question: "How do you read a CSS variable value with JavaScript?",
            options: {
                A: "<pre>element.style.--variableName</pre>",
                B: "<pre>getComputedStyle(element).getPropertyValue('--variable-name')</pre>",
                C: "<pre>element.getCSSVariable('--variable-name')</pre>",
                D: "<pre>document.getVariable('--variable-name')</pre>"
            },
            correct: "B",
            explanation: "Use <pre>getComputedStyle()</pre> to get the computed styles, then <pre>getPropertyValue()</pre> to retrieve the variable: <pre>const value = getComputedStyle(element).getPropertyValue('--variable-name');</pre>. This returns the computed value of the custom property.",
            topic: "JavaScript Manipulation"
        },
        {
            id: 10,
            question: "How do you set a CSS variable value with JavaScript?",
            options: {
                A: "<pre>element.style.--variableName = 'value';</pre>",
                B: "<pre>element.style.setProperty('--variable-name', 'value');</pre>",
                C: "<pre>element.setCSSVariable('--variable-name', 'value');</pre>",
                D: "<pre>document.setVariable('--variable-name', 'value');</pre>"
            },
            correct: "B",
            explanation: "Use the <pre>setProperty()</pre> method on the element's style object: <pre>element.style.setProperty('--variable-name', 'value');</pre>. For global variables, use <pre>document.documentElement.style.setProperty('--variable-name', 'value');</pre>",
            topic: "JavaScript Manipulation"
        },
        {
            id: 11,
            question: "Can you use CSS variables in media queries?",
            options: {
                A: "Yes, in any part of media queries",
                B: "No, variables cannot be used in media query conditions",
                C: "Only for breakpoint values",
                D: "Only with JavaScript"
            },
            correct: "B",
            explanation: "CSS variables cannot be used in media query conditions like <pre>@media (min-width: var(--breakpoint))</pre> because media queries are evaluated before custom properties are computed. However, you can use variables inside media query blocks for property values.",
            topic: "CSS Custom Properties"
        },
        {
            id: 12,
            question: "What's a key advantage of using CSS variables for theming?",
            options: {
                A: "Faster download speeds",
                B: "Can change multiple property values across the site by updating a single variable",
                C: "Better browser support than regular CSS",
                D: "Automatic dark mode"
            },
            correct: "B",
            explanation: "CSS variables excel at theming because you can define color schemes, spacing, etc., in one place and update the entire site by changing those variables. For example, switching from light to dark mode can be done by updating a few root-level color variables rather than overriding hundreds of properties.",
            topic: "CSS Theming"
        },
        {
            id: 13,
            question: "Can CSS variables contain multiple values or complex expressions?",
            options: {
                A: "No, only single values",
                B: "Yes, they can store any valid CSS value including lists and complex values",
                C: "Only numeric values",
                D: "Only color values"
            },
            correct: "B",
            explanation: "CSS variables can store any valid CSS value, including multiple values, lists, and complex expressions: <pre>--shadow: 0 2px 4px rgba(0,0,0,0.1);</pre> or <pre>--padding: 10px 20px;</pre> or even <pre>--gradient: linear-gradient(to right, red, blue);</pre>",
            topic: "CSS Custom Properties"
        },
        {
            id: 14,
            question: "What happens with this code: <pre>--size: 20; width: var(--size)px;</pre>?",
            options: {
                A: "Works correctly, width is 20px",
                B: "Invalid, you cannot concatenate units this way",
                C: "Browser automatically adds px",
                D: "Works only in modern browsers"
            },
            correct: "B",
            explanation: "This is invalid. You cannot concatenate units outside <pre>var()</pre>. The correct approach is to store the unit: <pre>--size: 20px; width: var(--size);</pre> or use <pre>calc()</pre>: <pre>--size: 20; width: calc(var(--size) * 1px);</pre>",
            topic: "var() Function"
        },
        {
            id: 15,
            question: "How can you use <pre>calc()</pre> with CSS variables?",
            options: {
                A: "You cannot combine them",
                B: "<pre>width: calc(var(--base-width) + 20px);</pre>",
                C: "<pre>width: var(--base-width) + 20px;</pre>",
                D: "<pre>width: calc(--base-width + 20px);</pre>"
            },
            correct: "B",
            explanation: "CSS variables work seamlessly with <pre>calc()</pre>: <pre>width: calc(var(--base-width) + 20px);</pre> or <pre>font-size: calc(var(--base-size) * 1.5);</pre>. This is powerful for creating flexible, scalable designs.",
            topic: "var() Function"
        },
        {
            id: 16,
            question: "Are CSS custom properties case-sensitive?",
            options: {
                A: "No, like all CSS",
                B: "Yes, <pre>--myColor</pre> and <pre>--mycolor</pre> are different variables",
                C: "Only in strict mode",
                D: "Depends on the browser"
            },
            correct: "B",
            explanation: "Unlike most CSS which is case-insensitive, custom property names are case-sensitive. <pre>--Primary-Color</pre> and <pre>--primary-color</pre> are completely different variables. This is important to remember when naming and using variables.",
            topic: "Variable Declaration"
        },
        {
            id: 17,
            question: "What's a performance benefit of CSS variables compared to JavaScript-based theming?",
            options: {
                A: "Smaller file size",
                B: "Changes to CSS variables don't require JavaScript execution and avoid layout recalculation for each element",
                C: "Faster network requests",
                D: "Better compression"
            },
            correct: "B",
            explanation: "CSS variables are computed by the browser's CSS engine, which is highly optimized. Changing a variable triggers efficient updates through the cascade, avoiding the overhead of JavaScript execution and individual element manipulation. This makes variable-based theming much more performant than JS-based approaches.",
            topic: "Performance"
        },
        {
            id: 18,
            question: "Can you animate CSS variables?",
            options: {
                A: "No, variables cannot be animated",
                B: "Yes, with transitions and animations if the values are animatable types",
                C: "Only with JavaScript",
                D: "Only color variables"
            },
            correct: "B",
            explanation: "CSS variables can be animated with transitions and keyframe animations, as long as the values themselves are animatable. For example: <pre>:root { --size: 100px; transition: --size 0.3s; } :root:hover { --size: 200px; }</pre> However, browser support for animating custom properties directly is still evolving.",
            topic: "CSS Custom Properties"
        },
        {
            id: 19,
            question: "What's the difference between <pre>:root</pre> and <pre>html</pre> for declaring variables?",
            options: {
                A: "No difference",
                B: "<pre>:root</pre> has higher specificity than <pre>html</pre>",
                C: "<pre>html</pre> is more performant",
                D: "<pre>:root</pre> only works in modern browsers"
            },
            correct: "B",
            explanation: "While <pre>:root</pre> and <pre>html</pre> target the same element in HTML documents, <pre>:root</pre> is a pseudo-class with higher specificity (0,1,0) compared to <pre>html</pre> type selector (0,0,1). This makes <pre>:root</pre> better for global variables as it's less likely to be accidentally overridden.",
            topic: ":root Selector"
        },
        {
            id: 20,
            question: "How would you implement a dark mode toggle using CSS variables?",
            options: {
                A: "Create separate stylesheets",
                B: "Define color variables in <pre>:root</pre>, then override them in a <pre>.dark-mode</pre> class on the root element",
                C: "Use JavaScript to change all colors",
                D: "Use media queries only"
            },
            correct: "B",
            explanation: "A common pattern is: <pre>:root { --bg: white; --text: black; } .dark-mode { --bg: black; --text: white; }</pre> Then use these variables throughout your CSS: <pre>body { background: var(--bg); color: var(--text); }</pre>. Toggle dark mode by adding/removing the <pre>dark-mode</pre> class on the root element.",
            topic: "CSS Theming"
        },
        {
            id: 21,
            question: "Can you reference one CSS variable in another's definition?",
            options: {
                A: "No, variables cannot reference each other",
                B: "Yes, you can use <pre>var()</pre> in variable definitions",
                C: "Only if they're in the same selector",
                D: "Only for numeric values"
            },
            correct: "B",
            explanation: "You can use variables to define other variables: <pre>:root { --base-spacing: 8px; --spacing-large: calc(var(--base-spacing) * 2); }</pre>. This creates a flexible system where changing one base variable cascades through dependent variables.",
            topic: "CSS Custom Properties"
        },
        {
            id: 22,
            question: "What's the return value of <pre>getPropertyValue('--variable')</pre> if the variable isn't set?",
            options: {
                A: "<pre>null</pre>",
                B: "An empty string <pre>''</pre>",
                C: "<pre>undefined</pre>",
                D: "Throws an error"
            },
            correct: "B",
            explanation: "If a custom property isn't defined, <pre>getPropertyValue()</pre> returns an empty string <pre>''</pre>. This allows you to check if a variable is set: <pre>const value = getComputedStyle(element).getPropertyValue('--color'); if (value) { /* variable exists */ }</pre>",
            topic: "JavaScript Manipulation"
        },
        {
            id: 23,
            question: "How do CSS variables behave with the <pre>!important</pre> flag?",
            options: {
                A: "Variables cannot use <pre>!important</pre>",
                B: "The cascade applies normally; <pre>!important</pre> can be used in variable declarations",
                C: "<pre>!important</pre> only affects where variables are used, not declared",
                D: "All variables are automatically <pre>!important</pre>"
            },
            correct: "B",
            explanation: "CSS variables follow normal cascade rules and can use <pre>!important</pre>: <pre>--color: red !important;</pre> will override other declarations of <pre>--color</pre> following standard specificity and importance rules. The <pre>!important</pre> applies to the variable declaration itself.",
            topic: "Cascading Variables"
        },
        {
            id: 24,
            question: "What's a use case for locally scoped variables?",
            options: {
                A: "Global styling",
                B: "Component-specific values that shouldn't affect other parts of the page",
                C: "Faster performance",
                D: "Browser compatibility"
            },
            correct: "B",
            explanation: "Local variables are perfect for component-specific styling. For example: <pre>.button { --button-bg: blue; background: var(--button-bg); } .button--danger { --button-bg: red; }</pre>. This encapsulates the button's color logic without polluting the global scope or affecting other components.",
            topic: "Variable Scope"
        },
        {
            id: 25,
            question: "Can you use CSS variables in pseudo-element content?",
            options: {
                A: "No, content property doesn't support variables",
                B: "Yes, variables work in content property: <pre>content: var(--icon);</pre>",
                C: "Only for numeric content",
                D: "Only with quotes"
            },
            correct: "B",
            explanation: "CSS variables work in the <pre>content</pre> property: <pre>:root { --icon: '→'; } .link::after { content: var(--icon); }</pre>. This is useful for managing icons, labels, or other generated content that might need to change based on theme or language.",
            topic: "CSS Custom Properties"
        }
    ]
};
