module.exports = {
    metadata: {
        title: "CSS Inheritance and Cascade",
        description: "Master CSS inheritance concepts and understand which properties inherit by default. Learn to use inherit, initial, and unset keywords to control property values and inheritance behavior.",
        difficulty: "easy",
        domain: "css",
        timeLimit: 30,
        questionCount: 30,
        assessmentId: 26,
        assessmentUniqueId: 1731535200000,
        testType: "multiple-choice",
        topics: [
            "CSS Inheritance Basics",
            "Default Inherited Properties",
            "Inherit Keyword",
            "Initial Keyword",
            "Unset Keyword",
            "Inherited vs Non-inherited",
            "Text Property Inheritance",
            "Box Model Inheritance",
            "Forcing Inheritance",
            "Inheritance Best Practices"
        ],
        topicLinks: [
            "CSS Inheritance Basics",
            "Default Inherited Properties",
            "Inherit Keyword",
            "Initial Keyword",
            "Unset Keyword",
            "Inherited vs Non-inherited",
            "Text Property Inheritance",
            "Box Model Inheritance",
            "Forcing Inheritance",
            "Inheritance Best Practices"
        ],
        keywords: [
            "inheritance",
            "inherit",
            "initial",
            "unset",
            "revert",
            "color",
            "font-family",
            "font-size",
            "line-height",
            "text-align",
            "border",
            "margin",
            "padding",
            "background",
            "width",
            "height",
            "inherited properties",
            "non-inherited properties",
            "cascade",
            "property values",
            "default values",
            "parent element",
            "child element",
            "text properties",
            "box model"
        ]
    },
    questions: [
        {
            id: 1,
            question: "What does CSS inheritance mean?",
            options: {
                A: "Copying CSS files from one project to another",
                B: "Child elements automatically receive certain property values from their parent elements",
                C: "Using CSS frameworks",
                D: "Linking external stylesheets"
            },
            correct: "B",
            explanation: "CSS inheritance means that child elements automatically receive certain property values from their parent elements without explicitly setting them, creating a cascading effect down the DOM tree.",
            topic: "CSS Inheritance Basics"
        },
        {
            id: 2,
            question: "Which property inherits by default?",
            options: {
                A: "border",
                B: "margin",
                C: "color",
                D: "padding"
            },
            correct: "C",
            explanation: "The color property inherits by default. Text-related properties generally inherit, while box model properties (border, margin, padding) do not.",
            topic: "Default Inherited Properties"
        },
        {
            id: 3,
            question: "Does the <pre>font-family</pre> property inherit by default?",
            options: {
                A: "No, it must be set on every element",
                B: "Yes, it inherits from the parent element",
                C: "Only for paragraph elements",
                D: "Only if explicitly set to inherit"
            },
            correct: "B",
            explanation: "Yes, font-family inherits by default. This is why setting font-family on the body element applies to most text throughout the page.",
            topic: "Text Property Inheritance"
        },
        {
            id: 4,
            question: "What does the <pre>inherit</pre> keyword do?",
            options: {
                A: "Resets the property to its default value",
                B: "Forces the property to inherit the value from its parent element",
                C: "Copies styles from another element",
                D: "Prevents inheritance"
            },
            correct: "B",
            explanation: "The inherit keyword forces a property to inherit its value from the parent element, even if that property doesn't normally inherit.",
            topic: "Inherit Keyword"
        },
        {
            id: 5,
            question: "Can you use <pre>inherit</pre> on properties that don't normally inherit?",
            options: {
                A: "No, it only works on inherited properties",
                B: "Yes, inherit forces any property to take the parent's value",
                C: "Only on border properties",
                D: "Only in modern browsers"
            },
            correct: "B",
            explanation: "Yes, you can use inherit on any property to force it to take the parent element's value, even for properties that don't inherit by default like margin or border.",
            topic: "Forcing Inheritance"
        },
        {
            id: 6,
            question: "What does the <pre>initial</pre> keyword do?",
            options: {
                A: "Sets the property to the parent's value",
                B: "Sets the property to its CSS specification default value",
                C: "Sets the property to its first defined value",
                D: "Removes the property"
            },
            correct: "B",
            explanation: "The initial keyword sets a property to its default value as defined in the CSS specification, ignoring inheritance and any other styles.",
            topic: "Initial Keyword"
        },
        {
            id: 7,
            question: "If you set <pre>color: initial</pre>, what color will the text be?",
            options: {
                A: "Black",
                B: "The browser's default (typically black, but depends on the browser)",
                C: "White",
                D: "Transparent"
            },
            correct: "B",
            explanation: "color: initial sets the color to the CSS specification's default, which is typically black but can vary by browser. It doesn't inherit from the parent.",
            topic: "Initial Keyword"
        },
        {
            id: 8,
            question: "What does the <pre>unset</pre> keyword do?",
            options: {
                A: "Always resets to the default value",
                B: "Acts like inherit for inherited properties, and initial for non-inherited properties",
                C: "Removes the property entirely",
                D: "Always inherits from parent"
            },
            correct: "B",
            explanation: "The unset keyword behaves like inherit if the property naturally inherits, and like initial if the property doesn't naturally inherit. It's a smart reset.",
            topic: "Unset Keyword"
        },
        {
            id: 9,
            question: "Does the <pre>margin</pre> property inherit by default?",
            options: {
                A: "Yes, margins inherit from parent elements",
                B: "No, margin does not inherit by default",
                C: "Only margin-top inherits",
                D: "Only when set to auto"
            },
            correct: "B",
            explanation: "No, margin (and other box model properties) do not inherit by default. Each element's margin must be explicitly set or defaults to 0.",
            topic: "Box Model Inheritance"
        },
        {
            id: 10,
            question: "Does the <pre>padding</pre> property inherit by default?",
            options: {
                A: "Yes, padding inherits from parent",
                B: "No, padding does not inherit by default",
                C: "Only for block elements",
                D: "Only when using percentages"
            },
            correct: "B",
            explanation: "No, padding does not inherit by default. Like other box model properties, it must be explicitly set on each element.",
            topic: "Box Model Inheritance"
        },
        {
            id: 11,
            question: "Which of these properties inherits by default?",
            options: {
                A: "background-color",
                B: "border",
                C: "text-align",
                D: "width"
            },
            correct: "C",
            explanation: "text-align inherits by default. Text-related properties typically inherit, while layout properties like background-color, border, and width do not.",
            topic: "Text Property Inheritance"
        },
        {
            id: 12,
            question: "Does <pre>line-height</pre> inherit by default?",
            options: {
                A: "No, it must be set on every element",
                B: "Yes, line-height inherits from the parent",
                C: "Only for paragraphs",
                D: "Only when using unitless values"
            },
            correct: "B",
            explanation: "Yes, line-height inherits by default. This is particularly useful when using unitless values (like 1.5) which scale proportionally.",
            topic: "Text Property Inheritance"
        },
        {
            id: 13,
            question: "Does the <pre>border</pre> property inherit by default?",
            options: {
                A: "Yes, borders inherit from parent elements",
                B: "No, border does not inherit by default",
                C: "Only border-color inherits",
                D: "Only solid borders inherit"
            },
            correct: "B",
            explanation: "No, the border property does not inherit by default. Each element's border must be explicitly defined.",
            topic: "Box Model Inheritance"
        },
        {
            id: 14,
            question: "Does <pre>background-color</pre> inherit by default?",
            options: {
                A: "Yes, background colors inherit",
                B: "No, background-color does not inherit by default",
                C: "Only for div elements",
                D: "Only when transparent"
            },
            correct: "B",
            explanation: "No, background-color does not inherit. By default, elements have a transparent background, so you can see the parent's background through them, but this is not inheritance.",
            topic: "Inherited vs Non-inherited"
        },
        {
            id: 15,
            question: "What is the difference between a transparent background and an inherited background?",
            options: {
                A: "They are the same thing",
                B: "Transparent shows the parent's background through, inherited copies the parent's background-color value",
                C: "Inherited is always transparent",
                D: "There is no difference"
            },
            correct: "B",
            explanation: "Transparent (the default) allows the parent's background to show through. If you use inherit, the child element gets its own background-color set to the parent's value, which behaves differently with opacity and layering.",
            topic: "Inherited vs Non-inherited"
        },
        {
            id: 16,
            question: "Does <pre>font-size</pre> inherit by default?",
            options: {
                A: "No, font-size must be set explicitly",
                B: "Yes, font-size inherits from the parent",
                C: "Only for text elements",
                D: "Only when using em units"
            },
            correct: "B",
            explanation: "Yes, font-size inherits by default. This is why setting font-size on a parent element affects all child text elements.",
            topic: "Text Property Inheritance"
        },
        {
            id: 17,
            question: "If a parent has <pre>color: blue</pre> and the child has <pre>color: inherit</pre>, what color is the child's text?",
            options: {
                A: "Black (default)",
                B: "Blue (inherited from parent)",
                C: "Transparent",
                D: "Red"
            },
            correct: "B",
            explanation: "The child's text will be blue because color: inherit explicitly takes the parent's color value.",
            topic: "Inherit Keyword"
        },
        {
            id: 18,
            question: "Does the <pre>width</pre> property inherit by default?",
            options: {
                A: "Yes, width inherits from parent",
                B: "No, width does not inherit by default",
                C: "Only for block elements",
                D: "Only when set to 100%"
            },
            correct: "B",
            explanation: "No, width does not inherit by default. Each element's width is determined by its content, CSS rules, or explicit width values.",
            topic: "Box Model Inheritance"
        },
        {
            id: 19,
            question: "Does the <pre>height</pre> property inherit by default?",
            options: {
                A: "Yes, height inherits from parent",
                B: "No, height does not inherit by default",
                C: "Only for inline elements",
                D: "Only when using percentages"
            },
            correct: "B",
            explanation: "No, height does not inherit by default. Like width, it must be explicitly set or is determined by content.",
            topic: "Box Model Inheritance"
        },
        {
            id: 20,
            question: "Which property category typically inherits by default?",
            options: {
                A: "Box model properties (margin, padding, border)",
                B: "Text and font properties (color, font-family, text-align)",
                C: "Layout properties (width, height, display)",
                D: "Background properties"
            },
            correct: "B",
            explanation: "Text and font properties typically inherit by default because it makes sense for child text elements to match their parent's typography. Box model and layout properties do not.",
            topic: "Default Inherited Properties"
        },
        {
            id: 21,
            question: "Can you force a non-inheriting property like <pre>border</pre> to inherit?",
            options: {
                A: "No, it's impossible",
                B: "Yes, using border: inherit",
                C: "Only with JavaScript",
                D: "Only for child divs"
            },
            correct: "B",
            explanation: "Yes, you can force any property to inherit by using the inherit keyword, even properties that don't normally inherit like border: inherit.",
            topic: "Forcing Inheritance"
        },
        {
            id: 22,
            question: "What happens if you set <pre>padding: inherit</pre> on an element?",
            options: {
                A: "Nothing, padding can't inherit",
                B: "The element's padding becomes the same as its parent's padding",
                C: "The padding is removed",
                D: "It uses the default padding"
            },
            correct: "B",
            explanation: "Using padding: inherit forces the element to take the same padding values as its parent, even though padding doesn't naturally inherit.",
            topic: "Forcing Inheritance"
        },
        {
            id: 23,
            question: "Does <pre>text-decoration</pre> inherit by default?",
            options: {
                A: "No, it doesn't inherit",
                B: "Yes, but it's special - the decoration appears on descendants",
                C: "Only underline inherits",
                D: "Only for links"
            },
            correct: "B",
            explanation: "text-decoration is special: while it doesn't technically inherit, the decoration is drawn across descendant elements. Setting text-decoration: underline on a parent underlines all child text.",
            topic: "Text Property Inheritance"
        },
        {
            id: 24,
            question: "If you want to reset all properties on an element to their default inherited or initial values, which keyword is most appropriate?",
            options: {
                A: "inherit",
                B: "initial",
                C: "all: unset",
                D: "reset"
            },
            correct: "C",
            explanation: "Using all: unset resets all properties to either their inherited value (if they naturally inherit) or initial value (if they don't). This is a comprehensive reset.",
            topic: "Unset Keyword"
        },
        {
            id: 25,
            question: "Does <pre>cursor</pre> inherit by default?",
            options: {
                A: "No, cursor must be set on each element",
                B: "Yes, cursor inherits from the parent",
                C: "Only pointer cursors inherit",
                D: "Only for interactive elements"
            },
            correct: "B",
            explanation: "Yes, the cursor property inherits by default. This is why setting cursor on a parent element affects all its children unless overridden.",
            topic: "Default Inherited Properties"
        },
        {
            id: 26,
            question: "Does <pre>opacity</pre> inherit by default?",
            options: {
                A: "Yes, opacity inherits",
                B: "No, but child elements are affected by parent opacity",
                C: "Only values below 0.5 inherit",
                D: "Only for images"
            },
            correct: "B",
            explanation: "opacity does not inherit as a property value, but child elements are visually affected because they're rendered within the parent's opacity context. Setting opacity: 0.5 on a parent makes all children semi-transparent too.",
            topic: "Inherited vs Non-inherited"
        },
        {
            id: 27,
            question: "Does <pre>visibility</pre> inherit by default?",
            options: {
                A: "No, it doesn't inherit",
                B: "Yes, visibility inherits from the parent",
                C: "Only hidden values inherit",
                D: "Only for text elements"
            },
            correct: "B",
            explanation: "Yes, visibility inherits by default. Setting visibility: hidden on a parent hides all children unless they explicitly set visibility: visible.",
            topic: "Default Inherited Properties"
        },
        {
            id: 28,
            question: "What is the practical use of <pre>inherit</pre> for the border property?",
            options: {
                A: "There is no practical use",
                B: "Making child elements have the same border as their parent",
                C: "Removing borders",
                D: "Creating double borders"
            },
            correct: "B",
            explanation: "Using border: inherit on a child element makes it have the same border as its parent, which can be useful for maintaining consistent styling without repeating border declarations.",
            topic: "Forcing Inheritance"
        },
        {
            id: 29,
            question: "Does <pre>list-style</pre> inherit by default?",
            options: {
                A: "No, it must be set on each list",
                B: "Yes, list-style inherits from the parent",
                C: "Only for ul elements",
                D: "Only the bullet style inherits"
            },
            correct: "B",
            explanation: "Yes, list-style (including list-style-type, list-style-position, and list-style-image) inherits by default, which is why setting it on ul affects all nested li elements.",
            topic: "Default Inherited Properties"
        },
        {
            id: 30,
            question: "If you set <pre>all: initial</pre> on an element, what happens?",
            options: {
                A: "Only inherited properties are reset",
                B: "All properties are reset to their CSS specification defaults",
                C: "The element becomes invisible",
                D: "All properties inherit from the parent"
            },
            correct: "B",
            explanation: "all: initial resets all CSS properties on the element to their CSS specification default values, ignoring inheritance and any cascade. This is a hard reset.",
            topic: "Initial Keyword"
        }
    ]
};
