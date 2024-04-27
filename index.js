import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
