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

const obj = new LinkedList();
obj.insertAtBeginning(1);
obj.insertAtBeginning(2);
obj.insertAtBeginning(3);
obj.insertAtBeginning(4);
obj.insertAtEnd(5);
obj.insertAt(6, 2);
obj.deleteFirstNode();
obj.deleteLastNode();
obj.print();
obj.deleteList();
obj.print();
