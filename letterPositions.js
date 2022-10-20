const assertArraysEqual = function(actual, expected) {
  let result = true;
  if (actual.length !== expected.length) return false;

  for (let i = 0; i < actual.length; i ++) {
    if (actual[i] === expected[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  if (result) {
    console.log(`✅✅✅ Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};
const letterPositions = function(string) {
  let results = {};
  //let arr = [];
  for (let index = 0; index < string.length; index ++) {
    let arr = [];
    if (!results[string[index]]) {
      arr.push(index);
      console.log(arr);
      results[string[index]] = arr;
    } else results[string[index]].push(index);
  }
  delete results[' '];
  return results;
};

const test = letterPositions('hello david');
console.log(test);
assertArraysEqual(test['e'],[1]);