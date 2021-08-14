//Function to find if there exists a triplet in the
//array A[] which sums up to X.
// Approach 1...using sorting technique, 2 loops
function find3Numbers(a, n, x) {
  a.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      let sum = a[i] + a[l] + a[r];
      if (sum === x) {
        console.log(a[i], a[l], a[r]);
        return true;
      } else if (sum < x) {
        l++;
      } else {
        r--;
      }
    }
  }
  return false;
}

// Approach 2...using 3 loops O(n^3)
/* 
    Approach 3...using O(n^2) and Space O(n)
    Step1: Sort an array
    Step2: Loop from 1 to n anf inside loop from l to r O(n^2)
*/
/* Approach 4...O(nlogn) and Space O(n)
    Step1: Sort an array and store them
    Step2: Loop from 1 to n and inside loop
    single loop l to r...check sum of left and right element with
    stored value = given sum
*/

let n = 6;
let X = 13;
let arr = [1, 111, 45, 6, 10, 8];

console.log(find3Numbers(arr, n, X));
