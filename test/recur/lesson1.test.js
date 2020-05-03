const { restoreIpAddresses } = require('../../src/recur/lesson1');

test('restoreIpAddresses', () => {
  expect(restoreIpAddresses('172162541')).toEqual([
    '17.216.25.41',
    '17.216.254.1',
    '172.16.25.41',
    '172.16.254.1',
    '172.162.5.41',
    '172.162.54.1',
  ]);
  expect(restoreIpAddresses('010010')).toEqual(['0.10.0.10', '0.100.1.0']);
});
