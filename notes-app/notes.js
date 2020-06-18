const fs = require("fs");

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
  const newNote = notes.filter((note) => note.title !== title);
  saveNotes(newNote);
  console.log(`note with the title ${title} is removed`);
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
