const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};



module.exports = assertArraysEqual;