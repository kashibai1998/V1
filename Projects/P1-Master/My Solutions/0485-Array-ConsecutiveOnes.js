// 485. Max Consecutive Ones
// Easy
// Topics
// Companies
// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let n = nums.length;
  let count = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 1) {
      count = count + 1;
    } else if (nums[i] == 0) {
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
};
console.log("missingNumber", findMaxConsecutiveOnes([1, 0, 0, 0, 1]));
