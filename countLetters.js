const assertEqual = function(actual, expected) {

  // +++ and --- used for fonts without emojis:
  if (actual === expected) {
    console.log(`✅✅✅ +++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(inString) {

  let result = {};

  for (letter of inString.replace(/ /g, "")) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }

  return result;

};

const testString = "lighthouse in the house";
console.log(countLetters(testString));
console.log(testString);

console.log(countLetters("Word to Snuffy"));
