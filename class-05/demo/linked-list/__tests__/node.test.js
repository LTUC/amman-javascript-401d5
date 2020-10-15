'use strict';

const Node = require('../lib/node.js');

describe('Node Class', () => {
  it('constructor()', () => {
    const value = 'some string';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
