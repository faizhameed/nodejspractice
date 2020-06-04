const fs = require("fs");

const getNotes = (file) => {
  const note = fs.readFileSync(file);
  return note;
};

module.exports = getNotes;
