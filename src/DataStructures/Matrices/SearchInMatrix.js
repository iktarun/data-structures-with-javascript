function matSearch(matrix, N, M, X) {
  let R = 0;
  let C = M - 1;
  while (R < N && C >= 0) {
    if (matrix[R][C] === X) {
      return 1;
    } else if (X > matrix[R][C]) {
      R++;
    } else {
      C--;
    }
  }
  return 0;
}

let matrix = [
  [1, 2, 13, 13, 22, 28],
  [31, 33, 34, 34, 36, 38],
  [40, 48, 49, 51, 52, 53],
  [55, 56, 59, 60, 60, 60],
  [61, 63, 63, 64, 67, 70],
  [62, 63, 64, 66, 68, 71],
];

let N = 6;

console.log(matSearch(matrix, N, N, 65));
