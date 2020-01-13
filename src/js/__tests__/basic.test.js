import sum from '../basic';

// eslint-disable-next-line no-undef
test('should sum', () => {
  const result = sum([1, 2, 3]);

  // eslint-disable-next-line no-undef
  expect(result).toBe(6);
});
