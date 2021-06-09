function swap(mat, i, j) {
  let temp = mat[i][j];
  mat[i][j] = mat[j][i];
  mat[j][i] = temp;
}
function TransposeMatrix(mat, m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      swap(mat, i, j);
    }
  }

  console.log("Transpose matrix:", mat);
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

TransposeMatrix(mat, 3, 3);
