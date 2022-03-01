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
// Solution
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
