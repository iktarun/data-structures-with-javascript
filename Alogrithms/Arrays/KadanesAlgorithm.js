// Kadane's Algorithm | Largest Sum Contiguous Subarray

function largestSumMethod1(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      endIndex = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      startIndex = i;
    }
  }

  console.log(
    "Max subarray sum is:",
    maxSum,
    "index range:",
    startIndex,
    endIndex
  );
}

// This is recommended solution
function largestSumMethod2(arr) {
  let meh = 0;
  let msf = Number.MIN_SAFE_INTEGER;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    meh += arr[i];
    if (meh < arr[i]) {
      meh = arr[i];
      startIndex = i;
    }

    if (msf < meh) {
      msf = meh;
      endIndex = i;
    }
  }

  console.log("Max subarray sum is:", msf);

  if (endIndex < startIndex) {
    console.log("index range:", endIndex, endIndex);
  } else {
    console.log("index range:", startIndex, endIndex);
  }
}

const arr = [-2, 13, 4, -1, 2, -5, -5, -3];
const res = largestSumMethod2(arr);
