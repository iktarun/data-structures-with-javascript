function uniqueRow(arr, n, m) {
  // code here

  let map = new Map();
  let str = "";
  for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < m; j++) {
      str += arr[i][j];
    }
    map.set(str, str);
  }
  console.log(map);

  let res = [];

  for (let item of map.keys()) {
    let str = map.get(item);
    let tempArr = str.split("");
    res = res.concat(tempArr);
  }
  console.log(res);

  let newRows = parseInt(res.length / n);
  let resMat = new Array(newRows);

  for (let i = 0; i < newRows; i++) {
    resMat[i] = new Array(m).fill(0);
  }

  console.log(resMat);

  let k = 0;
  for (let i = 0; i < newRows; i++) {
    for (let j = 0; j < m; j++) {
      resMat[i][j] = res[k++];
    }
  }
  console.log(resMat);

  return resMat;
}

function printArray(res, n, m) {
  let s = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      s += res[i][j] + " ";
    }
    s += "$ ";
  }
  console.log(s);
}

let matrix = [
  [1, 1, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
];
let row = 3,
  col = 4;
let res = uniqueRow(matrix, row, col);

printArray(res, res.length, res[0].length);
