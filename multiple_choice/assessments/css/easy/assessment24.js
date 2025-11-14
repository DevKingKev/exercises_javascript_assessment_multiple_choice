module.exports = {
    "metadata": {
        "title": "CSS Images and Media Continued",
        "description": "Continue mastering CSS image techniques with advanced styling, performance optimization, and practical use cases. Build on image fundamentals with real-world scenarios.",
        "difficulty": "easy",
        "domain": "css",
        "timeLimit": 30,
        "questionCount": 30,
        "assessmentId": 24,
        "assessmentUniqueId": 1763068589598,
        "testType": "multiple-choice",
        "topics": [
            "Image Display Modes",
            "Vertical Align Images",
            "Image Opacity and Filters",
            "Image Shadows and Effects",
            "Broken Image Styling",
            "Image Loading States",
            "Multiple Background Images",
            "Background Size and Position",
            "Image Performance",
            "Practical Image Patterns"
        ],
        "topicLinks": [
            {
                "topicName": "Image Display Modes",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
            },
            {
                "topicName": "Vertical Align Images",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"
            },
            {
                "topicName": "Image Opacity and Filters",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
            },
            {
                "topicName": "Image Shadows and Effects",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
            },
            {
                "topicName": "Broken Image Styling",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#styling_with_css"
            },
            {
                "topicName": "Image Loading States",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading"
            },
            {
                "topicName": "Multiple Background Images",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds"
            },
            {
                "topicName": "Background Size and Position",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-size"
            },
            {
                "topicName": "Image Performance",
                "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia"
            },
            {
                "topicName": "Practical Image Patterns",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images"
            }
        ],
        "keywords": [
            "display inline",
            "display block",
            "vertical-align",
            "opacity",
            "filter",
            "blur",
            "brightness",
            "contrast",
            "saturate",
            "box-shadow",
            "drop-shadow",
            "broken images",
            "loading attribute",
            "background-image",
            "background-size",
            "background-position",
            "background-repeat",
            "multiple backgrounds",
            "image optimization",
            "lazy loading",
            "srcset",
            "picture element",
            "image sprites",
            "css shapes",
            "clip-path"
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What is the default <pre>display</pre> value for img elements?",
            "options": {
                "A": "block",
                "B": "inline-block",
                "C": "inline",
                "D": "flex"
            },
            "correct": "B",
            "explanation": "The default display value for img elements is 'inline', which is why they can appear side-by-side and have space below them for descenders.",
            "topic": "Image Display Modes"
        },
        {
            "id": 2,
            "question": "Which <pre>vertical-align</pre> value removes the space below inline images?",
            "options": {
                "A": "vertical-align: top",
                "B": "vertical-align: middle",
                "C": "vertical-align: baseline",
                "D": "Both A and B work"
            },
            "correct": "D",
            "explanation": "Setting vertical-align to values other than baseline (such as top, middle, or bottom) removes the descender space below inline images. Alternatively, changing display to block also works.",
            "topic": "Vertical Align Images"
        },
        {
            "id": 3,
            "question": "What does <pre>opacity: 0.5</pre> do to an image?",
            "options": {
                "A": "Decreases brightness by 50%",
                "B": "Reduces image quality by 50%",
                "C": "Shrinks the image to 50% size",
                "D": "Makes the image 50% transparent"
            },
            "correct": "D",
            "explanation": "opacity: 0.5 makes the image 50% transparent (or semi-transparent), allowing content behind it to show through.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 4,
            "question": "Which CSS filter creates a blur effect on an image?",
            "options": {
                "A": "blur: 5px",
                "B": "filter: blur(5px)",
                "C": "image-blur: 5px",
                "D": "opacity: blur"
            },
            "correct": "B",
            "explanation": "filter: blur(5px) applies a Gaussian blur effect to the image. The value in pixels determines the blur radius.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 5,
            "question": "What does <pre>filter: brightness(150%)</pre> do?",
            "options": {
                "A": "Decreases brightness by 150%",
                "B": "Sets brightness to exactly 150 lumens",
                "C": "Increases brightness by 50%",
                "D": "Has no effect"
            },
            "correct": "C",
            "explanation": "filter: brightness(150%) increases the brightness by 50% (150% means 1.5x the original brightness). Values below 100% darken, values above 100% brighten.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 6,
            "question": "Can you combine multiple filters on a single image?",
            "options": {
                "A": "No, only one filter at a time",
                "B": "Yes, by space-separating filter functions",
                "C": "Only blur and brightness",
                "D": "Only with JavaScript"
            },
            "correct": "B",
            "explanation": "Yes, you can combine multiple filters by space-separating them: filter: blur(5px) brightness(120%) contrast(110%)",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 7,
            "question": "What is the difference between <pre>box-shadow</pre> and <pre>drop-shadow()</pre> filter for images?",
            "options": {
                "A": "They are identical",
                "B": "box-shadow is faster",
                "C": "drop-shadow follows the image's alpha channel shape, box-shadow creates a rectangular shadow",
                "D": "drop-shadow only works on div elements"
            },
            "correct": "C",
            "explanation": "drop-shadow() filter follows the contours of the image's transparency (alpha channel), while box-shadow creates a rectangular shadow around the element's box, even if the image has transparency.",
            "topic": "Image Shadows and Effects"
        },
        {
            "id": 8,
            "question": "How can you style a broken/missing image differently?",
            "options": {
                "A": "Use img:broken selector",
                "B": "It's not possible with CSS alone",
                "C": "Use img:error selector",
                "D": "Style the img element with padding, border, and color (they show when image fails)"
            },
            "correct": "D",
            "explanation": "When an image fails to load, the alt text is displayed and inherits styles from the img element. You can style the img with padding, border, background, color, and font properties to improve broken image appearance.",
            "topic": "Broken Image Styling"
        },
        {
            "id": 9,
            "question": "What does the HTML <pre>loading=\"lazy\"</pre> attribute do?",
            "options": {
                "A": "Makes the image load slowly",
                "B": "Reduces image quality",
                "C": "Defers loading images until they're near the viewport",
                "D": "Compresses the image file"
            },
            "correct": "C",
            "explanation": "loading=\"lazy\" is a native lazy loading attribute that defers loading offscreen images until the user scrolls near them, improving initial page load performance.",
            "topic": "Image Loading States"
        },
        {
            "id": 10,
            "question": "Can you apply multiple background images to a single element?",
            "options": {
                "A": "Yes, by comma-separating background-image values",
                "B": "No, only one background image per element",
                "C": "Only with pseudo-elements",
                "D": "Only in modern browsers"
            },
            "correct": "A",
            "explanation": "Yes, you can apply multiple background images by comma-separating them in background-image. The first image is on top, subsequent images layer underneath.",
            "topic": "Multiple Background Images"
        },
        {
            "id": 11,
            "question": "What does <pre>background-size: contain</pre> do?",
            "options": {
                "A": "Scales the background to fit entirely within the element while maintaining aspect ratio",
                "B": "Stretches the background to fill the container",
                "C": "Tiles the background",
                "D": "Crops the background"
            },
            "correct": "A",
            "explanation": "background-size: contain scales the background image to fit entirely within the element while maintaining aspect ratio. The entire image is visible, but may not fill the element.",
            "topic": "Background Size and Position"
        },
        {
            "id": 12,
            "question": "What is the default value of <pre>background-repeat</pre>?",
            "options": {
                "A": "no-repeat",
                "B": "repeat",
                "C": "repeat-x",
                "D": "space"
            },
            "correct": "B",
            "explanation": "The default value of background-repeat is 'repeat', which tiles the background image both horizontally and vertically.",
            "topic": "Background Size and Position"
        },
        {
            "id": 13,
            "question": "What does <pre>background-position: center</pre> do?",
            "options": {
                "A": "Moves the element to the center",
                "B": "Creates a centered gradient",
                "C": "Centers the background image within the element",
                "D": "Aligns text to center"
            },
            "correct": "C",
            "explanation": "background-position: center centers the background image both horizontally and vertically within the element.",
            "topic": "Background Size and Position"
        },
        {
            "id": 14,
            "question": "Can you use percentage values with <pre>background-position</pre>?",
            "options": {
                "A": "No, only pixel values",
                "B": "Yes, percentages position relative to the element size",
                "C": "Only for horizontal positioning",
                "D": "Only with background-size"
            },
            "correct": "B",
            "explanation": "Yes, background-position accepts percentages. For example, 'background-position: 25% 75%' positions the point at 25% of the image at 25% of the element horizontally, and 75% vertically.",
            "topic": "Background Size and Position"
        },
        {
            "id": 15,
            "question": "What does <pre>filter: grayscale(50%)</pre> do?",
            "options": {
                "A": "Removes 50% of the image",
                "B": "Converts the image to 50% grayscale (halfway between color and full grayscale)",
                "C": "Reduces image size by 50%",
                "D": "Lightens the image by 50%"
            },
            "correct": "B",
            "explanation": "filter: grayscale(50%) converts the image to 50% grayscale, creating a blend between the original color and full grayscale. 0% is full color, 100% is full grayscale.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 16,
            "question": "Which filter inverts the colors of an image?",
            "options": {
                "A": "color-mode: invert",
                "B": "filter: reverse()",
                "C": "filter: negative()",
                "D": "filter: invert(100%)"
            },
            "correct": "D",
            "explanation": "filter: invert(100%) inverts all colors in the image. Values from 0% (no inversion) to 100% (complete inversion) are supported.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 17,
            "question": "What does <pre>background-repeat: space</pre> do?",
            "options": {
                "A": "Adds spacing between image and text",
                "B": "Repeats the image with equal spacing between tiles without clipping",
                "C": "Creates whitespace around the image",
                "D": "Same as no-repeat"
            },
            "correct": "B",
            "explanation": "background-repeat: space repeats the background image as many times as will fit without clipping, distributing extra space evenly between the images.",
            "topic": "Background Size and Position"
        },
        {
            "id": 18,
            "question": "Can you animate CSS filters with transitions?",
            "options": {
                "A": "No, filters cannot be animated",
                "B": "Only blur and opacity",
                "C": "Yes, filter values can be smoothly transitioned",
                "D": "Only with keyframe animations"
            },
            "correct": "C",
            "explanation": "Yes, CSS filter values are animatable and can be smoothly transitioned or animated. For example, you can transition from grayscale(0%) to grayscale(100%).",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 19,
            "question": "What does <pre>filter: contrast(200%)</pre> do?",
            "options": {
                "A": "Doubles the image size",
                "B": "Has no visible effect",
                "C": "Decreases contrast by 200%",
                "D": "Increases the contrast, making lights lighter and darks darker"
            },
            "correct": "D",
            "explanation": "filter: contrast(200%) doubles the contrast, making light areas lighter and dark areas darker. 100% is normal, below 100% decreases contrast, above 100% increases it.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 20,
            "question": "How can you create a circular crop of an image using <pre>clip-path</pre>?",
            "options": {
                "A": "clip-path: circle(50%)",
                "B": "clip-path: circle()",
                "C": "clip-path: round",
                "D": "border-radius: circle"
            },
            "correct": "A",
            "explanation": "clip-path: circle(50%) creates a circular crop of the image. The 50% represents the radius. Alternatively, clip-path: circle(50% at center) is more explicit.",
            "topic": "Image Shadows and Effects"
        },
        {
            "id": 21,
            "question": "What is the purpose of <pre>background-attachment: fixed</pre>?",
            "options": {
                "A": "Prevents the background from loading",
                "B": "Creates a parallax effect where the background stays fixed during scrolling",
                "C": "Fixes broken background images",
                "D": "Locks the background size"
            },
            "correct": "B",
            "explanation": "background-attachment: fixed creates a parallax effect by fixing the background image relative to the viewport, so it stays in place while the content scrolls over it.",
            "topic": "Background Size and Position"
        },
        {
            "id": 22,
            "question": "Can you use <pre>object-fit</pre> with video elements?",
            "options": {
                "A": "No, only with images",
                "B": "Only with HTML5 video",
                "C": "Only in Chrome",
                "D": "Yes, object-fit works with all replaced elements including video"
            },
            "correct": "D",
            "explanation": "Yes, object-fit works with all replaced elements including img, video, iframe, and others. It's commonly used to control how videos fit within their containers.",
            "topic": "Image Display Modes"
        },
        {
            "id": 23,
            "question": "What does <pre>filter: saturate(0%)</pre> do?",
            "options": {
                "A": "Increases color saturation",
                "B": "Inverts colors",
                "C": "Has no effect",
                "D": "Removes all color saturation (makes image grayscale)"
            },
            "correct": "D",
            "explanation": "filter: saturate(0%) removes all color saturation, effectively making the image grayscale. 100% is normal saturation, above 100% increases saturation.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 24,
            "question": "Which is better for performance: multiple img elements or CSS sprites?",
            "options": {
                "A": "CSS sprites reduce HTTP requests but are less flexible",
                "B": "Always use multiple img elements",
                "C": "They have identical performance",
                "D": "Sprites are always slower"
            },
            "correct": "A",
            "explanation": "CSS sprites combine multiple images into one file, reducing HTTP requests which can improve performance. However, with HTTP/2, individual images may be fine, and sprites are less flexible for responsive design.",
            "topic": "Image Performance"
        },
        {
            "id": 25,
            "question": "What does <pre>background-blend-mode</pre> do?",
            "options": {
                "A": "Blends multiple background images together",
                "B": "Blends the background with text",
                "C": "Creates gradient backgrounds",
                "D": "Adjusts background opacity"
            },
            "correct": "A",
            "explanation": "background-blend-mode defines how an element's background layers (images and colors) blend with each other. It supports values like multiply, screen, overlay, etc.",
            "topic": "Multiple Background Images"
        },
        {
            "id": 26,
            "question": "Can you use gradients and images together in <pre>background-image</pre>?",
            "options": {
                "A": "No, only one type at a time",
                "B": "Only with background-blend-mode",
                "C": "Yes, by comma-separating them",
                "D": "Only as fallbacks"
            },
            "correct": "C",
            "explanation": "Yes, you can combine gradients and images in background-image by comma-separating them. For example: background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(image.jpg)",
            "topic": "Multiple Background Images"
        },
        {
            "id": 27,
            "question": "What does <pre>filter: sepia(100%)</pre> create?",
            "options": {
                "A": "A black and white image",
                "B": "A negative image",
                "C": "A warm, brownish vintage photo effect",
                "D": "A blurred image"
            },
            "correct": "C",
            "explanation": "filter: sepia(100%) converts the image to sepia tones, creating a warm, brownish vintage photograph effect. 0% is the original image, 100% is fully sepia.",
            "topic": "Image Opacity and Filters"
        },
        {
            "id": 28,
            "question": "What is the purpose of the <pre>image-rendering</pre> property?",
            "options": {
                "A": "Provides a hint to the browser about image scaling algorithm (crisp-edges, pixelated, etc.)",
                "B": "Controls the rendering speed",
                "C": "Sets image quality",
                "D": "Controls image loading priority"
            },
            "correct": "A",
            "explanation": "image-rendering provides a hint to the browser about what aspects to prioritize when scaling images. Values like 'crisp-edges' or 'pixelated' can preserve sharp edges for pixel art.",
            "topic": "Image Performance"
        },
        {
            "id": 29,
            "question": "Can you use <pre>mix-blend-mode</pre> on img elements?",
            "options": {
                "A": "No, only on div elements",
                "B": "Yes, it blends the image with content behind it",
                "C": "Only with opacity",
                "D": "Only in Photoshop"
            },
            "correct": "B",
            "explanation": "Yes, mix-blend-mode can be applied to img elements to blend them with underlying content using modes like multiply, screen, overlay, etc.",
            "topic": "Image Shadows and Effects"
        },
        {
            "id": 30,
            "question": "What does <pre>background-clip: text</pre> do?",
            "options": {
                "A": "Clips the background to the shape of the text, creating a text-filled-with-image effect",
                "B": "Clips the background to the padding box",
                "C": "Removes the background",
                "D": "Clips text content"
            },
            "correct": "A",
            "explanation": "background-clip: text (with -webkit- prefix) clips the background to the shape of the text, often combined with transparent text color to create an image or gradient text effect.",
            "topic": "Practical Image Patterns"
        }
    ]
};
