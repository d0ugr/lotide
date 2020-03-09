const assert  = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {

  let data = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 4 }
  };

  it("findKey(data, x => x.stars === 5) === undefined", () => {
    assert.isUndefined(findKey(data, x => x.stars === 5));
  });
  it("findKey(data, x => x.stars === 2) === \"noma\"", () => {
    assert.strictEqual(findKey(data, x => x.stars === 2), "noma");
  });
  it("findKey(data, x => x.stars === 4) === \"Akelarre\"", () => {
    assert.strictEqual(findKey(data, x => x.stars === 4), "Akelarre");
  });
  it("findKey(data, x => x.stars >= 3) === \"Akaleri\"", () => {
    assert.strictEqual(findKey(data, x => x.stars >= 3), "Akaleri");
  });

});
