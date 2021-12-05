class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
function countNoOfLeafNodes(ptr) {
  if (ptr === null) {
    return 0;
  }

  if (ptr.left === null && ptr.right === null) {
    return countNoOfLeafNodes(ptr.left) + countNoOfLeafNodes(ptr.right) + 1;
  } else {
    return countNoOfLeafNodes(ptr.left) + countNoOfLeafNodes(ptr.right);
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.left.left = new Node(8);
root.right.right = new Node(7);
root.right.right.right = new Node(9);

console.log(countNoOfLeafNodes(root));
