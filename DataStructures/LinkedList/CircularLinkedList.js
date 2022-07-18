class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.flag = 0; //will be used for recursion
  }
}
/**
 * Display a Linked List
 */
LinkedList.prototype.print = function () {
    let head = this.head;
    let current = this.head;
  
    if (head != null) {
      do {
        console.log(current.data);
        current = current.next;
      } while (current != head);
    }
  };
  
  /**
   * Display a Linked List using recursion
   */
  
  LinkedList.prototype.printUsingRecursion = function (current) {
    if (this.head != null) {
        if (current !== this.head || this.flag === 0) {
        console.log(current.data);
        this.flag = 1;
        this.printUsingRecursion(current.next);
        }
        this.flag = 0;
    }
  };
/**
 * Insert at the end of circular linked list
 */
LinkedList.prototype.insertAtEnd = function (data) {
  // A newNode object is created with property data and next = null
  let newNode = new Node();
  newNode.data = data;
  if (!this.head) {
    newNode.next = newNode;
    this.head = newNode;
    return this.head;
  }

  let tail = this.head;
  while (tail && tail.next !== this.head) {
    tail = tail.next;
  }

  tail.next = newNode;
  newNode.next = this.head;

  return this.head;
};
/**
 * INSERT AT THE BEGINING OF LINKED LIST
 */
LinkedList.prototype.insertAtBeginning = function (data) {
  let newNode = new Node();
  newNode.data = data;
  if (!this.head) {
    newNode.next = newNode;
    this.head = newNode;
    return this.head;
  }

  newNode.next = this.head;
  let tail = this.head;
  while (tail && tail.next !== this.head) {
    tail = tail.next;
  }

  tail.next = newNode;
  this.head = newNode;

  return this.head;
};

/*
 * DELETE AT A GIVEN POSITION
 */
LinkedList.prototype.deleteAtGivenPosition = function (position) {
    if (this.head === null) {
      return -1;
    }
  
    // If we are removing from postion1
    // NOTES: Also need to make a check whether position should be less that nodes count, otherwise it will give
    //the wrong result
   if(position == 1){
    let current = this.head;
    while(current.next != this.head){
        current = current.next;
    }

    // If current is head node, or only one node is there
    if(current === this.head){
        console.log("delete node at position", position,"is", current);
        delete current;
        this.head = null;
    }else{
        let data = this.head.data;
        console.log("delete node at position", position,"is", current.next);
        current.next = this.head.next;
        let tempNode =  this.head;
        delete tempNode;
        this.head = current.next;
        return data;
    }
   }else{
       let current = this.head;
        for(let i=1; i < position - 1; i++){
            current = current.next;
        }
        
        let tempNode = current.next;
        current.next = tempNode.next;
        console.log("delete node at position", position,"is", tempNode);
        delete tempNode;

   }
  };

let list = new LinkedList();
// list.insertAtEnd(4);
// list.insertAtEnd(3);
// list.insertAtEnd(1);
// list.insertAtEnd(2);

list.insertAtBeginning(4);
// list.insertAtBeginning(3);
// list.insertAtBeginning(1);
// list.insertAtBeginning(2);
console.log("Before Deletion Printing List-----");
list.printUsingRecursion(list.head);
list.deleteAtGivenPosition(1);
console.log("After Deletion Printing List-----");
list.printUsingRecursion(list.head);
