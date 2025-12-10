// 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = new Array(n);
  let lp = 1;
  for (let i = 0; i < n; i++) {
    output[i] = lp;
    lp *= nums[i];
  }
  let rp = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rp;
    rp *= nums[i];
  }
  return output;
  //   const n = nums.length;
  //   const left = new Array(n).fill(0);
  //   const right = new Array(n).fill(0);
  //   const output = new Array(n).fill(0);

  //   left[0] = nums[0];
  //   right[n - 1] = nums[n - 1];

  //   //left array
  //   for (let i = 1; i < n; i++) {
  //     left[i] = left[i - 1] * nums[i];
  //   }
  //   //right array
  //   for (let i = n - 2; i >= 0; i--) {
  //     right[i] = right[i + 1] * nums[i];
  //   }
  //   //output array
  //   output[0] = right[1];
  //   output[n - 1] = left[n - 2];

  //   for (let i = 1; i < n - 1; i++) {
  //     output[i] = left[i - 1] * right[i + 1];
  //   }
  //   console.log(left, right, output);
  //   return output;
};

const res = productExceptSelf([1, 2, 3, 4]);
console.log(res);
