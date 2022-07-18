class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
    this.prev = null;
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
  let current = this.head;
  console.log("PRINTING LIST");
  if (current != null) {
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
};
/**
 * INSERT AT THE BEGINING OF LINKED LIST
 */

LinkedList.prototype.insertAtBegining = function (data) {
  let node = new Node(data);

  if (this.head === null) {
    this.head = node;
    return this.head;
  }

  this.head.prev = node;
  node.next = this.head;
  this.head = node;
};

/**
 * INSERT AT THE BEGINING OF LINKED LIST
 */
LinkedList.prototype.insertAtEnd = function (data) {
  let node = new Node(data);

  if (this.head === null) {
    this.head = node;
    return this.head;
  }

  let current = this.head;
  while (current.next != null) {
    current = current.next;
  }

  current.next = node;
  node.prev = current;
  return this.head;
};

/**
 * 
 * @param {*} position 
 * Delete a given poistion
 */
LinkedList.prototype.deleteAtGivenPosition = function(position){

if(this.head === null){
    return null;
}

// Always make sure poistion should be less than count of nodes
if(position === 1){
        let node = this.head;
        console.log("Deleted node", node.data);
        if(node.next){
            this.head = node.next;
            node.next.prev = null;
            delete node;
        }
}else{
        let current = this.head;
        for(let i=1; i< position; i++){
            current = current.next;
        }

        current.prev.next = current.next;
        if(current.next){
            current.next.prev = current.prev;
        }
    }
}

/**
 * 
 * Reverse list
 */
 LinkedList.prototype.reverse = function(){
    let prev = null;
    let next = null;
    let current = this.head;

    while(current !== null){
        next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
    }
    this.head = prev;
    return this.head;
 }



const list = new LinkedList();

/* INSERT AT BEGINING OF LIST */
list.insertAtBegining(1);
list.insertAtBegining(2);
list.insertAtBegining(3);
list.insertAtBegining(4);
list.insertAtBegining(5);

/* 
*DELETION AT GIVEN POSITION
list.print("Before Deletion");
list.deleteAtGivenPosition(3);
*/

/*
 REVERSE THE LINKED LIST
list.print();
list.reverse();
list.print();

*/

list.print();
list.reverse();
list.print();

