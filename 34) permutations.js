// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const input = [1, 2, 3];

var permute = function (nums) {
  const res = [];

  const generate = (rest = [], fixed = []) => {
    if (!rest.length) {
      return res.push(fixed);
    }

    for (let i = 0; i < rest.length; i++) {
      const copy = [...rest];

      const fixNum = copy.splice(i, 1);

      generate(copy, [...fixed, fixNum[0]]);
    }
  };

  generate(nums);

  return res;
};

permute(input);
