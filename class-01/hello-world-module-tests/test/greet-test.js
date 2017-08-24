'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#sayHey', function(){
    it('should return hey Logan!', function(){
      var result = greet.sayHey('Logan');
      assert.ok(result === 'hey Logan!', 'not equal to hey Logan!');
    });
    it('should throw a missing name error', function(){
      assert.throws(function(){
        greet.sayHey();
      }, 'error not thrown');
    });
  });

  describe('#sayBye', function(){
    it('should return see ya later!', function(){
      var bye = greet.sayBye();
      assert.ok(bye === 'see ya later!', 'not equal to see ya later')
    });
  });
});
