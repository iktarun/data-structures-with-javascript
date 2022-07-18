function find(arr, n, x) {
  //code here

  function getFirstOccurance(arr) {
    let l = 0,
      r = n - 1;
    let m = -1;
    while (l <= r) {
      m = Math.floor(l + (r - l) / 2);

      if (arr[m] === x && arr[m - 1] !== x) {
        return m;
      } else if (arr[m] >= x) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return -1;
  }

  function getLastOccurance(arr) {
    let l = 0,
      r = n - 1;
    let m = -1;
    while (l <= r) {
      m = Math.floor(l + (r - l) / 2);

      if (arr[m] === x && arr[m + 1] !== x) {
        return m;
      } else if (arr[m] <= x) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return -1;
  }

  return [getFirstOccurance(arr), getLastOccurance(arr)];
}

find([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5);
