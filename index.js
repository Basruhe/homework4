const express = require("express");
const app = express();
const port = process.env.port || 5432;
const db = require("./db");

app.get =
  ("/", (request, response) => response.send("response to request on 5432!"));

app.listen(port, () => {
  console.log(`Server has started, listening on: ${port}`);
});
