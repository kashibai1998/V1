/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (arr, start, end) => {
  console.log(arr, start, end);
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};
var rotateArrayByKplaces = function (nums, k) {
  let n = nums.length;
  //brute force
  //one ele
  // let temp =nums[0]
  // for(let i=1;i<n;i++){
  //     nums[i-1]=nums[i]
  // }
  // nums[n-1]=temp

  //by k elements
  //TC - O(n+k), SC-O(k)
  // let temp = nums.slice(0,k)
  // console.log(temp)

  // for(let i=k;i<n;i++){
  //     nums[i-k]=nums[i]
  // }
  // //with j
  // let j=0
  // for(let i=n-k;i<n;i++){
  //     //nums[i]=temp[i-(n-k)]
  //     nums[i]=temp[j]
  //     j++
  // }

  // console.log(reverse(nums,0,k-1))
  // console.log(reverse(nums,k,n-1))
  // console.log(reverse(nums,0,n-1))
  //TC-O(n), SC-O(1)
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  reverse(nums, 0, n - 1);

  return nums;
};
console.log("rotateArrayK", rotateArrayByKplaces([1, 2, 3, 4, 5, 6, 7], 3));
