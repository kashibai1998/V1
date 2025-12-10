//diff b/w var and let scope

console.log("-------Var variable scope!-------")
for (var i = 0; i < 5; i++) {
    console.log(`Ïnside the loop:`,i);
}
console.log(`Oustide the loop:`,i);

console.log("-------Let variable scope!-------")
for (let i = 0; i < 5; i++) {
    console.log(`Ïnside the loop:`,i);
}
console.log(`Oustide the loop:`, i);

const pi = 3.142;
console.log(pi);
console.log(pi1);


var i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

