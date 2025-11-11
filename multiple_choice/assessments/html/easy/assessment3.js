module.exports = {
  "metadata": {
    "title": "HTML Multimedia: Images, Audio, Video & Embedded Content",
    "description": "Test your understanding of HTML multimedia elements including images, audio, video, iframes, and embedded content.",
    "difficulty": "easy",
    "domain": "html",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Image elements and attributes",
      "Audio and video elements",
      "Iframe and embedded content",
      "Figure and figcaption",
      "Source and track elements",
      "Responsive images",
      "Media accessibility"
    ],
    "topicLinks": [
      {
        "topicName": "Image elements and attributes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
      },
      {
        "topicName": "Audio and video elements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"
      },
      {
        "topicName": "Iframe and embedded content",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"
      },
      {
        "topicName": "Figure and figcaption",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"
      },
      {
        "topicName": "Source and track elements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"
      },
      {
        "topicName": "Responsive images",
        "refLink": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
      },
      {
        "topicName": "Media accessibility",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video"
      }
    ],
    "assessmentId": 3,
    "assessmentUniqueId": 1762828834313,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the correct syntax for embedding an image in HTML?",
      "options": {
        "A": "<pre><image src=\"photo.jpg\"></pre>",
        "B": "<pre><img src=\"photo.jpg\" alt=\"Description\"></pre>",
        "C": "<pre><img href=\"photo.jpg\"></pre>",
        "D": "<pre><picture src=\"photo.jpg\"></pre>"
      },
      "correct": "B",
      "explanation": "The <pre><img></pre> element requires the <pre>src</pre> attribute (source file path) and should include an <pre>alt</pre> attribute (alternative text) for accessibility. The element is self-closing and doesn't use <pre>href</pre>.",
      "topic": {
        "topics": [
          "Image elements and attributes"
        ]
      }
    },
    {
      "id": 2,
      "question": "What does the <pre>controls</pre> attribute do in [CODE]<video src=\"movie.mp4\" controls></video>[/CODE]?",
      "options": {
        "A": "Enables parental controls",
        "B": "Allows controlling the video with keyboard only",
        "C": "Displays play, pause, and volume controls",
        "D": "Makes the video controllable via JavaScript"
      },
      "correct": "C",
      "explanation": "The <pre>controls</pre> boolean attribute displays the browser's default media controls (play/pause button, progress bar, volume, etc.). Without it, the video would have no visible controls and could only be controlled via JavaScript.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    },
    {
      "id": 3,
      "question": "What is the purpose of the <pre><iframe/></pre> element?",
      "options": {
        "A": "Defines a picture frame",
        "B": "Creates an internal frame border",
        "C": "Embeds another HTML page or external content",
        "D": "Creates a window popup"
      },
      "correct": "C",
      "explanation": "The <pre><iframe></pre> (inline frame) element embeds another HTML document or external content within the current page. Common uses include embedding maps, videos, or content from other websites. Use the <pre>src</pre> attribute to specify the URL.",
      "topic": {
        "topics": [
          "Iframe and embedded content"
        ]
      }
    },
    {
      "id": 4,
      "question": "What does [CODE]<audio src=\"song.mp3\" autoplay loop></audio>[/CODE] do?",
      "options": {
        "A": "Plays the audio automatically and repeats continuously",
        "B": "Creates an audio player with controls",
        "C": "Downloads the audio file",
        "D": "Plays the audio once on page load"
      },
      "correct": "A",
      "explanation": "The <pre>autoplay</pre> attribute starts playback automatically when the page loads (note: many browsers block this). The <pre>loop</pre> attribute makes the audio repeat continuously. Add <pre>controls</pre> to show playback controls.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    },
    {
      "id": 5,
      "question": "What is the semantic purpose of [CODE]<figure>\n  <img src=\"chart.png\" alt=\"Sales\">\n  <figcaption>Q4 Sales</figcaption>\n</figure>[/CODE]?",
      "options": {
        "A": "Creates a thumbnail gallery",
        "B": "Groups an image with its caption",
        "C": "Adds a border around the image",
        "D": "Makes the image responsive"
      },
      "correct": "B",
      "explanation": "The <pre><figure></pre> element groups self-contained content (like images, diagrams, or code) with an optional <pre><figcaption></pre> that provides a caption or description. This creates a semantic relationship between the content and its caption.",
      "topic": {
        "topics": [
          "Figure and figcaption"
        ]
      }
    },
    {
      "id": 6,
      "question": "What does the <pre>poster</pre> attribute specify in [CODE]<video src=\"vid.mp4\" poster=\"thumb.jpg\">[/CODE]?",
      "options": {
        "A": "An image shown before the video plays",
        "B": "The video creator's name",
        "C": "A promotional poster URL",
        "D": "The video thumbnail in galleries"
      },
      "correct": "A",
      "explanation": "The <pre>poster</pre> attribute specifies an image to display before the video plays or while it's loading. This is useful for showing a preview frame or custom thumbnail instead of the default first frame.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    },
    {
      "id": 7,
      "question": "What is the purpose of the <pre><source></pre> element inside [CODE]<video>[/CODE]?",
      "options": {
        "A": "Specifies the video source code",
        "B": "Provides multiple video formats for browser compatibility",
        "C": "Defines the video source URL only",
        "D": "Creates a video playlist"
      },
      "correct": "B",
      "explanation": "The <pre><source></pre> element allows providing multiple video/audio formats. Browsers play the first format they support. Example: [CODE]<video controls>\n  <source src=\"vid.mp4\" type=\"video/mp4\">\n  <source src=\"vid.webm\" type=\"video/webm\">\n</video>[/CODE]",
      "topic": {
        "topics": [
          "Source and track elements"
        ]
      }
    },
    {
      "id": 8,
      "question": "What does the <pre>alt</pre> attribute provide for images?",
      "options": {
        "A": "A tooltip on hover",
        "B": "An alternate image source",
        "C": "Image alignment settings",
        "D": "Alternative text for accessibility and when images fail to load"
      },
      "correct": "D",
      "explanation": "The <pre>alt</pre> attribute provides alternative text that describes the image. Screen readers announce this text to visually impaired users, and it displays when the image fails to load. Always include meaningful <pre>alt</pre> text for accessibility.",
      "topic": {
        "topics": [
          "Image elements and attributes"
        ]
      }
    },
    {
      "id": 9,
      "question": "What does [CODE]<video muted></video>[/CODE] do?",
      "options": {
        "A": "Starts the video with audio muted",
        "B": "Removes the audio track entirely",
        "C": "Prevents unmuting",
        "D": "Creates a silent video player"
      },
      "correct": "A",
      "explanation": "The <pre>muted</pre> boolean attribute starts the video with audio muted by default. Users can typically unmute it using the controls. This attribute often works with <pre>autoplay</pre>, as many browsers require videos to be muted for autoplay to work.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    },
    {
      "id": 10,
      "question": "How do you embed a YouTube video using an iframe?",
      "options": {
        "A": "<pre><iframe src=\"https://www.youtube.com/embed/VIDEO_ID\"></iframe></pre>",
        "B": "<pre><video src=\"youtube.com/VIDEO_ID\"></video></pre>",
        "C": "<pre><embed src=\"youtube.com/VIDEO_ID\"></embed></pre>",
        "D": "<pre><youtube id=\"VIDEO_ID\"></youtube></pre>"
      },
      "correct": "A",
      "explanation": "YouTube provides an embed URL format [CODE]https://www.youtube.com/embed/VIDEO_ID[/CODE] to use with <pre><iframe></pre>. Set <pre>width</pre> and <pre>height</pre> attributes for sizing. YouTube's share menu provides the complete embed code.",
      "topic": {
        "topics": [
          "Iframe and embedded content"
        ]
      }
    },
    {
      "id": 11,
      "question": "What does the <pre><track></pre> element provide in [CODE]<video>[/CODE]?",
      "options": {
        "A": "Video track selection",
        "B": "Audio tracks for the video",
        "C": "Subtitles, captions, or other timed text tracks",
        "D": "Playback tracking analytics"
      },
      "correct": "C",
      "explanation": "The <pre><track></pre> element specifies text tracks for video/audio (subtitles, captions, descriptions). Example: [CODE]<video controls>\n  <source src=\"movie.mp4\">\n  <track kind=\"subtitles\" src=\"subs.vtt\" srclang=\"en\">\n</video>[/CODE]",
      "topic": {
        "topics": [
          "Media accessibility"
        ]
      }
    },
    {
      "id": 12,
      "question": "What is the purpose of the <pre>loading=\"lazy\"</pre> attribute in [CODE]<img src=\"photo.jpg\" loading=\"lazy\">[/CODE]?",
      "options": {
        "A": "Loads the image slowly",
        "B": "Defers loading the image until it's near the viewport",
        "C": "Creates a loading animation",
        "D": "Compresses the image"
      },
      "correct": "B",
      "explanation": "The <pre>loading=\"lazy\"</pre> attribute enables native lazy loading, deferring image loading until the user scrolls near it. This improves initial page load performance by not loading offscreen images immediately. Use <pre>loading=\"eager\"</pre> for above-the-fold images.",
      "topic": {
        "topics": [
          "Image elements and attributes"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does [CODE]<audio controls>\n  <source src=\"song.mp3\" type=\"audio/mpeg\">\n  <source src=\"song.ogg\" type=\"audio/ogg\">\n</audio>[/CODE] accomplish?",
      "options": {
        "A": "Provides fallback audio formats for browser compatibility",
        "B": "Plays both audio files simultaneously",
        "C": "Creates a playlist",
        "D": "Allows users to choose which format to play"
      },
      "correct": "A",
      "explanation": "Multiple <pre><source></pre> elements provide fallback formats. The browser plays the first supported format. MP3 has broad support; OGG is an open alternative. This ensures audio works across different browsers.",
      "topic": {
        "topics": [
          "Source and track elements"
        ]
      }
    },
    {
      "id": 14,
      "question": "What does the <pre>width</pre> and <pre>height</pre> attributes prevent in [CODE]<img src=\"photo.jpg\" width=\"400\" height=\"300\">[/CODE]?",
      "options": {
        "A": "Layout shift when the page loads",
        "B": "Image distortion",
        "C": "Browser scaling",
        "D": "Image downloading"
      },
      "correct": "A",
      "explanation": "Setting <pre>width</pre> and <pre>height</pre> reserves space for the image before it loads, preventing layout shift (content jumping). The browser knows the image dimensions and allocates space immediately. This improves user experience and Core Web Vitals scores.",
      "topic": {
        "topics": [
          "Image elements and attributes"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is the purpose of the <pre><embed></pre> element?",
      "options": {
        "A": "Embeds CSS styles",
        "B": "Embeds videos only",
        "C": "Embeds JavaScript code",
        "D": "Embeds external content like PDFs or Flash (deprecated)"
      },
      "correct": "D",
      "explanation": "The <pre><embed></pre> element embeds external content or plugins. It was commonly used for Flash but is now rarely needed. For most cases, use <pre><iframe></pre>, <pre><video></pre>, or <pre><audio></pre> instead. Example: [CODE]<embed src=\"document.pdf\" type=\"application/pdf\">[/CODE]",
      "topic": {
        "topics": [
          "Iframe and embedded content"
        ]
      }
    },
    {
      "id": 16,
      "question": "What does the <pre>preload</pre> attribute control in [CODE]<video preload=\"metadata\">[/CODE]?",
      "options": {
        "A": "Whether to show a preloader animation",
        "B": "How much video data to load before playback",
        "C": "The video preview image",
        "D": "Preloading related videos"
      },
      "correct": "B",
      "explanation": "The <pre>preload</pre> attribute hints how much video to load initially. Values: <pre>\"none\"</pre> (load nothing), <pre>\"metadata\"</pre> (load duration/dimensions only), <pre>\"auto\"</pre> (load as much as possible). This helps optimize page load performance.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    },
    {
      "id": 17,
      "question": "What does [CODE]<picture>\n  <source srcset=\"large.jpg\" media=\"(min-width: 800px)\">\n  <img src=\"small.jpg\" alt=\"Photo\">\n</picture>[/CODE] accomplish?",
      "options": {
        "A": "Adds a picture frame",
        "B": "Creates an image gallery",
        "C": "Serves different images based on screen size",
        "D": "Creates a slideshow"
      },
      "correct": "C",
      "explanation": "The <pre><picture></pre> element enables responsive images by serving different images based on conditions like screen size or resolution. The browser picks the first matching <pre><source></pre>, falling back to <pre><img></pre>. This optimizes images for different devices.",
      "topic": {
        "topics": [
          "Responsive images"
        ]
      }
    },
    {
      "id": 18,
      "question": "What is the purpose of <pre>srcset</pre> in [CODE]<img srcset=\"small.jpg 500w, large.jpg 1000w\" src=\"small.jpg\">[/CODE]?",
      "options": {
        "A": "Defines image source code",
        "B": "Sets multiple image sources to choose from",
        "C": "Creates an image set for galleries",
        "D": "Provides multiple image resolutions for responsive loading"
      },
      "correct": "D",
      "explanation": "The <pre>srcset</pre> attribute lists multiple image files with their widths (500w = 500px wide). The browser selects the most appropriate image based on screen size and resolution. The <pre>src</pre> attribute provides a fallback for unsupported browsers.",
      "topic": {
        "topics": [
          "Responsive images"
        ]
      }
    },
    {
      "id": 19,
      "question": "What does [CODE]<audio loop></audio>[/CODE] do?",
      "options": {
        "A": "Creates an audio loop effect",
        "B": "Repeats the audio continuously when it ends",
        "C": "Plays the audio twice",
        "D": "Enables loop controls"
      },
      "correct": "B",
      "explanation": "The <pre>loop</pre> boolean attribute makes the audio restart automatically when it reaches the end, playing continuously in a loop. This is useful for background music or ambient sounds.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    },
    {
      "id": 20,
      "question": "What does the <pre><figcaption></pre> element do?",
      "options": {
        "A": "Styles captions with special formatting",
        "B": "Creates figure captions for any element",
        "C": "Adds figure numbers automatically",
        "D": "Provides a caption for content inside <pre><figure></figure></pre>"
      },
      "correct": "D",
      "explanation": "The <pre><figcaption></pre> element defines a caption or legend for a <pre><figure></pre>. It must be the first or last child of <pre><figure></pre>. This creates an accessible association between content and its description.",
      "topic": {
        "topics": [
          "Figure and figcaption"
        ]
      }
    },
    {
      "id": 21,
      "question": "What does the <pre>sandbox</pre> attribute do in [CODE]<iframe sandbox></iframe>[/CODE]?",
      "options": {
        "A": "Adds a sandbox border",
        "B": "Creates a sandbox environment theme",
        "C": "Enables testing mode",
        "D": "Restricts iframe capabilities for security"
      },
      "correct": "D",
      "explanation": "The <pre>sandbox</pre> attribute applies security restrictions to the iframe, blocking scripts, forms, popups, etc. by default. You can selectively enable features: <pre>sandbox=\"allow-scripts allow-forms\"</pre>. This protects against malicious embedded content.",
      "topic": {
        "topics": [
          "Iframe and embedded content"
        ]
      }
    },
    {
      "id": 22,
      "question": "What is the difference between <pre><video></pre> and <pre><iframe></pre> for videos?",
      "options": {
        "A": "They work identically",
        "B": "<pre><video></pre> plays local files; <pre><iframe></pre> embeds external players",
        "C": "<pre><iframe></pre> has better quality",
        "D": "<pre><video></pre> only works on mobile"
      },
      "correct": "B",
      "explanation": "Use <pre><video></pre> for self-hosted video files with full control over playback and styling. Use <pre><iframe></pre> to embed videos from platforms like YouTube or Vimeo, which handle hosting and provide their own player interface.",
      "topic": {
        "topics": [
          "Audio and video elements",
          "Iframe and embedded content"
        ]
      }
    },
    {
      "id": 23,
      "question": "What does [CODE]<img decoding=\"async\" src=\"photo.jpg\">[/CODE] do?",
      "options": {
        "A": "Allows asynchronous image decoding for better performance",
        "B": "Decodes the image format",
        "C": "Encrypts the image asynchronously",
        "D": "Loads the image asynchronously"
      },
      "correct": "A",
      "explanation": "The <pre>decoding=\"async\"</pre> attribute hints that the browser can decode the image asynchronously, preventing blocking of other content rendering. Use <pre>\"sync\"</pre> for critical images that must display before other content, or <pre>\"auto\"</pre> (default) to let the browser decide.",
      "topic": {
        "topics": [
          "Image elements and attributes"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is the purpose of the <pre>kind</pre> attribute in [CODE]<track kind=\"subtitles\">[/CODE]?",
      "options": {
        "A": "Specifies track kindness level",
        "B": "Defines the track quality",
        "C": "Sets the track format",
        "D": "Specifies the type of text track (subtitles, captions, etc.)"
      },
      "correct": "D",
      "explanation": "The <pre>kind</pre> attribute specifies the text track type: <pre>\"subtitles\"</pre> (translations), <pre>\"captions\"</pre> (transcriptions + sounds), <pre>\"descriptions\"</pre> (for blind users), <pre>\"chapters\"</pre> (navigation), or <pre>\"metadata\"</pre>. This helps browsers and assistive technologies use tracks appropriately.",
      "topic": {
        "topics": [
          "Media accessibility"
        ]
      }
    },
    {
      "id": 25,
      "question": "What does [CODE]<video playsinline></video>[/CODE] do on mobile devices?",
      "options": {
        "A": "Plays the video in a straight line",
        "B": "Aligns the video inline with text",
        "C": "Allows video to play inline instead of fullscreen",
        "D": "Enables inline editing"
      },
      "correct": "C",
      "explanation": "The <pre>playsinline</pre> attribute allows videos to play inline on mobile devices (especially iOS) instead of forcing fullscreen mode. This is important for videos that are part of the page layout rather than standalone content.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    },
    {
      "id": 26,
      "question": "What does the <pre>sizes</pre> attribute specify in responsive images?",
      "options": {
        "A": "Multiple size options for users",
        "B": "The actual image file sizes",
        "C": "How much screen space the image will occupy at different breakpoints",
        "D": "The image dimensions in the HTML"
      },
      "correct": "C",
      "explanation": "The <pre>sizes</pre> attribute tells the browser how much space the image occupies at different viewport widths, helping it choose the right image from <pre>srcset</pre>. Example: [CODE]sizes=\"(max-width: 600px) 100vw, 50vw\"[/CODE] means full width on small screens, half width otherwise.",
      "topic": {
        "topics": [
          "Responsive images"
        ]
      }
    },
    {
      "id": 27,
      "question": "What does [CODE]<iframe allow=\"camera; microphone\"></iframe>[/CODE] do?",
      "options": {
        "A": "Grants the iframe permission to access camera and microphone",
        "B": "Displays camera and microphone icons",
        "C": "Allows audio and video playback",
        "D": "Creates camera and microphone controls"
      },
      "correct": "A",
      "explanation": "The <pre>allow</pre> attribute (Permissions Policy) specifies which browser features the iframe can access. This example permits camera and microphone access. Other permissions include <pre>geolocation</pre>, <pre>payment</pre>, <pre>fullscreen</pre>, etc.",
      "topic": {
        "topics": [
          "Iframe and embedded content"
        ]
      }
    },
    {
      "id": 28,
      "question": "What is the correct way to specify an image map area?",
      "options": {
        "A": "Use <pre><imagemap></pre> element",
        "B": "Use CSS to define clickable regions",
        "C": "Use <pre><map></pre> with <pre><area></pre> elements",
        "D": "Use JavaScript only"
      },
      "correct": "C",
      "explanation": "Image maps use the <pre><map></pre> element containing <pre><area></pre> elements that define clickable regions. Link the map to an image using [CODE]<img src=\"map.jpg\" usemap=\"#mapname\">\n<map name=\"mapname\">\n  <area shape=\"rect\" coords=\"0,0,100,100\" href=\"link.html\">\n</map>[/CODE]",
      "topic": {
        "topics": [
          "Image elements and attributes"
        ]
      }
    },
    {
      "id": 29,
      "question": "What does the <pre>crossorigin</pre> attribute do in [CODE]<img crossorigin=\"anonymous\">[/CODE]?",
      "options": {
        "A": "Creates crosshair cursors",
        "B": "Allows crossing image boundaries",
        "C": "Enables cross-browser compatibility",
        "D": "Controls CORS requests for cross-origin images"
      },
      "correct": "D",
      "explanation": "The <pre>crossorigin</pre> attribute configures Cross-Origin Resource Sharing (CORS) for the image. <pre>\"anonymous\"</pre> sends no credentials, <pre>\"use-credentials\"</pre> sends cookies/auth. This is needed when manipulating cross-origin images with canvas or when using certain CDN features.",
      "topic": {
        "topics": [
          "Image elements and attributes"
        ]
      }
    },
    {
      "id": 30,
      "question": "What does [CODE]<video controls disablepictureinpicture></video>[/CODE] prevent?",
      "options": {
        "A": "Displaying the video poster",
        "B": "Users from enabling picture-in-picture mode",
        "C": "Playing the video in fullscreen",
        "D": "Showing video controls"
      },
      "correct": "B",
      "explanation": "The <pre>disablepictureinpicture</pre> attribute prevents users from activating picture-in-picture mode, where the video floats in a small window while they browse other tabs or apps. Use this when PiP would create a poor user experience.",
      "topic": {
        "topics": [
          "Audio and video elements"
        ]
      }
    }
  ]
}
