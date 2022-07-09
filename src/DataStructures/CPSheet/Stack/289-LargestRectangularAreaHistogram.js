// https://www.geeksforgeeks.org/largest-rectangle-under-histogram/
//It is similar to find previous and next smaller element, just we will store index not value
// we can still improce this , no need to maintain top variable, check stock span problem in the repo
function previousSmallerElements(arr) {
  let stack = [];
  let top = -1;
  let psArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack[++top] = i;
      psArr[i] = -1;
    } else {
      while (top >= 0 && arr[stack[top]] >= arr[i]) {
        stack.length = stack.length !== 0 ? --stack.length : 0;
        top--;
      }
      if (stack.length === 0) {
        stack[++top] = i;
        psArr[i] = -1;
      } else {
        let temp = i;
        psArr[i] = stack[top];
        stack[++top] = temp;
      }
    }
  }
  return psArr;
}

function nextSmallerElements(arr) {
  let stack = [];
  let top = -1;
  let psArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      stack[++top] = i;
      psArr[i] = -1;
    } else {
      while (top >= 0 && arr[stack[top]] >= arr[i]) {
        stack.length = stack.length !== 0 ? --stack.length : 0;
        top--;
      }
      if (stack.length === 0) {
        stack[++top] = i;
        psArr[i] = -1;
      } else {
        let temp = i;
        psArr[i] = stack[top];
        stack[++top] = temp;
      }
    }
  }
  return psArr;
}

function LargestRectangularAreaHistogram(arr) {
  // Step1: get the arr which store the previous smallest elements
  // Step2: get the arr which store the next smallest elements
  // Step3: (NS[i] - PS[i] - 1) * a[i]
  //NOTE: if we have not find any element smaller than that element, ignore edge elements we can put
  //arr length

  let maxArea = Number.MIN_SAFE_INTEGER;
  const psArr = previousSmallerElements(arr);
  console.log(psArr);

  const nsArr = nextSmallerElements(arr);
  console.log(nsArr);

  for (let i = 0; i < arr.length; i++) {
    maxArea = Math.max(maxArea, (nsArr[i] - psArr[i] - 1) * arr[i]);
  }
  console.log("maxArea:", maxArea);
  return maxArea;
}
let hist = [6, 2, 5, 4, 5, 1, 6];

LargestRectangularAreaHistogram(hist);
