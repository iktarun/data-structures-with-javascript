/**
 * PriorityQueue DS
 */

function PriorityQueue() {
  let queue = [];

  function findItemIndexToInsert(item, queue) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].priority < item.priority) {
        return i;
      }
    }
    return queue.length;
  }

  function insertItemAtGivenIndex(index, item, queue) {
    for (let i = queue.length; i > index; i--) {
      queue[i] = queue[i - 1];
    }
    queue[index] = item;
  }

  return {
    //Enqueue
    enqueue(item) {
      const index = findItemIndexToInsert(item, queue);
      insertItemAtGivenIndex(index, item, queue);
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

let q = PriorityQueue();
console.log("Enqueue 8, 9, 10");
q.enqueue({ item: 1, priority: 5 });
console.log(q.printQueue());
q.enqueue({ item: 2, priority: 10 });
console.log(q.printQueue());
q.enqueue({ item: 3, priority: 1 });
q.enqueue({ item: 4, priority: 2 });
q.enqueue({ item: 5, priority: 3 });
console.log("Print queue before DeQueue");
console.log(q.printQueue());
console.log("DeQueue");
q.dequeue();
console.log("Print queue After DeQueue");
console.log(q.printQueue());
