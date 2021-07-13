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

  countNoOfNodes(ptr) {
    let x, y;

    if (ptr !== null) {
      x = this.countNoOfNodes(ptr.left);
      y = this.countNoOfNodes(ptr.right);
      /* Below commented code is for...count Nodes with degree 2
      // if(ptr.left && ptr.right){
      //   return x + y + 1;
      // }else{
      //   return x + y;
      // } */
      /**
       * Get sum of all the nodes
       * return x + y + ptr.data;
       */

      return x + y + 1;
    }
    return 0;
  }
  heightOfTree(ptr) {
    let x, y;

    if (ptr !== null) {
      x = this.heightOfTree(ptr.left);
      y = this.heightOfTree(ptr.right);
      if (x > y) {
        return x + 1;
      } else {
        return y + 1;
      }
    }
    return 0;
  }

  countNoOfLeafNodes(ptr) {
    let x, y;

    if (ptr !== null) {
      x = this.countNoOfLeafNodes(ptr.left);
      y = this.countNoOfLeafNodes(ptr.right);

      if (ptr.left === null && ptr.right === null) {
        return x + y + 1;
      } else {
        return x + y;
      }
    }
    return 0;
  }
  countNoOfNodesWithDegreeTwo(ptr) {
    let x, y;

    if (ptr !== null) {
      x = this.countNoOfNodesWithDegreeTwo(ptr.left);
      y = this.countNoOfNodesWithDegreeTwo(ptr.right);

      if (ptr.left !== null && ptr.right !== null) {
        return x + y + 1;
      } else {
        return x + y;
      }
    }
    return 0;
  }

  countNoOfNodesWithDegreeOne(ptr) {
    let x, y;

    if (ptr !== null) {
      x = this.countNoOfNodesWithDegreeOne(ptr.left);
      y = this.countNoOfNodesWithDegreeOne(ptr.right);

      /**
       *  if (
        (ptr.left !== null ^ ptr.right !== null)
       */
      if (
        (ptr.left !== null && ptr.right === null) ||
        (ptr.left === null && ptr.right !== null)
      ) {
        return x + y + 1;
      } else {
        return x + y;
      }
    }
    return 0;
  }
  hasPathSum(root, target, sum = 0) {
    //code here

    if (root === null) {
      return false;
    }

    sum = sum + root.data;

    if (sum === target && root.left === null && root.left === null) {
      return true;
    }

    return (
      this.hasPathSum(root.left, target, sum) ||
      this.hasPathSum(root.right, target, sum)
    );
  }

  leftView(root) {
    //your code here

    let number = [];

    function leftTraversal(node) {
      let Queue = [];
      let front = 0;
      let rear = 0;
      Queue[rear] = node;
      while (front <= rear) {
        let n = rear - front + 1;

        for (let i = 1; i <= n; i++) {
          let tempNode = Queue[front++];

          if (i === 1) {
            number.push(tempNode.data);
          }

          if (tempNode.left) {
            Queue[++rear] = tempNode.left;
          }

          if (tempNode.right) {
            Queue[++rear] = tempNode.right;
          }
        }
      }
    }

    leftTraversal(root);
    return number;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

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

// console.log("POST-ORDER TRAVERSAL ITERATIVE");
// root.iterativePostOrderTraversal(root);

// console.log("LEVEL-ORDER TRAVERSAL ITERATIVE");
// root.levelOrderTraversal(root);

// console.log("COUNT NO OF NODES, RECURSIVELY");
// console.log(root.countNoOfNodes(root));

// console.log("HEIGHT OF BINARY TREE, RECURSIVELY");
// console.log(root.heightOfTree(root));

// console.log("COUNT NO OF LEAF NODES, RECURSIVELY");
// console.log(root.countNoOfLeafNodes(root));

// console.log("COUNT NO OF NODES WITH DEGREE 2, RECURSIVELY");
// console.log(root.countNoOfNodesWithDegreeTwo(root));

// console.log("COUNT NO OF NODES WITH DEGREE 1, RECURSIVELY");
// console.log(root.countNoOfNodesWithDegreeOne(root));
// console.log(
//   "Given a binary tree and an integer S, check whether there is root to leaf path with its sum as S."
// );
// console.log(root.hasPathSum(root, 8, 0));

console.log("Left View of Binary Tree");
console.log(root.leftView(root));
