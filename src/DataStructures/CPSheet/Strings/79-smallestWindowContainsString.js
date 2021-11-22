function smallestWindowContainsString(str) {
  if (str.length <= 1) {
    return str.length;
  }
  let set = new Set(str);
  let map = new Map();
  let n = set.size;
  let ans = Number.MAX_SAFE_INTEGER;
  let i = 0;
  let j = 1;
  let count = 1;

  while (i < str.length) {
    if (map.get(str[i]) === undefined) {
      map.set(str[i], 0);
    }
    i++;
  }

  i = 0;
  map.set(str[i], 1);

  while (i <= j && j < str.length) {
    if (count < n) {
      if (map.get(str[j]) === 0) {
        map.set(str[j], 1);
        count++;
      } else {
        let val = map.get(str[j]);
        map.set(str[j], ++val);
      }
      ++j;
    } else if (count === n) {
      ans = Math.min(ans, j - i);

      if (map.get(str[i]) === 1) {
        --count;
        map.set(str[i], 0);
      } else {
        let val = map.get(str[i]);
        map.set(str[i], --val);
      }

      ++i;
    }
  }

  while (count === n) {
    ans = Math.min(ans, j - i);

    if (map.get(str[i]) === 1) {
      --count;
      map.set(str[i], 0);
    } else {
      let val = map.get(str[i]);
      map.set(str[i], --val);
    }

    ++i;
  }
  return ans;
}

let str = "CCCbAbbBbbC";
console.log(smallestWindowContainsString(str.split("")));
