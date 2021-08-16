// Method1: O(n^2)...using 2 loops

//Method2:
//Function to check whether there is a subarray present with 0-sum or not.
// Time: O(n)
// Space: O(n)
// If we add something in a number it should increase, but after adding no
// if same no comes again it means subarray in making 0
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

let arr = [4, 2, -3, 1, 6];
console.log(subArrayExists(arr, arr.length));
