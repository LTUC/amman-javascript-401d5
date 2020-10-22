'use strict';

class Queue {
constructor() {
  this.storage = [];
}
enqueue(item){
  this.storage.push(item)
}
dequeue(){
  return this.storage.shift()
}
peak(){
return this.storage[0];
}
}

module.exports = Queue;