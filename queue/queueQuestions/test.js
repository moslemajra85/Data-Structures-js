const weave = require('./index');
const Queue = require('../queue');

describe('weave', () => {
  it('should be a function', () => {
    expect(typeof weave).toEqual('function');
  });

  it('should return a queue that contains an alternate content of the passed queues', () => {
    const q1 = new Queue();
    const q2 = new Queue();

    q1.add(1);
    q1.add(2);

    q2.add('Hi');
    q2.add('There');
    q2.add('From');
    q2.add('Moslem');

    const result = weave(q1, q2);

    expect(result.remove()).toEqual(1);
    expect(result.remove()).toEqual('Hi');
    expect(result.remove()).toEqual(2);
    expect(result.remove()).toMatch(/There/);
    expect(result.remove()).toMatch(/From/);
    expect(result.remove()).toMatch(/Moslem/);
    expect(result.remove()).toBeUndefined();
  });
});
