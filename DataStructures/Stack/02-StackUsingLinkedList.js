/* Stack!!
 * A stack is exactly what it sounds like. An element gets added to the top of
 * the stack and only the element on the top may be removed. This is an example
 * of an array implementation of a Stack. So an element can only be added/removed
 * from the end of the array.
 */

// Functions: push, pop, peek, view, length

// Creates a stack constructor

class Stack {
  constructor() {
    this.stack = null;
    this.top = 0;
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next === undefined ? null : next;
  }
}

Stack.prototype.push = function (item) {
  // Make a condition check in here, If it is exceding the stack size then return
  let newNode = new Node(item);
  if (!newNode) {
    throw new Error("Stack overflow error.");
  }

  newNode.next = this.stack;
  this.stack = newNode;
  this.top++;
};

Stack.prototype.pop = function () {
  if (this.top === 0) {
    console.log("Stack is empty");
    return;
  }
  let item = this.stack;
  this.stack = this.stack.next;

  this.top--;

  return item.data;
};
/**
 *
 * @param {*} position
 * @returns data
 * Peek the element at a given position, peek is from top not bottom
 */
Stack.prototype.peek = function (position) {
  if (this.top === 0 || this.top - position < 0) {
    return "Not a valid position";
  }

  let counter = 0;
  let ptr = this.stack;

  while (ptr !== null) {
    counter++;
    if (counter === position) {
      return ptr.data;
    }
    ptr = ptr.next;
  }

  if (ptr === null) {
    return "Can not reach till position";
  }
};

Stack.prototype.stackTop = function () {
  if (this.stack === null) {
    return;
  }
  return this.stack.data;
};

Stack.prototype.isEmpty = function () {
  return this.top === 0;
};

Stack.prototype.isFull = function () {};

// To see all the elements in the stack
Stack.prototype.view = function () {
  let ptr = this.stack;
  let counter = this.top;
  while (ptr !== null) {
    console.log("Element at position:", counter--, "is:", ptr.data);
    ptr = ptr.next;
  }
};

let stackObj = new Stack();
stackObj.push(1);
stackObj.push(2);
stackObj.push(3);
stackObj.push(4);
console.log("Popped Item is:", stackObj.pop());
console.log("Get element at Position:", 3, "is:", stackObj.peek(3));
stackObj.view(); //View the stack data
console.log("Stack TOP element is:", stackObj.stackTop());
