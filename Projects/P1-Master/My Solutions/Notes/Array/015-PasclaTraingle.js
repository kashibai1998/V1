//let n=5

// function ncr(n,r){
//     let res =1
//     for(let i=0;i<r;i++){
//         res = res * (n-i)
//         res= res/(i+1)
//     }
//     return res
// }

//nth row
// let ans =[]
// for(let i=0;i<=n;i++){
//     ans.push(ncr(n,i))
// }

function generateRow(row) {
  let ans = 1;
  let res = [1];
  if (row == 1) return res;
  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    res.push(ans);
  }
  return res;
}

function printPascal(numRows) {
  let res = [];
  for (let i = 1; i <= numRows; i++) {
    res.push(generateRow(i));
  }
  return res;
}
console.log(generateRow(6));

console.log(printPascal(6));
