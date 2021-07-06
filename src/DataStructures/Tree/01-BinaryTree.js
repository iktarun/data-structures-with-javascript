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

  iterativePreOrderTraversal(root) {
    let stack = [];
    let p = root;
    while (p || stack.length !== 0) {
      if (p) {
        console.log(p.data);
        stack.push(p);
        p = p.left;
      } else {
        p = stack.pop();
        p = p.right;
      }
    }
  }
  iterativeInOrderTraversal(root) {
    let stack = [];
    let p = root;
    while (p || stack.length !== 0) {
      if (p) {
        stack.push(p);
        p = p.left;
      } else {
        p = stack.pop();
        console.log(p.data);
        p = p.right;
      }
    }
  }
  //   Using 2 stacks
  iterativePostOrderTraversal(root) {
    let stack1 = [];
    let stack2 = [];

    stack1.push(root);
    while (stack1.length !== 0) {
      let node = stack1.pop();
      stack2.push(node);
      if (node) {
        stack1.push(node.left);
        stack1.push(node.right);
      }
    }
    // console.log(stack2.length);
    while (stack2.length !== 0) {
      let node = stack2.pop();
      if (node) {
        console.log(node.data);
      }
    }
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Recursive methods
// console.log("PRE-ORDER TRAVERSAL");
// root.preOrderRecursive(root);

// console.log("IN-ORDER TRAVERSAL");
// root.inOrderRecursive(root);

// console.log("POST-ORDER TRAVERSAL");
// root.postOrderRecursive(root);

// Iterative methods
// console.log("PRE-ORDER TRAVERSAL ITERATIVE");
// root.iterativePreOrderTraversal(root);

// console.log("IN-ORDER TRAVERSAL ITERATIVE");
// root.iterativeInOrderTraversal(root);

console.log("POST-ORDER TRAVERSAL ITERATIVE");
root.iterativePostOrderTraversal(root);
