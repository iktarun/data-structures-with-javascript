class Solution {
  findPosition(n) {
    //code here
    if (this.isPowerOfTwo(n) === false) {
      return -1;
    }

    let count = 0;
    while (n !== 0) {
      n = n >> 1;
      count++;
    }
    return count;
  }
  isPowerOfTwo(n) {
    if (n === 0) {
      return false;
    }

    return (n & (n - 1)) === 0;
  }
}

let obj = new Solution();
console.log(obj.findPosition(8));
