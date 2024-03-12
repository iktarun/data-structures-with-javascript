// Method1: O(n^2)...using 2 loops

//Method2:
//Function to check whether there is a subarray present with 0-sum or not.
// Time: O(n)
// Space: O(n)
// If we add something in a number it should increase, but after adding no
// if same no comes again it means, it between there is subarray which is making it 0
function subArrayExists(arr, n) {
  // code here
  let s = 0;
  let map = new Map();
  for (let j = 0; j < n; j++) {
    s = s + arr[j];
    if (s === 0 || map.has(s) || arr[j] === 0) {
      return true;
    } else {
      map.set(s, 1);
    }
  }

  return false;
}

// to find maximum length of sub array having sum 0
function maxSubArrayLen(arr) {
  let hm = new Map();
  hm.set(0, 0);
  let length = -1;
  let cumSum = 0;

  for (let i = 0; i < arr.length; i++) {
    cumSum = cumSum + arr[i];

    if (hm.has(cumSum)) {
      length = Math.max(length, i + 1 - hm.get(cumSum));
    } else if (cumSum === 0) {
      length = Math.max(length, i + 1);
    } else if (arr[i] === 0) {
      length = Math.max(length, 1);
    } else {
      hm.set(cumSum, i + 1);
    }
  }
  return length;
}

// driver code
// let arr = [15, -2, 2, -8, 1, 7, 10, 23];

let arr = [4, 2, -3, 1, 6];
console.log(subArrayExists(arr, arr.length));
console.log("Lenth os max subarray sum is:", maxSubArrayLen(arr));
