Nodejs- Intro
Nodejs is written with a lot of C++ code. Its a runtime environment. The chrome V8 engine doesn’t understand much of the javascript written the v8 engine Handles this

In the browser, you have access to

Window
Document

Well in the terminal you have access to

Global

To exit from the terminal you can Run
process.exit()

Nodejs is Javascript runtime in the server

Why Should I Learn NodeJS

Nodejs uses an event-driven non-blocking I/O model that makes it light and efficient
It allows user to interact with the browser even though you will be fetching data at the backend

Using a call back we can make it execute fast

How to write a file using NodeJS
We can use the methods specified in docs at nodejs.org

```
const fs = require("fs");
fs.writeFileSync("notes.txt", "this file was created by nodejs");
```

To append the file we can do this:

```
fs.appendFileSync(
 "notes.txt",
 "\nFaiz Hameed is the learner of the course here"
);
```

Now if we create another file
We can require it in our app.js but if we are in need to access the variables in another js file we need to export it. Since the scope is limited to the js file itself

```const name = require("./utils");
console.log("app.js is running", name);
```

We need to export it as

```
const name = "faiz".toUpperCase();

module.exports = name;
```

Getting a input value from cli
To do this we just need to add an extra argument with our app.js
node app.js faiz

Now if we check the value is process.argv its gives us an array of arguments, first value linking to our project url, the 2nd to our app url and the third will be our argument we passed.
We now use this to manipulate our code.’

```
const commandArgs = process.argv[2]
if(commandArgs===’faiz’)
console.log(“hello faiz”)
```

We can do complex parsing using yargs package provided by npmjs.
This allows us to do complex parsing

If you console.log(yargs.argv)

You will get { \_: [], '\$0': 'app.js' }

Now with this if we are passing any args we like `--title=”New APP”` then we get it printed in that new flag

## Different Methods added to yargs command to manipulate the args provided

With yargs you can specify your keywords to run a function when a arg is provide for eg ' add', 'delete' etc.

Here we are showing some examples of `yargs.command` can be used to run commands and provide values:

```
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
    console.log("Add a title:", argv.title);
    console.log("Add a body:", argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",

  handler: () => {
    console.log("removing the note");
  },
});

yargs.command({
  command: "list",
  describe: "lis a note",

  handler: () => {
    console.log("list the note");
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

```
