const linearSearch = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == k) {
      return i;
    }
  }
  return -1;
};

console.log("linearSearch", linearSearch([1, 2, 3, 7, 9], 9));
//TC-O(N)