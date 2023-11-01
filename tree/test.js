const T = require('./index');

const { Node, Tree } = T;

describe('Node', () => {
  it('should be a constructor', () => {
    expect(typeof Node.prototype.constructor).toBe('function');
  });

  it('should have a data and children properties', () => {
    const n = new Node('a');
    expect(n.data).toMatch(/a/);
    expect(n.children.length).toBe(0);
  });

  it('should add children', () => {
    const node = new Node(1);
    node.add(10);
    expect(node.children.length).toBe(1);
    expect(node.children[0]).toMatchObject({
      data: 10,
      children: [],
    });
  });

  it('should remove children', () => {
    const node = new Node('a');
    node.add('b');
    expect(node.children.length).toBe(1);
    node.remove('b');
    expect(node.children.length).toBe(0);
  });
});

describe('Tree', () => {
  it('should start empty', () => {
    const tree = new Tree();
    expect(tree.root).toEqual(null);
  });

  it('can traverse BF', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.traverseBF((node) => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  it('can traverse DF', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('d');
    t.root.children[0].add('c');

    t.traverseDF((node) => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });
});
