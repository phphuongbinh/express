//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

let userIsAuthorized = false;

function passwordCheck(req, res, next) {
  const password = req.body.password;
  console.log(password);
  if (password === "ILoveProgramming") {
    userIsAuthorized = true;
  }
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(userIsAuthorized);
  if (userIsAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    console.log("false");
  }
});
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
