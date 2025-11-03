API Endpoints - Multiple Choice App

This project exposes a small Express API for serving assessments.

Recommended (path-style) endpoints

- GET /api/assessments/:language
  - Description: List assessments available for the given language.
  - Example: GET /api/assessments/javascript

- GET /api/assessment/:language/:difficulty/:id
  - Description: Load the full assessment (metadata + questions) for the given language, difficulty and id.
  - Example: GET /api/assessment/javascript/medium/test-1

Notes and backwards compatibility

- The server previously supported a query-style listing endpoint `GET /api/assessments?language=...`. That form has been removed to avoid ambiguity and to make URLs more RESTful.
- For legacy compatibility the server continues to expose a legacy single-assessment route:
  - GET /api/assessment/:difficulty/:id
  - This route looks up assessments in the older non-language folder layout (assessments/:difficulty/:id.js) and will continue to work until all assessments are migrated under language folders.

Recommendation

- Use the path-style endpoints for new clients. They are clearer, easier to cache, and align with the repo layout `assessments/<language>/<difficulty>/<id>.js`.

If you need help migrating existing deployments or adding redirects for older clients, I can add a small migration script or server middleware to translate query-style requests to the new format.
