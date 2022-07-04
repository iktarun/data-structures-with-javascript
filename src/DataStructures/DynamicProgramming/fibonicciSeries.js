function fibonicci(n, dp) {
  if (n <= 1) {
    return n;
  }

  if (dp[n] !== -1) {
    return dp[n];
  }

  dp[n] = fibonicci(n - 1, dp) + fibonicci(n - 2, dp);
  return dp[n];
}

let n = 4;
let dp = new Array(n + 1).fill(-1);
console.log(dp);
console.log(fibonicci(n, dp));
