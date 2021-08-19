// We need to improve this solution as it is not giving the corret output for xome test cases
function reArrange(arr, n) {
  //code here
  let left = 0;
  let right = n - 1;
  let correctCount = 0;
  while (left <= right) {
    console.log("index:", left, right, "Elements:", arr[left], arr[right]);
    // Check for even
    if (left % 2 === 0 && arr[left] % 2 === 0) {
      //   console.log("here1");
      left++;
    } else if (left % 2 !== 0 && arr[left] % 2 !== 0) {
      //   console.log("here2");
      left++;
    } else {
      // Either index is odd or number is odd
      //   If index is even but not the element
      //   console.log("here3");
      if (left % 2 === 0 && arr[left] % 2 !== 0) {
        if (arr[right] % 2 === 0) {
          let temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
        } else {
          right--;
        }

        // If index is not even but the element is even
      } else if (left % 2 !== 0 && arr[left] % 2 === 0) {
        if (arr[right] % 2 !== 0) {
          let temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
        } else {
          right--;
        }

        // If index is not even but the element is even
      }
    }
  }
  console.log("arr", arr);
  left = 0;
  right = n - 1;
  for (let i = 0; i < n - 1; i++) {
    if (left % 2 === 0 && arr[left] % 2 === 0) {
      correctCount++;
    } else if (left % 2 !== 0 && arr[left] % 2 !== 0) {
      correctCount++;
    }
  }
  console.log("correctCount:", correctCount);
  if (correctCount === n - 1) {
    console.log(1);
  } else {
    console.log(-1);
  }
}

function reArrangeMethod2(arr, n) {
  let evenIndex = 0;
  let oddIndex = 1;

  while (true) {
    while (eventIndex < n && arr[evenIndex] % 2 === 0) {
      evenIndex += 2;
    }
    while (oddIndex < n && arr[oddIndex] % 2 === 1) {
      oddIndex += 2;
    }
    if (evenIndex < n && oddIndex < n) {
      //   Swap the numbers here
      let temp = arr[eventIndex];
      arr[eventIndex] = arr[oddIndex];
      arr[oddIndex] = temp;
    } else {
      break;
    }
  }
}
let arr = [
  98,
  92,
  73,
  48,
  33,
  98,
  4,
  6,
  19,
  24,
  11,
  68,
  6,
  45,
  10,
  90,
  16,
  80,
  20,
  31,
  23,
  5,
  59,
  26,
  76,
  17,
  67,
  90,
  12,
  39,
  32,
  67,
  63,
  29,
  25,
  77,
  44,
  50,
  94,
  50,
  46,
  33,
  16,
  81,
  34,
  47,
  80,
  59,
  2,
  81,
  51,
  6,
  94,
  24,
  89,
  14,
  47,
  82,
  82,
  1,
  20,
  77,
  88,
  19,
  14,
  68,
  75,
  41,
  63,
  67,
  83,
  82,
  91,
  21,
  85,
  13,
  91,
  35,
  34,
  9,
];
console.log("Orignal Array:", arr);
reArrange(arr, arr.length);
