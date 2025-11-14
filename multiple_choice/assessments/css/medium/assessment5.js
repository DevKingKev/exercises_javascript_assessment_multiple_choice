module.exports = {
    "metadata": {
        "title": "CSS Pseudo-elements and Advanced Pseudo-classes",
        "description": "Intermediate assessment covering pseudo-elements (::before, ::after, ::first-letter, ::first-line, ::selection, ::placeholder) and advanced pseudo-classes (:nth-child formulas, :nth-of-type, :first-of-type, :last-of-type, :only-child, :only-of-type, :empty, :target).",
        "difficulty": "medium",
        "domain": "css",
        "timeLimit": 45,
        "questionCount": 25,
        "assessmentId": 5,
        "assessmentUniqueId": 1763081102777,
        "testType": "multiple-choice",
        "topics": [
            "Pseudo-elements",
            "::before and ::after",
            "::first-letter and ::first-line",
            "::selection",
            "::placeholder",
            "Advanced Pseudo-classes",
            ":nth-child()",
            ":nth-of-type()",
            ":first-of-type and :last-of-type",
            ":only-child and :only-of-type",
            ":empty",
            ":target"
        ],
        "topicLinks": [
            {
                "topicName": "Pseudo-elements",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"
            },
            {
                "topicName": "::before and ::after",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
            },
            {
                "topicName": "::first-letter and ::first-line",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter"
            },
            {
                "topicName": "::selection",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/::selection"
            },
            {
                "topicName": "::placeholder",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder"
            },
            {
                "topicName": ":nth-child()",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child"
            },
            {
                "topicName": ":nth-of-type()",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type"
            },
            {
                "topicName": ":first-of-type and :last-of-type",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type"
            },
            {
                "topicName": ":only-child and :only-of-type",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child"
            },
            {
                "topicName": ":empty",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:empty"
            },
            {
                "topicName": ":target",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
            }
        ],
        "keywords": [
            "pseudo-element",
            "::before",
            "::after",
            "content",
            "::first-letter",
            "::first-line",
            "::selection",
            "::placeholder",
            ":nth-child",
            ":nth-of-type",
            "2n",
            "3n+1",
            ":first-of-type",
            ":last-of-type",
            ":only-child",
            ":only-of-type",
            ":empty",
            ":target",
            "fragment identifier"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "Which property is required when using <pre>::before</pre> or <pre>::after</pre> to insert content?",
            "options": {
                "A": "<pre>display</pre>",
                "B": "<pre>visibility</pre>",
                "C": "<pre>position</pre>",
                "D": "<pre>content</pre>"
            },
            "correct": "D",
            "explanation": "The <pre>content</pre> property is mandatory for <pre>::before</pre> and <pre>::after</pre>. Without it, the pseudo-element won't render. You can set it to an empty string (<pre>content: '';</pre>) if you only need the element for styling purposes.",
            "topic": "::before and ::after"
        },
        {
            "id": 2,
            "question": "What does the selector <pre>p::first-letter</pre> target?",
            "options": {
                "A": "The first letter of the entire document",
                "B": "The first letter of every paragraph",
                "C": "The first letter of the first paragraph only",
                "D": "All capital letters in paragraphs"
            },
            "correct": "B",
            "explanation": "The <pre>::first-letter</pre> pseudo-element targets the first letter of each matching element. So <pre>p::first-letter</pre> will style the first letter of every <pre>p</pre> element. It's commonly used for drop caps or decorative initial letters.",
            "topic": "::first-letter and ::first-line"
        },
        {
            "id": 3,
            "question": "Which properties can be applied to <pre>::first-line</pre>?",
            "options": {
                "A": "All CSS properties",
                "B": "Only width and height",
                "C": "Only font properties, color, and background",
                "D": "No properties work with ::first-line"
            },
            "correct": "C",
            "explanation": "<pre>::first-line</pre> accepts a limited set of properties: font properties, color, background, word-spacing, letter-spacing, text-decoration, text-transform, line-height, and a few others. Layout properties like width, height, margin, and padding are not supported.",
            "topic": "::first-letter and ::first-line"
        },
        {
            "id": 4,
            "question": "What does <pre>::selection</pre> allow you to style?",
            "options": {
                "A": "Selected dropdown options",
                "B": "Radio button selections",
                "C": "Text highlighted by the user",
                "D": "Form input focus states"
            },
            "correct": "C",
            "explanation": "The <pre>::selection</pre> pseudo-element targets text that the user has highlighted (selected) with their cursor. You can customize properties like <pre>color</pre> and <pre>background-color</pre> to provide custom selection styling.",
            "topic": "::selection"
        },
        {
            "id": 5,
            "question": "Which property limitation applies to <pre>::selection</pre>?",
            "options": {
                "A": "Only font-size and font-weight work",
                "B": "You can use all CSS properties",
                "C": "You can only use color and background properties",
                "D": "It doesn't support any properties"
            },
            "correct": "C",
            "explanation": "<pre>::selection</pre> only supports a limited set of properties: <pre>color</pre>, <pre>background-color</pre>, <pre>text-decoration</pre>, <pre>text-shadow</pre>, and a few text-related properties. Most layout and box-model properties are not supported.",
            "topic": "::selection"
        },
        {
            "id": 6,
            "question": "How do you style the placeholder text in an input field?",
            "options": {
                "A": "<pre>input::text</pre>",
                "B": "<pre>input[placeholder]</pre>",
                "C": "<pre>input:placeholder</pre>",
                "D": "<pre>input::placeholder</pre>"
            },
            "correct": "D",
            "explanation": "Use the <pre>::placeholder</pre> pseudo-element to style placeholder text: <pre>input::placeholder { color: gray; }</pre>. Note the double colon for pseudo-elements. Some older browsers required vendor prefixes like <pre>::-webkit-input-placeholder</pre>.",
            "topic": "::placeholder"
        },
        {
            "id": 7,
            "question": "What does <pre>:nth-child(2n)</pre> select?",
            "options": {
                "A": "Every second element starting from the first",
                "B": "Every even-positioned element (2nd, 4th, 6th, etc.)",
                "C": "Only the second element",
                "D": "Every element divisible by 2"
            },
            "correct": "B",
            "explanation": "<pre>:nth-child(2n)</pre> uses the formula where n starts at 0 and increments: 2×0=0 (none), 2×1=2, 2×2=4, 2×3=6, etc. This selects every even-positioned child. You can also use the keyword <pre>even</pre> as a shorthand: <pre>:nth-child(even)</pre>.",
            "topic": ":nth-child()"
        },
        {
            "id": 8,
            "question": "Which elements would <pre>li:nth-child(3n+1)</pre> match in a list of 10 items?",
            "options": {
                "A": "1st, 3rd, 5th, 7th, 9th",
                "B": "1st, 4th, 7th, 10th",
                "C": "3rd, 6th, 9th",
                "D": "2nd, 5th, 8th"
            },
            "correct": "B",
            "explanation": "The formula <pre>3n+1</pre> gives: (3×0)+1=1, (3×1)+1=4, (3×2)+1=7, (3×3)+1=10. So it matches the 1st, 4th, 7th, and 10th items. The formula pattern is evaluated for n = 0, 1, 2, 3, etc.",
            "topic": ":nth-child()"
        },
        {
            "id": 9,
            "question": "What is the key difference between <pre>:nth-child()</pre> and <pre>:nth-of-type()</pre>?",
            "options": {
                "A": "They are identical",
                "B": "<pre>:nth-of-type()</pre> is deprecated",
                "C": "<pre>:nth-child()</pre> counts all siblings; <pre>:nth-of-type()</pre> counts only siblings of the same element type",
                "D": "<pre>:nth-child()</pre> only works with lists"
            },
            "correct": "C",
            "explanation": "<pre>:nth-child()</pre> counts all sibling elements regardless of type, while <pre>:nth-of-type()</pre> only counts siblings that match the same element type. For example, <pre>p:nth-of-type(2)</pre> selects the second <pre>p</pre> among its siblings, ignoring other element types.",
            "topic": ":nth-of-type()"
        },
        {
            "id": 10,
            "question": "Given this HTML: <pre><div><h1>Title</h1><p>First</p><p>Second</p></div></pre>, what does <pre>p:nth-child(2)</pre> select?",
            "options": {
                "A": "The first <pre>p</pre> ('First')",
                "B": "The second <pre>p</pre> ('Second')",
                "C": "Both paragraphs",
                "D": "Nothing"
            },
            "correct": "A",
            "explanation": "<pre>p:nth-child(2)</pre> selects <pre>p</pre> elements that are the second child of their parent. In this case, the first <pre>p</pre> is the second child (after <pre>h1</pre>), so it matches. The selector combines the element type filter with position counting among all siblings.",
            "topic": ":nth-child()"
        },
        {
            "id": 11,
            "question": "Given the same HTML as the previous question, what does <pre>p:nth-of-type(2)</pre> select?",
            "options": {
                "A": "The first <pre>p</pre> ('First')",
                "B": "The second <pre>p</pre> ('Second')",
                "C": "Both paragraphs",
                "D": "Nothing"
            },
            "correct": "B",
            "explanation": "<pre>p:nth-of-type(2)</pre> counts only <pre>p</pre> elements among siblings and selects the second one. Here, 'First' is the 1st <pre>p</pre> and 'Second' is the 2nd <pre>p</pre>, so 'Second' is selected. This differs from <pre>:nth-child()</pre> which counts all element types.",
            "topic": ":nth-of-type()"
        },
        {
            "id": 12,
            "question": "What does <pre>:first-of-type</pre> select?",
            "options": {
                "A": "The first element in the document",
                "B": "The first child element",
                "C": "The first element of its type among its siblings",
                "D": "All first elements of any type"
            },
            "correct": "C",
            "explanation": "<pre>:first-of-type</pre> matches the first element of a specific type among its siblings. For example, <pre>p:first-of-type</pre> selects the first <pre>p</pre> element among its siblings, even if other element types appear before it.",
            "topic": ":first-of-type and :last-of-type"
        },
        {
            "id": 13,
            "question": "How would you select the last paragraph in each container using a pseudo-class?",
            "options": {
                "A": "<pre>p:last-child</pre>",
                "B": "<pre>p:last-of-type</pre>",
                "C": "<pre>p:nth-last-child(1)</pre>",
                "D": "Both B and C"
            },
            "correct": "B",
            "explanation": "<pre>p:last-of-type</pre> reliably selects the last <pre>p</pre> among siblings regardless of other element types that follow. <pre>p:last-child</pre> would only work if the paragraph is also the last child overall. While <pre>p:nth-last-child(1)</pre> could work, it requires the <pre>p</pre> to be the absolute last child.",
            "topic": ":first-of-type and :last-of-type"
        },
        {
            "id": 14,
            "question": "What does <pre>:only-child</pre> match?",
            "options": {
                "A": "Elements that have only one child",
                "B": "Elements that are the only child of their parent",
                "C": "The first child only",
                "D": "Elements with no siblings of the same type"
            },
            "correct": "B",
            "explanation": "<pre>:only-child</pre> matches elements that are the sole child of their parent — they have no siblings at all. It's equivalent to <pre>:first-child:last-child</pre>. Use this when an element is the only child in its container.",
            "topic": ":only-child and :only-of-type"
        },
        {
            "id": 15,
            "question": "What is the difference between <pre>:only-child</pre> and <pre>:only-of-type</pre>?",
            "options": {
                "A": "They are the same",
                "B": "<pre>:only-child</pre> requires no siblings at all; <pre>:only-of-type</pre> requires no siblings of the same element type",
                "C": "<pre>:only-of-type</pre> is deprecated",
                "D": "<pre>:only-child</pre> only works with list items"
            },
            "correct": "B",
            "explanation": "<pre>:only-child</pre> matches when there are no siblings of any type. <pre>:only-of-type</pre> matches when there are no siblings of the same element type, but other types of siblings may exist. For example, a <pre>p</pre> with an <pre>h1</pre> sibling would match <pre>p:only-of-type</pre> but not <pre>p:only-child</pre>.",
            "topic": ":only-child and :only-of-type"
        },
        {
            "id": 16,
            "question": "What does the <pre>:empty</pre> pseudo-class select?",
            "options": {
                "A": "Elements with no content, not even whitespace",
                "B": "Elements with no child elements but may have text",
                "C": "Elements with <pre>display: none</pre>",
                "D": "Elements with empty string values"
            },
            "correct": "A",
            "explanation": "<pre>:empty</pre> matches elements with no children at all — no elements, no text nodes, not even whitespace. <pre><div></div></pre> matches, but <pre><div> </div></pre> (with a space) does not. Comments are ignored when determining emptiness.",
            "topic": ":empty"
        },
        {
            "id": 17,
            "question": "Which of these would NOT match <pre>div:empty</pre>?",
            "options": {
                "A": "<pre><div> </div></pre>",
                "B": "<pre><div><!-- comment --></div></pre>",
                "C": "<pre><div></div></pre>",
                "D": "<pre><div></div></pre> with no children"
            },
            "correct": "A",
            "explanation": "<pre><div> </div></pre> contains a text node (whitespace), so it does not match <pre>:empty</pre>. Comments are ignored, so <pre><div><!-- comment --></div></pre> is considered empty and matches. Truly empty elements with no content or whitespace will match.",
            "topic": ":empty"
        },
        {
            "id": 18,
            "question": "What does the <pre>:target</pre> pseudo-class match?",
            "options": {
                "A": "The element whose ID matches the current URL fragment identifier",
                "B": "Elements with a <pre>target</pre> attribute",
                "C": "Link targets",
                "D": "Form submission targets"
            },
            "correct": "A",
            "explanation": "<pre>:target</pre> matches the element whose <pre>id</pre> matches the fragment identifier in the URL (the part after <pre>#</pre>). For example, if the URL is <pre>page.html#section2</pre>, then <pre>#section2:target</pre> will match. This is useful for highlighting linked sections.",
            "topic": ":target"
        },
        {
            "id": 19,
            "question": "How can you use <pre>:target</pre> to create a CSS-only modal?",
            "options": {
                "A": "<pre>:target</pre> cannot be used for modals",
                "B": "By using JavaScript",
                "C": "By showing a hidden element when its ID is in the URL fragment",
                "D": "By changing the page title"
            },
            "correct": "C",
            "explanation": "You can style an element differently when it matches <pre>:target</pre>. For example, a modal could be hidden by default, and when a link to <pre>#modal</pre> is clicked, <pre>#modal:target { display: block; }</pre> shows it. This creates a CSS-only modal without JavaScript.",
            "topic": ":target"
        },
        {
            "id": 20,
            "question": "Can you use multiple pseudo-elements on the same selector?",
            "options": {
                "A": "Yes, unlimited pseudo-elements",
                "B": "Only with vendor prefixes",
                "C": "Yes, but only two",
                "D": "No, only one pseudo-element per selector"
            },
            "correct": "D",
            "explanation": "You can only use one pseudo-element per selector (e.g., <pre>p::before</pre> or <pre>p::after</pre>). However, you can combine pseudo-classes with one pseudo-element: <pre>p:hover::before</pre> is valid. To use both <pre>::before</pre> and <pre>::after</pre>, write separate rules.",
            "topic": "Pseudo-elements"
        },
        {
            "id": 21,
            "question": "What is the difference between <pre>:before</pre> and <pre>::before</pre>?",
            "options": {
                "A": "<pre>:before</pre> is deprecated",
                "B": "They are identical; <pre>::before</pre> is the modern CSS3 syntax",
                "C": "<pre>::before</pre> doesn't work in any browsers",
                "D": "<pre>:before</pre> is for pseudo-classes"
            },
            "correct": "B",
            "explanation": "Both syntaxes work for backward compatibility, but <pre>::before</pre> (double colon) is the CSS3 standard for pseudo-elements to distinguish them from pseudo-classes (single colon). Modern code should prefer <pre>::before</pre>, <pre>::after</pre>, etc.",
            "topic": "::before and ::after"
        },
        {
            "id": 22,
            "question": "Which formula would select every third element starting from the first?",
            "options": {
                "A": "<pre>:nth-child(3n+1)</pre>",
                "B": "<pre>:nth-child(3n)</pre>",
                "C": "<pre>:nth-child(3)</pre>",
                "D": "<pre>:nth-child(n+3)</pre>"
            },
            "correct": "A",
            "explanation": "<pre>:nth-child(3n+1)</pre> evaluates to 1, 4, 7, 10, etc. (every third starting from 1). <pre>:nth-child(3n)</pre> gives 3, 6, 9 (multiples of 3). <pre>:nth-child(3)</pre> selects only the third element. <pre>:nth-child(n+3)</pre> selects the 3rd element onward.",
            "topic": ":nth-child()"
        },
        {
            "id": 23,
            "question": "How would you select all elements except the first three?",
            "options": {
                "A": "<pre>:nth-child(n+4)</pre>",
                "B": "<pre>:nth-child(3n)</pre>",
                "C": "<pre>:not(:nth-child(-n+3))</pre>",
                "D": "Both A and C"
            },
            "correct": "D",
            "explanation": "<pre>:nth-child(n+4)</pre> selects from the 4th element onward. <pre>:not(:nth-child(-n+3))</pre> excludes the first three (the formula <pre>-n+3</pre> matches 3, 2, 1). Both approaches work to select all except the first three elements.",
            "topic": ":nth-child()"
        },
        {
            "id": 24,
            "question": "What content can be inserted using the <pre>content</pre> property with <pre>::before</pre>?",
            "options": {
                "A": "Text strings, attribute values, counters, and images",
                "B": "Only text strings",
                "C": "Only images",
                "D": "HTML elements"
            },
            "correct": "A",
            "explanation": "The <pre>content</pre> property supports various values: text strings (<pre>content: 'Hello';</pre>), attribute values (<pre>content: attr(data-label);</pre>), counters (<pre>content: counter(section);</pre>), URLs for images (<pre>content: url(icon.png);</pre>), and combinations. You cannot insert actual HTML elements.",
            "topic": "::before and ::after"
        },
        {
            "id": 25,
            "question": "Which pseudo-element would you use to style the first line of a paragraph differently as the viewport resizes?",
            "options": {
                "A": "<pre>::first-letter</pre>",
                "B": "<pre>::line-break</pre>",
                "C": "<pre>::first-child</pre>",
                "D": "<pre>::first-line</pre>"
            },
            "correct": "D",
            "explanation": "<pre>::first-line</pre> dynamically applies to whatever text fits on the first line of the element. As the viewport resizes and text reflows, the styling automatically applies to the new first line. This differs from <pre>::first-letter</pre> which only targets the first character.",
            "topic": "::first-letter and ::first-line"
        }
    ]
};
