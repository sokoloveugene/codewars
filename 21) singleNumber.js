// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity
// and use only constant extra space.

// Input: nums = [2, 2, 1];
// Output: 1;

const nums = [2, 3, 2, 1, 3, 1, 5];

// var singleNumber = function (nums) {
//   const set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (set.has(num)) {
//       set.delete(num);
//     } else {
//       set.add(num);
//     }
//   }

//   return [...set][0];
// };

// [2,3, 2, 1, 3, 1,5]

// var singleNumber = function (nums) {
//   let res = 0;
//   for (let num of nums) {
//     res = res ^ num;
//   }

//   return res;
// };

var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
};

console.log(singleNumber(nums));
