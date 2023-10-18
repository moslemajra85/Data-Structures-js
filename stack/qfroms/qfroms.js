const Stack = require('../stack');

// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(record) {
    this.s1.push(record);
  }

  remove() {
    // throw an error in cas we are dealing with an empty queue
    if (!this.s1.peek()) throw new Error('Queue is Empty');

    // empty out stack s1 and fill up stack s2
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }

    // remove the first record that has been entered to S1
    const record = this.s2.pop();

    // empty out stack s2 and fill up stack s1
    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return record;
  }

  peek() {
    // throw an error in cas we are dealing with an empty queue
    if (!this.s1.peek()) throw new Error('Queue is Empty');

    // empty out stack s1 and fill up stack s2
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }

    // get the first record that has been entered to S1
    const record = this.s2.peek();

    // empty out stack s2 and fill up stack s1

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return record;
  }
}

module.exports = Queue;
