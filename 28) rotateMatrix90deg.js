// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// const result = [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11],
// ];

var rotate = function (matrix) {
  const m = matrix.length;

  for (let i = 0; i < m; i++) {
    for (let j = i; j < m; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < m; i++) {
    matrix[i] = matrix[i].reverse();
  }

  return matrix;
};

rotate(matrix);
