const fs = require("fs");
const chalk = require("chalk");
const getNotes = (file) => {
  const note = fs.readFileSync(file);
  return note;
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  let flag = true;
  // to avoid saving duplicate notes
  notes.forEach((note) => {
    if (note.title === title) {
      flag = false;
    }
  });
  if (flag) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("notes added");
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
};
