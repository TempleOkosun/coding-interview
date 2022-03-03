// 1. Remove duplicates in a sorted linked list
// Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteDuplicates = (head) => {
  let current = head

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}

// 2. Two sum
// Solution 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let numList = new Map()

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    const compliment = target - currentNum

    if (numList.has(compliment)) {
      return [numList.get(compliment), i]
    } else {
      // set(key, value)
      numList.set(currentNum, i)
    }
  }
}

// Solution 2
const twoSum2 = (numArray, sum) => {
  const pairs = []
  const hashtable = []

  for (let i = 0; i < numArray.length; i++) {
    const currNum = numArray[i]
    const counterpart = sum - currNum
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart])
    }
    hashtable.push(currNum)
  }
  return pairs
}

// 3. Length of last word
// Solution 1
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord1 = function (s) {
  let onLastWord = false
  let lastWordLength = 0

  if (s.length === 0) {
    return lastWordLength
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      onLastWord = true
      lastWordLength++
    } else {
      if (onLastWord) {
        break
      }
    }
  }
  return lastWordLength
}

// Solution 2
const lengthOfLastWord2 = function (s) {
  // \s: matches any whitespace symbol: spaces, tabs, and line breaks
  // +: match one or more of the preceding tokens (referencing \s)
  // g: the g at the end indicates iterative searching throughout the full string
  const cleanedS = s.replace(/\s+/g, ' ').trim()
  const myArray = cleanedS.split(' ')
  const lastWord = myArray.pop()
  return lastWord.length
}

// 4. Longest common prefix
// Solution 1
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  strs.sort((a, b) => a.length - b.length)
  const shortestWord = strs[0]
  const otherWords = strs.slice(1)
  let prefix = ''

  if (strs.length === 0) {
    return prefix
  }

  for (let i = 0; i < shortestWord.length; i++) {
    const char = shortestWord[i]
    for (let j = 0; j < otherWords.length; j++) {
      if (char !== otherWords[j][i]) {
        return prefix
      }
    }
    prefix = prefix + char
  }
  return prefix
}

// 5. Length of longest substring
// Solution 1
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let max = 0
  let map = new Map()
  let leftPtr = 0
  let rightPtr = 1

  if (s.length === 1) return 1

  map.set(s[leftPtr], leftPtr)

  while (rightPtr < s.length) {
    if (map.has(s[rightPtr]) && map.get(s[rightPtr] >= leftPtr)) {
      leftPtr = map.get(s[rightPtr]) + 1
    }
    map.set(s[rightPtr], rightPtr)
    let windowLength = rightPtr - leftPtr + 1
    max = Math.max(max, windowLength)
    rightPtr += 1
  }
  return max
}

// 6. Return subsequences in a word
// Solution 1
/**
 * @param {string} word
 *  @return {string}
 *  */
const getSubsequence = (word) => {
  if (word === '') return ''
  const first = word.charAt(0)
  const rest = getSubsequence(word.substring(1))
  let result = ''

  rest.split(',').forEach((subseq) => {
    result += ',' + first + subseq
    result += ',' + subseq
  })

  return result.substring(1)
}

// 7. Tower of Hanoi
// Solution 1

const towerOfHanoi = (n, fromRod, toRod, auxRod) => {
  if (n === 1) {
    console.log('Moving the disk 1 from ' + fromRod + ' to the ' + toRod)
  } else {
    towerOfHanoi(n - 1, fromRod, auxRod, toRod)
    console.log('Moving the ' + n + 'th disk from ' + fromRod + ' to the ' + toRod)
    towerOfHanoi(n - 1, auxRod, toRod, fromRod)
  }
}

towerOfHanoi(4, 'X', 'Y', 'Z')

// 8. Harmless Ransome Note
// Solution 1

const harmlessRansomeNote = (noteText, magazineText) => {
  const noteArr = noteText.split(' ')
  const magazineArr = magazineText.split(' ')

  const magazineMap = {}
  magazineArr.forEach((word) => {
    if (!magazineMap[word]) magazineMap[word] = 0
    magazineMap[word]++
  })

  let noteIsPossible = true
  noteArr.forEach((word) => {
    if (magazineMap[word]) {
      magazineMap[word]--
      if (magazineMap[word] < 0) noteIsPossible = false
    } else {
      noteIsPossible = false
    }
  })
  return noteIsPossible
}

// 9. Palindrome
// Solution 1
const isPalindrome = (string) => {
  const stringInput = string.toLowerCase()
  const characterArr = stringInput.split('')
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const lettersArr = []
  characterArr.forEach((char) => {
    // indexOf array method returns the index in an array of the arg passed in
    // > -1 because 0 is the 1st index
    // if arg is not present, -1 is returned
    if (validCharacters.indexOf(char) > -1) {
      lettersArr.push(char)
    }
  })
  return lettersArr.join('') === lettersArr.reverse().join('')
}

// 10. Caesar Cipher
// Solution 1
const caesarCipher = (str, num) => {
  // If we pass a num that is huge we basically want to loop through the alphabet
  // till we have shifted the letter forward n times
  // we can achieve this functionality without loop using %
  num = num % 26 // Turn the num into an appropriate value
  const lowerCaseString = str.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let newString = ''
  for (let i = 0; i < lowerCaseString.length; i++) {
    const currentLetter = lowerCaseString[i]
    if (currentLetter === ' ') {
      newString += currentLetter
      continue
    }
    const currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num
    // Loop the letter back to the beginning of the alphabet
    if (newIndex > 25) {
      newIndex = newIndex - 26
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex
    }
    // edge case
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else {
      newString += alphabet[newIndex]
    }
  }
  return newString
}

// 11. Reverse words
// Solution 1
const reverseWord = (string) => {
  const wordsArr = string.split(' ')
  const reversedWordsArr = []

  wordsArr.forEach((word) => {
    // we don't want to use the reverse array method
    // use for loop going backwards
    let reversedWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i]
    }
    // push completed reversed word into arr
    reversedWordsArr.push(reversedWord)
  })
  return reversedWordsArr.join(' ')
}

// 11. Reverse array in place
// Solution 1
const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i]
    arr[i] = arr[arr.length - 1 - i] // the counterpart on the ending side
    arr[arr.length - 1 - i] = tempVar
  }
  return arr
}

// 12. Mean Median and Mode
// Solution 1
const getMean = (arr) => {
  let sum = 0
  arr.forEach((num) => {
    sum += num
  })

  return sum / arr.length
}

const getMedian = (arr) => {
  arr.sort((a, b) => a - b)
  let median
  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)]
  } else {
    const mid1 = arr[arr.length / 2 - 1]
    const mid2 = arr[arr.length / 2]
    median = (mid1 + mid2) / 2
  }
  return median
}

const getMode = (arr) => {
  let modeObj = {}
  arr.forEach((num) => {
    if (!modeObj[num]) {
      modeObj[num] = 0
    }
    modeObj[num]++
  })

  let maxFrequency = 0
  let modes = []
  for (const num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num]
      maxFrequency = modeObj[num]
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num)
    }
  }

  if (modes.length === Object.keys(modeObj).length) {
    modes = []
  }

  return modes
}

const meanMedianMode = (arr) => {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr),
  }
}

// Recursion
const factorial = (num) => {
  //Base case
  if (num === 1) {
    return num
  }
  // Recursive case
  else {
    return num * factorial(num - 1)
  }
}

// 13. Binary Search
const binarySearch = (numArray, key) => {
  const middleIdx = Math.floor(numArray.length / 2)
  const middleElem = numArray[middleIdx]

  if (middleElem === key) return true
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key)
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key)
  } else return false
}

// 14. Fibonacci
const fibonacci = (position) => {
  if (position < 3) return 1
  else {
    return fibonacci(position - 1) + fibonacci(position - 2)
  }
}

// 15. Fibonacci Memo
const fibMemo = (index, cache = []) => {
  // cache = cache || []
  // Base case is to see if the position we are looking for has been calculated.
  // if so just return it.
  if (cache[index]) return cache[index]
  // recursive case
  else {
    if (index < 3) return 1
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache)
    }
  }
  return cache[index]
}

// 16. Sieve of Eratosthenes
const sieveOfEratosthenes = (n) => {
  // return all prime numbers up to 'num' in an array
  const primes = []

  for (let i = 0; i <= n; i++) {
    primes[i] = true
  }
  primes[0] = false
  primes[1] = false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // j*i gives each multiple of the element at the current index i
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false
    }
  }

  const result = []
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i)
  }
  return result
}

fibMemo(20)
