'use strict';

const fs = require('fs');

const readFileHelper = module.exports = (pathArray, callback) => {
  let result = [];
  fs.readFile(pathArray[0], (err, data) => {
    if(err) return callback(err);
    result.push(data.toString('hex', 0, 8));
    fs.readFile(pathArray[1], (err, data) => {
      if(err) return callback(err);
      result.push(data.toString('hex', 0, 8));
      fs.readFile(pathArray[2], (err, data) => {
        if(err) return callback(err);
        result.push(data.toString('hex', 0, 8));
        callback(null, result)
      });
    });
  });
};
