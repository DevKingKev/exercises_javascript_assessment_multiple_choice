module.exports = {
  metadata: {
    title: "CSS Medium - Overflow and Scrolling",
    description: "Intermediate assessment covering CSS overflow and scrolling: overflow-x and overflow-y independent control, scroll snapping with scroll-snap-type, scroll-snap-align for snap points, overscroll-behavior (auto, contain, none), custom scrollbars with ::-webkit-scrollbar, scroll-behavior: smooth for smooth scrolling, sticky headers with overflow, and scrollable containers vs page scrolling.",
    difficulty: "medium",
    domain: "css",
    timeLimit: 45,
    questionCount: 25,
    assessmentId: 13,
    assessmentUniqueId: 1763092800000,
    testType: "multiple-choice",
    topics: [
      "CSS Overflow",
      "Scrolling",
      "overflow-x",
      "overflow-y",
      "Scroll Snapping",
      "scroll-snap-type",
      "scroll-snap-align",
      "overscroll-behavior",
      "Custom Scrollbars",
      "::-webkit-scrollbar",
      "scroll-behavior",
      "Smooth Scrolling",
      "Sticky Headers",
      "Scrollable Containers"
    ],
    topicLinks: [
      { "topicName": "CSS Overflow", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow" },
      { "topicName": "overflow-x", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x" },
      { "topicName": "overflow-y", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y" },
      { "topicName": "Scroll Snapping", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap" },
      { "topicName": "scroll-snap-type", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type" },
      { "topicName": "scroll-snap-align", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align" },
      { "topicName": "overscroll-behavior", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior" },
      { "topicName": "scroll-behavior", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior" },
      { "topicName": "::-webkit-scrollbar", "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar" }
    ],
    keywords: [
      "overflow",
      "overflow-x",
      "overflow-y",
      "scroll",
      "scrollbar",
      "scroll-snap-type",
      "scroll-snap-align",
      "overscroll-behavior",
      "scroll-behavior",
      "smooth",
      "webkit-scrollbar",
      "hidden",
      "auto",
      "clip",
      "visible"
    ]
  },
  questions: [
    {
      id: 1,
      question: "What's the difference between <pre>overflow: hidden</pre> and <pre>overflow: clip</pre>?",
      options: {
        A: "No difference",
        B: "<pre>hidden</pre> allows programmatic scrolling; <pre>clip</pre> prevents all scrolling including programmatic",
        C: "<pre>clip</pre> is deprecated",
        D: "<pre>clip</pre> only works on images"
      },
      correct: "B",
      explanation: "<pre>overflow: hidden</pre> hides overflow but still allows JavaScript scrolling (scrollTo, scrollIntoView). <pre>overflow: clip</pre> prevents all scrolling and creates a strict clipping boundary. Use <pre>clip</pre> when you never want scrolling, even programmatically.",
      topic: "CSS Overflow"
    },
    {
      id: 2,
      question: "Can you set different overflow values for horizontal and vertical independently?",
      options: {
        A: "No, overflow affects both directions equally",
        B: "Yes, using <pre>overflow-x</pre> and <pre>overflow-y</pre>",
        C: "Only with JavaScript",
        D: "Only in flexbox"
      },
      correct: "B",
      explanation: "Use <pre>overflow-x</pre> and <pre>overflow-y</pre> for independent control. For example: <pre>overflow-x: auto; overflow-y: hidden;</pre> creates horizontal scrolling while preventing vertical scrolling. This is useful for horizontal scrollers.",
      topic: "overflow-x"
    },
    {
      id: 3,
      question: "What does <pre>scroll-snap-type: x mandatory;</pre> do?",
      options: {
        A: "Disables horizontal scrolling",
        B: "Forces scroll to snap to defined snap points on the x-axis after scrolling",
        C: "Makes scrolling mandatory",
        D: "Creates automatic scrolling"
      },
      correct: "B",
      explanation: "<pre>scroll-snap-type: x mandatory;</pre> on a scroll container makes it snap to child elements' snap points along the x-axis. <pre>mandatory</pre> means it must snap (can't rest between points), while <pre>proximity</pre> only snaps when close to a point.",
      topic: "scroll-snap-type"
    },
    {
      id: 4,
      question: "What's the difference between <pre>scroll-snap-type: x mandatory</pre> and <pre>scroll-snap-type: x proximity</pre>?",
      options: {
        A: "No difference",
        B: "<pre>mandatory</pre> always snaps; <pre>proximity</pre> only snaps if scroll position is close to a snap point",
        C: "<pre>proximity</pre> is faster",
        D: "<pre>mandatory</pre> doesn't work on mobile"
      },
      correct: "B",
      explanation: "<pre>mandatory</pre> forces the scroll position to always rest on a snap point, even if scrolling a small amount. <pre>proximity</pre> only snaps when the scroll position is near a snap point, allowing resting between points.",
      topic: "scroll-snap-type"
    },
    {
      id: 5,
      question: "What does <pre>scroll-snap-align: center;</pre> do on a child element?",
      options: {
        A: "Centers the element on the page",
        B: "Defines that this element should snap when its center aligns with the scroll container's center",
        C: "Centers text inside the element",
        D: "Only works with text"
      },
      correct: "B",
      explanation: "<pre>scroll-snap-align</pre> is applied to scroll children to define their snap position. <pre>center</pre> snaps when the child's center aligns with the container's center. Other values: <pre>start</pre> (align starts), <pre>end</pre> (align ends).",
      topic: "scroll-snap-align"
    },
    {
      id: 6,
      question: "Where do you apply <pre>scroll-snap-type</pre>?",
      options: {
        A: "On individual child elements",
        B: "On the scroll container (parent with overflow)",
        C: "On the body element only",
        D: "On anchor links"
      },
      correct: "B",
      explanation: "<pre>scroll-snap-type</pre> is applied to the scroll container (the element with <pre>overflow: auto/scroll</pre>). Children then use <pre>scroll-snap-align</pre> to define their snap behavior. Example: <pre>.container { overflow-x: auto; scroll-snap-type: x mandatory; }</pre>",
      topic: "scroll-snap-type"
    },
    {
      id: 7,
      question: "What does <pre>overscroll-behavior: contain;</pre> do?",
      options: {
        A: "Prevents scroll chaining to parent containers",
        B: "Contains the element size",
        C: "Hides overflow",
        D: "Creates a container query"
      },
      correct: "A",
      explanation: "<pre>overscroll-behavior: contain;</pre> prevents scroll chaining. When a scrollable element reaches its scroll limit, it won't trigger scrolling in parent containers or the page. This stops the common issue of scrolling a modal and then scrolling the page behind it.",
      topic: "overscroll-behavior"
    },
    {
      id: 8,
      question: "What's the difference between <pre>overscroll-behavior: contain</pre> and <pre>overscroll-behavior: none</pre>?",
      options: {
        A: "No difference",
        B: "<pre>contain</pre> prevents scroll chaining but allows bounce effects; <pre>none</pre> prevents both scroll chaining and bounce effects",
        C: "<pre>none</pre> is deprecated",
        D: "<pre>contain</pre> only works on mobile"
      },
      correct: "B",
      explanation: "<pre>contain</pre> prevents scroll chaining but preserves bounce/overscroll effects (like elastic bounce on iOS). <pre>none</pre> prevents both scroll chaining and bounce effects. <pre>auto</pre> is the default (allows both).",
      topic: "overscroll-behavior"
    },
    {
      id: 9,
      question: "How do you style custom scrollbars in WebKit browsers?",
      options: {
        A: "<pre>scrollbar { background: blue; }</pre>",
        B: "Using <pre>::-webkit-scrollbar</pre> and related pseudo-elements",
        C: "Using <pre>scrollbar-color</pre> only",
        D: "It's not possible"
      },
      correct: "B",
      explanation: "WebKit browsers (Chrome, Safari, Edge) support <pre>::-webkit-scrollbar</pre>, <pre>::-webkit-scrollbar-thumb</pre>, <pre>::-webkit-scrollbar-track</pre>, etc. Example: <pre>::-webkit-scrollbar { width: 10px; } ::-webkit-scrollbar-thumb { background: blue; }</pre>. Note: this is non-standard.",
      topic: "::-webkit-scrollbar"
    },
    {
      id: 10,
      question: "What does <pre>scroll-behavior: smooth;</pre> do?",
      options: {
        A: "Makes scrolling faster",
        B: "Enables smooth animated scrolling instead of instant jumps when scrolling programmatically or clicking anchors",
        C: "Smooths page transitions",
        D: "Reduces frame rate"
      },
      correct: "B",
      explanation: "<pre>scroll-behavior: smooth;</pre> makes scrolling animate smoothly when triggered by anchor links, JavaScript scrollTo, or keyboard navigation. Applied to <pre>html</pre> or scroll containers. Useful for better UX, but respect <pre>prefers-reduced-motion</pre>.",
      topic: "scroll-behavior"
    },
    {
      id: 11,
      question: "Where should you apply <pre>scroll-behavior: smooth</pre> for smooth anchor link navigation?",
      options: {
        A: "On anchor links",
        B: "On the root element (<pre>html</pre>) or scroll container",
        C: "On the target element",
        D: "On the body element only"
      },
      correct: "B",
      explanation: "Apply <pre>scroll-behavior: smooth;</pre> to the element that scrolls (typically <pre>html</pre> for page scrolling). Then all scrolling within that container (including anchor links) will be smooth: <pre>html { scroll-behavior: smooth; }</pre>",
      topic: "scroll-behavior"
    },
    {
      id: 12,
      question: "Can a sticky positioned element work inside a scrollable container with <pre>overflow: auto</pre>?",
      options: {
        A: "No, sticky only works with page scroll",
        B: "Yes, sticky elements stick within their scroll container",
        C: "Only with JavaScript",
        D: "Only on mobile"
      },
      correct: "B",
      explanation: "Sticky positioning works within any scroll container. The sticky element sticks relative to its nearest scrolling ancestor. Common use: sticky headers in modals or scrollable divs. Remember: the container needs overflow and the sticky element needs a threshold offset.",
      topic: "Sticky Headers"
    },
    {
      id: 13,
      question: "What's a common reason sticky headers don't work in scrollable containers?",
      options: {
        A: "Browser doesn't support it",
        B: "Parent has <pre>overflow: hidden</pre> or the sticky element's container doesn't have enough height",
        C: "Sticky headers only work on pages",
        D: "Need JavaScript"
      },
      correct: "B",
      explanation: "Sticky fails in scrollable containers when: 1) an ancestor has <pre>overflow: hidden</pre> (clips the sticky element), 2) the container isn't tall enough for sticky to activate, or 3) no threshold offset is specified. The scroll container must allow the sticky element to move.",
      topic: "Sticky Headers"
    },
    {
      id: 14,
      question: "What does <pre>overflow: auto</pre> do differently than <pre>overflow: scroll</pre>?",
      options: {
        A: "No difference",
        B: "<pre>auto</pre> only shows scrollbars when needed; <pre>scroll</pre> always shows scrollbars (even if empty)",
        C: "<pre>scroll</pre> is faster",
        D: "<pre>auto</pre> doesn't work on mobile"
      },
      correct: "B",
      explanation: "<pre>overflow: auto</pre> shows scrollbars only when content overflows. <pre>overflow: scroll</pre> always reserves space for scrollbars, even when content fits. <pre>auto</pre> is generally preferred for better UX, avoiding empty scrollbar tracks.",
      topic: "CSS Overflow"
    },
    {
      id: 15,
      question: "How do you create a horizontal scrolling container?",
      options: {
        A: "<pre>overflow: horizontal;</pre>",
        B: "<pre>overflow-x: auto;</pre> (or scroll) with child elements that exceed container width",
        C: "<pre>scroll-direction: horizontal;</pre>",
        D: "It's automatic"
      },
      correct: "B",
      explanation: "Create horizontal scrolling with <pre>overflow-x: auto;</pre> on the container and ensure children are wide enough to overflow (often using <pre>white-space: nowrap;</pre> or flexbox with <pre>flex-wrap: nowrap;</pre>). <pre>overflow-y: hidden;</pre> prevents vertical scrolling.",
      topic: "overflow-x"
    },
    {
      id: 16,
      question: "What's the standard CSS property for scrollbar color (non-WebKit)?",
      options: {
        A: "<pre>scrollbar-color</pre> with two color values (thumb and track)",
        B: "<pre>scroll-color</pre>",
        C: "<pre>bar-color</pre>",
        D: "No standard property exists"
      },
      correct: "A",
      explanation: "<pre>scrollbar-color</pre> is the standard (Firefox supports it). Syntax: <pre>scrollbar-color: thumb-color track-color;</pre> or <pre>auto/dark/light</pre>. Example: <pre>scrollbar-color: blue lightgray;</pre>. For WebKit, use <pre>::-webkit-scrollbar-*</pre> pseudo-elements.",
      topic: "Custom Scrollbars"
    },
    {
      id: 17,
      question: "How do you hide scrollbars while keeping scrolling functional?",
      options: {
        A: "<pre>overflow: hidden;</pre>",
        B: "<pre>scrollbar-width: none;</pre> and <pre>::-webkit-scrollbar { display: none; }</pre>",
        C: "<pre>scroll-display: none;</pre>",
        D: "It's impossible"
      },
      correct: "B",
      explanation: "Hide scrollbars with <pre>scrollbar-width: none;</pre> (Firefox) and <pre>::-webkit-scrollbar { display: none; }</pre> (WebKit). The element remains scrollable via touch, wheel, or keyboard. Useful for custom scroll UIs, but consider accessibility.",
      topic: "Custom Scrollbars"
    },
    {
      id: 18,
      question: "What does <pre>scroll-snap-stop: always;</pre> do on a snap child?",
      options: {
        A: "Stops all scrolling",
        B: "Forces scroll to stop at this element rather than skipping it when scrolling past multiple snap points",
        C: "Prevents the element from snapping",
        D: "Stops smooth scrolling"
      },
      correct: "B",
      explanation: "<pre>scroll-snap-stop: always;</pre> forces the scroll to stop at this snap point. Without it (default: <pre>normal</pre>), fast scrolling can skip past snap points. Useful for ensuring users see important content like onboarding slides.",
      topic: "scroll-snap-align"
    },
    {
      id: 19,
      question: "Can you combine <pre>scroll-snap-type</pre> with smooth scrolling?",
      options: {
        A: "No, they conflict",
        B: "Yes, they work together to create smooth animated snapping",
        C: "Only with JavaScript",
        D: "Only on touch devices"
      },
      correct: "B",
      explanation: "Scroll snapping and <pre>scroll-behavior: smooth</pre> work together beautifully. The scroll smoothly animates to snap points. Example: <pre>.container { scroll-snap-type: x mandatory; scroll-behavior: smooth; }</pre> creates smooth snap scrolling.",
      topic: "Scroll Snapping"
    },
    {
      id: 20,
      question: "What is scroll chaining?",
      options: {
        A: "Linking scroll events",
        B: "When scrolling an inner container reaches its limit and continues scrolling the outer container/page",
        C: "A JavaScript library",
        D: "Connecting scrollbars"
      },
      correct: "B",
      explanation: "Scroll chaining is when scrolling a nested scrollable element (like a modal) reaches the end and then starts scrolling the parent/page. Use <pre>overscroll-behavior: contain;</pre> to prevent this, keeping scroll contained to the active element.",
      topic: "overscroll-behavior"
    },
    {
      id: 21,
      question: "How do you make an element scrollable in both directions?",
      options: {
        A: "<pre>overflow: both;</pre>",
        B: "<pre>overflow: auto;</pre> or <pre>overflow: scroll;</pre> (applies to both axes by default)",
        C: "<pre>overflow-x: auto; overflow-y: auto;</pre> only",
        D: "Use two containers"
      },
      correct: "B",
      explanation: "The <pre>overflow</pre> shorthand applies to both axes: <pre>overflow: auto;</pre> enables scrolling in any direction where content overflows. You can also explicitly set both: <pre>overflow-x: auto; overflow-y: auto;</pre> (equivalent).",
      topic: "CSS Overflow"
    },
    {
      id: 22,
      question: "What's a use case for <pre>overflow: visible</pre> (the default)?",
      options: {
        A: "Making content scrollable",
        B: "Allowing content to overflow and be visible outside the element's box (e.g., tooltips, dropdowns)",
        C: "Hiding overflow",
        D: "Creating scroll containers"
      },
      correct: "B",
      explanation: "<pre>overflow: visible</pre> (default) allows content to extend beyond the element's box without clipping or scrolling. Useful for absolutely positioned tooltips, dropdown menus, or shadows that should extend beyond their container.",
      topic: "CSS Overflow"
    },
    {
      id: 23,
      question: "What happens when you set <pre>overflow-x: hidden</pre> and <pre>overflow-y: visible</pre>?",
      options: {
        A: "Works as specified",
        B: "The computed value of <pre>overflow-y</pre> becomes <pre>auto</pre> (you can't have one hidden and one visible)",
        C: "Browser error",
        D: "Both become hidden"
      },
      correct: "B",
      explanation: "You cannot have one axis as <pre>visible</pre> and the other as <pre>hidden/scroll/auto</pre>. The browser will compute the <pre>visible</pre> axis as <pre>auto</pre>. This is a common gotcha: trying <pre>overflow-x: hidden; overflow-y: visible;</pre> won't work as expected.",
      topic: "overflow-y"
    },
    {
      id: 24,
      question: "How do you create a gallery with snap scrolling that centers items?",
      options: {
        A: "Use JavaScript only",
        B: "Container: <pre>scroll-snap-type: x mandatory; overflow-x: auto;</pre> Children: <pre>scroll-snap-align: center;</pre>",
        C: "Use <pre>text-align: center;</pre>",
        D: "It's not possible"
      },
      correct: "B",
      explanation: "Apply <pre>scroll-snap-type: x mandatory;</pre> and <pre>overflow-x: auto;</pre> to the container. On each child/item, apply <pre>scroll-snap-align: center;</pre>. Each item will snap to the container's center when scrolled. Add <pre>scroll-behavior: smooth;</pre> for smooth snapping.",
      topic: "Scroll Snapping"
    },
    {
      id: 25,
      question: "Should you use <pre>scroll-behavior: smooth</pre> without considering accessibility?",
      options: {
        A: "Yes, it's always better",
        B: "No, respect <pre>prefers-reduced-motion</pre> to disable smooth scrolling for users who need reduced motion",
        C: "Smooth scrolling has no accessibility concerns",
        D: "Only use with JavaScript"
      },
      correct: "B",
      explanation: "Always respect accessibility preferences. Use: <pre>@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }</pre> This disables smooth scrolling for users with motion sensitivity (vestibular disorders), who may experience discomfort from animations.",
      topic: "scroll-behavior"
    }
  ]
};
