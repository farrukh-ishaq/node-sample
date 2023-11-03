const { writeFile, appendToFile } = require('./utils/fileWriter.js');

const fileName = 'note.txt';
const data = 'I am writing this to file.';


writeFile(fileName, data);
appendToFile(fileName, "\nHello world\n Thanks");
