/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;

  //brute force
  //TC - O(2n)
  //SC -O(n)
  // let temp=[]
  // for(let i=0;i<n;i++){
  //     if(nums[i]!=0){
  //         temp.push(nums[i])
  //     }
  // }
  // let t = temp.length
  // for(let i=0;i<n;i++){
  //     if(i<t){
  //         nums[i]=temp[i]
  //     }else{
  //         nums[i]=0
  //     }
  // }
  // console.log(temp,nums)

  let k = -1; //zero pointer
  //set first no zero index
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      k = i;
      break;
    }
  }
  console.log(k);
  if (k == -1) return nums;

  for (let i = k + 1; i < n; i++) {
    if (nums[i] !== 0) {
      [nums[k], nums[i]] = [nums[i], nums[k]];
      k++;
    }
  }
  return nums;
};
console.log("moveZeroes", moveZeroes([1, 0, 0, 2, 3, 0, 7, 9, 0, 8]));
