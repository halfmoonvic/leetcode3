const { Tree, Node } = require('../../src/btree/lesson2.js');

test('Tree1', () => {
  let root = new Tree([2, 1, 3]);
  expect(Tree.isValidBST(root)).toBe(true);
});

test('Tree2', () => {
  let root = new Tree([2]);
  root.left = new Node(3);
  root.right = new Node(1);
  expect(Tree.isValidBST(root)).toBe(false);
});
