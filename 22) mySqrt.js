// Given a non-negative integer x, compute and
// return the square root of x.

// Since the return type is an integer, the decimal
// digits are truncated, and only the integer part of
// the result is returned.

// Note: You are not allowed to use any built-in exponent
// function or operator, such as pow(x, 0.5) or x ** 0.5.

// Input: x = 8
// Output: 2

var mySqrt = function (x) {
  for (let i = 1; i < Infinity; i++) {
    const checkWith = i * i;

    if (checkWith > x) {
      return i - 1;
    }
  }
};

const res = mySqrt(10);

console.log(res);