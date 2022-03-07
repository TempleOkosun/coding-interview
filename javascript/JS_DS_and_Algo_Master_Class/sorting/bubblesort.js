const bubbleSort = (array) => {
  // return array, sorted with bubble sort
  // the larger numbers bubble up to the end or top of the array
  let noSwaps
  for (let i = array.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) {
      break
    }
  }
  return array
}
