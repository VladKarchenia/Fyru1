'use strict'

const characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

const pluck = (characters, key) => characters.map(obj => obj[key]);
console.log(pluck(characters, 'name'));
console.log(pluck(characters, 'age'));
