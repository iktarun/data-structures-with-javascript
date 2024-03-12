class Solution {
  // Time Complexity O(N * M)
  merge(arr1, arr2, N, M) {
    //your code here

    let i = 0,
      j = 0;

    while (i < N && j < M) {
      if (arr1[i] > arr2[j]) {
        let temp = arr1[i];
        arr1[i] = arr2[j];
        arr2[j] = temp;
        i++;
        arr2.sort((a, b) => a - b);
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        i++;
      }
    }

    return arr1.concat(arr2);
  }
  /**
   * Using GAP method gap = ceil(N + M)/2
   * Time Complexity O(N * LogN), space O(1)
   */
  merge2(arr1, arr2, N, M) {
    //your code here

    let gap = Math.ceil((N + M) / 2);
    while (gap > 0) {}
  }
}

let obj = new Solution();
let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
console.log(obj.merge(arr1, arr2, 4, 5));
