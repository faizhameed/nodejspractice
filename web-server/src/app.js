const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.use(express.static(publicDirectoryPath));
app.set("views", viewsPath);
app.set("view engine", "hbs");

hbs.registerPartials(partialsPath);

let commonData = {
  title: "Weather App",
  name: "Faiz Hameed",
};

//setup static directory to serve

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

app.get("/help/*", (req, res) => {
  res.send("help not found");
});

// this is the last
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Faiz Hameed",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
