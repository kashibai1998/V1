const leadersInArray = (arr) => {
  let n = arr.length;
  let res = [];
  let r = n - 1;

  // for(let i=0;i<n;i++){
  //     let leader =true
  //     for(let j=i+1;j<n;j++){
  //         if(arr[j]>arr[i]){
  //             leader=false
  //             break
  //         }
  //     }
  //     if(leader==true){
  //         res.push(arr[i])
  //     }
  // }

  let max = 0;
  while (r > 0) {
    if (arr[r] > max) {
      max = arr[r];
      res.push(arr[r]);
    }
    r--;
  }
  console.log(max);
  return res;
};

console.log(leadersInArray([10, 22, 12, 3, 0, 6]));
