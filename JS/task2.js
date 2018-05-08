"use strict"
function UtopianTree(cycles) {
  let height = 1, n = 0;
  while (n < cycles) {
    height = n % 2 === 0 ? height * 2 : height + 1;
    n++;
  }
  return height;
}
console.log( UtopianTree(6) );