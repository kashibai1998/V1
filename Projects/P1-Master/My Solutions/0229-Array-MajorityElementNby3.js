// 229. Majority Element II
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

// Follow up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  // let map= new Map()
  // for(let num of nums){
  //     map.set(num,(map.get(num)||0)+1)
  // }
  // let res =[]
  // for(let [num,freq] of map){
  //     if(freq>(nums.length/3)){
  //         res.push(num)
  //     }
  // }
  // return res

  let el1;
  let el2;

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (el1 == nums[i]) {
      count1++;
    } else if (el2 == nums[i]) {
      count2++;
    } else if (count1 == 0) {
      el1 = nums[i];
      count1++;
    } else if (count2 == 0) {
      el2 = nums[i];
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  let cnt1 = 0;
  let cnt2 = 0;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == el1) cnt1++;
    else if (nums[i] == el2) cnt2++;
  }

  if (cnt1 > Math.floor(nums.length / 3)) res.push(el1);
  if (cnt2 > Math.floor(nums.length / 3)) res.push(el2);
  return res;
};
