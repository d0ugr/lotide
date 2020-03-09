const assert          = require("chai").assert;
const assertEqual     = require("../assertEqual");
const tail            = require("../tail");

describe("#tail", () => {

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  it("returns \"Labs\"", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  const result = tail(["Hello", "Lighthouse", "Labs"]);

  it("returns two elements", () => {
    assert(result.length, 2);
  });

  it("returns \"Lighthouse\"", () => {
    assert(result[0], "Lighthouse");
  });

  it("returns \"Labs\"", () => {
    assert(result[1], "Labs");
  });

  it("returns \"Lighthouse Labs\"", () => {
    assert(result[0] + " " + result[1], "Lighthouse Labs");
  });

  const result2 = tail(["Ignore", "1", 2, 568.3]);

  it("returns three elements", () => {
    assert(result2.length, 3);
  });

  it("first element is \"1\"", () => {
    assert(result2[0], "1");
  });

  it("first element is 2", () => {
    assert(result2[1], 2);
  });

  it("second element is 568.3", () => {
    assert(result2[2], 568.3);
  });

});
