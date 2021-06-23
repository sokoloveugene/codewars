// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

const test = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const test = ["eat"];

var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = word.split("").sort().join("");

    if (map.has(key)) {
      const prev = map.get(key);
      map.set(key, [...prev, word]);
    } else {
      map.set(key, [word]);
    }
  }

  return [...map.values()];
};

const res = groupAnagrams(test);
console.log(res);
