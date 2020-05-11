const {hasCycle, NodeList} = require('../../src/chain/lesson2');

test('hasCycle:', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9]);
  // 构建一个环
  head.next.next.next.next.next.next = head.next;

  expect(hasCycle(head)).toBe(true);
});


test('hasCycle2:', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9]);
  // head.next.next.next.next.next.next = head.next;

  expect(hasCycle(head)).toBe(false);
});
