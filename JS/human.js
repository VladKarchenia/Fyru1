'use strict'

class Human {
    constructor(name = 'John', age = 0, height = 200) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        return `${this.name} , ${this.age} , ${this.height}`;
    }
    get getFirstName() {
        return `${this.name}`;
    }
}

let human = new Human();
let human1 = new Human("Коля", "23", "180");
let human2 = new Human("Даша", "19", "170");
let human3 = new Human("Ваня", "18", "192");
let human4 = new Human("Петя", "45", "178");
let human5 = new Human("Вася", "34", "197");
let human6 = new Human("Джон", "40", "168");
let human7 = new Human("Катя", "37", "160");
let human8 = new Human("Петя", "29", "200");
let human9 = new Human("Соня", "21", "172");
let human10 = new Human("Женя", "25", "175");

let humans = [
    human, human1, human2, human3, human4, human5, human6, human7, human8, human9, human10
];

console.log(humans);
console.log(human1.getFirstName)
console.log(human1.getInfo())

// использую функцию-конструктор и методы поместил в прототип

function Human(name = 'John', age = 0, height = 200) {
    this.name = name;
    this.age = age;
    this.height = height;
}

Object.defineProperties(Human.prototype, {
    getFirstName: {
        get: function() {return `${this.name}`;}
    }
})

Human.prototype.getInfo = function() {
    return `${this.name} , ${this.age} , ${this.height}`;
}

let human = new Human();
let human1 = new Human("Коля", "23", "180");
let human2 = new Human("Даша", "19", "170");
let human3 = new Human("Ваня", "18", "192");
let human4 = new Human("Петя", "45", "178");
let human5 = new Human("Вася", "34", "197");
let human6 = new Human("Джон", "40", "168");
let human7 = new Human("Катя", "37", "160");
let human8 = new Human("Петя", "29", "200");
let human9 = new Human("Соня", "21", "172");
let human10 = new Human("Женя", "25", "175");

let humans = [
    human, human1, human2, human3, human4, human5, human6, human7, human8, human9, human10
];

console.log(humans);
console.log(human1.getFirstName)
console.log(human1.getInfo())
