// Solution1: n*n

class Solution {
  //Function to calculate the span of stockâ€™s price for all n days.
  calculateSpan(price, n) {
    // code here
    if (n < 0) {
      return [];
    }

    let span = [];
    span.push(1);

    for (let i = 1; i < n; i++) {
      let count = 1;
      let j = i - 1;
      while (j >= 0 && price[i] >= price[j]) {
        j--;
        count++;
      }
      span.push(count);
    }

    return span;
  }

  //Function to calculate the span of stockâ€™s price for all n days.
  calculateSpanMethod2(price, n) {
    // code here
    if (n < 0) {
      return [];
    }

    let span = [];
    span.push(1);
    let stack = [0];

    for (let i = 1; i < n; i++) {
      console.log("length:", stack);
      while (stack.length !== 0 && price[stack[stack.length - 1]] <= price[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        span[i] = i + 1;
      } else {
        span[i] = i - stack[stack.length - 1];
      }
      stack.push(i);
    }

    return span;
  }
}

/**
 * Method 2 using stack
 */

let stack = new Solution();
let arr = [
  68, 735, 101, 770, 525, 279, 559, 563, 465, 106, 146, 82, 28, 362, 492, 596,
  743, 28, 637, 392, 205, 703, 154, 293, 383, 622, 317, 519, 696, 648, 127, 372,
  339, 270, 713, 68, 700, 236, 295, 704, 612, 123,
];
console.log(stack.calculateSpanMethod2(arr, arr.length));
