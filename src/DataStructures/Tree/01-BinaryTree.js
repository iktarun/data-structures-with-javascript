/* Class containing left and right child of current
   node and key value*/
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }

  preOrderRecursive(root) {
    if (root !== null) {
      console.log(root.data);
      this.preOrderRecursive(root.left);
      this.preOrderRecursive(root.right);
    }
  }
  inOrderRecursive(root) {
    if (root !== null) {
      this.inOrderRecursive(root.left);
      console.log(root.data);
      this.inOrderRecursive(root.right);
    }
  }
  postOrderRecursive(root) {
    if (root !== null) {
      this.postOrderRecursive(root.left);
      this.postOrderRecursive(root.right);
      console.log(root.data);
    }
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Preorder
console.log("PRE-ORDER TRAVERSAL");
root.preOrderRecursive(root);

console.log("IN-ORDER TRAVERSAL");
root.inOrderRecursive(root);

console.log("POST-ORDER TRAVERSAL");
root.postOrderRecursive(root);
