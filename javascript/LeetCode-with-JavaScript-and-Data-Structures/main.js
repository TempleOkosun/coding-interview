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
