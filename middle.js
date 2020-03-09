const eqArrays          = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {

  let midIndex = Math.floor(array.length / 2);
  let result;

  if (array.length < 3) {
    result = [];
  } else if (array.length % 2 === 0) {
    result = array.slice(midIndex - 1, midIndex + 1);
  } else {
    result = array.slice(midIndex, midIndex);
  }

  return result;

};

module.exports = middle;
