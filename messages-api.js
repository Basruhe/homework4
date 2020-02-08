// assignment 1
const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

// To test with httpie: http :3000/messages
app.get("/messages", (request, response) =>
  response.send("hello from messages-api.js, endpoint /messages!")
);

//Count validation
let requestCount = 0;
const requestCountMiddleware = (request, response, next) => {
  requestCount += 1;
  console.log("Max requests validation called");
  if (requestCount >= 5) {
    console.log(`Current number of requests: ${requestCount}`);
    response.status(429).end();
  } else {
    console.log(`Current number of requests: ${requestCount}`);
    next();
  }
};

//Faulty input validation
let faultyInputValidation = (request, response, next) => {
  console.log("Faulty input validation called");
  if (
    request.body.text ||
    request.body.text.length == "" ||
    request.body.text.length == 0
  ) {
    console.log("Error: your input is either too short or of the wrong type");
    response.status(429).end();
  } else {
    next();
  }
};

// application-level middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(requestCountMiddleware);
// app.use(faultyInputValidation);

// adding POST
app.post("/comments", (request, response, next) => {
  console.log("Request input received and parsed into the following:");
  console.log(request.body);
  response.json({
    message: "Your POST request is received!"
  });
});

app.listen(port, () =>
  console.log(`express server active, listening to port ${port} `)
);

//TODO:
// change faulty input validation. Change logic? or add at router level?
// clean consoles and comments
