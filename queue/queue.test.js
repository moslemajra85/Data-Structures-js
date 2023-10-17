const Queue = require('./queue');
describe('Queue', () => {
  it('Should Identify Queue as class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  it('Can add element to queue', () => {
    const q = new Queue();
    expect(() => q.add(1)).not.toThrow();
  });

  it('Can remove element from queue', () => {
    const q = new Queue();

    expect(() => {
      q.add(1);
      q.remove();
    }).not.toThrow();
  });

  it('maintain the order of elements', () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });
});
