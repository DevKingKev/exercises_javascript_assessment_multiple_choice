module.exports = {
  "metadata": {
    "title": "CSS Overflow and Clipping",
    "description": "Master CSS overflow properties including overflow, overflow-x, and overflow-y with values like visible, hidden, scroll, and auto, understand text-overflow ellipsis for truncating text, learn when to use different overflow values, and explore clipping content and scroll behavior basics for controlling how content displays when it exceeds container boundaries.",
    "difficulty": "easy",
    "domain": "css",
    "timeLimit": 30,
    "questionCount": 30,
    "assessmentId": 18,
    "assessmentUniqueId": 1763066174734,
    "testType": "multiple-choice",
    "topics": [
      "Overflow Property",
      "Overflow Visible",
      "Overflow Hidden",
      "Overflow Scroll",
      "Overflow Auto",
      "Overflow-x and Overflow-y",
      "Text Overflow Ellipsis",
      "White-space Nowrap",
      "Clipping Content",
      "Scroll Behavior"
    ],
    "topicLinks": [
      {
        "topicName": "Overflow Property",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
      },
      {
        "topicName": "Overflow Visible",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#visible"
      },
      {
        "topicName": "Overflow Hidden",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#hidden"
      },
      {
        "topicName": "Overflow Scroll",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#scroll"
      },
      {
        "topicName": "Overflow Auto",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#auto"
      },
      {
        "topicName": "Overflow-x and Overflow-y",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x"
      },
      {
        "topicName": "Text Overflow Ellipsis",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"
      },
      {
        "topicName": "White-space Nowrap",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space#nowrap"
      },
      {
        "topicName": "Clipping Content",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#clipping_content"
      },
      {
        "topicName": "Scroll Behavior",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior"
      }
    ],
    "keywords": [
      "overflow",
      "overflow-x",
      "overflow-y",
      "visible",
      "hidden",
      "scroll",
      "auto",
      "text-overflow",
      "ellipsis",
      "white-space",
      "nowrap",
      "clipping",
      "scrollbar",
      "scroll-behavior",
      "content-overflow",
      "container-overflow",
      "text-truncation",
      "single-line-text",
      "overflow-values",
      "scrollable-container",
      "hidden-content",
      "overflow-control",
      "clip",
      "text-wrapping",
      "overflow-difference",
      "auto-vs-scroll"
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the default value of the <pre>overflow</pre> property?",
      "options": {
        "A": "hidden",
        "B": "scroll",
        "C": "visible",
        "D": "auto"
      },
      "correct": "C",
      "explanation": "The default value of overflow is 'visible', which means content that exceeds the container's dimensions will overflow and be visible outside the container boundaries. This is the browser's default behavior when no overflow property is specified.",
      "topic": "Overflow Property"
    },
    {
      "id": 2,
      "question": "What does <pre>overflow: hidden;</pre> do?",
      "options": {
        "A": "Makes the entire element invisible",
        "B": "Adds scrollbars",
        "C": "Clips content that exceeds the container, hiding the overflow",
        "D": "Makes content transparent"
      },
      "correct": "C",
      "explanation": "overflow: hidden clips any content that exceeds the container's boundaries, making it invisible. No scrollbars are added, and users cannot scroll to see the hidden content. This is commonly used to contain floated children or hide overflow without scrollbars.",
      "topic": "Overflow Hidden"
    },
    {
      "id": 3,
      "question": "What does <pre>overflow: scroll;</pre> do?",
      "options": {
        "A": "Only adds scrollbars when content overflows",
        "B": "Always adds scrollbars, even if content doesn't overflow",
        "C": "Hides overflow content",
        "D": "Makes content wrap to next line"
      },
      "correct": "B",
      "explanation": "overflow: scroll always adds scrollbars (both horizontal and vertical by default), even if the content fits within the container. This can result in unnecessary scrollbars when content doesn't overflow. For conditional scrollbars, use overflow: auto instead.",
      "topic": "Overflow Scroll"
    },
    {
      "id": 4,
      "question": "What does <pre>overflow: auto;</pre> do?",
      "options": {
        "A": "Always shows scrollbars",
        "B": "Adds scrollbars only when content overflows",
        "C": "Hides all overflow",
        "D": "Makes content automatically resize"
      },
      "correct": "B",
      "explanation": "overflow: auto adds scrollbars only when the content actually overflows the container. If content fits, no scrollbars appear. This is generally preferred over 'scroll' because it avoids unnecessary scrollbars and provides a better user experience.",
      "topic": "Overflow Auto"
    },
    {
      "id": 5,
      "question": "How do you control overflow only on the horizontal axis?",
      "options": {
        "A": "overflow: horizontal;",
        "B": "overflow-x: auto;",
        "C": "horizontal-overflow: auto;",
        "D": "x-overflow: auto;"
      },
      "correct": "B",
      "explanation": "overflow-x controls overflow behavior only on the horizontal axis (left/right). Similarly, overflow-y controls vertical overflow (top/bottom). You can use different values for each axis, like overflow-x: hidden; overflow-y: auto; to hide horizontal overflow while allowing vertical scrolling.",
      "topic": "Overflow-x and Overflow-y"
    },
    {
      "id": 6,
      "question": "What does <pre>text-overflow: ellipsis;</pre> require to work?",
      "options": {
        "A": "Nothing, it works on its own",
        "B": "Only width property",
        "C": "Only overflow: hidden;",
        "D": "white-space: nowrap; and overflow: hidden;"
      },
      "correct": "D",
      "explanation": "text-overflow: ellipsis requires three properties to work: (1) white-space: nowrap (prevents text wrapping), (2) overflow: hidden (clips the overflow), and (3) a width constraint. Without all three, the ellipsis won't appear. The ellipsis (...) indicates truncated text.",
      "topic": "Text Overflow Ellipsis"
    },
    {
      "id": 7,
      "question": "What does <pre>white-space: nowrap;</pre> do?",
      "options": {
        "A": "Prevents text from wrapping to a new line",
        "B": "Removes all white space from text",
        "C": "Adds extra spacing between words",
        "D": "Makes text invisible"
      },
      "correct": "A",
      "explanation": "white-space: nowrap prevents text from wrapping to a new line. Text will continue on a single line even if it exceeds the container width, potentially causing horizontal overflow. This is commonly used with text-overflow: ellipsis to create single-line text truncation.",
      "topic": "White-space Nowrap"
    },
    {
      "id": 8,
      "question": "When should you use <pre>overflow: auto;</pre> instead of <pre>overflow: scroll;</pre>?",
      "options": {
        "A": "When you always want scrollbars visible",
        "B": "When you want scrollbars only when needed",
        "C": "When you want to hide overflow",
        "D": "They are exactly the same"
      },
      "correct": "B",
      "explanation": "Use overflow: auto when you want scrollbars to appear only when content actually overflows. This provides a cleaner interface when content fits. Use overflow: scroll when you want scrollbars always visible (rare use case), perhaps to maintain consistent layout regardless of content size.",
      "topic": "Overflow Auto"
    },
    {
      "id": 9,
      "question": "Can you set different overflow values for X and Y axes?",
      "options": {
        "A": "No, both axes must have the same value",
        "B": "Yes, using overflow-x and overflow-y",
        "C": "Only in modern browsers",
        "D": "Only with JavaScript"
      },
      "correct": "B",
      "explanation": "Yes, you can set different overflow behaviors for each axis using overflow-x and overflow-y. For example, overflow-x: hidden; overflow-y: auto; hides horizontal overflow while adding vertical scrollbars when needed. This is useful for controlling scrolling in specific directions.",
      "topic": "Overflow-x and Overflow-y"
    },
    {
      "id": 10,
      "question": "What does <pre>overflow: visible;</pre> do when content exceeds the container?",
      "options": {
        "A": "Hides the overflow",
        "B": "Adds scrollbars",
        "C": "Compresses the content to fit",
        "D": "Content overflows and is visible outside the container boundaries"
      },
      "correct": "D",
      "explanation": "overflow: visible (the default) allows content to overflow and remain visible outside the container's boundaries. The content isn't clipped and will render over adjacent elements if necessary. This is useful when you intentionally want content to extend beyond its container.",
      "topic": "Overflow Visible"
    },
    {
      "id": 11,
      "question": "What appears when you use <pre>text-overflow: ellipsis;</pre>?",
      "options": {
        "A": "Three dots (...) indicating truncated text",
        "B": "A scrollbar",
        "C": "The word 'ellipsis'",
        "D": "Nothing visible"
      },
      "correct": "A",
      "explanation": "text-overflow: ellipsis displays three dots (...) at the end of truncated text to indicate that content has been clipped. This provides a visual cue to users that there's more text than what's visible. The exact character used is the Unicode ellipsis character (…).",
      "topic": "Text Overflow Ellipsis"
    },
    {
      "id": 12,
      "question": "Does <pre>overflow: hidden;</pre> completely remove the overflowing content?",
      "options": {
        "A": "Yes, it deletes the content",
        "B": "It depends on the browser",
        "C": "Yes, but only for images",
        "D": "No, it only hides it visually; the content still exists in the DOM"
      },
      "correct": "D",
      "explanation": "overflow: hidden only visually hides the overflow; the content still exists in the DOM and can be accessed via JavaScript, screen readers, or the browser's inspector. It's purely a visual clipping effect, not content removal. The hidden content is still part of the document structure.",
      "topic": "Overflow Hidden"
    },
    {
      "id": 13,
      "question": "What is a common use case for <pre>overflow: hidden;</pre>?",
      "options": {
        "A": "Creating scrollable areas",
        "B": "Making elements invisible",
        "C": "Clearing floats or containing floated children",
        "D": "Adding margins"
      },
      "correct": "C",
      "explanation": "A common use case for overflow: hidden is creating a new Block Formatting Context (BFC) to contain floated children. This prevents floats from collapsing their parent container. It's also used to clip unwanted overflow and create clipping masks for images or content.",
      "topic": "Overflow Hidden"
    },
    {
      "id": 14,
      "question": "Can <pre>text-overflow: ellipsis;</pre> work on multi-line text?",
      "options": {
        "A": "Yes, it works on any text",
        "B": "No, it only works with single-line text (white-space: nowrap)",
        "C": "Only in CSS Grid",
        "D": "Only with specific fonts"
      },
      "correct": "B",
      "explanation": "The standard text-overflow: ellipsis only works with single-line text when combined with white-space: nowrap. For multi-line ellipsis, you need additional techniques like line-clamp or -webkit-line-clamp (vendor-prefixed property), which has limited browser support historically.",
      "topic": "Text Overflow Ellipsis"
    },
    {
      "id": 15,
      "question": "What does [CODE]overflow-y: scroll;[/CODE] do to horizontal overflow?",
      "options": {
        "A": "Hides horizontal overflow",
        "B": "Adds horizontal scrollbar",
        "C": "Doesn't affect horizontal overflow (horizontal overflow remains visible by default)",
        "D": "Prevents horizontal overflow"
      },
      "correct": "C",
      "explanation": "overflow-y only controls vertical overflow. It doesn't affect horizontal overflow, which remains at its default (visible) unless you explicitly set overflow-x. To control both axes independently, use overflow-x and overflow-y separately.",
      "topic": "Overflow-x and Overflow-y"
    },
    {
      "id": 16,
      "question": "What three properties are needed for text truncation with ellipsis?",
      "options": {
        "A": "width, overflow: hidden, text-overflow: ellipsis",
        "B": "overflow: hidden, white-space: nowrap, text-overflow: ellipsis",
        "C": "display: block, overflow: hidden, text-overflow: ellipsis",
        "D": "All of the above plus a width constraint"
      },
      "correct": "D",
      "explanation": "For text-overflow: ellipsis to work, you need: (1) a width constraint (width, max-width, or flex constraint), (2) overflow: hidden to clip, (3) white-space: nowrap to prevent wrapping, and (4) text-overflow: ellipsis for the dots. All four are required for proper truncation.",
      "topic": "Text Overflow Ellipsis"
    },
    {
      "id": 17,
      "question": "Does <pre>overflow: scroll;</pre> always show both scrollbars?",
      "options": {
        "A": "Yes, both horizontal and vertical scrollbars",
        "B": "No, only the scrollbar for the direction that overflows",
        "C": "Only vertical scrollbar",
        "D": "It depends on the content"
      },
      "correct": "A",
      "explanation": "overflow: scroll typically shows both horizontal and vertical scrollbars, even if content doesn't overflow in one or both directions. To control each axis separately, use overflow-x: scroll or overflow-y: scroll instead, which only affects that specific axis.",
      "topic": "Overflow Scroll"
    },
    {
      "id": 18,
      "question": "What is <pre>overflow: clip;</pre>?",
      "options": {
        "A": "Same as overflow: hidden",
        "B": "Like overflow: hidden but prevents all scrolling including programmatic scrolling",
        "C": "Not a valid value",
        "D": "Only clips images"
      },
      "correct": "B",
      "explanation": "overflow: clip is similar to hidden but stricter—it clips content and prevents all scrolling, including programmatic scrolling via JavaScript (scrollTo, etc.). With overflow: hidden, you can still scroll programmatically. 'clip' provides harder clipping boundaries.",
      "topic": "Clipping Content"
    },
    {
      "id": 19,
      "question": "What happens if you set [CODE]overflow-x: hidden; overflow-y: visible;[/CODE]?",
      "options": {
        "A": "Works exactly as specified",
        "B": "The browser computes overflow-y to auto instead of visible",
        "C": "Both become hidden",
        "D": "Creates an error"
      },
      "correct": "B",
      "explanation": "You cannot have one axis as 'visible' and the other as 'hidden' (or scroll/auto). If you try, the browser will compute 'visible' to 'auto' instead. This is because 'visible' on one axis would conflict with clipping on the other axis, creating an impossible layout situation.",
      "topic": "Overflow-x and Overflow-y"
    },
    {
      "id": 20,
      "question": "What does <pre>white-space: nowrap;</pre> do without <pre>overflow: hidden;</pre>?",
      "options": {
        "A": "Text truncates automatically",
        "B": "Text becomes invisible",
        "C": "Text wraps normally",
        "D": "Text stays on one line and may overflow the container visibly"
      },
      "correct": "D",
      "explanation": "white-space: nowrap alone prevents text from wrapping to a new line, but without overflow: hidden, the text will visibly overflow the container (default overflow: visible behavior). To clip or truncate the overflow, you need to add overflow: hidden or text-overflow: ellipsis.",
      "topic": "White-space Nowrap"
    },
    {
      "id": 21,
      "question": "Which overflow value is best for a scrollable container where scrollbars should only appear when needed?",
      "options": {
        "A": "visible",
        "B": "auto",
        "C": "scroll",
        "D": "hidden"
      },
      "correct": "B",
      "explanation": "overflow: auto is best for scrollable containers where you want scrollbars to appear only when content actually overflows. This provides a clean UI when content fits while still allowing scrolling when necessary. It's the most commonly used value for scrollable areas.",
      "topic": "Overflow Auto"
    },
    {
      "id": 22,
      "question": "Can you apply <pre>text-overflow: ellipsis;</pre> to a <pre><div></pre> with paragraph children?",
      "options": {
        "A": "No, text-overflow only applies to the text content of the element itself, not descendants",
        "B": "Yes, it works on any container",
        "C": "Only if the div has display: inline",
        "D": "Only with flexbox"
      },
      "correct": "A",
      "explanation": "text-overflow only applies to the inline content (text nodes) of the element itself, not to child block elements. If you want to truncate text in child paragraphs, you need to apply text-overflow to each paragraph individually, along with the required overflow and white-space properties.",
      "topic": "Text Overflow Ellipsis"
    },
    {
      "id": 23,
      "question": "What does <pre>scroll-behavior: smooth;</pre> do?",
      "options": {
        "A": "Makes overflow scrolling animated instead of instant",
        "B": "Changes the scrollbar appearance",
        "C": "Prevents scrolling",
        "D": "Hides scrollbars"
      },
      "correct": "A",
      "explanation": "scroll-behavior: smooth makes scrolling animate smoothly instead of jumping instantly when using anchor links or JavaScript scrollTo methods. This applies to the element's scrolling behavior. The default is 'auto' (instant scroll). This enhances user experience with smooth transitions.",
      "topic": "Scroll Behavior"
    },
    {
      "id": 24,
      "question": "Does <pre>overflow: hidden;</pre> prevent JavaScript from scrolling the element?",
      "options": {
        "A": "Yes, all scrolling is disabled",
        "B": "Only prevents horizontal scrolling",
        "C": "Only prevents vertical scrolling",
        "D": "No, you can still scroll programmatically with JavaScript"
      },
      "correct": "D",
      "explanation": "overflow: hidden hides scrollbars and prevents user scrolling via mouse/touch, but JavaScript can still scroll the element programmatically using methods like scrollTo() or scrollIntoView(). To prevent all scrolling including programmatic, use overflow: clip instead.",
      "topic": "Overflow Hidden"
    },
    {
      "id": 25,
      "question": "What is the difference between <pre>overflow: hidden;</pre> and <pre>visibility: hidden;</pre>?",
      "options": {
        "A": "They do the same thing",
        "B": "No difference in modern browsers",
        "C": "overflow: hidden hides the element; visibility: hidden clips content",
        "D": "overflow: hidden clips overflow content; visibility: hidden hides the entire element but reserves its space"
      },
      "correct": "D",
      "explanation": "overflow: hidden only clips content that exceeds the container boundaries—the container itself remains visible. visibility: hidden hides the entire element (including all content) but still reserves its space in the layout. They serve different purposes.",
      "topic": "Overflow Hidden"
    },
    {
      "id": 26,
      "question": "Can you use <pre>overflow-x: auto;</pre> to create horizontal scrolling for wide content?",
      "options": {
        "A": "No, overflow-x only hides content",
        "B": "Only with overflow-y: hidden",
        "C": "Yes, it adds a horizontal scrollbar when content is wider than the container",
        "D": "Only for images"
      },
      "correct": "C",
      "explanation": "Yes, overflow-x: auto adds a horizontal scrollbar when content is wider than the container. This is commonly used for wide tables, code blocks, or horizontally scrolling galleries. It only affects the horizontal axis, leaving vertical overflow at its default (visible) unless specified.",
      "topic": "Overflow-x and Overflow-y"
    },
    {
      "id": 27,
      "question": "What does [CODE]overflow: auto;[/CODE] do differently from [CODE]overflow: scroll;[/CODE] on mobile devices?",
      "options": {
        "A": "No difference on mobile",
        "B": "auto doesn't work on mobile",
        "C": "auto hides scrollbars until user scrolls; scroll may show scrollbar tracks",
        "D": "scroll is faster"
      },
      "correct": "C",
      "explanation": "On mobile devices, overflow: auto typically hides scrollbars completely until the user starts scrolling, providing a cleaner interface. overflow: scroll may show scrollbar tracks or indicators even when not scrolling. However, exact behavior varies by mobile browser and OS.",
      "topic": "Overflow Auto"
    },
    {
      "id": 28,
      "question": "What is required to truncate a <pre><span></pre> element's text with ellipsis?",
      "options": {
        "A": "The span must be display: block or inline-block, plus overflow, white-space, and text-overflow",
        "B": "Nothing special, spans work automatically",
        "C": "Spans cannot be truncated",
        "D": "Only the text-overflow property"
      },
      "correct": "A",
      "explanation": "For text-overflow to work on inline elements like <span>, you must change them to display: block or display: inline-block (or other block-level display types). Then apply the standard truncation properties: width constraint, overflow: hidden, white-space: nowrap, and text-overflow: ellipsis.",
      "topic": "Text Overflow Ellipsis"
    },
    {
      "id": 29,
      "question": "What does [CODE]overflow: hidden;[/CODE] do to positioned children with negative offsets?",
      "options": {
        "A": "Clips them if they extend outside the container",
        "B": "Has no effect on positioned children",
        "C": "Moves them back inside",
        "D": "Deletes them"
      },
      "correct": "A",
      "explanation": "overflow: hidden clips all content that extends outside the container boundaries, including absolutely positioned children with negative offsets (like top: -10px). Any portion of the child that falls outside the parent's content area will be clipped and hidden.",
      "topic": "Clipping Content"
    },
    {
      "id": 30,
      "question": "Why might you use [CODE]overflow-y: auto; overflow-x: hidden;[/CODE] on a container?",
      "options": {
        "A": "To make content wrap",
        "B": "To allow horizontal scrolling only",
        "C": "To hide all content",
        "D": "To allow vertical scrolling while preventing horizontal overflow"
      },
      "correct": "D",
      "explanation": "This combination allows vertical scrolling when content is tall (via auto) while clipping any horizontal overflow (via hidden). It's useful for containers where you want vertical scrollability but need to ensure content doesn't extend horizontally beyond the container width, like narrow columns or mobile layouts.",
      "topic": "Overflow-x and Overflow-y"
    }
  ]
}
