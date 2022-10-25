const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE 1
const testCode1 = [1,2,3,4,5,6];
const testCode2 = [0,3,4,5,6,7,8];
const testCode3 = ['david', 'sam', 'andy'];
assertArraysEqual(middle(testCode1), [3,4]); // true
assertArraysEqual(middle(testCode2), [5]); // true
assertArraysEqual(middle(testCode3), ['sam']); // true

