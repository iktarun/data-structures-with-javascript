function spiralPrint(m, n, arr) {
  // m ending row index
  // k starting row index
  // n ending column index
  // l starting column index
  // i iterator

  let k = 0;
  let l = 0;
  let i;

  while (k < m && l < n) {
    // Print Top row
    for (i = l; i < n; i++) {
      console.log(arr[k][i]);
    }
    k++;

    // Print Last column
    for (i = k; i < m; i++) {
      console.log(arr[i][n - 1]);
    }
    n--;

    // Print Bottom Row
    if (k < m) {
      for (i = n - 1; i >= l; i--) {
        console.log(arr[m - 1][i]);
      }
      m--;
    }
    // Print left column
    if (l < n) {
      for (i = m - 1; i >= k; i--) {
        console.log(arr[i][l]);
      }
      l++;
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
