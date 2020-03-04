const assertEqual = function(actual, expected) {

  // +++ and --- used for fonts without emojis:
  if (actual === expected) {
    console.log(`✅✅✅ +++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2) {

  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;

};

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays([1], []), false);
assertEqual(eqArrays([1], ["1"]), false);
assertEqual(eqArrays([], [1, 2, 3]), false);
assertEqual(eqArrays([1], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([], [[]]), false);
assertEqual(eqArrays([[]], [[]]), false);
assertEqual(eqArrays([[]], [[], []]), false);
assertEqual(eqArrays([1], [[]]), false);
assertEqual(eqArrays([1], [[], []]), false);
assertEqual(eqArrays([1, 2], [[], []]), false);
assertEqual(eqArrays([], [{}]), false);
assertEqual(eqArrays([{}], []), false);
assertEqual(eqArrays([{}], [{}]), false);
assertEqual(eqArrays([{}], [{}, {}]), false);
