// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// var plusOne = function (digits) {
//   const numToStr = BigInt(digits.join("")) + BigInt(1);
//   return numToStr.toString().split("").map(s => +s);
// };

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

const res = plusOne([9, 9, 9, 9]);
console.log(res);
