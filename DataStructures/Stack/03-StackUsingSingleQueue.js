/**
 * Queue implementation using arrays
 * Problem with this approach is some places will remain unused after deleting from list, so we need circular queue
 */

class StackUsingSingleQueue {
  constructor(capacity) {
    this.queue = capacity === undefined ? [] : [capacity];
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.capacity = capacity;
  }

  // Insert data in Queue
  enqueue(item) {
    let oldRear = this.rear;

    this.queue[++this.rear] = item;
    this.size++;

    if (this.front >= 0) {
      let rear = this.rear;
      for (let i = this.front; i < rear; i++) {
        this.queue[++this.rear] = this.queue[i];
        this.size++;
      }
    }

    this.front = oldRear + 1;
  }

  // Delete data in Queue
  dequeue() {
    if (this.size === 0) {
      return "Queue is Empty";
    }
    this.size--;
    return this.queue[this.front++];
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

// 1, 5, 3, p, 2, p
let myQueue1 = new StackUsingSingleQueue(20);
myQueue1.enqueue(1);
myQueue1.enqueue(2);
myQueue1.enqueue(3);
myQueue1.enqueue(4);
console.log(myQueue1);
console.log(myQueue1.dequeue());
console.log(myQueue1);
