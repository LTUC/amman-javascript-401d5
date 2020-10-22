const Stack = require('../stack.js');

describe('Stack',()=>{
let stack;

beforeEach(()=>{
stack = new Stack();
})

it('instintiate a stack',()=>{
  expect(stack instanceof Stack).toBeTruthy();
})

it('peak',()=>{
expect(stack.peak()).toBeNull()
})

it('returns the last element after push',()=>{
  stack.push(1)
  expect(stack.peak()).toEqual(1)
  stack.push(2)
  expect(stack.peak()).toEqual(2)
})

it('peak doesnt alter stack',()=>{
  stack.push(1)
  expect(stack.peak()).toEqual(1)
  expect(stack.peak()).toEqual(1)
})

it('remove last element',()=>{
  stack.push(1);
  stack.push(2);
  const popedItem = stack.pop();
  expect(popedItem).toEqual(2)
  expect(stack.peak()).toEqual(1)
})
it('return null after removing all elements ',()=>{
  stack.push(1);
  stack.push(2);
  stack.pop();
  stack.pop();
  expect(stack.peak()).toBeNull()
})
})