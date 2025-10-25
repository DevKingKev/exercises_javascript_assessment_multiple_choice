import { describe, it, expect, beforeEach } from 'vitest';
import { escapeHtml, formatWithMarkers, formatAutoDetect, formatTextWithCode } from '../formatUtils';

describe( 'formatUtils', () => {
    beforeEach( () => {
        // Ensure DOM APIs are available (jsdom)
        document.body.innerHTML = '';
    } );

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

        const out = formatWithMarkers( input );
        expect( out ).toContain( '<p>This is a paragraph.</p>' );
        expect( out ).toContain( '<pre><code>' );
        expect( out ).toContain( 'const a = 1;' );
        expect( out ).toContain( '<p>Another paragraph.</p>' );
    } );

    it( 'formatAutoDetect should detect code-like sections and wrap them', () => {
        const codeLike = `const x = 10;\nconsole.log(x);`;
        const out = formatAutoDetect( codeLike );
        expect( out ).toContain( '<pre><code>' );
        expect( out ).toContain( 'const x = 10;' );
    } );

    it( 'formatTextWithCode uses markers when present otherwise autodetect', () => {
        const marked = '[CODE]\nconsole.log(1);\n[/CODE]';
        expect( formatTextWithCode( marked ) ).toContain( '<pre><code>' );

        const plain = 'Just text';
        expect( formatTextWithCode( plain ) ).toContain( '<p>Just text</p>' );
    } );
} );
