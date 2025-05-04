import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/weather", (req, res) => {});

app.listen(3000, () => {
  console.log("Server listening at port: 3000");
});
