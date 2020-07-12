const path = require("path");
const express = require("express");

const app = express();

// app.com
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");

let commonData = {
  title: "Weather App",
  name: "Faiz Hameed",
};

app.get("", (req, res) => {
  res.render("index", commonData);
});

app.get("/about", (req, res) => {
  res.render("about", commonData);
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "This is the help page",
    name: "Faiz Hameed",
    designation: "Full stack Web Developer",
  });
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
