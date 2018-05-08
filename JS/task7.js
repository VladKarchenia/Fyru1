"use strict"
function SumOddNumRange(start, end) {
    let sum = 0;
    while (start < end) {
        if (start % 2 === 1) {
            sum += start;
        }
        start++;
    }
    return sum;
}
console.log( SumOddNumRange(2, 10) );