class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function heightOfTree(ptr) {
  if (ptr !== null) {
    return 1 + Math.max(heightOfTree(ptr.left), heightOfTree(ptr.right));
  }
  return 0;
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

console.log(heightOfTree(root));
