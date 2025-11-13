module.exports = {
  "metadata": {
    "title": "Security, Networking & Best Practices",
    "description": "Medium-level questions on web security, CORS, CSP, cookies, input validation, and safe coding practices.",
    "difficulty": "medium",
    "domain": "javascript",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "Cross-Site Scripting (XSS)",
      "Content Security Policy (CSP)",
      "CORS and preflight",
      "Cookies and SameSite",
      "Secure transmission (HTTPS)",
      "Input validation and sanitization",
      "Authentication tokens and storage",
      "CSRF prevention",
      "Dependency vulnerabilities",
      "Principle of least privilege"
    ],
    "assessmentId": 4,
    "assessmentUniqueId": 1762278151813,
    "testType": "multiple-choice",
    "topicLinks": [
      {
        "topicName": "Cross-Site Scripting (XSS)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"
      },
      {
        "topicName": "Content Security Policy (CSP)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
      },
      {
        "topicName": "CORS and preflight",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
      },
      {
        "topicName": "Cookies and SameSite",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"
      },
      {
        "topicName": "Secure transmission (HTTPS)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security"
      },
      {
        "topicName": "Input validation and sanitization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
      },
      {
        "topicName": "Authentication tokens and storage",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"
      },
      {
        "topicName": "CSRF prevention",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/CSRF"
      },
      {
        "topicName": "Dependency vulnerabilities",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Using_HTTPS"
      },
      {
        "topicName": "Principle of least privilege",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/Principle_of_least_privilege"
      }
    ]
  },
  "questions": [
    {
      "id": 1,
      "question": "Which practice helps mitigate reflected XSS vulnerabilities?",
      "options": {
        "A": "Escape or sanitize untrusted input before inserting into HTML",
        "B": "Always eval user input",
        "C": "Store user input in localStorage without checks",
        "D": "Disable HTTPS"
      },
      "correct": "A",
      "explanation": "Escaping or sanitizing user input before inserting into HTML prevents injection of executable script code.",
      "topic": {
        "topics": [
          "Cross-Site Scripting (XSS)"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which header helps you restrict sources for scripts and resources to mitigate XSS?",
      "options": {
        "A": "Content-Security-Policy",
        "B": "X-Frame-Options",
        "C": "Referrer-Policy",
        "D": "X-Powered-By"
      },
      "correct": "A",
      "explanation": "Content-Security-Policy (CSP) allows you to restrict allowed sources for scripts/styles/etc., reducing XSS risks.",
      "topic": {
        "topics": [
          "Content Security Policy (CSP)"
        ]
      }
    },
    {
      "id": 3,
      "question": "When using fetch from a browser to another origin that requires credentials, what must be set?",
      "options": {
        "A": "credentials: 'include' and server must allow with Access-Control-Allow-Credentials",
        "B": "Use synchronous XHR",
        "C": "cache: 'no-store' only",
        "D": "mode: 'no-cors'"
      },
      "correct": "A",
      "explanation": "To include cookies/credentials in CORS requests, set credentials: 'include' and the server must respond with Access-Control-Allow-Credentials: true and proper origins.",
      "topic": {
        "topics": [
          "CORS and preflight"
        ]
      }
    },
    {
      "id": 4,
      "question": "Which cookie attribute helps prevent sending cookies on cross-site requests?",
      "options": {
        "A": "SameSite",
        "B": "Secure",
        "C": "HttpOnly",
        "D": "Path"
      },
      "correct": "A",
      "explanation": "SameSite can be set to Lax/Strict to control whether cookies are sent on cross-site requests, helping mitigate CSRF.",
      "topic": {
        "topics": [
          "Cookies and SameSite"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which storage is safer for short-lived auth tokens to avoid XSS leakage?",
      "options": {
        "A": "HTTP-only secure cookies",
        "B": "sessionStorage",
        "C": "localStorage",
        "D": "Embedding tokens in the DOM"
      },
      "correct": "A",
      "explanation": "HTTP-only secure cookies are not accessible to JavaScript, reducing risk of token theft via XSS compared to localStorage.",
      "topic": {
        "topics": [
          "Authentication tokens and storage"
        ]
      }
    },
    {
      "id": 6,
      "question": "Which measure helps prevent CSRF attacks?",
      "options": {
        "A": "Use SameSite cookies, CSRF tokens, or require custom headers on state-changing requests",
        "B": "Accept all POST requests",
        "C": "Disable cookies",
        "D": "Only use GET requests for actions"
      },
      "correct": "A",
      "explanation": "Cross-site request forgery (CSRF) mitigations include SameSite cookies, anti-CSRF tokens, and requiring custom headers such as X-Requested-With which cannot be sent cross-origin without CORS permission.",
      "topic": {
        "topics": [
          "CSRF prevention"
        ]
      }
    },
    {
      "id": 7,
      "question": "Which header forces browsers to only use HTTPS for subresources on a site that supports HTTPS?",
      "options": {
        "A": "Strict-Transport-Security",
        "B": "X-Content-Type-Options",
        "C": "X-Frame-Options",
        "D": "Content-Security-Policy"
      },
      "correct": "A",
      "explanation": "Strict-Transport-Security (HSTS) tells browsers to only use HTTPS for the site for a specified duration.",
      "topic": {
        "topics": [
          "Secure transmission (HTTPS)"
        ]
      }
    },
    {
      "id": 8,
      "question": "Which is a recommended practice for preventing supply-chain vulnerabilities?",
      "options": {
        "A": "Blindly trust latest versions",
        "B": "Pin dependency versions, run vulnerability scans, and review changelogs",
        "C": "Use only unmaintained packages",
        "D": "Copy-paste dependencies into the repo"
      },
      "correct": "B",
      "explanation": "Pinning versions, automated vulnerability scanning (e.g., npm audit), and reviewing dependency changes help mitigate supply-chain risks.",
      "topic": {
        "topics": [
          "Dependency vulnerabilities"
        ]
      }
    },
    {
      "id": 9,
      "question": "Which of the following is NOT an effective input validation rule?",
      "options": {
        "A": "Whitelist allowed characters/formats",
        "B": "Trust client-side validation alone",
        "C": "Normalize inputs before validation",
        "D": "Validate on server-side as well as client-side"
      },
      "correct": "B",
      "explanation": "Client-side validation improves UX but cannot be trusted for security; server-side validation is required.",
      "topic": {
        "topics": [
          "Input validation and sanitization"
        ]
      }
    },
    {
      "id": 10,
      "question": "Which of these headers can help mitigate clickjacking?",
      "options": {
        "A": "X-XSS-Protection only",
        "B": "X-Frame-Options or CSP frame-ancestors",
        "C": "Access-Control-Allow-Origin",
        "D": "Content-Type"
      },
      "correct": "B",
      "explanation": "X-Frame-Options or the CSP frame-ancestors directive can prevent the page from being framed by other sites (clickjacking protection).",
      "topic": {
        "topics": [
          "Content Security Policy (CSP)"
        ]
      }
    },
    {
      "id": 11,
      "question": "Which SameSite value allows cookies to be sent on top-level navigations but not on cross-site subrequests?",
      "options": {
        "A": "Strict",
        "B": "Lax",
        "C": "None without Secure",
        "D": "Disabled"
      },
      "correct": "B",
      "explanation": "SameSite=Lax permits cookies on top-level navigations (e.g., link clicks) but prevents sending cookies on most cross-site subrequests like images or iframes.",
      "topic": {
        "topics": [
          "Cookies and SameSite"
        ]
      }
    },
    {
      "id": 12,
      "question": "Which technique reduces the risk of executing untrusted scripts embedded in user input?",
      "options": {
        "A": "Use innerHTML with user content",
        "B": "Use textContent or properly escape before insertion",
        "C": "Eval the content in a sandboxed iframe without restrictions",
        "D": "Store raw HTML in localStorage and execute later"
      },
      "correct": "B",
      "explanation": "textContent inserts text without parsing as HTML, and escaping user content prevents scripts from executing.",
      "topic": {
        "topics": [
          "Cross-Site Scripting (XSS)"
        ]
      }
    },
    {
      "id": 13,
      "question": "Which is an example of applying the principle of least privilege in web apps?",
      "options": {
        "A": "Grant all services full admin access",
        "B": "Give each service only the permissions it needs for its role",
        "C": "Use root/administrator for regular operations",
        "D": "Store credentials in publicly readable files"
      },
      "correct": "B",
      "explanation": "Least privilege means giving components minimum permissions necessary to perform their job to limit potential damage from compromise.",
      "topic": {
        "topics": [
          "Principle of least privilege"
        ]
      }
    },
    {
      "id": 14,
      "question": "Which header must a server include to allow cross-origin requests from example.com using credentials?",
      "options": {
        "A": "Access-Control-Allow-Origin: *",
        "B": "X-Content-Type-Options: nosniff",
        "C": "Access-Control-Allow-Origin: https://example.com and Access-Control-Allow-Credentials: true",
        "D": "Content-Security-Policy: default-src 'self'"
      },
      "correct": "C",
      "explanation": "When sending credentials, the server must echo the precise origin in Access-Control-Allow-Origin and set Access-Control-Allow-Credentials: true; '*' is not allowed with credentials.",
      "topic": {
        "topics": [
          "CORS and preflight"
        ]
      }
    },
    {
      "id": 15,
      "question": "Which practice helps reduce impact of compromised third-party code?",
      "options": {
        "A": "Bundle unverified third-party scripts directly from CDN without auditing",
        "B": "Use eval to isolate code",
        "C": "Vendor or sandbox third-party code and limit its privileges",
        "D": "Disable all security headers for speed"
      },
      "correct": "C",
      "explanation": "Auditing, vendoring, sandboxing, and applying CSP or iframe isolation reduce the blast radius of compromised third-party scripts.",
      "topic": {
        "topics": [
          "Dependency vulnerabilities"
        ]
      }
    },
    {
      "id": 16,
      "question": "Which CSP directive allows you to restrict script sources?",
      "options": {
        "A": "frame-ancestors only",
        "B": "default-src only",
        "C": "script-src",
        "D": "connect-src only"
      },
      "correct": "C",
      "explanation": "The script-src directive controls from which origins scripts are allowed to be loaded and executed.",
      "topic": {
        "topics": [
          "Content Security Policy (CSP)"
        ]
      }
    },
    {
      "id": 17,
      "question": "Which practice helps protect tokens leaked via XSS?",
      "options": {
        "A": "Store tokens in localStorage",
        "B": "Embed tokens in the DOM",
        "C": "Use HttpOnly cookies and rotate tokens frequently",
        "D": "Send tokens in query strings"
      },
      "correct": "C",
      "explanation": "HttpOnly cookies cannot be read by JavaScript and rotating tokens reduces the window an attacker can use a stolen token.",
      "topic": {
        "topics": [
          "Authentication tokens and storage"
        ]
      }
    },
    {
      "id": 18,
      "question": "Which tool helps detect known vulnerabilities in your dependencies?",
      "options": {
        "A": "console.log",
        "B": "manual grep only",
        "C": "npm audit or similar SCA tools",
        "D": "browser DevTools only"
      },
      "correct": "C",
      "explanation": "Software Composition Analysis tools like npm audit, Snyk, Dependabot help find known CVEs in dependencies.",
      "topic": {
        "topics": [
          "Dependency vulnerabilities"
        ]
      }
    },
    {
      "id": 19,
      "question": "Which HTTP header helps prevent MIME type sniffing vulnerabilities?",
      "options": {
        "A": "Content-Security-Policy",
        "B": "X-Frame-Options",
        "C": "X-Content-Type-Options: nosniff",
        "D": "Referrer-Policy"
      },
      "correct": "C",
      "explanation": "X-Content-Type-Options: nosniff prevents browsers from MIME-sniffing responses away from declared content-type, reducing certain types of attacks.",
      "topic": {
        "topics": [
          "Principle of least privilege"
        ]
      }
    },
    {
      "id": 20,
      "question": "Which cookie attribute ensures cookies are only sent over secure channels?",
      "options": {
        "A": "Path",
        "B": "HttpOnly",
        "C": "SameSite",
        "D": "Secure"
      },
      "correct": "D",
      "explanation": "The Secure attribute ensures cookies are only sent over HTTPS connections.",
      "topic": {
        "topics": [
          "Cookies and SameSite"
        ]
      }
    },
    {
      "id": 21,
      "question": "Which of these is a recommended defensive measure against reflected URL-based attacks?",
      "options": {
        "A": "Echo user input in HTML without sanitizing",
        "B": "Use document.write with user data",
        "C": "Disable all input validation",
        "D": "Validate and encode URL parameters before use"
      },
      "correct": "D",
      "explanation": "Validating and encoding data prevents injection attacks that rely on reflected inputs.",
      "topic": {
        "topics": [
          "Input validation and sanitization"
        ]
      }
    },
    {
      "id": 22,
      "question": "Which header combination is appropriate for enabling CORS with credentials for a specific origin?",
      "options": {
        "A": "Access-Control-Allow-Origin: * and Access-Control-Allow-Credentials: true",
        "B": "No headers needed",
        "C": "X-Frame-Options: SAMEORIGIN",
        "D": "Access-Control-Allow-Origin: https://app.example and Access-Control-Allow-Credentials: true"
      },
      "correct": "D",
      "explanation": "When sending credentials, the server must set Access-Control-Allow-Origin to the exact origin and set Access-Control-Allow-Credentials: true; '*' cannot be used with credentials.",
      "topic": {
        "topics": [
          "CORS and preflight"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is Subresource Integrity (SRI) used for?",
      "options": {
        "A": "Encrypting API responses",
        "B": "Automatically updating dependencies",
        "C": "Hiding script sources",
        "D": "Verifying a fetched resource (like a script) hasn't been tampered with using an integrity hash"
      },
      "correct": "D",
      "explanation": "SRI allows browsers to check that a fetched resource matches an expected cryptographic hash, preventing tampered CDN resources from executing.",
      "topic": {
        "topics": [
          "Dependency vulnerabilities"
        ]
      }
    },
    {
      "id": 24,
      "question": "Which approach helps limit brute-force login attempts?",
      "options": {
        "A": "Allow unlimited retries",
        "B": "Use very short passwords only",
        "C": "Return detailed errors about user existence",
        "D": "Rate-limiting, exponential backoff and account lockouts"
      },
      "correct": "D",
      "explanation": "Rate-limiting and backoff reduce the effectiveness of automated brute-force attacks; avoid detailed error messages that aid attackers.",
      "topic": {
        "topics": [
          "Principle of least privilege"
        ]
      }
    },
    {
      "id": 25,
      "question": "Which header should you remove or avoid exposing to minimise fingerprinting and information leakage?",
      "options": {
        "A": "Content-Security-Policy",
        "B": "Referrer-Policy",
        "C": "Strict-Transport-Security",
        "D": "X-Powered-By"
      },
      "correct": "D",
      "explanation": "X-Powered-By can reveal server framework info; removing it reduces information leakage that could help attackers target known vulnerabilities.",
      "topic": {
        "topics": [
          "Principle of least privilege"
        ]
      }
    }
  ]
}
