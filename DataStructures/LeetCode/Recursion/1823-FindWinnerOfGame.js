// 1823. Find the Winner of the Circular Game

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
let mem = {};
var findTheWinner = function (n, k, mem = {}) {
  if (Object.keys().length === k) {
    return;
  }
  return findTheWinner(n, 2, mem);
};

let result = findTheWinner(5, 2, mem);
console.log(result);
