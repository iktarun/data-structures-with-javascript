// Rearrange array in alternating positive & negative items with O(1) extra space | Set 1
// I/P: Given array is
// -5 -2 5 2 4 7 1 8 0 -8
// O/P: RearrangeD array is
// -5 5 -2 2 -8 4 7 1 8 0
function swap(arr, from, to) {
  let temp = arr[to];
  arr[to] = arr[from];
  arr[from] = temp;
}

function rerrangeArrayAlternatePositiveNegative(arr) {
  //   Step1: sort an array so that we can divide that into 2 equal halves
  arr.sort((a, b) => a - b);
  console.log("Sorted Arr:", arr);
  let count = 0;
  // Count the negative nos
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      break;
    }
    count++;
  }

  let positiveIndex = count + 1; //We will not touch the boundary nos
  let negativeIndex = count - 2; //one for ignoring the edge element + 1 for taking it as index, index = count -1
  let isSwap = true;
  console.log(
    "positiveIndex:",
    positiveIndex,
    "negativeIndex:",
    negativeIndex,
    "isSwap:",
    isSwap
  );
  while (positiveIndex < arr.length && negativeIndex >= 0 && isSwap) {
    if (arr[positiveIndex] >= 0 && arr[negativeIndex] < 0) {
      isSwap = true;
      swap(arr, positiveIndex, negativeIndex);
      positiveIndex = count + 2; //We will not touch the boundary nos
      negativeIndex = count - 2;
    } else {
      isSwap = false;
    }
  }
}

let arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];

console.log("Inital array:", arr);
rerrangeArrayAlternatePositiveNegative(arr);

console.log("Resulted Array:", arr);
