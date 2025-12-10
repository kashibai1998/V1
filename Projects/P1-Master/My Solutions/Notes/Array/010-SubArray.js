const subArray = (nums, k) => {
  let n = nums.length;
  let result = [];

  //i
  for (let i = 0; i < n; i++) {
    let sub = [];
    for (j = i; j < n; j++) {
      sub.push(nums[j]);
      result.push([...sub]);
    }
  }

  return result;
};

console.log("subArray", subArray([1, 2, 3, 4, 5], k));
