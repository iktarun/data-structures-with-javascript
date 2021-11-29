function Node(data, next = null) {
  this.data = data === undefined ? 0 : data;
  this.next = next === undefined ? null : next;
}

function LinkedList() {
  this.head = null;
}

function print(head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}

function removeDuplicates(head) {
  let head = this.head;
  if (head === null) {
    return null;
  }
  let current = head;
  let next = head.next;

  while (next) {
    if (next.data !== current.data) {
      current.next = next;
      current = current.next;
    }
    next = next.next;
  }
  current.next = null;
}

let head = new LinkedList();

head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(6);

print(head);
