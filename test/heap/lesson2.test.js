const Heap = require('../../src/heap/lesson2');

test('Heap: ', () => {
  let heap = new Heap('chcaa');
  expect(heap.toString()).toMatch(/ccaah|aacch/);
});
