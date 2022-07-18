function firstRepeated(arr, n) {
  let hash = {};
  let min = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (hash[arr[i]]) {
      min = i;
    } else {
      hash[arr[i]] = arr[i].toString();
    }
    // console.log("hash", i, hash, "min:", min);
  }
  //   console.log("hash", hash);
  return min;
}

const arr = [2, 0, 0, 1, 4, 6, 0, 7, 1, 7, 7, 7];
const n = arr.length;
const res = firstRepeated(arr, n);
console.log("res:", res);
