# Suggested CSS Assessment Topics

This document outlines suggested topics for CSS assessments across all difficulty levels (easy, medium, hard). Use this as a reference when creating new assessments to ensure comprehensive coverage and avoid duplication.

---

## Easy Level Topics
**Format:** 30 questions, 30 minutes  
**Focus:** Fundamental understanding, basic syntax, common properties, layout basics

### Suggested Easy Topics

#### 1. CSS Basics - Selectors and Syntax
- CSS syntax (selector, property, value)
- Element selectors (p, div, h1)
- Class selectors (.classname)
- ID selectors (#idname)
- Universal selector (*)
- Grouping selectors (h1, h2, h3)
- Descendant selectors (div p)
- Comments in CSS (/* comment */)
- Case sensitivity in CSS
- Valid property names and values

#### 2. Text Styling and Fonts
- `color` property and color values
- `font-family` and font stacks
- `font-size` (px, em, rem, %)
- `font-weight` (normal, bold, 100-900)
- `font-style` (normal, italic, oblique)
- `text-align` (left, right, center, justify)
- `text-decoration` (underline, line-through, none)
- `text-transform` (uppercase, lowercase, capitalize)
- `line-height` for readability
- `letter-spacing` and `word-spacing`

#### 3. Colors and Backgrounds
- Color formats (named colors, hex, rgb, rgba)
- `background-color` property
- `background-image` with url()
- `background-repeat` (repeat, no-repeat, repeat-x, repeat-y)
- `background-position` (top, center, bottom, left, right)
- `background-size` (cover, contain, auto)
- `background-attachment` (scroll, fixed)
- Shorthand `background` property
- `opacity` property
- Transparent colors

#### 4. Box Model Fundamentals
- Content, padding, border, margin
- `width` and `height` properties
- `padding` property (top, right, bottom, left)
- `margin` property and margin collapsing basics
- `border` property (width, style, color)
- `border-radius` for rounded corners
- `box-sizing` (content-box vs border-box)
- Understanding total element width/height
- Padding vs margin usage
- Border styles (solid, dashed, dotted, none)

#### 5. Display and Visibility
- `display` property (block, inline, inline-block, none)
- Block-level vs inline elements
- `visibility` (visible, hidden) vs `display: none`
- `inline-block` use cases
- Default display values for common elements
- Hiding elements (visibility vs display vs opacity)
- When to use each display value

#### 6. Basic Layout - Positioning
- `position` property (static, relative, absolute, fixed)
- `top`, `right`, `bottom`, `left` offset properties
- `z-index` and stacking context basics
- Relative positioning use cases
- Absolute positioning relative to parent
- Fixed positioning for headers/footers
- Static positioning (default behavior)

#### 7. Lists and Tables
- `list-style-type` (disc, circle, square, none)
- `list-style-position` (inside, outside)
- `list-style-image` for custom bullets
- Removing default list styling
- `border-collapse` for tables
- `border-spacing` for tables
- `table-layout` (auto, fixed)
- Styling table cells and headers
- Zebra striping with nth-child basics

#### 8. Basic Pseudo-classes
- `:hover` for interactive states
- `:active` for click states
- `:focus` for keyboard navigation
- `:visited` for links
- `:link` for unvisited links
- Order matters: LVHA (Link, Visited, Hover, Active)
- `:first-child` and `:last-child` basics
- `:nth-child()` simple usage

#### 9. Units and Values
- Absolute units (px, pt, cm, mm)
- Relative units (em, rem, %, vh, vw)
- When to use px vs em vs rem
- Percentage values and their context
- `inherit` keyword
- `initial` keyword
- `auto` value for width/height/margin
- Viewport units basics (vh, vw, vmin, vmax)

#### 10. Borders and Outlines
- `border-width`, `border-style`, `border-color`
- Border shorthand property
- Individual border sides (border-top, border-right, etc.)
- `border-radius` for rounded corners
- `outline` property (vs border)
- `outline-offset` property
- Outline doesn't affect layout
- Use cases for outline vs border

#### 11. Overflow and Clipping
- `overflow` property (visible, hidden, scroll, auto)
- `overflow-x` and `overflow-y`
- When to use auto vs scroll
- Text overflow with `text-overflow: ellipsis`
- `white-space: nowrap` for preventing wrapping
- Clipping content that exceeds container
- Scroll behavior basics

#### 12. Basic Flexbox Introduction
- `display: flex` to create flex container
- `flex-direction` (row, column)
- `justify-content` (flex-start, center, flex-end, space-between)
- `align-items` (flex-start, center, flex-end, stretch)
- Flex items and flex containers
- Main axis vs cross axis
- Basic flex layouts (centering, simple navigation)
- When to use flexbox

#### 13. Images and Media
- Responsive images with `max-width: 100%`
- `object-fit` (cover, contain, fill, scale-down)
- `object-position` for image alignment
- Styling img elements
- Background images vs img elements
- Image aspect ratios
- `width` and `height` attributes
- Placeholder images and alt text styling

#### 14. Basic Transitions
- `transition` property introduction
- `transition-property` (which properties to animate)
- `transition-duration` (time for animation)
- `transition-timing-function` (ease, linear, ease-in, ease-out)
- `transition-delay` before animation starts
- Shorthand transition syntax
- Common transition use cases (hover effects)
- Performance considerations (transform, opacity)

#### 15. CSS Inheritance
- Which properties inherit by default
- `inherit` keyword usage
- `initial` keyword to reset values
- `unset` keyword basics
- Inherited vs non-inherited properties
- Text-related properties that inherit
- Box model properties that don't inherit
- Forcing inheritance with `inherit`

---

## Medium Level Topics
**Format:** 25 questions, 45 minutes  
**Focus:** Advanced selectors, complex layouts, responsive design, animations, preprocessor concepts

### Suggested Medium Topics

#### 1. Advanced Selectors
- Attribute selectors ([attr], [attr=value], [attr^=value], [attr$=value], [attr*=value])
- Combinators (>, +, ~)
- Direct child selector (>)
- Adjacent sibling selector (+)
- General sibling selector (~)
- `:not()` pseudo-class
- `:is()` and `:where()` pseudo-classes
- Selector specificity calculation
- Complex selector chains

#### 2. Pseudo-elements and Advanced Pseudo-classes
- `::before` and `::after` content insertion
- `::first-letter` and `::first-line`
- `::selection` for text selection styling
- `::placeholder` for input placeholders
- `:nth-child()` with formulas (2n, 3n+1)
- `:nth-of-type()` vs `:nth-child()`
- `:first-of-type`, `:last-of-type`
- `:only-child` and `:only-of-type`
- `:empty` pseudo-class
- `:target` for fragment identifiers

#### 3. CSS Grid Layout
- `display: grid` container
- `grid-template-columns` and `grid-template-rows`
- `grid-gap` (gap, row-gap, column-gap)
- `grid-template-areas` for named layouts
- `grid-column` and `grid-row` placement
- `fr` unit for flexible tracks
- `repeat()` function
- `minmax()` for responsive tracks
- Implicit vs explicit grid
- Auto-placement algorithm

#### 4. Advanced Flexbox
- `flex-grow`, `flex-shrink`, `flex-basis`
- `flex` shorthand property
- `order` property to reorder items
- `align-self` for individual items
- `flex-wrap` (nowrap, wrap, wrap-reverse)
- `align-content` for multi-line flex containers
- Nested flex containers
- Flexbox spacing techniques
- Common flexbox patterns (holy grail, sticky footer)

#### 5. Responsive Design and Media Queries
- `@media` query syntax
- Media types (screen, print, all)
- Media features (width, height, orientation)
- `min-width` and `max-width` breakpoints
- Mobile-first vs desktop-first approach
- Common breakpoint strategies
- `orientation` (portrait, landscape)
- `prefers-color-scheme` for dark mode
- `prefers-reduced-motion` for accessibility
- Print stylesheets

#### 6. CSS Custom Properties (Variables)
- Declaring custom properties with `--variable-name`
- `var()` function to use variables
- Variable scope (global vs local)
- `:root` for global variables
- Fallback values in `var()`
- Cascading and inheritance of variables
- JavaScript manipulation of CSS variables
- Use cases (theming, responsive values)
- Performance benefits

#### 7. Transforms and 3D
- `transform` property introduction
- `translate()`, `translateX()`, `translateY()`
- `rotate()` for rotation
- `scale()`, `scaleX()`, `scaleY()`
- `skew()`, `skewX()`, `skewY()`
- `transform-origin` property
- 3D transforms (`rotateX()`, `rotateY()`, `rotateZ()`)
- `perspective` for 3D depth
- `transform-style: preserve-3d`
- Combining multiple transforms

#### 8. CSS Animations
- `@keyframes` rule definition
- `animation-name` to reference keyframes
- `animation-duration` for animation length
- `animation-timing-function` (ease, linear, cubic-bezier)
- `animation-delay` before starting
- `animation-iteration-count` (infinite, number)
- `animation-direction` (normal, reverse, alternate)
- `animation-fill-mode` (forwards, backwards, both)
- `animation-play-state` (running, paused)
- Shorthand animation property

#### 9. Positioning Deep Dive
- Stacking contexts and z-index
- `sticky` positioning (hybrid relative/fixed)
- Containing blocks for positioned elements
- Offset properties in different position modes
- Fixed vs sticky positioning
- Centering with absolute positioning
- `inset` shorthand property
- Position traps and gotchas

#### 10. Overflow and Scrolling
- `overflow-x` and `overflow-y` independent control
- Scroll snapping with `scroll-snap-type`
- `scroll-snap-align` for snap points
- `overscroll-behavior` (auto, contain, none)
- Custom scrollbars (`::-webkit-scrollbar`)
- `scroll-behavior: smooth` for smooth scrolling
- Sticky headers with overflow
- Scrollable containers vs page scrolling

#### 11. Filters and Blend Modes
- `filter` property (blur, brightness, contrast)
- `grayscale()`, `sepia()`, `saturate()`
- `hue-rotate()`, `invert()`, `opacity()`
- `drop-shadow()` vs `box-shadow`
- `backdrop-filter` for background effects
- `mix-blend-mode` for element blending
- `background-blend-mode` for background layers
- Performance considerations with filters

#### 12. CSS Counters
- `counter-reset` to initialize counters
- `counter-increment` to increment
- `counter()` function in `content`
- Nested counters
- `counters()` for hierarchical numbering
- Counter styles and formatting
- Use cases (custom list numbering, section numbers)
- Resetting counters in nested contexts

#### 13. Multi-column Layout
- `column-count` for number of columns
- `column-width` for optimal column width
- `column-gap` for spacing between columns
- `column-rule` for visual separator
- `column-span` for spanning elements
- `break-inside` to prevent breaks
- `column-fill` (balance, auto)
- When to use columns vs grid/flex

#### 14. Aspect Ratio and Object Fit
- `aspect-ratio` property (16/9, 4/3)
- `object-fit` for replaced elements (cover, contain)
- `object-position` for alignment
- Maintaining aspect ratios before `aspect-ratio`
- Responsive videos and images
- Padding-hack for aspect ratios (legacy)
- Combining aspect-ratio with other properties

#### 15. CSS Shapes and Clipping
- `clip-path` for clipping shapes
- Basic shapes (circle(), ellipse(), polygon())
- `inset()` for rectangular clips
- `shape-outside` for text wrapping
- `shape-margin` for spacing
- Float shapes and text flow
- SVG paths in clip-path
- Use cases for creative designs

#### 16. Gradients
- `linear-gradient()` syntax
- Color stops and positions
- Gradient angles and directions
- `radial-gradient()` for circular gradients
- `conic-gradient()` for pie charts
- `repeating-linear-gradient()`
- `repeating-radial-gradient()`
- Multiple gradients on same element
- Gradient as background-image

#### 17. CSS Functions
- `calc()` for dynamic calculations
- `min()`, `max()`, `clamp()` functions
- `attr()` for attribute values (limited support)
- `url()` for resources
- `var()` for custom properties
- `rgb()`, `rgba()`, `hsl()`, `hsla()` for colors
- Nesting functions (calc within clamp)
- Browser support considerations

#### 18. Form Styling
- Styling input elements
- Custom checkboxes and radio buttons
- `appearance: none` to reset default styles
- `:checked` pseudo-class
- `:disabled` and `:enabled` states
- `:valid` and `:invalid` for validation
- `:required` and `:optional`
- `:placeholder-shown` pseudo-class
- `::placeholder` pseudo-element
- Focus styles for accessibility

#### 19. Typography Advanced
- `font-display` for font loading (swap, fallback, optional)
- Variable fonts and `font-variation-settings`
- `font-feature-settings` for OpenType features
- `text-rendering` optimization
- `font-smooth` and `font-smoothing`
- `text-overflow` with ellipsis
- Hyphenation with `hyphens`
- `word-break` and `overflow-wrap`
- Drop caps with `::first-letter`
- Ligatures and font features

#### 20. CSS Architecture and Methodologies
- BEM (Block Element Modifier) naming
- OOCSS (Object-Oriented CSS) principles
- SMACSS (Scalable and Modular Architecture)
- Atomic CSS concepts
- Utility-first CSS (Tailwind-style)
- Component-based styling
- Naming conventions and consistency
- Selector specificity management
- CSS organization strategies

#### 21. Print Styles
- `@media print` queries
- `page-break-before`, `page-break-after`
- `break-before`, `break-after`, `break-inside`
- `@page` rule for page margins
- Avoiding broken content across pages
- Hiding non-essential elements for print
- Print-friendly color schemes
- Page size and orientation
- Headers and footers for print

#### 22. Dark Mode Implementation
- `prefers-color-scheme` media query
- CSS variables for theming
- Color palette strategies for dark mode
- WCAG contrast considerations
- System preference detection
- Manual toggle implementation
- `color-scheme` property
- Image and icon handling in dark mode
- Transition between modes

#### 23. Container Queries
- `@container` query syntax
- `container-type` (size, inline-size)
- `container-name` for named containers
- Container query units (cqw, cqh, cqi, cqb)
- Responsive components with container queries
- Container queries vs media queries
- Browser support and polyfills
- Use cases for component-level responsive design

#### 24. Scroll-Driven Animations
- `animation-timeline` property
- `scroll()` function for scroll timelines
- `view()` function for view timelines
- `animation-range` for animation boundaries
- Scroll progress animations
- Parallax effects with scroll animations
- Performance considerations
- Browser support status

#### 25. CSS Logical Properties
- `margin-inline-start`, `margin-inline-end`
- `padding-block-start`, `padding-block-end`
- `border-inline`, `border-block`
- `inset-inline`, `inset-block`
- Logical properties vs physical properties
- Benefits for internationalization (RTL support)
- `writing-mode` and text direction
- Block vs inline direction
- Browser support for logical properties

---

## Hard Level Topics
**Format:** 20 questions, 60 minutes  
**Focus:** Advanced techniques, performance optimization, browser rendering, complex animations, architecture

### Suggested Hard Topics

#### 1. CSS Houdini APIs
- Paint API for custom painting
- Layout API for custom layouts
- Properties and Values API
- Animation Worklet
- Typed OM (CSS Typed Object Model)
- `CSS.registerProperty()` for custom properties
- Worklets and performance
- Browser support and progressive enhancement

#### 2. Advanced Performance Optimization
- Critical CSS extraction and inlining
- CSS containment (`contain` property)
- `content-visibility` for rendering optimization
- Layer creation and composite optimization
- `will-change` property usage and pitfalls
- Paint, layout, and composite operations
- Identifying render-blocking CSS
- CSS loading strategies (async, defer, preload)
- Reducing CSS bundle size

#### 3. Complex Stacking Contexts
- Z-index and stacking context creation
- Stacking context triggers (position, opacity, transform, etc.)
- Paint order and rendering layers
- Fixed positioning within transformed elements
- Debugging stacking issues
- Browser rendering order
- Isolation with `isolation` property
- Complex layering scenarios

#### 4. Advanced Grid Techniques
- Subgrid (grid-template-rows/columns: subgrid)
- Dense auto-placement (`grid-auto-flow: dense`)
- Auto-fit vs auto-fill in repeat()
- Named grid lines
- Negative grid line numbers
- Overlapping grid items
- Grid and flex combination patterns
- Responsive grid without media queries

#### 5. CSS Architecture at Scale
- Critical CSS vs above-the-fold optimization
- CSS-in-JS approaches and trade-offs
- Shadow DOM styling encapsulation
- `::part()` and `::theme()` for web components
- Scoped styles strategies
- CSS Modules concepts
- PostCSS and build-time transformations
- Maintaining large-scale CSS codebases

#### 6. Advanced Animation Techniques
- Coordinated animations across elements
- Animation state management
- `animation-composition` property
- WAAPI (Web Animations API) integration
- Cubic-bezier custom timing functions
- `steps()` timing function for sprite animations
- Chaining animations with delays
- Performance profiling for animations
- 60fps animation techniques

#### 7. Color Spaces and Color Functions
- `color()` function for wide-gamut colors
- `lab()`, `lch()` for perceptual color spaces
- `oklab()`, `oklch()` color functions
- `color-mix()` for mixing colors
- Relative color syntax
- Display P3 color space
- Color gamut considerations
- Browser support for modern color functions

#### 8. Cascade Layers (@layer)
- `@layer` rule for cascade control
- Layer ordering and precedence
- Anonymous layers
- Nested layers
- Importing CSS into layers
- Layer vs specificity
- Organizing styles with layers
- Migration strategies to layers

#### 9. Advanced Responsive Patterns
- Container queries for component responsiveness
- Fluid typography with `clamp()`
- Responsive spacing with CSS variables
- `min()`, `max()`, `clamp()` combinations
- Intrinsic web design principles
- Responsive without media queries
- Viewport units and dynamic viewport (dvh, lvh, svh)
- Responsive images with CSS

#### 10. CSS Math and Trigonometry
- `sin()`, `cos()`, `tan()` functions
- `asin()`, `acos()`, `atan()`, `atan2()` functions
- `sqrt()`, `pow()`, `hypot()` functions
- `exp()`, `log()` functions
- Trigonometric animations
- Circular layouts with trigonometry
- Complex calculations with CSS
- Browser support for math functions

#### 11. Accessibility and CSS
- Focus-visible vs focus styling
- `:focus-visible` pseudo-class
- `prefers-reduced-motion` implementation
- `prefers-contrast` media query
- `forced-colors` mode (Windows High Contrast)
- Screen reader-only content techniques
- ARIA and CSS interaction
- Keyboard navigation styles
- Color contrast automation
- Motion and animation accessibility

#### 12. Advanced Typography
- Variable fonts and axis control
- `font-variation-settings` mastery
- OpenType features (`font-feature-settings`)
- Font subsetting strategies
- Font loading performance (`font-display`)
- System font stacks
- Fallback font matching
- `size-adjust` for font metrics
- Web font optimization
- `unicode-range` for subsetting

#### 13. Blend Modes and Compositing
- `mix-blend-mode` deep dive
- `background-blend-mode` layers
- Blend mode algorithms (multiply, screen, overlay)
- Isolation contexts
- Compositing with `composite` property
- Creative effects with blend modes
- Performance implications
- Browser compatibility strategies

#### 14. CSS Custom Elements and Shadow DOM
- Styling web components
- `:host` and `:host()` pseudo-classes
- `:host-context()` for theming
- `::slotted()` for distributed content
- `::part()` for exposing styling hooks
- CSS custom properties across shadow boundaries
- Inheritable vs non-inheritable properties in shadow DOM
- Theming strategies for components

#### 15. Scroll Behavior and UX
- `scroll-snap-type` advanced usage
- `scroll-padding` and `scroll-margin`
- `scrollbar-gutter` for layout stability
- `overscroll-behavior` for scroll boundaries
- Scroll-linked animations
- Smooth scrolling strategies
- Scroll restoration patterns
- Virtual scrolling considerations

#### 16. Grid and Subgrid Mastery
- Subgrid alignment across nested grids
- Grid template areas with complex layouts
- Automatic grid placement algorithms
- Grid and flexbox hybrid patterns
- Dense packing with auto-flow
- Grid for magazine-style layouts
- Responsive grids without media queries
- Grid inspector tools and debugging

#### 17. CSS Containment and Rendering
- `contain` property (layout, paint, size, style)
- `content-visibility: auto` for virtualization
- Intersection Observer with CSS
- Layout containment benefits
- Paint containment for isolation
- Size containment considerations
- Performance measurement
- Debugging rendering performance

#### 18. Modern CSS Resets and Normalization
- Modern CSS reset strategies
- User agent stylesheet understanding
- Box-sizing border-box global setting
- Font rendering consistency
- Form element normalization
- Focus style defaults
- Print stylesheet resets
- Accessible resets

#### 19. CSS Security Considerations
- Content Security Policy (CSP) and inline styles
- Nonce-based style loading
- CSS injection attacks
- `@import` security implications
- Third-party CSS risks
- CSS keyloggers and clickjacking
- Sanitizing user-generated CSS
- Safe CSS patterns

#### 20. Advanced Pseudo-class Patterns
- `:has()` relational pseudo-class (parent selector)
- Complex `:is()` and `:where()` usage
- Specificity with `:where()` (0 specificity)
- `:not()` with complex selectors
- Combining multiple pseudo-classes
- State queries with pseudo-classes
- Form validation styling patterns
- Dynamic styling without JavaScript

#### 21. CSS and JavaScript Integration
- CSSOM (CSS Object Model)
- `getComputedStyle()` and property access
- Manipulating CSS variables with JS
- `CSSStyleSheet` constructable stylesheets
- `matchMedia()` for media query detection
- Intersection Observer for scroll effects
- Resize Observer for responsive behavior
- Animation control with WAAPI

#### 22. Browser Rendering Pipeline
- Parse HTML → Build DOM
- Parse CSS → Build CSSOM
- Combine into Render Tree
- Layout (reflow) calculations
- Paint operations
- Compositing layers
- Critical rendering path optimization
- Identifying render-blocking resources
- Layout thrashing prevention

#### 23. CSS Grid Level 2 and 3 Features
- Masonry layout (grid-template-rows: masonry)
- Subgrid for nested grid alignment
- `align-content: space-evenly` in grid
- Grid animation and transitions
- Dynamic grid modifications
- Grid template areas naming strategies
- Browser implementation status
- Polyfill strategies

#### 24. Advanced Filter Effects
- SVG filters in CSS
- `filter` vs `backdrop-filter`
- Custom filter effects
- Filter performance optimization
- Combining multiple filters
- `drop-shadow()` for complex shadows
- Color manipulation with filters
- Browser compatibility for filters

#### 25. CSS Specifications and Future Features
- CSS Working Group process
- Reading and understanding specs
- Browser vendor prefixes (legacy and current)
- Feature queries (`@supports`)
- Progressive enhancement strategies
- Experimental features and flags
- Polyfills and fallbacks
- Contributing to CSS standards

#### 26. View Transitions API
- `@view-transition` rule
- `view-transition-name` property
- Transition between DOM states
- Customizing view transitions
- Animation of shared elements
- Multi-page view transitions
- Browser support and fallbacks
- Performance considerations

#### 27. Anchor Positioning
- `anchor()` function for positioning
- `anchor-name` and `position-anchor` properties
- Fallback positioning strategies
- Anchor positioning with popups/tooltips
- Dynamic anchor updates
- Browser support status
- Polyfill approaches

#### 28. Nested CSS (CSS Nesting Module)
- Nesting syntax (`&` selector)
- Nested media queries
- Nested container queries
- Specificity with nesting
- Browser support and transpilation
- Migration from preprocessors
- Best practices for nesting

#### 29. Scroll Timeline Animations
- `@scroll-timeline` rule
- `scroll-timeline-name` and `scroll-timeline-axis`
- Linking animations to scroll position
- ScrollTimeline API integration
- Parallax effects with scroll timeline
- Performance optimization
- Fallback for unsupported browsers

#### 30. Cross-browser Compatibility Mastery
- Feature detection with `@supports`
- CSS vendor prefixes strategy
- Autoprefixer and build tools
- Graceful degradation patterns
- Progressive enhancement
- Browser-specific hacks (when necessary)
- Testing across browsers
- Can I Use and browser support data

---

## Topic Distribution Strategy

### Easy Level Philosophy
- **Core properties:** Fundamental CSS properties every developer uses daily
- **Basic layout:** Simple positioning, display, and box model
- **Common patterns:** Text styling, colors, backgrounds
- **Syntax understanding:** Selectors, units, basic cascade
- **Practical application:** Real-world styling scenarios

### Medium Level Philosophy
- **Advanced selectors:** Pseudo-classes, pseudo-elements, combinators
- **Layout systems:** Flexbox and Grid fundamentals
- **Responsive design:** Media queries and adaptive techniques
- **Animations:** Transitions and keyframe animations
- **Modern features:** Custom properties, transforms, filters
- **Best practices:** Architecture and methodology awareness

### Hard Level Philosophy
- **Performance:** Rendering optimization, critical CSS, containment
- **Browser internals:** Rendering pipeline, stacking contexts, composite layers
- **Advanced APIs:** Houdini, CSSOM, Web Animations API
- **Cutting-edge features:** View Transitions, Container Queries, Cascade Layers
- **Architecture:** Large-scale CSS, web components, CSS-in-JS
- **Accessibility:** Advanced a11y patterns, reduced motion, high contrast
- **Specification mastery:** Understanding specs, progressive enhancement

---

## Assessment Creation Guidelines

When creating new assessments using these topics:

1. **Avoid Duplication:** Check existing assessments to ensure topics aren't repeated
2. **Progressive Difficulty:** Build on concepts from easier levels
3. **Real-World Focus:** Use practical examples developers encounter
4. **Code Examples:** Use inline code formatting and `<pre>` tags per guidelines
5. **Browser Compatibility:** Address vendor prefixes and fallbacks when relevant
6. **Comprehensive Coverage:** Aim for 7-10 topics per assessment
7. **Question Distribution:** 2-4 questions per topic
8. **Detailed Explanations:** Provide educational value in every answer
9. **Visual Concepts:** When possible, describe visual outcomes of CSS
10. **Modern Standards:** Focus on current CSS3+ practices while acknowledging legacy
11. **Accessibility:** Include a11y considerations throughout
12. **Performance:** Address performance implications where relevant
13. **Answer Balance:** Ensure 20-30% distribution across all options (A, B, C, D)

---

## Future Expansion Areas

### Potential Easy Topics
- CSS debugging techniques
- Browser DevTools for CSS inspection
- Common CSS mistakes and fixes
- CSS and HTML integration patterns
- Mobile-first CSS basics
- Icon fonts and SVG icons
- Basic CSS frameworks overview

### Potential Medium Topics
- CSS preprocessors (Sass, Less) concepts
- CSS Grid advanced patterns
- Advanced responsive images with CSS
- Animation performance optimization
- CSS testing strategies
- Custom CSS properties patterns
- Accessibility testing with CSS

### Potential Hard Topics
- CSS Houdini deep dives
- Advanced compositing and blend modes
- CSS containment strategies
- Server-side CSS optimization
- CSS at massive scale (Facebook, Google patterns)
- CSS parsing algorithms
- Future CSS specifications

---

## Code Example Guidelines

When including CSS code in assessments:

1. **Inline code:** Use backticks for property names: `display`, `flex-direction`
2. **Code blocks:** Use `<pre>` tags for CSS snippets (per HTML assessment rules)
3. **Syntax:** Always use proper CSS syntax (semicolons, braces)
4. **Comments:** Use CSS comments `/* */` to explain complex code
5. **Formatting:** Maintain consistent indentation and spacing
6. **Valid CSS:** Ensure all code examples are valid and functional
7. **Browser prefixes:** Only include when necessary for context
8. **Modern syntax:** Prefer modern CSS over legacy approaches

**Example:**
```css
/* Centering with flexbox */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

## Difficulty Calibration

Assessments should match the difficulty level of platforms like Coderbyte:

### Easy Level
- Questions test fundamental understanding
- Straightforward property usage
- Common real-world scenarios
- Single-concept questions
- Basic debugging and interpretation

### Medium Level
- Questions combine multiple concepts
- Require understanding of edge cases
- Test deeper knowledge of how CSS works
- Problem-solving with CSS
- Understanding browser behavior differences

### Hard Level
- Complex multi-step reasoning
- Performance and optimization knowledge
- Deep understanding of specifications
- Browser internals and rendering pipeline
- Advanced architectural decisions
- Cutting-edge and experimental features

---

**Last Updated:** November 13, 2025  
**Assessment Count:** 0 Easy, 0 Medium, 0 Hard  
**Next Priority:** Begin with foundational easy assessments covering selectors, box model, typography, and basic layout
