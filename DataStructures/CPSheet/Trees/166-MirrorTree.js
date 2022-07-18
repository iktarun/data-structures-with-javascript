// PostOrder + Switching the left/right pointers
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function mirrorTree(node) {
  if (node === null) {
    return node;
  }

  let left = mirrorTree(node.left);
  let right = mirrorTree(node.right);

  node.left = right;
  node.right = left;
  return node;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log(mirrorTree(root));
