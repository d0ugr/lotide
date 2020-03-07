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
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) return false;
    } else {
      if (array1[i] !== array2[i]) return false;
    }
  }

  return true;

};

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([[]], [[]]), true);
assertEqual(eqArrays([[[]]], [[[]]]), true);
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
assertEqual(eqArrays([[]], [[], []]), false);
assertEqual(eqArrays([1], [[]]), false);
assertEqual(eqArrays([1], [[], []]), false);
assertEqual(eqArrays([1, 2], [[], []]), false);
assertEqual(eqArrays([], [{}]), false);
assertEqual(eqArrays([{}], []), false);
assertEqual(eqArrays([{}], [{}]), false);
assertEqual(eqArrays([{}], [{}, {}]), false);

console.log("W01D5 - Recursive eqArrays");

assertEqual(eqArrays([[[[1]]]], [[[[1]]]]), true);
assertEqual(eqArrays([[[[1, 2]]]], [[[[1, 2]]]]), true);
assertEqual(eqArrays([1, [2, 3], [4]], [1, [2, 3], [4]]), true);
assertEqual(eqArrays([1, [2, 3], [4], [], []], [1, [2, 3], [4], [], []]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4], [5, [6, [7]]]], [[2, 3], [4], [5, [6, [7]]]]), true);

assertEqual(eqArrays([[[[1]]]], [[[1]]]), false);
assertEqual(eqArrays([[[[1, 2]]]], [[[1, 2]]]), false);
assertEqual(eqArrays([1, [2, 3], [4]], [1, [2, 3]]), false);
assertEqual(eqArrays([1, [2, 3], [4], [], []], [1, [2, 3], [4], []]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[2, 3], [4], [5, [6, [7]]]], [[2, 3], [4], [5, [6]]]), false);
