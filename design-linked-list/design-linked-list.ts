// class ListNode {
//   val: number;
//   next: ListNode | null;
  
//   constructor(val: number) {
//     this.val = val;
//     this.next = null;
//   }
// }

class MyLinkedList {
  head: ListNode | null;
  size: number;
  
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Get the value of the indexth node
  get(index: number): number {
    // If index is invalid
    if (index < 0 || index >= this.size) {
      return -1;
    }
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    
    return current!.val;
  }
  
  // Add a node at the head
  addAtHead(val: number): void {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  // Add a node at the tail
  addAtTail(val: number): void {
    const newNode = new ListNode(val);
    
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      
      // Traverse to the last node
      while (current.next !== null) {
        current = current.next;
      }
      
      // Link the new node
      current.next = newNode;
    }
    
    this.size++;
  }
  
  // Add a node at a specific index
  addAtIndex(index: number, val: number): void {
    // If index is greater than length, do nothing
    if (index > this.size) {
      return;
    }
    
    // If index is 0, add at head
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    
    // Find the node just before the insertion point
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    
    // Create new node and insert it
    const newNode = new ListNode(val);
    newNode.next = current!.next;
    current!.next = newNode;
    
    this.size++;
  }
  
  // Delete the indexth node
  deleteAtIndex(index: number): void {
    // If index is invalid
    if (index < 0 || index >= this.size) {
      return;
    }
    
    // If deleting head
    if (index === 0) {
      this.head = this.head!.next;
    } else {
      // Find the node just before the one to delete
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      
      // Skip over the node to delete
      current!.next = current!.next!.next;
    }
    
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */