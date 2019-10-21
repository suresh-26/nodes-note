var obj = {
name: 'Suresh'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);

console.log(stringObj);


var perString = '{"name":"suresh"}';
var perObj = JSON.parse(perString);
console.log(perObj.name);


const fs = require('fs');
var originalNote = {
  title: 'title msg',
  body: 'msg body'
};

var orgNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', orgNoteString);

var noteString = fs.readFileSync('note.json');

console.log(noteString);
console.log(JSON.parse(noteString));
