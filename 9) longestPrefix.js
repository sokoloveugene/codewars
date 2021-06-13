// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  const [first, ...rest] = strs;

  let longestPrefix = "";
  let currentPrefix = "";

  const checkRest = (prefix) => rest.every((str) => str.startsWith(prefix));

  for (let i = 0; i < first.length; i++) {
    currentPrefix += first[i];

    const allHave = checkRest(currentPrefix);

    if (allHave) {
      longestPrefix = currentPrefix;
    } else {
      break;
    }
  }

  return longestPrefix;
};

longestCommonPrefix(["flreeze", "flow", "flight"]);
