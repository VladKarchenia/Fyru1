"use strict"
function makeMultiply(i) {
    if (i == 2) {
        return function(y) {
            return y * y;
        }
    } else if (i == 3) {
        return function(y) {
            return y * y * y;
        }
    }
}
var double = makeMultiply(2);
var triple = makeMultiply(3);
console.log(double(6));
console.log(triple(6));
console.log(double(7));
console.log(triple(5));
