// Count Distinct Elements in every Window of size k | HashMap Interview Problems | DSA-One Course #29
function logMapElements(map) {
  for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
  }
}
function countDistinctElement(arr, k) {
  let i = 1;
  let j = k;
  let map = new Map();
  for (let i = 0; i < k; i++) {
    let val = map.has(arr[i]) ? map.get(arr[i]) + 1 : 1;
    map.set(arr[i], val);
  }

  //   logMapElements(map);
  console.log(`${i - 1} to ${j} distinct elements are:`, map.size);

  while (j < arr.length) {
    let val = map.get(arr[i - 1]) - 1;
    if (val <= 0) {
      map.delete(arr[i - 1]);
    } else {
      map.set(arr[i - 1], val);
    }

    let addVal = (map.get(arr[j]) || 0) + 1;
    map.set(arr[j], addVal);

    // logMapElements(map);
    console.log(`${i} to ${j} distinct elements are:`, map.size);
    i++;
    j++;
  }
}

let arr = [1, 2, 2, 1, 3, 1, 1, 3];
countDistinctElement(arr, 4);
