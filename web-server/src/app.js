const express = require("express");

const app = express();

// app.com

app.get("", (req, res) => {
  res.send("Hello Faiz");
});
app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/weather", (req, res) => {
  res.send("About Us");
});

app.get("/help", (req, res) => {
  res.send({
    name: "faiz",
    age: 27,
  });
});

app.listen(3212, () => {
  console.log("server running on port 3212");
});
