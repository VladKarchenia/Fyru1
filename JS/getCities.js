'use strict'

const citiesMap = {
    0: {
        name: 'Дакка',
        population: 16820,
    },
    1: {
        name: 'Москва',
        population: 16710,
    },
    2: {
        name: 'Пекин',
        population: 20415,
    },
    3: {
        name: 'Мехико',
        population: 20400,
    },
    4: {
        name: 'Нью-Йорк',
        population: 21445,
    },
    5: {
        name: 'Сан-Паулу',
        population: 20850,
    }
};

const getCities = (citiesMap, order) => Object.values(citiesMap).sort((a, b) => order === 'ascending' ? a.population - b.population : b.population - a.population).map(({ name, population }) => `${name} - ${population}`).join(' , ');
getCities(citiesMap, 'ascending');

// метод с одной переменной в .map
const getCities = (citiesMap, order) => Object.values(citiesMap).sort((a, b) => order === 'ascending' ? a.population - b.population : b.population - a.population).map(city => city.name + ' - ' + city.population).join(' , ');
