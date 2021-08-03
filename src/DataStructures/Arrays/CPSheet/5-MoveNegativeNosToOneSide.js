// https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/
function modeNegativeNosToOneSide(arr, n) {
  let beg = 0;
  let end = n - 1;

  while (beg < end) {
    if (arr[beg] < 0) {
      beg++;
    } else {
      if (arr[end] < 0) {
        let temp = arr[end];
        arr[end] = arr[beg];
        arr[beg] = temp;
        beg++;
        end--;
      } else {
        end--;
      }
    }
  }

  return arr;
}

function rearrange(arr, n) {
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      if (i != j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(rearrange(arr, arr.length));
