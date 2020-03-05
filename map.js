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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;

};

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
