// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = []
  }

  add(record) {
    // add to the front of an array
    this.data.unshift(record)
  }

  remove() {
    return this.data.pop()
  }
}

const ticketQueue = new Queue()

ticketQueue.add('Temple')
ticketQueue.length
ticketQueue.remove()

console.log(ticketQueue)
module.exports = Queue
