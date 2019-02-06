/* функция сортировка массива от мин к макс
функция приёма многоуровневого массива и сортировка его в одноуровневый по возрастанию
через метод filter отсортировать числа в массиве > 0
замыкание, функция говорящая hi новому пользователю (переданный ей аргумент) с подсчётом уникальных пользователей и функцией сброса счётчика */
"use strict"

// Task 1 
function sortArray(arr) {
    function letSort(a, b) { // Сортировка массива от min к max.
        return (a - b);
    }
    arr.sort(letSort);
    console.log(arr);
}
sortArray([42, 5, 0, 23, 9, -4]);

// лучше, по ECMA6
const sortArray = arr => arr.sort((a, b) => a - b);
sortArray([42, 5, 0, 23, 9, -4]);

// Task 2
function flattenArray(arr) {
   const newArr = arr.reduce(function(a, b) {
       return a.concat(b.filter(i => a.indexOf(i) === -1)); // Конкатениция с дедупликацией массива.
   });
   newArr.sort((a,b) => a - b);
   console.log(newArr);
}
sortDifArrays([[3,4], [7,8], [1,2], [5,6], [1,7]]);

//лучше, по ECMA6
const flattenArray = arr => arr.reduce((acc, array) => acc.concat(array));
flattenArray([[3,4], [7,8], [1,2], [5,6], [1,7]]);


// Task 3
function getPositive(arr) {
    const positiveArr = arr.filter(function(positiveNum) {
        return (positiveNum >= 0) && (1 / positiveNum !== -Infinity); // Добавление различия между 0 и -0.
    });
    alert(positiveArr);
}
getPositive([1,-54,-0,0,4,-4,-94]);

//Task 4

const sayHiCreator = () => {
    let counter = 0
    const sayHi = name => {
        counter++
        return `Hi, ${name}`
    }
    sayHi.count = () => counter
    sayHi.reset = () => { counter = 0 }
    return sayHi
}
var sayHi = sayHiCreator()
sayHi('suka')
sayHi.count()


const sayHiCreator = () => {
    let counter = 0
    return {
        sayHi: name => { 
            counter++;
            return `Hi, ${name}`
        },
        count: () => counter,
        reset: () => { counter = 0 },
    }
}
var greeter = sayHiCreator()
greeter.sayHi('sss')
greeter.count()