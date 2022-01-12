const array = [1, 2, 3];

function forEach(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
}
forEach(array, function (item, index, arr) {
  console.log(item, index);
});
// 1 0
// 2 1
// 3 2

function map(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}
// for (i in array) {
//     newArray.push(callback(array[i], i, array));
//   }
//   return newArray; --- еще 1 вариант
// }

const mapResult = map(array, function (item, index, array) {
  return item * 4;
});

console.log(mapResult); // => [4, 8, 12]

function filter(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    // newArray.push(callback(array[i], i, array));
    let back = callback(array[i], i, array);
    if (back === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
const filterResult = filter(array, (item, index, array) => {
  return item > 1;
});

console.log(filterResult); // => [2, 3]

function reduce(array, callback, initialValue) {}
const reduceResult = reduce(
  array,
  (previous, current, index, array) => {
    return previous + current;
  },
  0
);

console.log(reduceResult); // => 6

function some(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
    if (array[i] !== false) {
      return true;
    }
    return false;
  }

  return newArray;
}

const someResult = some(array, (item, index, array) => {
  return item > 2;
});

console.log(someResult); // => true

const everyResult = every(array, (item, index, array) => {
  return item > 2;
});

console.log(everyResult); // => false
