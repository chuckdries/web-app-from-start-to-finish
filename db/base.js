const sqlite = require('sqlite');

const dbPromise = sqlite.open('./main.db');

module.exports.dbPromise = dbPromise;