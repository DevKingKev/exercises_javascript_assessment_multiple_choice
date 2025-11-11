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

**Last Updated:** November 11, 2025  
**Assessment Count:** 3 Easy, 0 Medium, 0 Hard  
**Next Priority:** Additional easy assessments covering meta tags, HTML entities, and accessibility basics
