//User function Template for javascript
// cosss valley problem same
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

// function minJumps(arr, n) {
//   //code here
//   let steps = 0;
//   let i = 0;

//   while (i < n) {
//     let maxIndex = 0;
//     let max = 0;
//     for (let j = i; j < arr[i]; j++) {
//       if (i + arr[j] >= n - 1) {
//         steps++;
//         return steps;
//       }
//       if (n - i + arr[j] > max) {
//         maxIndex = j;
//         max = arr[j];
//       }
//     }
//     steps++;
//     if (i + arr[maxIndex] >= n - 1) {
//       break;
//     }
//     i = i === 0 ? arr[0] : maxIndex;
//   }
//   return steps;
// }

var minJumps = function (N) {
  let len = N.length - 1,
    curr = -1,
    next = 0,
    ans = 0;
  for (let i = 0; next < len; i++) {
    if (i > curr) ans++, (curr = next);
    next = Math.max(next, N[i] + i);
  }
  return ans;
};

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */
// Need to fix working for some inputs not for all
class Solution {
  minJumps(arr, n) {
    //code here
    let currIndex = 0;
    let steps = 0;

    function getMax(arr, index) {
      let currIndex = index + 1;
      let maxIndex = index + 1;

      while (currIndex <= arr[index] + index) {
        // console.log("getMAx currIndex:", currIndex);
        if (arr[currIndex] + currIndex > maxIndex) {
          maxIndex = currIndex;
        }
        // maxIndex = Math.max(maxIndex, arr[currIndex] + currIndex);
        currIndex++;
      }

      return maxIndex;
    }

    while (true) {
      console.log("currIndex:", currIndex);

      if (arr[currIndex] + currIndex >= n) {
        break;
      }
      steps++;

      //Get max element from the steps range
      const maxIndex = getMax(arr, currIndex);
      console.log("maxIndex:", maxIndex);
      currIndex = maxIndex;
    }
    return steps;
  }
}
let arr = [1, 4, 3, 2, 6, 7]; //[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
console.log(new Solution().minJumps(arr, arr.length));
