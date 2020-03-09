const assertArraysEqual = require("../assertArraysEqual");

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
