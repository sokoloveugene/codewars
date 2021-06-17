// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const results = [];

  const genParenth = (open, close, str) => {
    if (open === close && close === n) {
      results.push(str);
      return;
    }

    if (open < n) {
      genParenth(open + 1, close, str + "(");
    }

    if (open > close && close < n) {
      genParenth(open, close + 1, str + ")");
    }
  };

  genParenth(0, 0, "");

  return results;
};

generateParenthesis(3);
