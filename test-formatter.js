// Quick test of the formatter logic

function escapeHtml (text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function formatWithMarkers (text) {
    // Split by code markers [CODE]...[/CODE] (but not <pre> tags yet)
    const parts = text.split(/(\[CODE\][\s\S]*?\[\/CODE\])/g);

    return parts.map(part => {
        if (part.startsWith('[CODE]') && part.endsWith('[/CODE]')) {
            // Extract code content between markers
            const code = part.slice(6, -7).trim(); // Remove [CODE] and [/CODE]
            return `<pre class="formatted-with-markers"><code>${escapeHtml(code)}</code></pre>`;
        } else {
            // Regular text - wrap non-empty paragraphs
            const trimmed = part.trim();
            if (!trimmed) return '';

            // Split by double newlines for multiple paragraphs
            return trimmed.split(/\n\n+/).map(p => {
                const paragraph = p.trim();
                if (!paragraph) return '';

                // Handle inline <pre>...</pre> tags within the paragraph
                // Split by <pre> tags but keep them in the output
                const segments = paragraph.split(/(<pre>[\s\S]*?<\/pre>)/g);
                const formatted = segments.map(segment => {
                    if (segment.startsWith('<pre>') && segment.endsWith('</pre>')) {
                        // Preserve <pre> tags as-is (no escaping)
                        return segment;
                    } else {
                        // Escape regular text
                        return escapeHtml(segment);
                    }
                }).join('');

                return `<p class="formatted-with-markers">${formatted}</p>`;
            }).join('');
        }
    }).join('');
}

const testInput = `This IIFE (Immediately Invoked Function Expression) implements a module pattern with private state. The <pre>count</pre> variable is encapsulated within the IIFE's scope and cannot be accessed directly from outside, making it truly private.

[CODE]// Usage:
increment(); // 1
increment(); // 2
getCount();  // 2
console.log(count); // ReferenceError: count is not defined

// Alternative modern approach with ES6 modules
export let count = 0;
export function increment() {
  return ++count;
}

// Or with closures in class-like pattern
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
const counter = createCounter();[/CODE]

This pattern was commonly used before ES6 modules to:
- Avoid polluting the global namespace
- Create private variables and functions
- Implement the module pattern
- Prevent naming collisions

While ES6 modules are now preferred, understanding IIFEs is still important for working with legacy code and understanding JavaScript's scoping mechanisms.`;

const output = formatWithMarkers(testInput);
console.log('=== OUTPUT ===');
console.log(output);
console.log('\n=== FORMATTED ===');
console.log(output.replace(/></g, '>\n<'));
