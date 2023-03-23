const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  return array.reduce((previous, current) => previous + current, 0)
};

const multiply = function(array) {
  return array.reduce((previous, current) => previous * current)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function() {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
