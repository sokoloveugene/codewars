// Given n non-negative integers a1, a2, ..., an ,
// where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let maxArea = 0;

  let leftIdx = 0;
  let rightIdx = height.length - 1;

  let width = height.length - 1;

  while (width > 0) {
    const leftValue = height[leftIdx];
    const rightValue = height[rightIdx];

    const area = Math.min(leftValue, rightValue) * width;

    if (maxArea < area) {
      maxArea = area;
    }

    if (leftValue > rightValue) {
      rightIdx -= 1;
    } else {
      leftIdx += 1;
    }

    width -= 1;
  }

  return maxArea;
};

maxArea(height);
