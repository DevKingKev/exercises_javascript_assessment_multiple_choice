module.exports = {
    "metadata": {
        "title": "HTML5 APIs Integration II",
        "description": "Integration scenarios and practical behaviours for common HTML5 web platform APIs: Geolocation, Web Storage (local/sessionStorage), Drag-and-Drop, contenteditable, spellcheck, and the translate attribute.",
        "difficulty": "medium",
        "domain": "html",
        "timeLimit": 45,
        "questionCount": 25,
        "topics": [
            "geolocation",
            "webstorage",
            "drag-and-drop",
            "contenteditable",
            "spellcheck",
            "translate"
        ],
        "topicLinks": [
            {
                "topicName": "geolocation",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
            },
            {
                "topicName": "webstorage",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
            },
            {
                "topicName": "drag-and-drop",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API"
            },
            {
                "topicName": "contenteditable",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"
            },
            {
                "topicName": "spellcheck",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck"
            },
            {
                "topicName": "translate",
                "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate"
            }
        ],
        "assessmentId": 10,
        "assessmentUniqueId": 1762992215541,
        "testType": "multiple-choice"
    },
    "questions": [
        {
            "id": 1,
            "question": "When calling the Geolocation API with <pre>navigator.geolocation.getCurrentPosition(success, error)</pre>, which of the following is true about the error callback?",
            "options": {
                "A": "It is deprecated in modern browsers and replaced by Promise-based geolocation.",
                "B": "It is only called when the device cannot acquire a fix; permission denial does not trigger it.",
                "C": "It will be called only on HTTPS pages; on HTTP pages the success callback is called with null.",
                "D": "It is always called if the user denies permission; the PositionError code will indicate PERMISSION_DENIED."
            },
            "correct": "D",
            "explanation": "When a user denies permission the error callback is invoked with a PositionError (PERMISSION_DENIED). The device failing to get a fix will also call the error callback with POSITION_UNAVAILABLE.",
            "topics": [
                "geolocation"
            ]
        },
        {
            "id": 2,
            "question": "Which storage facility persists across browser sessions until explicitly cleared by script or user?",
            "options": {
                "A": "sessionStorage",
                "B": "localStorage",
                "C": "IndexedDB only (Web Storage is temporary)",
                "D": "Neither; both are cleared when the browser closes"
            },
            "correct": "B",
            "explanation": "localStorage persists across browser sessions for the same origin until removed by script or user action. sessionStorage is bound to the browsing context and cleared when it ends.",
            "topics": [
                "webstorage"
            ]
        },
        {
            "id": 3,
            "question": "Given an element with <pre>draggable=\"true\"</pre>, which event is fired on the drag source when the drag operation completes (success or not)?",
            "options": {
                "A": "dragend",
                "B": "drop",
                "C": "dragfinish",
                "D": "dragstop"
            },
            "correct": "A",
            "explanation": "The dragend event fires on the source element when a drag operation finishes, whether the drop succeeded or was canceled.",
            "topics": [
                "drag-and-drop"
            ]
        },
        {
            "id": 4,
            "question": "If an element has <pre>contenteditable=\"true\"</pre>, which of the following is true about the element’s child nodes after user edits?",
            "options": {
                "A": "The browser always preserves the original element structure and only replaces text nodes",
                "B": "contenteditable automatically sanitizes HTML to prevent any new elements",
                "C": "contenteditable only allows plain-text edits; inline tags cannot be inserted",
                "D": "User edits may insert, remove, or restructure DOM nodes (e.g., <pre><br></pre>, <pre><div></pre>), so scripts should handle DOM normalization"
            },
            "correct": "D",
            "explanation": "Editable regions are DOM-editable; users and the browser can insert new nodes or restructure markup, so scripts should normalize and sanitize as needed.",
            "topics": [
                "contenteditable"
            ]
        },
        {
            "id": 5,
            "question": "Which attribute or property tells the browser not to spellcheck a particular editable region?",
            "options": {
                "A": "Add <pre>translate=\"no\"</pre> to the element",
                "B": "<pre>contenteditable=\"false\"</pre> disables spellcheck",
                "C": "<pre>spellcheck=\"false\"</pre> (attribute) or element.spellcheck = false",
                "D": "Use CSS property <pre>user-select: none</pre>"
            },
            "correct": "C",
            "explanation": "The spellcheck attribute controls spellchecking. Setting spellcheck=\"false\" disables it for that element.",
            "topics": [
                "spellcheck"
            ]
        },
        {
            "id": 6,
            "question": "The global attribute <pre>translate=\"no\"</pre> on an element signals what to translation engines?",
            "options": {
                "A": "Only affects spellcheck",
                "B": "That the content must be translated",
                "C": "That the content should not be machine-translated",
                "D": "Replaces lang attribute"
            },
            "correct": "C",
            "explanation": "translate=\"no\" is a hint that content should not be translated by machine translation tools.",
            "topics": [
                "translate"
            ]
        },
        {
            "id": 7,
            "question": "A script stores a settings object with <pre>localStorage.setItem(\"cfg\", JSON.stringify(obj))</pre>. What happens when the user has disabled third-party cookies/storage for the site?",
            "options": {
                "A": "localStorage writes silently fail and throw a SecurityError",
                "B": "localStorage is blocked whenever any cookie setting is disabled",
                "C": "localStorage becomes temporary and is cleared on tab close",
                "D": "localStorage still works because it is same-origin storage, independent of third-party cookie settings"
            },
            "correct": "D",
            "explanation": "localStorage is origin-scoped. Disabling third-party cookies affects cross-origin contexts; same-origin localStorage typically continues to work.",
            "topics": [
                "webstorage"
            ]
        },
        {
            "id": 8,
            "question": "Which of the following best describes the DataTransfer object during a drag operation?",
            "options": {
                "A": "It contains a set of key/value pairs representing data being transferred and is used on dragstart/drop handlers",
                "B": "It is only present on the drop target and not accessible from the drag source",
                "C": "It automatically serializes complex objects without developer intervention",
                "D": "It is a wrapper for navigator.clipboard during drag-and-drop"
            },
            "correct": "A",
            "explanation": "DataTransfer holds data for the drag session; you set data during dragstart and read it during drop. It does not auto-serialize complex objects.",
            "topics": [
                "drag-and-drop"
            ]
        },
        {
            "id": 9,
            "question": "When implementing a custom paste handler inside a contenteditable region to sanitize HTML, which API helps to read clipboard content as HTML if available?",
            "options": {
                "A": "There is no way to read HTML from the clipboard in the browser",
                "B": "navigator.clipboard.readText() only provides text, not HTML",
                "C": "document.execCommand(\"getHTML\")",
                "D": "event.clipboardData.getData(\"text/html\") inside paste handler"
            },
            "correct": "D",
            "explanation": "In paste handlers you can inspect event.clipboardData.getData(\"text/html\") or \"text/plain\". navigator.clipboard APIs are asynchronous and may provide richer formats in supporting browsers.",
            "topics": [
                "contenteditable"
            ]
        },
        {
            "id": 10,
            "question": "Which GeolocationPositionOptions property controls how long the device may use a cached position before requesting a new fix?",
            "options": {
                "A": "enableHighAccuracy",
                "B": "timeout",
                "C": "maximumAge",
                "D": "frequency"
            },
            "correct": "C",
            "explanation": "maximumAge specifies how old a cached position (in ms) may be returned; setting it to 0 forces no cached positions.",
            "topics": [
                "geolocation"
            ]
        },
        {
            "id": 11,
            "question": "What will <pre>localStorage.removeItem(key)</pre> do if the key does not exist?",
            "options": {
                "A": "Do nothing (no error)",
                "B": "Throw an exception",
                "C": "Clear all storage for the origin",
                "D": "Return false and leave storage untouched"
            },
            "correct": "A",
            "explanation": "removeItem silently does nothing if the key is absent; it does not throw.",
            "topics": [
                "webstorage"
            ]
        },
        {
            "id": 12,
            "question": "During dragover on a potential drop target, what must you do to allow dropping?",
            "options": {
                "A": "Call event.stopPropagation()",
                "B": "Set the target element to contenteditable",
                "C": "Call event.preventDefault() in the dragover handler",
                "D": "Change the element’s draggable attribute to false"
            },
            "correct": "C",
            "explanation": "To indicate that a drop is allowed, the dragover event must call preventDefault(); otherwise most browsers will disallow drop.",
            "topics": [
                "drag-and-drop"
            ]
        },
        {
            "id": 13,
            "question": "If you want to remember a UI preference (like dark mode) for a single window/tab only, which storage is most appropriate?",
            "options": {
                "A": "localStorage",
                "B": "IndexedDB (only for persistent settings)",
                "C": "Cookies with long expiry",
                "D": "sessionStorage"
            },
            "correct": "D",
            "explanation": "sessionStorage is scoped to a single top-level browsing context and lasts for that session/tab.",
            "topics": [
                "webstorage"
            ]
        },
        {
            "id": 14,
            "question": "Which element attribute or property should you check to see if a contenteditable element currently has focus and the caret inside it?",
            "options": {
                "A": "theElement.isContentSelected",
                "B": "theElement.hasAttribute(\"focused\")",
                "C": "theElement.contentEditable === \"true\" only",
                "D": "document.activeElement === theElement (and check selection.rangeCount)"
            },
            "correct": "D",
            "explanation": "document.activeElement indicates the focused element; inspect window.getSelection() for caret details.",
            "topics": [
                "contenteditable"
            ]
        },
        {
            "id": 15,
            "question": "When a page uses <pre>navigator.geolocation.watchPosition()</pre>, what must a developer do to avoid resource leaks?",
            "options": {
                "A": "Nothing — watchPosition stops automatically when the page is hidden",
                "B": "Call navigator.geolocation.clearWatch(id) when updates are no longer needed",
                "C": "Call stop() on the returned Watcher object",
                "D": "Call navigator.geolocation.cancelWatch()"
            },
            "correct": "B",
            "explanation": "watchPosition returns a watch ID used with clearWatch(id) to stop updates.",
            "topics": [
                "geolocation"
            ]
        },
        {
            "id": 16,
            "question": "Which approach is safest when storing user-generated HTML from a contenteditable region for later rendering?",
            "options": {
                "A": "Trust the paste HTML and store it directly",
                "B": "Store raw HTML and sanitize on output with a robust sanitizer",
                "C": "Replace all tags with their entity-escaped equivalents and show as text",
                "D": "Remove text nodes and store only element names"
            },
            "correct": "B",
            "explanation": "Sanitize HTML on output with a maintained sanitizer to remove dangerous constructs.",
            "topics": [
                "contenteditable"
            ]
        },
        {
            "id": 17,
            "question": "Which of these is a valid reason that localStorage.setItem may throw a QuotaExceededError?",
            "options": {
                "A": "The key name contains invalid characters",
                "B": "Storage quota exceeded for the origin (too much data stored)",
                "C": "Because localStorage is read-only and never allows writes",
                "D": "Because the origin is in the browser’s allowlist"
            },
            "correct": "B",
            "explanation": "Browsers enforce quotas; storing beyond quota may throw QuotaExceededError.",
            "topics": [
                "webstorage"
            ]
        },
        {
            "id": 18,
            "question": "To provide accessible drag-and-drop, which pattern is recommended alongside native drag events?",
            "options": {
                "A": "Also provide keyboard alternatives and ARIA attributes to indicate draggable and droppable roles",
                "B": "Only support mouse users; ARIA is unnecessary",
                "C": "Wrap draggable elements in <pre>button</pre> elements",
                "D": "Use contenteditable instead of drag-and-drop"
            },
            "correct": "A",
            "explanation": "Provide keyboard controls and ARIA roles/attributes for accessibility.",
            "topics": [
                "drag-and-drop"
            ]
        },
        {
            "id": 19,
            "question": "If you want a brief, non-translatable attribute applied to a small UI string (like an ID code), which markup is correct?",
            "options": {
                "A": "<pre><span translate=\"no\">ID: 42</span></pre>",
                "B": "<pre><span spellcheck=\"false\">ID: 42</span></pre>",
                "C": "<pre><span contenteditable=\"false\">ID: 42</span></pre>",
                "D": "<pre><span lang=\"en\">ID: 42</span></pre>"
            },
            "correct": "A",
            "explanation": "translate=\"no\" indicates content should not be machine-translated.",
            "topics": [
                "translate"
            ]
        },
        {
            "id": 20,
            "question": "Which combination correctly prevents the default file-opening behavior on a drop and reads files using the DataTransfer object?",
            "options": {
                "A": "Set draggable=false on the target to allow file reads",
                "B": "Only preventDefault in dragstart, then read files from navigator.files",
                "C": "Call event.preventDefault() in dragover and drop handlers, then use event.dataTransfer.files in drop",
                "D": "Use localStorage to store the File objects directly"
            },
            "correct": "C",
            "explanation": "Prevent default in dragover/drop and read event.dataTransfer.files.",
            "topics": [
                "drag-and-drop"
            ]
        },
        {
            "id": 21,
            "question": "What is a common pitfall when storing numeric data in localStorage and later reading it back?",
            "options": {
                "A": "localStorage stores values as strings, so you must parseInt/parseFloat when reading numbers back",
                "B": "Numbers are stored with higher precision in localStorage",
                "C": "A numeric key will be auto-converted to a number when read",
                "D": "localStorage preserves type information (no conversion needed)"
            },
            "correct": "A",
            "explanation": "localStorage stores only strings; parse when reading.",
            "topics": [
                "webstorage"
            ]
        },
        {
            "id": 22,
            "question": "Which event sequence is typical when dragging a draggable element over a valid drop target and then dropping it?",
            "options": {
                "A": "dragstart → drop → dragenter → dragover → dragend",
                "B": "dragstart → dragenter → dragover → drop → dragend",
                "C": "dragstart → drag → drop → dragend → dragover",
                "D": "dragstart → dragend → drop"
            },
            "correct": "B",
            "explanation": "Typical sequence: dragstart, dragenter, dragover, drop, dragend.",
            "topics": [
                "drag-and-drop"
            ]
        },
        {
            "id": 23,
            "question": "If you need to remember a last-known position from the Geolocation API and allow offline use, which pattern is suitable?",
            "options": {
                "A": "Store the Position object directly in sessionStorage without serialization",
                "B": "Rely on navigator.geolocation.getCurrentPosition even when offline",
                "C": "Store the position object (latitude/longitude/timestamp) in localStorage or IndexedDB and use it when offline",
                "D": "Write the position into a cookie with large expiry"
            },
            "correct": "C",
            "explanation": "Persist serialized position in localStorage or IndexedDB for offline reuse.",
            "topics": [
                "geolocation",
                "webstorage"
            ]
        },
        {
            "id": 24,
            "question": "Which attribute is recommended to make an element explicitly indicate it is draggable to assistive technologies?",
            "options": {
                "A": "role=\"option\"",
                "B": "aria-grabbed (or set aria-dropeffect when appropriate) alongside draggable",
                "C": "translate=\"no\"",
                "D": "contenteditable=\"true\""
            },
            "correct": "B",
            "explanation": "Use ARIA attributes like aria-grabbed or dropeffect in combination with draggable to improve accessibility.",
            "topics": [
                "drag-and-drop"
            ]
        },
        {
            "id": 25,
            "question": "When using the programmatic Clipboard API to write rich content, which permission or feature support is typically required?",
            "options": {
                "A": "User gesture and secure context (HTTPS); some clipboard writes require explicit permission",
                "B": "No permission is ever required for clipboard writes",
                "C": "Clipboard writes only work in contenteditable elements",
                "D": "Clipboard API is available only in service workers"
            },
            "correct": "A",
            "explanation": "Clipboard API typically requires a user gesture and secure context; permissions vary by browser.",
            "topics": [
                "contenteditable",
                "drag-and-drop"
            ]
        }
    ]
};
