'use strict';

// 1 - native node modules
// 2 - npm modules
// 3 - custom app modules
// 4 - modules constants
// 5 - module logic(code)

const fs = require('fs');

// do not use dirname in require pathnames
fs.readFile(`${__dirname}/data/data.txt`, (err, data) => {
  if(err) throw err;
  console.log('content of my file:', data.toString());

  fs.writeFile(`${__dirname}/data/new-data.txt`, data, (err, data) => {
    if(err) throw err;
    console.log('write file msg:', 'new file created sucessfully');
  });
});
