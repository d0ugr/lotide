const countLetters = function(inString) {

  let result = {};

  for (letter of inString.replace(/ /g, "")) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }

  return result;

};

module.exports = countLetters;
