// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // const map=new Map()
  // for(let i=0;i<nums.length;i++){
  //     map.set(nums[i],(map.get(nums[i]) || 0)+1)
  // }
  // console.log(map)
  // let max =0
  // let char =''
  // for(let [key,value] of map){
  //   console.log(key,value)
  //   if(value>max){
  //     max=value
  //     char = key
  //   }
  // }
  // console.log(max,char)
  // return char

  // let map= new Map()
  // for(let num of nums){
  //     map.set(num,(map.get(num)||0)+1)
  // }

  // for(let [num,freq] of map){
  //     if(freq>(nums.length/2)){
  //         return num
  //     }
  // }

  let el;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      el = nums[i];
      count = count + 1;
    } else if (el == nums[i]) {
      count = count + 1;
    } else {
      count = count - 1;
    }
  }
  return el;
};

console.log(majorityElement([2, 3, 3]));
