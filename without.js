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

const without = function(source, itemsToRemove) {

  let result = [];

  for (i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      result.push(source[i]);
    }
  }

  return result;

};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([], []), []);
assertArraysEqual(without([1], [1]), []);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 1, 1, 2, 2, 3, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 1, 1, 2, 2, 3, 3, 4, 4], [1, 2, 3]), [4, 4]);

assertArraysEqual(without(["1"], [1]), ["1"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "1", 1, "2", 2, 3, 3, "4", "4"], [1, 2, 3]), ["1", "1", "2", "4", "4"]);
assertArraysEqual(without(["1", "1", 1, "2", 2, 3, 3, "4", "4"], ["1", 2, 3]), [1, "2", "4", "4"]);
assertArraysEqual(without(["1", "1", 1, "2", 2, 3, 3, "4", "4"], ["1", 2, "3"]), [1, "2", 3, 3, "4", "4"]);

// Expected failures:
assertArraysEqual(without([[], [], []], [1]), [[], [], []]);
assertArraysEqual(without([[], [], []], [[]]), []);
