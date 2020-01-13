import findBy from '../app';

let arr = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
]

test('should return object by name and value', () => {
  let finder = findBy('name', 'урон');
  let results = arr.filter(finder);
  const received = results;
  const expected = [{name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'}];
  expect(received).toEqual(expected);
  
});
