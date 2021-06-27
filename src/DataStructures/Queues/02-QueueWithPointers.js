/**
 * Queue implementation using arrays
 */

class Queue {
  constructor(capacity) {
    this.queue = capacity === undefined ? [] : [capacity];
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.capacity = capacity;
  }

  // Insert data in Queue
  enqueue(item) {
    if (this.rear === this.capacity) {
      return "Queue is Full";
    }
    this.rear++;
    this.size++;
    this.queue[this.rear] = item;
  }

  // Delete data in Queue
  dequeue() {
    if (this.size === 0) {
      return "Queue is Empty";
    }
    this.front++;
    this.size--;
    return this.queue[this.front];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  print() {
    if (this.size === 0) {
      return "Queue is Empty";
    }
    for (let i = this.front + 1; i <= this.rear; i++) {
      console.log(this.queue[i]);
    }
  }
}

let myQueue = new Queue(20);
console.log(myQueue);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.print();
console.log("DEQUEUE:", myQueue.dequeue());
console.log("DEQUEUE:", myQueue.dequeue());
myQueue.print();
