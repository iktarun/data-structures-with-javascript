// If you want something like this..that has shown in the video
// https://www.youtube.com/watch?v=-FEeaf3ufIE
function DiagonalTraverseMethod1(arr, N) {
  let hash = {};

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (hash[i + j] === undefined) {
        hash[i + j] = [];
        hash[i + j].push(arr[i][j]);
      } else {
        if ((i + j) % 2 !== 0) {
          hash[i + j].push(arr[i][j]);
        } else {
          hash[i + j].unshift(arr[i][j]);
        }
      }
    }
  }

  console.log(hash);
  const tempRes = [];
  for (let key in hash) {
    let res = hash[key];
    for (let i = 0; i < res.length; i++) {
      tempRes.push(res[i]);
    }
  }
  //   console.log(tempRes);
  let res = [];
  let k = 0;
  for (let i = 0; i < N; i++) {
    res[i] = [];
    let tempArr = "";
    for (let j = 0; j < N; j++) {
      tempArr += tempRes[k++] + " ";
    }
    res[i] = tempArr.trim(" ");
  }
  //   let res = [];
  //   let k = 0;
  //   for (let i = 0; i < N; i++) {
  //     res[i] = new Array(N - 1);
  //     for (let j = 0; j < N; j++) {
  //       res[i][j] = tempRes[k++];
  //     }
  //   }

  console.log(res);

  let str = "";
  for (let i = 0; i < 3; i++) {
    str += res[i];
    str += " ";
  }
  console.log(str);
}

function DiagonalTraverseMethod2(arr, N) {
  let hash = {};

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (hash[i + j] === undefined) {
        hash[i + j] = [];
        hash[i + j].push(arr[i][j]);
      } else {
        hash[i + j].push(arr[i][j]);
      }
    }
  }

  //   console.log(hash);

  for (let key in hash) {
    let arr = hash[key];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

let A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// let str = "";
// for (let i = 0; i < 3; i++) {
//   str += A[i];
//   str += " ";
// }
// console.log(str);
let N = 3;

DiagonalTraverseMethod1(A, N);
