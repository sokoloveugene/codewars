// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var intToRoman = function (num) {
  const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  const romanNums = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  
  let result = "";

  const findIdx = (x) => {
    for (let i = 0; i < nums.length; i++) {
      const curr = nums[i] || Infinity;
      if (x < curr) return i - 1;
    }

    return nums.length - 1;
  };

  while (num !== 0) {
    const idx = findIdx(num);
    result += romanNums[idx];
    num -= nums[idx];
  }

  return result;
};
