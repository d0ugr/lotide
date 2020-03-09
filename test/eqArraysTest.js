const assert   = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {

  it("[], []", () => {
    assert.isTrue(eqArrays([], []));
  });
  it("[[]], [[]]", () => {
    assert.isTrue(eqArrays([[]], [[]]));
  });
  it("[[[]]], [[[]]]", () => {
    assert.isTrue(eqArrays([[[]]], [[[]]]));
  });
  it("[1], [1]", () => {
    assert.isTrue(eqArrays([1], [1]));
  });
  it("[1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("[], [1]", () => {
    assert.isFalse(eqArrays([], [1]));
  });
  it("[1], []", () => {
    assert.isFalse(eqArrays([1], []));
  });
  it("[1], [\"1\"]", () => {
    assert.isFalse(eqArrays([1], ["1"]));
  });
  it("[], [1, 2, 3]", () => {
    assert.isFalse(eqArrays([], [1, 2, 3]));
  });
  it("[1], [1, 2, 3]", () => {
    assert.isFalse(eqArrays([1], [1, 2, 3]));
  });
  it("[1, 2], [1, 2, 3]", () => {
    assert.isFalse(eqArrays([1, 2], [1, 2, 3]));
  });
  it("[1, 2, 3], [\"1\", \"2\", \"3\"]", () => {
    assert.isFalse(eqArrays([1, 2, 3], ["1", "2", "3"]));
  });
  it("[1, 2, 3], [1, 2, \"3\"]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, "3"]));
  });
  it("[], [[]]", () => {
    assert.isFalse(eqArrays([], [[]]));
  });
  it("[[]], [[], []]", () => {
    assert.isFalse(eqArrays([[]], [[], []]));
  });
  it("[1], [[]]", () => {
    assert.isFalse(eqArrays([1], [[]]));
  });
  it("[1], [[], []]", () => {
    assert.isFalse(eqArrays([1], [[], []]));
  });
  it("[1, 2], [[], []]", () => {
    assert.isFalse(eqArrays([1, 2], [[], []]));
  });
  it("[], [{}]", () => {
    assert.isFalse(eqArrays([], [{}]));
  });
  it("[{}], []", () => {
    assert.isFalse(eqArrays([{}], []));
  });
  it("[{}], [{}]", () => {
    assert.isFalse(eqArrays([{}], [{}]));
  });
  it("[{}], [{}, {}]", () => {
    assert.isFalse(eqArrays([{}], [{}, {}]));
  });

  it("[[[[1]]]], [[[[1]]]]", () => {
    assert.isTrue(eqArrays([[[[1]]]], [[[[1]]]]));
  });
  it("[[[[1, 2]]]], [[[[1, 2]]]]", () => {
    assert.isTrue(eqArrays([[[[1, 2]]]], [[[[1, 2]]]]));
  });
  it("[1, [2, 3], [4]], [1, [2, 3], [4]]", () => {
    assert.isTrue(eqArrays([1, [2, 3], [4]], [1, [2, 3], [4]]));
  });
  it("[1, [2, 3], [4], [], []], [1, [2, 3], [4], [], []]", () => {
    assert.isTrue(eqArrays([1, [2, 3], [4], [], []], [1, [2, 3], [4], [], []]));
  });
  it("[[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("[[2, 3], [4], [5, [6, [7]]]], [[2, 3], [4], [5, [6, [7]]]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4], [5, [6, [7]]]], [[2, 3], [4], [5, [6, [7]]]]));
  });

  it("[[[[1]]]], [[[1]]]", () => {
    assert.isFalse(eqArrays([[[[1]]]], [[[1]]]));
  });
  it("[[[[1, 2]]]], [[[1, 2]]]", () => {
    assert.isFalse(eqArrays([[[[1, 2]]]], [[[1, 2]]]));
  });
  it("[1, [2, 3], [4]], [1, [2, 3]]", () => {
    assert.isFalse(eqArrays([1, [2, 3], [4]], [1, [2, 3]]));
  });
  it("[1, [2, 3], [4], [], []], [1, [2, 3], [4], []]", () => {
    assert.isFalse(eqArrays([1, [2, 3], [4], [], []], [1, [2, 3], [4], []]));
  });
  it("[[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
  it("[[2, 3], [4]], [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
  it("[[2, 3], [4], [5, [6, [7]]]], [[2, 3], [4], [5, [6]]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4], [5, [6, [7]]]], [[2, 3], [4], [5, [6]]]));
  });

});
