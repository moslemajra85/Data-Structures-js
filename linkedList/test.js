const L = require('./index');

const { Node, LinkedList } = L;
describe('Node', () => {
  it('should be a class', () => {
    expect(typeof Node.prototype.constructor).toBe('function');
  });

  it('should be supplied with two arguments when instanciated', () => {
    const mockConstructor = jest.fn();
    const instance = new mockConstructor(10, 7);

    expect(mockConstructor).toHaveBeenCalledWith(10, 7);
  });
});

describe('Linkned List', () => {
  it('Should be a class', () => {
    expect(typeof LinkedList.prototype.constructor).toBe('function');
  });

  it('shoudl have an insertFirst method that add a new node to beginning of the list', () => {
    const list = new LinkedList();

    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);

    const result = list.head;
    expect(result.data).toBe(3);
  });

  it('shoudl have size method which return the size of the list', () => {
    const list = new LinkedList();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.insertFirst(4);

    expect(list.size()).toBe(4);
  });

  it('should have getFirst method that returns the first node', () => {
    const list = new LinkedList();
    list.insertFirst('a');
    list.insertFirst('b');

    expect(list.getFirst()).toMatchObject({
      data: 'b',
      next: { data: 'a', next: null },
    });
  });

  it('should have getLast method that return the last node', () => {
    const list = new LinkedList();

    list.insertFirst('start');
    list.insertFirst('a');
    list.insertFirst('b');
    list.insertFirst('c');
    list.insertFirst('end');

    expect(list.getLast()).toMatchObject({
      data: 'start',
      next: null,
    });
  });

  it('should have removeLast method that throw an error if the list empty and return the last node otherwise', () => {
    const list = new LinkedList();

    // when the list empty
    expect(() => list.removeFirst()).toThrow();
    expect(list.size()).toBe(0);

    // when the list is filled
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);

    list.removeFirst();
    expect(list.getFirst()).toMatchObject({
      data: 2,
      next: {
        data: 1,
        next: null,
      },
    });
  });

  it('should have a removeLast method that throw error if the list is empty and remove the first node otherwise', () => {
    const list = new LinkedList();

    // when list is empty
    expect(() => list.removeLast()).toThrow();

    // when list is filled
    list.insertFirst(100);
    list.insertFirst(10);
    list.insertFirst(13);
    list.insertFirst(7);

    list.removeLast();

    expect(list.getLast()).toMatchObject({
      data: 10,
      next: null,
    });

    expect(list.size()).toBe(3);
  });

  it('shoud have a insertLast method that append a new node to the list', () => {
    const list = new LinkedList();

    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.insertLast(4);

    expect(list.getLast()).toMatchObject({
      data: 4,
      next: null,
    });
  });

  it('should have a method getAt that return the node at the provide index', () => {
    const list = new LinkedList();

    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);

    expect(() => list.getAt(100).data).toThrow();
    expect(list.getAt(0).data).toBe(1);
    expect(list.getAt(1).data).toBe(2);
    expect(list.getAt(2).data).toBe(3);
    expect(list.getAt(3).data).toBe(4);
  });

  it('shoud have a removeAt method that throw an error if the list empty', () => {
    const list = new LinkedList();

    expect(() => list.removeAt()).toThrow();

    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);

    // remove first node
    list.removeAt(0);
    expect(list.size()).toBe(2);
    expect(list.getFirst().data).toBe(2);

    list.clear();

    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);

    // remove a middle node
    list.removeAt(2);
    expect(list.size()).toBe(3);
    expect(list.getAt(2).data).toBe(4);

    // remove last node (in this case last node is {data: 4, next: null})
    list.removeAt(2);
    expect(list.size()).toBe(2);
    expect(list.getLast().data).toBe(2);

    // give an index outside of the allowed range
    list.clear();

    list.insertLast('a');
    list.insertLast('b');
    list.insertLast('c');
    expect(() => list.removeAt(200)).toThrow();
  });
});

describe('Linked List should have an insertAt method that insert a node anywhere in the list', () => {
  it('inserts a new node with data at the 0 index when the list is empty', () => {
    const l = new LinkedList();
    l.insertAt('hi', 0);
    expect(l.getFirst().data).toEqual('hi');
  });

  it('inserts a new node with data at the 0 index when the LinkedList has elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertAt('hi', 0);
    expect(l.getAt(0).data).toEqual('hi');
    expect(l.getAt(1).data).toEqual('a');
    expect(l.getAt(2).data).toEqual('b');
    expect(l.getAt(3).data).toEqual('c');
  });

  it('inserts a new node with data at a middle index', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
    expect(l.getAt(3).data).toEqual('c');
    expect(l.getAt(4).data).toEqual('d');
  });

  it('inserts a new node with data at a last index', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });

  it('insert a new node when index is out of bounds', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');

    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(() => l.insertAt('hi', 30)).toThrow();
  });
});
