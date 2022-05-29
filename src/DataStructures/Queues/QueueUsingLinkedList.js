class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    let node = new Node(data);
    if (this.front === null) {
      this.front = this.rear = node;
    }

    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (this.front === null) {
      console.log("No item to delete");
      return;
    }
    let item = this.front;
    console.log("Deleted item is:", item);
    this.front = this.front.next ? this.front.next : null;
    return item;
  }

  print() {
    let ptr = this.front;
    while (ptr && ptr.next !== null) {
      console.log(ptr.data);
      ptr = ptr.next;
    }
  }
}

const obj = new Queue();
obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);
obj.dequeue();
obj.print();
