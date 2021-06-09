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

function ReverseRows(mat, m, n) {
  let rowStartIndex = 0;
  let rowEndIndex = m - 1;

  while (rowStartIndex < rowEndIndex) {
    for (let i = 0; i < n; i++) {
      let temp = mat[rowEndIndex][i];
      mat[rowEndIndex][i] = mat[rowStartIndex][i];
      mat[rowStartIndex][i] = temp;
    }

    rowStartIndex++, rowEndIndex--;
  }
}

function Rotate90DegreeAnticlockWise(mat, m, n) {
  TransposeMatrix(mat, m, n);
  ReverseRows(mat, m, n);
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

Rotate90DegreeAnticlockWise(mat, 3, 3);
console.log(mat);
