'use strict';

class BSTNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(node){
    if(node.value === this.value) return;

    if(node.value < this.value){
      if(!this.left){
        this.left = node;
      }
      this.left.addNode(node);
      return;
    }

    if(!this.right){
      this.right = node;
      return;
    }
    this.right.addNode(node);
  }
}

BSTNode.printBreadth = (node) => {
  let queue = [node];

  while(queue.length){
    let current = queue.shift();
    if(!current) return;

    if(current.left){
      queue.push(current.left);
    }

    if(current.right){
      queue.push(current.right);
    }

    console.log(current.value);
  }
};

BSTNode.findParent = (root) => {
  if(this.value === root.left.value || this.value === root.right.value) return root;
  if(this.value < this.right.value){
    this.findParent(root.left);
  }
  this.findParent(root.right);
};

BSTNode.removeNode = (root) => {
  let parent = this.findParent(root);

};

BSTNode.updateNode = (val, root) => {
  this.removeNode(root);
  this.addNode(val);
};

BSTNode.printInOrder = (node, pad='') => {
  if(!node) return;
  BSTNode.printInOrder(node.left, `left ${pad}`);
  console.log(`${pad}${node.value}`);
  BSTNode.printInOrder(node.right, `right ${pad}`);
};

BSTNode.orderedArray = (node) => {
  if(!node) return;
  let tempArr = [];
  BSTNode.orderedArray(node.left);
  tempArr.push(node.value);
  BSTNode.orderedArray(node.right);
  return tempArr;
};

BSTNode.resructure = (root) => {
  let valArr = BSTNode.orderedArray(root);
  console.log(valArr);
};

let root = new BSTNode(15);
let rootLeft = new BSTNode(7);
let rootRight = new BSTNode(20);
let rootLeftLeft = new BSTNode(3);
let rootLeftRight = new BSTNode(9);
let rootRightLeft = new BSTNode(17);
let rootRightRight = new BSTNode(32);

root.addNode(rootLeft);
root.addNode(rootRight);
root.addNode(rootLeftLeft);
root.addNode(rootLeftRight);
root.addNode(rootRightLeft);
root.addNode(rootRightRight);

BSTNode.printInOrder(root);
