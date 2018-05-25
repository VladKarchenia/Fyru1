'use strict'

// стандартный расширил
Number.isOdd = num => num % 2 === 1;

// расширение через прототип (не пашет)
Number.prototype.isOdd = num => num % 2 === 1;
Number.isOdd(13)
