// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

const test = "qqw";
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
    } else {
      const setAsArr = [...set];

      if (setAsArr.length > result) {
        result = setAsArr.length;
      }

      const repeatedElIdx = setAsArr.indexOf(s[i]);
      const sliced = setAsArr.slice(repeatedElIdx + 1);

      set.clear();
      sliced.forEach((el) => set.add(el));
      set.add(s[i]);
    }
  }

  if (set.size > result) {
    result = set.size;
  }

  return result;
};

const res = lengthOfLongestSubstring(test);
