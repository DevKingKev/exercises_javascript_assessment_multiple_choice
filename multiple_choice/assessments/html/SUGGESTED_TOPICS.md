# Suggested HTML Assessment Topics

This document outlines suggested topics for HTML assessments across all difficulty levels (easy, medium, hard). Use this as a reference when creating new assessments to ensure comprehensive coverage and avoid duplication.

---

## Easy Level Topics
**Format:** 30 questions, 30 minutes  
**Focus:** Fundamental understanding, basic syntax, common use cases

### Already Covered (Assessments 1-3)

#### Assessment 1: HTML Basics - Elements, Attributes & Structure
- HTML document structure
- Common HTML elements (headings, paragraphs, divs, spans)
- Attributes and their usage (id, class, alt, src, href)
- Semantic HTML (header, nav, main, article, section, aside, footer)
- Links and navigation
- Lists and tables
- Text formatting (strong, em, b, i)

#### Assessment 2: HTML Forms - Input Elements & Form Controls
- Form elements
- Input types (text, email, password, number, date, range, color, file, hidden, checkbox, radio)
- Form attributes (required, placeholder, value, name, disabled, readonly, maxlength, pattern)
- Labels and accessibility
- Form validation (required, pattern, maxlength)
- Select and option elements
- Textarea and buttons

#### Assessment 3: HTML Multimedia - Images, Audio, Video & Embedded Content
- Image elements and attributes (src, alt, width, height, loading, decoding)
- Audio and video elements (controls, autoplay, loop, muted, poster, preload, playsinline)
- Iframe and embedded content (sandbox, allow, embed)
- Figure and figcaption
- Source and track elements
- Responsive images (picture, srcset, sizes)
- Media accessibility (track, captions, subtitles)

### Additional Easy Topics to Consider

#### Meta Tags and SEO Basics
- `<meta charset="UTF-8">`
- `<meta name="viewport">` for responsive design
- `<meta name="description">` for SEO
- `<meta name="keywords">` (historical context)
- `<meta name="author">`
- Open Graph tags basics
- Favicon implementation

#### HTML Entities and Special Characters
- Common entities: `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&apos;`
- Non-breaking space: `&nbsp;`
- Copyright and trademark symbols: `&copy;`, `&reg;`, `&trade;`
- Currency symbols: `&euro;`, `&pound;`, `&yen;`
- Mathematical symbols: `&times;`, `&divide;`, `&plusmn;`
- When and why to use HTML entities

#### Basic Accessibility (ARIA Basics)
- `role` attribute basics
- `aria-label` for accessible labels
- `aria-describedby` for descriptions
- `aria-hidden` to hide decorative elements
- Importance of semantic HTML for accessibility
- Screen reader considerations
- Keyboard navigation basics

#### Comments and Code Organization
- HTML comment syntax: `<!-- comment -->`
- Best practices for commenting
- Code organization and readability
- When to use comments vs semantic elements
- Conditional comments (historical IE context)

#### Block vs Inline Elements
- Understanding display behavior differences
- Common block elements: div, p, h1-h6, section, article
- Common inline elements: span, a, strong, em, img
- How CSS can change display behavior
- Nesting rules and best practices

#### Deprecated HTML Tags
- Why certain tags are deprecated
- `<font>` - use CSS instead
- `<center>` - use CSS text-align
- `<marquee>` - use CSS animations
- `<blink>` - use CSS animations
- `<frame>` and `<frameset>` - use iframe or modern layouts
- Modern alternatives to deprecated tags

#### HTML Validation and Best Practices
- Proper element nesting
- Self-closing tags (void elements)
- Attribute quoting (always use quotes)
- Case sensitivity (lowercase recommended)
- Valid HTML structure
- W3C Validator usage
- Common validation errors and fixes

---

## Medium Level Topics
**Format:** 25 questions, 45 minutes  
**Focus:** Advanced usage, edge cases, browser APIs integration, performance considerations

### Suggested Medium Topics

#### 1. Advanced Form Controls
- `<datalist>` for autocomplete suggestions
- `<fieldset>` and `<legend>` for grouping form controls
- `<output>` for calculation results
- `<progress>` for progress indicators
- `<meter>` for scalar measurements
- Form attribute on inputs (form association)
- `formaction`, `formmethod`, `formnovalidate` attributes

#### 2. Advanced Semantic HTML5
- `<time>` element and `datetime` attribute
- `<mark>` for highlighted text
- `<details>` and `<summary>` for disclosure widgets
- `<dialog>` for modal dialogs
- `<abbr>` for abbreviations
- `<address>` for contact information
- `<cite>` and `<blockquote>` for quotations
- `<code>`, `<pre>`, `<kbd>`, `<samp>`, `<var>` for code

#### 3. Data Attributes
- `data-*` attribute syntax and usage
- Accessing data attributes via JavaScript
- CSS attribute selectors with data attributes
- Use cases for custom data attributes
- JSON in data attributes
- Best practices and naming conventions

#### 4. HTML5 APIs Integration
- Geolocation API basics via HTML
- Web Storage hints (`localStorage`, `sessionStorage`)
- Drag-and-drop API basics (`draggable` attribute)
- `contenteditable` attribute
- `spellcheck` attribute
- `translate` attribute

#### 5. Advanced Table Features
- `<thead>`, `<tbody>`, `<tfoot>` for table structure
- `colspan` and `rowspan` for spanning cells
- `<colgroup>` and `<col>` for column styling
- `scope` attribute for header associations
- `<caption>` for table captions
- Accessible table markup
- Complex table layouts

#### 6. Microdata and Structured Data
- `itemscope`, `itemtype`, `itemprop` attributes
- Schema.org vocabulary basics
- Product, Person, Organization schemas
- Benefits for SEO
- JSON-LD alternative
- Testing structured data

#### 7. Advanced Accessibility (ARIA)
- ARIA roles (button, navigation, search, etc.)
- ARIA states and properties
- `aria-live` regions for dynamic content
- `aria-expanded`, `aria-selected`, `aria-checked`
- `aria-controls`, `aria-owns`
- Focus management with `tabindex`
- Skip navigation links

#### 8. Content Security Policy Basics
- CSP meta tag syntax
- `default-src`, `script-src`, `style-src` directives
- Nonce and hash-based CSP
- Why CSP is important for security
- Common CSP configurations

#### 9. Internationalization (i18n)
- `lang` attribute for language declaration
- `dir` attribute for text direction (ltr/rtl)
- `<bdo>` for bidirectional override
- `<bdi>` for bidirectional isolation
- `translate` attribute
- Character encoding considerations
- Right-to-left (RTL) layout challenges

#### 10. Advanced Multimedia
- Media fragments (`#t=10,20` for time ranges)
- Multiple `<track>` elements for different languages
- `poster` image optimization
- Media Source Extensions hints
- Picture-in-Picture API
- Autoplay policies across browsers

#### 11. Template and Slot Elements
- `<template>` element for inert HTML
- Cloning template content
- Web Components basics
- `<slot>` element for content projection
- Named slots
- Fallback content in slots

#### 12. Picture Element and Art Direction
- Art direction vs resolution switching
- Different images for different contexts (landscape vs portrait)
- `media` attribute in `<source>`
- `type` attribute for format switching (WebP fallback)
- Performance implications

#### 13. Form Validation API
- Constraint Validation API
- `setCustomValidity()` for custom messages
- `validity` property and ValidityState
- `checkValidity()` and `reportValidity()`
- Validation events (`invalid`, `submit`)
- Custom validation patterns

#### 14. Link Relationships
- `rel="nofollow"` for untrusted links
- `rel="noopener"` for security with `target="_blank"`
- `rel="noreferrer"` for privacy
- `rel="prefetch"` and `rel="preload"` for resources
- `rel="preconnect"` and `rel="dns-prefetch"`
- `rel="canonical"` for SEO
- `rel="alternate"` for RSS/language versions

#### 15. Advanced Iframe Features
- Sandbox policies and permissions
- `allow` attribute (Permissions Policy)
- `srcdoc` for inline HTML
- `referrerpolicy` attribute
- Cross-origin communication basics
- `loading="lazy"` for iframes

### Already Covered (Assessments 1-10)

#### Assessment 1: Advanced HTML5 APIs and Semantic Web Technologies
- Semantic HTML5 Elements
- Web Components and Custom Elements
- HTML5 APIs (Canvas, Geolocation, Storage)
- Accessibility (ARIA, Screen Readers)
- Microdata and Structured Data
- Shadow DOM and Encapsulation
- Form Validation and Constraints
- Media Elements and APIs
- Performance Optimization
- Progressive Web App Features

#### Assessment 2: Advanced HTML Semantics, Forms, and Multimedia Integration
- Advanced Semantic Elements
- Complex Form Structures
- Multimedia Integration
- Accessibility Deep Dive
- Performance Optimization
- Meta Tags and SEO
- Data Attributes and Custom Properties
- Progressive Enhancement
- Cross-browser Compatibility
- HTML Validation and Best Practices

#### Assessment 3: Advanced HTML Form Controls and Features
- Advanced Form Controls
- Form Accessibility
- Input Types and Attributes
- Form Validation
- User Experience
- Semantic HTML
- Progressive Enhancement
- Cross-browser Compatibility

#### Assessment 4: Advanced HTML Form Controls and Validation
- Advanced Form Controls
- Form Validation
- Input Attributes
- User Experience
- Accessibility
- Semantic HTML
- Browser Compatibility
- Progressive Enhancement

#### Assessment 5: Advanced Semantic HTML5 Elements
- Semantic HTML5
- Accessibility
- Document Structure
- Text-level Semantics
- Interactive Elements
- Code Representation
- SEO Optimization
- Browser Compatibility

#### Assessment 6: Advanced Semantic HTML5 Implementation
- Semantic HTML5
- Accessibility
- Document Semantics
- Interactive Elements
- Text Semantics
- Code Semantics
- SEO and Metadata
- Browser Support

#### Assessment 7: HTML data-* Attributes: Usage and Best Practices
- data-* attributes
- DOM dataset API
- CSS attribute selectors
- Progressive enhancement
- Best practices

#### Assessment 8: HTML data-* Attributes: Practical Patterns and Safety
- data-* attributes
- DOM dataset API
- CSS attribute selectors
- JSON in data attributes
- Security (XSS)
- Performance
- Accessibility (ARIA)
- Server-side rendering (SSR)

#### Assessment 9: HTML5 APIs Integration: Geolocation, Storage, Drag-and-Drop, Editable Content
- Geolocation API
- Web Storage (localStorage/sessionStorage)
- Drag-and-drop API
- contenteditable
- spellcheck
- translate attribute

#### Assessment 10: HTML5 APIs Integration II
- Geolocation (advanced scenarios)
- Web Storage (advanced scenarios)
- Drag-and-drop (advanced scenarios)
- contenteditable (advanced scenarios)
- spellcheck (advanced usage)
- translate attribute (advanced usage)

### Additional Medium Topics Not Yet Covered

#### 16. Script Loading Strategies and Performance
- `async` vs `defer` attributes for script loading
- `<script type="module">` basics
- `nomodule` attribute for legacy browser fallbacks
- Script placement and page load performance
- Blocking vs non-blocking scripts
- `document.write()` and why to avoid it
- Dynamic script insertion
- Preload scripts with `<link rel="preload">`
- Resource hints for JavaScript files

#### 17. Link Relations and Resource Hints (Medium Focus)
- `rel="preload"` for critical resources
- `rel="prefetch"` for future navigation resources
- `rel="preconnect"` for early connections
- `rel="dns-prefetch"` for DNS resolution
- `rel="noopener"` security with `target="_blank"`
- `rel="noreferrer"` for privacy
- `rel="canonical"` for duplicate content
- `rel="alternate"` for translations and RSS
- Performance impact of resource hints

#### 18. Meta Tags Beyond SEO
- `<meta name="viewport">` responsive design
- `<meta name="theme-color">` for browser chrome
- `<meta http-equiv="refresh">` and alternatives
- Open Graph protocol tags (og:title, og:image, og:description)
- Twitter Card meta tags
- `<meta name="robots">` for search engine control
- `<meta http-equiv="Content-Security-Policy">`
- App-specific meta tags (apple-mobile-web-app-*)

#### 19. Dialog Element and Modal Patterns
- `<dialog>` element basics
- `showModal()` vs `show()` methods
- `::backdrop` pseudo-element styling
- `close()` method and return values
- Dialog accessibility considerations
- Focus management in modals
- Escape key handling
- Click-outside-to-close patterns
- Polyfills for older browsers

#### 20. Output, Progress, and Meter Elements
- `<output>` for calculation results
- `for` attribute on output elements
- `<progress>` for determinate progress
- `<progress>` indeterminate state
- `<meter>` for scalar measurements
- `min`, `max`, `value`, `low`, `high`, `optimum` attributes
- Use cases: progress bars, ratings, disk usage
- Accessibility with progress/meter elements
- Styling considerations

#### 21. Time and Datetime Elements
- `<time>` element semantic meaning
- `datetime` attribute formats (ISO 8601)
- Machine-readable dates for SEO
- Valid datetime formats (dates, times, durations)
- Microdata integration with time elements
- Browser display vs datetime value
- Use cases: publishing dates, event times, durations

#### 22. Base Element and Document Base URL
- `<base href="">` for relative URLs
- `<base target="">` for link targets
- Security implications of base element
- Impact on all relative URLs in document
- Fragment identifiers and base href
- Best practices and when to avoid
- Single page application considerations

#### 23. SVG in HTML Integration (Medium Level)
- Inline SVG vs `<img src="*.svg">`
- `<svg>` element in HTML documents
- SVG accessibility with `<title>` and `<desc>`
- ARIA attributes on SVG elements
- SVG sprites and `<use>` element
- CSS styling of inline SVG
- JavaScript manipulation of SVG DOM
- Performance: inline vs external SVG

#### 24. Responsive Images: srcset and sizes (Medium Deep Dive)
- `srcset` with width descriptors (w)
- `srcset` with pixel density descriptors (x)
- `sizes` attribute and media conditions
- How browsers select images from srcset
- Art direction vs resolution switching
- Performance benefits of responsive images
- Testing responsive image selection
- Fallback strategies for older browsers

#### 25. Internationalization Elements
- `<bdi>` (Bi-Directional Isolation)
- `<bdo>` (Bi-Directional Override)
- `<ruby>`, `<rt>`, `<rp>` for East Asian typography
- `lang` attribute on specific elements
- `dir` attribute (ltr, rtl, auto)
- Character encoding and `<meta charset>`
- Language negotiation patterns
- RTL layout considerations

---

## Hard Level Topics
**Format:** 20 questions, 60 minutes  
**Focus:** Advanced patterns, optimization, security, browser internals, edge cases

### Suggested Hard Topics

#### 1. Custom Elements and Shadow DOM
- Defining custom elements with `customElements.define()`
- Autonomous vs customized built-in elements
- Custom element lifecycle callbacks
- Shadow DOM encapsulation
- Light DOM vs Shadow DOM
- Slots and composition
- CSS scoping in Shadow DOM

#### 2. Advanced ARIA Patterns
- Complex widget patterns (tabs, accordions, trees)
- Focus management in dynamic UIs
- Keyboard navigation patterns (arrow keys, Home/End)
- Live region politeness levels (assertive vs polite)
- ARIA best practices and anti-patterns
- Testing with screen readers
- ARIA 1.2+ features

#### 3. Performance Optimization
- Resource hints: `<link rel="preload">`
- `<link rel="prefetch">` for future navigation
- `<link rel="preconnect">` for early connection
- `<link rel="dns-prefetch">` for DNS resolution
- Critical CSS inlining
- Render-blocking resources
- `async` and `defer` for scripts
- Resource prioritization

#### 4. Advanced Responsive Images
- Art direction with `<picture>`
- Pixel density descriptors (1x, 2x, 3x)
- Type switching (WebP with JPEG fallback)
- Combining `srcset` width descriptors with `sizes`
- Client hints for automatic optimization
- Performance implications of different strategies

#### 5. HTML Parsing and the DOM
- Document flow and parsing order
- Parser behavior with malformed HTML
- Quirks mode vs standards mode
- DOCTYPE declarations and their effects
- XHTML vs HTML5 parsing
- Self-closing tags in HTML5
- Script execution and DOM construction

#### 6. Security Headers and Attributes
- Content Security Policy (CSP) in depth
- Cross-Origin Resource Sharing (CORS) headers
- `crossorigin` attribute for scripts/images
- Referrer Policy (`referrerpolicy` attribute)
- Subresource Integrity (SRI) with `integrity` attribute
- X-Frame-Options and clickjacking prevention
- Trusted Types for XSS prevention

#### 7. Module Scripts and Import Maps
- `<script type="module">` for ES6 modules
- Import maps for module resolution
- Dynamic imports in HTML
- Module preloading
- Module vs classic script differences
- Browser compatibility and polyfills

#### 8. Advanced Form Techniques
- FormData API integration
- Custom form controls with `ElementInternals`
- Form-associated custom elements
- `formdata` event for serialization
- File upload with progress tracking
- Multi-step form patterns
- Client-side validation strategies

#### 9. Accessibility Edge Cases
- Complex ARIA patterns (grids, treeviews, comboboxes)
- Focus management in SPAs
- Screen reader announcement timing
- Accessible loading states and spinners
- Keyboard trap prevention
- ARIA live region edge cases
- Testing methodologies

#### 10. HTML Templating
- `<template>` element deep dive
- Template cloning and performance
- Slots and content projection patterns
- Template instantiation strategies
- Declarative Shadow DOM
- Server-side vs client-side templating

#### 11. Service Worker Integration
- Web App Manifest (`<link rel="manifest">`)
- Manifest file structure
- Offline capabilities hints
- Add to home screen prompts
- Theme color and display modes
- Icons for different platforms

#### 12. Cross-Origin Resource Sharing (CORS)
- CORS headers and preflight requests
- `crossorigin` attribute values (anonymous vs use-credentials)
- CORS and canvas tainted images
- Credential handling in cross-origin requests
- CORS errors and debugging
- Security implications

#### 13. Subresource Integrity (SRI)
- `integrity` attribute for scripts and stylesheets
- Hash generation for SRI
- Multiple hash algorithms
- `crossorigin` requirement for SRI
- CDN usage with SRI
- Fallback strategies when integrity fails

#### 14. Feature Detection
- Modernizr patterns in HTML
- Progressive enhancement strategies
- Feature queries in HTML context
- Polyfill loading strategies
- Graceful degradation
- No-JavaScript fallbacks

#### 15. HTML Email Constraints
- Limited HTML/CSS support in email clients
- Table-based layouts for email
- Inline styles requirement
- Common email client quirks
- Outlook-specific hacks
- Responsive email techniques
- Testing across email clients

#### 16. Canvas and SVG Integration
- Inline SVG vs `<img>` tag
- SVG in `<object>` and `<embed>`
- Canvas element advanced usage
- Canvas vs SVG use cases
- Accessibility considerations for graphics
- Fallback content strategies

#### 17. Browser Rendering Optimization
- Critical rendering path
- Render-blocking resources identification
- Above-the-fold optimization
- Layout thrashing prevention
- Reflow and repaint minimization
- Composite layers
- Will-change property hints

#### 18. Custom Data Attributes Patterns
- Advanced `data-*` usage in SPAs
- Data binding patterns
- Configuration via data attributes
- Micro-interactions with data attributes
- Analytics tracking with data attributes
- A/B testing metadata

#### 19. Lazy Loading Strategies
- Native lazy loading (`loading="lazy"`)
- Intersection Observer API integration
- Lazy loading images, iframes, and scripts
- Performance monitoring for lazy loading
- Progressive image loading
- Placeholder strategies (LQIP, blur-up)

#### 20. HTML5 Drag and Drop API
- `draggable` attribute
- Drag events (dragstart, drag, dragend)
- Drop events (dragenter, dragover, dragleave, drop)
- `dataTransfer` object
- Custom drag images
- Drop zones and allowed effects
- Accessibility considerations for drag-and-drop

### Already Covered Hard Topics

*(No hard assessments created yet)*

### Additional Hard Topics Not Yet Covered

#### 21. Advanced Content Security Policy (CSP)
- CSP directives in depth (script-src, style-src, img-src, etc.)
- Nonce-based CSP implementation
- Hash-based CSP for inline scripts/styles
- `strict-dynamic` for modern CSP
- CSP reporting with `report-uri` and `report-to`
- CSP Level 3 features
- Trusted Types API integration
- Common CSP bypass techniques and prevention
- CSP in development vs production

#### 22. Advanced CORS and Cross-Origin Patterns
- Preflight requests (OPTIONS) in detail
- CORS with credentials (`credentials: 'include'`)
- `crossorigin` attribute values and implications
- CORS error debugging strategies
- Canvas tainting and `crossorigin="anonymous"`
- Cross-origin window communication (postMessage)
- COEP (Cross-Origin-Embedder-Policy)
- COOP (Cross-Origin-Opener-Policy)
- CORP (Cross-Origin-Resource-Policy)

#### 23. Subresource Integrity (SRI) Implementation
- Generating SRI hashes (SHA-256, SHA-384, SHA-512)
- Multiple hash algorithms for fallback
- `integrity` attribute syntax
- Combining SRI with CORS (`crossorigin` requirement)
- CDN resource verification with SRI
- Build tools integration for SRI
- Fallback strategies when SRI fails
- Performance implications
- Content updates and hash management

#### 24. Advanced Module Scripts and Import Maps
- ES modules in HTML deep dive
- Import maps for bare module specifiers
- `<script type="importmap">` syntax
- Scopes in import maps
- Dynamic imports and code splitting
- Module preloading strategies (`<link rel="modulepreload">`)
- `nomodule` for legacy fallbacks
- Module script execution timing
- Top-level await in modules

#### 25. Web Components: Custom Elements Lifecycle
- Autonomous custom elements
- Customized built-in elements (is="...")
- Custom element lifecycle callbacks (connectedCallback, disconnectedCallback)
- `attributeChangedCallback` and `observedAttributes`
- `adoptedCallback` for document moves
- Custom element registry
- Extending native elements
- Upgrade timing and undefined elements
- Best practices for custom elements

#### 26. Shadow DOM Encapsulation Patterns
- Open vs closed shadow roots
- Shadow DOM CSS scoping
- `::slotted()` pseudo-element
- CSS custom properties across shadow boundaries
- `::part()` and `::theme()` pseudo-elements
- Shadow DOM event retargeting
- Composed vs non-composed events
- Focus delegation in shadow DOM
- Accessibility challenges with shadow DOM

#### 27. Advanced Performance: Critical Rendering Path
- HTML parsing and DOM construction
- CSSOM construction
- Render tree creation
- Layout (reflow) operations
- Paint and composite operations
- Critical CSS identification and inlining
- Above-the-fold optimization
- Render-blocking resources elimination
- Browser rendering pipeline deep dive
- Performance metrics (FCP, LCP, CLS)

#### 28. HTML Sanitization and XSS Prevention
- DOMPurify and HTML sanitization
- Trusted Types API
- XSS attack vectors in HTML
- `innerHTML` vs `textContent` security
- Attribute-based XSS (event handlers in attributes)
- DOM clobbering attacks
- Mutation XSS (mXSS)
- CSP as XSS mitigation layer
- HTML sanitization best practices

#### 29. Advanced Form Patterns: ElementInternals
- Form-associated custom elements
- `ElementInternals` API
- Custom form controls with validation
- `formAssociated` static property
- Form lifecycle callbacks (formResetCallback, formStateRestoreCallback)
- Custom validity states
- Accessibility for custom form controls
- Integration with native form validation

#### 30. HTML Email Development Constraints
- Email client rendering engines
- Table-based layouts for email
- Inline CSS requirement and specificity
- Limited HTML/CSS support (no flexbox, grid, etc.)
- Outlook-specific rendering quirks
- Gmail clipping and CSS stripping
- Responsive email techniques (media queries support)
- Testing across email clients (Litmus, Email on Acid)
- Dark mode support in email

#### 31. Streaming HTML and Progressive Rendering
- HTTP streaming and chunked transfer encoding
- Progressive HTML rendering
- `<script>` placement for perceived performance
- Flushing early HTML for faster FCP
- Skeleton screens and placeholders
- Server-side rendering (SSR) streaming
- Hydration strategies (progressive, partial)
- Out-of-order streaming

#### 32. HTML Parsing Algorithms and Edge Cases
- HTML5 parsing algorithm
- Error recovery and malformed HTML
- Void elements and self-closing tags
- Misnested tags and adoption agency algorithm
- Foreign content (SVG, MathML) in HTML
- Template element parsing
- Document.write() and parser blocking
- Quirks mode, limited-quirks mode, standards mode

#### 33. Advanced Accessibility: Complex ARIA Patterns
- ARIA authoring practices for complex widgets
- Accordion pattern with proper ARIA
- Tabs pattern (tab, tabpanel, tablist)
- Tree view implementation
- Combobox (autocomplete) patterns
- Grid and treegrid patterns
- Menu and menubar patterns
- Focus management strategies
- Keyboard navigation (arrow keys, Home, End, etc.)

#### 34. Web App Manifest and PWA Integration
- `<link rel="manifest">` and manifest.json
- Manifest fields (name, short_name, icons, start_url)
- Display modes (fullscreen, standalone, minimal-ui, browser)
- Theme and background colors
- Scope and navigation scope
- App icons for different platforms
- Shortcuts API
- Share target registration
- Install prompts and beforeinstallprompt

#### 35. Declarative Shadow DOM
- `<template shadowrootmode="open|closed">`
- Server-side rendering with shadow DOM
- Serialization of shadow DOM
- Browser support and polyfills
- Hydration with declarative shadow DOM
- Benefits over imperative shadow DOM
- Limitations and constraints

#### 36. HTML and WebAssembly Integration
- Loading WebAssembly modules
- `<script type="module">` with WASM
- Instantiating WASM from HTML
- Streaming WASM compilation
- WASM memory and HTML interaction
- Use cases for WASM in web applications
- Performance considerations

#### 37. Advanced Meta Tags and HTTP Headers
- `http-equiv` meta tags and equivalent HTTP headers
- Content-Security-Policy via meta tag vs header
- Referrer-Policy configuration
- Feature-Policy (now Permissions-Policy)
- X-UA-Compatible for IE compatibility
- Cache control via meta tags (limitations)
- Prerendering hints (deprecated/modern alternatives)

#### 38. HTML Specification Deep Dives
- WHATWG Living Standard vs W3C specs
- HTML parsing specification details
- Scripting and execution contexts
- Browsing contexts and navigation
- Origin and security model
- HTML serialization and deserialization
- Extension points in HTML spec
- Reading and interpreting the spec

#### 39. Advanced Lazy Loading and Intersection Observer
- Native lazy loading (`loading="lazy"`) behavior
- Intersection Observer API for custom lazy loading
- Threshold and rootMargin configuration
- Progressive image loading (LQIP, SQIP, blur-up)
- Lazy loading iframes and embeds
- Infinite scroll implementation
- Performance monitoring for lazy-loaded resources
- Preloading next sections

#### 40. Browser Rendering Optimization Patterns
- Layout thrashing prevention
- Read/write batching for DOM operations
- `requestAnimationFrame` for visual updates
- `will-change` CSS property hints from HTML
- Composite layers and transform/opacity
- Paint flashing and layer boundaries
- Forced synchronous layouts
- Off-main-thread rendering
- Runtime performance profiling

---

## Topic Distribution Strategy

### Easy Level Philosophy
- **What elements do:** Understanding basic functionality
- **Basic attributes:** Common attributes and their purposes
- **Common use cases:** Real-world scenarios
- **Accessibility basics:** Fundamental accessible markup
- **Proper syntax:** Correct HTML structure and validation

### Medium Level Philosophy
- **Less common elements:** Important but not everyday elements
- **Complex attributes:** Advanced attribute combinations
- **API integration:** How HTML works with browser APIs
- **Advanced patterns:** Beyond basic usage
- **Performance awareness:** Understanding performance implications

### Hard Level Philosophy
- **Web components:** Modern component architecture
- **Security and performance:** Deep optimization techniques
- **Complex accessibility:** Advanced ARIA implementation
- **Browser internals:** How browsers parse and render HTML
- **Advanced integration:** Complex patterns and architectures
- **Edge cases:** Browser compatibility and unusual scenarios

---

## Assessment Creation Guidelines

When creating new assessments using these topics:

1. **Avoid Duplication:** Check existing assessments to ensure topics aren't repeated
2. **Progressive Difficulty:** Build on concepts from easier levels
3. **Real-World Focus:** Use practical examples developers encounter
4. **MDN Documentation:** Link all topics to official MDN documentation
5. **Comprehensive Coverage:** Aim for 7-10 topics per assessment
6. **Question Distribution:** 2-4 questions per topic
7. **Detailed Explanations:** Provide educational value in every answer
8. **Code Examples:** Use [CODE] and <pre> tags appropriately per guidelines
9. **Accessibility Focus:** Include accessibility considerations throughout
10. **Modern Standards:** Focus on current HTML5 practices

---

## Future Expansion Areas

### Potential Easy Topics
- HTML debugging techniques
- Browser developer tools for HTML inspection
- Common HTML mistakes and how to fix them
- HTML and CSS integration basics
- Mobile-first HTML structure

### Potential Medium Topics
- HTML preprocessing (Pug/Jade, Handlebars basics)
- Component-based thinking in HTML
- HTML performance profiling
- Accessibility testing tools
- SEO advanced techniques

### Potential Hard Topics
- WebAssembly integration
- Streaming HTML parsing
- HTML sanitization and security
- Progressive Web App architecture
- Advanced SEO structured data patterns
- HTML specification deep dives

---

**Last Updated:** November 13, 2025  
**Assessment Count:** 3 Easy, 10 Medium, 0 Hard  
**Next Priority:** Additional medium assessments covering script loading, link relations, meta tags, dialog elements, and responsive images not yet fully addressed

