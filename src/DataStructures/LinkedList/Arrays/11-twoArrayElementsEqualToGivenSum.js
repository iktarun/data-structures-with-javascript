function hasArrayTwoCandidates(arr, n, x) {
  //code here
  //code here
  let hash = {};
  let result = false;

  //

  for (let i = 0; i < n; i++) {
    let item = x - arr[i];
    if (hash[item]) {
      result = true;
      break;
    } else {
      hash[arr[i]] = arr[i];
    }
  }
  return result;
}
let arr = [1, 6, 3, 5, 9];
let res = hasArrayTwoCandidates(arr, 5, 13);
console.log("res", res);
