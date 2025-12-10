// let no = prompt('Enter mobile no:');

// console.log(no);

// document.getElementById('mobileNo').innerHTML=no

// const person = () => {
//     var name = prompt('enter name');
//     var res = 'My Name is' + ' ' + name;
//     console.log(res);
// }

// person();


// const sumOfNos = (num1,num2) => {
//     var res = num1 + num2;
//     return res;
// }

// var a = Number(prompt('enter first no'));
// var b = Number(prompt('enter second no'));

// console.log(typeof (a));
// const finalRes = sumOfNos(a, b);

// console.log(finalRes);

//while loop
// var i = 0;
// while (i<100) {
//     i += 1;
//     console.log(i);
// }


//create Array using Array keyword and push into an Array
// const emptyArr = new Array();
// for (let i = 0; i < 15; i++){
//     emptyArr.push(i);
// }
// console.log(emptyArr);


//object with function
const person = {
    firstName: 'Lucky',
    lastName: 'Pujari',
    age: 25,
    address: 'Bijapur',
    salary: function() {
        return this.firstName + '\n' + this.lastName
    }
}
person.age = 26;
console.log(person.salary());