const { Tree, isSymmetric } = require('../../src/btree/lesson1.js');

test('Tree', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3]);
  expect(isSymmetric(root)).toBe(true);
});
