let a = [1, 3];
let b = [2];

let n1 = a.length;
let n2 = b.length;

let i = 0;
let j = 0;
let ans = [];

while (i < n1 && j < n2) {
  if (a[i] < b[j]) {
    ans.push(a[i]);
    i++;
  } else if (b[j] < a[i]) {
    ans.push(b[j]);
    j++;
  }
}

while (i < n1) {
  ans.push(a[i]);
  i++;
}
while (j < n2) {
  ans.push(b[j]);
  j++;
}
console.log(ans);

// //median
// let a = [1, 3, 4, 7, 10, 12];
// let b = [2, 3, 6, 15];
// //1,2,3,3,4,6,7,10,12,15
// //let a = [1,3]; let b = [2]

// let n1 = a.length;
// let n2 = b.length;

// let i = 0;
// let j = 0;
// let n = n1 + n2;
// let index1 = Math.floor(n / 2) - 1;
// let index2 = Math.floor(n / 2);

// console.log("index", index1, index2);
// let ans = [];
// let el1 = -1;
// let el2 = -1;
// let index = 0;
// while (i < n1 && j < n2) {
//   if (a[i] < b[j]) {
//     if (index == index1) el1 = a[i];
//     if (index == index2) el2 = a[i];
//     i++;
//     index++;
//   } else {
//     if (index == index1) el1 = b[j];
//     if (index == index2) el2 = b[j];
//     j++;
//     index++;
//   }
// }
// while (i < n1) {
//   if (index == index1) el1 = a[i];
//   if (index == index2) el2 = a[i];
//   i++;
//   index++;
// }
// while (j < n2) {
//   if (index == index1) el1 = b[j];
//   if (index == index2) el2 = b[j];
//   j++;
//   index++;
// }

// if (n % 2 == 1) {
//   console.log("median ", el2);
// }
// console.log((el1 + el2) / 2);
// console.log(el1, el2);

// console.log(ans)
