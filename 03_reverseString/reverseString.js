const reverseString = function(string) {
  let numChars = string.length;
  let newString = '';
  let letter;
  for (let i = 0; i < numChars; i++) {
    letter = string.charAt(numChars - 1 - i);
    newString += letter;
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
