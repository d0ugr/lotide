const assertObjectsEqual = require("../assertObjectsEqual");

console.log("\nassertObjectsEqual\n");

assertObjectsEqual({}, {});
assertObjectsEqual({ a: 1 }, { a: 1 });
assertObjectsEqual({ a: [] }, { a: [] });
assertObjectsEqual({ a: [1] }, { a: [1] });
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });
assertObjectsEqual({ c: 3, b: 2, a: 1 }, { a: 1, b: 2, c: 3 });

assertObjectsEqual({ a: [] }, { a: [1] });
assertObjectsEqual({ a: [] }, { b: [] });
assertObjectsEqual({ a: 3, b: 2, c: 1 }, { a: 1, b: 2, c: 3 });
assertObjectsEqual({ c: 1, b: 2, a: 3 }, { a: 1, b: 2, c: 3 });
