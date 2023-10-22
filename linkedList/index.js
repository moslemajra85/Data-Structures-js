// Implement a Linkedlist

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      const first = this.head;
      this.head = node;
      node.next = first;
    }
  }

  size() {
    let counter = 0;
    let first = this.head;

    while (first) {
      counter++;
      first = first.next;
    }

    return counter;
  }

  getFirst() {
    // list is empty
    if (!this.head) return null;

    return this.head;
  }

  getLast() {
    // list is empty
    if (!this.head) return null;
    let first = this.head;

    while (first.next) {
      first = first.next;
    }

    return first;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // list is empty
    if (!this.head) throw new Error('List is already empty!');

    this.head = this.head.next;
  }

  removeLast() {
    // list is empty
    if (!this.head) throw new Error('List is already empty!');

    // list has only one node
    if (this.size() === 1) {
      this.head = null;
      return;
    }

    // list is filled with more than one node
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(index) {
    if (index >= this.size() && index < 0)
      throw new RangeError(`index should be between 0-${this.size - 1}`);

    let node = this.head;

    for (let i = 1; i <= index; i++) {
      node = node.next;
    }

    return node;
  }

  removeAt(index) {
    if (index >= this.size() && index < 0)
      throw new RangeError(`index should be between 0-${this.size - 1}`);

    if (!this.head) throw new Error('List is already empty');

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (index >= this.size() && index < 0)
      throw new RangeError(`index should be between 0-${this.size - 1}`);

    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    if (index === this.size() - 1) {
      this.insertLast();
      return;
    }

    const node = new Node(data);
    const previous = this.getAt(index - 1);
    const current = this.getAt(index);
    previous.next = node;
    node.next = current;
  }
}
module.exports = { Node, LinkedList };
