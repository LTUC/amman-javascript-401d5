'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    /*
    node =  {
        value:value,
        next:null
      }
    */
    if (!this.head) {
      // only if the head is null
      this.head = node;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
}
// const ll = new LinkedList();
// console.log('this is my List:', ll);
// ll.append(4);
// console.log('After Append', ll);
// ll.append(5);
// console.log('After Append', ll);
module.exports = LinkedList;
