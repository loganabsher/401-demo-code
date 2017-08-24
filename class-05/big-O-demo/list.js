'use strict';

function List(){
  for(let key in arguments){
    this[key] = arguments[key];
  }
  this.length = arguments.length;
}

List.prototype.copy = function(){
  let result = new List();
  for(let key in this){
    result[key] = this[key];
    result.length++;
  }
  return result;
}

List.prototype.push = function(value){
  let result = this.copy();
  result[result.length++] = value;
  return result;
}

List.prototype.forEach = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }
}

// List.prototype.filter = function(callback){
//   let arr = new List();
//   this.forEach((ele, i) => {
//     if(callback(ele)){
//       console.log(ele);
//       arr.push(ele)
//     }
//   });
//   return arr;
// }

List.prototype.filter = function(callback){
  let arr = this.copy();
  for(let key in this){
    if(!callback(this[key])){
      delete arr[key];
      arr.length--;
    }
  }
  return arr;
}
let nums = new List(1, 2, 3, 4, 5, 6);

let test = nums.filter((ele) => {
  console.log(ele);
  return ele > 5;
});
console.log(test);

// console.log('coppied list', nums.copy());
// console.log('push new item', nums.push(6000));
// console.log(nums);
// nums.forEach(function(n){
//   console.log('each thing', n);
// });
