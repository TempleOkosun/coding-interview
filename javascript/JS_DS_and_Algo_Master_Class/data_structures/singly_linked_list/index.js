// Singly linked list
// A DS that contains a head, tail and length property

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// let first = new Node('Hi')
// first.next = new Node("there")
// first.next.next = new Node("there")

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      // take the current tail and set the next property to the new node
      this.tail.next = newNode
      // update this.tail to point to the new node
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) {
      return undefined
    }
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) {
      return undefined
    }
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
}
