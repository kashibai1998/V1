//To call the same method on different objects and have each of them respond in their way.

var answer = {
    get: function fn1() {
        return this.val;
    },
    val: 42
};

var firmAnswer = Object.create(answer);
firmAnswer.get = function fn2() {
    return this.val;
};

console.log(answer.get());
console.log(firmAnswer.get());