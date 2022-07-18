// Space Complexity is high O(n)
// Time complexity O(n)

function deuplicatesInArrayMethod1(arr) {
  let disc = {};
  for (let i = 0; i < arr.length; i++) {
    disc[arr[i]] = { count: 0 };
  }

  for (let i = 0; i < arr.length; i++) {
    disc[arr[i]].count++;
  }

  // check item count does exist more than once or not
  for (let i in disc) {
    console.log(i, disc[i].count);
    if (disc[i].count > 1) {
      console.log("Item does exist more than once is:", i);
      //   return i;
    }
  }

  //Print the entire array top see the count of all enties
  //   console.log(JSON.stringify(disc));
}

// Space Complexity is high O(1)
// Time complexity O(nlogn)
function deuplicatesInArrayMethod2(arr) {
  let mainCount = 0,
    currentCount = 0;
  let mainIndex = -1,
    currentIndex = -1;

  function sortArray(a, b) {
    return a - b;
  }
  const sortedArr = arr.sort(sortArray);
  console.log("sortedArr:", sortedArr);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      currentCount++;
      currentIndex = i;
    } else if (currentCount > mainCount && sortedArr[i] !== sortedArr[i + 1]) {
      mainCount = currentCount;
      currentCount = 0;
      mainIndex = currentIndex;
      currentIndex = -1;
    }
  }

  if (mainCount >= 1) {
    console.log("Duplicate item is::", sortedArr[mainIndex]);
  }
}

// Main
let arr = [1, 3, 4, 5, 6, 3, 2];

deuplicatesInArrayMethod2(arr);
