//Function to sort a linked list of 0s, 1s and 2s.
function segregate(head) {
  //your code here
  let c0 = 0,
    c1 = 0,
    c2 = 0;
  let curr = head;
  while (curr !== null) {
    if (curr.data === 0) c0++;
    if (curr.data == 1) c1++;
    if (curr.data == 2) c2++;
    curr = curr.next;
  }
  curr = head;
  while (c0 > 0 && curr !== null) {
    curr.data = 0;
    curr = curr.next;
    c0--;
  }
  while (c1 > 0 && curr !== null) {
    curr.data = 1;
    curr = curr.next;
    c1--;
  }
  while (c2 > 0 && curr !== null) {
    curr.data = 2;
    curr = curr.next;
    c2--;
  }
  return head;
}
var head = new Node(0);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(0);
head.next.next.next.next.next.next = new Node(1);
head.next.next.next.next.next.next.next = new Node(1);

segregate(head);
