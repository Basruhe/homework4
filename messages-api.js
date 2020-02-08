// assignment 1
//
// 1. Create a new JS file named `messages-api.js`.
// 1. Create an Express app in that file.
// The app should listen for requests on port `3000`.
// Make sure you add the required dependency.
// 1. Add a single endpoint to the app responds to `POST` requests to the `/messages` URI.
// 1. When a request is sent to the endpoint, it should log the `text` property of the body to the console, and it should respond with a JSON object, for example:

//    ```javascript
//    {
//       "message": "This is the message that was sent"
//    }
//    ```

//    In order to parse the JSON body of the request, you will need to add the middleware for it.
// Make sure you add the required dependency.
// 1. Perform the following validation: if the body does NOT have a `text` property or the string is empty, then send a "Bad Request" HTTP status code to the client.
// 1. The API should only log the message five times.

//    After receiving five messages, sixth request should be sent a response that indicates the HTTP status for "Too Many Requests".

//    Make sure the correct HTTP status code is sent (Google it if you haven't seen this status message before).

//    Although there are libraries to implement such limits, do **not** use them! Implement the logic yourself.
// 1. Put the message limit logic from the previous step into a middleware function. It should behave the same.
