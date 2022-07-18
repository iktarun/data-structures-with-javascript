// Example to support all data type
// https://codesandbox.io/s/geh2x?file=/src/index.js:0-1452

function spiralPrint(m, n, arr) {
  // m ending row index
  // row starting row index
  // n ending column index
  // col starting column index
  // i iterator

  let row = 0;
  let col = 0;
  let i;

  while (row < m && col < n) {
    // Print Top row
    for (i = col; i < n; i++) {
      console.log(arr[row][i]);
    }
    row++;

    // Print Last column
    for (i = row; i < m; i++) {
      console.log(arr[i][n - 1]);
    }
    n--;

    // Print Bottom Row
    if (row < m) {
      for (i = n - 1; i >= col; i--) {
        console.log(arr[m - 1][i]);
      }
      m--;
    }

    // Print left column
    if (col < n) {
      for (i = m - 1; i >= row; i--) {
        console.log(arr[i][col]);
      }
      col++;
    }
  }
}

// function call
let arr = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];
let r = arr.length;
let c = arr[0].length;

spiralPrint(r, c, arr);
