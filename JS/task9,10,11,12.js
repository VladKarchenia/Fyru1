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
    alert(arr);
}
sortArray([42, 5, 0, 23, 9, -4]);

// Task 2
function sortDifArrays(arr) {
    function letSort(a, b) { // Сортировка массива от min к max.
        return (a - b);
    }
   const newArr = arr.reduce(function(a, b) {
       return a.concat(b.filter(i => a.indexOf(i) === -1)); // Конкатениция с дедупликацией массива.
   });
   newArr.sort(letSort);
   alert(newArr);
}
sortDifArrays([[3,4], [7,8], [1,2], [5,6], [1,7]]);

// Task 3
function getPositive(arr) {
    const positiveArr = arr.filter(function(positiveNum) {
        return positiveNum >= 0 && 1 / positiveNum !== -Infinity; // Добавление различия между 0 и -0.
    });
    alert(positiveArr);
}
getPositive([1,-54,-0,0,4,-4,-94]);

//Task 4
function sayHi(name) {
    let HiName = 'Hi, ' + name;
    alert(HiName);
    function makeCount() {
        let currentCount = 0;
        function resultCount(val) {
            currentCount += val;
        }
        return resultCount();
    }
    function resetCount() {
        const currentCount = 0;
    }

    let count = makeCount();
    let reset = resetCount();
}
sayHi('Vlad');
sayHi.count();
sayHi('Vasya');
sayHi('Otter');
sayHi.count();
sayHi.reset();
sayHi.count();

