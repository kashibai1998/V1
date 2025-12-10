const secondLargest = (nums) => {
  //brute-force - O(nlogn) + O(n)
  // let n =nums.length
  // nums = nums.sort((a,b)=>a-b)
  // let largest = nums[n-1]
  // let secLargest = -1
  // for(let i=n-2;i>=0;i--){
  //     if(nums[i]!=largest){
  //         secLargest = nums[i]
  //         break
  //     }
  // }

  //better - O(n+n) ==>O(2n)
  // let n = nums.length
  // // let largest = Math.max(...nums)
  // let largest = nums[0]
  // let secLargest = -1
  // //find the largest
  // for(let i=0;i<n;i++){
  //     if(nums[i]>largest){
  //         largest = nums[i]
  //     }
  // }
  // //for finding sec largest
  // for(let i=0;i<n;i++){
  //     // current value greter than secLargest
  //     // and should not equal to largest
  //     if(nums[i]>=secLargest && nums[i] != largest){
  //         secLargest = nums[i]
  //     }
  // }

  //optimal - O(n)
  let n = nums.length;
  let largest = nums[0];
  let previousLargest = nums[0];
  let secLargest = -1;
  for (let i = 1; i < n; i++) {
    //if nums becomes largest
    //seclargest - prev largest
    //update prev largest
    if (nums[i] > largest) {
      secLargest = largest;
      largest = nums[i];
    }
    //if num not equal to largest and > than seclargest
    //num become sec largest
    else if (nums[i] != largest && nums[i] > secLargest) {
      secLargest = nums[i];
    }
  }
  return {
    largest: largest,
    secLargest: secLargest,
  };
};

//optimal - O(n)
const secondSmallest = (nums) => {
  let n = nums.length;
  let smallest = nums[0];
  let secSmallest = Infinity;
  for (let i = 1; i < n; i++) {
    if (nums[i] < smallest) {
      secSmallest = smallest;
      smallest = nums[i];
    } else if (nums[i] != smallest && nums[i] < secSmallest) {
      secSmallest = nums[i];
    }
  }
  return {
    smallest: smallest,
    secSmallest: secSmallest,
  };
};

const res = secondLargest([2, 10, 10]);
console.log("secLargest", res);
console.log("secSmallest", secondSmallest([2, 3, 10, 10]));
