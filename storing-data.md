We are storing data as string in the data bases. we need to convert the data into string.

for this we json .stringify function

Now we can store the data with the following ways:

```
const fs = require("fs");

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

const book_json = JSON.stringify(book);

fs.writeFileSync("1-json.json", book_json);

```
