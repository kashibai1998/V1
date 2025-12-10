//swapping of the array
let arr = [5, 2, 3, 6, 1]; //5 place 1, 2->6, 3->3,6->2,1->5
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log(arr)