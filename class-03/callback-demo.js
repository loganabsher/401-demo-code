'use strict';

const someCallback = function(data){
  console.log('got some data:', data);
};

const useCallback = function(callback){
  callback('data that I wanted to get');
};

useCallback(someCallback);



const someCallbackTwo = function(err, data){
  if(err) throw err;
  console.log('got some data:', data);
};

const useCallbackTwo = function(cb){
  cb(null, 'data that I wanted to get');
};

useCallbackTwo(someCallbackTwo);



const someCallbackThree = function(err, data){
  if(err) throw err;
  console.log('got some data:', data);
};

const useCallbackThree = function(cb){
  let sampleError = new Error('some error');
  cb(sampleError, 'the data I wish I got');
};

useCallbackThree(someCallbackThree);
