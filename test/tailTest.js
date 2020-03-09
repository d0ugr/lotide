const assert          = require("chai").assert;
const assertEqual     = require("../assertEqual");
const tail            = require("../tail");

describe("#tail", () => {

  const result = tail(["Hello", "Lighthouse", "Labs"]);

  it("returns two elements", () => {
    assert(result.length, 2);
  });

  it("returns [\"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("first element is \"Lighthouse\"", () => {
    assert(result[0], "Lighthouse");
  });

  it("second element is \"Labs\"", () => {
    assert(result[1], "Labs");
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
