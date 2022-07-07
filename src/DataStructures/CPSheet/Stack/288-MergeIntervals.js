// https://youtu.be/2JzRBPFYbKE

// https://www.geeksforgeeks.org/merging-intervals/?ref=gcse
function mergeIntervals(arr) {
  arr.sort((a, b) => a[0] - b[0]);

  let min = arr[0][0];
  let max = arr[0][1];

  let i = 1;
  let res = [];
  while (i < arr.length) {
    // this condition will take care if twi interval are same
    if (arr[i][0] === min && arr[i][1] === max) {
      i++;
      continue;
    }

    if (arr[i][0] >= min && arr[i][0] <= max) {
      //merge
      min = Math.min(min, arr[i][0]);
      max = Math.max(max, arr[i][1]);
    } else {
      // push in res
      res.push([min, max]);
      min = arr[i][0];
      max = arr[i][1];
    }
    i++;
  }
  res.push([min, max]);

  console.log("Resulted arr:", res);
}

let arr = [
  [1, 4],
  [1, 5],
];

/**
 * Edge cases
 * Input
[[1,4],[4,5]]
Output
[[1,4],[4,5]]
Expected
[[1,5]]


2nd case:

if 2 inputs are same
 */
mergeIntervals(arr);
