module.exports = {
  "metadata": {
    "title": "CSS Images and Media",
    "description": "Master CSS techniques for styling and controlling images and media elements. Learn about responsive images, object-fit, object-position, and best practices for image presentation.",
    "difficulty": "easy",
    "domain": "css",
    "timeLimit": 30,
    "questionCount": 30,
    "assessmentId": 23,
    "assessmentUniqueId": 1763068341241,
    "testType": "multiple-choice",
    "topics": [
      "Responsive Images",
      "Max-width for Images",
      "Object-fit Property",
      "Object-position Property",
      "Styling Img Elements",
      "Background Images vs Img",
      "Image Aspect Ratios",
      "Width and Height Attributes",
      "Alt Text Styling",
      "Image Optimization"
    ],
    "topicLinks": [
      "Responsive Images",
      "Max-width for Images",
      "Object-fit Property",
      "Object-position Property",
      "Styling Img Elements",
      "Background Images vs Img",
      "Image Aspect Ratios",
      "Width and Height Attributes",
      "Alt Text Styling",
      "Image Optimization"
    ],
    "keywords": [
      "max-width",
      "object-fit",
      "object-position",
      "img element",
      "background-image",
      "aspect-ratio",
      "width attribute",
      "height attribute",
      "alt text",
      "responsive images",
      "cover",
      "contain",
      "fill",
      "scale-down",
      "image alignment",
      "placeholder images",
      "image styling",
      "media elements",
      "image optimization",
      "intrinsic size",
      "display block",
      "vertical-align",
      "border-radius",
      "filter effects",
      "image accessibility"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What does <pre>max-width: 100%</pre> do when applied to an image?",
      "options": {
        "A": "Prevents the image from exceeding its parent's width while maintaining aspect ratio",
        "B": "Sets the image width to exactly 100% of its parent",
        "C": "Scales the image to 100% of the viewport",
        "D": "Makes the image stretch to fill its container"
      },
      "correct": "A",
      "explanation": "max-width: 100% prevents the image from exceeding its parent container's width while maintaining its aspect ratio. The image can be smaller than 100% but won't exceed it, making it responsive.",
      "topic": "Responsive Images"
    },
    {
      "id": 2,
      "question": "Which <pre>object-fit</pre> value scales an image to completely fill its container, potentially cropping the image?",
      "options": {
        "A": "fill",
        "B": "contain",
        "C": "cover",
        "D": "scale-down"
      },
      "correct": "A",
      "explanation": "object-fit: cover scales the image to completely fill the container while maintaining aspect ratio, which may result in parts of the image being cropped.",
      "topic": "Object-fit Property"
    },
    {
      "id": 3,
      "question": "What does <pre>object-fit: contain</pre> do?",
      "options": {
        "A": "Stretches the image to fill the container",
        "B": "Crops the image to fit",
        "C": "Scales the image to fit entirely within the container while maintaining aspect ratio",
        "D": "Tiles the image within the container"
      },
      "correct": "B",
      "explanation": "object-fit: contain scales the image to fit entirely within its container while maintaining aspect ratio. The entire image is visible, and letterboxing may occur if aspect ratios don't match.",
      "topic": "Object-fit Property"
    },
    {
      "id": 4,
      "question": "What is the default value of the <pre>object-fit</pre> property?",
      "options": {
        "A": "contain",
        "B": "fill",
        "C": "cover",
        "D": "none"
      },
      "correct": "C",
      "explanation": "The default value of object-fit is 'fill', which stretches the image to fill the container, potentially distorting the aspect ratio.",
      "topic": "Object-fit Property"
    },
    {
      "id": 5,
      "question": "What does <pre>object-fit: scale-down</pre> do?",
      "options": {
        "A": "Always scales the image down to 50%",
        "B": "Behaves like 'none' or 'contain', whichever results in a smaller image",
        "C": "Scales the image down to fit the viewport",
        "D": "Reduces image quality to decrease file size"
      },
      "correct": "B",
      "explanation": "object-fit: scale-down displays the image as if 'none' or 'contain' were specified, whichever would result in a smaller concrete object size.",
      "topic": "Object-fit Property"
    },
    {
      "id": 6,
      "question": "What does the <pre>object-position</pre> property control?",
      "options": {
        "A": "The size of the image",
        "B": "The alignment of the image within its content box",
        "C": "The aspect ratio of the image",
        "D": "The border around the image"
      },
      "correct": "B",
      "explanation": "The object-position property specifies how the replaced element (like an image) is positioned within its content box. It works similarly to background-position.",
      "topic": "Object-position Property"
    },
    {
      "id": 7,
      "question": "What is the default value of <pre>object-position</pre>?",
      "options": {
        "A": "top left",
        "B": "center center",
        "C": "0 0",
        "D": "50% 50%"
      },
      "correct": "B",
      "explanation": "The default value of object-position is '50% 50%' or 'center center', which centers the image within its box.",
      "topic": "Object-position Property"
    },
    {
      "id": 8,
      "question": "Can you apply <pre>border-radius</pre> to img elements?",
      "options": {
        "A": "No, only to div elements",
        "B": "Only with PNG images",
        "C": "Only if the image has a background color",
        "D": "Yes, to create rounded or circular images"
      },
      "correct": "D",
      "explanation": "Yes, border-radius can be applied to img elements to create rounded corners or circular images (e.g., border-radius: 50% for a circle).",
      "topic": "Styling Img Elements"
    },
    {
      "id": 9,
      "question": "What is a key semantic difference between background images and <pre>&lt;img&gt;</pre> elements?",
      "options": {
        "A": "Background images load faster",
        "B": "img elements are semantic content, background images are decorative",
        "C": "Background images have better browser support",
        "D": "img elements can't be responsive"
      },
      "correct": "B",
      "explanation": "img elements are semantic HTML content that should be used for meaningful images (with alt text for accessibility). Background images are CSS presentation and should be used for decorative purposes only.",
      "topic": "Background Images vs Img"
    },
    {
      "id": 10,
      "question": "Which is better for SEO and accessibility: background images or <pre>&lt;img&gt;</pre> elements?",
      "options": {
        "A": "Background images because they load asynchronously",
        "B": "img elements because they support alt text and are indexed by search engines",
        "C": "Both are equal for SEO",
        "D": "Background images because they're part of CSS"
      },
      "correct": "B",
      "explanation": "img elements are better for SEO and accessibility because they support alt text, are indexed by search engines, and are recognized by screen readers as content.",
      "topic": "Background Images vs Img"
    },
    {
      "id": 11,
      "question": "What does the CSS <pre>aspect-ratio</pre> property do?",
      "options": {
        "A": "Changes the image file format",
        "B": "Adjusts the image resolution",
        "C": "Sets a preferred aspect ratio for an element's box",
        "D": "Controls the image compression"
      },
      "correct": "C",
      "explanation": "The aspect-ratio property sets a preferred aspect ratio for an element's box, which is used in calculating auto sizes. For example, aspect-ratio: 16/9 maintains a 16:9 ratio.",
      "topic": "Image Aspect Ratios"
    },
    {
      "id": 12,
      "question": "Why is it recommended to include <pre>width</pre> and <pre>height</pre> attributes on img elements?",
      "options": {
        "A": "To prevent layout shift while the image loads",
        "B": "To make the image load faster",
        "C": "To compress the image file size",
        "D": "To enable object-fit"
      },
      "correct": "C",
      "explanation": "Including width and height attributes helps prevent Cumulative Layout Shift (CLS) by allowing the browser to reserve the correct amount of space before the image loads.",
      "topic": "Width and Height Attributes"
    },
    {
      "id": 13,
      "question": "Do the <pre>width</pre> and <pre>height</pre> HTML attributes on img elements set the display size?",
      "options": {
        "A": "No, CSS can override them",
        "B": "Yes, they always determine the final display size",
        "C": "Only if no CSS is applied",
        "D": "Only for PNG images"
      },
      "correct": "A",
      "explanation": "While width and height attributes set intrinsic size and aspect ratio, CSS properties can override them for the actual display size.",
      "topic": "Width and Height Attributes"
    },
    {
      "id": 14,
      "question": "Can you style the <pre>alt</pre> text of an image with CSS?",
      "options": {
        "A": "No, alt text cannot be styled",
        "B": "Yes, when the image fails to load, alt text inherits text styles from the img element",
        "C": "Only with JavaScript",
        "D": "Only in Firefox"
      },
      "correct": "B",
      "explanation": "When an image fails to load, the alt text is displayed and inherits text-related styles (font-family, color, etc.) from the img element and its container.",
      "topic": "Alt Text Styling"
    },
    {
      "id": 15,
      "question": "What is a common CSS technique to make images responsive?",
      "options": {
        "A": "width: auto; height: auto;",
        "B": "width: 100vw; height: 100vh;",
        "C": "min-width: 100%; min-height: 100%;",
        "D": "max-width: 100%; height: auto;"
      },
      "correct": "D",
      "explanation": "The combination of max-width: 100% and height: auto is a common responsive image technique that prevents images from exceeding container width while maintaining aspect ratio.",
      "topic": "Responsive Images"
    },
    {
      "id": 16,
      "question": "Why do img elements sometimes have unexpected spacing below them?",
      "options": {
        "A": "Due to their default inline display creating space for descenders",
        "B": "Because of the alt attribute",
        "C": "Due to image compression",
        "D": "Because of browser bugs"
      },
      "correct": "D",
      "explanation": "img elements are inline by default, which reserves space for descenders (like in 'y' or 'g'). Setting display: block removes this spacing.",
      "topic": "Styling Img Elements"
    },
    {
      "id": 17,
      "question": "Which CSS property can you use to create a circular profile image from a square image?",
      "options": {
        "A": "circle: 50%",
        "B": "border-radius: 50%",
        "C": "shape: circle",
        "D": "clip-path: circle"
      },
      "correct": "C",
      "explanation": "border-radius: 50% on a square image creates a perfect circle. Alternatively, clip-path: circle(50%) can also be used.",
      "topic": "Styling Img Elements"
    },
    {
      "id": 18,
      "question": "What does <pre>object-fit: none</pre> do?",
      "options": {
        "A": "Hides the image",
        "B": "Displays the image at its intrinsic size, potentially cropping it",
        "C": "Removes all styling from the image",
        "D": "Makes the image transparent"
      },
      "correct": "B",
      "explanation": "object-fit: none displays the image at its intrinsic (original) size within the element's box. If the image is larger than the box, it will be cropped.",
      "topic": "Object-fit Property"
    },
    {
      "id": 19,
      "question": "Can <pre>object-position</pre> accept negative values?",
      "options": {
        "A": "No, only positive values are allowed",
        "B": "Only with object-fit: cover",
        "C": "Only for background images",
        "D": "Yes, to position the image outside its box"
      },
      "correct": "D",
      "explanation": "Yes, object-position can accept negative values, which can position parts of the image outside the visible box area.",
      "topic": "Object-position Property"
    },
    {
      "id": 20,
      "question": "What happens when you set both <pre>width: 100%</pre> and <pre>height: 100%</pre> on an image without object-fit?",
      "options": {
        "A": "The image maintains its aspect ratio",
        "B": "The image is cropped",
        "C": "The image becomes circular",
        "D": "The image may become distorted"
      },
      "correct": "D",
      "explanation": "Setting both width: 100% and height: 100% without object-fit can distort the image because it forces the image to match the container's dimensions regardless of its aspect ratio.",
      "topic": "Responsive Images"
    },
    {
      "id": 21,
      "question": "Which CSS filter can you apply to make an image grayscale?",
      "options": {
        "A": "filter: grayscale(100%)",
        "B": "background: grayscale",
        "C": "color: gray",
        "D": "image-filter: gray"
      },
      "correct": "C",
      "explanation": "The filter: grayscale(100%) property converts an image to full grayscale. You can use values from 0% (original) to 100% (fully grayscale).",
      "topic": "Styling Img Elements"
    },
    {
      "id": 22,
      "question": "What is the purpose of setting <pre>display: block</pre> on img elements?",
      "options": {
        "A": "To enable object-fit",
        "B": "To make the image load faster",
        "C": "To remove the default inline spacing below the image",
        "D": "To enable responsive behavior"
      },
      "correct": "C",
      "explanation": "Setting display: block on img elements removes the default inline behavior and the small space below images caused by descender spacing.",
      "topic": "Styling Img Elements"
    },
    {
      "id": 23,
      "question": "Can you use <pre>object-fit</pre> with background images?",
      "options": {
        "A": "Yes, it works with both",
        "B": "No, object-fit only works with replaced elements like img, video, iframe",
        "C": "Only in Chrome",
        "D": "Only if background-size is set"
      },
      "correct": "B",
      "explanation": "object-fit only works with replaced elements like img, video, and iframe. For background images, use background-size instead (e.g., background-size: cover or contain).",
      "topic": "Object-fit Property"
    },
    {
      "id": 24,
      "question": "What does <pre>aspect-ratio: 16 / 9</pre> do when applied to an image container?",
      "options": {
        "A": "Maintains a 16:9 width-to-height ratio for the container",
        "B": "Crops the image to 16:9",
        "C": "Changes the image resolution",
        "D": "Only works with video elements"
      },
      "correct": "A",
      "explanation": "aspect-ratio: 16 / 9 maintains a 16:9 width-to-height ratio for the element. When width is set, height is automatically calculated to maintain this ratio.",
      "topic": "Image Aspect Ratios"
    },
    {
      "id": 25,
      "question": "How can you center an image horizontally using CSS?",
      "options": {
        "A": "Set position: center",
        "B": "Set display: block and margin: 0 auto",
        "C": "Set align: center",
        "D": "Set float: center"
      },
      "correct": "A",
      "explanation": "To center an image horizontally, set display: block (or inline-block) and margin: 0 auto. The auto margins distribute space evenly on left and right.",
      "topic": "Styling Img Elements"
    },
    {
      "id": 26,
      "question": "What is the equivalent of <pre>object-fit: cover</pre> for background images?",
      "options": {
        "A": "background-size: contain",
        "B": "background-scale: cover",
        "C": "background-fit: cover",
        "D": "background-size: cover"
      },
      "correct": "D",
      "explanation": "background-size: cover is the equivalent of object-fit: cover for background images. It scales the background to cover the entire element while maintaining aspect ratio.",
      "topic": "Background Images vs Img"
    },
    {
      "id": 27,
      "question": "Can you apply CSS transitions to <pre>object-position</pre>?",
      "options": {
        "A": "No, it's not animatable",
        "B": "Only with JavaScript",
        "C": "Yes, you can smoothly transition between positions",
        "D": "Only for video elements"
      },
      "correct": "C",
      "explanation": "Yes, object-position is animatable and can be smoothly transitioned using CSS transitions or animations.",
      "topic": "Object-position Property"
    },
    {
      "id": 28,
      "question": "What happens if you set <pre>max-width: 100%</pre> on an image that is smaller than its container?",
      "options": {
        "A": "The image stretches to fill the container",
        "B": "The image displays at its natural size",
        "C": "The image is hidden",
        "D": "The image is centered automatically"
      },
      "correct": "B",
      "explanation": "max-width: 100% sets a maximum width limit. If the image is smaller than the container, it displays at its natural size. It only scales down if it would exceed the container width.",
      "topic": "Max-width for Images"
    },
    {
      "id": 29,
      "question": "Which property combination prevents an image from being larger than its container while maintaining aspect ratio?",
      "options": {
        "A": "width: 100%; height: 100%;",
        "B": "object-fit: contain; width: 100%;",
        "C": "min-width: 100%; min-height: 100%;",
        "D": "max-width: 100%; max-height: 100%;"
      },
      "correct": "D",
      "explanation": "max-width: 100% and max-height: 100% (or just max-width: 100% with height: auto) prevent the image from exceeding its container while maintaining its aspect ratio.",
      "topic": "Responsive Images"
    },
    {
      "id": 30,
      "question": "What is a practical use case for <pre>object-position: top</pre>?",
      "options": {
        "A": "To align the image content to the top when using object-fit and cropping occurs",
        "B": "To rotate the image to the top",
        "C": "To move the image above its container",
        "D": "To set the image z-index"
      },
      "correct": "A",
      "explanation": "object-position: top is useful when using object-fit: cover to ensure important content (like faces in photos) aligns to the top of the container rather than being centered.",
      "topic": "Object-position Property"
    }
  ]
}
