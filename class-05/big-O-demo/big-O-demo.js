'use strict';

// n(4)
var nums = [1, 2, 3, 4];

//O(n)
function contains(input, find){
  for(let i = 0; i < input.length; i++){
    if(input[i] === find) return true;
  }
  return false;
};

console.log(contains(nums, 3));
console.log(contains(nums, 8));

// n(5)
var colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  white: '#ffffff',
  black: '#000000'
}

// O(1)
function match(input, find){
  if(input[find]) return true;
  return false;
};

console.log(match(colors, 'red'));
console.log(match(colors, 'orange'));
