// Utility helpers for formatting question/explanation text and code blocks
import type { } from '../models';

export function escapeHtml ( text: string ): string {
    const div = document.createElement( 'div' );
    div.textContent = text;
    return div.innerHTML;
}

export function formatWithMarkers ( text: string ): string {
    // Split by code markers [CODE]...[/CODE] (but not <pre> tags yet)
    const parts = text.split( /(\[CODE\][\s\S]*?\[\/CODE\])/g );

    return parts.map( part => {
        if ( part.startsWith( '[CODE]' ) && part.endsWith( '[/CODE]' ) ) {
            // Extract code content between markers
            const code = part.slice( 6, -7 ).trim(); // Remove [CODE] and [/CODE]
            return `<pre class="formatted-with-markers"><code>${escapeHtml( code )}</code></pre>`;
        } else {
            // Regular text - wrap non-empty paragraphs
            const trimmed = part.trim();
            if ( !trimmed ) return '';

            // Split by double newlines for multiple paragraphs
            return trimmed.split( /\n\n+/ ).map( p => {
                const paragraph = p.trim();
                if ( !paragraph ) return '';

                // Handle inline <pre>...</pre> tags within the paragraph
                // Convert them to <span class="pre"> for valid inline styling
                const codeTags: string[] = [];
                const uniqueMarker = '\x00PRETAGMARKER\x00'; // Use null bytes as unique markers
                const withPlaceholders = paragraph.replace( /<pre>([\s\S]*?)<\/pre>/g, ( match, content ) => {
                    const index = codeTags.length;
                    codeTags.push( `<span class="pre">${content}</span>` );
                    return `${uniqueMarker}${index}${uniqueMarker}`;
                } );

                // Escape the text (now without <pre> tags)
                const escaped = escapeHtml( withPlaceholders );

                // Restore code spans (unescaped)
                const restored = escaped.replace( new RegExp( `${uniqueMarker}(\\d+)${uniqueMarker}`, 'g' ), ( match, index ) => {
                    return codeTags[parseInt( index )];
                } );

                return `<p class="formatted-with-markers">${restored}</p>`;
            } ).join( '' );
        }
    } ).join( '' );
}

export function formatAutoDetect ( text: string ): string {
    // Split on double newlines to get paragraphs/sections
    const sections = text.split( /\n\n+/ );

    return sections.map( section => {
        const trimmed = section.trim();
        if ( !trimmed ) return '';

        // Check if this section is code (has newlines AND code patterns)
        const hasInternalNewlines = trimmed.includes( '\n' );
        const hasCodePatterns = /^(const|let|var|function|class|\{|\[|\/\/|if|for|while|return|import|export)/.test( trimmed ) ||
            /[{}\[\];]/.test( trimmed ) && hasInternalNewlines;

        if ( hasCodePatterns && hasInternalNewlines ) {
            // This is a code block
            return `<pre><code>${escapeHtml( trimmed )}</code></pre>`;
        } else {
            // Regular text - wrap in paragraph
            return `<p>${escapeHtml( trimmed )}</p>`;
        }
    } ).join( '' );
}

export function formatTextWithCode ( text: string ): string {
    // Check if text uses explicit code markers [CODE]...[/CODE] or inline <pre> tags
    if ( text.includes( '[CODE]' ) && text.includes( '[/CODE]' ) ) {
        return formatWithMarkers( text );
    }

    if ( text.includes( '<pre>' ) && text.includes( '</pre>' ) ) {
        return formatWithMarkers( text );
    }

    // Fallback: auto-detect code blocks (legacy support)
    return formatAutoDetect( text );
}
