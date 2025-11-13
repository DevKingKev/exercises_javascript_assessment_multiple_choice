module.exports = {
    "metadata": {
        "title": "CSS Basic Pseudo-classes",
        "description": "Master CSS pseudo-classes for interactive states including :hover, :active, :focus, :visited, and :link, understand the importance of LVHA ordering, and learn structural pseudo-classes like :first-child, :last-child, and :nth-child for selecting elements based on their position.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 15,
        "assessmentUniqueId": 1763064763264,
        "testType": "multiple-choice",
        "topics": [
            "Hover Pseudo-class",
            "Active Pseudo-class",
            "Focus Pseudo-class",
            "Visited Pseudo-class",
            "Link Pseudo-class",
            "LVHA Ordering",
            "First-child Pseudo-class",
            "Last-child Pseudo-class",
            "Nth-child Basics",
            "Interactive State Styling"
        ],
        "topicLinks": [
            {
                "topicName": "Hover Pseudo-class",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover"
            },
            {
                "topicName": "Active Pseudo-class",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:active"
            },
            {
                "topicName": "Focus Pseudo-class",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus"
            },
            {
                "topicName": "Visited Pseudo-class",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:visited"
            },
            {
                "topicName": "Link Pseudo-class",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:link"
            },
            {
                "topicName": "LVHA Ordering",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:link#styling_links"
            },
            {
                "topicName": "First-child Pseudo-class",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child"
            },
            {
                "topicName": "Last-child Pseudo-class",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child"
            },
            {
                "topicName": "Nth-child Basics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child"
            },
            {
                "topicName": "Interactive State Styling",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_links"
            }
        ],
        "keywords": [
            "pseudo-class",
            "hover",
            "active",
            "focus",
            "visited",
            "link",
            "LVHA",
            "LoVe-HAte",
            "first-child",
            "last-child",
            "nth-child",
            "interactive-states",
            "user-interaction",
            "keyboard-navigation",
            "link-styling",
            "button-states",
            "focus-visible",
            "structural-pseudo-class",
            "child-selector",
            "position-based-selection",
            "accessibility",
            "link-states",
            "click-state",
            "hover-effect",
            "focus-ring",
            "visited-links",
            "unvisited-links"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What does the <pre>:hover</pre> pseudo-class do?",
            "options": {
                "A": "Applies styles when the element is clicked",
                "B": "Applies styles when the mouse pointer is over the element",
                "C": "Applies styles when the element has keyboard focus",
                "D": "Applies styles to all elements"
            },
            "correct": "B",
            "explanation": ":hover applies styles when the user's mouse pointer is positioned over an element. It's commonly used for interactive effects like changing button colors, underlining links, or showing tooltips. On touch devices, :hover behavior can be triggered by tapping.",
            "difficulty": "easy",
            "topic": "Hover Pseudo-class"
        },
        {
            "id": 2,
            "question": "What does the <pre>:active</pre> pseudo-class represent?",
            "options": {
                "A": "An element that is currently being activated or clicked",
                "B": "An element that is always visible",
                "C": "An element with keyboard focus",
                "D": "An element that has been visited"
            },
            "correct": "A",
            "explanation": ":active represents an element in the process of being activated, typically during the time between mousedown and mouseup. For links and buttons, it's the brief moment when you're actively clicking. This is useful for providing visual feedback during clicks.",
            "difficulty": "easy",
            "topic": "Active Pseudo-class"
        },
        {
            "id": 3,
            "question": "What is the <pre>:focus</pre> pseudo-class used for?",
            "options": {
                "A": "Styling elements when the mouse hovers over them",
                "B": "Styling elements that have received keyboard or mouse focus",
                "C": "Styling only links",
                "D": "Styling hidden elements"
            },
            "correct": "B",
            "explanation": ":focus applies to elements that have received focus, typically through keyboard navigation (Tab key) or mouse clicks on form inputs. It's crucial for accessibility, as it helps keyboard users see which element is currently active. Common on inputs, textareas, buttons, and links.",
            "difficulty": "easy",
            "topic": "Focus Pseudo-class"
        },
        {
            "id": 4,
            "question": "What is the correct order for link pseudo-classes to avoid specificity issues?",
            "options": {
                "A": "LVHA: :link, :visited, :hover, :active",
                "B": "HALV: :hover, :active, :link, :visited",
                "C": "AVHL: :active, :visited, :hover, :link",
                "D": "Any order works the same"
            },
            "correct": "A",
            "explanation": "The correct order is LVHA (LoVe HAte mnemonic): :link, :visited, :hover, :active. This order ensures specificity doesn't prevent later states from showing. If :hover comes before :link or :visited, those base states can override the hover effect. :active should come last to ensure it displays during clicks.",
            "difficulty": "easy",
            "topic": "LVHA Ordering"
        },
        {
            "id": 5,
            "question": "What does <pre>:visited</pre> apply to?",
            "options": {
                "A": "All elements that have been clicked",
                "B": "Links that the user has already visited",
                "C": "Elements that are currently visible",
                "D": "Form inputs with values"
            },
            "correct": "B",
            "explanation": ":visited applies specifically to links (<a> elements with href attributes) that the user has already visited according to browser history. For privacy reasons, browsers limit which CSS properties can be styled with :visited (mainly color-related properties).",
            "difficulty": "easy",
            "topic": "Visited Pseudo-class"
        },
        {
            "id": 6,
            "question": "What is the difference between <pre>:link</pre> and <pre>:visited</pre>?",
            "options": {
                "A": ":link targets unvisited links; :visited targets links the user has visited",
                "B": "They are the same thing",
                "C": ":link targets external links; :visited targets internal links",
                "D": ":link targets all links; :visited targets broken links"
            },
            "correct": "A",
            "explanation": ":link matches unvisited links (links the user hasn't clicked before), while :visited matches links the user has already visited. Together, they cover all possible link states. Both only apply to <a>, <area>, or <link> elements with an href attribute.",
            "difficulty": "easy",
            "topic": "Link Pseudo-class"
        },
        {
            "id": 7,
            "question": "What does <pre>:first-child</pre> select?",
            "options": {
                "A": "The first child element of any parent",
                "B": "The first element in the document",
                "C": "An element that is the first child of its parent",
                "D": "The first occurrence of a class"
            },
            "correct": "C",
            "explanation": ":first-child selects an element that is the first child of its parent. For example, p:first-child selects <p> elements that are the first child of their parent container. If the first child isn't a <p>, nothing is selected.",
            "difficulty": "easy",
            "topic": "First-child Pseudo-class"
        },
        {
            "id": 8,
            "question": "Can you use <pre>:hover</pre> on elements other than links?",
            "options": {
                "A": "No, :hover only works on links",
                "B": "Yes, :hover can be used on any element",
                "C": "Only on buttons and links",
                "D": "Only on block elements"
            },
            "correct": "B",
            "explanation": "Yes, :hover can be used on any HTML element, not just links. You can apply hover effects to divs, images, buttons, table rows, list items, or any other element. This makes it versatile for creating interactive user interfaces.",
            "difficulty": "easy",
            "topic": "Hover Pseudo-class"
        },
        {
            "id": 9,
            "question": "What does <pre>:last-child</pre> select?",
            "options": {
                "A": "The last element in the document",
                "B": "An element that is the last child of its parent",
                "C": "The last link on the page",
                "D": "Elements with the 'last' class"
            },
            "correct": "B",
            "explanation": ":last-child selects an element that is the last child of its parent. For example, li:last-child selects the last <li> in each list. If the last child of the parent isn't an <li>, nothing is selected for that parent.",
            "difficulty": "easy",
            "topic": "Last-child Pseudo-class"
        },
        {
            "id": 10,
            "question": "What is the mnemonic for remembering the correct link pseudo-class order?",
            "options": {
                "A": "LOVE HAte (LVHA)",
                "B": "HALT",
                "C": "HAVL",
                "D": "HALO"
            },
            "correct": "A",
            "explanation": "The mnemonic is 'LoVe HAte' which represents LVHA: :link, :visited, :hover, :active. This helps you remember the correct order to prevent specificity conflicts when styling links.",
            "difficulty": "easy",
            "topic": "LVHA Ordering"
        },
        {
            "id": 11,
            "question": "Why is <pre>:focus</pre> important for accessibility?",
            "options": {
                "A": "It makes pages load faster",
                "B": "It provides visual feedback for keyboard navigation users",
                "C": "It changes the page color",
                "D": "It's only for decorative purposes"
            },
            "correct": "B",
            "explanation": ":focus is crucial for accessibility because it provides visual feedback to keyboard users (who navigate with Tab/Shift+Tab) showing which element is currently active. Never remove focus outlines with outline: none without providing an alternative visual indicator, as this makes navigation impossible for keyboard-only users.",
            "difficulty": "easy",
            "topic": "Focus Pseudo-class"
        },
        {
            "id": 12,
            "question": "What does [CODE]li:nth-child(2)[/CODE] select?",
            "options": {
                "A": "All <pre><li></pre> elements",
                "B": "Every second <pre><li></pre> element",
                "C": "The second child of each parent, if it's an <pre><li></pre>",
                "D": "The first two <pre><li></pre> elements"
            },
            "correct": "C",
            "explanation": "li:nth-child(2) selects elements that are (1) <li> elements AND (2) the second child of their parent. If the second child isn't an <li>, nothing is selected for that parent. This is different from li:nth-of-type(2), which selects the second <li> regardless of position.",
            "difficulty": "easy",
            "topic": "Nth-child Basics"
        },
        {
            "id": 13,
            "question": "Can <pre>:active</pre> be used on buttons?",
            "options": {
                "A": "No, only on links",
                "B": "Yes, :active works on buttons to show click state",
                "C": "Only on form buttons, not regular buttons",
                "D": "Only in HTML5"
            },
            "correct": "B",
            "explanation": "Yes, :active works perfectly on buttons to provide visual feedback during the click. This is commonly used to show a 'pressed' state by changing background color, adding inset shadows, or shifting the button position slightly. It enhances the tactile feel of button interactions.",
            "difficulty": "easy",
            "topic": "Active Pseudo-class"
        },
        {
            "id": 14,
            "question": "What happens if you style <pre>:hover</pre> before <pre>:link</pre> in your CSS?",
            "options": {
                "A": "Nothing, order doesn't matter",
                "B": "The :link styles may override :hover due to equal specificity and source order",
                "C": "The browser shows an error",
                "D": "The page won't load"
            },
            "correct": "B",
            "explanation": "Because :link and :hover have equal specificity, source order matters. If :link comes after :hover in your CSS, its styles will override the hover styles on unvisited links. This is why LVHA order is important—it ensures later states (:hover, :active) override earlier ones (:link, :visited).",
            "difficulty": "easy",
            "topic": "LVHA Ordering"
        },
        {
            "id": 15,
            "question": "Which pseudo-class would you use to style every third item in a list?",
            "options": {
                "A": "<pre>:nth-child(3)</pre>",
                "B": "<pre>:nth-child(3n)</pre>",
                "C": "<pre>:every-third</pre>",
                "D": "<pre>:third-child</pre>"
            },
            "correct": "B",
            "explanation": ":nth-child(3n) selects every third element (3rd, 6th, 9th, 12th, etc.). The 'n' is a counter starting at 0, so 3n evaluates to 0, 3, 6, 9, etc. To select the 3rd element only, use :nth-child(3). To select every third starting at the first (1st, 4th, 7th), use :nth-child(3n+1).",
            "difficulty": "easy",
            "topic": "Nth-child Basics"
        },
        {
            "id": 16,
            "question": "What CSS properties can be styled with <pre>:visited</pre>?",
            "options": {
                "A": "All CSS properties",
                "B": "Only color, background-color, and related color properties",
                "C": "Only font properties",
                "D": "Only border properties"
            },
            "correct": "B",
            "explanation": "For privacy and security reasons, browsers restrict which CSS properties can be styled with :visited. You can only change color-related properties like color, background-color, border-color, outline-color, and SVG fill/stroke. Properties that could be used to detect browsing history (like width, height, position) are blocked.",
            "difficulty": "easy",
            "topic": "Visited Pseudo-class"
        },
        {
            "id": 17,
            "question": "How do you select the first paragraph inside a <pre><div></pre>?",
            "options": {
                "A": "<pre>div p:first-child</pre>",
                "B": "<pre>div:first-child p</pre>",
                "C": "<pre>p:first</pre>",
                "D": "<pre>first-paragraph</pre>"
            },
            "correct": "A",
            "explanation": "div p:first-child selects <p> elements that are the first child of their parent, and are descendants of a <div>. Note: the <p> must be the first child of its immediate parent. If you want the first <p> regardless of position, use div p:first-of-type instead.",
            "difficulty": "easy",
            "topic": "First-child Pseudo-class"
        },
        {
            "id": 18,
            "question": "Does <pre>:focus</pre> work on <pre><div></pre> elements by default?",
            "options": {
                "A": "Yes, all elements can receive focus",
                "B": "No, only interactive elements like inputs, buttons, and links can receive focus by default",
                "C": "Only if the div has content",
                "D": "Only if the div has a class"
            },
            "correct": "B",
            "explanation": "By default, only interactive elements (inputs, buttons, links, textareas, select) and elements with tabindex can receive focus. Regular divs cannot receive focus unless you add tabindex=\"0\" or tabindex=\"-1\". This is an important accessibility consideration.",
            "difficulty": "easy",
            "topic": "Focus Pseudo-class"
        },
        {
            "id": 19,
            "question": "What is the difference between <pre>:nth-child(2n)</pre> and <pre>:nth-child(even)</pre>?",
            "options": {
                "A": "They select different elements",
                "B": "They are equivalent and both select even-numbered children",
                "C": ":nth-child(2n) selects odd elements",
                "D": ":nth-child(even) is not valid CSS"
            },
            "correct": "B",
            "explanation": ":nth-child(2n) and :nth-child(even) are equivalent—both select even-numbered children (2nd, 4th, 6th, etc.). Similarly, :nth-child(2n+1) and :nth-child(odd) are equivalent and select odd-numbered children (1st, 3rd, 5th, etc.).",
            "difficulty": "easy",
            "topic": "Nth-child Basics"
        },
        {
            "id": 20,
            "question": "Can you combine multiple pseudo-classes on the same element?",
            "options": {
                "A": "No, only one pseudo-class per element",
                "B": "Yes, you can chain pseudo-classes like <pre>a:link:hover</pre>",
                "C": "Only two pseudo-classes maximum",
                "D": "Only with JavaScript"
            },
            "correct": "B",
            "explanation": "Yes, you can chain multiple pseudo-classes. For example, a:link:hover applies only to unvisited links when hovered. You can also combine different types: input:focus:invalid styles focused inputs with invalid values. This allows for very specific targeting of element states.",
            "difficulty": "easy",
            "topic": "Interactive State Styling"
        },
        {
            "id": 21,
            "question": "What does <pre>button:hover:active</pre> style?",
            "options": {
                "A": "Buttons that are both hovered and being clicked",
                "B": "Buttons that are hovered or clicked",
                "C": "Only hovered buttons",
                "D": "This is invalid CSS"
            },
            "correct": "A",
            "explanation": "button:hover:active selects buttons that match both conditions simultaneously—the mouse is hovering over the button AND it's being actively clicked. This is the brief moment when you click while the cursor is over the button. This specificity ensures this style only applies during that exact interaction.",
            "difficulty": "easy",
            "topic": "Active Pseudo-class"
        },
        {
            "id": 22,
            "question": "How do you remove the default focus outline while maintaining accessibility?",
            "options": {
                "A": "<pre>outline: none;</pre> with no replacement",
                "B": "[CODE]:focus { outline: none; /* provide alternative styling */ }[/CODE]",
                "C": "You should never remove the focus outline",
                "D": "<pre>display: none;</pre> on focus"
            },
            "correct": "B",
            "explanation": "If you remove the default focus outline with outline: none, you MUST provide an alternative visual indicator (like a background color change, border change, or box-shadow) so keyboard users can see which element has focus. Never just use outline: none alone, as this breaks keyboard accessibility.",
            "difficulty": "easy",
            "topic": "Focus Pseudo-class"
        },
        {
            "id": 23,
            "question": "What does <pre>:first-child</pre> select in [CODE]<div><span>A</span><p>B</p></div>[/CODE]?",
            "options": {
                "A": "The <pre><span></pre> element",
                "B": "The <pre><p></pre> element",
                "C": "Both elements",
                "D": "Neither element"
            },
            "correct": "A",
            "explanation": ":first-child selects any element that is the first child of its parent. In this case, the <span> is the first child of the <div>. If you use p:first-child on this HTML, nothing matches because the <p> is not the first child (it's the second).",
            "difficulty": "easy",
            "topic": "First-child Pseudo-class"
        },
        {
            "id": 24,
            "question": "Does <pre>:link</pre> apply to all links or only links with <pre>href</pre>?",
            "options": {
                "A": "All <pre><a></pre> elements",
                "B": "Only links with an href attribute",
                "C": "Only external links",
                "D": "Only internal links"
            },
            "correct": "B",
            "explanation": ":link only applies to <a>, <area>, or <link> elements that have an href attribute. An <a> element without an href attribute (like <a name=\"anchor\"></a>) is not matched by :link or :visited because it's not actually a link, just an anchor point.",
            "difficulty": "easy",
            "topic": "Link Pseudo-class"
        },
        {
            "id": 25,
            "question": "What is the difference between <pre>:nth-child(1)</pre> and <pre>:first-child</pre>?",
            "options": {
                "A": ":nth-child(1) is more specific",
                "B": "They are functionally equivalent",
                "C": ":first-child is faster",
                "D": ":nth-child(1) doesn't exist"
            },
            "correct": "B",
            "explanation": ":nth-child(1) and :first-child are functionally equivalent—both select the first child of a parent. :first-child is more readable and is the conventional choice. Similarly, :nth-child(n) would select all children, but there's no built-in pseudo-class equivalent for that.",
            "difficulty": "easy",
            "topic": "Nth-child Basics"
        },
        {
            "id": 26,
            "question": "Can you use <pre>:hover</pre> to create dropdown menus?",
            "options": {
                "A": "Yes, by showing hidden child elements on parent hover",
                "B": "No, dropdown menus require JavaScript",
                "C": "Only with special browser plugins",
                "D": "Only on mobile devices"
            },
            "correct": "A",
            "explanation": "Yes, pure CSS dropdown menus are possible using :hover. For example: .menu:hover .dropdown { display: block; }. However, :hover-based dropdowns have accessibility limitations (no keyboard access unless items are links), so JavaScript-enhanced dropdowns are often better for accessibility.",
            "difficulty": "easy",
            "topic": "Hover Pseudo-class"
        },
        {
            "id": 27,
            "question": "What does <pre>:last-child</pre> select in [CODE]<ul><li>A</li><li>B</li><li>C</li></ul>[/CODE]?",
            "options": {
                "A": "The first <pre><li></pre>",
                "B": "All <pre><li></pre> elements",
                "C": "The <pre><li></pre> containing 'C'",
                "D": "Nothing"
            },
            "correct": "C",
            "explanation": ":last-child selects elements that are the last child of their parent. In this case, li:last-child would select the third <li> (containing 'C') because it's the last child of the <ul>. This is useful for removing margins or borders from the last item in lists.",
            "difficulty": "easy",
            "topic": "Last-child Pseudo-class"
        },
        {
            "id": 28,
            "question": "Why should <pre>:active</pre> come after <pre>:hover</pre> in the LVHA order?",
            "options": {
                "A": "To ensure the active state shows during clicks even when hovering",
                "B": "It's just a convention with no technical reason",
                "C": "To make the CSS file smaller",
                "D": "Because :active is more important"
            },
            "correct": "A",
            "explanation": "When you click on a link, both :hover and :active are true simultaneously. If :active comes after :hover in your CSS, its styles will override the hover styles during the click, providing proper visual feedback. If :hover came last, you wouldn't see the :active styles during clicks.",
            "difficulty": "easy",
            "topic": "LVHA Ordering"
        },
        {
            "id": 29,
            "question": "Can you use <pre>:nth-child()</pre> with negative numbers?",
            "options": {
                "A": "Yes, for example <pre>:nth-child(-n+3)</pre> selects the first 3 children",
                "B": "No, negative numbers are invalid",
                "C": "Only in modern browsers",
                "D": "Only for negative indexes from the end"
            },
            "correct": "A",
            "explanation": "Yes, :nth-child() can use negative coefficients. :nth-child(-n+3) selects the first three children (when n=0: 3, n=1: 2, n=2: 1, n=3: 0 and stops). This is useful for selecting 'the first X children'. Similarly, :nth-child(n+3) selects from the third child onward.",
            "difficulty": "easy",
            "topic": "Nth-child Basics"
        },
        {
            "id": 30,
            "question": "What is the typical visual feedback for <pre>:focus</pre> on form inputs?",
            "options": {
                "A": "A colored outline or border around the input",
                "B": "The input becomes larger",
                "C": "The input changes color",
                "D": "The input disappears"
            },
            "correct": "A",
            "explanation": "The typical visual feedback for focused inputs is an outline or border (often blue) around the element. Browsers provide default focus styles (usually a blue outline), but these can be customized with CSS. Good alternatives include changing border color, adding box-shadow, or changing background color—any clear visual indicator that shows focus.",
            "difficulty": "easy",
            "topic": "Focus Pseudo-class"
        }
    ]
};
