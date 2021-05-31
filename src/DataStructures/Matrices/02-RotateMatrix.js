function spiralPrint(m, n, arr) {
  // m ending row index
  // row starting row index
  // n ending column index
  // colstarting column index
  // i iterator

  let row = 0;
  let col = 0;
  let i;
  let prev, curr;

  while (row < m && col < n) {
    if (row + 1 === m || col + 1 === n) {
      break;
    }

    prev = arr[row + 1][col];
    // Print Top row
    for (i = col; i < n; i++) {
      curr = arr[row][i];
      arr[row][i] = prev;
      prev = curr;
      //   console.log(arr[row][i]);
    }
    row++;

    // Print Last column
    for (i = row; i < m; i++) {
      curr = arr[i][n - 1];
      arr[i][n - 1] = prev;
      prev = curr;
      //   console.log(arr[i][n - 1]);
    }
    n--;

    // Print Bottom Row
    if (row < m) {
      for (i = n - 1; i >= col; i--) {
        curr = arr[m - 1][i];
        arr[m - 1][i] = prev;
        prev = curr;
        // console.log(arr[m - 1][i]);
      }
      m--;
    }
    // Print left column
    if (col < n) {
      for (i = m - 1; i >= row; i--) {
        curr = arr[i][col];
        arr[i][col] = prev;
        prev = curr;
        // console.log(arr[i][col]);
      }
      col++;
    }
  }
}

// function call
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let r = arr.length;
let c = arr[0].length;

spiralPrint(r, c, arr);
console.log("After Rotation:", arr);
