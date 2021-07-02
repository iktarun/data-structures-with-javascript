class Solution {
  //Function to find the next greater element for each element of the array.
  nextLargerElement(arr, n) {
    // code here
    let stack = [];
    let top = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
      if (stack.length === 0) {
        stack[++top] = arr[i];
        arr[i] = -1;
      } else {
        // let i = top; for smallest element only this condition will be changed,,,stack[top] > arr[i]
        while (top >= 0 && stack[top] < arr[i]) {
          stack.length = stack.length !== 0 ? --stack.length : 0;
          top--;
        }
        if (stack.length === 0) {
          stack[++top] = arr[i];
          arr[i] = -1;
        } else {
          let temp = arr[i];
          arr[i] = stack[top];
          stack[++top] = temp;
        }
      }
    }
    return arr;
  }
}

let arr = [1, 3, 2, 4];
let obj = new Solution();
obj.nextLargerElement(arr, arr.length);
console.log(arr);
