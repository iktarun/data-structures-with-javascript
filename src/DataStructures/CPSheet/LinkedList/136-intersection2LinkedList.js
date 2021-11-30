var head1;
var head2;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findIntersection(head1, head2) {
  //your code here
  let list = null;
  let current = null;
  let ptr1 = head1;
  let ptr2 = head2;
  while (ptr1 !== null && ptr2 !== null) {
    // console.log(ptr1.data, ptr2.data);
    if (ptr1.data === ptr2.data) {
      if (list === null) {
        list = { ...ptr1 };
        list.next = null;
        current = list;
      } else {
        current.next = { ...ptr1 };
        current = current.next;
        current.next = null;
      }
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    } else if (ptr1.data < ptr2.data) {
      ptr1 = ptr1.next;
    } else {
      ptr2 = ptr2.next;
    }
  }
  console.log("List", list);
  return list;
}

head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

head2 = new Node(2);
head2.next = new Node(4);

// console.log(head2);

findIntersection(head1, head2);
