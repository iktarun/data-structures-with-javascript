class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function height(node) {
  if (!node) {
    return 0;
  }

  return 1 + Math.max(height(node.left), height(node.right));
}

function diameter(root) {
  if (!root) {
    return 0;
  }

  let lheight = height(root.left);
  let rheight = height(root.right);

  let ldiamter = diameter(root.left);
  let rdiamter = diameter(root.right);

  return Math.max(1 + lheight + rheight, Math.max(ldiamter, rdiamter));
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameter(root));
