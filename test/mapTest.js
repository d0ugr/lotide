const assert = require("chai").assert;
const map    = require("../map");

describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it("[\"g\", \"c\", \"t\", \"m\", \"t\"]", () => {
    assert(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });
  it("[6, 7, 2, 5, 3]", () => {
    assert(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });
  it("[\"NOPE\", \"NOPE\", \"NOPE\", \"NOPE\", \"NOPE\"]", () => {
    assert(map(words, word => "NOPE"), ["NOPE", "NOPE", "NOPE", "NOPE", "NOPE"]);
  });

});
