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
    } else if (typeof array1[i] === "object" && typeof array2[i] === "object") {
      if (!eqObjects(array1[i], array2[i])) return false;
    } else {
      if (array1[i] !== array2[i]) return false;
    }
  }

  return true;

};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
        if (!eqObjects(object1[key], object2[key])) return false;
      } else {
        if (object1[key] !== object2[key]) return false;
      }
    }
  } else {
    return false;
  }

  return true;

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({}, {}), true);
assertEqual(eqObjects({ a: 1, b: [] }, { a: 1, b: [] }), true);

assertEqual(eqObjects({ a: [], b: [] }, { a: 1, b: [] }), false);
assertEqual(eqObjects({ a: 1, b: [] }, { a: [], b: [] }), false);
assertEqual(eqObjects({ a: [1], b: [] }, { a: 1, b: [] }), false);
assertEqual(eqObjects({ a: [], b: [] }, { a: 1, b: [1] }), false);

console.log("W01D5 - Recursive eqObjects");

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: 1 }, b: { y: 2 }, c: { x: 3 } }, { a: { z: 1 }, b: { y: 2 }, c: { x: 3 } }), true);
assertEqual(eqObjects({ a: { z: 1, y: { x: 3 } }, b: 2 }, { a: { z: 1, y: { x: 3 } }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2 }, { a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2, c: { u: 5 } }, { a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2, c: { u: 5 } }), true);

assertEqual(eqObjects({ a: { z: [] }, b: 2 }, { a: { z: [] }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: 1 }, b: { y: [] }, c: { x: 3 } }, { a: { z: 1 }, b: { y: [] }, c: { x: 3 } }), true);
assertEqual(eqObjects({ a: { z: 1, y: { x: [] } }, b: 2 }, { a: { z: 1, y: { x: [] } }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: [], y: { x: 3, w: { v: 4 } } }, b: [] }, { a: { z: [], y: { x: 3, w: { v: 4 } } }, b: [] }), true);
assertEqual(eqObjects({ a: { z: 1, y: { x: 3, w: { v: [] } } }, b: 2, c: { u: [] } }, { a: { z: 1, y: { x: 3, w: { v: [] } } }, b: 2, c: { u: [] } }), true);
assertEqual(eqObjects({ a: { z: 1, y: [{ x: 3, w: { v: [] } }] }, b: 2, c: { u: [] } }, { a: { z: 1, y: [{ x: 3, w: { v: [] } }] }, b: 2, c: { u: [] } }), true);
assertEqual(eqObjects({ a: { z: 1, y: [[[[{ x: 3, w: { v: [] } }]]]] }, b: 2, c: { u: [] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: [] } }]]]] }, b: 2, c: { u: [] } }), true);
assertEqual(eqObjects({ a: { z: 1, y: [[[[{ x: 3, w: { v: [1, 2, 3] } }]]]] }, b: 2, c: { u: [4, 5, 6] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: [1, 2, 3] } }]]]] }, b: 2, c: { u: [4, 5, 6] } }), true);
assertEqual(eqObjects({ a: { z: 1, y: [[[[{ x: 3, w: { v: ["1", "2", "3"] } }]]]] }, b: 2, c: { u: [4, "5", 6] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: ["1", "2", "3"] } }]]]] }, b: 2, c: { u: [4, "5", 6] } }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, {}), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: {} }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { b: {} } }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { b: {}, c: {}, d: {} } }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
