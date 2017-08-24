'use strict';

const EE = require('events');
const ee = new EE();

ee.on('name', () => {
  console.log('hello from event land');
});

ee.emit('name');

ee.on('customEvent', () => {
  ee.emit('name');
  console.log('more stuff');
});

ee.emit('customEvent');
