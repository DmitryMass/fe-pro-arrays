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

const mapResult = map(array, function (item, index, array) {
  return item * 4;
});

console.log(mapResult); // => [4, 8, 12]

function filter(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;

  // for (let i = 0; i < array.length; i++) {
  //   // newArray.push(callback(array[i], i, array));
  //   let back = callback(array[i], i, array);
  //   if (back === true) {
  //     newArray.push(array[i]);
  //   }
  // }
  // return newArray;
}
const filterResult = filter(array, (item, index, array) => {
  return item > 1;
});

console.log(filterResult); // => [2, 3]

function reduce(array, callback, initialValue) {
  let result = initialValue;

  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }
  return result;
}
const reduceResult = reduce(
  array,
  (previous, current, index, array) => {
    return previous + current;
  },
  0
);

console.log(reduceResult); // => 6

function some(array, callback) {
  // let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

const someResult = some(array, (item, index, array) => {
  return item > 2;
});

console.log(someResult); // => true

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let back = callback(array[i], i, array);
    if (back === false) {
      return false;
    }
  }
  return true;
}

const everyResult = every(array, (item, index, array) => {
  return item > 2;
});

console.log(everyResult); // => false
