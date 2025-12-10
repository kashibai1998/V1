// 152. Maximum Product Subarray
// Medium
// Topics
// Companies
// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n = nums.length;
  let max_prod = nums[0];
  let min_prod = nums[0];
  let result = nums[0];

  for (let i = 1; i < n; i++) {
    if (nums[i] < 0) {
      [max_prod, min_prod] = [min_prod, max_prod];
    }

    max_prod = Math.max(nums[i], max_prod * nums[i]);
    min_prod = Math.min(nums[i], min_prod * nums[i]);
    result = Math.max(result, max_prod);
  }
  return result;
};

const res = maxProduct([2, 3, -2, 4]);
console.log(res);
