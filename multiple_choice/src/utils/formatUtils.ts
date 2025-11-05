// Utility helpers for formatting question/explanation text and code blocks
import type { } from '../models';

export function escapeHtml ( text: string ): string {
    const div = document.createElement( 'div' );
    div.textContent = text;
    return div.innerHTML;
}

export function formatWithMarkers ( text: string ): string {
    // Split by code markers [CODE]...[/CODE] and <pre>...</pre> tags
    const parts = text.split( /(\[CODE\][\s\S]*?\[\/CODE\]|<pre>[\s\S]*?<\/pre>)/g );

    return parts.map( part => {
        if ( part.startsWith( '[CODE]' ) && part.endsWith( '[/CODE]' ) ) {
            // Extract code content between markers
            const code = part.slice( 6, -7 ).trim(); // Remove [CODE] and [/CODE]
            return `<pre><code>${escapeHtml( code )}</code></pre>`;
        } else if ( part.startsWith( '<pre>' ) && part.endsWith( '</pre>' ) ) {
            // Preserve <pre> tags as-is (already HTML, no escaping)
            // return `<pre> ${escapeHtml( part.slice( 5, -6 ) )} </pre>`;
            return `${part}`;
        } else {
            // Regular text - wrap non-empty paragraphs
            const trimmed = part.trim();
            if ( !trimmed ) return '';

            // Split by double newlines for multiple paragraphs
            return trimmed.split( /\n\n+/ ).map( p => {
                const paragraph = p.trim();
                return paragraph ? `<p>${escapeHtml( paragraph )}</p>` : '';
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
    // Check if text uses explicit code markers [CODE]...[/CODE]
    if ( text.includes( '[CODE]' ) && text.includes( '[/CODE]' ) ) {
        return formatWithMarkers( text );
    }

    // Fallback: auto-detect code blocks (legacy support)
    return formatAutoDetect( text );
}
