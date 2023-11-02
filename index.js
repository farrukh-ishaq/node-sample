const { writeFile } = require('./fileWriter.js');


console.log('write start');

const fileName = 'note.txt';
const data = 'I am writing this to file.';

writeFile(fileName, data);

console.log('write end');
