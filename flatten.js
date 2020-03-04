const eqArrays = function(array1, array2) {

  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;

};

const assertArraysEqual = function(actual, expected) {

  // +++ and --- used for fonts without emojis:
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ +++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${actual} !== ${expected}`);
  }

};

const flatten = function(array) {

  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;

};

assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1]), [1]);
assertArraysEqual(flatten([[1]]), [1]);
assertArraysEqual(flatten([1, 2]), [1, 2]);
assertArraysEqual(flatten([[1, 2]]), [1, 2]);
assertArraysEqual(flatten([[1, 2], 3]), [1, 2, 3]);
assertArraysEqual(flatten(["1"]), ["1"]);
assertArraysEqual(flatten([["1"]]), ["1"]);
assertArraysEqual(flatten(["1", "2"]), ["1", "2"]);
assertArraysEqual(flatten([["1", "2"]]), ["1", "2"]);
assertArraysEqual(flatten([["1", "2"], "3"]), ["1", "2", "3"]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, [4, 5, 6], 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(flatten([1, "2", 3, [4, "5", "6"], 7, "8", 9]), [1, "2", 3, 4, "5", "6", 7, "8", 9]);
// Expected failure:
assertArraysEqual(flatten([1, 2, [3, [4, 5], 6], 7, 8, 9]), [1, 2, 3, [4, 5], 6, 7, 8, 9]);
assertArraysEqual(flatten([1, [2, [3, [4, 5], 6], 7, 8], 9]), [1, 2, [3, [4, 5], 6], 7, 8, 9]);
