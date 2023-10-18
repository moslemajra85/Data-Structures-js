const Queue = require('./qfroms');
const Stack = require('../stack');

describe('Queue', () => {
  it('should be a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  it('should have an add method', () => {
    const q = new Queue();

    q.add(1);
    q.add(2);

    expect(q.remove()).toBe(1);
  });

  it('shoudl have a remove method', () => {
    const q = new Queue();

    q.add('start');
    q.add(2);
    q.add('end');

    expect(q.remove()).toMatch(/start/);
    expect(q.remove()).toBe(2);
    expect(q.remove()).toMatch(/end/);
  });

  it('shoud have a peek method', () => {
    const q = new Queue();

    q.add('Programming');
    q.add(2);
    q.add(3);
    q.add('Love');

    expect(q.peek()).toMatch(/Programming/);
  });

  it('should throw an error if remove is invoked on an empty queue', () => {
    const q = new Queue();

    expect(() => q.remove()).toThrow();
  });
});
