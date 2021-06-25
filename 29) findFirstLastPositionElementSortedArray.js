// Input: (nums = [5, 7, 7, 8, 8, 10]), (target = 8);
// Output: [3, 4];

const test = [5, 7, 7, 8, 8, 10];
const target = 8;

// var searchRange = function (nums, target) {
//   return [nums.indexOf(target), nums.lastIndexOf(target)]
// };

// faster method
var searchRange = function (nums, target) {
  let resL;
  let resR;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === target) {
      resL = i;
      break;
    }
  }

  if (resL === undefined) return [-1, -1];

  for (let j = nums.length - 1; j > resL; j--) {
    const num = nums[j];

    if (num === target) {
      resR = j;
      break;
    }
  }

  return [resL, resR || resL];
};

const res = searchRange(test, target);

console.log(res);
