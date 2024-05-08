import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body.street + req.body.pet;
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is: </h1><h2>${bandName}</h2>`);
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});
app.put("/user/erauqs", (req, res) => {
  res.sendStatus(200);
});
app.patch("/user/erauqs", (req, res) => {
  res.sendStatus(200);
});
app.delete("/user/erauqs", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
