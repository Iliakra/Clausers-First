let massive = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
];

function findBy (name, value) {
if (name = value) {
  return true
}
} 

let finder = findBy('name','урон');
let results = massive.filter(finder);

console.log(results); 