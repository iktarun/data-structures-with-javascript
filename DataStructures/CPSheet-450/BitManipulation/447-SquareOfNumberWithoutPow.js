// Square of a number using bitwise operators

function square(n) {
  console.log(n);
  // Base case
  if (n == 0) return 0;

  // Handle negative number
  if (n < 0) n = -n;

  // Get floor(n/2) using right shift
  let x = n >> 1;
  console.log("x:", x, "\n");

  // If n is odd
  if (n & 1) return (square(x) << 2) + (x << 2) + 1;
  // If n is even
  else return square(x) << 2;
}

console.log(square(8));
