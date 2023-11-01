// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const lengthArray = [0];
  const nodeArray = [root, 's'];
 
  while (nodeArray.length > 1) {
    const node = nodeArray.shift();
    if (node !== 's') {
      lengthArray[lengthArray.length - 1]++;
      if (node.children.length) {
        nodeArray.push(...node.children);
      }
    } else {
      nodeArray.push('s');
      lengthArray.push(0);
    }
  }
  return lengthArray;
}

module.exports = levelWidth;
