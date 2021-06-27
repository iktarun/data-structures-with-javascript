/**
 * Queue implementation using arrays
 */

class Queue {
  constructor(capacity) {
    this.queue = capacity === undefined ? [] : [capacity];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.capacity = capacity;
  }

  // Insert data in Queue
  enqueue(item) {
    let position = (this.rear + 1) % this.capacity;
    if (position === this.front) {
      return "Queue is Full";
    }

    this.size++;
    this.rear = position;
    this.queue[position] = item;
  }

  // Delete data in Queue
  dequeue() {
    if (this.front === this.rear) {
      return "Queue is empty";
    }
    this.size--;
    let position = (this.front + 1) % this.capacity;
    this.front = position;
    let item = this.queue[position];
    return item;
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
    // Delete from front till end of list
    for (let i = (this.front + 1) % this.capacity; i < this.capacity; i++) {
      console.log(this.queue[i]);
    }
    // delete from 0 till the rear node
    for (let i = 0; i <= this.rear; i++) {
      console.log(this.queue[i]);
    }
  }
}

let myQueue = new Queue(5);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.enqueue(5));
myQueue.print();
console.log("DEQUEUE:", myQueue.dequeue());
console.log("DEQUEUE:", myQueue.dequeue());
console.log("ENQUEUE: 5", myQueue.enqueue(5));
console.log(myQueue);
myQueue.print();
