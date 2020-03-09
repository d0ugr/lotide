const assert          = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {

  let result;

  result = letterPositions("hello");

  it("result -> { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }", () => {
    assert(result, { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
  it("result[\" \"] -> undefined", () => {
    assert.isUndefined(result[" "]);
  });
  it("result.h -> [0]", () => {
    assert(result.h, [0]);
  });
  it("result.e -> [1]", () => {
    assert(result.e, [1]);
  });
  it("result.l -> [2, 3]", () => {
    assert(result.l, [2, 3]);
  });
  it("result.o -> [4]", () => {
    assert(result.o, [4]);
  });

  result = letterPositions("lighthouse in the house");

  it("result[\" \"] -> undefined", () => {
    assert.isUndefined(result[" "]);
  });
  it("result.l -> [0]", () => {
    assert(result.l, [0]);
  });
  it("result.i -> [1, 11])", () => {
    assert(result.i, [1, 11]);
  });
  it("result.g -> [2]", () => {
    assert(result.g, [2]);
  });
  it("result.h -> [3, 5, 15, 18]", () => {
    assert(result.h, [3, 5, 15, 18]);
  });
  it("result.t -> [4, 14]", () => {
    assert(result.t, [4, 14]);
  });
  it("result.o -> [6, 19]", () => {
    assert(result.o, [6, 19]);
  });
  it("result.u -> [7, 20]", () => {
    assert(result.u, [7, 20]);
  });
  it("result.s -> [8, 21]", () => {
    assert(result.s, [8, 21]);
  });
  it("result.e -> [9, 16, 22]", () => {
    assert(result.e, [9, 16, 22]);
  });
  it("result.n -> [12]", () => {
    assert(result.n, [12]);
  });

});
