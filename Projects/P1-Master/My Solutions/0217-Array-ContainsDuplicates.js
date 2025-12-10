// 217. Contains Duplicate
// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // approach 1 using map
  const map = new Map();
  for (let n of nums) {
    if (map.has(n)) return true;
    map.set(n, true);
  }
  return false;

  // approch-2 using set
  // const set = new Set(nums);
  // return nums.length === set.size() ? false : true;
};

const res = containsDuplicate([1, 2, 3, 1]);
console.log(res);

// Time Complexity - O(n)
// Space Complexity - O(n)
