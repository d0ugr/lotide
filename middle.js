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

const middle = function(array) {

  let midIndex = Math.floor(array.length / 2);
  let result   = [];

  if (array.length >= 3) {
    if (array.length % 2 === 0) {
      result = array.slice(midIndex - 1, midIndex + 1);
    } else {
      result.push(array[midIndex]);
    }
  }

  return result;

};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["test", "blah", "blarg"]), ["blah"]);
assertArraysEqual(middle(["test", "blah", "blarg", "everything is fine"]), ["blah", "blarg"]);
assertArraysEqual(middle(["test", "blah", "blarg", "everything", "is", "fine"]), ["blarg", "everything"]);
