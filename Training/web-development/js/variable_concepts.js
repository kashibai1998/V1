console.log('var, let, const');

//var is a global scope
//let is local scope 
//using let we can't re declared variable
//const is a fixed value

let num = 10;
 num = 20;
console.log(num);
{
   var num1 = 20;
    console.log(num);
}
console.log(num);

//Variable declared by let cannot be redeclared and must be declared
//before use whereas variables declared with var keyword are hoisted. 
console.log(x);
var x = 5;
console.log(x);

//Below code id error
// console.log(x);
// let x = 5;
// console.log(x);


//const variable
const name = "Lucky";
name ="Geeta";
console.log(name);

