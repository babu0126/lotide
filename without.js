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

const without = function (array, itemsToRemove) {
  let tempArray = array.filter(val => !itemsToRemove.includes(val));
  return tempArray;
};


const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    console.log(`🛑🛑🛑 Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};



// TEST CODE 1
let testCode = ['hello','world','lighthouse'];
assertArraysEqual(without(testCode, ['lighthouse']), ['hello','world']);
//TEST CODE 2
testCode = [1,2,3];
assertArraysEqual(without(testCode, ['1','2',3]), [1,2]);
