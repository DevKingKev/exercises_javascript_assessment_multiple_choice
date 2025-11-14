module.exports = {
  "metadata": {
    "title": "CSS Medium - Transforms and 3D",
    "description": "Intermediate assessment covering CSS transforms and 3D transformations: transform property basics, translate/translateX/translateY, rotate for rotation, scale/scaleX/scaleY, skew/skewX/skewY, transform-origin property, 3D transforms (rotateX/rotateY/rotateZ), perspective for depth, transform-style: preserve-3d, and combining multiple transforms.",
    "difficulty": "medium",
    "domain": "css",
    "timeLimit": 45,
    "questionCount": 25,
    "assessmentId": 10,
    "assessmentUniqueId": 1763117109027,
    "testType": "multiple-choice",
    "topics": [
      "CSS Transforms",
      "2D Transforms",
      "3D Transforms",
      "translate()",
      "rotate()",
      "scale()",
      "skew()",
      "transform-origin",
      "perspective",
      "transform-style",
      "preserve-3d",
      "rotateX()",
      "rotateY()",
      "rotateZ()",
      "Transform Combinations"
    ],
    "topicLinks": [
      {
        "topicName": "CSS Transforms",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
      },
      {
        "topicName": "translate()",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate"
      },
      {
        "topicName": "rotate()",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate"
      },
      {
        "topicName": "scale()",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale"
      },
      {
        "topicName": "skew()",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew"
      },
      {
        "topicName": "transform-origin",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"
      },
      {
        "topicName": "perspective",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective"
      },
      {
        "topicName": "transform-style",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
      },
      {
        "topicName": "3D Transforms",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties"
      }
    ],
    "keywords": [
      "transform",
      "translate",
      "translateX",
      "translateY",
      "rotate",
      "scale",
      "scaleX",
      "scaleY",
      "skew",
      "skewX",
      "skewY",
      "transform-origin",
      "3d",
      "perspective",
      "rotateX",
      "rotateY",
      "rotateZ",
      "preserve-3d",
      "matrix"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What does <pre>transform: translate(50px, 100px);</pre> do?",
      "options": {
        "A": "Moves element 50px down and 100px right",
        "B": "Rotates element 50 degrees",
        "C": "Moves element 50px left and 100px up",
        "D": "Moves element 50px right and 100px down"
      },
      "correct": "D",
      "explanation": "The <pre>translate(x, y)</pre> function moves an element horizontally by the first value (50px right) and vertically by the second value (100px down). Positive X moves right, positive Y moves down, following standard coordinate systems.",
      "topic": "translate()"
    },
    {
      "id": 2,
      "question": "What is the difference between <pre>translateX(50px)</pre> and <pre>translate(50px, 0)</pre>?",
      "options": {
        "A": "translateX is faster",
        "B": "No functional difference, both move element 50px horizontally",
        "C": "translateX moves vertically",
        "D": "translate only works with percentages"
      },
      "correct": "B",
      "explanation": "Both achieve the same result: moving the element 50px to the right. <pre>translateX(50px)</pre> is shorthand for horizontal-only translation. <pre>translateY()</pre> exists for vertical-only translation. Using the specific function can be more readable.",
      "topic": "translate()"
    },
    {
      "id": 3,
      "question": "What does <pre>transform: rotate(45deg);</pre> do?",
      "options": {
        "A": "Moves element 45 pixels",
        "B": "Rotates element 45 degrees counterclockwise",
        "C": "Tilts element 45 degrees",
        "D": "Rotates element 45 degrees clockwise around its center"
      },
      "correct": "D",
      "explanation": "<pre>rotate(45deg)</pre> rotates the element 45 degrees clockwise around its transform origin (default: center). Use negative values for counterclockwise rotation: <pre>rotate(-45deg)</pre>. The rotation point can be changed with <pre>transform-origin</pre>.",
      "topic": "rotate()"
    },
    {
      "id": 4,
      "question": "What does <pre>transform: scale(2);</pre> do?",
      "options": {
        "A": "Doubles the element's size in both width and height",
        "B": "Adds 2px to dimensions",
        "C": "Divides size by 2",
        "D": "Only doubles width"
      },
      "correct": "A",
      "explanation": "<pre>scale(2)</pre> doubles both the width and height of the element, making it appear twice as large. <pre>scale(0.5)</pre> would halve the size. The scaling happens from the transform origin (default: center).",
      "topic": "scale()"
    },
    {
      "id": 5,
      "question": "How does <pre>scale(2, 0.5)</pre> transform an element?",
      "options": {
        "A": "Doubles width, halves height",
        "B": "Halves width, doubles height",
        "C": "Doubles both dimensions",
        "D": "No effect"
      },
      "correct": "A",
      "explanation": "<pre>scale(x, y)</pre> scales width by the first value and height by the second. So <pre>scale(2, 0.5)</pre> makes the element twice as wide and half as tall. You can also use <pre>scaleX()</pre> and <pre>scaleY()</pre> separately.",
      "topic": "scale()"
    },
    {
      "id": 6,
      "question": "What does <pre>scaleX(-1)</pre> do?",
      "options": {
        "A": "Flips the element horizontally (mirror effect)",
        "B": "Shrinks width to nothing",
        "C": "Inverts colors",
        "D": "Rotates 180 degrees"
      },
      "correct": "A",
      "explanation": "Negative scale values flip the element. <pre>scaleX(-1)</pre> creates a horizontal mirror/flip effect, while <pre>scaleY(-1)</pre> flips vertically. This is commonly used for creating mirrored versions of elements or icons.",
      "topic": "scale()"
    },
    {
      "id": 7,
      "question": "What does <pre>transform: skew(20deg, 10deg);</pre> do?",
      "options": {
        "A": "Translates element",
        "B": "Rotates element",
        "C": "Skews element 20 degrees along X-axis and 10 degrees along Y-axis",
        "D": "Scales element"
      },
      "correct": "C",
      "explanation": "<pre>skew(x-angle, y-angle)</pre> distorts the element by slanting it. The first value skews along the X-axis (tilts horizontally), and the second along the Y-axis (tilts vertically). This creates a parallelogram effect.",
      "topic": "skew()"
    },
    {
      "id": 8,
      "question": "What is the default value of <pre>transform-origin</pre>?",
      "options": {
        "A": "<pre>top left</pre>",
        "B": "<pre>center center</pre> (50% 50%)",
        "C": "<pre>bottom right</pre>",
        "D": "<pre>0 0</pre>"
      },
      "correct": "B",
      "explanation": "The default <pre>transform-origin</pre> is <pre>center center</pre> (50% 50%), meaning transforms like rotation and scaling happen from the element's center. You can change it to any position: <pre>transform-origin: top left;</pre> or <pre>transform-origin: 100% 0;</pre>",
      "topic": "transform-origin"
    },
    {
      "id": 9,
      "question": "What does <pre>transform-origin: top left;</pre> do for a rotation?",
      "options": {
        "A": "Rotates element around its top-left corner instead of center",
        "B": "Moves element to top left",
        "C": "Prevents rotation",
        "D": "Rotates only the top-left corner"
      },
      "correct": "A",
      "explanation": "<pre>transform-origin</pre> sets the point around which transforms occur. <pre>transform-origin: top left;</pre> makes rotations, scales, and other transforms pivot from the top-left corner instead of the default center. Useful for door-swing effects or corner-based animations.",
      "topic": "transform-origin"
    },
    {
      "id": 10,
      "question": "How do you combine multiple transforms?",
      "options": {
        "A": "Use multiple transform properties",
        "B": "Use commas: <pre>transform: rotate(45deg), scale(1.5);</pre>",
        "C": "List them space-separated in one transform property: <pre>transform: rotate(45deg) scale(1.5);</pre>",
        "D": "You cannot combine transforms"
      },
      "correct": "C",
      "explanation": "Combine transforms by listing them space-separated in a single <pre>transform</pre> property: <pre>transform: translate(50px, 100px) rotate(45deg) scale(1.5);</pre>. Order matters: transforms are applied right-to-left in the specification, though browsers optimize this.",
      "topic": "Transform Combinations"
    },
    {
      "id": 11,
      "question": "Does the order of transforms matter in <pre>transform: translateX(100px) rotate(45deg);</pre>?",
      "options": {
        "A": "No, order doesn't matter",
        "B": "Only for 3D transforms",
        "C": "Yes, different orders produce different visual results",
        "D": "Only when using scale"
      },
      "correct": "C",
      "explanation": "Transform order is crucial. <pre>translate(100px) rotate(45deg)</pre> moves then rotates, while <pre>rotate(45deg) translate(100px)</pre> rotates then moves along the rotated axis (diagonal). Each transform affects the element's coordinate system for subsequent transforms.",
      "topic": "Transform Combinations"
    },
    {
      "id": 12,
      "question": "What does <pre>transform: rotateX(90deg);</pre> do?",
      "options": {
        "A": "Rotates around the horizontal X-axis, flipping top-to-bottom in 3D space",
        "B": "Rotates around the vertical Y-axis",
        "C": "Same as rotate(90deg)",
        "D": "Translates on X-axis"
      },
      "correct": "A",
      "explanation": "<pre>rotateX()</pre> rotates around the horizontal X-axis (like a door hinge on top). At 90deg, the element appears edge-on. This is a 3D transform that requires perspective to see the depth effect. <pre>rotateY()</pre> rotates around the vertical axis.",
      "topic": "rotateX()"
    },
    {
      "id": 13,
      "question": "What does <pre>transform: rotateY(180deg);</pre> achieve?",
      "options": {
        "A": "Scales element",
        "B": "Rotates 180 degrees clockwise",
        "C": "Moves element",
        "D": "Flips element horizontally in 3D space (back-face visible)"
      },
      "correct": "D",
      "explanation": "<pre>rotateY(180deg)</pre> rotates the element 180 degrees around the vertical Y-axis, showing its back face (like flipping a card). Combined with perspective, this creates a 3D flip effect. Use with <pre>backface-visibility: hidden;</pre> to hide the back.",
      "topic": "rotateY()"
    },
    {
      "id": 14,
      "question": "What is the difference between <pre>rotate(45deg)</pre> and <pre>rotateZ(45deg)</pre>?",
      "options": {
        "A": "rotate is 2D, rotateZ is 3D",
        "B": "No functional difference, both rotate around the Z-axis (perpendicular to screen)",
        "C": "rotateZ is faster",
        "D": "rotate uses radians"
      },
      "correct": "B",
      "explanation": "Both produce the same visual result: rotating around the Z-axis (the axis perpendicular to the screen). <pre>rotateZ()</pre> is explicitly 3D, while <pre>rotate()</pre> is the 2D equivalent. In 3D contexts, they're identical.",
      "topic": "rotateZ()"
    },
    {
      "id": 15,
      "question": "What does the <pre>perspective</pre> property do?",
      "options": {
        "A": "Changes color perspective",
        "B": "Adjusts opacity",
        "C": "Rotates elements",
        "D": "Sets the distance from the viewer to the 3D element, affecting depth perception"
      },
      "correct": "D",
      "explanation": "<pre>perspective</pre> defines the distance from the viewer to the Z=0 plane, creating depth for 3D transforms. Lower values (e.g., 500px) create dramatic perspective, higher values (e.g., 2000px) are more subtle. Applied to parent: <pre>.parent { perspective: 1000px; }</pre>",
      "topic": "perspective"
    },
    {
      "id": 16,
      "question": "Where should <pre>perspective</pre> be applied for 3D transforms on child elements?",
      "options": {
        "A": "On the child element being transformed",
        "B": "On the parent/container element",
        "C": "On the body element",
        "D": "Doesn't matter"
      },
      "correct": "B",
      "explanation": "Apply <pre>perspective</pre> to the parent element containing the 3D-transformed children: <pre>.container { perspective: 1000px; } .child { transform: rotateY(45deg); }</pre>. Alternatively, use <pre>transform: perspective(1000px) rotateY(45deg);</pre> on the child itself.",
      "topic": "perspective"
    },
    {
      "id": 17,
      "question": "What does <pre>transform-style: preserve-3d;</pre> do?",
      "options": {
        "A": "Makes child elements participate in the parent's 3D space rather than being flattened",
        "B": "Improves performance",
        "C": "Adds shadows",
        "D": "Enables transitions"
      },
      "correct": "A",
      "explanation": "<pre>transform-style: preserve-3d;</pre> on a parent allows nested children to exist in 3D space rather than being flattened to 2D. Essential for complex 3D scenes like cubes or cards with multiple faces. Default is <pre>flat</pre> which collapses children to 2D.",
      "topic": "transform-style"
    },
    {
      "id": 18,
      "question": "What is the default value of <pre>transform-style</pre>?",
      "options": {
        "A": "<pre>preserve-3d</pre>",
        "B": "<pre>flat</pre>",
        "C": "<pre>3d</pre>",
        "D": "<pre>auto</pre>"
      },
      "correct": "B",
      "explanation": "The default is <pre>flat</pre>, which flattens child elements into the parent's plane. To create 3D hierarchies (like nested rotating elements), you need to explicitly set <pre>transform-style: preserve-3d;</pre> on parent containers.",
      "topic": "transform-style"
    },
    {
      "id": 19,
      "question": "Can you use percentage values with <pre>translate()</pre>?",
      "options": {
        "A": "Yes, percentages are relative to the element's own dimensions",
        "B": "No, only pixel values",
        "C": "Yes, relative to parent dimensions",
        "D": "Only with translateX"
      },
      "correct": "A",
      "explanation": "<pre>translate(50%, 50%)</pre> moves the element by 50% of its own width horizontally and 50% of its own height vertically. This is useful for centering: <pre>position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);</pre>",
      "topic": "translate()"
    },
    {
      "id": 20,
      "question": "What does <pre>transform: scale(0);</pre> do?",
      "options": {
        "A": "Deletes the element",
        "B": "No effect",
        "C": "Scales element to zero size (invisible but still in layout)",
        "D": "Hides with display: none"
      },
      "correct": "C",
      "explanation": "<pre>scale(0)</pre> shrinks the element to zero size, making it invisible. Unlike <pre>display: none</pre>, the element still occupies space in the layout and can receive events. Useful for scale-in animations: <pre>transform: scale(0);</pre> to <pre>transform: scale(1);</pre>",
      "topic": "scale()"
    },
    {
      "id": 21,
      "question": "What happens when you apply <pre>transform: rotateX(90deg) rotateY(90deg);</pre>?",
      "options": {
        "A": "Element rotates 180 degrees total",
        "B": "Element is rotated 90deg around X-axis, then the resulting orientation is rotated 90deg around Y-axis",
        "C": "Same as rotating 90deg in 2D",
        "D": "No visible effect"
      },
      "correct": "B",
      "explanation": "Transforms are applied in order (right-to-left conceptually, but left-to-right visually in browsers). The element first rotates 90° around the X-axis, then the already-rotated element rotates 90° around the Y-axis. This creates complex 3D orientations.",
      "topic": "Transform Combinations"
    },
    {
      "id": 22,
      "question": "Can transforms affect the document flow or other elements' positions?",
      "options": {
        "A": "Yes, they push other elements around",
        "B": "Only 3D transforms affect layout",
        "C": "No, transforms are purely visual and don't affect layout or other elements",
        "D": "Only scale affects layout"
      },
      "correct": "C",
      "explanation": "Transforms are visual-only effects that don't affect layout. A translated element leaves a gap where it originally was, and doesn't push other elements. This is similar to relative positioning. Use margins or padding if you need to affect layout.",
      "topic": "CSS Transforms"
    },
    {
      "id": 23,
      "question": "What does <pre>skewX(30deg)</pre> do?",
      "options": {
        "A": "Rotates 30 degrees",
        "B": "Slants the element 30 degrees horizontally, creating a parallelogram effect",
        "C": "Moves element 30px",
        "D": "Scales by 30%"
      },
      "correct": "B",
      "explanation": "<pre>skewX(30deg)</pre> slants the element along the X-axis, tilting vertical lines by 30°. This creates a sheared/parallelogram effect. <pre>skewY()</pre> tilts horizontal lines. Skew is less common than other transforms but useful for creative effects.",
      "topic": "skew()"
    },
    {
      "id": 24,
      "question": "How do you create a 3D flip card effect?",
      "options": {
        "A": "Use display: none",
        "B": "Use <pre>rotateY(180deg)</pre> on back face, <pre>perspective</pre> on container, <pre>backface-visibility: hidden</pre> on both faces",
        "C": "Use opacity transitions",
        "D": "Use JavaScript only"
      },
      "correct": "B",
      "explanation": "A flip card uses: 1) <pre>perspective</pre> on the container, 2) <pre>transform-style: preserve-3d</pre> on the card, 3) front and back faces absolutely positioned, 4) <pre>backface-visibility: hidden</pre> on both, 5) <pre>rotateY(180deg)</pre> on the back face initially, 6) rotate the card on hover.",
      "topic": "3D Transforms"
    },
    {
      "id": 25,
      "question": "What's the difference between <pre>perspective: 1000px;</pre> on parent vs <pre>transform: perspective(1000px);</pre> on child?",
      "options": {
        "A": "No difference",
        "B": "Transform version doesn't work",
        "C": "Parent version is deprecated",
        "D": "Parent perspective creates shared vanishing point for all children; transform perspective is individual per element"
      },
      "correct": "D",
      "explanation": "When <pre>perspective</pre> is on the parent, all children share the same vanishing point (3D space). When using <pre>perspective()</pre> in each child's <pre>transform</pre>, each has its own vanishing point. Shared perspective is more realistic for grouped elements.",
      "topic": "perspective"
    }
  ]
}
