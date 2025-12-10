//set matrix to zero

let matrix = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];
let m = 4;
let n = 4;

// //m
// const markRow=(i)=>{
//     for(let j=0;j<n;j++){
//         if(matrix[i][j]!=0){
//             matrix[i][j]=-1
//         }
//     }
// }
// //n
// const markCol=(j)=>{
//     for(let i=0;i<n;i++){
//         if(matrix[i][j]!=0){
//             matrix[i][j]=-1
//         }
//     }
// }
// //(m*n)+(m+n)
// for(let i=0;i<m;i++){
//     for(let j=0;j<n;j++){
//         if(matrix[i][j]==0){
//             markRow(i)
//             markCol(j)
//         }
//     }
// }
// //m*n
// for(let i=0;i<m;i++){
//     for(let j=0;j<n;j++){
//         if(matrix[i][j]==-1){
//             matrix[i][j]=0
//         }
//     }
// }

let rowArray = new Array(m).fill(0);
let colArray = new Array(n).fill(0);
//m*n
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] == 0) {
      rowArray[i] = 1;
      colArray[j] = 1;
    }
  }
}
//m*n
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (rowArray[i] == 1 || colArray[j] == 1) {
      matrix[i][j] = 0;
    }
  }
}
//TC - 2(M*N)
//SC - O(M)+O(N)
console.log(matrix);
