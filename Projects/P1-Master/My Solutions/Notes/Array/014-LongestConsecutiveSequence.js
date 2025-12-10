const longestSubSequence = (arr) => {
  let n = arr.length;
  //let longest =1
  // for(let i=0;i<n;i++){
  //     let x=arr[i]
  //     let counter=1
  //     for(let j=i+1;j<n;j++){
  //         if(arr[j]==x+1){
  //             x=x+1
  //             counter++
  //         }
  //     }
  //     longest = Math.max(longest,counter)
  // }

  // let longest=1
  // let counter=0
  // let lastSmallest =-1
  // arr.sort((a,b)=>a-b)
  // for(let i=0;i<n;i++){
  //     if(arr[i]-1==lastSmallest){
  //         lastSmallest=arr[i]
  //         counter++
  //     }else if(arr[i]==lastSmallest){

  //     }else if(arr[i]!=lastSmallest){
  //         lastSmallest=arr[i]
  //         counter=1
  //     }
  //     longest =Math.max(longest,counter)
  // }

  let longest = 1;

  const sets = new Set();
  for (let i = 0; i < n; i++) {
    sets.add(arr[i]);
  }

  for (let s of sets) {
    if (!sets.has(s - 1)) {
      let counter = 1;
      let x = s;
      while (sets.has(x + 1)) {
        counter++;
        x = x + 1;
      }
      longest = Math.max(longest, counter);
    }
  }

  return longest;
};

console.log(longestSubSequence([1, 2, 3, 8, 9, 11, 10]));
