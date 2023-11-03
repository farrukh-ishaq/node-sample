const fs = require('fs')

/**
 * Use of Node fs module
 *
 * @param {string} fileName - name of txt file.
 * @param {string} data - content of this file
 *
 * @returns {void} fileName.txt - text file.
 */
const writeFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data);
}

/**
 * Use the Node fs module to append data to a file.
 *
 * @param {string} fileName - The name of the text file.
 * @param {string} data - The content to be appended to the file.
 * @param {Object} [option] - (Optional) An object with options for appending data.
 *
 * @returns {void} fileName.txt - text file.
 */
const appendToFile = (fileName, data, option) => {
    if (option) {
        return fs.appendFileSync(fileName, data, option)
    }
    return fs.appendFileSync(fileName, data)
}


// export these function so these can be consumed outside of this file.
module.exports = { writeFile, appendToFile }
