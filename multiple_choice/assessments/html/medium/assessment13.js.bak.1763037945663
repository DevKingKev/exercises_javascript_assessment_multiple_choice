module.exports = {
    metadata: {
        title: "Advanced Accessibility with ARIA",
        description: "Comprehensive coverage of ARIA roles, states, and properties including dynamic content management, focus handling, and creating accessible interactive components for screen readers and assistive technologies.",
        difficulty: "medium",
        domain: "html",
        timeLimit: 45,
        questionCount: 25,
        topics: [
            "ARIA Roles",
            "ARIA States and Properties",
            "ARIA Live Regions",
            "aria-expanded and aria-selected",
            "aria-checked and Form States",
            "aria-controls and aria-owns",
            "Focus Management with tabindex",
            "Skip Navigation Links"
        ],
        topicLinks: [
            { topicName: "ARIA Roles", refLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles" },
            { topicName: "ARIA States and Properties", refLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes" },
            { topicName: "ARIA Live Regions", refLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" },
            { topicName: "aria-expanded and aria-selected", refLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded" },
            { topicName: "aria-checked and Form States", refLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked" },
            { topicName: "aria-controls and aria-owns", refLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls" },
            { topicName: "Focus Management with tabindex", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" },
            { topicName: "Skip Navigation Links", refLink: "https://webaim.org/techniques/skipnav/" }
        ],
        assessmentId: 13,
        assessmentUniqueId: 1763032208408,
        testType: "multiple-choice"
    },

    questions: [
        {
            id: 1,
            question: "What is the primary purpose of ARIA (Accessible Rich Internet Applications) in web development?",
            options: {
                A: "To replace semantic HTML elements with more flexible alternatives",
                B: "To enhance accessibility of dynamic content and custom widgets for assistive technologies when semantic HTML is insufficient",
                C: "To provide animations and transitions for users with disabilities",
                D: "To automatically fix accessibility issues in existing code"
            },
            correct: "B",
            explanation: "ARIA provides a way to make web content and applications more accessible when native semantic HTML is insufficient, particularly for dynamic content and custom interactive widgets. It adds semantic information through roles, states, and properties that assistive technologies like screen readers can interpret. ARIA doesn't replace semantic HTML—in fact, the first rule of ARIA is to use native HTML elements when possible. It doesn't provide visual effects or animations, nor does it automatically fix accessibility issues. ARIA is declarative markup that developers must implement correctly. It's most valuable for complex components like tree views, tab panels, modal dialogs, and dynamic content updates that don't have native HTML equivalents.",
            topics: ["ARIA Roles", "ARIA States and Properties"]
        },

        {
            id: 2,
            question: "What does the <pre>role=\"button\"</pre> attribute do when applied to a <pre><div></pre> element?",
            options: {
                A: "It automatically makes the div clickable and keyboard accessible",
                B: "It announces the element as a button to screen readers, but you must still add keyboard event handlers and focus management",
                C: "It changes the visual appearance to look like a button",
                D: "It's unnecessary because divs can already function as buttons"
            },
            correct: "B",
            explanation: "Adding <pre>role=\"button\"</pre> to a <pre><div></pre> tells assistive technologies to treat it as a button semantically, so screen readers will announce it as \"button\". However, the role alone doesn't add any functionality—you must still implement keyboard support (Enter/Space key activation), ensure it's focusable (add <pre>tabindex=\"0\"</pre>), add click handlers, and manage focus appropriately. The role doesn't affect visual styling; that's CSS's job. Importantly, you should use <pre><button></pre> instead of <pre><div role=\"button\"></pre> whenever possible, as native buttons come with all the keyboard and focus behavior built-in. ARIA roles provide semantics but not behavior, which is why \"no ARIA is better than bad ARIA\" and native HTML is preferred.",
            topics: ["ARIA Roles"]
        },

        {
            id: 3,
            question: "What is the difference between ARIA roles and ARIA properties?",
            options: {
                A: "Roles are permanent attributes, while properties can change during user interaction",
                B: "Roles define what an element is (its type/purpose), while properties and states describe characteristics and current conditions",
                C: "Roles are only for screen readers, while properties affect all users",
                D: "There is no difference; they are interchangeable terms"
            },
            correct: "B",
            explanation: "ARIA roles define what an element is—its fundamental type or purpose in the interface, such as <pre>role=\"navigation\"</pre>, <pre>role=\"dialog\"</pre>, or <pre>role=\"tabpanel\"</pre>. Roles typically don't change once set. ARIA properties and states describe characteristics, relationships, and current conditions of elements. States like <pre>aria-expanded=\"true\"</pre>, <pre>aria-checked=\"true\"</pre>, or <pre>aria-selected=\"false\"</pre> often change dynamically based on user interaction. Properties like <pre>aria-label=\"Close\"</pre> or <pre>aria-controls=\"panel1\"</pre> describe characteristics that may be more static. While some properties can change, the key distinction is conceptual: role answers \"what is it?\" while properties/states answer \"how is it configured?\" or \"what's its current condition?\"",
            topics: ["ARIA Roles", "ARIA States and Properties"]
        },

        {
            id: 4,
            question: "What does <pre>aria-live=\"polite\"</pre> do on a region?",
            options: {
                A: "It prevents screen readers from announcing any changes in that region",
                B: "It causes screen readers to announce changes after completing the current announcement",
                C: "It makes the region immediately interrupt the screen reader to announce changes",
                D: "It only announces changes when the user focuses on that region"
            },
            correct: "B",
            explanation: "An <pre>aria-live=\"polite\"</pre> region announces changes to screen reader users, but waits until the screen reader finishes its current announcement before speaking the update. This is appropriate for non-critical updates like status messages, notifications, or live search results where interrupting the user would be disruptive. In contrast, <pre>aria-live=\"assertive\"</pre> interrupts immediately (reserved for urgent alerts like errors), and <pre>aria-live=\"off\"</pre> (or no aria-live) doesn't announce changes at all. The region doesn't require focus for announcements—that's the power of live regions. They announce dynamic content changes automatically, making them essential for single-page applications, real-time updates, and async content loading. Always use \"polite\" unless the update is truly urgent.",
            topics: ["ARIA Live Regions"]
        },

        {
            id: 5,
            question: "When should you use <pre>aria-expanded</pre> and what values are valid?",
            options: {
                A: "On any collapsible element; valid values are \"yes\" and \"no\"",
                B: "On elements that control expandable regions; valid values are \"true\", \"false\", and optionally \"undefined\"",
                C: "Only on <pre><details></pre> elements; valid values are \"open\" and \"closed\"",
                D: "On navigation menus; it automatically toggles when clicked"
            },
            correct: "B",
            explanation: "Use <pre>aria-expanded</pre> on elements that control expandable/collapsible regions, such as accordion buttons, disclosure triangles, or menu buttons. Valid values are <pre>\"true\"</pre> (the controlled region is expanded), <pre>\"false\"</pre> (the region is collapsed), and <pre>\"undefined\"</pre> (not currently expandable). You must update this value with JavaScript when the state changes—it doesn't toggle automatically. For example: <pre><button aria-expanded=\"false\" aria-controls=\"menu1\">Menu</button></pre>, then set to <pre>\"true\"</pre> when the menu opens. While <pre><details></pre> has native expand/collapse, you wouldn't typically add aria-expanded as it's built-in. The attribute works on any element type that controls expansion, not just navigation menus. Screen readers announce the state, helping users understand whether clicking will expand or collapse content.",
            topics: ["aria-expanded and aria-selected", "ARIA States and Properties"]
        },

        {
            id: 6,
            question: "What is the purpose of <pre>aria-controls</pre> and how is it used?",
            options: {
                A: "It specifies which elements the current element has permission to modify",
                B: "It indicates the ID(s) of elements that the current element controls or operates on",
                C: "It defines parent-child relationships in the DOM tree",
                D: "It automatically creates event listeners between elements"
            },
            correct: "B",
            explanation: "The <pre>aria-controls</pre> attribute identifies the elements that the current element controls, using space-separated IDs. For example: <pre><button aria-expanded=\"false\" aria-controls=\"panel1\">Show Details</button><div id=\"panel1\" hidden>...</div></pre>. This creates a programmatic relationship that assistive technologies can communicate, helping users understand what will happen when they interact with the control. Common uses include tab controls (buttons that show/hide tab panels), accordion triggers, and expandable sections. The attribute doesn't create permissions, doesn't affect DOM relationships for JavaScript, and doesn't automatically set up event handlers—you still need to implement the actual functionality. It's purely semantic information for assistive technologies. Support varies across screen readers, so it's often used in conjunction with other ARIA attributes for robust accessibility.",
            topics: ["aria-controls and aria-owns", "ARIA States and Properties"]
        },

        {
            id: 7,
            question: "What does <pre>tabindex=\"0\"</pre> do compared to <pre>tabindex=\"-1\"</pre>?",
            options: {
                A: "Both make elements focusable, but tabindex=\"0\" includes the element in sequential keyboard navigation while tabindex=\"-1\" only allows programmatic focus",
                B: "tabindex=\"0\" disables focus, while tabindex=\"-1\" enables it",
                C: "tabindex=\"0\" is for primary elements, tabindex=\"-1\" is for secondary elements",
                D: "They are equivalent; the values are interchangeable"
            },
            correct: "A",
            explanation: "Both <pre>tabindex=\"0\"</pre> and <pre>tabindex=\"-1\"</pre> make non-focusable elements focusable, but with an important difference. Elements with <pre>tabindex=\"0\"</pre> are included in the natural tab order (you can tab to them with the keyboard in their DOM order). Elements with <pre>tabindex=\"-1\"</pre> are focusable only programmatically via JavaScript (<pre>element.focus()</pre>) but are skipped when tabbing through the page. Use <pre>tabindex=\"0\"</pre> for custom interactive elements like buttons or widgets made from <pre><div></pre>s. Use <pre>tabindex=\"-1\"</pre> for elements you want to focus programmatically (like headings for skip links or managing focus in modals) but shouldn't be in the tab order. Avoid positive tabindex values (1, 2, 3...) as they override natural order and create maintenance issues.",
            topics: ["Focus Management with tabindex"]
        },

        {
            id: 8,
            question: "What is the purpose of skip navigation links?",
            options: {
                A: "To allow users to skip advertisements and promotional content",
                B: "To provide keyboard users a way to bypass repetitive navigation and jump directly to main content",
                C: "To create shortcuts for navigating between pages",
                D: "To hide navigation menus on mobile devices"
            },
            correct: "B",
            explanation: "Skip navigation links (often \"Skip to main content\") allow keyboard and screen reader users to bypass repetitive navigation menus and jump directly to the page's main content. This is crucial for users who navigate by keyboard, as they would otherwise have to tab through dozens of navigation links on every page. A typical implementation: <pre><a href=\"#main-content\" class=\"skip-link\">Skip to main content</a></pre> at the very top of the page, with corresponding <pre><main id=\"main-content\"></pre>. The link is often visually hidden until focused, appearing when tabbed to. This is a WCAG requirement (Level A). Skip links aren't for ads, page-to-page navigation, or responsive design—they're specifically for improving keyboard navigation efficiency on each individual page by allowing users to skip over repeated content.",
            topics: ["Skip Navigation Links", "Focus Management with tabindex"]
        },

        {
            id: 9,
            question: "What does <pre>aria-live=\"assertive\"</pre> do and when should it be used?",
            options: {
                A: "It politely waits to announce changes until the user is idle",
                B: "It immediately interrupts screen reader announcements to convey important, time-sensitive information",
                C: "It makes the content bold and prominent for visual users",
                D: "It validates form inputs assertively before submission"
            },
            correct: "B",
            explanation: "An <pre>aria-live=\"assertive\"</pre> region causes screen readers to immediately interrupt whatever they're currently announcing to convey the new content. This is reserved for urgent, time-sensitive information like error messages, important alerts, or critical system notifications that users must know about immediately. For example, \"Your session will expire in 1 minute\" or \"Error: Your payment was declined\". Use assertive live regions sparingly—interrupting users is disruptive and should only happen when truly necessary. For most updates (status messages, loading indicators, non-critical notifications), use <pre>aria-live=\"polite\"</pre> instead. The attribute doesn't affect visual presentation; that's handled by CSS. It's purely about screen reader announcement behavior, making it essential for accessible dynamic content.",
            topics: ["ARIA Live Regions"]
        },

        {
            id: 10,
            question: "How do you properly implement <pre>aria-selected</pre> in a tab interface?",
            options: {
                A: "Add aria-selected=\"true\" to all tabs to make them selectable",
                B: "Add aria-selected=\"true\" to the currently selected tab and aria-selected=\"false\" to the others",
                C: "Only add aria-selected to the active tab; omit it from others",
                D: "aria-selected is automatically managed by the browser"
            },
            correct: "B",
            explanation: "In a tab interface, explicitly set <pre>aria-selected=\"true\"</pre> on the currently selected/active tab and <pre>aria-selected=\"false\"</pre> on all inactive tabs. This tells screen readers which tab is currently selected. For example: <pre><div role=\"tablist\"><button role=\"tab\" aria-selected=\"true\" aria-controls=\"panel1\">Tab 1</button><button role=\"tab\" aria-selected=\"false\" aria-controls=\"panel2\">Tab 2</button></div></pre>. When the user selects a different tab, update the aria-selected values accordingly. Explicitly marking all tabs (true/false) is clearer than omitting the attribute from unselected tabs, though both approaches work. The browser doesn't manage this automatically—you must update it via JavaScript when tabs change. Combine with appropriate roles (tablist, tab, tabpanel) and aria-controls for complete tab accessibility.",
            topics: ["aria-expanded and aria-selected", "ARIA Roles"]
        },

        {
            id: 11,
            question: "What does <pre>aria-checked</pre> do, and how does it differ from the native <pre>checked</pre> attribute?",
            options: {
                A: "They are identical; aria-checked is the ARIA version of checked",
                B: "aria-checked is for custom checkboxes/radio buttons built with non-form elements, while checked is for native inputs; aria-checked also supports \"mixed\" state",
                C: "aria-checked only works on <pre><input></pre> elements",
                D: "aria-checked provides better browser support than the checked attribute"
            },
            correct: "B",
            explanation: "The <pre>aria-checked</pre> attribute is used on custom checkboxes and radio buttons built from non-form elements (like <pre><div role=\"checkbox\"></pre>). Native <pre><input type=\"checkbox\"></pre> elements use the <pre>checked</pre> attribute/property instead. A key difference is that <pre>aria-checked</pre> supports three values: <pre>\"true\"</pre> (checked), <pre>\"false\"</pre> (unchecked), and <pre>\"mixed\"</pre> (partially checked, like a parent checkbox when some but not all children are checked). For example: <pre><div role=\"checkbox\" aria-checked=\"true\" tabindex=\"0\">Enable notifications</div></pre>. You must manage the state with JavaScript and implement keyboard support (Space to toggle). Native inputs should use the <pre>checked</pre> attribute, not aria-checked. The ARIA version doesn't improve browser support—it enables creating accessible custom controls when native elements aren't suitable.",
            topics: ["aria-checked and Form States", "ARIA States and Properties"]
        },

        {
            id: 12,
            question: "What is the purpose of <pre>aria-owns</pre> and when would you use it?",
            options: {
                A: "To indicate which user owns or created an element",
                B: "To define parent-child relationships between elements that aren't parent-child in the DOM",
                C: "To specify which elements have permission to modify the current element",
                D: "To claim ownership of third-party widgets or components"
            },
            correct: "B",
            explanation: "The <pre>aria-owns</pre> attribute creates semantic parent-child relationships between elements that aren't directly parent-child in the DOM structure. This is useful when visual layout or technical constraints require elements to be positioned separately in the HTML. For example, a menu button might be in the header while its dropdown menu is at the document root for z-index reasons: <pre><button aria-owns=\"menu-dropdown\" aria-expanded=\"false\">Menu</button><!-- ... --><ul id=\"menu-dropdown\" role=\"menu\">...</ul></pre>. Screen readers will treat the menu as a child of the button despite the DOM structure. Use aria-owns sparingly—it's better to structure HTML semantically when possible. It doesn't relate to user ownership, permissions, or third-party code attribution; it's purely about semantic relationships for assistive technologies.",
            topics: ["aria-controls and aria-owns", "ARIA States and Properties"]
        },

        {
            id: 13,
            question: "What is the difference between <pre>role=\"navigation\"</pre> and <pre>role=\"search\"</pre>?",
            options: {
                A: "navigation is for site menus, search is for search forms; both are landmark roles that help users navigate the page structure",
                B: "They are interchangeable; both indicate navigation functionality",
                C: "navigation requires links, search requires input fields",
                D: "navigation is deprecated in favor of the <pre><nav></pre> element, but search has no HTML equivalent"
            },
            correct: "A",
            explanation: "Both <pre>role=\"navigation\"</pre> and <pre>role=\"search\"</pre> are landmark roles that help users understand and navigate page structure. The <pre>navigation</pre> role identifies site navigation menus, breadcrumbs, table of contents, or other navigation link collections. The <pre>search</pre> role identifies search functionality/forms. Screen reader users can jump between landmarks to quickly navigate the page. For example: <pre><nav role=\"navigation\"><ul>...</ul></nav></pre> and <pre><div role=\"search\"><form>...</form></div></pre>. Note that <pre><nav></pre> has an implicit navigation role, but there's no native HTML element with implicit search role—you must add <pre>role=\"search\"</pre> explicitly. These roles don't enforce what content they contain; they're semantic labels. Multiple navigation and search regions can exist on one page, in which case use <pre>aria-label</pre> or <pre>aria-labelledby</pre> to distinguish them.",
            topics: ["ARIA Roles"]
        },

        {
            id: 14,
            question: "Why should you avoid using positive <pre>tabindex</pre> values (1, 2, 3, etc.)?",
            options: {
                A: "Positive values are deprecated and no longer supported",
                B: "They override the natural DOM order and create maintenance difficulties and unexpected tab behavior",
                C: "They only work in older browsers and break modern accessibility features",
                D: "Positive values make elements non-focusable"
            },
            correct: "B",
            explanation: "Positive <pre>tabindex</pre> values (1, 2, 3, etc.) force elements into a specific tab order, overriding the natural DOM order. Elements with positive tabindex are focused first (in numeric order), then elements with <pre>tabindex=\"0\"</pre> in DOM order, then naturally focusable elements. This creates several problems: the tab order no longer matches visual order (confusing users), it's hard to maintain (inserting a new element requires renumbering), and DOM changes can break the intended order. The values aren't deprecated or browser-specific—they work but are considered an anti-pattern. Instead, use <pre>tabindex=\"0\"</pre> for custom focusable elements and structure your HTML in the order you want users to tab through. If you need to change tab order, restructure your HTML rather than using positive tabindex values.",
            topics: ["Focus Management with tabindex"]
        },

        {
            id: 15,
            question: "What attributes should be used together to create an accessible accordion component?",
            options: {
                A: "role=\"accordion\", aria-expanded, aria-controls on the trigger elements",
                B: "role=\"button\", aria-expanded, aria-controls on the triggers; proper heading structure for the headers",
                C: "role=\"tab\", aria-selected, aria-controls on the headers",
                D: "role=\"disclosure\", aria-open, aria-hides on the panels"
            },
            correct: "B",
            explanation: "For an accessible accordion, use <pre>role=\"button\"</pre> (or native <pre><button></pre> elements, which have implicit button role) on the triggers, along with <pre>aria-expanded</pre> to indicate whether each section is open or closed, and <pre>aria-controls</pre> to link triggers to their panels. Wrap accordion headers in proper heading elements (<pre><h2></pre>, <pre><h3></pre>, etc.) for document structure. Example: <pre><h2><button aria-expanded=\"false\" aria-controls=\"panel1\">Section 1</button></h2><div id=\"panel1\" hidden>...</div></pre>. There's no standard \"accordion\" role in ARIA. Don't use tab/tablist roles for accordions—those are specifically for tab interfaces where selecting one tab deselects others and shows different content. The \"disclosure\" role and \"aria-open\"/\"aria-hides\" attributes don't exist in ARIA. Focus management, keyboard support (Enter/Space, optionally arrow keys), and toggling visibility are also essential.",
            topics: ["ARIA Roles", "aria-expanded and aria-selected", "aria-controls and aria-owns"]
        },

        {
            id: 16,
            question: "How do you announce dynamic content updates without using <pre>aria-live</pre> regions?",
            options: {
                A: "Use <pre>role=\"status\"</pre> or <pre>role=\"alert\"</pre>, which have implicit live region behavior",
                B: "Call <pre>alert()</pre> with the message",
                C: "You cannot; aria-live is the only way to announce dynamic content",
                D: "Set <pre>aria-announce=\"true\"</pre> on the updated element"
            },
            correct: "A",
            explanation: "The <pre>role=\"status\"</pre> and <pre>role=\"alert\"</pre> roles have implicit live region behavior. Elements with <pre>role=\"status\"</pre> behave like <pre>aria-live=\"polite\"</pre> (for status messages, non-critical updates), while <pre>role=\"alert\"</pre> behaves like <pre>aria-live=\"assertive\"</pre> (for important alerts that should interrupt). For example: <pre><div role=\"status\">3 items added to cart</div></pre> or <pre><div role=\"alert\">Error: Invalid email address</div></pre>. These roles are often clearer and more semantic than using aria-live directly. The JavaScript <pre>alert()</pre> function creates a modal dialog, which is disruptive and not appropriate for most updates. There's no <pre>aria-announce</pre> attribute. Other implicit live region roles include <pre>role=\"timer\"</pre> and <pre>role=\"log\"</pre>. Using semantic roles is generally preferred over generic divs with aria-live.",
            topics: ["ARIA Live Regions", "ARIA Roles"]
        },

        {
            id: 17,
            question: "What is the first rule of ARIA usage?",
            options: {
                A: "Always use ARIA roles on every element for maximum accessibility",
                B: "No ARIA is better than bad ARIA; use native HTML elements when possible instead of adding ARIA to generic elements",
                C: "ARIA is required for WCAG compliance",
                D: "Always use ARIA live regions for dynamic content"
            },
            correct: "B",
            explanation: "The first rule of ARIA is: \"If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.\" In other words, use <pre><button></pre> instead of <pre><div role=\"button\"></pre>, use <pre><nav></pre> instead of <pre><div role=\"navigation\"></pre>, etc. Native elements have built-in keyboard support, focus management, and semantic meaning. Badly implemented ARIA can make interfaces less accessible than no ARIA at all—hence \"no ARIA is better than bad ARIA\". ARIA isn't required for compliance if you use semantic HTML. It's a supplement for custom widgets and dynamic content where semantic HTML is insufficient. Always prefer native elements and only add ARIA when necessary.",
            topics: ["ARIA Roles", "ARIA States and Properties"]
        },

        {
            id: 18,
            question: "How should you implement focus management when opening a modal dialog?",
            options: {
                A: "Do nothing; users will find the dialog naturally",
                B: "Move focus into the dialog (typically to the first focusable element or the dialog itself), trap focus within the dialog, and restore focus to the trigger when closed",
                C: "Use <pre>aria-focus=\"dialog\"</pre> to automatically manage focus",
                D: "Disable all page content except the dialog using <pre>tabindex=\"-1\"</pre>"
            },
            correct: "B",
            explanation: "Proper modal dialog focus management requires three steps: 1) Move focus into the dialog when it opens (typically to the close button, first form field, or the dialog container with <pre>tabindex=\"-1\"</pre>). 2) Trap focus inside the dialog—when users tab, they should cycle through dialog elements, not access background page content. This typically requires JavaScript to handle Tab/Shift+Tab at dialog boundaries. 3) When the dialog closes, restore focus to the element that triggered it (usually the button that opened the dialog). Also add <pre>aria-modal=\"true\"</pre> and <pre>role=\"dialog\"</pre> (or <pre>role=\"alertdialog\"</pre> for alerts). There's no <pre>aria-focus</pre> attribute. Using <pre>tabindex=\"-1\"</pre> on background content won't prevent keyboard access. Proper focus management ensures keyboard users don't get lost or trapped in unexpected locations.",
            topics: ["Focus Management with tabindex", "ARIA Roles"]
        },

        {
            id: 19,
            question: "What is the difference between <pre>aria-label</pre> and <pre>aria-labelledby</pre>?",
            options: {
                A: "They are identical; use whichever you prefer",
                B: "aria-label provides a text string directly; aria-labelledby references the ID(s) of other elements whose text becomes the label",
                C: "aria-label is for buttons; aria-labelledby is for form inputs",
                D: "aria-labelledby overrides the element's text content; aria-label supplements it"
            },
            correct: "B",
            explanation: "The <pre>aria-label</pre> attribute provides an accessible name directly as a text string: <pre><button aria-label=\"Close dialog\"><span aria-hidden=\"true\">×</span></button></pre>. The <pre>aria-labelledby</pre> attribute references one or more element IDs whose text content becomes the accessible name: <pre><div role=\"dialog\" aria-labelledby=\"dialog-title\"><h2 id=\"dialog-title\">Confirm Action</h2>...</div></pre>. Use <pre>aria-labelledby</pre> when visible text already exists; use <pre>aria-label</pre> when you need to provide a label that isn't visible or differs from visible text. Both can be used on various elements, not just buttons or inputs. Both override other labeling methods (like visible text content), with <pre>aria-labelledby</pre> taking precedence over <pre>aria-label</pre> if both are present. You can reference multiple IDs with aria-labelledby: <pre>aria-labelledby=\"id1 id2 id3\"</pre>.",
            topics: ["ARIA States and Properties"]
        },

        {
            id: 20,
            question: "What does <pre>aria-hidden=\"true\"</pre> do, and when should it be used?",
            options: {
                A: "It hides the element visually from all users",
                B: "It hides the element and its descendants from assistive technologies while keeping it visible to sighted users",
                C: "It's equivalent to <pre>display: none</pre> in CSS",
                D: "It marks the element as hidden but still accessible to screen readers"
            },
            correct: "B",
            explanation: "The <pre>aria-hidden=\"true\"</pre> attribute removes an element and all its descendants from the accessibility tree, meaning screen readers and other assistive technologies ignore it completely. However, it remains visually visible—it only affects assistive technologies, not visual presentation. This is useful for decorative icons, visual-only spacers, or content that's redundant for screen reader users (like icon fonts next to text labels). For example: <pre><button><span class=\"icon\" aria-hidden=\"true\">☰</span> Menu</button></pre>. Never put focusable elements inside aria-hidden content, as users could tab to something they can't perceive. For visual hiding, use CSS techniques like <pre>position: absolute; left: -10000px</pre>. For hiding from everyone, use <pre>display: none</pre> or the <pre>hidden</pre> attribute. Don't use aria-hidden=\"true\" on focusable elements.",
            topics: ["ARIA States and Properties"]
        },

        {
            id: 21,
            question: "How do you create an accessible custom dropdown/select menu?",
            options: {
                A: "Use native <pre><select></pre> whenever possible; if custom UI is required, implement button with aria-expanded, aria-haspopup, listbox/option roles, and keyboard navigation",
                B: "Add <pre>role=\"dropdown\"</pre> to a <pre><div></pre> and style it",
                C: "Use <pre><ul></pre> with <pre>aria-select=\"true\"</pre> on list items",
                D: "Create multiple radio buttons styled as a dropdown"
            },
            correct: "A",
            explanation: "Native <pre><select></pre> elements should be your first choice—they're accessible by default. For custom dropdowns when native selects are insufficient, implement a complex widget: use a button for the trigger (<pre>role=\"button\"</pre> or <pre><button></pre>) with <pre>aria-expanded</pre> and <pre>aria-haspopup=\"listbox\"</pre>, a container with <pre>role=\"listbox\"</pre>, and options with <pre>role=\"option\"</pre> and <pre>aria-selected</pre>. Example: <pre><button aria-expanded=\"false\" aria-haspopup=\"listbox\" aria-controls=\"options\">Select...</button><ul role=\"listbox\" id=\"options\"><li role=\"option\" aria-selected=\"false\">Option 1</li></ul></pre>. Implement keyboard support (Enter/Space to open, Arrow keys to navigate, Escape to close), focus management, and state updates. There's no <pre>role=\"dropdown\"</pre> or <pre>aria-select</pre>. Radio buttons are semantically different from selects and create different user experiences. Custom selects are complex; only build them when necessary.",
            topics: ["ARIA Roles", "aria-expanded and aria-selected", "Focus Management with tabindex"]
        },

        {
            id: 22,
            question: "What is the purpose of <pre>aria-describedby</pre>?",
            options: {
                A: "To define the primary label for an element",
                B: "To reference additional descriptive text that provides more detailed information about an element",
                C: "To describe the visual appearance of an element",
                D: "To indicate which element describes or contains the current element"
            },
            correct: "B",
            explanation: "The <pre>aria-describedby</pre> attribute references element IDs that provide additional descriptive information about the current element. It's commonly used for help text, error messages, or additional context. For example: <pre><label for=\"password\">Password</label><input id=\"password\" type=\"password\" aria-describedby=\"password-hint\"><span id=\"password-hint\">Must be at least 8 characters</span></pre>. Screen readers announce the description after the label and role. Unlike <pre>aria-label</pre> or <pre>aria-labelledby</pre> (which provide the primary accessible name), <pre>aria-describedby</pre> provides supplementary information. It doesn't describe visual appearance—it provides functional or contextual information. You can reference multiple IDs: <pre>aria-describedby=\"hint1 error1 hint2\"</pre>. The description is typically announced less prominently than the label, and some screen readers allow users to skip it.",
            topics: ["ARIA States and Properties"]
        },

        {
            id: 23,
            question: "What keyboard interaction should a properly implemented tab interface support?",
            options: {
                A: "Tab key to move between tabs, Enter to activate",
                B: "Arrow keys to move between tabs, Space or Enter to activate (with roving tabindex so only one tab is in tab order)",
                C: "Only mouse clicks; keyboard access is handled automatically",
                D: "Tab key moves between tabs and panels sequentially"
            },
            correct: "B",
            explanation: "According to the ARIA Authoring Practices Guide, tab interfaces should use arrow keys (Left/Right or Up/Down depending on orientation) to move between tabs. Only one tab should be in the tab order at a time (using <pre>tabindex=\"0\"</pre> on the active tab and <pre>tabindex=\"-1\"</pre> on others—this is called \"roving tabindex\"). When a user tabs to the tablist, they land on the active tab, then use arrows to select different tabs. Space or Enter can activate a tab if it's not automatically activated on focus. The Tab key should move focus from the tablist to the active tab panel, not between individual tabs. This prevents keyboard users from having to tab through 5-10 tabs individually. Example implementation: <pre><div role=\"tablist\"><button role=\"tab\" tabindex=\"0\" aria-selected=\"true\">Tab 1</button><button role=\"tab\" tabindex=\"-1\" aria-selected=\"false\">Tab 2</button></div></pre>.",
            topics: ["Focus Management with tabindex", "ARIA Roles", "aria-expanded and aria-selected"]
        },

        {
            id: 24,
            question: "How should skip navigation links be styled for optimal usability?",
            options: {
                A: "Always visible at the top of the page",
                B: "Visually hidden by default, but visible when focused (using CSS to position off-screen and :focus to bring back)",
                C: "Completely hidden with <pre>display: none</pre>",
                D: "Only visible to screen readers using <pre>aria-hidden=\"false\"</pre>"
            },
            correct: "B",
            explanation: "Skip links should be visually hidden by default but become visible when focused, ensuring keyboard users can see and use them without cluttering the interface for mouse users. Common CSS pattern: <pre>.skip-link { position: absolute; left: -10000px; } .skip-link:focus { position: static; }</pre> or use <pre>clip</pre> and <pre>clip-path</pre> techniques. When the user tabs and the skip link receives focus, it appears (often at the top-left of the viewport). This makes it available to both sighted keyboard users and screen reader users. Keeping it always visible works but adds visual clutter. Using <pre>display: none</pre> removes it from keyboard navigation entirely, defeating the purpose. The <pre>aria-hidden=\"false\"</pre> approach doesn't hide things visually and doesn't make sense for skip links. The key is: hidden visually but in the accessibility tree, revealed on :focus.",
            topics: ["Skip Navigation Links", "Focus Management with tabindex"]
        },

        {
            id: 25,
            question: "What is the purpose of <pre>aria-current</pre> and what values can it have?",
            options: {
                A: "It indicates the currently focused element; values are \"true\" or \"false\"",
                B: "It marks the current item within a set of related elements; values include \"page\", \"step\", \"location\", \"date\", \"time\", \"true\"",
                C: "It specifies the current value of a range input; value is numeric",
                D: "It's equivalent to the <pre>:current</pre> CSS pseudo-class"
            },
            correct: "B",
            explanation: "The <pre>aria-current</pre> attribute indicates the current item within a set of related elements, such as the current page in navigation, the current step in a progress indicator, or the current date in a calendar. Valid values include: <pre>\"page\"</pre> (current page in pagination/navigation), <pre>\"step\"</pre> (current step in a process), <pre>\"location\"</pre> (current location in a breadcrumb), <pre>\"date\"</pre> (current date), <pre>\"time\"</pre> (current time), and <pre>\"true\"</pre> (current in an unspecified context). Example: <pre><nav><a href=\"/\">Home</a><a href=\"/about\" aria-current=\"page\">About</a><a href=\"/contact\">Contact</a></nav></pre>. Screen readers announce the current state, helping users understand their location. It doesn't indicate focus (that's the <pre>:focus</pre> state), doesn't specify numeric values (use <pre>aria-valuenow</pre> for that), and isn't related to the CSS <pre>:current</pre> pseudo-class. Use aria-current instead of just styling with a class.",
            topics: ["ARIA States and Properties"]
        }
    ]
};
