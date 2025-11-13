module.exports = {
  "metadata": {
    "title": "HTML data-* Attributes: Practical Patterns and Safety",
    "description": "Covering data-* attributes, the DOM dataset API, CSS attribute selectors, embedding JSON safely, namespacing, accessibility, SSR/hydration, performance and security.",
    "difficulty": "medium",
    "domain": "html",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "data-* attributes",
      "DOM dataset API",
      "CSS attribute selectors",
      "JSON",
      "Security (XSS)",
      "Performance",
      "Accessibility (ARIA)",
      "Server-side rendering (SSR)"
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
        "topicName": "JSON",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
      },
      {
        "topicName": "Security (XSS)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"
      },
      {
        "topicName": "Performance",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Performance"
      },
      {
        "topicName": "Accessibility (ARIA)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
      },
      {
        "topicName": "Server-side rendering (SSR)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Server-side_rendering"
      }
    ],
    "assessmentId": 8,
    "assessmentUniqueId": 1762976597609,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "Which of the following is the correct syntax for a custom data attribute?",
      "options": {
        "A": "<pre>data-user-id=\"42\"</pre>",
        "B": "<pre>data_user_id=\"42\"</pre>",
        "C": "<pre>dataUserId=\"42\"</pre>",
        "D": "<pre>data:user-id=\"42\"</pre>"
      },
      "correct": "A",
      "explanation": "Custom attributes must start with the prefix <pre>data-</pre> and use lowercase hyphen-separated names (kebab-case). This is the HTML standard for author-defined data attributes. Avoid underscores, camelCase, or reserved characters like colons.",
      "topic": {
        "topics": [
          "data-* attributes"
        ]
      }
    },
    {
      "id": 2,
      "question": "Given <pre><div id=\"item\" data-count=\"10\"></div></pre>, which is the usual way to read the value via the dataset API?",
      "options": {
        "A": "<pre>document.getElementById(\"item\").getAttribute(\"data-count\")</pre>",
        "B": "<pre>document.getElementById(\"item\").dataset.count</pre>",
        "C": "<pre>document.querySelector(\"#item\").data.count</pre>",
        "D": "<pre>document.getElementById(\"item\").dataset[\"data-count\"]</pre>"
      },
      "correct": "A",
      "explanation": "The DOM <pre>dataset</pre> maps hyphenated data attributes to camelCase properties (so <pre>data-count</pre> becomes <pre>dataset.count</pre>). <pre>getAttribute('data-count')</pre> returns the raw string. Use <pre>dataset</pre> for convenience or <pre>getAttribute</pre> when you need the exact attribute text.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 3,
      "question": "Which CSS selector matches elements that have a <pre>data-role</pre> attribute present?",
      "options": {
        "A": "<pre>.data-role</pre>",
        "B": "<pre>[data-role=\"*\"]</pre>",
        "C": "<pre>[data-role]</pre>",
        "D": "<pre>:has([data-role])</pre>"
      },
      "correct": "A",
      "explanation": "The standard existence selector is <pre>[data-role]</pre>. It matches elements that have the attribute regardless of value. Newer selectors like <pre>:has()</pre> are relational and not universally supported; prefer the simple attribute selector for compatibility.",
      "topic": {
        "topics": [
          "CSS attribute selectors"
        ]
      }
    },
    {
      "id": 4,
      "question": "How does the dataset API expose <pre>data-user-role</pre> on the element?",
      "options": {
        "A": "<pre>dataset.dataUserRole</pre>",
        "B": "<pre>dataset.userRole</pre>",
        "C": "<pre>dataset.user_role</pre>",
        "D": "<pre>dataset[\"user-role\"]</pre>"
      },
      "correct": "A",
      "explanation": "Hyphenated attribute names map to camelCase properties via <pre>dataset</pre>. For example, <pre>data-user-role</pre> becomes <pre>element.dataset.userRole</pre>. This mapping is consistent across browsers and makes JavaScript access straightforward.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which workflow is safest for embedding structured JSON into a data attribute for later parsing on the client?",
      "options": {
        "A": "<pre>Embed raw JSON without encoding and JSON.parse on the client</pre>",
        "B": "<pre>Use eval() on the attribute value</pre>",
        "C": "<pre>Encode or HTML-escape JSON server-side, write it into the attribute, then decode and JSON.parse inside try/catch on the client</pre>",
        "D": "<pre>Serialize functions into attributes for later execution</pre>"
      },
      "correct": "A",
      "explanation": "The recommended safe workflow is to serialize the object (JSON.stringify), then encode or escape the string when embedding it into an attribute to avoid breaking HTML (for example, using encodeURIComponent or proper HTML-escaping). On the client, decode and call <pre>JSON.parse</pre> inside a <pre>try/catch</pre> to handle malformed input. Never use <pre>eval</pre> or embed executable code.",
      "topic": {
        "topics": [
          "JSON",
          "Security (XSS)"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which of these should NEVER be stored in a data-* attribute?",
      "options": {
        "A": "<pre>Test hooks like data-test-id</pre>",
        "B": "<pre>Short UI flags for progressive enhancement</pre>",
        "C": "<pre>Long-lived sensitive secrets such as private API keys</pre>",
        "D": "<pre>Presentation hints for JS widgets</pre>"
      },
      "correct": "A",
      "explanation": "Attributes are visible to clients and anyone inspecting the page. Sensitive values (for example, API keys, tokens, or secrets) must not be embedded in HTML. Keep secrets on the server or in secure, HttpOnly cookies. Data attributes are fine for non-sensitive metadata, test hooks, and small flags.",
      "topic": {
        "topics": [
          "Security (XSS)",
          "Performance"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the most scalable event-delegation pattern for many <pre>data-action</pre> buttons?",
      "options": {
        "A": "<pre>Attach a single click listener on a common ancestor and use event.target.closest('[data-action]')</pre>",
        "B": "<pre>Bind separate listeners to each button at load time</pre>",
        "C": "<pre>Use inline onclick attributes for each button</pre>",
        "D": "<pre>Poll the DOM and attach handlers dynamically</pre>"
      },
      "correct": "B",
      "explanation": "Delegation via a single listener on an ancestor using <pre>closest()</pre> is efficient and handles dynamic content well. Attaching many individual listeners increases memory and setup cost. Avoid inline handlers and polling; delegation is the preferred scalable pattern.",
      "topic": {
        "topics": [
          "DOM dataset API",
          "Performance"
        ]
      }
    },
    {
      "id": 8,
      "question": "What attribute will be created after running <pre>element.dataset.fooBar = 5;</pre>?",
      "options": {
        "A": "<pre>data-foo-bar=\"5\"</pre>",
        "B": "<pre>no attribute</pre>",
        "C": "<pre>data_foo_bar=\"5\"</pre>",
        "D": "<pre>data-fooBar=\"5\"</pre>"
      },
      "correct": "B",
      "explanation": "Assigning to <pre>dataset.fooBar</pre> writes the corresponding kebab-case attribute <pre>data-foo-bar</pre>. The dataset/attribute mapping converts camelCase to hyphen-separated names and serializes values as strings.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 9,
      "question": "Which selector matches elements whose <pre>data-id</pre> begins with \"user-\"?",
      "options": {
        "A": "<pre>[data-id$=\"user-\"]</pre>",
        "B": "<pre>[data-id^=\"user-\"]</pre>",
        "C": "<pre>[data-id*=\"user-\"]</pre>",
        "D": "<pre>.user-[data-id]</pre>"
      },
      "correct": "B",
      "explanation": "The ^= operator matches a prefix. Use <pre>[data-id^=\"user-\"]</pre> to select elements whose <pre>data-id</pre> starts with \"user-\". Use $= for suffix and *= for substring matches.",
      "topic": {
        "topics": [
          "CSS attribute selectors"
        ]
      }
    },
    {
      "id": 10,
      "question": "Why avoid embedding very large JSON blobs directly into data attributes?",
      "options": {
        "A": "<pre>Attributes only accept numbers and booleans</pre>",
        "B": "<pre>Large inline JSON bloats HTML, increases parsing and transfer cost, and reduces maintainability</pre>",
        "C": "<pre>Browsers drop attributes longer than 1KB</pre>",
        "D": "<pre>dataset will compress the value transparently</pre>"
      },
      "correct": "B",
      "explanation": "Large JSON in attributes increases page size, slows parsing, and makes markup hard to read. Prefer keeping identifiers or small hints in attributes and fetching large payloads separately (for example via fetch/XHR) to improve performance and maintainability.",
      "topic": {
        "topics": [
          "Performance",
          "JSON"
        ]
      }
    },
    {
      "id": 11,
      "question": "Which naming style reduces collisions across libraries?",
      "options": {
        "A": "<pre>data-id</pre>",
        "B": "<pre>dataUserIndex</pre>",
        "C": "<pre>data-app-widget-index</pre>",
        "D": "<pre>data:widget</pre>"
      },
      "correct": "B",
      "explanation": "Namespacing attributes with a clear prefix (for example <pre>data-app-*</pre>) reduces the chance of collisions. Keep names lower-case and hyphen-separated. Avoid characters like colons and avoid camelCase in attribute names.",
      "topic": {
        "topics": [
          "data-* attributes"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which is the clearest way to get the raw attribute string for <pre>data-value</pre>?",
      "options": {
        "A": "<pre>element.dataset.value</pre>",
        "B": "<pre>element.attributes[\"data-value\"].nodeValue</pre>",
        "C": "<pre>element.value</pre>",
        "D": "<pre>element.getAttribute(\"data-value\")</pre>"
      },
      "correct": "B",
      "explanation": "The straightforward method to read the exact attribute string is <pre>getAttribute('data-value')</pre>. While <pre>dataset</pre> maps to camelCase properties, <pre>getAttribute</pre> guarantees the raw attribute text. Direct attribute object access also works but is less commonly used.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 13,
      "question": "When inserting user-provided text into an attribute value, the safest practice is to:",
      "options": {
        "A": "<pre>Wrap the text in a <pre> element inside the attribute</pre>",
        "B": "<pre>HTML-escape or encode the value before writing it into the attribute</pre>",
        "C": "<pre>Insert raw text and rely on the browser</pre>",
        "D": "<pre>Serialize a function that returns the text</pre>"
      },
      "correct": "C",
      "explanation": "Always treat untrusted input as unsafe. Properly escape or encode user-provided text before embedding it into attributes (for example, server-side HTML-escaping or using <pre>encodeURIComponent</pre>). This prevents attribute termination and reduces XSS risk. Never rely solely on client-side sanitization.",
      "topic": {
        "topics": [
          "Security (XSS)"
        ]
      }
    },
    {
      "id": 14,
      "question": "To avoid SSR hydration mismatches when using data attributes, you should:",
      "options": {
        "A": "<pre>Mutate attributes on the first client render freely</pre>",
        "B": "<pre>Remove all data attributes in server HTML</pre>",
        "C": "<pre>Ensure server-rendered attributes match what the client expects and avoid pre-hydration mutations</pre>",
        "D": "<pre>Only use dataset after a full re-render</pre>"
      },
      "correct": "C",
      "explanation": "For smooth hydration, server-rendered HTML must match client expectations. If attributes differ, the client may re-render or throw warnings. Emit consistent attributes from server and avoid client-side mutations until after hydration where possible.",
      "topic": {
        "topics": [
          "Server-side rendering (SSR)",
          "Performance"
        ]
      }
    },
    {
      "id": 15,
      "question": "Which pattern helps reduce layout thrashing when updating many attributes?",
      "options": {
        "A": "<pre>Interleave reads (offsetWidth) and writes (setAttribute) in the same loop</pre>",
        "B": "<pre>Batch writes together inside a requestAnimationFrame or use a document fragment</pre>",
        "C": "<pre>Call innerHTML repeatedly for each element</pre>",
        "D": "<pre>Force synchronous reflows between each update</pre>"
      },
      "correct": "C",
      "explanation": "Batching DOM writes (for example using <pre>requestAnimationFrame</pre> or collecting changes and applying them together) reduces forced reflows. Avoid patterns that interleave reads and writes which cause layout thrash.",
      "topic": {
        "topics": [
          "Performance"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which statement about accessibility is true when relying on data-* attributes?",
      "options": {
        "A": "<pre>Screen readers automatically announce data-* values</pre>",
        "B": "<pre>Use ARIA and semantic HTML for content that must be accessible; data-* is not a substitute</pre>",
        "C": "<pre>data-* can replace labels to reduce DOM size</pre>",
        "D": "<pre>data-* attributes are required for accessible widgets</pre>"
      },
      "correct": "C",
      "explanation": "Data attributes are intended for scripting and metadata and are not announced by screen readers. Use semantic markup and ARIA attributes for accessibility-critical information. Do not rely on data-* attributes as an accessibility mechanism.",
      "topic": {
        "topics": [
          "Accessibility (ARIA)"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is an efficient approach for repeatedly querying a set of elements by a data attribute?",
      "options": {
        "A": "<pre>Search by innerText every time</pre>",
        "B": "<pre>Cache the NodeList or array of elements and update the cache when the DOM changes</pre>",
        "C": "<pre>Re-run document.querySelectorAll('[data-role=\"item\"]') for every interaction</pre>",
        "D": "<pre>Use setInterval to refresh the selection periodically</pre>"
      },
      "correct": "C",
      "explanation": "Caching and maintaining an updated collection is generally best for performance. If the DOM changes often, use a MutationObserver to update the cache rather than re-querying every time, which can be costly.",
      "topic": {
        "topics": [
          "Performance"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which code correctly decodes and parses URL-encoded JSON stored in <pre>data-config</pre>?",
      "options": {
        "A": "<pre>const cfg = JSON.parse(element.dataset.config);</pre>",
        "B": "<pre>const cfg = eval(element.getAttribute(\"data-config\"));</pre>",
        "C": "<pre>const cfg = JSON.parse(decodeURIComponent(element.getAttribute(\"data-config\")));</pre>",
        "D": "<pre>const cfg = element.dataset.config</pre>"
      },
      "correct": "C",
      "explanation": "If the JSON was URL-encoded before embedding, decode with <pre>decodeURIComponent</pre> and then <pre>JSON.parse</pre>. Wrap parsing in a <pre>try/catch</pre> to handle malformed input. Never use <pre>eval</pre> on untrusted data.",
      "topic": {
        "topics": [
          "JSON",
          "Security (XSS)"
        ]
      }
    },
    {
      "id": 19,
      "question": "Why is in-memory state usually preferred over data attributes for rapidly changing UI state?",
      "options": {
        "A": "<pre>Attributes cannot be read by JavaScript</pre>",
        "B": "<pre>DOM attribute writes can trigger layout and are slower than updating in-memory data structures</pre>",
        "C": "<pre>Attributes automatically serialize complex objects</pre>",
        "D": "<pre>Attributes persist across page loads by default</pre>"
      },
      "correct": "D",
      "explanation": "For frequently-changing state, in-memory JS objects or a state store are more efficient; updating attributes may cause layout work. Use attributes for small, relatively static metadata; keep high-frequency mutable state in memory.",
      "topic": {
        "topics": [
          "Performance"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which CSS selector selects elements with a <pre>data-role</pre> attribute present?",
      "options": {
        "A": "<pre>[data-role]</pre>",
        "B": "<pre>[data-role!='']</pre>",
        "C": "<pre>.data-role</pre>",
        "D": "<pre>:has([data-role])</pre>"
      },
      "correct": "D",
      "explanation": "The attribute existence selector is <pre>[data-role]</pre>. It's the standard, widely-supported way to select elements that have the attribute. Relational selectors like <pre>:has()</pre> are less supported and unnecessary for this simple check.",
      "topic": {
        "topics": [
          "CSS attribute selectors"
        ]
      }
    },
    {
      "id": 21,
      "question": "Which selector strategy is recommended for stable test hooks during styling refactors?",
      "options": {
        "A": "<pre>Embed selectors in comments</pre>",
        "B": "<pre>Use dedicated data-test-id attributes for tests</pre>",
        "C": "<pre>Select by visual order (nth-child)</pre>",
        "D": "<pre>Use classes like .btn-primary</pre>"
      },
      "correct": "D",
      "explanation": "Dedicated data attributes (for example <pre>data-test-id</pre>) decouple tests from styling. They provide resilient selectors that don't change when CSS classes or markup structure change. Avoid brittle selectors tied to layout or presentation.",
      "topic": {
        "topics": [
          "data-* attributes"
        ]
      }
    },
    {
      "id": 22,
      "question": "When would you prefer <pre>getAttribute('data-...')</pre> over <pre>dataset</pre>?",
      "options": {
        "A": "<pre>When you need the raw attribute string exactly as written</pre>",
        "B": "<pre>When you want numeric typing</pre>",
        "C": "<pre>When you want automatic JSON parsing</pre>",
        "D": "<pre>When you want the camelCase mapping</pre>"
      },
      "correct": "D",
      "explanation": "Use <pre>getAttribute</pre> to obtain the raw attribute text. <pre>dataset</pre> exposes a camelCased property mapping which is convenient for JavaScript access. Neither API parses JSON or coerces types automatically.",
      "topic": {
        "topics": [
          "DOM dataset API"
        ]
      }
    },
    {
      "id": 23,
      "question": "What server-side practice reduces XSS risk when embedding values into attributes?",
      "options": {
        "A": "<pre>Embed raw server values without escaping</pre>",
        "B": "<pre>HTML-escape or URL-encode values before embedding into attributes</pre>",
        "C": "<pre>Serialize functions and eval on the client</pre>",
        "D": "<pre>Use innerHTML to insert values into attributes</pre>"
      },
      "correct": "D",
      "explanation": "Always treat server values as untrusted. Properly escape or encode strings (for example via HTML-escaping or URL-encoding) before embedding them into attributes. This prevents attribute injection and reduces XSS exposure. Avoid patterns that execute embedded code or rely solely on client sanitization.",
      "topic": {
        "topics": [
          "Security (XSS)"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which update strategy minimizes reflows when changing many attributes at once?",
      "options": {
        "A": "<pre>Update attributes one-by-one with reads between writes</pre>",
        "B": "<pre>Batch updates, for example by grouping writes inside requestAnimationFrame</pre>",
        "C": "<pre>Call location.reload() to refresh</pre>",
        "D": "<pre>Use synchronous XHR to block the thread</pre>"
      },
      "correct": "D",
      "explanation": "Batching DOM writes (for example inside <pre>requestAnimationFrame</pre> or by applying a document fragment) will reduce layout thrash. Avoid interleaving reads and writes in loops which trigger forced reflows.",
      "topic": {
        "topics": [
          "Performance"
        ]
      }
    },
    {
      "id": 25,
      "question": "Which workflow is recommended for shipping structured config via attributes?",
      "options": {
        "A": "<pre>Embed raw JS objects and use eval on client</pre>",
        "B": "<pre>Encode/escape JSON server-side, write into a data- attribute, decode and JSON.parse client-side with error handling</pre>",
        "C": "<pre>Place JSON in HTML comments and parse innerHTML</pre>",
        "D": "<pre>Store executable functions in attributes</pre>"
      },
      "correct": "D",
      "explanation": "The recommended approach is to serialize JSON on the server, encode or escape it, embed in a data attribute, and decode/JSON.parse on the client inside a try/catch. Never use eval or store executable code in attributes. This pattern balances safety and convenience.",
      "topic": {
        "topics": [
          "JSON",
          "Security (XSS)"
        ]
      }
    }
  ]
}
