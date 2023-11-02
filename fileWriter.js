const fs = require('fs')

/**
 * @param fileName: name of txt file.
 * @param data: content of this file
 * */
const writeFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data);
}

module.exports = { writeFile }
