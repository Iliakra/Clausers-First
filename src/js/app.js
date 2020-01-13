export default function findBy(name, value) {
  return (item) => item.name === value;
}
