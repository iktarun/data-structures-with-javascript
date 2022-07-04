class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
    this.MAX_SIZE = 10;
  }

  push(item) {
    // Stack overflow
    if (this.top === this.MAX_SIZE) {
      return;
    }
    this.stack[++this.top] = item;
  }
  pop() {
    // Stack underflow
    if (this.top === -1) {
      return;
    }
    let item = this.stack[this.top];
    this.stack = this.stack.splice(0, this.top - 1);
    return item;
  }

  print() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let stack1 = [1, 2, 3, 4, 5]; 0 - 4
// let stack2 = [6, 7, 8, 9, 10]; 5 - 9

// 1 -> n/2 : n/2 + 1 to n
