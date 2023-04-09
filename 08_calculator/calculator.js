const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let output = 0;

  for (i=0; i<arr.length; i++) output += arr[i];

  return output;
};

const multiply = function(arr) {
  let output = arr[0];

  for (i=1; i<arr.length; i++) output *= arr[i];

  return output;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;

  let output = 1;

  for (i=2; i<=num; i++) {
    output *= i;
  }

  return output;
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
