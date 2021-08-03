// This method will only work, if the arr1 or arr2 will be having unique elements
//Method2 with hashing,simple approach
function doUnionMethod1(a, m, b, n) {
  /* NOTE::: These 2 lines will help to get the result for any input
   */
  a = Array.from(new Set(a)).sort((a, b) => a - b);
  b = Array.from(new Set(b)).sort((a, b) => a - b);
  // code here
  let i = 0;
  let j = 0;
  let result = [];
  m = a.length; // need to re-calculate the length if values are duplicate within the array iteself
  n = b.length;
  while (i < m && j < n) {
    if (a[i] === b[j]) {
      result.push(a[i]);
      i++;
      j++;
    } else if (a[i] < b[j]) {
      result.push(a[i++]);
    } else if (b[j] < a[i]) {
      result.push(b[j++]);
    }
  }

  //copy the remaning elementss
  while (i < m) {
    result.push(a[i++]);
  }
  while (j < n) {
    result.push(b[j++]);
  }
  return result;
}

let arr1 = [85, 25, 1, 32, 54, 99, 6, 1, 32];
let m = arr1.length;

let arr2 = [85, 2, 20, 160];
let n = arr2.length;

console.log(doUnionMethod1(arr1, m, arr2, n));
