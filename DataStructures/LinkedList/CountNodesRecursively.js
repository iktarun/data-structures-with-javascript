function newNode() {
    return {
      data: null,
      next: null
    };
  }
  
  function SingleLinkedList() {
    
    let head = null; 
    
    return {
      insert( data) {
        let node = newNode();
        node.data = data;
        node.next = head;
        head = node;
      },
     
      count(head) { 
        if(head == null){
            return 0;
        }

        return 1 + this.count(head.next);
      },
      print(head) {
        let tempHead = head;
        while (tempHead != null) {
          console.log(tempHead.data);
          tempHead = tempHead.next;
        }
      },
      getHead(){
          return head;
      }
    };
  }
  

const node = SingleLinkedList();

node.insert(5);
node.insert(6);
node.insert(7);
node.insert(8);
node.insert(9);
node.insert(10);
node.print();
console.log("Number of nodes in the list", node.count(node.getHead()));
  