// https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/
function MinimumNoOfPlatform(arr, dep, n) {
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let i = 0;
  j = 0;
  let platforms_needed = 1;
  let result = 1;

  while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
      platforms_needed++;
      i++;
    }

    if (arr[i] > dep[j]) {
      platforms_needed--;
      j++;
    }
    result = Math.max(result, platforms_needed);
  }

  return result;
}

let arr = new Array(900, 940, 950, 1100, 1500, 1800);
let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);
let n = arr.length;
console.log(
  "Minimum Number of Platforms Required = " + MinimumNoOfPlatform(arr, dep, n)
);
