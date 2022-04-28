class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1)
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacencyVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList(function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour)
        }
      })
    })(start)
    return result
  }

  depthFirstIterative(start) {
    const stack = [start]
    const result = []
    const visited = {}
    let currentVertex

    visited[start] = true
    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true
          stack.push(neighbour)
        }
      })
    }
    return result
  }

  breadthFirst(start) {
    const queue = [start]
    const result = []
    const visited = {}
    let currentVertex

    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true
          queue.push(neighbour)
        }
      })
    }
    return result
  }
}
