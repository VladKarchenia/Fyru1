'use strict';

// const arr = [{date: '10.01.2017'}, {date: '05.11.2016'}, {date: '21.13.2002'}];
// arr.sort((a, b) => {
//     a = a.date.split('.')
//     b = b.date.split('.')
//     return a[2] - b[2] || a[1] - b[1] || a[0] - b[0]
// });

// const arr = [{date: '10.01.2017'}, {date: '05.11.2016'}, {date: '21.13.2002'}]
// arr.forEach( item => {
//     const arrDate = item.date.split('.'),
//     date = new Date(Number(arrDate[2]), Number(arrDate[1]), Number(arrDate[0]))
//     item.time = date.getTime();
// })
// arr.sort((a, b) => a.time - b.time)
// let res = arr.map(item => ({date: item.date}))
// console.log(res)

const arr = [{date: '10.01.2017'}, {date: '05.11.2016'}, {date: '12.13.2002'}];
const getMs = val => Date.parse(val.replace(/\./g, '/'))
const dateCompare = ({ date: a}, { date: b }) => getMs(a) - getMs(b)
const arrSorted = arr.sort(dateCompare)

const arr = [{date: '10.01.2017'}, {date: '05.11.2016'}, {date: '12.13.2002'}];
arr.sort(({ date: a}, { date: b }) => Date.parse(a.replace(/\./g, '/')) - Date.parse(b.replace(/\./g, '/')))
