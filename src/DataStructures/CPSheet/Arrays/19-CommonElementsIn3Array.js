// Method1: Using loops O(n^3)
// Method2: Space O(n1+n2+n3), TimeComplexity O(n)
// Method2 O(n1+n2+n3)...code below

function inversionCount(arr1, arr2, arr3, n1, n2, n3) {
  let count = 0;
  let i = 0,
    j = 0,
    k = 0;

  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      count++;
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }

    //case2 handled for input 3,3,3
    let xx = arr1[i - 1];
    while (arr1[i] === xx) {
      i++;
    }

    //case2 handled for input 3,3,3
    let yy = arr1[j - 1];
    while (arr2[j] === yy) {
      j++;
    }
    //case2 handled for input 3,3,3
    let zz = arr3[k - 1];
    while (arr3[k] === zz) {
      k++;
    }
  }
  return count;
}

/**
 * Time: O(n)
 * Space: O(n1+n2+n3)
 * @returns
 */
function commonElementsIn3Array(arr1, arr2, arr3, n1, n2, n3) {
  let countArr = [];
  let map1 = new Map();
  let map2 = new Map();
  let map3 = new Map();
  let i = 0,
    j = 0,
    k = 0;

  while (i < arr1.length) {
    map1.set(arr1[i], arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    map2.set(arr2[j], arr2[j]);
    j++;
  }

  while (k < arr3.length) {
    map3.set(arr3[k], arr3[k]);
    k++;
  }

  for (let i = 0; i < n1; i++) {
    if (map1.has(arr1[i]) && map2.has(arr1[i]) && map3.has(arr1[i])) {
      countArr.push(arr1[i]);
    }
  }
  countArr = new Set(countArr);
  return Array.from(countArr);
}

let n1 = 6;
let A = [1, 5, 10, 20, 40, 80];
let n2 = 5;
let B = [6, 7, 20, 80, 100];
let n3 = 8;
let C = [3, 4, 15, 20, 30, 70, 80, 120];

/**
 * case 2
 * A = [3,3,3]
 * B = [3,3,3]
 * C = [3,3,3]
 *
 */
console.log(commonElementsIn3Array(A, B, C, n1, n2, n3));
