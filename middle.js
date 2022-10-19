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
  let result = eqArrays(actual, expected);
  if (result) {
    console.log(`🛑🛑🛑 Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};

const middle = function(array){
  let length = array.length;
  let result = [];
  if(length % 2 !== 0) {
    result.push(array[(length-1)/2]);
    return result;
  }
    else if (length <= 2) return [];
    else return array.slice((length/2)-1,(length/2)+1);
};

// TEST CODE 1
let testCode = ['hello','world','lighthouse'];
assertArraysEqual(middle(testCode), ['hello','world']);
//TEST CODE 2
testCode = [1,2,3];
assertArraysEqual(middle(testCode),[2]);
