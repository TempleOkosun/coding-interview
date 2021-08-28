// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (const char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1)
  }
  for (const key in charMap) {
    if (charMap[key] > max) {
      maxChar = key
      max = charMap[key]
    }
  }
  return maxChar
}

console.log(maxChar('aaaaggbhhdhd'))

module.exports = maxChar
