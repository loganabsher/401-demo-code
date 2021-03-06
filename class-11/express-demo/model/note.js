'use strict';

const uuid4v = require('uuid/v4');
const createError = require('http-errors');
const debug = require('debug')('note:note');
const storage = require('../lib/storage.js');

const Note = module.exports = function(name, content){
  debug('note constructor');

  if(!name) throw new Error('must enter a name');
  if(!content) throw new Error('must enter content');

  this.id = uuid4v();
  this.name = name;
  this.content = content;
};

Note.createNote = function(_note){
  debug('createNote');
  try{
    let note = new Note(_note.name, _note.content);
    return storage.createItem('note', note);
  }catch(err){
    return Promise.reject(err);
  }
};

Note.fetchNote = function(id){
  debug('fetchNote')
  return storage.fetchItem('note', id);
};
