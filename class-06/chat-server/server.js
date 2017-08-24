'use strict';

const net = require('net');
const EE = require('events');
const Client = require('./model/client.js');

const PORT = process.env.PORT || 3000;
const server = net.createServer();
const ee = new EE();

const pool = [];

ee.on('@dm', (client, string) => {
  let nickname = string.split(' ').shift().trim();
  let message = string.split(' ').slice(1).join(' ').trim();
  pool.forEach(c => {
    if(c.nickname === nickname){
      c.socket.write(`${client.nickname}: ${message}`);
    }
  });
});

ee.on('@all', (client, string) => {
  pool.forEach(c => {
    c.socket.write(`${client.nickname}: ${string}`);
  });
});

ee.on('default', (client, string) => {
  client.socket.write('not a command \n');
});

server.on('connection', socket => {
  var client = new Client(socket);
  pool.push(client);
  socket.on('data', data => {
    const command = data.toString().split(' ').shift().trim();
    console.log('command:', command);
    if(command.startsWith('@')){
      ee.emit(command, client, data.toString().split(' ').splice(1).join(' '));
      return;
    }
    ee.emit('default', data.toString());
  });
});

server.listen(PORT, () => {
  console.log('server up', PORT);
});
