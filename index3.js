import express from "express";

const app = express();
const port = 3002;

function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello log");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
