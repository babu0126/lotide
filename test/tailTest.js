
const assertArraysEqual = require('../assertArraysEqual');
const { tail } = require('../tail');


const arr1 = ['happy', 'sad', 'delighted'];
const arr2 = ['sad', 'delighted'];

assertArraysEqual(tail(arr1,arr2),arr2);