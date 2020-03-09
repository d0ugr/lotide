const letterPositions = function(sentence) {

  let char = "";
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    char = sentence[i];
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }

  return results;

};

module.exports = letterPositions;
