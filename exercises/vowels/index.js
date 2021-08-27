// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // g - dont stop at the 1st match but go through all
  // i - case insensitive
  const matches = str.match(/[aeiou]/gi)
  // match returns null if no match is found
  return matches ? matches.length : 0
}

module.exports = vowels

// Solution 1
// const vowelArray = ['a', 'e', 'i', 'o', 'u']
// let count = 0
//
// for (const char of str.toLowerCase()) {
//   if (vowelArray.includes(char)) {
//     count++
//   }
// }
// return count
