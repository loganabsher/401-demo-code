'use strict';

let person = {
  name: 'Logan',
  age: '21',
  speak: function(){
    return `${this.name} is ${this.age} years old`
  }
}

console.log('person obj:', person);
console.log('person obj:', person.speak());
console.log('new context:', person.speak.call({name: 'john', age: 45}));
