// 73. Set Matrix Zeroes
// Medium
// Topics
// Companies
// Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length

    let rowArray = new Array(m).fill(0)
    let colArray = new Array(n).fill(0)

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                rowArray[i]=1
                colArray[j]=1
            }
        }
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(rowArray[i]==1 || colArray[j]==1){
                matrix[i][j]=0
            }
        }
    }
    return matrix
};