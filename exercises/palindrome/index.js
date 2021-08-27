// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // every() method tests whether all elements in the array pass the test implemented by the provided function
  const isEqualElementOnOtherSide = (currentValue, index, inputArray) =>
    currentValue === inputArray[inputArray.length - index - 1]
  return str.split('').every(isEqualElementOnOtherSide)

  // return str.split('').every((char, index) => {
  //     return char === str[str.length -index -1]
  // })
}

console.log(palindrome('abba'))
console.log(palindrome('abcdefg'))

module.exports = palindrome

// Solution 1
// const reversed = str.split('').reduce((rev, char) => (char + rev), '')
// return reversed === str
