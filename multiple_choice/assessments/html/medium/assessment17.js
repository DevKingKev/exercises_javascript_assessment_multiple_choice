module.exports = {
  "metadata": {
    "title": "Advanced HTML Multimedia and Media APIs",
    "description": "Advanced coverage of HTML multimedia including media fragments, multi-language tracks, poster optimization, Media Source Extensions, Picture-in-Picture API, and autoplay policies across browsers.",
    "difficulty": "medium",
    "domain": "html",
    "timeLimit": 45,
    "questionCount": 25,
    "topics": [
      "Media Fragments",
      "Multiple Track Elements",
      "Poster Image Optimization",
      "Media Source Extensions (MSE)",
      "Picture-in-Picture API",
      "Autoplay Policies",
      "Advanced Video Attributes",
      "Cross-Origin Media",
      "Media Performance Optimization",
      "Adaptive Streaming Hints"
    ],
    "topicLinks": [
      {
        "topicName": "Media Fragments",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_concepts#media_fragments"
      },
      {
        "topicName": "Multiple Track Elements",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"
      },
      {
        "topicName": "Poster Image Optimization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#poster"
      },
      {
        "topicName": "Media Source Extensions (MSE)",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"
      },
      {
        "topicName": "Picture-in-Picture API",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API"
      },
      {
        "topicName": "Autoplay Policies",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide"
      },
      {
        "topicName": "Advanced Video Attributes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes"
      },
      {
        "topicName": "Cross-Origin Media",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image"
      },
      {
        "topicName": "Media Performance Optimization",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/Performance/Multimedia"
      },
      {
        "topicName": "Adaptive Streaming Hints",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#type"
      }
    ],
    "assessmentId": 17,
    "assessmentUniqueId": 1763034701925,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What does the media fragment <pre>#t=10,20</pre> do in a video URL?",
      "options": {
        "A": "Specifies that the video should play from 10 seconds to 20 seconds",
        "B": "Loads 10-20 seconds of video data",
        "C": "Sets the video quality to track 10-20",
        "D": "Creates a 10-20 second loop"
      },
      "correct": "A",
      "explanation": "Media fragments using the temporal dimension (<pre>#t=start,end</pre>) specify a time range for playback. The fragment <pre>#t=10,20</pre> tells the video to start at 10 seconds and play until 20 seconds, then stop. You can also use <pre>#t=10</pre> to start at 10 seconds and play to the end, or <pre>#t=,20</pre> to play from the beginning to 20 seconds. This is useful for linking to specific portions of a video without editing the file. For example: <pre><video src=\"tutorial.mp4#t=120,180\"></video></pre> plays only the 2-3 minute section. Browsers that support media fragments will seek to the start time automatically. This doesn't create loops or affect what data is downloaded—it only controls playback range. Media fragments are part of the W3C Media Fragments URI specification.",
      "topics": [
        "Media Fragments",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 2,
      "question": "How do you provide subtitles in multiple languages using the <pre><track></pre> element?",
      "options": {
        "A": "Use one track with comma-separated languages",
        "B": "Combine all languages in one VTT file",
        "C": "Use the <pre>multilang</pre> attribute",
        "D": "Include multiple <pre><track></pre> elements, each with different <pre>srclang</pre> and <pre>src</pre> attributes"
      },
      "correct": "D",
      "explanation": "To provide multi-language subtitles, include multiple <pre><track></pre> elements, each specifying a different language with the <pre>srclang</pre> attribute and pointing to language-specific WebVTT files: <pre><video controls><source src=\"video.mp4\"><track kind=\"subtitles\" src=\"en.vtt\" srclang=\"en\" label=\"English\"><track kind=\"subtitles\" src=\"es.vtt\" srclang=\"es\" label=\"Español\"><track kind=\"subtitles\" src=\"fr.vtt\" srclang=\"fr\" label=\"Français\" default></video></pre>. The browser displays a menu allowing users to select their preferred language. Use the <pre>label</pre> attribute to provide user-friendly names for each track. Mark one track as <pre>default</pre> to specify which should be active initially. The <pre>kind</pre> attribute distinguishes between <pre>subtitles</pre> (translations), <pre>captions</pre> (transcriptions including sound effects), and <pre>descriptions</pre> (audio descriptions). There's no <pre>multilang</pre> attribute, and combining languages in one file would be impractical for users.",
      "topics": [
        "Multiple Track Elements",
        "Media Performance Optimization"
      ]
    },
    {
      "id": 3,
      "question": "What is the recommended format and optimization for poster images?",
      "options": {
        "A": "Any image format works equally well",
        "B": "Use WebP or optimized JPEG at the exact video dimensions, compressed to balance quality and file size, ideally under 100KB",
        "C": "Always use PNG for highest quality",
        "D": "Use GIF for animated posters"
      },
      "correct": "B",
      "explanation": "Poster images should be optimized carefully since they're often the first visual users see. Best practices include: use modern formats like WebP (with JPEG fallback) for better compression; match the exact dimensions of the video player to avoid scaling; compress to balance quality and size, typically targeting under 100KB; choose a representative frame from the video, usually an action frame rather than a fade or transition; ensure the image is visually clear even at smaller sizes. For example: <pre><video poster=\"poster.webp\" width=\"1280\" height=\"720\"></video></pre>. Avoid PNG unless you need transparency (rare for video posters) as it's typically larger. Never use GIF—it's limited to 256 colors and creates large files. The poster loads immediately when the page loads, so size matters for performance. Consider using responsive images if the video player size varies: <pre><video><source src=\"video.mp4\" type=\"video/mp4\"></video></pre> with CSS background-image for the poster, or serve different poster sizes based on viewport.",
      "topics": [
        "Poster Image Optimization",
        "Media Performance Optimization"
      ]
    },
    {
      "id": 4,
      "question": "What are Media Source Extensions (MSE) used for?",
      "options": {
        "A": "Adding more video sources to the <pre><source></pre> element",
        "B": "Creating media source code",
        "C": "Extending media file formats",
        "D": "Enabling JavaScript to generate and feed media streams to video elements, supporting adaptive streaming and live content"
      },
      "correct": "D",
      "explanation": "Media Source Extensions (MSE) is a JavaScript API that allows scripts to construct media streams for playback in <pre><video></pre> or <pre><audio></pre> elements. Instead of loading a single file via <pre>src</pre>, MSE lets you dynamically feed chunks of media data from JavaScript. This enables advanced features like: adaptive bitrate streaming (switching quality based on bandwidth), seamless quality switching without interruption, live streaming with low latency, inserting ads or content dynamically, and client-side concatenation of media segments. MSE is the foundation for DASH (Dynamic Adaptive Streaming over HTTP) and HLS (HTTP Live Streaming) players in browsers. Example usage: <pre>const video = document.querySelector('video'); const mediaSource = new MediaSource(); video.src = URL.createObjectURL(mediaSource);</pre> then append buffers as data arrives. MSE doesn't extend file formats or add more <pre><source></pre> elements—it's about programmatic control of media playback.",
      "topics": [
        "Media Source Extensions (MSE)",
        "Adaptive Streaming Hints"
      ]
    },
    {
      "id": 5,
      "question": "How do you enable Picture-in-Picture mode for a video?",
      "options": {
        "A": "Use JavaScript: <pre>video.requestPictureInPicture()</pre> (HTML allows it by default unless disabled)",
        "B": "Add the <pre>pictureinpicture</pre> attribute to the video element",
        "C": "Use CSS: <pre>position: picture-in-picture</pre>",
        "D": "Include <pre>pip=\"true\"</pre> on the video element"
      },
      "correct": "A",
      "explanation": "Picture-in-Picture (PiP) is enabled by default for video elements, but activation requires JavaScript using the Picture-in-Picture API: <pre>const video = document.querySelector('video'); video.requestPictureInPicture().then(pipWindow => { console.log('PiP active'); });</pre>. Users can also activate it via browser controls. To disable PiP, use the <pre>disablepictureinpicture</pre> attribute: <pre><video disablepictureinpicture></video></pre>. The API provides events like <pre>enterpictureinpicture</pre> and <pre>leavepictureinpicture</pre> for tracking state: <pre>video.addEventListener('enterpictureinpicture', () => { console.log('Entered PiP'); });</pre>. You can also check if a video is in PiP mode: <pre>document.pictureInPictureElement</pre>. There's no HTML attribute to enable it (it's enabled by default), no CSS property, and no <pre>pip</pre> attribute. PiP allows users to watch video in a floating window while browsing other content.",
      "topics": [
        "Picture-in-Picture API",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 6,
      "question": "What are the current browser autoplay policies and how can you work with them?",
      "options": {
        "A": "Most browsers allow autoplay for muted videos or when the user has interacted with the site; use <pre>muted</pre> and handle autoplay promises to detect failures",
        "B": "All browsers allow unrestricted autoplay",
        "C": "Autoplay is completely blocked in all browsers",
        "D": "Autoplay only works on mobile devices"
      },
      "correct": "A",
      "explanation": "Modern browsers restrict autoplay to prevent intrusive experiences. Common policies: muted videos can usually autoplay (<pre><video autoplay muted></video></pre>); videos on sites the user has previously interacted with may autoplay; unmuted autoplay is generally blocked. Chrome, Firefox, and Safari have similar but not identical policies. Best practices: always include <pre>muted</pre> with <pre>autoplay</pre>; handle autoplay as a promise to detect failures: <pre>const video = document.querySelector('video'); video.play().catch(error => { console.log('Autoplay prevented:', error); // Show play button as fallback });</pre>. Use <pre>muted</pre> and allow users to unmute: <pre><video autoplay muted><source src=\"video.mp4\"></video><button onclick=\"video.muted = false\">Unmute</button></pre>. Autoplay policies can change based on user engagement scores maintained by browsers. Mobile Safari requires <pre>playsinline</pre> in addition to <pre>muted</pre> for autoplay. Never assume autoplay will work—always provide fallback UI.",
      "topics": [
        "Autoplay Policies",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 7,
      "question": "What is the purpose of spatial media fragments like <pre>#xywh=160,120,320,240</pre>?",
      "options": {
        "A": "To specify the video resolution",
        "B": "To define video margins",
        "C": "To set the video player dimensions",
        "D": "To define a rectangular region of the video to display, cropping the frame"
      },
      "correct": "D",
      "explanation": "Spatial media fragments define a rectangular region of interest using <pre>#xywh=x,y,width,height</pre> coordinates. For example, <pre>video.mp4#xywh=160,120,320,240</pre> specifies a region starting at pixel (160,120) with dimensions 320x240. In theory, browsers supporting spatial fragments would display only this cropped portion. However, spatial fragments have limited browser support compared to temporal fragments. They're more commonly used in image manipulation and annotation systems. For video, you might use this to focus on a specific area of a larger video without editing the source file. The fragment doesn't change player dimensions or resolution—it specifies which portion of the source media to display. Percentages can also be used: <pre>#xywh=percent:25,25,50,50</pre> crops to the center quarter. Most practical video cropping is still done during encoding or with CSS/canvas manipulation rather than media fragments.",
      "topics": [
        "Media Fragments",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 8,
      "question": "How do you specify captions versus subtitles using the <pre><track></pre> element?",
      "options": {
        "A": "They're identical; the terms are interchangeable",
        "B": "Subtitles are for movies; captions are for TV shows",
        "C": "Use <pre>kind=\"subtitles\"</pre> for translations, <pre>kind=\"captions\"</pre> for transcriptions that include sound effects and speaker identification",
        "D": "Use the <pre>type</pre> attribute to distinguish them"
      },
      "correct": "C",
      "explanation": "The <pre>kind</pre> attribute distinguishes between different track types with specific purposes. <pre>kind=\"subtitles\"</pre> provides translations of dialogue for viewers who understand the audio but not the language: <pre><track kind=\"subtitles\" src=\"es.vtt\" srclang=\"es\" label=\"Español\"></pre>. <pre>kind=\"captions\"</pre> provides transcriptions including dialogue and sound descriptions for deaf/hard-of-hearing viewers: <pre><track kind=\"captions\" src=\"en-captions.vtt\" srclang=\"en\" label=\"English Captions\"></pre>. Captions typically include speaker identification (\"[John]: Hello\") and non-speech information (\"[door slams]\", \"[music playing]\"). Other <pre>kind</pre> values: <pre>\"descriptions\"</pre> for audio descriptions of visual content, <pre>\"chapters\"</pre> for navigation, <pre>\"metadata\"</pre> for data not displayed to users. The distinction isn't about content type (movie vs TV)—it's about purpose and audience needs. Proper use ensures accessibility features work correctly across devices and assistive technologies.",
      "topics": [
        "Multiple Track Elements",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 9,
      "question": "What does the <pre>crossorigin</pre> attribute do for video elements?",
      "options": {
        "A": "Allows videos to play across different browsers",
        "B": "Configures CORS requests for cross-origin video resources, required for canvas manipulation or accessing video data",
        "C": "Creates video transitions",
        "D": "Enables cross-platform playback"
      },
      "correct": "B",
      "explanation": "The <pre>crossorigin</pre> attribute controls Cross-Origin Resource Sharing (CORS) for video resources. It's required when you need to access video data programmatically, such as drawing video frames to a canvas or analyzing video with Web APIs: <pre><video src=\"https://cdn.example.com/video.mp4\" crossorigin=\"anonymous\"></video></pre>. Values: <pre>\"anonymous\"</pre> sends no credentials (cookies/auth); <pre>\"use-credentials\"</pre> includes credentials. Without <pre>crossorigin</pre>, attempting to manipulate cross-origin video data results in a tainted canvas error for security reasons. The server must respond with appropriate CORS headers (<pre>Access-Control-Allow-Origin</pre>) for this to work. This is crucial for video editing tools, thumbnail generation, visual effects, or analytics that process video frames. The attribute doesn't affect basic playback—it's only needed when JavaScript accesses the video's pixel data. Self-hosted (same-origin) videos don't require this attribute unless you want explicit CORS behavior.",
      "topics": [
        "Cross-Origin Media",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 10,
      "question": "What is the purpose of named media fragments like <pre>#track=video&track=audio1</pre>?",
      "options": {
        "A": "To name video tracks for analytics",
        "B": "To select specific tracks from a multi-track video file",
        "C": "To create a video playlist",
        "D": "To enable track switching"
      },
      "correct": "B",
      "explanation": "Named media fragments allow selecting specific tracks from container formats that support multiple audio, video, or subtitle tracks (like MP4 or WebM). The syntax <pre>#track=trackID</pre> or <pre>#track=video&track=audio1</pre> specifies which tracks to play. For example, a video file might contain multiple audio tracks (different languages or commentary) and multiple subtitle tracks—media fragments can select specific combinations: <pre>video.mp4#track=video&track=japanese-audio&track=english-subs</pre>. This is particularly useful for: multilingual content with multiple audio tracks, videos with alternate angles, content with optional audio descriptions, and specialized viewing modes. However, browser support for named media fragments is limited, and most implementations prefer using multiple <pre><source></pre> elements for alternate audio or the <pre><track></pre> element for subtitles. The media fragment specification defines this functionality, but practical implementation often uses JavaScript media APIs for track selection instead.",
      "topics": [
        "Media Fragments",
        "Multiple Track Elements"
      ]
    },
    {
      "id": 11,
      "question": "How should you handle poster images for videos with varying aspect ratios?",
      "options": {
        "A": "Use one poster for all sizes",
        "B": "Use CSS <pre>object-fit</pre> on the video element and ensure the poster matches the video's aspect ratio, or use multiple posters via CSS media queries",
        "C": "Stretch the poster to fit",
        "D": "Don't use posters for videos with varying ratios"
      },
      "correct": "B",
      "explanation": "Handling poster images for responsive videos requires careful consideration of aspect ratios. Best approaches: ensure the poster image matches the video's native aspect ratio to prevent distortion; use CSS <pre>object-fit</pre> to control how both poster and video fit their container: <pre>video { width: 100%; height: auto; object-fit: cover; }</pre>. For videos that appear at different sizes, you can use CSS to serve different posters: <pre>video { background-image: url('poster-small.jpg'); } @media (min-width: 768px) { video { background-image: url('poster-large.jpg'); } }</pre>. Note that this uses background-image instead of the <pre>poster</pre> attribute. The <pre>poster</pre> attribute only accepts one image, so for art direction (different crops for different sizes), CSS backgrounds provide more flexibility. Alternatively, show the poster via a wrapper element that you hide when video plays. Stretching creates poor UX. Always maintain aspect ratio consistency between poster and video.",
      "topics": [
        "Poster Image Optimization",
        "Media Performance Optimization"
      ]
    },
    {
      "id": 12,
      "question": "What is the difference between <pre>preload=\"none\"</pre>, <pre>preload=\"metadata\"</pre>, and <pre>preload=\"auto\"</pre>?",
      "options": {
        "A": "They all do the same thing",
        "B": "<pre>metadata</pre> only loads thumbnail images",
        "C": "<pre>none</pre> loads nothing until play; <pre>metadata</pre> loads duration/dimensions/tracks; <pre>auto</pre> loads as much as the browser decides, potentially the entire video",
        "D": "<pre>auto</pre> automatically plays the video"
      },
      "correct": "C",
      "explanation": "The <pre>preload</pre> attribute provides performance hints for initial loading behavior. <pre>preload=\"none\"</pre> tells the browser to load nothing until the user initiates playback—minimal bandwidth usage but slow start: <pre><video preload=\"none\" src=\"large.mp4\"></video></pre>. <pre>preload=\"metadata\"</pre> loads only metadata (duration, dimensions, track list, first frame for poster if no poster specified)—good balance for pages with multiple videos: <pre><video preload=\"metadata\"></video></pre>. <pre>preload=\"auto\"</pre> suggests the browser load enough data for smooth playback, potentially buffering the entire video—best for videos likely to be played: <pre><video preload=\"auto\"></video></pre>. Note that <pre>preload</pre> is a hint, not a command—browsers may ignore it based on user preferences (data saver mode), connection type (cellular), or other factors. The <pre>autoplay</pre> attribute usually overrides <pre>preload</pre>. Choose based on likelihood of playback: use <pre>none</pre> for many videos where most won't be played, <pre>metadata</pre> for better UX without heavy bandwidth, <pre>auto</pre> for videos prominently featured.",
      "topics": [
        "Media Performance Optimization",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 13,
      "question": "How do Media Source Extensions (MSE) enable adaptive bitrate streaming?",
      "options": {
        "A": "By automatically detecting connection speed",
        "B": "By compressing video on the fly",
        "C": "By allowing JavaScript to monitor bandwidth and switch between different quality segments dynamically during playback",
        "D": "By using multiple <pre><source></pre> elements"
      },
      "correct": "C",
      "explanation": "MSE enables adaptive bitrate streaming by giving JavaScript control over which media segments are fed to the video element. The typical workflow: the video is encoded at multiple quality levels (bitrates); segments of each quality level are stored separately; JavaScript monitors available bandwidth and buffer status; based on conditions, JavaScript fetches and appends appropriate quality segments to the MediaSource buffer. For example, if bandwidth is high, fetch 1080p segments; if it drops, switch to 720p segments. This happens seamlessly during playback: <pre>sourceBuffer.appendBuffer(newSegmentData);</pre>. Libraries like hls.js and dash.js implement this logic. The key advantage is smooth adaptation to changing network conditions without interrupting playback. MSE doesn't automatically detect speed or compress video—it provides the API for JavaScript to make intelligent decisions. Multiple <pre><source></pre> elements don't enable dynamic switching during playback. MSE is the foundation for modern streaming services (Netflix, YouTube) providing optimal quality for each user's conditions.",
      "topics": [
        "Media Source Extensions (MSE)",
        "Adaptive Streaming Hints"
      ]
    },
    {
      "id": 14,
      "question": "What events should you handle when implementing Picture-in-Picture functionality?",
      "options": {
        "A": "No events are needed",
        "B": "Only the <pre>pip</pre> event",
        "C": "Only the <pre>click</pre> event",
        "D": "Handle <pre>enterpictureinpicture</pre>, <pre>leavepictureinpicture</pre>, and <pre>resize</pre> events to track state and adapt UI"
      },
      "correct": "D",
      "explanation": "Implementing robust Picture-in-Picture requires handling multiple events. The <pre>enterpictureinpicture</pre> event fires when PiP activates: <pre>video.addEventListener('enterpictureinpicture', (event) => { console.log('PiP window:', event.pictureInPictureWindow); updatePiPButton('Exit PiP'); });</pre>. The <pre>leavepictureinpicture</pre> event fires when exiting PiP: <pre>video.addEventListener('leavepictureinpicture', () => { updatePiPButton('Enter PiP'); });</pre>. The PiP window itself fires <pre>resize</pre> events when its dimensions change: <pre>pipWindow.addEventListener('resize', () => { console.log('New size:', pipWindow.width, pipWindow.height); });</pre>. You might also handle errors when requesting PiP: <pre>video.requestPictureInPicture().catch(error => { console.error('PiP failed:', error); });</pre>. Common reasons for failure: another video is already in PiP, the video isn't visible, or PiP is disabled. Track state to update UI appropriately (toggle button text/icons). There's no generic <pre>pip</pre> event—specific events indicate entry and exit.",
      "topics": [
        "Picture-in-Picture API",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 15,
      "question": "What is the purpose of the <pre>type</pre> attribute with codecs in <pre><source></pre> elements?",
      "options": {
        "A": "To provide detailed MIME type and codec information, helping browsers skip unsupported formats without downloading: <pre>type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'</pre>",
        "B": "To specify the file type only",
        "C": "To set the video quality type",
        "D": "To categorize video content"
      },
      "correct": "A",
      "explanation": "The <pre>type</pre> attribute specifies the MIME type and optionally detailed codec information, allowing browsers to determine support without downloading the file. Basic usage: <pre><source src=\"video.mp4\" type=\"video/mp4\"></pre>. Advanced usage includes codec parameters: <pre><source src=\"video.mp4\" type='video/mp4; codecs=\"avc1.64001F, mp4a.40.2\"'></pre> where <pre>avc1.64001F</pre> specifies H.264 High Profile Level 3.1 and <pre>mp4a.40.2</pre> specifies AAC-LC audio. This precision helps browsers make informed decisions without downloading: <pre><video><source src=\"av1.mp4\" type='video/mp4; codecs=\"av01.0.05M.08\"'><source src=\"h264.mp4\" type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'></video></pre>. If the browser doesn't support AV1, it skips directly to H.264 without wasting bandwidth. For WebM: <pre>type='video/webm; codecs=\"vp9, opus\"'</pre>. Codec strings can be complex—consult specifications or tools like MP4Box for correct values. This optimization is particularly important for progressive enhancement with modern codecs.",
      "topics": [
        "Adaptive Streaming Hints",
        "Media Performance Optimization"
      ]
    },
    {
      "id": 16,
      "question": "How can you programmatically check if a video is currently in Picture-in-Picture mode?",
      "options": {
        "A": "Check <pre>video.pictureInPicture</pre>",
        "B": "Check <pre>video.mode === 'pip'</pre>",
        "C": "Use <pre>video.isPiP()</pre>",
        "D": "Check if <pre>document.pictureInPictureElement === video</pre>"
      },
      "correct": "D",
      "explanation": "The <pre>document.pictureInPictureElement</pre> property returns the element currently in Picture-in-Picture mode, or <pre>null</pre> if nothing is in PiP. To check if a specific video is in PiP: <pre>if (document.pictureInPictureElement === video) { console.log('This video is in PiP'); }</pre>. You can also check if PiP is available before requesting it: <pre>if (document.pictureInPictureEnabled && !video.disablePictureInPicture) { video.requestPictureInPicture(); }</pre>. To exit PiP programmatically: <pre>document.exitPictureInPicture();</pre>. Note that only one element can be in PiP at a time—requesting PiP for a new video exits PiP for the current one. There's no <pre>video.pictureInPicture</pre> boolean property, no <pre>isPiP()</pre> method, and no <pre>mode</pre> property. The centralized <pre>document.pictureInPictureElement</pre> makes sense since PiP is a document-level state. Always feature-detect before using the API for browser compatibility.",
      "topics": [
        "Picture-in-Picture API",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 17,
      "question": "What are the benefits of using media fragments for video sharing and linking?",
      "options": {
        "A": "Direct linking to specific time ranges without requiring server-side support or video editing, enabling precise sharing and citations",
        "B": "Smaller file sizes",
        "C": "Better video quality",
        "D": "Faster downloads"
      },
      "correct": "A",
      "explanation": "Media fragments enable precise video sharing and referencing without modifying the source file or requiring special server configuration. Benefits include: deep linking to specific moments (<pre>https://example.com/video.mp4#t=125</pre> links to 2:05); sharing specific segments for discussion or citation (<pre>#t=10,30</pre> shares a 20-second clip); educational content can reference exact timestamps; creating virtual clips without duplicating or editing video files; reducing bandwidth by playing only relevant portions. This works client-side—the browser handles the fragment. For example, sharing <pre>tutorial.mp4#t=240,360</pre> lets someone jump directly to the 2-minute section you're discussing. This is more efficient than saying \"skip to 4 minutes in\" and hoping they find it. The fragment doesn't affect file size, quality, or download speed of the original file (though browsers may optimize range requests). Media fragments enable granular video navigation and sharing comparable to quoting specific paragraphs from text documents.",
      "topics": [
        "Media Fragments",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 18,
      "question": "What is the <pre>default</pre> attribute used for in <pre><track></pre> elements?",
      "options": {
        "A": "Sets the default video quality",
        "B": "Provides default captions when others fail",
        "C": "Marks which text track should be enabled by default when the page loads",
        "D": "Sets the track as required"
      },
      "correct": "C",
      "explanation": "The <pre>default</pre> boolean attribute specifies which text track should be active when the video loads. Only one track per kind (subtitles, captions, etc.) should be marked default: <pre><video controls><source src=\"video.mp4\"><track kind=\"subtitles\" src=\"en.vtt\" srclang=\"en\" label=\"English\" default><track kind=\"subtitles\" src=\"es.vtt\" srclang=\"es\" label=\"Español\"></video></pre>. Without <pre>default</pre>, all tracks start disabled and users must manually enable them. Use <pre>default</pre> to activate the most appropriate track automatically, typically the page language or user's preferred language if detectable. If multiple tracks have <pre>default</pre>, browser behavior varies (usually the first wins). For accessibility, consider defaulting captions on for videos that autoplay or are prominently featured. Users can override the default selection via video controls. The attribute doesn't relate to video quality, fallback behavior, or requirement—it's purely about initial track selection for better UX.",
      "topics": [
        "Multiple Track Elements",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 19,
      "question": "How do autoplay policies affect muted versus unmuted videos?",
      "options": {
        "A": "Both are treated identically",
        "B": "Muted videos can usually autoplay; unmuted videos are blocked unless the user has interacted with the site or has sufficient engagement history",
        "C": "Only unmuted videos can autoplay",
        "D": "Autoplay volume doesn't matter"
      },
      "correct": "B",
      "explanation": "Modern browser autoplay policies distinguish between muted and unmuted content to balance UX with preventing intrusive audio. Muted videos (<pre><video autoplay muted></video></pre>) can typically autoplay without restriction—used for background videos, silent animations, or videos where users opt into sound. Unmuted videos face stricter policies: they're blocked on new/unfamiliar sites; may autoplay on sites the user has previously interacted with; may autoplay based on Media Engagement Index (MEI) scores that browsers maintain; desktop browsers may be more permissive than mobile. Example implementation: <pre><video autoplay muted playsinline><source src=\"intro.mp4\"></video><button onclick=\"video.muted = false\">🔊 Unmute</button></pre>. Always use <pre>muted</pre> with <pre>autoplay</pre> and provide clear unmute controls. Test autoplay with promise handling: <pre>video.play().catch(() => { showPlayButton(); });</pre>. Policies vary by browser (Chrome, Firefox, Safari have different thresholds) and can change, so defensive programming is essential.",
      "topics": [
        "Autoplay Policies",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 20,
      "question": "What is the purpose of the <pre>label</pre> attribute in <pre><track></pre> elements?",
      "options": {
        "A": "Labels the video file",
        "B": "Provides a human-readable title for the track shown in the browser's track selection menu",
        "C": "Creates track labels for editing",
        "D": "Sets the track ID"
      },
      "correct": "B",
      "explanation": "The <pre>label</pre> attribute provides a user-friendly name for the text track that appears in the browser's track selection menu. Without it, browsers typically display the language code, which isn't user-friendly: <pre><track kind=\"subtitles\" src=\"en.vtt\" srclang=\"en\" label=\"English\"><track kind=\"subtitles\" src=\"en-uk.vtt\" srclang=\"en-GB\" label=\"English (UK)\"><track kind=\"subtitles\" src=\"en-us.vtt\" srclang=\"en-US\" label=\"English (US)\"><track kind=\"captions\" src=\"en-sdh.vtt\" srclang=\"en\" label=\"English (SDH)\"></pre>. Good labels help users distinguish between similar tracks (UK vs US English, hearing vs deaf captions). They can also describe the track purpose: \"Director's Commentary\", \"Simplified Chinese (Mandarin)\", \"Audio Descriptions\". The label doesn't affect the track ID or file labeling—it's purely for UI. While <pre>srclang</pre> is machine-readable (\"en\", \"es\", \"ja\"), <pre>label</pre> is human-readable (\"English\", \"Español\", \"日本語\"). Always provide meaningful labels for better UX, especially when offering multiple tracks in the same language.",
      "topics": [
        "Multiple Track Elements",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 21,
      "question": "How do you handle fallback content for videos that fail to load or aren't supported?",
      "options": {
        "A": "Videos always load successfully",
        "B": "Fallback isn't possible for video",
        "C": "Use the <pre>fallback</pre> attribute",
        "D": "Place fallback content between <pre><video></pre> tags, use multiple <pre><source></pre> elements for format fallback, and handle <pre>error</pre> events in JavaScript"
      },
      "correct": "D",
      "explanation": "Implementing comprehensive video fallback involves multiple strategies. HTML fallback content appears if the browser doesn't support video at all: <pre><video controls><source src=\"video.mp4\" type=\"video/mp4\"><source src=\"video.webm\" type=\"video/webm\"><p>Your browser doesn't support HTML5 video. <a href=\"video.mp4\">Download the video</a>.</p></video></pre>. Format fallback uses multiple <pre><source></pre> elements—browsers try each until finding one they support. JavaScript error handling for loading failures: <pre>video.addEventListener('error', (e) => { console.error('Video error:', video.error.code, video.error.message); showFallbackUI(); });</pre>. Error codes include <pre>MEDIA_ERR_ABORTED</pre> (user aborted), <pre>MEDIA_ERR_NETWORK</pre> (network error), <pre>MEDIA_ERR_DECODE</pre> (corrupt file), <pre>MEDIA_ERR_SRC_NOT_SUPPORTED</pre> (unsupported format). Also handle the <pre>stalled</pre> event for network issues during playback. There's no <pre>fallback</pre> attribute. Combining HTML, multiple formats, and JavaScript error handling ensures graceful degradation across all scenarios.",
      "topics": [
        "Advanced Video Attributes",
        "Media Performance Optimization"
      ]
    },
    {
      "id": 22,
      "question": "What is the relationship between Media Source Extensions and adaptive streaming protocols like DASH and HLS?",
      "options": {
        "A": "They're competing technologies",
        "B": "MSE is the browser API that enables JavaScript implementations of DASH and HLS for adaptive streaming in HTML5 video",
        "C": "DASH and HLS replace MSE",
        "D": "They're unrelated technologies"
      },
      "correct": "B",
      "explanation": "Media Source Extensions (MSE) is the low-level browser API that provides the foundation for implementing adaptive streaming protocols. DASH (Dynamic Adaptive Streaming over HTTP) and HLS (HTTP Live Streaming) are protocols/specifications that define how to encode, segment, and describe multi-bitrate video content. JavaScript libraries (like dash.js, hls.js, Shaka Player) use MSE to implement these protocols in the browser: the library fetches DASH/HLS manifests (MPD/M3U8 files) describing available quality levels; monitors bandwidth and buffer health; fetches appropriate quality segments; uses MSE to append segments to the video buffer. Example flow: <pre>const video = document.querySelector('video'); const player = new Hls(); player.loadSource('stream.m3u8'); player.attachMedia(video);</pre>. Without MSE, browsers would need native DASH/HLS support (Safari has native HLS, others don't). MSE enables universal adaptive streaming implementation in JavaScript, giving developers control and allowing protocols to evolve without waiting for browser updates.",
      "topics": [
        "Media Source Extensions (MSE)",
        "Adaptive Streaming Hints"
      ]
    },
    {
      "id": 23,
      "question": "What considerations should you make when optimizing poster images for performance?",
      "options": {
        "A": "Posters don't affect performance",
        "B": "Always use maximum quality",
        "C": "Optimize file size (target <100KB), use modern formats (WebP), match video dimensions, consider lazy loading for below-fold videos, and use appropriate compression quality",
        "D": "Only file format matters"
      },
      "correct": "C",
      "explanation": "Poster image optimization significantly impacts page performance since posters load immediately. Best practices: target file size under 100KB for most posters (balance quality vs performance); use modern formats like WebP with JPEG fallback for better compression: serve WebP via <pre>type</pre> attributes or server-side detection; match exact video dimensions to avoid browser scaling; compress appropriately—poster quality doesn't need to match video quality, aim for visually acceptable results at smallest size; consider progressive JPEGs for faster perceived loading; for videos below the fold, consider lazy loading posters: <pre>video { background: url('poster.jpg') no-repeat center; } video[data-lazy-loaded] { background: none; }</pre> and load poster when scrolled into view; use CDN for poster images; consider generating multiple sizes for responsive scenarios. Tools like ImageOptim, Squoosh, or build-time optimizers help. Monitor impact with Lighthouse—large posters hurt LCP (Largest Contentful Paint). Remember: users see posters before deciding to play video, so quality matters, but excessive size hurts page load.",
      "topics": [
        "Poster Image Optimization",
        "Media Performance Optimization"
      ]
    },
    {
      "id": 24,
      "question": "How do you implement chapter markers or navigation for long videos using <pre><track></pre> elements?",
      "options": {
        "A": "Use <pre>kind=\"chapters\"</pre> with a WebVTT file defining chapter cues",
        "B": "Chapters aren't possible with HTML5 video",
        "C": "Use the <pre>chapters</pre> attribute on video",
        "D": "Chapters require server-side processing"
      },
      "correct": "A",
      "explanation": "Chapter markers are implemented using text tracks with <pre>kind=\"chapters\"</pre>. Create a WebVTT file with chapter definitions: <pre>WEBVTT\n\n00:00:00.000 --> 00:05:00.000\nIntroduction\n\n00:05:00.000 --> 00:15:00.000\nMain Content\n\n00:15:00.000 --> 00:20:00.000\nConclusion</pre>. Add to video: <pre><video controls><source src=\"lecture.mp4\"><track kind=\"chapters\" src=\"chapters.vtt\" srclang=\"en\" label=\"Chapters\" default></video></pre>. Browser support varies—some browsers display chapters in the timeline or provide a chapter menu; others don't expose them in UI but make them available to JavaScript. Access chapters via the <pre>cues</pre> property: <pre>const track = video.textTracks[0]; track.addEventListener('cuechange', () => { const activeCue = track.activeCues[0]; console.log('Current chapter:', activeCue.text); });</pre>. You can build custom chapter navigation UI using this data. Chapters enhance UX for educational content, podcasts, tutorials, etc. There's no <pre>chapters</pre> attribute. Media fragments can also jump to times, but chapters provide structure and labels.",
      "topics": [
        "Multiple Track Elements",
        "Advanced Video Attributes"
      ]
    },
    {
      "id": 25,
      "question": "What is the <pre>controlslist</pre> attribute and how does it customize video controls?",
      "options": {
        "A": "Lists available controls",
        "B": "Allows selective removal of specific controls: <pre>controlslist=\"nodownload nofullscreen noremoteplayback\"</pre>",
        "C": "Creates a custom controls list",
        "D": "Enables all controls"
      },
      "correct": "B",
      "explanation": "The <pre>controlslist</pre> attribute allows fine-grained control over which controls appear in the browser's default controls UI. Values include: <pre>nodownload</pre> hides the download button (doesn't prevent downloading, just removes the button); <pre>nofullscreen</pre> hides the fullscreen button; <pre>noremoteplayback</pre> hides remote playback options (casting). Example: <pre><video controls controlslist=\"nodownload nofullscreen\"><source src=\"video.mp4\"></video></pre>. You can combine multiple values space-separated. This is useful when you want most default controls but need to restrict specific features (e.g., preventing easy downloads for premium content, though determined users can still access files via network tools). Note that this attribute is Chromium-specific and not a W3C standard—Firefox and Safari don't support it. For cross-browser control customization, build custom controls with JavaScript and the HTMLMediaElement API: <pre>video.play()</pre>, <pre>video.pause()</pre>, <pre>video.requestFullscreen()</pre>, etc. The attribute doesn't create custom controls—it only modifies default ones.",
      "topics": [
        "Advanced Video Attributes",
        "Media Performance Optimization"
      ]
    }
  ]
}
