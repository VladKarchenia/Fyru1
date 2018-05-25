"use strict"

const characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

let pluckName = characters.map(object => object['name']);
let pluckAge = characters.map(object => object['age']);
let pluck = (characters, property) => {
    if (property === 'name') {
        console.log(pluckName);
    } else if (property === 'age') {console.log(pluckAge)};
};

console.log(pluck(characters, 'name'));
console.log(pluck(characters, 'age'));


const array = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
    return mapped;
    }
console.log(map(array, 'name'));
    

const characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];
const pluck = (characters, prop) => prop === 'name' ? characters.map(person => person.name) : characters.map(person => person.age).join( , );
pluck(characters, 'age')
