//User function Template for javascript

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

console.log(minJumps([2, 2, 3, 2, 6, 7], 6));
