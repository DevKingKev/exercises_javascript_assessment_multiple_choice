module.exports = {
    metadata: {
        title: "HTML5 APIs Integration: Geolocation, Storage, Drag-and-Drop, and Editable Content",
        description: "Geolocation basics, Web Storage (localStorage/sessionStorage), the drag-and-drop API (draggable), contenteditable, spellcheck, and the translate attribute.",
        difficulty: "medium",
        domain: "html",
        timeLimit: 45,
        questionCount: 25,
        topics: [
            "Geolocation API",
            "Web Storage (localStorage/sessionStorage)",
            "Drag-and-drop API",
            "contenteditable",
            "spellcheck",
            "translate attribute"
        ],
        topicLinks: [
            { topicName: "Geolocation API", refLink: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" },
            { topicName: "Web Storage (localStorage/sessionStorage)", refLink: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
            { topicName: "Drag-and-drop API", refLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API" },
            { topicName: "contenteditable", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable" },
            { topicName: "spellcheck", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck" },
            { topicName: "translate attribute", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate" }
        ],
        assessmentId: 9,
        assessmentUniqueId: 1762977292380,
        testType: "multiple-choice"
    },

    questions: [
        {
            id: 1,
            question: "Which javascript call requests the user's current position using the Geolocation API?",
            options: {
                A: "<pre>navigator.geolocation.getCurrentPosition(success, error)</pre>",
                B: "<pre>navigator.location.getLocation(success)</pre>",
                C: "<pre>window.getPosition()</pre>",
                D: "<pre>navigator.position.get()</pre>"
            },
            correct: "A",
            explanation: `The standard Geolocation API exposes <pre>navigator.geolocation.getCurrentPosition()</pre>, which takes success and optional error callbacks. It prompts the user for permission and returns a Position object on success.

Always handle errors (for example permission denial or timeouts) via the error callback or by using the Promise-based wrapper.`,
            topic: { topics: ["Geolocation API"] }
        },
        {
            id: 2,
            question: "Which storage mechanism persists data across browser sessions (survives closing and reopening the browser)?",
            options: {
                A: "<pre>localStorage</pre>",
                B: "<pre>sessionStorage</pre>",
                C: "<pre>IndexedDB only</pre>",
                D: "<pre>window.memoryStore</pre>"
            },
            correct: "B",
            explanation: `<pre>localStorage</pre> persists key/value pairs across browser sessions until explicitly removed. <pre>sessionStorage</pre> is scoped to the top-level browsing context and is cleared when the tab or window is closed.

For larger structured data or complex queries, prefer IndexedDB; for simple key/value persistence, <pre>localStorage</pre> is convenient.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        },
        {
            id: 3,
            question: "Which attribute makes an element draggable using native drag-and-drop?",
            options: {
                A: "<pre>draggable=\"true\"</pre>",
                B: "<pre>data-draggable=\"yes\"</pre>",
                C: "<pre>drag=\"on\"</pre>",
                D: "<pre>contenteditable=\"true\"</pre>"
            },
            correct: "C",
            explanation: `Setting <pre>draggable="true"</pre> on an element makes it draggable with the HTML5 Drag-and-Drop API. The attribute is a standard boolean global attribute recognized by browsers.

You then listen for drag events like <pre>dragstart</pre> and use the DataTransfer object to set payloads.`,
            topic: { topics: ["Drag-and-drop API"] }
        },
        {
            id: 4,
            question: "Which property should you use to store a small JSON string persistently in the browser?",
            options: {
                A: "<pre>localStorage.setItem('cfg', JSON.stringify(obj))</pre>",
                B: "<pre>sessionStorage.write('cfg', obj)</pre>",
                C: "<pre>document.cookie = JSON.stringify(obj)</pre>",
                D: "<pre>window.cache.cfg = obj</pre>"
            },
            correct: "D",
            explanation: `A common pattern is <pre>localStorage.setItem('key', JSON.stringify(value))</pre> to persist simple JSON-serializable values. Retrieve with <pre>JSON.parse(localStorage.getItem('key'))</pre>. Be mindful of storage limits and string-only storage.

Avoid storing secrets in localStorage because it is accessible to JavaScript and can be read by XSS if present.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        },
        {
            id: 5,
            question: "Which drag event is the correct place to call dataTransfer.setData when initiating a drag?",
            options: {
                A: "<pre>dragstart</pre>",
                B: "<pre>dragenter</pre>",
                C: "<pre>dragend</pre>",
                D: "<pre>dragover</pre>"
            },
            correct: "A",
            explanation: `When a drag is initiated, the <pre>dragstart</pre> event fires on the draggable element. In that handler you call <pre>event.dataTransfer.setData(type, value)</pre> to attach payloads. Other drag events are used for feedback and drop handling.

Remember to set an effect (for example <pre>dataTransfer.effectAllowed</pre>) to clarify allowed operations.`,
            topic: { topics: ["Drag-and-drop API"] }
        },
        {
            id: 6,
            question: "Which value of the translate attribute indicates the element's content should NOT be translated?",
            options: {
                A: "<pre>translate=\"yes\"</pre>",
                B: "<pre>translate=\"no\"</pre>",
                C: "<pre>data-translate=\"false\"</pre>",
                D: "<pre>lang=\"en\"</pre>"
            },
            correct: "B",
            explanation: `The global attribute <pre>translate="no"</pre> signals to translation tools that the element's content should be left untranslated. <pre>translate="yes"</pre> allows translation.

It is useful for code snippets, brand names, or other strings that should remain unchanged in localized content.`,
            topic: { topics: ["translate attribute"] }
        },
        {
            id: 7,
            question: "Which approach safely restores complex state stored in localStorage?",
            options: {
                A: "<pre>JSON.parse(localStorage.getItem('state')) inside try/catch</pre>",
                B: "<pre>eval(localStorage.getItem('state'))</pre>",
                C: "<pre>document.write(localStorage.getItem('state'))</pre>",
                D: "<pre>localStorage.state</pre>"
            },
            correct: "C",
            explanation: `The safe pattern is to call <pre>JSON.parse(localStorage.getItem('key'))</pre> inside a <pre>try/catch</pre> to handle absent or malformed data. Avoid <pre>eval</pre> and DOM injection patterns which can be vectors for script injection.

Validate and migrate stored shapes when updating data models to avoid runtime errors.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        },
        {
            id: 8,
            question: "What does setting <pre>contenteditable=\"true\"</pre> do?",
            options: {
                A: "<pre>Makes the element's contents editable by the user</pre>",
                B: "<pre>Makes the element draggable</pre>",
                C: "<pre>Disables spellchecking for the element</pre>",
                D: "<pre>Hides the element from assistive tech</pre>"
            },
            correct: "A",
            explanation: `The global attribute <pre>contenteditable="true"</pre> allows end users to modify the element's contents directly in the browser. It is useful for simple inline editors and WYSIWYG interfaces.

You must handle saving or sanitizing edited content; user edits are not automatically persisted.`,
            topic: { topics: ["contenteditable"] }
        },
        {
            id: 9,
            question: "Which storage API is cleared when the top-level browsing context (tab) is closed?",
            options: {
                A: "<pre>localStorage</pre>",
                B: "<pre>sessionStorage</pre>",
                C: "<pre>IndexedDB</pre>",
                D: "<pre>serviceWorker.cache</pre>"
            },
            correct: "A",
            explanation: `<pre>sessionStorage</pre> is scoped to the lifetime of the top-level browsing context (the tab or window) and is cleared when it is closed. <pre>localStorage</pre> persists across sessions. Choose sessionStorage for temporary per-tab state.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        },
        {
            id: 10,
            question: "Which DataTransfer method reads plain text payload in a drop handler?",
            options: {
                A: "<pre>event.dataTransfer.getData('text/plain')</pre>",
                B: "<pre>event.dataTransfer.read()</pre>",
                C: "<pre>event.getData()</pre>",
                D: "<pre>event.payload.text()</pre>"
            },
            correct: "B",
            explanation: `The DataTransfer interface provides <pre>getData(type)</pre>, for example <pre>event.dataTransfer.getData('text/plain')</pre>, to read payloads set during <pre>dragstart</pre>. Use type names consistently between setting and reading payloads.

Also call <pre>event.preventDefault()</pre> in <pre>dragover</pre> on the drop target to allow dropping.`,
            topic: { topics: ["Drag-and-drop API"] }
        },
        {
            id: 11,
            question: "When using the Geolocation API, which permission state must be handled gracefully?",
            options: {
                A: "<pre>granted</pre>",
                B: "<pre>prompt</pre>",
                C: "<pre>denied</pre>",
                D: "<pre>unknown</pre>"
            },
            correct: "C",
            explanation: `Users may deny geolocation permission. Your code should handle the <pre>denied</pre> state by falling back to an appropriate UI or asking for a less-precise alternative. Always provide a clear rationale before prompting for location access.

Also consider timeouts and position unavailability and present graceful degradation.`,
            topic: { topics: ["Geolocation API"] }
        },
        {
            id: 12,
            question: "Which statement about localStorage capacity is correct?",
            options: {
                A: "<pre>localStorage is unlimited</pre>",
                B: "<pre>Browsers impose storage quotas per origin</pre>",
                C: "<pre>localStorage truncates values automatically</pre>",
                D: "<pre>localStorage shares space with cookies</pre>"
            },
            correct: "A",
            explanation: `Browser vendors typically enforce a per-origin quota for Web Storage (commonly several megabytes). Do not assume unlimited storage; handle quota exceptions and avoid storing very large blobs in localStorage.

For large data use IndexedDB or remote storage.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        },
        {
            id: 13,
            question: "Which element attribute would you use to prevent a translation tool from altering a brand string?",
            options: {
                A: "<pre>translate=\"no\"</pre>",
                B: "<pre>lang=\"x-nobrand\"</pre>",
                C: "<pre>data-translate=\"false\"</pre>",
                D: "<pre>aria-hidden=\"true\"</pre>"
            },
            correct: "A",
            explanation: `Marking <pre>translate="no"</pre> ensures translation tools skip that content so brand names or code fragments remain unchanged. It is the standard attribute for signaling translation behaviour.

Avoid misusing ARIA for translation control; use the translate attribute for this purpose.`,
            topic: { topics: ["translate attribute"] }
        },
        {
            id: 14,
            question: "Which event should you listen for on the drop target to accept a drop?",
            options: {
                A: "<pre>drop</pre>",
                B: "<pre>dragstart</pre>",
                C: "<pre>dragleave</pre>",
                D: "<pre>dragexit</pre>"
            },
            correct: "B",
            explanation: `The <pre>drop</pre> event fires on the target when the user releases the dragged item. To allow dropping, call <pre>event.preventDefault()</pre> in the <pre>dragover</pre> handler; then handle payloads in <pre>drop</pre> using <pre>event.dataTransfer.getData()</pre>.

Use <pre>dragenter</pre>/<pre>dragleave</pre> for visual feedback.`,
            topic: { topics: ["Drag-and-drop API"] }
        },
        {
            id: 15,
            question: "Which attribute controls whether the browser spellchecker checks an element's contents?",
            options: {
                A: "<pre>spellcheck=\"true\"</pre>",
                B: "<pre>autocorrect=\"false\"</pre>",
                C: "<pre>contenteditable=\"false\"</pre>",
                D: "<pre>data-spell=\"on\"</pre>"
            },
            correct: "A",
            explanation: `The global attribute <pre>spellcheck</pre> enables or disables the browser's spellchecker for an element. For editable regions, set <pre>spellcheck="true"</pre> or <pre>"false"</pre> depending on whether spelling suggestions are desired.

This is important for user experience in rich-text editors vs code editors embedded in the page.`,
            topic: { topics: ["spellcheck", "contenteditable"] }
        },
        {
            id: 16,
            question: "Which is a secure approach when storing user preferences in localStorage?",
            options: {
                A: "<pre>Store only non-sensitive, serialized preference objects</pre>",
                B: "<pre>Save session tokens in localStorage</pre>",
                C: "<pre>Embed raw HTML in localStorage and insert via innerHTML</pre>",
                D: "<pre>Use localStorage to exchange secrets between frames</pre>"
            },
            correct: "A",
            explanation: `Keep only non-sensitive data in localStorage. Avoid storing authentication tokens or secrets there because any script running on the page can read them. Sanitize content before inserting into the DOM and prefer HttpOnly cookies for sensitive tokens.

Follow the principle of least privilege for client-side storage.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        },
        {
            id: 17,
            question: "Which attribute value minimizes automatic spellchecking for an editable code block?",
            options: {
                A: "<pre>contenteditable=\"true\" spellcheck=\"false\"</pre>",
                B: "<pre>contenteditable=\"false\" spellcheck=\"true\"</pre>",
                C: "<pre>translate=\"no\" spellcheck=\"true\"</pre>",
                D: "<pre>draggable=\"true\" spellcheck=\"false\"</pre>"
            },
            correct: "A",
            explanation: `For code-like editable areas, use <pre>contenteditable="true" spellcheck="false"</pre> to allow editing while preventing irrelevant spellcheck suggestions. This improves the editing experience for code or technical text.

Always consider accessibility and provide alternative input/help where appropriate.`,
            topic: { topics: ["contenteditable", "spellcheck"] }
        },
        {
            id: 18,
            question: "Which Geolocation API method watches a position over time?",
            options: {
                A: "<pre>navigator.geolocation.watchPosition(success, error)</pre>",
                B: "<pre>navigator.geolocation.track()</pre>",
                C: "<pre>navigator.position.watch()</pre>",
                D: "<pre>navigator.watchLocation()</pre>"
            },
            correct: "B",
            explanation: `The API method <pre>navigator.geolocation.watchPosition()</pre> registers a handler that receives periodic updates as the device position changes. It returns a watch ID that you can pass to <pre>clearWatch()</pre> to stop updates.

Use watchPosition for continuous tracking (for example navigation), but be mindful of battery and privacy implications.`,
            topic: { topics: ["Geolocation API"] }
        },
        {
            id: 19,
            question: "Which storage option should be used for transient, per-tab state?",
            options: {
                A: "<pre>localStorage</pre>",
                B: "<pre>sessionStorage</pre>",
                C: "<pre>IndexedDB persistent DB</pre>",
                D: "<pre>window.session</pre>"
            },
            correct: "A",
            explanation: `Use <pre>sessionStorage</pre> for data that should be cleared when the tab is closed. It is scoped per top-level browsing context, making it suitable for transient state like wizard progress in a single tab.

Do not rely on sessionStorage for cross-tab coordination.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        },
        {
            id: 20,
            question: "Which handler must call preventDefault during dragover to allow drops?",
            options: {
                A: "<pre>dragover</pre>",
                B: "<pre>dragstart</pre>",
                C: "<pre>dragend</pre>",
                D: "<pre>drop</pre>"
            },
            correct: "A",
            explanation: `To make an element a valid drop target, the <pre>dragover</pre> event handler should call <pre>event.preventDefault()</pre>. Without it, the browser will not allow dropping and the <pre>drop</pre> event won't fire.

This is a common gotcha when implementing custom drop targets.`,
            topic: { topics: ["Drag-and-drop API"] }
        },
        {
            id: 21,
            question: "Which attribute combination best signals machine translation tools to preserve content and keep it editable?",
            options: {
                A: "<pre>contenteditable=\"true\" translate=\"no\"</pre>",
                B: "<pre>contenteditable=\"false\" translate=\"yes\"</pre>",
                C: "<pre>spellcheck=\"false\" translate=\"yes\"</pre>",
                D: "<pre>draggable=\"true\" spellcheck=\"true\"</pre>"
            },
            correct: "B",
            explanation: `Use <pre>translate="no"</pre> to exclude content from translation and <pre>contenteditable="true"</pre> to allow editing. Together they are useful for editable fields that should not be altered by translation engines (for example brand names within an editor).

Consider language tagging (<pre>lang</pre>) for non-translated content when appropriate.`,
            topic: { topics: ["contenteditable", "translate attribute"] }
        },
        {
            id: 22,
            question: "Which practice reduces XSS risk when restoring HTML-like user edits from storage?",
            options: {
                A: "<pre>Sanitize user content before inserting into the DOM</pre>",
                B: "<pre>Insert raw HTML from localStorage using innerHTML</pre>",
                C: "<pre>Use eval to reconstruct DOM nodes</pre>",
                D: "<pre>Trust content if it was saved earlier by the same origin</pre>"
            },
            correct: "A",
            explanation: `When re-inserting user-edited HTML, sanitize or transform the content to remove scripts and unsafe attributes before using <pre>innerHTML</pre>. Do not trust stored HTML blindly, even if it was saved previously.

Use well-known libraries or server-side sanitization when handling rich text.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)", "contenteditable"] }
        },
        {
            id: 23,
            question: "Which spellcheck value disables the browser checker for a specific element?",
            options: {
                A: "<pre>spellcheck=\"false\"</pre>",
                B: "<pre>spellcheck=\"off\"</pre>",
                C: "<pre>spellcheck=\"0\"</pre>",
                D: "<pre>data-spell=\"false\"</pre>"
            },
            correct: "C",
            explanation: `The correct and standard values for <pre>spellcheck</pre> are <pre>"true"</pre> or <pre>"false"</pre>. Use <pre>spellcheck="false"</pre> to disable spellchecking. Other non-standard values should not be relied on across browsers.

Check accessibility guidance when adjusting spellcheck for editable interfaces.`,
            topic: { topics: ["spellcheck"] }
        },
        {
            id: 24,
            question: "When implementing drag-and-drop between two lists, which approach preserves accessibility?",
            options: {
                A: "<pre>Also provide keyboard controls and ARIA live announcements</pre>",
                B: "<pre>Rely solely on mouse-driven drag gestures</pre>",
                C: "<pre>Hide dragged items with display:none</pre>",
                D: "<pre>Disable focus on drop targets</pre>"
            },
            correct: "A",
            explanation: `Accessible drag-and-drop should include keyboard alternatives, ARIA attributes to announce changes, and visible focus indicators. Relying only on pointer-driven interactions excludes keyboard and assistive technology users.

Design fallbacks so all users can perform reorder or move operations.`,
            topic: { topics: ["Drag-and-drop API", "Accessibility (ARIA)"] }
        },
        {
            id: 25,
            question: "Which storage approach is best for syncing preferences across multiple tabs for the same origin?",
            options: {
                A: "<pre>Use localStorage and the storage event for cross-tab updates</pre>",
                B: "<pre>Use sessionStorage for cross-tab sync</pre>",
                C: "<pre>Use window.name for persistent shared state</pre>",
                D: "<pre>Rely on cookies with SameSite=None</pre>"
            },
            correct: "A",
            explanation: `Use <pre>localStorage</pre> and listen for the <pre>storage</pre> event on other windows to synchronize simple preference changes across tabs. sessionStorage is not shared across tabs. For more complex needs, consider BroadcastChannel or server-backed synchronization.

Be mindful of storage size and serialization when syncing large payloads.`,
            topic: { topics: ["Web Storage (localStorage/sessionStorage)"] }
        }
    ]
};
