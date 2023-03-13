const sumAll = function(a, b) {
  const isPositiveInt = int => {
    return Number.isInteger(int) && int > 0;
  }
  if (!isPositiveInt(a) || !isPositiveInt(b)) {
    return 'ERROR'
  }
  firstInt = Math.min(a, b);
  secondInt = Math.max(a, b);
  var sum = 0;
  for (let i = firstInt; i <= secondInt; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
