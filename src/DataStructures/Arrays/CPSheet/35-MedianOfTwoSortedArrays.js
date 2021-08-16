/**
 * Time Complexity: O(n)
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
//Explanation https://www.geeksforgeeks.org/median-of-two-sorted-arrays/
function medianOfTwoSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let count = 0;
  let n = arr1.length;
  let m1 = -1;
  let m2 = -1;
  for (count = 0; count <= n; count++) {
    if (i === n) {
      m1 = m2;
      m2 = arr2[0];
      break;
    } else if (j === n) {
      m1 = m2;
      m2 = arr1[0];
      break;
    }

    if (arr1[i] <= arr2[j]) {
      m1 = m2;
      m2 = arr1[i];
      i++;
    } else {
      m1 = m2;
      m2 = arr2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
}

var ar1 = [1, 2, 3, 4, 5];
var ar2 = [7, 13, 17, 30, 45];

console.log(medianOfTwoSortedArrays(ar1, ar2));
