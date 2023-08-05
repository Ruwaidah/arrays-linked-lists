/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    const removeNode = node.next;
    node.next = null;
    this.tail = node;
    this.length--;
    return removeNode;
  }

  /** shift(): return & remove first item. */

  shift() {
    const removeNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removeNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) return node.val;
      node = node.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) return (node.val = val);
      node = node.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (idx === 0) {
        this.head = newNode;
        this.head.next = node;
        this.length++;
        return newNode;
      } else if (i === idx - 1) {
        node.next = newNode;
        newNode.next = node;
        this.length++;
        return newNode;
      }
      node = node.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let node = this.head;
    if (idx > this.length - 1 || idx < 0) return "idx invalid";
    let removedNode;
    for (let i = 0; i < this.length; i++) {
      if (idx === 0) {
        removedNode = this.head;
        this.head = this.head.next;
        this.length--;
        return removedNode;
      } else if (idx === this.length - 1 && i === this.length - 2) {
        removedNode = node.next.val;
        this.tail = node;
        this.tail.next = null;
        this.length--;
        return removedNode;
      } else if (i === idx - 1) {
        removedNode = node.next.val;
        node.next = node.next.next;
        this.length--;
        return removedNode;
      }
      node = node.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let node = this.head;
    let avrg = 0;
    while (node) {
      avrg += node.val;
      node = node.next;
    }
    return avrg / this.length;
  }
}

module.exports = LinkedList;
