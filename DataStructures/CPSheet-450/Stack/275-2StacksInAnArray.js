//Sol1: Divide the array into 2 halves, use the first half for S1 and another for S2.
// But this is not optimized

// Sol2: Keep 2 end to insert data starting from 2 index for s1 and 2nd from end of array for stack2
// Break the loop if any one of them will cross each other while inserting data

class TwoStacks {
  constructor() {
    this.arr = new Array(100);
    this.size = 100;
    this.top1 = -1;
    this.top2 = 100;
  }

  /**
   * @param {number} x
   */
  //Function to push an integer into the stack1.
  push1(x) {
    // There is at least one empty space for
    // new element
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = x;
    }
  }

  // Method to push an element x to stack2
  push2(x) {
    // There is at least one empty space for
    // new element
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = x;
    }
  }

  // Method to pop an element from first stack
  pop1() {
    if (this.top1 >= 0) {
      var x = this.arr[this.top1];
      this.top1--;
      return x;
    }
    return -1;
  }

  // Method to pop an element from second stack
  pop2() {
    if (this.top2 < this.size) {
      var x = this.arr[this.top2];
      this.top2++;
      return x;
    }
    return -1;
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
