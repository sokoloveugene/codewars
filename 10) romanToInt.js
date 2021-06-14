// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const input = "MCDLXXVI";

var romanToInt = function (s) {
  let result = 0;

  const map = new Map([
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4],
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ]);

  let copy = s;
  let idx = 0;

  while (copy.length) {
    const curr = s[idx];
    const next = s[idx + 1];

    if (map.has(curr + next)) {
      result += map.get(curr + next);
      copy = copy.slice(2);
      idx += 2;
    } else {
      result += map.get(curr);
      copy = copy.slice(1);
      idx += 1;
    }
  }

  return result;
};

romanToInt(input);
