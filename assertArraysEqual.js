const eqArrays = function(array1, array2) {

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

assertArraysEqual([], []);
assertArraysEqual([1], [1]);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([""], [""]);
assertArraysEqual(["1"], ["1"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["test"], ["test"]);
assertArraysEqual(["word", "to", "big", "bird"], ["word", "to", "big", "bird"]);

assertArraysEqual([], [1]);
assertArraysEqual([1], []);
assertArraysEqual([1], [1, 2]);
assertArraysEqual([1], [1, 2, 3]);
assertArraysEqual([1, 2], []);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual(["1"], ["1", "2"]);
assertArraysEqual(["1"], ["1", "2", "3"]);
