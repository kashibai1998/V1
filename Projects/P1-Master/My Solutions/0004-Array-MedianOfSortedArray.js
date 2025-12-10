// 4. Median of Two Sorted Arrays
// Solved
// Hard
// Topics
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (a, b) {
  // let sortedArry =[]

  // while(nums1.length && nums2.length ){
  //     if(nums1[0] < nums2[0]){
  //         sortedArry.push(nums1.shift())
  //     }else{
  //         sortedArry.push(nums2.shift())
  //     }

  // }
  // sortedArry=[...sortedArry,...nums1,...nums2]
  // let n = sortedArry.length
  // let middle = Math.floor(n/2)
  // if(n%2===0){
  //     return ((sortedArry[middle-1]+sortedArry[middle])/2)
  // }else{
  //     return sortedArry[middle]
  // }

  let n1 = a.length;
  let n2 = b.length;

  let i = 0;
  let j = 0;
  let n = n1 + n2;
  let index1 = Math.floor(n / 2) - 1;
  let index2 = Math.floor(n / 2);

  console.log("index", index1, index2);
  let ans = [];
  let el1 = -1;
  let el2 = -1;
  let index = 0;
  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      if (index == index1) el1 = a[i];
      if (index == index2) el2 = a[i];
      i++;
      index++;
    } else {
      if (index == index1) el1 = b[j];
      if (index == index2) el2 = b[j];
      j++;
      index++;
    }
  }
  while (i < n1) {
    if (index == index1) el1 = a[i];
    if (index == index2) el2 = a[i];
    i++;
    index++;
  }
  while (j < n2) {
    if (index == index1) el1 = b[j];
    if (index == index2) el2 = b[j];
    j++;
    index++;
  }

  if (n % 2 == 1) {
    return el2;
  }
  return (el1 + el2) / 2;
};
