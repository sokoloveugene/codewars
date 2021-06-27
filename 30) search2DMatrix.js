// Write an efficient algorithm that searches for a value in an m x n matrix.
// This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// const matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];

const matrix = [];

var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;

  for (let i = matrix.length - 1; i >= 0; i--) {
    const startInt = matrix[i][0];

    if (target >= startInt) {
      return matrix[i].includes(target);
      break;
    }
  }
};

const test = searchMatrix(matrix, 1);

console.log(test);
