function isProduct(arr, n, x) {
  //code here

  if (n < 2) {
    return false;
  }

  let hash = {};
  let res = false;
  for (let i = 0; i < n; i++) {
    hash[arr[i]] = arr[i];
  }

  for (let i = 0; i < n; i++) {
    if (hash[x / arr[i]]) {
      res = true;
      break;
    }
  }
  return res;
}

const arr = [-3, 4, 6, -9];
const res = isProduct(arr, arr.length, -27);

console.log("res", res);
