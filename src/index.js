import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => {
  console.log("Server listening at port: 3000");
});
