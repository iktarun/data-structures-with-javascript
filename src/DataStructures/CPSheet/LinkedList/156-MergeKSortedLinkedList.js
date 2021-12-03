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
function mergeKLists(arr, k) {
  let list3 = null;
  list3Curr = list3;

  for (let i = 1; i <= k; i++) {
    let node = new Node(-1);
    node.next = list3;
    list3 = node;
    list3Curr = list3;

    let list1 = arr[0];
    let list2 = arr[i];
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
    arr[0] = list3.next;
  }

  print(arr[0]);
}

let k = 3;
// Number of elements in each list
let n = 4;
// an array of pointers storing the
// head nodes of the linked lists
let arr = new Array(k);
arr[0] = new Node(1);
arr[0].next = new Node(3);
arr[0].next.next = new Node(5);
arr[0].next.next.next = new Node(7);

arr[1] = new Node(2);
arr[1].next = new Node(4);
arr[1].next.next = new Node(6);
arr[1].next.next.next = new Node(8);

arr[2] = new Node(0);
arr[2].next = new Node(9);
arr[2].next.next = new Node(10);
arr[2].next.next.next = new Node(11);

// Merge all lists
head = mergeKLists(arr, k - 1);
// printList(head);
