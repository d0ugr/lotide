const findKeyByValue = function(searchObject, findValue) {

  for (const key in searchObject) {
    if (searchObject[key] === findValue) {
      return key;
    }
  }

};

module.exports = findKeyByValue;
