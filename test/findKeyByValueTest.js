const assert         = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    // eslint complains about sci_fi:
    sciFi:                         "The Expanse",
    comedy:                        "Brooklyn Nine-Nine",
    drama:                         "The Wire",
    methProduction:                "Breaking Bad",
    mindControl:                   "The Path",
    chickensThatMeowDocumentaries: ""
  };

  it("The Expanse -> sciFi", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });
  it("The Wire -> drama", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("Breaking Bad -> methProduction", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "methProduction");
  });
  it("\"\" -> chickensThatMeowDocumentaries", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), "chickensThatMeowDocumentaries");
  });

  it("That '70s Show -> undefined", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
  it("the path -> undefined", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "the path"));
  });
  it("1820992 nhd932dhx8b  4gqfg4u3k, 9 \"go9oohceho9cewbgouc42 iul\" -> undefined", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "1820992 nhd932dhx8b  4gqfg4u3k, 9 \"go9oohceho9cewbgouc42 iul\""));
  });

});
