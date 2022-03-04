class Stack {
  constructor() {
    this.data = []
  }

  pop() {
    return this.data.pop()
  }

  push(record) {
    this.data.push(record)
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  size() {
    return this.data.length
  }
}

module.exports = Stack
