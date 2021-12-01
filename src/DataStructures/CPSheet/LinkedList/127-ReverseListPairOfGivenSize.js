var head;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function print(head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}

function reverse(k) {
  let current = head;
  let prev = null;
  let next = null;
  let count = 0;

  let list2 = null;
  let list2Current = null;
  let firstNodeList2 = null;

  let isFirstPass = true;
  while (current !== null) {
    firstNodeList2 = current;
    count = 0;
    prev = null;
    while (count < k && current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }

    if (isFirstPass === true) {
      list2 = prev;
      isFirstPass = false;
    } else {
      list2Current.next = prev;
    }
    list2Current = firstNodeList2;
  }
  print(list2);
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

reverse(3);
