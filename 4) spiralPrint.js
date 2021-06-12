const createMatrix = (columns, rows) => {
  return new Array(rows).fill("").map(() => new Array(columns).fill(""));
};

const matrix = createMatrix(4, 4);

const fillMatrix = (matrix) => {
  let el = 1;

  const borders = {
    top: 0,
    right: matrix[0].length - 1,
    bottom: matrix.length - 1,
    left: 0,
  };

  const goRight = () => {
    for (let i = borders.left; i <= borders.right; i++) {
      matrix[borders.top][i] = el++;
    }
    borders.top = borders.top + 1;
  };

  const goDown = () => {
    for (let i = borders.top; i <= borders.bottom; i++) {
      matrix[i][borders.right] = el++;
    }
    borders.right = borders.right - 1;
  };

  const goLeft = () => {
    for (let i = borders.right; i >= borders.left; i--) {
      matrix[borders.bottom][i] = el++;
    }
    borders.bottom = borders.bottom - 1;
  };

  const goTop = () => {
    for (let i = borders.bottom; i >= borders.top; i--) {
      matrix[i][borders.left] = el++;
    }
    borders.left = borders.left + 1;
  };

  let direction = "right";

  const map = {
    right: ["down", goRight],
    down: ["left", goDown],
    left: ["top", goLeft],
    top: ["right", goTop],
  };

  while (el <= matrix.length * matrix[0].length) {
    const [newDirection, fn] = map[direction];
    fn();
    direction = newDirection;
  }
};

fillMatrix(matrix);

console.log(matrix);
