function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedList() {
  this.head = null;
}
