module.exports = {
    metadata: {
        title: "HTML Internationalization (i18n) and Localization",
        description: "Comprehensive coverage of HTML internationalization including language declaration, text direction handling, bidirectional text elements, translation attributes, character encoding, and right-to-left layout considerations.",
        difficulty: "medium",
        domain: "html",
        timeLimit: 45,
        questionCount: 25,
        topics: [
            "lang Attribute",
            "dir Attribute and Text Direction",
            "Bidirectional Override (bdo)",
            "Bidirectional Isolation (bdi)",
            "translate Attribute",
            "Character Encoding",
            "Right-to-Left (RTL) Layout",
            "Language Tags and Best Practices"
        ],
        topicLinks: [
            { topicName: "lang Attribute", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang" },
            { topicName: "dir Attribute and Text Direction", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir" },
            { topicName: "Bidirectional Override (bdo)", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo" },
            { topicName: "Bidirectional Isolation (bdi)", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi" },
            { topicName: "translate Attribute", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate" },
            { topicName: "Character Encoding", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset" },
            { topicName: "Right-to-Left (RTL) Layout", refLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties" },
            { topicName: "Language Tags and Best Practices", refLink: "https://www.w3.org/International/questions/qa-html-language-declarations" }
        ],
        assessmentId: 15,
        assessmentUniqueId: 1763033578331,
        testType: "multiple-choice"
    },

    questions: [
        {
            id: 1,
            question: "What is the purpose of the <pre>lang</pre> attribute in HTML?",
            options: {
                A: "To translate the page content automatically",
                B: "To declare the language of the element's content for browsers, search engines, and assistive technologies",
                C: "To enable syntax highlighting for code examples",
                D: "To set the programming language for script elements"
            },
            correct: "B",
            explanation: "The <pre>lang</pre> attribute declares the natural language of an element's content using language tags like <pre>en</pre> (English), <pre>fr</pre> (French), or <pre>ar</pre> (Arabic). This helps browsers apply correct hyphenation and spell-checking, assists search engines in returning language-appropriate results, and enables screen readers to use proper pronunciation and voice characteristics. For example, <pre><html lang=\"en\"></pre> declares the whole document is in English, while <pre><span lang=\"fr\">Bonjour</span></pre> marks a French word within English text. The attribute doesn't trigger automatic translation—that's a browser feature users control. It doesn't relate to programming languages or syntax highlighting. Always set <pre>lang</pre> on the <pre><html></pre> element and override it locally when content changes language.",
            topics: ["lang Attribute", "Language Tags and Best Practices"]
        },

        {
            id: 2,
            question: "What are valid values for the <pre>dir</pre> attribute?",
            options: {
                A: "<pre>left</pre>, <pre>right</pre>, <pre>center</pre>",
                B: "<pre>ltr</pre>, <pre>rtl</pre>, <pre>auto</pre>",
                C: "<pre>horizontal</pre>, <pre>vertical</pre>",
                D: "<pre>forward</pre>, <pre>backward</pre>"
            },
            correct: "B",
            explanation: "The <pre>dir</pre> attribute accepts three values: <pre>ltr</pre> (left-to-right for languages like English, French, Spanish), <pre>rtl</pre> (right-to-left for languages like Arabic, Hebrew, Persian), and <pre>auto</pre> (lets the browser determine direction based on content). For example, <pre><html lang=\"ar\" dir=\"rtl\"></pre> sets up an Arabic page with right-to-left layout. The <pre>auto</pre> value is useful when you don't know the direction in advance, such as for user-generated content: <pre><p dir=\"auto\">{{userContent}}</p></pre>. The browser examines the first strongly-directional character to determine direction. Values like \"left\", \"right\", \"center\", \"horizontal\", \"vertical\", \"forward\", or \"backward\" are not valid. The <pre>dir</pre> attribute affects text flow and layout, flipping the entire reading direction.",
            topics: ["dir Attribute and Text Direction"]
        },

        {
            id: 3,
            question: "What does the <pre><bdo></pre> element do?",
            options: {
                A: "It creates a bidirectional dropdown menu",
                B: "It overrides the current text direction and forces content to be displayed in a specific direction",
                C: "It automatically detects and applies the correct text direction",
                D: "It marks text as bold and directional"
            },
            correct: "B",
            explanation: "The <pre><bdo></pre> (Bidirectional Override) element forces text to be displayed in a specific direction, overriding the Unicode bidirectional algorithm. You must specify the <pre>dir</pre> attribute: <pre><bdo dir=\"rtl\">This text will display right-to-left</bdo></pre>. This is useful when you need to display text in the opposite direction from what Unicode rules would normally produce, such as showing how RTL text appears to LTR users for educational purposes, or fixing rare bidirectional display issues. The element doesn't create menus, doesn't auto-detect direction (that's <pre>dir=\"auto\"</pre> or <pre><bdi></pre>), and doesn't make text bold. Use <pre><bdo></pre> sparingly—only when you specifically need to override the natural direction. For most internationalization needs, <pre>lang</pre> and <pre>dir</pre> attributes or <pre><bdi></pre> are more appropriate.",
            topics: ["Bidirectional Override (bdo)"]
        },

        {
            id: 4,
            question: "When should you use the <pre><bdi></pre> element?",
            options: {
                A: "For all bidirectional text",
                B: "When embedding user-generated content or text whose direction is unknown and might differ from the surrounding text",
                C: "Only for Arabic and Hebrew text",
                D: "To create bidirectional links"
            },
            correct: "B",
            explanation: "The <pre><bdi></pre> (Bidirectional Isolation) element isolates text whose direction is unknown from its surroundings, preventing it from affecting the layout of nearby content. This is crucial for user-generated content like usernames, comments, or search queries that might contain RTL text in an LTR context (or vice versa). For example: <pre>User <bdi>{{username}}</bdi> posted...</pre>. If the username is in Arabic, the <pre><bdi></pre> prevents it from reversing the surrounding \"User\" and \"posted\" words. Without <pre><bdi></pre>, mixed-direction content can create confusing layouts, especially with punctuation. You don't use it for all bidirectional text—only when direction is unpredictable. It's not limited to specific languages or for creating links. Think of <pre><bdi></pre> as a protective wrapper for unknown-direction content.",
            topics: ["Bidirectional Isolation (bdi)"]
        },

        {
            id: 5,
            question: "What is the difference between <pre><bdo></pre> and <pre><bdi></pre>?",
            options: {
                A: "They are identical; <pre><bdi></pre> is just shorter syntax",
                B: "<pre><bdo></pre> forces a specific direction; <pre><bdi></pre> isolates text but lets it flow naturally according to its content",
                C: "<pre><bdo></pre> is for LTR text; <pre><bdi></pre> is for RTL text",
                D: "<pre><bdi></pre> is deprecated; use <pre><bdo></pre> instead"
            },
            correct: "B",
            explanation: "The <pre><bdo></pre> (Bidirectional Override) element forcibly overrides the text direction using a required <pre>dir</pre> attribute: <pre><bdo dir=\"rtl\">forced right-to-left</bdo></pre>. The <pre><bdi></pre> (Bidirectional Isolation) element isolates text from its surroundings but allows the text to flow in its natural direction based on its content: <pre><bdi>{{unknownText}}</bdi></pre>. Use <pre><bdo></pre> when you want to force a specific direction regardless of content. Use <pre><bdi></pre> when you want to isolate unknown-direction text but let it display naturally. For example, in \"User <bdi>مرحبا</bdi> commented\", the Arabic flows RTL while the English flows LTR, but they don't interfere with each other. Neither is deprecated or language-specific. They serve different purposes in handling bidirectional text.",
            topics: ["Bidirectional Override (bdo)", "Bidirectional Isolation (bdi)"]
        },

        {
            id: 6,
            question: "What does the <pre>translate</pre> attribute do?",
            options: {
                A: "It automatically translates content to the user's browser language",
                B: "It indicates whether element content should be translated when the page is localized",
                C: "It enables Google Translate integration",
                D: "It translates character encodings"
            },
            correct: "B",
            explanation: "The <pre>translate</pre> attribute indicates whether content should be translated when the page is localized. Valid values are <pre>yes</pre> (or empty attribute, meaning translate) and <pre>no</pre> (don't translate). For example: <pre><p translate=\"no\">API_KEY_12345</p></pre> tells translation tools to leave that content unchanged. This is useful for proper names, code snippets, brand names, technical terms, or any content that shouldn't be translated. The attribute doesn't perform translation—it's metadata for translation tools (automated or human) to respect. Most content is translatable by default, so you primarily use <pre>translate=\"no\"</pre> to mark exceptions. It doesn't integrate specific translation services or handle encoding. Browser translation features may or may not respect this attribute, but professional localization workflows typically do.",
            topics: ["translate Attribute"]
        },

        {
            id: 7,
            question: "What is the recommended character encoding for HTML documents?",
            options: {
                A: "ASCII",
                B: "UTF-8",
                C: "ISO-8859-1",
                D: "Windows-1252"
            },
            correct: "B",
            explanation: "UTF-8 is the recommended character encoding for HTML documents and is the default encoding for HTML5. UTF-8 can represent every character in the Unicode standard, supporting all languages and symbols while remaining backward-compatible with ASCII for basic Latin characters. Declare it early in your <pre><head></pre>: <pre><meta charset=\"UTF-8\"></pre> or via HTTP header <pre>Content-Type: text/html; charset=UTF-8</pre>. UTF-8 is efficient, widely supported, and eliminates encoding issues when mixing languages. ASCII is limited to 128 characters (no accents, non-Latin scripts). ISO-8859-1 (Latin-1) and Windows-1252 support Western European languages but not Arabic, Chinese, emoji, etc. UTF-8 has become the web standard—over 98% of websites use it. Always use UTF-8 unless you have a very specific legacy requirement.",
            topics: ["Character Encoding"]
        },

        {
            id: 8,
            question: "Where should the charset declaration appear in an HTML document?",
            options: {
                A: "Anywhere in the <pre><head></pre> section",
                B: "Within the first 1024 bytes of the document, preferably as the first element in <pre><head></pre>",
                C: "In the <pre><body></pre> section before any text content",
                D: "At the end of the document"
            },
            correct: "B",
            explanation: "The charset declaration must appear within the first 1024 bytes of the HTML document, and it's best practice to place it as the first element inside <pre><head></pre>: <pre><head><meta charset=\"UTF-8\"><title>Page Title</title></head></pre>. This ensures the browser uses the correct encoding from the very start of parsing. If the charset appears too late, the browser might have already parsed some content with the wrong encoding, leading to garbled text (mojibake). Placing it first prevents this issue. The declaration can't go in <pre><body></pre> and shouldn't be at the end—by then, the entire document has been parsed. While HTTP headers can also declare encoding (and take precedence), the HTML meta tag serves as a fallback and ensures correct encoding when files are viewed locally.",
            topics: ["Character Encoding"]
        },

        {
            id: 9,
            question: "What layout challenges are unique to right-to-left (RTL) languages?",
            options: {
                A: "RTL languages don't have any special challenges; just set <pre>dir=\"rtl\"</pre>",
                B: "Entire layouts must mirror: navigation, sidebars, icons, and UI elements flow from right to left, not just text",
                C: "RTL only affects vertical text alignment",
                D: "RTL languages require different HTML elements"
            },
            correct: "B",
            explanation: "Right-to-left layouts require comprehensive mirroring beyond just text direction. Navigation menus start from the right, sidebars swap sides, icons and arrows reverse direction (forward arrows point left, back arrows point right), breadcrumbs flow right-to-left, form labels align to the right, and visual hierarchies flip horizontally. CSS logical properties help: use <pre>margin-inline-start</pre> instead of <pre>margin-left</pre>, <pre>padding-inline-end</pre> instead of <pre>padding-right</pre>, etc. Images with directional meaning may need flipping. Progress bars fill right-to-left. Even non-text UI elements like checkboxes and radio buttons often move to the opposite side. Simply setting <pre>dir=\"rtl\"</pre> handles text but doesn't automatically mirror all CSS layouts—you need to design for bidirectionality. RTL doesn't affect vertical alignment specifically or require different HTML elements, but CSS and design must accommodate both directions.",
            topics: ["Right-to-Left (RTL) Layout", "dir Attribute and Text Direction"]
        },

        {
            id: 10,
            question: "What is the correct format for language tags in the <pre>lang</pre> attribute?",
            options: {
                A: "Use full language names: <pre>lang=\"English\"</pre>",
                B: "Use BCP 47 language tags: primary language code (e.g., <pre>en</pre>) optionally followed by region/script subtags (e.g., <pre>en-US</pre>, <pre>zh-Hans</pre>)",
                C: "Use two-letter country codes: <pre>lang=\"US\"</pre>",
                D: "Use any custom identifier that describes the language"
            },
            correct: "B",
            explanation: "Language tags follow the BCP 47 standard (RFC 5646), using codes from ISO 639 for languages and ISO 3166 for regions. Basic format: <pre>lang=\"en\"</pre> (English), <pre>lang=\"fr\"</pre> (French), <pre>lang=\"ar\"</pre> (Arabic). Add region subtags for specificity: <pre>lang=\"en-US\"</pre> (US English), <pre>lang=\"en-GB\"</pre> (British English), <pre>lang=\"pt-BR\"</pre> (Brazilian Portuguese). Script subtags distinguish writing systems: <pre>lang=\"zh-Hans\"</pre> (Simplified Chinese), <pre>lang=\"zh-Hant\"</pre> (Traditional Chinese). Use lowercase for language codes, uppercase for regions, title case for scripts. Don't use full language names, country codes alone, or custom identifiers—these won't be recognized by browsers and assistive technologies. The IANA Language Subtag Registry maintains valid codes. Be as specific as needed but avoid over-specifying.",
            topics: ["lang Attribute", "Language Tags and Best Practices"]
        },

        {
            id: 11,
            question: "How should you handle a document that contains multiple languages?",
            options: {
                A: "Set <pre>lang</pre> on <pre><html></pre> for the primary language, then override with <pre>lang</pre> attributes on elements containing other languages",
                B: "Only set the <pre>lang</pre> attribute once on the <pre><html></pre> element",
                C: "Create separate HTML documents for each language",
                D: "Use the <pre>multilang</pre> attribute"
            },
            correct: "A",
            explanation: "Always set the primary language on the <pre><html></pre> element: <pre><html lang=\"en\"></pre>. Then override it locally for content in different languages: <pre><p>Welcome! <span lang=\"fr\">Bienvenue!</span> <span lang=\"es\">¡Bienvenido!</span></p></pre>. This hierarchical approach ensures every piece of content has a language declaration, helping screen readers pronounce text correctly and browsers apply appropriate hyphenation and spell-checking. You can nest language changes at any depth. Don't leave <pre>lang</pre> unset on the root element, as that creates ambiguity. You don't need separate documents for multilingual content—use language attributes. There's no <pre>multilang</pre> attribute in HTML. This approach works for any amount of mixed-language content, from occasional foreign words to extensive multilingual sections.",
            topics: ["lang Attribute", "Language Tags and Best Practices"]
        },

        {
            id: 12,
            question: "What happens if you don't specify the <pre>lang</pre> attribute on an HTML document?",
            options: {
                A: "The browser automatically detects the language",
                B: "Assistive technologies can't reliably determine the language, potentially causing pronunciation errors and other accessibility issues",
                C: "The document will fail HTML validation",
                D: "Nothing; the lang attribute is optional and purely cosmetic"
            },
            correct: "B",
            explanation: "Without the <pre>lang</pre> attribute, assistive technologies like screen readers can't reliably determine the document's language. They may fall back to the user's system language or make incorrect guesses, resulting in garbled pronunciation. For example, French text read with English pronunciation rules is incomprehensible. Search engines may also have difficulty categorizing your content, browsers can't apply proper spell-checking or hyphenation, and translation tools struggle. While the document won't fail validation (lang is technically optional), omitting it is a serious accessibility and usability problem. The W3C strongly recommends always declaring language. Browsers don't auto-detect reliably—even sophisticated algorithms can be wrong, especially for short content or mixed languages. The <pre>lang</pre> attribute is not cosmetic; it provides crucial semantic information.",
            topics: ["lang Attribute", "Language Tags and Best Practices"]
        },

        {
            id: 13,
            question: "When should you use <pre>dir=\"auto\"</pre>?",
            options: {
                A: "Never; always explicitly set <pre>ltr</pre> or <pre>rtl</pre>",
                B: "For user-generated content or dynamic text where you don't know the direction in advance",
                C: "As the default for all elements to maximize compatibility",
                D: "Only for form inputs"
            },
            correct: "B",
            explanation: "Use <pre>dir=\"auto\"</pre> when you don't know the text direction in advance, particularly for user-generated content, database-driven content, or form inputs where users might enter RTL or LTR text. The browser analyzes the first strong directional character to determine direction. For example: <pre><textarea dir=\"auto\"></textarea></pre> or <pre><p dir=\"auto\">{{userComment}}</p></pre>. If a user enters Arabic text, it flows RTL; if they enter English, it flows LTR. However, <pre>auto</pre> can make mistakes with neutral characters (numbers, punctuation) or mixed content, so use explicit <pre>ltr</pre>/<pre>rtl</pre> when you know the language. Don't use <pre>auto</pre> everywhere as a default—be explicit when possible. It's not limited to form inputs and shouldn't be avoided entirely; it's a valuable tool for handling unpredictable content direction.",
            topics: ["dir Attribute and Text Direction"]
        },

        {
            id: 14,
            question: "What is the relationship between the <pre>lang</pre> and <pre>dir</pre> attributes?",
            options: {
                A: "They are the same attribute with different names",
                B: "They are independent: <pre>lang</pre> declares the language; <pre>dir</pre> declares text direction. Both should be set appropriately.",
                C: "Setting <pre>lang</pre> automatically sets the correct <pre>dir</pre>",
                D: "You can only use one or the other, not both"
            },
            correct: "B",
            explanation: "The <pre>lang</pre> and <pre>dir</pre> attributes serve different purposes and are independent. The <pre>lang</pre> attribute declares the natural language of content (e.g., <pre>lang=\"ar\"</pre> for Arabic), while <pre>dir</pre> declares text direction (e.g., <pre>dir=\"rtl\"</pre> for right-to-left). Setting <pre>lang</pre> does not automatically set <pre>dir</pre>—you should set both when appropriate: <pre><html lang=\"ar\" dir=\"rtl\"></pre>. While most RTL languages (Arabic, Hebrew, Persian) need <pre>dir=\"rtl\"</pre> and most LTR languages need <pre>dir=\"ltr\"</pre>, some edge cases exist where language and direction don't align predictably. Always declare both attributes for clarity and robustness. They work together to provide complete internationalization information: language affects pronunciation, hyphenation, and spell-checking, while direction affects layout and text flow.",
            topics: ["lang Attribute", "dir Attribute and Text Direction", "Language Tags and Best Practices"]
        },

        {
            id: 15,
            question: "Which CSS properties are particularly important for creating bidirectional (RTL/LTR) compatible layouts?",
            options: {
                A: "Only <pre>text-align</pre> and <pre>direction</pre>",
                B: "Logical properties like <pre>margin-inline-start</pre>, <pre>padding-inline-end</pre>, <pre>border-inline</pre>, and <pre>inset-inline-start</pre>",
                C: "Physical properties like <pre>margin-left</pre> and <pre>margin-right</pre> work perfectly for RTL",
                D: "RTL layouts require completely separate CSS files"
            },
            correct: "B",
            explanation: "CSS logical properties are designed for bidirectional layouts, using flow-relative directions (inline/block, start/end) instead of physical directions (left/right, top/bottom). Use <pre>margin-inline-start</pre> instead of <pre>margin-left</pre> (it becomes left margin in LTR, right margin in RTL), <pre>padding-inline-end</pre> instead of <pre>padding-right</pre>, <pre>border-inline</pre> for horizontal borders, and <pre>inset-inline-start</pre> for positioning. These automatically flip based on <pre>dir</pre> attribute. While <pre>text-align</pre> and <pre>direction</pre> are useful, they're not sufficient for complete layouts. Physical properties like <pre>margin-left</pre> don't flip, requiring manual overrides or separate stylesheets. Logical properties eliminate this need, creating truly bidirectional CSS that works for both LTR and RTL without duplication. Modern browsers widely support logical properties, making them the best practice for international layouts.",
            topics: ["Right-to-Left (RTL) Layout", "dir Attribute and Text Direction"]
        },

        {
            id: 16,
            question: "What should you mark with <pre>translate=\"no\"</pre>?",
            options: {
                A: "All technical content",
                B: "Proper names, brand names, code examples, technical identifiers, and other content that should remain unchanged when translating",
                C: "Content that's already been translated",
                D: "Long paragraphs that would be expensive to translate"
            },
            correct: "B",
            explanation: "Use <pre>translate=\"no\"</pre> for content that should remain unchanged during translation: proper names (<pre><span translate=\"no\">Marie Curie</span></pre>), brand names (<pre><span translate=\"no\">GitHub</span></pre>), code examples (<pre><code translate=\"no\">console.log()</code></pre>), product codes, technical identifiers, placeholder text, and trademarked terms. This prevents translation tools from changing \"Apple\" to \"Pomme\" when it's the company name, or breaking code snippets by translating keywords. Don't use it for all technical content—explanatory technical text should be translated. It's not for already-translated content (that needs the appropriate <pre>lang</pre> attribute instead). Cost isn't a factor—the attribute is about semantic correctness, not economics. Translation tools (both automated and human) respect this attribute to maintain accuracy and preserve crucial non-translatable content.",
            topics: ["translate Attribute"]
        },

        {
            id: 17,
            question: "How do you properly mark up a quote in a foreign language?",
            options: {
                A: "<pre><q lang=\"fr\">Bonjour</q></pre>",
                B: "<pre><q translate=\"no\">Bonjour</q></pre>",
                C: "<pre><quote language=\"French\">Bonjour</quote></pre>",
                D: "<pre><blockquote>Bonjour</blockquote></pre> with no additional attributes"
            },
            correct: "A",
            explanation: "Use the <pre>lang</pre> attribute to indicate a foreign-language quote: <pre><p>She said <q lang=\"fr\">Bonjour</q> when she arrived.</p></pre>. This helps screen readers pronounce the French word correctly using French phonetics, even in an English document. The <pre><q></pre> element provides the semantic meaning of a quote, while <pre>lang</pre> provides the language information. You might also use <pre>translate=\"no\"</pre> if the quote should remain in French when the page is translated, but <pre>lang</pre> is essential for pronunciation. There's no <pre><quote></pre> element or <pre>language</pre> attribute in HTML. <pre><blockquote></pre> is for longer, block-level quotes, but still needs <pre>lang</pre> for foreign language content: <pre><blockquote lang=\"es\"><p>¿Cómo estás?</p></blockquote></pre>. Always declare language changes for accessibility.",
            topics: ["lang Attribute", "translate Attribute"]
        },

        {
            id: 18,
            question: "What is the Unicode Bidirectional Algorithm (UBA)?",
            options: {
                A: "A compression algorithm for Unicode text",
                B: "An algorithm that determines how bidirectional text (mixing LTR and RTL) should be displayed",
                C: "A method for translating between Unicode and ASCII",
                D: "An encryption system for international text"
            },
            correct: "B",
            explanation: "The Unicode Bidirectional Algorithm (UBA) is a standardized algorithm that determines how to display text containing both left-to-right and right-to-left characters. When you have English and Arabic mixed in the same paragraph, UBA determines the order and direction of character display. It uses invisible Unicode formatting characters and text properties to resolve complex situations. HTML's <pre>dir</pre> attribute, <pre><bdo></pre>, and <pre><bdi></pre> elements provide high-level control over this algorithm. Most of the time, UBA works automatically and correctly, but edge cases with punctuation, numbers, or nested mixed-direction text can require manual intervention using HTML's directionality features. The algorithm isn't about compression, translation, or encryption—it's purely about visual rendering order of bidirectional text, ensuring readable display when LTR and RTL scripts coexist.",
            topics: ["dir Attribute and Text Direction", "Bidirectional Override (bdo)", "Bidirectional Isolation (bdi)"]
        },

        {
            id: 19,
            question: "Why is <pre><bdi></pre> particularly important for usernames and user-generated content?",
            options: {
                A: "It validates that usernames don't contain invalid characters",
                B: "It prevents RTL usernames from disrupting the layout of surrounding LTR text (and vice versa), especially with punctuation",
                C: "It encrypts user data for security",
                D: "It automatically translates usernames to the page language"
            },
            correct: "B",
            explanation: "The <pre><bdi></pre> element prevents user-generated content from disrupting surrounding layout. Consider a leaderboard: \"1. <bdi>{{username}}</bdi> - 100 points\". If a username contains RTL text without <pre><bdi></pre>, it can reverse nearby punctuation and text, creating confusing displays like \"- 100 points 1. username\". The <pre><bdi></pre> isolates the username, ensuring it displays in its natural direction without affecting the surrounding LTR content. This is critical for rankings, comment systems, social media posts, and anywhere user input appears in structured contexts. Without isolation, RTL names can make interfaces unusable or misleading. The element doesn't validate input, encrypt data, or translate—it purely prevents directional contamination. Think of it as a protective boundary around unpredictable-direction content.",
            topics: ["Bidirectional Isolation (bdi)", "Right-to-Left (RTL) Layout"]
        },

        {
            id: 20,
            question: "What is the difference between the HTML <pre>dir</pre> attribute and the CSS <pre>direction</pre> property?",
            options: {
                A: "They are completely different and incompatible",
                B: "The HTML <pre>dir</pre> attribute is recommended and sets directionality semantically; CSS <pre>direction</pre> is primarily for styling edge cases",
                C: "CSS <pre>direction</pre> is the modern approach; <pre>dir</pre> is deprecated",
                D: "They work on different text types"
            },
            correct: "B",
            explanation: "The HTML <pre>dir</pre> attribute is the recommended way to set text direction because it's semantic and accessible. It's part of the document structure: <pre><div dir=\"rtl\">...</div></pre>. The CSS <pre>direction</pre> property achieves similar visual results but is considered presentational. Use <pre>dir</pre> for document-level or element-level directionality tied to content meaning. CSS <pre>direction</pre> is useful for specific styling needs or when you can't modify HTML, but it doesn't provide the same semantic clarity. Screen readers and search engines better understand <pre>dir</pre> as structural information about content. Neither is deprecated, and they're not incompatible (CSS can override HTML), but best practice is to use the HTML <pre>dir</pre> attribute for semantic direction and reserve CSS <pre>direction</pre> for presentational overrides or technical necessities.",
            topics: ["dir Attribute and Text Direction", "Right-to-Left (RTL) Layout"]
        },

        {
            id: 21,
            question: "When creating forms for international users, what special considerations apply?",
            options: {
                A: "Forms work the same way regardless of language",
                B: "Use <pre>dir=\"auto\"</pre> on inputs for user content, ensure labels flip position in RTL, and consider name/address format variations",
                C: "Only the submit button text needs translation",
                D: "Forms must be rebuilt entirely for each language"
            },
            correct: "B",
            explanation: "International forms require several considerations: Use <pre>dir=\"auto\"</pre> on text inputs and textareas where users might enter RTL or LTR content: <pre><input type=\"text\" dir=\"auto\"></pre>. In RTL layouts, labels should flip to the right side of inputs. Name fields must accommodate different cultural conventions (some cultures put family names first). Address formats vary dramatically by country—don't assume Western patterns. Phone number formats differ globally. Consider date format preferences (MM/DD/YYYY vs DD/MM/YYYY). Placeholder text and error messages need translation and proper <pre>lang</pre> attributes. Calendar widgets must support different week start days. While you don't rebuild forms entirely for each language, you need flexible structures that adapt to different data patterns and layouts. Simply translating button text is insufficient for good international UX.",
            topics: ["dir Attribute and Text Direction", "Right-to-Left (RTL) Layout", "Language Tags and Best Practices"]
        },

        {
            id: 22,
            question: "What does the <pre>lang</pre> attribute on the <pre><html></pre> element affect?",
            options: {
                A: "Only the text content, not images or media",
                B: "Default language for the entire document including assistive technology announcements, hyphenation, quotation marks, and spell-checking",
                C: "Only screen reader pronunciation",
                D: "It has no effect; it's purely metadata for search engines"
            },
            correct: "B",
            explanation: "The <pre>lang</pre> attribute on <pre><html></pre> sets the default language for the entire document, affecting multiple aspects: screen readers use it to select the correct voice and pronunciation rules; browsers apply language-appropriate hyphenation when text wraps; quotation marks change based on language conventions (English uses \"...\", French uses guillemets, German uses low-high quotes); spell-checkers use the appropriate dictionary; search engines use it for language-specific search results; and CSS can apply language-specific styling with <pre>:lang()</pre> pseudo-class. While it doesn't directly affect images or media files themselves, it provides context for any text alternatives (alt text, captions). It's not purely metadata—it has functional effects on how browsers and assistive technologies process and present content. Setting <pre>lang</pre> is a foundational internationalization step.",
            topics: ["lang Attribute", "Language Tags and Best Practices"]
        },

        {
            id: 23,
            question: "How do you handle mixed-direction text within a single paragraph?",
            options: {
                A: "Split it into multiple paragraphs",
                B: "Use <pre><bdi></pre> or <pre><span dir=\"auto\"></pre> around the opposite-direction content while letting UBA handle most of it naturally",
                C: "Use only <pre><bdo></pre> to force all directions explicitly",
                D: "Avoid mixing directions in a single paragraph"
            },
            correct: "B",
            explanation: "For mixed-direction content in a paragraph, the Unicode Bidirectional Algorithm (UBA) handles most cases automatically. However, use <pre><bdi></pre> or <pre><span dir=\"auto\"></pre> around unpredictable content: <pre><p dir=\"ltr\">User <bdi>{{username}}</bdi> from <bdi>{{city}}</bdi> commented...</p></pre>. This isolates user-generated content that might be RTL within an LTR paragraph. For known-direction content, you can use explicit <pre>dir</pre> attributes: <pre><p>The word <span lang=\"ar\" dir=\"rtl\">مرحبا</span> means hello.</p></pre>. Don't use <pre><bdo></pre> unless you truly need to override the natural algorithm—it's for forcing specific directions, not normal mixed content. Splitting into multiple paragraphs or avoiding mixed directions limits expressiveness. Proper use of <pre><bdi></pre>, <pre>dir</pre>, and <pre>lang</pre> allows natural mixed-language and mixed-direction text while maintaining correct layout.",
            topics: ["Bidirectional Isolation (bdi)", "dir Attribute and Text Direction", "Language Tags and Best Practices"]
        },

        {
            id: 24,
            question: "What is the purpose of the BOM (Byte Order Mark) in UTF-8 encoded files?",
            options: {
                A: "It's required for all UTF-8 files",
                B: "It's optional and generally discouraged for UTF-8; it can cause issues with some tools and isn't necessary for UTF-8",
                C: "It indicates the document language",
                D: "It encrypts the file contents"
            },
            correct: "B",
            explanation: "The Byte Order Mark (BOM) is a special Unicode character (U+FEFF) sometimes placed at the beginning of files to indicate encoding. For UTF-8, the BOM is optional and generally discouraged. UTF-8 doesn't have byte-order ambiguity (unlike UTF-16/UTF-32), so the BOM serves no technical purpose and can cause problems: it may appear as a visible character in some contexts, can break processing tools that don't expect it, and creates issues with file concatenation or some Unix tools. Some Windows editors add UTF-8 BOMs by default, but best practice is to use \"UTF-8 without BOM\". The BOM doesn't indicate language (that's the <pre>lang</pre> attribute), doesn't encrypt anything, and isn't required for UTF-8. If you're creating new files, save as UTF-8 without BOM. If you encounter BOM-caused issues, remove the BOM bytes.",
            topics: ["Character Encoding"]
        },

        {
            id: 25,
            question: "What is the correct way to handle internationalized domain names (IDNs) in HTML?",
            options: {
                A: "HTML doesn't support non-ASCII domain names",
                B: "Use Punycode encoding for the <pre>href</pre> attribute but can display Unicode in visible link text: <pre><a href=\"http://xn--example.com\">例え.com</a></pre>",
                C: "Use Unicode directly in URLs without conversion",
                D: "Replace all non-ASCII characters with underscores"
            },
            correct: "B",
            explanation: "Internationalized Domain Names (IDNs) allow non-ASCII characters in domain names, but the underlying DNS system uses ASCII. The solution is Punycode encoding, which converts Unicode to ASCII: 例え.com becomes xn--r8jz45g.com. In HTML, use Punycode in the <pre>href</pre> attribute for browser compatibility: <pre><a href=\"https://xn--r8jz45g.com/\">例え.com</a></pre>. The visible link text can show the Unicode version for users. Modern browsers display IDNs as Unicode in the address bar (converting from Punycode) but may show Punycode if there's a security concern (mixed scripts). You can't reliably use Unicode directly in <pre>href</pre> attributes without encoding—different browsers handle it differently. Replacing with underscores breaks the domain. Always encode IDNs to Punycode for <pre>href</pre> values while keeping human-readable Unicode for display.",
            topics: ["Character Encoding", "Language Tags and Best Practices"]
        }
    ]
};
