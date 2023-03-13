const removeFromArray = function(list, ...args) {
  return list.filter(word => !args.includes(word)); 
};

// Do not edit below this line
module.exports = removeFromArray;
