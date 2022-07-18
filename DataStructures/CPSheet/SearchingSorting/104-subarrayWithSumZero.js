// Subarray with sum 0
function subarraySumZero(arr) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    //3 conditions
    // 1.either array contains element which is 0 in it
    // 2. Sum is 0
    //3. sum alredy does exist in the map array a + x = a, so x == 0
    sum += arr[i];

    if (sum === 0 && arr[i] === 0) {
      count += 2;
    } else if (sum === 0 || map.has(sum) || arr[i] === 0) {
      count++;
    } else {
      map.set(sum, 1);
    }
  }
  return count;
}

let arr = [0, 0, 5, 5, 0, 0];
//6,-1,-3,4,-2,2,4,6,-12,-7...this input is not working
console.log(subarraySumZero(arr));
