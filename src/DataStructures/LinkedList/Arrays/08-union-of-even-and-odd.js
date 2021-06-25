//Function to return a list containing the union of the two arrays.
function findUnion(arr1, arr2, n, m) {
  //your code here
  let indexArr1 = 0;
  let indexArr2 = 0;
  let results = [];
  let index = 0;
  let lastInsertedItem = -1;

  //   case 1:   if arr1[i] < arr2[i]
  //   case 2:  if arr1[i] > arr2[i]
  //   case 3:  if arr1[i] === arr2[i]
  //   case 4: if any array loop finished before another one

  while (indexArr1 < n && indexArr2 < m) {
    if (arr1[indexArr1] < arr2[indexArr2]) {
      if (lastInsertedItem !== arr1[indexArr1]) {
        results[index++] = arr1[indexArr1];
        lastInsertedItem = arr1[indexArr1];
      }
      console.log("first", indexArr1);
      indexArr1++;
    } else if (arr1[indexArr1] > arr2[indexArr2]) {
      console.log("2nd", indexArr2, arr1[indexArr1], arr2[indexArr2]);
      if (lastInsertedItem !== arr2[indexArr2]) {
        results[index++] = arr2[indexArr2];
        lastInsertedItem = arr2[indexArr2];
      }
      indexArr2++;
    } else {
      console.log("3rd", indexArr2, arr1[indexArr1], arr2[indexArr2]);
      if (lastInsertedItem !== arr1[indexArr1]) {
        results[index++] = arr1[indexArr1];
        lastInsertedItem = arr1[indexArr1];
      }
      indexArr1++;
      indexArr2++;
    }
  }

  // Push the rest of elements in the array
  for (let i = indexArr1; i < n; i++) {
    if (lastInsertedItem !== arr1[i]) {
      results[index++] = arr1[i];
      lastInsertedItem = arr1[i];
    }
  }

  console.log("indexArr2:", indexArr2, "m:", m);
  // Push the rest of elements in the array
  for (let i = indexArr2; i < m; i++) {
    if (lastInsertedItem !== arr2[i]) {
      results[index++] = arr2[i];
      lastInsertedItem = arr2[i];
    }
  }

  return results;
}

let arr1 = [12, 42];
let arr2 = [3, 4, 5, 28, 37, 42, 43, 46];
const res = findUnion(arr1, arr2, arr1.length, arr2.length);
console.log(res);
