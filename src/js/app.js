export default function findBy(prop, value) {
  return (item) => item[prop] === value;
}
