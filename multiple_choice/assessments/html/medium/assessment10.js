module.exports = {
  metadata: {
    title: 'HTML5 APIs Integration II',
    description:
      'Integration scenarios and practical behaviours for common HTML5 web platform APIs: Geolocation, Web Storage (local/sessionStorage), Drag-and-Drop, contenteditable, spellcheck, and the translate attribute.',
    difficulty: 'medium',
    domain: 'html',
    timeLimit: 45,
    questionCount: 25,
    topics: ['geolocation', 'webstorage', 'drag-and-drop', 'contenteditable', 'spellcheck', 'translate'],
    topicLinks: [
      { topicName: 'geolocation', refLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API' },
      { topicName: 'webstorage', refLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API' },
      { topicName: 'drag-and-drop', refLink: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API' },
      { topicName: 'contenteditable', refLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable' },
      { topicName: 'spellcheck', refLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck' },
      { topicName: 'translate', refLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate' }
    ],
    assessmentId: 10,
    assessmentUniqueId: 1762992215541,
    testType: 'multiple-choice'
  },

  questions: [
    {
      id: 1,
      question:
        'When calling the Geolocation API with <pre>navigator.geolocation.getCurrentPosition(success, error)</pre>, which of the following is true about the error callback?',
      options: {
        A: 'It is always called if the user denies permission; the PositionError code will indicate PERMISSION_DENIED.',
        B: 'It is only called when the device cannot acquire a fix; permission denial does not trigger it.',
        C: 'It will be called only on HTTPS pages; on HTTP pages the success callback is called with null.',
        D: 'It is deprecated in modern browsers and replaced by Promise-based geolocation.'
      },
      correct: 'A',
      explanation: `When a user denies permission the error callback is invoked with a PositionError (PERMISSION_DENIED). The Geolocation API still uses callbacks (or the newer Promise wrapper you can write), and it does not return success on HTTP pages — permissions and secure contexts are separate concerns. The device failing to get a fix will also call the error callback but with a different code (POSITION_UNAVAILABLE).`,
      topics: ['geolocation']
    },

    {
      id: 2,
      question: 'Which storage facility persists across browser sessions until explicitly cleared by script or user?',
      options: {
        A: 'sessionStorage',
        B: 'localStorage',
        C: 'IndexedDB only (Web Storage is temporary)',
        D: 'Neither; both are cleared when the browser closes'
      },
      correct: 'B',
      explanation: `localStorage persists across browser sessions for the same origin until removed by script or user action. sessionStorage is bound to a single top-level browsing context and is cleared when that context ends (e.g., closing a tab). IndexedDB also persists, but the question asked specifically about Web Storage facilities.`,
      topics: ['webstorage']
    },

    {
      id: 3,
      question:
        'Given an element with <pre>draggable="true"</pre>, which event is fired on the drag source when the drag operation completes (success or not)?',
      options: { A: 'dragend', B: 'drop', C: 'dragfinish', D: 'dragstop' },
      correct: 'A',
      explanation: `The dragend event fires on the source element when a drag operation finishes, whether the drop succeeded or was canceled. The drop event fires on the drop target, not on the source. There is no standard dragfinish or dragstop event.`,
      topics: ['drag-and-drop']
    },

    {
      id: 4,
      question:
        'If an element has <pre>contenteditable="true"</pre>, which of the following is true about the element’s child nodes after user edits?',
      options: {
        A: 'The browser always preserves the original element structure and only replaces text nodes',
        B: 'User edits may insert, remove, or restructure DOM nodes (e.g., <pre>&lt;br&gt;</pre>, <pre>&lt;div&gt;</pre>), so scripts should handle DOM normalization',
        C: 'contenteditable only allows plain-text edits; inline tags cannot be inserted',
        D: 'contenteditable automatically sanitizes HTML to prevent any new elements'
      },
      correct: 'B',
      explanation: `Editable regions are direct DOM-editable; users and the browser can insert new nodes (line breaks, inline formatting elements, pasted HTML). Scripts should account for this and normalize or sanitize as needed. contenteditable does not restrict edits to plain text nor does it guarantee sanitization.`,
      topics: ['contenteditable']
    },

    {
      id: 5,
      question: 'Which attribute or property tells the browser not to spellcheck a particular editable region?',
      options: {
        A: '<pre>spellcheck="false"</pre> (attribute) or element.spellcheck = false',
        B: '<pre>contenteditable="false"</pre> disables spellcheck',
        C: 'Add <pre>translate="no"</pre> to the element',
        D: 'Use CSS property <pre>user-select: none</pre>'
      },
      correct: 'A',
      explanation: `The spellcheck attribute controls whether the browser should check spelling for the element. Setting <pre>spellcheck="false"</pre> or element.spellcheck = false disables spellchecking. contenteditable controls editability, translate controls machine translation hints, and user-select is unrelated.`,
      topics: ['spellcheck']
    },

    {
      id: 6,
      question:
        'The global attribute <pre>translate="no"</pre> on an element signals what to translation engines?',
      options: {
        A: 'That the content should not be machine-translated',
        B: 'That the content must be translated',
        C: 'Only affects built-in browser spellchecking',
        D: 'Replaces the lang attribute for translation detection'
      },
      correct: 'A',
      explanation: `translate="no" hints to user agents and translation tools that the content is not intended to be translated. It does not force translation, affect spellchecking directly, nor replaces lang. Tools may respect or ignore the hint, but it's the correct semantic way to mark untranslatable fragments.`,
      topics: ['translate']
    },

    {
      id: 7,
      question:
        'A script stores a settings object with <pre>localStorage.setItem("cfg", JSON.stringify(obj))</pre>. What happens when the user has disabled third-party cookies/storage for the site?',
      options: {
        A: 'localStorage still works because it is same-origin storage, independent of third-party cookie settings',
        B: 'localStorage is blocked whenever any cookie setting is disabled',
        C: 'localStorage becomes temporary and is cleared on tab close',
        D: 'localStorage writes silently fail and throw a SecurityError'
      },
      correct: 'A',
      explanation: `localStorage is origin-scoped. Disabling third-party cookies/storage affects cross-origin frames and third-party contexts; same-origin localStorage typically continues to work. Some privacy modes and strict blockers can affect localStorage behavior, but by spec localStorage is same-origin and not globally tied to cookie flags.`,
      topics: ['webstorage']
    },

    {
      id: 8,
      question:
        'Which of the following best describes the DataTransfer object during a drag operation?',
      options: {
        A: 'It contains a set of key/value pairs representing data being transferred and is used on dragstart/drop handlers',
        B: 'It is only present on the drop target and not accessible from the drag source',
        C: 'It automatically serializes complex objects without developer intervention',
        D: 'It is a wrapper for navigator.clipboard during drag-and-drop'
      },
      correct: 'A',
      explanation: `DataTransfer holds data (and files) for the drag session; you populate it during dragstart and read it during drop. It does not automatically serialize arbitrary complex objects — you must set MIME-typed strings or files. It is available on both source and target events for the drag session.`,
      topics: ['drag-and-drop']
    },

    {
      id: 9,
      question:
        'When implementing a custom paste handler inside a contenteditable region to sanitize HTML, which API helps to read clipboard content as HTML if available?',
      options: {
        A: 'event.clipboardData.getData("text/html") inside paste handler',
        B: 'navigator.clipboard.readText() only provides text, not HTML',
        C: 'document.execCommand("getHTML")',
        D: 'There is no way to read HTML from the clipboard in the browser'
      },
      correct: 'A',
      explanation: `In paste event handlers you can inspect event.clipboardData and call getData("text/html") or getData("text/plain"). The asynchronous Clipboard API (navigator.clipboard.read()) can also provide richer clipboard items but requires permissions. document.execCommand("getHTML") is not a standard API for this use.`,
      topics: ['contenteditable']
    },

    {
      id: 10,
      question:
        'Which Geolocation option improves the chance of a faster callback but may return a cached position?',
      options: { A: 'enableHighAccuracy: true', B: 'maximumAge: 0', C: 'maximumAge: Infinity (allow cached)', D: 'timeout: 0' },
      correct: 'C',
      explanation: `maximumAge controls how old a cached position may be; allowing a large maximumAge (or Infinity) permits returning a cached position quickly. enableHighAccuracy requests a more accurate fix (may be slower), maximumAge:0 forces no cached result, and timeout controls how long to wait.`,
      topics: ['geolocation']
    },

    {
      id: 11,
      question: 'What will <pre>localStorage.removeItem(key)</pre> do if the key does not exist?',
      options: {
        A: 'Throw a ReferenceError',
        B: 'Do nothing (no error)',
        C: 'Clear all storage for the origin',
        D: 'Return false and leave storage untouched'
      },
      correct: 'B',
      explanation: `removeItem silently does nothing if the key is missing; it does not throw. Clearing all storage requires clear(), and removeItem does not return a boolean.`,
      topics: ['webstorage']
    },

    {
      id: 12,
      question: 'During dragover on a potential drop target, what must you do to allow dropping?',
      options: {
        A: 'Call event.preventDefault() in the dragover handler',
        B: 'Set the target element to contenteditable',
        C: 'Call event.stopPropagation()',
        D: 'Change the element’s draggable attribute to false'
      },
      correct: 'A',
      explanation: `To indicate that a drop is allowed, the dragover event must call preventDefault(); otherwise most browsers will disallow drop. stopPropagation is unrelated, contenteditable is unrelated, and changing draggable on the target is incorrect.`,
      topics: ['drag-and-drop']
    },

    {
      id: 13,
      question:
        'If you want to remember a UI preference (like dark mode) for a single window/tab only, which storage is most appropriate?',
      options: { A: 'localStorage', B: 'sessionStorage', C: 'Cookies with long expiry', D: 'IndexedDB (only for persistent settings)' },
      correct: 'B',
      explanation: `sessionStorage is scoped to a single top-level browsing context and lasts for that session/tab; it’s appropriate for per-tab UI state. localStorage persists across tabs and sessions. Cookies and IndexedDB have different trade-offs.`,
      topics: ['webstorage']
    },

    {
      id: 14,
      question:
        'Which element attribute or property should you check to see if a contenteditable element currently has focus and the caret inside it?',
      options: {
        A: 'document.activeElement === theElement (and check selection.rangeCount)',
        B: 'theElement.hasAttribute("focused")',
        C: 'theElement.contentEditable === "true" only',
        D: 'theElement.isContentSelected'
      },
      correct: 'A',
      explanation: `document.activeElement indicates the focused element. For caret or selection details you also inspect window.getSelection() and check rangeCount and whether the selection is within the element. There is no standard hasAttribute("focused") or isContentSelected property for this purpose.`,
      topics: ['contenteditable']
    },

    {
      id: 15,
      question:
        'When a page uses <pre>navigator.geolocation.watchPosition()</pre>, what must a developer do to avoid resource leaks?',
      options: {
        A: 'Call navigator.geolocation.clearWatch(id) when updates are no longer needed',
        B: 'Nothing — watchPosition stops automatically when the page is hidden',
        C: 'Call stop() on the returned Watcher object',
        D: 'Call navigator.geolocation.cancelWatch()'
      },
      correct: 'A',
      explanation: `watchPosition returns a watch ID that you pass to clearWatch(id) to stop updates. There is no returned Watcher object with a stop() method, and the API doesn’t auto-stop when the page is hidden unless you implement that behavior.`,
      topics: ['geolocation']
    },

    {
      id: 16,
      question:
        'Which approach is safest when storing user-generated HTML from a contenteditable region for later rendering?',
      options: {
        A: 'Store raw HTML and sanitize on output with a robust sanitizer',
        B: 'Trust the paste HTML and store it directly',
        C: 'Replace all tags with their entity-escaped equivalents and show as text',
        D: 'Remove text nodes and store only element names'
      },
      correct: 'A',
      explanation: `If you need to preserve formatting, sanitize on output with a well-maintained sanitizer to remove dangerous constructs (scripts, event handlers). Escaping to show as text loses formatting. Trusting raw HTML is unsafe.`,
      topics: ['contenteditable']
    },

    {
      id: 17,
      question: 'Which of these is a valid reason that localStorage.setItem may throw a QuotaExceededError?',
      options: {
        A: 'Storage quota exceeded for the origin (too much data stored)',
        B: 'The key name contains invalid characters (like <pre>\n</pre>)',
        C: 'Because localStorage is read-only and never allows writes',
        D: 'Because the origin is in the browser’s allowlist'
      },
      correct: 'A',
      explanation: `Browsers enforce storage quotas; attempting to store beyond the quota may throw QuotaExceededError. Key names may include many characters (they are strings), localStorage allows writes (subject to quota), and allowlists do not cause QuotaExceededError.`,
      topics: ['webstorage']
    },

    {
      id: 18,
      question:
        'To provide accessible drag-and-drop, which pattern is recommended alongside native drag events?',
      options: {
        A: 'Also provide keyboard alternatives and ARIA attributes to indicate draggable and droppable roles',
        B: 'Only support mouse users; ARIA is unnecessary',
        C: 'Wrap draggable elements in <pre>button</pre> elements to get keyboard support automatically',
        D: 'Use contenteditable instead of drag-and-drop'
      },
      correct: 'A',
      explanation: `Native drag-and-drop is not fully keyboard accessible by default; provide keyboard controls and ARIA roles/attributes for accessibility. Wrapping everything in buttons is not a general solution; thoughtful keyboard alternatives should be provided.`,
      topics: ['drag-and-drop']
    },

    {
      id: 19,
      question:
        'If you want a brief, non-translatable attribute applied to a small UI string (like an ID code), which markup is correct?',
      options: {
        A: '<pre>&lt;span translate="no"&gt;ID: 42&lt;/span&gt;</pre>',
        B: '<pre>&lt;span spellcheck="false"&gt;ID: 42&lt;/span&gt;</pre>',
        C: '<pre>&lt;span contenteditable="false"&gt;ID: 42&lt;/span&gt;</pre>',
        D: '<pre>&lt;span lang="en"&gt;ID: 42&lt;/span&gt;</pre>'
      },
      correct: 'A',
      explanation: `translate="no" explicitly indicates the content should not be translated by machine translation. spellcheck affects spell check, contenteditable affects editability, and lang suggests language but does not prevent translation.`,
      topics: ['translate']
    },

    {
      id: 20,
      question:
        'Which combination correctly prevents the default file-opening behavior on a drop and reads files using the DataTransfer object?',
      options: {
        A: 'Call event.preventDefault() in dragover and drop handlers, then use event.dataTransfer.files in drop',
        B: 'Only preventDefault in dragstart, then read files from navigator.files',
        C: 'Set draggable=false on the target to allow file reads',
        D: 'Use localStorage to store the File objects directly'
      },
      correct: 'A',
      explanation: `To accept files via drop, preventDefault during dragover and drop so the browser doesn’t open the file, and then read event.dataTransfer.files in the drop handler. There’s no navigator.files API and File objects cannot be stored directly in localStorage.`,
      topics: ['drag-and-drop']
    },

    {
      id: 21,
      question:
        'What is a common pitfall when storing numeric data in localStorage and later reading it back?',
      options: {
        A: 'localStorage stores values as strings, so you must parseInt/parseFloat when reading numbers back',
        B: 'Numbers are stored with higher precision in localStorage',
        C: 'A numeric key will be auto-converted to a number when read',
        D: 'localStorage preserves type information (no conversion needed)'
      },
      correct: 'A',
      explanation: `localStorage stores only strings. To preserve numeric semantics you need to convert when writing (e.g., JSON.stringify) and parse when reading, or store via JSON methods. It does not preserve original JS types implicitly.`,
      topics: ['webstorage']
    },

    {
      id: 22,
      question:
        'Which event sequence is typical when dragging a draggable element over a valid drop target and then dropping it?',
      options: {
        A: 'dragstart → dragenter → dragover → drop → dragend',
        B: 'dragstart → drop → dragenter → dragover → dragend',
        C: 'dragstart → drag → drop → dragend → dragover',
        D: 'dragstart → dragend → drop'
      },
      correct: 'A',
      explanation: `The usual sequence is dragstart on the source, then dragenter/dragover as the pointer moves over targets, drop on the target when released, and dragend on the source when the operation finishes.`,
      topics: ['drag-and-drop']
    },

    {
      id: 23,
      question:
        'If you need to remember a last-known position from the Geolocation API and allow offline use, which pattern is suitable?',
      options: {
        A: 'Store the position object (latitude/longitude/timestamp) in localStorage or IndexedDB and use it when offline',
        B: 'Rely on navigator.geolocation.getCurrentPosition even when offline',
        C: 'Store the Position object directly in sessionStorage without serialization',
        D: 'Write the position into a cookie with large expiry'
      },
      correct: 'A',
      explanation: `Persisting a serialized position in localStorage or IndexedDB lets you reuse the last-known coordinates offline. getCurrentPosition cannot obtain fresh GPS fixes offline if the device lacks connectivity or hardware fix. You must serialize objects before storing in Web Storage. Cookies are not ideal for structured binary data and have size limits.`,
      topics: ['geolocation', 'webstorage']
    },

    {
      id: 24,
      question:
        'Which attribute is recommended to make an element explicitly indicate it is draggable to assistive technologies?',
      options: {
        A: 'role="option"',
        B: 'aria-grabbed (or set aria-dropeffect when appropriate) alongside draggable',
        C: 'translate="no"',
        D: 'contenteditable="true"'
      },
      correct: 'B',
      explanation: `Use ARIA attributes like aria-grabbed or dropeffect in combination with draggable to improve accessibility. Role option is not specific to dragging, translate is for translation, and contenteditable changes editability, not drag semantics.`,
      topics: ['drag-and-drop']
    },

    {
      id: 25,
      question:
        'When using the programmatic Clipboard API to write rich content, which permission or feature support is typically required?',
      options: {
        A: 'User gesture and secure context (HTTPS); some clipboard writes require explicit permission',
        B: 'No permission is ever required for clipboard writes',
        C: 'Clipboard writes only work in contenteditable elements',
        D: 'Clipboard API is available only in service workers'
      },
      correct: 'A',
      explanation: `The asynchronous Clipboard API generally requires a user gesture and secure context. Some writes may prompt permission; behavior differs across browsers. It’s not unconditional, nor is it limited to contenteditable or service workers.`,
      topics: ['contenteditable', 'drag-and-drop']
    }
  ]
};
module.exports = {
  metadata: {
    title: 'HTML5 APIs Integration II',
    description:
      'Integration scenarios and practical behaviours for common HTML5 web platform APIs: Geolocation, Web Storage (local/sessionStorage), Drag-and-Drop, contenteditable, spellcheck, and the translate attribute.',
    difficulty: 'medium',
    domain: 'html',
    timeLimit: 45,
    questionCount: 25,
    topics: ['geolocation', 'webstorage', 'drag-and-drop', 'contenteditable', 'spellcheck', 'translate'],
    topicLinks: [
      { topicName: 'geolocation', refLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API' },
      { topicName: 'webstorage', refLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API' },
      { topicName: 'drag-and-drop', refLink: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API' },
      { topicName: 'contenteditable', refLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable' },
      { topicName: 'spellcheck', refLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck' },
      { topicName: 'translate', refLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate' }
    ],
    assessmentId: 10,
    assessmentUniqueId: 1762992215541,
    testType: 'multiple-choice'
  },

  questions: [
    {
      id: 1,
      question:
        'When calling the Geolocation API with <pre>navigator.geolocation.getCurrentPosition(success, error)</pre>, which of the following is true about the error callback?',
      options: {
        A: 'It is always called if the user denies permission; the PositionError code will indicate PERMISSION_DENIED.',
        B: 'It is only called when the device cannot acquire a fix; permission denial does not trigger it.',
        C: 'It will be called only on HTTPS pages; on HTTP pages the success callback is called with null.',
        D: 'It is deprecated in modern browsers and replaced by Promise-based geolocation.'
      },
      correct: 'A',
      explanation: `When a user denies permission the error callback is invoked with a PositionError (PERMISSION_DENIED). The Geolocation API still uses callbacks (or the newer Promise wrapper you can write), and it does not return success on HTTP pages — permissions and secure contexts are separate concerns. The device failing to get a fix will also call the error callback but with a different code (POSITION_UNAVAILABLE).`,
      topics: ['geolocation']
    },

    {
      id: 2,
      question: 'Which storage facility persists across browser sessions until explicitly cleared by script or user?',
      options: {
        A: 'sessionStorage',
        B: 'localStorage',
        C: 'IndexedDB only (Web Storage is temporary)',
        D: 'Neither; both are cleared when the browser closes'
      },
      correct: 'B',
      explanation: `localStorage persists across browser sessions for the same origin until removed by script or user action. sessionStorage is bound to a single top-level browsing context and is cleared when that context ends (e.g., closing a tab). IndexedDB also persists, but the question asked specifically about Web Storage facilities.`,
      topics: ['webstorage']
    },

    {
      id: 3,
      question:
        'Given an element with <pre>draggable="true"</pre>, which event is fired on the drag source when the drag operation completes (success or not)?',
      options: { A: 'dragend', B: 'drop', C: 'dragfinish', D: 'dragstop' },
      correct: 'A',
      explanation: `The dragend event fires on the source element when a drag operation finishes, whether the drop succeeded or was canceled. The drop event fires on the drop target, not on the source. There is no standard dragfinish or dragstop event.`,
      topics: ['drag-and-drop']
    },

    {
      id: 4,
      question:
        'If an element has <pre>contenteditable="true"</pre>, which of the following is true about the element’s child nodes after user edits?',
      options: {
        A: 'The browser always preserves the original element structure and only replaces text nodes',
        B: 'User edits may insert, remove, or restructure DOM nodes (e.g., <pre>&lt;br&gt;</pre>, <pre>&lt;div&gt;</pre>), so scripts should handle DOM normalization',
        C: 'contenteditable only allows plain-text edits; inline tags cannot be inserted',
        D: 'contenteditable automatically sanitizes HTML to prevent any new elements'
      },
      correct: 'B',
      explanation: `Editable regions are direct DOM-editable; users and the browser can insert new nodes (line breaks, inline formatting elements, pasted HTML). Scripts should account for this and normalize or sanitize as needed. contenteditable does not restrict edits to plain text nor does it guarantee sanitization.`,
      topics: ['contenteditable']
    },

    {
      id: 5,
      question: 'Which attribute or property tells the browser not to spellcheck a particular editable region?',
      options: {
        A: '<pre>spellcheck="false"</pre> (attribute) or element.spellcheck = false',
        B: '<pre>contenteditable="false"</pre> disables spellcheck',
        C: 'Add <pre>translate="no"</pre> to the element',
        D: 'Use CSS property <pre>user-select: none</pre>'
      },
      correct: 'A',
      explanation: `The spellcheck attribute controls whether the browser should check spelling for the element. Setting <pre>spellcheck="false"</pre> or element.spellcheck = false disables spellchecking. contenteditable controls editability, translate controls machine translation hints, and user-select is unrelated.`,
      topics: ['spellcheck']
    },

    {
      id: 6,
      question:
        'The global attribute <pre>translate="no"</pre> on an element signals what to translation engines?',
      options: {
        A: 'That the content should not be machine-translated',
        B: 'That the content must be translated',
        C: 'Only affects built-in browser spellchecking',
        D: 'Replaces the lang attribute for translation detection'
      },
      correct: 'A',
      explanation: `translate="no" hints to user agents and translation tools that the content is not intended to be translated. It does not force translation, affect spellchecking directly, nor replaces lang. Tools may respect or ignore the hint, but it's the correct semantic way to mark untranslatable fragments.`,
      topics: ['translate']
    },

    {
      id: 7,
      question:
        'A script stores a settings object with <pre>localStorage.setItem("cfg", JSON.stringify(obj))</pre>. What happens when the user has disabled third-party cookies/storage for the site?',
      options: {
        A: 'localStorage still works because it is same-origin storage, independent of third-party cookie settings',
        B: 'localStorage is blocked whenever any cookie setting is disabled',
        C: 'localStorage becomes temporary and is cleared on tab close',
        D: 'localStorage writes silently fail and throw a SecurityError'
      },
      correct: 'A',
      explanation: `localStorage is origin-scoped. Disabling third-party cookies/storage affects cross-origin frames and third-party contexts; same-origin localStorage typically continues to work. Some privacy modes and strict blockers can affect localStorage behavior, but by spec localStorage is same-origin and not globally tied to cookie flags.`,
      topics: ['webstorage']
    },

    {
      id: 8,
      question:
        'Which of the following best describes the DataTransfer object during a drag operation?',
      options: {
        A: 'It contains a set of key/value pairs representing data being transferred and is used on dragstart/drop handlers',
        B: 'It is only present on the drop target and not accessible from the drag source',
        C: 'It automatically serializes complex objects without developer intervention',
        D: 'It is a wrapper for navigator.clipboard during drag-and-drop'
      },
      correct: 'A',
      explanation: `DataTransfer holds data (and files) for the drag session; you populate it during dragstart and read it during drop. It does not automatically serialize arbitrary complex objects — you must set MIME-typed strings or files. It is available on both source and target events for the drag session.`,
      topics: ['drag-and-drop']
    },

    {
      id: 9,
      question:
        'When implementing a custom paste handler inside a contenteditable region to sanitize HTML, which API helps to read clipboard content as HTML if available?',
      options: {
        A: 'event.clipboardData.getData("text/html") inside paste handler',
        B: 'navigator.clipboard.readText() only provides text, not HTML',
        C: 'document.execCommand("getHTML")',
        D: 'There is no way to read HTML from the clipboard in the browser'
      },
      correct: 'A',
      explanation: `In paste event handlers you can inspect event.clipboardData and call getData("text/html") or getData("text/plain"). The asynchronous Clipboard API (navigator.clipboard.read()) can also provide richer clipboard items but requires permissions. document.execCommand("getHTML") is not a standard API for this use.`,
      topics: ['contenteditable']
    },

    {
      id: 10,
      question:
        'Which Geolocation option improves the chance of a faster callback but may return a cached position?',
      options: { A: 'enableHighAccuracy: true', B: 'maximumAge: 0', C: 'maximumAge: Infinity (allow cached)', D: 'timeout: 0' },
      correct: 'C',
      explanation: `maximumAge controls how old a cached position may be; allowing a large maximumAge (or Infinity) permits returning a cached position quickly. enableHighAccuracy requests a more accurate fix (may be slower), maximumAge:0 forces no cached result, and timeout controls how long to wait.`,
      topics: ['geolocation']
    },

    {
      id: 11,
      question: 'What will <pre>localStorage.removeItem(key)</pre> do if the key does not exist?',
      options: {
        A: 'Throw a ReferenceError',
        B: 'Do nothing (no error)',
        C: 'Clear all storage for the origin',
        D: 'Return false and leave storage untouched'
      },
      correct: 'B',
      explanation: `removeItem silently does nothing if the key is missing; it does not throw. Clearing all storage requires clear(), and removeItem does not return a boolean.`,
      topics: ['webstorage']
    },

    {
      id: 12,
      question: 'During dragover on a potential drop target, what must you do to allow dropping?',
      options: {
        A: 'Call event.preventDefault() in the dragover handler',
        B: 'Set the target element to contenteditable',
        C: 'Call event.stopPropagation()',
        D: 'Change the element’s draggable attribute to false'
      },
      correct: 'A',
      explanation: `To indicate that a drop is allowed, the dragover event must call preventDefault(); otherwise most browsers will disallow drop. stopPropagation is unrelated, contenteditable is unrelated, and changing draggable on the target is incorrect.`,
      topics: ['drag-and-drop']
    },

    {
      id: 13,
      question:
        'If you want to remember a UI preference (like dark mode) for a single window/tab only, which storage is most appropriate?',
      options: { A: 'localStorage', B: 'sessionStorage', C: 'Cookies with long expiry', D: 'IndexedDB (only for persistent settings)' },
      correct: 'B',
      explanation: `sessionStorage is scoped to a single top-level browsing context and lasts for that session/tab; it’s appropriate for per-tab UI state. localStorage persists across tabs and sessions. Cookies and IndexedDB have different trade-offs.`,
      topics: ['webstorage']
    },

    {
      id: 14,
      question:
        'Which element attribute or property should you check to see if a contenteditable element currently has focus and the caret inside it?',
      options: {
        A: 'document.activeElement === theElement (and check selection.rangeCount)',
        B: 'theElement.hasAttribute("focused")',
        C: 'theElement.contentEditable === "true" only',
        D: 'theElement.isContentSelected'
      },
      correct: 'A',
      explanation: `document.activeElement indicates the focused element. For caret or selection details you also inspect window.getSelection() and check rangeCount and whether the selection is within the element. There is no standard hasAttribute("focused") or isContentSelected property for this purpose.`,
      topics: ['contenteditable']
    },

    {
      id: 15,
      question:
        'When a page uses <pre>navigator.geolocation.watchPosition()</pre>, what must a developer do to avoid resource leaks?',
      options: {
        A: 'Call navigator.geolocation.clearWatch(id) when updates are no longer needed',
        B: 'Nothing — watchPosition stops automatically when the page is hidden',
        C: 'Call stop() on the returned Watcher object',
        D: 'Call navigator.geolocation.cancelWatch()'
      },
      correct: 'A',
      explanation: `watchPosition returns a watch ID that you pass to clearWatch(id) to stop updates. There is no returned Watcher object with a stop() method, and the API doesn’t auto-stop when the page is hidden unless you implement that behavior.`,
      topics: ['geolocation']
    },

    {
      id: 16,
      question:
        'Which approach is safest when storing user-generated HTML from a contenteditable region for later rendering?',
      options: {
        A: 'Store raw HTML and sanitize on output with a robust sanitizer',
        B: 'Trust the paste HTML and store it directly',
        C: 'Replace all tags with their entity-escaped equivalents and show as text',
        D: 'Remove text nodes and store only element names'
      },
      correct: 'A',
      explanation: `If you need to preserve formatting, sanitize on output with a well-maintained sanitizer to remove dangerous constructs (scripts, event handlers). Escaping to show as text loses formatting. Trusting raw HTML is unsafe.`,
      topics: ['contenteditable']
    },

    {
      id: 17,
      question: 'Which of these is a valid reason that localStorage.setItem may throw a QuotaExceededError?',
      options: {
        A: 'Storage quota exceeded for the origin (too much data stored)',
        B: 'The key name contains invalid characters (like <pre>\n</pre>)',
        C: 'Because localStorage is read-only and never allows writes',
        D: 'Because the origin is in the browser’s allowlist'
      },
      correct: 'A',
      explanation: `Browsers enforce storage quotas; attempting to store beyond the quota may throw QuotaExceededError. Key names may include many characters (they are strings), localStorage allows writes (subject to quota), and allowlists do not cause QuotaExceededError.`,
      topics: ['webstorage']
    },

    {
      id: 18,
      question:
        'To provide accessible drag-and-drop, which pattern is recommended alongside native drag events?',
      options: {
        A: 'Also provide keyboard alternatives and ARIA attributes to indicate draggable and droppable roles',
        B: 'Only support mouse users; ARIA is unnecessary',
        C: 'Wrap draggable elements in <pre>button</pre> elements to get keyboard support automatically',
        D: 'Use contenteditable instead of drag-and-drop'
      },
      correct: 'A',
      explanation: `Native drag-and-drop is not fully keyboard accessible by default; provide keyboard controls and ARIA roles/attributes for accessibility. Wrapping everything in buttons is not a general solution; thoughtful keyboard alternatives should be provided.`,
      topics: ['drag-and-drop']
    },

    {
      id: 19,
      question:
        'If you want a brief, non-translatable attribute applied to a small UI string (like an ID code), which markup is correct?',
      options: {
        A: '<pre>&lt;span translate="no"&gt;ID: 42&lt;/span&gt;</pre>',
        B: '<pre>&lt;span spellcheck="false"&gt;ID: 42&lt;/span&gt;</pre>',
        C: '<pre>&lt;span contenteditable="false"&gt;ID: 42&lt;/span&gt;</pre>',
        D: '<pre>&lt;span lang="en"&gt;ID: 42&lt;/span&gt;</pre>'
      },
      correct: 'A',
      explanation: `translate="no" explicitly indicates the content should not be translated by machine translation. spellcheck affects spell check, contenteditable affects editability, and lang suggests language but does not prevent translation.`,
      topics: ['translate']
    },

    {
      id: 20,
      question:
        'Which combination correctly prevents the default file-opening behavior on a drop and reads files using the DataTransfer object?',
      options: {
        A: 'Call event.preventDefault() in dragover and drop handlers, then use event.dataTransfer.files in drop',
        B: 'Only preventDefault in dragstart, then read files from navigator.files',
        C: 'Set draggable=false on the target to allow file reads',
        D: 'Use localStorage to store the File objects directly'
      },
      correct: 'A',
      explanation: `To accept files via drop, preventDefault during dragover and drop so the browser doesn’t open the file, and then read event.dataTransfer.files in the drop handler. There’s no navigator.files API and File objects cannot be stored directly in localStorage.`,
      topics: ['drag-and-drop']
    },

    {
      id: 21,
      question:
        'What is a common pitfall when storing numeric data in localStorage and later reading it back?',
      options: {
        A: 'localStorage stores values as strings, so you must parseInt/parseFloat when reading numbers back',
        B: 'Numbers are stored with higher precision in localStorage',
        C: 'A numeric key will be auto-converted to a number when read',
        D: 'localStorage preserves type information (no conversion needed)'
      },
      correct: 'A',
      explanation: `localStorage stores only strings. To preserve numeric semantics you need to convert when writing (e.g., JSON.stringify) and parse when reading, or store via JSON methods. It does not preserve original JS types implicitly.`,
      topics: ['webstorage']
    },

    {
      id: 22,
      question:
        'Which event sequence is typical when dragging a draggable element over a valid drop target and then dropping it?',
      options: {
        A: 'dragstart → dragenter → dragover → drop → dragend',
        B: 'dragstart → drop → dragenter → dragover → dragend',
        C: 'dragstart → drag → drop → dragend → dragover',
        D: 'dragstart → dragend → drop'
      },
      correct: 'A',
      explanation: `The usual sequence is dragstart on the source, then dragenter/dragover as the pointer moves over targets, drop on the target when released, and dragend on the source when the operation finishes.`,
      topics: ['drag-and-drop']
    },

    {
      id: 23,
      question:
        'If you need to remember a last-known position from the Geolocation API and allow offline use, which pattern is suitable?',
      options: {
        A: 'Store the position object (latitude/longitude/timestamp) in localStorage or IndexedDB and use it when offline',
        B: 'Rely on navigator.geolocation.getCurrentPosition even when offline',
        C: 'Store the Position object directly in sessionStorage without serialization',
        D: 'Write the position into a cookie with large expiry'
      },
      correct: 'A',
      explanation: `Persisting a serialized position in localStorage or IndexedDB lets you reuse the last-known coordinates offline. getCurrentPosition cannot obtain fresh GPS fixes offline if the device lacks connectivity or hardware fix. You must serialize objects before storing in Web Storage. Cookies are not ideal for structured binary data and have size limits.`,
      topics: ['geolocation', 'webstorage']
    },

    {
      id: 24,
      question:
        'Which attribute is recommended to make an element explicitly indicate it is draggable to assistive technologies?',
      options: {
        A: 'role="option"',
        B: 'aria-grabbed (or set aria-dropeffect when appropriate) alongside draggable',
        C: 'translate="no"',
        D: 'contenteditable="true"'
      },
      correct: 'B',
      explanation: `Use ARIA attributes like aria-grabbed or dropeffect in combination with draggable to improve accessibility. Role option is not specific to dragging, translate is for translation, and contenteditable changes editability, not drag semantics.`,
      topics: ['drag-and-drop']
    },

    {
      id: 25,
      question:
        'When using the programmatic Clipboard API to write rich content, which permission or feature support is typically required?',
      options: {
        A: 'User gesture and secure context (HTTPS); some clipboard writes require explicit permission',
        B: 'No permission is ever required for clipboard writes',
        C: 'Clipboard writes only work in contenteditable elements',
        D: 'Clipboard API is available only in service workers'
      },
      correct: 'A',
      explanation: `The asynchronous Clipboard API generally requires a user gesture and secure context. Some writes may prompt permission; behavior differs across browsers. It’s not unconditional, nor is it limited to contenteditable or service workers.`,
      topics: ['contenteditable', 'drag-and-drop']
    },

    {
      id: 26,
      question:
        'Which of the following best describes using translate attribute for machine translation fallbacks?',
      options: {
        A: 'translate="no" prevents automatic machine translation of that element’s content',
        B: 'translate="yes" will automatically translate the content without user choice',
        C: 'translate attribute only affects server-side translation',
        D: 'translate attribute switches the text direction'
      },
      correct: 'A',
      explanation: `translate="no" is a hint that user agents and translation tools should not translate the element’s content. It doesn’t force translation and doesn’t affect text direction.`,
      topics: ['translate']
    }
  ]
};
