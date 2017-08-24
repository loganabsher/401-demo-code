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
  debug('create note');
  try{
    let note = new Note(_note.name, _note.content);
    return storage.createItem('note', note);
  }catch(err){
    return Promise.reject(err);
  }
};

Note.fetchNote = function(id){
  debug('fetch note')
  return storage.fetchItem('note', id);
};

Note.updateNote = function(id, _note){
  debug('update note');
  return storage.fetchItem('note', id)
  .catch((err) => Promise.reject(createError(404, err.message)))
  .then((item) => {
    for(let prop in note){
      if(prop === 'id') continue;
      if(_note[prop]) note[prop] = _note[prop];
    }
    return storage.createItem('note', note);
  });
};

Note.deleteNote = function(id){
  debug('delete note');
  return storage.deleteItem('note', id);
};

Note.fetchIDs = function(){
  debug('fetch ids');
  return storage.availIDs('note');
};
