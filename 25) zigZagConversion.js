// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

const str = "PAYPALISHIRING";

function idxMaker(max) {
  let index;
  let direction = "down";

  return () => {
    while (true) {
      if (index === undefined) {
        index = 0;
        return index;
      }

      const isLast = index === max - 1;
      const isFirst = index === 0;

      if (isLast && isFirst) {
        return index;
      }

      if (direction === "up") {
        if (isFirst) {
          direction = "down";
          return ++index;
        }
        return --index;
      }

      if (direction === "down") {
        if (isLast) {
          direction = "up";
          return --index;
        }
        return ++index;
      }
    }
  };
}

var convert = function (s, numRows) {
  const board = Array(numRows).fill("");

  const gen = idxMaker(numRows);

  for (let i = 0; i < s.length; i++) {
    const idx = gen();
    board[idx] = board[idx] + s[i];
  }

  return board.reduce((acc, str) => acc + str);
};

const res = convert(str, 3);
console.log(res);
