// console.log('hello typescript');

// let compName: string = "lucky";

// let age: number = 20;
// if (age < 30) {
//     age += 10;
// }
// console.log(age);

// type script types
// 1. any
// 2. unknown
// 3. string
// 4. tuple
// 5. enum
// 6. function

//explicit type
let firstname: string = "lucky";
//implicit type
const lastname = "pujari";

// any
// let details;
// details = 123;
// details = "abc";
// console.log(details);

// any using in function
// function render(document:any) {
//     console.log(document);
// }

// array
// let userList: number[] = [];
// userList[0] = 1;
// userList[1] = 2;

// // tupel
// let empList: [string, string, number] = ['lucky', 'pujari', 27];
// console.log(empList[2]);
// console.log(empList);

// //enum
// enum tShirt { small = 1, medium, large };
// let size: tShirt = tShirt.large;
// console.log(tShirt);

//function

function taxCalculate(x: number, y = 300): number {
    return x + y;
}

let res = taxCalculate(100);
console.log(res);