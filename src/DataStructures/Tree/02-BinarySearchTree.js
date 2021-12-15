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

  //Function to check whether a Binary Tree is BST or not.
  isBST(root) {
    //your code here
    if (!root) {
      return true;
    }

    if (
      this.checkForBST(root.left, 0, root.data) &&
      this.checkForBST(root.right, root.data, 100000)
    ) {
      return true;
    }

    return false;
  }
  checkForBST(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.data > min && node.data < max) {
      return (
        this.checkForBST(node.left, min, node.data) &&
        this.checkForBST(node.right, node.data, max)
      );
    }

    return false;
  }
  noSibling(root) {
    //code here Print all nodes that don't have sibling
    let number = [];

    function checkForSiblings(node, number) {
      if (node) {
        if ((node.left === null) ^ (node.right === null)) {
          if (node.left) {
            number.push(node.left.data);
          } else {
            number.push(node.right.data);
          }
        }

        checkForSiblings(node.left, number);
        checkForSiblings(node.right, number);
      }
    }

    if ((root.left === null) ^ (root.right === null)) {
      if (root.left) {
        number.push(root.left.data);
      } else {
        number.push(root.right.data);
      }
    }

    checkForSiblings(root.left, number);
    checkForSiblings(root.right, number);
    if (number.length === 0) {
      return number.push(-1);
    }
    return number;
  }
  isPairPresentWithGivenTarget(root, target) {
    //code here,

    let list = [];
    let result = [];
    this.treeToList(root, list);
    let start = 0;
    let end = list.length - 1;
    while (start < end) {
      if (list[start] + list[end] === target) {
        result.push(list[start]);
        result.push(list[end]);
        return result;
      } else if (list[start] + list[end] < target) {
        start++;
      } else {
        end--;
      }
    }

    return result;
  }

  treeToList(root, list) {
    // Base Case... INORDER BST gives the sorted list
    // if (root === null) return list;
    if (root) {
      this.treeToList(root.left, list);
      list.push(root.data);
      this.treeToList(root.right, list);
    }

    // return list;
  }
  getCountLieInGivenRange(root, low, high) {
    // Count BST nodes that lie in a given range
    let count = 0;
    function getCount(node, low, high, count) {
      if (!node) {
        return count;
      }
      if (node.data > low && node.data < high) {
        count++;
      }
      count = getCount(node.left, low, high, count);

      count = getCount(node.right, low, high, count);

      return count;
    }

    count = getCount(root, low, high, count);
    return count;
  }
}

let root = new Node(30);
// root.insertIterativeApproach(root, 20);
// root.insertIterativeApproach(root, 40);
// root.insertIterativeApproach(root, 10);
// root.insertIterativeApproach(root, 25);
// root.insertIterativeApproach(root, 35);
// root.insertIterativeApproach(root, 50);
root.right = new Node(40);
root.left = new Node(20);
root.right.right = new Node(50);
root.left.left = new Node(10);
console.log(root.getCountLieInGivenRange(root, 5, 45));
// root.levelOrderTraversal(root);
// console.log(root.right.right);
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
