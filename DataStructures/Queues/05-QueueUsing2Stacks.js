class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  push(item) {
    // Make a condition check in here, If it is exceding the stack size then return
    let top = ++this.top;
    this.stack[top] = item;
    console.log("PUSHED:", top, item, this.stack.length);
  }

  pop(stack2) {
    if (stack2.stack.length !== 0) {
      let item = stack2.stack[stack2.top--];
      stack2.stack.length =
        stack2.stack.length !== 0 ? --stack2.stack.length : 0;
      return item;
    } else {
      // copy all the elements from stack1 to stack2
      if (this.top === -1) {
        return;
      }
      let top = this.top;
      let i;
      for (i = top; i >= 0; i--) {
        stack2.stack[++stack2.top] = this.stack[i];
      }
      this.stack = [];
      this.top = -1;

      if (stack2.stack.length !== 0) {
        let item = stack2.stack[stack2.top--];
        stack2.stack.length =
          stack2.stack.length !== 0 ? --stack2.stack.length : 0;
        return item;
      }
    }
  }
}

let stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);

let stack2 = new Stack();

console.log("POPPED:", stack1.pop(stack2));
console.log("POPPED:", stack1.pop(stack2));
console.log("stack1:", stack1, "stack2:", stack2);
stack1.push(5);
console.log("POPPED:", stack1.pop(stack2));
console.log("POPPED:", stack1.pop(stack2));
console.log("POPPED:", stack1.pop(stack2));
console.log("POPPED:", stack1.pop(stack2));
stack1.push(6);
console.log("stack1:", stack1, "stack2:", stack2);
