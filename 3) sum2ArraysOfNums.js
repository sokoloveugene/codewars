// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

const addTwoNumbers = (l1, l2) => {
  const parse = (arr) => +arr.reverse().join("");
  const num1 = parse(l1);
  const num2 = parse(l2);

  const sum = num1 + num2;

  return sum
    .toString()
    .split("")
    .reverse()
    .map((el) => +el);
};

const res = addTwoNumbers(l1, l2);
