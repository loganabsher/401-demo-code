'use strict';

const fs = require('fs');
const EE = require('events');
const ee = new EE();

const files = ['one.txt', 'two.txt', 'three.txt'];

ee.on('fileDone', (data) => {
  if(data) console.log(data.toString());
  if(files.length === 0) return;

  fs.readFile(files.pop(), (err, data) => {
    if(err) console.error(err);
    ee.emit('fileDone', data);
  });
});

ee.emit('fileDone');
