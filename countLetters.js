const assertEqual = function(actual, expected) {

  // +++ and --- used for fonts without emojis:
  if (actual === expected) {
    console.log(`✅✅✅ +++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(inString) {



};

console.log(countLetters("lighthouse in the house"));
