//Sol1: Divide the array into 2 halves, use the first half for S1 and another for S2.
// But this is not optimized

// Sol2: Keep 2 end to insert data starting from 2 index for s1 and 2nd from end of array for stack2
// Break the loop if any one of them will cross each other while inserting data

class TwoStacks {
  constructor() {
    this.arr = new Array(5);
    this.size = 5;
    this.top1 = -1;
    this.top2 = 5;
  }

  /**
   * @param {number} x
   */
  //Function to push an integer into the stack1.
  push1(x) {
    // code here
    if (this.top1 + 1 > this.top2) {
      console.log("Stack full", this.top1, this.top2);
      return;
    }
    this.arr[++this.top1] = x;
  }

  /**
   * @param {number} x
   */
  //Function to push an integer into the stack2.
  push2(x) {
    // code here
    if (this.top2 - 1 <= this.top1) {
      console.log("Stack full", this.top1, this.top2);
      return;
    }
    this.arr[--this.top2] = x;
  }

  /**
   * @returns {number}
   */
  //Function to remove an element from top of the stack1.
  pop1() {
    // code here
    if (this.top < 0) {
      return;
    }
    let item = this.arr[this.top1];
    this.arr[this.top1--] = undefined;
    return item;
  }

  /**
   * @returns {number}
   */
  //Function to remove an element from top of the stack2.
  pop2() {
    // code here
    if (this.top2 > this.size) {
      return;
    }
    let item = this.arr[this.top2];
    this.arr[this.top2++] = undefined;
    return item;
  }
}

let obj = new TwoStacks();
// Stack1
obj.push1(1);
console.info(obj.top1, obj.top2);
obj.push1(2);
console.info(obj.top1, obj.top2);
obj.push1(3);
// Stack2
console.info(obj.top1, obj.top2);
obj.push2(4);
console.info(obj.top1, obj.top2);
obj.push2(5);
console.info(obj.top1, obj.top2);
obj.push2(6); //rejected
console.log(obj.top1, obj.top2, obj.arr);
// removing

obj.pop1();
obj.pop2();

console.log(obj.top1, obj.top2, obj.arr);
obj.push2(5);
console.log(obj.top1, obj.top2, obj.arr);
