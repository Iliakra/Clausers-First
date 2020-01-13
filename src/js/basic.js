export default function sum(items) {
  let result = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    result += item;
  }
  return result;
}
