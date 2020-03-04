const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;

};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
        if (object1[key] !== object2[key]) return false;
      } else {
        if (!eqArrays(object1[key], object2[key])) return false;
      }
    }
  } else {
    return false;
  }

  return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {

  const inspect = require("util").inspect;

  // +++ and --- used for fonts without emojis:
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ +++ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

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
