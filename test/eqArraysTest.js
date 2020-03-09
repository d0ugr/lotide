const assertEqual = require("../assertEqual");
const eqArrays    = require("../eqArrays");

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
