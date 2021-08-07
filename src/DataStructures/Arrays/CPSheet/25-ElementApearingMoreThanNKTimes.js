// A structure to store an element and its current count
let eleCount = {
  e: "", // Element
  c: 0, // Count
};

// Prlets elements with more
// than n/k occurrences in arr[]
// of size n. If there are no
// such elements, then it prlets
// nothing.
function moreThanNdK(arr, n, k) {
  // k must be greater than
  // 1 to get some output
  if (k < 2) return;

  /* Step 1: Create a temporary
       array (contains element
       and count) of size k-1.
       Initialize count of all
       elements as 0 */

  let temp = new Array(k - 1).fill(eleCount);
  for (let i = 0; i < k - 1; i++) temp[i].c = 0;

  /* Step 2: Process all
      elements of input array */
  for (let i = 0; i < n; i++) {
    let j;

    /* If arr[i] is already present in
           the element count array,
           then increment its count
         */
    for (j = 0; j < k - 1; j++) {
      if (temp[j].e == arr[i]) {
        temp[j].c += 1;
        break;
      }
    }

    /* If arr[i] is not present in temp[] */
    if (j == k - 1) {
      let l;

      /* If there is position available
              in temp[], then place arr[i] in
              the first available position and
              set count as 1*/
      for (l = 0; l < k - 1; l++) {
        if (temp[l].c == 0) {
          temp[l].e = arr[i];
          temp[l].c = 1;
          break;
        }
      }

      /* If all the position in the
               temp[] are filled, then decrease
               count of every element by 1 */
      if (l == k - 1) {
        for (l = 0; l < k - 1; l++) {
          temp[l].c -= 1;
        }
      }
    }
  }

  /*Step 3: Check actual counts of
   * potential candidates in temp[]*/
  for (let i = 0; i < k - 1; i++) {
    // Calculate actual count of elements
    let ac = 0; // actual count
    for (let j = 0; j < n; j++) {
      if (arr[j] == temp[i].e) ac++;
    }

    // If actual count is more than n/k,
    // then prlet it
    if (ac > n / k) {
      console.log("Number:", temp[i].e, " Count:", ac);
    }
  }
}

/* Driver code */

console.log("First Test\n");
let arr1 = [4, 5, 6, 7, 8, 4, 4];
let size = arr1.length;
let k = 3;
moreThanNdK(arr1, size, k);

console.log("\nSecond Test\n");
let arr2 = [4, 2, 2, 7];
size = arr1.length;
k = 3;
moreThanNdK(arr2, size, k);

console.log("\nThird Test\n");
let arr3 = [2, 7, 2];
size = arr1.length;
k = 2;
moreThanNdK(arr3, size, k);

console.log("\nFourth Test\n");
let arr4 = [2, 3, 3, 2];
size = arr4.length;
k = 3;
moreThanNdK(arr4, size, k);
