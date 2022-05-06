//Finding an element in an array that isn't repeated a multiple of three times?

function countSetBits(numbers) {
  let occured = new Array(32).fill(0);
  for (let j = 0; j < numbers.length; j++) {
    let k = 0;
    let n = numbers[j];
    while (n > 0) {
      occured[k] += n & 1;
      n = n >> 1;
      k += 1;
    }
    // console.log(j, k, n, occured);
  }

  //Take modulo with 3 to find the number
  for (let j = 0; j < occured.length; j++) {
    if (occured[j] % 3 !== 0) {
      occured[j] = 1;
    } else {
      occured[j] = 0;
    }
  }
  console.log(occured);
  //This will contain the Binar presentaion of no

  let ans = 0;
  for (let i = 0; i < occured.length; i++) {
    ans += Math.pow(2, i) * occured[i];
    // console.log(i, ans);
  }
  return ans;
}

// driver program
let numbers = [9, 2, 2, 2, 3, 3, 3];
console.log("No is:" + countSetBits(numbers));
