const nums = [1, 2, 3, 5, 6, 7, 8, 9];

const weight = 10;

const getSumPair = (arr) => {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = weight - nums[i];

    if (hashTable.hasOwnProperty(difference)) {
      return [hashTable[difference], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }
};

console.log(getSumPair(nums)); // [2, 5]
// nums[2] + nums[5] === weight
