function Node(data, next = null) {
  return {
    data,
    next: null,
  };
}

/* class based examle to create a node
class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedList() {
  this.head = null;
}

/*OR class based syntax
class LinkedList{
    constructor(){
        this.head = null;
    }
}

*/

LinkedList.prototype.insertAtBeginning = function (data) {
  // A newNode object is created with property data and next = null
  let newNode = new Node();
  newNode.data = data;
  // The pointer next is assigned head pointer so that both pointers now point at the same node.
  newNode.next = this.head;
  // As we are inserting at the beginning the head pointer needs to now point at the newNode.

  this.head = newNode;
  return this.head;
};

LinkedList.prototype.insertAtEnd = function (data) {
  // A newNode object is created with property data and next = null
  let newNode = new Node();
  newNode.data = data;
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }

  tail.next = newNode;

  return this.head;
};

LinkedList.prototype.insertAtGivenPosition = function (data) {
  // A newNode object is created with property data and next = null
  let newNode = new Node();
  newNode.data = data;
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }

  tail.next = newNode;

  return this.head;
};

LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};

LinkedList.prototype.insertAt = function (data, position) {
  // if (this.head === null) {
  //   let node = new Node();
  //   node.data = data;
  //   this.head = node;
  //   return this.head;
  // }

  if (position === 0 || this.head === null) {
    let node = new Node();
    node.data = data;
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  //   Else we need to find the previous node and insert at the next of that node

  const previous = this.getAt(position - 1);
  let newNode = new Node(data);
  newNode.next = previous.next;
  previous.next = newNode;

  return this.head;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return null;
  }

  //   If we have only one node in the list then
  if (this.head.next === null) {
    console.log("Deleted last node is:", this.head);
    this.head = null;
  }

  //   If we have more than 1 node then
  let current = this.head;
  let tail = this.head.next;

  while (tail.next != null) {
    current = tail;
    tail = tail.next;
  }

  console.log("Deleted node is:", tail.data);
  current.next = null;
  return this.head;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return null;
  }

  let firstNode = this.head;
  console.log("Deleted First Node", firstNode.data);
  this.head = this.head.next;
  return this.head;
};

LinkedList.prototype.print = function () {
  let tempHead = this.head;
  while (tempHead != null) {
    console.log(tempHead.data);
    tempHead = tempHead.next;
  }
};

LinkedList.prototype.deleteList = function () {
  console.log("Deleting the entire linked list");
  this.head = null;
};

// Insert data in a SORTED LINKED LIST
LinkedList.prototype.sortedInsert = function (data) {
  // case1: If list is empty
  if (!this.head) {
    let node = new Node(data);
    this.head = node;
    return this.head;
  }

  let current = null;
  let tail = this.head;
  while (tail && tail.data < data) {
    current = tail;
    tail = tail.next;
  }
  let node = new Node(data);

  // If we are going to insert at the first position
  if (current === null) {
    node.next = this.head;
    this.head = node;
    return this.head;
  }
  // If we are going to insert at the middle or last position
  node.next = current.next;
  current.next = node;
};

LinkedList.prototype.removeDuplicatesFromSortedList = function () {
  if (!this.head) {
    return null;
  }

  let current = this.head;

  while (current != null) {
    if (current.next && current.data === current.next.data) {
      let tempPtr = current.next;
      while (tempPtr && tempPtr.data === current.data) {
        tempPtr = tempPtr.next;
      }
      current.next = tempPtr;
      continue;
    }
    current = current.next;
  }
};
/*
Reverse a given linked list
 */
LinkedList.prototype.RevereseLinkedList = function () {
  let next = null;
  let current = this.head;
  let prev = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
  return this.head;
};

/*
Reverse a given linked list using recursion
 */
LinkedList.prototype.revereseLinkedListUsingRecursion = function (q, p) {
  if (p) {
    this.revereseLinkedListUsingRecursion(p, p.next);
    p.next = q;
  } else {
    this.head = q;
  }
};

/*
Reverse a given linked list using recursion
 */
LinkedList.prototype.revereseLinkedListUsingRecursionMethod2 = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = this.revereseLinkedListUsingRecursionMethod2(head.next);
  let headNext = head.next;
  headNext.next = head;
  head.next = null;
  return newHead;
};
/**
 * Detect a loop in a linked list
 * Method1: Using Set or we can call it hashmap
 * Method2: Using a flag by changing the data-structure of a list
 * Method3: Using  Floyd’s Cycle-Finding Algorithm
 */
LinkedList.prototype.detectLoopInLinkedList = function () {
  function countNoOfNodesInLoop(ptr) {
    let count = 1;
    let node = ptr;
    while (node.next != ptr) {
      node = node.next;
      count++;
    }
    return count;
  }

  let slwPtr = this.head;
  let fastPtr = this.head;

  while (slwPtr && fastPtr && fastPtr.next) {
    slwPtr = slwPtr.next;
    fastPtr = fastPtr.next.next;
    if (slwPtr === fastPtr) {
      let count = countNoOfNodesInLoop(slwPtr);
      console.log("Loop detected, No Of Nodes in loop is:", count);
      return 1;
    }
  }

  console.log("No Loop detected in the linked list");
  return 0;
};

LinkedList.prototype.mergeTwoSortedLinkedList = function (
  firstList,
  secondList
) {
  let thirdList = null;
  let lastNode = null;

  let firstListPtr = firstList.head;
  let secondListPtr = secondList.head;
  while (firstListPtr != null && secondListPtr != null) {
    if (firstListPtr.data < secondListPtr.data) {
      if (thirdList == null) {
        thirdList = firstListPtr;
        lastNode = firstListPtr;
        firstListPtr = firstListPtr.next;
        lastNode.next = null;
        continue;
      }
      lastNode.next = firstListPtr;
      lastNode = firstListPtr;
      firstListPtr = firstListPtr.next;
      lastNode.next = null;
    } else {
      if (thirdList == null) {
        thirdList = secondListPtr;
        lastNode = secondListPtr;
        secondListPtr = secondListPtr.next;
        lastNode.next = null;
        continue;
      }
      lastNode.next = secondListPtr;
      lastNode = secondListPtr;
      secondListPtr = secondListPtr.next;
      lastNode.next = null;
    }
  }

  // Copy the remaining elements
  if (firstListPtr != null) {
    while (firstListPtr != null) {
      lastNode.next = firstListPtr;
      lastNode = firstListPtr;
      firstListPtr = firstListPtr.next;
      lastNode.next = null;
    }
  }

  if (secondListPtr != null) {
    while (secondListPtr != null) {
      lastNode.next = secondListPtr;
      lastNode = secondListPtr;
      secondListPtr = secondListPtr.next;
      lastNode.next = null;
    }
  }

  // Print the list
  while (thirdList != null) {
    console.log(thirdList.data);
    thirdList = thirdList.next;
  }
};
/**
 * Check list is PALINDROME OR NOT
 */
LinkedList.prototype.checkListPalindrome = function () {
  let head = this.head;
  //your code here
  if (head === null) {
    return 0;
  }

  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.data);
    current = current.next;
  }
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }

  arr.reverse();

  current = head;
  let i = 1;
  if (arr.length === 2) {
    return arr[0] === arr[1] ? 1 : 0;
  }

  while (i < parseInt(arr.length / 2) && current) {
    if (arr[i] !== current.data) {
      return 0;
    }
    current = current.next;
    i++;
  }

  return 1;
};

// Time: O(N), Space: O(1)
/**
 *
 * @param {*} head
 * @returns
 * 1. First get the middle of linked List
 * 2. pass that node and reverse the linked list after that node to the end
 * 3. start comparing the list
 */
LinkedList.prototype.checkListPalindromeMethod2 = function (head) {
  if (head === null) {
    return true;
  }

  let middleNode = this.middleOfLinkedList(head);

  let lastNode = this.revereseLinkedListUsingRecursionMethod2(middleNode.next);

  let curr = head;
  while (lastNode !== null) {
    if (curr.data !== lastNode.data) {
      return false;
    }
    curr = curr.next;
    lastNode = lastNode.next;
  }

  return true;
};

LinkedList.prototype.addTwoLinkedList = function (list1, list2) {
  //Function to add two numbers represented by linked list.
  //your code here
  let arr1 = [];
  let arr2 = [];
  let res = [];
  let first = list1.head;
  let second = list2.head;

  while (first !== null) {
    arr1.push(first.data);
    first = first.next;
  }

  while (second !== null) {
    arr2.push(second.data);
    second = second.next;
  }

  let i = arr1.length - 1;
  let j = arr2.length - 1;

  let carrySum = 0;
  let k = Math.max(i, j);
  while (i >= 0 && j >= 0) {
    let sum = arr1[i] + arr2[j] + carrySum;
    carrySum = 0;
    if (sum >= 10) {
      carrySum = 1;
      sum = sum % 10;
    }
    res[k--] = sum;

    i--;
    j--;
  }

  if (i >= 0) {
    while (i >= 0) {
      let sum = arr1[i--] + carrySum;
      carrySum = 0;
      res[k--] = sum;
    }
  }

  if (j >= 0) {
    while (j >= 0) {
      let sum = arr2[j--] + carrySum;
      carrySum = 0;
      res[k--] = sum;
    }
  }

  console.log("res", res);
};

LinkedList.prototype.pairWiseSwap = function () {
  //your code here
  let node = this.head;
  if (node === null) {
    return null;
  }

  let p = node.next;
  let q = this.head;
  let next = null;
  let thirdHead = null;
  let thirdCurrent = null;
  let count = 0;

  while (p && q) {
    next = p.next;
    p.next = q;
    q.next = next; //this is important step, if we forget to add it, then it will add a cycle in the list
    if (count === 0) {
      thirdHead = p;
      thirdCurrent = q;
      count++;
    } else {
      thirdCurrent.next = p;
      thirdCurrent = q;
    }

    q = next;
    if (next) {
      p = next.next;
    }
  }
  console.log(thirdHead);

  let tempHead = thirdHead;
  while (tempHead != null) {
    console.log(tempHead.data);
    tempHead = tempHead.next;
  }

  return thirdHead;
};

LinkedList.prototype.deleteDuplicates = function () {
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

  // Method1, by copying the data
  // while (next) {
  //   if (next.data !== current.data) {
  //     current = current.next;
  //     current.data = next.data;
  //   }

  //   next = next.next;
  // }
  // current.next = null;

  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
  return head;
};

LinkedList.prototype.printHead = function (head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
};

LinkedList.prototype.rotateRight = function (head, k) {
  /**
   * Approach1, need to find the issue with this approach
  
  let count = 0;
  let current = head;
  let fastPtr = null;
  while (current != null) {
    if (current && current.next === null) {
      fastPtr = current;
    }
    current = current.next;
    count++;
  }
  // console.log(count);
  k = k % count;
  let prevPtr = head;
  for (let i = 1; i < count - k - 2; i++) {
    prevPtr = prevPtr.next;
  }

  fastPtr.next = head;
  head = prevPtr.next;
  prevPtr.next = null;

  this.printHead(head);

  return head;
  */

  let dummy = new ListNode();
  let slowPtr = dummy;
  let fastPtr = dummy;
  dummy.next = head;
  let count = 0;

  while (fastPtr.next != null) {
    count++;
    fastPtr = fastPtr.next;
  }

  k = k % count;
  for (let i = 1; i <= count - k; i++) {
    slowPtr = slowPtr.next;
  }

  fastPtr.next = dummy.next;
  dummy.next = slowPtr.next;
  slowPtr.next = null;

  this.printHead(dummy.next);
  return;
};

LinkedList.prototype.middleOfLinkedList = function (head) {
  let slwPtr = head;
  let fastPtr = head;
  while (fastPtr != null && fastPtr.next != null) {
    slwPtr = slwPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slwPtr;
};

const obj = new LinkedList();

/**
 *
 */
const list1 = new LinkedList();
// list1.insertAtEnd(0);
list1.insertAtEnd(2);
list1.insertAtEnd(1);
list1.insertAtEnd(3);
list1.insertAtEnd(1);
list1.insertAtEnd(2);
// list1.insertAtEnd(1);
list1.print();
// list1.rotateRight(list1.head, 5);

let res = list1.checkListPalindromeMethod2(list1.head);

console.log(res);

// const list2 = new LinkedList();
// list2.insertAtEnd(2);
// list2.insertAtEnd(9);
// list2.insertAtEnd(8);
// list2.print();

// list2.addTwoLinkedList(list1, list2);

// obj.insertAtBeginning(1);
// obj.insertAtBeginning(5);
// obj.insertAtBeginning(1);
// obj.insertAtBeginning(2);
// obj.print();
// console.log("RESULT:", obj.checkListPalindrome());
// obj.insertAtBeginning(3);
// obj.insertAtBeginning(4);
// obj.insertAtEnd(5);
// obj.insertAt(6, 2);
// obj.deleteFirstNode();
// obj.deleteLastNode();
// obj.print();
// obj.deleteList();
// obj.sortedInsert(4);
// obj.sortedInsert(3);
// obj.sortedInsert(1);
// obj.sortedInsert(5);
// obj.sortedInsert(2);
// obj.sortedInsert(2);

/* remove duplices section
  obj.sortedInsert(4);
  obj.sortedInsert(3);
  obj.sortedInsert(1);
  obj.sortedInsert(2);
  obj.sortedInsert(2);
  obj.sortedInsert(2);
  console.log("Before Deletion");
  obj.print();
  obj.removeDuplicatesFromSortedList();
  console.log("After removing duplicates");
  obj.print();
*/

/*
  Reverse a Linked List
obj.sortedInsert(4);
obj.sortedInsert(3);
obj.sortedInsert(1);
obj.sortedInsert(2);
console.log("Before reversing a linked list");
obj.print();
// obj.RevereseLinkedList();
obj.revereseLinkedListUsingRecursion(null, obj.head);
console.log("After reversing a linked list");
obj.print();
 */

/**
 * Detect a loop in linked list call
obj.sortedInsert(4);
obj.sortedInsert(3);
obj.sortedInsert(1);
obj.sortedInsert(2);
obj.sortedInsert(5);
obj.sortedInsert(6);
obj.head.next.next.next = obj.head;
obj.detectLoopInLinkedList();
 */
/**
 * Merge two sorted linked List

const list1 = new LinkedList();
list1.sortedInsert(2);
list1.sortedInsert(8);
list1.sortedInsert(10);
list1.sortedInsert(15);
list1.sortedInsert(20);
list1.sortedInsert(25);

const list2 = new LinkedList();
list2.sortedInsert(4);
list2.sortedInsert(7);
list2.sortedInsert(12);
list2.sortedInsert(15);

// Print before mergeing
console.log("List1");
obj.print.call(list1);
console.log("List2");
obj.print.call(list2);
console.log("After merge-----");
obj.mergeTwoSortedLinkedList(list1, list2);
 */

// obj.print();

// function Test(val, next) {
//   this.val = val;
//   this.next = null;
// }
// let a = new Test(2);
// console.log(a);
