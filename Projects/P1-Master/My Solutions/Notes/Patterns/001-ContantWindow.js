//two pointer and sliding window
//1. contant window with max sum of continous
var constantWindow = function (nums, k) {
  let n = nums.length;
  let l = 0;
  let r = k - 1;

  let max_sum = 0;
  let sum = 0;

  //get sum of l to r
  for (let i = l; i <= r; i++) {
    sum += nums[i];
  }
  //next time substract the l and add r so sum wil get
  while (r < n - 1) {
    sum = sum - nums[l];
    l += 1;
    r += 1;
    sum = sum + nums[r];
    max_sum = Math.max(max_sum, sum);
    //console.log(max_sum,sum)
  }
  return max_sum;
};
const res = constantWindow([-1, 2, 3, 3, 4, 5, -1], 4);
console.log(res);
