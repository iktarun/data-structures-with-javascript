/* Stack!!
 * A stack is exactly what it sounds like. An element gets added to the top of
 * the stack and only the element on the top may be removed. This is an example
 * of an array implementation of a Stack. So an element can only be added/removed
 * from the end of the array.
 * Also need to implmenet 2 stacks using one array
 */

// Functions: push, pop, peek, view, length

// Creates a stack constructor

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
}

Stack.prototype.push = function (item) {
  // Make a condition check in here, If it is exceding the stack size then return
  this.stack[++this.top] = item;
};

Stack.prototype.pop = function () {
  if (this.top === -1) {
    console.log("Stack is empty");
    return;
  }
  let item = this.stack[this.top];
  this.stack = this.stack.splice(0, this.top--);
  //   OR
  //   let item = this.stack[this.top--];
  //    this.stack.length =  this.stack.length !== 0 ? --this.stack.length: 0;
  return item;
};

Stack.prototype.peek = function (position) {
  if (this.top === -1 || this.top - position < 0) {
    return "Not a valid position";
  }
  return this.stack[position];
};

Stack.prototype.stackTop = function () {
  return this.stack[this.top];
};

Stack.prototype.isEmpty = function () {
  return this.top === -1;
};

Stack.prototype.isFull = function () {};

// To see all the elements in the stack
Stack.prototype.view = function () {
  for (let i = 0; i <= this.top; i++) {
    console.log(this.stack[i]);
  }
};

let stackObj = new Stack();
stackObj.push(1);
stackObj.push(2);
stackObj.push(3);
stackObj.push(4);
console.log("Popped Item is:", stackObj.pop());
console.log("Get element at Position:", 2, "is:", stackObj.peek(2));
console.log(stackObj);
stackObj.view(); //View the stack data
console.log("Stack TOP element is:", stackObj.stackTop());
