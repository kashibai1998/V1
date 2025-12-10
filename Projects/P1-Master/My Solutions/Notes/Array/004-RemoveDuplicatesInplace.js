const removeDuplicatesInplace = (nums) => {
  let n = nums.length;
  //brute-force
  //TC - O(nlogn)+On(n)
  //SC - O(n)
  // const set=new Set()
  // for(let i=0;i<n;i++){
  //     set.add(nums[i])
  // }
  // let index =0
  // for(let s of set){
  //     nums[index]=s
  //     index++
  // }
  // return index

  //optimal -TC -O(n), SC-O(1)

  let i = 0;
  for (let j = 1; j < n; j++) {
    if (nums[i] != nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return i + 1;
};
console.log(
  "removeDuplicatesInplace",
  removeDuplicatesInplace([1, 1, 2, 2, 2, 3, 3])
);
