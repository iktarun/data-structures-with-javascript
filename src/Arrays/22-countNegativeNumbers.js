var countNegativesIncreasingArray = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;

  let row = 0;
  let col = colLength - 1;

  let count = 0;

  while (row < rowLength && col >= 0) {
    if (grid[row][col] > 0) {
      col--;
    } else {
      count += col + 1;
      row++;
    }
  }
  return count;
};

const grid1 = [
  [-3, -2, -1, 1],
  [-2, 2, 3, 4],
  [4, 5, 7, 8],
];
const res = countNegativesIncreasingArray(grid1);
console.log(res); //geeks for geeks

// 2nd Input

var countNegativesDecreasingArray = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;

  let row = 0;
  let col = 0;

  let count = 0;

  while (row < rowLength && col < colLength) {
    if (grid[row][col] >= 0) {
      col++;
      if (col === colLength) {
        col = 0;
        row++;
      }
    } else {
      count += colLength - col;
      col = 0;
      row++;
    }
  }
  return count;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

const res1 = countNegativesDecreasingArray(grid);
console.log(res1);
