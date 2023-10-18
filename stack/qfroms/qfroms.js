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
    if (!this.s1.peek()) throw new Error('Queue is Empty');

    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }

    const record = this.s2.pop();

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return record;
  }

  peek() {
    if (!this.s1.peek()) throw new Error('Queue is Empty');

    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }

    const record = this.s2.peek();

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return record;
  }
}

module.exports = Queue;
