const fs = require("fs");
const chalk = require("chalk");
const getNotes = (file) => {
  const note = fs.readFileSync(file);
  return note;
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  // to avoid saving duplicate notes
  let dupNote = notes.find((note) => note.title === title);
  debugger
  if (dupNote === undefined) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("notes added");
  } else {
    console.log(chalk.red.inverse(`note title already Taken!!`));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNotes = (title) => {
  const notes = loadNotes();
  if (notes.map((a) => a.title).includes(title)) {
    const newNote = notes.filter((note) => note.title !== title);
    saveNotes(newNote);
    console.log(chalk.bgGreen.black(`note with the title ${title} is removed`));
  } else {
    console.log(chalk.bgRed.black(`Sorry no note with the title: ${title}`));
  }
};

const listNotes = () => {
  let notes = loadNotes();
  notes.forEach((note) =>
    console.log(chalk.bgGreen.black.bold(`${note.title} : ${note.body}`))
  );
};

const readNotes = (title) => {
  let notes = loadNotes();
  let targetNote = notes.find((note) => note.title === title);
  if (targetNote !== undefined) {
    console.log(chalk.blue.bgGray(`title: ${targetNote.title}`));
    console.log(`body: ${targetNote.body}`);
  } else {
    console.log(`note not found`);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = JSON.parse(dataBuffer.toString());
    return data;
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
};
