const Stack = require('./stack');

describe('Stack', () => {
  it('should be a class', () => {
    expect(typeof Stack.prototype.constructor).toEqual('function');
  });

  it('should have a push method', () => {
    const stack = new Stack();
    expect(typeof stack.push).toEqual('function');
  });

  it('should have a pop method', () => {
    const stack = new Stack();
    expect(typeof stack.pop).toEqual('function');
  });
  
  it('should have a peek method', () => {
    const stack = new Stack();
    expect(typeof stack.peek).toEqual('function');
  });

  it('should satisfy the last in first out rule', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
  });

  it('should return the element at the top of the stack when peek method is called', () => {
    stack = new Stack();
    stack.push('Hello');
    stack.push('love');
    stack.push(7);

    expect(stack.pop()).toBe(7);
  });
});
