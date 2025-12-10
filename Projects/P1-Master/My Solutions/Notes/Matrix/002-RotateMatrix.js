let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let m = matrix.length;
let n = matrix[0].length;
console.log(matrix.length);
console.log(matrix[0].length);

let ans = new Array(m).fill(0).map(() => new Array(n).fill(0));

//SC-O(N2) Extra
// for(let i=0;i<m;i++){
//     for(let j=0;j<n;j++){
//         ans[j][n-1-i]=matrix[i][j]
//     }
// }
// console.log("ans",ans)

//transpose
//o(n/2) 0(n/2)
for (let i = 0; i < m - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  }
}
function reverse(arr, start, end) {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
//reverse row
//o(n) 0(n/2)
for (let i = 0; i < m; i++) {
  console.log(i);
  matrix[i] = reverse(matrix[i], 0, m - 1);
}

console.log(matrix);
