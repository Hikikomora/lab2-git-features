const { add, subtract } = require('./math');

test('add returns correct sum', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test('subtract returns correct result', () => {
  expect(subtract(5, 3)).toBe(2);
});
