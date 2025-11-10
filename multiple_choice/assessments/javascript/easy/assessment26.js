// assessment26.js - AUTO-GENERATED topics and assessmentId
const metadata = {
    "title": "JavaScript Fetch API Basics",
    "description": "Fundamental concepts of making HTTP requests with Fetch API, handling responses, and basic error handling in browser JavaScript.",
    "difficulty": "easy",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
        "Fetch function basics",
        "Response handling",
        "JSON parsing",
        "Error handling",
        "HTTP methods",
        "Request headers",
        "Basic API calls"
    ],
    "topicLinks": [
        {
            "topicName": "Fetch function basics",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
        },
        {
            "topicName": "Response handling",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Response"
        },
        {
            "topicName": "JSON parsing",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Response/json"
        },
        {
            "topicName": "Error handling",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful"
        },
        {
            "topicName": "HTTP methods",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
        },
        {
            "topicName": "Request headers",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Headers"
        },
        {
            "topicName": "Basic API calls",
            "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
        }
    ],
    "assessmentId": 26,
    "assessmentUniqueId": 1762736452167,
    "testType": "multiple-choice"
};

const questions = [
    {
        "id": 1,
        "question": "What does the fetch() function return?",
        "options": {
            "A": "A Promise",
            "B": "The response data",
            "C": "A JSON object",
            "D": "An XMLHttpRequest"
        },
        "correct": "A",
        "explanation": "The fetch() function returns a Promise that resolves to a Response object. You need to handle this Promise to get the actual response data.",
        "topic": {
            "topics": ["Fetch function basics"]
        }
    },
    {
        "id": 2,
        "question": "How do you parse JSON data from a fetch response?",
        "options": {
            "A": "<pre>response.json()</pre>",
            "B": "<pre>JSON.parse(response)</pre>",
            "C": "<pre>response.parseJSON()</pre>",
            "D": "<pre>response.getJSON()</pre>"
        },
        "correct": "A",
        "explanation": "The Response object has a .json() method that reads the response body and parses it as JSON. This method also returns a Promise.",
        "topic": {
            "topics": ["JSON parsing"]
        }
    },
    {
        "id": 3,
        "question": "What is the simplest way to make a GET request with fetch?",
        "options": {
            "A": "<pre>fetch(url)</pre>",
            "B": "<pre>fetch(url, {method: 'GET'})</pre>",
            "C": "<pre>fetch.get(url)</pre>",
            "D": "<pre>fetch(url).get()</pre>"
        },
        "correct": "A",
        "explanation": "GET is the default method for fetch(), so you can simply call fetch(url) without any options for a basic GET request.",
        "topic": {
            "topics": ["HTTP methods"]
        }
    },
    {
        "id": 4,
        "question": "What does this code do? [CODE]fetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data));[/CODE]",
        "options": {
            "A": "Fetches data and logs the parsed JSON",
            "B": "Fetches data and logs the raw response",
            "C": "Sends data to the server",
            "D": "Throws an error"
        },
        "correct": "A",
        "explanation": "This code makes a GET request, converts the response to JSON, and then logs the parsed data to the console.",
        "topic": {
            "topics": ["Basic API calls"]
        }
    },
    {
        "id": 5,
        "question": "How do you handle network errors in fetch?",
        "options": {
            "A": "Use .catch() on the Promise",
            "B": "Check response.status",
            "C": "Use try/catch with await",
            "D": "Both A and C"
        },
        "correct": "D",
        "explanation": "Network errors (like no internet) are caught with .catch() or try/catch. HTTP error status codes (404, 500) don't trigger rejections and need to be checked manually.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 6,
        "question": "What HTTP status code indicates a successful request?",
        "options": {
            "A": "200-299",
            "B": "100-199",
            "C": "300-399",
            "D": "400-499"
        },
        "correct": "A",
        "explanation": "Status codes in the 200-299 range indicate success. 200 OK is the most common success status.",
        "topic": {
            "topics": ["Response handling"]
        }
    },
    {
        "id": 7,
        "question": "How do you check if a fetch response was successful?",
        "options": {
            "A": "<pre>response.ok</pre>",
            "B": "<pre>response.success</pre>",
            "C": "<pre>response.status === 200</pre>",
            "D": "<pre>response.good</pre>"
        },
        "correct": "A",
        "explanation": "The response.ok property is true for status codes 200-299, making it the easiest way to check if the request was successful.",
        "topic": {
            "topics": ["Response handling"]
        }
    },
    {
        "id": 8,
        "question": "What does this code do? [CODE]fetch('/api/users', {\n  method: 'POST',\n  body: JSON.stringify({name: 'John'})\n})[/CODE]",
        "options": {
            "A": "Sends a POST request with JSON data",
            "B": "Gets user data",
            "C": "Updates a user",
            "D": "Deletes a user"
        },
        "correct": "A",
        "explanation": "This sends a POST request to the /api/users endpoint with a JSON body containing {name: 'John'}.",
        "topic": {
            "topics": ["HTTP methods"]
        }
    },
    {
        "id": 9,
        "question": "How do you set headers in a fetch request?",
        "options": {
            "A": "<pre>headers: {'Content-Type': 'application/json'}</pre>",
            "B": "<pre>setHeader('Content-Type', 'application/json')</pre>",
            "C": "<pre>request.headers = {...}</pre>",
            "D": "<pre>fetch.setHeader(...)</pre>"
        },
        "correct": "A",
        "explanation": "Headers are set in the options object using the headers property, which takes an object with header names and values.",
        "topic": {
            "topics": ["Request headers"]
        }
    },
    {
        "id": 10,
        "question": "What is the correct way to handle a fetch response with error checking?",
        "options": {
            "A": "Check response.ok or response.status",
            "B": "Assume all responses are successful",
            "C": "Only check for network errors",
            "D": "Use response.error property"
        },
        "correct": "A",
        "explanation": "You should always check response.ok or response.status since fetch only rejects on network errors, not HTTP error status codes.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 11,
        "question": "What does response.json() return?",
        "options": {
            "A": "A Promise",
            "B": "A JavaScript object",
            "C": "A JSON string",
            "D": "The raw response"
        },
        "correct": "A",
        "explanation": "response.json() returns a Promise that resolves to the parsed JavaScript object. You need to await it or use .then() to get the actual data.",
        "topic": {
            "topics": ["JSON parsing"]
        }
    },
    {
        "id": 12,
        "question": "How do you send JSON data in a POST request?",
        "options": {
            "A": "Stringify the data and set Content-Type header",
            "B": "Send the object directly",
            "C": "Use JSON.send()",
            "D": "Set dataType: 'json'"
        },
        "correct": "A",
        "explanation": "You need to convert the JavaScript object to a JSON string with JSON.stringify() and set the Content-Type header to 'application/json'.",
        "topic": {
            "topics": ["Request headers"]
        }
    },
    {
        "id": 13,
        "question": "What is this code missing? [CODE]fetch('/api/data')\n  .then(data => console.log(data));[/CODE]",
        "options": {
            "A": "JSON parsing",
            "B": "Error handling",
            "C": "Headers",
            "D": "HTTP method"
        },
        "correct": "A",
        "explanation": "The code tries to use the response directly, but you need to call response.json() first to parse the JSON data.",
        "topic": {
            "topics": ["JSON parsing"]
        }
    },
    {
        "id": 14,
        "question": "What happens when fetch encounters a 404 error?",
        "options": {
            "A": "The Promise resolves normally",
            "B": "The Promise rejects",
            "C": "It throws an exception",
            "D": "It returns null"
        },
        "correct": "A",
        "explanation": "Fetch only rejects on network failures, not HTTP error codes. A 404 will resolve normally, and you need to check response.ok or response.status.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 15,
        "question": "How do you make a DELETE request with fetch?",
        "options": {
            "A": "<pre>fetch(url, {method: 'DELETE'})</pre>",
            "B": "<pre>fetch.delete(url)</pre>",
            "C": "<pre>fetch(url).delete()</pre>",
            "D": "<pre>fetch(url, 'DELETE')</pre>"
        },
        "correct": "A",
        "explanation": "To use any HTTP method other than GET, you need to specify it in the options object with the method property.",
        "topic": {
            "topics": ["HTTP methods"]
        }
    },
    {
        "id": 16,
        "question": "What is the purpose of the Content-Type header?",
        "options": {
            "A": "To tell the server what type of data you're sending",
            "B": "To specify what type of response you want",
            "C": "To set the response format",
            "D": "To enable CORS"
        },
        "correct": "A",
        "explanation": "The Content-Type header informs the server about the format of the data in the request body, such as 'application/json' for JSON data.",
        "topic": {
            "topics": ["Request headers"]
        }
    },
    {
        "id": 17,
        "question": "How do you handle both success and error cases in fetch?",
        "options": {
            "A": "Check response.ok and use .catch()",
            "B": "Only use .then()",
            "C": "Use response.success",
            "D": "Fetch handles errors automatically"
        },
        "correct": "A",
        "explanation": "You need to check response.ok for HTTP errors and use .catch() for network errors to properly handle all error cases.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 18,
        "question": "What does this code log for a successful request? [CODE]fetch('/api/data')\n  .then(response => response.text())\n  .then(text => console.log(typeof text));[/CODE]",
        "options": {
            "A": "<pre>'string'</pre>",
            "B": "<pre>'object'</pre>",
            "C": "<pre>'undefined'</pre>",
            "D": "<pre>'number'</pre>"
        },
        "correct": "A",
        "explanation": "response.text() returns the response body as a string, so typeof text will be 'string'.",
        "topic": {
            "topics": ["Response handling"]
        }
    },
    {
        "id": 19,
        "question": "How do you send form data with fetch?",
        "options": {
            "A": "Use FormData object as body",
            "B": "Stringify the form data",
            "C": "Use form.submit()",
            "D": "Set contentType: 'form'"
        },
        "correct": "A",
        "explanation": "You can create a FormData object from a form element and use it as the body in a fetch request. The Content-Type will be set automatically.",
        "topic": {
            "topics": ["Basic API calls"]
        }
    },
    {
        "id": 20,
        "question": "What is the correct async/await version of this fetch call?",
        "options": {
            "A": "<pre>const response = await fetch(url);\nconst data = await response.json();</pre>",
            "B": "<pre>const data = await fetch(url).json();</pre>",
            "C": "<pre>const response = fetch(url);\nconst data = response.json();</pre>",
            "D": "<pre>const data = await fetch(url);</pre>"
        },
        "correct": "A",
        "explanation": "You need to await both the fetch call and the response.json() call since both return Promises.",
        "topic": {
            "topics": ["Basic API calls"]
        }
    },
    {
        "id": 21,
        "question": "What does fetch do if the URL is invalid?",
        "options": {
            "A": "The Promise rejects",
            "B": "Returns a 404 response",
            "C": "Throws a syntax error",
            "D": "Returns null"
        },
        "correct": "A",
        "explanation": "Invalid URLs, DNS failures, and network connectivity issues cause the fetch Promise to reject.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 22,
        "question": "How do you add multiple headers to a fetch request?",
        "options": {
            "A": "<pre>headers: {'Header1': 'value1', 'Header2': 'value2'}</pre>",
            "B": "<pre>headers: ['Header1', 'value1', 'Header2', 'value2']</pre>",
            "C": "<pre>addHeader('Header1', 'value1')</pre>",
            "D": "<pre>setHeaders({...})</pre>"
        },
        "correct": "A",
        "explanation": "The headers option takes an object where keys are header names and values are header values.",
        "topic": {
            "topics": ["Request headers"]
        }
    },
    {
        "id": 23,
        "question": "What is the difference between response.text() and response.json()?",
        "options": {
            "A": "text() returns string, json() returns parsed object",
            "B": "text() is faster",
            "C": "json() works with all content types",
            "D": "There is no difference"
        },
        "correct": "A",
        "explanation": "response.text() returns the raw response as a string, while response.json() parses it as JSON and returns a JavaScript object.",
        "topic": {
            "topics": ["Response handling"]
        }
    },
    {
        "id": 24,
        "question": "How do you handle a fetch request that might fail?",
        "options": {
            "A": "Use try/catch with await or .catch() with Promises",
            "B": "Wrap in if/else statement",
            "C": "Use response.fail()",
            "D": "Check for null response"
        },
        "correct": "A",
        "explanation": "For proper error handling, use try/catch with async/await or .catch() with Promise chains to handle both network and HTTP errors.",
        "topic": {
            "topics": ["Error handling"]
        }
    },
    {
        "id": 25,
        "question": "What does this header do? [CODE]'Content-Type': 'application/json'[/CODE]",
        "options": {
            "A": "Tells server we're sending JSON data",
            "B": "Requests JSON response from server",
            "C": "Sets response format to JSON",
            "D": "Enables JSON parsing"
        },
        "correct": "A",
        "explanation": "This header informs the server that the request body contains JSON data, so the server knows how to parse it.",
        "topic": {
            "topics": ["Request headers"]
        }
    },
    {
        "id": 26,
        "question": "What is the correct way to make a PUT request with JSON data?",
        "options": {
            "A": "<pre>fetch(url, {\n  method: 'PUT',\n  headers: {'Content-Type': 'application/json'},\n  body: JSON.stringify(data)\n})</pre>",
            "B": "<pre>fetch.put(url, data)</pre>",
            "C": "<pre>fetch(url, 'PUT', data)</pre>",
            "D": "<pre>fetch(url).put(data)</pre>"
        },
        "correct": "A",
        "explanation": "You need to specify the method, set the Content-Type header, and stringify the data for a proper PUT request with JSON.",
        "topic": {
            "topics": ["HTTP methods"]
        }
    },
    {
        "id": 27,
        "question": "What happens if you don't call response.json() or response.text()?",
        "options": {
            "A": "The response body is not read",
            "B": "An error is thrown",
            "C": "The data is lost",
            "D": "It works automatically"
        },
        "correct": "A",
        "explanation": "You must call one of the body reading methods (json(), text(), blob(), etc.) to actually read the response content.",
        "topic": {
            "topics": ["Response handling"]
        }
    },
    {
        "id": 28,
        "question": "How do you check the HTTP status code of a response?",
        "options": {
            "A": "<pre>response.status</pre>",
            "B": "<pre>response.code</pre>",
            "C": "<pre>response.httpStatus</pre>",
            "D": "<pre>response.statusCode</pre>"
        },
        "correct": "A",
        "explanation": "The response.status property contains the HTTP status code as a number (200, 404, 500, etc.).",
        "topic": {
            "topics": ["Response handling"]
        }
    },
    {
        "id": 29,
        "question": "What is the purpose of the Accept header?",
        "options": {
            "A": "To specify what response format you can accept",
            "B": "To accept the request",
            "C": "To set request format",
            "D": "To enable CORS"
        },
        "correct": "A",
        "explanation": "The Accept header tells the server what content types the client can understand in the response, like 'application/json'.",
        "topic": {
            "topics": ["Request headers"]
        }
    },
    {
        "id": 30,
        "question": "What is a common mistake when using fetch for the first time?",
        "options": {
            "A": "Forgetting to parse the response with .json()",
            "B": "Using the wrong URL",
            "C": "Missing semicolons",
            "D": "Using async/await"
        },
        "correct": "A",
        "explanation": "Many beginners try to use the response object directly without calling .json() or .text() to read the response body, which leads to unexpected results.",
        "topic": {
            "topics": ["Basic API calls"]
        }
    }
];

module.exports = { metadata, questions };