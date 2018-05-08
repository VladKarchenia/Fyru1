"use strict"
function aboutNum(number) {
    if (!isNaN(number)) {
        const numberString = number.toString();
        const reversedNumber = numberString.split('').reverse().join('');
        console.log(`Число: ${number} \nЦифр в числе: ${numberString.length} \nСумма: ${eval(numberString.split('').join('+'))} \nОбратный порядок: ${reversedNumber}`);
    } else {
    console.log('Введите число: ');
    }
}
console.log( aboutNum(123) );