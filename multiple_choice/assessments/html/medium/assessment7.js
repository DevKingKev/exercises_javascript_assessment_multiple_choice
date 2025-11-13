module.exports = {
  "metadata": {
    "title": "HTML data-* Attributes: Usage and Best Practices",
    "description": "Medium-level questions about custom data attributes, accessing them via JavaScript and CSS selectors, JSON usage, and recommended naming conventions.",
    "difficulty": "medium",
    "domain": "html",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "data-* attributes",
      "DOM dataset API",
      "CSS attribute selectors",
      "Progressive enhancement",
      "Best practices"
    ],
    "topicLinks": [
      {
        "topicName": "data-* attributes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes"
      },
      {
        "topicName": "DOM dataset API",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset"
      },
      {
        "topicName": "CSS attribute selectors",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
      },
      {
        "topicName": "Progressive enhancement",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Progressive_enhancement"
      },
      {
        "topicName": "Best practices",
        "refLink": "https://developer.mozilla.org/"
      }
    ],
    "assessmentId": 7,
    "assessmentUniqueId": 1762975387077,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "Which of the following is the correct syntax to add a custom data attribute to an element in HTML?",
      "options": {
        "A": "<pre>data_user-id=\"123\"</pre>",
        "B": "<pre>user-data-id=\"123\"</pre>",
        "C": "<pre>data:user-id=\"123\"</pre>",
        "D": "<pre>data-user-id=\"123\"</pre>"
      },
      "correct": "D",
      "explanation": "Custom data attributes must begin with the prefix 'data-' followed by a name. Hyphens are allowed in the attribute name. The attribute name must not contain uppercase letters or colons. Using <pre>data-user-id=\"123\"</pre> is the correct HTML syntax.",
      "topic": {
        "topics": [
          "data-* attributes"
        ]
      }
    },
    {
      "id": 2,
      "question": "Given <pre><div id=\"item\" data-user-id=\"42\"></div></pre>, which JavaScript expression correctly reads the custom attribute via the dataset API?",
      "options": {
        "A": "<pre>document.getElementById('item').getAttribute('user-id')</pre>",
        "B": "<pre>document.getElementById('item').dataset.userId</pre>",
        "C": "<pre>document.getElementById('item').dataset['data-user-id']</pre>",
        "D": "<pre>document.getElementById('item').data.user-id</pre>"
      },
      "correct": "B",
      "explanation": "The DOM’s dataset maps hyphenated data attribute names to camelCase properties. <pre>data-user-id</pre> becomes <pre>dataset.userId</pre>. While <pre>getAttribute('data-user-id')</pre> also works, option A shows the dataset API which is concise and recommended.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 3,
      "question": "Which CSS selector matches elements that have any data-* attribute regardless of name?",
      "options": {
        "A": "<pre>[data-*]</pre>",
        "B": "<pre>[data-]</pre>",
        "C": "<pre>[data^=\"\"]</pre>",
        "D": "<pre>[^data-]</pre>"
      },
      "correct": "B",
      "explanation": "There is no single CSS selector that directly matches ‘any’ data-* attribute name via a wildcard in the attribute name. The practical approach is to target specific attribute names such as <pre>[data-role]</pre> or use a common prefix (in CSS you cannot match attribute name prefixes). Because none of the exotic forms are valid, the most portable approach is to use explicit attribute names (for example <pre>[data-state]</pre>).",
      "topic": {
        "topics": [
          "CSS attribute selectors"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which CSS selector matches elements where data-state exactly equals 'active'?",
      "options": {
        "A": "<pre>[data-state~=\"active\"]</pre>",
        "B": "<pre>[data-state=\"active\"]</pre>",
        "C": "<pre>[data-state*=\"active\"]</pre>",
        "D": "<pre>.[data-state=active]</pre>"
      },
      "correct": "B",
      "explanation": "The exact-match attribute selector uses the equals sign: <pre>[data-state=\"active\"]</pre>. The ~= selector matches whitespace-separated words, *= is substring match. Option C is the correct exact match selector.",
      "topic": {
        "topics": [
          "CSS attribute selectors"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which of the following is the correct mapping used by the dataset API for <pre>data-user-role</pre>?",
      "options": {
        "A": "<pre>dataset.userRole</pre>",
        "B": "<pre>dataset.user-role</pre>",
        "C": "<pre>dataset.dataUserRole</pre>",
        "D": "<pre>dataset.user_role</pre>"
      },
      "correct": "A",
      "explanation": "Hyphenated data- attribute names are converted to camelCase when accessed via <pre>element.dataset</pre>. Therefore, <pre>data-user-role</pre> becomes <pre>dataset.userRole</pre>. This is the standardized mapping used by browsers.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which approach is safest when storing JSON in a data attribute?",
      "options": {
        "A": "<pre><div data-info='{\"a\":1}'></div></pre>",
        "B": "<pre>URL-encode or HTML-escape the JSON string before placing it into the attribute</pre>",
        "C": "<pre><div data-info=\"{\\\"a\\\":1}\"></div></pre>",
        "D": "<pre>Place raw JavaScript object into attribute using JSON object literal</pre>"
      },
      "correct": "B",
      "explanation": "Raw JSON inside attributes can break HTML parsing due to quotes and characters. Best practice is to JSON.stringify the object, then either HTML-escape or URL-encode the string when embedding in an attribute. On read, decode/unescape and JSON.parse. This prevents accidental attribute termination or XSS injection.",
      "topic": {
        "topics": [
          "JSON in data attributes",
          "Best practices"
        ]
      }
    },
    {
      "id": 7,
      "question": "Which JavaScript pattern correctly reads a JSON payload from a data attribute named data-config and parses it, guarding against parse errors?",
      "options": {
        "A": "<pre>const cfg = JSON.parse(decodeURIComponent(elem.getAttribute('data-config')));</pre>",
        "B": "<pre>const cfg = JSON.parse(elem.dataset.config);</pre>",
        "C": "<pre>const cfg = eval(elem.getAttribute('data-config'));</pre>",
        "D": "<pre>const cfg = elem.dataset.config;</pre>"
      },
      "correct": "A",
      "explanation": "If the JSON was URL-encoded when written into the attribute, decoding first is necessary. Option B shows a safe pattern: read the attribute string, decode it, and then JSON.parse. Option A may fail if the string contains unescaped quotes; Option C (eval) is unsafe and should be avoided; Option D leaves the string unparsed.",
      "topic": {
        "topics": [
          "JSON in data attributes",
          "Security"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which use case is NOT a recommended reason to use data-* attributes?",
      "options": {
        "A": "<pre>Storing small configuration data for progressive enhancement</pre>",
        "B": "<pre>Holding transient UI state for JavaScript to read</pre>",
        "C": "<pre>Using attributes as test hooks for automated UI tests</pre>",
        "D": "<pre>Storing large sensitive secrets like API keys</pre>"
      },
      "correct": "D",
      "explanation": "Data attributes are visible to client-side JavaScript and any user who views source; they must never hold secrets like API keys or passwords. They are fine for small config, UI hints, or test selectors, but sensitive information should be kept on the server or in secure storage.",
      "topic": {
        "topics": [
          "Use cases for custom data attributes"
        ]
      }
    },
    {
      "id": 9,
      "question": "Which is the best practice naming convention for namespacing data attributes to avoid collisions?",
      "options": {
        "A": "<pre>data-user-id</pre>",
        "B": "<pre>data-analytics-user-id</pre>",
        "C": "<pre>data-id</pre>",
        "D": "<pre>data-UserId</pre>"
      },
      "correct": "B",
      "explanation": "Using a clear, descriptive namespace like <pre>data-analytics-user-id</pre> reduces the chance of collisions with other code and makes the intent clear. Avoid overly generic names like <pre>data-id</pre>. Attribute names should be lowercase and hyphen-separated (kebab-case).",
      "topic": {
        "topics": [
          "Best practices",
          "Naming conventions"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which method improves performance when you need to query many elements by a data attribute repeatedly?",
      "options": {
        "A": "<pre>Call document.querySelectorAll('[data-role=\"item\"]') each time</pre>",
        "B": "<pre>Cache the NodeList or elements collection and reuse it</pre>",
        "C": "<pre>Use getElementsByTagName('*')</pre>",
        "D": "<pre>Read innerHTML and parse elements manually</pre>"
      },
      "correct": "B",
      "explanation": "Performing DOM queries repeatedly is costly. Cache the result of <pre>querySelectorAll</pre> (or better, maintain your own data structure) and reuse it. If the DOM changes, update the cache incrementally. This reduces layout thrashing and repeated selector cost.",
      "topic": {
        "topics": [
          "Best practices",
          "Performance"
        ]
      }
    },
    {
      "id": 11,
      "question": "Consider <pre><button data-action=\"save\">Save</button></pre>. Which event-delegation pattern efficiently handles clicks for many buttons without attaching listeners to each?",
      "options": {
        "A": "<pre>document.body.addEventListener('click', (e) =&gt; { const btn = e.target.closest('[data-action]'); if (btn) handle(btn.dataset.action); });</pre>",
        "B": "<pre>document.querySelectorAll('button').forEach(b => b.addEventListener('click', onClick))</pre>",
        "C": "<pre>Use inline onclick attributes calling global functions</pre>",
        "D": "<pre>Attach capture-phase listeners to every parent element</pre>"
      },
      "correct": "A",
      "explanation": "Event delegation on a common ancestor (like document.body) with <pre>closest('[data-action]')</pre> is efficient and scales well. It avoids attaching many listeners and works for dynamically added buttons.",
      "topic": {
        "topics": [
          "Use cases for custom data attributes",
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which statement about using dataset vs getAttribute is true?",
      "options": {
        "A": "<pre>dataset preserves original attribute casing and punctuation</pre>",
        "B": "<pre>dataset automatically parses JSON into objects</pre>",
        "C": "<pre>getAttribute returns values as strings; dataset provides camelCase properties</pre>",
        "D": "<pre>getAttribute is faster than dataset in all browsers</pre>"
      },
      "correct": "C",
      "explanation": "<pre>getAttribute</pre> returns the raw attribute string; <pre>dataset</pre> exposes a camelCased property mapping for hyphenated data attributes. Neither API automatically parses JSON; parsing must be done explicitly. Performance differences are minor and browser-dependent.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 13,
      "question": "Which CSS attribute selector matches elements whose data-id starts with 'user-'?",
      "options": {
        "A": "<pre>[data-id^=\"user-\"]</pre>",
        "B": "<pre>[data-id$=\"user-\"]</pre>",
        "C": "<pre>[data-id*=\"user-\"]</pre>",
        "D": "<pre>.[data-id^=user-]</pre>"
      },
      "correct": "A",
      "explanation": "The ^= selector matches a prefix: <pre>[data-id^=\"user-\"]</pre> selects elements whose data-id begins with 'user-'. The $= is suffix, *= is substring. Use proper quoting in CSS selectors.",
      "topic": {
        "topics": [
          "CSS attribute selectors"
        ]
      }
    },
    {
      "id": 14,
      "question": "Why might you avoid storing large complex JSON structures directly in data attributes?",
      "options": {
        "A": "<pre>Because attributes can only store numbers</pre>",
        "B": "<pre>Large attributes bloat HTML and increase parsing time</pre>",
        "C": "<pre>Browsers reject attributes longer than 100 characters</pre>",
        "D": "<pre>dataset automatically compresses values which is lossy</pre>"
      },
      "correct": "B",
      "explanation": "Embedding large JSON in attributes increases HTML size, slows parsing, and can make markup harder to maintain. Prefer lightweight identifiers in attributes and load larger data via XHR/fetch or reference a separate JSON resource.",
      "topic": {
        "topics": [
          "JSON in data attributes",
          "Performance"
        ]
      }
    },
    {
      "id": 15,
      "question": "Which pattern helps avoid accidental collisions when multiple libraries use data attributes on the same page?",
      "options": {
        "A": "<pre>Use a vendor or feature prefix, e.g., data-app-slider-index</pre>",
        "B": "<pre>Use very short names like data-x</pre>",
        "C": "<pre>Rely on global variables instead of attributes</pre>",
        "D": "<pre>Use inline styles to carry data instead</pre>"
      },
      "correct": "A",
      "explanation": "Namespacing with prefixes (for example, <pre>data-app-*</pre> or <pre>data-analytics-*</pre>) reduces collisions between libraries and makes the purpose of the attribute clear. Avoid overly generic names or using styling attributes to carry data.",
      "topic": {
        "topics": [
          "Best practices",
          "Naming conventions"
        ]
      }
    },
    {
      "id": 16,
      "question": "How does the browser expose the attribute value for <pre><div data-user='\"Alice\"'></div></pre> via dataset?",
      "options": {
        "A": "<pre>dataset.user === '\"Alice\"'</pre>",
        "B": "<pre>dataset.user === undefined</pre>",
        "C": "<pre>dataset.user === \"Alice\" (with escaped quotes)</pre>",
        "D": "<pre>dataset.user === 'Alice'</pre>"
      },
      "correct": "D",
      "explanation": "Attribute values are strings without surrounding quotes when accessed from JavaScript. The browser strips the HTML attribute quoting; normally you would write <pre>data-user=\"Alice\"</pre> and read <pre>dataset.user === 'Alice'</pre>.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 17,
      "question": "Which statement about binding data attributes and accessibility is correct?",
      "options": {
        "A": "<pre>data-* attributes are automatically announced by screen readers</pre>",
        "B": "<pre>data-* attributes are required for semantic HTML</pre>",
        "C": "<pre>Use ARIA attributes for accessibility rather than relying on data-* for conveying important info</pre>",
        "D": "<pre>data-* attributes set role attributes automatically</pre>"
      },
      "correct": "C",
      "explanation": "Data attributes are for authors and scripts, not for accessibility. Important information for assistive technologies should be conveyed using semantic markup or ARIA attributes. Use data-* for JavaScript hooks and non-essential metadata.",
      "topic": {
        "topics": [
          "Best practices",
          "Accessibility"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which of these is a valid reason to use a data attribute as a test hook?",
      "options": {
        "A": "<pre>Because it is guaranteed never to change</pre>",
        "B": "<pre>It improves production performance</pre>",
        "C": "<pre>It separates test selectors from CSS classes, making styling refactors safer</pre>",
        "D": "<pre>Browsers optimize data attributes for testing</pre>"
      },
      "correct": "C",
      "explanation": "Using dedicated data attributes (for example <pre>data-test-id</pre>) for tests decouples test hooks from CSS classes that might change during styling refactors. They provide stable selectors for automated tests without affecting presentation.",
      "topic": {
        "topics": [
          "Use cases for custom data attributes",
          "Testing"
        ]
      }
    },
    {
      "id": 19,
      "question": "Consider server-side rendering (SSR) with hydration on the client. Which practice helps keep data attributes consistent across server and client?",
      "options": {
        "A": "<pre>Mutate data attributes on first client render freely</pre>",
        "B": "<pre>Use dataset to generate attribute names at runtime</pre>",
        "C": "<pre>Remove all data attributes during server rendering</pre>",
        "D": "<pre>Emit identical data-* attribute values from the server and avoid DOM-only mutations before hydration</pre>"
      },
      "correct": "D",
      "explanation": "When using SSR with hydration, ensure the server-rendered HTML contains the same data attribute values the client expects. Avoid client-side mutations that change attribute values before hydration finishes; otherwise hydration mismatches and re-rendering may occur.",
      "topic": {
        "topics": [
          "Best practices",
          "SSR"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which approach reduces XSS risks when embedding dynamic content into data attributes?",
      "options": {
        "A": "<pre>Insert unescaped user text into data attributes</pre>",
        "B": "<pre>Serialize functions into attributes</pre>",
        "C": "<pre>Use innerHTML to populate attributes</pre>",
        "D": "<pre>Always HTML-escape or encode values written into attributes</pre>"
      },
      "correct": "D",
      "explanation": "To prevent XSS, escape or encode any untrusted strings before embedding them inside attributes. For example, HTML-escape or URL-encode JSON strings used in data attributes, and avoid using innerHTML with untrusted input.",
      "topic": {
        "topics": [
          "Security",
          "Best practices"
        ]
      }
    },
    {
      "id": 21,
      "question": "Which selector best targets elements that have a data-role attribute regardless of its value?",
      "options": {
        "A": "<pre>.[data-role]</pre>",
        "B": "<pre>[data-role!='']</pre>",
        "C": "<pre>[data-role]</pre>",
        "D": "<pre>:has([data-role])</pre>"
      },
      "correct": "C",
      "explanation": "The existence attribute selector <pre>[data-role]</pre> matches elements that have a <pre>data-role</pre> attribute regardless of its value. This is the standard CSS way to select elements by attribute presence.",
      "topic": {
        "topics": [
          "CSS attribute selectors"
        ]
      }
    },
    {
      "id": 22,
      "question": "If you write <pre>element.dataset.fooBar = 10;</pre>, what will be serialized into the DOM attribute?",
      "options": {
        "A": "<pre>data-foo-bar=\"10\"</pre>",
        "B": "<pre>data-fooBar=\"10\"</pre>",
        "C": "<pre>data-foo-bar=10</pre>",
        "D": "<pre>dataset will not affect attributes</pre>"
      },
      "correct": "A",
      "explanation": "Assigning to <pre>dataset.fooBar</pre> writes the corresponding attribute <pre>data-foo-bar</pre> with the string value \"10\". The dataset-to-attribute mapping converts camelCase to kebab-case and serializes values as strings.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 23,
      "question": "Which of these is a good guideline when choosing whether to put data in attributes vs. in-memory JS objects?",
      "options": {
        "A": "<pre>Use data attributes for large, frequently-changing application state</pre>",
        "B": "<pre>Never use attributes; they are deprecated</pre>",
        "C": "<pre>Always use attributes because they persist across reloads</pre>",
        "D": "<pre>Prefer attributes for small, descriptive metadata and use in-memory state for large mutable data</pre>"
      },
      "correct": "D",
      "explanation": "Data attributes are ideal for small descriptive metadata and for progressive enhancement hooks. For large or frequently-changing application state, in-memory JS structures (or proper state management) are more efficient and maintainable.",
      "topic": {
        "topics": [
          "Best practices"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which technique safely updates an existing data attribute without causing layout thrashing?",
      "options": {
        "A": "<pre>Read offsetWidth, then set dataset value, then force reflow</pre>",
        "B": "<pre>Use synchronous XHR before setting attribute</pre>",
        "C": "<pre>Use innerHTML to rewrite the whole element</pre>",
        "D": "<pre>Buffer updates and apply them in a single requestAnimationFrame callback</pre>"
      },
      "correct": "D",
      "explanation": "Batching DOM writes inside a single <pre>requestAnimationFrame</pre> callback reduces layout thrashing. Avoid interleaving reads and writes that trigger synchronous reflows; coalesce updates where possible.",
      "topic": {
        "topics": [
          "Performance",
          "Best practices"
        ]
      }
    },
    {
      "id": 25,
      "question": "Which of the following summarizes a safe, practical workflow for JSON in data attributes?",
      "options": {
        "A": "<pre>Embed raw JSON with single quotes and parse with eval on the client</pre>",
        "B": "<pre>Store functions inside data attributes to reduce client requests</pre>",
        "C": "<pre>URL-encode or HTML-escape JSON string server-side, write into data- attribute, then decode and JSON.parse on client with try/catch</pre>",
        "D": "<pre>Keep JSON only in HTML comments to avoid parsing</pre>"
      },
      "correct": "C",
      "explanation": "A safe workflow is to serialize and encode JSON on the server (for example, using encodeURIComponent or proper HTML escaping), write it into a data attribute, and when reading on the client, decode and parse inside a try/catch to handle errors. Avoid eval and never store executable code in attributes.",
      "topic": {
        "topics": [
          "JSON in data attributes",
          "Best practices"
        ]
      }
    }
  ]
}
