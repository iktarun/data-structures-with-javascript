/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

function maxProduct(arr, n) {
  //code here
  let min = arr[0];
  let max = arr[0];
  let res = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] < 0) {
      let temp = min;
      min = max;
      max = temp;
    }
    //else if(arr[i] === 0){

    //}
    else {
      min = Math.min(min, min * arr[i]);
      max = Math.max(max, max * arr[i]);
    }

    if (res < max) {
      res = max;
    }
  }
  return res;
}

let arr = [2, 3, -2, 1];
console.log(maxProduct(arr, arr.length));
