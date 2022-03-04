const productSum = (list, depth) => {
  let sum = 0

  list.forEach((element) => {
    if (Array.isArray(element)) sum += productSum(element, depth + 1)
    else sum += element
  })
  return sum * depth
}
