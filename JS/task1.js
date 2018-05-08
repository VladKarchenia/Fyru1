"use strict"

function calcTo(number) {
  let calc = 0;
  for (let i = 1; i <= number; i++) {
    calc += i;
  }
  return calc;
}
console.log( calcTo(10) );


function calcTo (number) {
  if (number == 1) {
    return 1;
  } else {
    return number + calcTo(number - 1);
  }
}
console.log( calcTo(10) );

function calcTo(number) {
  Math.sign = Math.sign || function(number) {
    number = +number;
    if (number === 0 || isNaN(number)) {
      return number;
    }
    return number > 0 ? 1 : -1;
  }
  return number * (number + 1) / 2;
}
console.log( calcTo('dww') );


function calcTo(number) {
  if (!isNaN(number) && number > 0) {
    return number * (number + 1) / 2;
  }
}
console.log( calcTo('dww') );
/*
почему проходит значение '6' и как его исключить??
*/