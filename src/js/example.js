const array = [1, 2, 3];

forEach(array, function (item, index, arr) {
  console.log(item, index);
});
// 1 0
// 2 1
// 3 2

const mapResult = map(array, function (item, index, array) {
  return item * 4;
});

console.log(mapResult); // => [4, 8, 12]

const filterResult = filter(array, (item, index, array) => {
  return item > 1;
});

console.log(filterResult); // => [2, 3]

const reduceResult = reduce(
  array,
  (previous, current, index, array) => {
    return previous + current;
  },
  0
);

console.log(reduceResult); // => 6

const someResult = some(array, (item, index, array) => {
  return item > 2;
});

console.log(someResult); // => true

const everyResult = every(array, (item, index, array) => {
  return item > 2;
});

console.log(everyResult); // => false
