
let myFunction = (newArr1, newArr2) => {
    console.log("addition of array:" + newArr1 + newArr2);
    let finalArr = newArr1.concat(newArr2);

    return finalArr.sort((a, b) => {
        return a - b;
    })
}

function myArrayMin(arr) {
  let len = arr.length;
  let max = len-1;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

var arr1 = [4, 35, 16, 25, 29,];
var arr2 = [3, 6, 8, 9, 3];

const maxVal = myFunction(arr1, arr2);


let result = myFunction(arr1, arr2);
console.log(result);

let max = myArrayMin(result);
console.log(max);