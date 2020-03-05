const assertEqual = function(actual, expected) {

  // +++ and --- used for fonts without emojis:
  if (actual === expected) {
    console.log(`✅✅✅ +++ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 --- Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = function(object, callback) {

  for (const key in object) {
    if (callback(object[key])) return key;
  }

};

let data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 4 }
};

assertEqual(findKey(data, x => x.stars === 5), undefined);
assertEqual(findKey(data, x => x.stars === 2), "noma");
assertEqual(findKey(data, x => x.stars === 4), "Akelarre");
assertEqual(findKey(data, x => x.stars >= 3), "Akaleri");
