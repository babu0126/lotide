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



let flattenArray = function(inputArray) {
  let outputArray = [];
  recursion (0, inputArray, outputArray);
  return outputArray;
};


let recursion = function(index, inputArray, outputArray) {
  if (index >= inputArray.length) return;
  if (Array.isArray(inputArray[index])) {
    recursion(0, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }
  recursion(index + 1, inputArray, outputArray);
};

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    console.log(`🛑🛑🛑 Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};

// Test Code 1
let prompt = [1,2,3,4,[5,6],[7,8],9,[10,11,12]];
assertArraysEqual(flattenArray(prompt), [1,2,3,4,5,6,7]);