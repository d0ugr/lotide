const countLetters = require("../countLetters");

console.log("\ncountLetters\n");

const testString = "lighthouse in the house";
console.log(countLetters(testString));
console.log(testString);

console.log(countLetters(""));
console.log(countLetters("123"));
console.log(countLetters("123233"));
console.log(countLetters("Word to Snuffy"));
