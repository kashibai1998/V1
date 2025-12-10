//BE - 4000 - 7000
//B.Sc Agree - 3000 - 4000
//Medical - below 3000


// let ranking = 2000;
// if (ranking >= 4000 && ranking <= 7000) {
//     console.log("BE");
// }
// if (ranking >= 3000 && ranking <= 4000) {
//     console.log("B.Sc Agree");
// }
// if (ranking < 3000 ) {
//     console.log("Medical");
// }



//switch loop
//calculator

let a = 10, b = 10;
var choice = 4;
switch (choice) {
    case 1:
        console.log("addition 2 numbers: ", a + b);
        break;
    case 2:
        console.log("addition 2 numbers: ", a - b);
        break;
    case 3:
        console.log("addition 2 numbers: ", a * b);
        break;
    case 4:
        console.log("addition 2 numbers: ", a / b);
        break;
    default:
        console.log("Enter valid input");
}

//while and do-while loop
let x = 10;
while (x>=1) {
    console.log(x);
    --x;
}

// // do-while
x = 11;
do {
    console.log(x);
    ++x;
}
while (x < 10);

//for loop
for (let i = 1; i <= 10; i++){
    console.log(i);
}