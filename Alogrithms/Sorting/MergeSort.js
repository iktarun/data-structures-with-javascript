// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr = [], l, m, r) {
  // First we need left subarray
  // 2nd Step to get the right subarray
  // 3rd step is to compatare the elements
  //    Here we need to copy the elements from both arrays, and make sure about the index from where we are going to insert the data
  //4th step should be copy the remaining elements from arrays. i.e if arr1 and arr2 is not of equal size

  let n1 = m - l + 1;
  let n2 = r - m;
  console.log("merge>", l, m, r, n1, n2);
  // Create temp arrays
  let L = new Array(n1);
  let R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  // Merge the temp arrays back leto arr[l..r]

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr = [], l, r, type) {
  console.log(arr, l, r, type);
  if (l >= r) {
    return; //returns recursively
  }
  let m = parseInt(l + (r - l) / 2);
  mergeSort(arr, l, m, "left");
  mergeSort(arr, m + 1, r, "right");
  merge(arr, l, m, r);
}

// UTILITY FUNCTIONS
// Function to prlet an array
function printArray(A = [], size) {
  for (let i = 0; i < size; i++) console.log(A[i] + " ");
}

// Driver code
function main() {
  let arr = [12, 11, 13, 5, 6];
  let arr_size = arr.length;

  console.log("Given array is \n");
  printArray(arr, arr_size);

  mergeSort(arr, 0, arr_size - 1);

  console.log("\nSorted array is \n");
  printArray(arr, arr_size);
  return 0;
}

main();

// This code is contributed by Mayank Tyagi
