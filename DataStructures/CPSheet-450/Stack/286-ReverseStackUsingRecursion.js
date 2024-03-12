// here to get the data from arr we need Stack operation, here the below example is for arr

let arr = [1, 2, 3, 4, 5];

function reverse(arr, dest, i) {
  if (i == arr.length) {
    return arr[i];
  }
  reverse(arr, dest, i + 1);
  dest.push(arr[i]);
  return dest;
}

let res = reverse(arr, [], 0);
console.log("res", res);
