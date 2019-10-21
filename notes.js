console.log('starting notes file');

module.exports.age = 29;

const fs = require('fs');

var addNote = function(title, body) {
  var notes = [];
  var note = {
    title,
    body
  };
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

module.exports.add = function(a,b){
  return a + b;
}


module.exports = {
  addNote
}
