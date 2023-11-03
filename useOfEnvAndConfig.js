
/**
 * There are two files in config folder.
 * It uses config package.
 *
 * to run: follow
 *
 * NODE_ENV=production node index.js will use production.json
 * &
 * node index.js use default.config
 * */
const config = require('config');
const fileConfig = config.get('AppFeature.fileSystem');
console.log("status: " + fileConfig);
