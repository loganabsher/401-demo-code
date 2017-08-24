'use strict';

const fs = require('fs');

console.log('dirname', __dirname);
fs.readFile(`${__dirname}/data/data.txt`, (err, data) => {
  if(err) throw err;
  console.log('content of original file:', data.toString());
});
