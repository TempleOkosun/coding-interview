// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoize = (func) => {
  // a cache of results
  const results = {}
  // return a function for the cache of results
  return (...args) => {
    // a JSON key to save the results cache
    const argsKey = JSON.stringify(args)
    // execute `func` only if there is no cached value of clumsysquare()
    if (!results[argsKey]) {
      // store the return value of clumsysquare()
      results[argsKey] = func(...args)
    }
    // return the cached results
    return results[argsKey]
  }
}

// Recursive Solution
const fib = memoize((n) => {
  return n < 2 ? n : fib(n - 1) + fib(n - 2)
})

module.exports = fib

// Iterative Solution
// const result = [0, 1]
//
// for (let i = 2; i <= n; i++) {
//   const a = result[i - 1]
//   const b = result[i - 2]
//   result.push(a + b)
// }
// return result[n]

// Recursive Solution
// if (n < 2) {
//   return n
// } else {
//   return fib(n - 1) + fib(n - 2)
// // }
// return n < 2 ? n : fib(n - 1) + fib(n - 2)
