const assertArraysEqual = require("../assertArraysEqual");
const middle            = require("../middle");

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["test"]), []);
assertArraysEqual(middle(["test", "blah"]), []);
assertArraysEqual(middle(["test", "blah", "blarg"]), ["blah"]);
assertArraysEqual(middle(["test", "blah", "blarg", "everything is fine"]), ["blah", "blarg"]);
assertArraysEqual(middle(["test", "blah", "blarg", "everything", "is", "fine"]), ["blarg", "everything"]);
