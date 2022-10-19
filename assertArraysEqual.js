// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    return false;
  }

  for(let i = 0; i < array1.length; i ++) {
    if (array1[i] === array2[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};

// TEST CODE
assertArraysEqual(eqArrays([1,2,3],[1,2,3]), true);