module.exports = {
  "metadata": {
    "title": "HTML Meta Tags & SEO Fundamentals",
    "description": "Test your understanding of HTML meta tags, SEO basics, responsive design viewport, and essential document metadata.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Meta Tags",
      "Character Encoding",
      "Responsive Design",
      "SEO Basics",
      "Viewport Configuration",
      "Open Graph Protocol",
      "Favicons",
      "Document Metadata",
      "Search Optimization",
      "Social Media Sharing"
    ],
    "topicLinks": [
      {
        "topicName": "Meta Tags",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
      },
      {
        "topicName": "Character Encoding",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset"
      },
      {
        "topicName": "Responsive Design",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
      },
      {
        "topicName": "SEO Basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Glossary/SEO"
      },
      {
        "topicName": "Viewport Configuration",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag"
      },
      {
        "topicName": "Open Graph Protocol",
        "refLink": "https://ogp.me/"
      },
      {
        "topicName": "Favicons",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#rel"
      },
      {
        "topicName": "Document Metadata",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
      },
      {
        "topicName": "Search Optimization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name"
      },
      {
        "topicName": "Social Media Sharing",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/property"
      }
    ],
    "assessmentId": 8,
    "assessmentUniqueId": 1762878800000,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the purpose of the <pre><meta charset=\"UTF-8\"></pre> tag?",
      "options": {
        "A": "Defines the character encoding for the HTML document",
        "B": "Sets the page title character limit",
        "C": "Specifies the CSS character set",
        "D": "Defines the JavaScript encoding"
      },
      "correct": "A",
      "explanation": "The <pre><meta charset=\"UTF-8\"></pre> tag specifies that the document uses UTF-8 character encoding, which supports most characters from all human languages. This ensures special characters, emojis, and international text display correctly. It should be the first meta tag in the <pre><head></pre> section.",
      "topic": {
        "topics": [
          "Character Encoding",
          "Meta Tags"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which meta tag is essential for responsive web design on mobile devices?",
      "options": {
        "A": "<pre><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"></pre>",
        "B": "<pre><meta name=\"responsive\" content=\"mobile\"></pre>",
        "C": "<pre><meta name=\"mobile\" content=\"responsive\"></pre>",
        "D": "<pre><meta name=\"layout\" content=\"flexible\"></pre>"
      },
      "correct": "A",
      "explanation": "The viewport meta tag controls how a webpage is displayed on mobile devices. <pre>width=device-width</pre> sets the page width to match the screen width, and <pre>initial-scale=1.0</pre> sets the initial zoom level. Without this tag, mobile browsers may show a scaled-down desktop version of the site.",
      "topic": {
        "topics": [
          "Viewport Configuration",
          "Responsive Design"
        ]
      }
    },
    {
      "id": 3,
      "question": "What does the description meta tag provide for search engines?",
      "options": {
        "A": "A brief summary of the page content for search results",
        "B": "Detailed page content for indexing",
        "C": "Keywords for search ranking",
        "D": "Page structure information"
      },
      "correct": "A",
      "explanation": "The description meta tag provides a concise summary of the page content that search engines often display in search results. Example: <pre><meta name=\"description\" content=\"Learn HTML basics with interactive tutorials and examples.\"></pre> This description can influence click-through rates from search results.",
      "topic": {
        "topics": [
          "SEO Basics",
          "Meta Tags"
        ]
      }
    },
    {
      "id": 4,
      "question": "What is the historical purpose of the keywords meta tag?",
      "options": {
        "A": "Originally intended for search engines to understand page topics",
        "B": "To define CSS keyword variables",
        "C": "To specify JavaScript reserved words",
        "D": "To list HTML elements used on the page"
      },
      "correct": "A",
      "explanation": "The keywords meta tag was originally used by early search engines to understand what a page was about. Example: <pre><meta name=\"keywords\" content=\"HTML, CSS, JavaScript, web development\"></pre> However, modern search engines largely ignore this tag due to spam abuse, and it's no longer important for SEO.",
      "topic": {
        "topics": [
          "SEO Basics",
          "Meta Tags"
        ]
      }
    },
    {
      "id": 5,
      "question": "Which meta tag identifies the page author?",
      "options": {
        "A": "<pre><meta name=\"author\" content=\"Author Name\"></pre>",
        "B": "<pre><meta name=\"creator\" content=\"Author Name\"></pre>",
        "C": "<pre><meta author=\"Author Name\"></pre>",
        "D": "<pre><meta property=\"author\" content=\"Author Name\"></pre>"
      },
      "correct": "A",
      "explanation": "The author meta tag identifies the person or organization who created the page. Example: <pre><meta name=\"author\" content=\"Jane Smith\"></pre> This is primarily for documentation purposes and doesn't significantly impact SEO, but it can be useful for content management systems.",
      "topic": {
        "topics": [
          "Document Metadata",
          "Meta Tags"
        ]
      }
    },
    {
      "id": 6,
      "question": "What is the purpose of Open Graph meta tags?",
      "options": {
        "A": "Control how content appears when shared on social media",
        "B": "Optimize page loading for social networks",
        "C": "Add social media buttons to the page",
        "D": "Connect to social media APIs"
      },
      "correct": "A",
      "explanation": "Open Graph meta tags control how content appears when shared on social media platforms like Facebook, LinkedIn, and Twitter. They define the title, description, image, and other metadata specifically for social sharing. Example: <pre><meta property=\"og:title\" content=\"Page Title\"></pre>",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 7,
      "question": "How do you specify a favicon for a website?",
      "options": {
        "A": "<pre><link rel=\"icon\" href=\"favicon.ico\"></pre>",
        "B": "<pre><meta name=\"favicon\" href=\"favicon.ico\"></pre>",
        "C": "<pre><icon src=\"favicon.ico\"></pre>",
        "D": "<pre><favicon href=\"favicon.ico\"></pre>"
      },
      "correct": "A",
      "explanation": "Favicons are specified using the <pre><link></pre> element with <pre>rel=\"icon\"</pre>. The favicon appears in browser tabs, bookmarks, and history. Example: <pre><link rel=\"icon\" href=\"images/favicon.ico\" type=\"image/x-icon\"></pre> Modern browsers also support PNG and SVG favicons.",
      "topic": {
        "topics": [
          "Favicons",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 8,
      "question": "What does the <pre>initial-scale=1.0</pre> value in the viewport meta tag do?",
      "options": {
        "A": "Sets the initial zoom level to 100%",
        "B": "Makes the page scale to 10% initially",
        "C": "Sets the page to scale automatically",
        "D": "Disables zooming on the page"
      },
      "correct": "A",
      "explanation": "The <pre>initial-scale=1.0</pre> value sets the initial zoom level to 100% (no zoom) when the page first loads. This ensures the content appears at its intended size on mobile devices rather than being zoomed in or out.",
      "topic": {
        "topics": [
          "Viewport Configuration",
          "Responsive Design"
        ]
      }
    },
    {
      "id": 9,
      "question": "Which Open Graph tag defines the title for social media sharing?",
      "options": {
        "A": "<pre><meta property=\"share:title\" content=\"Page Title\"></pre>",
        "B": "<pre><meta property=\"og:title\" content=\"Page Title\"></pre>",
        "C": "<pre><meta name=\"og:title\" content=\"Page Title\"></pre>",
        "D": "<pre><meta name=\"social:title\" content=\"Page Title\"></pre>"
      },
      "correct": "B",
      "explanation": "The <pre>og:title</pre> property defines the title that should be displayed when the page is shared on social media. This can be different from the HTML <pre><title></pre> element. Example: <pre><meta property=\"og:title\" content=\"Amazing Article About Web Development\"></pre>",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 10,
      "question": "What is the recommended size for a basic favicon in ICO format?",
      "options": {
        "A": "64x64 pixels",
        "B": "16x16 pixels",
        "C": "32x32 pixels",
        "D": "128x128 pixels"
      },
      "correct": "B",
      "explanation": "The traditional favicon size is 16x16 pixels, which is the size displayed in browser tabs. However, modern favicons often include multiple sizes (16x16, 32x32, 64x64) in a single ICO file or use PNG files with multiple sizes specified.",
      "topic": {
        "topics": [
          "Favicons",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 11,
      "question": "Which meta tag prevents search engines from indexing a page?",
      "options": {
        "A": "<pre><meta name=\"search\" content=\"exclude\"></pre>",
        "B": "<pre><meta name=\"robots\" content=\"noindex\"></pre>",
        "C": "<pre><meta index=\"false\"></pre>",
        "D": "<pre><meta name=\"google\" content=\"noindex\"></pre>"
      },
      "correct": "B",
      "explanation": "The robots meta tag with <pre>noindex</pre> value tells search engines not to index the page. Other useful values include <pre>nofollow</pre> (don't follow links), and <pre>noarchive</pre> (don't show cached version). Example: <pre><meta name=\"robots\" content=\"noindex, nofollow\"></pre>",
      "topic": {
        "topics": [
          "SEO Basics",
          "Meta Tags"
        ]
      }
    },
    {
      "id": 12,
      "question": "What does the Open Graph <pre>og:image</pre> tag specify?",
      "options": {
        "A": "The author's profile picture",
        "B": "The image to display when the page is shared",
        "C": "The site logo for search results",
        "D": "The background image for the page"
      },
      "correct": "B",
      "explanation": "The <pre>og:image</pre> tag specifies the image that should be displayed when the page is shared on social media. This image is crucial for attracting clicks. Example: <pre><meta property=\"og:image\" content=\"https://example.com/image.jpg\"></pre>",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 13,
      "question": "Where should meta tags be placed in an HTML document?",
      "options": {
        "A": "After the <pre><html></pre> tag",
        "B": "Inside the <pre><head></pre> section",
        "C": "Inside the <pre><body></pre> section",
        "D": "At the end of the document"
      },
      "correct": "B",
      "explanation": "All meta tags should be placed within the <pre><head></pre> section of the HTML document. The <pre><head></pre> contains metadata about the document, while the <pre><body></pre> contains the visible content.",
      "topic": {
        "topics": [
          "Document Metadata",
          "Meta Tags"
        ]
      }
    },
    {
      "id": 14,
      "question": "What is the purpose of the <pre>name</pre> attribute in meta tags?",
      "options": {
        "A": "Names the meta tag for CSS targeting",
        "B": "Specifies the type of metadata",
        "C": "Defines the meta tag's variable name",
        "D": "Sets the meta tag's display name"
      },
      "correct": "B",
      "explanation": "The <pre>name</pre> attribute specifies the type of metadata being defined. Common values include <pre>description</pre>, <pre>keywords</pre>, <pre>author</pre>, <pre>viewport</pre>, and <pre>robots</pre>. Each name corresponds to a specific type of document metadata.",
      "topic": {
        "topics": [
          "Meta Tags",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 15,
      "question": "Which meta tag is used to refresh or redirect a page?",
      "options": {
        "A": "<pre><meta name=\"refresh\" content=\"5\"></pre>",
        "B": "<pre><meta http-equiv=\"refresh\" content=\"5\"></pre>",
        "C": "<pre><meta action=\"refresh\" content=\"5\"></pre>",
        "D": "<pre><meta property=\"refresh\" content=\"5\"></pre>"
      },
      "correct": "B",
      "explanation": "The <pre>http-equiv=\"refresh\"</pre> meta tag can refresh the page after a specified number of seconds or redirect to another URL. Example: <pre><meta http-equiv=\"refresh\" content=\"5; url=https://example.com\"></pre> refreshes after 5 seconds or redirects to the specified URL.",
      "topic": {
        "topics": [
          "Meta Tags",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 16,
      "question": "What does the Open Graph <pre>og:description</pre> tag define?",
      "options": {
        "A": "The page description for search engines",
        "B": "The description shown when shared on social media",
        "C": "The author's bio description",
        "D": "The site's mission statement"
      },
      "correct": "B",
      "explanation": "The <pre>og:description</pre> tag defines the description that appears when the page is shared on social media platforms. This can be different from the regular description meta tag. Example: <pre><meta property=\"og:description\" content=\"Check out this amazing content!\"></pre>",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 17,
      "question": "How do you specify an Apple Touch Icon for iOS devices?",
      "options": {
        "A": "<pre><meta name=\"apple-icon\" href=\"icon.png\"></pre>",
        "B": "<pre><icon rel=\"apple\" href=\"icon.png\"></pre>",
        "C": "<pre><link rel=\"apple-touch-icon\" href=\"icon.png\"></pre>",
        "D": "<pre><meta property=\"apple:icon\" href=\"icon.png\"></pre>"
      },
      "correct": "C",
      "explanation": "Apple Touch Icons are specified using <pre><link rel=\"apple-touch-icon\"></pre> and are used when users add a website to their iOS home screen. Example: <pre><link rel=\"apple-touch-icon\" href=\"touch-icon-iphone.png\"></pre>",
      "topic": {
        "topics": [
          "Favicons",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the purpose of the <pre>content</pre> attribute in meta tags?",
      "options": {
        "A": "Sets the character content limit",
        "B": "Specifies the content type of the page",
        "C": "Contains the actual metadata value",
        "D": "Defines the page's main content"
      },
      "correct": "C",
      "explanation": "The <pre>content</pre> attribute contains the actual value of the metadata. For example, in <pre><meta name=\"description\" content=\"Page description\"></pre>, the content attribute holds the description text that search engines and other systems will use.",
      "topic": {
        "topics": [
          "Meta Tags",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 19,
      "question": "Which Open Graph tag specifies the URL for social media sharing?",
      "options": {
        "A": "<pre><meta name=\"social:url\" content=\"https://example.com/page\"></pre>",
        "B": "<pre><meta name=\"og:url\" content=\"https://example.com/page\"></pre>",
        "C": "<pre><meta property=\"og:url\" content=\"https://example.com/page\"></pre>",
        "D": "<pre><meta property=\"share:url\" content=\"https://example.com/page\"></pre>"
      },
      "correct": "C",
      "explanation": "The <pre>og:url</pre> tag specifies the canonical URL of the page, which should be the permanent URL for the content. This helps social media platforms identify the correct page to associate with shared content.",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 20,
      "question": "What does the <pre>user-scalable=no</pre> value in the viewport meta tag do?",
      "options": {
        "A": "Allows unlimited zooming",
        "B": "Sets default zoom level",
        "C": "Prevents users from zooming the page",
        "D": "Enables automatic scaling"
      },
      "correct": "C",
      "explanation": "The <pre>user-scalable=no</pre> value prevents users from zooming in or out on the page. However, this is generally not recommended as it reduces accessibility for users who need to zoom for better readability.",
      "topic": {
        "topics": [
          "Viewport Configuration",
          "Accessibility"
        ]
      }
    },
    {
      "id": 21,
      "question": "Which meta tag is used to set the page's content language?",
      "options": {
        "A": "<pre><meta property=\"og:locale\" content=\"en_US\"></pre>",
        "B": "<pre><meta name=\"language\" content=\"en\"></pre>",
        "C": "The <pre>lang</pre> attribute on the <pre><html></pre> tag",
        "D": "<pre><meta http-equiv=\"content-language\" content=\"en\"></pre>"
      },
      "correct": "C",
      "explanation": "The primary way to specify the page's language is using the <pre>lang</pre> attribute on the <pre><html></pre> tag. Example: <pre><html lang=\"en\"></pre>. This is important for accessibility, search engines, and translation tools.",
      "topic": {
        "topics": [
          "Document Metadata",
          "Accessibility"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the purpose of the Open Graph <pre>og:type</pre> tag?",
      "options": {
        "A": "Sets the media type (text, video, image)",
        "B": "Defines the content category",
        "C": "Specifies the type of content (article, website, etc.)",
        "D": "Specifies the content format"
      },
      "correct": "C",
      "explanation": "The <pre>og:type</pre> tag specifies the type of content, such as <pre>website</pre>, <pre>article</pre>, <pre>video.movie</pre>, etc. This helps social media platforms display the content appropriately. Example: <pre><meta property=\"og:type\" content=\"article\"></pre>",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 23,
      "question": "How do you specify a theme color for the browser address bar?",
      "options": {
        "A": "<pre><meta property=\"theme:color\" content=\"#ffffff\"></pre>",
        "B": "<pre><meta name=\"color\" content=\"#ffffff\"></pre>",
        "C": "<pre><meta name=\"theme-color\" content=\"#ffffff\"></pre>",
        "D": "<pre><link rel=\"theme-color\" href=\"#ffffff\"></pre>"
      },
      "correct": "C",
      "explanation": "The theme-color meta tag sets the color of the browser's address bar or UI in supported browsers. Example: <pre><meta name=\"theme-color\" content=\"#ff0000\"></pre> sets the theme color to red.",
      "topic": {
        "topics": [
          "Meta Tags",
          "User Experience"
        ]
      }
    },
    {
      "id": 24,
      "question": "What does the <pre>maximum-scale=1.0</pre> value in the viewport meta tag do?",
      "options": {
        "A": "Sets the maximum page scale",
        "B": "Allows unlimited zooming",
        "C": "Enables automatic maximum scaling",
        "D": "Prevents users from zooming in beyond 100%"
      },
      "correct": "D",
      "explanation": "The <pre>maximum-scale=1.0</pre> value prevents users from zooming in beyond 100% of the original size. Like <pre>user-scalable=no</pre>, this can reduce accessibility and is generally not recommended.",
      "topic": {
        "topics": [
          "Viewport Configuration",
          "Accessibility"
        ]
      }
    },
    {
      "id": 25,
      "question": "Which meta tag is used for Twitter Card metadata?",
      "options": {
        "A": "<pre><meta property=\"twitter:card\" content=\"summary\"></pre>",
        "B": "<pre><meta property=\"twitter-card\" content=\"summary\"></pre>",
        "C": "<pre><meta name=\"twitter-card\" content=\"summary\"></pre>",
        "D": "<pre><meta name=\"twitter:card\" content=\"summary\"></pre>"
      },
      "correct": "D",
      "explanation": "Twitter Card metadata uses the <pre>name</pre> attribute with <pre>twitter:</pre> prefix. The <pre>twitter:card</pre> tag defines the card type (summary, summary_large_image, etc.). Example: <pre><meta name=\"twitter:card\" content=\"summary_large_image\"></pre>",
      "topic": {
        "topics": [
          "Social Media Sharing",
          "Meta Tags"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is the purpose of the <pre>http-equiv</pre> attribute in meta tags?",
      "options": {
        "A": "Defines HTML equivalent content",
        "B": "Sets HTTP request methods",
        "C": "Specifies HTTP error handling",
        "D": "Provides HTTP header equivalent functionality"
      },
      "correct": "D",
      "explanation": "The <pre>http-equiv</pre> attribute provides functionality equivalent to HTTP headers. Common uses include <pre>refresh</pre> for page refresh/redirect and <pre>content-type</pre> for character encoding (though <pre>charset</pre> is now preferred).",
      "topic": {
        "topics": [
          "Meta Tags",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 27,
      "question": "Which Open Graph tag specifies the site name?",
      "options": {
        "A": "<pre><meta property=\"site:name\" content=\"Site Name\"></pre>",
        "B": "<pre><meta name=\"og:site_name\" content=\"Site Name\"></pre>",
        "C": "<pre><meta name=\"site_name\" content=\"Site Name\"></pre>",
        "D": "<pre><meta property=\"og:site_name\" content=\"Site Name\"></pre>"
      },
      "correct": "D",
      "explanation": "The <pre>og:site_name</pre> tag specifies the name of the website where the content is published. This is different from the page title. Example: <pre><meta property=\"og:site_name\" content=\"My Awesome Blog\"></pre>",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 28,
      "question": "How do you specify multiple favicon sizes for different devices?",
      "options": {
        "A": "Use a single meta tag with multiple size values",
        "B": "Use JavaScript to dynamically set favicon size",
        "C": "Use CSS to resize a single favicon",
        "D": "Use multiple <pre><link rel=\"icon\"></pre> tags with different sizes"
      },
      "correct": "D",
      "explanation": "Multiple favicon sizes can be specified using separate <pre><link></pre> tags with the <pre>sizes</pre> attribute. Example: [CODE]<link rel=\"icon\" href=\"favicon-16.png\" sizes=\"16x16\">\n<link rel=\"icon\" href=\"favicon-32.png\" sizes=\"32x32\">[/CODE]",
      "topic": {
        "topics": [
          "Favicons",
          "Document Metadata"
        ]
      }
    },
    {
      "id": 29,
      "question": "What does the <pre>og:locale</pre> Open Graph tag specify?",
      "options": {
        "A": "The content distribution region",
        "B": "The server location",
        "C": "The target audience location",
        "D": "The language and region for the content"
      },
      "correct": "D",
      "explanation": "The <pre>og:locale</pre> tag specifies the language and regional variant for the content, such as <pre>en_US</pre> for American English or <pre>fr_FR</pre> for French. Example: <pre><meta property=\"og:locale\" content=\"en_US\"></pre>",
      "topic": {
        "topics": [
          "Open Graph Protocol",
          "Social Media Sharing"
        ]
      }
    },
    {
      "id": 30,
      "question": "Which meta tag is used to verify site ownership with search engines?",
      "options": {
        "A": "<pre><meta http-equiv=\"verification\" content=\"code\"></pre>",
        "B": "<pre><meta name=\"verification\" content=\"code\"></pre>",
        "C": "<pre><meta property=\"site-verification\" content=\"code\"></pre>",
        "D": "<pre><meta name=\"google-site-verification\" content=\"code\"></pre>"
      },
      "correct": "D",
      "explanation": "Search engines like Google provide site verification meta tags that contain unique codes to prove ownership of a website. Example: <pre><meta name=\"google-site-verification\" content=\"your_verification_code\"></pre>",
      "topic": {
        "topics": [
          "SEO Basics",
          "Meta Tags"
        ]
      }
    }
  ]
}
