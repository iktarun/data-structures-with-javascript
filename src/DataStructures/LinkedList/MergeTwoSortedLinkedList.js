var head1;
var head2;

function Node(data, next) {
  this.data = data === undefined ? 0 : data;
  this.next = next === undefined ? null : next;
}

function print(head) {
  let tempHead = head;
  while (tempHead != null) {
    console.log(tempHead.data);
    tempHead = tempHead.next;
  }
}
function merge(list1, list2) {
  let list3 = new Node(-1);
  list3Curr = list3;

  while (list1 !== null && list2 !== null) {
    if (list1.data > list2.data) {
      list3Curr.next = list2;
      list2 = list2.next;
      list3Curr = list3Curr.next;
    } else if (list1.data < list2.data) {
      list3Curr.next = list1;
      list1 = list1.next;
      list3Curr = list3Curr.next;
    } else {
      list3Curr.next = list1;
      list1 = list1.next;
      list3Curr = list3Curr.next;

      list3Curr.next = list2;
      list2 = list2.next;
      list3Curr = list3Curr.next;
    }
  }
  while (list1 !== null) {
    list3Curr.next = list1;
    list1 = list1.next;
    list3Curr = list3Curr.next;
  }
  while (list2 !== null) {
    list3Curr.next = list2;
    list2 = list2.next;
    list3Curr = list3Curr.next;
  }
  print(list3.next);
}

head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);

head2 = new Node(3);
head2.next = new Node(4);
head2.next.next = new Node(5);

merge(head1, head2);
