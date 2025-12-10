const largestElemet = (nums) => {
  //brute-force - O(nlogn)
  // let n =nums.length
  // nums = nums.sort((a,b)=>a-b)
  // let largest = nums[n-1]

  //optimal
  let n = nums.length;
  let largest = Math.max(...nums);
  // let largest = nums[0]
  // for(let i=0;i<n;i++){
  //     if(nums[i]>largest){
  //         largest = nums[i]
  //     }
  // }

  return largest;
};

const res = largestElemet([2, 5, 1, 7, 10]);
console.log("largest", res);
