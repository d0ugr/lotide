const tail = function(array) {

  return array.slice(1);

};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`+++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`--- Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
console.log(tail([1, 2, 3]));
console.log(tail([123]));
console.log(tail([]));

/*
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
*/

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[0] + " " + result[1], "Lighthouse Labs"); // ensure first element is "Lighthouse"

const result2 = tail(["Ignore", "1", 2, 568.3]);
assertEqual(result2.length, 3); // ensure we get back two elements
assertEqual(result2[0], "1"); // ensure first element is "Lighthouse"
assertEqual(result2[1], 2); // ensure second element is "Labs"
assertEqual(result2[2], 568.3); // ensure second element is "Labs"
