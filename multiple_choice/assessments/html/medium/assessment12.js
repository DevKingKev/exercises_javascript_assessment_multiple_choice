module.exports = {
    metadata: {
        title: "Microdata and Structured Data in HTML",
        description: "Comprehensive coverage of HTML microdata attributes, Schema.org vocabulary, structured data implementation, SEO benefits, JSON-LD alternatives, and testing structured data markup.",
        difficulty: "medium",
        domain: "html",
        timeLimit: 45,
        questionCount: 25,
        topics: [
            "Microdata Attributes (itemscope, itemtype, itemprop)",
            "Schema.org Vocabulary",
            "Product Schema",
            "Person and Organization Schemas",
            "Structured Data SEO Benefits",
            "JSON-LD Alternative",
            "Testing Structured Data",
            "Nested Microdata Items"
        ],
        topicLinks: [
            { topicName: "Microdata Attributes (itemscope, itemtype, itemprop)", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata" },
            { topicName: "Schema.org Vocabulary", refLink: "https://schema.org/" },
            { topicName: "Product Schema", refLink: "https://schema.org/Product" },
            { topicName: "Person and Organization Schemas", refLink: "https://schema.org/Person" },
            { topicName: "Structured Data SEO Benefits", refLink: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
            { topicName: "JSON-LD Alternative", refLink: "https://json-ld.org/" },
            { topicName: "Testing Structured Data", refLink: "https://developers.google.com/search/docs/appearance/structured-data" },
            { topicName: "Nested Microdata Items", refLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata" }
        ],
        assessmentId: 12,
        assessmentUniqueId: 1763029973315,
        testType: "multiple-choice"
    },

    questions: [
        {
            id: 1,
            question: "What is the primary purpose of the <pre>itemscope</pre> attribute in HTML microdata?",
            options: {
                A: "To define the CSS scope for styling microdata elements",
                B: "To create a new item and establish that the element and its descendants contain information about a particular thing",
                C: "To limit the visibility of microdata to specific search engines",
                D: "To enable JavaScript access to structured data properties"
            },
            correct: "B",
            explanation: "The <pre>itemscope</pre> attribute creates a new microdata item, establishing that the element it's on (and its descendants) contain structured information about a particular entity. Think of it as declaring \"this section describes one specific thing.\" For example, <pre><div itemscope></pre> creates a new item scope. You typically pair it with <pre>itemtype</pre> to specify what kind of thing it is (like a Product or Person). The attribute doesn't relate to CSS styling, search engine visibility restrictions, or JavaScript access—it's purely for semantic markup that machine-readable parsers can understand. This markup helps search engines, browsers, and other tools extract structured information from your HTML.",
            topics: ["Microdata Attributes (itemscope, itemtype, itemprop)"]
        },

        {
            id: 2,
            question: "What does the <pre>itemtype</pre> attribute specify in microdata markup?",
            options: {
                A: "The data type of the item's properties (string, number, date, etc.)",
                B: "The URL of a vocabulary that defines the item, typically from Schema.org",
                C: "The MIME type of external resources referenced by the item",
                D: "The HTML element type that can contain the item"
            },
            correct: "B",
            explanation: "The <pre>itemtype</pre> attribute specifies a URL that defines the vocabulary for the item, typically pointing to a Schema.org type like <pre>https://schema.org/Product</pre> or <pre>https://schema.org/Person</pre>. This URL identifies what kind of thing the item represents and what properties are valid for it. The vocabulary definition at that URL describes the expected properties and their meanings. For instance, <pre><div itemscope itemtype=\"https://schema.org/Product\"></pre> indicates that this item is a Product according to Schema.org's definition. The attribute doesn't specify data types of individual properties (that's contextual), MIME types, or constrain which HTML elements can be used—it purely identifies the semantic type of the item being described.",
            topics: ["Microdata Attributes (itemscope, itemtype, itemprop)", "Schema.org Vocabulary"]
        },

        {
            id: 3,
            question: "How do you mark up a property value using the <pre>itemprop</pre> attribute?",
            options: {
                A: "Add <pre>itemprop=\"propertyName\"</pre> to elements containing the property value",
                B: "Nest <pre>itemprop</pre> elements inside an <pre>itemscope</pre> element",
                C: "Use <pre>itemprop:value=\"data\"</pre> syntax on any element",
                D: "Create a separate <pre><meta itemprop></pre> element for each property"
            },
            correct: "A",
            explanation: "To mark up a property, add the <pre>itemprop</pre> attribute with the property name to the element that contains the value: <pre><span itemprop=\"name\">Product Name</span></pre>. The property becomes part of the microdata item defined by the nearest ancestor with <pre>itemscope</pre>. Different elements extract values differently: most elements use their text content, <pre><meta></pre> uses its <pre>content</pre> attribute, <pre><a></pre> and <pre><link></pre> use <pre>href</pre>, <pre><img></pre> uses <pre>src</pre>, etc. You don't nest itemprop elements or use special syntax like <pre>itemprop:value</pre>. While <pre><meta itemprop></pre> is valid for non-visible data, it's not required for all properties—you typically use itemprop on elements that already display the content.",
            topics: ["Microdata Attributes (itemscope, itemtype, itemprop)"]
        },

        {
            id: 4,
            question: "What is Schema.org in the context of structured data?",
            options: {
                A: "A proprietary Google format for search engine optimization",
                B: "A collaborative vocabulary maintained by major search engines for marking up structured data",
                C: "A JavaScript library for parsing microdata",
                D: "An HTML specification for semantic elements"
            },
            correct: "B",
            explanation: "Schema.org is a collaborative project created and maintained by major search engines (Google, Microsoft, Yahoo, Yandex) that provides a shared vocabulary for structured data markup. It defines hundreds of types (like Product, Person, Event, Recipe) and their properties, creating a common language for describing entities on the web. While Google heavily promotes it, Schema.org is not proprietary—it's an open standard that any service can use. It's not a JavaScript library or parsing tool; it's purely a vocabulary specification. You can implement Schema.org using various formats: HTML microdata, RDFa, or JSON-LD. The vocabulary helps search engines understand your content better, potentially leading to rich results in search listings.",
            topics: ["Schema.org Vocabulary"]
        },

        {
            id: 5,
            question: "Which of the following is a correct implementation of a Product schema with microdata?",
            options: {
                A: "<pre><div itemscope itemtype=\"Product\"><span itemprop=\"name\">Laptop</span></div></pre>",
                B: "<pre><div itemscope itemtype=\"https://schema.org/Product\"><span itemprop=\"name\">Laptop</span></div></pre>",
                C: "<pre><div itemtype=\"https://schema.org/Product\"><span itemprop=\"name\">Laptop</span></div></pre>",
                D: "<pre><product><name>Laptop</name></product></pre>"
            },
            correct: "B",
            explanation: "The correct implementation requires both <pre>itemscope</pre> (to create the item) and <pre>itemtype</pre> with the full Schema.org URL: <pre><div itemscope itemtype=\"https://schema.org/Product\"></pre>. The <pre>itemtype</pre> value must be a complete URL, not just \"Product\". Option A is missing the URL protocol and domain. Option C is missing <pre>itemscope</pre>, which is required to create the item—without it, the itemtype has no meaning. Option D uses made-up XML-style elements that aren't part of HTML or microdata. Inside the item scope, you add properties with <pre>itemprop</pre>. Common Product properties include name, description, image, price, brand, and aggregateRating.",
            topics: ["Product Schema", "Microdata Attributes (itemscope, itemtype, itemprop)"]
        },

        {
            id: 6,
            question: "For a Product schema, how do you properly mark up the price with currency?",
            options: {
                A: "<pre><span itemprop=\"price\">$29.99 USD</span></pre>",
                B: "<pre><span itemprop=\"price\" content=\"29.99\">$29.99</span> <meta itemprop=\"priceCurrency\" content=\"USD\"></pre>",
                C: "<pre><span itemprop=\"price\" currency=\"USD\">29.99</span></pre>",
                D: "<pre><data itemprop=\"price\" value=\"29.99 USD\">$29.99</data></pre>"
            },
            correct: "B",
            explanation: "For Product pricing, Schema.org expects separate properties: <pre>price</pre> (numeric value) and <pre>priceCurrency</pre> (ISO 4217 currency code like \"USD\"). The best practice is to use the <pre>content</pre> attribute for the machine-readable value while displaying formatted text: <pre><span itemprop=\"price\" content=\"29.99\">$29.99</span></pre>. For currency, since it's often not visibly displayed, use a <pre><meta></pre> tag: <pre><meta itemprop=\"priceCurrency\" content=\"USD\"></pre>. Option A puts everything in text, which parsers might not interpret correctly. Option C uses a non-existent currency attribute. Option D uses the <pre><data></pre> element's <pre>value</pre> attribute, which could work, but the combined \"29.99 USD\" format isn't ideal—separate properties are clearer.",
            topics: ["Product Schema"]
        },

        {
            id: 7,
            question: "What is the purpose of the Person schema type in Schema.org?",
            options: {
                A: "To mark up user account information for authentication",
                B: "To provide structured data about a person for search engines and other services to understand",
                C: "To create personalized content based on visitor demographics",
                D: "To comply with privacy regulations like GDPR"
            },
            correct: "B",
            explanation: "The Person schema (https://schema.org/Person) provides a structured way to describe information about a person, including properties like name, jobTitle, email, telephone, address, affiliation, and more. This helps search engines and other services understand who the person is and their attributes. For example, marking up an author bio or team member profile with Person schema can lead to enhanced search results. It's not related to authentication systems, dynamic content personalization, or legal privacy compliance—it's purely about semantic markup. Person schema is commonly used for author pages, staff directories, about pages, and anywhere you're describing an individual. You can also nest Person schemas within other schemas, like marking up the author of an Article.",
            topics: ["Person and Organization Schemas", "Schema.org Vocabulary"]
        },

        {
            id: 8,
            question: "How do you create nested microdata items, such as a Product with a nested Brand organization?",
            options: {
                A: "Add another <pre>itemscope</pre> and <pre>itemtype</pre> within the parent item's scope",
                B: "Use <pre>itemprop=\"brand.name\"</pre> with dot notation",
                C: "Create separate items and link them with <pre>itemref</pre> attributes",
                D: "Nesting is not supported; all items must be separate"
            },
            correct: "A",
            explanation: "To nest microdata items, create a new <pre>itemscope</pre> within the parent item. For example: <pre><div itemscope itemtype=\"https://schema.org/Product\"><span itemprop=\"name\">Laptop</span><div itemprop=\"brand\" itemscope itemtype=\"https://schema.org/Brand\"><span itemprop=\"name\">TechCorp</span></div></div></pre>. The <pre>itemprop=\"brand\"</pre> on the nested element indicates that this property contains another structured item. The nested <pre>itemscope</pre> creates a new item scope for the Brand. Dot notation like <pre>itemprop=\"brand.name\"</pre> is not valid in microdata. While <pre>itemref</pre> exists for referencing items defined elsewhere on the page, the standard approach for nested relationships is inline nesting with additional itemscope declarations.",
            topics: ["Nested Microdata Items", "Product Schema"]
        },

        {
            id: 9,
            question: "What are the SEO benefits of implementing structured data on your website?",
            options: {
                A: "Guaranteed higher search rankings for all keywords",
                B: "Eligibility for rich results (rich snippets) and enhanced search appearance, plus better content understanding by search engines",
                C: "Automatic removal of duplicate content penalties",
                D: "Faster page indexing regardless of content quality"
            },
            correct: "B",
            explanation: "Structured data makes your content eligible for rich results in search engines, such as product stars and prices, recipe cards, event information, FAQ accordions, and more. These enhanced listings can improve click-through rates. Additionally, structured data helps search engines better understand your content's meaning and context, which can improve how they categorize and present it. However, structured data doesn't guarantee higher rankings—it's about eligibility for enhanced features and better understanding. It doesn't remove duplicate content issues, and while it helps search engines understand content, it doesn't bypass quality requirements for indexing. Think of structured data as helping search engines present your content more effectively when it already deserves to rank.",
            topics: ["Structured Data SEO Benefits"]
        },

        {
            id: 10,
            question: "What is JSON-LD and how does it differ from microdata?",
            options: {
                A: "JSON-LD is a JavaScript library for generating microdata automatically",
                B: "JSON-LD is a JSON-based format for structured data that goes in <pre><script type=\"application/ld+json\"></pre> tags, separate from HTML content",
                C: "JSON-LD is the same as microdata but uses JSON syntax instead of HTML attributes",
                D: "JSON-LD is deprecated in favor of microdata"
            },
            correct: "B",
            explanation: "JSON-LD (JavaScript Object Notation for Linked Data) is an alternative format for implementing structured data using JSON syntax in <pre><script type=\"application/ld+json\"></pre> tags, typically in the <pre><head></pre> or anywhere in the document. Unlike microdata, which integrates directly into HTML elements with attributes, JSON-LD is completely separate from your content markup. For example: <pre><script type=\"application/ld+json\">{\"@context\": \"https://schema.org\", \"@type\": \"Product\", \"name\": \"Laptop\"}</script></pre>. Google and other search engines support both formats equally. JSON-LD is not a library, not deprecated, and quite different from microdata in implementation approach. Many developers prefer JSON-LD because it doesn't clutter HTML markup and is easier to generate programmatically.",
            topics: ["JSON-LD Alternative"]
        },

        {
            id: 11,
            question: "Which tool is recommended by Google for testing and validating structured data markup?",
            options: {
                A: "W3C Markup Validator",
                B: "Google's Rich Results Test and Schema Markup Validator",
                C: "Chrome DevTools Console",
                D: "Schema.org's built-in validator API"
            },
            correct: "B",
            explanation: "Google provides the Rich Results Test (https://search.google.com/test/rich-results) and the Schema Markup Validator for testing structured data. These tools show you how Google interprets your markup, what rich results you're eligible for, and any errors or warnings. The Rich Results Test is particularly useful because it shows whether your markup qualifies for specific enhanced features in Google Search. The W3C Markup Validator checks HTML validity but not structured data specifically. Chrome DevTools can inspect elements but doesn't validate Schema.org compliance. Schema.org itself provides documentation but not a real-time validation API. There are also third-party tools like Schema.org's validator and structured data testing tools from Yandex and Bing.",
            topics: ["Testing Structured Data"]
        },

        {
            id: 12,
            question: "How do you mark up an Organization schema with contact information?",
            options: {
                A: "Use nested <pre>itemprop=\"contactPoint\"</pre> with an itemscope for ContactPoint type",
                B: "Add <pre>itemprop=\"email\"</pre> and <pre>itemprop=\"telephone\"</pre> directly on the Organization",
                C: "Organizations cannot have contact information in Schema.org",
                D: "Use separate Person schemas for each contact"
            },
            correct: "A",
            explanation: "The Organization schema uses a nested ContactPoint for contact information. The correct markup is: <pre><div itemscope itemtype=\"https://schema.org/Organization\"><div itemprop=\"contactPoint\" itemscope itemtype=\"https://schema.org/ContactPoint\"><span itemprop=\"telephone\">555-1234</span><span itemprop=\"contactType\">customer service</span></div></div></pre>. The ContactPoint type includes properties like telephone, email, contactType (e.g., \"customer service\", \"sales\"), and areaServed. While Organization can have direct properties like email, the recommended approach for structured contact information is using ContactPoint. This allows you to specify multiple contact points for different purposes (sales, support, etc.) and provides richer semantics. You wouldn't use separate Person schemas for organizational contacts.",
            topics: ["Person and Organization Schemas", "Nested Microdata Items"]
        },

        {
            id: 13,
            question: "What is the <pre>@context</pre> property in JSON-LD structured data?",
            options: {
                A: "It specifies which JSON parser to use",
                B: "It defines the vocabulary being used, typically set to \"https://schema.org\"",
                C: "It provides context about when the data was created",
                D: "It sets the character encoding for the JSON data"
            },
            correct: "B",
            explanation: "In JSON-LD, the <pre>@context</pre> property defines the vocabulary or namespace being used for the terms in the data. For Schema.org markup, you typically set it to <pre>\"@context\": \"https://schema.org\"</pre>. This tells parsers that terms like \"Product\", \"name\", \"price\", etc., should be interpreted according to Schema.org definitions. It's similar in purpose to the <pre>itemtype</pre> URL in microdata—it establishes the vocabulary context. The context doesn't relate to JSON parsing (that's built into JavaScript), temporal creation context, or character encoding (which is handled at the HTTP/HTML level). The <pre>@</pre> prefix indicates it's a JSON-LD keyword rather than a data property. You can also use <pre>@context</pre> to define custom vocabularies or combine multiple vocabularies.",
            topics: ["JSON-LD Alternative", "Schema.org Vocabulary"]
        },

        {
            id: 14,
            question: "For a Product with customer reviews, what is the proper Schema.org markup structure?",
            options: {
                A: "Use <pre>itemprop=\"review\"</pre> with nested Review type items",
                B: "Add <pre>itemprop=\"customerReviews\"</pre> with comma-separated text",
                C: "Reviews cannot be marked up; only aggregateRating is supported",
                D: "Use a separate ReviewList schema linked with itemref"
            },
            correct: "A",
            explanation: "Product schema supports the <pre>review</pre> property, which should contain Review type items. You can have multiple reviews as nested items: <pre><div itemscope itemtype=\"https://schema.org/Product\"><div itemprop=\"review\" itemscope itemtype=\"https://schema.org/Review\"><span itemprop=\"reviewRating\" itemscope itemtype=\"https://schema.org/Rating\"><span itemprop=\"ratingValue\">5</span></span><span itemprop=\"author\" itemscope itemtype=\"https://schema.org/Person\"><span itemprop=\"name\">John</span></span></div></div></pre>. Each Review can include properties like reviewRating, author, reviewBody, and datePublished. There's no \"customerReviews\" property, and reviews are definitely supported alongside aggregateRating. While itemref exists, direct nesting is the standard approach for reviews.",
            topics: ["Product Schema", "Nested Microdata Items"]
        },

        {
            id: 15,
            question: "What does the <pre>aggregateRating</pre> property represent in Product schema?",
            options: {
                A: "The total number of products sold",
                B: "A summary of all customer ratings, including average rating and review count",
                C: "The most recent customer rating",
                D: "The percentage of 5-star reviews"
            },
            correct: "B",
            explanation: "The <pre>aggregateRating</pre> property contains an AggregateRating type that summarizes multiple ratings. It includes properties like <pre>ratingValue</pre> (the average rating, e.g., 4.5), <pre>bestRating</pre> (the highest possible rating, often 5), <pre>worstRating</pre> (the lowest possible, often 1), and <pre>reviewCount</pre> or <pre>ratingCount</pre> (how many ratings contributed to the average). For example: <pre><div itemprop=\"aggregateRating\" itemscope itemtype=\"https://schema.org/AggregateRating\"><span itemprop=\"ratingValue\">4.5</span> out of <span itemprop=\"bestRating\">5</span> based on <span itemprop=\"reviewCount\">89</span> reviews</div></pre>. This aggregate data is what often appears as star ratings in search results. It doesn't represent sales numbers, individual ratings, or specific percentages.",
            topics: ["Product Schema"]
        },

        {
            id: 16,
            question: "How do you mark up content that should be machine-readable but not visibly displayed?",
            options: {
                A: "Use <pre><meta itemprop=\"propertyName\" content=\"value\"></pre>",
                B: "Add <pre>style=\"display:none\"</pre> to regular elements with itemprop",
                C: "Use <pre><!-- itemprop=\"propertyName\" value=\"value\" --></pre> in comments",
                D: "Machine-readable content must always be visible to comply with guidelines"
            },
            correct: "A",
            explanation: "Use the <pre><meta></pre> element with <pre>itemprop</pre> and <pre>content</pre> attributes for machine-readable data that shouldn't be visibly displayed: <pre><meta itemprop=\"priceCurrency\" content=\"USD\"></pre>. The <pre><meta></pre> element is designed for metadata and won't render visibly. Alternatively, use <pre><link></pre> for URL properties. However, be cautious: Google discourages hiding content that differs significantly from what users see. Using <pre>display:none</pre> on content-bearing elements is risky because it can be seen as hiding content from users, which may violate search engine guidelines. HTML comments are not parsed for microdata. While visible content is generally preferred for trust and transparency, <pre><meta></pre> is acceptable for supplementary data like currency codes, ISBN numbers, or other metadata.",
            topics: ["Microdata Attributes (itemscope, itemtype, itemprop)", "Structured Data SEO Benefits"]
        },

        {
            id: 17,
            question: "What is the <pre>@type</pre> property in JSON-LD structured data?",
            options: {
                A: "It specifies the data type (string, number, boolean) of a property",
                B: "It defines the Schema.org type of the entity, such as \"Product\" or \"Person\"",
                C: "It indicates the file format of external resources",
                D: "It sets the MIME type for the JSON-LD script"
            },
            correct: "B",
            explanation: "In JSON-LD, <pre>@type</pre> specifies the Schema.org type of the entity being described. For example: <pre>{\"@context\": \"https://schema.org\", \"@type\": \"Product\", \"name\": \"Laptop\"}</pre>. The <pre>@type</pre> value (\"Product\") corresponds to a Schema.org type and is equivalent to the <pre>itemtype</pre> URL in microdata (but without the full URL since <pre>@context</pre> already establishes the Schema.org namespace). You can have nested objects with their own <pre>@type</pre> values, like a Brand or Review within a Product. The property doesn't define data types of individual values, file formats, or MIME types. The <pre>@</pre> prefix indicates it's a JSON-LD keyword. Multiple types can be specified as an array: <pre>\"@type\": [\"Product\", \"IndividualProduct\"]</pre>.",
            topics: ["JSON-LD Alternative", "Schema.org Vocabulary"]
        },

        {
            id: 18,
            question: "For a Person schema representing a website author, which properties are most relevant?",
            options: {
                A: "productID, price, availability",
                B: "name, url, jobTitle, sameAs (for social profiles)",
                C: "reviewRating, reviewBody, datePublished",
                D: "openingHours, address, telephone"
            },
            correct: "B",
            explanation: "For an author's Person schema, relevant properties include <pre>name</pre> (the person's name), <pre>url</pre> (link to their profile or website), <pre>jobTitle</pre> (their role), <pre>image</pre> (profile photo), <pre>description</pre> (bio), and <pre>sameAs</pre> (array of URLs to social media profiles like Twitter, LinkedIn). For example: <pre><div itemscope itemtype=\"https://schema.org/Person\"><span itemprop=\"name\">Jane Doe</span><span itemprop=\"jobTitle\">Senior Developer</span><a itemprop=\"sameAs\" href=\"https://twitter.com/janedoe\">Twitter</a></div></pre>. Option A properties belong to Product, option C to Review, and option D to Organization or LocalBusiness. The Person schema is flexible with many optional properties; choose those that make sense for your context (author, team member, contact, etc.).",
            topics: ["Person and Organization Schemas"]
        },

        {
            id: 19,
            question: "What is the purpose of the <pre>itemref</pre> attribute in microdata?",
            options: {
                A: "To link to external resources like images or documents",
                B: "To include properties from other elements on the page that are outside the itemscope tree",
                C: "To create bidirectional references between two items",
                D: "To specify which version of Schema.org to use"
            },
            correct: "B",
            explanation: "The <pre>itemref</pre> attribute allows you to include properties from elements that are not descendants of the itemscope element. It takes a space-separated list of element IDs: <pre><div itemscope itemtype=\"https://schema.org/Product\" itemref=\"brand-info\"><span itemprop=\"name\">Laptop</span></div><div id=\"brand-info\"><span itemprop=\"brand\">TechCorp</span></div></pre>. This is useful when page structure doesn't allow nested markup, such as when the brand information appears in a sidebar while the product is in the main content. The referenced elements are treated as if they were children of the itemscope element for microdata parsing purposes. It's not for external resources (use <pre><a></pre> or <pre><link></pre> for that), doesn't create bidirectional links, and doesn't specify Schema.org versions.",
            topics: ["Microdata Attributes (itemscope, itemtype, itemprop)", "Nested Microdata Items"]
        },

        {
            id: 20,
            question: "How do search engines typically use structured data from websites?",
            options: {
                A: "They replace the website's content with the structured data",
                B: "They extract the structured data to understand content better and potentially display rich results in search listings",
                C: "They only use it for paid advertising placements",
                D: "They ignore it unless the website has high domain authority"
            },
            correct: "B",
            explanation: "Search engines extract and parse structured data to better understand what your content is about and how to categorize it. This improved understanding can lead to enhanced search result displays called \"rich results\" or \"rich snippets\"—such as star ratings for products, cooking times for recipes, event dates and locations, FAQ expandable sections, and more. The structured data supplements, rather than replaces, your visible content. It's not limited to paid ads; it works for organic search results. Search engines use structured data from sites of all authority levels, though quality content and proper implementation matter more than domain authority alone. Think of structured data as providing explicit semantics that help search engines understand what human-readable content means.",
            topics: ["Structured Data SEO Benefits"]
        },

        {
            id: 21,
            question: "What is a common mistake when implementing microdata that can cause it to fail validation?",
            options: {
                A: "Forgetting to include <pre>itemscope</pre> when using <pre>itemtype</pre>",
                B: "Using too many properties on a single item",
                C: "Mixing microdata with CSS classes on the same element",
                D: "Including microdata in the <pre><head></pre> section"
            },
            correct: "A",
            explanation: "A common error is adding <pre>itemtype</pre> without <pre>itemscope</pre>. The <pre>itemscope</pre> attribute is what creates the item, and <pre>itemtype</pre> only makes sense in that context—they should almost always appear together: <pre><div itemscope itemtype=\"https://schema.org/Product\"></pre>. Without <pre>itemscope</pre>, the <pre>itemtype</pre> and any child <pre>itemprop</pre> elements won't be properly associated with an item. There's no limit on properties that would cause validation failure (though irrelevant properties are pointless). Mixing microdata attributes with CSS classes is perfectly fine and doesn't cause issues. While microdata typically appears in the <pre><body></pre> where content lives, technically you could include it in <pre><head></pre> using <pre><link></pre> or <pre><meta></pre> elements, though this is uncommon.",
            topics: ["Microdata Attributes (itemscope, itemtype, itemprop)", "Testing Structured Data"]
        },

        {
            id: 22,
            question: "In JSON-LD, how do you represent a property with multiple values?",
            options: {
                A: "Repeat the property multiple times in the JSON object",
                B: "Use an array: <pre>\"propertyName\": [\"value1\", \"value2\", \"value3\"]</pre>",
                C: "Concatenate values with commas: <pre>\"propertyName\": \"value1, value2, value3\"</pre>",
                D: "Multiple values are not supported in JSON-LD"
            },
            correct: "B",
            explanation: "In JSON-LD, use a JSON array to represent multiple values for a property: <pre>\"image\": [\"image1.jpg\", \"image2.jpg\", \"image3.jpg\"]</pre> or <pre>\"sameAs\": [\"https://twitter.com/example\", \"https://facebook.com/example\"]</pre>. This is standard JSON syntax and works for both simple values (strings, numbers) and nested objects. You cannot repeat keys in JSON objects—that would be invalid JSON syntax. Concatenating values into a comma-separated string might display correctly but won't be parsed as multiple distinct values by search engines and other consumers. JSON-LD fully supports multiple values through arrays, making it easy to include multiple images, authors, or other repeating properties. Some properties expect arrays (like offers or review), while others can be either a single value or an array.",
            topics: ["JSON-LD Alternative"]
        },

        {
            id: 23,
            question: "What is the relationship between microdata, RDFa, and JSON-LD?",
            options: {
                A: "They are different versions of the same specification that replaced each other over time",
                B: "They are three different syntaxes for embedding structured data in web pages, all supported by search engines",
                C: "RDFa is the only valid format; microdata and JSON-LD are deprecated",
                D: "Microdata is for HTML, RDFa is for XML, and JSON-LD is for JavaScript applications"
            },
            correct: "B",
            explanation: "Microdata, RDFa, and JSON-LD are three different formats/syntaxes for implementing structured data, and search engines like Google support all three. Microdata uses HTML attributes (<pre>itemscope</pre>, <pre>itemprop</pre>), RDFa uses different attributes (<pre>vocab</pre>, <pre>typeof</pre>, <pre>property</pre>), and JSON-LD uses JSON in <pre><script></pre> tags. They're not sequential versions; they evolved in parallel from different communities. None are deprecated—you can choose based on preference and use case. JSON-LD has gained popularity because it separates data from markup. All three can work in HTML, not limited to specific document types. You generally shouldn't mix multiple formats for the same content (pick one), but you could use different formats for different items on the same page.",
            topics: ["Microdata Attributes (itemscope, itemtype, itemprop)", "JSON-LD Alternative"]
        },

        {
            id: 24,
            question: "What does the <pre>offers</pre> property represent in a Product schema?",
            options: {
                A: "Special promotional discounts currently available",
                B: "An Offer or AggregateOffer type containing price, availability, and seller information",
                C: "The number of offers received from suppliers",
                D: "Cross-sell and upsell product suggestions"
            },
            correct: "B",
            explanation: "The <pre>offers</pre> property contains structured information about how to purchase the product, using the Offer or AggregateOffer type. An Offer includes properties like <pre>price</pre>, <pre>priceCurrency</pre>, <pre>availability</pre> (e.g., \"https://schema.org/InStock\"), <pre>url</pre> (purchase link), <pre>seller</pre>, <pre>priceValidUntil</pre>, and more. Example: <pre><div itemprop=\"offers\" itemscope itemtype=\"https://schema.org/Offer\"><span itemprop=\"price\" content=\"29.99\">$29.99</span><link itemprop=\"availability\" href=\"https://schema.org/InStock\">In Stock</div></pre>. Products can have multiple offers (from different sellers) or an AggregateOffer (representing a range of prices). It's not specifically about promotions (though on-sale prices can be marked), supplier offers, or product recommendations—it's about purchase options for this specific product.",
            topics: ["Product Schema", "Nested Microdata Items"]
        },

        {
            id: 25,
            question: "What should you do if Google's Rich Results Test shows warnings but no errors for your structured data?",
            options: {
                A: "Ignore warnings; they don't affect rich results eligibility",
                B: "Review warnings and consider adding recommended properties to improve rich results eligibility and quality",
                C: "Completely rewrite the structured data using a different format",
                D: "Warnings indicate the page will be penalized in search rankings"
            },
            correct: "B",
            explanation: "Warnings in the Rich Results Test typically indicate missing recommended (but not required) properties that could enhance your structured data or improve rich results eligibility. For example, a Product might show warnings if you're missing <pre>image</pre>, <pre>brand</pre>, or <pre>aggregateRating</pre> properties. While errors must be fixed for the markup to work correctly, warnings suggest improvements that could make your rich results more informative and visually appealing, potentially improving click-through rates. Review each warning to determine if adding that property makes sense for your content. Warnings don't cause search ranking penalties—they're helpful suggestions. You don't need to change formats; just enhance your existing markup. Errors (not warnings) can prevent rich results eligibility.",
            topics: ["Testing Structured Data", "Structured Data SEO Benefits"]
        }
    ]
};
