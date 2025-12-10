// 53. Maximum Subarray
// Medium
// Topics
// Companies
// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length;
  //kadane's algo
  let max_sum = nums[0];
  let cur_sum = nums[0] < 0 ? 0 : nums[0];

  for (let i = 1; i < n; i++) {
    max_sum = Math.max(max_sum, nums[i] + cur_sum);
    cur_sum += nums[i];
    cur_sum = cur_sum < 0 ? 0 : cur_sum;
  }
  return max_sum;
};

var maxSubArrayWithIndex = function (nums) {
  let n = nums.length;
  //kadane's algo
  let max_sum = nums[0];
  let cur_sum = nums[0] < 0 ? 0 : nums[0];
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 1; i < n; i++) {
    cur_sum += nums[i];
    if (max_sum < cur_sum) {
      max_sum = cur_sum;
      start = s;
      end = i;
    }

    if (cur_sum < 0) {
      cur_sum = 0;
      s = i + 1;
    }
  }
  return {
    max_sum: max_sum,
    start: start,
    end: end,
  };
};

const res = maxSubArray([1, 2, -3, -6]);
console.log(res);

// Time Complexity - O(n)
// Space Complexity - O(n)
