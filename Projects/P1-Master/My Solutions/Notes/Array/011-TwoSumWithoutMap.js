const subArray = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  nums = nums.sort((a, b) => a - b);
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum < target) {
      l += 1;
    } else if (sum > target) {
      r -= 1;
    } else {
      return "YES";
    }
  }
  return "NO";
};

console.log("subArray", subArray([2, 6, 5, 8, 11], 14));
