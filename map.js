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

let results;

results = map(words, word => word[0]);
console.log(results);
assertArraysEqual(results, ["g", "c", "t", "m", "t"]);

results = map(words, word => word.length);
console.log(results);
assertArraysEqual(results, [6, 7, 2, 5, 3]);

results = map(words, word => "NOPE");
console.log(results);
assertArraysEqual(results, ["NOPE", "NOPE", "NOPE", "NOPE", "NOPE"]);
