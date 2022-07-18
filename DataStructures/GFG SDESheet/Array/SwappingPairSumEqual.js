// / Function to calculate sum of elements of array
function getSum(X, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += X[i];
  return sum;
}

// Function to calculate : a - b = (sumA - sumB) / 2
function getTarget(A, n, B, m) {
  // Calculation of sums from both arrays
  let sum1 = getSum(A, n);
  let sum2 = getSum(B, m);

  // because that the target must be an integer
  if ((sum1 - sum2) % 2 != 0) return 0;
  return (sum1 - sum2) / 2;
}

// Function to prints elements to be swapped
function findSwapValues(A, n, B, m) {
  // Call for sorting the arrays
  A.sort(function (a, b) {
    return a - b;
  });
  B.sort(function (a, b) {
    return a - b;
  });

  // Note that target can be negative
  let target = getTarget(A, n, B, m);
  console.log(target);

  // target 0 means, answer is not possible
  if (target == 0) return;

  let i = 0,
    j = 0;
  while (i < n && j < m) {
    let diff = A[i] - B[j];

    if (diff == target) {
      console.log(A[i] + " " + B[j]);
      return;
    }

    // Look for a greater value in A[]
    else if (diff < target) i++;
    // Look for a greater value in B[]
    else j++;
  }
}

// driver program
let A = [4, 1, 2, 1, 1, 2];
let n = A.length;
let B = [3, 6, 3, 3];
let m = B.length;
// Call to function
findSwapValues(A, n, B, m);
