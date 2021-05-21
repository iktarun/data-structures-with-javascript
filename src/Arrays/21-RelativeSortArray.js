/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let hash = {};
  let includedArray = [];
  let k = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (hash[arr1[i]] === undefined) {
      hash[arr1[i]] = 1;
    } else {
      hash[arr1[i]]++;
    }
  }

  console.log("hash:", hash);

  for (let i = 0; i < arr2.length; i++) {
    if (hash[arr2[i]] !== undefined) {
      let m = 1;
      while (m <= hash[arr2[i]]) {
        includedArray[k++] = arr2[i];
        m++;
      }
    }
  }

  //   console.log("outputArray:", outputArray);

  let nonExist = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!includedArray.includes(arr1[i])) {
      nonExist.push(arr1[i]);
    }
  }

  nonExist = nonExist.sort((a, b) => a - b);
  includedArray = [...includedArray, ...nonExist];
  return includedArray;
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6];
const res = relativeSortArray(arr1, arr2);
console.log("res:", res);
