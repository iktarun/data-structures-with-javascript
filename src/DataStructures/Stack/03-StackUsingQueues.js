/**
 * Queue implementation using arrays
 * Problem with this approach is some places will remain unused after deleting from list, so we need circular queue
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
  enqueue(item, myQueue2) {
    if (this.rear === this.capacity) {
      return "Queue is Full";
    }
    if (this.front === -1) {
      this.rear++;
      this.size++;
      this.queue[this.rear] = item;
    } else {
      // Copy all the elements from Q1 to Q2
      for (let i = this.front + 1; i <= this.rear; i++) {
        myQueue2.rear = myQueue2.rear + 1;
        myQueue2[myQueue2.rear] = this.queue[i];
      }

      // not push that element in Q1 and update front and rear;
      this.front = this.rear;
      this.rear++;
      this.size++;
      this.queue[this.rear] = item;

      // copy the elements from Q2 to Q1
    }
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

// 1, 5, 3, p, 2, p
let myQueue1 = new Queue(20);
myQueue1.enqueue(1, myQueue2);

let myQueue2 = new Queue(20);
