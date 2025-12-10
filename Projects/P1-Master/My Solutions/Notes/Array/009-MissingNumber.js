const missingNumber = (arr) => {
  //brute-force
  let N = Math.max(...arr, arr.length);
  let n = Math.max(...arr);
  // console.log(n)
  // for(let i=0;i<=n;i++){

  //     let flag = 0
  //     for(let j=0;j<n;j++){
  //         if(arr[j]==i){
  //             flag=1;
  //             break
  //         }
  //     }

  //     if(flag==0){
  //       // return i
  //     }
  // }
};
console.log("missingNumber", missingNumber([1]));
