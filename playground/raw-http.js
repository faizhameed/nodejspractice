const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=37a0e1a544688e07b8b42f50d6314e15&query=${78},${45}&units=m";

const request = http.request(url, (response) => {
  let data = "";
  // we have to listen for individual chunks to come in
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", () => {
  console.log("An Error", error);
});

request.end();
