// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

const testMe = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

var isValidSudoku = function (board) {
  const checkGroup = (arr) => {
    let isValid = true;
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el === ".") continue;
      if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  // check rows
  for (let i = 0; i < 9; i++) {
    if (!checkGroup(board[i])) return false;
  }

  // check columns
  for (let i = 0; i < 9; i++) {
    const column = board.map((row) => row[i]);
    if (!checkGroup(column)) return false;
  }

  // checkBlocks
  for (let i = 0; i < 3; i++) {
    const rowGroup = board.slice(i * 3, (i + 1) * 3);

    for (let j = 0; j < 3; j++) {
      const group = rowGroup
        .map((rowInGroup) => rowInGroup.slice(j * 3, (j + 1) * 3))
        .flat();

      if (!checkGroup(group)) return false;
    }
  }

  return true;
};

console.log(isValidSudoku(testMe));
