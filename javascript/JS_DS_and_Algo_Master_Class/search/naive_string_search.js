const naiveSearch = (long, short) => {
  // j will increase for the length of short before the next iteration of i
  // we need to also look ahead i

  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break // when we break the inner loop resets but the outer loop moves on
      }
      if (j === short.length - 1) {
        count++
      }
    }
  }
  return count
}
