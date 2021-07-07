/* Class containing left and right child of current
   node and key value*/
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
  searchRecurively(ptr, key) {
    if (!ptr) {
      return "Not Found";
    }

    if (ptr.data === key) {
      return "Found";
    } else if (key < ptr.data) {
      return this.searchRecurively(ptr.left, key);
    } else {
      return this.searchRecurively(ptr.right, key);
    }
  }
  searchIterativerly(ptr, key) {
    if (!ptr) {
      return "Not Found";
    }

    while (ptr) {
      if (ptr.data === key) {
        return "Found";
      } else if (key < ptr.data) {
        ptr = ptr.left;
      } else {
        ptr = ptr.right;
      }
    }
    return "Not Found";
  }
  levelOrderTraversal(ptr) {
    if (ptr === null) {
      return;
    }
    let Queue = [];
    let front = -1;
    let rear = -1;
    console.log(ptr.data);
    Queue[++rear] = ptr;
    front++;
    while (front <= rear) {
      ptr = Queue[front++];
      if (ptr.left) {
        console.log(ptr.left.data);
        Queue[++rear] = ptr.left;
      }
      if (ptr.right) {
        console.log(ptr.right.data);
        Queue[++rear] = ptr.right;
      }
    }
  }
  insertIterativeApproach(root, data) {
    let node = new Node(data);
    if (root === null) {
      root = node;
      return;
    }

    let prev = null;
    let ptr = root;
    while (ptr) {
      if (data < ptr.data) {
        prev = ptr;
        ptr = ptr.left;
      } else if (data > ptr.data) {
        prev = ptr;
        ptr = ptr.right;
      }
    }

    if (prev.data > data) {
      prev.left = node;
    } else {
      prev.right = node;
    }
    return;
  }
}

let root = new Node(30);
root.insertIterativeApproach(root, 20);
root.insertIterativeApproach(root, 40);
root.insertIterativeApproach(root, 10);
root.insertIterativeApproach(root, 25);
root.insertIterativeApproach(root, 35);
root.insertIterativeApproach(root, 50);
root.levelOrderTraversal(root);
console.log(root.right.right);
// root.left = new Node(20);
// root.right = new Node(40);
// root.left.left = new Node(10);
// root.left.right = new Node(25);
// root.right.left = new Node(35);
// root.right.right = new Node(50);

// console.log("SEARCHING RECURSIVELY...");
// console.log(root.searchRecurively(root, 31));

// console.log("SEARCHING ITERATIVELY...");
// console.log(root.searchIterativerly(root, 23));
