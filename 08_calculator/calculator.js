const add = function(a , b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(array) {
  const total = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return total;
};

const multiply = function(array) {
  const total = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let total = a;
	for (let i = a - 1; i > 1; i --) {
    total *= i;
  }
  return total;
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
