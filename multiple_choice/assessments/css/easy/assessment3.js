module.exports = {
    "metadata": {
        "title": "CSS Positioning, Layout, and Backgrounds",
        "description": "Test your knowledge of CSS positioning, layout fundamentals, and background styling.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 3,
        "assessmentUniqueId": 1763041794640,
        "testType": "multiple-choice",
        "topics": [
            "Position Property",
            "Z-index",
            "Float and Clear",
            "Background Properties",
            "Background Images",
            "Background Size",
            "Background Position",
            "Layout Basics"
        ],
        "topicLinks": [
            {
                "topicName": "Position Property",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
            },
            {
                "topicName": "Z-index",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
            },
            {
                "topicName": "Float and Clear",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/float"
            },
            {
                "topicName": "Background Properties",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/background"
            },
            {
                "topicName": "Background Images",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-image"
            },
            {
                "topicName": "Background Size",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-size"
            },
            {
                "topicName": "Background Position",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-position"
            },
            {
                "topicName": "Layout Basics",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction"
            }
        ],
        "keywords": [
            "position",
            "static",
            "relative",
            "absolute",
            "fixed",
            "sticky",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "stacking-context",
            "float",
            "clear",
            "background",
            "background-color",
            "background-image",
            "background-size",
            "background-position",
            "background-repeat",
            "background-attachment",
            "linear-gradient",
            "cover",
            "contain",
            "no-repeat",
            "layout",
            "offset"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What is the default value of the <pre>position</pre> property in CSS?",
            "options": {
                "A": "<pre>relative</pre>",
                "B": "<pre>absolute</pre>",
                "C": "<pre>fixed</pre>",
                "D": "<pre>static</pre>"
            },
            "correct": "D",
            "explanation": "The default position value is 'static'. Elements with static positioning follow the normal document flow and are not affected by top, right, bottom, left, or z-index properties.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 2,
            "question": "Which positioning value removes an element from the normal document flow and positions it relative to the nearest positioned ancestor?",
            "options": {
                "A": "<pre>static</pre>",
                "B": "<pre>relative</pre>",
                "C": "<pre>absolute</pre>",
                "D": "<pre>fixed</pre>"
            },
            "correct": "C",
            "explanation": "position: absolute removes the element from the normal flow and positions it relative to the nearest positioned ancestor (an ancestor with position other than static). If no positioned ancestor exists, it positions relative to the initial containing block.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 3,
            "question": "What does <pre>position: relative;</pre> do to an element?",
            "options": {
                "A": "Removes it from the document flow completely",
                "B": "Positions it relative to its normal position without removing it from the flow",
                "C": "Positions it relative to the viewport",
                "D": "Makes it scroll with the page"
            },
            "correct": "B",
            "explanation": "position: relative positions the element relative to where it would normally be, but it still occupies its original space in the document flow. Other elements behave as if the relatively positioned element is still in its original location.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 4,
            "question": "Which property controls the stacking order of positioned elements?",
            "options": {
                "A": "<pre>stack-order</pre>",
                "B": "<pre>layer</pre>",
                "C": "<pre>z-index</pre>",
                "D": "<pre>depth</pre>"
            },
            "correct": "C",
            "explanation": "The z-index property controls the vertical stacking order of positioned elements. Higher z-index values appear in front of lower values. It only works on positioned elements (position: relative, absolute, fixed, or sticky).",
            "difficulty": "easy",
            "topic": "Z-index"
        },
        {
            "id": 5,
            "question": "What does <pre>background-repeat: no-repeat;</pre> do?",
            "options": {
                "A": "Removes the background entirely",
                "B": "Repeats the background only vertically",
                "C": "Repeats the background only horizontally",
                "D": "Displays the background image only once without tiling"
            },
            "correct": "D",
            "explanation": "background-repeat: no-repeat displays the background image only once at its specified position, without tiling it. The default value is 'repeat', which tiles the image both horizontally and vertically.",
            "difficulty": "easy",
            "topic": "Background Properties"
        },
        {
            "id": 6,
            "question": "Which positioning value keeps an element fixed relative to the viewport?",
            "options": {
                "A": "<pre>position: sticky;</pre>",
                "B": "<pre>position: absolute;</pre>",
                "C": "<pre>position: fixed;</pre>",
                "D": "<pre>position: viewport;</pre>"
            },
            "correct": "C",
            "explanation": "position: fixed positions the element relative to the viewport, meaning it stays in the same place even when the page is scrolled. It's removed from the normal document flow.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 7,
            "question": "What does the <pre>float</pre> property do?",
            "options": {
                "A": "Makes an element transparent",
                "B": "Positions an element to the left or right, allowing text to wrap around it",
                "C": "Makes an element fixed to the viewport",
                "D": "Adds animation to an element"
            },
            "correct": "B",
            "explanation": "The float property removes an element from the normal flow and positions it to the left or right side of its container. Content will then flow around the floated element.",
            "difficulty": "easy",
            "topic": "Float and Clear"
        },
        {
            "id": 8,
            "question": "Which value of <pre>background-size</pre> scales the image to cover the entire container while maintaining aspect ratio?",
            "options": {
                "A": "<pre>auto</pre>",
                "B": "<pre>contain</pre>",
                "C": "<pre>cover</pre>",
                "D": "<pre>100%</pre>"
            },
            "correct": "C",
            "explanation": "background-size: cover scales the image to cover the entire container while maintaining its aspect ratio. Some parts of the image may be clipped if the aspect ratios don't match.",
            "difficulty": "easy",
            "topic": "Background Size"
        },
        {
            "id": 9,
            "question": "What does <pre>clear: both;</pre> do?",
            "options": {
                "A": "Removes all CSS styles from an element",
                "B": "Hides the element",
                "C": "Prevents an element from appearing next to floated elements on either side",
                "D": "Clears the background color"
            },
            "correct": "C",
            "explanation": "clear: both ensures that the element moves below any floated elements on either the left or right side. Other values include 'left', 'right', and 'none'.",
            "difficulty": "easy",
            "topic": "Float and Clear"
        },
        {
            "id": 10,
            "question": "Which property sets the starting position of a background image?",
            "options": {
                "A": "<pre>background-position</pre>",
                "B": "<pre>background-origin</pre>",
                "C": "<pre>background-start</pre>",
                "D": "<pre>background-align</pre>"
            },
            "correct": "A",
            "explanation": "The background-position property sets where a background image is positioned within its container, using values like 'center', 'top left', pixel values, or percentages.",
            "difficulty": "easy",
            "topic": "Background Position"
        },
        {
            "id": 11,
            "question": "For <pre>z-index</pre> to work, what must be true about the element?",
            "options": {
                "A": "It must be positioned (not static)",
                "B": "It must have a background color",
                "C": "It must be a block element",
                "D": "It must have explicit width and height"
            },
            "correct": "A",
            "explanation": "The z-index property only affects positioned elements (position: relative, absolute, fixed, or sticky). It has no effect on elements with position: static (the default).",
            "difficulty": "easy",
            "topic": "Z-index"
        },
        {
            "id": 12,
            "question": "What does <pre>position: sticky;</pre> do?",
            "options": {
                "A": "Acts like fixed positioning at all times",
                "B": "Prevents scrolling",
                "C": "Makes elements stick to the mouse cursor",
                "D": "Toggles between relative and fixed positioning based on scroll position"
            },
            "correct": "D",
            "explanation": "position: sticky is a hybrid of relative and fixed positioning. The element is treated as relative until it crosses a specified threshold (using top, right, bottom, or left), then it becomes fixed.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 13,
            "question": "How do you set multiple background images on a single element?",
            "options": {
                "A": "Use multiple <pre>background</pre> properties",
                "B": "Separate URLs with commas in <pre>background-image</pre>",
                "C": "It's not possible with CSS",
                "D": "Use the <pre>background-layers</pre> property"
            },
            "correct": "B",
            "explanation": "You can specify multiple background images by separating them with commas in the background-image property: background-image: url(image1.jpg), url(image2.png). The first image appears on top.",
            "difficulty": "easy",
            "topic": "Background Images"
        },
        {
            "id": 14,
            "question": "What is the purpose of <pre>background-attachment: fixed;</pre>?",
            "options": {
                "A": "Prevents the background from loading",
                "B": "Locks the background color",
                "C": "Fixes background image distortion",
                "D": "Makes the background image stay in place when scrolling"
            },
            "correct": "D",
            "explanation": "background-attachment: fixed makes the background image stay fixed relative to the viewport while scrolling, creating a parallax-like effect. The default value is 'scroll'.",
            "difficulty": "easy",
            "topic": "Background Properties"
        },
        {
            "id": 15,
            "question": "If an element has <pre>position: absolute; top: 20px; left: 30px;</pre> and no positioned ancestors, where is it positioned relative to?",
            "options": {
                "A": "The initial containing block (usually the document)",
                "B": "The parent element",
                "C": "The viewport",
                "D": "The body element"
            },
            "correct": "A",
            "explanation": "When an absolutely positioned element has no positioned ancestors, it positions itself relative to the initial containing block, which is typically the html element or document.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 16,
            "question": "Which background property can create gradient backgrounds?",
            "options": {
                "A": "<pre>background-color</pre>",
                "B": "<pre>background-image</pre>",
                "C": "<pre>background-gradient</pre>",
                "D": "<pre>gradient</pre>"
            },
            "correct": "B",
            "explanation": "Gradients are created using the background-image property with functions like linear-gradient() or radial-gradient(): background-image: linear-gradient(red, blue).",
            "difficulty": "easy",
            "topic": "Background Images"
        },
        {
            "id": 17,
            "question": "What does <pre>background-size: contain;</pre> do?",
            "options": {
                "A": "Stretches the image to fill the container",
                "B": "Sets the image to its natural size",
                "C": "Crops the image to the container size",
                "D": "Scales the image to fit entirely within the container while maintaining aspect ratio"
            },
            "correct": "D",
            "explanation": "background-size: contain scales the image to fit completely within the container while maintaining aspect ratio. The entire image is always visible, which may leave some empty space.",
            "difficulty": "easy",
            "topic": "Background Size"
        },
        {
            "id": 18,
            "question": "What happens to an element with <pre>float: left;</pre>?",
            "options": {
                "A": "It's removed from the normal flow and moved to the left side of its container",
                "B": "It stays in the normal flow but moves to the left",
                "C": "It becomes invisible",
                "D": "It centers horizontally"
            },
            "correct": "A",
            "explanation": "A floated element is removed from the normal document flow and shifted to the left (or right) side of its containing element. Subsequent content will flow around it.",
            "difficulty": "easy",
            "topic": "Float and Clear"
        },
        {
            "id": 19,
            "question": "Which positioning properties can be used to offset an element from its position?",
            "options": {
                "A": "<pre>top</pre>, <pre>right</pre>, <pre>bottom</pre>, and <pre>left</pre>",
                "B": "<pre>x</pre> and <pre>y</pre>",
                "C": "<pre>offset-x</pre> and <pre>offset-y</pre>",
                "D": "<pre>margin</pre> only"
            },
            "correct": "A",
            "explanation": "The properties top, right, bottom, and left are used to offset positioned elements from their normal or specified position. They work with relative, absolute, fixed, and sticky positioning.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 20,
            "question": "What is the shorthand order for the <pre>background</pre> property?",
            "options": {
                "A": "There is no specific order required",
                "B": "image, color, size, position, repeat",
                "C": "color, image, position, size, repeat, attachment",
                "D": "color, image, repeat, position, size"
            },
            "correct": "A",
            "explanation": "While there's a recommended order (color, image, position/size, repeat, attachment), most modern browsers are flexible with the background shorthand property order as long as position comes before size (separated by /).",
            "difficulty": "easy",
            "topic": "Background Properties"
        },
        {
            "id": 21,
            "question": "Can you use negative values with <pre>top</pre>, <pre>right</pre>, <pre>bottom</pre>, or <pre>left</pre> properties?",
            "options": {
                "A": "No, only positive values are allowed",
                "B": "Yes, negative values move the element in the opposite direction",
                "C": "Only with absolute positioning",
                "D": "Only with relative positioning"
            },
            "correct": "B",
            "explanation": "Negative values are valid for top, right, bottom, and left properties. They move the element in the opposite direction from what positive values would do.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 22,
            "question": "What does <pre>background-repeat: repeat-x;</pre> do?",
            "options": {
                "A": "Repeats the background in both directions",
                "B": "Repeats the background only horizontally",
                "C": "Repeats the background only vertically",
                "D": "Prevents background repetition"
            },
            "correct": "B",
            "explanation": "background-repeat: repeat-x tiles the background image horizontally only. Similarly, repeat-y tiles only vertically.",
            "difficulty": "easy",
            "topic": "Background Properties"
        },
        {
            "id": 23,
            "question": "What is a stacking context in relation to <pre>z-index</pre>?",
            "options": {
                "A": "A way to group CSS selectors",
                "B": "A method to stack multiple images",
                "C": "A container where z-index values are compared only among siblings within that context",
                "D": "A type of CSS animation"
            },
            "correct": "C",
            "explanation": "A stacking context is a three-dimensional conceptualization of elements. Elements within the same stacking context are compared by their z-index values. Elements in different stacking contexts are ordered by their parent's z-index.",
            "difficulty": "easy",
            "topic": "Z-index"
        },
        {
            "id": 24,
            "question": "Which value makes a background image repeat only as much as needed to fill the space without clipping?",
            "options": {
                "A": "<pre>repeat</pre>",
                "B": "<pre>space</pre>",
                "C": "<pre>round</pre>",
                "D": "<pre>no-repeat</pre>"
            },
            "correct": "B",
            "explanation": "background-repeat: space repeats the image as many times as will fit without clipping, and distributes the extra space evenly between images.",
            "difficulty": "easy",
            "topic": "Background Properties"
        },
        {
            "id": 25,
            "question": "What happens when you set <pre>position: relative;</pre> without specifying top, right, bottom, or left values?",
            "options": {
                "A": "The element disappears",
                "B": "The element stays in its normal position",
                "C": "The browser automatically positions it",
                "D": "An error occurs"
            },
            "correct": "B",
            "explanation": "Without offset values (top, right, bottom, left), a relatively positioned element remains in its normal position. However, it establishes a positioning context for absolutely positioned descendants and can have a z-index.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 26,
            "question": "How do you center a background image in a container?",
            "options": {
                "A": "<pre>background-position: middle;</pre>",
                "B": "<pre>background-position: center;</pre>",
                "C": "<pre>background-align: center;</pre>",
                "D": "<pre>background: centered;</pre>"
            },
            "correct": "B",
            "explanation": "background-position: center centers the background image both horizontally and vertically. You can also use 'center center' or '50% 50%'.",
            "difficulty": "easy",
            "topic": "Background Position"
        },
        {
            "id": 27,
            "question": "What is the difference between <pre>position: absolute;</pre> and <pre>position: fixed;</pre>?",
            "options": {
                "A": "Absolute is positioned relative to the nearest positioned ancestor; fixed is positioned relative to the viewport",
                "B": "There is no difference",
                "C": "Fixed elements can't be moved; absolute elements can",
                "D": "Absolute works only on block elements; fixed works on all elements"
            },
            "correct": "A",
            "explanation": "position: absolute positions relative to the nearest positioned ancestor, while position: fixed positions relative to the viewport and stays in place during scrolling.",
            "difficulty": "easy",
            "topic": "Position Property"
        },
        {
            "id": 28,
            "question": "What does <pre>clear: left;</pre> do?",
            "options": {
                "A": "Floats the element to the left",
                "B": "Prevents the element from appearing next to floated elements on the left",
                "C": "Removes left padding",
                "D": "Aligns content to the left"
            },
            "correct": "B",
            "explanation": "clear: left moves the element below any left-floated elements. It prevents the element from appearing beside floated elements on its left side.",
            "difficulty": "easy",
            "topic": "Float and Clear"
        },
        {
            "id": 29,
            "question": "Can you use percentage values with <pre>background-position</pre>?",
            "options": {
                "A": "Yes, percentages position the image relative to the container",
                "B": "No, only pixel values are allowed",
                "C": "Only for horizontal positioning",
                "D": "Only with background-size"
            },
            "correct": "A",
            "explanation": "background-position accepts percentage values. For example, '50% 50%' centers the image. Percentages align the same percentage point of the image with the same percentage point of the container.",
            "difficulty": "easy",
            "topic": "Background Position"
        },
        {
            "id": 30,
            "question": "What is the default <pre>z-index</pre> value for positioned elements?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "-1",
                "D": "auto"
            },
            "correct": "D",
            "explanation": "The default z-index value is 'auto', which means the element uses the same stacking level as its parent and doesn't create a new stacking context. When computed, it typically acts like z-index: 0.",
            "difficulty": "easy",
            "topic": "Z-index"
        }
    ]
};
