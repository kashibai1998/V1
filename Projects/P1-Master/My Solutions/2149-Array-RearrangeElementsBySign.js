// 2149. Rearrange Array Elements by Sign
// Medium
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

// Constraints:

// 2 <= nums.length <= 2 * 105
// nums.length is even
// 1 <= |nums[i]| <= 105
// nums consists of equal number of positive and negative integers.

// It is not required to do the modifications in-place.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let n = nums.length;
  let pos = [];
  let neg = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) neg.push(nums[i]);
    else pos.push(nums[i]);
  }
  // let pIndex =0
  // let nIndex =0
  // for(let i=0;i<n;i++){
  //     if(i%2==0){
  //         nums[i]=pos[pIndex]
  //         pIndex++
  //     }else{
  //         nums[i]=neg[nIndex]
  //         nIndex++
  //     }

  // }

  if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
    let index = neg.length * 2;
    for (let i = neg.length; i < pos.length; i++) {
      nums[index] = pos[i];
      index++;
    }
  } else {
    for (let i = 0; i < pos.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      nums[index] = neg[i];
      index++;
    }
  }
  return nums;

  // let pos=0;
  // let neg=1;
  // let ans=[]
  // for(let num of nums){
  //     if(num<0){
  //         ans[neg]=num
  //         neg=neg+2
  //     }else{
  //         ans[pos]=num
  //         pos = pos+2
  //     }
  // }
  // return ans
};

console.log(rearrangeArray([3, 1, -2, -5, 2, 9, 8, -4]));
