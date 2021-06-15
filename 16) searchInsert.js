// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

const nums = [1, 3, 5, 6];
const target = 2;

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < target) continue;
    return i;
  }
  return nums.length;
};

console.log(searchInsert(nums, target));
