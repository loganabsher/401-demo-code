'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);
  // console.log('my request query', req.url.query);
  // console.log('my request url', req.url);
  // console.log('my request method', req.method);

  if(req.method === 'POST'){
    parseBody(req, (err) => {
      if(err) return console.log(err);
      console.log('POST request body', req.body);
    });
  };
  if(req.method === 'GET' && req.url.pathname === '/cowsay'){
    // console.log('request method', req);
    let params = req.url.query;
    console.log('my params', params);
    res.write(cowsay.say({text: params.text}));
    // res.end();
  };
  res.end();
});

server.listen(PORT, () => {
  console.log('server up at', PORT);
});
