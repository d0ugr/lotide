const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;

};

const assertArraysEqual = function(actual, expected) {

  // +++ and --- used for fonts without emojis:
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ +++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${actual} !== ${expected}`);
  }

};

const letterPositions = function(sentence) {

  const sentenceNoSpaces = sentence.replace(/ /g, "");
  const results = {};

  for (index in sentenceNoSpaces) {
    if (!results[sentenceNoSpaces[index]]) {
      results[sentenceNoSpaces[index]] = [index];
    } else {
      results[sentenceNoSpaces[index]].push(index);
    }
  }

  return results;

};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
