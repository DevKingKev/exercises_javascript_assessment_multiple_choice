module.exports = {
  "metadata": {
    "title": "JavaScript Fetch API Fundamentals",
    "description": "Basic concepts of making HTTP requests, handling responses, and error handling with Fetch API in browser JavaScript.",
    "difficulty": "easy",
    "domain": "javascript",
    "timeLimit": 30,
    "questionCount": 30,
    "topics": [
      "Fetch basics",
      "Response methods",
      "Error handling",
      "Request options",
      "JSON handling",
      "HTTP status codes",
      "Async patterns"
    ],
    "topicLinks": [
      {
        "topicName": "Fetch basics",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
      },
      {
        "topicName": "Response methods",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Response"
      },
      {
        "topicName": "Error handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful"
      },
      {
        "topicName": "Request options",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters"
      },
      {
        "topicName": "JSON handling",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Response/json"
      },
      {
        "topicName": "HTTP status codes",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
      },
      {
        "topicName": "Async patterns",
        "refLink": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      }
    ],
    "assessmentId": 27,
    "assessmentUniqueId": 1762736675615,
    "testType": "multiple-choice"
  },
  "questions": [
    {
      "id": 1,
      "question": "What is the first thing you need to do after calling fetch()?",
      "options": {
        "A": "Handle the Promise it returns",
        "B": "Parse the response as JSON",
        "C": "Check for errors",
        "D": "Log the result"
      },
      "correct": "A",
      "explanation": "fetch() returns a Promise, so you need to use .then()/.catch() or await to handle the asynchronous response.",
      "topic": {
        "topics": [
          "Fetch basics"
        ]
      }
    },
    {
      "id": 2,
      "question": "Which method converts a fetch response to JSON?",
      "options": {
        "A": "<pre>response.json()</pre>",
        "B": "<pre>JSON.parse(response)</pre>",
        "C": "<pre>response.toJSON()</pre>",
        "D": "<pre>fetch.json(response)</pre>"
      },
      "correct": "A",
      "explanation": "The Response object has a .json() method that reads the response body and parses it as JSON. This also returns a Promise.",
      "topic": {
        "topics": [
          "Response methods"
        ]
      }
    },
    {
      "id": 3,
      "question": "What does a 404 status code mean?",
      "options": {
        "A": "Resource not found",
        "B": "Server error",
        "C": "Success",
        "D": "Authentication required"
      },
      "correct": "A",
      "explanation": "HTTP status code 404 means the requested resource was not found on the server.",
      "topic": {
        "topics": [
          "HTTP status codes"
        ]
      }
    },
    {
      "id": 4,
      "question": "How do you handle a fetch request using async/await?",
      "options": {
        "A": "<pre>const response = await fetch(url);</pre>",
        "B": "<pre>const data = await fetch(url);</pre>",
        "C": "<pre>await fetch(url).data;</pre>",
        "D": "<pre>fetch(url).await();</pre>"
      },
      "correct": "A",
      "explanation": "You use await to wait for the fetch Promise to resolve, which gives you the Response object.",
      "topic": {
        "topics": [
          "Async patterns"
        ]
      }
    },
    {
      "id": 5,
      "question": "What property indicates if a fetch response was successful?",
      "options": {
        "A": "<pre>response.ok</pre>",
        "B": "<pre>response.success</pre>",
        "C": "<pre>response.good</pre>",
        "D": "<pre>response.valid</pre>"
      },
      "correct": "A",
      "explanation": "response.ok is true for status codes 200-299, making it easy to check if the request was successful.",
      "topic": {
        "topics": [
          "Response methods"
        ]
      }
    },
    {
      "id": 6,
      "question": "What happens when fetch cannot reach the server?",
      "options": {
        "A": "The Promise rejects",
        "B": "Returns status 500",
        "C": "Returns null",
        "D": "Throws a syntax error"
      },
      "correct": "A",
      "explanation": "Network errors like DNS failures, no internet connection, or CORS issues cause the fetch Promise to reject.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 7,
      "question": "How do you send data in a POST request with fetch?",
      "options": {
        "A": "Use the 'body' option",
        "B": "Add it to the URL",
        "C": "Use the 'data' option",
        "D": "Set it as a header"
      },
      "correct": "A",
      "explanation": "The 'body' option in fetch is used to send data to the server in POST, PUT, and PATCH requests.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 8,
      "question": "What is missing from this fetch call? [CODE]fetch('/api/users', {\n  method: 'POST',\n  body: JSON.stringify({name: 'John'})\n})[/CODE]",
      "options": {
        "A": "Authentication",
        "B": "Content-Type header",
        "C": "Error handling",
        "D": "URL parameters"
      },
      "correct": "B",
      "explanation": "When sending JSON data, you should set the Content-Type header to 'application/json' so the server knows how to parse it.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 9,
      "question": "What does response.text() return?",
      "options": {
        "A": "The response as a string immediately",
        "B": "A Promise that resolves to a string",
        "C": "A JSON object",
        "D": "The raw response bytes"
      },
      "correct": "B",
      "explanation": "response.text() returns a Promise that resolves to the response body as a string. You need to await it or use .then().",
      "topic": {
        "topics": [
          "Response methods"
        ]
      }
    },
    {
      "id": 10,
      "question": "How do you check the HTTP status of a response?",
      "options": {
        "A": "<pre>response.code</pre>",
        "B": "<pre>response.status</pre>",
        "C": "<pre>response.statusCode</pre>",
        "D": "<pre>response.httpStatus</pre>"
      },
      "correct": "B",
      "explanation": "response.status contains the numeric HTTP status code (200, 404, 500, etc.).",
      "topic": {
        "topics": [
          "Response methods"
        ]
      }
    },
    {
      "id": 11,
      "question": "What is the default HTTP method for fetch?",
      "options": {
        "A": "OPTIONS",
        "B": "GET",
        "C": "PUT",
        "D": "POST"
      },
      "correct": "B",
      "explanation": "If you don't specify a method, fetch uses GET by default.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 12,
      "question": "How do you handle both network and HTTP errors in fetch?",
      "options": {
        "A": "Check response.error",
        "B": "Check response.ok and use catch()",
        "C": "Fetch handles all errors automatically",
        "D": "Only use try/catch"
      },
      "correct": "B",
      "explanation": "Use .catch() for network errors and check response.ok for HTTP errors like 404 or 500.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 13,
      "question": "What does this code do? [CODE]const data = await fetch(url).then(r => r.json());[/CODE]",
      "options": {
        "A": "Makes a GET request only",
        "B": "Fetches and parses JSON data",
        "C": "Throws an error",
        "D": "Sends data to server"
      },
      "correct": "B",
      "explanation": "This code uses await with a Promise chain to fetch data and parse it as JSON in one line.",
      "topic": {
        "topics": [
          "Async patterns"
        ]
      }
    },
    {
      "id": 14,
      "question": "What header is needed when sending JSON data?",
      "options": {
        "A": "<pre>Type: json</pre>",
        "B": "<pre>Content-Type: application/json</pre>",
        "C": "<pre>Content-Type: text/json</pre>",
        "D": "<pre>Accept: application/json</pre>"
      },
      "correct": "B",
      "explanation": "The Content-Type header tells the server what format the request body is in.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 15,
      "question": "What is a 500 status code?",
      "options": {
        "A": "Not found",
        "B": "Internal server error",
        "C": "Success",
        "D": "Bad request"
      },
      "correct": "B",
      "explanation": "HTTP 500 means there was an internal server error while processing the request.",
      "topic": {
        "topics": [
          "HTTP status codes"
        ]
      }
    },
    {
      "id": 16,
      "question": "How do you make a PUT request with fetch?",
      "options": {
        "A": "<pre>fetch(url, 'PUT')</pre>",
        "B": "<pre>fetch.put(url)</pre>",
        "C": "<pre>fetch(url, {method: 'PUT'})</pre>",
        "D": "<pre>fetch(url).put()</pre>"
      },
      "correct": "C",
      "explanation": "Specify the HTTP method in the options object with the 'method' property.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 17,
      "question": "What is the correct way to read a text response?",
      "options": {
        "A": "<pre>const text = await response.string();</pre>",
        "B": "<pre>const text = response.text;</pre>",
        "C": "<pre>const text = await response.text();</pre>",
        "D": "<pre>const text = response.toString();</pre>"
      },
      "correct": "C",
      "explanation": "response.text() is a method that returns a Promise, so you need to await it or use .then().",
      "topic": {
        "topics": [
          "Response methods"
        ]
      }
    },
    {
      "id": 18,
      "question": "What does fetch return for a successful request?",
      "options": {
        "A": "The HTTP status code",
        "B": "The parsed JSON data",
        "C": "A Response object wrapped in a Promise",
        "D": "A string of the response"
      },
      "correct": "C",
      "explanation": "fetch() returns a Promise that resolves to a Response object, which you then need to process to get the actual data.",
      "topic": {
        "topics": [
          "Fetch basics"
        ]
      }
    },
    {
      "id": 19,
      "question": "How do you add authentication to a fetch request?",
      "options": {
        "A": "Add to the URL",
        "B": "Use the auth option",
        "C": "Use the Authorization header",
        "D": "Set in the body"
      },
      "correct": "C",
      "explanation": "Authentication is typically done using the Authorization header, often with a Bearer token.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 20,
      "question": "What is this code doing? [CODE]fetch('/api/data')\n  .then(response => {\n    if (!response.ok) throw new Error('Request failed');\n    return response.json();\n  })</CODE>",
      "options": {
        "A": "Parsing JSON automatically",
        "B": "Handling network errors",
        "C": "Checking for HTTP errors before parsing",
        "D": "Sending a POST request"
      },
      "correct": "C",
      "explanation": "This code checks if the response was successful (response.ok) and throws an error if not, before attempting to parse the JSON.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 21,
      "question": "What method is used to read binary data from a response?",
      "options": {
        "A": "<pre>response.blob()</pre>",
        "B": "<pre>response.binary()</pre>",
        "C": "<pre>response.arrayBuffer()</pre>",
        "D": "Both A and C"
      },
      "correct": "D",
      "explanation": "Both response.blob() and response.arrayBuffer() can be used to read binary data from a response.",
      "topic": {
        "topics": [
          "Response methods"
        ]
      }
    },
    {
      "id": 22,
      "question": "What does a 201 status code indicate?",
      "options": {
        "A": "Resource deleted",
        "B": "Resource updated",
        "C": "Resource created successfully",
        "D": "Resource found"
      },
      "correct": "C",
      "explanation": "HTTP 201 means a new resource was successfully created, often used after POST requests.",
      "topic": {
        "topics": [
          "HTTP status codes"
        ]
      }
    },
    {
      "id": 23,
      "question": "How do you handle a fetch error with async/await?",
      "options": {
        "A": "Use try/catch block",
        "B": "Use .catch() method",
        "C": "Check response.error",
        "D": "Both A and B"
      },
      "correct": "D",
      "explanation": "With async/await, you can use try/catch, or you can still use .catch() on the Promise returned by the async function.",
      "topic": {
        "topics": [
          "Error handling"
        ]
      }
    },
    {
      "id": 24,
      "question": "What is the purpose of the Accept header?",
      "options": {
        "A": "Set request format",
        "B": "Accept the request",
        "C": "Enable compression",
        "D": "Specify what response format you want"
      },
      "correct": "D",
      "explanation": "The Accept header tells the server what content types the client can handle in the response.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 25,
      "question": "What does this fetch option do? [CODE]credentials: 'include'[/CODE]",
      "options": {
        "A": "Adds authentication",
        "B": "Includes headers automatically",
        "C": "Includes request body",
        "D": "Sends cookies with the request"
      },
      "correct": "D",
      "explanation": "credentials: 'include' tells fetch to send cookies and authentication headers with cross-origin requests.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 26,
      "question": "How do you make multiple fetch requests in parallel?",
      "options": {
        "A": "Use a for loop with await",
        "B": "Use await in sequence",
        "C": "Use fetch.parallel()",
        "D": "Use Promise.all()"
      },
      "correct": "D",
      "explanation": "Promise.all() allows you to wait for multiple fetch requests to complete in parallel.",
      "topic": {
        "topics": [
          "Async patterns"
        ]
      }
    },
    {
      "id": 27,
      "question": "What is a common mistake when using response.json()?",
      "options": {
        "A": "Forgetting it returns a Promise",
        "B": "Using it on non-JSON responses",
        "C": "Not calling it as a function",
        "D": "All of the above"
      },
      "correct": "D",
      "explanation": "Common mistakes include: forgetting to await response.json(), using it on non-JSON data, and trying to access it as a property instead of calling it as a method.",
      "topic": {
        "topics": [
          "JSON handling"
        ]
      }
    },
    {
      "id": 28,
      "question": "What does a 400 status code mean?",
      "options": {
        "A": "Server error",
        "B": "Not found",
        "C": "Unauthorized",
        "D": "Bad request"
      },
      "correct": "D",
      "explanation": "HTTP 400 means the server couldn't understand the request due to invalid syntax, often due to missing or malformed data.",
      "topic": {
        "topics": [
          "HTTP status codes"
        ]
      }
    },
    {
      "id": 29,
      "question": "How do you cancel a fetch request?",
      "options": {
        "A": "It cannot be cancelled",
        "B": "Call fetch.cancel()",
        "C": "Set a timeout",
        "D": "Use AbortController"
      },
      "correct": "D",
      "explanation": "AbortController allows you to cancel fetch requests by passing an AbortSignal to the fetch options.",
      "topic": {
        "topics": [
          "Request options"
        ]
      }
    },
    {
      "id": 30,
      "question": "What is the main advantage of using fetch over older XMLHttpRequest?",
      "options": {
        "A": "Works in older browsers",
        "B": "Better performance",
        "C": "More features",
        "D": "Cleaner Promise-based API"
      },
      "correct": "D",
      "explanation": "fetch provides a modern, Promise-based API that's easier to use and chain compared to the callback-based XMLHttpRequest.",
      "topic": {
        "topics": [
          "Fetch basics"
        ]
      }
    }
  ]
}
