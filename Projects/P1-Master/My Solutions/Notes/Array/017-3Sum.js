function triplets(nums) {
  let ans = [];
  let n = nums.length;
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    console.log(j, k);
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      console.log(sum);
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        console.log(ans);
        let temp = [nums[i], nums[j], nums[k]];
        ans.push(temp);
        j++;
        k--;
        while (nums[j] == nums[j - 1]) j++;
        while (nums[k] == nums[k + 1]) k--;
      }
      console.log("jj");
    }
  }
  console.log(ans);
  return ans;

  //tc - o(n2) = log of size of set
  //tc - o(n) + o(triplets)
  // for(let i=0;i<n;i++){
  //     let hashSet = new Set()
  //     for(let j=i+1;j<n;j++){
  //         let third = - (nums[i]+nums[j])
  //         if(hashSet.has(third)){
  //             let temp =[nums[i],nums[j],third]
  //             temp.sort((a,b)=>a-b)
  //             st.add(temp.toString())
  //         }
  //         hashSet.add(nums[j])
  //     }
  // }
  // for(let triplet of st){
  //     ans.push(triplet.split(',').map(Number))
  // }
  // console.log(ans)
  // return ans
  // for(let i=0;i<n;i++){
  //     for(let j=i+1;j<n;j++){
  //         for(let k=j+1;k<n;k++){
  //           if(nums[i]+nums[j]+nums[k]==0){
  //                 let temp =[nums[i],nums[j],nums[k]]
  //                 temp.sort((a,b)=>a-b)
  //                 st.add(temp.toString())
  //           }
  //         }
  //     }
  // }

  // for(let triplet of st){
  //     ans.push(triplet.split(',').map(Number))
  // }
  // console.log(ans)
  // return ans
}

triplets([-1, 0, 1, 2, -1, -4]);
