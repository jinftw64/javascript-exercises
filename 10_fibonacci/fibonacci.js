const fibonacci = function(num) {
  const int = parseInt(num);
  if (int < 1) return 'OOPS';
  if (int === 1 || int === 2) return 1;
  return fibonacci(int - 1) + fibonacci(int - 2);
};

// Do not edit below this line
module.exports = fibonacci;
