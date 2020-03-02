function head(array) {

  return array[0];

}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`+++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`--- Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(, );
