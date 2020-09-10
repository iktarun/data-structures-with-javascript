/**
 * Queues DS
 */

function Queue() {
  let queue = [];

  return {
    //Enqueue
    enqueue(item) {
      queue.push(item);
    },
    //DeQuueue
    dequeue() {
      return queue.shift();
    },
    //Peak
    peak(index) {
      return queue[index];
    },
    //Length
    length() {
      return queue.length;
    },
    //isEmpty
    isEmpty() {
      return queue.length === 0;
    },
    printQueue() {
      return queue;
    }
  };
}

let q = Queue();
console.log("Enqueue 8, 9, 10");
q.enqueue(8);
q.enqueue(9);
q.enqueue(10);
console.log("Print queue before DeQueue");
console.log(q.printQueue());
console.log("DeQueue");
q.dequeue();
console.log("Print queue After DeQueue");
console.log(q.printQueue());
