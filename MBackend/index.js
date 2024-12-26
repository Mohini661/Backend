require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const data = { name: "mohini", age: 26, dist: "navsari" };

app.get("/", (req, res) => {
  res.send("Hello Mohini Patel");
});

app.get("/age", (req, res) => {
  res.send("I am 27 years old");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login your account </h1>");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
