const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");

const notes = getNotes("notes.txt");

console.log(chalk.blue.bold(notes + " " + process.argv[2]));
console.log("Is this a valid email", validator.isEmail("foobar@emsc.com"));
console.log(process.argv);

/* const name = require("./utils");
console.log("app.js is running", name); */
