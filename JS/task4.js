"use strict"
function fib(number) {
  if (number <= 100) {
    return number <= 1 ? number : fib(number - 1) + fib(number - 2);
  }
}
console.log( fib(22) );