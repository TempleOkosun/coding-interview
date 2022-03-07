// Accepts sorted array of integers
// find first the pair of integers where sum = 0
// Return an array of both values that sums to 0 or undefined if there is none

const sumZero = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

module.exports = sumZero
