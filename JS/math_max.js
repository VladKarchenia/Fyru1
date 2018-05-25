'use strict'

const maxNum = arr => Math.max.apply(null, arr);
maxNum([2,5,3,7,33,6,3,67,32]);

// через spread
const maxNum = arr => Math.max(...arr);
maxNum([2,5,3,7,33,6,3,67,32]);
