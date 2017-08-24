'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});
const createError = require('http-errors');
const debug = require('debug')('note:storage');

module.exports = exports = {};

exports.createItem = function(schemaName, item){
  debug('create item');
  if(!schemaName) return Promise.reject(createError(400, 'expected schema name'));
  if(!item) return Promise.reject(createError(400, 'expected item'));

  let json = JSON.stringify(item);
  return fs.writeFileProm(`${__dirname}/../data/${schemaName}/${item.id}.json`, json)
  .then(() => item)
  .catch((err) => Promise.reject(err));
};

exports.fetchItem = function(schemaName, id){
  debug('fetch item');
  if(!schemaName) return Promise.reject(createError(400, 'expected schema name'));
  if(!id) return Promise.reject(createError(400, 'expected id'));

  return fs.readFileProm(`${__dirname}/../data/${schemaName}/${id}.json`)
  .then((data) => {
    try{
      let item = JSON.parse(data.toString());
      return item;
    }catch(err){
      return Promise.reject(err);
    };
  })
  .catch((err) => Promise.reject(err));
};

exports.deleteItem = function(schemaName, id){
  debug('delete item');
  if(!schemaName) return Promise.reject(createError(400, 'expected schema name'));
  if(!id) return Promise.reject(createError(400, 'expected id'));

  return fs.unlinkProm(`${__dirname}/../data/${schemaName}/${id}.json`)
  .catch((err) => Promise.reject(createError(404, err.message)));
};

exports.avlilIDs = function(schemaName){
  return fs.readdirProm(`${__dirname}/../data/${schemaName}`)
  .then((files) => files.map((name) => name.split('.json')[0]))
  .catch((err) => Promise.reject(createError(404, err.message)));
};
