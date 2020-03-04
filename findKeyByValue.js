const assertEqual = function(actual, expected) {

  // +++ and --- used for fonts without emojis:
  if (actual === expected) {
    console.log(`✅✅✅ +++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(searchObject, findValue) {

  for (const key in searchObject) {
    if (searchObject[key] === findValue) {
      return key;
    }
  }

};

const bestTVShowsByGenre = {
  // eslint complains about sci_fi:
  sciFi:                         "The Expanse",
  comedy:                        "Brooklyn Nine-Nine",
  drama:                         "The Wire",
  methProduction:                "Breaking Bad",
  mindControl:                   "The Path",
  chickensThatMeowDocumentaries: ""
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "methProduction");
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), "chickensThatMeowDocumentaries");

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "the path"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "1820992 nhd932dhx8b  4gqfg4u3k, 9 \"go9oohceho9cewbgouc42 iul\""), undefined);
