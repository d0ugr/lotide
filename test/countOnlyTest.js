const assert    = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it("result[\"Jason\"] === 1", () => {
    assert.strictEqual(result["Jason"], 1);
  });
  it("result[\"Karima\"] === undefined", () => {
    assert.isUndefined(result["Karima"]);
  });
  it("result[\"Fang\"] === 2", () => {
    assert.strictEqual(result["Fang"], 2);
  });

});
