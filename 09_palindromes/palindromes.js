const palindromes = function(string) {
  const removeSpaces = string.toLowerCase().replace(/[^a-z]/g, '');
  return removeSpaces == removeSpaces.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
