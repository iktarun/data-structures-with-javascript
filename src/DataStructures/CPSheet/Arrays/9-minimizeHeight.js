function getMinDiff(arr, K, N) {
  arr.sort((a, b) => a - b);

  let ans = arr[N - 1] - arr[0];

  var min = 0;
  var max = 0;

  for (let i = 1; i < N; i++) {
    max = Math.max(arr[i - 1] + K, arr[N - 1] - K);
    min = Math.min(arr[i] - K, arr[0] + K);

    if (min < 0) continue;
    ans = Math.min(ans, max - min);
  }
  return ans;
}

console.log(getMinDiff([1, 5, 8, 10], 2, 4));
