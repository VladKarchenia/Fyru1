'use strict'

const count = object => Object.keys(object).length;
var a = {a: 1, b: 2};
console.log(count(a));
var b = function () {};
console.log(count(b));
var c = [1, 2, 3];
console.log(count(c));
var d = [];
d[100] = 1;
console.log(count(d));

// 2ой вариант, мне нравится больше первый.

function count(object) {
    var length = 0;
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            ++length;
        }
    }
    return length;
};
var a = {a: 1,b: 2};
console.log(count(a));
var b = function () {};
console.log(count(b));
var c = [1, 2, 3];
console.log(count(c));
var d = [];
d[100] = 1;
console.log(count(d));
