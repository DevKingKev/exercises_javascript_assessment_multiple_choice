module.exports = {
  "metadata": {
    "title": "Modern JavaScript APIs & Advanced Techniques",
    "description": "Test your knowledge of modern JavaScript APIs including Fetch, Observables, Intersection Observer, Local Storage, IndexedDB, Service Workers, and advanced object manipulation techniques.",
    "difficulty": "medium",
    "domain": "javascript",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "Fetch API and Request/Response",
      "Intersection Observer API",
      "Resize Observer API",
      "Local Storage and Session Storage",
      "IndexedDB",
      "Service Workers and Caching",
      "Object.defineProperty and Descriptors",
      "Object.create and Prototypal Patterns",
      "Array.from and Iterable Protocol",
      "Template Literals and Tagged Templates"
    ],
    "topicLinks": [
      {
        "topicName": "Fetch API and Request/Response",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
      },
      {
        "topicName": "Intersection Observer API",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
      },
      {
        "topicName": "Resize Observer API",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API"
      },
      {
        "topicName": "Local Storage and Session Storage",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
      },
      {
        "topicName": "IndexedDB",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
      },
      {
        "topicName": "Service Workers and Caching",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
      },
      {
        "topicName": "Object.defineProperty and Descriptors",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
      },
      {
        "topicName": "Object.create and Prototypal Patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
      },
      {
        "topicName": "Array.from and Iterable Protocol",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
      },
      {
        "topicName": "Template Literals and Tagged Templates",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
      }
    ],
    "assessmentId": 6,
    "assessmentUniqueId": 1762343141334,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the key difference between <pre>fetch()</pre> and <pre>XMLHttpRequest</pre> when handling HTTP errors?",
      "options": {
        "A": "fetch() only rejects on network errors, not HTTP errors like 404 or 500",
        "B": "fetch() automatically retries failed requests",
        "C": "XMLHttpRequest doesn't support async operations",
        "D": "fetch() throws exceptions for all errors"
      },
      "correct": "A",
      "explanation": "The <pre>fetch()</pre> API only rejects its promise on network failures (like no internet connection). HTTP error status codes like 404 or 500 are considered successful responses, and the promise resolves normally with <pre>response.ok</pre> set to <pre>false</pre>. You must manually check the status:\n[CODE]fetch('/api/data')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    return response.json();\n  })\n  .catch(error => console.error('Error:', error));[/CODE]\nIn contrast, <pre>XMLHttpRequest</pre> triggers error handlers for HTTP errors. This is a common gotcha when migrating from XHR to fetch.",
      "topic": {
        "topics": [
          "Fetch API and Request/Response"
        ]
      }
    },
    {
      "id": 2,
      "question": "What does the <pre>rootMargin</pre> option in Intersection Observer do?",
      "options": {
        "A": "Defines padding around the root element's bounding box for intersection calculations",
        "B": "Specifies the minimum overlap percentage",
        "C": "Sets the margin around the observed element",
        "D": "Sets the delay before triggering the callback"
      },
      "correct": "A",
      "explanation": "The <pre>rootMargin</pre> option in Intersection Observer grows or shrinks the root element's bounding box before calculating intersections. It uses CSS margin syntax (e.g., <pre>'10px 20px 30px 40px'</pre>). This is useful for triggering callbacks before an element actually enters the viewport:\n[CODE]const observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        // Triggered 50px before element enters viewport\n        console.log('Element approaching!');\n      }\n    });\n  },\n  { rootMargin: '50px' }\n);[/CODE]\nCommon use cases include lazy-loading images before they're visible, or triggering animations early for smoother user experience.",
      "topic": {
        "topics": [
          "Intersection Observer API"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the maximum storage size typically available for Local Storage?",
      "options": {
        "A": "5-10 MB per origin",
        "B": "100 KB per origin",
        "C": "1 MB per origin",
        "D": "Unlimited storage"
      },
      "correct": "A",
      "explanation": "Local Storage typically provides 5-10 MB of storage per origin (protocol + domain + port), though the exact limit varies by browser. Chrome and Firefox usually allow around 10 MB, while Safari allows 5 MB. Important considerations:\n- This is a synchronous API that blocks the main thread\n- Data is stored as strings only (must serialize objects)\n- Shared across all tabs/windows from the same origin\n- Persists even after browser restart\n\nFor larger storage needs, use IndexedDB which can store much more data (often gigabytes) and works asynchronously. Local Storage is best for small amounts of data like user preferences or simple app state.",
      "topic": {
        "topics": [
          "Local Storage and Session Storage"
        ]
      }
    },
    {
      "id": 4,
      "question": "What happens when you try to store a non-string value in Local Storage using [CODE]localStorage.setItem('key', value)[/CODE]?",
      "options": {
        "A": "The value is automatically converted to a string using toString()",
        "B": "It throws a TypeError",
        "C": "The value is stored as-is without conversion",
        "D": "It stores undefined"
      },
      "correct": "A",
      "explanation": "Local Storage automatically converts non-string values to strings using the <pre>toString()</pre> method. This can lead to unexpected results:\n[CODE]localStorage.setItem('object', { name: 'John' });\nconsole.log(localStorage.getItem('object')); // '[object Object]'\n\nlocalStorage.setItem('array', [1, 2, 3]);\nconsole.log(localStorage.getItem('array')); // '1,2,3'\n\nlocalStorage.setItem('number', 42);\nconsole.log(localStorage.getItem('number')); // '42' (string)[/CODE]\nTo properly store objects, you must serialize them:\n[CODE]// Storing\nlocalStorage.setItem('user', JSON.stringify({ name: 'John' }));\n// Retrieving\nconst user = JSON.parse(localStorage.getItem('user'));[/CODE]\nAlways use <pre>JSON.stringify()</pre> and <pre>JSON.parse()</pre> for complex data structures.",
      "topic": {
        "topics": [
          "Local Storage and Session Storage"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the primary advantage of IndexedDB over Local Storage?",
      "options": {
        "A": "IndexedDB is asynchronous and can store much larger amounts of structured data",
        "B": "IndexedDB works in all browsers including IE6",
        "C": "IndexedDB has a simpler API",
        "D": "IndexedDB automatically syncs with the server"
      },
      "correct": "A",
      "explanation": "IndexedDB is a powerful asynchronous database that can store gigabytes of structured data including objects, files, and blobs. Unlike Local Storage's 5-10 MB string-only synchronous storage, IndexedDB offers:\n\n1. **Large storage capacity**: Often 50% of available disk space\n2. **Asynchronous operations**: Doesn't block the main thread\n3. **Structured data**: Stores JavaScript objects directly without serialization\n4. **Indexes and queries**: Fast lookups on object properties\n5. **Transactions**: ACID compliance for data integrity\n\nExample:\n[CODE]const request = indexedDB.open('MyDatabase', 1);\nrequest.onsuccess = (event) => {\n  const db = event.target.result;\n  const transaction = db.transaction(['users'], 'readwrite');\n  const store = transaction.objectStore('users');\n  store.add({ id: 1, name: 'John', age: 30 });\n};[/CODE]\nIndexedDB is ideal for offline-first apps, large datasets, or complex client-side data management.",
      "topic": {
        "topics": [
          "IndexedDB"
        ]
      }
    },
    {
      "id": 6,
      "question": "What is the purpose of the <pre>writable</pre> property descriptor in <pre>Object.defineProperty()</pre>?",
      "options": {
        "A": "Determines if the property value can be changed with assignment",
        "B": "Controls whether the property appears in for...in loops",
        "C": "Sets whether the property descriptor can be modified",
        "D": "Defines if the property can be deleted"
      },
      "correct": "A",
      "explanation": "The <pre>writable</pre> descriptor controls whether a property's value can be changed using the assignment operator. When set to <pre>false</pre>, attempts to modify the property fail silently in non-strict mode or throw a TypeError in strict mode:\n[CODE]const obj = {};\nObject.defineProperty(obj, 'readOnly', {\n  value: 42,\n  writable: false,\n  enumerable: true,\n  configurable: true\n});\n\nobj.readOnly = 100; // Fails silently in non-strict mode\nconsole.log(obj.readOnly); // 42\n\n// In strict mode:\n'use strict';\nobj.readOnly = 100; // TypeError: Cannot assign to read only property[/CODE]\nThis is useful for creating immutable properties or constants. Note that <pre>writable: false</pre> only prevents reassignment; if the value is an object, its properties can still be modified unless the object itself is frozen.",
      "topic": {
        "topics": [
          "Object.defineProperty and Descriptors"
        ]
      }
    },
    {
      "id": 7,
      "question": "What does [CODE]Object.create(null)[/CODE] create?",
      "options": {
        "A": "An object with no prototype (truly empty object)",
        "B": "An object with Object.prototype",
        "C": "An object with undefined as prototype",
        "D": "A null value"
      },
      "correct": "A",
      "explanation": "<pre>Object.create(null)</pre> creates an object with absolutely no prototype chain—a truly empty object without any inherited properties or methods. This is different from <pre>{}</pre> which inherits from <pre>Object.prototype</pre>:\n[CODE]const obj1 = {};\nconsole.log(obj1.toString); // [Function: toString] from Object.prototype\nconsole.log(obj1.hasOwnProperty); // [Function: hasOwnProperty]\n\nconst obj2 = Object.create(null);\nconsole.log(obj2.toString); // undefined\nconsole.log(obj2.hasOwnProperty); // undefined[/CODE]\nUse cases for <pre>Object.create(null)</pre>:\n1. **Dictionary/Map objects**: No inherited properties that could clash with keys\n2. **Pure data storage**: When you want zero overhead from prototype\n3. **Avoiding prototype pollution**: Security benefit in certain scenarios\n\nYou can add properties normally: <pre>obj2.name = 'John'</pre>, but it won't have any built-in methods unless you explicitly add them.",
      "topic": {
        "topics": [
          "Object.create and Prototypal Patterns"
        ]
      }
    },
    {
      "id": 8,
      "question": "What is the difference between [CODE]configurable: false[/CODE] and [CODE]writable: false[/CODE] in property descriptors?",
      "options": {
        "A": "They do the same thing",
        "B": "configurable controls if the descriptor can be changed; writable controls if the value can be changed",
        "C": "configurable is for objects; writable is for primitives",
        "D": "configurable prevents deletion; writable allows modification"
      },
      "correct": "B",
      "explanation": "These two descriptors control different aspects of a property:\n\n**writable**: Controls whether the property's *value* can be changed via assignment\n**configurable**: Controls whether the property's *descriptor* can be modified or the property deleted\n\n[CODE]const obj = {};\nObject.defineProperty(obj, 'prop', {\n  value: 42,\n  writable: false,      // Can't change value\n  configurable: false,  // Can't change descriptor or delete\n  enumerable: true\n});\n\nobj.prop = 100; // Fails - writable is false\ndelete obj.prop; // Fails - configurable is false\n\n// Cannot change descriptor:\nObject.defineProperty(obj, 'prop', {\n  writable: true  // TypeError: Cannot redefine property\n});[/CODE]\n\nOnce <pre>configurable: false</pre> is set, it's permanent and irreversible. However, you can change <pre>writable</pre> from true to false even when configurable is false (but not back to true).",
      "topic": {
        "topics": [
          "Object.defineProperty and Descriptors"
        ]
      }
    },
    {
      "id": 9,
      "question": "How does <pre>Array.from()</pre> differ from the spread operator [CODE][...iterable][/CODE]?",
      "options": {
        "A": "They are identical in functionality",
        "B": "Array.from() accepts a mapping function as second argument; spread does not",
        "C": "Spread only works with arrays; Array.from() works with any iterable",
        "D": "Array.from() is faster"
      },
      "correct": "B",
      "explanation": "While both <pre>Array.from()</pre> and spread operator can convert iterables to arrays, <pre>Array.from()</pre> accepts an optional mapping function as the second argument, allowing you to transform elements during conversion:\n[CODE]// Using spread\nconst arr1 = [...'hello'];\nconsole.log(arr1); // ['h', 'e', 'l', 'l', 'o']\n\n// Using Array.from() with mapping function\nconst arr2 = Array.from('hello', char => char.toUpperCase());\nconsole.log(arr2); // ['H', 'E', 'L', 'L', 'O']\n\n// Equivalent with spread requires separate map call\nconst arr3 = [...'hello'].map(char => char.toUpperCase());\n\n// Array.from() can also set 'this' context for mapping function\nconst arr4 = Array.from([1, 2, 3], function(x) {\n  return x * this.multiplier;\n}, { multiplier: 10 }); // [10, 20, 30][/CODE]\nBoth work with any iterable (arrays, strings, Sets, Maps, etc.), but <pre>Array.from()</pre> is more versatile for transformation scenarios.",
      "topic": {
        "topics": [
          "Array.from and Iterable Protocol"
        ]
      }
    },
    {
      "id": 10,
      "question": "What makes an object iterable in JavaScript?",
      "options": {
        "A": "Having a length property",
        "B": "Implementing a <pre>[Symbol.iterator]</pre> method that returns an iterator",
        "C": "Extending from Array",
        "D": "Having numeric indexes"
      },
      "correct": "B",
      "explanation": "An object is iterable if it implements the iterable protocol by having a <pre>[Symbol.iterator]</pre> method that returns an iterator object. The iterator must have a <pre>next()</pre> method returning <pre>{ value, done }</pre>:\n[CODE]const myIterable = {\n  data: [1, 2, 3],\n  [Symbol.iterator]() {\n    let index = 0;\n    return {\n      next: () => {\n        if (index < this.data.length) {\n          return { value: this.data[index++], done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\n\n// Now works with for...of, spread, Array.from, etc.\nfor (const value of myIterable) {\n  console.log(value); // 1, 2, 3\n}\n\nconst arr = [...myIterable]; // [1, 2, 3][/CODE]\nBuilt-in iterables include Arrays, Strings, Maps, Sets, NodeLists, and arguments. This protocol enables custom iteration behavior for any object.",
      "topic": {
        "topics": [
          "Array.from and Iterable Protocol"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is a tagged template literal?",
      "options": {
        "A": "A template literal with HTML tags inside",
        "B": "A function that processes template literal strings and interpolated values",
        "C": "A template literal with multiple lines",
        "D": "A deprecated syntax for string formatting"
      },
      "correct": "B",
      "explanation": "A tagged template literal is a function that processes template literal strings and their interpolated values, allowing custom string processing logic:\n[CODE]function highlight(strings, ...values) {\n  return strings.reduce((result, str, i) => {\n    const value = values[i] ? `<mark>${values[i]}</mark>` : '';\n    return result + str + value;\n  }, '');\n}\n\nconst name = 'John';\nconst age = 30;\nconst html = highlight`User ${name} is ${age} years old`;\n// Returns: 'User <mark>John</mark> is <mark>30</mark> years old'[/CODE]\n\nThe tag function receives:\n1. An array of string literals (split by interpolations)\n2. All interpolated values as separate arguments\n\nCommon use cases:\n- **Styled components**: CSS-in-JS libraries\n- **i18n**: Translation with interpolation\n- **SQL queries**: Preventing injection attacks\n- **HTML sanitization**: Escaping user input\n\nTagged templates enable powerful domain-specific languages (DSLs) in JavaScript.",
      "topic": {
        "topics": [
          "Template Literals and Tagged Templates"
        ]
      }
    },
    {
      "id": 12,
      "question": "What is the lifecycle of a Service Worker?",
      "options": {
        "A": "Register → Active → Install",
        "B": "Install → Waiting → Active",
        "C": "Download → Parse → Execute",
        "D": "Active → Fetch → Cache"
      },
      "correct": "B",
      "explanation": "A Service Worker follows a specific lifecycle: **Install → Waiting → Active**. Understanding this is crucial for proper implementation:\n[CODE]// In main script\nnavigator.serviceWorker.register('/sw.js');\n\n// In sw.js\nself.addEventListener('install', event => {\n  console.log('Service Worker installing');\n  event.waitUntil(\n    caches.open('v1').then(cache => cache.addAll(['/']))\n  );\n});\n\nself.addEventListener('activate', event => {\n  console.log('Service Worker activated');\n  // Clean up old caches here\n});[/CODE]\n\n**Install**: Triggered when service worker is first registered or updated. Use for caching static assets.\n\n**Waiting**: After install, waits for old service worker to be terminated (unless <pre>skipWaiting()</pre> is called).\n\n**Active**: Takes control of pages. The <pre>activate</pre> event is ideal for cleanup tasks like deleting old caches.\n\nSubsequent page loads use the active service worker for fetch interception and caching strategies.",
      "topic": {
        "topics": [
          "Service Workers and Caching"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does the <pre>credentials</pre> option in <pre>fetch()</pre> control?",
      "options": {
        "A": "Username and password for authentication",
        "B": "Whether cookies and authentication headers are sent with the request",
        "C": "API keys for the request",
        "D": "SSL certificate validation"
      },
      "correct": "B",
      "explanation": "The <pre>credentials</pre> option in <pre>fetch()</pre> controls whether cookies, authorization headers, and TLS client certificates are sent with cross-origin requests. It has three values:\n\n**'omit'**: Never send credentials\n**'same-origin'** (default): Only send credentials for same-origin requests\n**'include'**: Always send credentials, even cross-origin\n\n[CODE]// Send cookies with cross-origin request\nfetch('https://api.example.com/data', {\n  credentials: 'include'\n});\n\n// Never send cookies\nfetch('/api/public', {\n  credentials: 'omit'\n});[/CODE]\n\nFor <pre>'include'</pre> to work with cross-origin requests, the server must:\n1. Set <pre>Access-Control-Allow-Credentials: true</pre>\n2. Specify exact origin (not wildcard) in <pre>Access-Control-Allow-Origin</pre>\n\nThis is crucial for authenticated API calls, maintaining user sessions across domains, or working with third-party APIs that require authentication.",
      "topic": {
        "topics": [
          "Fetch API and Request/Response"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the difference between Session Storage and Local Storage?",
      "options": {
        "A": "Session Storage has more capacity",
        "B": "Session Storage is faster",
        "C": "Session Storage data persists only for the browser session/tab",
        "D": "Session Storage is encrypted"
      },
      "correct": "C",
      "explanation": "The key difference is **persistence scope**:\n\n**Session Storage**:\n- Data persists only for the browser tab/session\n- Each tab has its own separate session storage\n- Data is cleared when the tab is closed\n- Survives page refreshes within the same tab\n\n**Local Storage**:\n- Data persists indefinitely until explicitly deleted\n- Shared across all tabs/windows from the same origin\n- Survives browser restarts\n\n[CODE]// Session Storage - tab-specific\nsessionStorage.setItem('temp', 'data');\n// Available only in this tab, cleared when tab closes\n\n// Local Storage - persistent and shared\nlocalStorage.setItem('settings', 'data');\n// Available across all tabs, persists forever[/CODE]\n\nBoth have the same storage capacity (~5-10 MB) and API. Use Session Storage for:\n- Form data during multi-step processes\n- Temporary UI state for a single session\n- One-time flags or tokens\n\nUse Local Storage for:\n- User preferences and settings\n- Cached data that should persist\n- Long-term application state",
      "topic": {
        "topics": [
          "Local Storage and Session Storage"
        ]
      }
    },
    {
      "id": 15,
      "question": "What does the <pre>threshold</pre> option in Intersection Observer specify?",
      "options": {
        "A": "The time delay before triggering",
        "B": "The minimum element size to observe",
        "C": "The percentage of target element visibility that triggers the callback",
        "D": "The maximum number of elements to observe"
      },
      "correct": "C",
      "explanation": "The <pre>threshold</pre> option specifies what percentage(s) of the target element's visibility should trigger the callback. It accepts a number (0.0 to 1.0) or an array of numbers:\n[CODE]// Trigger when 50% visible\nconst observer1 = new IntersectionObserver(callback, {\n  threshold: 0.5\n});\n\n// Trigger at 0%, 25%, 50%, 75%, and 100% visibility\nconst observer2 = new IntersectionObserver(callback, {\n  threshold: [0, 0.25, 0.5, 0.75, 1.0]\n});\n\n// Example: Fade in when 50% visible\nconst observer3 = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.intersectionRatio >= 0.5) {\n      entry.target.classList.add('fade-in');\n    }\n  });\n}, { threshold: 0.5 });[/CODE]\n\n- <pre>threshold: 0</pre> (default): Triggers as soon as 1 pixel is visible\n- <pre>threshold: 1</pre>: Triggers only when 100% of element is visible\n- Array of thresholds: Callback fires at each specified visibility percentage\n\nUseful for progressive loading, animation triggers, and analytics tracking.",
      "topic": {
        "topics": [
          "Intersection Observer API"
        ]
      }
    },
    {
      "id": 16,
      "question": "What is the main use case for Resize Observer API?",
      "options": {
        "A": "Detecting window resize events only",
        "B": "Resizing images automatically",
        "C": "Observing changes to element dimensions without polling",
        "D": "Detecting device orientation changes"
      },
      "correct": "C",
      "explanation": "Resize Observer provides an efficient way to observe changes to element dimensions without polling or relying on window resize events. It fires callbacks when an element's content box or border box size changes:\n[CODE]const resizeObserver = new ResizeObserver(entries => {\n  entries.forEach(entry => {\n    const { width, height } = entry.contentRect;\n    console.log(`Element resized: ${width}x${height}`);\n    \n    // Adjust layout or perform responsive actions\n    if (width < 400) {\n      entry.target.classList.add('compact');\n    } else {\n      entry.target.classList.remove('compact');\n    }\n  });\n});\n\nconst element = document.querySelector('.resizable');\nresizeObserver.observe(element);[/CODE]\n\nAdvantages over window resize or MutationObserver:\n- Detects element-specific size changes (not just window)\n- More performant than polling with <pre>getBoundingClientRect()</pre>\n- Fires even when size changes due to content, not just window resize\n\nUse cases: responsive components, virtual scrolling, chart rendering, textarea auto-sizing, container queries simulation.",
      "topic": {
        "topics": [
          "Resize Observer API"
        ]
      }
    },
    {
      "id": 17,
      "question": "How does <pre>fetch()</pre> handle redirects by default?",
      "options": {
        "A": "It throws an error",
        "B": "It requires manual handling",
        "C": "It automatically follows redirects (up to 20)",
        "D": "It ignores redirects"
      },
      "correct": "C",
      "explanation": "By default, <pre>fetch()</pre> automatically follows HTTP redirects (3xx status codes) up to a maximum of 20 redirects. You can control this behavior with the <pre>redirect</pre> option:\n[CODE]// Default behavior - follow redirects\nfetch('/api/redirect'); // Automatically follows\n\n// Manual redirect handling\nfetch('/api/redirect', {\n  redirect: 'manual'\n}).then(response => {\n  if (response.type === 'opaqueredirect') {\n    console.log('Redirect detected, not followed');\n  }\n});\n\n// Error on redirect\nfetch('/api/redirect', {\n  redirect: 'error'\n}).catch(err => {\n  console.log('Redirect caused error');\n});[/CODE]\n\n**redirect options**:\n- <pre>'follow'</pre> (default): Automatically follow redirects\n- <pre>'manual'</pre>: Don't follow, return opaque redirect response\n- <pre>'error'</pre>: Reject promise if redirect occurs\n\nThe final <pre>response.url</pre> property shows the URL after following redirects. This is useful for detecting if a redirect happened and where it led.",
      "topic": {
        "topics": [
          "Fetch API and Request/Response"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the purpose of <pre>self.skipWaiting()</pre> in a Service Worker?",
      "options": {
        "A": "Skips the installation phase",
        "B": "Bypasses the fetch event",
        "C": "Forces the new service worker to activate immediately without waiting",
        "D": "Skips caching static assets"
      },
      "correct": "C",
      "explanation": "<pre>self.skipWaiting()</pre> forces a new service worker to activate immediately, bypassing the normal waiting phase where it would wait for all tabs using the old service worker to close:\n[CODE]// In service worker\nself.addEventListener('install', event => {\n  // Skip waiting to activate immediately\n  self.skipWaiting();\n  \n  event.waitUntil(\n    caches.open('v2').then(cache => {\n      return cache.addAll(['/']);\n    })\n  );\n});\n\nself.addEventListener('activate', event => {\n  // Take control of all clients immediately\n  return self.clients.claim();\n});[/CODE]\n\n**Without skipWaiting()**: New service worker waits in 'installed' state until all tabs using the old version are closed.\n\n**With skipWaiting()**: New service worker activates immediately and takes over, potentially causing version conflicts if old pages are still running.\n\n**Best practice**: Combine with <pre>clients.claim()</pre> to take control of existing clients. Use cautiously as it can cause issues if the new version has breaking changes. Better to show an \"update available\" prompt to users.",
      "topic": {
        "topics": [
          "Service Workers and Caching"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does the <pre>enumerable</pre> property descriptor control?",
      "options": {
        "A": "Whether the property can be counted",
        "B": "Whether the property is a number",
        "C": "Whether the property appears in for...in loops and Object.keys()",
        "D": "Whether the property can be iterated"
      },
      "correct": "C",
      "explanation": "The <pre>enumerable</pre> descriptor controls whether a property shows up during enumeration operations like <pre>for...in</pre> loops, <pre>Object.keys()</pre>, <pre>Object.values()</pre>, and <pre>Object.entries()</pre>:\n[CODE]const obj = {};\n\nObject.defineProperty(obj, 'visible', {\n  value: 'I appear',\n  enumerable: true\n});\n\nObject.defineProperty(obj, 'hidden', {\n  value: 'I do not appear',\n  enumerable: false\n});\n\nconsole.log(Object.keys(obj)); // ['visible']\nconsole.log(obj.hidden); // 'I do not appear' - still accessible!\n\nfor (let key in obj) {\n  console.log(key); // Only 'visible'\n}\n\n// JSON.stringify also respects enumerable\nconsole.log(JSON.stringify(obj)); // {\"visible\":\"I appear\"}[/CODE]\n\nNote: The property is still accessible directly (<pre>obj.hidden</pre>) and appears in <pre>Object.getOwnPropertyNames()</pre>. Setting <pre>enumerable: false</pre> is useful for utility methods or internal properties you don't want exposed during iteration.",
      "topic": {
        "topics": [
          "Object.defineProperty and Descriptors"
        ]
      }
    },
    {
      "id": 20,
      "question": "How does <pre>Array.from()</pre> handle array-like objects?",
      "options": {
        "A": "It throws an error",
        "B": "It requires manual conversion",
        "C": "It only works with true arrays",
        "D": "It converts them to arrays by copying indexed properties"
      },
      "correct": "D",
      "explanation": "<pre>Array.from()</pre> converts array-like objects (objects with a <pre>length</pre> property and indexed elements) into real arrays:\n[CODE]// Arguments object\nfunction example() {\n  const argsArray = Array.from(arguments);\n  console.log(Array.isArray(argsArray)); // true\n}\n\n// NodeList\nconst divs = document.querySelectorAll('div');\nconst divsArray = Array.from(divs);\ndivsArray.forEach(div => console.log(div));\n\n// Custom array-like object\nconst arrayLike = {\n  0: 'a',\n  1: 'b',\n  2: 'c',\n  length: 3\n};\nconst realArray = Array.from(arrayLike);\nconsole.log(realArray); // ['a', 'b', 'c']\n\n// With mapping function\nconst doubled = Array.from(arrayLike, x => x + x);\nconsole.log(doubled); // ['aa', 'bb', 'cc'][/CODE]\n\nCommon array-like objects: <pre>arguments</pre>, <pre>NodeList</pre>, <pre>HTMLCollection</pre>, typed arrays, and custom objects. Once converted, you can use array methods like <pre>map</pre>, <pre>filter</pre>, and <pre>reduce</pre>.",
      "topic": {
        "topics": [
          "Array.from and Iterable Protocol"
        ]
      }
    },
    {
      "id": 21,
      "question": "What is the result of calling <pre>fetch()</pre> without handling the response body?",
      "options": {
        "A": "Automatic cleanup happens",
        "B": "The request is cancelled",
        "C": "The browser throws an error",
        "D": "Memory leak as the response stream remains open"
      },
      "correct": "D",
      "explanation": "If you don't consume the response body (via <pre>json()</pre>, <pre>text()</pre>, <pre>blob()</pre>, etc.), the underlying connection remains open and can cause memory leaks and resource exhaustion:\n[CODE]// BAD - Memory leak!\nfetch('/api/data').then(response => {\n  // Response body not consumed\n  console.log('Request complete');\n});\n\n// GOOD - Always consume the body\nfetch('/api/data').then(response => {\n  return response.json(); // or text(), blob(), etc.\n}).then(data => {\n  console.log(data);\n});\n\n// If you don't need the body, explicitly close it\nfetch('/api/ping').then(async response => {\n  if (response.ok) {\n    // Drain and discard the body\n    await response.text();\n  }\n});[/CODE]\n\nThe browser maintains the TCP connection and buffers response data until the stream is consumed. In high-traffic scenarios, this can exhaust available connections and memory. Always call one of the body methods even if you don't need the data, or use <pre>response.body.cancel()</pre> to explicitly abort the stream.",
      "topic": {
        "topics": [
          "Fetch API and Request/Response"
        ]
      }
    },
    {
      "id": 22,
      "question": "What happens when you use <pre>Object.defineProperty()</pre> on an existing property without specifying all descriptors?",
      "options": {
        "A": "It throws an error",
        "B": "It keeps existing descriptor values",
        "C": "It resets all descriptors to defaults",
        "D": "Unspecified descriptors default to false/undefined"
      },
      "correct": "D",
      "explanation": "When using <pre>Object.defineProperty()</pre> on an existing property, any descriptor you don't specify defaults to <pre>false</pre> or <pre>undefined</pre>, which can unexpectedly change the property's behavior:\n[CODE]const obj = { name: 'John' };\n\n// Original property is writable, enumerable, configurable\nconsole.log(Object.getOwnPropertyDescriptor(obj, 'name'));\n// { value: 'John', writable: true, enumerable: true, configurable: true }\n\n// Modify only value - others default to false!\nObject.defineProperty(obj, 'name', {\n  value: 'Jane'\n  // writable, enumerable, configurable all become false!\n});\n\nconsole.log(Object.getOwnPropertyDescriptor(obj, 'name'));\n// { value: 'Jane', writable: false, enumerable: false, configurable: false }\n\nobj.name = 'Bob'; // Fails - now read-only!\ndelete obj.name; // Fails - now non-configurable![/CODE]\n\nTo safely modify one descriptor, explicitly specify all of them:\n[CODE]Object.defineProperty(obj, 'name', {\n  value: 'Jane',\n  writable: true,\n  enumerable: true,\n  configurable: true\n});[/CODE]",
      "topic": {
        "topics": [
          "Object.defineProperty and Descriptors"
        ]
      }
    },
    {
      "id": 23,
      "question": "What does [CODE]cache: 'no-store'[/CODE] do in a fetch request?",
      "options": {
        "A": "Prevents both HTTP cache and browser cache from storing the response",
        "B": "Disables Service Worker caching only",
        "C": "Only prevents disk cache, allows memory cache",
        "D": "Clears all existing cache"
      },
      "correct": "A",
      "explanation": "The <pre>cache: 'no-store'</pre> option tells the browser to fetch directly from the network without consulting or updating any cache (HTTP cache, browser cache, or Service Worker cache):\n[CODE]// Always fetch fresh data, never use cache\nfetch('/api/sensitive-data', {\n  cache: 'no-store'\n});\n\n// Compare with other cache modes:\nfetch('/api/data', { cache: 'default' });     // Use cache if fresh\nfetch('/api/data', { cache: 'no-cache' });    // Validate with server\nfetch('/api/data', { cache: 'force-cache' }); // Use cache even if stale\nfetch('/api/data', { cache: 'only-if-cached' }); // Fail if not cached[/CODE]\n\n**Cache modes**:\n- <pre>'default'</pre>: Standard HTTP caching rules\n- <pre>'no-store'</pre>: Bypass all caching completely\n- <pre>'reload'</pre>: Fetch from network, update cache\n- <pre>'no-cache'</pre>: Validate cached response with server\n- <pre>'force-cache'</pre>: Use cache regardless of freshness\n- <pre>'only-if-cached'</pre>: Only return cached, fail otherwise\n\nUse <pre>'no-store'</pre> for sensitive data (auth tokens, personal info) or when you need guaranteed fresh data.",
      "topic": {
        "topics": [
          "Fetch API and Request/Response"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is a common pattern for handling Service Worker updates?",
      "options": {
        "A": "Automatically reload the page",
        "B": "Block until update completes",
        "C": "Ignore updates until next visit",
        "D": "Show a notification and let users refresh manually"
      },
      "correct": "D",
      "explanation": "The recommended pattern is to detect when a new Service Worker is waiting and prompt users to refresh, giving them control over when the update happens:\n[CODE]// In your app\nnavigator.serviceWorker.register('/sw.js').then(registration => {\n  // Check for updates periodically\n  setInterval(() => registration.update(), 60000);\n  \n  registration.addEventListener('updatefound', () => {\n    const newWorker = registration.installing;\n    \n    newWorker.addEventListener('statechange', () => {\n      if (newWorker.state === 'installed' && \n          navigator.serviceWorker.controller) {\n        // New version waiting\n        showUpdateNotification();\n      }\n    });\n  });\n});\n\nfunction showUpdateNotification() {\n  const update = confirm('New version available! Refresh?');\n  if (update) {\n    // Tell SW to skip waiting\n    navigator.serviceWorker.controller.postMessage('skipWaiting');\n    window.location.reload();\n  }\n}\n\n// In sw.js\nself.addEventListener('message', event => {\n  if (event.data === 'skipWaiting') {\n    self.skipWaiting();\n  }\n});[/CODE]\n\nThis pattern prevents jarring automatic reloads and gives users control, especially important for apps with unsaved data or active sessions.",
      "topic": {
        "topics": [
          "Service Workers and Caching"
        ]
      }
    },
    {
      "id": 25,
      "question": "What are the parameters of a tagged template function?",
      "options": {
        "A": "A single string parameter",
        "B": "An array of strings and an array of values",
        "C": "Just the interpolated values",
        "D": "An array of strings as first parameter, then individual interpolated values"
      },
      "correct": "D",
      "explanation": "A tagged template function receives an array of literal strings as the first parameter, followed by all interpolated values as individual parameters:\n[CODE]function tag(strings, ...values) {\n  console.log(strings); // Array of string literals\n  console.log(values);  // Array of interpolated values\n  return 'processed';\n}\n\nconst name = 'John';\nconst age = 30;\nconst result = tag`Hello ${name}, you are ${age} years old`;\n\n// strings: ['Hello ', ', you are ', ' years old']\n// values: ['John', 30]\n\n// Accessing individually:\nfunction tag2(strings, name, age) {\n  console.log(strings[0]); // 'Hello '\n  console.log(name);       // 'John'\n  console.log(strings[1]); // ', you are '\n  console.log(age);        // 30\n  console.log(strings[2]); // ' years old'\n}[/CODE]\n\nThe <pre>strings</pre> array always has one more element than there are values (split by interpolations). It also has a <pre>raw</pre> property with unprocessed strings:\n[CODE]tag`Line 1\\nLine 2`;\n// strings[0]: 'Line 1\\nLine 2' (processed escape)\n// strings.raw[0]: 'Line 1\\\\nLine 2' (raw backslash)[/CODE]",
      "topic": {
        "topics": [
          "Template Literals and Tagged Templates"
        ]
      }
    }
  ]
}
