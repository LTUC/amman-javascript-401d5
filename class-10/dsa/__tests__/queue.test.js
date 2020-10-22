const Queue = require('../queue.js');


describe('Queue',()=>{
  let queue;
  beforeEach(()=>{
    queue = new Queue()
  })

  it('it instintate a new queue',()=>{
    expect(queue instanceof Queue).toBeTruthy()
  })

  it('implement FIFO',()=>{
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.dequeue()).toEqual(1)
    expect(queue.dequeue()).toEqual(2)
    expect(queue.dequeue()).toEqual(3)
    expect(queue.dequeue()).toEqual(4)
  })
})