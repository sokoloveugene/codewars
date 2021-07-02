// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2

var addDigits = function (num) {
  return ((num - 1) % 9) + 1;
};

addDigits(38);
