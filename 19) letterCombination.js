// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent.
// Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons)

var letterCombinations = function (digits) {
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const variants = digits.split("").map((d) => map.get(d));

  let result;

  const generator = (arr, strings) => {
    if (strings.length === 0) {
      result = arr;
      return;
    }

    const last = strings.splice(-1, 1)[0];

    if (!arr.length) {
      // first iteration
      arr = last.split("");
    } else {
      let updatedArr = [];

      for (let i = 0; i < last.length; i++) {
        const letter = last[i];
        const mapped = arr.map((existing) => letter + existing);
        updatedArr = [...updatedArr, ...mapped];
      }

      arr = updatedArr;
    }

    generator(arr, strings);
  };

  generator([], variants);

  return result;
};

const res = letterCombinations("23");

console.log(res);
