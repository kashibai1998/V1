//brute-force O(n)
const isArraySorted = (nums) => {
  let n = nums.length;
  //start with 1 and compare with prev
  for (let i = 1; i < n; i++) {
    if (nums[i] >= nums[i - 1]) {
    } else {
      return false;
    }
  }
  return true;
};
console.log("isArraySorted", isArraySorted([2, 1, 3, 10, 10]));
