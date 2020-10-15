'use strict';

const LL = require('../lib/ll.js');

describe('Linked List', () => {
  it('Constructor()', () => {
    const list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', () => {
    const list = new LL();
    const initValue = 'mahmoud';
    list.append(initValue);
    expect(list.head.value).toEqual(initValue);
    const newValue = 'ahmad';
    list.append(newValue);
    expect(list.head.value).toEqual(initValue);
    console.log('The list', list);
    list.append('Dina');
    expect(list.head.value).toEqual(initValue);
    console.log('The list after adding Dina', list);
    /*
    {
      head:{
        value:'mahmoud',
        next: {
          value:'ahmad',
          next:{
            value:'dina',
            next:null
          }
        }
      }
    }
    */
    let currentNode = list.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    expect(currentNode.next).toBeNull();
  });
});
