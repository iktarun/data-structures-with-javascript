class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function zigZagTravsersal(root) {
  let Queue = [];
  let front = 0;
  let rear = 0;
  let leftToRight = true;
  Queue.push(root);
  leftToRight = true;
  while (front <= rear) {
    let n = rear - front + 1;
    let tempArr = [];
    for (let i = 1; i <= n; i++) {
      let node = Queue[front++];
      console.log(node.data);
      tempArr.push(node);
    }

    for (let i = tempArr.length - 1; i >= 0; i--) {
      if (leftToRight) {
        if (tempArr[i].right) {
          Queue[++rear] = tempArr[i].right;
        }
        if (tempArr[i].left) {
          Queue[++rear] = tempArr[i].left;
        }
      } else {
        if (tempArr[i].left) {
          Queue[++rear] = tempArr[i].left;
        }
        if (tempArr[i].left) {
          Queue[++rear] = tempArr[i].right;
        }
      }
    }
    leftToRight = !leftToRight;
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

zigZagTravsersal(root);
