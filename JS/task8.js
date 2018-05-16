"use strict"
function aboutNum(number) {
    if (!isNaN(number)) {
        const numberString = number.toString();
        const reversedNumber = numberString.split('').reverse().join('');
        console.log(`Число: ${number} \nЦифр в числе: ${numberString.length} \nСумма: ${numberString.reduce(function(a, b) {return a + b;})} \nОбратный порядок: ${reversedNumber}`);
    } else {
    console.log('Введите число: ');
    }
}
console.log( aboutNum(123) );


function aboutNum(number) {
    if (!isNaN(number)) {
        const numberString = number.toString();
        const array = numberString.split(',');
        const reversedArray = numberString.split('').reverse().join('');
        console.log(`Число: ${number} \nЦифр в числе: ${numberString.length} \nСумма: ${array.reduce((a, b) => a + b)} \nОбратный порядок: ${reversedArray}`);
    } else {
    console.log('Введите число: ');
    }
}
console.log( aboutNum(123) );


function aboutNum(number) {
    if (!isNaN(number)) {
        const numberString = number.toString();
        const String = string(number);
        const array = numberString.split('');
        console.log(array);
        const reversedArray = numberString.split('').reverse().join('');
        console.log(`Число: ${number} \nЦифр в числе: ${numberString.length} \nСумма: ${array.reduce((a, b) => a + b)} \nОбратный порядок: ${reversedArray}`);
    } else {
    console.log('Введите число: ');
    }
}
console.log( aboutNum(123) );
