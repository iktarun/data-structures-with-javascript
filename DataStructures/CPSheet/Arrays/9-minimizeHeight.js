// Minimize the maximum difference between heights || Love Babbar DSA sheet
// https://www.youtube.com/watch?v=29uyA4F9t5I
// https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/
// https://www.youtube.com/watch?v=D3_MkGn6c-4(Good explnation)
function getMinDiff(arr, K, N) {
  arr.sort((a, b) => a - b);

  let ans = arr[N - 1] - arr[0];

  var min = 0;
  var max = 0;

  for (let i = 1; i < N; i++) {
    min = Math.min(arr[i] - K, arr[0] + K);
    max = Math.max(arr[i - 1] + K, arr[N - 1] - K);

    if (min < 0) continue;
    ans = Math.min(ans, max - min);
  }
  return ans;
}

console.log(getMinDiffMethod2([1, 5, 8, 10], 2, 4));
