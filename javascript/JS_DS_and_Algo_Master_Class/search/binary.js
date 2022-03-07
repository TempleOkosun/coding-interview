const binary = (arr, elem) => {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  let middleElement = arr[middle]

  while (middleElement !== elem) {
    if (elem < middleElement) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  // if (arr[middle] === elem) {
  //   return middle
  // } else {
  //   return -1
  // }
  return arr[middle] === elem ? middle : -1
}
