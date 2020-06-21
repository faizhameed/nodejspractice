const notes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const notesFile = notes.getNotes("notes.txt");

/* console.log(chalk.blue.bold(notes + " " + process.argv[2]));
console.log("Is this a valid email", validator.isEmail("foobar@emsc.com"));
console.log(process.argv); */

/* const name = require("./utils");
console.log("app.js is running", name); */
// console.log(process.argv);
yargs.version("1.1.0");

//add,remove read, list
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("running addNOtes");
    notes.addNotes(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => {
    console.log("removing the note");
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list a note",

  handler: () => {
    console.log("list the note");
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => {
    console.log("read the note");
  },
});

console.log(yargs.argv);
