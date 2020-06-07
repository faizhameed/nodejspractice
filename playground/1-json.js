const fs = require("fs");
/* 
const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

const book_json = JSON.stringify(book);

fs.writeFileSync("1-json.json", book_json); */
// this bascically creates new json file with book-json init

const dataBuffer = fs.readFileSync("1-json.json"); // its a buffer since its not what actually writter inside the function its a buffer

console.log(dataBuffer);
// now to get it back

console.log(dataBuffer.toString());

const data = JSON.parse(dataBuffer.toString());

data.name = "faiz";
data.age = 27;

const newJSONData = JSON.stringify(data);

fs.writeFileSync("1-json.json", newJSONData);
