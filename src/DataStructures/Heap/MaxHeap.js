/***
 * Things to note down
 * Node left child = 2*i + 1;
 * Node right child = 2*i + 2;
 * Parent Node = Floor(i -1/ 2);
 * https://www.digitalocean.com/community/tutorials/js-binary-heaps
 */
class Heap {
  constructor() {
    this.heap = [];
  }
  add(element) {
    this.heap.push(element);
    let index = this.heap.length - 1;
    const currElement = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.heap[parentIndex];

      if (currElement >= parentElement) {
        //swap
        this.heap[index] = parentElement;
        this.heap[parentIndex] = currElement;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;

    const length = this.heap.length;
    let currentElement = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] > currentElement) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (
          (swapIndex === null && this.heap[rightChildIndex] > currentElement) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex] > this.heap[swapIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = currentElement;
      index = swapIndex;
    }
    return max;
  }
}

const tree = new Heap();
tree.add(3);
tree.add(4);
tree.add(31);
tree.add(6);
console.log(tree); // [31, 6, 4, 3]
console.log(tree.extractMax());
console.log(tree);
tree.add(99);
console.log(tree);
console.log(tree.extractMax());
console.log(tree);
