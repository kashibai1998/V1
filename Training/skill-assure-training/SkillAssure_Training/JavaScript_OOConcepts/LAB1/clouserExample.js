// let counter = 10;
function clouserExample() {
    var counter = 5;
    
    function increment() {
        // var counter = 0;
        return counter = counter + 1;
    }
    return increment;
}
console.log(counter);
var counterVal = clouserExample();
console.log(counterVal());
console.log(counterVal());
console.log(counterVal());