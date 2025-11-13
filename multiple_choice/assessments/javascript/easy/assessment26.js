module.exports = {
  "metadata": {
    "title": "JavaScript Fetch API Basics",
    "description": "Fundamental concepts of making HTTP requests with Fetch API, handling responses, and basic error handling in browser JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
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
  },
  "questions": [
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
        "topics": [
          "Fetch function basics"
        ]
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
        "topics": [
          "JSON parsing"
        ]
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
        "topics": [
          "HTTP methods"
        ]
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
        "topics": [
          "Basic API calls"
        ]
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
        "topics": [
          "Error handling"
        ]
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
        "topics": [
          "Response handling"
        ]
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
        "topics": [
          "Response handling"
        ]
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
        "topics": [
          "HTTP methods"
        ]
      }
    },
    {
      "id": 9,
      "question": "How do you set headers in a fetch request?",
      "options": {
        "A": "<pre>setHeader('Content-Type', 'application/json')</pre>",
        "B": "<pre>headers: {'Content-Type': 'application/json'}</pre>",
        "C": "<pre>request.headers = {...}</pre>",
        "D": "<pre>fetch.setHeader(...)</pre>"
      },
      "correct": "B",
      "explanation": "Headers are set in the options object using the headers property, which takes an object with header names and values.",
      "topic": {
        "topics": [
          "Request headers"
        ]
      }
    },
    {
      "id": 10,
      "question": "What is the correct way to handle a fetch response with error checking?",
      "options": {
        "A": "Use response.error property",
        "B": "Check response.ok or response.status",
        "C": "Only check for network errors",
        "D": "Assume all responses are successful"
      },
      "correct": "B",
      "explanation": "You should always check response.ok or response.status since fetch only rejects on network errors, not HTTP error status codes.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 11,
      "question": "What does response.json() return?",
      "options": {
        "A": "A JavaScript object",
        "B": "A Promise",
        "C": "A JSON string",
        "D": "The raw response"
      },
      "correct": "B",
      "explanation": "response.json() returns a Promise that resolves to the parsed JavaScript object. You need to await it or use .then() to get the actual data.",
      "topic": {
        "topics": [
          "JSON parsing"
        ]
      }
    },
    {
      "id": 12,
      "question": "How do you send JSON data in a POST request?",
      "options": {
        "A": "Use JSON.send()",
        "B": "Stringify the data and set Content-Type header",
        "C": "Send the object directly",
        "D": "Set dataType: 'json'"
      },
      "correct": "B",
      "explanation": "You need to convert the JavaScript object to a JSON string with JSON.stringify() and set the Content-Type header to 'application/json'.",
      "topic": {
        "topics": [
          "Request headers"
        ]
      }
    },
    {
      "id": 13,
      "question": "What is this code missing? [CODE]fetch('/api/data')\n  .then(data => console.log(data));[/CODE]",
      "options": {
        "A": "Error handling",
        "B": "JSON parsing",
        "C": "Headers",
        "D": "HTTP method"
      },
      "correct": "B",
      "explanation": "The code tries to use the response directly, but you need to call response.json() first to parse the JSON data.",
      "topic": {
        "topics": [
          "JSON parsing"
        ]
      }
    },
    {
      "id": 14,
      "question": "What happens when fetch encounters a 404 error?",
      "options": {
        "A": "The Promise rejects",
        "B": "The Promise resolves normally",
        "C": "It throws an exception",
        "D": "It returns null"
      },
      "correct": "B",
      "explanation": "Fetch only rejects on network failures, not HTTP error codes. A 404 will resolve normally, and you need to check response.ok or response.status.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 15,
      "question": "How do you make a DELETE request with fetch?",
      "options": {
        "A": "<pre>fetch(url).delete()</pre>",
        "B": "<pre>fetch(url, {method: 'DELETE'})</pre>",
        "C": "<pre>fetch.delete(url)</pre>",
        "D": "<pre>fetch(url, 'DELETE')</pre>"
      },
      "correct": "B",
      "explanation": "To use any HTTP method other than GET, you need to specify it in the options object with the method property.",
      "topic": {
        "topics": [
          "HTTP methods"
        ]
      }
    },
    {
      "id": 16,
      "question": "What is the purpose of the Content-Type header?",
      "options": {
        "A": "To enable CORS",
        "B": "To tell the server what type of data you're sending",
        "C": "To set the response format",
        "D": "To specify what type of response you want"
      },
      "correct": "B",
      "explanation": "The Content-Type header informs the server about the format of the data in the request body, such as 'application/json' for JSON data.",
      "topic": {
        "topics": [
          "Request headers"
        ]
      }
    },
    {
      "id": 17,
      "question": "How do you handle both success and error cases in fetch?",
      "options": {
        "A": "Use response.success",
        "B": "Only use .then()",
        "C": "Check response.ok and use .catch()",
        "D": "Fetch handles errors automatically"
      },
      "correct": "C",
      "explanation": "You need to check response.ok for HTTP errors and use .catch() for network errors to properly handle all error cases.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 18,
      "question": "What does this code log for a successful request? [CODE]fetch('/api/data')\n  .then(response => response.text())\n  .then(text => console.log(typeof text));[/CODE]",
      "options": {
        "A": "<pre>'object'</pre>",
        "B": "<pre>'undefined'</pre>",
        "C": "<pre>'string'</pre>",
        "D": "<pre>'number'</pre>"
      },
      "correct": "C",
      "explanation": "response.text() returns the response body as a string, so typeof text will be 'string'.",
      "topic": {
        "topics": [
          "Response handling"
        ]
      }
    },
    {
      "id": 19,
      "question": "How do you send form data with fetch?",
      "options": {
        "A": "Stringify the form data",
        "B": "Use form.submit()",
        "C": "Use FormData object as body",
        "D": "Set contentType: 'form'"
      },
      "correct": "C",
      "explanation": "You can create a FormData object from a form element and use it as the body in a fetch request. The Content-Type will be set automatically.",
      "topic": {
        "topics": [
          "Basic API calls"
        ]
      }
    },
    {
      "id": 20,
      "question": "What is the correct async/await version of this fetch call?",
      "options": {
        "A": "<pre>const response = fetch(url);\nconst data = response.json();</pre>",
        "B": "<pre>const data = await fetch(url).json();</pre>",
        "C": "<pre>const response = await fetch(url);\nconst data = await response.json();</pre>",
        "D": "<pre>const data = await fetch(url);</pre>"
      },
      "correct": "C",
      "explanation": "You need to await both the fetch call and the response.json() call since both return Promises.",
      "topic": {
        "topics": [
          "Basic API calls"
        ]
      }
    },
    {
      "id": 21,
      "question": "What does fetch do if the URL is invalid?",
      "options": {
        "A": "Returns a 404 response",
        "B": "Throws a syntax error",
        "C": "The Promise rejects",
        "D": "Returns null"
      },
      "correct": "C",
      "explanation": "Invalid URLs, DNS failures, and network connectivity issues cause the fetch Promise to reject.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 22,
      "question": "How do you add multiple headers to a fetch request?",
      "options": {
        "A": "<pre>setHeaders({...})</pre>",
        "B": "<pre>headers: ['Header1', 'value1', 'Header2', 'value2']</pre>",
        "C": "<pre>headers: {'Header1': 'value1', 'Header2': 'value2'}</pre>",
        "D": "<pre>addHeader('Header1', 'value1')</pre>"
      },
      "correct": "C",
      "explanation": "The headers option takes an object where keys are header names and values are header values.",
      "topic": {
        "topics": [
          "Request headers"
        ]
      }
    },
    {
      "id": 23,
      "question": "What is the difference between response.text() and response.json()?",
      "options": {
        "A": "json() works with all content types",
        "B": "text() is faster",
        "C": "text() returns string, json() returns parsed object",
        "D": "There is no difference"
      },
      "correct": "C",
      "explanation": "response.text() returns the raw response as a string, while response.json() parses it as JSON and returns a JavaScript object.",
      "topic": {
        "topics": [
          "Response handling"
        ]
      }
    },
    {
      "id": 24,
      "question": "How do you handle a fetch request that might fail?",
      "options": {
        "A": "Wrap in if/else statement",
        "B": "Check for null response",
        "C": "Use response.fail()",
        "D": "Use try/catch with await or .catch() with Promises"
      },
      "correct": "D",
      "explanation": "For proper error handling, use try/catch with async/await or .catch() with Promise chains to handle both network and HTTP errors.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 25,
      "question": "What does this header do? [CODE]'Content-Type': 'application/json'[/CODE]",
      "options": {
        "A": "Sets response format to JSON",
        "B": "Requests JSON response from server",
        "C": "Enables JSON parsing",
        "D": "Tells server we're sending JSON data"
      },
      "correct": "D",
      "explanation": "This header informs the server that the request body contains JSON data, so the server knows how to parse it.",
      "topic": {
        "topics": [
          "Request headers"
        ]
      }
    },
    {
      "id": 26,
      "question": "What is the correct way to make a PUT request with JSON data?",
      "options": {
        "A": "<pre>fetch(url).put(data)</pre>",
        "B": "<pre>fetch.put(url, data)</pre>",
        "C": "<pre>fetch(url, 'PUT', data)</pre>",
        "D": "<pre>fetch(url, {\n  method: 'PUT',\n  headers: {'Content-Type': 'application/json'},\n  body: JSON.stringify(data)\n})</pre>"
      },
      "correct": "D",
      "explanation": "You need to specify the method, set the Content-Type header, and stringify the data for a proper PUT request with JSON.",
      "topic": {
        "topics": [
          "HTTP methods"
        ]
      }
    },
    {
      "id": 27,
      "question": "What happens if you don't call response.json() or response.text()?",
      "options": {
        "A": "It works automatically",
        "B": "An error is thrown",
        "C": "The data is lost",
        "D": "The response body is not read"
      },
      "correct": "D",
      "explanation": "You must call one of the body reading methods (json(), text(), blob(), etc.) to actually read the response content.",
      "topic": {
        "topics": [
          "Response handling"
        ]
      }
    },
    {
      "id": 28,
      "question": "How do you check the HTTP status code of a response?",
      "options": {
        "A": "<pre>response.httpStatus</pre>",
        "B": "<pre>response.code</pre>",
        "C": "<pre>response.statusCode</pre>",
        "D": "<pre>response.status</pre>"
      },
      "correct": "D",
      "explanation": "The response.status property contains the HTTP status code as a number (200, 404, 500, etc.).",
      "topic": {
        "topics": [
          "Response handling"
        ]
      }
    },
    {
      "id": 29,
      "question": "What is the purpose of the Accept header?",
      "options": {
        "A": "To accept the request",
        "B": "To enable CORS",
        "C": "To set request format",
        "D": "To specify what response format you can accept"
      },
      "correct": "D",
      "explanation": "The Accept header tells the server what content types the client can understand in the response, like 'application/json'.",
      "topic": {
        "topics": [
          "Request headers"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is a common mistake when using fetch for the first time?",
      "options": {
        "A": "Using async/await",
        "B": "Using the wrong URL",
        "C": "Missing semicolons",
        "D": "Forgetting to parse the response with .json()"
      },
      "correct": "D",
      "explanation": "Many beginners try to use the response object directly without calling .json() or .text() to read the response body, which leads to unexpected results.",
      "topic": {
        "topics": [
          "Basic API calls"
        ]
      }
    }
  ]
}
