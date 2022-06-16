/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */

//Function to return length of longest subsequence of consecutive integers.
function findLongestConseqSubseq(arr, N) {
  // code here
  let set = new Set(arr);
  let len = 0;

  for (let i = 0; i < N; i++) {
    if (!set.has(arr[i] - 1)) {
      let item = arr[i];
      let tempLen = 1;
      while (set.has(item + 1)) {
        item = item + 1;
        tempLen++;
      }
      len = Math.max(tempLen, len);
    }
  }

  return len;
}

let arr = [2, 6, 1, 9, 4, 5, 3];
let n = 7;

let res = findLongestConseqSubseq(arr, n);
console.log("res:", res);
