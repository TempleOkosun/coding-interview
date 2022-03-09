// Reverse a linked list
// We will be giving the head node

const reverseLinkedList = (head) => {
  let prev = null
  let current = head

  while (current) {
    let temp = current.next

    // change direction
    current.next = prev
    prev = current
    current = temp
  }
  return prev
}
