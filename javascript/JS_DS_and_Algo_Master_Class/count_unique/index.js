// Accepts a soirted array
// Counts the unique values in the array
// there can be negative no. in the array

const countUniqueValues = (arr) => {
  let i = 0

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
