console.log('starting app');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();
//console.log(`hello ${user.username} ! your age is ${notes.age}`)
// var res = notes.add(10,5);
const _lodash = require('lodash');

console.log(notes.addNote('some title','body'));

//console.log(process.argv);

// console.log(_lodash.isString('suresh'));
// console.log(_lodash.isString(15));
//
//
// console.log(`new note ${res}`)
// console.log(user.username);
// fs.appendFile('abc2.txt', `hello ${user.username} !`, (e) => {
//   if (e) {
//     console.log("error creating file");
//     throw e;
//   }
// });
