const path = require("path");
const express = require("express");

const app = express();

// app.com
const staticHtml = path.join(__dirname, "../public");

app.use(express.static(staticHtml));
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index");
});

app.get("", (req, res) => {
  res.send("Hello Faiz");
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Dubai",
    longitude: 24,
    latitude: 32,
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
