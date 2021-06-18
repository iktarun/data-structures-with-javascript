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

function LinkedList() {
  this.head = null;
  return this;
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
  if (this.head === null) {
    let node = new Node();
    node.data = data;
    this.head = node;
    return this.head;
  }

  if (position === 0) {
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

const obj = new LinkedList();
// obj.insertAtBeginning(1);
// obj.insertAtBeginning(2);
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
 */
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

// obj.print();
