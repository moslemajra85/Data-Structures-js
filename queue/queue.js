/**
 * Implement Class Queue that will serve as a blueprint
 * for Queue datastructur.
 */

class Queue {
  constructor() {
    this.data = []; // this is what will hold data
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
