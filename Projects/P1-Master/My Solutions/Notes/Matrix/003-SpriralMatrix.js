let matrix = [[1, 2, 3]];
let m = matrix.length;
let n = matrix[0].length;
let top = 0;
let bottom = m - 1;
let left = 0;
let right = n - 1;
let ans = [];

while (top <= bottom && left <= right) {
  //right
  for (let i = left; i <= right; i++) {
    ans.push(matrix[top][i]);
  }
  top++;
  //bottom
  for (let i = top; i <= bottom; i++) {
    ans.push(matrix[i][right]);
  }
  right--;
  if (top <= bottom) {
    //bottom
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i]);
    }
    bottom--;
  }

  if (left <= right) {
    //top
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
  }
}

console.log("matrix", matrix);
console.log("ans", ans);
