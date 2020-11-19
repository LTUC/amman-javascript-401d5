class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this.head;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    console.log(sumCharCode);
    // we need to * by a prime number
    // we need to % size to stay in bound
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  set(key, value) {
    // we need an index to put the value at
    const index = this.hash(key);

    // we need to check if there is already a value at index
    if (!this.storage[index]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[index] = ll;
    } else {
      // we already have a value at this index
      this.storage[index].prepend({ [key]: value });
    }
  }
}

const hashmap = new HashMap(4000);
hashmap.set('name', 'mahmoud');
hashmap.set('one', 'thing');
hashmap.set('eno', '1');
hashmap.set('neo', '2');
hashmap.set('this', 'nothing');
console.log(hashmap.storage);
