// https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/
//www.youtube.com/watch?v=o_AJ3VWQMzA

/**
 * Solution1:
 * Go to floor by floor and then drop the egg and check it breaks or not
 * Time Complexity: O(N)
 *
 * Solution2:
 *We have divide the floor into no of blocks and then drop the egg in block
 Time complexity: (B + N/B) => B = Sqrt(N)
 *Check the image containing formula
 */

/* Implementation of Solution2
    Function to get minimum number of
	trials needed in worst case with n
	eggs and k floors */
function eggDrop(n, k) {
  // If there are no floors, then
  // no trials needed. OR if there
  // is one floor, one trial needed.
  if (k == 1 || k == 0) return k;

  // We need k trials for one egg
  // and k floors
  if (n == 1) return k;

  let min = Number.MAX_VALUE;
  let x, res;

  // Consider all droppings from
  // 1st floor to kth floor and
  // return the minimum of these
  // values plus 1.
  for (x = 1; x <= k; x++) {
    res = Math.max(eggDrop(n - 1, x - 1), eggDrop(n, k - x));
    if (res < min) min = res;
  }
  return min + 1;
}

// Driver code
let n = 2,
  k = 10;
console.log(
  "Minimum number of " +
    "trials in worst case with " +
    n +
    " eggs and " +
    k +
    " floors is " +
    eggDrop(n, k)
);
