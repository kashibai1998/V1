const intersectionOfSortedArray = (a, b) => {
  //brute force

  let n1 = a.length;
  let n2 = b.length;
  let interSection = [];

  // let visited = new Array(n2).fill(0)

  // for(let i=0;i<n1;i++){
  //     for(let j=0;j<n2;j++){
  //         if(nums1[i]==nums2[j] && visited[j]==0){
  //             interSection.push(nums1[i])
  //             visited[j]=1
  //             break
  //         }

  //         if(nums2[j]>nums1[i]) break;
  //     }
  // }

  // console.log(interSection,visited)

  let i = 0;
  let j = 0;
  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      i++;
    } else if (b[j] < a[i]) {
      j++;
    } else {
      interSection.push(a[i]);
      i++;
      j++;
    }
  }
  return interSection;
};

console.log(
  "intersectionOfSortedArray",
  intersectionOfSortedArray([1, 2, 3, 7, 9], [2, 3, 6])
);
