'use strict';

const fs = require('fs');

const fileReader = module.exports = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if(err) return callback(err);
    return callback(null, data.toString());
  });
};
