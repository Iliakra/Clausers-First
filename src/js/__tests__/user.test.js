/* eslint-disable no-undef */
import findBy from '../app';

const arr = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

test('should return object by name and value', () => {
  const finder = findBy('type', 'character');
  const results = arr.filter(finder);
  const received = results;
  const expected = [{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }];
  expect(received).toEqual(expected);
});
