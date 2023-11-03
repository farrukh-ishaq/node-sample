/**
 * This is a validator package on npm
 * @param {string} email - input to be valided.
 *
 * @return {boolean}
 *
 * */
const valid = require('validator');

const emailIsValid = (email) => {
    console.log(valid.default.isEmail(email));
}

module.exports = { emailIsValid }
