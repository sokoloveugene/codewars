// Input: s = "()[]{}"
// Output: true

const input = "()[]{)";

var isValid = function (s) {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (map.has(letter)) {
      stack.push(letter);
    } else {
      const last = stack[stack.length - 1];

      map.get(last) === letter ? stack.pop() : stack.push(letter);
    }
  }

  return stack.length === 0;
};

console.log(isValid(input));
