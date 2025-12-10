const unionOfSortedArrays = (nums1, nums2) => {
  //let n= nums.length
  //brute force
  //nlogn
  // const set = new Set()
  // for(let i=0;i<nums1.length;i++){
  //     set.add(nums1[i])
  // }
  // for(let i=0;i<nums2.length;i++){
  //     set.add(nums2[i])
  // }
  // console.log(set)

  //(n1+n2)
  let i = 0;
  let j = 0;
  let n1 = nums1.length;
  let n2 = nums2.length;
  let union = [];
  while (i < n1 && j < n2) {
    if (nums1[i] <= nums2[j]) {
      if (union.length == 0 || union[union.length - 1] != nums1[i]) {
        union.push(nums1[i]);
      }
      i++;
    } else {
      if (union.length == 0 || union[union.length - 1] != nums2[j]) {
        union.push(nums2[j]);
      }
      j++;
    }
    console.log(i, j);
  }
  while (i < n1) {
    if (union.length == 0 || union[union.length - 1] != nums1[i]) {
      union.push(nums1[i]);
    }
    i++;
  }
  while (j < n2) {
    if (union.length == 0 || union[union.length - 1] != nums2[j]) {
      union.push(nums2[j]);
    }
    j++;
  }
  console.log(union);
  return union;
};

console.log(
  "unionOfSortedArrays",
  unionOfSortedArrays([1, 2, 3, 7, 9], [2, 3, 6])
);
