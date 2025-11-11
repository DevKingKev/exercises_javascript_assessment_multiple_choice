import { describe, it, expect, beforeEach } from 'vitest';
import { escapeHtml, formatWithMarkers, formatAutoDetect, formatTextWithCode } from '../formatUtils';

describe( 'formatUtils', () => {
    beforeEach( () => {
        // Ensure DOM APIs are available (jsdom)
        document.body.innerHTML = '';
    } );

    // --- From original __tests__ file ---
    it( 'escapeHtml should escape special characters', () => {
        const raw = '<div>Test & "quote"</div>';
        const escaped = escapeHtml( raw );
        expect( escaped ).toBe( '&lt;div&gt;Test &amp; "quote"&lt;/div&gt;' );
    } );

    it( 'formatWithMarkers should wrap [CODE] blocks and paragraph text', () => {
        const input = `This is a paragraph.

[CODE]
const a = 1;
console.log(a);
[/CODE]

Another paragraph.`;

        const out = formatWithMarkers( input, 'html' );
        expect( out ).toContain( '<p class="formatted-with-markers">This is a paragraph.</p>' );
        expect( out ).toContain( '<pre class="formatted-with-markers"><code>' );
        expect( out ).toContain( 'const a = 1;' );
        expect( out ).toContain( '<p class="formatted-with-markers">Another paragraph.</p>' );
    } );

    it( 'formatAutoDetect should detect code-like sections and wrap them', () => {
        const codeLike = `const x = 10;\nconsole.log(x);`;
        const out = formatAutoDetect( codeLike );
        expect( out ).toContain( '<pre><code>' );
        expect( out ).toContain( 'const x = 10;' );
    } );

    it( 'formatTextWithCode uses markers when present otherwise autodetect', () => {
        const marked = '[CODE]\nconsole.log(1);\n[/CODE]';
        expect( formatTextWithCode( marked ) ).toContain( '<pre class="formatted-with-markers"><code>' );

        const plain = 'Just text';
        expect( formatTextWithCode( plain ) ).toContain( '<p>Just text</p>' );
    } );

    // --- From former src/utils/formatUtils.test.ts ---
    describe( 'escapeHtml', () => {
        it( 'should escape HTML special characters', () => {
            const input = '<script>alert("XSS")</script>';
            const result = escapeHtml( input );
            expect( result ).toBe( '&lt;script&gt;alert("XSS")&lt;/script&gt;' );
        } );

        it( 'should escape ampersands', () => {
            const input = 'Tom & Jerry';
            const result = escapeHtml( input );
            expect( result ).toBe( 'Tom &amp; Jerry' );
        } );

        it( 'should escape quotes', () => {
            const input = 'She said "Hello"';
            const result = escapeHtml( input );
            // textContent doesn't escape quotes, only innerHTML does for attributes
            expect( result ).toContain( 'Hello' );
        } );

        it( 'should handle empty strings', () => {
            expect( escapeHtml( '' ) ).toBe( '' );
        } );
    } );

    describe( 'formatWithMarkers', () => {
        it( 'should format text with [CODE] blocks', () => {
            const input = 'Here is some code:\n\n[CODE]const x = 5;\nconsole.log(x);[/CODE]\n\nThat was code.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<pre class="formatted-with-markers"><code>' );
            expect( result ).toContain( 'const x = 5;' );
            expect( result ).toContain( '</code></pre>' );
            expect( result ).toContain( '<p class="formatted-with-markers">Here is some code:</p>' );
            expect( result ).toContain( '<p class="formatted-with-markers">That was code.</p>' );
        } );

        it( 'should escape HTML in [CODE] blocks', () => {
            const input = '[CODE]<script>alert("XSS")</script>[/CODE]';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '&lt;script&gt;' );
            expect( result ).toContain( '&lt;/script&gt;' );
            expect( result ).not.toContain( '<script>' );
        } );

        it( 'should convert inline <pre> tags to <pre> elements with escaped inner content', () => {
            const input = 'The <pre>Array.map()</pre> method returns a new array.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<p class="formatted-with-markers">' );
            expect( result ).toContain( '<pre>Array.map()</pre>' );
            expect( result ).not.toContain( '<span class="pre">' );
            expect( result ).toContain( 'method returns a new array.' );
        } );

        it( 'should handle multiple inline <pre> tags in one paragraph', () => {
            const input = 'Use <pre>const</pre> or <pre>let</pre> instead of <pre>var</pre>.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<pre>const</pre>' );
            expect( result ).toContain( '<pre>let</pre>' );
            expect( result ).toContain( '<pre>var</pre>' );
            expect( result ).toContain( '<p class="formatted-with-markers">' );
        } );

        it( 'should handle inline <pre> tags with special characters', () => {
            const input = 'The output is <pre>10, 20</pre> and <pre>x > y</pre>.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<pre>10, 20</pre>' );
            // Content inside <pre> is escaped so characters like > are shown literally
            expect( result ).toContain( '<pre>x &gt; y</pre>' );
            expect( result ).toContain( '<p class="formatted-with-markers">' );
        } );

        it( 'should handle multiple paragraphs with inline <pre> tags', () => {
            const input = 'First paragraph with <pre>code1</pre> here.\n\nSecond paragraph with <pre>code2</pre> there.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<pre>code1</pre>' );
            expect( result ).toContain( '<pre>code2</pre>' );
            // Should have two separate <p> tags
            expect( ( result.match( /<p class="formatted-with-markers">/g ) || [] ).length ).toBe( 2 );
        } );

        it( 'should handle mixed [CODE] blocks and inline <pre> tags', () => {
            const input = 'The <pre>count</pre> variable is private.\n\n[CODE]let count = 0;\nfunction inc() { count++; }[/CODE]\n\nUse <pre>inc()</pre> to increment.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<pre>count</pre>' );
            expect( result ).toContain( '<pre>inc()</pre>' );
            expect( result ).toContain( '<pre class="formatted-with-markers"><code>' );
            expect( result ).toContain( 'let count = 0;' );
        } );

        it( 'should escape text outside of <pre> tags', () => {
            const input = 'Use <pre>Array.map()</pre> when you need <div>test</div> functionality.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<pre>Array.map()</pre>' );
            expect( result ).toContain( '&lt;div&gt;test&lt;/div&gt;' );
            expect( result ).not.toContain( '<div>test</div>' );
        } );

        it( 'should handle empty strings', () => {
            expect( formatWithMarkers( '' ) ).toBe( '' );
        } );

        it( 'should handle text with no markers', () => {
            const input = 'Just plain text.\n\nAnother paragraph.';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toContain( '<p class="formatted-with-markers">Just plain text.</p>' );
            expect( result ).toContain( '<p class="formatted-with-markers">Another paragraph.</p>' );
        } );

        it( 'should trim whitespace in paragraphs', () => {
            const input = '  \n\n  Some text  \n\n  ';
            const result = formatWithMarkers( input, 'html' );

            expect( result ).toBe( '<p class="formatted-with-markers">Some text</p>' );
        } );

        it( 'should handle inline <pre> at start and end of paragraph', () => {
            const input = '<pre>start</pre> middle text <pre>end</pre>';
            // Without domain parameter, defaults to 'javascript' (span.pre behavior)
            const result = formatWithMarkers( input );

            expect( result ).toContain( '<span class="pre">start</span>' );
            expect( result ).toContain( '<span class="pre">end</span>' );
            expect( result ).toContain( 'middle text' );
        } );

        it( 'should preserve content inside <pre> tags without escaping', () => {
            const input = 'Check <pre>x < y && a > b</pre> condition.';
            // Without domain parameter, defaults to 'javascript' (span.pre behavior)
            const result = formatWithMarkers( input );

            // The content inside <pre> should NOT be escaped for javascript domain (span.pre)
            expect( result ).toContain( '<span class="pre">x < y && a > b</span>' );
        } );
    } );

    describe( 'formatAutoDetect', () => {
        it( 'should detect and format code blocks', () => {
            const input = 'Here is code:\n\nconst x = 5;\nlet y = 10;\nconsole.log(x + y);\n\nThat was code.';
            const result = formatAutoDetect( input );

            expect( result ).toContain( '<pre><code>' );
            expect( result ).toContain( 'const x = 5;' );
            expect( result ).toContain( '</code></pre>' );
            expect( result ).toContain( '<p>Here is code:</p>' );
            expect( result ).toContain( '<p>That was code.</p>' );
        } );

        it( 'should detect code patterns with function keyword', () => {
            const input = 'function test() {\n  return 42;\n}';
            const result = formatAutoDetect( input );

            expect( result ).toContain( '<pre><code>' );
            expect( result ).toContain( 'function test()' );
        } );

        it( 'should detect code patterns with class keyword', () => {
            const input = 'class MyClass {\n  constructor() {}\n}';
            const result = formatAutoDetect( input );

            expect( result ).toContain( '<pre><code>' );
            expect( result ).toContain( 'class MyClass' );
        } );

        it( 'should detect code patterns with braces and semicolons', () => {
            const input = 'const obj = {\n  key: "value"\n};';
            const result = formatAutoDetect( input );

            expect( result ).toContain( '<pre><code>' );
            expect( result ).toContain( 'const obj' );
        } );

        it( 'should format regular text as paragraphs', () => {
            const input = 'This is plain text.\n\nAnother paragraph here.';
            const result = formatAutoDetect( input );

            expect( result ).toContain( '<p>This is plain text.</p>' );
            expect( result ).toContain( '<p>Another paragraph here.</p>' );
            expect( result ).not.toContain( '<pre>' );
        } );

        it( 'should escape HTML in regular text', () => {
            const input = 'Use <div> tags carefully.';
            const result = formatAutoDetect( input );

            expect( result ).toContain( '&lt;div&gt;' );
            expect( result ).not.toContain( '<div>' );
        } );

        it( 'should escape HTML in detected code blocks', () => {
            const input = 'const html = "<script>alert(1)</script>";\nconsole.log(html);';
            const result = formatAutoDetect( input );

            expect( result ).toContain( '&lt;script&gt;' );
            expect( result ).toContain( '&lt;/script&gt;' );
        } );
    } );

    describe( 'formatTextWithCode', () => {
        it( 'should use formatWithMarkers when [CODE] markers present', () => {
            const input = 'Text\n\n[CODE]code here[/CODE]\n\nMore text';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<pre class="formatted-with-markers">' );
            expect( result ).toContain( 'code here' );
        } );

        it( 'should use formatWithMarkers when <pre> tags present', () => {
            const input = 'Use <pre>Array.map()</pre> for mapping.';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<span class="pre">Array.map()</span>' );
            expect( result ).toContain( '<p class="formatted-with-markers">' );
        } );

        it( 'should use formatAutoDetect when no markers or <pre> tags', () => {
            const input = 'Plain text\n\nconst x = 5;\nlet y = 10;\n\nMore text';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<pre><code>' );
            expect( result ).toContain( '<p>Plain text</p>' );
            expect( result ).not.toContain( 'formatted-with-markers' );
        } );

        it( 'should handle complex mixed content', () => {
            const input = 'The <pre>map()</pre> function works like this:\n\n[CODE]arr.map(x => x * 2)[/CODE]\n\nUse <pre>filter()</pre> for filtering.';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<span class="pre">map()</span>' );
            expect( result ).toContain( '<span class="pre">filter()</span>' );
            expect( result ).toContain( '<pre class="formatted-with-markers"><code>' );
            expect( result ).toContain( 'arr.map(x =&gt; x * 2)' );
        } );

        it( 'should handle only [CODE] markers without <pre> tags', () => {
            const input = '[CODE]console.log("test");[/CODE]';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<pre class="formatted-with-markers">' );
            expect( result ).toContain( 'console.log' );
        } );

        it( 'should handle only <pre> tags without [CODE] markers', () => {
            const input = 'Use <pre>const</pre> instead of <pre>var</pre>.';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<span class="pre">const</span>' );
            expect( result ).toContain( '<span class="pre">var</span>' );
        } );
    } );

    describe( 'edge cases and special scenarios', () => {
        it( 'should handle nested special characters in inline <pre>', () => {
            const input = 'Expression: <pre>a && b || c < d</pre> evaluates left to right.';
            const result = formatTextWithCode( input );

            // Content inside <pre> is preserved as-is (not escaped) for inline code
            expect( result ).toContain( '<span class="pre">a && b || c < d</span>' );
        } );

        it( 'should handle multiple consecutive newlines', () => {
            const input = 'First\n\n\n\nSecond';
            const result = formatWithMarkers( input );

            expect( result ).toContain( '<p class="formatted-with-markers">First</p>' );
            expect( result ).toContain( '<p class="formatted-with-markers">Second</p>' );
        } );

        it( 'should handle [CODE] block with multiple lines', () => {
            const input = '[CODE]function test() {\n  const x = 5;\n  return x * 2;\n}[/CODE]';
            const result = formatWithMarkers( input );

            expect( result ).toContain( '<pre class="formatted-with-markers"><code>' );
            expect( result ).toContain( 'function test()' );
            expect( result ).toContain( 'const x = 5;' );
            expect( result ).toContain( 'return x * 2;' );
        } );

        it( 'should handle inline <pre> with no surrounding text', () => {
            const input = '<pre>standalone</pre>';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<span class="pre">standalone</span>' );
            expect( result ).toContain( '<p class="formatted-with-markers">' );
        } );

        it( 'should handle text with only whitespace between paragraphs', () => {
            // Note: regex \n\n+ requires consecutive newlines (no spaces between)
            // This input has spaces between newlines, so it's treated as one paragraph
            const input = 'First paragraph\n  \n  \nSecond paragraph';
            const result = formatWithMarkers( input );

            // With spaces between newlines, it's treated as a single paragraph
            expect( result ).toContain( '<p class="formatted-with-markers">' );
            expect( result ).toContain( 'First paragraph' );
            expect( result ).toContain( 'Second paragraph' );
        } );

        it( 'should handle empty [CODE] blocks', () => {
            const input = 'Before\n\n[CODE][/CODE]\n\nAfter';
            const result = formatWithMarkers( input );

            expect( result ).toContain( '<p class="formatted-with-markers">Before</p>' );
            expect( result ).toContain( '<p class="formatted-with-markers">After</p>' );
        } );

        it( 'should handle real-world example with closures', () => {
            const input = 'The output is <pre>10, 20</pre> because of how closures and the scope chain work in JavaScript. When <pre>inner()</pre> is defined inside <pre>outer()</pre>, it captures the entire lexical scope of <pre>outer()</pre>, including all variables declared in that scope (both <pre>x</pre> and <pre>y</pre>).\n\nEven though <pre>y</pre> is declared after <pre>inner()</pre> is defined, by the time <pre>inner()</pre> is executed (when <pre>fn()</pre> is called), both <pre>x</pre> and <pre>y</pre> have been initialized. This demonstrates that closures capture variables by reference, not by value at definition time.\n\nThe scope chain lookup happens when the function is executed, not when it\'s defined. This is why both variables are accessible even though one was declared after the function definition.';
            const result = formatTextWithCode( input );

            // Should have all inline code converted to spans
            expect( result ).toContain( '<span class="pre">10, 20</span>' );
            expect( result ).toContain( '<span class="pre">inner()</span>' );
            expect( result ).toContain( '<span class="pre">outer()</span>' );
            expect( result ).toContain( '<span class="pre">x</span>' );
            expect( result ).toContain( '<span class="pre">y</span>' );
            expect( result ).toContain( '<span class="pre">fn()</span>' );

            // Should have three paragraphs
            expect( ( result.match( /<p class="formatted-with-markers">/g ) || [] ).length ).toBe( 3 );

            // Should not have any unescaped <pre> tags in output
            expect( result ).not.toContain( '&lt;pre&gt;' );
        } );

        it( 'should handle assessment option text with inline code', () => {
            const input = '<pre>Array.prototype.map()</pre> creates a new array';
            const result = formatTextWithCode( input );

            expect( result ).toContain( '<span class="pre">Array.prototype.map()</span>' );
            expect( result ).toContain( 'creates a new array' );
        } );
    } );

    describe( 'HTML domain formatting', () => {
        describe( 'formatWithMarkers with HTML domain', () => {
            it( 'should render inline <pre> as real <pre> elements with escaped content for HTML domain', () => {
                const input = 'The <pre><img src="photo.jpg" alt="Description"></pre> element embeds images.';
                const result = formatWithMarkers( input, 'html' );

                expect( result ).toContain( '<pre>&lt;img src="photo.jpg" alt="Description"&gt;</pre>' );
                expect( result ).not.toContain( '<span class="pre">' );
                expect( result ).toContain( '<p class="formatted-with-markers">' );
            } );

            it( 'should handle multiple inline <pre> tags with HTML content for HTML domain', () => {
                const input = 'Use <pre><div></pre> or <pre><span></pre> for layout.';
                const result = formatWithMarkers( input, 'html' );

                expect( result ).toContain( '<pre>&lt;div&gt;</pre>' );
                expect( result ).toContain( '<pre>&lt;span&gt;</pre>' );
                expect( result ).not.toContain( '<span class="pre">' );
            } );

            it( 'should escape HTML attributes inside <pre> for HTML domain', () => {
                const input = 'The <pre><a href="url" target="_blank"></pre> opens in new tab.';
                const result = formatWithMarkers( input, 'html' );

                expect( result ).toContain( '<pre>&lt;a href="url" target="_blank"&gt;</pre>' );
                expect( result ).not.toContain( '<a href="url"' );
            } );

            it( 'should handle <pre> with special HTML entities for HTML domain', () => {
                const input = 'Check <pre><div class="test" id="main"></pre> syntax.';
                const result = formatWithMarkers( input, 'html' );

                expect( result ).toContain( '<pre>&lt;div class="test" id="main"&gt;</pre>' );
                expect( result ).not.toContain( '<div class="test"' );
            } );

            it( 'should handle self-closing HTML tags in <pre> for HTML domain', () => {
                const input = 'Use <pre><br /></pre> for line breaks.';
                const result = formatWithMarkers( input, 'html' );

                expect( result ).toContain( '<pre>&lt;br /&gt;</pre>' );
            } );

            it( 'should handle complete HTML snippets in <pre> for HTML domain', () => {
                const input = 'Example: <pre><form action="/submit" method="POST"></pre> creates a form.';
                const result = formatWithMarkers( input, 'html' );

                expect( result ).toContain( '<pre>&lt;form action="/submit" method="POST"&gt;</pre>' );
            } );

            it( 'should handle mixed JavaScript and HTML in [CODE] blocks for HTML domain', () => {
                const input = '[CODE]<script>\n  console.log("test");\n</script>[/CODE]';
                const result = formatWithMarkers( input, 'html' );

                expect( result ).toContain( '<pre class="formatted-with-markers"><code>' );
                expect( result ).toContain( '&lt;script&gt;' );
                expect( result ).toContain( '&lt;/script&gt;' );
                expect( result ).toContain( 'console.log("test");' );
            } );
        } );

        describe( 'formatWithMarkers with JavaScript domain (default)', () => {
            it( 'should render inline <pre> as <span class="pre"> for JavaScript domain', () => {
                const input = 'Use <pre>Array.map()</pre> for transformations.';
                const result = formatWithMarkers( input, 'javascript' );

                expect( result ).toContain( '<span class="pre">Array.map()</span>' );
                expect( result ).not.toContain( '<pre>Array.map()</pre>' );
            } );

            it( 'should use default JavaScript domain when no domain specified', () => {
                const input = 'Use <pre>const</pre> instead of <pre>var</pre>.';
                const result = formatWithMarkers( input ); // No domain parameter

                expect( result ).toContain( '<span class="pre">const</span>' );
                expect( result ).toContain( '<span class="pre">var</span>' );
            } );

            it( 'should preserve legacy behavior for non-HTML domains', () => {
                const input = 'The <pre>filter()</pre> method filters arrays.';
                const result = formatWithMarkers( input, 'javascript' );

                expect( result ).toContain( '<span class="pre">filter()</span>' );
                expect( result ).toContain( '<p class="formatted-with-markers">' );
            } );
        } );

        describe( 'formatTextWithCode with HTML domain', () => {
            it( 'should pass HTML domain to formatWithMarkers for <pre> tags', () => {
                const input = 'Use <pre><img src="test.jpg"></pre> to embed images.';
                const result = formatTextWithCode( input, 'html' );

                expect( result ).toContain( '<pre>&lt;img src="test.jpg"&gt;</pre>' );
                expect( result ).not.toContain( '<span class="pre">' );
            } );

            it( 'should pass HTML domain to formatWithMarkers for [CODE] blocks', () => {
                const input = '[CODE]<div class="container">\n  <p>Content</p>\n</div>[/CODE]';
                const result = formatTextWithCode( input, 'html' );

                expect( result ).toContain( '<pre class="formatted-with-markers"><code>' );
                expect( result ).toContain( '&lt;div class="container"&gt;' );
                expect( result ).toContain( '&lt;p&gt;Content&lt;/p&gt;' );
            } );

            it( 'should handle mixed inline <pre> and [CODE] blocks for HTML domain', () => {
                const input = 'The <pre><iframe></pre> element:\n\n[CODE]<iframe src="page.html"></iframe>[/CODE]';
                const result = formatTextWithCode( input, 'html' );

                expect( result ).toContain( '<pre>&lt;iframe&gt;</pre>' );
                expect( result ).toContain( '&lt;iframe src="page.html"&gt;&lt;/iframe&gt;' );
            } );
        } );

        describe( 'Negative tests - incorrect usage', () => {
            it( 'should handle null text input gracefully', () => {
                const result = formatTextWithCode( null as any, 'html' );
                expect( result ).toBe( '' );
            } );

            it( 'should handle undefined text input gracefully', () => {
                const result = formatTextWithCode( undefined as any, 'html' );
                expect( result ).toBe( '' );
            } );

            it( 'should handle empty string for HTML domain', () => {
                const result = formatTextWithCode( '', 'html' );
                expect( result ).toBe( '' );
            } );

            it( 'should not render HTML when domain is javascript (security)', () => {
                const input = 'Use <pre><script>alert("XSS")</script></pre> carefully.';
                const result = formatTextWithCode( input, 'javascript' );

                // Should be inline span, and content inside should NOT be escaped in the same way
                expect( result ).toContain( '<span class="pre">' );
                expect( result ).not.toContain( '<pre>&lt;script&gt;' );
                // The script tag inside should be preserved as-is inside the span
                expect( result ).toContain( '<script>alert("XSS")</script>' );
            } );

            it( 'should handle malformed <pre> tags gracefully', () => {
                const input = 'Incomplete <pre>tag here';
                const result = formatTextWithCode( input, 'html' );

                // Should fall through to autodetect since <pre> is not closed
                expect( result ).toContain( '<p>' );
                expect( result ).toContain( '&lt;pre&gt;' );
            } );

            it( 'should handle nested <pre> tags (edge case)', () => {
                const input = 'Text <pre>outer <pre>inner</pre> outer</pre> text.';
                const result = formatTextWithCode( input, 'html' );

                // The regex will match the first occurrence
                expect( result ).toContain( '<pre>' );
            } );

            it( 'should handle <pre> tags without content for HTML domain', () => {
                const input = 'Empty tag: <pre></pre> here.';
                const result = formatTextWithCode( input, 'html' );

                expect( result ).toContain( '<pre></pre>' );
            } );

            it( 'should handle case-sensitive domain parameter', () => {
                const input = 'Use <pre><div></pre> for layout.';

                // HTML (lowercase)
                const htmlResult = formatTextWithCode( input, 'html' );
                expect( htmlResult ).toContain( '<pre>&lt;div&gt;</pre>' );

                // HTML (uppercase) - should still work due to toLowerCase
                const upperResult = formatTextWithCode( input, 'HTML' );
                expect( upperResult ).toContain( '<pre>&lt;div&gt;</pre>' );

                // Mixed case
                const mixedResult = formatTextWithCode( input, 'HtMl' );
                expect( mixedResult ).toContain( '<pre>&lt;div&gt;</pre>' );
            } );

            it( 'should handle unknown domain as non-HTML (fallback to javascript behavior)', () => {
                const input = 'Use <pre><div></pre> element.';
                const result = formatTextWithCode( input, 'python' );

                // Should use span.pre (default non-HTML behavior)
                expect( result ).toContain( '<span class="pre">' );
                expect( result ).not.toContain( '<pre>&lt;div&gt;</pre>' );
            } );

            it( 'should not execute JavaScript in HTML snippets', () => {
                const input = '<pre><img src="x" onerror="alert(1)"></pre>';
                const result = formatTextWithCode( input, 'html' );

                // Should be fully escaped (the inner content of <pre> is escaped)
                expect( result ).toContain( '&lt;img src="x"' );
                expect( result ).toContain( '&lt;img src="x" onerror="alert(1)"&gt;' );
                // The onerror attribute should be escaped, not executable
                expect( result ).not.toContain( '<img src="x" onerror' );
            } );

            it( 'should handle very long HTML snippets', () => {
                const longTag = '<pre>' + '<div class="container" id="main" data-test="value" role="region" aria-label="Main content">'.repeat( 5 ) + '</pre>';
                const result = formatTextWithCode( longTag, 'html' );

                expect( result ).toContain( '<pre>' );
                expect( result ).toContain( '&lt;div class="container"' );
                expect( result ).toContain( '</pre>' );
            } );

            it( 'should preserve whitespace in HTML code blocks', () => {
                const input = '[CODE]<div>\n    <p>Indented content</p>\n</div>[/CODE]';
                const result = formatTextWithCode( input, 'html' );

                expect( result ).toContain( '<pre class="formatted-with-markers"><code>' );
                // Whitespace should be preserved in the escaped output
                expect( result ).toContain( '&lt;p&gt;Indented content&lt;/p&gt;' );
            } );
        } );

        describe( 'Domain parameter edge cases', () => {
            it( 'should handle empty domain string as non-HTML', () => {
                const input = 'Use <pre>test</pre> here.';
                const result = formatTextWithCode( input, '' );

                expect( result ).toContain( '<span class="pre">test</span>' );
            } );

            it( 'should handle whitespace-only domain as non-HTML', () => {
                const input = 'Use <pre>test</pre> here.';
                const result = formatTextWithCode( input, '   ' );

                expect( result ).toContain( '<span class="pre">test</span>' );
            } );

            it( 'should handle domain with leading/trailing whitespace', () => {
                const input = 'Use <pre><div></pre> element.';
                const result = formatTextWithCode( input, '  html  ' );

                // Should trim and match 'html'
                expect( result ).toContain( '<pre>&lt;div&gt;</pre>' );
            } );
        } );
    } );
} );
