// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

// var setZeroes = function (matrix) {
//   const xSet = new Set();
//   const ySet = new Set();

//   for (let y = 0; y < matrix.length; y++) {
//     for (let x = 0; x < matrix[y].length; x++) {
//       const el = matrix[y][x];
//       if (el === 0) {
//         ySet.add(y);
//         xSet.add(x);
//       }
//     }
//   }

//   const mutateRow = (rowIdx) => {
//     console.log(rowIdx);
//     matrix[rowIdx].fill(0);
//   };

//   const mutateColumn = (columnIdx) => {
//     matrix.forEach((row) => {
//       row[columnIdx] = 0;
//     });
//   };

//   xSet.forEach((currentValue) => mutateColumn(currentValue));
//   ySet.forEach((currentValue) => mutateRow(currentValue));
// };

var setZeroes = function (matrix) {
  const xArr = [];
  const yArr = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const el = matrix[y][x];
      if (el === 0) {
        yArr[y] = true;
        xArr[x] = true;
      }
    }
  }

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (xArr[x] || yArr[y]) {
        matrix[y][x] = 0;
      }
    }
  }
};

setZeroes(matrix);
