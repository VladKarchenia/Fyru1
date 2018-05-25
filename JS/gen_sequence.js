"use strict"

const sequence = (start = 0, step = 1) => {
    function* gen(start, step) {
        while(true) {
            yield start;
            start += step;}}
    var generator = gen(start, step);
    return function() {
        return generator.next().value;
    }
}
var generator = sequence(10,3);
var generator2 = sequence(7,1);
var generator3 = sequence();

console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator2());
console.log(generator3());
console.log(generator3());
