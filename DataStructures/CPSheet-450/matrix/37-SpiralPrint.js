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


function spiralPrint2(B, R, arr){

let L=0;
let T=0;
let i;
while(L < R && T < B){
  console.log("Top Row");
  for(i=L; i< R; i++){
    console.log(arr[T][i])
  }
  T++;
  console.log("Top", T)

  console.log("Right Column");
  for(i=T; i< B; i++){
    console.log(arr[i][R-1])
  }
  
  R--;
  console.log("Right", R)

  if(R > L){
    console.log("Bottom Row");
    for(i=R-1; i>= L; i--){
      console.log(arr[B-1][i])
    }
    B--;
    console.log("Bottom", B)
  }
 
  if(B > T){
    console.log("Left Column");
    for(i=B-1; i>= T; i--){
      console.log(arr[i][L])
    }
    L++;
    console.log("Left", L)
  }
  
}

}

// function call
let arr = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
];
let r = arr.length;
let c = arr[0].length;

// spiralPrint(r, c, arr);
spiralPrint2(r,c, arr)
